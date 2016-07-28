// storage for the mousedown timestamp
var timestamp;

function mouse_down () {
  /* Record the timestamp at the moment of the mousedown event */
  timestamp = Date.now();
}
function mouse_up () {
  /* display the time between mousedown and mouseup */
  var duration = Date.now() - timestamp;
  document.getElementById('title').innerHTML = duration + ' ms';
}

// Event Listeners
document.addEventListener('mousedown', mouse_down ,false);
document.addEventListener('mouseup', mouse_up ,false);
