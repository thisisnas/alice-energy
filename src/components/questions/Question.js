import React, {useState, useRef, createRef, useEffect} from 'react'
import {
  MdCheckBoxOutlineBlank as Blank,
  MdCheckBox as Checked,
} from 'react-icons/md'
import Box from './Box'

import '../../styles/question.scss'

const Question = ({inquest, answers, children}) => {
  const [answer, setAnswer] = useState('')
  const [caseNumber, setCaseNumber] = useState()
  const [isChecked, setIsChecked] = useState(Array(answers.length).fill(false))

  const refs = useRef(Array(answers.length).fill(createRef()))

  const getAnswer = (result) => {
    setAnswer(result)
  }
  const handleClick = (e) => {
    e.preventDefault()

    setCaseNumber(e.target.getAttribute('get-iteration'))
    setAnswer(e.target.getAttribute('get-el'))
  }

  useEffect(() => {
    console.log(caseNumber)
    console.log(answer)
    isChecked[caseNumber] = true
    console.log(isChecked)
  }, [answer])
  return (
    <section>
      <h2>{inquest}</h2>
      {answers.map((item, i) => {
        return (
          <div onClick={handleClick} get-el={item} get-iteration={i}>
            <>
              {isChecked[i] ? <Checked /> : <Blank />}
              {item}
            </>
            <Box proposition={item} sendAnswer={getAnswer} />
          </div>
        )
      })}
    </section>
  )
}

export default Question
