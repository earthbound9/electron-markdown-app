import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import SideBar from './SideBar'
import TextEditor from './TextEditor'
import { ipcRenderer, remote } from 'electron'
const fs = remote.require('fs')

injectGlobal`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  

  html {
    box-sizing: border-box;
  }

  body {
    color: white;
    background-color: #333;
  }
`

const TextWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`

class App extends React.Component {
  state = {
    fileList: [],
    currentFile: '',
    currentKey: 0,
    value: '',
    nameFile: false,
    inputValue: ''
  }

  handleBeforeChange = (editor, data, value) => this.setState({ value })

  handleInput = e => this.setState({ inputValue: e.target.value })

  handleInputOpen = () =>
    this.setState(preStat => ({ nameFile: !preStat.nameFile }))

  componentDidMount () {
    global
      .fetch('../markdown.json')
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          fileList: data.files
        })
      )
      .catch(err => console.log(err))

    fs.readFile('lastFile.json', (err, data) => {
      if (err) console.log(err)
      const { currentFile, currentKey, value } = JSON.parse(data)
      this.setState({ currentFile, currentKey, value })
    })
  }

  handleFileSave = () => {
    const { currentFile, currentKey, value } = this.state
    const lastFile = { currentFile, currentKey, value }

    fs.writeFile(
      `markdown/${currentFile}.md`,
      value,
      err => err && console.log(err)
    )

    fs.writeFile(
      'lastFile.json',
      JSON.stringify(lastFile),
      err => err && console.log(err)
    )
  }

  handleFileSelection = e => {
    const currentFile = e.currentTarget.firstElementChild.outerText
    const currentKey = parseInt(e.currentTarget.id)
    const value = fs
      .readFileSync(`markdown/${currentFile}.md`, 'utf8')
      .toString()

    this.setState({ currentFile, currentKey, value })

    const lastFile = { currentFile, currentKey, value }

    fs.writeFile(
      'lastFile.json',
      JSON.stringify(lastFile),
      err => err && console.log(err)
    )
  }

  handleSubmit = e => {
    e.preventDefault()

    const date = new Date()
    const dateFormat = date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })

    this.setState({
      nameFile: false,
      fileList: this.state.fileList.concat({
        name: this.state.inputValue,
        date: dateFormat
      })
    })

    ipcRenderer.send('handle:createFile', this.state.inputValue)
  }

  render () {
    return (
      <TextWrapper>
        <SideBar
          selected={this.state.currentKey}
          currentFile={this.handleFileSelection}
          handleSubmit={this.handleSubmit}
          handleInput={this.handleInput}
          handleInputOpen={this.handleInputOpen}
          fileList={this.state.fileList}
          nameFile={this.state.nameFile}
          currentKey={this.state.currentKey}
        />
        <TextEditor
          text={this.state.value}
          save={this.handleFileSave}
          change={this.handleChange}
          beforeChange={this.handleBeforeChange}
        />
      </TextWrapper>
    )
  }
}

export default App
