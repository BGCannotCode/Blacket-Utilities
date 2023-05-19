const originalLog = console.log
console.log = function () {
  if (arguments.length === 1 && (arguments[0].type === 'heartbeat' || arguments[0].type === 'chat')) return;
  originalLog.apply(console, arguments)
}
