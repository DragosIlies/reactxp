import { Shortcut } from "./Shortcut";
import { useState } from "react";
import computerIcon from "../../assets/app_icons/mycomputer.png";
import { UUID } from "crypto";

type ShortcutData = {
  id: UUID;
  title: string;
  icon: string;
  altText: string;
  selected: boolean;
};

export function ListShortcuts() {
    const initialShortcuts: ShortcutData[] = [
        { id: crypto.randomUUID(), title: "My Computer", icon: computerIcon, altText: "Computer Icon", selected: false },
        { id: crypto.randomUUID(), title: "Work", icon: computerIcon, altText: "Work Icon", selected: false },
        { id: crypto.randomUUID(), title: "Documents", icon: computerIcon, altText: "Documents Icon", selected: false },
    ];
    
    const [shortcuts, setShortcuts] = useState(initialShortcuts)
    
    
    const deselectAllShortcuts = (shortcuts: ShortcutData[]): ShortcutData[] => {
        return shortcuts.map((shortcut) => ({
            ...shortcut,
            selected: false,
        }));
    };

      const selectShortcut = (shortcutId: UUID,shortcuts: ShortcutData[]): ShortcutData[] => {
        return shortcuts.map((shortcut) => ({
            ...shortcut,
            selected: shortcut.id === shortcutId,
        }));
    };
    
      // Handle shortcut click
      const handleShortcutClick = (id: UUID, isSelected: boolean) => {
        if (isSelected) {
            alert("Hello");
        } else {
           //TODO Maybe chain this like F#?
            const noSelectedShortcuts = deselectAllShortcuts(shortcuts)
            //set selected where this shortcut is
            setShortcuts(selectShortcut(id, noSelectedShortcuts))
        }
    };

    return (
        <div className="flex flex-col gap-6 p-8 items-start">
            {shortcuts.map((shortcut) => (
              <Shortcut 
                id = {shortcut.id}
                title={shortcut.title}
                icon={computerIcon}
                altText={shortcut.altText}
                isSelected={shortcut.selected}
                onShortcutClick={handleShortcutClick}           
              />
            ))}
        </div>
    );
}
