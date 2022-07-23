import React from 'react'
import {NavLink as Link} from 'react-router-dom'
import '../../styles/title.scss'

const Title = () => {
  return (
    <header className='title'>
      <h1>Maintenant une pompe à chaleur pour 1€</h1>
      <h3>
        Aujourd’hui grâce aux aides actuel, laissez nous vous aider a installer
        pour 1€ symbolique une pompe a chaleur qui vous fera économiser jusque
        30% sur votre facture d’énergie
      </h3>
      <div>
        <Link to='/poll'> Enqueter</Link>
      </div>
    </header>
  )
}

export default Title
