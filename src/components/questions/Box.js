import React, {Component, forwardRef, useImperativeHandle} from 'react'
import {
  MdCheckBoxOutlineBlank as Blank,
  MdCheckBox as Checked,
} from 'react-icons/md'

import '../../styles/questions/box.scss'

export class Box extends Component {
  constructor(props) {
    super(props)
    this.state = {
      answer: '',
      isChecked: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  setFalse(result) {
    console.log('false')
    if (result != this.props.proposition) this.setState({isChecked: false})
  }

  sendAnswer = (answer) => {
    return answer
  }

  handleClick = (e) => {
    e.preventDefault()
    this.setState({isChecked: !this.state.isChecked})
    this.props.sendAnswer(this.props.proposition)
  }

  render() {
    return (
      <div onClick={this.handleClick} className='box'>
        {this.props.proposition == '' ? (
          <input type='text' className='textArea' />
        ) : (
          <>
            <span className='checkBox'>
              {this.state.isChecked ? <Checked /> : <Blank />}
            </span>
            <span className='proposition'>{this.props.proposition}</span>
          </>
        )}
      </div>
    )
  }
}

export default Box
