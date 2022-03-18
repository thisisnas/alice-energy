import React, {useState, useEffect} from 'react'
import Question2 from './Question2'
import '../../styles/questions/poll.scss'

const Poll2 = () => {
  const [tab, setTab] = useState([
    {
      inquest: 'Les traveaux concernent?',
      answers: Array('Maison', 'Appartement'),
      answer: '',
    },
    {
      inquest: 'Quelle est la date de construction?',
      answers: Array('Moins de 2 ans', 'Entre 2 et 15 ans', 'Plus de 15 ans'),
      answer: '',
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
      answer: '',
    },
    {
      inquest: 'Quelle est la surface concerner en m2',
      answers: [],
      answer: '',
      isyNumber: true,
    },
    {
      inquest: 'Quelle equipement de chauffage souhaitez vous?',
      answers: [],
      answer: '',
    },
    ['we', 'we'],
  ]) /** tab is the structure having all the questions and answers of the poll */

  const [answers, setAnswers] = useState([]) // this structure possess only the answers chose by thte user
  const [step, setStep] = useState(0) // this know which step the user is
  const [modified, setModified] = useState(false) // is used when the poll is loaded for the first time
  const [onlyNumber, setOnlyNumber] = useState(false) // this data is true when the question requires only a number as answer
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setModified(true)
    tab.map((el, index) => {
      console.log(Array.isArray(el))
      if (el.isyNumber) {
        setOnlyNumber(true)
      } else {
        setOnlyNumber(false)
      }
      setAnswers((ans) => [
        ...ans,
        {
          representation: (
            <Question2
              question={el.inquest}
              answers={el.answers}
              fetchAnswer={getAnswer}
              iter={index}
              answer={el.answer}
              isyNumber={onlyNumber}
            />
          ),
        },
      ])
    })

    return () => {
      setAnswers((ans) => [])
      console.log('cleans')
    }
  }, [])

  const getAnswer = (response) => {
    let tmp = [...tab]

    tmp[response[0]].answer = response[1]
    setTab((t) => (t = tmp))
  }

  useEffect(() => {
    if (modified) {
      let tmp = [...answers]
      let res = tab[step].answer
      console.log(res)
      tmp[step] = {
        representation: (
          <Question2
            question={tab[step].inquest}
            answers={tab[step].answers}
            fetchAnswer={getAnswer}
            iter={step}
            answer={tab[step].answer}
          />
        ),
      }

      setAnswers((t) => [...tmp])
    }
  }, [tab])

  const scrollListener = (e) => {
    console.log('e.target.srollTop')
  }

  const forward = () => {
    if (step < answers.length - 1) setStep(step + 1)
  }

  const backward = () => {
    if (step > 0) setStep(step - 1)
  }

  return (
    <section onScroll={scrollListener}>
      {answers.length && answers[step].representation}
      {step !== 0 && (
        <button onClick={backward} className='btn'>
          Precedent
        </button>
      )}
      {step !== answers.length - 1 &&
        (step > 0 ? (
          <button onClick={forward} className='btn btn-suivant'>
            Suivant
          </button>
        ) : (
          <button onClick={forward} className='btn'>
            Suivant
          </button>
        ))}
    </section>
  )
}

export default Poll2
