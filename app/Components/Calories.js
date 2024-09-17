'use client'
import React from 'react'
import { FaFire } from 'react-icons/fa'
import useColors from '../hooks/useColors'

const Calories = ({ cals }) => {
  const { colors } = useColors()

  const containerStyle = {
    border: `1px solid ${colors.greyLighten2}`,
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 'fit-content',
    padding: '4px 8px'
  }
  const textStyle = {
    color: colors.greyLighten1,
    fontSize: '12px',
    marginLeft: '4px'
  }

  return (
    <div style={containerStyle}>
      <FaFire color={colors.primaryBase} />
      <p style={textStyle}>{cals} cals</p>
    </div>
  )
}

export default Calories
