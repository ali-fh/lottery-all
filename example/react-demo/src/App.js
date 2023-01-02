import logo from './logo.svg'
import './App.css'
import React from 'react'
import cp from 'lottery-all'

let lottery = new cp('ssc', 'cn', 'dg#qwrru89qa8@0128')

class App extends React.Component {

  constructor() {
    super()
  }

  componentDidMount() {
    console.log(lottery)
    lottery.switchRule('qiansan-qita-teshuhaoma')
    lottery.selectedBall('豹子', 0)
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }

}

export default App
