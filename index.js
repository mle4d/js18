const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const sum = timeNodes
.map(node => node.dataset.time)
.map(timeCode => {
const [hours, mins] = timeCode.split(':').map(parseFloat)
console.log(hours, mins);
return hours + (mins / 60);
})