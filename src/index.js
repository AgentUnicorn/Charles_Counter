import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'
import {Provider} from 'react-redux'

let initialState = {
  counter: 0,
  countNum:0,
  boxArray:[],
  bgColor:'',
  textColor:''
}

function countReducer (state=initialState,action){
  if(action.type === 'INCREASEMENT'){
      state.countNum ++;
      state.counter=state.countNum;
      state.boxArray.push(action.payload)
      console.log("Array increase",state.boxArray)
      console.log("id",state.countNum)
      console.log("counter",state.counter)
      if(state.countNum > 5){
          state.textColor = 'blue';
      }
  }
  if(action.type === 'DECREASEMENT'){
      state.boxArray.pop(action.payload)
      console.log("Array decrease",state.boxArray)
      if(state.countNum < 1){
        state.countNum = 0;
      } else {
        state.countNum --;
      };
      if(state.countNum <= 5){
        state.textColor = 'black';
      }
  }
  if(action.type === 'RESET'){
      state.countNum = 0;
      state.boxArray = [];
      state.bgColor = '';
      state.textColor = '';
      console.log("Array reset",state.boxArray)
  }
  if(action.type === 'CHANGE_BG'){
      state.bgColor = action.payload;
      console.log("color 2", state.bgColor)
  }
  if(action.type === 'BOX_NUM'){
      if(state.boxArray == []) {
        for (let i = 0; i < action.payload.box; i++){
          state.countNum ++;
          state.countNum = state.countNum + state.counter
          state.counter = state.countNum
          state.boxArray.push(action.payload)
        } 
      } else {
        state.boxArray = []
        for (let i = 0; i < action.payload.box; i++){
          state.counter = state.counter + i
          state.boxArray.push(action.payload)
        }
      }
      if(state.countNum > 5){
        state.textColor = 'blue';
      }
      if(state.countNum <= 5){
        state.textColor = 'black';
      }
      console.log("box array by number", state.boxArray)
  }

  // if(action.type === 'IND_COLOR'){
  //   if 
  //   state.bgColor = action.payload
  // }
  return state // always return state 
}

const store = createStore(countReducer);

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
