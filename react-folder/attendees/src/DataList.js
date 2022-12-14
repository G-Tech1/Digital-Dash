import { useState, useEffect } from "react";
import "./App.css";

function DataList() {
  if (!localStorage.getItem("token") || localStorage.getItem("token") === "null") {
    alert("Please sign in to view your network data");
    window.location.href = "accounts/login";
  }
  let [dList, setDList] = useState({ Data: [] });
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const res = await fetch("http://localhost:8000/data_miner/data/");
    if (!res.ok) {
      alert("Please sign in to view your network data");
    window.location.href = "accounts/login";
    }
    const newDList = await res.json();
    console.log(newDList);
    setDList(newDList);
  }
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Date</th>
          <th>Average Upload Bandwidth usage</th>
          <th>Average Download Bandwidth usage</th>
          <th>Session Time</th>
        </tr>
      </thead>
      <tbody>
        {dList.Data.filter(
          (x) => x["user"]["email"] === localStorage.getItem("email")
        ).map((d) => {
          return (
            <tr key={d.id}>
              <td>{d.day}</td>
              <td>{(d.data_sent / d.session_time).toFixed(3)} MB</td>
              <td>{(d.data_received / d.session_time).toFixed(3)} MB</td>
              <td>{d.session_time} Seconds</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default DataList;
