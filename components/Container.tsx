import React from 'react'


type ContainerProps = {
    children: React.ReactNode
    className?: string
}
const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`w-full h-full max-w-[1360px ${className}`}>
        {children}
    </div>
  )
}

export default Container