import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import './IngredientsForm.css'

class IngredientsForm extends Component {
  state = {
    ingredient: '',
  }

  render() {
    return (
      <form className='ingredient-form'>
        <input 
          type="text"
          /*value={this.state.ingredient}*/
        />
        <button>Add</button>
      </form>
    )
  }
}

export default IngredientsForm