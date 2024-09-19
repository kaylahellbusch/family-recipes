'use client'
import { useEffect, useState } from 'react'
import useColors from '../hooks/useColors'

const ClientComponent = ({ children }) => {
  const { colors } = useColors()
  if (Object.keys(colors).length === 0) {
    return <div>Loading...</div>
  }
  return <>{children}</>
}

export default ClientComponent
