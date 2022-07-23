import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import '../../styles/completed.scss'

function Completed({history}) {
  return (
    <div className='container-completed'>
      <h1>Merci de nous avoir exprimer votre interet</h1>
      <h2>Un de nos agent vous contactera sous peu</h2>

      <Link to='/' className='link-btn item-completed'>
        Page d'accueil
      </Link>
    </div>
  )
}

export default Completed
