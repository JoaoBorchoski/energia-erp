// components/FullScreenLoadingSpinner.tsx
import React from "react"

const FullScreenLoadingSpinner: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  )
}

export default FullScreenLoadingSpinner
