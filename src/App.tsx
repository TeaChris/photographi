import './App.css'
import { Header } from './components/header'
import { Navbar } from './components/navbar'

function App() {
  return (
    <div className="w-full space-y-[4.5rem]">
      <Navbar />

      <main className="space-y-16 pt-1">
        <Header />
      </main>
    </div>
  )
}

export default App
