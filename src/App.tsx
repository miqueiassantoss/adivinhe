import styles from "./App.module.css"
import { useEffect, useState } from "react"
import { WORDS } from "./utils/words"
import type { Challenge } from "./utils/words"

import { Header } from "./components/Header"
import { Tip } from "./components/Tip"
import { Letter } from "./components/Letter"
import { Input } from "./components/Input"
import { Button } from "./components/Button"
import { LettersUsed } from "./components/LettersUsed"

export default function App() {
  const [attempts, setAttempt] = useState(0)
  const [letter, setLetter] = useState("")
  const [challenge, setChallenge] = useState<Challenge | null>(null)


  function handleRestarGame() {
    confirm("Reiniciar o jogo?")
  }

  function startGame(){
    const index = Math.floor(Math.random() * WORDS.length)
    const randomWord = WORDS[index]

    setChallenge(randomWord)
    setAttempt(0)
    setLetter("")
  }

  useEffect( () => {
    startGame()
  }, [])

  return (
    <div className={styles.container}>
      <main>
        <Header current={attempts} max={10} onRestart={handleRestarGame} />

        <Tip tip="Linguagem de programação dinâmica" />

        <div className={styles.word}>
          <Letter value="R" />
          <Letter value="e" />
          <Letter value="a" />
          <Letter value="c" />
          <Letter value="t" />
        </div>

        <h4>Palpite</h4>

        <div className={styles.guess}>
          <Input autoFocus maxLength={1} placeholder="?" />
          <Button title="Confirmar" />
        </div>

        <LettersUsed />
      </main>
    </div>
  )
}
