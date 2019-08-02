$.fn.responsiveIframe = function(options) {
  var _this = this;
  var _randomClassName = "";
  var _options = null;
  
  var process = function() {
    _this.each(function() {
      $(this).wrap('<div class="' + _randomClassName + '"></div>');
    });
  };

  var createClasses = function() {
    _randomClassName = "responsiveiframe-" + parseInt(Math.random() * 1000000) + "-" + parseInt(Math.random() * 1000000);
    var styleCss = "." + _randomClassName + " { position: relative; padding-bottom: " + _options.ratio + "%; height: 0; overflow: hidden; max-width: 100% !important;} ." + _randomClassName + " iframe { position: absolute; top: 0; left: 0; width: 100% !important; height: 100% !important; }";
    var styleElem = document.createElement("style");
    styleElem.innerHTML = styleCss;
    document.head.appendChild(styleElem);
  };

  _options = options || {};
  var ratio = _options.ratio || (9 / 16);
  _options.ratio = ratio * 100;

  createClasses();
  setTimeout(process());
};
