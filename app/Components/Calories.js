'use client'
import React from 'react'
import { FaFire } from 'react-icons/fa'
import useColors from '../hooks/useColors'

const Calories = ({ cals }) => {
  const { colors } = useColors()
  return (
    <div
      style={{
        border: `1px solid ${colors.greyLighten2}`,
        borderRadius: '4px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: 'fit-content',
        padding: '4px 8px'
      }}
    >
      <FaFire color={colors.primaryBase} />
      <p
        style={{
          color: colors.greyLighten1,
          fontSize: '12px',
          marginLeft: '4px'
        }}
      >
        {cals} cals
      </p>
    </div>
  )
}

export default Calories
