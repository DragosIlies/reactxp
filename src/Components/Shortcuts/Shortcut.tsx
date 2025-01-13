export function Shortcut({ title ,icon, altText }: { title: string, icon: string; altText: string }){
    return <button className="flex flex-col items-center gap-1 w-20">
            <img
                className="size-8"
                src={icon}
                alt={altText}
                ></img>
            <div className="text-white text-xs text-shadow-shortcut"> {title} </div>
        </button>
}