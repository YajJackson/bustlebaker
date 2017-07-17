import React from 'react'
import {Route, Switch} from 'react-router-dom'
import './Main.css'

import Bowl from './icons/bowl.png'
import IngredientsForm from './IngredientsForm'

const Main = (props) => {
  return (
    <div className='Main'>
      <IngredientsForm />
    </div>
  )
}

export default Main