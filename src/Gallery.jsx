import React from "react"
import { useEffect, useState } from "react"
import { data } from "./data"
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  MouseSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import {
  arrayMove,
  rectSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable"

import AuthDetails from "./components/Header/Header"
import SortableItem from "./components/SortableItem/SortableItem"
import Footer from "./components/footer/Footer"

const Gallery = () => {
  const [items, setItems] = useState(data)
  const [inputValue, setInputValue] = useState("")
  const [foundItem, setFoundItem] = useState(null)

  const handleInputChange = (value) => {
    setInputValue(value)

    // Find the item whose ID matches the inputValue
    const item = items.find((item) => item.id.toString() === value)

    // Update the founditem state
    setFoundItem(item)
  }

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor)
  )

  const onDragEnd = (event) => {
    const { active, over } = event
    if (active.id === over.id) {
      return
    }
    setItems((items) => {
      const oldIndex = items.findIndex((item) => item.id === active.id)
      const newIndex = items.findIndex((item) => item.id === over.id)
      return arrayMove(items, oldIndex, newIndex)
    })
    // console.log(items)
    // console.log(active)
    // console.log(over)
  }

  return (
    <>
      <section className="">
        <div className="gallery-container">
          <div className="gallery-header">
            <h1>Create & Organize Your Album Art Collection</h1>
            <p>
              Our user-friendly drag-and-drop feature puts you in control,
              allowing you to design a personalized gallery that reflects your
              unique musical journey.
            </p>
          </div>

          <div className="items-form">
            <input
              type="text"
              value={inputValue}
              placeholder="Search album cover by id"
              onChange={(e) => handleInputChange(e.target.value)}
            />
            {/* <button
              className="button"
              onClick={() => handleInputChange(inputValue)}
            >
              Find item
            </button> */}
          </div>
          {foundItem ? (
            <div className="flexCenter">
              <div className=" found-item">
                <img
                  className="found-img"
                  src={foundItem.photo}
                  alt=""
                  width={280}
                />
              </div>
            </div>
          ) : (
            <div className="item-container">
              <DndContext
                collisionDetection={closestCenter}
                onDragEnd={onDragEnd}
                sensors={sensors}
              >
                <SortableContext items={items} strategy={rectSortingStrategy}>
                  {items.map((item) => (
                    <SortableItem key={item.id} item={item} />
                  ))}
                </SortableContext>
              </DndContext>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
export default Gallery
