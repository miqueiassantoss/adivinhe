import styles from "./App.module.css"

import { Header } from "./components/Header"
import { Tip } from "./components/Tip"
import { Letter } from "./components/Letter"
import { Input } from "./components/Input"
import { Button } from "./components/Button"
import { LettersUsed } from "./components/LettersUsed"


export default function App() {

  function handleRestarGame(){
    confirm("Reiniciar o jogo?")
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestarGame}/>

        <Tip tip="Linguagem de programação dinâmica"/>

        <div className={styles.word}>
          <Letter value ="R"/>
          <Letter value ="e"/>
          <Letter value ="a"/>
          <Letter value ="c"/>
          <Letter value ="t"/>
        </div>

        <h4>Palpite</h4>

        <div className={styles.guess}>
          <Input autoFocus maxLength={1} placeholder="?"/>
          <Button title="Confirmar"/>
        </div>

        <LettersUsed/>
      </main>
    </div>
  )
}
