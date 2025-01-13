import { Shortcut } from "./Shortcut"
import computerIcon from "../../assets/app_icons/mycomputer.png"

export function ListShortcuts() {
    return (<div className="flex flex-col gap-6 p-8 items-start">
    <Shortcut title="My Computer" icon={computerIcon} altText="Computer Icon"/>
    <Shortcut title="Work" icon={computerIcon} altText="Computer Icon"/>
    </div>)
  }