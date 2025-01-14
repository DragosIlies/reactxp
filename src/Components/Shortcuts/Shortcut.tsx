import { UUID } from "crypto";
import { useEffect, useRef } from "react";

export function Shortcut({
    id,
    title,
    icon,
    altText,
    isSelected,
    onShortcutClick,
    deselectAllShortcuts,
}: {
    id: UUID;
    title: string;
    icon: string;
    altText: string;
    isSelected: boolean;
    onShortcutClick: (id: UUID) => void;
    deselectAllShortcuts: () => void;
}) {

    const shortcutRef = useRef<HTMLDivElement>(null); //TODO: Maybe a more functional way

    useEffect(() => {
        const handleClicksOutside = (event: MouseEvent) => {
            if (shortcutRef.current && !shortcutRef.current.contains(event?.target as Node)) {
                deselectAllShortcuts()
            }
        }

        document.addEventListener("mousedown", handleClicksOutside);

        return () => {
            document.removeEventListener("mousedown", handleClicksOutside);
        };
    })

    return (
        <div
            ref={shortcutRef}
            className={`flex flex-col items-center gap-1 w-20 cursor-pointer ${
                isSelected ? "drop-shadow-selected" : ""
            }`}
            onClick={() => 
                //deselect everything else
                //set select here to true
                onShortcutClick(id)
            }
        >
            <img
                className={`size-8 ${isSelected ? "opacity-50" : ""}`}
                src={icon}
                alt={altText}
            />
            <div
                className={`text-white text-xs text-shadow-shortcut select-none${
                    isSelected ? "bg-selected" : ""
                }`}
            >
                {title}
            </div>
        </div>
    );
}
