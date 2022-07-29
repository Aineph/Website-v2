import { useCallback, useEffect, useState } from "react"

const useWindowScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState({
    scrollLeft: 0,
    scrollTop: 0,
  })

  const onScroll = useCallback(() => {
    setScrollPosition({
      scrollLeft: window.scrollX,
      scrollTop: window.scrollY,
    })
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [onScroll])

  return scrollPosition
}

export default useWindowScrollPosition
