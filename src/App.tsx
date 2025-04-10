import "./App.css";
import { ListShortcuts } from "./Components/Shortcuts/ListShortcuts";
import { Taskbar } from "./Components/Taskbar/Taskbar";
import { AppWindow } from "./Components/Windows/AppWindow";
//import greenShieldTray from './assets/tray_icons/green_shield.png'
// import { Desktop } from './Components/Windows/Desktop'
import { UUID } from "crypto";
import computerIcon from "./assets/app_icons/mycomputer.png";
import cmdIcon from "./assets/app_icons/cmd.png";
import internetIcon from "./assets/app_icons/internet.png";

export type ShortcutData = {
  id: UUID;
  title: string;
  icon: string;
  altText: string;
  selected: boolean;
};

const initialShortcuts: ShortcutData[] = [
  {
    id: crypto.randomUUID(),
    title: "My Computer",
    icon: computerIcon,
    altText: "Computer Icon",
    selected: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Work",
    icon: cmdIcon,
    altText: "Work Icon",
    selected: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Documents",
    icon: internetIcon,
    altText: "Documents Icon",
    selected: false,
  },
];

function App() {
  return (
    <section className="h-screen w-full">
      <div className="grid gap-2 grid-rows-[1fr_auto] grid_cols-[auto_1fr] h-full w-full">
        <ListShortcuts initialShortcuts={initialShortcuts} />
        <Taskbar />
      </div>
      {/* <Desktop /> */}
      {/* <AppWindow title={initialShortcuts[0].title} icon={initialShortcuts[0].icon} altText={initialShortcuts[0].altText}/> */}
    </section>
  );
}

export default App;
