import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Controlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/theme/rubyblue.css'

const CodeWrapper = styled.div`
  height: 100%;

  .CodeMirror {
    height: 100%;
  }
`

const Editor = props => {
  return (
    <CodeWrapper>
      <CodeMirror
        className='CodeMirror'
        value={props.text}
        options={{
          mode: 'markdown',
          theme: 'rubyblue',
          lineNumbers: true
        }}
        onBeforeChange={props.beforeChange}
      />
    </CodeWrapper>
  )
}

Editor.propTypes = {
  text: PropTypes.string,
  beforeChange: PropTypes.func
}

export default Editor
