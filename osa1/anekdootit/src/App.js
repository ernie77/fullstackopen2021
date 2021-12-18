import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
	<button onClick={handleClick}>
		{text}
	</button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(Array(7).fill(0))

  const addVote = () => {
		votes[selected] += 1
		setVote([...votes])  
  }
  
  return (
    <div>
      {anecdotes[selected]}
      <br />
      has {votes[selected]} votes
      <br />
      <Button handleClick={ () => addVote() } text='vote' />
      <Button handleClick={ () => setSelected(Math.floor(Math.random() * 7)) } text='next anecdote' />
<br />console.log {votes}
<br />console.log {selected}

    </div>
  )
}

export default App