import React from "react"
import { useDraggable } from "@dnd-kit/core"

interface DraggableWindowProps {
  id: string
  x: number
  y: number
  children?: React.ReactNode
}

export function DraggableWindow({
  id,
  x,
  y,
  children
}: DraggableWindowProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
  } = useDraggable({
    id,
  })

  const style: React.CSSProperties = {
    position: "absolute",
    // Combine the “final” position from props with the real-time drag transform
    transform: `translate3d(
      ${(x + (transform?.x || 0))}px,
      ${(y + (transform?.y || 0))}px,
      0
    )`,
    border: "1px solid gray",
    background: "white",
    cursor: "move",
    padding: "1rem",
    boxShadow: "2px 2px 6px rgba(0,0,0,0.2)",
    width: "200px",
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      {children || "I'm a draggable window!"}
    </div>
  )
}
