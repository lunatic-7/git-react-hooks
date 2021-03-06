import React, { Component } from 'react'

class TodoFilterItem extends Component {
  constructor(props) {
    super(props)
    this.handleFilter = this.handleFilter.bind(this)
  }

  handleFilter() {
    const { name, filterTodos } = this.props
    filterTodos(name)
  }

  render() {

    const { name, filter = 'all' } = this.props
    const style = {
      color: "blue",
      cursor: "pointer",
      fontWeight: (filter === name) ? 'bold' : 'normal'
    }

    return (
      <span style={style} onClick={this.handleFilter}>{name}</span>
    )
  }
}

export default class TodoFilter extends Component {
  render() {
    return (
      <div>
        <TodoFilterItem  {...this.props} name="all" />{"/"}
        <TodoFilterItem  {...this.props} name="active" />{"/"}
        <TodoFilterItem  {...this.props} name="completed" />
      </div>
    )
  }
}