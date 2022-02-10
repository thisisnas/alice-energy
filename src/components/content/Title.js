import React from 'react'
import {NavLink as Link} from 'react-router-dom'
import '../../styles/title.scss'

const Title = () => {
  return (
    <div className='title'>
      <h1>Maintenant une pompe a chaleur </h1>
      <h3>
        Il y a un truc a dire a propos des pompes a chaleur car pour linstant je
        ne sais pas quoi dire
      </h3>
      <div>
        <Link to='/poll'> Enqueter</Link>
      </div>
    </div>
  )
}

export default Title
