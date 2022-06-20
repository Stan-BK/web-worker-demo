if (!!window.SharedWorker) {
  var newWorker = new SharedWorker('./Shared/worker.js')
  newWorker.port.onmessage = function(e) {
    document.write(e.data)
  }
  newWorker.port.postMessage('First page')
  newWorker.onerror = function(e) {
    console.log(e)
  }
}