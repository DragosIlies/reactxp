import { Shortcut } from "./Shortcut";
import { useState } from "react";
import { UUID } from "crypto";

import { ShortcutData } from "../../App";



export function ListShortcuts({initialShortcuts} : { initialShortcuts: ShortcutData[]}) {

    
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
