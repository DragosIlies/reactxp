export function Shortcut({ title ,icon, altText }: { title: string, icon: string; altText: string }){
    return <div className="flex flex-col items-center">
            <img
                className="size-8"
                src={icon}
                alt={altText}
                ></img>
            <div className="text-white text-shadow-shortcut"> {title} </div>
        </div>
}