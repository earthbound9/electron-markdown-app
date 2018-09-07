import React from 'react'
import Button from './Button'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 100%;
`

const MarkdownTools = props => {
  return (
    <Wrapper>
      <Button icon='fa fa-header' />
      <Button icon='fa fa-bold' />
      <Button icon='fa fa-italic' />
      <Button icon='fa fa-link' />
      <Button icon='fa fa-picture-o' />
      <Button icon='fa fa-list-ol' />
      <Button icon='fa fa-list-ul' />
      <Button icon='fa fa-list-ul' />
      <Button icon='fa fa-code' />
      <Button icon='fa fa-quote-right' />
      <Button icon='fa fa-arrows-h' />
      <Button icon='fa fa-strikethrough' />
      <Button icon='fa fa-table' />
      <Button icon='fa fa-check-square-o' />
      <Button
        space
        color='#1ad063'
        icon='fa fa-floppy-o'
        text='Save'
        onClick={props.save}
      />
    </Wrapper>
  )
}

MarkdownTools.propTypes = {
  save: PropTypes.func
}

export default MarkdownTools
