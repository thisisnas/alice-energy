import React, {useState, useRef, createRef, useEffect} from 'react'
import {
  MdCheckBoxOutlineBlank as Blank,
  MdCheckBox as Checked,
} from 'react-icons/md'
import Box from './Box'

import '../../styles/questions/question.scss'

const Question = ({inquest, answers, children}) => {
  const [answer, setAnswer] = useState('')
  const [caseNumber, setCaseNumber] = useState()
  const [isChecked, setIsChecked] = useState(Array(answers.length).fill(false))

  const refs = useRef(Array(answers.length).fill(createRef()))
  const testref = useRef()
  const getAnswer = (result) => {
    setAnswer(result)
  }

  useEffect(() => {
    refs.current.map((el) => {
      el.setFalse(answer)
    })
  }, [answer])

  return (
    <section className='section'>
      <h2 className='query'>{inquest}</h2>
      {answers.map((item, i) => {
        return (
          <>
            <Box
              proposition={item}
              sendAnswer={getAnswer}
              ref={(el) => {
                refs.current[i] = el
              }}
            />
          </>
        )
      })}
    </section>
  )
}

export default Question
