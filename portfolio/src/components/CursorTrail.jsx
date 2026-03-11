import { useEffect, useState } from 'react'
import './CursorTrail.css'

function CursorTrail() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    let particleId = 0

    const handleMouseMove = (e) => {
      const newParticle = {
        id: particleId++,
        x: e.clientX,
        y: e.clientY,
      }

      setParticles((prev) => [...prev, newParticle])

      // Remove particle after animation
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== newParticle.id))
      }, 1000)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="cursor-trail-container">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="cursor-particle"
          style={{
            left: particle.x,
            top: particle.y,
          }}
        />
      ))}
    </div>
  )
}

export default CursorTrail
