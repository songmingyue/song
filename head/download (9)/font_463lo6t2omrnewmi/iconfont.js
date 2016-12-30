;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-moreunfold" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M478.31207 644.159081C502.692194 671.061286 542.819471 670.698193 566.819471 643.269621L837.388303 334.048098C845.146852 325.181184 844.248346 311.703582 835.381431 303.94503 826.514517 296.186481 813.036915 297.084988 805.278364 305.951902L534.709532 615.173423C527.507586 623.40422 517.168621 623.497773 509.927514 615.507586L229.141056 305.674253C221.229163 296.943889 207.737949 296.280386 199.007586 304.192277 190.277222 312.104171 189.61372 325.595383 197.525612 334.325747L478.31207 644.159081Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gouwuche" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M899.256928 335.124594c-3.988848-5.511527-10.380418-8.785084-17.191544-8.785084L291.844881 326.33951l-40.525995-169.58435c-2.284019-9.55154-10.82044-16.284895-20.635993-16.284895l-89.376587 0c-11.716856 0-21.216207 9.489118-21.216207 21.216207 0 11.727089 9.499351 21.216207 21.216207 21.216207l72.635297 0 130.267902 545.115212c-32.417317 10.012028-56.19793 39.901779-56.19793 75.561953 0 43.821041 35.641755 79.456656 79.446423 79.456656 43.809785 0 79.45154-35.636638 79.45154-79.456656 0-13.430894-3.667529-25.900903-9.577123-37.003775l189.101869 0c-5.909593 11.102872-9.577123 23.572882-9.577123 37.003775 0 43.821041 35.641755 79.456656 79.45154 79.456656 43.804668 0 79.446423-35.636638 79.446423-79.456656 0-43.799552-35.641755-79.43619-79.446423-79.43619L386.909004 724.143655l-9.463536-39.593763 400.347061 0c9.152451 0 17.274432-5.863545 20.143783-14.56574l104.272855-315.776943C904.347876 347.741959 903.249869 340.635097 899.256928 335.124594zM696.309726 766.575046c20.407796 0 37.014009 16.59598 37.014009 37.003775 0 20.407796-16.606213 37.025265-37.014009 37.025265-20.412912 0-37.019125-16.616446-37.019125-37.025265C659.289578 783.171026 675.895791 766.575046 696.309726 766.575046zM404.478148 803.578822c0 20.407796-16.606213 37.025265-37.019125 37.025265-20.407796 0-37.014009-16.616446-37.014009-37.025265 0-20.407796 16.606213-37.003775 37.014009-37.003775C387.871935 766.575046 404.478148 783.171026 404.478148 803.578822z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiaoxi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M303 512c-33.5 0-60.6-27.5-60.6-61.4 0-33.9 27.1-61.5 60.6-61.5 33.6 0 60.6 27.5 60.6 61.5C363.6 484.5 336.5 512 303 512zM497.2 512c-33.5 0-60.7-27.5-60.7-61.4 0-33.9 27.1-61.5 60.7-61.5 33.6 0 60.6 27.5 60.6 61.5C557.9 484.5 530.7 512 497.2 512zM691.4 512c-33.5 0-60.6-27.5-60.6-61.4 0-33.9 27.1-61.5 60.6-61.5s60.6 27.5 60.6 61.5C752.1 484.5 724.9 512 691.4 512z"  ></path>' +
    '' +
    '<path d="M510.3 60.3c-279.7 0.1-503.6 46.7-503.6 390.1 0 217.8 93.2 316.1 231.9 359l0 154.4L364 834c47.2 4.8 95.8 6.4 147.7 6.4 279.7 0 505.5-46.6 505.5-390.1C1017.2 106.9 790 60.4 510.3 60.3zM512.5 805.3c-47.9 0-116.1-2.7-159.6-7.2l-79.8 89 1.4-106.2c-140.6-38.4-215.1-167.6-215.1-323.3 0-299.7 203-353.3 451.1-353.3 241.4 4.5 452.9 39.2 452.9 353.3C956.3 750.6 770.2 805.3 512.5 805.3z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shouye02" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.009721 65.913199c-191.626365 0-346.963223 155.337881-346.963223 346.963223s346.963223 545.210379 346.963223 545.210379 346.942757-353.585037 346.942757-545.210379S703.615621 65.913199 512.009721 65.913199zM521.924535 561.591465c-98.54541 0-178.439018-79.896678-178.439018-178.459484 0-98.522897 79.893608-178.418552 178.439018-178.418552 98.541317 0 178.436972 79.895655 178.436972 178.418552C700.361507 481.694787 620.465852 561.591465 521.924535 561.591465z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconfont08" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M298.944 812.032m-64 0a1 1 0 1 0 128 0 1 1 0 1 0-128 0Z"  ></path>' +
    '' +
    '<path d="M654.848 812.032m-64 0a1 1 0 1 0 128 0 1 1 0 1 0-128 0Z"  ></path>' +
    '' +
    '<path d="M928 281.664c-30.656-17.664-69.76-7.168-87.424 23.424L658.56 576 384 576 384 192c0-35.392-28.608-64-64-64L128 128C92.608 128 64 156.608 64 192s28.608 64 64 64l128 0 0 384c0 35.392 28.608 64 64 64l358.656 0c40.192 0 61.376-22.656 88.704-60.928l184.064-273.92C969.152 338.496 958.656 299.392 928 281.664z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shouji-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M527.827 24.634c-259.218 0-469.357 210.139-469.357 469.357s210.139 469.357 469.357 469.357 469.357-210.139 469.357-469.357-210.139-469.357-469.357-469.357zM527.827 911.91c-230.811 0-417.92-187.109-417.92-417.92s187.109-417.92 417.92-417.92 417.92 187.109 417.92 417.92-187.109 417.92-417.92 417.92z"  ></path>' +
    '' +
    '<path d="M714.765053 713.905476c0 10.220782-2.043542 19.723204-6.131651 28.513404-4.087085 8.786107-9.707083 16.554024-16.863063 23.296589-7.15291 6.746658-15.531741 12.060687-25.13547 15.942087-9.606799 3.882424-19.928888 5.824659-30.964222 5.824659L418.005232 787.482215c-11.035334 0-21.357424-1.942235-30.964222-5.824659-9.603729-3.882424-17.98256-9.196453-25.139563-15.942087-7.15291-6.742565-12.771885-14.510482-16.859993-23.296589-4.086062-8.7902-6.130627-18.292622-6.130627-28.513404L338.910826 290.24136c0-10.218736 2.043542-19.824511 6.130627-28.816303 4.088108-8.994861 9.708106-16.863063 16.859993-23.606651 7.15598-6.745634 15.535835-12.059664 25.139563-15.942087 9.606799-3.882424 19.928888-5.825682 30.964222-5.825682l217.665415 0c11.035334 0 21.357424 1.943258 30.964222 5.825682 9.603729 3.882424 17.98256 9.196453 25.13547 15.942087 7.15598 6.743588 12.775978 14.611789 16.863063 23.606651 4.087085 8.991792 6.131651 18.597567 6.131651 28.816303L714.765053 713.905476 714.765053 713.905476zM665.100934 319.67267 387.961986 319.67267l0 364.189559 277.138948 0L665.100934 319.67267 665.100934 319.67267zM526.530948 701.031261c-8.584516 0-16.043395 3.064802-22.379707 9.196453-6.336312 6.130627-9.502421 13.693884-9.502421 22.685675 0 8.584516 3.166109 16.042371 9.502421 22.378683 6.336312 6.336312 13.795191 9.505491 22.379707 9.505491 8.993838 0 16.554024-3.169179 22.687722-9.505491 6.131651-6.336312 9.196453-13.794168 9.196453-22.378683 0-8.991792-3.064802-16.555048-9.196453-22.685675C543.084972 704.096063 535.524786 701.031261 526.530948 701.031261L526.530948 701.031261zM575.581084 267.556709c0-3.270487-1.02126-5.824659-3.064802-7.66354-2.043542-1.841951-4.291746-2.759857-6.742565-2.759857L487.903186 257.133312c-2.043542 0-4.188392 0.917906-6.436596 2.759857-2.248204 1.838881-3.371794 4.393054-3.371794 7.66354 0 3.270487 1.022283 5.824659 3.064802 7.66354 2.043542 1.838881 4.29277 2.759857 6.743588 2.759857l77.869508 0c2.450818 0 4.699022-0.920976 6.742565-2.759857C574.559824 273.381367 575.581084 270.827195 575.581084 267.556709L575.581084 267.556709zM575.581084 267.556709"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ren" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M513.022795 61.718667c-147.677411 0-267.395026 119.716592-267.395026 267.395026 0 147.678434 119.716592 267.395026 267.395026 267.395026S780.417821 476.792127 780.417821 329.11267C780.417821 181.435259 660.700205 61.718667 513.022795 61.718667zM513.021771 510.98795c-100.446713 0-181.874257-81.427544-181.874257-181.874257 0-100.447736 81.427544-181.874257 181.874257-181.874257 100.446713 0 181.875281 81.426521 181.875281 181.874257C694.897052 429.560406 613.468484 510.98795 513.021771 510.98795zM156.930657 959.469288c-0.032746-2.02103-0.056282-4.043083-0.056282-6.072299 0-197.981097 158.995177-358.477464 355.123067-358.477464 196.130959 0 355.126136 160.496367 355.126136 358.477464 0 2.028193-0.022513 4.051269-0.056282 6.072299l92.433202 0c0.026606-2.02103 0.042979-4.043083 0.042979-6.070252 0-244.530272-200.372563-442.760033-447.543989-442.760033-247.173472 0-447.546036 198.22976-447.546036 442.760033 0 2.026146 0.016373 4.049223 0.042979 6.070252L156.930657 959.469288z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wujiaoxing-shi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M748.115 931.785c-10.288 0-20.628-2.541-29.955-7.345L511.927 822.934 303.884 924.666c-20.12 10.625-47.928 8.762-67.367-5.425-19.614-13.963-29.73-38.774-25.66-62.963l42.895-220.306L90.135 484.846c-17.972-17.525-24.358-43.52-16.73-66.638 7.403-23.284 27.3-40.24 51.829-43.913l227.085-41.202 101.788-204.878c11.077-22.21 33.288-36 57.876-36 24.47 0 47.195 14.185 57.82 36.172l101.732 204.594 227.71 40.015c23.96 3.558 43.856 20.4 51.372 43.913 7.572 23 1.185 49.001-16.278 66.012L770.214 635.97l41.485 219.91c4.24 24.418-5.88 49.23-25.828 63.584-10.798 7.856-24.307 12.32-37.756 12.32zM511.983 772.574" fill="" ></path>' +
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