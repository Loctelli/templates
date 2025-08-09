"use client"

import React, { useEffect } from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface PhotoModalProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  title?: string
  description?: string
  className?: string
}

export function PhotoModal({
  isOpen,
  onClose,
  imageSrc,
  title,
  description,
  className
}: PhotoModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div 
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm",
        className
      )}
      onClick={onClose}
    >
      <div className="relative max-w-[90vw] max-h-[90vh] p-4">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image container */}
        <div 
          className="relative bg-white rounded-lg shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={imageSrc}
            alt={title || "Enlarged photo"}
            className="w-[600px] h-[600px] object-cover"
          />
          
          {/* Caption */}
          {(title || description) && (
            <div className="p-4 bg-white border-t">
              {title && (
                <h3 className="font-semibold text-lg mb-1">{title}</h3>
              )}
              {description && (
                <p className="text-muted-foreground text-sm">{description}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}