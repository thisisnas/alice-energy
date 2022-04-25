import React from 'react'
import '../../styles/questions/userInformation.scss'

const UserInformation = ({name, surname, address, city, phone, fetchInfo}) => {
  const throwInfo = (e) => {
    fetchInfo([e.target.name, e.target.value])
  }
  return (
    <section className='container'>
      <label>
        <div>Prenom</div>
        <input onChange={throwInfo} type='text' name='name' value={name} />
      </label>
      <label>
        <div>Nom</div>
        <input
          onChange={throwInfo}
          type='text'
          name='surname'
          value={surname}
        />
      </label>
      <label>
        <div> Adresse</div>
        <input
          onChange={throwInfo}
          type='text'
          name='address'
          value={address}
        />
      </label>
      <label>
        <div>Ville</div>
        <input onChange={throwInfo} type='text' name='city' value={city} />
      </label>
      <label>
        <div>Téléphone</div>
        <input onChange={throwInfo} type='text' name='phone' value={phone} />
      </label>
    </section>
  )
}

export default UserInformation
