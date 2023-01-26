import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onIncreament = () => {
    this.setState({count: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" type="button" onClick={this.onIncreament}>
            Generate
          </button>
          <p className="heading2">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
