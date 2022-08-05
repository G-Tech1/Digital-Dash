import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import React, { useState, useEffect } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Graph() {

    if (localStorage.getItem('token') === null) {
        alert("Please sign in to view your network data")
        window.location.href = "login"
      }
      let [dList, setDList] = useState({Data: []})
      useEffect(() => {fetchData()}, [])
      async function fetchData() {
        const res = await fetch('http://localhost:8000/data_miner/data/', {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
        const newDList = await res.json()
        console.log(newDList)
        setDList(newDList)
      }

    const d = dList.Data.filter((x) => x["user"]["email"] === localStorage.getItem('email'))

    console.log(d)

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
                    data: [26, 87],
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
            <Bar options={chartOptions} data={chartData} />
        </div>
    )
}
