import React, {useState, useEffect} from 'react'
import Question2 from './Question2'
import UserInformation from './UserInformation'
import '../../styles/questions/poll.scss'

import axios from 'axios'

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
        inquest: "Montant annuel de l'energie?",
        answers: [],
        answer: '',
      },
      {
        inquest: "Coordonnee du gestionnaire de l'immeuble?",
        answers: [],
        answer: '',
      },
    ],
    {
      name: '',
      surname: '',
      address: '',
      city: '',
      phone: '',
    },
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

  /**-------------------------------------------------------------------------------------------------------- */

  /**
   * ?function : getAnswer
   * When an answer is clicked by the user this update the currentTab is modified
   * @param {Array} reponse there is the answer and the position on currentTab t be modified
   * */
  const getAnswer = (response) => {
    if (response[0] === 0) {
      switch (response[1]) {
        case 'Maison':
          let tmp = [tab[0], ...tab[1], tab[3]]
          tmp[0].answer = 'Maison'
          tmp[response[0]].answer = response[1]
          setCurrentTab((t) => (t = tmp))

          break
        case 'Appartement':
          let tmp2 = [tab[0], ...tab[2], tab[3]]
          tmp2[0].answer = 'Appartement'
          tmp2[response[0]].answer = response[1]
          setCurrentTab((t) => (t = tmp2))

          break

        default:
          console.log(response)

          break
      }
    } else {
      let tmp = []
      currentTab.map((el) => (tmp = [...tmp, el]))
      tmp[response[0]].answer = response[1]

      setCurrentTab(tmp)
    }
  }

  /**-------------------------------------------------------------------------------------------------------- */

  /**
   * ? function : getInfo
   * this function will select the las child of currentTab which
   * are the informations about the user, it modify the info
   * as the user is filling up the form.
   * @param {Array} info which are the value modified by the user
   */
  const getInfo = (info) => {
    let tmp = currentTab[currentTab.length - 1]
    let tmp2 = [...currentTab]
    tmp2.pop()
    tmp[info[0]] = info[1]
    tmp2 = [...tmp2, tmp]
    setCurrentTab((t) => (t = tmp2))
    setLoaded(Object.values(tmp).every((el) => el !== ''))
    console.log('check tmp :')
    console.log(loaded)
  }

  /**-------------------------------------------------------------------------------------------------------- */

  /**Is triggered when currentTab is modified and update the array answers for the view*/
  useEffect(() => {
    let tmp = []

    currentTab.forEach((el, iter) => {
      if (typeof el.name == 'undefined') {
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
      } else {
        tmp = [
          ...tmp,
          {
            representation: (
              <UserInformation
                name={el.name}
                surname={el.surname}
                address={el.address}
                city={el.city}
                phone={el.phone}
                fetchInfo={getInfo}
              />
            ),
          },
        ]
      }
    })

    setAnswers((ans) => (ans = tmp))
  }, [currentTab])

  /**-------------------------------------------------------------------------------------------------------- */

  //?OnSubmit

  const onSubmit = async () => {
    try {
      const res = await axios.get('/save').then(() => {
        console.log('the clicked as been done')
      })
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  /**-------------------------------------------------------------------------------------------------------- */

  const scrollListener = (e) => {
    console.log('e.target.srollTop')
  }

  /**-------------------------------------------------------------------------------------------------------- */

  const forward = () => {
    if (step < answers.length - 1) setStep((s) => (s = step + 1))
    console.log(answers)
    console.log(step, answers.length)
    if (step === answers.length - 2) {
      setLoaded(
        Object.values(currentTab[currentTab.length - 1]).every(
          (el) => el !== ''
        )
      )
    }
  }

  /**-------------------------------------------------------------------------------------------------------- */

  const backward = () => {
    if (step > 0) setStep(step - 1)
    setLoaded(false)
  }

  /**-------------------------------------------------------------------------------------------------------- */

  return (
    <section onScroll={scrollListener}>
      <div className='questions grid-container'>
        <div>{answers.length && answers[step].representation}</div>
        <div className='img'></div>
      </div>
      <div>
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

        {loaded && (
          <button className='btn btn-suivant appear' onClick={onSubmit}>
            Valider
          </button>
        )}
      </div>
    </section>
  )
}
export default Poll3
