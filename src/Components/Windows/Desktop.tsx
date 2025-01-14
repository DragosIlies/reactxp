import React, { useState } from "react"
import { DndContext } from "@dnd-kit/core"
import { DraggableWindow } from "./DraggableWindow"
import { Droppable } from "./Droppable"

export function Desktop() {
  // Suppose we track a single window’s position in state.
  // If you have multiple windows, store an array/dict of positions keyed by 'id'.
  const [windowPosition, setWindowPosition] = useState({ x: 0, y: 0 })

  function handleDragEnd(event: any) {
    const { delta, active, over } = event
    if (!delta) return
    // If you only want to update position when dropped on a certain Droppable,
    // you can check (over && over.id === "droppable") here.

    // Combine the old position with new delta
    setWindowPosition((prev) => ({
      x: prev.x + delta.x,
      y: prev.y + delta.y,
    }))
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Droppable>
        {/* DraggableWindow takes the final position from the parent */}
        <DraggableWindow id="window-1" x={windowPosition.x} y={windowPosition.y}>
          <h3>My XP-Style Window</h3>
        </DraggableWindow>
      </Droppable>
    </DndContext>
  )
}
