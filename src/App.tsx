import './App.css'
import { ListShortcuts } from './Components/Shortcuts/ListShortcuts'
import { Taskbar } from './Components/Taskbar/Taskbar'
//import greenShieldTray from './assets/tray_icons/green_shield.png'
import { Desktop } from './Components/Windows/Desktop'

function App() {
  return (
    <section className = "h-screen w-full">
      <div className="grid gap-2 grid-rows-[1fr_auto] grid_cols-[auto_1fr] h-full w-full">
        <ListShortcuts />
        <Taskbar />
      </div>
      <Desktop />
    </section>
  )
}

export default App
