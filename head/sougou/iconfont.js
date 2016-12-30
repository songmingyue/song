;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-sougou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 914.26816c-223.19616 0-404.12672-180.92544-404.12672-404.11648 0-223.19616 180.93056-404.12672 404.12672-404.12672s404.12672 180.93056 404.12672 404.12672c0 99.10784-35.73248 189.824-94.94528 260.12672l32.16896 23.13216c63.84128-76.84096 102.24128-175.55456 102.24128-283.25376C955.59168 265.1648 756.98688 66.56 512 66.56c-244.992 0-443.59168 198.6048-443.59168 443.5968 0 244.98688 198.59968 443.5968 443.59168 443.5968a442.0864 442.0864 0 0 0 169.36448-33.57184l-19.9936-34.5344a402.97472 402.97472 0 0 1-149.37088 28.6208zM698.62912 922.89024l19.9936 34.54976a444.83072 444.83072 0 0 0 171.98592-126.7712l-32.16896-23.13216a404.80768 404.80768 0 0 1-159.81056 115.3536z" fill="#333333" ></path>' +
    '' +
    '<path d="M503.54176 677.62176s-161.38752 1.2032-249.29792-80.69632l-6.95296 114.41664s531.24096 192.6912 536.04864-116.8128c0 0 11.28448-73.472-181.0432-124.04736 0 0-75.87328-18.46784-161.37728-67.45088 0 0-44.04736-54.18496 90.32192-43.35104 159.37024 12.84608 243.2768 54.1952 243.2768 54.1952V312.70912s-363.70432-136.0896-505.81504 19.27168c0 0-48.17408 71.05024 0 115.6096 48.16896 44.55936 145.7152 101.1712 276.98688 134.8864-0.01024 0 168.60672 77.07136-42.14784 95.14496z" fill="#333333" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)