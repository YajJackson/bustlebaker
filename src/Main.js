import React from 'react'
import {Route, Switch} from 'react-router-dom'
import './Main.css'

import IngredientsForm from './IngredientsForm'

const Main = (props) => {
  return (
    <div className='Main'>
      <h1>Main Header</h1>
      <IngredientsForm />
    </div>
  )
}

export default Main