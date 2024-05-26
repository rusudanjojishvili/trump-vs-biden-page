'use client'
import { useRef, useEffect } from 'react'
import { Chart } from 'chart.js/auto'

const PieChart = ({ positivePosts, negativePosts } ) => {
    const chartRef = useRef(null)
    // const total = positivePosts.totalResults + negativePosts.totalResults
    // const positivePct = positivePosts.totalResults/total * 100
    // const negativePct = negativePosts.totalResults/total * 100

    // console.log(positivePct, 'positivePct')
    useEffect(() => {
      if(chartRef.current){
        if(chartRef.current.chart){
            chartRef.current.chart.destroy()
        }
        const context = chartRef.current.getContext('2d')

        const newChart = new Chart(context, {
            type: 'pie',
            data: {
                labels: ['positive', 'negative'],
                datasets: [
                    {
                        label: 'info',
                        data: [65, 35],
                        backgroundColor: [
                            'rgb(65 215 125)',
                            'rgb(238 76 76)'
                        ]
                    }
                ]
            }
        })
        chartRef.current.chart = newChart;
      }
    }, [])
    
  return (
    <div >
      <canvas ref={chartRef} />
    </div>
  )
}

export default PieChart
