import Player from '@vimeo/player';
var throttle = require('lodash.throttle');
// console.log(Player);

const iframe = document.querySelector('#vimeo-player');
const KEY_LOCAL = 'videoplayer-current-time';
const player = new Player(iframe);

function timeLap(data) {
  const timeOff = JSON.stringify(data);
  localStorage.setItem(KEY_LOCAL, timeOff);
}
player.on('timeupdate', throttle(timeLap, 1000));

const timeOn = JSON.parse(localStorage.getItem(KEY_LOCAL));
let timeMove = timeOn.seconds;

player
  .setCurrentTime(timeMove)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
