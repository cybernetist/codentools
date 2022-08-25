//Mirror Online

const video = document.querySelector('#video');

if(navigator.mediaDevices.getUserMedia({ video: true })
  .then((stream) => {
    video.srcObject = stream;
  }).catch((err) => {
     console.log("something went wrong")
}));