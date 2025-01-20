import { ShortcutData } from "../../App";

function TopBar({ title, icon, altText }: { title: string; icon: string, altText:string }){
    return (<div className="flex items-center place-content-between gap-1 bg-top-window-color h-8"> 
                <div className="flex items-center">
                    <img
                        className="ml-2 size-4"
                        src={icon}
                        alt={altText}
                    />
                    <div className="text-white font-bold font-window-title-sans text-xs tracking-[.5px] text-shadow-shortcut pr-2">
                        {title}
                    </div>
                </div>
                <div className="flex">
                    <div className="bg-maximize-icon hover:bg-maximize-hover-icon w-6 h-6 bg-contain bg-no-repeat bg-center"></div>
                    <div className="bg-maximize-icon hover:bg-maximize-hover-icon w-6 h-6 bg-contain bg-no-repeat bg-center"></div>
                    <div className="bg-maximize-icon hover:bg-maximize-hover-icon w-6 h-6 bg-contain bg-no-repeat bg-center"></div>
                </div>
        </div>)
}
{/* <img
className={`size-8 ${isSelected ? "opacity-50" : ""}`}
src={icon}
alt={altText}
/> */}
export function AppWindow({ title, icon, altText }: { title: string; icon: string, altText:string }) {
    return (
    <div className="absolute top-4 left-4 z-50 bg-black w-1/2 h-1/2 "> 
    {/* border-2 rounded-md border-radius-app */}
        <TopBar title = {title} icon = {icon} altText = {altText}/>
        {/* <h1>Window</h1> 
        //Top bar
        //extra bars
        //Content
            //System Tasks
            //Folders */}
    </div>

)
}
