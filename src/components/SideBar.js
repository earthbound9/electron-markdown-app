import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Item = styled.div`
  border-bottom: 2px solid grey;
  padding: 1rem 0 1rem 0;
  cursor: pointer;
  transition: transform 0.3s, border-bottom-color 0.5s, border-left 0.4s,
    padding-left, 0.4s;

  &:hover {
    transform: scale(1.05);
    border-bottom-color: #06e8dc;
  }

  h3 {
    margin-bottom: 0.9rem;
    margin-left: 0.3rem;
  }

  p {
    margin-left: 0.3rem;
  }

  &.current {
    border-left: 3px solid #06e8dc;
    padding-left: 10px;

    &:hover {
      transform: none;
      border-bottom-color: grey;
    }
  }
`

const Wrapper = styled.div`
  height: 100vh;
  min-width: 200px;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #06e8dc;
  color: white;

  button {
    margin: 15px auto;
    width: 150px;
    height: 40px;
    color: white;
    background-color: #333;
    border: 1.4px solid #06e8dc;
    border-radius: 5px;
    outline: none;
  }

  input {
    width: 100%;
    border: none;
    border-bottom: 1px solid #06e8dc;
    height: 30px;
    background-color: #333;
    color: white;
    outline: none;
  }
`

const SideBar = props => {
  return (
    <Wrapper>
      <button onClick={props.handleInputOpen}>+ New Entry</button>

      {props.nameFile && (
        <form onSubmit={props.handleSubmit}>
          <input
            onChange={props.handleInput}
            placeholder='File Name'
            autoFocus
          />
        </form>
      )}

      <div>
        {props.fileList.map((file, key) => {
          return (
            <Item
              key={key}
              id={key}
              onClick={props.currentFile}
              className={props.currentKey === key && 'current'}
            >
              <h3>{file.name}</h3>
              <p>{file.date}</p>
            </Item>
          )
        })}
      </div>
    </Wrapper>
  )
}

SideBar.propTypes = {
  currentFile: PropTypes.func,
  fileList: PropTypes.array,
  handleInput: PropTypes.func,
  handleInputOpen: PropTypes.func,
  handleSubmit: PropTypes.func,
  nameFile: PropTypes.bool,
  currentKey: PropTypes.number
}

export default SideBar
