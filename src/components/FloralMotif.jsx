import React from 'react'

export function FloralDivider({ className = '' }) {
  return (
    <div className={`floral-divider ${className}`} aria-hidden="true">
      <svg width="180" height="24" viewBox="0 0 180 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 12H70" stroke="url(#goldLineGrad)" strokeWidth="1" strokeDasharray="2 2" />
        <path d="M110 12H180" stroke="url(#goldLineGradRev)" strokeWidth="1" strokeDasharray="2 2" />
        
        {/* Center delicate flower */}
        <circle cx="90" cy="12" r="3" fill="#C6A46A" />
        <path d="M90 6C92 9 92 11 90 12C88 11 88 9 90 6Z" fill="#C98791" />
        <path d="M90 18C92 15 92 13 90 12C88 13 88 15 90 18Z" fill="#C98791" />
        <path d="M84 12C87 14 89 14 90 12C89 10 87 10 84 12Z" fill="#C98791" />
        <path d="M96 12C93 14 91 14 90 12C91 10 93 10 96 12Z" fill="#C98791" />
        
        {/* Side leaf buds */}
        <path d="M78 12C80 9 82 9 84 12" stroke="#C6A46A" strokeWidth="0.8" fill="none" />
        <path d="M102 12C100 9 98 9 96 12" stroke="#C6A46A" strokeWidth="0.8" fill="none" />

        <defs>
          <linearGradient id="goldLineGrad" x1="0" y1="12" x2="70" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C6A46A" stopOpacity="0" />
            <stop offset="1" stopColor="#C6A46A" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="goldLineGradRev" x1="180" y1="12" x2="110" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C6A46A" stopOpacity="0" />
            <stop offset="1" stopColor="#C6A46A" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export function CornerFlourish({ className = '' }) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M2 46V16C2 8.268 8.268 2 16 2H46" stroke="#C6A46A" strokeWidth="1.2" strokeOpacity="0.6" />
      <path d="M8 46V20C8 13.373 13.373 8 20 8H46" stroke="#C98791" strokeWidth="0.75" strokeOpacity="0.4" />
      <circle cx="16" cy="16" r="2.5" fill="#C6A46A" />
      <path d="M16 10C18 13 18 15 16 16C14 15 14 13 16 10Z" fill="#C6A46A" />
      <path d="M22 16C19 18 17 18 16 16C17 14 19 14 22 16Z" fill="#C6A46A" />
    </svg>
  )
}
