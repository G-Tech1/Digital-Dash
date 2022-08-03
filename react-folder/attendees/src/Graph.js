import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Bar } from "react-chartjs-2";
import React, {useState, useEffect} from "react"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

export default function Graph() {

const [chartData, setChartData] = useState({
    datasets: [],
})

const [chartOptions, setChartOptions] = useState({});

useEffect(() => {
    setChartData({
        labels: ["Upload", "Download"],
        datasets: [
            {
                label: "Bandwidth usage",
                data: [420, 69],
                borderColor: "rgb(69, 69, 69)",
                backgroundColor: "#420420"
            }
        ]
    })
    setChartOptions({
        responsive: true,
        plugins: {
            legend: {
                position: "top"
            },
            title: {
                display: true,
                text: "Bandwidth Usage (for nerds)"
            }
        }
    })
}, [])

  return (
    <div>
        <Bar options={chartOptions} data={chartData}/>
    </div>
  )
}
