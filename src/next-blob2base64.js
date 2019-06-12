(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.blob2base64 = function(inBlob) {
    return new Promise(function(resolve, reject) {
      var fileReader = new FileReader();
      fileReader.onload = function(e) {
        resolve(e.target.result);
      };
      fileReader.onerror = function(err) {
        reject(err);
      };
      fileReader.readAsDataURL(inBlob);
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.blob2base64;
  }
})();
