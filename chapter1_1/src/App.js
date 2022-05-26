import React from "react";

class myName extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: "" }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ name: e.target.value })
  }

  render() {
    // Using Destructuring
    const { name } = this.state
    // Ordinary Method (Without Destructuring)
    // const name = this.state.name  // means same as upper line of code
    return (
      <div>
        <h1>My name is: {name}</h1>
        <input type="text" value={name} onChange={this.handleChange} />
      </div>
    )
  }
}

export default myName