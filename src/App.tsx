import styles from "./App.module.css"

import { Header } from "./components/Header"
import { Tip } from "./components/Tip"


export default function App() {

  function handleRestarGame(){
    confirm("Reiniciar o jogo?")
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestarGame}/>

        <Tip tip="Linguagem de programação dinâmica"/>
      </main>
    </div>
  )
}
