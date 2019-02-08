import React from 'react'
import ReactDOM from 'react-dom'
import store from './store' // imported for you already

class Counter extends React.Component {
  constructor () {
    super()
    this.state = store.getState()
  }

  componentDidMount(){
    store.subscribe(() => this.setState(store.getState()))
  }

  increment () {
    this.setState(
      currentState => {
        return {
          count: currentState.count + 1
        }
      }
    )
  }

  render () {
    return (
      <div id='container'>
        <div id='counter'>
          <h1>{this.state.count}</h1>
          <button onClick={this.increment}>Increment</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('app')
)
