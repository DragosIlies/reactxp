import { useDroppable } from "@dnd-kit/core"

export function Droppable(props: any) {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  })

  const style: React.CSSProperties = {
    // Use 'fixed' if you want it to stay pinned on screen 
    // even if the user scrolls. Otherwise, use 'absolute'.
    position: "fixed", 
    top: 0,
    left: 0,
    width: "100%",      // covers the full viewport width
    height: "100%",     // covers the full viewport height
    zIndex: 9999,       // on top of almost everything
    // you can also add a semi-transparent overlay if desired
  }

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  )
}
