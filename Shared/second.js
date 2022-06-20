if (!!window.SharedWorker) {
  var newWorker = new SharedWorker('./Shared/worker.js')
  newWorker.port.onmessage = function(e) {
    document.write(e.data)
  }
  setTimeout(() => {
    newWorker.port.postMessage('Second page')

  }, 1000)
  newWorker.onerror = function(e) {
    console.log(e)
  }
}