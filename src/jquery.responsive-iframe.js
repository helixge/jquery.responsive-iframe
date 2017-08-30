$.fn.responsiveIframe = function(options) {
  var _this = this;
  var _randomClassName = "";

  var process = function() {
    _this.each(function() {
      $(this).wrap('<div class="' + _randomClassName + '"></div>');
    });
  };

  var createClasses = function() {
    _randomClassName = "responsiveiframe-" + parseInt(Math.random() * 1000000) + "-" + parseInt(Math.random() * 1000000);
    var styleCss = "." + _randomClassName + " { position: relative; padding-bottom: 56.25%; padding-top: 25px; height: 0;} ." + _randomClassName + " iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }";
    var styleElem = document.createElement("style");
    styleElem.innerHTML = styleCss;
    document.head.appendChild(styleElem);
  };

  var _options = options || {};
  _options.ratio = (options.ratio || (9 / 16)) * 100;

  createClasses();
  setTimeout(process());
};
