import type { NextPage } from 'next'
import { useEffect, useRef, useState } from 'react'



const Home: NextPage = () => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // This will be true when running on server side render
    if (!window) return;

    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    if (!height || !width || !canvas.current) return;

    const ctx = canvas.current.getContext('2d');
  }, [height, width]);



  return (
    <canvas
      ref={canvas}
      height={height}
      width={width}
    />
  )
}

export default Home
