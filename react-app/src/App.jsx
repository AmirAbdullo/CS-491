import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const topics = [
    'Software processes: generic vs. agile',
    'Scrum: sprints, backlog, daily scrum',
    'User stories: As a user, I should be able to...',
    'JavaScript basics: functions, classes, map, filter',
    'React with Vite',
  ]

  return (
    <div className="page">
      <header>
        <h1>Amir's CS 491 React App</h1>
        <p className="subtitle">Software Engineering · Pace University · Fall 2026</p>
      </header>

      <section className="card">
        <h2>Click counter</h2>
        <p className="count">{count}</p>
        <div className="buttons">
          <button onClick={() => setCount(count + 1)}>+1</button>
          <button onClick={() => setCount(0)} className="secondary">Reset</button>
        </div>
      </section>

      <section className="card">
        <h2>What we've covered so far</h2>
        <ul>
          {topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </section>

      <footer>Built with React + Vite</footer>
    </div>
  )
}

export default App