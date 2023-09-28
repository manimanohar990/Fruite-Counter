import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  increaseMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  increaseBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            ` Bob at <span className="higlet">{mango}</span> mangoes
            <span className="higlet">{banana}</span> bananas`
          </h1>
          <div className="fruit-container">
            <div className="card">
              <img
                alt="Mango"
                className="mango"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <button
                type="button"
                className="btn"
                onClick={this.increaseMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="card">
              <img
                alt="Banana"
                className="banana"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <button
                type="button"
                className="btn"
                onClick={this.increaseBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
