/*!
 * name: @jswork/next-blob2base64
 * description: Blob to base64.
 * homepage: https://github.com/afeiship/next-blob2base64
 * version: 1.0.0
 * date: 2020-11-21 10:38:31
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var DEFAULT_OPTIONS = { callback: nx.stubValue };

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
