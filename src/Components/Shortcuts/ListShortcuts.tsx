import { Shortcut } from "./Shortcut";
import { useState } from "react";
import computerIcon from "../../assets/app_icons/mycomputer.png";
import cmdIcon from "../../assets/app_icons/cmd.png";
import internetIcon from "../../assets/app_icons/internet.png";
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
        { id: crypto.randomUUID(), title: "Work", icon: cmdIcon, altText: "Work Icon", selected: false },
        { id: crypto.randomUUID(), title: "Documents", icon: internetIcon, altText: "Documents Icon", selected: false },
    ];
    
    const [shortcuts, setShortcuts] = useState(initialShortcuts)
    
    
    const deselectAllShortcuts = () => {
        setShortcuts((prevShortcuts) =>
            prevShortcuts.map((shortcut) => ({
                ...shortcut,
                selected: false,
            }))
        );
    };

    const selectShortcut = (shortcutId: UUID,shortcuts: ShortcutData[]): ShortcutData[] => {
        return shortcuts.map((shortcut) => ({
            ...shortcut,
            selected: shortcut.id === shortcutId,
        }));
    };
    
      // Handle shortcut click
      const handleShortcutClick = (id: UUID) => {
        setShortcuts((prevShortcuts) =>
            selectShortcut(id,prevShortcuts)
        );
    };


    return (
        <div className="flex flex-col gap-6 p-8 items-start">
            {shortcuts.map((shortcut) => (
              <Shortcut 
                key={shortcut.id}
                id = {shortcut.id}
                title={shortcut.title}
                icon={shortcut.icon}
                altText={shortcut.altText}
                isSelected={shortcut.selected}
                onShortcutClick={handleShortcutClick}
                deselectAllShortcuts={deselectAllShortcuts}           
              />
            ))}
        </div>
    );
}
