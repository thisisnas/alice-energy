import React from 'react'
import '../../styles/questions/question.scss'

const Question2 = ({
  question,
  answers,
  iter,
  fetchAnswer,
  answer,
  isNumber,
}) => {
  const throwAnswer = (e) => {
    if (e.target.value) {
      fetchAnswer([iter, e.target.value])
    } else {
      fetchAnswer([iter, e.target.innerText])
    }
  }

  return (
    <section className='sctn-qst'>
      <div className='query'>
        {iter + 1}
        {'. ' + question}
      </div>
      {/**if answers is empty that means the user has to put a specific answer*/}
      <ul>
        {answers.length - 1 <= 0 ? (
          <input
            type='text'
            placeholder={`Repondez ici`}
            onChange={throwAnswer}
            className='inpt-text'
            name={iter}
            value={answer}
          />
        ) : (
          React.Children.toArray(
            answers.map((el) =>
              answer === el ? (
                <li onClick={throwAnswer} className='lst-itm-selected'>
                  {el}
                </li>
              ) : (
                <li onClick={throwAnswer} className='lst-itm'>
                  {el}
                </li>
              )
            )
          )
        )}
      </ul>
    </section>
  )
}

export default Question2
