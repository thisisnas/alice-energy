import React, {useState, useEffect} from 'react'
import Question from './Question'

const Poll = () => {
  const [data, setData] = useState([
    {
      inquest: 'Les traveaux concernent?',
      answers: Array('Maison', 'Appartement'),
    },
    {
      inquest: 'Quelle est la date de construction?',
      answers: Array('Moins de 2 ans', 'Entre 2 et 15 ans', 'Plus de 15 ans'),
    },
    {
      inquest: 'Energie du chauffage actuelle?',
      answers: Array(
        'Fioul',
        'Electrique',
        'Gaz',
        'Bois',
        'Charbon',
        'Pompe a Chaleur'
      ),
    },
    {inquest: 'Quelle est la surface concerner en m2', answers: Array('')},
    {
      inquest: 'Quelle equipement de chauffage souhaitez vous?',
      answers: Array(''),
    },
  ])
  const [results, setResults] = useState([])

  useEffect(() => {
    setResults(() => {
      data.map((item) => results.concat({question: item.inquest, result: ''}))
    })

    return () => {
      console.log('cleanup')
    }
  }, [])

  return (
    <div>
      {React.Children.toArray(
        data.map((item) => {
          return <Question inquest={item.inquest} answers={item.answers} />
        })
      )}
    </div>
  )
}

export default Poll
