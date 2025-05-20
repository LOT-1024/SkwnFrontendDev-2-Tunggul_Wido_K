"use client"

import { useEffect, useRef } from "react"

function FinanceChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with higher resolution for retina displays
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)
    canvas.style.width = `${rect.width}px`
    canvas.style.height = `${rect.height}px`

    // Chart data points
    const months = ["Jan", "Feb", "Mar", "Apr", "May"]
    const values = [2.5, 5, 3, 4.5, 2, 5]

    // Chart dimensions
    const chartWidth = rect.width - 40
    const chartHeight = rect.height - 60
    const startX = 40
    const startY = 20

    // Draw chart
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw y-axis labels
    ctx.font = "12px Arial"
    ctx.fillStyle = "#9CA3AF"
    ctx.textAlign = "right"

    for (let i = 0; i <= 5; i++) {
      const y = startY + chartHeight - (i * chartHeight) / 5
      ctx.fillText(`${i}M`, startX - 10, y + 4)
    }

    // Draw x-axis labels
    ctx.textAlign = "center"
    for (let i = 0; i < months.length; i++) {
      const x = startX + (i * chartWidth) / (months.length - 1)
      ctx.fillText(months[i], x, startY + chartHeight + 20)
    }

    // Draw the line
    ctx.beginPath()
    ctx.moveTo(startX, startY + chartHeight - (values[0] * chartHeight) / 5)

    for (let i = 1; i < values.length; i++) {
      const x = startX + (i * chartWidth) / (values.length - 1)
      const y = startY + chartHeight - (values[i] * chartHeight) / 5

      // Create a curved line
      const prevX = startX + ((i - 1) * chartWidth) / (values.length - 1)
      const prevY = startY + chartHeight - (values[i - 1] * chartHeight) / 5

      const cpX1 = prevX + (x - prevX) / 2
      const cpY1 = prevY
      const cpX2 = prevX + (x - prevX) / 2
      const cpY2 = y

      ctx.bezierCurveTo(cpX1, cpY1, cpX2, cpY2, x, y)
    }

    // Style the line
    ctx.strokeStyle = "#3B82F6"
    ctx.lineWidth = 3
    ctx.stroke()

    // Add a highlight point at March
    const marIndex = 2 // March is at index 2
    const marX = startX + (marIndex * chartWidth) / (values.length - 1)
    const marY = startY + chartHeight - (values[marIndex] * chartHeight) / 5

    ctx.beginPath()
    ctx.arc(marX, marY, 6, 0, Math.PI * 2)
    ctx.fillStyle = "white"
    ctx.fill()
    ctx.strokeStyle = "#3B82F6"
    ctx.lineWidth = 2
    ctx.stroke()

    // Add vertical dotted line from the highlight point
    ctx.beginPath()
    ctx.setLineDash([5, 5])
    ctx.moveTo(marX, marY)
    ctx.lineTo(marX, startY + chartHeight)
    ctx.strokeStyle = "#9CA3AF"
    ctx.lineWidth = 1
    ctx.stroke()
    ctx.setLineDash([])
  }, [])

  return (
    <div className="w-full h-full">
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
    </div>
  )
}

export default FinanceChart;
