import React,{ useState } from "react";
import styles from "./Calculator.module.css";

export default function Calculator () {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    try {
      // eslint-disable-next-line
      const result = eval(input);
      setOutput(result.toString());
    } catch (error) {
      setOutput('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setOutput('');
  };

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <div className={styles.Calculator}>
      <h1 style={{display:"flex",justifyContent:"center",alignItems:"center"}}>React Calculator</h1>
      <input
        type="text"
        value={input}
        readOnly
        className={styles.input_field}
        style={{display:"flex",justifyContent:"center",alignItems:"center", marginLeft:"50px"}}
      />
      {(output !== "") ? <h3 style={{display:"flex",justifyContent:"center",alignItems:"center"}}>{output}</h3> : <></>} 
      <div className={styles.buttons}>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('+')}>+</button>
        <br />
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <br />
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('*')}>*</button>
        <br />
        <button onClick={clearInput}>C</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
      </div>
    </div>
    </div>
  );
}