import React from 'react'
//import TodoItem from './TodoItem'

class InputTodo extends React.Component {
  state = {
    title: '',
  }

  onChange = (e) => {
    this.setState({
      title: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title)
      this.setState({
        title: '',
      })
    } else {
      alert('Please input an item.')
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='form-container'>
        <input
          className='input-text'
          type='text'
          placeholder='Add Item...'
          value={this.state.title}
          onChange={this.onChange}
        />
        <button className='input-submit'>Submit</button>
      </form>
    )
  }
}

export default InputTodo
