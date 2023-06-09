
import React, { useState } from 'react'
import './Calculator.css'

const Calculator = () => {

    const [result, setResult] = useState("")


    const clickHandler = event => {
        setResult(result.concat(event.target.name))
    }

    const clear = () => {
        setResult("")
    }

    const deleted = () => {
        setResult(result.slice(0, -1))
    }

    const calculate = () => {
        setResult(eval(result))
    }


    return (

        <div className='calculator'>

            <form><input type="text" value={result} readOnly/></form>

            <div className='button-items'>
            <button className='clear' onClick={clear}>AC</button>
            <button onClick={deleted} className='delete'>DEL</button>
            <button name='/' onClick={clickHandler} className='formula'>&divide;</button>
            <button name='9' className='otherButton' onClick={clickHandler}>9</button>
            <button name='8' className='otherButton' onClick={clickHandler}>8</button>
            <button name='7' className='otherButton' onClick={clickHandler}>7</button>
            <button name='*' onClick={clickHandler} className='formula'>&times;</button>
            <button name='6' className='otherButton' onClick={clickHandler}>6</button>
            <button name='5' className='otherButton' onClick={clickHandler}>5</button>
            <button name='4' className='otherButton' onClick={clickHandler}>4</button>
            <button name='-' onClick={clickHandler} className='formula'>&ndash;</button>
            <button name='3' className='otherButton' onClick={clickHandler}>3</button>
            <button name='2' className='otherButton' onClick={clickHandler}>2</button>
            <button name='1' className='otherButton' onClick={clickHandler}>1</button>
            <button name='+' onClick={clickHandler} className='formula'>+</button>
            <button name='.' className='otherButton' onClick={clickHandler}>.</button>
            <button name='0' className='otherButton' onClick={clickHandler}>0</button>
            <button className='equal' onClick={calculate}>=</button>
            </div>

        </div>



    )
}

export default Calculator