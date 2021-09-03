import React from 'react'

import { default as TodoList } from './TodoList'
import { default as Header } from './Header'

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Setup Dev Environment',
        completed: true,
      },
      {
        id: 2,
        title: 'Develop Website and Add Content',
        completed: false,
      },
      {
        id: 3,
        title: 'Deploy to Live Server',
        completed: false,
      },
    ],
  }

  handleChange = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      }),
    })
  }

  render() {
    return (
      <div>
        <Header />
        <TodoList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
        />
      </div>
    )
  }
}

export default TodoContainer
