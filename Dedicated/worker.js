var xhr = new XMLHttpRequest()
xhr.open('GET', 'https://cdn.jsdelivr.net/npm/lodash@4.17.10/lodash.js')
xhr.send()
xhr.onreadystatechange = function() {
  if (xhr.status === 200 && xhr.readyState === 4) {
    postMessage(xhr.response)
  }
}
importScripts('subworker.js')