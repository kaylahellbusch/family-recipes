'use client'
import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'
import useColors from '../hooks/useColors'

const StarRating = ({ rating }) => {
  const { colors } = useColors()
  return (
    <div>
      {Array.from({ length: 5 }).map((_, index) => {
        if (index + 1 <= rating) {
          return <FaStar color={colors.primaryBase} />
        }
        return <FaRegStar color={colors.primaryBase} />
      })}
    </div>
  )
}

export default StarRating
