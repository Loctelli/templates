"use client"

import React, { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
  title: string
  description: string
  className?: string
  imageOnly?: boolean
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Others",
  afterLabel = "Us",
  title,
  description,
  className,
  imageOnly = false
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    updateSliderPosition(e.clientX)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      updateSliderPosition(e.clientX)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    updateSliderPosition(e.touches[0].clientX)
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging && e.touches[0]) {
      updateSliderPosition(e.touches[0].clientX)
    }
  }

  const updateSliderPosition = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const position = ((clientX - rect.left) / rect.width) * 100
      setSliderPosition(Math.max(0, Math.min(100, position)))
    }
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
      document.addEventListener("touchmove", handleTouchMove)
      document.addEventListener("touchend", handleMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("touchend", handleMouseUp)
    }
  }, [isDragging])

  if (imageOnly) {
    return (
      <div 
        ref={containerRef}
        className={cn("relative aspect-[16/10] overflow-hidden cursor-col-resize select-none bg-white rounded shadow-sm", className)}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Before Image (Bottom Layer) */}
        <div className="absolute inset-0">
          <img 
            src={beforeImage} 
            alt="Before comparison"
            className="w-full h-full object-cover grayscale"
            draggable={false}
          />
          <div className="absolute top-4 left-4">
            <span className="bg-red-500/90 text-white px-3 py-1 rounded-full text-sm font-medium">
              {beforeLabel}
            </span>
          </div>
        </div>

        {/* After Image (Top Layer) */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img 
            src={afterImage} 
            alt="After comparison"
            className="w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute top-4 right-4">
            <span className="bg-green-500/90 text-white px-3 py-1 rounded-full text-sm font-medium">
              {afterLabel}
            </span>
          </div>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10 cursor-col-resize"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg border-2 border-gray-200 flex items-center justify-center">
            <div className="w-1 h-4 bg-gray-400 rounded-full mx-0.5"></div>
            <div className="w-1 h-4 bg-gray-400 rounded-full mx-0.5"></div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-black/50 text-white px-3 py-1 rounded-full text-xs">
            {Math.round(sliderPosition)}% / {Math.round(100 - sliderPosition)}%
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={cn("relative bg-white rounded-lg shadow-sm overflow-hidden", className)}>
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
      
      <div 
        ref={containerRef}
        className="relative aspect-[16/10] overflow-hidden cursor-col-resize select-none"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Before Image (Bottom Layer) */}
        <div className="absolute inset-0">
          <img 
            src={beforeImage} 
            alt="Before comparison"
            className="w-full h-full object-cover grayscale"
            draggable={false}
          />
          <div className="absolute top-4 left-4">
            <span className="bg-red-500/90 text-white px-3 py-1 rounded-full text-sm font-medium">
              {beforeLabel}
            </span>
          </div>
        </div>

        {/* After Image (Top Layer) */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img 
            src={afterImage} 
            alt="After comparison"
            className="w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute top-4 right-4">
            <span className="bg-green-500/90 text-white px-3 py-1 rounded-full text-sm font-medium">
              {afterLabel}
            </span>
          </div>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10 cursor-col-resize"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg border-2 border-gray-200 flex items-center justify-center">
            <div className="w-1 h-4 bg-gray-400 rounded-full mx-0.5"></div>
            <div className="w-1 h-4 bg-gray-400 rounded-full mx-0.5"></div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-black/50 text-white px-3 py-1 rounded-full text-xs">
            {Math.round(sliderPosition)}% / {Math.round(100 - sliderPosition)}%
          </div>
        </div>
      </div>
    </div>
  )
}