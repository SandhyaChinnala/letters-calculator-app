// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    textInput: '',
  }

  onChangeTextInput = event => {
    this.setState({textInput: event.target.value})
  }

  render() {
    const {textInput} = this.state

    return (
      <div className="app-container">
        {/* <div className="letters-calc-container"> */}
        <div className="calculator">
          <h1 className="title">
            Calculate the <br /> Letters you enter
          </h1>
          <label htmlFor="textInput" className="label">
            Enter the phrase
          </label>
          <input
            type="text"
            placeholder="Enter the phrase"
            className="text-input"
            id="textInput"
            onChange={this.onChangeTextInput}
          />
          <p className="letters-count">No.of Letters: {textInput.length}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="calculator-img"
        />
        {/* </div> */}
      </div>
    )
  }
}
export default LettersCalculator
