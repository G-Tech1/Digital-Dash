import { useState } from 'react';


function MainPage() {

    let [speed, setSpeed] = useState('')
    var imageAddr = "https://images.pexels.com/photos/12066797/pexels-photo-12066797.jpeg?"; 
    var downloadSize = 38065152; 

    function LoadImage() {
        return new Promise((resolve, reject) => {
            var download = new Image();
            download.src = imageAddr + parseInt(Math.random() * 10000)
            var startTime = Date.now()
            download.onload = function () {
                let endTime = Date.now()
                resolve((endTime - startTime) * 10**-3)
            }
            download.onerror = function (err) {
                reject(err);
            }
         } )
        }
    
        async function getLoadSpeed() {
            let loadTime = await LoadImage()
            console.log(downloadSize / loadTime)
            setSpeed(((downloadSize / loadTime) * 10**(-5)).toFixed(2));
    }
    return (
        <div className="px-4 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold">Welcome to digital dash solutions!</h1>
            <p className="lead mb-4">A website where you can track and manage your network performance</p>
            <h3>Try our internet speed test below:</h3>
            <p>refresh the browser after each test</p>
            <button type="button" class="btn btn-primary btn-lg" onClick={() => getLoadSpeed()
            }>Start Internet Speed Test</button>
            <div>
            <h2>Total Internet Speed: {speed} Mbps</h2>
            </div>
        </div>
    )
    }
export default MainPage