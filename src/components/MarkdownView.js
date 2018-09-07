import React from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'
import 'github-markdown-css/github-markdown.css'

const Wrapper = styled.div`
  width: 50%;
  height: 100vh;
  border-left: 3px solid #06e8dc;
  background-color: white;
`

const MarkdownView = props => {
  return (
    <Wrapper className='markdown-body'>
      <ReactMarkdown source={props.mark} />
    </Wrapper>
  )
}

MarkdownView.propTypes = {
  mark: PropTypes.string
}

export default MarkdownView
