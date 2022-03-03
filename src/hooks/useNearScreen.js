import { useState, useEffect, useRef} from 'react'

export default function useNearScreen({distance = '100px'} = {}){
  const [show, setShow] = useState(false)
  const elementRef = useRef()

  useEffect(function() {

    const onChange = (entries) => {
      const el = entries[0]
      console.log(el.isIntersecting)
      if(el.isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    }

    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    })

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  })

  return { show, elementRef }
}