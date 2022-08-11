import data_miner from "./data_monitor.zip";

function ProductList() {
  let token = localStorage.getItem("token")
  if (token === "null") {
    alert("Please login in order to access our performance monitoring tools");
    window.location.href = "accounts/login";
  }

  return (
    <div>
      <div>
        <h2>Data Monitoring CLI Tool</h2>
        <p>
          {" "}
          A performance monitoring tool that keeps track of your average
          bandwidth usage across sessions.
        </p>
        <a href={data_miner} download>
          Data Monitoring CLI Tool
        </a>
      </div>
    </div>
  );
}
export default ProductList;
