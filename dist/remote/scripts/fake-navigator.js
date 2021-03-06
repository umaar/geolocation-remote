/**
 * Will overwrite the navigator object and
 * get the geoPosition from a Websocket.
 */

var connect = ( window.self === window.top ) ? 'socket' : 'iframe';

if (window.geolocationRemote) {
  var navigator = {
    geolocation: geolocationRemote(connect),
    userAgent: navigator.userAgent,
    language: navigator.language,
    onLine: navigator.onLine
  };

  navigator.geolocation.sendToRemote({init: true, connect: connect});

  console.log('fake navigator loaded')
}