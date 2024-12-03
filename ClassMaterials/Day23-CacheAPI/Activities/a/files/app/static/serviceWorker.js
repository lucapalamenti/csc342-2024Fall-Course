function log(...data) {
  console.log("SWv1.0", ...data);
}

log("SW Script executing - adding event listeners");

self.addEventListener('install', event => {
  log('install', event);

  // As soon as this method returns, the service worker is considered installed
});

self.addEventListener('activate', event => {
  log('activate', event);
  // As soon as this method returns, the service worker is considered active
});


self.addEventListener('fetch', event => {

});



self.addEventListener('message', event => {
  log('message', event.data);
  if(event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});
