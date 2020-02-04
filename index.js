const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const minutes = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return (mins * 60) + secs;
  })
  .reduce((total, vidminutes) => total + vidminutes);

  let minutesLeft = minutes;
  const mins = Math.floor(minutesLeft / 3600);
  minutesLeft = minutesLeft % 3600;
  
  const hours = Math.floor(minutesLeft / 60);
  minutesLeft = minutesLeft % 60;


  console.log(hours, minutes, minutesLeft);


