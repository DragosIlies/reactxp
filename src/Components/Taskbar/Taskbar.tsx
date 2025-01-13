import greenShieldTray from '../../assets/tray_icons/green_shield.png'
import defaultProgTray from '../../assets/tray_icons/defaultprog.png'
import internetTray from '../../assets/tray_icons/internet.png'

function TrayIcon({ icon, altText }: { icon: string; altText: string }) {
    return (
        <img
            src={icon}
            alt={altText}
            className="w-4 h-4"
        />
    );
}

export function Taskbar() {
    return (
    <footer 
        className="row-start-2 row-end-3 col-start-1 col-end-3 bg-taskbar-colour flex justify-between">
        <button className="bg-start-button-norm hover:bg-start-button-hover bg-no-repeat w-[97px] h-[30px]"></button>
        <div className="flex items-center bg-trays-colour shadow-tray-inset">
            <div className='flex gap-0.5 items-center pr-2 pl-2'>
                <TrayIcon icon={greenShieldTray} altText="Green Shield Icon" />
                <TrayIcon icon={defaultProgTray} altText="Default Prog Icon" />
                <TrayIcon icon={internetTray} altText="Internet Icon" />
            </div>
            <div className='text-white font-light text-xs pr-2'>10:35 PM</div>
        </div>
    </footer>
    )
  }