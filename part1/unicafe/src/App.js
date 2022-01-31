import React,{useState} from "react";

const StatisticsLine = ({text, rating}) => {
  return (
    <table>
      <tbody>
      <tr>
        <td>{text}</td>
        <td>{rating}</td>
      </tr>

      </tbody>
    </table>
  
  )
}
const Button =({text,onClick}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Statistics = ({good,neutral,bad}) => {
  const all = good + neutral + bad
  let average = 0
  let percentage = 0
  if (all != 0) {
    average = (good - bad)/all
    percentage = (good/all) * 100
  }
  if (all === 0) {
    return (
      <div>No feedback given</div>
    )
  }else {
    return (
      <div>
        <StatisticsLine text = 'good' rating ={good} />
        <StatisticsLine text = 'neutral' rating ={neutral} />
        <StatisticsLine text = "bad" rating ={bad} />
        <StatisticsLine text = "all" rating ={all} /> 
        <StatisticsLine text = "average" rating ={average} /> 
        <StatisticsLine text = "percentage" rating ={percentage} /> 
      </div>
    )
  }
  
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const handleGood =() =>{
    setGood(good + 1)
  }
  const handleNuetral =() =>{
    setNeutral(neutral + 1)
  }
  const handleBad =() =>{
    setBad(bad + 1)
  }
  
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text='good'/>
      <Button onClick={handleNuetral} text='nuetral'/>
      <Button onClick={handleBad} text='bad'/>
      <h1>statistics</h1>
      <Statistics good ={good} bad ={bad} neutral={neutral}/>
    </div>
  )
}

export default App