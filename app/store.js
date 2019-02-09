import {createStore, applyMiddleware } from 'redux'
import reduxLogger from 'redux-logger'


//action type is a string succinctly explaining the action
const INCREMENT = 'INCREMENT'

//action creator contains action type and

export const increment = () => ({type: INCREMENT})

//initial state is the same as intializing state in a component- what state do we want in the store

//reducer is a switch/case that plinkos an action type through to a function that then changes state and emits the next state



const initialState = {
  // what should be on our initial state?
  count: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {...state, count: state.count + 1}
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(reduxLogger))

export default store
