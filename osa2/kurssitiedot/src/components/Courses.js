import React from 'react'

const Header = (props) => {
	return (
		<>
			<h1>{props.course.name}</h1>
		</>
	)
}

const Part = (props) => {
	return (
	<>
		<p>{props.name} {props.exercises}</p>
	</>
	)
}

const Total = (props) => {
	const parts = props.parts
	const exTotal = parts.reduce((totalHolder, m) => totalHolder + m.exercises,0)
	return (
		<>
			<p>Number of exercises {exTotal}</p>
		</>
	)
}

const Content = (props) => {
	const { parts } = props
console.log(parts)
	return (
		<>
		<ul>
    	{parts.map(part =>
      	<li key={part.id}>
      		<Part name={part.name} exercises={part.exercises} />
      	</li>
      )}
    </ul>
		</>
	)
}

const Courses = (props) => {
	const { courses } = props

	return (
		<>
			{courses.map(course =>
				<li key={course.id}>
					<Header course={course} />
					<Content parts={course.parts} />
					<Total parts={course.parts} />
				</li>
			)}
		</>	
	)
}

export default Courses