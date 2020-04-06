import React,{useState} from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Box from './components/Box'

function App() {
  let countNum = useSelector(state => state.countNum);

  let dispatch = useDispatch();

  let increasementNum = () => {
    dispatch({type:'INCREASEMENT', payload:{id:countNum, name:'Charles'}})
  }

  let decreasementNum = () => {
    dispatch({type:'DECREASEMENT', payload:{id:countNum, name:'Charles'}})
  }

  let resetNum = () => {
    dispatch({type:'RESET', payload:{id:countNum, name:'Charles'}})
  }

  let changeColor = (e) => {
    let background = e.target.value
    console.log("color", background)
    dispatch({type: 'CHANGE_BG',payload:background})
  }

  let boxGenerateByNum = (e) => {
    let boxNum = e.target.value
    console.log("number of boxes",boxNum)
    dispatch({type: 'BOX_NUM', payload:{id:countNum, name:'Charles', box: boxNum}})
  }

  return (
    <div>

      <h2>{countNum}</h2>
      <button onClick={()=>increasementNum()}>Increasement</button>
      <button onClick={()=>decreasementNum()}>Decreasement</button>
      <button onClick={()=>resetNum()}>Reset</button>
      <input type="text" placeholder="Background color" onChange={changeColor}></input>
      <input type="number" placeholder="Number of boxes" onChange={boxGenerateByNum}></input>
      <div>
        <Box/>
      </div>
    </div>
  );
}

export default App;
