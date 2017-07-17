import React from 'react'
import {Route, Switch} from 'react-router-dom'
import './Main.css'

import Bowl from './icons/bowl.png'
import IngredientsForm from './IngredientsForm'

const Main = (props) => {
  return (
    <div className='Main'>
      <ul className='ingredients-header'>
        <li>
          <img className='bowl-icon' src={Bowl} alt="bowl"/>
        </li>
        <li>
          <h3>Ingredients!</h3>
        </li>
      </ul>
      <IngredientsForm />
    </div>
  )
}

export default Main