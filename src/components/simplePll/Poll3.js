import React, {useState, useEffect} from 'react'
import Question2 from './Question2'
import '../../styles/questions/poll.scss'

const Poll3 = () => {
  const [tab, setTab] = useState([
    {
      inquest: 'Les traveaux concernent?',
      answers: Array('Maison', 'Appartement'),
      answer: '',
    },
    [
      {
        inquest: 'Etes vous proprietaire?',
        answers: Array('Oui', 'Non'),
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
        inquest: "Montant annuel de l'energie?",
        answers: [],
        answer: '',
      },
    ],
    [
      {
        inquest: "Coordonnee du gestionnaire de l'immeuble?",
        answers: [],
        answer: '',
      },
    ],
  ]) /** tab is the structure having all the questions and answers of the poll */

  const [currentTab, setCurrentTab] = useState([])
  const [answers, setAnswers] = useState([]) // this structure possess only the answers chose by thte user
  const [step, setStep] = useState(0) // this know which step the user is
  const [modified, setModified] = useState(false) // is used when the poll is loaded for the first time
  const [onlyNumber, setOnlyNumber] = useState(false) // this data is true when the question requires only a number as answer
  const [loaded, setLoaded] = useState(false)

  /**
   * Only run at the beggining of the app, it just add to currentTab the first question
   * */
  useEffect(() => {
    let tmp = [tab[0]]
    setCurrentTab((t) => (t = tmp))
    return () => {
      console.log('clear')
    }
  }, [])

  /**
   * When an answer is clicked by the user this update the currentTab is modified
   * @param {Array} reponse there is the answer and the position on currentTab t be modified
   * */
  const getAnswer = (response) => {
    if (response[0] === 0) {
      console.log('inside')
      switch (response[1]) {
        case 'Maison':
          console.log('maison here')
          let tmp = [tab[0], ...tab[1]]
          tmp[0].answer = 'Maison'
          tmp[response[0]].answer = response[1]
          setCurrentTab((t) => (t = tmp))
          console.log(currentTab)
          break
        case 'Appartement':
          console.log('appartement here')
          let tmp2 = [tab[0], ...tab[2]]
          tmp2[0].answer = 'Appartement'
          tmp2[response[0]].answer = response[1]
          setCurrentTab((t) => (t = tmp2))
          console.log(currentTab)
          break

        default:
          console.log(response)
          console.log('nothing here')
          break
      }

      console.log('check answers')
      console.log(answers)

      console.log('1')
    } else {
      let tmp = []
      currentTab.map((el) => (tmp = [...tmp, el]))
      // currentTab.forEach((el, iter) => {
      //   tmp[iter].answer = el.answer
      // })
      tmp[response[0]].answer = response[1]

      setCurrentTab(tmp)
      console.log('2')
      console.log(tab)
    }
  }

  /**Is triggered when currentTab is modified */
  useEffect(() => {
    console.log('3')
    let tmp = []

    currentTab.forEach((el, iter) => {
      tmp = [
        ...tmp,
        {
          representation: (
            <Question2
              question={el.inquest}
              answers={el.answers}
              fetchAnswer={getAnswer}
              iter={iter}
              answer={el.answer}
              isyNumber={onlyNumber}
            />
          ),
        },
      ]
    })

    setAnswers((ans) => (ans = tmp))

    console.log(
      ` on the use effect when surrent tab is modified the value of step is :  ${step}`
    )
  }, [currentTab])

  const scrollListener = (e) => {
    console.log('e.target.srollTop')
  }

  const forward = () => {
    console.log(` i forward :)  ${answers.length} and ${step}`)
    if (step < answers.length - 1) setStep((s) => (s = step + 1))
  }

  const backward = () => {
    console.log(` i backward :)  ${answers.length} and ${step}`)
    if (step > 0) setStep(step - 1)
  }

  const reassignTab = (arr, answer) => {}

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
      <div style={{padding: '20%'}}>
        {currentTab.map((el) => (
          <>
            <li>{el.inquest}</li>
            <li>{el.answer}</li>
          </>
        ))}
      </div>
    </section>
  )
}
export default Poll3
