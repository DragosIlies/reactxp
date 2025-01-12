import { AppWindow } from "./AppWindow"

export function ListAppWindow() {
    return (<div className="absolute top-10 left-10 w-96 h-64 bg-white shadow-lg border border-gray-300">
        <AppWindow />
        <AppWindow />
        </div>)
  }