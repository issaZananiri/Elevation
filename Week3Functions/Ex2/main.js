const time = new Date()


const getTime = function (func) {
  func(time)
}
const returnTime = function (time) {
    alert('Current time : ' + time)
  }

getTime(returnTime)