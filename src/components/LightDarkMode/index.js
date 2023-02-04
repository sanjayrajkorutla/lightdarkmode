// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isDark: true,
  }

  onClickB = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark} = this.state
    const modeClassName = isDark ? 'dark-mode' : 'light-mode'
    const buttonText = isDark ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="container">
        <div className={`container1 ${modeClassName}`}>
          <h1>Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.onClickB}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
