"use client"

import { useEffect, useRef } from "react"

export function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const orbs: {
      x: number
      y: number
      radius: number
      speed: number
      direction: { x: number; y: number }
      color: string
    }[] = []

    // Create orbs with different sizes and colors
    for (let i = 0; i < 15; i++) {
      const radius = Math.random() * 100 + 50
      orbs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius,
        speed: Math.random() * 0.5 + 0.1,
        direction: {
          x: (Math.random() - 0.5) * 2,
          y: (Math.random() - 0.5) * 2,
        },
        color: `rgba(255, 189, 89, 0.1)`, // Updated to use brand color
      })
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      orbs.forEach((orb) => {
        // Move orb
        orb.x += orb.direction.x * orb.speed
        orb.y += orb.direction.y * orb.speed

        // Bounce off walls
        if (orb.x - orb.radius < 0 || orb.x + orb.radius > canvas.width) {
          orb.direction.x *= -1
        }
        if (orb.y - orb.radius < 0 || orb.y + orb.radius > canvas.height) {
          orb.direction.y *= -1
        }

        // Draw orb
        ctx.beginPath()
        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius)
        gradient.addColorStop(0, orb.color)
        gradient.addColorStop(1, "transparent")
        ctx.fillStyle = gradient
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-50"
      style={{ mixBlendMode: "screen" }}
    />
  )
}

