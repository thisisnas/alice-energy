import {useState} from 'react'
import '../../styles/questions/userInformation.scss'

const UserInformation = ({
  name,
  surname,
  address,
  city,
  phone,
  fetchInfo,
  isyNumber,
}) => {
  const [numberCSS, getNumberCSS] = useState(false)

  const checkNumber = (e) => {
    if (isNaN(e.target.value)) {
      getNumberCSS(true)
    } else {
      getNumberCSS(false)
    }
    throwInfo(e)
  }

  const throwInfo = (e) => {
    fetchInfo([e.target.name, e.target.value])
  }
  return (
    <section className='container'>
      <label>
        <div>Prenom</div>
        <input
          onChange={throwInfo}
          type='text'
          name='name'
          value={name}
          className='input-style'
        />
      </label>
      <label>
        <div>Nom</div>
        <input
          onChange={throwInfo}
          type='text'
          name='surname'
          value={surname}
          className='input-style'
        />
      </label>
      <label>
        <div> Adresse</div>
        <input
          onChange={throwInfo}
          type='text'
          name='address'
          value={address}
          className='input-style'
        />
      </label>
      <label>
        <div>Ville</div>
        <input
          onChange={throwInfo}
          type='text'
          name='city'
          value={city}
          className='input-style'
        />
      </label>
      <label>
        <div>Téléphone</div>
        <input
          onChange={checkNumber}
          type='text'
          name='phone'
          value={phone}
          className={numberCSS ? 'input-style red-error' : 'input-style'}
        />
        {numberCSS && (
          <label className='red-color'> Ce champ necessite un numero</label>
        )}
      </label>
    </section>
  )
}

export default UserInformation
