import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button = props => {
  const ButtonWrapper = styled.div`
    flex-grow: 1;
    button {
      display: flex;
      justify-content: center;
      padding: 0.3rem 0.8rem;
      background-color: #333;
      color: ${props.color || '#6e6e6e'};
      border: none;
      border-right: 1px solid #287878;
      width: 100%;
      word-wrap: none;
      outline: none;

      &:hover {
        background-color: #414141;
      }
    }
    i {
      font-size: 1.1rem;
      margin-right: ${props.space ? '.4rem' : 0};
    }
  `

  return (
    <ButtonWrapper>
      <button onClick={props.onClick}>
        <i className={props.icon} />
        {props.text}
      </button>
    </ButtonWrapper>
  )
}

Button.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string,
  space: PropTypes.any,
  color: PropTypes.string,
  onClick: PropTypes.any
}

export default Button
