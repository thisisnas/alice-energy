import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react'
import {
  MdCheckBoxOutlineBlank as Blank,
  MdCheckBox as Checked,
} from 'react-icons/md'

const Box = forwardRef(({proposition, sendAnswer}, ref) => {
  const [answer, SetAnswer] = useState('')
  const [isChecked, setIsChecked] = useState(false)

  useImperativeHandle(
    ref,
    () => {
      const setFalse = () => {
        setIsChecked(false)
      }
    },
    []
  )

  const handleClick = (e) => {
    e.preventDefault()
    setIsChecked(() => !isChecked)
    sendAnswer(proposition)
  }

  return (
    <>
      <div onClick={handleClick}>
        {isChecked ? <Checked /> : <Blank />}
        {proposition}
      </div>
    </>
  )
})

export default Box
