import React from 'react'
import PropTypes from 'prop-types'
import MarkdownView from './MarkdownView'
import MarkdownTools from './MarkdownTools'
import styled from 'styled-components'
import Editor from './Editor'

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`
const EditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const TextEditor = props => {
  return (
    <Wrapper>
      <EditorWrapper>
        <MarkdownTools save={props.save} />
        <Editor text={props.text} beforeChange={props.beforeChange} />
      </EditorWrapper>
      <MarkdownView mark={props.text} />
    </Wrapper>
  )
}

TextEditor.propTypes = {
  text: PropTypes.string,
  beforeChange: PropTypes.func,
  save: PropTypes.func
}

export default TextEditor
