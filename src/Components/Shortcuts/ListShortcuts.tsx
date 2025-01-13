import { Shortcut } from "./Shortcut"
import computerIcon from "../../assets/app_icons/mycomputer.png"

export function ListShortcuts() {
    return (<div className="flex gap-2 p-2">
    <Shortcut title="My Computer" icon={computerIcon} altText="Computer Icon"/>
    </div>)
  }