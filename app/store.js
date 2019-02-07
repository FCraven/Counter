import {createStore} from 'redux'

// Still need:
//  - action type
//  - action creator
//  - initial state
//  - reducer


//action type is a string succinctly explaining the action

//action creator is a function

//initial state is the same as intializing state in a component- what state do we want in the store

//reducer is a switch/case that plinkos an action type through to a function that then changes state and emits the next state



const initialState = {
  // what should be on our initial state?
  // add on to test remote
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const store = createStore(reducer)

export default store
