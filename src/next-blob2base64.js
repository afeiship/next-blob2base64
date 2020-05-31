(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var DEFAULT_OPTIONS = {
    callback: function (inBlob) {
      return inBlob;
    }
  };

  nx.blob2base64 = function (inBlob, inOptions) {
    return new Promise(function (resolve, reject) {
      var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
      var fileReader = new FileReader();
      fileReader.onload = function (e) {
        resolve(e.target.result);
      };
      fileReader.onerror = function (err) {
        reject(err);
      };
      fileReader.readAsDataURL(options.callback(inBlob));
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.blob2base64;
  }
})();
