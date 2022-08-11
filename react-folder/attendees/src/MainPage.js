import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import "./App.css";

function MainPage() {
  let [speed, setSpeed] = useState("");
  var imageAddr =
    "https://images.pexels.com/photos/12066797/pexels-photo-12066797.jpeg?";
  var downloadSize = 38065152;

  function LoadImage() {
    return new Promise((resolve, reject) => {
      var download = new Image();
      download.src = imageAddr + parseInt(Math.random() * 10000);
      var startTime = Date.now();
      download.onload = function () {
        let endTime = Date.now();
        resolve((endTime - startTime) * 10 ** -3);
      };
      download.onerror = function (err) {
        reject(err);
      };
    });
  }

  async function getLoadSpeed() {
    let loadTime = await LoadImage();
    console.log(downloadSize / loadTime);
    setSpeed(((downloadSize / loadTime) * 10 ** -5).toFixed(2));
    return ((downloadSize / loadTime) * 10 ** -5).toFixed(2)
  }

  const gilanPic = new URL("./media/profiles/gilan_pic.jpeg", import.meta.url);
  const kervinPic = new URL(
    "./media/profiles/kervin_pic.jpeg",
    import.meta.url
  );
  const jacobPic = new URL("./media/profiles/jacob_pic.jpeg", import.meta.url);
  const keenanPic = new URL(
    "./media/profiles/keenan_pic.jpeg",
    import.meta.url
  );

  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">Welcome to Digital Dash Solutions!</h1>
      <p className="lead mb-4">
        A website where you can track and manage your network performance
      </p>
      <h3>Try our internet speed test below:</h3>
      <button
        type="button"
        className="btn btn-primary btn-lg"
        onClick={async function() { for (var i = 0; i < 5; i++) {await getLoadSpeed()}}}
      >
        Start Internet Speed Test
      </button>
      <div>
        <h2>Total Internet Speed: {speed} Mbps</h2>
      </div>

      <section id="cta" className="cta">
        <div className="container" data-aos="zoom-in">
          <div className="row">
            <div className="col-lg-9 text-center text-lg-start">
              <h3>Bandwidth Monitor Tool</h3>
              <p>
                {" "}
                Download and use our bandwidth monitoring tool to analyze and
                keep track or your data usage today!
              </p>
            </div>
            <div className="col-lg-3 cta-btn-container text-center">
              <a className="cta-btn align-middle" href="/products">
                Bandwidth Monitor Tool
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="team section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Team</h2>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div
                className="member d-flex align-items-start"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="pic">
                  <img src={kervinPic} className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Kervin Clenance</h4>
                  <span>Full Stack Engineer</span>
                  {/* <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p> */}
                  <div className="social">
                    <a href="https://www.linkedin.com/in/kervin-clenance-bb847a157/">
                      {" "}
                      <FaLinkedin size={28} />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4 mt-lg-0">
              <div
                className="member d-flex align-items-start"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="pic">
                  <img src={jacobPic} className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Jacob Gordon</h4>
                  <span>Full Stack Engineer</span>
                  {/* <p>Aut maiores voluptates amet et quis praesentium qui senda para</p> */}
                  <div className="social">
                    <a href="https://www.linkedin.com/in/jacob-gordon-bb06ab227/">
                      {" "}
                      <FaLinkedin size={28} />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4">
              <div
                className="member d-flex align-items-start"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="pic">
                  <img src={keenanPic} className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Keenan Nguyen</h4>
                  <span>Full Stack Engineer</span>
                  {/* <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p> */}
                  <div className="social">
                    <a href="https://www.linkedin.com/in/keenan-nguyen/">
                      {" "}
                      <FaLinkedin size={28} />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4">
              <div
                className="member d-flex align-items-start"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <div className="pic">
                  <img src={gilanPic} className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Gilan Serrant</h4>
                  <span>Full Stack Engineer</span>
                  {/* <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p> */}
                  <div className="social">
                    <a href="https://www.linkedin.com/in/gilan-serrant-1a6645111/">
                      {" "}
                      <FaLinkedin size={28} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container footer-bottom clearfix">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Digital Dash</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}
export default MainPage;
