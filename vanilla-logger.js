(function () {
  var winConsole = this.console || {},
      logFunc = winConsole.log;

  var Logger = winConsole;

  Logger.isDebugMode = null;

  Logger.debugMode = function(isDebug) {
    Logger.isDebugMode = isDebug;
    if (isDebug) {
        this.log = logFunc;
        this.error = logFunc;
        this.info = logFunc;
        this.warn = logFunc;
    } else {
        this.log = function() {
            return false;
        };
        this.error = function(msg) {
            return false;
        };
        this.info = function(msg) {
            return false;
        };
        this.warn = function(msg) {
            return false;
        };
    }
  };

  Logger.getDebugMode = function () {
    return Logger.isDebugMode;
  };

  if (typeof exports !== 'undefined') {
    module.exports = Logger;
  } else {
    window.vLogger = Logger;
  }
})();
