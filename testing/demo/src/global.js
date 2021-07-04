var agent = function(global) {
  return /iPhone|iPad/.test(global.navigator.userAgent) ?
    "ios" : "android";
};