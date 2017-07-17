import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import './IngredientsForm.css'

class IngredientsForm extends Component {
  state = {
    ingredient: '',
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.setState({ingredient:''})
  }

  handleChange = (ev) => {
    this.setState({
      ingredient: ev.target.value
    })
  }

  render() {
    return (
      <form 
        className='ingredient-form'
        onSubmit={this.handleSubmit}
      >
        <input 
          type="text"
          required='True'
          value={this.state.ingredient}
          onChange={this.handleChange}
        />
        <button>Add</button>
      </form>
    )
  }
}

export default IngredientsForm