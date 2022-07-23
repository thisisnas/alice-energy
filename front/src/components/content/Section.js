import React from 'react'
import '../../styles/section.scss'

function Section({text, picture, intervert}) {
  return (
    <>
      {intervert ? (
        <section className='display-article-intervert'>
          <img src={picture} />
          {typeof text == Object ? <>{text}</> : <p>{text}</p>}
        </section>
      ) : window.screen.width > 1200 ? (
        <section className='display-article'>
          {typeof text == Object ? <>{text}</> : <p>{text}</p>}
          <img src={picture} />
        </section>
      ) : (
        <section className='display-article-intervert'>
          <img src={picture} />
          {typeof text == Object ? <>{text}</> : <p>{text}</p>}
        </section>
      )}
    </>
  )
}

export default Section
