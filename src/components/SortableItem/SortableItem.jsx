import React, { useEffect, useState } from "react"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import Loader from "../Loader/Loader"

const SortableItem = ({ item }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id })
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  }

  const [isImageLoaded, setIsImageLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = item.photo
    img.onload = () => {
      setIsImageLoaded(true)
    }
  }, [item.photo])

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`item${isDragging ? " dragging" : ""}`}
    >
      <p className="item-id">{item.id}</p>
      {isImageLoaded ? (
        <img src={item.photo} width={250} alt={item.id} />
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default SortableItem
