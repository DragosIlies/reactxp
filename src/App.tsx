import './App.css'
import { ListShortcuts } from './Components/Shortcuts/ListShortcuts'
import { Taskbar } from './Components/Taskbar/Taskbar'
import { ListAppWindow } from './Components/Windows/ListAppWindow'

function App() {
  return (
    <section>
      <div>
        <ListShortcuts />
        <Taskbar />
      </div>
      <ListAppWindow />
    </section>
  )
}

export default App
