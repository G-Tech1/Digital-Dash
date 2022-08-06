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
        setDList(newDList)
      }

    const d = (dList.Data.filter((x) => x["user"]["email"] === localStorage.getItem('email')))

    console.log(d)
    console.log(d[0])
    // console.log(d[0].day)

    const [chartData, setChartData] = useState({
        datasets: [],
    })

    const [chartOptions, setChartOptions] = useState({});

    // useEffect(() => {
    //     setChartData({
    //         labels: ["Average Upload", "Average Download"],
    //         datasets: [
    //             {
    //                 label: "Bandwidth usage",
    //                 data: [(d.data_sent / d.session_time).toFixed(3), (d.data_received / d.session_time).toFixed(3)],
    //                 borderColor: "rgb(69, 69, 69)",
    //                 backgroundColor: "#420420"
    //             }
    //         ]
    //     })
    //     setChartOptions({
    //         responsive: true,
    //         plugins: {
    //             legend: {
    //                 position: "top"
    //             },
    //             title: {
    //                 display: true,
    //                 text: "Bandwidth Usage over " + d.session_time + " seconds as of " + d.day
    //             }
    //         }
    //     })
    // }, [])

    useEffect(() => {
        setChartData({
            labels: ["Average Upload", "Average Download"],
            datasets: [
                {
                    label: "Bandwidth usage",
                    data: [(d[0].data_sent / d[0].session_time).toFixed(3), (d[0].data_received / d[0].session_time).toFixed(3)],
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
                    text: "Bandwidth Usage over " + d[0].session_time + " seconds as of " + d[0].day
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
