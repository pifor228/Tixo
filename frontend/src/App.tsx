import { useState } from 'react'
import './App.css'
import Header from './Component/Header/header'
import styles from './App.module.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <button
        type="button"
        className={styles.cgr}
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </button>
    </>
  )
}

export default App
