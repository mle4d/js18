const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const minutes = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return (mins * 60) + secs;
  })
  .reduce((total, vidminutes) => total + vidminutes);

  let minutesLeft = minutes;
  
  const hours = Math.floor(minutesLeft / 60);
  minutesLeft = minutesLeft % 60;


  document.querySelector('.totalhours').innerHTML = hours

  hours 
  document.querySelector('.totalminutes').innerHTML =

  minutesLeft


