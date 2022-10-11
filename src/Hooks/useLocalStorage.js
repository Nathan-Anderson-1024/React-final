import { useEffect, useState } from 'react'

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const jsonCart = localStorage.getItem(key)
    if (jsonCart != null) return JSON.parse(jsonCart)
    if (typeof initialValue === 'function') {
      return initialValue();
    } else {
      return initialValue
    }
  })
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
