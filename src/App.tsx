import './App.css'
import { Header } from './components/header'
import { Navbar } from './components/navbar'

function App() {
  return (
    <main className="space-y-16">
      <header className="space-y-12">
        <Navbar />
        <Header />
      </header>
    </main>
  )
}

export default App
