import './App.css'
import { ListShortcuts } from './Components/Shortcuts/ListShortcuts'
import { Taskbar } from './Components/Taskbar/Taskbar'
import { ListAppWindow } from './Components/Windows/ListAppWindow'

function App() {
  return (
    <section>
      <div className="grid gap-2 grid-rows-[1fr_auto] grid_cols-[auto_1fr] h-screen w-full">
        <ListShortcuts />
        <Taskbar />
      </div>
      <ListAppWindow />
    </section>
  )
}

export default App
