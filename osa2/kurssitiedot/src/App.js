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

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return (
    <div>
      <Courses courses={courses} />
    </div>
  )
}

export default App;
