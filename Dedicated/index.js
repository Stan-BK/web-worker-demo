const gId = document.getElementById('getId')
const uniqueId = document.getElementById('uniqueId')
const prefix = document.getElementById('prefix')
const isReceive = document.getElementById('isReceive')
const requestLodash = document.getElementById('requestLodash')
let _ = null
let receive = false
gId.addEventListener('click', function() {
  if (_ == null) {
    alert('请先请求Lodash')
    return
  }
  uniqueId.innerHTML = _.uniqueId(prefix.value)
})
requestLodash.addEventListener('click', function() {
  if (receive) {
    return
  }
  receive = true
  if (window.Worker) {
    var newWorker = new Worker('./Dedicated/worker.js')
    var script = document.createElement('script')
    newWorker.onmessage = function(e) {
      script.innerHTML = e.data
      document.body.appendChild(script)
      _ = window._
      isReceive.innerHTML = '已导入Lodash, 现可获取唯一id'
      requestLodash.remove()
      receive = true
    }
    newWorker.onerror = function() {
      receive = false
    }
  }
})