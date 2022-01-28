import React, { useEffect, useRef } from 'react'

const InfiniteScroll = ({ fetchMore }) => {
  const containerRef = useRef()

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '200px',
      threshold: 1.0
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect()
        fetchMore()
        console.log('aqui')
      }
    }, options)
    observer.observe(containerRef.current)

    return () => {
      observer.disconnect()
    }
  }, [fetchMore])

  return <div ref={containerRef} />
}

export default InfiniteScroll
