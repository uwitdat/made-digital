import { useEffect, useRef, useState } from "react"


export const useIntersectionObserver = (options) => {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const callback = (entries) => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }


  useEffect(() => {
    const currentEl = containerRef.current;
    if (!currentEl) return; // no need to attach observer or cleanup

    const observer = new IntersectionObserver(callback, options);
    observer.observe(currentEl);
    return () => {
      observer.unobserve(currentEl);
    };
  }, [containerRef, options])

  return [containerRef, isVisible]
}