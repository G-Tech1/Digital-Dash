import { useState, useEffect } from 'react';

function DataList() {
  
  let [dList, setDList] = useState({data: []})

  async function fetchData() {
    const res = await fetch('http://localhost:8000/data/', {
        headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
    const newDList = await res.json()
    setDList(newDList)
  }
  useEffect(() => {fetchData()}, [])

    return (
        <table className="table table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Average Upload Bandwidth usage</th>
            <th>Average Download Bandwidth usage</th>
          </tr>
        </thead>
        <tbody>
        {dList.data.filter((x) => x["user"]["email"] === localStorage.getItem('email')).map(d => {
        return (
       <tr key={d.id}>
         <td>{ d.day }</td>
         <td>{d.data_sent / d.session_time}</td>
         <td>{d.date_received / d.session_time}</td>
         <td>{ d.session_time }</td>
       </tr>
          );
           })}
        </tbody>
      </table>
    );
}

export default DataList;