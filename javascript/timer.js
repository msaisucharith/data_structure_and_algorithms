const intervel = setInterval(() => {
  let time = new Date().getHours();
  let min = new Date().getMinutes();
  let sec = new Date().getSeconds();
  console.log(`${time}:${min}:${sec}`);
}, 1000);

intervel;
