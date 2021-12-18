import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
	<button onClick={handleClick}>
		{text}
	</button>
)

const StatisticLine = ({ text, value }) => (
	<tr><td>{text}</td><td>{value}</td></tr>
)


const Statistics = ({ good, neutral, bad }) => {
	const all = good + neutral + bad
	
	if ( all === 0 ) {
		return (
			<>			
			No feedback given
			</>
		)
	}
	
	return (
		<>
			<table><tbody>
			<StatisticLine text="Good" value={good} />
			<StatisticLine text="Neutral" value={neutral} />
			<StatisticLine text="Bad" value={bad} />
			<StatisticLine text="All" value={all} />
			<StatisticLine text="Average" value={(good - bad)/(all)} />
			<StatisticLine text="Positive" value={(100*good)/(all)} />
			</tbody></table>
		</>
	)
}


const App = () => {
  // tallenna napit omaan tilaansa
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	return (
		<div>
			<h1>Give feedback</h1>
			<Button handleClick={ () => setGood(good + 1) } text='Good' />
			<Button handleClick={ () => setNeutral(neutral + 1) } text='Neutral' />
			<Button handleClick={ () => setBad(bad + 1) } text='Bad' />
			<h1>statistics</h1>
			
			<Statistics good={good} neutral={neutral} bad={bad} />

		</div>
	)
}

export default App