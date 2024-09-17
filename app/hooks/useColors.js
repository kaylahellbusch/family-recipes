import { useState, useEffect } from 'react'

const useColors = () => {
  const [colors, setColors] = useState({})
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const rootStyles = getComputedStyle(document.documentElement)
      const primaryBase = rootStyles.getPropertyValue('--primaryBase').trim()
      const primaryLighten1 = rootStyles
        .getPropertyValue('--primaryLighten1')
        .trim()
      const primaryDarken1 = rootStyles
        .getPropertyValue('--primaryDarken1')
        .trim()
      const primaryDarken2 = rootStyles
        .getPropertyValue('--primaryDarken2')
        .trim()
      const greyBase = rootStyles.getPropertyValue('--greyBase').trim()
      const greyDarken1 = rootStyles.getPropertyValue('--greyDarken1').trim()
      const greyLighten1 = rootStyles.getPropertyValue('--greyLighten1').trim()
      const greyLighten2 = rootStyles.getPropertyValue('--greyLighten2').trim()
      setColors({
        primaryBase,
        primaryLighten1,
        primaryDarken1,
        primaryDarken2,
        greyBase,
        greyDarken1,
        greyLighten1,
        greyLighten2
      })
    }
  }, [])
  return { colors }
}

export default useColors
