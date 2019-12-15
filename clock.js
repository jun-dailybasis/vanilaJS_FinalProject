const clockTitle = document.getElementById("time");


function getTime() {
    
    const date = new Date();
    const gap = date.getTime();
    const day= Math.floor(gap / (1000 * 60 * 60 * 24));
    const minutes = Math.floor((gap/(1000*60)) % 60);
    const hours = Math.floor((gap/(1000*60*60)) % 24);
    const seconds = Math.floor((gap/1000) % 60);
      
    
    clockTitle.innerText = `${hours} : ${minutes <= 9 ? `0${minutes }` :minutes } : ${seconds <= 9 ? `0${seconds}` : seconds}`
  }
  function init() {
    getTime();
    setInterval(getTime, 1000);
  }
  init();
  