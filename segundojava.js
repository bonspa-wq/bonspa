(function(modules) {
  var installedModules = {};

  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    var module = installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    };
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    module.l = true;
    return module.exports;
  }
  __webpack_require__.m = modules;
  __webpack_require__.c = installedModules;
  __webpack_require__.i = function(value) {
    return value;
  };
  __webpack_require__.d = function(exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, {
        configurable: false,
        enumerable: true,
        get: getter
      });
    }
  };
  __webpack_require__.n = function(module) {
    var getter = module && module.__esModule ? function getDefault() {
      return module['default'];
    } : function getModuleExports() {
      return module;
    };
    __webpack_require__.d(getter, 'a', getter);
    return getter;
  };
  __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  __webpack_require__.p = "";
  return __webpack_require__(__webpack_require__.s = 35);
})
([(function(module, exports) {
  module.exports = jQuery;
}), (function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.d(__webpack_exports__, "b", function() {
    return rtl;
  });
  __webpack_require__.d(__webpack_exports__, "a", function() {
    return GetYoDigits;
  });
  __webpack_require__.d(__webpack_exports__, "c", function() {
    return transitionend;
  });
  var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);

  function rtl() {
    return __WEBPACK_IMPORTED_MODULE_0_jquery___default()('html').attr('dir') === 'rtl';
  }

  function GetYoDigits(length, namespace) {
    length = length || 6;
    return Math.round(Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)).toString(36).slice(1) + (namespace ? '-' + namespace : '');
  }

  function transitionend($elem) {
    var transitions = {
      'transition': 'transitionend',
      'WebkitTransition': 'webkitTransitionEnd',
      'MozTransition': 'transitionend',
      'OTransition': 'otransitionend'
    };
    var elem = document.createElement('div'),
      end;
    for (var t in transitions) {
      if (typeof elem.style[t] !== 'undefined') {
        end = transitions[t];
      }
    }
    if (end) {
      return end;
    } else {
      end = setTimeout(function() {
        $elem.triggerHandler('transitionend', [$elem]);
      }, 1);
      return 'transitionend';
    }
  }
}), (function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.d(__webpack_exports__, "a", function() {
    return Plugin;
  });
  var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
  var __WEBPACK_IMPORTED_MODULE_1__foundation_util_core__ = __webpack_require__(1);
  var _createClass = function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var Plugin = function() {
    function Plugin(element, options) {
      _classCallCheck(this, Plugin);
      this._setup(element, options);
      var pluginName = getPluginName(this);
      this.uuid = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__foundation_util_core__["a"])(6, pluginName);
      if (!this.$element.attr('data-' + pluginName)) {
        this.$element.attr('data-' + pluginName, this.uuid);
      }
      if (!this.$element.data('zfPlugin')) {
        this.$element.data('zfPlugin', this);
      }
      this.$element.trigger('init.zf.' + pluginName);
    }
    _createClass(Plugin, [{
      key: 'destroy',
      value: function destroy() {
        this._destroy();
        var pluginName = getPluginName(this);
        this.$element.removeAttr('data-' + pluginName).removeData('zfPlugin').trigger('destroyed.zf.' + pluginName);
        for (var prop in this) {
          this[prop] = null;
        }
      }
    }]);
    return Plugin;
  }();

  function hyphenate(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }

  function getPluginName(obj) {
    if (typeof obj.constructor.name !== 'undefined') {
      return hyphenate(obj.constructor.name);
    } else {
      return hyphenate(obj.className);
    }
  }
}), (function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.d(__webpack_exports__, "a", function() {
    return MediaQuery;
  });
  var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
  var defaultQueries = {
    'default': 'only screen',
    landscape: 'only screen and (orientation: landscape)',
    portrait: 'only screen and (orientation: portrait)',
    retina: 'only screen and (-webkit-min-device-pixel-ratio: 2),' + 'only screen and (min--moz-device-pixel-ratio: 2),' + 'only screen and (-o-min-device-pixel-ratio: 2/1),' + 'only screen and (min-device-pixel-ratio: 2),' + 'only screen and (min-resolution: 192dpi),' + 'only screen and (min-resolution: 2dppx)'
  };
  var matchMedia = window.matchMedia || function() {
    'use strict';
    var styleMedia = window.styleMedia || window.media;
    if (!styleMedia) {
      var style = document.createElement('style'),
        script = document.getElementsByTagName('script')[0],
        info = null;
      style.type = 'text/css';
      style.id = 'matchmediajs-test';
      script && script.parentNode && script.parentNode.insertBefore(style, script);
      info = 'getComputedStyle' in window && window.getComputedStyle(style, null) || style.currentStyle;
      styleMedia = {
        matchMedium: function(media) {
          var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }';
          if (style.styleSheet) {
            style.styleSheet.cssText = text;
          } else {
            style.textContent = text;
          }
          return info.width === '1px';
        }
      };
    }
    return function(media) {
      return {
        matches: styleMedia.matchMedium(media || 'all'),
        media: media || 'all'
      };
    };
  }();
  var MediaQuery = {
    queries: [],
    current: '',
    _init: function() {
      var self = this;
      var $meta = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('meta.foundation-mq');
      if (!$meta.length) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('<meta class="foundation-mq">').appendTo(document.head);
      }
      var extractedStyles = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.foundation-mq').css('font-family');
      var namedQueries;
      namedQueries = parseStyleToObject(extractedStyles);
      for (var key in namedQueries) {
        if (namedQueries.hasOwnProperty(key)) {
          self.queries.push({
            name: key,
            value: 'only screen and (min-width: ' + namedQueries[key] + ')'
          });
        }
      }
      this.current = this._getCurrentSize();
      this._watcher();
    },
    atLeast: function(size) {
      var query = this.get(size);
      if (query) {
        return matchMedia(query).matches;
      }
      return false;
    },
    is: function(size) {
      size = size.trim().split(' ');
      if (size.length > 1 && size[1] === 'only') {
        if (size[0] === this._getCurrentSize()) return true;
      } else {
        return this.atLeast(size[0]);
      }
      return false;
    },
    get: function(size) {
      for (var i in this.queries) {
        if (this.queries.hasOwnProperty(i)) {
          var query = this.queries[i];
          if (size === query.name) return query.value;
        }
      }
      return null;
    },
    _getCurrentSize: function() {
      var matched;
      for (var i = 0; i < this.queries.length; i++) {
        var query = this.queries[i];
        if (matchMedia(query.value).matches) {
          matched = query;
        }
      }
      if (typeof matched === 'object') {
        return matched.name;
      } else {
        return matched;
      }
    },
    _watcher: function() {
      var _this = this;
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off('resize.zf.mediaquery').on('resize.zf.mediaquery', function() {
        var newSize = _this._getCurrentSize(),
          currentSize = _this.current;
        if (newSize !== currentSize) {
          _this.current = newSize;
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).trigger('changed.zf.mediaquery', [newSize, currentSize]);
        }
      });
    }
  };

  function parseStyleToObject(str) {
    var styleObject = {};
    if (typeof str !== 'string') {
      return styleObject;
    }
    str = str.trim().slice(1, -1);
    if (!str) {
      return styleObject;
    }
    styleObject = str.split('&').reduce(function(ret, param) {
      var parts = param.replace(/\+/g, ' ').split('=');
      var key = parts[0];
      var val = parts[1];
      key = decodeURIComponent(key);
      val = val === undefined ? null : decodeURIComponent(val);
      if (!ret.hasOwnProperty(key)) {
        ret[key] = val;
      } else if (Array.isArray(ret[key])) {
        ret[key].push(val);
      } else {
        ret[key] = [ret[key], val];
      }
      return ret;
    }, {});
    return styleObject;
  }
}), (function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.d(__webpack_exports__, "a", function() {
    return Keyboard;
  });
  var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
  var __WEBPACK_IMPORTED_MODULE_1__foundation_util_core__ = __webpack_require__(1);
  var keyCodes = {
    9: 'TAB',
    13: 'ENTER',
    27: 'ESCAPE',
    32: 'SPACE',
    35: 'END',
    36: 'HOME',
    37: 'ARROW_LEFT',
    38: 'ARROW_UP',
    39: 'ARROW_RIGHT',
    40: 'ARROW_DOWN'
  };
  var commands = {};

  function findFocusable($element) {
    if (!$element) {
      return false;
    }
    return $element.find('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]').filter(function() {
      if (!__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).is(':visible') || __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).attr('tabindex') < 0) {
        return false;
      }
      return true;
    });
  }

  function parseKey(event) {
    var key = keyCodes[event.which || event.keyCode] || String.fromCharCode(event.which).toUpperCase();
    key = key.replace(/\W+/, '');
    if (event.shiftKey) key = 'SHIFT_' + key;
    if (event.ctrlKey) key = 'CTRL_' + key;
    if (event.altKey) key = 'ALT_' + key;
    key = key.replace(/_$/, '');
    return key;
  }
  var Keyboard = {
    keys: getKeyCodes(keyCodes),
    parseKey: parseKey,
    handleKey: function(event, component, functions) {
      var commandList = commands[component],
        keyCode = this.parseKey(event),
        cmds, command, fn;
      if (!commandList) return console.warn('Component not defined!');
      if (typeof commandList.ltr === 'undefined') {
        cmds = commandList;
      } else {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__foundation_util_core__["b"])()) cmds = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, commandList.ltr, commandList.rtl);
        else cmds = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, commandList.rtl, commandList.ltr);
      }
      command = cmds[keyCode];
      fn = functions[command];
      if (fn && typeof fn === 'function') {
        var returnValue = fn.apply();
        if (functions.handled || typeof functions.handled === 'function') {
          functions.handled(returnValue);
        }
      } else {
        if (functions.unhandled || typeof functions.unhandled === 'function') {
          functions.unhandled();
        }
      }
    },
    findFocusable: findFocusable,
    register: function(componentName, cmds) {
      commands[componentName] = cmds;
    },
    trapFocus: function($element) {
      var $focusable = findFocusable($element),
        $firstFocusable = $focusable.eq(0),
        $lastFocusable = $focusable.eq(-1);
      $element.on('keydown.zf.trapfocus', function(event) {
        if (event.target === $lastFocusable[0] && parseKey(event) === 'TAB') {
          event.preventDefault();
          $firstFocusable.focus();
        } else if (event.target === $firstFocusable[0] && parseKey(event) === 'SHIFT_TAB') {
          event.preventDefault();
          $lastFocusable.focus();
        }
      });
    },
    releaseFocus: function($element) {
      $element.off('keydown.zf.trapfocus');
    }
  };

  function getKeyCodes(kcs) {
    var k = {};
    for (var kc in kcs) {
      k[kcs[kc]] = kcs[kc];
    }
    return k;
  }
}), (function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.d(__webpack_exports__, "a", function() {
    return Triggers;
  });
  var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
  var __WEBPACK_IMPORTED_MODULE_1__foundation_util_motion__ = __webpack_require__(6);
  var MutationObserver = function() {
    var prefixes = ['WebKit', 'Moz', 'O', 'Ms', ''];
    for (var i = 0; i < prefixes.length; i++) {
      if (prefixes[i] + 'MutationObserver' in window) {
        return window[prefixes[i] + 'MutationObserver'];
      }
    }
    return false;
  }();
  var triggers = function(el, type) {
    el.data(type).split(' ').forEach(function(id) {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + id)[type === 'close' ? 'trigger' : 'triggerHandler'](type + '.zf.trigger', [el]);
    });
  };
  var Triggers = {
    Listeners: {
      Basic: {},
      Global: {}
    },
    Initializers: {}
  };
  Triggers.Listeners.Basic = {
    openListener: function() {
      triggers(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this), 'open');
    },
    closeListener: function() {
      var id = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data('close');
      if (id) {
        triggers(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this), 'close');
      } else {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).trigger('close.zf.trigger');
      }
    },
    toggleListener: function() {
      var id = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data('toggle');
      if (id) {
        triggers(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this), 'toggle');
      } else {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).trigger('toggle.zf.trigger');
      }
    },
    closeableListener: function(e) {
      e.stopPropagation();
      var animation = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data('closable');
      if (animation !== '') {
        __WEBPACK_IMPORTED_MODULE_1__foundation_util_motion__["a"].animateOut(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this), animation, function() {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).trigger('closed.zf');
        });
      } else {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).fadeOut().trigger('closed.zf');
      }
    },
    toggleFocusListener: function() {
      var id = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data('toggle-focus');
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + id).triggerHandler('toggle.zf.trigger', [__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this)]);
    }
  };
  Triggers.Initializers.addOpenListener = function($elem) {
    $elem.off('click.zf.trigger', Triggers.Listeners.Basic.openListener);
    $elem.on('click.zf.trigger', '[data-open]', Triggers.Listeners.Basic.openListener);
  };
  Triggers.Initializers.addCloseListener = function($elem) {
    $elem.off('click.zf.trigger', Triggers.Listeners.Basic.closeListener);
    $elem.on('click.zf.trigger', '[data-close]', Triggers.Listeners.Basic.closeListener);
  };
  Triggers.Initializers.addToggleListener = function($elem) {
    $elem.off('click.zf.trigger', Triggers.Listeners.Basic.toggleListener);
    $elem.on('click.zf.trigger', '[data-toggle]', Triggers.Listeners.Basic.toggleListener);
  };
  Triggers.Initializers.addCloseableListener = function($elem) {
    $elem.off('close.zf.trigger', Triggers.Listeners.Basic.closeableListener);
    $elem.on('close.zf.trigger', '[data-closeable], [data-closable]', Triggers.Listeners.Basic.closeableListener);
  };
  Triggers.Initializers.addToggleFocusListener = function($elem) {
    $elem.off('focus.zf.trigger blur.zf.trigger', Triggers.Listeners.Basic.toggleFocusListener);
    $elem.on('focus.zf.trigger blur.zf.trigger', '[data-toggle-focus]', Triggers.Listeners.Basic.toggleFocusListener);
  };
  Triggers.Listeners.Global = {
    resizeListener: function($nodes) {
      if (!MutationObserver) {
        $nodes.each(function() {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).triggerHandler('resizeme.zf.trigger');
        });
      }
      $nodes.attr('data-events', "resize");
    },
    scrollListener: function($nodes) {
      if (!MutationObserver) {
        $nodes.each(function() {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).triggerHandler('scrollme.zf.trigger');
        });
      }
      $nodes.attr('data-events', "scroll");
    },
    closeMeListener: function(e, pluginId) {
      var plugin = e.namespace.split('.')[0];
      var plugins = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-' + plugin + ']').not('[data-yeti-box="' + pluginId + '"]');
      plugins.each(function() {
        var _this = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this);
        _this.triggerHandler('close.zf.trigger', [_this]);
      });
    }
  };
  Triggers.Initializers.addClosemeListener = function(pluginName) {
    var yetiBoxes = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-yeti-box]'),
      plugNames = ['dropdown', 'tooltip', 'reveal'];
    if (pluginName) {
      if (typeof pluginName === 'string') {
        plugNames.push(pluginName);
      } else if (typeof pluginName === 'object' && typeof pluginName[0] === 'string') {
        plugNames.concat(pluginName);
      } else {
        console.error('Plugin names must be strings');
      }
    }
    if (yetiBoxes.length) {
      var listeners = plugNames.map(function(name) {
        return 'closeme.zf.' + name;
      }).join(' ');
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off(listeners).on(listeners, Triggers.Listeners.Global.closeMeListener);
    }
  };

  function debounceGlobalListener(debounce, trigger, listener) {
    var timer = void 0,
      args = Array.prototype.slice.call(arguments, 3);
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off(trigger).on(trigger, function(e) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(function() {
        listener.apply(null, args);
      }, debounce || 10);
    });
  }
  Triggers.Initializers.addResizeListener = function(debounce) {
    var $nodes = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-resize]');
    if ($nodes.length) {
      debounceGlobalListener(debounce, 'resize.zf.trigger', Triggers.Listeners.Global.resizeListener, $nodes);
    }
  };
  Triggers.Initializers.addScrollListener = function(debounce) {
    var $nodes = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-scroll]');
    if ($nodes.length) {
      debounceGlobalListener(debounce, 'scroll.zf.trigger', Triggers.Listeners.Global.scrollListener, $nodes);
    }
  };
  Triggers.Initializers.addMutationEventsListener = function($elem) {
    if (!MutationObserver) {
      return false;
    }
    var $nodes = $elem.find('[data-resize], [data-scroll], [data-mutate]');
    var listeningElementsMutation = function(mutationRecordsList) {
      var $target = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(mutationRecordsList[0].target);
      switch (mutationRecordsList[0].type) {
        case "attributes":
          if ($target.attr("data-events") === "scroll" && mutationRecordsList[0].attributeName === "data-events") {
            $target.triggerHandler('scrollme.zf.trigger', [$target, window.pageYOffset]);
          }
          if ($target.attr("data-events") === "resize" && mutationRecordsList[0].attributeName === "data-events") {
            $target.triggerHandler('resizeme.zf.trigger', [$target]);
          }
          if (mutationRecordsList[0].attributeName === "style") {
            $target.closest("[data-mutate]").attr("data-events", "mutate");
            $target.closest("[data-mutate]").triggerHandler('mutateme.zf.trigger', [$target.closest("[data-mutate]")]);
          }
          break;
        case "childList":
          $target.closest("[data-mutate]").attr("data-events", "mutate");
          $target.closest("[data-mutate]").triggerHandler('mutateme.zf.trigger', [$target.closest("[data-mutate]")]);
          break;
        default:
          return false;
      }
    };
    if ($nodes.length) {
      for (var i = 0; i <= $nodes.length - 1; i++) {
        var elementObserver = new MutationObserver(listeningElementsMutation);
        elementObserver.observe($nodes[i], {
          attributes: true,
          childList: true,
          characterData: false,
          subtree: true,
          attributeFilter: ["data-events", "style"]
        });
      }
    }
  };
  Triggers.Initializers.addSimpleListeners = function() {
    var $document = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document);
    Triggers.Initializers.addOpenListener($document);
    Triggers.Initializers.addCloseListener($document);
    Triggers.Initializers.addToggleListener($document);
    Triggers.Initializers.addCloseableListener($document);
    Triggers.Initializers.addToggleFocusListener($document);
  };
  Triggers.Initializers.addGlobalListeners = function() {
    var $document = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document);
    Triggers.Initializers.addMutationEventsListener($document);
    Triggers.Initializers.addResizeListener();
    Triggers.Initializers.addScrollListener();
    Triggers.Initializers.addClosemeListener();
  };
  Triggers.init = function($, Foundation) {
    if (typeof $.triggersInitialized === 'undefined') {
      var $document = $(document);
      if (document.readyState === "complete") {
        Triggers.Initializers.addSimpleListeners();
        Triggers.Initializers.addGlobalListeners();
      } else {
        $(window).on('load', function() {
          Triggers.Initializers.addSimpleListeners();
          Triggers.Initializers.addGlobalListeners();
        });
      }
      $.triggersInitialized = true;
    }
    if (Foundation) {
      Foundation.Triggers = Triggers;
      Foundation.IHearYou = Triggers.Initializers.addGlobalListeners;
    }
  };
}), (function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.d(__webpack_exports__, "b", function() {
    return Move;
  });
  __webpack_require__.d(__webpack_exports__, "a", function() {
    return Motion;
  });
  var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
  var __WEBPACK_IMPORTED_MODULE_1__foundation_util_core__ = __webpack_require__(1);
  var initClasses = ['mui-enter', 'mui-leave'];
  var activeClasses = ['mui-enter-active', 'mui-leave-active'];
  var Motion = {
    animateIn: function(element, animation, cb) {
      animate(true, element, animation, cb);
    },
    animateOut: function(element, animation, cb) {
      animate(false, element, animation, cb);
    }
  };

  function Move(duration, elem, fn) {
    var anim, prog, start = null;
    if (duration === 0) {
      fn.apply(elem);
      elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);
      return;
    }

    function move(ts) {
      if (!start) start = ts;
      prog = ts - start;
      fn.apply(elem);
      if (prog < duration) {
        anim = window.requestAnimationFrame(move, elem);
      } else {
        window.cancelAnimationFrame(anim);
        elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);
      }
    }
    anim = window.requestAnimationFrame(move);
  }

  function animate(isIn, element, animation, cb) {
    element = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).eq(0);
    if (!element.length) return;
    var initClass = isIn ? initClasses[0] : initClasses[1];
    var activeClass = isIn ? activeClasses[0] : activeClasses[1];
    reset();
    element.addClass(animation).css('transition', 'none');
    requestAnimationFrame(function() {
      element.addClass(initClass);
      if (isIn) element.show();
    });
    requestAnimationFrame(function() {
      element[0].offsetWidth;
      element.css('transition', '').addClass(activeClass);
    });
    element.one(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__foundation_util_core__["c"])(element), finish);

    function finish() {
      if (!isIn) element.hide();
      reset();
      if (cb) cb.apply(element);
    }

    function reset() {
      element[0].style.transitionDuration = 0;
      element.removeClass(initClass + ' ' + activeClass + ' ' + animation);
    }
  }
}), (function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.d(__webpack_exports__, "a", function() {
    return Box;
  });
  var __WEBPACK_IMPORTED_MODULE_0__foundation_util_core__ = __webpack_require__(1);
  var Box = {
    ImNotTouchingYou: ImNotTouchingYou,
    OverlapArea: OverlapArea,
    GetDimensions: GetDimensions,
    GetOffsets: GetOffsets,
    GetExplicitOffsets: GetExplicitOffsets
  };

  function ImNotTouchingYou(element, parent, lrOnly, tbOnly, ignoreBottom) {
    return OverlapArea(element, parent, lrOnly, tbOnly, ignoreBottom) === 0;
  };

  function OverlapArea(element, parent, lrOnly, tbOnly, ignoreBottom) {
    var eleDims = GetDimensions(element),
      topOver, bottomOver, leftOver, rightOver;
    if (parent) {
      var parDims = GetDimensions(parent);
      bottomOver = parDims.height + parDims.offset.top - (eleDims.offset.top + eleDims.height);
      topOver = eleDims.offset.top - parDims.offset.top;
      leftOver = eleDims.offset.left - parDims.offset.left;
      rightOver = parDims.width + parDims.offset.left - (eleDims.offset.left + eleDims.width);
    } else {
      bottomOver = eleDims.windowDims.height + eleDims.windowDims.offset.top - (eleDims.offset.top + eleDims.height);
      topOver = eleDims.offset.top - eleDims.windowDims.offset.top;
      leftOver = eleDims.offset.left - eleDims.windowDims.offset.left;
      rightOver = eleDims.windowDims.width - (eleDims.offset.left + eleDims.width);
    }
    bottomOver = ignoreBottom ? 0 : Math.min(bottomOver, 0);
    topOver = Math.min(topOver, 0);
    leftOver = Math.min(leftOver, 0);
    rightOver = Math.min(rightOver, 0);
    if (lrOnly) {
      return leftOver + rightOver;
    }
    if (tbOnly) {
      return topOver + bottomOver;
    }
    return Math.sqrt(topOver * topOver + bottomOver * bottomOver + leftOver * leftOver + rightOver * rightOver);
  }

  function GetDimensions(elem) {
    elem = elem.length ? elem[0] : elem;
    if (elem === window || elem === document) {
      throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");
    }
    var rect = elem.getBoundingClientRect(),
      parRect = elem.parentNode.getBoundingClientRect(),
      winRect = document.body.getBoundingClientRect(),
      winY = window.pageYOffset,
      winX = window.pageXOffset;
    return {
      width: rect.width,
      height: rect.height,
      offset: {
        top: rect.top + winY,
        left: rect.left + winX
      },
      parentDims: {
        width: parRect.width,
        height: parRect.height,
        offset: {
          top: parRect.top + winY,
          left: parRect.left + winX
        }
      },
      windowDims: {
        width: winRect.width,
        height: winRect.height,
        offset: {
          top: winY,
          left: winX
        }
      }
    };
  }

  function GetOffsets(element, anchor, position, vOffset, hOffset, isOverflow) {
    console.log("NOTE: GetOffsets is deprecated in favor of GetExplicitOffsets and will be removed in 6.5");
    switch (position) {
      case 'top':
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__foundation_util_core__["b"])() ? GetExplicitOffsets(element, anchor, 'top', 'left', vOffset, hOffset, isOverflow) : GetExplicitOffsets(element, anchor, 'top', 'right', vOffset, hOffset, isOverflow);
      case 'bottom':
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__foundation_util_core__["b"])() ? GetExplicitOffsets(element, anchor, 'bottom', 'left', vOffset, hOffset, isOverflow) : GetExplicitOffsets(element, anchor, 'bottom', 'right', vOffset, hOffset, isOverflow);
      case 'center top':
        return GetExplicitOffsets(element, anchor, 'top', 'center', vOffset, hOffset, isOverflow);
      case 'center bottom':
        return GetExplicitOffsets(element, anchor, 'bottom', 'center', vOffset, hOffset, isOverflow);
      case 'center left':
        return GetExplicitOffsets(element, anchor, 'left', 'center', vOffset, hOffset, isOverflow);
      case 'center right':
        return GetExplicitOffsets(element, anchor, 'right', 'center', vOffset, hOffset, isOverflow);
      case 'left bottom':
        return GetExplicitOffsets(element, anchor, 'bottom', 'left', vOffset, hOffset, isOverflow);
      case 'right bottom':
        return GetExplicitOffsets(element, anchor, 'bottom', 'right', vOffset, hOffset, isOverflow);
      case 'center':
        return {
          left: $eleDims.windowDims.offset.left + $eleDims.windowDims.width / 2 - $eleDims.width / 2 + hOffset, top: $eleDims.windowDims.offset.top + $eleDims.windowDims.height / 2 - ($eleDims.height / 2 + vOffset)
        };
      case 'reveal':
        return {
          left: ($eleDims.windowDims.width - $eleDims.width) / 2 + hOffset, top: $eleDims.windowDims.offset.top + vOffset
        };
      case 'reveal full':
        return {
          left: $eleDims.windowDims.offset.left, top: $eleDims.windowDims.offset.top
        };
        break;
      default:
        return {
          left: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__foundation_util_core__["b"])() ? $anchorDims.offset.left - $eleDims.width + $anchorDims.width - hOffset : $anchorDims.offset.left + hOffset, top: $anchorDims.offset.top + $anchorDims.height + vOffset
        };
    }
  }

  function GetExplicitOffsets(element, anchor, position, alignment, vOffset, hOffset, isOverflow) {
    var $eleDims = GetDimensions(element),
      $anchorDims = anchor ? GetDimensions(anchor) : null;
    var topVal, leftVal;
    switch (position) {
      case 'top':
        topVal = $anchorDims.offset.top - ($eleDims.height + vOffset);
        break;
      case 'bottom':
        topVal = $anchorDims.offset.top + $anchorDims.height + vOffset;
        break;
      case 'left':
        leftVal = $anchorDims.offset.left - ($eleDims.width + hOffset);
        break;
      case 'right':
        leftVal = $anchorDims.offset.left + $anchorDims.width + hOffset;
        break;
    }
    switch (position) {
      case 'top':
      case 'bottom':
        switch (alignment) {
          case 'left':
            leftVal = $anchorDims.offset.left + hOffset;
            break;
          case 'right':
            leftVal = $anchorDims.offset.left - $eleDims.width + $anchorDims.width - hOffset;
            break;
          case 'center':
            leftVal = isOverflow ? hOffset : $anchorDims.offset.left + $anchorDims.width / 2 - $eleDims.width / 2 + hOffset;
            break;
        }
        break;
      case 'right':
      case 'left':
        switch (alignment) {
          case 'bottom':
            topVal = $anchorDims.offset.top - vOffset + $anchorDims.height - $eleDims.height;
            break;
          case 'top':
            topVal = $anchorDims.offset.top + vOffset;
            break;
          case 'center':
            topVal = $anchorDims.offset.top + vOffset + $anchorDims.height / 2 - $eleDims.height / 2;
            break;
        }
        break;
    }
    return {
      top: topVal,
      left: leftVal
    };
  }
}), (function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.d(__webpack_exports__, "a", function() {
    return onImagesLoaded;
  });
  var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);

  function onImagesLoaded(images, callback) {
    var self = this,
      unloaded = images.length;
    if (unloaded === 0) {
      callback();
    }
    images.each(function() {
      if (this.complete && this.naturalWidth !== undefined) {
        singleImageLoaded();
      } else {
        var image = new Image();
        var events = "load.zf.images error.zf.images";
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(image).one(events, function me(event) {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).off(events, me);
          singleImageLoaded();
        });
        image.src = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).attr('src');
      }
    });

    function singleImageLoaded() {
      unloaded--;
      if (unloaded === 0) {
        callback();
      }
    }
  }
}), (function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.d(__webpack_exports__, "a", function() {
    return Nest;
  });
  var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
  var Nest = {
    Feather: function(menu) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'zf';
      menu.attr('role', 'menubar');
      var items = menu.find('li').attr({
          'role': 'menuitem'
        }),
        subMenuClass = 'is-' + type + '-submenu',
        subItemClass = subMenuClass + '-item',
        hasSubClass = 'is-' + type + '-submenu-parent',
        applyAria = type !== 'accordion';
      items.each(function() {
        var $item = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this),
          $sub = $item.children('ul');
        if ($sub.length) {
          $item.addClass(hasSubClass);
          $sub.addClass('submenu ' + subMenuClass).attr({
            'data-submenu': ''
          });
          if (applyAria) {
            $item.attr({
              'aria-haspopup': true,
              'aria-label': $item.children('a:first').text()
            });
            if (type === 'drilldown') {
              $item.attr({
                'aria-expanded': false
              });
            }
          }
          $sub.addClass('submenu ' + subMenuClass).attr({
            'data-submenu': '',
            'role': 'menu'
          });
          if (type === 'drilldown') {
            $sub.attr({
              'aria-hidden': true
            });
          }
        }
        if ($item.parent('[data-submenu]').length) {
          $item.addClass('is-submenu-item ' + subItemClass);
        }
      });
      return;
    },
    Burn: function(menu, type) {
      var
        subMenuClass = 'is-' + type + '-submenu',
        subItemClass = subMenuClass + '-item',
        hasSubClass = 'is-' + type + '-submenu-parent';
      menu.find('>li, .menu, .menu > li').removeClass(subMenuClass + ' ' + subItemClass + ' ' + hasSubClass + ' is-submenu-item submenu is-active').removeAttr('data-submenu').css('display', '');
    }
  };
}), (function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.d(__webpack_exports__, "a", function() {
    return Accordion;
  });
  var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
  var __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__ = __webpack_require__(4);
  var __WEBPACK_IMPORTED_MODULE_2__foundation_util_core__ = __webpack_require__(1);
  var __WEBPACK_IMPORTED_MODULE_3__foundation_plugin__ = __webpack_require__(2);
  var _createClass = function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var Accordion = function(_Plugin) {
    _inherits(Accordion, _Plugin);

    function Accordion() {
      _classCallCheck(this, Accordion);
      return _possibleConstructorReturn(this, (Accordion.__proto__ || Object.getPrototypeOf(Accordion)).apply(this, arguments));
    }
    _createClass(Accordion, [{
      key: '_setup',
      value: function _setup(element, options) {
        this.$element = element;
        this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, Accordion.defaults, this.$element.data(), options);
        this.className = 'Accordion';
        this._init();
        __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a"].register('Accordion', {
          'ENTER': 'toggle',
          'SPACE': 'toggle',
          'ARROW_DOWN': 'next',
          'ARROW_UP': 'previous'
        });
      }
    }, {
      key: '_init',
      value: function _init() {
        var _this3 = this;
        this.$element.attr('role', 'tablist');
        this.$tabs = this.$element.children('[data-accordion-item]');
        this.$tabs.each(function(idx, el) {
          var $el = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(el),
            $content = $el.children('[data-tab-content]'),
            id = $content[0].id || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__foundation_util_core__["a"])(6, 'accordion'),
            linkId = el.id || id + '-label';
          $el.find('a:first').attr({
            'aria-controls': id,
            'role': 'tab',
            'id': linkId,
            'aria-expanded': false,
            'aria-selected': false
          });
          $content.attr({
            'role': 'tabpanel',
            'aria-labelledby': linkId,
            'aria-hidden': true,
            'id': id
          });
        });
        var $initActive = this.$element.find('.is-active').children('[data-tab-content]');
        this.firstTimeInit = true;
        if ($initActive.length) {
          this.down($initActive, this.firstTimeInit);
          this.firstTimeInit = false;
        }
        this._checkDeepLink = function() {
          var anchor = window.location.hash;
          if (anchor.length) {
            var $link = _this3.$element.find('[href$="' + anchor + '"]'),
              $anchor = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(anchor);
            if ($link.length && $anchor) {
              if (!$link.parent('[data-accordion-item]').hasClass('is-active')) {
                _this3.down($anchor, _this3.firstTimeInit);
                _this3.firstTimeInit = false;
              };
              if (_this3.options.deepLinkSmudge) {
                var _this = _this3;
                __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).load(function() {
                  var offset = _this.$element.offset();
                  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('html, body').animate({
                    scrollTop: offset.top
                  }, _this.options.deepLinkSmudgeDelay);
                });
              }
              _this3.$element.trigger('deeplink.zf.accordion', [$link, $anchor]);
            }
          }
        };
        if (this.options.deepLink) {
          this._checkDeepLink();
        }
        this._events();
      }
    }, {
      key: '_events',
      value: function _events() {
        var _this = this;
        this.$tabs.each(function() {
          var $elem = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this);
          var $tabContent = $elem.children('[data-tab-content]');
          if ($tabContent.length) {
            $elem.children('a').off('click.zf.accordion keydown.zf.accordion').on('click.zf.accordion', function(e) {
              e.preventDefault();
              _this.toggle($tabContent);
            }).on('keydown.zf.accordion', function(e) {
              __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a"].handleKey(e, 'Accordion', {
                toggle: function() {
                  _this.toggle($tabContent);
                },
                next: function() {
                  var $a = $elem.next().find('a').focus();
                  if (!_this.options.multiExpand) {
                    $a.trigger('click.zf.accordion');
                  }
                },
                previous: function() {
                  var $a = $elem.prev().find('a').focus();
                  if (!_this.options.multiExpand) {
                    $a.trigger('click.zf.accordion');
                  }
                },
                handled: function() {
                  e.preventDefault();
                  e.stopPropagation();
                }
              });
            });
          }
        });
        if (this.options.deepLink) {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).on('popstate', this._checkDeepLink);
        }
      }
    }, {
      key: 'toggle',
      value: function toggle($target) {
        if ($target.closest('[data-accordion]').is('[disabled]')) {
          console.info('Cannot toggle an accordion that is disabled.');
          return;
        }
        if ($target.parent().hasClass('is-active')) {
          this.up($target);
        } else {
          this.down($target);
        }
        if (this.options.deepLink) {
          var anchor = $target.prev('a').attr('href');
          if (this.options.updateHistory) {
            history.pushState({}, '', anchor);
          } else {
            history.replaceState({}, '', anchor);
          }
        }
      }
    }, {
      key: 'down',
      value: function down($target, firstTime) {
        var _this4 = this;
        if ($target.closest('[data-accordion]').is('[disabled]') && !firstTime) {
          console.info('Cannot call down on an accordion that is disabled.');
          return;
        }
        $target.attr('aria-hidden', false).parent('[data-tab-content]').addBack().parent().addClass('is-active');
        if (!this.options.multiExpand && !firstTime) {
          var $currentActive = this.$element.children('.is-active').children('[data-tab-content]');
          if ($currentActive.length) {
            this.up($currentActive.not($target));
          }
        }
        $target.slideDown(this.options.slideSpeed, function() {
          _this4.$element.trigger('down.zf.accordion', [$target]);
        });
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + $target.attr('aria-labelledby')).attr({
          'aria-expanded': true,
          'aria-selected': true
        });
      }
    }, {
      key: 'up',
      value: function up($target) {
        if ($target.closest('[data-accordion]').is('[disabled]')) {
          console.info('Cannot call up on an accordion that is disabled.');
          return;
        }
        var $aunts = $target.parent().siblings(),
          _this = this;
        if (!this.options.allowAllClosed && !$aunts.hasClass('is-active') || !$target.parent().hasClass('is-active')) {
          return;
        }
        $target.slideUp(_this.options.slideSpeed, function() {
          _this.$element.trigger('up.zf.accordion', [$target]);
        });
        $target.attr('aria-hidden', true).parent().removeClass('is-active');
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + $target.attr('aria-labelledby')).attr({
          'aria-expanded': false,
          'aria-selected': false
        });
      }
    }, {
      key: '_destroy',
      value: function _destroy() {
        this.$element.find('[data-tab-content]').stop(true).slideUp(0).css('display', '');
        this.$element.find('a').off('.zf.accordion');
        if (this.options.deepLink) {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off('popstate', this._checkDeepLink);
        }
      }
    }]);
    return Accordion;
  }(__WEBPACK_IMPORTED_MODULE_3__foundation_plugin__["a"]);
  Accordion.defaults = {
    slideSpeed: 250,
    multiExpand: false,
    allowAllClosed: false,
    deepLink: false,
    deepLinkSmudge: false,
    deepLinkSmudgeDelay: 300,
    updateHistory: false
  };
}), (function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.d(__webpack_exports__, "a", function() {
    return AccordionMenu;
  });
  var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
  var __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__ = __webpack_require__(4);
  var __WEBPACK_IMPORTED_MODULE_2__foundation_util_nest__ = __webpack_require__(9);
  var __WEBPACK_IMPORTED_MODULE_3__foundation_util_core__ = __webpack_require__(1);
  var __WEBPACK_IMPORTED_MODULE_4__foundation_plugin__ = __webpack_require__(2);
  var _createClass = function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var AccordionMenu = function(_Plugin) {
    _inherits(AccordionMenu, _Plugin);

    function AccordionMenu() {
      _classCallCheck(this, AccordionMenu);
      return _possibleConstructorReturn(this, (AccordionMenu.__proto__ || Object.getPrototypeOf(AccordionMenu)).apply(this, arguments));
    }
    _createClass(AccordionMenu, [{
      key: '_setup',
      value: function _setup(element, options) {
        this.$element = element;
        this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, AccordionMenu.defaults, this.$element.data(), options);
        this.className = 'AccordionMenu';
        this._init();
        __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a"].register('AccordionMenu', {
          'ENTER': 'toggle',
          'SPACE': 'toggle',
          'ARROW_RIGHT': 'open',
          'ARROW_UP': 'up',
          'ARROW_DOWN': 'down',
          'ARROW_LEFT': 'close',
          'ESCAPE': 'closeAll'
        });
      }
    }, {
      key: '_init',
      value: function _init() {
        __WEBPACK_IMPORTED_MODULE_2__foundation_util_nest__["a"].Feather(this.$element, 'accordion');
        var _this = this;
        this.$element.find('[data-submenu]').not('.is-active').slideUp(0);
        this.$element.attr({
          'role': 'tree',
          'aria-multiselectable': this.options.multiOpen
        });
        this.$menuLinks = this.$element.find('.is-accordion-submenu-parent');
        this.$menuLinks.each(function() {
          var linkId = this.id || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__foundation_util_core__["a"])(6, 'acc-menu-link'),
            $elem = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this),
            $sub = $elem.children('[data-submenu]'),
            subId = $sub[0].id || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__foundation_util_core__["a"])(6, 'acc-menu'),
            isActive = $sub.hasClass('is-active');
          if (_this.options.submenuToggle) {
            $elem.addClass('has-submenu-toggle');
            $elem.children('a').after('<button id="' + linkId + '" class="submenu-toggle" aria-controls="' + subId + '" aria-expanded="' + isActive + '" title="' + _this.options.submenuToggleText + '"><span class="submenu-toggle-text">' + _this.options.submenuToggleText + '</span></button>');
          } else {
            $elem.attr({
              'aria-controls': subId,
              'aria-expanded': isActive,
              'id': linkId
            });
          }
          $sub.attr({
            'aria-labelledby': linkId,
            'aria-hidden': !isActive,
            'role': 'group',
            'id': subId
          });
        });
        this.$element.find('li').attr({
          'role': 'treeitem'
        });
        var initPanes = this.$element.find('.is-active');
        if (initPanes.length) {
          var _this = this;
          initPanes.each(function() {
            _this.down(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this));
          });
        }
        this._events();
      }
    }, {
      key: '_events',
      value: function _events() {
        var _this = this;
        this.$element.find('li').each(function() {
          var $submenu = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).children('[data-submenu]');
          if ($submenu.length) {
            if (_this.options.submenuToggle) {
              __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).children('.submenu-toggle').off('click.zf.accordionMenu').on('click.zf.accordionMenu', function(e) {
                _this.toggle($submenu);
              });
            } else {
              __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).children('a').off('click.zf.accordionMenu').on('click.zf.accordionMenu', function(e) {
                e.preventDefault();
                _this.toggle($submenu);
              });
            }
          }
        }).on('keydown.zf.accordionmenu', function(e) {
          var $element = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this),
            $elements = $element.parent('ul').children('li'),
            $prevElement, $nextElement, $target = $element.children('[data-submenu]');
          $elements.each(function(i) {
            if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).is($element)) {
              $prevElement = $elements.eq(Math.max(0, i - 1)).find('a').first();
              $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1)).find('a').first();
              if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).children('[data-submenu]:visible').length) {
                $nextElement = $element.find('li:first-child').find('a').first();
              }
              if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).is(':first-child')) {
                $prevElement = $element.parents('li').first().find('a').first();
              } else if ($prevElement.parents('li').first().children('[data-submenu]:visible').length) {
                $prevElement = $prevElement.parents('li').find('li:last-child').find('a').first();
              }
              if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).is(':last-child')) {
                $nextElement = $element.parents('li').first().next('li').find('a').first();
              }
              return;
            }
          });
          __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a"].handleKey(e, 'AccordionMenu', {
            open: function() {
              if ($target.is(':hidden')) {
                _this.down($target);
                $target.find('li').first().find('a').first().focus();
              }
            },
            close: function() {
              if ($target.length && !$target.is(':hidden')) {
                _this.up($target);
              } else if ($element.parent('[data-submenu]').length) {
                _this.up($element.parent('[data-submenu]'));
                $element.parents('li').first().find('a').first().focus();
              }
            },
            up: function() {
              $prevElement.focus();
              return true;
            },
            down: function() {
              $nextElement.focus();
              return true;
            },
            toggle: function() {
              if (_this.options.submenuToggle) {
                return false;
              }
              if ($element.children('[data-submenu]').length) {
                _this.toggle($element.children('[data-submenu]'));
                return true;
              }
            },
            closeAll: function() {
              _this.hideAll();
            },
            handled: function(preventDefault) {
              if (preventDefault) {
                e.preventDefault();
              }
              e.stopImmediatePropagation();
            }
          });
        });
      }
    }, {
      key: 'hideAll',
      value: function hideAll() {
        this.up(this.$element.find('[data-submenu]'));
      }
    }, {
      key: 'showAll',
      value: function showAll() {
        this.down(this.$element.find('[data-submenu]'));
      }
    }, {
      key: 'toggle',
      value: function toggle($target) {
        if (!$target.is(':animated')) {
          if (!$target.is(':hidden')) {
            this.up($target);
          } else {
            this.down($target);
          }
        }
      }
    }, {
      key: 'down',
      value: function down($target) {
        var _this = this;
        if (!this.options.multiOpen) {
          this.up(this.$element.find('.is-active').not($target.parentsUntil(this.$element).add($target)));
        }
        $target.addClass('is-active').attr({
          'aria-hidden': false
        });
        if (this.options.submenuToggle) {
          $target.prev('.submenu-toggle').attr({
            'aria-expanded': true
          });
        } else {
          $target.parent('.is-accordion-submenu-parent').attr({
            'aria-expanded': true
          });
        }
        $target.slideDown(_this.options.slideSpeed, function() {
          _this.$element.trigger('down.zf.accordionMenu', [$target]);
        });
      }
    }, {
      key: 'up',
      value: function up($target) {
        var _this = this;
        $target.slideUp(_this.options.slideSpeed, function() {
          _this.$element.trigger('up.zf.accordionMenu', [$target]);
        });
        var $menus = $target.find('[data-submenu]').slideUp(0).addBack().attr('aria-hidden', true);
        if (this.options.submenuToggle) {
          $menus.prev('.submenu-toggle').attr('aria-expanded', false);
        } else {
          $menus.parent('.is-accordion-submenu-parent').attr('aria-expanded', false);
        }
      }
    }, {
      key: '_destroy',
      value: function _destroy() {
        this.$element.find('[data-submenu]').slideDown(0).css('display', '');
        this.$element.find('a').off('click.zf.accordionMenu');
        if (this.options.submenuToggle) {
          this.$element.find('.has-submenu-toggle').removeClass('has-submenu-toggle');
          this.$element.find('.submenu-toggle').remove();
        }
        __WEBPACK_IMPORTED_MODULE_2__foundation_util_nest__["a"].Burn(this.$element, 'accordion');
      }
    }]);
    return AccordionMenu;
  }(__WEBPACK_IMPORTED_MODULE_4__foundation_plugin__["a"]);
  AccordionMenu.defaults = {
    slideSpeed: 250,
    submenuToggle: false,
    submenuToggleText: 'Toggle menu',
    multiOpen: true
  };
}), (function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.d(__webpack_exports__, "a", function() {
    return Drilldown;
  });
  var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
  var __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__ = __webpack_require__(4);
  var __WEBPACK_IMPORTED_MODULE_2__foundation_util_nest__ = __webpack_require__(9);
  var __WEBPACK_IMPORTED_MODULE_3__foundation_util_core__ = __webpack_require__(1);
  var __WEBPACK_IMPORTED_MODULE_4__foundation_util_box__ = __webpack_require__(7);
  var __WEBPACK_IMPORTED_MODULE_5__foundation_plugin__ = __webpack_require__(2);
  var _createClass = function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var Drilldown = function(_Plugin) {
    _inherits(Drilldown, _Plugin);

    function Drilldown() {
      _classCallCheck(this, Drilldown);
      return _possibleConstructorReturn(this, (Drilldown.__proto__ || Object.getPrototypeOf(Drilldown)).apply(this, arguments));
    }
    _createClass(Drilldown, [{
      key: '_setup',
      value: function _setup(element, options) {
        this.$element = element;
        this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, Drilldown.defaults, this.$element.data(), options);
        this.className = 'Drilldown';
        this._init();
        __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a"].register('Drilldown', {
          'ENTER': 'open',
          'SPACE': 'open',
          'ARROW_RIGHT': 'next',
          'ARROW_UP': 'up',
          'ARROW_DOWN': 'down',
          'ARROW_LEFT': 'previous',
          'ESCAPE': 'close',
          'TAB': 'down',
          'SHIFT_TAB': 'up'
        });
      }
    }, {
      key: '_init',
      value: function _init() {
        __WEBPACK_IMPORTED_MODULE_2__foundation_util_nest__["a"].Feather(this.$element, 'drilldown');
        if (this.options.autoApplyClass) {
          this.$element.addClass('drilldown');
        }
        this.$element.attr({
          'role': 'tree',
          'aria-multiselectable': false
        });
        this.$submenuAnchors = this.$element.find('li.is-drilldown-submenu-parent').children('a');
        this.$submenus = this.$submenuAnchors.parent('li').children('[data-submenu]').attr('role', 'group');
        this.$menuItems = this.$element.find('li').not('.js-drilldown-back').attr('role', 'treeitem').find('a');
        this.$element.attr('data-mutate', this.$element.attr('data-drilldown') || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__foundation_util_core__["a"])(6, 'drilldown'));
        this._prepareMenu();
        this._registerEvents();
        this._keyboardEvents();
      }
    }, {
      key: '_prepareMenu',
      value: function _prepareMenu() {
        var _this = this;
        this.$submenuAnchors.each(function() {
          var $link = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this);
          var $sub = $link.parent();
          if (_this.options.parentLink) {
            $link.clone().prependTo($sub.children('[data-submenu]')).wrap('<li class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menuitem"></li>');
          }
          $link.data('savedHref', $link.attr('href')).removeAttr('href').attr('tabindex', 0);
          $link.children('[data-submenu]').attr({
            'aria-hidden': true,
            'tabindex': 0,
            'role': 'group'
          });
          _this._events($link);
        });
        this.$submenus.each(function() {
          var $menu = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this),
            $back = $menu.find('.js-drilldown-back');
          if (!$back.length) {
            switch (_this.options.backButtonPosition) {
              case "bottom":
                $menu.append(_this.options.backButton);
                break;
              case "top":
                $menu.prepend(_this.options.backButton);
                break;
              default:
                console.error("Unsupported backButtonPosition value '" + _this.options.backButtonPosition + "'");
            }
          }
          _this._back($menu);
        });
        this.$submenus.addClass('invisible');
        if (!this.options.autoHeight) {
          this.$submenus.addClass('drilldown-submenu-cover-previous');
        }
        if (!this.$element.parent().hasClass('is-drilldown')) {
          this.$wrapper = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this.options.wrapper).addClass('is-drilldown');
          if (this.options.animateHeight) this.$wrapper.addClass('animate-height');
          this.$element.wrap(this.$wrapper);
        }
        this.$wrapper = this.$element.parent();
        this.$wrapper.css(this._getMaxDims());
      }
    }, {
      key: '_resize',
      value: function _resize() {
        this.$wrapper.css({
          'max-width': 'none',
          'min-height': 'none'
        });
        this.$wrapper.css(this._getMaxDims());
      }
    }, {
      key: '_events',
      value: function _events($elem) {
        var _this = this;
        $elem.off('click.zf.drilldown').on('click.zf.drilldown', function(e) {
          if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target).parentsUntil('ul', 'li').hasClass('is-drilldown-submenu-parent')) {
            e.stopImmediatePropagation();
            e.preventDefault();
          }
          _this._show($elem.parent('li'));
          if (_this.options.closeOnClick) {
            var $body = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('body');
            $body.off('.zf.drilldown').on('click.zf.drilldown', function(e) {
              if (e.target === _this.$element[0] || __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.contains(_this.$element[0], e.target)) {
                return;
              }
              e.preventDefault();
              _this._hideAll();
              $body.off('.zf.drilldown');
            });
          }
        });
      }
    }, {
      key: '_registerEvents',
      value: function _registerEvents() {
        if (this.options.scrollTop) {
          this._bindHandler = this._scrollTop.bind(this);
          this.$element.on('open.zf.drilldown hide.zf.drilldown closed.zf.drilldown', this._bindHandler);
        }
        this.$element.on('mutateme.zf.trigger', this._resize.bind(this));
      }
    }, {
      key: '_scrollTop',
      value: function _scrollTop() {
        var _this = this;
        var $scrollTopElement = _this.options.scrollTopElement != '' ? __WEBPACK_IMPORTED_MODULE_0_jquery___default()(_this.options.scrollTopElement) : _this.$element,
          scrollPos = parseInt($scrollTopElement.offset().top + _this.options.scrollTopOffset, 10);
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('html, body').stop(true).animate({
          scrollTop: scrollPos
        }, _this.options.animationDuration, _this.options.animationEasing, function() {
          if (this === __WEBPACK_IMPORTED_MODULE_0_jquery___default()('html')[0]) _this.$element.trigger('scrollme.zf.drilldown');
        });
      }
    }, {
      key: '_keyboardEvents',
      value: function _keyboardEvents() {
        var _this = this;
        this.$menuItems.add(this.$element.find('.js-drilldown-back > a, .is-submenu-parent-item > a')).on('keydown.zf.drilldown', function(e) {
          var $element = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this),
            $elements = $element.parent('li').parent('ul').children('li').children('a'),
            $prevElement, $nextElement;
          $elements.each(function(i) {
            if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).is($element)) {
              $prevElement = $elements.eq(Math.max(0, i - 1));
              $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1));
              return;
            }
          });
          __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a"].handleKey(e, 'Drilldown', {
            next: function() {
              if ($element.is(_this.$submenuAnchors)) {
                _this._show($element.parent('li'));
                $element.parent('li').one(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__foundation_util_core__["c"])($element), function() {
                  $element.parent('li').find('ul li a').filter(_this.$menuItems).first().focus();
                });
                return true;
              }
            },
            previous: function() {
              _this._hide($element.parent('li').parent('ul'));
              $element.parent('li').parent('ul').one(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__foundation_util_core__["c"])($element), function() {
                setTimeout(function() {
                  $element.parent('li').parent('ul').parent('li').children('a').first().focus();
                }, 1);
              });
              return true;
            },
            up: function() {
              $prevElement.focus();
              return !$element.is(_this.$element.find('> li:first-child > a'));
            },
            down: function() {
              $nextElement.focus();
              return !$element.is(_this.$element.find('> li:last-child > a'));
            },
            close: function() {
              if (!$element.is(_this.$element.find('> li > a'))) {
                _this._hide($element.parent().parent());
                $element.parent().parent().siblings('a').focus();
              }
            },
            open: function() {
              if (!$element.is(_this.$menuItems)) {
                _this._hide($element.parent('li').parent('ul'));
                $element.parent('li').parent('ul').one(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__foundation_util_core__["c"])($element), function() {
                  setTimeout(function() {
                    $element.parent('li').parent('ul').parent('li').children('a').first().focus();
                  }, 1);
                });
                return true;
              } else if ($element.is(_this.$submenuAnchors)) {
                _this._show($element.parent('li'));
                $element.parent('li').one(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__foundation_util_core__["c"])($element), function() {
                  $element.parent('li').find('ul li a').filter(_this.$menuItems).first().focus();
                });
                return true;
              }
            },
            handled: function(preventDefault) {
              if (preventDefault) {
                e.preventDefault();
              }
              e.stopImmediatePropagation();
            }
          });
        });
      }
    }, {
      key: '_hideAll',
      value: function _hideAll() {
        var $elem = this.$element.find('.is-drilldown-submenu.is-active').addClass('is-closing');
        if (this.options.autoHeight) this.$wrapper.css({
          height: $elem.parent().closest('ul').data('calcHeight')
        });
        $elem.one(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__foundation_util_core__["c"])($elem), function(e) {
          $elem.removeClass('is-active is-closing');
        });
        this.$element.trigger('closed.zf.drilldown');
      }
    }, {
      key: '_back',
      value: function _back($elem) {
        var _this = this;
        $elem.off('click.zf.drilldown');
        $elem.children('.js-drilldown-back').on('click.zf.drilldown', function(e) {
          e.stopImmediatePropagation();
          _this._hide($elem);
          var parentSubMenu = $elem.parent('li').parent('ul').parent('li');
          if (parentSubMenu.length) {
            _this._show(parentSubMenu);
          }
        });
      }
    }, {
      key: '_menuLinkEvents',
      value: function _menuLinkEvents() {
        var _this = this;
        this.$menuItems.not('.is-drilldown-submenu-parent').off('click.zf.drilldown').on('click.zf.drilldown', function(e) {
          setTimeout(function() {
            _this._hideAll();
          }, 0);
        });
      }
    }, {
      key: '_show',
      value: function _show($elem) {
        if (this.options.autoHeight) this.$wrapper.css({
          height: $elem.children('[data-submenu]').data('calcHeight')
        });
        $elem.attr('aria-expanded', true);
        $elem.children('[data-submenu]').addClass('is-active').removeClass('invisible').attr('aria-hidden', false);
        this.$element.trigger('open.zf.drilldown', [$elem]);
      }
    }, {
      key: '_hide',
      value: function _hide($elem) {
        if (this.options.autoHeight) this.$wrapper.css({
          height: $elem.parent().closest('ul').data('calcHeight')
        });
        var _this = this;
        $elem.parent('li').attr('aria-expanded', false);
        $elem.attr('aria-hidden', true).addClass('is-closing');
        $elem.addClass('is-closing').one(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__foundation_util_core__["c"])($elem), function() {
          $elem.removeClass('is-active is-closing');
          $elem.blur().addClass('invisible');
        });
        $elem.trigger('hide.zf.drilldown', [$elem]);
      }
    }, {
      key: '_getMaxDims',
      value: function _getMaxDims() {
        var maxHeight = 0,
          result = {},
          _this = this;
        this.$submenus.add(this.$element).each(function() {
          var numOfElems = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).children('li').length;
          var height = __WEBPACK_IMPORTED_MODULE_4__foundation_util_box__["a"].GetDimensions(this).height;
          maxHeight = height > maxHeight ? height : maxHeight;
          if (_this.options.autoHeight) {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data('calcHeight', height);
            if (!__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).hasClass('is-drilldown-submenu')) result['height'] = height;
          }
        });
        if (!this.options.autoHeight) result['min-height'] = maxHeight + 'px';
        result['max-width'] = this.$element[0].getBoundingClientRect().width + 'px';
        return result;
      }
    }, {
      key: '_destroy',
      value: function _destroy() {
        if (this.options.scrollTop) this.$element.off('.zf.drilldown', this._bindHandler);
        this._hideAll();
        this.$element.off('mutateme.zf.trigger');
        __WEBPACK_IMPORTED_MODULE_2__foundation_util_nest__["a"].Burn(this.$element, 'drilldown');
        this.$element.unwrap().find('.js-drilldown-back, .is-submenu-parent-item').remove().end().find('.is-active, .is-closing, .is-drilldown-submenu').removeClass('is-active is-closing is-drilldown-submenu').end().find('[data-submenu]').removeAttr('aria-hidden tabindex role');
        this.$submenuAnchors.each(function() {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).off('.zf.drilldown');
        });
        this.$submenus.removeClass('drilldown-submenu-cover-previous invisible');
        this.$element.find('a').each(function() {
          var $link = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this);
          $link.removeAttr('tabindex');
          if ($link.data('savedHref')) {
            $link.attr('href', $link.data('savedHref')).removeData('savedHref');
          } else {
            return;
          }
        });
      }
    }]);
    return Drilldown;
  }(__WEBPACK_IMPORTED_MODULE_5__foundation_plugin__["a"]);
  Drilldown.defaults = {
    autoApplyClass: true,
    backButton: '<li class="js-drilldown-back"><a tabindex="0">Back</a></li>',
    backButtonPosition: 'top',
    wrapper: '<div></div>',
    parentLink: false,
    closeOnClick: false,
    autoHeight: false,
    animateHeight: false,
    scrollTop: false,
    scrollTopElement: '',
    scrollTopOffset: 0,
    animationDuration: 500,
    animationEasing: 'swing'
  };
}), (function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.d(__webpack_exports__, "a", function() {
    return DropdownMenu;
  });
  var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
  var __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__ = __webpack_require__(4);
  var __WEBPACK_IMPORTED_MODULE_2__foundation_util_nest__ = __webpack_require__(9);
  var __WEBPACK_IMPORTED_MODULE_3__foundation_util_box__ = __webpack_require__(7);
  var __WEBPACK_IMPORTED_MODULE_4__foundation_util_core__ = __webpack_require__(1);
  var __WEBPACK_IMPORTED_MODULE_5__foundation_plugin__ = __webpack_require__(2);
  var _createClass = function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var DropdownMenu = function(_Plugin) {
    _inherits(DropdownMenu, _Plugin);

    function DropdownMenu() {
      _classCallCheck(this, DropdownMenu);
      return _possibleConstructorReturn(this, (DropdownMenu.__proto__ || Object.getPrototypeOf(DropdownMenu)).apply(this, arguments));
    }
    _createClass(DropdownMenu, [{
      key: '_setup',
      value: function _setup(element, options) {
        this.$element = element;
        this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, DropdownMenu.defaults, this.$element.data(), options);
        this.className = 'DropdownMenu';
        this._init();
        __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a"].register('DropdownMenu', {
          'ENTER': 'open',
          'SPACE': 'open',
          'ARROW_RIGHT': 'next',
          'ARROW_UP': 'up',
          'ARROW_DOWN': 'down',
          'ARROW_LEFT': 'previous',
          'ESCAPE': 'close'
        });
      }
    }, {
      key: '_init',
      value: function _init() {
        __WEBPACK_IMPORTED_MODULE_2__foundation_util_nest__["a"].Feather(this.$element, 'dropdown');
        var subs = this.$element.find('li.is-dropdown-submenu-parent');
        this.$element.children('.is-dropdown-submenu-parent').children('.is-dropdown-submenu').addClass('first-sub');
        this.$menuItems = this.$element.find('[role="menuitem"]');
        this.$tabs = this.$element.children('[role="menuitem"]');
        this.$tabs.find('ul.is-dropdown-submenu').addClass(this.options.verticalClass);
        if (this.options.alignment === 'auto') {
          if (this.$element.hasClass(this.options.rightClass) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__foundation_util_core__["b"])() || this.$element.parents('.top-bar-right').is('*')) {
            this.options.alignment = 'right';
            subs.addClass('opens-left');
          } else {
            this.options.alignment = 'left';
            subs.addClass('opens-right');
          }
        } else {
          if (this.options.alignment === 'right') {
            subs.addClass('opens-left');
          } else {
            subs.addClass('opens-right');
          }
        }
        this.changed = false;
        this._events();
      }
    }, {
      key: '_isVertical',
      value: function _isVertical() {
        return this.$tabs.css('display') === 'block' || this.$element.css('flex-direction') === 'column';
      }
    }, {
      key: '_isRtl',
      value: function _isRtl() {
        return this.$element.hasClass('align-right') || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__foundation_util_core__["b"])() && !this.$element.hasClass('align-left');
      }
    }, {
      key: '_events',
      value: function _events() {
        var _this = this,
          hasTouch = 'ontouchstart' in window || typeof window.ontouchstart !== 'undefined',
          parClass = 'is-dropdown-submenu-parent';
        var handleClickFn = function(e) {
          var $elem = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target).parentsUntil('ul', '.' + parClass),
            hasSub = $elem.hasClass(parClass),
            hasClicked = $elem.attr('data-is-click') === 'true',
            $sub = $elem.children('.is-dropdown-submenu');
          if (hasSub) {
            if (hasClicked) {
              if (!_this.options.closeOnClick || !_this.options.clickOpen && !hasTouch || _this.options.forceFollow && hasTouch) {
                return;
              } else {
                e.stopImmediatePropagation();
                e.preventDefault();
                _this._hide($elem);
              }
            } else {
              e.preventDefault();
              e.stopImmediatePropagation();
              _this._show($sub);
              $elem.add($elem.parentsUntil(_this.$element, '.' + parClass)).attr('data-is-click', true);
            }
          }
        };
        if (this.options.clickOpen || hasTouch) {
          this.$menuItems.on('click.zf.dropdownmenu touchstart.zf.dropdownmenu', handleClickFn);
        }
        if (_this.options.closeOnClickInside) {
          this.$menuItems.on('click.zf.dropdownmenu', function(e) {
            var $elem = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this),
              hasSub = $elem.hasClass(parClass);
            if (!hasSub) {
              _this._hide();
            }
          });
        }
        if (!this.options.disableHover) {
          this.$menuItems.on('mouseenter.zf.dropdownmenu', function(e) {
            var $elem = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this),
              hasSub = $elem.hasClass(parClass);
            if (hasSub) {
              clearTimeout($elem.data('_delay'));
              $elem.data('_delay', setTimeout(function() {
                _this._show($elem.children('.is-dropdown-submenu'));
              }, _this.options.hoverDelay));
            }
          }).on('mouseleave.zf.dropdownmenu', function(e) {
            var $elem = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this),
              hasSub = $elem.hasClass(parClass);
            if (hasSub && _this.options.autoclose) {
              if ($elem.attr('data-is-click') === 'true' && _this.options.clickOpen) {
                return false;
              }
              clearTimeout($elem.data('_delay'));
              $elem.data('_delay', setTimeout(function() {
                _this._hide($elem);
              }, _this.options.closingTime));
            }
          });
        }
        this.$menuItems.on('keydown.zf.dropdownmenu', function(e) {
          var $element = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target).parentsUntil('ul', '[role="menuitem"]'),
            isTab = _this.$tabs.index($element) > -1,
            $elements = isTab ? _this.$tabs : $element.siblings('li').add($element),
            $prevElement, $nextElement;
          $elements.each(function(i) {
            if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).is($element)) {
              $prevElement = $elements.eq(i - 1);
              $nextElement = $elements.eq(i + 1);
              return;
            }
          });
          var nextSibling = function() {
              $nextElement.children('a:first').focus();
              e.preventDefault();
            },
            prevSibling = function() {
              $prevElement.children('a:first').focus();
              e.preventDefault();
            },
            openSub = function() {
              var $sub = $element.children('ul.is-dropdown-submenu');
              if ($sub.length) {
                _this._show($sub);
                $element.find('li > a:first').focus();
                e.preventDefault();
              } else {
                return;
              }
            },
            closeSub = function() {
              var close = $element.parent('ul').parent('li');
              close.children('a:first').focus();
              _this._hide(close);
              e.preventDefault();
            };
          var functions = {
            open: openSub,
            close: function() {
              _this._hide(_this.$element);
              _this.$menuItems.eq(0).children('a').focus();
              e.preventDefault();
            },
            handled: function() {
              e.stopImmediatePropagation();
            }
          };
          if (isTab) {
            if (_this._isVertical()) {
              if (_this._isRtl()) {
                __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend(functions, {
                  down: nextSibling,
                  up: prevSibling,
                  next: closeSub,
                  previous: openSub
                });
              } else {
                __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend(functions, {
                  down: nextSibling,
                  up: prevSibling,
                  next: openSub,
                  previous: closeSub
                });
              }
            } else {
              if (_this._isRtl()) {
                __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend(functions, {
                  next: prevSibling,
                  previous: nextSibling,
                  down: openSub,
                  up: closeSub
                });
              } else {
                __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend(functions, {
                  next: nextSibling,
                  previous: prevSibling,
                  down: openSub,
                  up: closeSub
                });
              }
            }
          } else {
            if (_this._isRtl()) {
              __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend(functions, {
                next: closeSub,
                previous: openSub,
                down: nextSibling,
                up: prevSibling
              });
            } else {
              __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend(functions, {
                next: openSub,
                previous: closeSub,
                down: nextSibling,
                up: prevSibling
              });
            }
          }
          __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a"].handleKey(e, 'DropdownMenu', functions);
        });
      }
    }, {
      key: '_addBodyHandler',
      value: function _addBodyHandler() {
        var $body = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document.body),
          _this = this;
        $body.off('mouseup.zf.dropdownmenu touchend.zf.dropdownmenu').on('mouseup.zf.dropdownmenu touchend.zf.dropdownmenu', function(e) {
          var $link = _this.$element.find(e.target);
          if ($link.length) {
            return;
          }
          _this._hide();
          $body.off('mouseup.zf.dropdownmenu touchend.zf.dropdownmenu');
        });
      }
    }, {
      key: '_show',
      value: function _show($sub) {
        var idx = this.$tabs.index(this.$tabs.filter(function(i, el) {
          return __WEBPACK_IMPORTED_MODULE_0_jquery___default()(el).find($sub).length > 0;
        }));
        var $sibs = $sub.parent('li.is-dropdown-submenu-parent').siblings('li.is-dropdown-submenu-parent');
        this._hide($sibs, idx);
        $sub.css('visibility', 'hidden').addClass('js-dropdown-active').parent('li.is-dropdown-submenu-parent').addClass('is-active');
        var clear = __WEBPACK_IMPORTED_MODULE_3__foundation_util_box__["a"].ImNotTouchingYou($sub, null, true);
        if (!clear) {
          var oldClass = this.options.alignment === 'left' ? '-right' : '-left',
            $parentLi = $sub.parent('.is-dropdown-submenu-parent');
          $parentLi.removeClass('opens' + oldClass).addClass('opens-' + this.options.alignment);
          clear = __WEBPACK_IMPORTED_MODULE_3__foundation_util_box__["a"].ImNotTouchingYou($sub, null, true);
          if (!clear) {
            $parentLi.removeClass('opens-' + this.options.alignment).addClass('opens-inner');
          }
          this.changed = true;
        }
        $sub.css('visibility', '');
        if (this.options.closeOnClick) {
          this._addBodyHandler();
        }
        this.$element.trigger('show.zf.dropdownmenu', [$sub]);
      }
    }, {
      key: '_hide',
      value: function _hide($elem, idx) {
        var $toClose;
        if ($elem && $elem.length) {
          $toClose = $elem;
        } else if (idx !== undefined) {
          $toClose = this.$tabs.not(function(i, el) {
            return i === idx;
          });
        } else {
          $toClose = this.$element;
        }
        var somethingToClose = $toClose.hasClass('is-active') || $toClose.find('.is-active').length > 0;
        if (somethingToClose) {
          $toClose.find('li.is-active').add($toClose).attr({
            'data-is-click': false
          }).removeClass('is-active');
          $toClose.find('ul.js-dropdown-active').removeClass('js-dropdown-active');
          if (this.changed || $toClose.find('opens-inner').length) {
            var oldClass = this.options.alignment === 'left' ? 'right' : 'left';
            $toClose.find('li.is-dropdown-submenu-parent').add($toClose).removeClass('opens-inner opens-' + this.options.alignment).addClass('opens-' + oldClass);
            this.changed = false;
          }
          this.$element.trigger('hide.zf.dropdownmenu', [$toClose]);
        }
      }
    }, {
      key: '_destroy',
      value: function _destroy() {
        this.$menuItems.off('.zf.dropdownmenu').removeAttr('data-is-click').removeClass('is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner');
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document.body).off('.zf.dropdownmenu');
        __WEBPACK_IMPORTED_MODULE_2__foundation_util_nest__["a"].Burn(this.$element, 'dropdown');
      }
    }]);
    return DropdownMenu;
  }(__WEBPACK_IMPORTED_MODULE_5__foundation_plugin__["a"]);
  DropdownMenu.defaults = {
    disableHover: false,
    autoclose: true,
    hoverDelay: 50,
    clickOpen: false,
    closingTime: 500,
    alignment: 'auto',
    closeOnClick: true,
    closeOnClickInside: true,
    verticalClass: 'vertical',
    rightClass: 'align-right',
    forceFollow: true
  };
}), (function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.d(__webpack_exports__, "a", function() {
    return Tabs;
  });
  var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
  var __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__ = __webpack_require__(4);
  var __WEBPACK_IMPORTED_MODULE_2__foundation_util_imageLoader__ = __webpack_require__(8);
  var __WEBPACK_IMPORTED_MODULE_3__foundation_plugin__ = __webpack_require__(2);
  var _createClass = function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var Tabs = function(_Plugin) {
    _inherits(Tabs, _Plugin);

    function Tabs() {
      _classCallCheck(this, Tabs);
      return _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));
    }
    _createClass(Tabs, [{
      key: '_setup',
      value: function _setup(element, options) {
        this.$element = element;
        this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, Tabs.defaults, this.$element.data(), options);
        this.className = 'Tabs';
        this._init();
        __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a"].register('Tabs', {
          'ENTER': 'open',
          'SPACE': 'open',
          'ARROW_RIGHT': 'next',
          'ARROW_UP': 'previous',
          'ARROW_DOWN': 'next',
          'ARROW_LEFT': 'previous'
        });
      }
    }, {
      key: '_init',
      value: function _init() {
        var _this3 = this;
        var _this = this;
        this.$element.attr({
          'role': 'tablist'
        });
        this.$tabTitles = this.$element.find('.' + this.options.linkClass);
        this.$tabContent = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-tabs-content="' + this.$element[0].id + '"]');
        this.$tabTitles.each(function() {
          var $elem = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this),
            $link = $elem.find('a'),
            isActive = $elem.hasClass('' + _this.options.linkActiveClass),
            hash = $link.attr('data-tabs-target') || $link[0].hash.slice(1),
            linkId = $link[0].id ? $link[0].id : hash + '-label',
            $tabContent = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + hash);
          $elem.attr({
            'role': 'presentation'
          });
          $link.attr({
            'role': 'tab',
            'aria-controls': hash,
            'aria-selected': isActive,
            'id': linkId,
            'tabindex': isActive ? '0' : '-1'
          });
          $tabContent.attr({
            'role': 'tabpanel',
            'aria-labelledby': linkId
          });
          if (!isActive) {
            $tabContent.attr('aria-hidden', 'true');
          }
          if (isActive && _this.options.autoFocus) {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).load(function() {
              __WEBPACK_IMPORTED_MODULE_0_jquery___default()('html, body').animate({
                scrollTop: $elem.offset().top
              }, _this.options.deepLinkSmudgeDelay, function() {
                $link.focus();
              });
            });
          }
        });
        if (this.options.matchHeight) {
          var $images = this.$tabContent.find('img');
          if ($images.length) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__foundation_util_imageLoader__["a"])($images, this._setHeight.bind(this));
          } else {
            this._setHeight();
          }
        }
        this._checkDeepLink = function() {
          var anchor = window.location.hash;
          if (anchor.length) {
            var $link = _this3.$element.find('[href$="' + anchor + '"]');
            if ($link.length) {
              _this3.selectTab(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(anchor), true);
              if (_this3.options.deepLinkSmudge) {
                var offset = _this3.$element.offset();
                __WEBPACK_IMPORTED_MODULE_0_jquery___default()('html, body').animate({
                  scrollTop: offset.top
                }, _this3.options.deepLinkSmudgeDelay);
              }
              _this3.$element.trigger('deeplink.zf.tabs', [$link, __WEBPACK_IMPORTED_MODULE_0_jquery___default()(anchor)]);
            }
          }
        };
        if (this.options.deepLink) {
          this._checkDeepLink();
        }
        this._events();
      }
    }, {
      key: '_events',
      value: function _events() {
        this._addKeyHandler();
        this._addClickHandler();
        this._setHeightMqHandler = null;
        if (this.options.matchHeight) {
          this._setHeightMqHandler = this._setHeight.bind(this);
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).on('changed.zf.mediaquery', this._setHeightMqHandler);
        }
        if (this.options.deepLink) {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).on('popstate', this._checkDeepLink);
        }
      }
    }, {
      key: '_addClickHandler',
      value: function _addClickHandler() {
        var _this = this;
        this.$element.off('click.zf.tabs').on('click.zf.tabs', '.' + this.options.linkClass, function(e) {
          e.preventDefault();
          e.stopPropagation();
          _this._handleTabChange(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this));
        });
      }
    }, {
      key: '_addKeyHandler',
      value: function _addKeyHandler() {
        var _this = this;
        this.$tabTitles.off('keydown.zf.tabs').on('keydown.zf.tabs', function(e) {
          if (e.which === 9) return;
          var $element = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this),
            $elements = $element.parent('ul').children('li'),
            $prevElement, $nextElement;
          $elements.each(function(i) {
            if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).is($element)) {
              if (_this.options.wrapOnKeys) {
                $prevElement = i === 0 ? $elements.last() : $elements.eq(i - 1);
                $nextElement = i === $elements.length - 1 ? $elements.first() : $elements.eq(i + 1);
              } else {
                $prevElement = $elements.eq(Math.max(0, i - 1));
                $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1));
              }
              return;
            }
          });
          __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a"].handleKey(e, 'Tabs', {
            open: function() {
              $element.find('[role="tab"]').focus();
              _this._handleTabChange($element);
            },
            previous: function() {
              $prevElement.find('[role="tab"]').focus();
              _this._handleTabChange($prevElement);
            },
            next: function() {
              $nextElement.find('[role="tab"]').focus();
              _this._handleTabChange($nextElement);
            },
            handled: function() {
              e.stopPropagation();
              e.preventDefault();
            }
          });
        });
      }
    }, {
      key: '_handleTabChange',
      value: function _handleTabChange($target, historyHandled) {
        if ($target.hasClass('' + this.options.linkActiveClass)) {
          if (this.options.activeCollapse) {
            this._collapseTab($target);
            this.$element.trigger('collapse.zf.tabs', [$target]);
          }
          return;
        }
        var $oldTab = this.$element.find('.' + this.options.linkClass + '.' + this.options.linkActiveClass),
          $tabLink = $target.find('[role="tab"]'),
          hash = $tabLink.attr('data-tabs-target') || $tabLink[0].hash.slice(1),
          $targetContent = this.$tabContent.find('#' + hash);
        this._collapseTab($oldTab);
        this._openTab($target);
        if (this.options.deepLink && !historyHandled) {
          var anchor = $target.find('a').attr('href');
          if (this.options.updateHistory) {
            history.pushState({}, '', anchor);
          } else {
            history.replaceState({}, '', anchor);
          }
        }
        this.$element.trigger('change.zf.tabs', [$target, $targetContent]);
        $targetContent.find("[data-mutate]").trigger("mutateme.zf.trigger");
      }
    }, {
      key: '_openTab',
      value: function _openTab($target) {
        var $tabLink = $target.find('[role="tab"]'),
          hash = $tabLink.attr('data-tabs-target') || $tabLink[0].hash.slice(1),
          $targetContent = this.$tabContent.find('#' + hash);
        $target.addClass('' + this.options.linkActiveClass);
        $tabLink.attr({
          'aria-selected': 'true',
          'tabindex': '0'
        });
        $targetContent.addClass('' + this.options.panelActiveClass).removeAttr('aria-hidden');
      }
    }, {
      key: '_collapseTab',
      value: function _collapseTab($target) {
        var $target_anchor = $target.removeClass('' + this.options.linkActiveClass).find('[role="tab"]').attr({
          'aria-selected': 'false',
          'tabindex': -1
        });
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + $target_anchor.attr('aria-controls')).removeClass('' + this.options.panelActiveClass).attr({
          'aria-hidden': 'true'
        });
      }
    }, {
      key: 'selectTab',
      value: function selectTab(elem, historyHandled) {
        var idStr;
        if (typeof elem === 'object') {
          idStr = elem[0].id;
        } else {
          idStr = elem;
        }
        if (idStr.indexOf('#') < 0) {
          idStr = '#' + idStr;
        }
        var $target = this.$tabTitles.find('[href$="' + idStr + '"]').parent('.' + this.options.linkClass);
        this._handleTabChange($target, historyHandled);
      }
    }, {
      key: '_setHeight',
      value: function _setHeight() {
        var max = 0,
          _this = this;
        this.$tabContent.find('.' + this.options.panelClass).css('height', '').each(function() {
          var panel = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this),
            isActive = panel.hasClass('' + _this.options.panelActiveClass);
          if (!isActive) {
            panel.css({
              'visibility': 'hidden',
              'display': 'block'
            });
          }
          var temp = this.getBoundingClientRect().height;
          if (!isActive) {
            panel.css({
              'visibility': '',
              'display': ''
            });
          }
          max = temp > max ? temp : max;
        }).css('height', max + 'px');
      }
    }, {
      key: '_destroy',
      value: function _destroy() {
        this.$element.find('.' + this.options.linkClass).off('.zf.tabs').hide().end().find('.' + this.options.panelClass).hide();
        if (this.options.matchHeight) {
          if (this._setHeightMqHandler != null) {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off('changed.zf.mediaquery', this._setHeightMqHandler);
          }
        }
        if (this.options.deepLink) {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off('popstate', this._checkDeepLink);
        }
      }
    }]);
    return Tabs;
  }(__WEBPACK_IMPORTED_MODULE_3__foundation_plugin__["a"]);
  Tabs.defaults = {
    deepLink: false,
    deepLinkSmudge: false,
    deepLinkSmudgeDelay: 300,
    updateHistory: false,
    autoFocus: false,
    wrapOnKeys: true,
    matchHeight: false,
    activeCollapse: false,
    linkClass: 'tabs-title',
    linkActiveClass: 'is-active',
    panelClass: 'tabs-panel',
    panelActiveClass: 'is-active'
  };
}), (function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.d(__webpack_exports__, "a", function() {
    return Positionable;
  });
  var __WEBPACK_IMPORTED_MODULE_0__foundation_util_box__ = __webpack_require__(7);
  var __WEBPACK_IMPORTED_MODULE_1__foundation_plugin__ = __webpack_require__(2);
  var __WEBPACK_IMPORTED_MODULE_2__foundation_util_core__ = __webpack_require__(1);
  var _createClass = function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var POSITIONS = ['left', 'right', 'top', 'bottom'];
  var VERTICAL_ALIGNMENTS = ['top', 'bottom', 'center'];
  var HORIZONTAL_ALIGNMENTS = ['left', 'right', 'center'];
  var ALIGNMENTS = {
    'left': VERTICAL_ALIGNMENTS,
    'right': VERTICAL_ALIGNMENTS,
    'top': HORIZONTAL_ALIGNMENTS,
    'bottom': HORIZONTAL_ALIGNMENTS
  };

  function nextItem(item, array) {
    var currentIdx = array.indexOf(item);
    if (currentIdx === array.length - 1) {
      return array[0];
    } else {
      return array[currentIdx + 1];
    }
  }
  var Positionable = function(_Plugin) {
    _inherits(Positionable, _Plugin);

    function Positionable() {
      _classCallCheck(this, Positionable);
      return _possibleConstructorReturn(this, (Positionable.__proto__ || Object.getPrototypeOf(Positionable)).apply(this, arguments));
    }
    _createClass(Positionable, [{
      key: '_init',
      value: function _init() {
        this.triedPositions = {};
        this.position = this.options.position === 'auto' ? this._getDefaultPosition() : this.options.position;
        this.alignment = this.options.alignment === 'auto' ? this._getDefaultAlignment() : this.options.alignment;
      }
    }, {
      key: '_getDefaultPosition',
      value: function _getDefaultPosition() {
        return 'bottom';
      }
    }, {
      key: '_getDefaultAlignment',
      value: function _getDefaultAlignment() {
        switch (this.position) {
          case 'bottom':
          case 'top':
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__foundation_util_core__["b"])() ? 'right' : 'left';
          case 'left':
          case 'right':
            return 'bottom';
        }
      }
    }, {
      key: '_reposition',
      value: function _reposition() {
        if (this._alignmentsExhausted(this.position)) {
          this.position = nextItem(this.position, POSITIONS);
          this.alignment = ALIGNMENTS[this.position][0];
        } else {
          this._realign();
        }
      }
    }, {
      key: '_realign',
      value: function _realign() {
        this._addTriedPosition(this.position, this.alignment);
        this.alignment = nextItem(this.alignment, ALIGNMENTS[this.position]);
      }
    }, {
      key: '_addTriedPosition',
      value: function _addTriedPosition(position, alignment) {
        this.triedPositions[position] = this.triedPositions[position] || [];
        this.triedPositions[position].push(alignment);
      }
    }, {
      key: '_positionsExhausted',
      value: function _positionsExhausted() {
        var isExhausted = true;
        for (var i = 0; i < POSITIONS.length; i++) {
          isExhausted = isExhausted && this._alignmentsExhausted(POSITIONS[i]);
        }
        return isExhausted;
      }
    }, {
      key: '_alignmentsExhausted',
      value: function _alignmentsExhausted(position) {
        return this.triedPositions[position] && this.triedPositions[position].length == ALIGNMENTS[position].length;
      }
    }, {
      key: '_getVOffset',
      value: function _getVOffset() {
        return this.options.vOffset;
      }
    }, {
      key: '_getHOffset',
      value: function _getHOffset() {
        return this.options.hOffset;
      }
    }, {
      key: '_setPosition',
      value: function _setPosition($anchor, $element, $parent) {
        if ($anchor.attr('aria-expanded') === 'false') {
          return false;
        }
        var $eleDims = __WEBPACK_IMPORTED_MODULE_0__foundation_util_box__["a"].GetDimensions($element),
          $anchorDims = __WEBPACK_IMPORTED_MODULE_0__foundation_util_box__["a"].GetDimensions($anchor);
        $element.offset(__WEBPACK_IMPORTED_MODULE_0__foundation_util_box__["a"].GetExplicitOffsets($element, $anchor, this.position, this.alignment, this._getVOffset(), this._getHOffset()));
        if (!this.options.allowOverlap) {
          var overlaps = {};
          var minOverlap = 100000000;
          var minCoordinates = {
            position: this.position,
            alignment: this.alignment
          };
          while (!this._positionsExhausted()) {
            var overlap = __WEBPACK_IMPORTED_MODULE_0__foundation_util_box__["a"].OverlapArea($element, $parent, false, false, this.options.allowBottomOverlap);
            if (overlap === 0) {
              return;
            }
            if (overlap < minOverlap) {
              minOverlap = overlap;
              minCoordinates = {
                position: this.position,
                alignment: this.alignment
              };
            }
            this._reposition();
            $element.offset(__WEBPACK_IMPORTED_MODULE_0__foundation_util_box__["a"].GetExplicitOffsets($element, $anchor, this.position, this.alignment, this._getVOffset(), this._getHOffset()));
          }
          this.position = minCoordinates.position;
          this.alignment = minCoordinates.alignment;
          $element.offset(__WEBPACK_IMPORTED_MODULE_0__foundation_util_box__["a"].GetExplicitOffsets($element, $anchor, this.position, this.alignment, this._getVOffset(), this._getHOffset()));
        }
      }
    }]);
    return Positionable;
  }(__WEBPACK_IMPORTED_MODULE_1__foundation_plugin__["a"]);
  Positionable.defaults = {
    position: 'auto',
    alignment: 'auto',
    allowOverlap: false,
    allowBottomOverlap: true,
    vOffset: 0,
    hOffset: 0
  };
}), (function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.d(__webpack_exports__, "a", function() {
    return Touch;
  });
  var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
  var _createClass = function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var Touch = {};
  var startPosX, startPosY, startTime, elapsedTime, isMoving = false;

  function onTouchEnd() {
    this.removeEventListener('touchmove', onTouchMove);
    this.removeEventListener('touchend', onTouchEnd);
    isMoving = false;
  }

  function onTouchMove(e) {
    if (__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.spotSwipe.preventDefault) {
      e.preventDefault();
    }
    if (isMoving) {
      var x = e.touches[0].pageX;
      var y = e.touches[0].pageY;
      var dx = startPosX - x;
      var dy = startPosY - y;
      var dir;
      elapsedTime = new Date().getTime() - startTime;
      if (Math.abs(dx) >= __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.spotSwipe.moveThreshold && elapsedTime <= __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.spotSwipe.timeThreshold) {
        dir = dx > 0 ? 'left' : 'right';
      }
      if (dir) {
        e.preventDefault();
        onTouchEnd.call(this);
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).trigger('swipe', dir).trigger('swipe' + dir);
      }
    }
  }

  function onTouchStart(e) {
    if (e.touches.length == 1) {
      startPosX = e.touches[0].pageX;
      startPosY = e.touches[0].pageY;
      isMoving = true;
      startTime = new Date().getTime();
      this.addEventListener('touchmove', onTouchMove, false);
      this.addEventListener('touchend', onTouchEnd, false);
    }
  }

  function init() {
    this.addEventListener && this.addEventListener('touchstart', onTouchStart, false);
  }

  function teardown() {
    this.removeEventListener('touchstart', onTouchStart);
  }
  var SpotSwipe = function() {
    function SpotSwipe($) {
      _classCallCheck(this, SpotSwipe);
      this.version = '1.0.0';
      this.enabled = 'ontouchstart' in document.documentElement;
      this.preventDefault = false;
      this.moveThreshold = 75;
      this.timeThreshold = 200;
      this.$ = $;
      this._init();
    }
    _createClass(SpotSwipe, [{
      key: '_init',
      value: function _init() {
        var $ = this.$;
        $.event.special.swipe = {
          setup: init
        };
        $.each(['left', 'up', 'down', 'right'], function() {
          $.event.special['swipe' + this] = {
            setup: function() {
              $(this).on('swipe', $.noop);
            }
          };
        });
      }
    }]);
    return SpotSwipe;
  }();
  Touch.setupSpotSwipe = function($) {
    $.spotSwipe = new SpotSwipe($);
  };
  Touch.setupTouchHandler = function($) {
    $.fn.addTouch = function() {
      this.each(function(i, el) {
        $(el).bind('touchstart touchmove touchend touchcancel', function() {
          handleTouch(event);
        });
      });
      var handleTouch = function(event) {
        var touches = event.changedTouches,
          first = touches[0],
          eventTypes = {
            touchstart: 'mousedown',
            touchmove: 'mousemove',
            touchend: 'mouseup'
          },
          type = eventTypes[event.type],
          simulatedEvent;
        if ('MouseEvent' in window && typeof window.MouseEvent === 'function') {
          simulatedEvent = new window.MouseEvent(type, {
            'bubbles': true,
            'cancelable': true,
            'screenX': first.screenX,
            'screenY': first.screenY,
            'clientX': first.clientX,
            'clientY': first.clientY
          });
        } else {
          simulatedEvent = document.createEvent('MouseEvent');
          simulatedEvent.initMouseEvent(type, true, true, window, 1, first.screenX, first.screenY, first.clientX, first.clientY, false, false, false, false, 0, null);
        }
        first.target.dispatchEvent(simulatedEvent);
      };
    };
  };
  Touch.init = function($) {
    if (typeof $.spotSwipe === 'undefined') {
      Touch.setupSpotSwipe($);
      Touch.setupTouchHandler($);
    }
  };
}), (function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.d(__webpack_exports__, "a", function() {
    return Abide;
  });
  var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
  var __WEBPACK_IMPORTED_MODULE_1__foundation_plugin__ = __webpack_require__(2);
  var _createClass = function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var Abide = function(_Plugin) {
    _inherits(Abide, _Plugin);

    function Abide() {
      _classCallCheck(this, Abide);
      return _possibleConstructorReturn(this, (Abide.__proto__ || Object.getPrototypeOf(Abide)).apply(this, arguments));
    }
    _createClass(Abide, [{
      key: '_setup',
      value: function _setup(element) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        this.$element = element;
        this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend(true, {}, Abide.defaults, this.$element.data(), options);
        this.className = 'Abide';
        this._init();
      }
    }, {
      key: '_init',
      value: function _init() {
        this.$inputs = this.$element.find('input, textarea, select');
        this._events();
      }
    }, {
      key: '_events',
      value: function _events() {
        var _this3 = this;
        this.$element.off('.abide').on('reset.zf.abide', function() {
          _this3.resetForm();
        }).on('submit.zf.abide', function() {
          return _this3.validateForm();
        });
        if (this.options.validateOn === 'fieldChange') {
          this.$inputs.off('change.zf.abide').on('change.zf.abide', function(e) {
            _this3.validateInput(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target));
          });
        }
        if (this.options.liveValidate) {
          this.$inputs.off('input.zf.abide').on('input.zf.abide', function(e) {
            _this3.validateInput(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target));
          });
        }
        if (this.options.validateOnBlur) {
          this.$inputs.off('blur.zf.abide').on('blur.zf.abide', function(e) {
            _this3.validateInput(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target));
          });
        }
      }
    }, {
      key: '_reflow',
      value: function _reflow() {
        this._init();
      }
    }, {
      key: 'requiredCheck',
      value: function requiredCheck($el) {
        if (!$el.attr('required')) return true;
        var isGood = true;
        switch ($el[0].type) {
          case 'checkbox':
            isGood = $el[0].checked;
            break;
          case 'select':
          case 'select-one':
          case 'select-multiple':
            var opt = $el.find('option:selected');
            if (!opt.length || !opt.val()) isGood = false;
            break;
          default:
            if (!$el.val() || !$el.val().length) isGood = false;
        }
        return isGood;
      }
    }, {
      key: 'findFormError',
      value: function findFormError($el) {
        var id = $el[0].id;
        var $error = $el.siblings(this.options.formErrorSelector);
        if (!$error.length) {
          $error = $el.parent().find(this.options.formErrorSelector);
        }
        $error = $error.add(this.$element.find('[data-form-error-for="' + id + '"]'));
        return $error;
      }
    }, {
      key: 'findLabel',
      value: function findLabel($el) {
        var id = $el[0].id;
        var $label = this.$element.find('label[for="' + id + '"]');
        if (!$label.length) {
          return $el.closest('label');
        }
        return $label;
      }
    }, {
      key: 'findRadioLabels',
      value: function findRadioLabels($els) {
        var _this4 = this;
        var labels = $els.map(function(i, el) {
          var id = el.id;
          var $label = _this4.$element.find('label[for="' + id + '"]');
          if (!$label.length) {
            $label = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(el).closest('label');
          }
          return $label[0];
        });
        return __WEBPACK_IMPORTED_MODULE_0_jquery___default()(labels);
      }
    }, {
      key: 'addErrorClasses',
      value: function addErrorClasses($el) {
        var $label = this.findLabel($el);
        var $formError = this.findFormError($el);
        if ($label.length) {
          $label.addClass(this.options.labelErrorClass);
        }
        if ($formError.length) {
          $formError.addClass(this.options.formErrorClass);
        }
        $el.addClass(this.options.inputErrorClass).attr('data-invalid', '');
      }
    }, {
      key: 'removeRadioErrorClasses',
      value: function removeRadioErrorClasses(groupName) {
        var $els = this.$element.find(':radio[name="' + groupName + '"]');
        var $labels = this.findRadioLabels($els);
        var $formErrors = this.findFormError($els);
        if ($labels.length) {
          $labels.removeClass(this.options.labelErrorClass);
        }
        if ($formErrors.length) {
          $formErrors.removeClass(this.options.formErrorClass);
        }
        $els.removeClass(this.options.inputErrorClass).removeAttr('data-invalid');
      }
    }, {
      key: 'removeErrorClasses',
      value: function removeErrorClasses($el) {
        if ($el[0].type == 'radio') {
          return this.removeRadioErrorClasses($el.attr('name'));
        }
        var $label = this.findLabel($el);
        var $formError = this.findFormError($el);
        if ($label.length) {
          $label.removeClass(this.options.labelErrorClass);
        }
        if ($formError.length) {
          $formError.removeClass(this.options.formErrorClass);
        }
        $el.removeClass(this.options.inputErrorClass).removeAttr('data-invalid');
      }
    }, {
      key: 'validateInput',
      value: function validateInput($el) {
        var _this5 = this;
        var clearRequire = this.requiredCheck($el),
          validated = false,
          customValidator = true,
          validator = $el.attr('data-validator'),
          equalTo = true;
        if ($el.is('[data-abide-ignore]') || $el.is('[type="hidden"]') || $el.is('[disabled]')) {
          return true;
        }
        switch ($el[0].type) {
          case 'radio':
            validated = this.validateRadio($el.attr('name'));
            break;
          case 'checkbox':
            validated = clearRequire;
            break;
          case 'select':
          case 'select-one':
          case 'select-multiple':
            validated = clearRequire;
            break;
          default:
            validated = this.validateText($el);
        }
        if (validator) {
          customValidator = this.matchValidation($el, validator, $el.attr('required'));
        }
        if ($el.attr('data-equalto')) {
          equalTo = this.options.validators.equalTo($el);
        }
        var goodToGo = [clearRequire, validated, customValidator, equalTo].indexOf(false) === -1;
        var message = (goodToGo ? 'valid' : 'invalid') + '.zf.abide';
        if (goodToGo) {
          var dependentElements = this.$element.find('[data-equalto="' + $el.attr('id') + '"]');
          if (dependentElements.length) {
            (function() {
              var _this = _this5;
              dependentElements.each(function() {
                if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).val()) {
                  _this.validateInput(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this));
                }
              });
            })();
          }
        }
        this[goodToGo ? 'removeErrorClasses' : 'addErrorClasses']($el);
        $el.trigger(message, [$el]);
        return goodToGo;
      }
    }, {
      key: 'validateForm',
      value: function validateForm() {
        var acc = [];
        var _this = this;
        this.$inputs.each(function() {
          acc.push(_this.validateInput(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this)));
        });
        var noError = acc.indexOf(false) === -1;
        this.$element.find('[data-abide-error]').css('display', noError ? 'none' : 'block');
        this.$element.trigger((noError ? 'formvalid' : 'forminvalid') + '.zf.abide', [this.$element]);
        return noError;
      }
    }, {
      key: 'validateText',
      value: function validateText($el, pattern) {
        pattern = pattern || $el.attr('pattern') || $el.attr('type');
        var inputText = $el.val();
        var valid = false;
        if (inputText.length) {
          if (this.options.patterns.hasOwnProperty(pattern)) {
            valid = this.options.patterns[pattern].test(inputText);
          } else if (pattern !== $el.attr('type')) {
            valid = new RegExp(pattern).test(inputText);
          } else {
            valid = true;
          }
        } else if (!$el.prop('required')) {
          valid = true;
        }
        return valid;
      }
    }, {
      key: 'validateRadio',
      value: function validateRadio(groupName) {
        var $group = this.$element.find(':radio[name="' + groupName + '"]');
        var valid = false,
          required = false;
        $group.each(function(i, e) {
          if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(e).attr('required')) {
            required = true;
          }
        });
        if (!required) valid = true;
        if (!valid) {
          $group.each(function(i, e) {
            if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(e).prop('checked')) {
              valid = true;
            }
          });
        };
        return valid;
      }
    }, {
      key: 'matchValidation',
      value: function matchValidation($el, validators, required) {
        var _this6 = this;
        required = required ? true : false;
        var clear = validators.split(' ').map(function(v) {
          return _this6.options.validators[v]($el, required, $el.parent());
        });
        return clear.indexOf(false) === -1;
      }
    }, {
      key: 'resetForm',
      value: function resetForm() {
        var $form = this.$element,
          opts = this.options;
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.' + opts.labelErrorClass, $form).not('small').removeClass(opts.labelErrorClass);
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.' + opts.inputErrorClass, $form).not('small').removeClass(opts.inputErrorClass);
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(opts.formErrorSelector + '.' + opts.formErrorClass).removeClass(opts.formErrorClass);
        $form.find('[data-abide-error]').css('display', 'none');
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(':input', $form).not(':button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]').val('').removeAttr('data-invalid');
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(':input:radio', $form).not('[data-abide-ignore]').prop('checked', false).removeAttr('data-invalid');
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(':input:checkbox', $form).not('[data-abide-ignore]').prop('checked', false).removeAttr('data-invalid');
        $form.trigger('formreset.zf.abide', [$form]);
      }
    }, {
      key: '_destroy',
      value: function _destroy() {
        var _this = this;
        this.$element.off('.abide').find('[data-abide-error]').css('display', 'none');
        this.$inputs.off('.abide').each(function() {
          _this.removeErrorClasses(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this));
        });
      }
    }]);
    return Abide;
  }(__WEBPACK_IMPORTED_MODULE_1__foundation_plugin__["a"]);
  Abide.defaults = {
    validateOn: 'fieldChange',
    labelErrorClass: 'is-invalid-label',
    inputErrorClass: 'is-invalid-input',
    formErrorSelector: '.form-error',
    formErrorClass: 'is-visible',
    liveValidate: false,
    validateOnBlur: false,
    patterns: {
      alpha: /^[a-zA-Z]+$/,
      alpha_numeric: /^[a-zA-Z0-9]+$/,
      integer: /^[-+]?\d+$/,
      number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
      card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(?:222[1-9]|2[3-6][0-9]{2}|27[0-1][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
      cvv: /^([0-9]){3,4}$/,
      email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
      url: /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
      domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
      datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
      date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
      time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
      dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
      month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
      day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
      color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
      website: {
        test: function(text) {
          return Abide.defaults.patterns['domain'].test(text) || Abide.defaults.patterns['url'].test(text);
        }
      }
    },
    validators: {
      equalTo: function(el, required, parent) {
        return __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + el.attr('data-equalto')).val() === el.val();
      }
    }
  };
}), (function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.d(__webpack_exports__, "a", function() {
    return Foundation;
  });
  var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
  var __WEBPACK_IMPORTED_MODULE_1__foundation_util_core__ = __webpack_require__(1);
  var __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__ = __webpack_require__(3);
  var FOUNDATION_VERSION = '6.4.2';
  var Foundation = {
    version: FOUNDATION_VERSION,
    _plugins: {},
    _uuids: [],
    plugin: function(plugin, name) {
      var className = name || functionName(plugin);
      var attrName = hyphenate(className);
      this._plugins[attrName] = this[className] = plugin;
    },
    registerPlugin: function(plugin, name) {
      var pluginName = name ? hyphenate(name) : functionName(plugin.constructor).toLowerCase();
      plugin.uuid = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__foundation_util_core__["a"])(6, pluginName);
      if (!plugin.$element.attr('data-' + pluginName)) {
        plugin.$element.attr('data-' + pluginName, plugin.uuid);
      }
      if (!plugin.$element.data('zfPlugin')) {
        plugin.$element.data('zfPlugin', plugin);
      }
      plugin.$element.trigger('init.zf.' + pluginName);
      this._uuids.push(plugin.uuid);
      return;
    },
    unregisterPlugin: function(plugin) {
      var pluginName = hyphenate(functionName(plugin.$element.data('zfPlugin').constructor));
      this._uuids.splice(this._uuids.indexOf(plugin.uuid), 1);
      plugin.$element.removeAttr('data-' + pluginName).removeData('zfPlugin').trigger('destroyed.zf.' + pluginName);
      for (var prop in plugin) {
        plugin[prop] = null;
      }
      return;
    },
    reInit: function(plugins) {
      var isJQ = plugins instanceof __WEBPACK_IMPORTED_MODULE_0_jquery___default.a;
      try {
        if (isJQ) {
          plugins.each(function() {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data('zfPlugin')._init();
          });
        } else {
          var type = typeof plugins,
            _this = this,
            fns = {
              'object': function(plgs) {
                plgs.forEach(function(p) {
                  p = hyphenate(p);
                  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-' + p + ']').foundation('_init');
                });
              },
              'string': function() {
                plugins = hyphenate(plugins);
                __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-' + plugins + ']').foundation('_init');
              },
              'undefined': function() {
                this['object'](Object.keys(_this._plugins));
              }
            };
          fns[type](plugins);
        }
      } catch (err) {
        console.error(err);
      } finally {
        return plugins;
      }
    },
    reflow: function(elem, plugins) {
      if (typeof plugins === 'undefined') {
        plugins = Object.keys(this._plugins);
      } else if (typeof plugins === 'string') {
        plugins = [plugins];
      }
      var _this = this;
      __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.each(plugins, function(i, name) {
        var plugin = _this._plugins[name];
        var $elem = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(elem).find('[data-' + name + ']').addBack('[data-' + name + ']');
        $elem.each(function() {
          var $el = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this),
            opts = {};
          if ($el.data('zfPlugin')) {
            console.warn("Tried to initialize " + name + " on an element that already has a Foundation plugin.");
            return;
          }
          if ($el.attr('data-options')) {
            var thing = $el.attr('data-options').split(';').forEach(function(e, i) {
              var opt = e.split(':').map(function(el) {
                return el.trim();
              });
              if (opt[0]) opts[opt[0]] = parseValue(opt[1]);
            });
          }
          try {
            $el.data('zfPlugin', new plugin(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this), opts));
          } catch (er) {
            console.error(er);
          } finally {
            return;
          }
        });
      });
    },
    getFnName: functionName,
    addToJquery: function($) {
      var foundation = function(method) {
        var type = typeof method,
          $noJS = $('.no-js');
        if ($noJS.length) {
          $noJS.removeClass('no-js');
        }
        if (type === 'undefined') {
          __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__["a"]._init();
          Foundation.reflow(this);
        } else if (type === 'string') {
          var args = Array.prototype.slice.call(arguments, 1);
          var plugClass = this.data('zfPlugin');
          if (plugClass !== undefined && plugClass[method] !== undefined) {
            if (this.length === 1) {
              plugClass[method].apply(plugClass, args);
            } else {
              this.each(function(i, el) {
                plugClass[method].apply($(el).data('zfPlugin'), args);
              });
            }
          } else {
            throw new ReferenceError("We're sorry, '" + method + "' is not an available method for " + (plugClass ? functionName(plugClass) : 'this element') + '.');
          }
        } else {
          throw new TypeError('We\'re sorry, ' + type + ' is not a valid parameter. You must use a string representing the method you wish to invoke.');
        }
        return this;
      };
      $.fn.foundation = foundation;
      return $;
    }
  };
  Foundation.util = {
    throttle: function(func, delay) {
      var timer = null;
      return function() {
        var context = this,
          args = arguments;
        if (timer === null) {
          timer = setTimeout(function() {
            func.apply(context, args);
            timer = null;
          }, delay);
        }
      };
    }
  };
  window.Foundation = Foundation;
  (function() {
    if (!Date.now || !window.Date.now) window.Date.now = Date.now = function() {
      return new Date().getTime();
    };
    var vendors = ['webkit', 'moz'];
    for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
      var vp = vendors[i];
      window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame'];
    }
    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
      var lastTime = 0;
      window.requestAnimationFrame = function(callback) {
        var now = Date.now();
        var nextTime = Math.max(lastTime + 16, now);
        return setTimeout(function() {
          callback(lastTime = nextTime);
        }, nextTime - now);
      };
      window.cancelAnimationFrame = clearTimeout;
    }
    if (!window.performance || !window.performance.now) {
      window.performance = {
        start: Date.now(),
        now: function() {
          return Date.now() - this.start;
        }
      };
    }
  })();
  if (!Function.prototype.bind) {
    Function.prototype.bind = function(oThis) {
      if (typeof this !== 'function') {
        throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
      }
      var aArgs = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP = function() {},
        fBound = function() {
          return fToBind.apply(this instanceof fNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
        };
      if (this.prototype) {
        fNOP.prototype = this.prototype;
      }
      fBound.prototype = new fNOP();
      return fBound;
    };
  }

  function functionName(fn) {
    if (Function.prototype.name === undefined) {
      var funcNameRegex = /function\s([^(]{1,})\(/;
      var results = funcNameRegex.exec(fn.toString());
      return results && results.length > 1 ? results[1].trim() : "";
    } else if (fn.prototype === undefined) {
      return fn.constructor.name;
    } else {
      return fn.prototype.constructor.name;
    }
  }

  function parseValue(str) {
    if ('true' === str) return true;
    else if ('false' === str) return false;
    else if (!isNaN(str * 1)) return parseFloat(str);
    return str;
  }

  function hyphenate(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }
}), (function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.d(__webpack_exports__, "a", function() {
    return Dropdown;
  });
  var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
  var __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__ = __webpack_require__(4);
  var __WEBPACK_IMPORTED_MODULE_2__foundation_util_core__ = __webpack_require__(1);
  var __WEBPACK_IMPORTED_MODULE_3__foundation_positionable__ = __webpack_require__(15);
  var __WEBPACK_IMPORTED_MODULE_4__foundation_util_triggers__ = __webpack_require__(5);
  var _createClass = function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  var _get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);
    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);
      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;
      if (getter === undefined) {
        return undefined;
      }
      return getter.call(receiver);
    }
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var Dropdown = function(_Positionable) {
    _inherits(Dropdown, _Positionable);

    function Dropdown() {
      _classCallCheck(this, Dropdown);
      return _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).apply(this, arguments));
    }
    _createClass(Dropdown, [{
      key: '_setup',
      value: function _setup(element, options) {
        this.$element = element;
        this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, Dropdown.defaults, this.$element.data(), options);
        this.className = 'Dropdown';
        __WEBPACK_IMPORTED_MODULE_4__foundation_util_triggers__["a"].init(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a);
        this._init();
        __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a"].register('Dropdown', {
          'ENTER': 'open',
          'SPACE': 'open',
          'ESCAPE': 'close'
        });
      }
    }, {
      key: '_init',
      value: function _init() {
        var $id = this.$element.attr('id');
        this.$anchors = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-toggle="' + $id + '"]').length ? __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-toggle="' + $id + '"]') : __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-open="' + $id + '"]');
        this.$anchors.attr({
          'aria-controls': $id,
          'data-is-focus': false,
          'data-yeti-box': $id,
          'aria-haspopup': true,
          'aria-expanded': false
        });
        this._setCurrentAnchor(this.$anchors.first());
        if (this.options.parentClass) {
          this.$parent = this.$element.parents('.' + this.options.parentClass);
        } else {
          this.$parent = null;
        }
        this.$element.attr({
          'aria-hidden': 'true',
          'data-yeti-box': $id,
          'data-resize': $id,
          'aria-labelledby': this.$currentAnchor.id || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__foundation_util_core__["a"])(6, 'dd-anchor')
        });
        _get(Dropdown.prototype.__proto__ || Object.getPrototypeOf(Dropdown.prototype), '_init', this).call(this);
        this._events();
      }
    }, {
      key: '_getDefaultPosition',
      value: function _getDefaultPosition() {
        var position = this.$element[0].className.match(/(top|left|right|bottom)/g);
        if (position) {
          return position[0];
        } else {
          return 'bottom';
        }
      }
    }, {
      key: '_getDefaultAlignment',
      value: function _getDefaultAlignment() {
        var horizontalPosition = /float-(\S+)/.exec(this.$currentAnchor.className);
        if (horizontalPosition) {
          return horizontalPosition[1];
        }
        return _get(Dropdown.prototype.__proto__ || Object.getPrototypeOf(Dropdown.prototype), '_getDefaultAlignment', this).call(this);
      }
    }, {
      key: '_setPosition',
      value: function _setPosition() {
        _get(Dropdown.prototype.__proto__ || Object.getPrototypeOf(Dropdown.prototype), '_setPosition', this).call(this, this.$currentAnchor, this.$element, this.$parent);
      }
    }, {
      key: '_setCurrentAnchor',
      value: function _setCurrentAnchor(el) {
        this.$currentAnchor = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(el);
      }
    }, {
      key: '_events',
      value: function _events() {
        var _this = this;
        this.$element.on({
          'open.zf.trigger': this.open.bind(this),
          'close.zf.trigger': this.close.bind(this),
          'toggle.zf.trigger': this.toggle.bind(this),
          'resizeme.zf.trigger': this._setPosition.bind(this)
        });
        this.$anchors.off('click.zf.trigger').on('click.zf.trigger', function() {
          _this._setCurrentAnchor(this);
        });
        if (this.options.hover) {
          this.$anchors.off('mouseenter.zf.dropdown mouseleave.zf.dropdown').on('mouseenter.zf.dropdown', function() {
            _this._setCurrentAnchor(this);
            var bodyData = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('body').data();
            if (typeof bodyData.whatinput === 'undefined' || bodyData.whatinput === 'mouse') {
              clearTimeout(_this.timeout);
              _this.timeout = setTimeout(function() {
                _this.open();
                _this.$anchors.data('hover', true);
              }, _this.options.hoverDelay);
            }
          }).on('mouseleave.zf.dropdown', function() {
            clearTimeout(_this.timeout);
            _this.timeout = setTimeout(function() {
              _this.close();
              _this.$anchors.data('hover', false);
            }, _this.options.hoverDelay);
          });
          if (this.options.hoverPane) {
            this.$element.off('mouseenter.zf.dropdown mouseleave.zf.dropdown').on('mouseenter.zf.dropdown', function() {
              clearTimeout(_this.timeout);
            }).on('mouseleave.zf.dropdown', function() {
              clearTimeout(_this.timeout);
              _this.timeout = setTimeout(function() {
                _this.close();
                _this.$anchors.data('hover', false);
              }, _this.options.hoverDelay);
            });
          }
        }
        this.$anchors.add(this.$element).on('keydown.zf.dropdown', function(e) {
          var $target = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this),
            visibleFocusableElements = __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a"].findFocusable(_this.$element);
          __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a"].handleKey(e, 'Dropdown', {
            open: function() {
              if ($target.is(_this.$anchors)) {
                _this.open();
                _this.$element.attr('tabindex', -1).focus();
                e.preventDefault();
              }
            },
            close: function() {
              _this.close();
              _this.$anchors.focus();
            }
          });
        });
      }
    }, {
      key: '_addBodyHandler',
      value: function _addBodyHandler() {
        var $body = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document.body).not(this.$element),
          _this = this;
        $body.off('click.zf.dropdown').on('click.zf.dropdown', function(e) {
          if (_this.$anchors.is(e.target) || _this.$anchors.find(e.target).length) {
            return;
          }
          if (_this.$element.find(e.target).length) {
            return;
          }
          _this.close();
          $body.off('click.zf.dropdown');
        });
      }
    }, {
      key: 'open',
      value: function open() {
        this.$element.trigger('closeme.zf.dropdown', this.$element.attr('id'));
        this.$anchors.addClass('hover').attr({
          'aria-expanded': true
        });
        this.$element.addClass('is-opening');
        this._setPosition();
        this.$element.removeClass('is-opening').addClass('is-open').attr({
          'aria-hidden': false
        });
        if (this.options.autoFocus) {
          var $focusable = __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a"].findFocusable(this.$element);
          if ($focusable.length) {
            $focusable.eq(0).focus();
          }
        }
        if (this.options.closeOnClick) {
          this._addBodyHandler();
        }
        if (this.options.trapFocus) {
          __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a"].trapFocus(this.$element);
        }
        this.$element.trigger('show.zf.dropdown', [this.$element]);
      }
    }, {
      key: 'close',
      value: function close() {
        if (!this.$element.hasClass('is-open')) {
          return false;
        }
        this.$element.removeClass('is-open').attr({
          'aria-hidden': true
        });
        this.$anchors.removeClass('hover').attr('aria-expanded', false);
        this.$element.trigger('hide.zf.dropdown', [this.$element]);
        if (this.options.trapFocus) {
          __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a"].releaseFocus(this.$element);
        }
      }
    }, {
      key: 'toggle',
      value: function toggle() {
        if (this.$element.hasClass('is-open')) {
          if (this.$anchors.data('hover')) return;
          this.close();
        } else {
          this.open();
        }
      }
    }, {
      key: '_destroy',
      value: function _destroy() {
        this.$element.off('.zf.trigger').hide();
        this.$anchors.off('.zf.dropdown');
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document.body).off('click.zf.dropdown');
      }
    }]);
    return Dropdown;
  }(__WEBPACK_IMPORTED_MODULE_3__foundation_positionable__["a"]);
  Dropdown.defaults = {
    parentClass: null,
    hoverDelay: 250,
    hover: false,
    hoverPane: false,
    vOffset: 0,
    hOffset: 0,
    positionClass: '',
    position: 'auto',
    alignment: 'auto',
    allowOverlap: false,
    allowBottomOverlap: true,
    trapFocus: false,
    autoFocus: false,
    closeOnClick: false
  };
}), (function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.d(__webpack_exports__, "a", function() {
    return Equalizer;
  });
  var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
  var __WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__ = __webpack_require__(3);
  var __WEBPACK_IMPORTED_MODULE_2__foundation_util_imageLoader__ = __webpack_require__(8);
  var __WEBPACK_IMPORTED_MODULE_3__foundation_util_core__ = __webpack_require__(1);
  var __WEBPACK_IMPORTED_MODULE_4__foundation_plugin__ = __webpack_require__(2);
  var _createClass = function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var Equalizer = function(_Plugin) {
    _inherits(Equalizer, _Plugin);

    function Equalizer() {
      _classCallCheck(this, Equalizer);
      return _possibleConstructorReturn(this, (Equalizer.__proto__ || Object.getPrototypeOf(Equalizer)).apply(this, arguments));
    }
    _createClass(Equalizer, [{
      key: '_setup',
      value: function _setup(element, options) {
        this.$element = element;
        this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, Equalizer.defaults, this.$element.data(), options);
        this.className = 'Equalizer';
        this._init();
      }
    }, {
      key: '_init',
      value: function _init() {
        var eqId = this.$element.attr('data-equalizer') || '';
        var $watched = this.$element.find('[data-equalizer-watch="' + eqId + '"]');
        __WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__["a"]._init();
        this.$watched = $watched.length ? $watched : this.$element.find('[data-equalizer-watch]');
        this.$element.attr('data-resize', eqId || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__foundation_util_core__["a"])(6, 'eq'));
        this.$element.attr('data-mutate', eqId || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__foundation_util_core__["a"])(6, 'eq'));
        this.hasNested = this.$element.find('[data-equalizer]').length > 0;
        this.isNested = this.$element.parentsUntil(document.body, '[data-equalizer]').length > 0;
        this.isOn = false;
        this._bindHandler = {
          onResizeMeBound: this._onResizeMe.bind(this),
          onPostEqualizedBound: this._onPostEqualized.bind(this)
        };
        var imgs = this.$element.find('img');
        var tooSmall;
        if (this.options.equalizeOn) {
          tooSmall = this._checkMQ();
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).on('changed.zf.mediaquery', this._checkMQ.bind(this));
        } else {
          this._events();
        }
        if (tooSmall !== undefined && tooSmall === false || tooSmall === undefined) {
          if (imgs.length) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__foundation_util_imageLoader__["a"])(imgs, this._reflow.bind(this));
          } else {
            this._reflow();
          }
        }
      }
    }, {
      key: '_pauseEvents',
      value: function _pauseEvents() {
        this.isOn = false;
        this.$element.off({
          '.zf.equalizer': this._bindHandler.onPostEqualizedBound,
          'resizeme.zf.trigger': this._bindHandler.onResizeMeBound,
          'mutateme.zf.trigger': this._bindHandler.onResizeMeBound
        });
      }
    }, {
      key: '_onResizeMe',
      value: function _onResizeMe(e) {
        this._reflow();
      }
    }, {
      key: '_onPostEqualized',
      value: function _onPostEqualized(e) {
        if (e.target !== this.$element[0]) {
          this._reflow();
        }
      }
    }, {
      key: '_events',
      value: function _events() {
        var _this = this;
        this._pauseEvents();
        if (this.hasNested) {
          this.$element.on('postequalized.zf.equalizer', this._bindHandler.onPostEqualizedBound);
        } else {
          this.$element.on('resizeme.zf.trigger', this._bindHandler.onResizeMeBound);
          this.$element.on('mutateme.zf.trigger', this._bindHandler.onResizeMeBound);
        }
        this.isOn = true;
      }
    }, {
      key: '_checkMQ',
      value: function _checkMQ() {
        var tooSmall = !__WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__["a"].is(this.options.equalizeOn);
        if (tooSmall) {
          if (this.isOn) {
            this._pauseEvents();
            this.$watched.css('height', 'auto');
          }
        } else {
          if (!this.isOn) {
            this._events();
          }
        }
        return tooSmall;
      }
    }, {
      key: '_killswitch',
      value: function _killswitch() {
        return;
      }
    }, {
      key: '_reflow',
      value: function _reflow() {
        if (!this.options.equalizeOnStack) {
          if (this._isStacked()) {
            this.$watched.css('height', 'auto');
            return false;
          }
        }
        if (this.options.equalizeByRow) {
          this.getHeightsByRow(this.applyHeightByRow.bind(this));
        } else {
          this.getHeights(this.applyHeight.bind(this));
        }
      }
    }, {
      key: '_isStacked',
      value: function _isStacked() {
        if (!this.$watched[0] || !this.$watched[1]) {
          return true;
        }
        return this.$watched[0].getBoundingClientRect().top !== this.$watched[1].getBoundingClientRect().top;
      }
    }, {
      key: 'getHeights',
      value: function getHeights(cb) {
        var heights = [];
        for (var i = 0, len = this.$watched.length; i < len; i++) {
          this.$watched[i].style.height = 'auto';
          heights.push(this.$watched[i].offsetHeight);
        }
        cb(heights);
      }
    }, {
      key: 'getHeightsByRow',
      value: function getHeightsByRow(cb) {
        var lastElTopOffset = this.$watched.length ? this.$watched.first().offset().top : 0,
          groups = [],
          group = 0;
        groups[group] = [];
        for (var i = 0, len = this.$watched.length; i < len; i++) {
          this.$watched[i].style.height = 'auto';
          var elOffsetTop = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this.$watched[i]).offset().top;
          if (elOffsetTop != lastElTopOffset) {
            group++;
            groups[group] = [];
            lastElTopOffset = elOffsetTop;
          }
          groups[group].push([this.$watched[i], this.$watched[i].offsetHeight]);
        }
        for (var j = 0, ln = groups.length; j < ln; j++) {
          var heights = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(groups[j]).map(function() {
            return this[1];
          }).get();
          var max = Math.max.apply(null, heights);
          groups[j].push(max);
        }
        cb(groups);
      }
    }, {
      key: 'applyHeight',
      value: function applyHeight(heights) {
        var max = Math.max.apply(null, heights);
        this.$element.trigger('preequalized.zf.equalizer');
        this.$watched.css('height', max);
        this.$element.trigger('postequalized.zf.equalizer');
      }
    }, {
      key: 'applyHeightByRow',
      value: function applyHeightByRow(groups) {
        this.$element.trigger('preequalized.zf.equalizer');
        for (var i = 0, len = groups.length; i < len; i++) {
          var groupsILength = groups[i].length,
            max = groups[i][groupsILength - 1];
          if (groupsILength <= 2) {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(groups[i][0][0]).css({
              'height': 'auto'
            });
            continue;
          }
          this.$element.trigger('preequalizedrow.zf.equalizer');
          for (var j = 0, lenJ = groupsILength - 1; j < lenJ; j++) {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(groups[i][j][0]).css({
              'height': max
            });
          }
          this.$element.trigger('postequalizedrow.zf.equalizer');
        }
        this.$element.trigger('postequalized.zf.equalizer');
      }
    }, {
      key: '_destroy',
      value: function _destroy() {
        this._pauseEvents();
        this.$watched.css('height', 'auto');
      }
    }]);
    return Equalizer;
  }(__WEBPACK_IMPORTED_MODULE_4__foundation_plugin__["a"]);
  Equalizer.defaults = {
    equalizeOnStack: false,
    equalizeByRow: false,
    equalizeOn: ''
  };
}), (function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.d(__webpack_exports__, "a", function() {
    return Interchange;
  });
  var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
  var __WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__ = __webpack_require__(3);
  var __WEBPACK_IMPORTED_MODULE_2__foundation_plugin__ = __webpack_require__(2);
  var __WEBPACK_IMPORTED_MODULE_3__foundation_util_core__ = __webpack_require__(1);
  var _createClass = function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var Interchange = function(_Plugin) {
    _inherits(Interchange, _Plugin);

    function Interchange() {
      _classCallCheck(this, Interchange);
      return _possibleConstructorReturn(this, (Interchange.__proto__ || Object.getPrototypeOf(Interchange)).apply(this, arguments));
    }
    _createClass(Interchange, [{
      key: '_setup',
      value: function _setup(element, options) {
        this.$element = element;
        this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, Interchange.defaults, options);
        this.rules = [];
        this.currentPath = '';
        this.className = 'Interchange';
        this._init();
        this._events();
      }
    }, {
      key: '_init',
      value: function _init() {
        __WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__["a"]._init();
        var id = this.$element[0].id || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__foundation_util_core__["a"])(6, 'interchange');
        this.$element.attr({
          'data-resize': id,
          'id': id
        });
        this._addBreakpoints();
        this._generateRules();
        this._reflow();
      }
    }, {
      key: '_events',
      value: function _events() {
        var _this3 = this;
        this.$element.off('resizeme.zf.trigger').on('resizeme.zf.trigger', function() {
          return _this3._reflow();
        });
      }
    }, {
      key: '_reflow',
      value: function _reflow() {
        var match;
        for (var i in this.rules) {
          if (this.rules.hasOwnProperty(i)) {
            var rule = this.rules[i];
            if (window.matchMedia(rule.query).matches) {
              match = rule;
            }
          }
        }
        if (match) {
          this.replace(match.path);
        }
      }
    }, {
      key: '_addBreakpoints',
      value: function _addBreakpoints() {
        for (var i in __WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__["a"].queries) {
          if (__WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__["a"].queries.hasOwnProperty(i)) {
            var query = __WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__["a"].queries[i];
            Interchange.SPECIAL_QUERIES[query.name] = query.value;
          }
        }
      }
    }, {
      key: '_generateRules',
      value: function _generateRules(element) {
        var rulesList = [];
        var rules;
        if (this.options.rules) {
          rules = this.options.rules;
        } else {
          rules = this.$element.data('interchange');
        }
        rules = typeof rules === 'string' ? rules.match(/\[.*?\]/g) : rules;
        for (var i in rules) {
          if (rules.hasOwnProperty(i)) {
            var rule = rules[i].slice(1, -1).split(', ');
            var path = rule.slice(0, -1).join('');
            var query = rule[rule.length - 1];
            if (Interchange.SPECIAL_QUERIES[query]) {
              query = Interchange.SPECIAL_QUERIES[query];
            }
            rulesList.push({
              path: path,
              query: query
            });
          }
        }
        this.rules = rulesList;
      }
    }, {
      key: 'replace',
      value: function replace(path) {
        if (this.currentPath === path) return;
        var _this = this,
          trigger = 'replaced.zf.interchange';
        if (this.$element[0].nodeName === 'IMG') {
          this.$element.attr('src', path).on('load', function() {
            _this.currentPath = path;
          }).trigger(trigger);
        } else if (path.match(/\.(gif|jpg|jpeg|png|svg|tiff)([?#].*)?/i)) {
          path = path.replace(/\(/g, '%28').replace(/\)/g, '%29');
          this.$element.css({
            'background-image': 'url(' + path + ')'
          }).trigger(trigger);
        } else {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.get(path, function(response) {
            _this.$element.html(response).trigger(trigger);
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(response).foundation();
            _this.currentPath = path;
          });
        }
      }
    }, {
      key: '_destroy',
      value: function _destroy() {
        this.$element.off('resizeme.zf.trigger');
      }
    }]);
    return Interchange;
  }(__WEBPACK_IMPORTED_MODULE_2__foundation_plugin__["a"]);
  Interchange.defaults = {
    rules: null
  };
  Interchange.SPECIAL_QUERIES = {
    'landscape': 'screen and (orientation: landscape)',
    'portrait': 'screen and (orientation: portrait)',
    'retina': 'only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)'
  };
}), (function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.d(__webpack_exports__, "a", function() {
    return Magellan;
  });
  var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
  var __WEBPACK_IMPORTED_MODULE_1__foundation_util_core__ = __webpack_require__(1);
  var __WEBPACK_IMPORTED_MODULE_2__foundation_plugin__ = __webpack_require__(2);
  var __WEBPACK_IMPORTED_MODULE_3__foundation_smoothScroll__ = __webpack_require__(33);
  var _createClass = function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var Magellan = function(_Plugin) {
    _inherits(Magellan, _Plugin);

    function Magellan() {
      _classCallCheck(this, Magellan);
      return _possibleConstructorReturn(this, (Magellan.__proto__ || Object.getPrototypeOf(Magellan)).apply(this, arguments));
    }
    _createClass(Magellan, [{
      key: '_setup',
      value: function _setup(element, options) {
        this.$element = element;
        this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, Magellan.defaults, this.$element.data(), options);
        this.className = 'Magellan';
        this._init();
        this.calcPoints();
      }
    }, {
      key: '_init',
      value: function _init() {
        var id = this.$element[0].id || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__foundation_util_core__["a"])(6, 'magellan');
        var _this = this;
        this.$targets = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-magellan-target]');
        this.$links = this.$element.find('a');
        this.$element.attr({
          'data-resize': id,
          'data-scroll': id,
          'id': id
        });
        this.$active = __WEBPACK_IMPORTED_MODULE_0_jquery___default()();
        this.scrollPos = parseInt(window.pageYOffset, 10);
        this._events();
      }
    }, {
      key: 'calcPoints',
      value: function calcPoints() {
        var _this = this,
          body = document.body,
          html = document.documentElement;
        this.points = [];
        this.winHeight = Math.round(Math.max(window.innerHeight, html.clientHeight));
        this.docHeight = Math.round(Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight));
        this.$targets.each(function() {
          var $tar = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this),
            pt = Math.round($tar.offset().top - _this.options.threshold);
          $tar.targetPoint = pt;
          _this.points.push(pt);
        });
      }
    }, {
      key: '_events',
      value: function _events() {
        var _this = this,
          $body = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('html, body'),
          opts = {
            duration: _this.options.animationDuration,
            easing: _this.options.animationEasing
          };
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).one('load', function() {
          if (_this.options.deepLinking) {
            if (location.hash) {
              _this.scrollToLoc(location.hash);
            }
          }
          _this.calcPoints();
          _this._updateActive();
        });
        this.$element.on({
          'resizeme.zf.trigger': this.reflow.bind(this),
          'scrollme.zf.trigger': this._updateActive.bind(this)
        }).on('click.zf.magellan', 'a[href^="#"]', function(e) {
          e.preventDefault();
          var arrival = this.getAttribute('href');
          _this.scrollToLoc(arrival);
        });
        this._deepLinkScroll = function(e) {
          if (_this.options.deepLinking) {
            _this.scrollToLoc(window.location.hash);
          }
        };
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).on('popstate', this._deepLinkScroll);
      }
    }, {
      key: 'scrollToLoc',
      value: function scrollToLoc(loc) {
        this._inTransition = true;
        var _this = this;
        var options = {
          animationEasing: this.options.animationEasing,
          animationDuration: this.options.animationDuration,
          threshold: this.options.threshold,
          offset: this.options.offset
        };
        __WEBPACK_IMPORTED_MODULE_3__foundation_smoothScroll__["a"].scrollToLoc(loc, options, function() {
          _this._inTransition = false;
          _this._updateActive();
        });
      }
    }, {
      key: 'reflow',
      value: function reflow() {
        this.calcPoints();
        this._updateActive();
      }
    }, {
      key: '_updateActive',
      value: function _updateActive() {
        if (this._inTransition) {
          return;
        }
        var winPos = parseInt(window.pageYOffset, 10),
          curIdx;
        if (winPos + this.winHeight === this.docHeight) {
          curIdx = this.points.length - 1;
        } else if (winPos < this.points[0]) {
          curIdx = undefined;
        } else {
          var isDown = this.scrollPos < winPos,
            _this = this,
            curVisible = this.points.filter(function(p, i) {
              return isDown ? p - _this.options.offset <= winPos : p - _this.options.offset - _this.options.threshold <= winPos;
            });
          curIdx = curVisible.length ? curVisible.length - 1 : 0;
        }
        this.$active.removeClass(this.options.activeClass);
        this.$active = this.$links.filter('[href="#' + this.$targets.eq(curIdx).data('magellan-target') + '"]').addClass(this.options.activeClass);
        if (this.options.deepLinking) {
          var hash = "";
          if (curIdx != undefined) {
            hash = this.$active[0].getAttribute('href');
          }
          if (hash !== window.location.hash) {
            if (window.history.pushState) {
              window.history.pushState(null, null, hash);
            } else {
              window.location.hash = hash;
            }
          }
        }
        this.scrollPos = winPos;
        this.$element.trigger('update.zf.magellan', [this.$active]);
      }
    }, {
      key: '_destroy',
      value: function _destroy() {
        this.$element.off('.zf.trigger .zf.magellan').find('.' + this.options.activeClass).removeClass(this.options.activeClass);
        if (this.options.deepLinking) {
          var hash = this.$active[0].getAttribute('href');
          window.location.hash.replace(hash, '');
        }
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off('popstate', this._deepLinkScroll);
      }
    }]);
    return Magellan;
  }(__WEBPACK_IMPORTED_MODULE_2__foundation_plugin__["a"]);
  Magellan.defaults = {
    animationDuration: 500,
    animationEasing: 'linear',
    threshold: 50,
    activeClass: 'is-active',
    deepLinking: false,
    offset: 0
  };
}), (function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.d(__webpack_exports__, "a", function() {
    return OffCanvas;
  });
  var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
  var __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__ = __webpack_require__(4);
  var __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__ = __webpack_require__(3);
  var __WEBPACK_IMPORTED_MODULE_3__foundation_util_core__ = __webpack_require__(1);
  var __WEBPACK_IMPORTED_MODULE_4__foundation_plugin__ = __webpack_require__(2);
  var __WEBPACK_IMPORTED_MODULE_5__foundation_util_triggers__ = __webpack_require__(5);
  var _createClass = function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var OffCanvas = function(_Plugin) {
    _inherits(OffCanvas, _Plugin);

    function OffCanvas() {
      _classCallCheck(this, OffCanvas);
      return _possibleConstructorReturn(this, (OffCanvas.__proto__ || Object.getPrototypeOf(OffCanvas)).apply(this, arguments));
    }
    _createClass(OffCanvas, [{
      key: '_setup',
      value: function _setup(element, options) {
        var _this3 = this;
        this.className = 'OffCanvas';
        this.$element = element;
        this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, OffCanvas.defaults, this.$element.data(), options);
        this.contentClasses = {
          base: [],
          reveal: []
        };
        this.$lastTrigger = __WEBPACK_IMPORTED_MODULE_0_jquery___default()();
        this.$triggers = __WEBPACK_IMPORTED_MODULE_0_jquery___default()();
        this.position = 'left';
        this.$content = __WEBPACK_IMPORTED_MODULE_0_jquery___default()();
        this.nested = !!this.options.nested;
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(['push', 'overlap']).each(function(index, val) {
          _this3.contentClasses.base.push('has-transition-' + val);
        });
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(['left', 'right', 'top', 'bottom']).each(function(index, val) {
          _this3.contentClasses.base.push('has-position-' + val);
          _this3.contentClasses.reveal.push('has-reveal-' + val);
        });
        __WEBPACK_IMPORTED_MODULE_5__foundation_util_triggers__["a"].init(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a);
        __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__["a"]._init();
        this._init();
        this._events();
        __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a"].register('OffCanvas', {
          'ESCAPE': 'close'
        });
      }
    }, {
      key: '_init',
      value: function _init() {
        var id = this.$element.attr('id');
        this.$element.attr('aria-hidden', 'true');
        if (this.options.contentId) {
          this.$content = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + this.options.contentId);
        } else if (this.$element.siblings('[data-off-canvas-content]').length) {
          this.$content = this.$element.siblings('[data-off-canvas-content]').first();
        } else {
          this.$content = this.$element.closest('[data-off-canvas-content]').first();
        }
        if (!this.options.contentId) {
          this.nested = this.$element.siblings('[data-off-canvas-content]').length === 0;
        } else if (this.options.contentId && this.options.nested === null) {
          console.warn('Remember to use the nested option if using the content ID option!');
        }
        if (this.nested === true) {
          this.options.transition = 'overlap';
          this.$element.removeClass('is-transition-push');
        }
        this.$element.addClass('is-transition-' + this.options.transition + ' is-closed');
        this.$triggers = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).find('[data-open="' + id + '"], [data-close="' + id + '"], [data-toggle="' + id + '"]').attr('aria-expanded', 'false').attr('aria-controls', id);
        this.position = this.$element.is('.position-left, .position-top, .position-right, .position-bottom') ? this.$element.attr('class').match(/position\-(left|top|right|bottom)/)[1] : this.position;
        if (this.options.contentOverlay === true) {
          var overlay = document.createElement('div');
          var overlayPosition = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this.$element).css("position") === 'fixed' ? 'is-overlay-fixed' : 'is-overlay-absolute';
          overlay.setAttribute('class', 'js-off-canvas-overlay ' + overlayPosition);
          this.$overlay = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(overlay);
          if (overlayPosition === 'is-overlay-fixed') {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this.$overlay).insertAfter(this.$element);
          } else {
            this.$content.append(this.$overlay);
          }
        }
        this.options.isRevealed = this.options.isRevealed || new RegExp(this.options.revealClass, 'g').test(this.$element[0].className);
        if (this.options.isRevealed === true) {
          this.options.revealOn = this.options.revealOn || this.$element[0].className.match(/(reveal-for-medium|reveal-for-large)/g)[0].split('-')[2];
          this._setMQChecker();
        }
        if (this.options.transitionTime) {
          this.$element.css('transition-duration', this.options.transitionTime);
        }
        this._removeContentClasses();
      }
    }, {
      key: '_events',
      value: function _events() {
        this.$element.off('.zf.trigger .zf.offcanvas').on({
          'open.zf.trigger': this.open.bind(this),
          'close.zf.trigger': this.close.bind(this),
          'toggle.zf.trigger': this.toggle.bind(this),
          'keydown.zf.offcanvas': this._handleKeyboard.bind(this)
        });
        if (this.options.closeOnClick === true) {
          var $target = this.options.contentOverlay ? this.$overlay : this.$content;
          $target.on({
            'click.zf.offcanvas': this.close.bind(this)
          });
        }
      }
    }, {
      key: '_setMQChecker',
      value: function _setMQChecker() {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).on('changed.zf.mediaquery', function() {
          if (__WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__["a"].atLeast(_this.options.revealOn)) {
            _this.reveal(true);
          } else {
            _this.reveal(false);
          }
        }).one('load.zf.offcanvas', function() {
          if (__WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__["a"].atLeast(_this.options.revealOn)) {
            _this.reveal(true);
          }
        });
      }
    }, {
      key: '_removeContentClasses',
      value: function _removeContentClasses(hasReveal) {
        if (typeof hasReveal !== 'boolean') {
          this.$content.removeClass(this.contentClasses.base.join(' '));
        } else if (hasReveal === false) {
          this.$content.removeClass('has-reveal-' + this.position);
        }
      }
    }, {
      key: '_addContentClasses',
      value: function _addContentClasses(hasReveal) {
        this._removeContentClasses(hasReveal);
        if (typeof hasReveal !== 'boolean') {
          this.$content.addClass('has-transition-' + this.options.transition + ' has-position-' + this.position);
        } else if (hasReveal === true) {
          this.$content.addClass('has-reveal-' + this.position);
        }
      }
    }, {
      key: 'reveal',
      value: function reveal(isRevealed) {
        if (isRevealed) {
          this.close();
          this.isRevealed = true;
          this.$element.attr('aria-hidden', 'false');
          this.$element.off('open.zf.trigger toggle.zf.trigger');
          this.$element.removeClass('is-closed');
        } else {
          this.isRevealed = false;
          this.$element.attr('aria-hidden', 'true');
          this.$element.off('open.zf.trigger toggle.zf.trigger').on({
            'open.zf.trigger': this.open.bind(this),
            'toggle.zf.trigger': this.toggle.bind(this)
          });
          this.$element.addClass('is-closed');
        }
        this._addContentClasses(isRevealed);
      }
    }, {
      key: '_stopScrolling',
      value: function _stopScrolling(event) {
        return false;
      }
    }, {
      key: '_recordScrollable',
      value: function _recordScrollable(event) {
        var elem = this;
        if (elem.scrollHeight !== elem.clientHeight) {
          if (elem.scrollTop === 0) {
            elem.scrollTop = 1;
          }
          if (elem.scrollTop === elem.scrollHeight - elem.clientHeight) {
            elem.scrollTop = elem.scrollHeight - elem.clientHeight - 1;
          }
        }
        elem.allowUp = elem.scrollTop > 0;
        elem.allowDown = elem.scrollTop < elem.scrollHeight - elem.clientHeight;
        elem.lastY = event.originalEvent.pageY;
      }
    }, {
      key: '_stopScrollPropagation',
      value: function _stopScrollPropagation(event) {
        var elem = this;
        var up = event.pageY < elem.lastY;
        var down = !up;
        elem.lastY = event.pageY;
        if (up && elem.allowUp || down && elem.allowDown) {
          event.stopPropagation();
        } else {
          event.preventDefault();
        }
      }
    }, {
      key: 'open',
      value: function open(event, trigger) {
        if (this.$element.hasClass('is-open') || this.isRevealed) {
          return;
        }
        var _this = this;
        if (trigger) {
          this.$lastTrigger = trigger;
        }
        if (this.options.forceTo === 'top') {
          window.scrollTo(0, 0);
        } else if (this.options.forceTo === 'bottom') {
          window.scrollTo(0, document.body.scrollHeight);
        }
        if (this.options.transitionTime && this.options.transition !== 'overlap') {
          this.$element.siblings('[data-off-canvas-content]').css('transition-duration', this.options.transitionTime);
        } else {
          this.$element.siblings('[data-off-canvas-content]').css('transition-duration', '');
        }
        this.$element.addClass('is-open').removeClass('is-closed');
        this.$triggers.attr('aria-expanded', 'true');
        this.$element.attr('aria-hidden', 'false').trigger('opened.zf.offcanvas');
        this.$content.addClass('is-open-' + this.position);
        if (this.options.contentScroll === false) {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()('body').addClass('is-off-canvas-open').on('touchmove', this._stopScrolling);
          this.$element.on('touchstart', this._recordScrollable);
          this.$element.on('touchmove', this._stopScrollPropagation);
        }
        if (this.options.contentOverlay === true) {
          this.$overlay.addClass('is-visible');
        }
        if (this.options.closeOnClick === true && this.options.contentOverlay === true) {
          this.$overlay.addClass('is-closable');
        }
        if (this.options.autoFocus === true) {
          this.$element.one(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__foundation_util_core__["c"])(this.$element), function() {
            if (!_this.$element.hasClass('is-open')) {
              return;
            }
            var canvasFocus = _this.$element.find('[data-autofocus]');
            if (canvasFocus.length) {
              canvasFocus.eq(0).focus();
            } else {
              _this.$element.find('a, button').eq(0).focus();
            }
          });
        }
        if (this.options.trapFocus === true) {
          this.$content.attr('tabindex', '-1');
          __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a"].trapFocus(this.$element);
        }
        this._addContentClasses();
      }
    }, {
      key: 'close',
      value: function close(cb) {
        if (!this.$element.hasClass('is-open') || this.isRevealed) {
          return;
        }
        var _this = this;
        this.$element.removeClass('is-open');
        this.$element.attr('aria-hidden', 'true').trigger('closed.zf.offcanvas');
        this.$content.removeClass('is-open-left is-open-top is-open-right is-open-bottom');
        if (this.options.contentScroll === false) {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()('body').removeClass('is-off-canvas-open').off('touchmove', this._stopScrolling);
          this.$element.off('touchstart', this._recordScrollable);
          this.$element.off('touchmove', this._stopScrollPropagation);
        }
        if (this.options.contentOverlay === true) {
          this.$overlay.removeClass('is-visible');
        }
        if (this.options.closeOnClick === true && this.options.contentOverlay === true) {
          this.$overlay.removeClass('is-closable');
        }
        this.$triggers.attr('aria-expanded', 'false');
        if (this.options.trapFocus === true) {
          this.$content.removeAttr('tabindex');
          __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a"].releaseFocus(this.$element);
        }
        this.$element.one(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__foundation_util_core__["c"])(this.$element), function(e) {
          _this.$element.addClass('is-closed');
          _this._removeContentClasses();
        });
      }
    }, {
      key: 'toggle',
      value: function toggle(event, trigger) {
        if (this.$element.hasClass('is-open')) {
          this.close(event, trigger);
        } else {
          this.open(event, trigger);
        }
      }
    }, {
      key: '_handleKeyboard',
      value: function _handleKeyboard(e) {
        var _this4 = this;
        __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a"].handleKey(e, 'OffCanvas', {
          close: function() {
            _this4.close();
            _this4.$lastTrigger.focus();
            return true;
          },
          handled: function() {
            e.stopPropagation();
            e.preventDefault();
          }
        });
      }
    }, {
      key: '_destroy',
      value: function _destroy() {
        this.close();
        this.$element.off('.zf.trigger .zf.offcanvas');
        this.$overlay.off('.zf.offcanvas');
      }
    }]);
    return OffCanvas;
  }(__WEBPACK_IMPORTED_MODULE_4__foundation_plugin__["a"]);
  OffCanvas.defaults = {
    closeOnClick: true,
    contentOverlay: true,
    contentId: null,
    nested: null,
    contentScroll: true,
    transitionTime: null,
    transition: 'push',
    forceTo: null,
    isRevealed: false,
    revealOn: null,
    autoFocus: true,
    revealClass: 'reveal-for-',
    trapFocus: false
  };
}), (function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.d(__webpack_exports__, "a", function() {
    return Orbit;
  });
  var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
  var __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__ = __webpack_require__(4);
  var __WEBPACK_IMPORTED_MODULE_2__foundation_util_motion__ = __webpack_require__(6);
  var __WEBPACK_IMPORTED_MODULE_3__foundation_util_timer__ = __webpack_require__(34);
  var __WEBPACK_IMPORTED_MODULE_4__foundation_util_imageLoader__ = __webpack_require__(8);
  var __WEBPACK_IMPORTED_MODULE_5__foundation_util_core__ = __webpack_require__(1);
  var __WEBPACK_IMPORTED_MODULE_6__foundation_plugin__ = __webpack_require__(2);
  var __WEBPACK_IMPORTED_MODULE_7__foundation_util_touch__ = __webpack_require__(16);
  var _createClass = function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var Orbit = function(_Plugin) {
    _inherits(Orbit, _Plugin);

    function Orbit() {
      _classCallCheck(this, Orbit);
      return _possibleConstructorReturn(this, (Orbit.__proto__ || Object.getPrototypeOf(Orbit)).apply(this, arguments));
    }
    _createClass(Orbit, [{
      key: '_setup',
      value: function _setup(element, options) {
        this.$element = element;
        this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, Orbit.defaults, this.$element.data(), options);
        this.className = 'Orbit';
        __WEBPACK_IMPORTED_MODULE_7__foundation_util_touch__["a"].init(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a);
        this._init();
        __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a"].register('Orbit', {
          'ltr': {
            'ARROW_RIGHT': 'next',
            'ARROW_LEFT': 'previous'
          },
          'rtl': {
            'ARROW_LEFT': 'next',
            'ARROW_RIGHT': 'previous'
          }
        });
      }
    }, {
      key: '_init',
      value: function _init() {
        this._reset();
        this.$wrapper = this.$element.find('.' + this.options.containerClass);
        this.$slides = this.$element.find('.' + this.options.slideClass);
        var $images = this.$element.find('img'),
          initActive = this.$slides.filter('.is-active'),
          id = this.$element[0].id || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__foundation_util_core__["a"])(6, 'orbit');
        this.$element.attr({
          'data-resize': id,
          'id': id
        });
        if (!initActive.length) {
          this.$slides.eq(0).addClass('is-active');
        }
        if (!this.options.useMUI) {
          this.$slides.addClass('no-motionui');
        }
        if ($images.length) {
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__foundation_util_imageLoader__["a"])($images, this._prepareForOrbit.bind(this));
        } else {
          this._prepareForOrbit();
        }
        if (this.options.bullets) {
          this._loadBullets();
        }
        this._events();
        if (this.options.autoPlay && this.$slides.length > 1) {
          this.geoSync();
        }
        if (this.options.accessible) {
          this.$wrapper.attr('tabindex', 0);
        }
      }
    }, {
      key: '_loadBullets',
      value: function _loadBullets() {
        this.$bullets = this.$element.find('.' + this.options.boxOfBullets).find('button');
      }
    }, {
      key: 'geoSync',
      value: function geoSync() {
        var _this = this;
        this.timer = new __WEBPACK_IMPORTED_MODULE_3__foundation_util_timer__["a"](this.$element, {
          duration: this.options.timerDelay,
          infinite: false
        }, function() {
          _this.changeSlide(true);
        });
        this.timer.start();
      }
    }, {
      key: '_prepareForOrbit',
      value: function _prepareForOrbit() {
        var _this = this;
        this._setWrapperHeight();
      }
    }, {
      key: '_setWrapperHeight',
      value: function _setWrapperHeight(cb) {
        var max = 0,
          temp, counter = 0,
          _this = this;
        this.$slides.each(function() {
          temp = this.getBoundingClientRect().height;
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).attr('data-slide', counter);
          if (!/mui/g.test(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this)[0].className) && _this.$slides.filter('.is-active')[0] !== _this.$slides.eq(counter)[0]) {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).css({
              'position': 'relative',
              'display': 'none'
            });
          }
          max = temp > max ? temp : max;
          counter++;
        });
        if (counter === this.$slides.length) {
          this.$wrapper.css({
            'height': max
          });
          if (cb) {
            cb(max);
          }
        }
      }
    }, {
      key: '_setSlideHeight',
      value: function _setSlideHeight(height) {
        this.$slides.each(function() {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).css('max-height', height);
        });
      }
    }, {
      key: '_events',
      value: function _events() {
        var _this = this;
        this.$element.off('.resizeme.zf.trigger').on({
          'resizeme.zf.trigger': this._prepareForOrbit.bind(this)
        });
        if (this.$slides.length > 1) {
          if (this.options.swipe) {
            this.$slides.off('swipeleft.zf.orbit swiperight.zf.orbit').on('swipeleft.zf.orbit', function(e) {
              e.preventDefault();
              _this.changeSlide(true);
            }).on('swiperight.zf.orbit', function(e) {
              e.preventDefault();
              _this.changeSlide(false);
            });
          }
          if (this.options.autoPlay) {
            this.$slides.on('click.zf.orbit', function() {
              _this.$element.data('clickedOn', _this.$element.data('clickedOn') ? false : true);
              _this.timer[_this.$element.data('clickedOn') ? 'pause' : 'start']();
            });
            if (this.options.pauseOnHover) {
              this.$element.on('mouseenter.zf.orbit', function() {
                _this.timer.pause();
              }).on('mouseleave.zf.orbit', function() {
                if (!_this.$element.data('clickedOn')) {
                  _this.timer.start();
                }
              });
            }
          }
          if (this.options.navButtons) {
            var $controls = this.$element.find('.' + this.options.nextClass + ', .' + this.options.prevClass);
            $controls.attr('tabindex', 0).on('click.zf.orbit touchend.zf.orbit', function(e) {
              e.preventDefault();
              _this.changeSlide(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).hasClass(_this.options.nextClass));
            });
          }
          if (this.options.bullets) {
            this.$bullets.on('click.zf.orbit touchend.zf.orbit', function() {
              if (/is-active/g.test(this.className)) {
                return false;
              }
              var idx = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data('slide'),
                ltr = idx > _this.$slides.filter('.is-active').data('slide'),
                $slide = _this.$slides.eq(idx);
              _this.changeSlide(ltr, $slide, idx);
            });
          }
          if (this.options.accessible) {
            this.$wrapper.add(this.$bullets).on('keydown.zf.orbit', function(e) {
              __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a"].handleKey(e, 'Orbit', {
                next: function() {
                  _this.changeSlide(true);
                },
                previous: function() {
                  _this.changeSlide(false);
                },
                handled: function() {
                  if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target).is(_this.$bullets)) {
                    _this.$bullets.filter('.is-active').focus();
                  }
                }
              });
            });
          }
        }
      }
    }, {
      key: '_reset',
      value: function _reset() {
        if (typeof this.$slides == 'undefined') {
          return;
        }
        if (this.$slides.length > 1) {
          this.$element.off('.zf.orbit').find('*').off('.zf.orbit');
          if (this.options.autoPlay) {
            this.timer.restart();
          }
          this.$slides.each(function(el) {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(el).removeClass('is-active is-active is-in').removeAttr('aria-live').hide();
          });
          this.$slides.first().addClass('is-active').show();
          this.$element.trigger('slidechange.zf.orbit', [this.$slides.first()]);
          if (this.options.bullets) {
            this._updateBullets(0);
          }
        }
      }
    }, {
      key: 'changeSlide',
      value: function changeSlide(isLTR, chosenSlide, idx) {
        if (!this.$slides) {
          return;
        }
        var $curSlide = this.$slides.filter('.is-active').eq(0);
        if (/mui/g.test($curSlide[0].className)) {
          return false;
        }
        var $firstSlide = this.$slides.first(),
          $lastSlide = this.$slides.last(),
          dirIn = isLTR ? 'Right' : 'Left',
          dirOut = isLTR ? 'Left' : 'Right',
          _this = this,
          $newSlide;
        if (!chosenSlide) {
          $newSlide = isLTR ? this.options.infiniteWrap ? $curSlide.next('.' + this.options.slideClass).length ? $curSlide.next('.' + this.options.slideClass) : $firstSlide : $curSlide.next('.' + this.options.slideClass) : this.options.infiniteWrap ? $curSlide.prev('.' + this.options.slideClass).length ? $curSlide.prev('.' + this.options.slideClass) : $lastSlide : $curSlide.prev('.' + this.options.slideClass);
        } else {
          $newSlide = chosenSlide;
        }
        if ($newSlide.length) {
          this.$element.trigger('beforeslidechange.zf.orbit', [$curSlide, $newSlide]);
          if (this.options.bullets) {
            idx = idx || this.$slides.index($newSlide);
            this._updateBullets(idx);
          }
          if (this.options.useMUI && !this.$element.is(':hidden')) {
            __WEBPACK_IMPORTED_MODULE_2__foundation_util_motion__["a"].animateIn($newSlide.addClass('is-active').css({
              'position': 'absolute',
              'top': 0
            }), this.options['animInFrom' + dirIn], function() {
              $newSlide.css({
                'position': 'relative',
                'display': 'block'
              }).attr('aria-live', 'polite');
            });
            __WEBPACK_IMPORTED_MODULE_2__foundation_util_motion__["a"].animateOut($curSlide.removeClass('is-active'), this.options['animOutTo' + dirOut], function() {
              $curSlide.removeAttr('aria-live');
              if (_this.options.autoPlay && !_this.timer.isPaused) {
                _this.timer.restart();
              }
            });
          } else {
            $curSlide.removeClass('is-active is-in').removeAttr('aria-live').hide();
            $newSlide.addClass('is-active is-in').attr('aria-live', 'polite').show();
            if (this.options.autoPlay && !this.timer.isPaused) {
              this.timer.restart();
            }
          }
          this.$element.trigger('slidechange.zf.orbit', [$newSlide]);
        }
      }
    }, {
      key: '_updateBullets',
      value: function _updateBullets(idx) {
        var $oldBullet = this.$element.find('.' + this.options.boxOfBullets).find('.is-active').removeClass('is-active').blur(),
          span = $oldBullet.find('span:last').detach(),
          $newBullet = this.$bullets.eq(idx).addClass('is-active').append(span);
      }
    }, {
      key: '_destroy',
      value: function _destroy() {
        this.$element.off('.zf.orbit').find('*').off('.zf.orbit').end().hide();
      }
    }]);
    return Orbit;
  }(__WEBPACK_IMPORTED_MODULE_6__foundation_plugin__["a"]);
  Orbit.defaults = {
    bullets: true,
    navButtons: true,
    animInFromRight: 'slide-in-right',
    animOutToRight: 'slide-out-right',
    animInFromLeft: 'slide-in-left',
    animOutToLeft: 'slide-out-left',
    autoPlay: true,
    timerDelay: 5000,
    infiniteWrap: true,
    swipe: true,
    pauseOnHover: true,
    accessible: true,
    containerClass: 'orbit-container',
    slideClass: 'orbit-slide',
    boxOfBullets: 'orbit-bullets',
    nextClass: 'orbit-next',
    prevClass: 'orbit-previous',
    useMUI: true
  };
}), (function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.d(__webpack_exports__, "a", function() {
    return ResponsiveAccordionTabs;
  });
  var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
  var __WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__ = __webpack_require__(3);
  var __WEBPACK_IMPORTED_MODULE_2__foundation_util_core__ = __webpack_require__(1);
  var __WEBPACK_IMPORTED_MODULE_3__foundation_plugin__ = __webpack_require__(2);
  var __WEBPACK_IMPORTED_MODULE_4__foundation_accordion__ = __webpack_require__(10);
  var __WEBPACK_IMPORTED_MODULE_5__foundation_tabs__ = __webpack_require__(14);
  var _createClass = function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var MenuPlugins = {
    tabs: {
      cssClass: 'tabs',
      plugin: __WEBPACK_IMPORTED_MODULE_5__foundation_tabs__["a"]
    },
    accordion: {
      cssClass: 'accordion',
      plugin: __WEBPACK_IMPORTED_MODULE_4__foundation_accordion__["a"]
    }
  };
  var ResponsiveAccordionTabs = function(_Plugin) {
    _inherits(ResponsiveAccordionTabs, _Plugin);

    function ResponsiveAccordionTabs() {
      _classCallCheck(this, ResponsiveAccordionTabs);
      return _possibleConstructorReturn(this, (ResponsiveAccordionTabs.__proto__ || Object.getPrototypeOf(ResponsiveAccordionTabs)).apply(this, arguments));
    }
    _createClass(ResponsiveAccordionTabs, [{
      key: '_setup',
      value: function _setup(element, options) {
        this.$element = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element);
        this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, this.$element.data(), options);
        this.rules = this.$element.data('responsive-accordion-tabs');
        this.currentMq = null;
        this.currentPlugin = null;
        this.className = 'ResponsiveAccordionTabs';
        if (!this.$element.attr('id')) {
          this.$element.attr('id', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__foundation_util_core__["a"])(6, 'responsiveaccordiontabs'));
        };
        this._init();
        this._events();
      }
    }, {
      key: '_init',
      value: function _init() {
        __WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__["a"]._init();
        if (typeof this.rules === 'string') {
          var rulesTree = {};
          var rules = this.rules.split(' ');
          for (var i = 0; i < rules.length; i++) {
            var rule = rules[i].split('-');
            var ruleSize = rule.length > 1 ? rule[0] : 'small';
            var rulePlugin = rule.length > 1 ? rule[1] : rule[0];
            if (MenuPlugins[rulePlugin] !== null) {
              rulesTree[ruleSize] = MenuPlugins[rulePlugin];
            }
          }
          this.rules = rulesTree;
        }
        this._getAllOptions();
        if (!__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.isEmptyObject(this.rules)) {
          this._checkMediaQueries();
        }
      }
    }, {
      key: '_getAllOptions',
      value: function _getAllOptions() {
        var _this = this;
        _this.allOptions = {};
        for (var key in MenuPlugins) {
          if (MenuPlugins.hasOwnProperty(key)) {
            var obj = MenuPlugins[key];
            try {
              var dummyPlugin = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('<ul></ul>');
              var tmpPlugin = new obj.plugin(dummyPlugin, _this.options);
              for (var keyKey in tmpPlugin.options) {
                if (tmpPlugin.options.hasOwnProperty(keyKey) && keyKey !== 'zfPlugin') {
                  var objObj = tmpPlugin.options[keyKey];
                  _this.allOptions[keyKey] = objObj;
                }
              }
              tmpPlugin.destroy();
            } catch (e) {}
          }
        }
      }
    }, {
      key: '_events',
      value: function _events() {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).on('changed.zf.mediaquery', function() {
          _this._checkMediaQueries();
        });
      }
    }, {
      key: '_checkMediaQueries',
      value: function _checkMediaQueries() {
        var matchedMq, _this = this;
        __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.each(this.rules, function(key) {
          if (__WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__["a"].atLeast(key)) {
            matchedMq = key;
          }
        });
        if (!matchedMq) return;
        if (this.currentPlugin instanceof this.rules[matchedMq].plugin) return;
        __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.each(MenuPlugins, function(key, value) {
          _this.$element.removeClass(value.cssClass);
        });
        this.$element.addClass(this.rules[matchedMq].cssClass);
        if (this.currentPlugin) {
          if (!this.currentPlugin.$element.data('zfPlugin') && this.storezfData) this.currentPlugin.$element.data('zfPlugin', this.storezfData);
          this.currentPlugin.destroy();
        }
        this._handleMarkup(this.rules[matchedMq].cssClass);
        this.currentPlugin = new this.rules[matchedMq].plugin(this.$element, {});
        this.storezfData = this.currentPlugin.$element.data('zfPlugin');
      }
    }, {
      key: '_handleMarkup',
      value: function _handleMarkup(toSet) {
        var _this = this,
          fromString = 'accordion';
        var $panels = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-tabs-content=' + this.$element.attr('id') + ']');
        if ($panels.length) fromString = 'tabs';
        if (fromString === toSet) {
          return;
        };
        var tabsTitle = _this.allOptions.linkClass ? _this.allOptions.linkClass : 'tabs-title';
        var tabsPanel = _this.allOptions.panelClass ? _this.allOptions.panelClass : 'tabs-panel';
        this.$element.removeAttr('role');
        var $liHeads = this.$element.children('.' + tabsTitle + ',[data-accordion-item]').removeClass(tabsTitle).removeClass('accordion-item').removeAttr('data-accordion-item');
        var $liHeadsA = $liHeads.children('a').removeClass('accordion-title');
        if (fromString === 'tabs') {
          $panels = $panels.children('.' + tabsPanel).removeClass(tabsPanel).removeAttr('role').removeAttr('aria-hidden').removeAttr('aria-labelledby');
          $panels.children('a').removeAttr('role').removeAttr('aria-controls').removeAttr('aria-selected');
        } else {
          $panels = $liHeads.children('[data-tab-content]').removeClass('accordion-content');
        };
        $panels.css({
          display: '',
          visibility: ''
        });
        $liHeads.css({
          display: '',
          visibility: ''
        });
        if (toSet === 'accordion') {
          $panels.each(function(key, value) {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(value).appendTo($liHeads.get(key)).addClass('accordion-content').attr('data-tab-content', '').removeClass('is-active').css({
              height: ''
            });
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-tabs-content=' + _this.$element.attr('id') + ']').after('<div id="tabs-placeholder-' + _this.$element.attr('id') + '"></div>').detach();
            $liHeads.addClass('accordion-item').attr('data-accordion-item', '');
            $liHeadsA.addClass('accordion-title');
          });
        } else if (toSet === 'tabs') {
          var $tabsContent = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-tabs-content=' + _this.$element.attr('id') + ']');
          var $placeholder = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#tabs-placeholder-' + _this.$element.attr('id'));
          if ($placeholder.length) {
            $tabsContent = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('<div class="tabs-content"></div>').insertAfter($placeholder).attr('data-tabs-content', _this.$element.attr('id'));
            $placeholder.remove();
          } else {
            $tabsContent = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('<div class="tabs-content"></div>').insertAfter(_this.$element).attr('data-tabs-content', _this.$element.attr('id'));
          };
          $panels.each(function(key, value) {
            var tempValue = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(value).appendTo($tabsContent).addClass(tabsPanel);
            var hash = $liHeadsA.get(key).hash.slice(1);
            var id = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(value).attr('id') || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__foundation_util_core__["a"])(6, 'accordion');
            if (hash !== id) {
              if (hash !== '') {
                __WEBPACK_IMPORTED_MODULE_0_jquery___default()(value).attr('id', hash);
              } else {
                hash = id;
                __WEBPACK_IMPORTED_MODULE_0_jquery___default()(value).attr('id', hash);
                __WEBPACK_IMPORTED_MODULE_0_jquery___default()($liHeadsA.get(key)).attr('href', __WEBPACK_IMPORTED_MODULE_0_jquery___default()($liHeadsA.get(key)).attr('href').replace('#', '') + '#' + hash);
              };
            };
            var isActive = __WEBPACK_IMPORTED_MODULE_0_jquery___default()($liHeads.get(key)).hasClass('is-active');
            if (isActive) {
              tempValue.addClass('is-active');
            };
          });
          $liHeads.addClass(tabsTitle);
        };
      }
    }, {
      key: '_destroy',
      value: function _destroy() {
        if (this.currentPlugin) this.currentPlugin.destroy();
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off('.zf.ResponsiveAccordionTabs');
      }
    }]);
    return ResponsiveAccordionTabs;
  }(__WEBPACK_IMPORTED_MODULE_3__foundation_plugin__["a"]);
  ResponsiveAccordionTabs.defaults = {};
}), (function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.d(__webpack_exports__, "a", function() {
    return ResponsiveMenu;
  });
  var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
  var __WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__ = __webpack_require__(3);
  var __WEBPACK_IMPORTED_MODULE_2__foundation_util_core__ = __webpack_require__(1);
  var __WEBPACK_IMPORTED_MODULE_3__foundation_plugin__ = __webpack_require__(2);
  var __WEBPACK_IMPORTED_MODULE_4__foundation_dropdownMenu__ = __webpack_require__(13);
  var __WEBPACK_IMPORTED_MODULE_5__foundation_drilldown__ = __webpack_require__(12);
  var __WEBPACK_IMPORTED_MODULE_6__foundation_accordionMenu__ = __webpack_require__(11);
  var _createClass = function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var MenuPlugins = {
    dropdown: {
      cssClass: 'dropdown',
      plugin: __WEBPACK_IMPORTED_MODULE_4__foundation_dropdownMenu__["a"]
    },
    drilldown: {
      cssClass: 'drilldown',
      plugin: __WEBPACK_IMPORTED_MODULE_5__foundation_drilldown__["a"]
    },
    accordion: {
      cssClass: 'accordion-menu',
      plugin: __WEBPACK_IMPORTED_MODULE_6__foundation_accordionMenu__["a"]
    }
  };
  var ResponsiveMenu = function(_Plugin) {
    _inherits(ResponsiveMenu, _Plugin);

    function ResponsiveMenu() {
      _classCallCheck(this, ResponsiveMenu);
      return _possibleConstructorReturn(this, (ResponsiveMenu.__proto__ || Object.getPrototypeOf(ResponsiveMenu)).apply(this, arguments));
    }
    _createClass(ResponsiveMenu, [{
      key: '_setup',
      value: function _setup(element, options) {
        this.$element = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element);
        this.rules = this.$element.data('responsive-menu');
        this.currentMq = null;
        this.currentPlugin = null;
        this.className = 'ResponsiveMenu';
        this._init();
        this._events();
      }
    }, {
      key: '_init',
      value: function _init() {
        __WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__["a"]._init();
        if (typeof this.rules === 'string') {
          var rulesTree = {};
          var rules = this.rules.split(' ');
          for (var i = 0; i < rules.length; i++) {
            var rule = rules[i].split('-');
            var ruleSize = rule.length > 1 ? rule[0] : 'small';
            var rulePlugin = rule.length > 1 ? rule[1] : rule[0];
            if (MenuPlugins[rulePlugin] !== null) {
              rulesTree[ruleSize] = MenuPlugins[rulePlugin];
            }
          }
          this.rules = rulesTree;
        }
        if (!__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.isEmptyObject(this.rules)) {
          this._checkMediaQueries();
        }
        this.$element.attr('data-mutate', this.$element.attr('data-mutate') || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__foundation_util_core__["a"])(6, 'responsive-menu'));
      }
    }, {
      key: '_events',
      value: function _events() {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).on('changed.zf.mediaquery', function() {
          _this._checkMediaQueries();
        });
      }
    }, {
      key: '_checkMediaQueries',
      value: function _checkMediaQueries() {
        var matchedMq, _this = this;
        __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.each(this.rules, function(key) {
          if (__WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__["a"].atLeast(key)) {
            matchedMq = key;
          }
        });
        if (!matchedMq) return;
        if (this.currentPlugin instanceof this.rules[matchedMq].plugin) return;
        __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.each(MenuPlugins, function(key, value) {
          _this.$element.removeClass(value.cssClass);
        });
        this.$element.addClass(this.rules[matchedMq].cssClass);
        if (this.currentPlugin) this.currentPlugin.destroy();
        this.currentPlugin = new this.rules[matchedMq].plugin(this.$element, {});
      }
    }, {
      key: '_destroy',
      value: function _destroy() {
        this.currentPlugin.destroy();
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off('.zf.ResponsiveMenu');
      }
    }]);
    return ResponsiveMenu;
  }(__WEBPACK_IMPORTED_MODULE_3__foundation_plugin__["a"]);
  ResponsiveMenu.defaults = {};
}), (function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.d(__webpack_exports__, "a", function() {
    return ResponsiveToggle;
  });
  var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
  var __WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__ = __webpack_require__(3);
  var __WEBPACK_IMPORTED_MODULE_2__foundation_util_motion__ = __webpack_require__(6);
  var __WEBPACK_IMPORTED_MODULE_3__foundation_plugin__ = __webpack_require__(2);
  var _createClass = function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var ResponsiveToggle = function(_Plugin) {
    _inherits(ResponsiveToggle, _Plugin);

    function ResponsiveToggle() {
      _classCallCheck(this, ResponsiveToggle);
      return _possibleConstructorReturn(this, (ResponsiveToggle.__proto__ || Object.getPrototypeOf(ResponsiveToggle)).apply(this, arguments));
    }
    _createClass(ResponsiveToggle, [{
      key: '_setup',
      value: function _setup(element, options) {
        this.$element = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element);
        this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, ResponsiveToggle.defaults, this.$element.data(), options);
        this.className = 'ResponsiveToggle';
        this._init();
        this._events();
      }
    }, {
      key: '_init',
      value: function _init() {
        __WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__["a"]._init();
        var targetID = this.$element.data('responsive-toggle');
        if (!targetID) {
          console.error('Your tab bar needs an ID of a Menu as the value of data-tab-bar.');
        }
        this.$targetMenu = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + targetID);
        this.$toggler = this.$element.find('[data-toggle]').filter(function() {
          var target = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data('toggle');
          return target === targetID || target === "";
        });
        this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, this.options, this.$targetMenu.data());
        if (this.options.animate) {
          var input = this.options.animate.split(' ');
          this.animationIn = input[0];
          this.animationOut = input[1] || null;
        }
        this._update();
      }
    }, {
      key: '_events',
      value: function _events() {
        var _this = this;
        this._updateMqHandler = this._update.bind(this);
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).on('changed.zf.mediaquery', this._updateMqHandler);
        this.$toggler.on('click.zf.responsiveToggle', this.toggleMenu.bind(this));
      }
    }, {
      key: '_update',
      value: function _update() {
        if (!__WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__["a"].atLeast(this.options.hideFor)) {
          this.$element.show();
          this.$targetMenu.hide();
        } else {
          this.$element.hide();
          this.$targetMenu.show();
        }
      }
    }, {
      key: 'toggleMenu',
      value: function toggleMenu() {
        var _this3 = this;
        if (!__WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__["a"].atLeast(this.options.hideFor)) {
          if (this.options.animate) {
            if (this.$targetMenu.is(':hidden')) {
              __WEBPACK_IMPORTED_MODULE_2__foundation_util_motion__["a"].animateIn(this.$targetMenu, this.animationIn, function() {
                _this3.$element.trigger('toggled.zf.responsiveToggle');
                _this3.$targetMenu.find('[data-mutate]').triggerHandler('mutateme.zf.trigger');
              });
            } else {
              __WEBPACK_IMPORTED_MODULE_2__foundation_util_motion__["a"].animateOut(this.$targetMenu, this.animationOut, function() {
                _this3.$element.trigger('toggled.zf.responsiveToggle');
              });
            }
          } else {
            this.$targetMenu.toggle(0);
            this.$targetMenu.find('[data-mutate]').trigger('mutateme.zf.trigger');
            this.$element.trigger('toggled.zf.responsiveToggle');
          }
        }
      }
    }, {
      key: '_destroy',
      value: function _destroy() {
        this.$element.off('.zf.responsiveToggle');
        this.$toggler.off('.zf.responsiveToggle');
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off('changed.zf.mediaquery', this._updateMqHandler);
      }
    }]);
    return ResponsiveToggle;
  }(__WEBPACK_IMPORTED_MODULE_3__foundation_plugin__["a"]);
  ResponsiveToggle.defaults = {
    hideFor: 'medium',
    animate: false
  };
}), (function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.d(__webpack_exports__, "a", function() {
    return Reveal;
  });
  var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
  var __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__ = __webpack_require__(4);
  var __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__ = __webpack_require__(3);
  var __WEBPACK_IMPORTED_MODULE_3__foundation_util_motion__ = __webpack_require__(6);
  var __WEBPACK_IMPORTED_MODULE_4__foundation_plugin__ = __webpack_require__(2);
  var __WEBPACK_IMPORTED_MODULE_5__foundation_util_triggers__ = __webpack_require__(5);
  var _createClass = function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var Reveal = function(_Plugin) {
    _inherits(Reveal, _Plugin);

    function Reveal() {
      _classCallCheck(this, Reveal);
      return _possibleConstructorReturn(this, (Reveal.__proto__ || Object.getPrototypeOf(Reveal)).apply(this, arguments));
    }
    _createClass(Reveal, [{
      key: '_setup',
      value: function _setup(element, options) {
        this.$element = element;
        this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, Reveal.defaults, this.$element.data(), options);
        this.className = 'Reveal';
        this._init();
        __WEBPACK_IMPORTED_MODULE_5__foundation_util_triggers__["a"].init(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a);
        __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a"].register('Reveal', {
          'ESCAPE': 'close'
        });
      }
    }, {
      key: '_init',
      value: function _init() {
        __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__["a"]._init();
        this.id = this.$element.attr('id');
        this.isActive = false;
        this.cached = {
          mq: __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__["a"].current
        };
        this.isMobile = mobileSniff();
        this.$anchor = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-open="' + this.id + '"]').length ? __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-open="' + this.id + '"]') : __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-toggle="' + this.id + '"]');
        this.$anchor.attr({
          'aria-controls': this.id,
          'aria-haspopup': true,
          'tabindex': 0
        });
        if (this.options.fullScreen || this.$element.hasClass('full')) {
          this.options.fullScreen = true;
          this.options.overlay = false;
        }
        if (this.options.overlay && !this.$overlay) {
          this.$overlay = this._makeOverlay(this.id);
        }
        this.$element.attr({
          'role': 'dialog',
          'aria-hidden': true,
          'data-yeti-box': this.id,
          'data-resize': this.id
        });
        if (this.$overlay) {
          this.$element.detach().appendTo(this.$overlay);
        } else {
          this.$element.detach().appendTo(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this.options.appendTo));
          this.$element.addClass('without-overlay');
        }
        this._events();
        if (this.options.deepLink && window.location.hash === '#' + this.id) {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).one('load.zf.reveal', this.open.bind(this));
        }
      }
    }, {
      key: '_makeOverlay',
      value: function _makeOverlay() {
        var additionalOverlayClasses = '';
        if (this.options.additionalOverlayClasses) {
          additionalOverlayClasses = ' ' + this.options.additionalOverlayClasses;
        }
        return __WEBPACK_IMPORTED_MODULE_0_jquery___default()('<div></div>').addClass('reveal-overlay' + additionalOverlayClasses).appendTo(this.options.appendTo);
      }
    }, {
      key: '_updatePosition',
      value: function _updatePosition() {
        var width = this.$element.outerWidth();
        var outerWidth = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).width();
        var height = this.$element.outerHeight();
        var outerHeight = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).height();
        var left, top;
        if (this.options.hOffset === 'auto') {
          left = parseInt((outerWidth - width) / 2, 10);
        } else {
          left = parseInt(this.options.hOffset, 10);
        }
        if (this.options.vOffset === 'auto') {
          if (height > outerHeight) {
            top = parseInt(Math.min(100, outerHeight / 10), 10);
          } else {
            top = parseInt((outerHeight - height) / 4, 10);
          }
        } else {
          top = parseInt(this.options.vOffset, 10);
        }
        this.$element.css({
          top: top + 'px'
        });
        if (!this.$overlay || this.options.hOffset !== 'auto') {
          this.$element.css({
            left: left + 'px'
          });
          this.$element.css({
            margin: '0px'
          });
        }
      }
    }, {
      key: '_events',
      value: function _events() {
        var _this3 = this;
        var _this = this;
        this.$element.on({
          'open.zf.trigger': this.open.bind(this),
          'close.zf.trigger': function(event, $element) {
            if (event.target === _this.$element[0] || __WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.target).parents('[data-closable]')[0] === $element) {
              return _this3.close.apply(_this3);
            }
          },
          'toggle.zf.trigger': this.toggle.bind(this),
          'resizeme.zf.trigger': function() {
            _this._updatePosition();
          }
        });
        if (this.options.closeOnClick && this.options.overlay) {
          this.$overlay.off('.zf.reveal').on('click.zf.reveal', function(e) {
            if (e.target === _this.$element[0] || __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.contains(_this.$element[0], e.target) || !__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.contains(document, e.target)) {
              return;
            }
            _this.close();
          });
        }
        if (this.options.deepLink) {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).on('popstate.zf.reveal:' + this.id, this._handleState.bind(this));
        }
      }
    }, {
      key: '_handleState',
      value: function _handleState(e) {
        if (window.location.hash === '#' + this.id && !this.isActive) {
          this.open();
        } else {
          this.close();
        }
      }
    }, {
      key: 'open',
      value: function open() {
        var _this4 = this;
        if (this.options.deepLink) {
          var hash = '#' + this.id;
          if (window.history.pushState) {
            if (this.options.updateHistory) {
              window.history.pushState({}, '', hash);
            } else {
              window.history.replaceState({}, '', hash);
            }
          } else {
            window.location.hash = hash;
          }
        }
        this.isActive = true;
        this.$element.css({
          'visibility': 'hidden'
        }).show().scrollTop(0);
        if (this.options.overlay) {
          this.$overlay.css({
            'visibility': 'hidden'
          }).show();
        }
        this._updatePosition();
        this.$element.hide().css({
          'visibility': ''
        });
        if (this.$overlay) {
          this.$overlay.css({
            'visibility': ''
          }).hide();
          if (this.$element.hasClass('fast')) {
            this.$overlay.addClass('fast');
          } else if (this.$element.hasClass('slow')) {
            this.$overlay.addClass('slow');
          }
        }
        if (!this.options.multipleOpened) {
          this.$element.trigger('closeme.zf.reveal', this.id);
        }
        var _this = this;

        function addRevealOpenClasses() {
          if (_this.isMobile) {
            if (!_this.originalScrollPos) {
              _this.originalScrollPos = window.pageYOffset;
            }
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()('html, body').addClass('is-reveal-open');
          } else {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()('body').addClass('is-reveal-open');
          }
        }
        if (this.options.animationIn) {
          (function() {
            var afterAnimation = function() {
              _this.$element.attr({
                'aria-hidden': false,
                'tabindex': -1
              }).focus();
              addRevealOpenClasses();
              __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a"].trapFocus(_this.$element);
            };
            if (_this4.options.overlay) {
              __WEBPACK_IMPORTED_MODULE_3__foundation_util_motion__["a"].animateIn(_this4.$overlay, 'fade-in');
            }
            __WEBPACK_IMPORTED_MODULE_3__foundation_util_motion__["a"].animateIn(_this4.$element, _this4.options.animationIn, function() {
              if (_this4.$element) {
                _this4.focusableElements = __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a"].findFocusable(_this4.$element);
                afterAnimation();
              }
            });
          })();
        } else {
          if (this.options.overlay) {
            this.$overlay.show(0);
          }
          this.$element.show(this.options.showDelay);
        }
        this.$element.attr({
          'aria-hidden': false,
          'tabindex': -1
        }).focus();
        __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a"].trapFocus(this.$element);
        addRevealOpenClasses();
        this._extraHandlers();
        this.$element.trigger('open.zf.reveal');
      }
    }, {
      key: '_extraHandlers',
      value: function _extraHandlers() {
        var _this = this;
        if (!this.$element) {
          return;
        }
        this.focusableElements = __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a"].findFocusable(this.$element);
        if (!this.options.overlay && this.options.closeOnClick && !this.options.fullScreen) {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()('body').on('click.zf.reveal', function(e) {
            if (e.target === _this.$element[0] || __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.contains(_this.$element[0], e.target) || !__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.contains(document, e.target)) {
              return;
            }
            _this.close();
          });
        }
        if (this.options.closeOnEsc) {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).on('keydown.zf.reveal', function(e) {
            __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a"].handleKey(e, 'Reveal', {
              close: function() {
                if (_this.options.closeOnEsc) {
                  _this.close();
                }
              }
            });
          });
        }
      }
    }, {
      key: 'close',
      value: function close() {
        if (!this.isActive || !this.$element.is(':visible')) {
          return false;
        }
        var _this = this;
        if (this.options.animationOut) {
          if (this.options.overlay) {
            __WEBPACK_IMPORTED_MODULE_3__foundation_util_motion__["a"].animateOut(this.$overlay, 'fade-out');
          }
          __WEBPACK_IMPORTED_MODULE_3__foundation_util_motion__["a"].animateOut(this.$element, this.options.animationOut, finishUp);
        } else {
          this.$element.hide(this.options.hideDelay);
          if (this.options.overlay) {
            this.$overlay.hide(0, finishUp);
          } else {
            finishUp();
          }
        }
        if (this.options.closeOnEsc) {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off('keydown.zf.reveal');
        }
        if (!this.options.overlay && this.options.closeOnClick) {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()('body').off('click.zf.reveal');
        }
        this.$element.off('keydown.zf.reveal');

        function finishUp() {
          if (_this.isMobile) {
            if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.reveal:visible').length === 0) {
              __WEBPACK_IMPORTED_MODULE_0_jquery___default()('html, body').removeClass('is-reveal-open');
            }
            if (_this.originalScrollPos) {
              __WEBPACK_IMPORTED_MODULE_0_jquery___default()('body').scrollTop(_this.originalScrollPos);
              _this.originalScrollPos = null;
            }
          } else {
            if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.reveal:visible').length === 0) {
              __WEBPACK_IMPORTED_MODULE_0_jquery___default()('body').removeClass('is-reveal-open');
            }
          }
          __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a"].releaseFocus(_this.$element);
          _this.$element.attr('aria-hidden', true);
          _this.$element.trigger('closed.zf.reveal');
        }
        if (this.options.resetOnClose) {
          this.$element.html(this.$element.html());
        }
        this.isActive = false;
        if (_this.options.deepLink) {
          if (window.history.replaceState) {
            window.history.replaceState('', document.title, window.location.href.replace('#' + this.id, ''));
          } else {
            window.location.hash = '';
          }
        }
        this.$anchor.focus();
      }
    }, {
      key: 'toggle',
      value: function toggle() {
        if (this.isActive) {
          this.close();
        } else {
          this.open();
        }
      }
    }, {
      key: '_destroy',
      value: function _destroy() {
        if (this.options.overlay) {
          this.$element.appendTo(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this.options.appendTo));
          this.$overlay.hide().off().remove();
        }
        this.$element.hide().off();
        this.$anchor.off('.zf');
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off('.zf.reveal:' + this.id);
      }
    }]);
    return Reveal;
  }(__WEBPACK_IMPORTED_MODULE_4__foundation_plugin__["a"]);
  Reveal.defaults = {
    animationIn: '',
    animationOut: '',
    showDelay: 0,
    hideDelay: 0,
    closeOnClick: true,
    closeOnEsc: true,
    multipleOpened: false,
    vOffset: 'auto',
    hOffset: 'auto',
    fullScreen: false,
    btmOffsetPct: 10,
    overlay: true,
    resetOnClose: false,
    deepLink: false,
    updateHistory: false,
    appendTo: "body",
    additionalOverlayClasses: ''
  };

  function iPhoneSniff() {
    return (/iP(ad|hone|od).*OS/.test(window.navigator.userAgent));
  }

  function androidSniff() {
    return (/Android/.test(window.navigator.userAgent));
  }

  function mobileSniff() {
    return iPhoneSniff() || androidSniff();
  }
}), (function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.d(__webpack_exports__, "a", function() {
    return Slider;
  });
  var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
  var __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__ = __webpack_require__(4);
  var __WEBPACK_IMPORTED_MODULE_2__foundation_util_motion__ = __webpack_require__(6);
  var __WEBPACK_IMPORTED_MODULE_3__foundation_util_core__ = __webpack_require__(1);
  var __WEBPACK_IMPORTED_MODULE_4__foundation_plugin__ = __webpack_require__(2);
  var __WEBPACK_IMPORTED_MODULE_5__foundation_util_touch__ = __webpack_require__(16);
  var __WEBPACK_IMPORTED_MODULE_6__foundation_util_triggers__ = __webpack_require__(5);
  var _createClass = function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var Slider = function(_Plugin) {
    _inherits(Slider, _Plugin);

    function Slider() {
      _classCallCheck(this, Slider);
      return _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).apply(this, arguments));
    }
    _createClass(Slider, [{
      key: '_setup',
      value: function _setup(element, options) {
        this.$element = element;
        this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, Slider.defaults, this.$element.data(), options);
        this.className = 'Slider';
        __WEBPACK_IMPORTED_MODULE_5__foundation_util_touch__["a"].init(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a);
        __WEBPACK_IMPORTED_MODULE_6__foundation_util_triggers__["a"].init(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a);
        this._init();
        __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a"].register('Slider', {
          'ltr': {
            'ARROW_RIGHT': 'increase',
            'ARROW_UP': 'increase',
            'ARROW_DOWN': 'decrease',
            'ARROW_LEFT': 'decrease',
            'SHIFT_ARROW_RIGHT': 'increase_fast',
            'SHIFT_ARROW_UP': 'increase_fast',
            'SHIFT_ARROW_DOWN': 'decrease_fast',
            'SHIFT_ARROW_LEFT': 'decrease_fast',
            'HOME': 'min',
            'END': 'max'
          },
          'rtl': {
            'ARROW_LEFT': 'increase',
            'ARROW_RIGHT': 'decrease',
            'SHIFT_ARROW_LEFT': 'increase_fast',
            'SHIFT_ARROW_RIGHT': 'decrease_fast'
          }
        });
      }
    }, {
      key: '_init',
      value: function _init() {
        this.inputs = this.$element.find('input');
        this.handles = this.$element.find('[data-slider-handle]');
        this.$handle = this.handles.eq(0);
        this.$input = this.inputs.length ? this.inputs.eq(0) : __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + this.$handle.attr('aria-controls'));
        this.$fill = this.$element.find('[data-slider-fill]').css(this.options.vertical ? 'height' : 'width', 0);
        var isDbl = false,
          _this = this;
        if (this.options.disabled || this.$element.hasClass(this.options.disabledClass)) {
          this.options.disabled = true;
          this.$element.addClass(this.options.disabledClass);
        }
        if (!this.inputs.length) {
          this.inputs = __WEBPACK_IMPORTED_MODULE_0_jquery___default()().add(this.$input);
          this.options.binding = true;
        }
        this._setInitAttr(0);
        if (this.handles[1]) {
          this.options.doubleSided = true;
          this.$handle2 = this.handles.eq(1);
          this.$input2 = this.inputs.length > 1 ? this.inputs.eq(1) : __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + this.$handle2.attr('aria-controls'));
          if (!this.inputs[1]) {
            this.inputs = this.inputs.add(this.$input2);
          }
          isDbl = true;
          this._setInitAttr(1);
        }
        this.setHandles();
        this._events();
      }
    }, {
      key: 'setHandles',
      value: function setHandles() {
        var _this3 = this;
        if (this.handles[1]) {
          this._setHandlePos(this.$handle, this.inputs.eq(0).val(), true, function() {
            _this3._setHandlePos(_this3.$handle2, _this3.inputs.eq(1).val(), true);
          });
        } else {
          this._setHandlePos(this.$handle, this.inputs.eq(0).val(), true);
        }
      }
    }, {
      key: '_reflow',
      value: function _reflow() {
        this.setHandles();
      }
    }, {
      key: '_pctOfBar',
      value: function _pctOfBar(value) {
        var pctOfBar = percent(value - this.options.start, this.options.end - this.options.start);
        switch (this.options.positionValueFunction) {
          case "pow":
            pctOfBar = this._logTransform(pctOfBar);
            break;
          case "log":
            pctOfBar = this._powTransform(pctOfBar);
            break;
        }
        return pctOfBar.toFixed(2);
      }
    }, {
      key: '_value',
      value: function _value(pctOfBar) {
        switch (this.options.positionValueFunction) {
          case "pow":
            pctOfBar = this._powTransform(pctOfBar);
            break;
          case "log":
            pctOfBar = this._logTransform(pctOfBar);
            break;
        }
        var value = (this.options.end - this.options.start) * pctOfBar + this.options.start;
        return value;
      }
    }, {
      key: '_logTransform',
      value: function _logTransform(value) {
        return baseLog(this.options.nonLinearBase, value * (this.options.nonLinearBase - 1) + 1);
      }
    }, {
      key: '_powTransform',
      value: function _powTransform(value) {
        return (Math.pow(this.options.nonLinearBase, value) - 1) / (this.options.nonLinearBase - 1);
      }
    }, {
      key: '_setHandlePos',
      value: function _setHandlePos($hndl, location, noInvert, cb) {
        if (this.$element.hasClass(this.options.disabledClass)) {
          return;
        }
        location = parseFloat(location);
        if (location < this.options.start) {
          location = this.options.start;
        } else if (location > this.options.end) {
          location = this.options.end;
        }
        var isDbl = this.options.doubleSided;
        if (this.options.vertical && !noInvert) {
          location = this.options.end - location;
        }
        if (isDbl) {
          if (this.handles.index($hndl) === 0) {
            var h2Val = parseFloat(this.$handle2.attr('aria-valuenow'));
            location = location >= h2Val ? h2Val - this.options.step : location;
          } else {
            var h1Val = parseFloat(this.$handle.attr('aria-valuenow'));
            location = location <= h1Val ? h1Val + this.options.step : location;
          }
        }
        var _this = this,
          vert = this.options.vertical,
          hOrW = vert ? 'height' : 'width',
          lOrT = vert ? 'top' : 'left',
          handleDim = $hndl[0].getBoundingClientRect()[hOrW],
          elemDim = this.$element[0].getBoundingClientRect()[hOrW],
          pctOfBar = this._pctOfBar(location),
          pxToMove = (elemDim - handleDim) * pctOfBar,
          movement = (percent(pxToMove, elemDim) * 100).toFixed(this.options.decimal);
        location = parseFloat(location.toFixed(this.options.decimal));
        var css = {};
        this._setValues($hndl, location);
        if (isDbl) {
          var isLeftHndl = this.handles.index($hndl) === 0,
            dim, handlePct = ~~(percent(handleDim, elemDim) * 100);
          if (isLeftHndl) {
            css[lOrT] = movement + '%';
            dim = parseFloat(this.$handle2[0].style[lOrT]) - movement + handlePct;
            if (cb && typeof cb === 'function') {
              cb();
            }
          } else {
            var handlePos = parseFloat(this.$handle[0].style[lOrT]);
            dim = movement - (isNaN(handlePos) ? (this.options.initialStart - this.options.start) / ((this.options.end - this.options.start) / 100) : handlePos) + handlePct;
          }
          css['min-' + hOrW] = dim + '%';
        }
        this.$element.one('finished.zf.animate', function() {
          _this.$element.trigger('moved.zf.slider', [$hndl]);
        });
        var moveTime = this.$element.data('dragging') ? 1000 / 60 : this.options.moveTime;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__foundation_util_motion__["b"])(moveTime, $hndl, function() {
          if (isNaN(movement)) {
            $hndl.css(lOrT, pctOfBar * 100 + '%');
          } else {
            $hndl.css(lOrT, movement + '%');
          }
          if (!_this.options.doubleSided) {
            _this.$fill.css(hOrW, pctOfBar * 100 + '%');
          } else {
            _this.$fill.css(css);
          }
        });
        clearTimeout(_this.timeout);
        _this.timeout = setTimeout(function() {
          _this.$element.trigger('changed.zf.slider', [$hndl]);
        }, _this.options.changedDelay);
      }
    }, {
      key: '_setInitAttr',
      value: function _setInitAttr(idx) {
        var initVal = idx === 0 ? this.options.initialStart : this.options.initialEnd;
        var id = this.inputs.eq(idx).attr('id') || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__foundation_util_core__["a"])(6, 'slider');
        this.inputs.eq(idx).attr({
          'id': id,
          'max': this.options.end,
          'min': this.options.start,
          'step': this.options.step
        });
        this.inputs.eq(idx).val(initVal);
        this.handles.eq(idx).attr({
          'role': 'slider',
          'aria-controls': id,
          'aria-valuemax': this.options.end,
          'aria-valuemin': this.options.start,
          'aria-valuenow': initVal,
          'aria-orientation': this.options.vertical ? 'vertical' : 'horizontal',
          'tabindex': 0
        });
      }
    }, {
      key: '_setValues',
      value: function _setValues($handle, val) {
        var idx = this.options.doubleSided ? this.handles.index($handle) : 0;
        this.inputs.eq(idx).val(val);
        $handle.attr('aria-valuenow', val);
      }
    }, {
      key: '_handleEvent',
      value: function _handleEvent(e, $handle, val) {
        var value, hasVal;
        if (!val) {
          e.preventDefault();
          var _this = this,
            vertical = this.options.vertical,
            param = vertical ? 'height' : 'width',
            direction = vertical ? 'top' : 'left',
            eventOffset = vertical ? e.pageY : e.pageX,
            halfOfHandle = this.$handle[0].getBoundingClientRect()[param] / 2,
            barDim = this.$element[0].getBoundingClientRect()[param],
            windowScroll = vertical ? __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).scrollTop() : __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).scrollLeft();
          var elemOffset = this.$element.offset()[direction];
          if (e.clientY === e.pageY) {
            eventOffset = eventOffset + windowScroll;
          }
          var eventFromBar = eventOffset - elemOffset;
          var barXY;
          if (eventFromBar < 0) {
            barXY = 0;
          } else if (eventFromBar > barDim) {
            barXY = barDim;
          } else {
            barXY = eventFromBar;
          }
          var offsetPct = percent(barXY, barDim);
          value = this._value(offsetPct);
          if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__foundation_util_core__["b"])() && !this.options.vertical) {
            value = this.options.end - value;
          }
          value = _this._adjustValue(null, value);
          hasVal = false;
          if (!$handle) {
            var firstHndlPos = absPosition(this.$handle, direction, barXY, param),
              secndHndlPos = absPosition(this.$handle2, direction, barXY, param);
            $handle = firstHndlPos <= secndHndlPos ? this.$handle : this.$handle2;
          }
        } else {
          value = this._adjustValue(null, val);
          hasVal = true;
        }
        this._setHandlePos($handle, value, hasVal);
      }
    }, {
      key: '_adjustValue',
      value: function _adjustValue($handle, value) {
        var val, step = this.options.step,
          div = parseFloat(step / 2),
          left, prev_val, next_val;
        if (!!$handle) {
          val = parseFloat($handle.attr('aria-valuenow'));
        } else {
          val = value;
        }
        left = val % step;
        prev_val = val - left;
        next_val = prev_val + step;
        if (left === 0) {
          return val;
        }
        val = val >= prev_val + div ? next_val : prev_val;
        return val;
      }
    }, {
      key: '_events',
      value: function _events() {
        this._eventsForHandle(this.$handle);
        if (this.handles[1]) {
          this._eventsForHandle(this.$handle2);
        }
      }
    }, {
      key: '_eventsForHandle',
      value: function _eventsForHandle($handle) {
        var _this = this,
          curHandle, timer;
        this.inputs.off('change.zf.slider').on('change.zf.slider', function(e) {
          var idx = _this.inputs.index(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this));
          _this._handleEvent(e, _this.handles.eq(idx), __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).val());
        });
        if (this.options.clickSelect) {
          this.$element.off('click.zf.slider').on('click.zf.slider', function(e) {
            if (_this.$element.data('dragging')) {
              return false;
            }
            if (!__WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target).is('[data-slider-handle]')) {
              if (_this.options.doubleSided) {
                _this._handleEvent(e);
              } else {
                _this._handleEvent(e, _this.$handle);
              }
            }
          });
        }
        if (this.options.draggable) {
          this.handles.addTouch();
          var $body = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('body');
          $handle.off('mousedown.zf.slider').on('mousedown.zf.slider', function(e) {
            $handle.addClass('is-dragging');
            _this.$fill.addClass('is-dragging');
            _this.$element.data('dragging', true);
            curHandle = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.currentTarget);
            $body.on('mousemove.zf.slider', function(e) {
              e.preventDefault();
              _this._handleEvent(e, curHandle);
            }).on('mouseup.zf.slider', function(e) {
              _this._handleEvent(e, curHandle);
              $handle.removeClass('is-dragging');
              _this.$fill.removeClass('is-dragging');
              _this.$element.data('dragging', false);
              $body.off('mousemove.zf.slider mouseup.zf.slider');
            });
          }).on('selectstart.zf.slider touchmove.zf.slider', function(e) {
            e.preventDefault();
          });
        }
        $handle.off('keydown.zf.slider').on('keydown.zf.slider', function(e) {
          var _$handle = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this),
            idx = _this.options.doubleSided ? _this.handles.index(_$handle) : 0,
            oldValue = parseFloat(_this.inputs.eq(idx).val()),
            newValue;
          __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a"].handleKey(e, 'Slider', {
            decrease: function() {
              newValue = oldValue - _this.options.step;
            },
            increase: function() {
              newValue = oldValue + _this.options.step;
            },
            decrease_fast: function() {
              newValue = oldValue - _this.options.step * 10;
            },
            increase_fast: function() {
              newValue = oldValue + _this.options.step * 10;
            },
            min: function() {
              newValue = _this.options.start;
            },
            max: function() {
              newValue = _this.options.end;
            },
            handled: function() {
              e.preventDefault();
              _this._setHandlePos(_$handle, newValue, true);
            }
          });
        });
      }
    }, {
      key: '_destroy',
      value: function _destroy() {
        this.handles.off('.zf.slider');
        this.inputs.off('.zf.slider');
        this.$element.off('.zf.slider');
        clearTimeout(this.timeout);
      }
    }]);
    return Slider;
  }(__WEBPACK_IMPORTED_MODULE_4__foundation_plugin__["a"]);
  Slider.defaults = {
    start: 0,
    end: 100,
    step: 1,
    initialStart: 0,
    initialEnd: 100,
    binding: false,
    clickSelect: true,
    vertical: false,
    draggable: true,
    disabled: false,
    doubleSided: false,
    decimal: 2,
    moveTime: 200,
    disabledClass: 'disabled',
    invertVertical: false,
    changedDelay: 500,
    nonLinearBase: 5,
    positionValueFunction: 'linear'
  };

  function percent(frac, num) {
    return frac / num;
  }

  function absPosition($handle, dir, clickPos, param) {
    return Math.abs($handle.position()[dir] + $handle[param]() / 2 - clickPos);
  }

  function baseLog(base, value) {
    return Math.log(value) / Math.log(base);
  }
}), (function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.d(__webpack_exports__, "a", function() {
    return Sticky;
  });
  var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
  var __WEBPACK_IMPORTED_MODULE_1__foundation_util_core__ = __webpack_require__(1);
  var __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__ = __webpack_require__(3);
  var __WEBPACK_IMPORTED_MODULE_3__foundation_plugin__ = __webpack_require__(2);
  var __WEBPACK_IMPORTED_MODULE_4__foundation_util_triggers__ = __webpack_require__(5);
  var _createClass = function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var Sticky = function(_Plugin) {
    _inherits(Sticky, _Plugin);

    function Sticky() {
      _classCallCheck(this, Sticky);
      return _possibleConstructorReturn(this, (Sticky.__proto__ || Object.getPrototypeOf(Sticky)).apply(this, arguments));
    }
    _createClass(Sticky, [{
      key: '_setup',
      value: function _setup(element, options) {
        this.$element = element;
        this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, Sticky.defaults, this.$element.data(), options);
        this.className = 'Sticky';
        __WEBPACK_IMPORTED_MODULE_4__foundation_util_triggers__["a"].init(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a);
        this._init();
      }
    }, {
      key: '_init',
      value: function _init() {
        __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__["a"]._init();
        var $parent = this.$element.parent('[data-sticky-container]'),
          id = this.$element[0].id || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__foundation_util_core__["a"])(6, 'sticky'),
          _this = this;
        if ($parent.length) {
          this.$container = $parent;
        } else {
          this.wasWrapped = true;
          this.$element.wrap(this.options.container);
          this.$container = this.$element.parent();
        }
        this.$container.addClass(this.options.containerClass);
        this.$element.addClass(this.options.stickyClass).attr({
          'data-resize': id,
          'data-mutate': id
        });
        if (this.options.anchor !== '') {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + _this.options.anchor).attr({
            'data-mutate': id
          });
        }
        this.scrollCount = this.options.checkEvery;
        this.isStuck = false;
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).one('load.zf.sticky', function() {
          _this.containerHeight = _this.$element.css("display") == "none" ? 0 : _this.$element[0].getBoundingClientRect().height;
          _this.$container.css('height', _this.containerHeight);
          _this.elemHeight = _this.containerHeight;
          if (_this.options.anchor !== '') {
            _this.$anchor = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + _this.options.anchor);
          } else {
            _this._parsePoints();
          }
          _this._setSizes(function() {
            var scroll = window.pageYOffset;
            _this._calc(false, scroll);
            if (!_this.isStuck) {
              _this._removeSticky(scroll >= _this.topPoint ? false : true);
            }
          });
          _this._events(id.split('-').reverse().join('-'));
        });
      }
    }, {
      key: '_parsePoints',
      value: function _parsePoints() {
        var top = this.options.topAnchor == "" ? 1 : this.options.topAnchor,
          btm = this.options.btmAnchor == "" ? document.documentElement.scrollHeight : this.options.btmAnchor,
          pts = [top, btm],
          breaks = {};
        for (var i = 0, len = pts.length; i < len && pts[i]; i++) {
          var pt;
          if (typeof pts[i] === 'number') {
            pt = pts[i];
          } else {
            var place = pts[i].split(':'),
              anchor = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + place[0]);
            pt = anchor.offset().top;
            if (place[1] && place[1].toLowerCase() === 'bottom') {
              pt += anchor[0].getBoundingClientRect().height;
            }
          }
          breaks[i] = pt;
        }
        this.points = breaks;
        return;
      }
    }, {
      key: '_events',
      value: function _events(id) {
        var _this = this,
          scrollListener = this.scrollListener = 'scroll.zf.' + id;
        if (this.isOn) {
          return;
        }
        if (this.canStick) {
          this.isOn = true;
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off(scrollListener).on(scrollListener, function(e) {
            if (_this.scrollCount === 0) {
              _this.scrollCount = _this.options.checkEvery;
              _this._setSizes(function() {
                _this._calc(false, window.pageYOffset);
              });
            } else {
              _this.scrollCount--;
              _this._calc(false, window.pageYOffset);
            }
          });
        }
        this.$element.off('resizeme.zf.trigger').on('resizeme.zf.trigger', function(e, el) {
          _this._eventsHandler(id);
        });
        this.$element.on('mutateme.zf.trigger', function(e, el) {
          _this._eventsHandler(id);
        });
        if (this.$anchor) {
          this.$anchor.on('mutateme.zf.trigger', function(e, el) {
            _this._eventsHandler(id);
          });
        }
      }
    }, {
      key: '_eventsHandler',
      value: function _eventsHandler(id) {
        var _this = this,
          scrollListener = this.scrollListener = 'scroll.zf.' + id;
        _this._setSizes(function() {
          _this._calc(false);
          if (_this.canStick) {
            if (!_this.isOn) {
              _this._events(id);
            }
          } else if (_this.isOn) {
            _this._pauseListeners(scrollListener);
          }
        });
      }
    }, {
      key: '_pauseListeners',
      value: function _pauseListeners(scrollListener) {
        this.isOn = false;
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off(scrollListener);
        this.$element.trigger('pause.zf.sticky');
      }
    }, {
      key: '_calc',
      value: function _calc(checkSizes, scroll) {
        if (checkSizes) {
          this._setSizes();
        }
        if (!this.canStick) {
          if (this.isStuck) {
            this._removeSticky(true);
          }
          return false;
        }
        if (!scroll) {
          scroll = window.pageYOffset;
        }
        if (scroll >= this.topPoint) {
          if (scroll <= this.bottomPoint) {
            if (!this.isStuck) {
              this._setSticky();
            }
          } else {
            if (this.isStuck) {
              this._removeSticky(false);
            }
          }
        } else {
          if (this.isStuck) {
            this._removeSticky(true);
          }
        }
      }
    }, {
      key: '_setSticky',
      value: function _setSticky() {
        var _this = this,
          stickTo = this.options.stickTo,
          mrgn = stickTo === 'top' ? 'marginTop' : 'marginBottom',
          notStuckTo = stickTo === 'top' ? 'bottom' : 'top',
          css = {};
        css[mrgn] = this.options[mrgn] + 'em';
        css[stickTo] = 0;
        css[notStuckTo] = 'auto';
        this.isStuck = true;
        this.$element.removeClass('is-anchored is-at-' + notStuckTo).addClass('is-stuck is-at-' + stickTo).css(css).trigger('sticky.zf.stuckto:' + stickTo);
        this.$element.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function() {
          _this._setSizes();
        });
      }
    }, {
      key: '_removeSticky',
      value: function _removeSticky(isTop) {
        var stickTo = this.options.stickTo,
          stickToTop = stickTo === 'top',
          css = {},
          anchorPt = (this.points ? this.points[1] - this.points[0] : this.anchorHeight) - this.elemHeight,
          mrgn = stickToTop ? 'marginTop' : 'marginBottom',
          notStuckTo = stickToTop ? 'bottom' : 'top',
          topOrBottom = isTop ? 'top' : 'bottom';
        css[mrgn] = 0;
        css['bottom'] = 'auto';
        if (isTop) {
          css['top'] = 0;
        } else {
          css['top'] = anchorPt;
        }
        this.isStuck = false;
        this.$element.removeClass('is-stuck is-at-' + stickTo).addClass('is-anchored is-at-' + topOrBottom).css(css).trigger('sticky.zf.unstuckfrom:' + topOrBottom);
      }
    }, {
      key: '_setSizes',
      value: function _setSizes(cb) {
        this.canStick = __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__["a"].is(this.options.stickyOn);
        if (!this.canStick) {
          if (cb && typeof cb === 'function') {
            cb();
          }
        }
        var _this = this,
          newElemWidth = this.$container[0].getBoundingClientRect().width,
          comp = window.getComputedStyle(this.$container[0]),
          pdngl = parseInt(comp['padding-left'], 10),
          pdngr = parseInt(comp['padding-right'], 10);
        if (this.$anchor && this.$anchor.length) {
          this.anchorHeight = this.$anchor[0].getBoundingClientRect().height;
        } else {
          this._parsePoints();
        }
        this.$element.css({
          'max-width': newElemWidth - pdngl - pdngr + 'px'
        });
        var newContainerHeight = this.$element[0].getBoundingClientRect().height || this.containerHeight;
        if (this.$element.css("display") == "none") {
          newContainerHeight = 0;
        }
        this.containerHeight = newContainerHeight;
        this.$container.css({
          height: newContainerHeight
        });
        this.elemHeight = newContainerHeight;
        if (!this.isStuck) {
          if (this.$element.hasClass('is-at-bottom')) {
            var anchorPt = (this.points ? this.points[1] - this.$container.offset().top : this.anchorHeight) - this.elemHeight;
            this.$element.css('top', anchorPt);
          }
        }
        this._setBreakPoints(newContainerHeight, function() {
          if (cb && typeof cb === 'function') {
            cb();
          }
        });
      }
    }, {
      key: '_setBreakPoints',
      value: function _setBreakPoints(elemHeight, cb) {
        if (!this.canStick) {
          if (cb && typeof cb === 'function') {
            cb();
          } else {
            return false;
          }
        }
        var mTop = emCalc(this.options.marginTop),
          mBtm = emCalc(this.options.marginBottom),
          topPoint = this.points ? this.points[0] : this.$anchor.offset().top,
          bottomPoint = this.points ? this.points[1] : topPoint + this.anchorHeight,
          winHeight = window.innerHeight;
        if (this.options.stickTo === 'top') {
          topPoint -= mTop;
          bottomPoint -= elemHeight + mTop;
        } else if (this.options.stickTo === 'bottom') {
          topPoint -= winHeight - (elemHeight + mBtm);
          bottomPoint -= winHeight - mBtm;
        } else {}
        this.topPoint = topPoint;
        this.bottomPoint = bottomPoint;
        if (cb && typeof cb === 'function') {
          cb();
        }
      }
    }, {
      key: '_destroy',
      value: function _destroy() {
        this._removeSticky(true);
        this.$element.removeClass(this.options.stickyClass + ' is-anchored is-at-top').css({
          height: '',
          top: '',
          bottom: '',
          'max-width': ''
        }).off('resizeme.zf.trigger').off('mutateme.zf.trigger');
        if (this.$anchor && this.$anchor.length) {
          this.$anchor.off('change.zf.sticky');
        }
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off(this.scrollListener);
        if (this.wasWrapped) {
          this.$element.unwrap();
        } else {
          this.$container.removeClass(this.options.containerClass).css({
            height: ''
          });
        }
      }
    }]);
    return Sticky;
  }(__WEBPACK_IMPORTED_MODULE_3__foundation_plugin__["a"]);
  Sticky.defaults = {
    container: '<div data-sticky-container></div>',
    stickTo: 'top',
    anchor: '',
    topAnchor: '',
    btmAnchor: '',
    marginTop: 1,
    marginBottom: 1,
    stickyOn: 'medium',
    stickyClass: 'sticky',
    containerClass: 'sticky-container',
    checkEvery: -1
  };

  function emCalc(em) {
    return parseInt(window.getComputedStyle(document.body, null).fontSize, 10) * em;
  }
}), (function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.d(__webpack_exports__, "a", function() {
    return Toggler;
  });
  var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
  var __WEBPACK_IMPORTED_MODULE_1__foundation_util_motion__ = __webpack_require__(6);
  var __WEBPACK_IMPORTED_MODULE_2__foundation_plugin__ = __webpack_require__(2);
  var __WEBPACK_IMPORTED_MODULE_3__foundation_util_triggers__ = __webpack_require__(5);
  var _createClass = function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var Toggler = function(_Plugin) {
    _inherits(Toggler, _Plugin);

    function Toggler() {
      _classCallCheck(this, Toggler);
      return _possibleConstructorReturn(this, (Toggler.__proto__ || Object.getPrototypeOf(Toggler)).apply(this, arguments));
    }
    _createClass(Toggler, [{
      key: '_setup',
      value: function _setup(element, options) {
        this.$element = element;
        this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, Toggler.defaults, element.data(), options);
        this.className = '';
        this.className = 'Toggler';
        __WEBPACK_IMPORTED_MODULE_3__foundation_util_triggers__["a"].init(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a);
        this._init();
        this._events();
      }
    }, {
      key: '_init',
      value: function _init() {
        var input;
        if (this.options.animate) {
          input = this.options.animate.split(' ');
          this.animationIn = input[0];
          this.animationOut = input[1] || null;
        } else {
          input = this.$element.data('toggler');
          this.className = input[0] === '.' ? input.slice(1) : input;
        }
        var id = this.$element[0].id;
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-open="' + id + '"], [data-close="' + id + '"], [data-toggle="' + id + '"]').attr('aria-controls', id);
        this.$element.attr('aria-expanded', this.$element.is(':hidden') ? false : true);
      }
    }, {
      key: '_events',
      value: function _events() {
        this.$element.off('toggle.zf.trigger').on('toggle.zf.trigger', this.toggle.bind(this));
      }
    }, {
      key: 'toggle',
      value: function toggle() {
        this[this.options.animate ? '_toggleAnimate' : '_toggleClass']();
      }
    }, {
      key: '_toggleClass',
      value: function _toggleClass() {
        this.$element.toggleClass(this.className);
        var isOn = this.$element.hasClass(this.className);
        if (isOn) {
          this.$element.trigger('on.zf.toggler');
        } else {
          this.$element.trigger('off.zf.toggler');
        }
        this._updateARIA(isOn);
        this.$element.find('[data-mutate]').trigger('mutateme.zf.trigger');
      }
    }, {
      key: '_toggleAnimate',
      value: function _toggleAnimate() {
        var _this = this;
        if (this.$element.is(':hidden')) {
          __WEBPACK_IMPORTED_MODULE_1__foundation_util_motion__["a"].animateIn(this.$element, this.animationIn, function() {
            _this._updateARIA(true);
            this.trigger('on.zf.toggler');
            this.find('[data-mutate]').trigger('mutateme.zf.trigger');
          });
        } else {
          __WEBPACK_IMPORTED_MODULE_1__foundation_util_motion__["a"].animateOut(this.$element, this.animationOut, function() {
            _this._updateARIA(false);
            this.trigger('off.zf.toggler');
            this.find('[data-mutate]').trigger('mutateme.zf.trigger');
          });
        }
      }
    }, {
      key: '_updateARIA',
      value: function _updateARIA(isOn) {
        this.$element.attr('aria-expanded', isOn ? true : false);
      }
    }, {
      key: '_destroy',
      value: function _destroy() {
        this.$element.off('.zf.toggler');
      }
    }]);
    return Toggler;
  }(__WEBPACK_IMPORTED_MODULE_2__foundation_plugin__["a"]);
  Toggler.defaults = {
    animate: false
  };
}), (function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.d(__webpack_exports__, "a", function() {
    return Tooltip;
  });
  var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
  var __WEBPACK_IMPORTED_MODULE_1__foundation_util_core__ = __webpack_require__(1);
  var __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__ = __webpack_require__(3);
  var __WEBPACK_IMPORTED_MODULE_3__foundation_util_triggers__ = __webpack_require__(5);
  var __WEBPACK_IMPORTED_MODULE_4__foundation_positionable__ = __webpack_require__(15);
  var _createClass = function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  var _get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);
    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);
      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;
      if (getter === undefined) {
        return undefined;
      }
      return getter.call(receiver);
    }
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var Tooltip = function(_Positionable) {
    _inherits(Tooltip, _Positionable);

    function Tooltip() {
      _classCallCheck(this, Tooltip);
      return _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).apply(this, arguments));
    }
    _createClass(Tooltip, [{
      key: '_setup',
      value: function _setup(element, options) {
        this.$element = element;
        this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, Tooltip.defaults, this.$element.data(), options);
        this.className = 'Tooltip';
        this.isActive = false;
        this.isClick = false;
        __WEBPACK_IMPORTED_MODULE_3__foundation_util_triggers__["a"].init(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a);
        this._init();
      }
    }, {
      key: '_init',
      value: function _init() {
        __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__["a"]._init();
        var elemId = this.$element.attr('aria-describedby') || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__foundation_util_core__["a"])(6, 'tooltip');
        this.options.tipText = this.options.tipText || this.$element.attr('title');
        this.template = this.options.template ? __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this.options.template) : this._buildTemplate(elemId);
        if (this.options.allowHtml) {
          this.template.appendTo(document.body).html(this.options.tipText).hide();
        } else {
          this.template.appendTo(document.body).text(this.options.tipText).hide();
        }
        this.$element.attr({
          'title': '',
          'aria-describedby': elemId,
          'data-yeti-box': elemId,
          'data-toggle': elemId,
          'data-resize': elemId
        }).addClass(this.options.triggerClass);
        _get(Tooltip.prototype.__proto__ || Object.getPrototypeOf(Tooltip.prototype), '_init', this).call(this);
        this._events();
      }
    }, {
      key: '_getDefaultPosition',
      value: function _getDefaultPosition() {
        var position = this.$element[0].className.match(/\b(top|left|right|bottom)\b/g);
        return position ? position[0] : 'top';
      }
    }, {
      key: '_getDefaultAlignment',
      value: function _getDefaultAlignment() {
        return 'center';
      }
    }, {
      key: '_getHOffset',
      value: function _getHOffset() {
        if (this.position === 'left' || this.position === 'right') {
          return this.options.hOffset + this.options.tooltipWidth;
        } else {
          return this.options.hOffset;
        }
      }
    }, {
      key: '_getVOffset',
      value: function _getVOffset() {
        if (this.position === 'top' || this.position === 'bottom') {
          return this.options.vOffset + this.options.tooltipHeight;
        } else {
          return this.options.vOffset;
        }
      }
    }, {
      key: '_buildTemplate',
      value: function _buildTemplate(id) {
        var templateClasses = (this.options.tooltipClass + ' ' + this.options.positionClass + ' ' + this.options.templateClasses).trim();
        var $template = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('<div></div>').addClass(templateClasses).attr({
          'role': 'tooltip',
          'aria-hidden': true,
          'data-is-active': false,
          'data-is-focus': false,
          'id': id
        });
        return $template;
      }
    }, {
      key: '_setPosition',
      value: function _setPosition() {
        _get(Tooltip.prototype.__proto__ || Object.getPrototypeOf(Tooltip.prototype), '_setPosition', this).call(this, this.$element, this.template);
      }
    }, {
      key: 'show',
      value: function show() {
        if (this.options.showOn !== 'all' && !__WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__["a"].is(this.options.showOn)) {
          return false;
        }
        var _this = this;
        this.template.css('visibility', 'hidden').show();
        this._setPosition();
        this.template.removeClass('top bottom left right').addClass(this.position);
        this.template.removeClass('align-top align-bottom align-left align-right align-center').addClass('align-' + this.alignment);
        this.$element.trigger('closeme.zf.tooltip', this.template.attr('id'));
        this.template.attr({
          'data-is-active': true,
          'aria-hidden': false
        });
        _this.isActive = true;
        this.template.stop().hide().css('visibility', '').fadeIn(this.options.fadeInDuration, function() {});
        this.$element.trigger('show.zf.tooltip');
      }
    }, {
      key: 'hide',
      value: function hide() {
        var _this = this;
        this.template.stop().attr({
          'aria-hidden': true,
          'data-is-active': false
        }).fadeOut(this.options.fadeOutDuration, function() {
          _this.isActive = false;
          _this.isClick = false;
        });
        this.$element.trigger('hide.zf.tooltip');
      }
    }, {
      key: '_events',
      value: function _events() {
        var _this = this;
        var $template = this.template;
        var isFocus = false;
        if (!this.options.disableHover) {
          this.$element.on('mouseenter.zf.tooltip', function(e) {
            if (!_this.isActive) {
              _this.timeout = setTimeout(function() {
                _this.show();
              }, _this.options.hoverDelay);
            }
          }).on('mouseleave.zf.tooltip', function(e) {
            clearTimeout(_this.timeout);
            if (!isFocus || _this.isClick && !_this.options.clickOpen) {
              _this.hide();
            }
          });
        }
        if (this.options.clickOpen) {
          this.$element.on('mousedown.zf.tooltip', function(e) {
            e.stopImmediatePropagation();
            if (_this.isClick) {} else {
              _this.isClick = true;
              if ((_this.options.disableHover || !_this.$element.attr('tabindex')) && !_this.isActive) {
                _this.show();
              }
            }
          });
        } else {
          this.$element.on('mousedown.zf.tooltip', function(e) {
            e.stopImmediatePropagation();
            _this.isClick = true;
          });
        }
        if (!this.options.disableForTouch) {
          this.$element.on('tap.zf.tooltip touchend.zf.tooltip', function(e) {
            _this.isActive ? _this.hide() : _this.show();
          });
        }
        this.$element.on({
          'close.zf.trigger': this.hide.bind(this)
        });
        this.$element.on('focus.zf.tooltip', function(e) {
          isFocus = true;
          if (_this.isClick) {
            if (!_this.options.clickOpen) {
              isFocus = false;
            }
            return false;
          } else {
            _this.show();
          }
        }).on('focusout.zf.tooltip', function(e) {
          isFocus = false;
          _this.isClick = false;
          _this.hide();
        }).on('resizeme.zf.trigger', function() {
          if (_this.isActive) {
            _this._setPosition();
          }
        });
      }
    }, {
      key: 'toggle',
      value: function toggle() {
        if (this.isActive) {
          this.hide();
        } else {
          this.show();
        }
      }
    }, {
      key: '_destroy',
      value: function _destroy() {
        this.$element.attr('title', this.template.text()).off('.zf.trigger .zf.tooltip').removeClass('has-tip top right left').removeAttr('aria-describedby aria-haspopup data-disable-hover data-resize data-toggle data-tooltip data-yeti-box');
        this.template.remove();
      }
    }]);
    return Tooltip;
  }(__WEBPACK_IMPORTED_MODULE_4__foundation_positionable__["a"]);
  Tooltip.defaults = {
    disableForTouch: false,
    hoverDelay: 200,
    fadeInDuration: 150,
    fadeOutDuration: 150,
    disableHover: false,
    templateClasses: '',
    tooltipClass: 'tooltip',
    triggerClass: 'has-tip',
    showOn: 'small',
    template: '',
    tipText: '',
    touchCloseText: 'Tap to close.',
    clickOpen: true,
    positionClass: '',
    position: 'auto',
    alignment: 'auto',
    allowOverlap: false,
    allowBottomOverlap: false,
    vOffset: 0,
    hOffset: 0,
    tooltipHeight: 14,
    tooltipWidth: 12,
    allowHtml: false
  };
}), (function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.d(__webpack_exports__, "a", function() {
    return SmoothScroll;
  });
  var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
  var __WEBPACK_IMPORTED_MODULE_1__foundation_util_core__ = __webpack_require__(1);
  var __WEBPACK_IMPORTED_MODULE_2__foundation_plugin__ = __webpack_require__(2);
  var _createClass = function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var SmoothScroll = function(_Plugin) {
    _inherits(SmoothScroll, _Plugin);

    function SmoothScroll() {
      _classCallCheck(this, SmoothScroll);
      return _possibleConstructorReturn(this, (SmoothScroll.__proto__ || Object.getPrototypeOf(SmoothScroll)).apply(this, arguments));
    }
    _createClass(SmoothScroll, [{
      key: '_setup',
      value: function _setup(element, options) {
        this.$element = element;
        this.options = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({}, SmoothScroll.defaults, this.$element.data(), options);
        this.className = 'SmoothScroll';
        this._init();
      }
    }, {
      key: '_init',
      value: function _init() {
        var id = this.$element[0].id || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__foundation_util_core__["a"])(6, 'smooth-scroll');
        var _this = this;
        this.$element.attr({
          'id': id
        });
        this._events();
      }
    }, {
      key: '_events',
      value: function _events() {
        var _this = this;
        var handleLinkClick = function(e) {
          if (!__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).is('a[href^="#"]')) {
            return false;
          }
          var arrival = this.getAttribute('href');
          _this._inTransition = true;
          SmoothScroll.scrollToLoc(arrival, _this.options, function() {
            _this._inTransition = false;
          });
          e.preventDefault();
        };
        this.$element.on('click.zf.smoothScroll', handleLinkClick);
        this.$element.on('click.zf.smoothScroll', 'a[href^="#"]', handleLinkClick);
      }
    }], [{
      key: 'scrollToLoc',
      value: function scrollToLoc(loc) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : SmoothScroll.defaults;
        var callback = arguments[2];
        if (!__WEBPACK_IMPORTED_MODULE_0_jquery___default()(loc).length) {
          return false;
        }
        var scrollPos = Math.round(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(loc).offset().top - options.threshold / 2 - options.offset);
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('html, body').stop(true).animate({
          scrollTop: scrollPos
        }, options.animationDuration, options.animationEasing, function() {
          if (callback && typeof callback == "function") {
            callback();
          }
        });
      }
    }]);
    return SmoothScroll;
  }(__WEBPACK_IMPORTED_MODULE_2__foundation_plugin__["a"]);
  SmoothScroll.defaults = {
    animationDuration: 500,
    animationEasing: 'linear',
    threshold: 50,
    offset: 0
  };
}), (function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.d(__webpack_exports__, "a", function() {
    return Timer;
  });
  var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);

  function Timer(elem, options, cb) {
    var _this = this,
      duration = options.duration,
      nameSpace = Object.keys(elem.data())[0] || 'timer',
      remain = -1,
      start, timer;
    this.isPaused = false;
    this.restart = function() {
      remain = -1;
      clearTimeout(timer);
      this.start();
    };
    this.start = function() {
      this.isPaused = false;
      clearTimeout(timer);
      remain = remain <= 0 ? duration : remain;
      elem.data('paused', false);
      start = Date.now();
      timer = setTimeout(function() {
        if (options.infinite) {
          _this.restart();
        }
        if (cb && typeof cb === 'function') {
          cb();
        }
      }, remain);
      elem.trigger('timerstart.zf.' + nameSpace);
    };
    this.pause = function() {
      this.isPaused = true;
      clearTimeout(timer);
      elem.data('paused', true);
      var end = Date.now();
      remain = remain - (end - start);
      elem.trigger('timerpaused.zf.' + nameSpace);
    };
  }
}), (function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  Object.defineProperty(__webpack_exports__, "__esModule", {
    value: true
  });
  var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
  var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
  var __WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__ = __webpack_require__(18);
  var __WEBPACK_IMPORTED_MODULE_2__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_util_mediaQuery__ = __webpack_require__(3);
  var __WEBPACK_IMPORTED_MODULE_3__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_util_triggers__ = __webpack_require__(5);
  var __WEBPACK_IMPORTED_MODULE_4__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_abide__ = __webpack_require__(17);
  var __WEBPACK_IMPORTED_MODULE_5__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_accordion__ = __webpack_require__(10);
  var __WEBPACK_IMPORTED_MODULE_6__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_accordionMenu__ = __webpack_require__(11);
  var __WEBPACK_IMPORTED_MODULE_7__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_drilldown__ = __webpack_require__(12);
  var __WEBPACK_IMPORTED_MODULE_8__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_dropdown__ = __webpack_require__(19);
  var __WEBPACK_IMPORTED_MODULE_9__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_dropdownMenu__ = __webpack_require__(13);
  var __WEBPACK_IMPORTED_MODULE_10__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_equalizer__ = __webpack_require__(20);
  var __WEBPACK_IMPORTED_MODULE_11__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_interchange__ = __webpack_require__(21);
  var __WEBPACK_IMPORTED_MODULE_12__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_magellan__ = __webpack_require__(22);
  var __WEBPACK_IMPORTED_MODULE_13__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_offcanvas__ = __webpack_require__(23);
  var __WEBPACK_IMPORTED_MODULE_14__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_orbit__ = __webpack_require__(24);
  var __WEBPACK_IMPORTED_MODULE_15__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_responsiveMenu__ = __webpack_require__(26);
  var __WEBPACK_IMPORTED_MODULE_16__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_responsiveToggle__ = __webpack_require__(27);
  var __WEBPACK_IMPORTED_MODULE_17__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_reveal__ = __webpack_require__(28);
  var __WEBPACK_IMPORTED_MODULE_18__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_slider__ = __webpack_require__(29);
  var __WEBPACK_IMPORTED_MODULE_19__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_sticky__ = __webpack_require__(30);
  var __WEBPACK_IMPORTED_MODULE_20__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_tabs__ = __webpack_require__(14);
  var __WEBPACK_IMPORTED_MODULE_21__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_toggler__ = __webpack_require__(31);
  var __WEBPACK_IMPORTED_MODULE_22__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_tooltip__ = __webpack_require__(32);
  var __WEBPACK_IMPORTED_MODULE_23__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_responsiveAccordionTabs__ = __webpack_require__(25);
  __WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a"].addToJquery(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a);
  __WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a"].MediaQuery = __WEBPACK_IMPORTED_MODULE_2__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_util_mediaQuery__["a"];
  __WEBPACK_IMPORTED_MODULE_3__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_util_triggers__["a"].init(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a, __WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a"]);
  __WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a"].plugin(__WEBPACK_IMPORTED_MODULE_4__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_abide__["a"], 'Abide');
  __WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a"].plugin(__WEBPACK_IMPORTED_MODULE_5__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_accordion__["a"], 'Accordion');
  __WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a"].plugin(__WEBPACK_IMPORTED_MODULE_6__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_accordionMenu__["a"], 'AccordionMenu');
  __WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a"].plugin(__WEBPACK_IMPORTED_MODULE_7__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_drilldown__["a"], 'Drilldown');
  __WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a"].plugin(__WEBPACK_IMPORTED_MODULE_8__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_dropdown__["a"], 'Dropdown');
  __WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a"].plugin(__WEBPACK_IMPORTED_MODULE_9__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_dropdownMenu__["a"], 'DropdownMenu');
  __WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a"].plugin(__WEBPACK_IMPORTED_MODULE_10__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_equalizer__["a"], 'Equalizer');
  __WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a"].plugin(__WEBPACK_IMPORTED_MODULE_11__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_interchange__["a"], 'Interchange');
  __WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a"].plugin(__WEBPACK_IMPORTED_MODULE_12__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_magellan__["a"], 'Magellan');
  __WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a"].plugin(__WEBPACK_IMPORTED_MODULE_13__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_offcanvas__["a"], 'OffCanvas');
  __WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a"].plugin(__WEBPACK_IMPORTED_MODULE_14__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_orbit__["a"], 'Orbit');
  __WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a"].plugin(__WEBPACK_IMPORTED_MODULE_15__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_responsiveMenu__["a"], 'ResponsiveMenu');
  __WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a"].plugin(__WEBPACK_IMPORTED_MODULE_16__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_responsiveToggle__["a"], 'ResponsiveToggle');
  __WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a"].plugin(__WEBPACK_IMPORTED_MODULE_17__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_reveal__["a"], 'Reveal');
  __WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a"].plugin(__WEBPACK_IMPORTED_MODULE_18__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_slider__["a"], 'Slider');
  __WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a"].plugin(__WEBPACK_IMPORTED_MODULE_19__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_sticky__["a"], 'Sticky');
  __WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a"].plugin(__WEBPACK_IMPORTED_MODULE_20__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_tabs__["a"], 'Tabs');
  __WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a"].plugin(__WEBPACK_IMPORTED_MODULE_21__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_toggler__["a"], 'Toggler');
  __WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a"].plugin(__WEBPACK_IMPORTED_MODULE_22__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_tooltip__["a"], 'Tooltip');
  __WEBPACK_IMPORTED_MODULE_1__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_core__["a"].plugin(__WEBPACK_IMPORTED_MODULE_23__home_deployer_sites_node_foundation_customizer_node_foundation_customizer_foundation_sites_js_foundation_responsiveAccordionTabs__["a"], 'ResponsiveAccordionTabs');
})]);
