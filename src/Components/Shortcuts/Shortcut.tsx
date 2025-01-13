import { UUID } from "crypto";

export function Shortcut({
    id,
    title,
    icon,
    altText,
    isSelected,
    onShortcutClick,
}: {
    id: UUID;
    title: string;
    icon: string;
    altText: string;
    isSelected: boolean;
    onShortcutClick: (id: UUID, isSelected: boolean) => void;
}) {
    return (
        <div
            className={`flex flex-col items-center gap-1 w-20 cursor-pointer ${
                isSelected ? "drop-shadow-selected" : ""
            }`}
            onClick={() => 
                //deselect everything else
                //set select here to true
                onShortcutClick(id,isSelected)
            }
        >
            <img
                className={`size-8 ${isSelected ? "opacity-50" : ""}`}
                src={icon}
                alt={altText}
            />
            <div
                className={`text-white text-xs text-shadow-shortcut ${
                    isSelected ? "bg-selected" : ""
                }`}
            >
                {title}
            </div>
        </div>
    );
}
