
import React from 'react'
import ReactDOM from 'react-dom'
import  { Provider, connect } from 'react-redux'
import store, {increment} from './store' // imported for you already

const Counter = props => {
  console.log('rendering Counter with these props: ', props)
  const count = props.count
  const increment = props.increment

  return (
    <div id='container'>
      <div id='counter'>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  console.log('Mapping state to props: ', state)
  return {
    count: state.count
  }
}

const mapDispatchToProps = dispatch => {
  console.log('mapping dispatch to props')
  return{
    increment: () => dispatch(increment())
  }
}


const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)

ReactDOM.render(
    <Provider store={store}>
      <ConnectedCounter />
    </Provider>,
  document.getElementById('app')
)
