/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ ((function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = (function () {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ })),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(29);
} else {}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Expose `Emitter`.
 */

if (true) {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function (event, fn) {
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function (event) {
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1),
      callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function (event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function (event) {
  return !!this.listeners(event).length;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies.
 */

var keys = __webpack_require__(48);
var hasBinary = __webpack_require__(22);
var sliceBuffer = __webpack_require__(53);
var after = __webpack_require__(54);
var utf8 = __webpack_require__(55);

var base64encoder;
if (typeof ArrayBuffer !== 'undefined') {
  base64encoder = __webpack_require__(56);
}

/**
 * Check if we are running an android browser. That requires us to use
 * ArrayBuffer with polling transports...
 *
 * http://ghinda.net/jpeg-blob-ajax-android/
 */

var isAndroid = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);

/**
 * Check if we are running in PhantomJS.
 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
 * https://github.com/ariya/phantomjs/issues/11395
 * @type boolean
 */
var isPhantomJS = typeof navigator !== 'undefined' && /PhantomJS/i.test(navigator.userAgent);

/**
 * When true, avoids using Blobs to encode payloads.
 * @type boolean
 */
var dontSendBlobs = isAndroid || isPhantomJS;

/**
 * Current protocol version.
 */

exports.protocol = 3;

/**
 * Packet types.
 */

var packets = exports.packets = {
  open: 0 // non-ws
  , close: 1 // non-ws
  , ping: 2,
  pong: 3,
  message: 4,
  upgrade: 5,
  noop: 6
};

var packetslist = keys(packets);

/**
 * Premade error packet.
 */

var err = { type: 'error', data: 'parser error' };

/**
 * Create a blob api even for blob builder when vendor prefixes exist
 */

var Blob = __webpack_require__(57);

/**
 * Encodes a packet.
 *
 *     <packet type id> [ <data> ]
 *
 * Example:
 *
 *     5hello world
 *     3
 *     4
 *
 * Binary is encoded in an identical principle
 *
 * @api private
 */

exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
  if (typeof supportsBinary === 'function') {
    callback = supportsBinary;
    supportsBinary = false;
  }

  if (typeof utf8encode === 'function') {
    callback = utf8encode;
    utf8encode = null;
  }

  var data = packet.data === undefined ? undefined : packet.data.buffer || packet.data;

  if (typeof ArrayBuffer !== 'undefined' && data instanceof ArrayBuffer) {
    return encodeArrayBuffer(packet, supportsBinary, callback);
  } else if (typeof Blob !== 'undefined' && data instanceof Blob) {
    return encodeBlob(packet, supportsBinary, callback);
  }

  // might be an object with { base64: true, data: dataAsBase64String }
  if (data && data.base64) {
    return encodeBase64Object(packet, callback);
  }

  // Sending data as a utf-8 string
  var encoded = packets[packet.type];

  // data fragment is optional
  if (undefined !== packet.data) {
    encoded += utf8encode ? utf8.encode(String(packet.data), { strict: false }) : String(packet.data);
  }

  return callback('' + encoded);
};

function encodeBase64Object(packet, callback) {
  // packet data is an object { base64: true, data: dataAsBase64String }
  var message = 'b' + exports.packets[packet.type] + packet.data.data;
  return callback(message);
}

/**
 * Encode packet helpers for binary types
 */

function encodeArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var data = packet.data;
  var contentArray = new Uint8Array(data);
  var resultBuffer = new Uint8Array(1 + data.byteLength);

  resultBuffer[0] = packets[packet.type];
  for (var i = 0; i < contentArray.length; i++) {
    resultBuffer[i + 1] = contentArray[i];
  }

  return callback(resultBuffer.buffer);
}

function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var fr = new FileReader();
  fr.onload = function () {
    exports.encodePacket({ type: packet.type, data: fr.result }, supportsBinary, true, callback);
  };
  return fr.readAsArrayBuffer(packet.data);
}

function encodeBlob(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  if (dontSendBlobs) {
    return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
  }

  var length = new Uint8Array(1);
  length[0] = packets[packet.type];
  var blob = new Blob([length.buffer, packet.data]);

  return callback(blob);
}

/**
 * Encodes a packet with binary data in a base64 string
 *
 * @param {Object} packet, has `type` and `data`
 * @return {String} base64 encoded message
 */

exports.encodeBase64Packet = function (packet, callback) {
  var message = 'b' + exports.packets[packet.type];
  if (typeof Blob !== 'undefined' && packet.data instanceof Blob) {
    var fr = new FileReader();
    fr.onload = function () {
      var b64 = fr.result.split(',')[1];
      callback(message + b64);
    };
    return fr.readAsDataURL(packet.data);
  }

  var b64data;
  try {
    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
  } catch (e) {
    // iPhone Safari doesn't let you apply with typed arrays
    var typed = new Uint8Array(packet.data);
    var basic = new Array(typed.length);
    for (var i = 0; i < typed.length; i++) {
      basic[i] = typed[i];
    }
    b64data = String.fromCharCode.apply(null, basic);
  }
  message += btoa(b64data);
  return callback(message);
};

/**
 * Decodes a packet. Changes format to Blob if requested.
 *
 * @return {Object} with `type` and `data` (if any)
 * @api private
 */

exports.decodePacket = function (data, binaryType, utf8decode) {
  if (data === undefined) {
    return err;
  }
  // String data
  if (typeof data === 'string') {
    if (data.charAt(0) === 'b') {
      return exports.decodeBase64Packet(data.substr(1), binaryType);
    }

    if (utf8decode) {
      data = tryDecode(data);
      if (data === false) {
        return err;
      }
    }
    var type = data.charAt(0);

    if (Number(type) != type || !packetslist[type]) {
      return err;
    }

    if (data.length > 1) {
      return { type: packetslist[type], data: data.substring(1) };
    } else {
      return { type: packetslist[type] };
    }
  }

  var asArray = new Uint8Array(data);
  var type = asArray[0];
  var rest = sliceBuffer(data, 1);
  if (Blob && binaryType === 'blob') {
    rest = new Blob([rest]);
  }
  return { type: packetslist[type], data: rest };
};

function tryDecode(data) {
  try {
    data = utf8.decode(data, { strict: false });
  } catch (e) {
    return false;
  }
  return data;
}

/**
 * Decodes a packet encoded in a base64 string
 *
 * @param {String} base64 encoded message
 * @return {Object} with `type` and `data` (if any)
 */

exports.decodeBase64Packet = function (msg, binaryType) {
  var type = packetslist[msg.charAt(0)];
  if (!base64encoder) {
    return { type: type, data: { base64: true, data: msg.substr(1) } };
  }

  var data = base64encoder.decode(msg.substr(1));

  if (binaryType === 'blob' && Blob) {
    data = new Blob([data]);
  }

  return { type: type, data: data };
};

/**
 * Encodes multiple messages (payload).
 *
 *     <length>:data
 *
 * Example:
 *
 *     11:hello world2:hi
 *
 * If any contents are binary, they will be encoded as base64 strings. Base64
 * encoded strings are marked with a b before the length specifier
 *
 * @param {Array} packets
 * @api private
 */

exports.encodePayload = function (packets, supportsBinary, callback) {
  if (typeof supportsBinary === 'function') {
    callback = supportsBinary;
    supportsBinary = null;
  }

  var isBinary = hasBinary(packets);

  if (supportsBinary && isBinary) {
    if (Blob && !dontSendBlobs) {
      return exports.encodePayloadAsBlob(packets, callback);
    }

    return exports.encodePayloadAsArrayBuffer(packets, callback);
  }

  if (!packets.length) {
    return callback('0:');
  }

  function setLengthHeader(message) {
    return message.length + ':' + message;
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, !isBinary ? false : supportsBinary, false, (function (message) {
      doneCallback(null, setLengthHeader(message));
    }));
  }

  map(packets, encodeOne, (function (err, results) {
    return callback(results.join(''));
  }));
};

/**
 * Async array map using after
 */

function map(ary, each, done) {
  var result = new Array(ary.length);
  var next = after(ary.length, done);

  var eachWithIndex = function eachWithIndex(i, el, cb) {
    each(el, (function (error, msg) {
      result[i] = msg;
      cb(error, result);
    }));
  };

  for (var i = 0; i < ary.length; i++) {
    eachWithIndex(i, ary[i], next);
  }
}

/*
 * Decodes data when a payload is maybe expected. Possible binary contents are
 * decoded from their base64 representation
 *
 * @param {String} data, callback method
 * @api public
 */

exports.decodePayload = function (data, binaryType, callback) {
  if (typeof data !== 'string') {
    return exports.decodePayloadAsBinary(data, binaryType, callback);
  }

  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var packet;
  if (data === '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

  var length = '',
      n,
      msg;

  for (var i = 0, l = data.length; i < l; i++) {
    var chr = data.charAt(i);

    if (chr !== ':') {
      length += chr;
      continue;
    }

    if (length === '' || length != (n = Number(length))) {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }

    msg = data.substr(i + 1, n);

    if (length != msg.length) {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }

    if (msg.length) {
      packet = exports.decodePacket(msg, binaryType, false);

      if (err.type === packet.type && err.data === packet.data) {
        // parser error in individual packet - ignoring payload
        return callback(err, 0, 1);
      }

      var ret = callback(packet, i + n, l);
      if (false === ret) return;
    }

    // advance cursor
    i += n;
    length = '';
  }

  if (length !== '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }
};

/**
 * Encodes multiple messages (payload) as binary.
 *
 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
 * 255><data>
 *
 * Example:
 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
 *
 * @param {Array} packets
 * @return {ArrayBuffer} encoded payload
 * @api private
 */

exports.encodePayloadAsArrayBuffer = function (packets, callback) {
  if (!packets.length) {
    return callback(new ArrayBuffer(0));
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, (function (data) {
      return doneCallback(null, data);
    }));
  }

  map(packets, encodeOne, (function (err, encodedPackets) {
    var totalLength = encodedPackets.reduce((function (acc, p) {
      var len;
      if (typeof p === 'string') {
        len = p.length;
      } else {
        len = p.byteLength;
      }
      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
    }), 0);

    var resultArray = new Uint8Array(totalLength);

    var bufferIndex = 0;
    encodedPackets.forEach((function (p) {
      var isString = typeof p === 'string';
      var ab = p;
      if (isString) {
        var view = new Uint8Array(p.length);
        for (var i = 0; i < p.length; i++) {
          view[i] = p.charCodeAt(i);
        }
        ab = view.buffer;
      }

      if (isString) {
        // not true binary
        resultArray[bufferIndex++] = 0;
      } else {
        // true binary
        resultArray[bufferIndex++] = 1;
      }

      var lenStr = ab.byteLength.toString();
      for (var i = 0; i < lenStr.length; i++) {
        resultArray[bufferIndex++] = parseInt(lenStr[i]);
      }
      resultArray[bufferIndex++] = 255;

      var view = new Uint8Array(ab);
      for (var i = 0; i < view.length; i++) {
        resultArray[bufferIndex++] = view[i];
      }
    }));

    return callback(resultArray.buffer);
  }));
};

/**
 * Encode as Blob
 */

exports.encodePayloadAsBlob = function (packets, callback) {
  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, (function (encoded) {
      var binaryIdentifier = new Uint8Array(1);
      binaryIdentifier[0] = 1;
      if (typeof encoded === 'string') {
        var view = new Uint8Array(encoded.length);
        for (var i = 0; i < encoded.length; i++) {
          view[i] = encoded.charCodeAt(i);
        }
        encoded = view.buffer;
        binaryIdentifier[0] = 0;
      }

      var len = encoded instanceof ArrayBuffer ? encoded.byteLength : encoded.size;

      var lenStr = len.toString();
      var lengthAry = new Uint8Array(lenStr.length + 1);
      for (var i = 0; i < lenStr.length; i++) {
        lengthAry[i] = parseInt(lenStr[i]);
      }
      lengthAry[lenStr.length] = 255;

      if (Blob) {
        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
        doneCallback(null, blob);
      }
    }));
  }

  map(packets, encodeOne, (function (err, results) {
    return callback(new Blob(results));
  }));
};

/*
 * Decodes data when a payload is maybe expected. Strings are decoded by
 * interpreting each byte as a key code for entries marked to start with 0. See
 * description of encodePayloadAsBinary
 *
 * @param {ArrayBuffer} data, callback method
 * @api public
 */

exports.decodePayloadAsBinary = function (data, binaryType, callback) {
  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var bufferTail = data;
  var buffers = [];

  while (bufferTail.byteLength > 0) {
    var tailArray = new Uint8Array(bufferTail);
    var isString = tailArray[0] === 0;
    var msgLength = '';

    for (var i = 1;; i++) {
      if (tailArray[i] === 255) break;

      // 310 = char length of Number.MAX_VALUE
      if (msgLength.length > 310) {
        return callback(err, 0, 1);
      }

      msgLength += tailArray[i];
    }

    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
    msgLength = parseInt(msgLength);

    var msg = sliceBuffer(bufferTail, 0, msgLength);
    if (isString) {
      try {
        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
      } catch (e) {
        // iPhone Safari doesn't let you apply to typed arrays
        var typed = new Uint8Array(msg);
        msg = '';
        for (var i = 0; i < typed.length; i++) {
          msg += String.fromCharCode(typed[i]);
        }
      }
    }

    buffers.push(msg);
    bufferTail = sliceBuffer(bufferTail, msgLength);
  }

  var total = buffers.length;
  buffers.forEach((function (buffer, i) {
    callback(exports.decodePacket(buffer, binaryType, true), i, total);
  }));
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map((function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		})).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map((function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		}));

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize((function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
}));

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(66);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach((function (key) {
		el.setAttribute(key, attrs[key]);
	}));
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(40);
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();

/**
 * Colors.
 */

exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // Internet Explorer and Edge do not support colors.
  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance ||
  // is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) ||
  // is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 ||
  // double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit');

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, (function (match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  }));

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === (typeof console === 'undefined' ? 'undefined' : _typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch (e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch (e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(10)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */

exports.encode = function (obj) {
  var str = '';

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length) str += '&';
      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
  }

  return str;
};

/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */

exports.decode = function (qs) {
  var qry = {};
  var pairs = qs.split('&');
  for (var i = 0, l = pairs.length; i < l; i++) {
    var pair = pairs[i].split('=');
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (a, b) {
  var fn = function fn() {};
  fn.prototype = b.prototype;
  a.prototype = new fn();
  a.prototype.constructor = a;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(58);
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();

/**
 * Colors.
 */

exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // Internet Explorer and Edge do not support colors.
  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance ||
  // is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) ||
  // is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 ||
  // double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit');

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, (function (match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  }));

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === (typeof console === 'undefined' ? 'undefined' : _typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch (e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch (e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(10)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function (val, options) {
  options = options || {};
  var type = typeof val === 'undefined' ? 'undefined' : _typeof(val);
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies.
 */

var debug = __webpack_require__(41)('socket.io-parser');
var Emitter = __webpack_require__(2);
var binary = __webpack_require__(43);
var isArray = __webpack_require__(13);
var isBuf = __webpack_require__(18);

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = 4;

/**
 * Packet types.
 *
 * @api public
 */

exports.types = ['CONNECT', 'DISCONNECT', 'EVENT', 'ACK', 'ERROR', 'BINARY_EVENT', 'BINARY_ACK'];

/**
 * Packet type `connect`.
 *
 * @api public
 */

exports.CONNECT = 0;

/**
 * Packet type `disconnect`.
 *
 * @api public
 */

exports.DISCONNECT = 1;

/**
 * Packet type `event`.
 *
 * @api public
 */

exports.EVENT = 2;

/**
 * Packet type `ack`.
 *
 * @api public
 */

exports.ACK = 3;

/**
 * Packet type `error`.
 *
 * @api public
 */

exports.ERROR = 4;

/**
 * Packet type 'binary event'
 *
 * @api public
 */

exports.BINARY_EVENT = 5;

/**
 * Packet type `binary ack`. For acks with binary arguments.
 *
 * @api public
 */

exports.BINARY_ACK = 6;

/**
 * Encoder constructor.
 *
 * @api public
 */

exports.Encoder = Encoder;

/**
 * Decoder constructor.
 *
 * @api public
 */

exports.Decoder = Decoder;

/**
 * A socket.io Encoder instance
 *
 * @api public
 */

function Encoder() {}

var ERROR_PACKET = exports.ERROR + '"encode error"';

/**
 * Encode a packet as a single string if non-binary, or as a
 * buffer sequence, depending on packet type.
 *
 * @param {Object} obj - packet object
 * @param {Function} callback - function to handle encodings (likely engine.write)
 * @return Calls callback with Array of encodings
 * @api public
 */

Encoder.prototype.encode = function (obj, callback) {
  debug('encoding packet %j', obj);

  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
    encodeAsBinary(obj, callback);
  } else {
    var encoding = encodeAsString(obj);
    callback([encoding]);
  }
};

/**
 * Encode packet as string.
 *
 * @param {Object} packet
 * @return {String} encoded
 * @api private
 */

function encodeAsString(obj) {

  // first is type
  var str = '' + obj.type;

  // attachments if we have them
  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
    str += obj.attachments + '-';
  }

  // if we have a namespace other than `/`
  // we append it followed by a comma `,`
  if (obj.nsp && '/' !== obj.nsp) {
    str += obj.nsp + ',';
  }

  // immediately followed by the id
  if (null != obj.id) {
    str += obj.id;
  }

  // json data
  if (null != obj.data) {
    var payload = tryStringify(obj.data);
    if (payload !== false) {
      str += payload;
    } else {
      return ERROR_PACKET;
    }
  }

  debug('encoded %j as %s', obj, str);
  return str;
}

function tryStringify(str) {
  try {
    return JSON.stringify(str);
  } catch (e) {
    return false;
  }
}

/**
 * Encode packet as 'buffer sequence' by removing blobs, and
 * deconstructing packet into object with placeholders and
 * a list of buffers.
 *
 * @param {Object} packet
 * @return {Buffer} encoded
 * @api private
 */

function encodeAsBinary(obj, callback) {

  function writeEncoding(bloblessData) {
    var deconstruction = binary.deconstructPacket(bloblessData);
    var pack = encodeAsString(deconstruction.packet);
    var buffers = deconstruction.buffers;

    buffers.unshift(pack); // add packet info to beginning of data list
    callback(buffers); // write all the buffers
  }

  binary.removeBlobs(obj, writeEncoding);
}

/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 * @api public
 */

function Decoder() {
  this.reconstructor = null;
}

/**
 * Mix in `Emitter` with Decoder.
 */

Emitter(Decoder.prototype);

/**
 * Decodes an ecoded packet string into packet JSON.
 *
 * @param {String} obj - encoded packet
 * @return {Object} packet
 * @api public
 */

Decoder.prototype.add = function (obj) {
  var packet;
  if (typeof obj === 'string') {
    packet = decodeString(obj);
    if (exports.BINARY_EVENT === packet.type || exports.BINARY_ACK === packet.type) {
      // binary packet's json
      this.reconstructor = new BinaryReconstructor(packet);

      // no attachments, labeled binary but no binary data to follow
      if (this.reconstructor.reconPack.attachments === 0) {
        this.emit('decoded', packet);
      }
    } else {
      // non-binary full packet
      this.emit('decoded', packet);
    }
  } else if (isBuf(obj) || obj.base64) {
    // raw binary data
    if (!this.reconstructor) {
      throw new Error('got binary data when not reconstructing a packet');
    } else {
      packet = this.reconstructor.takeBinaryData(obj);
      if (packet) {
        // received final buffer
        this.reconstructor = null;
        this.emit('decoded', packet);
      }
    }
  } else {
    throw new Error('Unknown type: ' + obj);
  }
};

/**
 * Decode a packet String (JSON data)
 *
 * @param {String} str
 * @return {Object} packet
 * @api private
 */

function decodeString(str) {
  var i = 0;
  // look up type
  var p = {
    type: Number(str.charAt(0))
  };

  if (null == exports.types[p.type]) {
    return error('unknown packet type ' + p.type);
  }

  // look up attachments if type binary
  if (exports.BINARY_EVENT === p.type || exports.BINARY_ACK === p.type) {
    var buf = '';
    while (str.charAt(++i) !== '-') {
      buf += str.charAt(i);
      if (i == str.length) break;
    }
    if (buf != Number(buf) || str.charAt(i) !== '-') {
      throw new Error('Illegal attachments');
    }
    p.attachments = Number(buf);
  }

  // look up namespace (if any)
  if ('/' === str.charAt(i + 1)) {
    p.nsp = '';
    while (++i) {
      var c = str.charAt(i);
      if (',' === c) break;
      p.nsp += c;
      if (i === str.length) break;
    }
  } else {
    p.nsp = '/';
  }

  // look up id
  var next = str.charAt(i + 1);
  if ('' !== next && Number(next) == next) {
    p.id = '';
    while (++i) {
      var c = str.charAt(i);
      if (null == c || Number(c) != c) {
        --i;
        break;
      }
      p.id += str.charAt(i);
      if (i === str.length) break;
    }
    p.id = Number(p.id);
  }

  // look up json data
  if (str.charAt(++i)) {
    var payload = tryParse(str.substr(i));
    var isPayloadValid = payload !== false && (p.type === exports.ERROR || isArray(payload));
    if (isPayloadValid) {
      p.data = payload;
    } else {
      return error('invalid payload');
    }
  }

  debug('decoded %s as %j', str, p);
  return p;
}

function tryParse(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return false;
  }
}

/**
 * Deallocates a parser's resources
 *
 * @api public
 */

Decoder.prototype.destroy = function () {
  if (this.reconstructor) {
    this.reconstructor.finishedReconstruction();
  }
};

/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 * @api private
 */

function BinaryReconstructor(packet) {
  this.reconPack = packet;
  this.buffers = [];
}

/**
 * Method to be called when binary data received from connection
 * after a BINARY_EVENT packet.
 *
 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
 * @return {null | Object} returns null if more binary data is expected or
 *   a reconstructed packet object if all buffers have been received.
 * @api private
 */

BinaryReconstructor.prototype.takeBinaryData = function (binData) {
  this.buffers.push(binData);
  if (this.buffers.length === this.reconPack.attachments) {
    // done with buffer list
    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
    this.finishedReconstruction();
    return packet;
  }
  return null;
};

/**
 * Cleans up binary packet reconstruction variables.
 *
 * @api private
 */

BinaryReconstructor.prototype.finishedReconstruction = function () {
  this.reconPack = null;
  this.buffers = [];
};

function error(msg) {
  return {
    type: exports.ERROR,
    data: 'parser error: ' + msg
  };
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// browser shim for xmlhttprequest module

var hasCORS = __webpack_require__(46);

module.exports = function (opts) {
  var xdomain = opts.xdomain;

  // scheme must be same when usign XDomainRequest
  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
  var xscheme = opts.xscheme;

  // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
  // https://github.com/Automattic/engine.io-client/pull/217
  var enablesXDR = opts.enablesXDR;

  // XMLHttpRequest can be disabled on IE
  try {
    if ('undefined' !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) {}

  // Use XDomainRequest for IE8 if enablesXDR is true
  // because loading bar keeps flashing when using jsonp-polling
  // https://github.com/yujiosaka/socke.io-ie8-loading-example
  try {
    if ('undefined' !== typeof XDomainRequest && !xscheme && enablesXDR) {
      return new XDomainRequest();
    }
  } catch (e) {}

  if (!xdomain) {
    try {
      return new global[['Active'].concat('Object').join('X')]('Microsoft.XMLHTTP');
    } catch (e) {}
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies.
 */

var parser = __webpack_require__(3);
var Emitter = __webpack_require__(2);

/**
 * Module exports.
 */

module.exports = Transport;

/**
 * Transport abstract constructor.
 *
 * @param {Object} options.
 * @api private
 */

function Transport(opts) {
  this.path = opts.path;
  this.hostname = opts.hostname;
  this.port = opts.port;
  this.secure = opts.secure;
  this.query = opts.query;
  this.timestampParam = opts.timestampParam;
  this.timestampRequests = opts.timestampRequests;
  this.readyState = '';
  this.agent = opts.agent || false;
  this.socket = opts.socket;
  this.enablesXDR = opts.enablesXDR;

  // SSL options for Node.js client
  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;
  this.forceNode = opts.forceNode;

  // other options for Node.js client
  this.extraHeaders = opts.extraHeaders;
  this.localAddress = opts.localAddress;
}

/**
 * Mix in `Emitter`.
 */

Emitter(Transport.prototype);

/**
 * Emits an error.
 *
 * @param {String} str
 * @return {Transport} for chaining
 * @api public
 */

Transport.prototype.onError = function (msg, desc) {
  var err = new Error(msg);
  err.type = 'TransportError';
  err.description = desc;
  this.emit('error', err);
  return this;
};

/**
 * Opens the transport.
 *
 * @api public
 */

Transport.prototype.open = function () {
  if ('closed' === this.readyState || '' === this.readyState) {
    this.readyState = 'opening';
    this.doOpen();
  }

  return this;
};

/**
 * Closes the transport.
 *
 * @api private
 */

Transport.prototype.close = function () {
  if ('opening' === this.readyState || 'open' === this.readyState) {
    this.doClose();
    this.onClose();
  }

  return this;
};

/**
 * Sends multiple packets.
 *
 * @param {Array} packets
 * @api private
 */

Transport.prototype.send = function (packets) {
  if ('open' === this.readyState) {
    this.write(packets);
  } else {
    throw new Error('Transport not open');
  }
};

/**
 * Called upon open
 *
 * @api private
 */

Transport.prototype.onOpen = function () {
  this.readyState = 'open';
  this.writable = true;
  this.emit('open');
};

/**
 * Called with data.
 *
 * @param {String} data
 * @api private
 */

Transport.prototype.onData = function (data) {
  var packet = parser.decodePacket(data, this.socket.binaryType);
  this.onPacket(packet);
};

/**
 * Called with a decoded packet.
 */

Transport.prototype.onPacket = function (packet) {
  this.emit('packet', packet);
};

/**
 * Called upon close.
 *
 * @api private
 */

Transport.prototype.onClose = function () {
  this.readyState = 'closed';
  this.emit('close');
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map((function (n) {
			return test2[n];
		}));
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach((function (letter) {
			test3[letter] = letter;
		}));
		if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */

var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

var parts = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];

module.exports = function parseuri(str) {
    var src = str,
        b = str.indexOf('['),
        e = str.indexOf(']');

    if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }

    var m = re.exec(str || ''),
        uri = {},
        i = 14;

    while (i--) {
        uri[parts[i]] = m[i] || '';
    }

    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }

    return uri;
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

module.exports = isBuf;

var withNativeBuffer = typeof global.Buffer === 'function' && typeof global.Buffer.isBuffer === 'function';
var withNativeArrayBuffer = typeof global.ArrayBuffer === 'function';

var isView = (function () {
  if (withNativeArrayBuffer && typeof global.ArrayBuffer.isView === 'function') {
    return global.ArrayBuffer.isView;
  } else {
    return function (obj) {
      return obj.buffer instanceof global.ArrayBuffer;
    };
  }
})();

/**
 * Returns true if obj is a buffer or an arraybuffer.
 *
 * @api private
 */

function isBuf(obj) {
  return withNativeBuffer && global.Buffer.isBuffer(obj) || withNativeArrayBuffer && (obj instanceof global.ArrayBuffer || isView(obj));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Module dependencies.
 */

var eio = __webpack_require__(44);
var Socket = __webpack_require__(25);
var Emitter = __webpack_require__(2);
var parser = __webpack_require__(12);
var on = __webpack_require__(26);
var bind = __webpack_require__(27);
var debug = __webpack_require__(6)('socket.io-client:manager');
var indexOf = __webpack_require__(24);
var Backoff = __webpack_require__(63);

/**
 * IE6+ hasOwnProperty
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Module exports
 */

module.exports = Manager;

/**
 * `Manager` constructor.
 *
 * @param {String} engine instance or engine uri/opts
 * @param {Object} options
 * @api public
 */

function Manager(uri, opts) {
  if (!(this instanceof Manager)) return new Manager(uri, opts);
  if (uri && 'object' === (typeof uri === 'undefined' ? 'undefined' : _typeof(uri))) {
    opts = uri;
    uri = undefined;
  }
  opts = opts || {};

  opts.path = opts.path || '/socket.io';
  this.nsps = {};
  this.subs = [];
  this.opts = opts;
  this.reconnection(opts.reconnection !== false);
  this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
  this.reconnectionDelay(opts.reconnectionDelay || 1000);
  this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
  this.randomizationFactor(opts.randomizationFactor || 0.5);
  this.backoff = new Backoff({
    min: this.reconnectionDelay(),
    max: this.reconnectionDelayMax(),
    jitter: this.randomizationFactor()
  });
  this.timeout(null == opts.timeout ? 20000 : opts.timeout);
  this.readyState = 'closed';
  this.uri = uri;
  this.connecting = [];
  this.lastPing = null;
  this.encoding = false;
  this.packetBuffer = [];
  var _parser = opts.parser || parser;
  this.encoder = new _parser.Encoder();
  this.decoder = new _parser.Decoder();
  this.autoConnect = opts.autoConnect !== false;
  if (this.autoConnect) this.open();
}

/**
 * Propagate given event to sockets and emit on `this`
 *
 * @api private
 */

Manager.prototype.emitAll = function () {
  this.emit.apply(this, arguments);
  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
    }
  }
};

/**
 * Update `socket.id` of all sockets
 *
 * @api private
 */

Manager.prototype.updateSocketIds = function () {
  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].id = this.generateId(nsp);
    }
  }
};

/**
 * generate `socket.id` for the given `nsp`
 *
 * @param {String} nsp
 * @return {String}
 * @api private
 */

Manager.prototype.generateId = function (nsp) {
  return (nsp === '/' ? '' : nsp + '#') + this.engine.id;
};

/**
 * Mix in `Emitter`.
 */

Emitter(Manager.prototype);

/**
 * Sets the `reconnection` config.
 *
 * @param {Boolean} true/false if it should automatically reconnect
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnection = function (v) {
  if (!arguments.length) return this._reconnection;
  this._reconnection = !!v;
  return this;
};

/**
 * Sets the reconnection attempts config.
 *
 * @param {Number} max reconnection attempts before giving up
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionAttempts = function (v) {
  if (!arguments.length) return this._reconnectionAttempts;
  this._reconnectionAttempts = v;
  return this;
};

/**
 * Sets the delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelay = function (v) {
  if (!arguments.length) return this._reconnectionDelay;
  this._reconnectionDelay = v;
  this.backoff && this.backoff.setMin(v);
  return this;
};

Manager.prototype.randomizationFactor = function (v) {
  if (!arguments.length) return this._randomizationFactor;
  this._randomizationFactor = v;
  this.backoff && this.backoff.setJitter(v);
  return this;
};

/**
 * Sets the maximum delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelayMax = function (v) {
  if (!arguments.length) return this._reconnectionDelayMax;
  this._reconnectionDelayMax = v;
  this.backoff && this.backoff.setMax(v);
  return this;
};

/**
 * Sets the connection timeout. `false` to disable
 *
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.timeout = function (v) {
  if (!arguments.length) return this._timeout;
  this._timeout = v;
  return this;
};

/**
 * Starts trying to reconnect if reconnection is enabled and we have not
 * started reconnecting yet
 *
 * @api private
 */

Manager.prototype.maybeReconnectOnOpen = function () {
  // Only try to reconnect if it's the first time we're connecting
  if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
    // keeps reconnection from firing twice for the same reconnection loop
    this.reconnect();
  }
};

/**
 * Sets the current transport `socket`.
 *
 * @param {Function} optional, callback
 * @return {Manager} self
 * @api public
 */

Manager.prototype.open = Manager.prototype.connect = function (fn, opts) {
  debug('readyState %s', this.readyState);
  if (~this.readyState.indexOf('open')) return this;

  debug('opening %s', this.uri);
  this.engine = eio(this.uri, this.opts);
  var socket = this.engine;
  var self = this;
  this.readyState = 'opening';
  this.skipReconnect = false;

  // emit `open`
  var openSub = on(socket, 'open', (function () {
    self.onopen();
    fn && fn();
  }));

  // emit `connect_error`
  var errorSub = on(socket, 'error', (function (data) {
    debug('connect_error');
    self.cleanup();
    self.readyState = 'closed';
    self.emitAll('connect_error', data);
    if (fn) {
      var err = new Error('Connection error');
      err.data = data;
      fn(err);
    } else {
      // Only do this if there is no fn to handle the error
      self.maybeReconnectOnOpen();
    }
  }));

  // emit `connect_timeout`
  if (false !== this._timeout) {
    var timeout = this._timeout;
    debug('connect attempt will timeout after %d', timeout);

    // set timer
    var timer = setTimeout((function () {
      debug('connect attempt timed out after %d', timeout);
      openSub.destroy();
      socket.close();
      socket.emit('error', 'timeout');
      self.emitAll('connect_timeout', timeout);
    }), timeout);

    this.subs.push({
      destroy: function destroy() {
        clearTimeout(timer);
      }
    });
  }

  this.subs.push(openSub);
  this.subs.push(errorSub);

  return this;
};

/**
 * Called upon transport open.
 *
 * @api private
 */

Manager.prototype.onopen = function () {
  debug('open');

  // clear old subs
  this.cleanup();

  // mark as open
  this.readyState = 'open';
  this.emit('open');

  // add new subs
  var socket = this.engine;
  this.subs.push(on(socket, 'data', bind(this, 'ondata')));
  this.subs.push(on(socket, 'ping', bind(this, 'onping')));
  this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
  this.subs.push(on(socket, 'error', bind(this, 'onerror')));
  this.subs.push(on(socket, 'close', bind(this, 'onclose')));
  this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
};

/**
 * Called upon a ping.
 *
 * @api private
 */

Manager.prototype.onping = function () {
  this.lastPing = new Date();
  this.emitAll('ping');
};

/**
 * Called upon a packet.
 *
 * @api private
 */

Manager.prototype.onpong = function () {
  this.emitAll('pong', new Date() - this.lastPing);
};

/**
 * Called with data.
 *
 * @api private
 */

Manager.prototype.ondata = function (data) {
  this.decoder.add(data);
};

/**
 * Called when parser fully decodes a packet.
 *
 * @api private
 */

Manager.prototype.ondecoded = function (packet) {
  this.emit('packet', packet);
};

/**
 * Called upon socket error.
 *
 * @api private
 */

Manager.prototype.onerror = function (err) {
  debug('error', err);
  this.emitAll('error', err);
};

/**
 * Creates a new socket for the given `nsp`.
 *
 * @return {Socket}
 * @api public
 */

Manager.prototype.socket = function (nsp, opts) {
  var socket = this.nsps[nsp];
  if (!socket) {
    socket = new Socket(this, nsp, opts);
    this.nsps[nsp] = socket;
    var self = this;
    socket.on('connecting', onConnecting);
    socket.on('connect', (function () {
      socket.id = self.generateId(nsp);
    }));

    if (this.autoConnect) {
      // manually call here since connecting event is fired before listening
      onConnecting();
    }
  }

  function onConnecting() {
    if (!~indexOf(self.connecting, socket)) {
      self.connecting.push(socket);
    }
  }

  return socket;
};

/**
 * Called upon a socket close.
 *
 * @param {Socket} socket
 */

Manager.prototype.destroy = function (socket) {
  var index = indexOf(this.connecting, socket);
  if (~index) this.connecting.splice(index, 1);
  if (this.connecting.length) return;

  this.close();
};

/**
 * Writes a packet.
 *
 * @param {Object} packet
 * @api private
 */

Manager.prototype.packet = function (packet) {
  debug('writing packet %j', packet);
  var self = this;
  if (packet.query && packet.type === 0) packet.nsp += '?' + packet.query;

  if (!self.encoding) {
    // encode, then write to engine with result
    self.encoding = true;
    this.encoder.encode(packet, (function (encodedPackets) {
      for (var i = 0; i < encodedPackets.length; i++) {
        self.engine.write(encodedPackets[i], packet.options);
      }
      self.encoding = false;
      self.processPacketQueue();
    }));
  } else {
    // add packet to the queue
    self.packetBuffer.push(packet);
  }
};

/**
 * If packet buffer is non-empty, begins encoding the
 * next packet in line.
 *
 * @api private
 */

Manager.prototype.processPacketQueue = function () {
  if (this.packetBuffer.length > 0 && !this.encoding) {
    var pack = this.packetBuffer.shift();
    this.packet(pack);
  }
};

/**
 * Clean up transport subscriptions and packet buffer.
 *
 * @api private
 */

Manager.prototype.cleanup = function () {
  debug('cleanup');

  var subsLength = this.subs.length;
  for (var i = 0; i < subsLength; i++) {
    var sub = this.subs.shift();
    sub.destroy();
  }

  this.packetBuffer = [];
  this.encoding = false;
  this.lastPing = null;

  this.decoder.destroy();
};

/**
 * Close the current socket.
 *
 * @api private
 */

Manager.prototype.close = Manager.prototype.disconnect = function () {
  debug('disconnect');
  this.skipReconnect = true;
  this.reconnecting = false;
  if ('opening' === this.readyState) {
    // `onclose` will not fire because
    // an open event never happened
    this.cleanup();
  }
  this.backoff.reset();
  this.readyState = 'closed';
  if (this.engine) this.engine.close();
};

/**
 * Called upon engine close.
 *
 * @api private
 */

Manager.prototype.onclose = function (reason) {
  debug('onclose');

  this.cleanup();
  this.backoff.reset();
  this.readyState = 'closed';
  this.emit('close', reason);

  if (this._reconnection && !this.skipReconnect) {
    this.reconnect();
  }
};

/**
 * Attempt a reconnection.
 *
 * @api private
 */

Manager.prototype.reconnect = function () {
  if (this.reconnecting || this.skipReconnect) return this;

  var self = this;

  if (this.backoff.attempts >= this._reconnectionAttempts) {
    debug('reconnect failed');
    this.backoff.reset();
    this.emitAll('reconnect_failed');
    this.reconnecting = false;
  } else {
    var delay = this.backoff.duration();
    debug('will wait %dms before reconnect attempt', delay);

    this.reconnecting = true;
    var timer = setTimeout((function () {
      if (self.skipReconnect) return;

      debug('attempting reconnect');
      self.emitAll('reconnect_attempt', self.backoff.attempts);
      self.emitAll('reconnecting', self.backoff.attempts);

      // check again for the case socket closed in above events
      if (self.skipReconnect) return;

      self.open((function (err) {
        if (err) {
          debug('reconnect attempt error');
          self.reconnecting = false;
          self.reconnect();
          self.emitAll('reconnect_error', err.data);
        } else {
          debug('reconnect success');
          self.onreconnect();
        }
      }));
    }), delay);

    this.subs.push({
      destroy: function destroy() {
        clearTimeout(timer);
      }
    });
  }
};

/**
 * Called upon successful reconnect.
 *
 * @api private
 */

Manager.prototype.onreconnect = function () {
  var attempt = this.backoff.attempts;
  this.reconnecting = false;
  this.backoff.reset();
  this.updateSocketIds();
  this.emitAll('reconnect', attempt);
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/**
 * Module dependencies
 */

var XMLHttpRequest = __webpack_require__(14);
var XHR = __webpack_require__(47);
var JSONP = __webpack_require__(59);
var websocket = __webpack_require__(60);

/**
 * Export transports.
 */

exports.polling = polling;
exports.websocket = websocket;

/**
 * Polling transport polymorphic constructor.
 * Decides on xhr vs jsonp based on feature detection.
 *
 * @api private
 */

function polling(opts) {
  var xhr;
  var xd = false;
  var xs = false;
  var jsonp = false !== opts.jsonp;

  if (global.location) {
    var isSSL = 'https:' === location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    xd = opts.hostname !== location.hostname || port !== opts.port;
    xs = opts.secure !== isSSL;
  }

  opts.xdomain = xd;
  opts.xscheme = xs;
  xhr = new XMLHttpRequest(opts);

  if ('open' in xhr && !opts.forceJSONP) {
    return new XHR(opts);
  } else {
    if (!jsonp) throw new Error('JSONP disabled');
    return new JSONP(opts);
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies.
 */

var Transport = __webpack_require__(15);
var parseqs = __webpack_require__(7);
var parser = __webpack_require__(3);
var inherit = __webpack_require__(8);
var yeast = __webpack_require__(23);
var debug = __webpack_require__(9)('engine.io-client:polling');

/**
 * Module exports.
 */

module.exports = Polling;

/**
 * Is XHR2 supported?
 */

var hasXHR2 = (function () {
  var XMLHttpRequest = __webpack_require__(14);
  var xhr = new XMLHttpRequest({ xdomain: false });
  return null != xhr.responseType;
})();

/**
 * Polling interface.
 *
 * @param {Object} opts
 * @api private
 */

function Polling(opts) {
  var forceBase64 = opts && opts.forceBase64;
  if (!hasXHR2 || forceBase64) {
    this.supportsBinary = false;
  }
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

inherit(Polling, Transport);

/**
 * Transport name.
 */

Polling.prototype.name = 'polling';

/**
 * Opens the socket (triggers polling). We write a PING message to determine
 * when the transport is open.
 *
 * @api private
 */

Polling.prototype.doOpen = function () {
  this.poll();
};

/**
 * Pauses polling.
 *
 * @param {Function} callback upon buffers are flushed and transport is paused
 * @api private
 */

Polling.prototype.pause = function (onPause) {
  var self = this;

  this.readyState = 'pausing';

  function pause() {
    debug('paused');
    self.readyState = 'paused';
    onPause();
  }

  if (this.polling || !this.writable) {
    var total = 0;

    if (this.polling) {
      debug('we are currently polling - waiting to pause');
      total++;
      this.once('pollComplete', (function () {
        debug('pre-pause polling complete');
        --total || pause();
      }));
    }

    if (!this.writable) {
      debug('we are currently writing - waiting to pause');
      total++;
      this.once('drain', (function () {
        debug('pre-pause writing complete');
        --total || pause();
      }));
    }
  } else {
    pause();
  }
};

/**
 * Starts polling cycle.
 *
 * @api public
 */

Polling.prototype.poll = function () {
  debug('polling');
  this.polling = true;
  this.doPoll();
  this.emit('poll');
};

/**
 * Overloads onData to detect payloads.
 *
 * @api private
 */

Polling.prototype.onData = function (data) {
  var self = this;
  debug('polling got data %s', data);
  var callback = function callback(packet, index, total) {
    // if its the first message we consider the transport open
    if ('opening' === self.readyState) {
      self.onOpen();
    }

    // if its a close packet, we close the ongoing requests
    if ('close' === packet.type) {
      self.onClose();
      return false;
    }

    // otherwise bypass onData and handle the message
    self.onPacket(packet);
  };

  // decode payload
  parser.decodePayload(data, this.socket.binaryType, callback);

  // if an event did not trigger closing
  if ('closed' !== this.readyState) {
    // if we got data we're not polling
    this.polling = false;
    this.emit('pollComplete');

    if ('open' === this.readyState) {
      this.poll();
    } else {
      debug('ignoring poll - transport state "%s"', this.readyState);
    }
  }
};

/**
 * For polling, send a close packet.
 *
 * @api private
 */

Polling.prototype.doClose = function () {
  var self = this;

  function close() {
    debug('writing close packet');
    self.write([{ type: 'close' }]);
  }

  if ('open' === this.readyState) {
    debug('transport open - closing');
    close();
  } else {
    // in case we're trying to close while
    // handshaking is in progress (GH-164)
    debug('transport not open - deferring close');
    this.once('open', close);
  }
};

/**
 * Writes a packets payload.
 *
 * @param {Array} data packets
 * @param {Function} drain callback
 * @api private
 */

Polling.prototype.write = function (packets) {
  var self = this;
  this.writable = false;
  var callbackfn = function callbackfn() {
    self.writable = true;
    self.emit('drain');
  };

  parser.encodePayload(packets, this.supportsBinary, (function (data) {
    self.doWrite(data, callbackfn);
  }));
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

Polling.prototype.uri = function () {
  var query = this.query || {};
  var schema = this.secure ? 'https' : 'http';
  var port = '';

  // cache busting is forced
  if (false !== this.timestampRequests) {
    query[this.timestampParam] = yeast();
  }

  if (!this.supportsBinary && !query.sid) {
    query.b64 = 1;
  }

  query = parseqs.encode(query);

  // avoid port if default for schema
  if (this.port && ('https' === schema && Number(this.port) !== 443 || 'http' === schema && Number(this.port) !== 80)) {
    port = ':' + this.port;
  }

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* global Blob File */

/*
 * Module requirements.
 */

var isArray = __webpack_require__(13);

var toString = Object.prototype.toString;
var withNativeBlob = typeof Blob === 'function' || typeof Blob !== 'undefined' && toString.call(Blob) === '[object BlobConstructor]';
var withNativeFile = typeof File === 'function' || typeof File !== 'undefined' && toString.call(File) === '[object FileConstructor]';

/**
 * Module exports.
 */

module.exports = hasBinary;

/**
 * Checks for binary data.
 *
 * Supports Buffer, ArrayBuffer, Blob and File.
 *
 * @param {Object} anything
 * @api public
 */

function hasBinary(obj) {
  if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
    return false;
  }

  if (isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }
    return false;
  }

  if (typeof Buffer === 'function' && Buffer.isBuffer && Buffer.isBuffer(obj) || typeof ArrayBuffer === 'function' && obj instanceof ArrayBuffer || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File) {
    return true;
  }

  // see: https://github.com/Automattic/has-binary/pull/4
  if (obj.toJSON && typeof obj.toJSON === 'function' && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(49).Buffer))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''),
    length = 64,
    map = {},
    seed = 0,
    i = 0,
    prev;

/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */
function encode(num) {
  var encoded = '';

  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);

  return encoded;
}

/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */
function decode(str) {
  var decoded = 0;

  for (i = 0; i < str.length; i++) {
    decoded = decoded * length + map[str.charAt(i)];
  }

  return decoded;
}

/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */
function yeast() {
  var now = encode(+new Date());

  if (now !== prev) return seed = 0, prev = now;
  return now + '.' + encode(seed++);
}

//
// Map each character to its index.
//
for (; i < length; i++) {
  map[alphabet[i]] = i;
} //
// Expose the `yeast`, `encode` and `decode` functions.
//
yeast.encode = encode;
yeast.decode = decode;
module.exports = yeast;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var indexOf = [].indexOf;

module.exports = function (arr, obj) {
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Module dependencies.
 */

var parser = __webpack_require__(12);
var Emitter = __webpack_require__(2);
var toArray = __webpack_require__(62);
var on = __webpack_require__(26);
var bind = __webpack_require__(27);
var debug = __webpack_require__(6)('socket.io-client:socket');
var parseqs = __webpack_require__(7);
var hasBin = __webpack_require__(22);

/**
 * Module exports.
 */

module.exports = exports = Socket;

/**
 * Internal events (blacklisted).
 * These events can't be emitted by the user.
 *
 * @api private
 */

var events = {
  connect: 1,
  connect_error: 1,
  connect_timeout: 1,
  connecting: 1,
  disconnect: 1,
  error: 1,
  reconnect: 1,
  reconnect_attempt: 1,
  reconnect_failed: 1,
  reconnect_error: 1,
  reconnecting: 1,
  ping: 1,
  pong: 1
};

/**
 * Shortcut to `Emitter#emit`.
 */

var emit = Emitter.prototype.emit;

/**
 * `Socket` constructor.
 *
 * @api public
 */

function Socket(io, nsp, opts) {
  this.io = io;
  this.nsp = nsp;
  this.json = this; // compat
  this.ids = 0;
  this.acks = {};
  this.receiveBuffer = [];
  this.sendBuffer = [];
  this.connected = false;
  this.disconnected = true;
  this.flags = {};
  if (opts && opts.query) {
    this.query = opts.query;
  }
  if (this.io.autoConnect) this.open();
}

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Subscribe to open, close and packet events
 *
 * @api private
 */

Socket.prototype.subEvents = function () {
  if (this.subs) return;

  var io = this.io;
  this.subs = [on(io, 'open', bind(this, 'onopen')), on(io, 'packet', bind(this, 'onpacket')), on(io, 'close', bind(this, 'onclose'))];
};

/**
 * "Opens" the socket.
 *
 * @api public
 */

Socket.prototype.open = Socket.prototype.connect = function () {
  if (this.connected) return this;

  this.subEvents();
  this.io.open(); // ensure open
  if ('open' === this.io.readyState) this.onopen();
  this.emit('connecting');
  return this;
};

/**
 * Sends a `message` event.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.send = function () {
  var args = toArray(arguments);
  args.unshift('message');
  this.emit.apply(this, args);
  return this;
};

/**
 * Override `emit`.
 * If the event is in `events`, it's emitted normally.
 *
 * @param {String} event name
 * @return {Socket} self
 * @api public
 */

Socket.prototype.emit = function (ev) {
  if (events.hasOwnProperty(ev)) {
    emit.apply(this, arguments);
    return this;
  }

  var args = toArray(arguments);
  var packet = {
    type: (this.flags.binary !== undefined ? this.flags.binary : hasBin(args)) ? parser.BINARY_EVENT : parser.EVENT,
    data: args
  };

  packet.options = {};
  packet.options.compress = !this.flags || false !== this.flags.compress;

  // event ack callback
  if ('function' === typeof args[args.length - 1]) {
    debug('emitting packet with ack id %d', this.ids);
    this.acks[this.ids] = args.pop();
    packet.id = this.ids++;
  }

  if (this.connected) {
    this.packet(packet);
  } else {
    this.sendBuffer.push(packet);
  }

  this.flags = {};

  return this;
};

/**
 * Sends a packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.packet = function (packet) {
  packet.nsp = this.nsp;
  this.io.packet(packet);
};

/**
 * Called upon engine `open`.
 *
 * @api private
 */

Socket.prototype.onopen = function () {
  debug('transport is open - connecting');

  // write connect packet if necessary
  if ('/' !== this.nsp) {
    if (this.query) {
      var query = _typeof(this.query) === 'object' ? parseqs.encode(this.query) : this.query;
      debug('sending connect packet with query %s', query);
      this.packet({ type: parser.CONNECT, query: query });
    } else {
      this.packet({ type: parser.CONNECT });
    }
  }
};

/**
 * Called upon engine `close`.
 *
 * @param {String} reason
 * @api private
 */

Socket.prototype.onclose = function (reason) {
  debug('close (%s)', reason);
  this.connected = false;
  this.disconnected = true;
  delete this.id;
  this.emit('disconnect', reason);
};

/**
 * Called with socket packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onpacket = function (packet) {
  var sameNamespace = packet.nsp === this.nsp;
  var rootNamespaceError = packet.type === parser.ERROR && packet.nsp === '/';

  if (!sameNamespace && !rootNamespaceError) return;

  switch (packet.type) {
    case parser.CONNECT:
      this.onconnect();
      break;

    case parser.EVENT:
      this.onevent(packet);
      break;

    case parser.BINARY_EVENT:
      this.onevent(packet);
      break;

    case parser.ACK:
      this.onack(packet);
      break;

    case parser.BINARY_ACK:
      this.onack(packet);
      break;

    case parser.DISCONNECT:
      this.ondisconnect();
      break;

    case parser.ERROR:
      this.emit('error', packet.data);
      break;
  }
};

/**
 * Called upon a server event.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onevent = function (packet) {
  var args = packet.data || [];
  debug('emitting event %j', args);

  if (null != packet.id) {
    debug('attaching ack callback to event');
    args.push(this.ack(packet.id));
  }

  if (this.connected) {
    emit.apply(this, args);
  } else {
    this.receiveBuffer.push(args);
  }
};

/**
 * Produces an ack callback to emit with an event.
 *
 * @api private
 */

Socket.prototype.ack = function (id) {
  var self = this;
  var sent = false;
  return function () {
    // prevent double callbacks
    if (sent) return;
    sent = true;
    var args = toArray(arguments);
    debug('sending ack %j', args);

    self.packet({
      type: hasBin(args) ? parser.BINARY_ACK : parser.ACK,
      id: id,
      data: args
    });
  };
};

/**
 * Called upon a server acknowlegement.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onack = function (packet) {
  var ack = this.acks[packet.id];
  if ('function' === typeof ack) {
    debug('calling ack %s with %j', packet.id, packet.data);
    ack.apply(this, packet.data);
    delete this.acks[packet.id];
  } else {
    debug('bad ack %s', packet.id);
  }
};

/**
 * Called upon server connect.
 *
 * @api private
 */

Socket.prototype.onconnect = function () {
  this.connected = true;
  this.disconnected = false;
  this.emit('connect');
  this.emitBuffered();
};

/**
 * Emit buffered events (received and emitted).
 *
 * @api private
 */

Socket.prototype.emitBuffered = function () {
  var i;
  for (i = 0; i < this.receiveBuffer.length; i++) {
    emit.apply(this, this.receiveBuffer[i]);
  }
  this.receiveBuffer = [];

  for (i = 0; i < this.sendBuffer.length; i++) {
    this.packet(this.sendBuffer[i]);
  }
  this.sendBuffer = [];
};

/**
 * Called upon server disconnect.
 *
 * @api private
 */

Socket.prototype.ondisconnect = function () {
  debug('server disconnect (%s)', this.nsp);
  this.destroy();
  this.onclose('io server disconnect');
};

/**
 * Called upon forced client/server side disconnections,
 * this method ensures the manager stops tracking us and
 * that reconnections don't get triggered for this.
 *
 * @api private.
 */

Socket.prototype.destroy = function () {
  if (this.subs) {
    // clean subscriptions to avoid reconnections
    for (var i = 0; i < this.subs.length; i++) {
      this.subs[i].destroy();
    }
    this.subs = null;
  }

  this.io.destroy(this);
};

/**
 * Disconnects the socket manually.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.close = Socket.prototype.disconnect = function () {
  if (this.connected) {
    debug('performing disconnect (%s)', this.nsp);
    this.packet({ type: parser.DISCONNECT });
  }

  // remove socket from pool
  this.destroy();

  if (this.connected) {
    // fire events
    this.onclose('io client disconnect');
  }
  return this;
};

/**
 * Sets the compress flag.
 *
 * @param {Boolean} if `true`, compresses the sending data
 * @return {Socket} self
 * @api public
 */

Socket.prototype.compress = function (compress) {
  this.flags.compress = compress;
  return this;
};

/**
 * Sets the binary flag
 *
 * @param {Boolean} whether the emitted data contains binary
 * @return {Socket} self
 * @api public
 */

Socket.prototype.binary = function (binary) {
  this.flags.binary = binary;
  return this;
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module exports.
 */

module.exports = on;

/**
 * Helper for subscriptions.
 *
 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
 * @param {String} event name
 * @param {Function} callback
 * @api public
 */

function on(obj, ev, fn) {
  obj.on(ev, fn);
  return {
    destroy: function destroy() {
      obj.removeListener(ev, fn);
    }
  };
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Slice reference.
 */

var slice = [].slice;

/**
 * Bind `obj` to `fn`.
 *
 * @param {Object} obj
 * @param {Function|String} fn or string
 * @return {Function}
 * @api public
 */

module.exports = function (obj, fn) {
  if ('string' == typeof fn) fn = obj[fn];
  if ('function' != typeof fn) throw new Error('bind() requires a function');
  var args = slice.call(arguments, 2);
  return function () {
    return fn.apply(obj, args.concat(slice.call(arguments)));
  };
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(30);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(34);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('app'));

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.6.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var k = __webpack_require__(16),
    n = "function" === typeof Symbol && Symbol.for,
    p = n ? Symbol.for("react.element") : 60103,
    q = n ? Symbol.for("react.portal") : 60106,
    r = n ? Symbol.for("react.fragment") : 60107,
    t = n ? Symbol.for("react.strict_mode") : 60108,
    u = n ? Symbol.for("react.profiler") : 60114,
    v = n ? Symbol.for("react.provider") : 60109,
    w = n ? Symbol.for("react.context") : 60110,
    x = n ? Symbol.for("react.concurrent_mode") : 60111,
    y = n ? Symbol.for("react.forward_ref") : 60112,
    z = n ? Symbol.for("react.suspense") : 60113,
    A = n ? Symbol.for("react.memo") : 60115,
    B = n ? Symbol.for("react.lazy") : 60116,
    C = "function" === typeof Symbol && Symbol.iterator;function aa(a, b, e, c, d, g, h, f) {
  if (!a) {
    a = void 0;if (void 0 === b) a = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else {
      var l = [e, c, d, g, h, f],
          m = 0;a = Error(b.replace(/%s/g, (function () {
        return l[m++];
      })));a.name = "Invariant Violation";
    }a.framesToPop = 1;throw a;
  }
}
function D(a) {
  for (var b = arguments.length - 1, e = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 0; c < b; c++) {
    e += "&args[]=" + encodeURIComponent(arguments[c + 1]);
  }aa(!1, "Minified React error #" + a + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", e);
}var E = { isMounted: function isMounted() {
    return !1;
  }, enqueueForceUpdate: function enqueueForceUpdate() {}, enqueueReplaceState: function enqueueReplaceState() {}, enqueueSetState: function enqueueSetState() {} },
    F = {};
function G(a, b, e) {
  this.props = a;this.context = b;this.refs = F;this.updater = e || E;
}G.prototype.isReactComponent = {};G.prototype.setState = function (a, b) {
  "object" !== (typeof a === "undefined" ? "undefined" : _typeof(a)) && "function" !== typeof a && null != a ? D("85") : void 0;this.updater.enqueueSetState(this, a, b, "setState");
};G.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};function H() {}H.prototype = G.prototype;function I(a, b, e) {
  this.props = a;this.context = b;this.refs = F;this.updater = e || E;
}var J = I.prototype = new H();
J.constructor = I;k(J, G.prototype);J.isPureReactComponent = !0;var K = { current: null, currentDispatcher: null },
    L = Object.prototype.hasOwnProperty,
    M = { key: !0, ref: !0, __self: !0, __source: !0 };
function N(a, b, e) {
  var c = void 0,
      d = {},
      g = null,
      h = null;if (null != b) for (c in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (g = "" + b.key), b) {
    L.call(b, c) && !M.hasOwnProperty(c) && (d[c] = b[c]);
  }var f = arguments.length - 2;if (1 === f) d.children = e;else if (1 < f) {
    for (var l = Array(f), m = 0; m < f; m++) {
      l[m] = arguments[m + 2];
    }d.children = l;
  }if (a && a.defaultProps) for (c in f = a.defaultProps, f) {
    void 0 === d[c] && (d[c] = f[c]);
  }return { $$typeof: p, type: a, key: g, ref: h, props: d, _owner: K.current };
}
function ba(a, b) {
  return { $$typeof: p, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
}function O(a) {
  return "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && null !== a && a.$$typeof === p;
}function escape(a) {
  var b = { "=": "=0", ":": "=2" };return "$" + ("" + a).replace(/[=:]/g, (function (a) {
    return b[a];
  }));
}var P = /\/+/g,
    Q = [];function R(a, b, e, c) {
  if (Q.length) {
    var d = Q.pop();d.result = a;d.keyPrefix = b;d.func = e;d.context = c;d.count = 0;return d;
  }return { result: a, keyPrefix: b, func: e, context: c, count: 0 };
}
function S(a) {
  a.result = null;a.keyPrefix = null;a.func = null;a.context = null;a.count = 0;10 > Q.length && Q.push(a);
}
function T(a, b, e, c) {
  var d = typeof a === "undefined" ? "undefined" : _typeof(a);if ("undefined" === d || "boolean" === d) a = null;var g = !1;if (null === a) g = !0;else switch (d) {case "string":case "number":
      g = !0;break;case "object":
      switch (a.$$typeof) {case p:case q:
          g = !0;}}if (g) return e(c, a, "" === b ? "." + U(a, 0) : b), 1;g = 0;b = "" === b ? "." : b + ":";if (Array.isArray(a)) for (var h = 0; h < a.length; h++) {
    d = a[h];var f = b + U(d, h);g += T(d, f, e, c);
  } else if (null === a || "object" !== (typeof a === "undefined" ? "undefined" : _typeof(a)) ? f = null : (f = C && a[C] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f) for (a = f.call(a), h = 0; !(d = a.next()).done;) {
    d = d.value, f = b + U(d, h++), g += T(d, f, e, c);
  } else "object" === d && (e = "" + a, D("31", "[object Object]" === e ? "object with keys {" + Object.keys(a).join(", ") + "}" : e, ""));return g;
}function V(a, b, e) {
  return null == a ? 0 : T(a, "", b, e);
}function U(a, b) {
  return "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && null !== a && null != a.key ? escape(a.key) : b.toString(36);
}function ca(a, b) {
  a.func.call(a.context, b, a.count++);
}
function da(a, b, e) {
  var c = a.result,
      d = a.keyPrefix;a = a.func.call(a.context, b, a.count++);Array.isArray(a) ? W(a, c, e, (function (a) {
    return a;
  })) : null != a && (O(a) && (a = ba(a, d + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(P, "$&/") + "/") + e)), c.push(a));
}function W(a, b, e, c, d) {
  var g = "";null != e && (g = ("" + e).replace(P, "$&/") + "/");b = R(b, g, c, d);V(a, da, b);S(b);
}
var X = { Children: { map: function map(a, b, e) {
      if (null == a) return a;var c = [];W(a, c, null, b, e);return c;
    }, forEach: function forEach(a, b, e) {
      if (null == a) return a;b = R(null, null, b, e);V(a, ca, b);S(b);
    }, count: function count(a) {
      return V(a, (function () {
        return null;
      }), null);
    }, toArray: function toArray(a) {
      var b = [];W(a, b, null, (function (a) {
        return a;
      }));return b;
    }, only: function only(a) {
      O(a) ? void 0 : D("143");return a;
    } }, createRef: function createRef() {
    return { current: null };
  }, Component: G, PureComponent: I, createContext: function createContext(a, b) {
    void 0 === b && (b = null);a = { $$typeof: w, _calculateChangedBits: b,
      _currentValue: a, _currentValue2: a, Provider: null, Consumer: null };a.Provider = { $$typeof: v, _context: a };return a.Consumer = a;
  }, forwardRef: function forwardRef(a) {
    return { $$typeof: y, render: a };
  }, lazy: function lazy(a) {
    return { $$typeof: B, _ctor: a, _status: -1, _result: null };
  }, memo: function memo(a, b) {
    return { $$typeof: A, type: a, compare: void 0 === b ? null : b };
  }, Fragment: r, StrictMode: t, unstable_ConcurrentMode: x, Suspense: z, unstable_Profiler: u, createElement: N, cloneElement: function cloneElement(a, b, e) {
    null === a || void 0 === a ? D("267", a) : void 0;var c = void 0,
        d = k({}, a.props),
        g = a.key,
        h = a.ref,
        f = a._owner;if (null != b) {
      void 0 !== b.ref && (h = b.ref, f = K.current);void 0 !== b.key && (g = "" + b.key);var l = void 0;a.type && a.type.defaultProps && (l = a.type.defaultProps);for (c in b) {
        L.call(b, c) && !M.hasOwnProperty(c) && (d[c] = void 0 === b[c] && void 0 !== l ? l[c] : b[c]);
      }
    }c = arguments.length - 2;if (1 === c) d.children = e;else if (1 < c) {
      l = Array(c);for (var m = 0; m < c; m++) {
        l[m] = arguments[m + 2];
      }d.children = l;
    }return { $$typeof: p, type: a.type, key: g, ref: h, props: d, _owner: f };
  }, createFactory: function createFactory(a) {
    var b = N.bind(null, a);b.type = a;return b;
  },
  isValidElement: O, version: "16.6.0", __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: { ReactCurrentOwner: K, assign: k } },
    Y = { default: X },
    Z = Y && X || Y;module.exports = Z.default || Z;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(31);
} else {}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.6.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var aa = __webpack_require__(1),
    n = __webpack_require__(16),
    da = __webpack_require__(32);function ea(a, b, c, d, e, f, g, h) {
  if (!a) {
    a = void 0;if (void 0 === b) a = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else {
      var k = [c, d, e, f, g, h],
          l = 0;a = Error(b.replace(/%s/g, (function () {
        return k[l++];
      })));a.name = "Invariant Violation";
    }a.framesToPop = 1;throw a;
  }
}
function r(a) {
  for (var b = arguments.length - 1, c = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, d = 0; d < b; d++) {
    c += "&args[]=" + encodeURIComponent(arguments[d + 1]);
  }ea(!1, "Minified React error #" + a + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", c);
}aa ? void 0 : r("227");function fa(a, b, c, d, e, f, g, h, k) {
  var l = Array.prototype.slice.call(arguments, 3);try {
    b.apply(c, l);
  } catch (m) {
    this.onError(m);
  }
}
var ha = !1,
    ia = null,
    ja = !1,
    ka = null,
    la = { onError: function onError(a) {
    ha = !0;ia = a;
  } };function ma(a, b, c, d, e, f, g, h, k) {
  ha = !1;ia = null;fa.apply(la, arguments);
}function na(a, b, c, d, e, f, g, h, k) {
  ma.apply(this, arguments);if (ha) {
    if (ha) {
      var l = ia;ha = !1;ia = null;
    } else r("198"), l = void 0;ja || (ja = !0, ka = l);
  }
}var oa = null,
    pa = {};
function qa() {
  if (oa) for (var a in pa) {
    var b = pa[a],
        c = oa.indexOf(a);-1 < c ? void 0 : r("96", a);if (!ra[c]) {
      b.extractEvents ? void 0 : r("97", a);ra[c] = b;c = b.eventTypes;for (var d in c) {
        var e = void 0;var f = c[d],
            g = b,
            h = d;sa.hasOwnProperty(h) ? r("99", h) : void 0;sa[h] = f;var k = f.phasedRegistrationNames;if (k) {
          for (e in k) {
            k.hasOwnProperty(e) && ta(k[e], g, h);
          }e = !0;
        } else f.registrationName ? (ta(f.registrationName, g, h), e = !0) : e = !1;e ? void 0 : r("98", d, a);
      }
    }
  }
}
function ta(a, b, c) {
  ua[a] ? r("100", a) : void 0;ua[a] = b;va[a] = b.eventTypes[c].dependencies;
}var ra = [],
    sa = {},
    ua = {},
    va = {},
    wa = null,
    xa = null,
    ya = null;function za(a, b, c, d) {
  b = a.type || "unknown-event";a.currentTarget = ya(d);na(b, c, void 0, a);a.currentTarget = null;
}function Aa(a, b) {
  null == b ? r("30") : void 0;if (null == a) return b;if (Array.isArray(a)) {
    if (Array.isArray(b)) return a.push.apply(a, b), a;a.push(b);return a;
  }return Array.isArray(b) ? [a].concat(b) : [a, b];
}
function Ba(a, b, c) {
  Array.isArray(a) ? a.forEach(b, c) : a && b.call(c, a);
}var Ca = null;function Da(a, b) {
  if (a) {
    var c = a._dispatchListeners,
        d = a._dispatchInstances;if (Array.isArray(c)) for (var e = 0; e < c.length && !a.isPropagationStopped(); e++) {
      za(a, b, c[e], d[e]);
    } else c && za(a, b, c, d);a._dispatchListeners = null;a._dispatchInstances = null;a.isPersistent() || a.constructor.release(a);
  }
}function Ea(a) {
  return Da(a, !0);
}function Fa(a) {
  return Da(a, !1);
}
var Ga = { injectEventPluginOrder: function injectEventPluginOrder(a) {
    oa ? r("101") : void 0;oa = Array.prototype.slice.call(a);qa();
  }, injectEventPluginsByName: function injectEventPluginsByName(a) {
    var b = !1,
        c;for (c in a) {
      if (a.hasOwnProperty(c)) {
        var d = a[c];pa.hasOwnProperty(c) && pa[c] === d || (pa[c] ? r("102", c) : void 0, pa[c] = d, b = !0);
      }
    }b && qa();
  } };
function Ha(a, b) {
  var c = a.stateNode;if (!c) return null;var d = wa(c);if (!d) return null;c = d[b];a: switch (b) {case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":
      (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));a = !d;break a;default:
      a = !1;}if (a) return null;c && "function" !== typeof c ? r("231", b, typeof c === "undefined" ? "undefined" : _typeof(c)) : void 0;
  return c;
}function Ia(a, b) {
  null !== a && (Ca = Aa(Ca, a));a = Ca;Ca = null;if (a && (b ? Ba(a, Ea) : Ba(a, Fa), Ca ? r("95") : void 0, ja)) throw b = ka, ja = !1, ka = null, b;
}var Ka = Math.random().toString(36).slice(2),
    La = "__reactInternalInstance$" + Ka,
    Ma = "__reactEventHandlers$" + Ka;function Na(a) {
  if (a[La]) return a[La];for (; !a[La];) {
    if (a.parentNode) a = a.parentNode;else return null;
  }a = a[La];return 5 === a.tag || 6 === a.tag ? a : null;
}function Oa(a) {
  a = a[La];return !a || 5 !== a.tag && 6 !== a.tag ? null : a;
}
function Pa(a) {
  if (5 === a.tag || 6 === a.tag) return a.stateNode;r("33");
}function Qa(a) {
  return a[Ma] || null;
}function Ra(a) {
  do {
    a = a.return;
  } while (a && 5 !== a.tag);return a ? a : null;
}function Sa(a, b, c) {
  if (b = Ha(a, c.dispatchConfig.phasedRegistrationNames[b])) c._dispatchListeners = Aa(c._dispatchListeners, b), c._dispatchInstances = Aa(c._dispatchInstances, a);
}
function Ta(a) {
  if (a && a.dispatchConfig.phasedRegistrationNames) {
    for (var b = a._targetInst, c = []; b;) {
      c.push(b), b = Ra(b);
    }for (b = c.length; 0 < b--;) {
      Sa(c[b], "captured", a);
    }for (b = 0; b < c.length; b++) {
      Sa(c[b], "bubbled", a);
    }
  }
}function Ua(a, b, c) {
  a && c && c.dispatchConfig.registrationName && (b = Ha(a, c.dispatchConfig.registrationName)) && (c._dispatchListeners = Aa(c._dispatchListeners, b), c._dispatchInstances = Aa(c._dispatchInstances, a));
}function Va(a) {
  a && a.dispatchConfig.registrationName && Ua(a._targetInst, null, a);
}
function Wa(a) {
  Ba(a, Ta);
}var Xa = !("undefined" === typeof window || !window.document || !window.document.createElement);function Ya(a, b) {
  var c = {};c[a.toLowerCase()] = b.toLowerCase();c["Webkit" + a] = "webkit" + b;c["Moz" + a] = "moz" + b;return c;
}var Za = { animationend: Ya("Animation", "AnimationEnd"), animationiteration: Ya("Animation", "AnimationIteration"), animationstart: Ya("Animation", "AnimationStart"), transitionend: Ya("Transition", "TransitionEnd") },
    $a = {},
    ab = {};
Xa && (ab = document.createElement("div").style, "AnimationEvent" in window || (delete Za.animationend.animation, delete Za.animationiteration.animation, delete Za.animationstart.animation), "TransitionEvent" in window || delete Za.transitionend.transition);function bb(a) {
  if ($a[a]) return $a[a];if (!Za[a]) return a;var b = Za[a],
      c;for (c in b) {
    if (b.hasOwnProperty(c) && c in ab) return $a[a] = b[c];
  }return a;
}
var cb = bb("animationend"),
    ib = bb("animationiteration"),
    jb = bb("animationstart"),
    kb = bb("transitionend"),
    lb = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    mb = null,
    nb = null,
    ob = null;
function pb() {
  if (ob) return ob;var a,
      b = nb,
      c = b.length,
      d,
      e = "value" in mb ? mb.value : mb.textContent,
      f = e.length;for (a = 0; a < c && b[a] === e[a]; a++) {}var g = c - a;for (d = 1; d <= g && b[c - d] === e[f - d]; d++) {}return ob = e.slice(a, 1 < d ? 1 - d : void 0);
}function qb() {
  return !0;
}function rb() {
  return !1;
}
function y(a, b, c, d) {
  this.dispatchConfig = a;this._targetInst = b;this.nativeEvent = c;a = this.constructor.Interface;for (var e in a) {
    a.hasOwnProperty(e) && ((b = a[e]) ? this[e] = b(c) : "target" === e ? this.target = d : this[e] = c[e]);
  }this.isDefaultPrevented = (null != c.defaultPrevented ? c.defaultPrevented : !1 === c.returnValue) ? qb : rb;this.isPropagationStopped = rb;return this;
}
n(y.prototype, { preventDefault: function preventDefault() {
    this.defaultPrevented = !0;var a = this.nativeEvent;a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), this.isDefaultPrevented = qb);
  }, stopPropagation: function stopPropagation() {
    var a = this.nativeEvent;a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), this.isPropagationStopped = qb);
  }, persist: function persist() {
    this.isPersistent = qb;
  }, isPersistent: rb, destructor: function destructor() {
    var a = this.constructor.Interface,
        b;for (b in a) {
      this[b] = null;
    }this.nativeEvent = this._targetInst = this.dispatchConfig = null;this.isPropagationStopped = this.isDefaultPrevented = rb;this._dispatchInstances = this._dispatchListeners = null;
  } });y.Interface = { type: null, target: null, currentTarget: function currentTarget() {
    return null;
  }, eventPhase: null, bubbles: null, cancelable: null, timeStamp: function timeStamp(a) {
    return a.timeStamp || Date.now();
  }, defaultPrevented: null, isTrusted: null };
y.extend = function (a) {
  function b() {}function c() {
    return d.apply(this, arguments);
  }var d = this;b.prototype = d.prototype;var e = new b();n(e, c.prototype);c.prototype = e;c.prototype.constructor = c;c.Interface = n({}, d.Interface, a);c.extend = d.extend;sb(c);return c;
};sb(y);function tb(a, b, c, d) {
  if (this.eventPool.length) {
    var e = this.eventPool.pop();this.call(e, a, b, c, d);return e;
  }return new this(a, b, c, d);
}function ub(a) {
  a instanceof this ? void 0 : r("279");a.destructor();10 > this.eventPool.length && this.eventPool.push(a);
}
function sb(a) {
  a.eventPool = [];a.getPooled = tb;a.release = ub;
}var vb = y.extend({ data: null }),
    wb = y.extend({ data: null }),
    xb = [9, 13, 27, 32],
    yb = Xa && "CompositionEvent" in window,
    zb = null;Xa && "documentMode" in document && (zb = document.documentMode);
var Ab = Xa && "TextEvent" in window && !zb,
    Bb = Xa && (!yb || zb && 8 < zb && 11 >= zb),
    Cb = String.fromCharCode(32),
    Db = { beforeInput: { phasedRegistrationNames: { bubbled: "onBeforeInput", captured: "onBeforeInputCapture" }, dependencies: ["compositionend", "keypress", "textInput", "paste"] }, compositionEnd: { phasedRegistrationNames: { bubbled: "onCompositionEnd", captured: "onCompositionEndCapture" }, dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ") }, compositionStart: { phasedRegistrationNames: { bubbled: "onCompositionStart",
      captured: "onCompositionStartCapture" }, dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ") }, compositionUpdate: { phasedRegistrationNames: { bubbled: "onCompositionUpdate", captured: "onCompositionUpdateCapture" }, dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ") } },
    Eb = !1;
function Fb(a, b) {
  switch (a) {case "keyup":
      return -1 !== xb.indexOf(b.keyCode);case "keydown":
      return 229 !== b.keyCode;case "keypress":case "mousedown":case "blur":
      return !0;default:
      return !1;}
}function Gb(a) {
  a = a.detail;return "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && "data" in a ? a.data : null;
}var Hb = !1;function Kb(a, b) {
  switch (a) {case "compositionend":
      return Gb(b);case "keypress":
      if (32 !== b.which) return null;Eb = !0;return Cb;case "textInput":
      return a = b.data, a === Cb && Eb ? null : a;default:
      return null;}
}
function Lb(a, b) {
  if (Hb) return "compositionend" === a || !yb && Fb(a, b) ? (a = pb(), ob = nb = mb = null, Hb = !1, a) : null;switch (a) {case "paste":
      return null;case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length) return b.char;if (b.which) return String.fromCharCode(b.which);
      }return null;case "compositionend":
      return Bb && "ko" !== b.locale ? null : b.data;default:
      return null;}
}
var Mb = { eventTypes: Db, extractEvents: function extractEvents(a, b, c, d) {
    var e = void 0;var f = void 0;if (yb) b: {
      switch (a) {case "compositionstart":
          e = Db.compositionStart;break b;case "compositionend":
          e = Db.compositionEnd;break b;case "compositionupdate":
          e = Db.compositionUpdate;break b;}e = void 0;
    } else Hb ? Fb(a, c) && (e = Db.compositionEnd) : "keydown" === a && 229 === c.keyCode && (e = Db.compositionStart);e ? (Bb && "ko" !== c.locale && (Hb || e !== Db.compositionStart ? e === Db.compositionEnd && Hb && (f = pb()) : (mb = d, nb = "value" in mb ? mb.value : mb.textContent, Hb = !0)), e = vb.getPooled(e, b, c, d), f ? e.data = f : (f = Gb(c), null !== f && (e.data = f)), Wa(e), f = e) : f = null;(a = Ab ? Kb(a, c) : Lb(a, c)) ? (b = wb.getPooled(Db.beforeInput, b, c, d), b.data = a, Wa(b)) : b = null;return null === f ? b : null === b ? f : [f, b];
  } },
    Nb = null,
    Ob = null,
    Pb = null;function Vb(a) {
  if (a = xa(a)) {
    "function" !== typeof Nb ? r("280") : void 0;var b = wa(a.stateNode);Nb(a.stateNode, a.type, b);
  }
}function Wb(a) {
  Ob ? Pb ? Pb.push(a) : Pb = [a] : Ob = a;
}function Xb() {
  if (Ob) {
    var a = Ob,
        b = Pb;Pb = Ob = null;Vb(a);if (b) for (a = 0; a < b.length; a++) {
      Vb(b[a]);
    }
  }
}
function Yb(a, b) {
  return a(b);
}function Zb(a, b, c) {
  return a(b, c);
}function $b() {}var ac = !1;function bc(a, b) {
  if (ac) return a(b);ac = !0;try {
    return Yb(a, b);
  } finally {
    if (ac = !1, null !== Ob || null !== Pb) $b(), Xb();
  }
}var cc = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };function dc(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();return "input" === b ? !!cc[a.type] : "textarea" === b ? !0 : !1;
}
function ec(a) {
  a = a.target || a.srcElement || window;a.correspondingUseElement && (a = a.correspondingUseElement);return 3 === a.nodeType ? a.parentNode : a;
}function fc(a) {
  if (!Xa) return !1;a = "on" + a;var b = a in document;b || (b = document.createElement("div"), b.setAttribute(a, "return;"), b = "function" === typeof b[a]);return b;
}function gc(a) {
  var b = a.type;return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
}
function hc(a) {
  var b = gc(a) ? "checked" : "value",
      c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b),
      d = "" + a[b];if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
    var e = c.get,
        f = c.set;Object.defineProperty(a, b, { configurable: !0, get: function get() {
        return e.call(this);
      }, set: function set(a) {
        d = "" + a;f.call(this, a);
      } });Object.defineProperty(a, b, { enumerable: c.enumerable });return { getValue: function getValue() {
        return d;
      }, setValue: function setValue(a) {
        d = "" + a;
      }, stopTracking: function stopTracking() {
        a._valueTracker = null;delete a[b];
      } };
  }
}function ic(a) {
  a._valueTracker || (a._valueTracker = hc(a));
}function jc(a) {
  if (!a) return !1;var b = a._valueTracker;if (!b) return !0;var c = b.getValue();var d = "";a && (d = gc(a) ? a.checked ? "true" : "false" : a.value);a = d;return a !== c ? (b.setValue(a), !0) : !1;
}
var kc = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    lc = /^(.*)[\\\/]/,
    D = "function" === typeof Symbol && Symbol.for,
    mc = D ? Symbol.for("react.element") : 60103,
    nc = D ? Symbol.for("react.portal") : 60106,
    oc = D ? Symbol.for("react.fragment") : 60107,
    pc = D ? Symbol.for("react.strict_mode") : 60108,
    qc = D ? Symbol.for("react.profiler") : 60114,
    rc = D ? Symbol.for("react.provider") : 60109,
    sc = D ? Symbol.for("react.context") : 60110,
    tc = D ? Symbol.for("react.concurrent_mode") : 60111,
    uc = D ? Symbol.for("react.forward_ref") : 60112,
    vc = D ? Symbol.for("react.suspense") : 60113,
    wc = D ? Symbol.for("react.memo") : 60115,
    xc = D ? Symbol.for("react.lazy") : 60116,
    yc = "function" === typeof Symbol && Symbol.iterator;function zc(a) {
  if (null === a || "object" !== (typeof a === "undefined" ? "undefined" : _typeof(a))) return null;a = yc && a[yc] || a["@@iterator"];return "function" === typeof a ? a : null;
}
function Ac(a) {
  if (null == a) return null;if ("function" === typeof a) return a.displayName || a.name || null;if ("string" === typeof a) return a;switch (a) {case tc:
      return "ConcurrentMode";case oc:
      return "Fragment";case nc:
      return "Portal";case qc:
      return "Profiler";case pc:
      return "StrictMode";case vc:
      return "Suspense";}if ("object" === (typeof a === "undefined" ? "undefined" : _typeof(a))) switch (a.$$typeof) {case sc:
      return "Context.Consumer";case rc:
      return "Context.Provider";case uc:
      var b = a.render;b = b.displayName || b.name || "";return a.displayName || ("" !== b ? "ForwardRef(" + b + ")" : "ForwardRef");case wc:
      return Ac(a.type);case xc:
      if (a = 1 === a._status ? a._result : null) return Ac(a);}return null;
}function Bc(a) {
  var b = "";do {
    a: switch (a.tag) {case 2:case 16:case 0:case 1:case 5:case 8:
        var c = a._debugOwner,
            d = a._debugSource,
            e = Ac(a.type);var f = null;c && (f = Ac(c.type));c = e;e = "";d ? e = " (at " + d.fileName.replace(lc, "") + ":" + d.lineNumber + ")" : f && (e = " (created by " + f + ")");f = "\n    in " + (c || "Unknown") + e;break a;default:
        f = "";}b += f;a = a.return;
  } while (a);return b;
}
var Cc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Dc = Object.prototype.hasOwnProperty,
    Ec = {},
    Fc = {};
function Gc(a) {
  if (Dc.call(Fc, a)) return !0;if (Dc.call(Ec, a)) return !1;if (Cc.test(a)) return Fc[a] = !0;Ec[a] = !0;return !1;
}function Hc(a, b, c, d) {
  if (null !== c && 0 === c.type) return !1;switch (typeof b === "undefined" ? "undefined" : _typeof(b)) {case "function":case "symbol":
      return !0;case "boolean":
      if (d) return !1;if (null !== c) return !c.acceptsBooleans;a = a.toLowerCase().slice(0, 5);return "data-" !== a && "aria-" !== a;default:
      return !1;}
}
function Ic(a, b, c, d) {
  if (null === b || "undefined" === typeof b || Hc(a, b, c, d)) return !0;if (d) return !1;if (null !== c) switch (c.type) {case 3:
      return !b;case 4:
      return !1 === b;case 5:
      return isNaN(b);case 6:
      return isNaN(b) || 1 > b;}return !1;
}function F(a, b, c, d, e) {
  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;this.attributeName = d;this.attributeNamespace = e;this.mustUseProperty = c;this.propertyName = a;this.type = b;
}var G = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function (a) {
  G[a] = new F(a, 0, !1, a, null);
}));[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((function (a) {
  var b = a[0];G[b] = new F(b, 1, !1, a[1], null);
}));["contentEditable", "draggable", "spellCheck", "value"].forEach((function (a) {
  G[a] = new F(a, 2, !1, a.toLowerCase(), null);
}));
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function (a) {
  G[a] = new F(a, 2, !1, a, null);
}));"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function (a) {
  G[a] = new F(a, 3, !1, a.toLowerCase(), null);
}));["checked", "multiple", "muted", "selected"].forEach((function (a) {
  G[a] = new F(a, 3, !0, a, null);
}));
["capture", "download"].forEach((function (a) {
  G[a] = new F(a, 4, !1, a, null);
}));["cols", "rows", "size", "span"].forEach((function (a) {
  G[a] = new F(a, 6, !1, a, null);
}));["rowSpan", "start"].forEach((function (a) {
  G[a] = new F(a, 5, !1, a.toLowerCase(), null);
}));var Mc = /[\-:]([a-z])/g;function Nc(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function (a) {
  var b = a.replace(Mc, Nc);G[b] = new F(b, 1, !1, a, null);
}));"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function (a) {
  var b = a.replace(Mc, Nc);G[b] = new F(b, 1, !1, a, "http://www.w3.org/1999/xlink");
}));["xml:base", "xml:lang", "xml:space"].forEach((function (a) {
  var b = a.replace(Mc, Nc);G[b] = new F(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace");
}));G.tabIndex = new F("tabIndex", 1, !1, "tabindex", null);
function Oc(a, b, c, d) {
  var e = G.hasOwnProperty(b) ? G[b] : null;var f = null !== e ? 0 === e.type : d ? !1 : !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1] ? !1 : !0;f || (Ic(b, c, e, d) && (c = null), d || null === e ? Gc(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c))));
}
function Pc(a) {
  switch (typeof a === "undefined" ? "undefined" : _typeof(a)) {case "boolean":case "number":case "object":case "string":case "undefined":
      return a;default:
      return "";}
}function Qc(a, b) {
  var c = b.checked;return n({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
}
function Rc(a, b) {
  var c = null == b.defaultValue ? "" : b.defaultValue,
      d = null != b.checked ? b.checked : b.defaultChecked;c = Pc(null != b.value ? b.value : c);a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
}function Sc(a, b) {
  b = b.checked;null != b && Oc(a, "checked", b, !1);
}
function Tc(a, b) {
  Sc(a, b);var c = Pc(b.value),
      d = b.type;if (null != c) {
    if ("number" === d) {
      if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
    } else a.value !== "" + c && (a.value = "" + c);
  } else if ("submit" === d || "reset" === d) {
    a.removeAttribute("value");return;
  }b.hasOwnProperty("value") ? Uc(a, b.type, c) : b.hasOwnProperty("defaultValue") && Uc(a, b.type, Pc(b.defaultValue));null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
}
function bd(a, b, c) {
  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
    var d = b.type;if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;b = "" + a._wrapperState.initialValue;c || b === a.value || (a.value = b);a.defaultValue = b;
  }c = a.name;"" !== c && (a.name = "");a.defaultChecked = !a.defaultChecked;a.defaultChecked = !!a._wrapperState.initialChecked;"" !== c && (a.name = c);
}
function Uc(a, b, c) {
  if ("number" !== b || a.ownerDocument.activeElement !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}var cd = { change: { phasedRegistrationNames: { bubbled: "onChange", captured: "onChangeCapture" }, dependencies: "blur change click focus input keydown keyup selectionchange".split(" ") } };function dd(a, b, c) {
  a = y.getPooled(cd.change, a, b, c);a.type = "change";Wb(c);Wa(a);return a;
}var ed = null,
    fd = null;function gd(a) {
  Ia(a, !1);
}
function hd(a) {
  var b = Pa(a);if (jc(b)) return a;
}function id(a, b) {
  if ("change" === a) return b;
}var jd = !1;Xa && (jd = fc("input") && (!document.documentMode || 9 < document.documentMode));function kd() {
  ed && (ed.detachEvent("onpropertychange", ld), fd = ed = null);
}function ld(a) {
  "value" === a.propertyName && hd(fd) && (a = dd(fd, a, ec(a)), bc(gd, a));
}function md(a, b, c) {
  "focus" === a ? (kd(), ed = b, fd = c, ed.attachEvent("onpropertychange", ld)) : "blur" === a && kd();
}function nd(a) {
  if ("selectionchange" === a || "keyup" === a || "keydown" === a) return hd(fd);
}
function od(a, b) {
  if ("click" === a) return hd(b);
}function pd(a, b) {
  if ("input" === a || "change" === a) return hd(b);
}
var qd = { eventTypes: cd, _isInputEventSupported: jd, extractEvents: function extractEvents(a, b, c, d) {
    var e = b ? Pa(b) : window,
        f = void 0,
        g = void 0,
        h = e.nodeName && e.nodeName.toLowerCase();"select" === h || "input" === h && "file" === e.type ? f = id : dc(e) ? jd ? f = pd : (f = nd, g = md) : (h = e.nodeName) && "input" === h.toLowerCase() && ("checkbox" === e.type || "radio" === e.type) && (f = od);if (f && (f = f(a, b))) return dd(f, c, d);g && g(a, e, b);"blur" === a && (a = e._wrapperState) && a.controlled && "number" === e.type && Uc(e, "number", e.value);
  } },
    rd = y.extend({ view: null, detail: null }),
    sd = { Alt: "altKey",
  Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };function td(a) {
  var b = this.nativeEvent;return b.getModifierState ? b.getModifierState(a) : (a = sd[a]) ? !!b[a] : !1;
}function ud() {
  return td;
}
var vd = 0,
    wd = 0,
    xd = !1,
    yd = !1,
    zd = rd.extend({ screenX: null, screenY: null, clientX: null, clientY: null, pageX: null, pageY: null, ctrlKey: null, shiftKey: null, altKey: null, metaKey: null, getModifierState: ud, button: null, buttons: null, relatedTarget: function relatedTarget(a) {
    return a.relatedTarget || (a.fromElement === a.srcElement ? a.toElement : a.fromElement);
  }, movementX: function movementX(a) {
    if ("movementX" in a) return a.movementX;var b = vd;vd = a.screenX;return xd ? "mousemove" === a.type ? a.screenX - b : 0 : (xd = !0, 0);
  }, movementY: function movementY(a) {
    if ("movementY" in a) return a.movementY;
    var b = wd;wd = a.screenY;return yd ? "mousemove" === a.type ? a.screenY - b : 0 : (yd = !0, 0);
  } }),
    Ad = zd.extend({ pointerId: null, width: null, height: null, pressure: null, tangentialPressure: null, tiltX: null, tiltY: null, twist: null, pointerType: null, isPrimary: null }),
    Bd = { mouseEnter: { registrationName: "onMouseEnter", dependencies: ["mouseout", "mouseover"] }, mouseLeave: { registrationName: "onMouseLeave", dependencies: ["mouseout", "mouseover"] }, pointerEnter: { registrationName: "onPointerEnter", dependencies: ["pointerout", "pointerover"] }, pointerLeave: { registrationName: "onPointerLeave",
    dependencies: ["pointerout", "pointerover"] } },
    Cd = { eventTypes: Bd, extractEvents: function extractEvents(a, b, c, d) {
    var e = "mouseover" === a || "pointerover" === a,
        f = "mouseout" === a || "pointerout" === a;if (e && (c.relatedTarget || c.fromElement) || !f && !e) return null;e = d.window === d ? d : (e = d.ownerDocument) ? e.defaultView || e.parentWindow : window;f ? (f = b, b = (b = c.relatedTarget || c.toElement) ? Na(b) : null) : f = null;if (f === b) return null;var g = void 0,
        h = void 0,
        k = void 0,
        l = void 0;if ("mouseout" === a || "mouseover" === a) g = zd, h = Bd.mouseLeave, k = Bd.mouseEnter, l = "mouse";else if ("pointerout" === a || "pointerover" === a) g = Ad, h = Bd.pointerLeave, k = Bd.pointerEnter, l = "pointer";var m = null == f ? e : Pa(f);e = null == b ? e : Pa(b);a = g.getPooled(h, f, c, d);a.type = l + "leave";a.target = m;a.relatedTarget = e;c = g.getPooled(k, b, c, d);c.type = l + "enter";c.target = e;c.relatedTarget = m;d = b;if (f && d) a: {
      b = f;e = d;l = 0;for (g = b; g; g = Ra(g)) {
        l++;
      }g = 0;for (k = e; k; k = Ra(k)) {
        g++;
      }for (; 0 < l - g;) {
        b = Ra(b), l--;
      }for (; 0 < g - l;) {
        e = Ra(e), g--;
      }for (; l--;) {
        if (b === e || b === e.alternate) break a;b = Ra(b);e = Ra(e);
      }b = null;
    } else b = null;e = b;for (b = []; f && f !== e;) {
      l = f.alternate;if (null !== l && l === e) break;b.push(f);f = Ra(f);
    }for (f = []; d && d !== e;) {
      l = d.alternate;if (null !== l && l === e) break;f.push(d);d = Ra(d);
    }for (d = 0; d < b.length; d++) {
      Ua(b[d], "bubbled", a);
    }for (d = f.length; 0 < d--;) {
      Ua(f[d], "captured", c);
    }return [a, c];
  } },
    Dd = Object.prototype.hasOwnProperty;function Ed(a, b) {
  return a === b ? 0 !== a || 0 !== b || 1 / a === 1 / b : a !== a && b !== b;
}
function Fd(a, b) {
  if (Ed(a, b)) return !0;if ("object" !== (typeof a === "undefined" ? "undefined" : _typeof(a)) || null === a || "object" !== (typeof b === "undefined" ? "undefined" : _typeof(b)) || null === b) return !1;var c = Object.keys(a),
      d = Object.keys(b);if (c.length !== d.length) return !1;for (d = 0; d < c.length; d++) {
    if (!Dd.call(b, c[d]) || !Ed(a[c[d]], b[c[d]])) return !1;
  }return !0;
}function Gd(a) {
  var b = a;if (a.alternate) for (; b.return;) {
    b = b.return;
  } else {
    if (0 !== (b.effectTag & 2)) return 1;for (; b.return;) {
      if (b = b.return, 0 !== (b.effectTag & 2)) return 1;
    }
  }return 3 === b.tag ? 2 : 3;
}function Hd(a) {
  2 !== Gd(a) ? r("188") : void 0;
}
function Id(a) {
  var b = a.alternate;if (!b) return b = Gd(a), 3 === b ? r("188") : void 0, 1 === b ? null : a;for (var c = a, d = b;;) {
    var e = c.return,
        f = e ? e.alternate : null;if (!e || !f) break;if (e.child === f.child) {
      for (var g = e.child; g;) {
        if (g === c) return Hd(e), a;if (g === d) return Hd(e), b;g = g.sibling;
      }r("188");
    }if (c.return !== d.return) c = e, d = f;else {
      g = !1;for (var h = e.child; h;) {
        if (h === c) {
          g = !0;c = e;d = f;break;
        }if (h === d) {
          g = !0;d = e;c = f;break;
        }h = h.sibling;
      }if (!g) {
        for (h = f.child; h;) {
          if (h === c) {
            g = !0;c = f;d = e;break;
          }if (h === d) {
            g = !0;d = f;c = e;break;
          }h = h.sibling;
        }g ? void 0 : r("189");
      }
    }c.alternate !== d ? r("190") : void 0;
  }3 !== c.tag ? r("188") : void 0;return c.stateNode.current === c ? a : b;
}function Jd(a) {
  a = Id(a);if (!a) return null;for (var b = a;;) {
    if (5 === b.tag || 6 === b.tag) return b;if (b.child) b.child.return = b, b = b.child;else {
      if (b === a) break;for (; !b.sibling;) {
        if (!b.return || b.return === a) return null;b = b.return;
      }b.sibling.return = b.return;b = b.sibling;
    }
  }return null;
}
var Kd = y.extend({ animationName: null, elapsedTime: null, pseudoElement: null }),
    Ld = y.extend({ clipboardData: function clipboardData(a) {
    return "clipboardData" in a ? a.clipboardData : window.clipboardData;
  } }),
    Md = rd.extend({ relatedTarget: null });function Nd(a) {
  var b = a.keyCode;"charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;10 === a && (a = 13);return 32 <= a || 13 === a ? a : 0;
}
var Od = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
    Pd = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4",
  116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" },
    Qd = rd.extend({ key: function key(a) {
    if (a.key) {
      var b = Od[a.key] || a.key;if ("Unidentified" !== b) return b;
    }return "keypress" === a.type ? (a = Nd(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Pd[a.keyCode] || "Unidentified" : "";
  }, location: null, ctrlKey: null, shiftKey: null, altKey: null, metaKey: null, repeat: null, locale: null, getModifierState: ud, charCode: function charCode(a) {
    return "keypress" === a.type ? Nd(a) : 0;
  }, keyCode: function keyCode(a) {
    return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
  }, which: function which(a) {
    return "keypress" === a.type ? Nd(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
  } }),
    Rd = zd.extend({ dataTransfer: null }),
    Sd = rd.extend({ touches: null, targetTouches: null, changedTouches: null, altKey: null, metaKey: null, ctrlKey: null, shiftKey: null, getModifierState: ud }),
    Td = y.extend({ propertyName: null, elapsedTime: null, pseudoElement: null }),
    Ud = zd.extend({ deltaX: function deltaX(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  }, deltaY: function deltaY(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  }, deltaZ: null, deltaMode: null }),
    Vd = [["abort", "abort"], [cb, "animationEnd"], [ib, "animationIteration"], [jb, "animationStart"], ["canplay", "canPlay"], ["canplaythrough", "canPlayThrough"], ["drag", "drag"], ["dragenter", "dragEnter"], ["dragexit", "dragExit"], ["dragleave", "dragLeave"], ["dragover", "dragOver"], ["durationchange", "durationChange"], ["emptied", "emptied"], ["encrypted", "encrypted"], ["ended", "ended"], ["error", "error"], ["gotpointercapture", "gotPointerCapture"], ["load", "load"], ["loadeddata", "loadedData"], ["loadedmetadata", "loadedMetadata"], ["loadstart", "loadStart"], ["lostpointercapture", "lostPointerCapture"], ["mousemove", "mouseMove"], ["mouseout", "mouseOut"], ["mouseover", "mouseOver"], ["playing", "playing"], ["pointermove", "pointerMove"], ["pointerout", "pointerOut"], ["pointerover", "pointerOver"], ["progress", "progress"], ["scroll", "scroll"], ["seeking", "seeking"], ["stalled", "stalled"], ["suspend", "suspend"], ["timeupdate", "timeUpdate"], ["toggle", "toggle"], ["touchmove", "touchMove"], [kb, "transitionEnd"], ["waiting", "waiting"], ["wheel", "wheel"]],
    Wd = {},
    Xd = {};function Yd(a, b) {
  var c = a[0];a = a[1];var d = "on" + (a[0].toUpperCase() + a.slice(1));b = { phasedRegistrationNames: { bubbled: d, captured: d + "Capture" }, dependencies: [c], isInteractive: b };Wd[a] = b;Xd[c] = b;
}
[["blur", "blur"], ["cancel", "cancel"], ["click", "click"], ["close", "close"], ["contextmenu", "contextMenu"], ["copy", "copy"], ["cut", "cut"], ["auxclick", "auxClick"], ["dblclick", "doubleClick"], ["dragend", "dragEnd"], ["dragstart", "dragStart"], ["drop", "drop"], ["focus", "focus"], ["input", "input"], ["invalid", "invalid"], ["keydown", "keyDown"], ["keypress", "keyPress"], ["keyup", "keyUp"], ["mousedown", "mouseDown"], ["mouseup", "mouseUp"], ["paste", "paste"], ["pause", "pause"], ["play", "play"], ["pointercancel", "pointerCancel"], ["pointerdown", "pointerDown"], ["pointerup", "pointerUp"], ["ratechange", "rateChange"], ["reset", "reset"], ["seeked", "seeked"], ["submit", "submit"], ["touchcancel", "touchCancel"], ["touchend", "touchEnd"], ["touchstart", "touchStart"], ["volumechange", "volumeChange"]].forEach((function (a) {
  Yd(a, !0);
}));Vd.forEach((function (a) {
  Yd(a, !1);
}));
var Zd = { eventTypes: Wd, isInteractiveTopLevelEventType: function isInteractiveTopLevelEventType(a) {
    a = Xd[a];return void 0 !== a && !0 === a.isInteractive;
  }, extractEvents: function extractEvents(a, b, c, d) {
    var e = Xd[a];if (!e) return null;switch (a) {case "keypress":
        if (0 === Nd(c)) return null;case "keydown":case "keyup":
        a = Qd;break;case "blur":case "focus":
        a = Md;break;case "click":
        if (2 === c.button) return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":
        a = zd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":
        a = Rd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":
        a = Sd;break;case cb:case ib:case jb:
        a = Kd;break;case kb:
        a = Td;break;case "scroll":
        a = rd;break;case "wheel":
        a = Ud;break;case "copy":case "cut":case "paste":
        a = Ld;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":
        a = Ad;break;default:
        a = y;}b = a.getPooled(e, b, c, d);Wa(b);return b;
  } },
    $d = Zd.isInteractiveTopLevelEventType,
    ae = [];function be(a) {
  var b = a.targetInst,
      c = b;do {
    if (!c) {
      a.ancestors.push(c);break;
    }var d;for (d = c; d.return;) {
      d = d.return;
    }d = 3 !== d.tag ? null : d.stateNode.containerInfo;if (!d) break;a.ancestors.push(c);c = Na(d);
  } while (c);for (c = 0; c < a.ancestors.length; c++) {
    b = a.ancestors[c];var e = ec(a.nativeEvent);d = a.topLevelType;for (var f = a.nativeEvent, g = null, h = 0; h < ra.length; h++) {
      var k = ra[h];k && (k = k.extractEvents(d, b, f, e)) && (g = Aa(g, k));
    }Ia(g, !1);
  }
}var ce = !0;
function H(a, b) {
  if (!b) return null;var c = ($d(a) ? de : ee).bind(null, a);b.addEventListener(a, c, !1);
}function ge(a, b) {
  if (!b) return null;var c = ($d(a) ? de : ee).bind(null, a);b.addEventListener(a, c, !0);
}function de(a, b) {
  Zb(ee, a, b);
}
function ee(a, b) {
  if (ce) {
    var c = ec(b);c = Na(c);null === c || "number" !== typeof c.tag || 2 === Gd(c) || (c = null);if (ae.length) {
      var d = ae.pop();d.topLevelType = a;d.nativeEvent = b;d.targetInst = c;a = d;
    } else a = { topLevelType: a, nativeEvent: b, targetInst: c, ancestors: [] };try {
      bc(be, a);
    } finally {
      a.topLevelType = null, a.nativeEvent = null, a.targetInst = null, a.ancestors.length = 0, 10 > ae.length && ae.push(a);
    }
  }
}var he = {},
    ie = 0,
    je = "_reactListenersID" + ("" + Math.random()).slice(2);
function ke(a) {
  Object.prototype.hasOwnProperty.call(a, je) || (a[je] = ie++, he[a[je]] = {});return he[a[je]];
}function le(a) {
  a = a || ("undefined" !== typeof document ? document : void 0);if ("undefined" === typeof a) return null;try {
    return a.activeElement || a.body;
  } catch (b) {
    return a.body;
  }
}function me(a) {
  for (; a && a.firstChild;) {
    a = a.firstChild;
  }return a;
}
function ne(a, b) {
  var c = me(a);a = 0;for (var d; c;) {
    if (3 === c.nodeType) {
      d = a + c.textContent.length;if (a <= b && d >= b) return { node: c, offset: b - a };a = d;
    }a: {
      for (; c;) {
        if (c.nextSibling) {
          c = c.nextSibling;break a;
        }c = c.parentNode;
      }c = void 0;
    }c = me(c);
  }
}function oe(a, b) {
  return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? oe(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
}
function pe() {
  for (var a = window, b = le(); b instanceof a.HTMLIFrameElement;) {
    try {
      a = b.contentDocument.defaultView;
    } catch (c) {
      break;
    }b = le(a.document);
  }return b;
}function qe(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
}
var re = Xa && "documentMode" in document && 11 >= document.documentMode,
    se = { select: { phasedRegistrationNames: { bubbled: "onSelect", captured: "onSelectCapture" }, dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ") } },
    te = null,
    ue = null,
    He = null,
    Ie = !1;
function Je(a, b) {
  var c = b.window === b ? b.document : 9 === b.nodeType ? b : b.ownerDocument;if (Ie || null == te || te !== le(c)) return null;c = te;"selectionStart" in c && qe(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = { anchorNode: c.anchorNode, anchorOffset: c.anchorOffset, focusNode: c.focusNode, focusOffset: c.focusOffset });return He && Fd(He, c) ? null : (He = c, a = y.getPooled(se.select, ue, a, b), a.type = "select", a.target = te, Wa(a), a);
}
var Ke = { eventTypes: se, extractEvents: function extractEvents(a, b, c, d) {
    var e = d.window === d ? d.document : 9 === d.nodeType ? d : d.ownerDocument,
        f;if (!(f = !e)) {
      a: {
        e = ke(e);f = va.onSelect;for (var g = 0; g < f.length; g++) {
          var h = f[g];if (!e.hasOwnProperty(h) || !e[h]) {
            e = !1;break a;
          }
        }e = !0;
      }f = !e;
    }if (f) return null;e = b ? Pa(b) : window;switch (a) {case "focus":
        if (dc(e) || "true" === e.contentEditable) te = e, ue = b, He = null;break;case "blur":
        He = ue = te = null;break;case "mousedown":
        Ie = !0;break;case "contextmenu":case "mouseup":case "dragend":
        return Ie = !1, Je(c, d);case "selectionchange":
        if (re) break;
      case "keydown":case "keyup":
        return Je(c, d);}return null;
  } };Ga.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));wa = Qa;xa = Oa;ya = Pa;Ga.injectEventPluginsByName({ SimpleEventPlugin: Zd, EnterLeaveEventPlugin: Cd, ChangeEventPlugin: qd, SelectEventPlugin: Ke, BeforeInputEventPlugin: Mb });function Le(a) {
  var b = "";aa.Children.forEach(a, (function (a) {
    null != a && (b += a);
  }));return b;
}
function Me(a, b) {
  a = n({ children: void 0 }, b);if (b = Le(b.children)) a.children = b;return a;
}function Ne(a, b, c, d) {
  a = a.options;if (b) {
    b = {};for (var e = 0; e < c.length; e++) {
      b["$" + c[e]] = !0;
    }for (c = 0; c < a.length; c++) {
      e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0);
    }
  } else {
    c = "" + Pc(c);b = null;for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = !0;d && (a[e].defaultSelected = !0);return;
      }null !== b || a[e].disabled || (b = a[e]);
    }null !== b && (b.selected = !0);
  }
}
function Oe(a, b) {
  null != b.dangerouslySetInnerHTML ? r("91") : void 0;return n({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
}function Pe(a, b) {
  var c = b.value;null == c && (c = b.defaultValue, b = b.children, null != b && (null != c ? r("92") : void 0, Array.isArray(b) && (1 >= b.length ? void 0 : r("93"), b = b[0]), c = b), null == c && (c = ""));a._wrapperState = { initialValue: Pc(c) };
}
function Qe(a, b) {
  var c = Pc(b.value),
      d = Pc(b.defaultValue);null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));null != d && (a.defaultValue = "" + d);
}function Re(a) {
  var b = a.textContent;b === a._wrapperState.initialValue && (a.value = b);
}var Se = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
function Te(a) {
  switch (a) {case "svg":
      return "http://www.w3.org/2000/svg";case "math":
      return "http://www.w3.org/1998/Math/MathML";default:
      return "http://www.w3.org/1999/xhtml";}
}function Ue(a, b) {
  return null == a || "http://www.w3.org/1999/xhtml" === a ? Te(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
}
var Ve = void 0,
    We = (function (a) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (b, c, d, e) {
    MSApp.execUnsafeLocalFunction((function () {
      return a(b, c, d, e);
    }));
  } : a;
})((function (a, b) {
  if (a.namespaceURI !== Se.svg || "innerHTML" in a) a.innerHTML = b;else {
    Ve = Ve || document.createElement("div");Ve.innerHTML = "<svg>" + b + "</svg>";for (b = Ve.firstChild; a.firstChild;) {
      a.removeChild(a.firstChild);
    }for (; b.firstChild;) {
      a.appendChild(b.firstChild);
    }
  }
}));
function Xe(a, b) {
  if (b) {
    var c = a.firstChild;if (c && c === a.lastChild && 3 === c.nodeType) {
      c.nodeValue = b;return;
    }
  }a.textContent = b;
}
var Ye = { animationIterationCount: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0,
  floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 },
    Ze = ["Webkit", "ms", "Moz", "O"];Object.keys(Ye).forEach((function (a) {
  Ze.forEach((function (b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);Ye[b] = Ye[a];
  }));
}));
function $e(a, b) {
  a = a.style;for (var c in b) {
    if (b.hasOwnProperty(c)) {
      var d = 0 === c.indexOf("--");var e = c;var f = b[c];e = null == f || "boolean" === typeof f || "" === f ? "" : d || "number" !== typeof f || 0 === f || Ye.hasOwnProperty(e) && Ye[e] ? ("" + f).trim() : f + "px";"float" === c && (c = "cssFloat");d ? a.setProperty(c, e) : a[c] = e;
    }
  }
}var af = n({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function bf(a, b) {
  b && (af[a] && (null != b.children || null != b.dangerouslySetInnerHTML ? r("137", a, "") : void 0), null != b.dangerouslySetInnerHTML && (null != b.children ? r("60") : void 0, "object" === _typeof(b.dangerouslySetInnerHTML) && "__html" in b.dangerouslySetInnerHTML ? void 0 : r("61")), null != b.style && "object" !== _typeof(b.style) ? r("62", "") : void 0);
}
function cf(a, b) {
  if (-1 === a.indexOf("-")) return "string" === typeof b.is;switch (a) {case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":
      return !1;default:
      return !0;}
}
function df(a, b) {
  a = 9 === a.nodeType || 11 === a.nodeType ? a : a.ownerDocument;var c = ke(a);b = va[b];for (var d = 0; d < b.length; d++) {
    var e = b[d];if (!c.hasOwnProperty(e) || !c[e]) {
      switch (e) {case "scroll":
          ge("scroll", a);break;case "focus":case "blur":
          ge("focus", a);ge("blur", a);c.blur = !0;c.focus = !0;break;case "cancel":case "close":
          fc(e) && ge(e, a);break;case "invalid":case "submit":case "reset":
          break;default:
          -1 === lb.indexOf(e) && H(e, a);}c[e] = !0;
    }
  }
}function ef() {}var ff = null,
    gf = null;
function hf(a, b) {
  switch (a) {case "button":case "input":case "select":case "textarea":
      return !!b.autoFocus;}return !1;
}function jf(a, b) {
  return "textarea" === a || "option" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === _typeof(b.dangerouslySetInnerHTML) && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
}var kf = setTimeout,
    lf = clearTimeout;function mf(a) {
  for (a = a.nextSibling; a && 1 !== a.nodeType && 3 !== a.nodeType;) {
    a = a.nextSibling;
  }return a;
}
function nf(a) {
  for (a = a.firstChild; a && 1 !== a.nodeType && 3 !== a.nodeType;) {
    a = a.nextSibling;
  }return a;
}new Set();var of = [],
    pf = -1;function I(a) {
  0 > pf || (a.current = of[pf], of[pf] = null, pf--);
}function J(a, b) {
  pf++;of[pf] = a.current;a.current = b;
}var qf = {},
    K = { current: qf },
    L = { current: !1 },
    rf = qf;
function sf(a, b) {
  var c = a.type.contextTypes;if (!c) return qf;var d = a.stateNode;if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;var e = {},
      f;for (f in c) {
    e[f] = b[f];
  }d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);return e;
}function M(a) {
  a = a.childContextTypes;return null !== a && void 0 !== a;
}function tf(a) {
  I(L, a);I(K, a);
}function uf(a) {
  I(L, a);I(K, a);
}
function vf(a, b, c) {
  K.current !== qf ? r("168") : void 0;J(K, b, a);J(L, c, a);
}function wf(a, b, c) {
  var d = a.stateNode;a = b.childContextTypes;if ("function" !== typeof d.getChildContext) return c;d = d.getChildContext();for (var e in d) {
    e in a ? void 0 : r("108", Ac(b) || "Unknown", e);
  }return n({}, c, d);
}function xf(a) {
  var b = a.stateNode;b = b && b.__reactInternalMemoizedMergedChildContext || qf;rf = K.current;J(K, b, a);J(L, L.current, a);return !0;
}
function yf(a, b, c) {
  var d = a.stateNode;d ? void 0 : r("169");c ? (b = wf(a, b, rf), d.__reactInternalMemoizedMergedChildContext = b, I(L, a), I(K, a), J(K, b, a)) : I(L, a);J(L, c, a);
}var zf = null,
    Af = null;function Bf(a) {
  return function (b) {
    try {
      return a(b);
    } catch (c) {}
  };
}
function Cf(a) {
  if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;var b = __REACT_DEVTOOLS_GLOBAL_HOOK__;if (b.isDisabled || !b.supportsFiber) return !0;try {
    var c = b.inject(a);zf = Bf((function (a) {
      return b.onCommitFiberRoot(c, a);
    }));Af = Bf((function (a) {
      return b.onCommitFiberUnmount(c, a);
    }));
  } catch (d) {}return !0;
}
function Df(a, b, c, d) {
  this.tag = a;this.key = c;this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;this.index = 0;this.ref = null;this.pendingProps = b;this.firstContextDependency = this.memoizedState = this.updateQueue = this.memoizedProps = null;this.mode = d;this.effectTag = 0;this.lastEffect = this.firstEffect = this.nextEffect = null;this.childExpirationTime = this.expirationTime = 0;this.alternate = null;
}function N(a, b, c, d) {
  return new Df(a, b, c, d);
}
function Ef(a) {
  a = a.prototype;return !(!a || !a.isReactComponent);
}function Ff(a) {
  if ("function" === typeof a) return Ef(a) ? 1 : 0;if (void 0 !== a && null !== a) {
    a = a.$$typeof;if (a === uc) return 11;if (a === wc) return 14;
  }return 2;
}
function Gf(a, b) {
  var c = a.alternate;null === c ? (c = N(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.effectTag = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);c.childExpirationTime = a.childExpirationTime;c.expirationTime = a.expirationTime;c.child = a.child;c.memoizedProps = a.memoizedProps;c.memoizedState = a.memoizedState;c.updateQueue = a.updateQueue;c.firstContextDependency = a.firstContextDependency;c.sibling = a.sibling;
  c.index = a.index;c.ref = a.ref;return c;
}
function Hf(a, b, c, d, e, f) {
  var g = 2;d = a;if ("function" === typeof a) Ef(a) && (g = 1);else if ("string" === typeof a) g = 5;else a: switch (a) {case oc:
      return If(c.children, e, f, b);case tc:
      return Jf(c, e | 3, f, b);case pc:
      return Jf(c, e | 2, f, b);case qc:
      return a = N(12, c, b, e | 4), a.elementType = qc, a.type = qc, a.expirationTime = f, a;case vc:
      return a = N(13, c, b, e), a.elementType = vc, a.type = vc, a.expirationTime = f, a;default:
      if ("object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && null !== a) switch (a.$$typeof) {case rc:
          g = 10;break a;case sc:
          g = 9;break a;case uc:
          g = 11;break a;case wc:
          g = 14;break a;case xc:
          g = 16;d = null;break a;}r("130", null == a ? a : typeof a === "undefined" ? "undefined" : _typeof(a), "");}b = N(g, c, b, e);b.elementType = a;b.type = d;b.expirationTime = f;return b;
}function If(a, b, c, d) {
  a = N(7, a, d, b);a.expirationTime = c;return a;
}function Jf(a, b, c, d) {
  a = N(8, a, d, b);b = 0 === (b & 1) ? pc : tc;a.elementType = b;a.type = b;a.expirationTime = c;return a;
}function Kf(a, b, c) {
  a = N(6, a, null, b);a.expirationTime = c;return a;
}
function Lf(a, b, c) {
  b = N(4, null !== a.children ? a.children : [], a.key, b);b.expirationTime = c;b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };return b;
}function Mf(a, b) {
  a.didError = !1;var c = a.earliestPendingTime;0 === c ? a.earliestPendingTime = a.latestPendingTime = b : c > b ? a.earliestPendingTime = b : a.latestPendingTime < b && (a.latestPendingTime = b);Nf(b, a);
}
function Of(a, b) {
  a.didError = !1;var c = a.latestPingedTime;0 !== c && c <= b && (a.latestPingedTime = 0);c = a.earliestPendingTime;var d = a.latestPendingTime;c === b ? a.earliestPendingTime = d === b ? a.latestPendingTime = 0 : d : d === b && (a.latestPendingTime = c);c = a.earliestSuspendedTime;d = a.latestSuspendedTime;0 === c ? a.earliestSuspendedTime = a.latestSuspendedTime = b : c > b ? a.earliestSuspendedTime = b : d < b && (a.latestSuspendedTime = b);Nf(b, a);
}
function Pf(a, b) {
  var c = a.earliestPendingTime;a = a.earliestSuspendedTime;if (0 === b || 0 !== c && c < b) b = c;if (0 === b || 0 !== a && a < b) b = a;return b;
}function Nf(a, b) {
  var c = b.earliestSuspendedTime,
      d = b.latestSuspendedTime,
      e = b.earliestPendingTime,
      f = b.latestPingedTime;e = 0 !== e ? e : f;0 === e && (0 === a || d > a) && (e = d);a = e;0 !== a && 0 !== c && c < a && (a = c);b.nextExpirationTimeToWorkOn = e;b.expirationTime = a;
}var Qf = !1;
function Rf(a) {
  return { baseState: a, firstUpdate: null, lastUpdate: null, firstCapturedUpdate: null, lastCapturedUpdate: null, firstEffect: null, lastEffect: null, firstCapturedEffect: null, lastCapturedEffect: null };
}function Sf(a) {
  return { baseState: a.baseState, firstUpdate: a.firstUpdate, lastUpdate: a.lastUpdate, firstCapturedUpdate: null, lastCapturedUpdate: null, firstEffect: null, lastEffect: null, firstCapturedEffect: null, lastCapturedEffect: null };
}
function Tf(a) {
  return { expirationTime: a, tag: 0, payload: null, callback: null, next: null, nextEffect: null };
}function Uf(a, b) {
  null === a.lastUpdate ? a.firstUpdate = a.lastUpdate = b : (a.lastUpdate.next = b, a.lastUpdate = b);
}
function Vf(a, b) {
  var c = a.alternate;if (null === c) {
    var d = a.updateQueue;var e = null;null === d && (d = a.updateQueue = Rf(a.memoizedState));
  } else d = a.updateQueue, e = c.updateQueue, null === d ? null === e ? (d = a.updateQueue = Rf(a.memoizedState), e = c.updateQueue = Rf(c.memoizedState)) : d = a.updateQueue = Sf(e) : null === e && (e = c.updateQueue = Sf(d));null === e || d === e ? Uf(d, b) : null === d.lastUpdate || null === e.lastUpdate ? (Uf(d, b), Uf(e, b)) : (Uf(d, b), e.lastUpdate = b);
}
function Wf(a, b) {
  var c = a.updateQueue;c = null === c ? a.updateQueue = Rf(a.memoizedState) : Xf(a, c);null === c.lastCapturedUpdate ? c.firstCapturedUpdate = c.lastCapturedUpdate = b : (c.lastCapturedUpdate.next = b, c.lastCapturedUpdate = b);
}function Xf(a, b) {
  var c = a.alternate;null !== c && b === c.updateQueue && (b = a.updateQueue = Sf(b));return b;
}
function Yf(a, b, c, d, e, f) {
  switch (c.tag) {case 1:
      return a = c.payload, "function" === typeof a ? a.call(f, d, e) : a;case 3:
      a.effectTag = a.effectTag & -1025 | 64;case 0:
      a = c.payload;e = "function" === typeof a ? a.call(f, d, e) : a;if (null === e || void 0 === e) break;return n({}, d, e);case 2:
      Qf = !0;}return d;
}
function Zf(a, b, c, d, e) {
  Qf = !1;b = Xf(a, b);for (var f = b.baseState, g = null, h = 0, k = b.firstUpdate, l = f; null !== k;) {
    var m = k.expirationTime;if (m > e) {
      if (null === g && (g = k, f = l), 0 === h || h > m) h = m;
    } else l = Yf(a, b, k, l, c, d), null !== k.callback && (a.effectTag |= 32, k.nextEffect = null, null === b.lastEffect ? b.firstEffect = b.lastEffect = k : (b.lastEffect.nextEffect = k, b.lastEffect = k));k = k.next;
  }m = null;for (k = b.firstCapturedUpdate; null !== k;) {
    var p = k.expirationTime;if (p > e) {
      if (null === m && (m = k, null === g && (f = l)), 0 === h || h > p) h = p;
    } else l = Yf(a, b, k, l, c, d), null !== k.callback && (a.effectTag |= 32, k.nextEffect = null, null === b.lastCapturedEffect ? b.firstCapturedEffect = b.lastCapturedEffect = k : (b.lastCapturedEffect.nextEffect = k, b.lastCapturedEffect = k));k = k.next;
  }null === g && (b.lastUpdate = null);null === m ? b.lastCapturedUpdate = null : a.effectTag |= 32;null === g && null === m && (f = l);b.baseState = f;b.firstUpdate = g;b.firstCapturedUpdate = m;a.expirationTime = h;a.memoizedState = l;
}
function $f(a, b, c) {
  null !== b.firstCapturedUpdate && (null !== b.lastUpdate && (b.lastUpdate.next = b.firstCapturedUpdate, b.lastUpdate = b.lastCapturedUpdate), b.firstCapturedUpdate = b.lastCapturedUpdate = null);ag(b.firstEffect, c);b.firstEffect = b.lastEffect = null;ag(b.firstCapturedEffect, c);b.firstCapturedEffect = b.lastCapturedEffect = null;
}function ag(a, b) {
  for (; null !== a;) {
    var c = a.callback;if (null !== c) {
      a.callback = null;var d = b;"function" !== typeof c ? r("191", c) : void 0;c.call(d);
    }a = a.nextEffect;
  }
}
function bg(a, b) {
  return { value: a, source: b, stack: Bc(b) };
}var cg = { current: null },
    dg = null,
    eg = null,
    fg = null;function gg(a, b) {
  var c = a.type._context;J(cg, c._currentValue, a);c._currentValue = b;
}function hg(a) {
  var b = cg.current;I(cg, a);a.type._context._currentValue = b;
}function ig(a) {
  dg = a;fg = eg = null;a.firstContextDependency = null;
}
function jg(a, b) {
  if (fg !== a && !1 !== b && 0 !== b) {
    if ("number" !== typeof b || 1073741823 === b) fg = a, b = 1073741823;b = { context: a, observedBits: b, next: null };null === eg ? (null === dg ? r("293") : void 0, dg.firstContextDependency = eg = b) : eg = eg.next = b;
  }return a._currentValue;
}var kg = {},
    O = { current: kg },
    lg = { current: kg },
    mg = { current: kg };function ng(a) {
  a === kg ? r("174") : void 0;return a;
}
function og(a, b) {
  J(mg, b, a);J(lg, a, a);J(O, kg, a);var c = b.nodeType;switch (c) {case 9:case 11:
      b = (b = b.documentElement) ? b.namespaceURI : Ue(null, "");break;default:
      c = 8 === c ? b.parentNode : b, b = c.namespaceURI || null, c = c.tagName, b = Ue(b, c);}I(O, a);J(O, b, a);
}function pg(a) {
  I(O, a);I(lg, a);I(mg, a);
}function qg(a) {
  ng(mg.current);var b = ng(O.current);var c = Ue(b, a.type);b !== c && (J(lg, a, a), J(O, c, a));
}function rg(a) {
  lg.current === a && (I(O, a), I(lg, a));
}var sg = kc.ReactCurrentOwner,
    tg = new aa.Component().refs;
function ug(a, b, c, d) {
  b = a.memoizedState;c = c(d, b);c = null === c || void 0 === c ? b : n({}, b, c);a.memoizedState = c;d = a.updateQueue;null !== d && 0 === a.expirationTime && (d.baseState = c);
}
var yg = { isMounted: function isMounted(a) {
    return (a = a._reactInternalFiber) ? 2 === Gd(a) : !1;
  }, enqueueSetState: function enqueueSetState(a, b, c) {
    a = a._reactInternalFiber;var d = vg();d = wg(d, a);var e = Tf(d);e.payload = b;void 0 !== c && null !== c && (e.callback = c);Vf(a, e);xg(a, d);
  }, enqueueReplaceState: function enqueueReplaceState(a, b, c) {
    a = a._reactInternalFiber;var d = vg();d = wg(d, a);var e = Tf(d);e.tag = 1;e.payload = b;void 0 !== c && null !== c && (e.callback = c);Vf(a, e);xg(a, d);
  }, enqueueForceUpdate: function enqueueForceUpdate(a, b) {
    a = a._reactInternalFiber;var c = vg();c = wg(c, a);var d = Tf(c);d.tag = 2;void 0 !== b && null !== b && (d.callback = b);Vf(a, d);xg(a, c);
  } };function zg(a, b, c, d, e, f, g) {
  a = a.stateNode;return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Fd(c, d) || !Fd(e, f) : !0;
}
function Ag(a, b, c) {
  var d = !1,
      e = qf;var f = b.contextType;"object" === (typeof f === "undefined" ? "undefined" : _typeof(f)) && null !== f ? f = sg.currentDispatcher.readContext(f) : (e = M(b) ? rf : K.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? sf(a, e) : qf);b = new b(c, f);a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;b.updater = yg;a.stateNode = b;b._reactInternalFiber = a;d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);return b;
}
function Bg(a, b, c, d) {
  a = b.state;"function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);"function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);b.state !== a && yg.enqueueReplaceState(b, b.state, null);
}
function Cg(a, b, c, d) {
  var e = a.stateNode;e.props = c;e.state = a.memoizedState;e.refs = tg;var f = b.contextType;"object" === (typeof f === "undefined" ? "undefined" : _typeof(f)) && null !== f ? e.context = sg.currentDispatcher.readContext(f) : (f = M(b) ? rf : K.current, e.context = sf(a, f));f = a.updateQueue;null !== f && (Zf(a, f, c, e, d), e.state = a.memoizedState);f = b.getDerivedStateFromProps;"function" === typeof f && (ug(a, b, f, c), e.state = a.memoizedState);"function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && yg.enqueueReplaceState(e, e.state, null), f = a.updateQueue, null !== f && (Zf(a, f, c, e, d), e.state = a.memoizedState));"function" === typeof e.componentDidMount && (a.effectTag |= 4);
}var Dg = Array.isArray;
function Eg(a, b, c) {
  a = c.ref;if (null !== a && "function" !== typeof a && "object" !== (typeof a === "undefined" ? "undefined" : _typeof(a))) {
    if (c._owner) {
      c = c._owner;var d = void 0;c && (1 !== c.tag ? r("289") : void 0, d = c.stateNode);d ? void 0 : r("147", a);var e = "" + a;if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === e) return b.ref;b = function b(a) {
        var b = d.refs;b === tg && (b = d.refs = {});null === a ? delete b[e] : b[e] = a;
      };b._stringRef = e;return b;
    }"string" !== typeof a ? r("284") : void 0;c._owner ? void 0 : r("290", a);
  }return a;
}
function Fg(a, b) {
  "textarea" !== a.type && r("31", "[object Object]" === Object.prototype.toString.call(b) ? "object with keys {" + Object.keys(b).join(", ") + "}" : b, "");
}
function Gg(a) {
  function b(b, c) {
    if (a) {
      var d = b.lastEffect;null !== d ? (d.nextEffect = c, b.lastEffect = c) : b.firstEffect = b.lastEffect = c;c.nextEffect = null;c.effectTag = 8;
    }
  }function c(c, d) {
    if (!a) return null;for (; null !== d;) {
      b(c, d), d = d.sibling;
    }return null;
  }function d(a, b) {
    for (a = new Map(); null !== b;) {
      null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;
    }return a;
  }function e(a, b, c) {
    a = Gf(a, b, c);a.index = 0;a.sibling = null;return a;
  }function f(b, c, d) {
    b.index = d;if (!a) return c;d = b.alternate;if (null !== d) return d = d.index, d < c ? (b.effectTag = 2, c) : d;b.effectTag = 2;return c;
  }function g(b) {
    a && null === b.alternate && (b.effectTag = 2);return b;
  }function h(a, b, c, d) {
    if (null === b || 6 !== b.tag) return b = Kf(c, a.mode, d), b.return = a, b;b = e(b, c, d);b.return = a;return b;
  }function k(a, b, c, d) {
    if (null !== b && b.elementType === c.type) return d = e(b, c.props, d), d.ref = Eg(a, b, c), d.return = a, d;d = Hf(c.type, c.key, c.props, null, a.mode, d);d.ref = Eg(a, b, c);d.return = a;return d;
  }function l(a, b, c, d) {
    if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = Lf(c, a.mode, d), b.return = a, b;b = e(b, c.children || [], d);b.return = a;return b;
  }function m(a, b, c, d, f) {
    if (null === b || 7 !== b.tag) return b = If(c, a.mode, d, f), b.return = a, b;b = e(b, c, d);b.return = a;return b;
  }function p(a, b, c) {
    if ("string" === typeof b || "number" === typeof b) return b = Kf("" + b, a.mode, c), b.return = a, b;if ("object" === (typeof b === "undefined" ? "undefined" : _typeof(b)) && null !== b) {
      switch (b.$$typeof) {case mc:
          return c = Hf(b.type, b.key, b.props, null, a.mode, c), c.ref = Eg(a, null, b), c.return = a, c;case nc:
          return b = Lf(b, a.mode, c), b.return = a, b;}if (Dg(b) || zc(b)) return b = If(b, a.mode, c, null), b.return = a, b;Fg(a, b);
    }return null;
  }function v(a, b, c, d) {
    var e = null !== b ? b.key : null;if ("string" === typeof c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);if ("object" === (typeof c === "undefined" ? "undefined" : _typeof(c)) && null !== c) {
      switch (c.$$typeof) {case mc:
          return c.key === e ? c.type === oc ? m(a, b, c.props.children, d, e) : k(a, b, c, d) : null;case nc:
          return c.key === e ? l(a, b, c, d) : null;}if (Dg(c) || zc(c)) return null !== e ? null : m(a, b, c, d, null);Fg(a, c);
    }return null;
  }function B(a, b, c, d, e) {
    if ("string" === typeof d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);if ("object" === (typeof d === "undefined" ? "undefined" : _typeof(d)) && null !== d) {
      switch (d.$$typeof) {case mc:
          return a = a.get(null === d.key ? c : d.key) || null, d.type === oc ? m(b, a, d.props.children, e, d.key) : k(b, a, d, e);case nc:
          return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);}if (Dg(d) || zc(d)) return a = a.get(c) || null, m(b, a, d, e, null);Fg(b, d);
    }return null;
  }function w(e, g, h, k) {
    for (var l = null, m = null, q = g, u = g = 0, A = null; null !== q && u < h.length; u++) {
      q.index > u ? (A = q, q = null) : A = q.sibling;var t = v(e, q, h[u], k);if (null === t) {
        null === q && (q = A);break;
      }a && q && null === t.alternate && b(e, q);g = f(t, g, u);null === m ? l = t : m.sibling = t;m = t;q = A;
    }if (u === h.length) return c(e, q), l;if (null === q) {
      for (; u < h.length; u++) {
        if (q = p(e, h[u], k)) g = f(q, g, u), null === m ? l = q : m.sibling = q, m = q;
      }return l;
    }for (q = d(e, q); u < h.length; u++) {
      if (A = B(q, e, u, h[u], k)) a && null !== A.alternate && q.delete(null === A.key ? u : A.key), g = f(A, g, u), null === m ? l = A : m.sibling = A, m = A;
    }a && q.forEach((function (a) {
      return b(e, a);
    }));return l;
  }function C(e, g, h, k) {
    var l = zc(h);"function" !== typeof l ? r("150") : void 0;h = l.call(h);null == h ? r("151") : void 0;
    for (var m = l = null, q = g, u = g = 0, A = null, t = h.next(); null !== q && !t.done; u++, t = h.next()) {
      q.index > u ? (A = q, q = null) : A = q.sibling;var w = v(e, q, t.value, k);if (null === w) {
        q || (q = A);break;
      }a && q && null === w.alternate && b(e, q);g = f(w, g, u);null === m ? l = w : m.sibling = w;m = w;q = A;
    }if (t.done) return c(e, q), l;if (null === q) {
      for (; !t.done; u++, t = h.next()) {
        t = p(e, t.value, k), null !== t && (g = f(t, g, u), null === m ? l = t : m.sibling = t, m = t);
      }return l;
    }for (q = d(e, q); !t.done; u++, t = h.next()) {
      t = B(q, e, u, t.value, k), null !== t && (a && null !== t.alternate && q.delete(null === t.key ? u : t.key), g = f(t, g, u), null === m ? l = t : m.sibling = t, m = t);
    }a && q.forEach((function (a) {
      return b(e, a);
    }));return l;
  }return function (a, d, f, h) {
    var k = "object" === (typeof f === "undefined" ? "undefined" : _typeof(f)) && null !== f && f.type === oc && null === f.key;k && (f = f.props.children);var l = "object" === (typeof f === "undefined" ? "undefined" : _typeof(f)) && null !== f;if (l) switch (f.$$typeof) {case mc:
        a: {
          l = f.key;for (k = d; null !== k;) {
            if (k.key === l) {
              if (7 === k.tag ? f.type === oc : k.elementType === f.type) {
                c(a, k.sibling);d = e(k, f.type === oc ? f.props.children : f.props, h);d.ref = Eg(a, k, f);d.return = a;a = d;break a;
              } else {
                c(a, k);break;
              }
            } else b(a, k);k = k.sibling;
          }f.type === oc ? (d = If(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = Hf(f.type, f.key, f.props, null, a.mode, h), h.ref = Eg(a, d, f), h.return = a, a = h);
        }return g(a);case nc:
        a: {
          for (k = f.key; null !== d;) {
            if (d.key === k) {
              if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                c(a, d.sibling);d = e(d, f.children || [], h);d.return = a;a = d;break a;
              } else {
                c(a, d);break;
              }
            } else b(a, d);d = d.sibling;
          }d = Lf(f, a.mode, h);d.return = a;a = d;
        }return g(a);}if ("string" === typeof f || "number" === typeof f) return f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f, h), d.return = a, a = d) : (c(a, d), d = Kf(f, a.mode, h), d.return = a, a = d), g(a);if (Dg(f)) return w(a, d, f, h);if (zc(f)) return C(a, d, f, h);l && Fg(a, f);if ("undefined" === typeof f && !k) switch (a.tag) {case 1:case 0:
        h = a.type, r("152", h.displayName || h.name || "Component");}return c(a, d);
  };
}var Hg = Gg(!0),
    Ig = Gg(!1),
    Jg = null,
    Kg = null,
    Lg = !1;
function Mg(a, b) {
  var c = N(5, null, null, 0);c.elementType = "DELETED";c.type = "DELETED";c.stateNode = b;c.return = a;c.effectTag = 8;null !== a.lastEffect ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
}function Ng(a, b) {
  switch (a.tag) {case 5:
      var c = a.type;b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;return null !== b ? (a.stateNode = b, !0) : !1;case 6:
      return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, !0) : !1;default:
      return !1;}
}
function Og(a) {
  if (Lg) {
    var b = Kg;if (b) {
      var c = b;if (!Ng(a, b)) {
        b = mf(c);if (!b || !Ng(a, b)) {
          a.effectTag |= 2;Lg = !1;Jg = a;return;
        }Mg(Jg, c);
      }Jg = a;Kg = nf(b);
    } else a.effectTag |= 2, Lg = !1, Jg = a;
  }
}function Pg(a) {
  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag;) {
    a = a.return;
  }Jg = a;
}function Qg(a) {
  if (a !== Jg) return !1;if (!Lg) return Pg(a), Lg = !0, !1;var b = a.type;if (5 !== a.tag || "head" !== b && "body" !== b && !jf(b, a.memoizedProps)) for (b = Kg; b;) {
    Mg(a, b), b = mf(b);
  }Pg(a);Kg = Jg ? mf(a.stateNode) : null;return !0;
}function Rg() {
  Kg = Jg = null;Lg = !1;
}
function Sg(a) {
  var b = a._result;switch (a._status) {case 1:
      return b;case 2:
      throw b;case 0:
      throw b;default:
      throw a._status = 0, b = a._ctor, b = b(), b.then((function (b) {
        0 === a._status && (b = b.default, a._status = 1, a._result = b);
      }), (function (b) {
        0 === a._status && (a._status = 2, a._result = b);
      })), a._result = b, b;}
}var Tg = kc.ReactCurrentOwner;function P(a, b, c, d) {
  b.child = null === a ? Ig(b, null, c, d) : Hg(b, a.child, c, d);
}
function Ug(a, b, c, d, e) {
  c = c.render;var f = b.ref;if (!L.current && b.memoizedProps === d && f === (null !== a ? a.ref : null)) return Vg(a, b, e);d = c(d, f);P(a, b, d, e);return b.child;
}
function Wg(a, b, c, d, e, f) {
  if (null === a) {
    var g = c.type;if ("function" === typeof g && !Ef(g) && void 0 === g.defaultProps && null === c.compare) return b.tag = 15, b.type = g, Xg(a, b, g, d, e, f);a = Hf(c.type, null, d, null, b.mode, f);a.ref = b.ref;a.return = b;return b.child = a;
  }g = a.child;if (0 === e || e > f) if (e = g.memoizedProps, c = c.compare, c = null !== c ? c : Fd, c(e, d) && a.ref === b.ref) return Vg(a, b, f);a = Gf(g, d, f);a.ref = b.ref;a.return = b;return b.child = a;
}
function Xg(a, b, c, d, e, f) {
  return null !== a && (0 === e || e > f) && Fd(a.memoizedProps, d) && a.ref === b.ref ? Vg(a, b, f) : Yg(a, b, c, d, f);
}function Zg(a, b) {
  var c = b.ref;if (null === a && null !== c || null !== a && a.ref !== c) b.effectTag |= 128;
}function Yg(a, b, c, d, e) {
  var f = M(c) ? rf : K.current;f = sf(b, f);ig(b, e);c = c(d, f);b.effectTag |= 1;P(a, b, c, e);return b.child;
}
function $g(a, b, c, d, e) {
  if (M(c)) {
    var f = !0;xf(b);
  } else f = !1;ig(b, e);if (null === b.stateNode) null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2), Ag(b, c, d, e), Cg(b, c, d, e), d = !0;else if (null === a) {
    var g = b.stateNode,
        h = b.memoizedProps;g.props = h;var k = g.context,
        l = c.contextType;"object" === (typeof l === "undefined" ? "undefined" : _typeof(l)) && null !== l ? l = sg.currentDispatcher.readContext(l) : (l = M(c) ? rf : K.current, l = sf(b, l));var m = c.getDerivedStateFromProps,
        p = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;p || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Bg(b, g, d, l);Qf = !1;var v = b.memoizedState;k = g.state = v;var B = b.updateQueue;null !== B && (Zf(b, B, d, g, e), k = b.memoizedState);h !== d || v !== k || L.current || Qf ? ("function" === typeof m && (ug(b, c, m, d), k = b.memoizedState), (h = Qf || zg(b, c, h, d, v, k, l)) ? (p || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.effectTag |= 4)) : ("function" === typeof g.componentDidMount && (b.effectTag |= 4), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.effectTag |= 4), d = !1);
  } else g = b.stateNode, h = b.memoizedProps, g.props = h, k = g.context, l = c.contextType, "object" === (typeof l === "undefined" ? "undefined" : _typeof(l)) && null !== l ? l = sg.currentDispatcher.readContext(l) : (l = M(c) ? rf : K.current, l = sf(b, l)), m = c.getDerivedStateFromProps, (p = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Bg(b, g, d, l), Qf = !1, k = b.memoizedState, v = g.state = k, B = b.updateQueue, null !== B && (Zf(b, B, d, g, e), v = b.memoizedState), h !== d || k !== v || L.current || Qf ? ("function" === typeof m && (ug(b, c, m, d), v = b.memoizedState), (m = Qf || zg(b, c, h, d, k, v, l)) ? (p || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, v, l), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, v, l)), "function" === typeof g.componentDidUpdate && (b.effectTag |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.effectTag |= 256)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 256), b.memoizedProps = d, b.memoizedState = v), g.props = d, g.state = v, g.context = l, d = m) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 256), d = !1);return ah(a, b, c, d, f, e);
}
function ah(a, b, c, d, e, f) {
  Zg(a, b);var g = 0 !== (b.effectTag & 64);if (!d && !g) return e && yf(b, c, !1), Vg(a, b, f);d = b.stateNode;Tg.current = b;var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();b.effectTag |= 1;null !== a && g ? (b.child = Hg(b, a.child, null, f), b.child = Hg(b, null, h, f)) : P(a, b, h, f);b.memoizedState = d.state;e && yf(b, c, !0);return b.child;
}function bh(a) {
  var b = a.stateNode;b.pendingContext ? vf(a, b.pendingContext, b.pendingContext !== b.context) : b.context && vf(a, b.context, !1);og(a, b.containerInfo);
}
function ch(a, b) {
  if (a && a.defaultProps) {
    b = n({}, b);a = a.defaultProps;for (var c in a) {
      void 0 === b[c] && (b[c] = a[c]);
    }
  }return b;
}
function dh(a, b, c) {
  var d = b.mode,
      e = b.pendingProps,
      f = b.memoizedState;null !== f && (f.alreadyCaptured ? null !== a && f === a.memoizedState ? f = { alreadyCaptured: !0, didTimeout: !0, timedOutAt: f.timedOutAt } : (f.alreadyCaptured = !0, f.didTimeout = !0) : f = null);var g = null !== f && f.didTimeout;if (null === a) g ? (g = e.fallback, e = If(null, d, 0, null), d = If(g, d, c, null), e.sibling = d, c = e, c.return = d.return = b) : c = d = Ig(b, null, e.children, c);else {
    var h = a.memoizedState;null !== h && h.didTimeout ? (d = a.child, a = d.sibling, g ? (c = e.fallback, d = Gf(d, d.pendingProps, 0), d.effectTag |= 2, e = d.sibling = Gf(a, c, a.expirationTime), e.effectTag |= 2, c = d, d.childExpirationTime = 0, d = e, c.return = d.return = b) : (g = a.child, d = Hg(b, d.child, e.children, c), Hg(b, g, null, c), c = d)) : (a = a.child, g ? (g = e.fallback, e = If(null, d, 0, null), e.effectTag |= 2, e.child = a, a.return = e, d = e.sibling = If(g, d, c, null), d.effectTag |= 2, c = e, e.childExpirationTime = 0, c.return = d.return = b) : d = c = Hg(b, a, e.children, c));
  }b.memoizedState = f;b.child = c;return d;
}
function Vg(a, b, c) {
  null !== a && (b.firstContextDependency = a.firstContextDependency);var d = b.childExpirationTime;if (0 === d || d > c) return null;null !== a && b.child !== a.child ? r("153") : void 0;if (null !== b.child) {
    a = b.child;c = Gf(a, a.pendingProps, a.expirationTime);b.child = c;for (c.return = b; null !== a.sibling;) {
      a = a.sibling, c = c.sibling = Gf(a, a.pendingProps, a.expirationTime), c.return = b;
    }c.sibling = null;
  }return b.child;
}
function eh(a, b, c) {
  var d = b.expirationTime;if (null !== a && a.memoizedProps === b.pendingProps && !L.current && (0 === d || d > c)) {
    switch (b.tag) {case 3:
        bh(b);Rg();break;case 5:
        qg(b);break;case 1:
        M(b.type) && xf(b);break;case 4:
        og(b, b.stateNode.containerInfo);break;case 10:
        gg(b, b.memoizedProps.value);break;case 13:
        if (d = b.memoizedState, null !== d && d.didTimeout) {
          d = b.child.childExpirationTime;if (0 !== d && d <= c) return dh(a, b, c);b = Vg(a, b, c);return null !== b ? b.sibling : null;
        }}return Vg(a, b, c);
  }b.expirationTime = 0;switch (b.tag) {case 2:
      d = b.elementType;null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2);a = b.pendingProps;var e = sf(b, K.current);ig(b, c);e = d(a, e);b.effectTag |= 1;if ("object" === (typeof e === "undefined" ? "undefined" : _typeof(e)) && null !== e && "function" === typeof e.render && void 0 === e.$$typeof) {
        b.tag = 1;if (M(d)) {
          var f = !0;xf(b);
        } else f = !1;b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null;var g = d.getDerivedStateFromProps;"function" === typeof g && ug(b, d, g, a);e.updater = yg;b.stateNode = e;e._reactInternalFiber = b;Cg(b, d, a, c);b = ah(null, b, d, !0, f, c);
      } else b.tag = 0, P(null, b, e, c), b = b.child;return b;case 16:
      e = b.elementType;null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2);f = b.pendingProps;a = Sg(e);b.type = a;e = b.tag = Ff(a);f = ch(a, f);g = void 0;switch (e) {case 0:
          g = Yg(null, b, a, f, c);break;case 1:
          g = $g(null, b, a, f, c);break;case 11:
          g = Ug(null, b, a, f, c);break;case 14:
          g = Wg(null, b, a, ch(a.type, f), d, c);break;default:
          r("283", a);}return g;case 0:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ch(d, e), Yg(a, b, d, e, c);case 1:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ch(d, e), $g(a, b, d, e, c);case 3:
      bh(b);d = b.updateQueue;null === d ? r("282") : void 0;e = b.memoizedState;e = null !== e ? e.element : null;Zf(b, d, b.pendingProps, null, c);d = b.memoizedState.element;if (d === e) Rg(), b = Vg(a, b, c);else {
        e = b.stateNode;if (e = (null === a || null === a.child) && e.hydrate) Kg = nf(b.stateNode.containerInfo), Jg = b, e = Lg = !0;e ? (b.effectTag |= 2, b.child = Ig(b, null, d, c)) : (P(a, b, d, c), Rg());b = b.child;
      }return b;case 5:
      return qg(b), null === a && Og(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, jf(d, e) ? g = null : null !== f && jf(d, f) && (b.effectTag |= 16), Zg(a, b), 1073741823 !== c && b.mode & 1 && e.hidden ? (b.expirationTime = 1073741823, b = null) : (P(a, b, g, c), b = b.child), b;case 6:
      return null === a && Og(b), null;case 13:
      return dh(a, b, c);case 4:
      return og(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Hg(b, null, d, c) : P(a, b, d, c), b.child;case 11:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ch(d, e), Ug(a, b, d, e, c);case 7:
      return P(a, b, b.pendingProps, c), b.child;case 8:
      return P(a, b, b.pendingProps.children, c), b.child;case 12:
      return P(a, b, b.pendingProps.children, c), b.child;case 10:
      a: {
        d = b.type._context;e = b.pendingProps;g = b.memoizedProps;f = e.value;gg(b, f);if (null !== g) {
          var h = g.value;f = h === f && (0 !== h || 1 / h === 1 / f) || h !== h && f !== f ? 0 : ("function" === typeof d._calculateChangedBits ? d._calculateChangedBits(h, f) : 1073741823) | 0;if (0 === f) {
            if (g.children === e.children && !L.current) {
              b = Vg(a, b, c);break a;
            }
          } else for (g = b.child, null !== g && (g.return = b); null !== g;) {
            h = g.firstContextDependency;if (null !== h) {
              do {
                if (h.context === d && 0 !== (h.observedBits & f)) {
                  if (1 === g.tag) {
                    var k = Tf(c);k.tag = 2;Vf(g, k);
                  }if (0 === g.expirationTime || g.expirationTime > c) g.expirationTime = c;k = g.alternate;null !== k && (0 === k.expirationTime || k.expirationTime > c) && (k.expirationTime = c);for (var l = g.return; null !== l;) {
                    k = l.alternate;if (0 === l.childExpirationTime || l.childExpirationTime > c) l.childExpirationTime = c, null !== k && (0 === k.childExpirationTime || k.childExpirationTime > c) && (k.childExpirationTime = c);else if (null !== k && (0 === k.childExpirationTime || k.childExpirationTime > c)) k.childExpirationTime = c;else break;l = l.return;
                  }
                }k = g.child;h = h.next;
              } while (null !== h);
            } else k = 10 === g.tag ? g.type === b.type ? null : g.child : g.child;if (null !== k) k.return = g;else for (k = g; null !== k;) {
              if (k === b) {
                k = null;break;
              }g = k.sibling;if (null !== g) {
                g.return = k.return;k = g;break;
              }k = k.return;
            }g = k;
          }
        }P(a, b, e.children, c);b = b.child;
      }return b;case 9:
      return e = b.type, f = b.pendingProps, d = f.children, ig(b, c), e = jg(e, f.unstable_observedBits), d = d(e), b.effectTag |= 1, P(a, b, d, c), b.child;case 14:
      return e = b.type, f = ch(e.type, b.pendingProps), Wg(a, b, e, f, d, c);case 15:
      return Xg(a, b, b.type, b.pendingProps, d, c);case 17:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ch(d, e), null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2), b.tag = 1, M(d) ? (a = !0, xf(b)) : a = !1, ig(b, c), Ag(b, d, e, c), Cg(b, d, e, c), ah(null, b, d, !0, a, c);default:
      r("156");}
}function zh(a) {
  a.effectTag |= 4;
}var Ah = void 0,
    Bh = void 0,
    Ch = void 0,
    Dh = void 0;
Ah = function Ah(a, b) {
  for (var c = b.child; null !== c;) {
    if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);else if (4 !== c.tag && null !== c.child) {
      c.child.return = c;c = c.child;continue;
    }if (c === b) break;for (; null === c.sibling;) {
      if (null === c.return || c.return === b) return;c = c.return;
    }c.sibling.return = c.return;c = c.sibling;
  }
};Bh = function Bh() {};
Ch = function Ch(a, b, c, d, e) {
  var f = a.memoizedProps;if (f !== d) {
    var g = b.stateNode;ng(O.current);a = null;switch (c) {case "input":
        f = Qc(g, f);d = Qc(g, d);a = [];break;case "option":
        f = Me(g, f);d = Me(g, d);a = [];break;case "select":
        f = n({}, f, { value: void 0 });d = n({}, d, { value: void 0 });a = [];break;case "textarea":
        f = Oe(g, f);d = Oe(g, d);a = [];break;default:
        "function" !== typeof f.onClick && "function" === typeof d.onClick && (g.onclick = ef);}bf(c, d);g = c = void 0;var h = null;for (c in f) {
      if (!d.hasOwnProperty(c) && f.hasOwnProperty(c) && null != f[c]) if ("style" === c) {
        var k = f[c];for (g in k) {
          k.hasOwnProperty(g) && (h || (h = {}), h[g] = "");
        }
      } else "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (ua.hasOwnProperty(c) ? a || (a = []) : (a = a || []).push(c, null));
    }for (c in d) {
      var l = d[c];k = null != f ? f[c] : void 0;if (d.hasOwnProperty(c) && l !== k && (null != l || null != k)) if ("style" === c) {
        if (k) {
          for (g in k) {
            !k.hasOwnProperty(g) || l && l.hasOwnProperty(g) || (h || (h = {}), h[g] = "");
          }for (g in l) {
            l.hasOwnProperty(g) && k[g] !== l[g] && (h || (h = {}), h[g] = l[g]);
          }
        } else h || (a || (a = []), a.push(c, h)), h = l;
      } else "dangerouslySetInnerHTML" === c ? (l = l ? l.__html : void 0, k = k ? k.__html : void 0, null != l && k !== l && (a = a || []).push(c, "" + l)) : "children" === c ? k === l || "string" !== typeof l && "number" !== typeof l || (a = a || []).push(c, "" + l) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (ua.hasOwnProperty(c) ? (null != l && df(e, c), a || k === l || (a = [])) : (a = a || []).push(c, l));
    }h && (a = a || []).push("style", h);e = a;(b.updateQueue = e) && zh(b);
  }
};Dh = function Dh(a, b, c, d) {
  c !== d && zh(b);
};
function Eh(a, b) {
  var c = b.source,
      d = b.stack;null === d && null !== c && (d = Bc(c));null !== c && Ac(c.type);b = b.value;null !== a && 1 === a.tag && Ac(a.type);try {
    console.error(b);
  } catch (e) {
    setTimeout((function () {
      throw e;
    }));
  }
}function Fh(a) {
  var b = a.ref;if (null !== b) if ("function" === typeof b) try {
    b(null);
  } catch (c) {
    Gh(a, c);
  } else b.current = null;
}
function Hh(a) {
  "function" === typeof Af && Af(a);switch (a.tag) {case 1:
      Fh(a);var b = a.stateNode;if ("function" === typeof b.componentWillUnmount) try {
        b.props = a.memoizedProps, b.state = a.memoizedState, b.componentWillUnmount();
      } catch (c) {
        Gh(a, c);
      }break;case 5:
      Fh(a);break;case 4:
      Ih(a);}
}function Jh(a) {
  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}
function Kh(a) {
  a: {
    for (var b = a.return; null !== b;) {
      if (Jh(b)) {
        var c = b;break a;
      }b = b.return;
    }r("160");c = void 0;
  }var d = b = void 0;switch (c.tag) {case 5:
      b = c.stateNode;d = !1;break;case 3:
      b = c.stateNode.containerInfo;d = !0;break;case 4:
      b = c.stateNode.containerInfo;d = !0;break;default:
      r("161");}c.effectTag & 16 && (Xe(b, ""), c.effectTag &= -17);a: b: for (c = a;;) {
    for (; null === c.sibling;) {
      if (null === c.return || Jh(c.return)) {
        c = null;break a;
      }c = c.return;
    }c.sibling.return = c.return;for (c = c.sibling; 5 !== c.tag && 6 !== c.tag;) {
      if (c.effectTag & 2) continue b;
      if (null === c.child || 4 === c.tag) continue b;else c.child.return = c, c = c.child;
    }if (!(c.effectTag & 2)) {
      c = c.stateNode;break a;
    }
  }for (var e = a;;) {
    if (5 === e.tag || 6 === e.tag) {
      if (c) {
        if (d) {
          var f = b,
              g = e.stateNode,
              h = c;8 === f.nodeType ? f.parentNode.insertBefore(g, h) : f.insertBefore(g, h);
        } else b.insertBefore(e.stateNode, c);
      } else d ? (g = b, h = e.stateNode, 8 === g.nodeType ? (f = g.parentNode, f.insertBefore(h, g)) : (f = g, f.appendChild(h)), g = g._reactRootContainer, null !== g && void 0 !== g || null !== f.onclick || (f.onclick = ef)) : b.appendChild(e.stateNode);
    } else if (4 !== e.tag && null !== e.child) {
      e.child.return = e;e = e.child;continue;
    }if (e === a) break;for (; null === e.sibling;) {
      if (null === e.return || e.return === a) return;e = e.return;
    }e.sibling.return = e.return;e = e.sibling;
  }
}
function Ih(a) {
  for (var b = a, c = !1, d = void 0, e = void 0;;) {
    if (!c) {
      c = b.return;a: for (;;) {
        null === c ? r("160") : void 0;switch (c.tag) {case 5:
            d = c.stateNode;e = !1;break a;case 3:
            d = c.stateNode.containerInfo;e = !0;break a;case 4:
            d = c.stateNode.containerInfo;e = !0;break a;}c = c.return;
      }c = !0;
    }if (5 === b.tag || 6 === b.tag) {
      a: for (var f = b, g = f;;) {
        if (Hh(g), null !== g.child && 4 !== g.tag) g.child.return = g, g = g.child;else {
          if (g === f) break;for (; null === g.sibling;) {
            if (null === g.return || g.return === f) break a;g = g.return;
          }g.sibling.return = g.return;g = g.sibling;
        }
      }e ? (f = d, g = b.stateNode, 8 === f.nodeType ? f.parentNode.removeChild(g) : f.removeChild(g)) : d.removeChild(b.stateNode);
    } else if (4 === b.tag ? (d = b.stateNode.containerInfo, e = !0) : Hh(b), null !== b.child) {
      b.child.return = b;b = b.child;continue;
    }if (b === a) break;for (; null === b.sibling;) {
      if (null === b.return || b.return === a) return;b = b.return;4 === b.tag && (c = !1);
    }b.sibling.return = b.return;b = b.sibling;
  }
}
function Lh(a, b) {
  switch (b.tag) {case 1:
      break;case 5:
      var c = b.stateNode;if (null != c) {
        var d = b.memoizedProps,
            e = null !== a ? a.memoizedProps : d;a = b.type;var f = b.updateQueue;b.updateQueue = null;if (null !== f) {
          c[Ma] = d;"input" === a && "radio" === d.type && null != d.name && Sc(c, d);cf(a, e);b = cf(a, d);for (e = 0; e < f.length; e += 2) {
            var g = f[e],
                h = f[e + 1];"style" === g ? $e(c, h) : "dangerouslySetInnerHTML" === g ? We(c, h) : "children" === g ? Xe(c, h) : Oc(c, g, h, b);
          }switch (a) {case "input":
              Tc(c, d);break;case "textarea":
              Qe(c, d);break;case "select":
              a = c._wrapperState.wasMultiple, c._wrapperState.wasMultiple = !!d.multiple, f = d.value, null != f ? Ne(c, !!d.multiple, f, !1) : a !== !!d.multiple && (null != d.defaultValue ? Ne(c, !!d.multiple, d.defaultValue, !0) : Ne(c, !!d.multiple, d.multiple ? [] : "", !1));}
        }
      }break;case 6:
      null === b.stateNode ? r("162") : void 0;b.stateNode.nodeValue = b.memoizedProps;break;case 3:
      break;case 12:
      break;case 13:
      break;case 17:
      break;default:
      r("163");}
}function Mh(a, b, c) {
  c = Tf(c);c.tag = 3;c.payload = { element: null };var d = b.value;c.callback = function () {
    Nh(d);Eh(a, b);
  };return c;
}
function Oh(a, b, c) {
  c = Tf(c);c.tag = 3;var d = a.type.getDerivedStateFromError;if ("function" === typeof d) {
    var e = b.value;c.payload = function () {
      return d(e);
    };
  }var f = a.stateNode;null !== f && "function" === typeof f.componentDidCatch && (c.callback = function () {
    "function" !== typeof d && (null === Ph ? Ph = new Set([this]) : Ph.add(this));var c = b.value,
        e = b.stack;Eh(a, b);this.componentDidCatch(c, { componentStack: null !== e ? e : "" });
  });return c;
}
function Qh(a) {
  switch (a.tag) {case 1:
      M(a.type) && tf(a);var b = a.effectTag;return b & 1024 ? (a.effectTag = b & -1025 | 64, a) : null;case 3:
      return pg(a), uf(a), b = a.effectTag, 0 !== (b & 64) ? r("285") : void 0, a.effectTag = b & -1025 | 64, a;case 5:
      return rg(a), null;case 13:
      b = a.effectTag;if (b & 1024) {
        a.effectTag = b & -1025 | 64;b = a.alternate;b = null !== b ? b.memoizedState : null;var c = a.memoizedState;null === c ? c = { alreadyCaptured: !0, didTimeout: !1, timedOutAt: 0 } : b === c ? c = { alreadyCaptured: !0, didTimeout: c.didTimeout, timedOutAt: c.timedOutAt } : c.alreadyCaptured = !0;a.memoizedState = c;return a;
      }return null;case 4:
      return pg(a), null;case 10:
      return hg(a), null;default:
      return null;}
}var Rh = { readContext: jg },
    Sh = kc.ReactCurrentOwner,
    Th = 0,
    Uh = 0,
    Vh = !1,
    Q = null,
    R = null,
    S = 0,
    Wh = -1,
    Xh = !1,
    T = null,
    Yh = !1,
    Ph = null;function Zh() {
  if (null !== Q) for (var a = Q.return; null !== a;) {
    var b = a;switch (b.tag) {case 1:
        var c = b.type.childContextTypes;null !== c && void 0 !== c && tf(b);break;case 3:
        pg(b);uf(b);break;case 5:
        rg(b);break;case 4:
        pg(b);break;case 10:
        hg(b);}a = a.return;
  }R = null;S = 0;Wh = -1;Xh = !1;Q = null;
}
function $h(a) {
  for (;;) {
    var b = a.alternate,
        c = a.return,
        d = a.sibling;if (0 === (a.effectTag & 512)) {
      var e = b;b = a;var f = b.pendingProps;switch (b.tag) {case 2:
          break;case 16:
          break;case 15:case 0:
          break;case 1:
          M(b.type) && tf(b);break;case 3:
          pg(b);uf(b);f = b.stateNode;f.pendingContext && (f.context = f.pendingContext, f.pendingContext = null);if (null === e || null === e.child) Qg(b), b.effectTag &= -3;Bh(b);break;case 5:
          rg(b);var g = ng(mg.current),
              h = b.type;if (null !== e && null != b.stateNode) Ch(e, b, h, f, g), e.ref !== b.ref && (b.effectTag |= 128);else if (f) {
            var k = ng(O.current);if (Qg(b)) {
              f = b;e = f.stateNode;var l = f.type,
                  m = f.memoizedProps,
                  p = g;e[La] = f;e[Ma] = m;h = void 0;g = l;switch (g) {case "iframe":case "object":
                  H("load", e);break;case "video":case "audio":
                  for (l = 0; l < lb.length; l++) {
                    H(lb[l], e);
                  }break;case "source":
                  H("error", e);break;case "img":case "image":case "link":
                  H("error", e);H("load", e);break;case "form":
                  H("reset", e);H("submit", e);break;case "details":
                  H("toggle", e);break;case "input":
                  Rc(e, m);H("invalid", e);df(p, "onChange");break;case "select":
                  e._wrapperState = { wasMultiple: !!m.multiple };H("invalid", e);df(p, "onChange");break;case "textarea":
                  Pe(e, m), H("invalid", e), df(p, "onChange");}bf(g, m);l = null;for (h in m) {
                m.hasOwnProperty(h) && (k = m[h], "children" === h ? "string" === typeof k ? e.textContent !== k && (l = ["children", k]) : "number" === typeof k && e.textContent !== "" + k && (l = ["children", "" + k]) : ua.hasOwnProperty(h) && null != k && df(p, h));
              }switch (g) {case "input":
                  ic(e);bd(e, m, !0);break;case "textarea":
                  ic(e);Re(e, m);break;case "select":case "option":
                  break;default:
                  "function" === typeof m.onClick && (e.onclick = ef);}h = l;f.updateQueue = h;f = null !== h ? !0 : !1;f && zh(b);
            } else {
              m = b;e = h;p = f;l = 9 === g.nodeType ? g : g.ownerDocument;k === Se.html && (k = Te(e));k === Se.html ? "script" === e ? (e = l.createElement("div"), e.innerHTML = "<script>\x3c/script>", l = e.removeChild(e.firstChild)) : "string" === typeof p.is ? l = l.createElement(e, { is: p.is }) : (l = l.createElement(e), "select" === e && p.multiple && (l.multiple = !0)) : l = l.createElementNS(k, e);e = l;e[La] = m;e[Ma] = f;Ah(e, b, !1, !1);p = e;l = h;m = f;var v = g,
                  B = cf(l, m);switch (l) {case "iframe":case "object":
                  H("load", p);g = m;break;case "video":case "audio":
                  for (g = 0; g < lb.length; g++) {
                    H(lb[g], p);
                  }g = m;break;case "source":
                  H("error", p);g = m;break;case "img":case "image":case "link":
                  H("error", p);H("load", p);g = m;break;case "form":
                  H("reset", p);H("submit", p);g = m;break;case "details":
                  H("toggle", p);g = m;break;case "input":
                  Rc(p, m);g = Qc(p, m);H("invalid", p);df(v, "onChange");break;case "option":
                  g = Me(p, m);break;case "select":
                  p._wrapperState = { wasMultiple: !!m.multiple };g = n({}, m, { value: void 0 });H("invalid", p);df(v, "onChange");break;case "textarea":
                  Pe(p, m);g = Oe(p, m);H("invalid", p);df(v, "onChange");break;default:
                  g = m;}bf(l, g);k = void 0;var w = l,
                  C = p,
                  u = g;for (k in u) {
                if (u.hasOwnProperty(k)) {
                  var q = u[k];"style" === k ? $e(C, q) : "dangerouslySetInnerHTML" === k ? (q = q ? q.__html : void 0, null != q && We(C, q)) : "children" === k ? "string" === typeof q ? ("textarea" !== w || "" !== q) && Xe(C, q) : "number" === typeof q && Xe(C, "" + q) : "suppressContentEditableWarning" !== k && "suppressHydrationWarning" !== k && "autoFocus" !== k && (ua.hasOwnProperty(k) ? null != q && df(v, k) : null != q && Oc(C, k, q, B));
                }
              }switch (l) {case "input":
                  ic(p);
                  bd(p, m, !1);break;case "textarea":
                  ic(p);Re(p, m);break;case "option":
                  null != m.value && p.setAttribute("value", "" + Pc(m.value));break;case "select":
                  g = p;g.multiple = !!m.multiple;p = m.value;null != p ? Ne(g, !!m.multiple, p, !1) : null != m.defaultValue && Ne(g, !!m.multiple, m.defaultValue, !0);break;default:
                  "function" === typeof g.onClick && (p.onclick = ef);}(f = hf(h, f)) && zh(b);b.stateNode = e;
            }null !== b.ref && (b.effectTag |= 128);
          } else null === b.stateNode ? r("166") : void 0;break;case 6:
          e && null != b.stateNode ? Dh(e, b, e.memoizedProps, f) : ("string" !== typeof f && (null === b.stateNode ? r("166") : void 0), e = ng(mg.current), ng(O.current), Qg(b) ? (f = b, h = f.stateNode, e = f.memoizedProps, h[La] = f, (f = h.nodeValue !== e) && zh(b)) : (h = b, f = (9 === e.nodeType ? e : e.ownerDocument).createTextNode(f), f[La] = b, h.stateNode = f));break;case 11:
          break;case 13:
          f = b.memoizedState;h = null !== e ? e.memoizedState : null;(null !== f && f.didTimeout) !== (null !== h && h.didTimeout) && (b.effectTag |= 4);break;case 7:
          break;case 8:
          break;case 12:
          break;case 4:
          pg(b);Bh(b);break;case 10:
          hg(b);break;case 9:
          break;case 14:
          break;
        case 17:
          M(b.type) && tf(b);break;default:
          r("156");}Q = null;b = a;if (1073741823 === S || 1073741823 !== b.childExpirationTime) {
        f = 0;for (h = b.child; null !== h;) {
          e = h.expirationTime;g = h.childExpirationTime;if (0 === f || 0 !== e && e < f) f = e;if (0 === f || 0 !== g && g < f) f = g;h = h.sibling;
        }b.childExpirationTime = f;
      }null !== c && 0 === (c.effectTag & 512) && (null === c.firstEffect && (c.firstEffect = a.firstEffect), null !== a.lastEffect && (null !== c.lastEffect && (c.lastEffect.nextEffect = a.firstEffect), c.lastEffect = a.lastEffect), 1 < a.effectTag && (null !== c.lastEffect ? c.lastEffect.nextEffect = a : c.firstEffect = a, c.lastEffect = a));
    } else {
      a = Qh(a, S);if (null !== a) return a.effectTag &= 511, a;null !== c && (c.firstEffect = c.lastEffect = null, c.effectTag |= 512);
    }if (null !== d) return d;if (null !== c) a = c;else break;
  }return null;
}function ai(a) {
  var b = eh(a.alternate, a, S);a.memoizedProps = a.pendingProps;null === b && (b = $h(a));Sh.current = null;return b;
}
function bi(a, b, c) {
  Vh ? r("243") : void 0;Vh = !0;Sh.currentDispatcher = Rh;var d = a.nextExpirationTimeToWorkOn;if (d !== S || a !== R || null === Q) Zh(), R = a, S = d, Q = Gf(R.current, null, S), a.pendingCommitExpirationTime = 0;var e = !1;do {
    try {
      if (b) for (; null !== Q && !ci();) {
        Q = ai(Q);
      } else for (; null !== Q;) {
        Q = ai(Q);
      }
    } catch (C) {
      if (null === Q) e = !0, Nh(C);else {
        null === Q ? r("271") : void 0;var f = Q,
            g = f.return;if (null === g) e = !0, Nh(C);else {
          a: {
            var h = a,
                k = g,
                l = f,
                m = C;g = S;l.effectTag |= 512;l.firstEffect = l.lastEffect = null;if (null !== m && "object" === (typeof m === "undefined" ? "undefined" : _typeof(m)) && "function" === typeof m.then) {
              var p = m;m = k;var v = -1,
                  B = -1;do {
                if (13 === m.tag) {
                  var w = m.alternate;if (null !== w && (w = w.memoizedState, null !== w && w.didTimeout)) {
                    B = 10 * (w.timedOutAt - 2);break;
                  }w = m.pendingProps.maxDuration;if ("number" === typeof w) if (0 >= w) v = 0;else if (-1 === v || w < v) v = w;
                }m = m.return;
              } while (null !== m);m = k;do {
                if (w = 13 === m.tag) void 0 === m.memoizedProps.fallback ? w = !1 : (w = m.memoizedState, w = null === w || !w.didTimeout);if (w) {
                  k = di.bind(null, h, m, l, 0 === (m.mode & 1) ? 1 : g);p.then(k, k);if (0 === (m.mode & 1)) {
                    m.effectTag |= 32;P(l.alternate, l, null, g);
                    l.effectTag &= -513;1 === l.tag && (l.effectTag &= -421, null === l.alternate && (l.tag = 17));break a;
                  }-1 === v ? h = 1073741823 : (-1 === B && (B = 10 * (Pf(h, g) - 2) - 5E3), h = B + v);0 <= h && Wh < h && (Wh = h);m.effectTag |= 1024;m.expirationTime = g;break a;
                }m = m.return;
              } while (null !== m);m = Error("An update was suspended, but no placeholder UI was provided.");
            }Xh = !0;m = bg(m, l);h = k;do {
              switch (h.tag) {case 3:
                  l = m;h.effectTag |= 1024;h.expirationTime = g;g = Mh(h, l, g);Wf(h, g);break a;case 1:
                  if (l = m, k = h.type, p = h.stateNode, 0 === (h.effectTag & 64) && ("function" === typeof k.getDerivedStateFromError || null !== p && "function" === typeof p.componentDidCatch && (null === Ph || !Ph.has(p)))) {
                    h.effectTag |= 1024;h.expirationTime = g;g = Oh(h, l, g);Wf(h, g);break a;
                  }}h = h.return;
            } while (null !== h);
          }Q = $h(f);continue;
        }
      }
    }break;
  } while (1);Vh = !1;fg = eg = dg = Sh.currentDispatcher = null;if (e) R = null, a.finishedWork = null;else if (null !== Q) a.finishedWork = null;else {
    b = a.current.alternate;null === b ? r("281") : void 0;R = null;if (Xh) {
      e = a.latestPendingTime;f = a.latestSuspendedTime;g = a.latestPingedTime;if (0 !== e && e > d || 0 !== f && f > d || 0 !== g && g > d) {
        Of(a, d);ei(a, b, d, a.expirationTime, -1);return;
      }if (!a.didError && !c) {
        a.didError = !0;d = a.nextExpirationTimeToWorkOn = d;c = a.expirationTime = 1;ei(a, b, d, c, -1);return;
      }
    }c || -1 === Wh ? (a.pendingCommitExpirationTime = d, a.finishedWork = b) : (Of(a, d), c = 10 * (Pf(a, d) - 2), c < Wh && (Wh = c), c = 10 * (vg() - 2), c = Wh - c, ei(a, b, d, a.expirationTime, 0 > c ? 0 : c));
  }
}
function Gh(a, b) {
  var c;a: {
    Vh && !Yh ? r("263") : void 0;for (c = a.return; null !== c;) {
      switch (c.tag) {case 1:
          var d = c.stateNode;if ("function" === typeof c.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ph || !Ph.has(d))) {
            a = bg(b, a);a = Oh(c, a, 1);Vf(c, a);xg(c, 1);c = void 0;break a;
          }break;case 3:
          a = bg(b, a);a = Mh(c, a, 1);Vf(c, a);xg(c, 1);c = void 0;break a;}c = c.return;
    }3 === a.tag && (c = bg(b, a), c = Mh(a, c, 1), Vf(a, c), xg(a, 1));c = void 0;
  }return c;
}
function wg(a, b) {
  0 !== Uh ? a = Uh : Vh ? a = Yh ? 1 : S : b.mode & 1 ? (a = fi ? 2 + 10 * (((a - 2 + 15) / 10 | 0) + 1) : 2 + 25 * (((a - 2 + 500) / 25 | 0) + 1), null !== R && a === S && (a += 1)) : a = 1;fi && a > gi && (gi = a);return a;
}
function di(a, b, c, d) {
  var e = a.earliestSuspendedTime;var f = a.latestSuspendedTime;if (0 !== e && d >= e && d <= f) {
    f = e = d;a.didError = !1;var g = a.latestPingedTime;if (0 === g || g < f) a.latestPingedTime = f;Nf(f, a);
  } else e = vg(), e = wg(e, b), Mf(a, e);0 !== (b.mode & 1) && a === R && S === d && (R = null);hi(b, e);0 === (b.mode & 1) && (hi(c, e), 1 === c.tag && null !== c.stateNode && (b = Tf(e), b.tag = 2, Vf(c, b)));c = a.expirationTime;0 !== c && ii(a, c);
}
function hi(a, b) {
  if (0 === a.expirationTime || a.expirationTime > b) a.expirationTime = b;var c = a.alternate;null !== c && (0 === c.expirationTime || c.expirationTime > b) && (c.expirationTime = b);var d = a.return,
      e = null;if (null === d && 3 === a.tag) e = a.stateNode;else for (; null !== d;) {
    c = d.alternate;if (0 === d.childExpirationTime || d.childExpirationTime > b) d.childExpirationTime = b;null !== c && (0 === c.childExpirationTime || c.childExpirationTime > b) && (c.childExpirationTime = b);if (null === d.return && 3 === d.tag) {
      e = d.stateNode;break;
    }d = d.return;
  }return null === e ? null : e;
}function xg(a, b) {
  a = hi(a, b);null !== a && (!Vh && 0 !== S && b < S && Zh(), Mf(a, b), Vh && !Yh && R === a || ii(a, a.expirationTime), ji > ki && (ji = 0, r("185")));
}function li(a, b, c, d, e) {
  var f = Uh;Uh = 1;try {
    return a(b, c, d, e);
  } finally {
    Uh = f;
  }
}var U = null,
    V = null,
    mi = 0,
    ni = void 0,
    W = !1,
    X = null,
    Y = 0,
    gi = 0,
    oi = !1,
    pi = !1,
    qi = null,
    ri = null,
    Z = !1,
    si = !1,
    fi = !1,
    ti = null,
    ui = da.unstable_now(),
    vi = (ui / 10 | 0) + 2,
    wi = vi,
    ki = 50,
    ji = 0,
    xi = null,
    yi = 1;function zi() {
  vi = ((da.unstable_now() - ui) / 10 | 0) + 2;
}
function Ai(a, b) {
  if (0 !== mi) {
    if (b > mi) return;null !== ni && da.unstable_cancelCallback(ni);
  }mi = b;a = da.unstable_now() - ui;ni = da.unstable_scheduleCallback(Bi, { timeout: 10 * (b - 2) - a });
}function ei(a, b, c, d, e) {
  a.expirationTime = d;0 !== e || ci() ? 0 < e && (a.timeoutHandle = kf(Ci.bind(null, a, b, c), e)) : (a.pendingCommitExpirationTime = c, a.finishedWork = b);
}function Ci(a, b, c) {
  a.pendingCommitExpirationTime = c;a.finishedWork = b;zi();wi = vi;Di(a, c);
}function vg() {
  if (W) return wi;Ei();if (0 === Y || 1073741823 === Y) zi(), wi = vi;return wi;
}
function ii(a, b) {
  if (null === a.nextScheduledRoot) a.expirationTime = b, null === V ? (U = V = a, a.nextScheduledRoot = a) : (V = V.nextScheduledRoot = a, V.nextScheduledRoot = U);else {
    var c = a.expirationTime;if (0 === c || b < c) a.expirationTime = b;
  }W || (Z ? si && (X = a, Y = 1, Fi(a, 1, !0)) : 1 === b ? Gi(1, null) : Ai(a, b));
}
function Ei() {
  var a = 0,
      b = null;if (null !== V) for (var c = V, d = U; null !== d;) {
    var e = d.expirationTime;if (0 === e) {
      null === c || null === V ? r("244") : void 0;if (d === d.nextScheduledRoot) {
        U = V = d.nextScheduledRoot = null;break;
      } else if (d === U) U = e = d.nextScheduledRoot, V.nextScheduledRoot = e, d.nextScheduledRoot = null;else if (d === V) {
        V = c;V.nextScheduledRoot = U;d.nextScheduledRoot = null;break;
      } else c.nextScheduledRoot = d.nextScheduledRoot, d.nextScheduledRoot = null;d = c.nextScheduledRoot;
    } else {
      if (0 === a || e < a) a = e, b = d;if (d === V) break;if (1 === a) break;
      c = d;d = d.nextScheduledRoot;
    }
  }X = b;Y = a;
}function Bi(a) {
  if (a.didTimeout && null !== U) {
    zi();var b = U;do {
      var c = b.expirationTime;0 !== c && vi >= c && (b.nextExpirationTimeToWorkOn = vi);b = b.nextScheduledRoot;
    } while (b !== U);
  }Gi(0, a);
}
function Gi(a, b) {
  ri = b;Ei();if (null !== ri) for (zi(), wi = vi; null !== X && 0 !== Y && (0 === a || a >= Y) && (!oi || vi >= Y);) {
    Fi(X, Y, vi >= Y), Ei(), zi(), wi = vi;
  } else for (; null !== X && 0 !== Y && (0 === a || a >= Y);) {
    Fi(X, Y, !0), Ei();
  }null !== ri && (mi = 0, ni = null);0 !== Y && Ai(X, Y);ri = null;oi = !1;ji = 0;xi = null;if (null !== ti) for (a = ti, ti = null, b = 0; b < a.length; b++) {
    var c = a[b];try {
      c._onComplete();
    } catch (d) {
      pi || (pi = !0, qi = d);
    }
  }if (pi) throw a = qi, qi = null, pi = !1, a;
}function Di(a, b) {
  W ? r("253") : void 0;X = a;Y = b;Fi(a, b, !0);Gi(1, null);
}
function Fi(a, b, c) {
  W ? r("245") : void 0;W = !0;if (null === ri || c) {
    var d = a.finishedWork;null !== d ? Hi(a, d, b) : (a.finishedWork = null, d = a.timeoutHandle, -1 !== d && (a.timeoutHandle = -1, lf(d)), bi(a, !1, c), d = a.finishedWork, null !== d && Hi(a, d, b));
  } else d = a.finishedWork, null !== d ? Hi(a, d, b) : (a.finishedWork = null, d = a.timeoutHandle, -1 !== d && (a.timeoutHandle = -1, lf(d)), bi(a, !0, c), d = a.finishedWork, null !== d && (ci() ? a.finishedWork = d : Hi(a, d, b)));W = !1;
}
function Hi(a, b, c) {
  var d = a.firstBatch;if (null !== d && d._expirationTime <= c && (null === ti ? ti = [d] : ti.push(d), d._defer)) {
    a.finishedWork = b;a.expirationTime = 0;return;
  }a.finishedWork = null;a === xi ? ji++ : (xi = a, ji = 0);Yh = Vh = !0;a.current === b ? r("177") : void 0;var e = a.pendingCommitExpirationTime;0 === e ? r("261") : void 0;a.pendingCommitExpirationTime = 0;var f = b.expirationTime,
      g = b.childExpirationTime,
      h = 0 === f || 0 !== g && g < f ? g : f;a.didError = !1;if (0 === h) a.earliestPendingTime = 0, a.latestPendingTime = 0, a.earliestSuspendedTime = 0, a.latestSuspendedTime = 0, a.latestPingedTime = 0;else {
    var k = a.latestPendingTime;0 !== k && (k < h ? a.earliestPendingTime = a.latestPendingTime = 0 : a.earliestPendingTime < h && (a.earliestPendingTime = a.latestPendingTime));var l = a.earliestSuspendedTime;0 === l ? Mf(a, h) : h > a.latestSuspendedTime ? (a.earliestSuspendedTime = 0, a.latestSuspendedTime = 0, a.latestPingedTime = 0, Mf(a, h)) : h < l && Mf(a, h);
  }Nf(0, a);Sh.current = null;if (1 < b.effectTag) {
    if (null !== b.lastEffect) {
      b.lastEffect.nextEffect = b;var m = b.firstEffect;
    } else m = b;
  } else m = b.firstEffect;ff = ce;var p = pe();if (qe(p)) {
    if ("selectionStart" in p) var v = { start: p.selectionStart, end: p.selectionEnd };else a: {
      var B = p.ownerDocument,
          w = B && B.defaultView || window,
          C = w.getSelection && w.getSelection();if (C && 0 !== C.rangeCount) {
        var u = C.anchorNode,
            q = C.anchorOffset,
            A = C.focusNode,
            fe = C.focusOffset;try {
          u.nodeType, A.nodeType;
        } catch (db) {
          v = null;break a;
        }var Ib = 0,
            Jc = -1,
            Kc = -1,
            Ni = 0,
            Oi = 0,
            t = p,
            Jb = null;b: for (;;) {
          for (var Lc;;) {
            t !== u || 0 !== q && 3 !== t.nodeType || (Jc = Ib + q);t !== A || 0 !== fe && 3 !== t.nodeType || (Kc = Ib + fe);3 === t.nodeType && (Ib += t.nodeValue.length);if (null === (Lc = t.firstChild)) break;
            Jb = t;t = Lc;
          }for (;;) {
            if (t === p) break b;Jb === u && ++Ni === q && (Jc = Ib);Jb === A && ++Oi === fe && (Kc = Ib);if (null !== (Lc = t.nextSibling)) break;t = Jb;Jb = t.parentNode;
          }t = Lc;
        }v = -1 === Jc || -1 === Kc ? null : { start: Jc, end: Kc };
      } else v = null;
    }var fh = v || { start: 0, end: 0 };
  } else fh = null;gf = { focusedElem: p, selectionRange: fh };ce = !1;for (T = m; null !== T;) {
    var gh = !1,
        hh = void 0;try {
      for (; null !== T;) {
        if (T.effectTag & 256) {
          var ve = T.alternate;a: {
            var Qb = T;switch (Qb.tag) {case 1:
                if (Qb.effectTag & 256 && null !== ve) {
                  var Zi = ve.memoizedProps,
                      $i = ve.memoizedState,
                      Vc = Qb.stateNode;
                  Vc.props = Qb.memoizedProps;Vc.state = Qb.memoizedState;var aj = Vc.getSnapshotBeforeUpdate(Zi, $i);Vc.__reactInternalSnapshotBeforeUpdate = aj;
                }break a;case 3:case 5:case 6:case 4:case 17:
                break a;default:
                r("163");}
          }
        }T = T.nextEffect;
      }
    } catch (db) {
      gh = !0, hh = db;
    }gh && (null === T ? r("178") : void 0, Gh(T, hh), null !== T && (T = T.nextEffect));
  }for (T = m; null !== T;) {
    var ih = !1,
        jh = void 0;try {
      for (; null !== T;) {
        var we = T.effectTag;we & 16 && Xe(T.stateNode, "");if (we & 128) {
          var kh = T.alternate;if (null !== kh) {
            var Wc = kh.ref;null !== Wc && ("function" === typeof Wc ? Wc(null) : Wc.current = null);
          }
        }switch (we & 14) {case 2:
            Kh(T);T.effectTag &= -3;break;case 6:
            Kh(T);T.effectTag &= -3;Lh(T.alternate, T);break;case 4:
            Lh(T.alternate, T);break;case 8:
            var lh = T;Ih(lh);var Rb = lh;Rb.return = null;Rb.child = null;Rb.alternate && (Rb.alternate.child = null, Rb.alternate.return = null);}T = T.nextEffect;
      }
    } catch (db) {
      ih = !0, jh = db;
    }ih && (null === T ? r("178") : void 0, Gh(T, jh), null !== T && (T = T.nextEffect));
  }var mh = gf,
      bj = pe(),
      E = mh.focusedElem,
      eb = mh.selectionRange;if (bj !== E && E && E.ownerDocument && oe(E.ownerDocument.documentElement, E)) {
    if (null !== eb && qe(E)) {
      var nh = eb.start,
          xe = eb.end;void 0 === xe && (xe = nh);if ("selectionStart" in E) E.selectionStart = nh, E.selectionEnd = Math.min(xe, E.value.length);else {
        var ye = E.ownerDocument || document,
            ba = (ye && ye.defaultView || window).getSelection(),
            oh = E.textContent.length,
            fb = Math.min(eb.start, oh),
            Sb = void 0 === eb.end ? fb : Math.min(eb.end, oh);if (!ba.extend && fb > Sb) {
          var cj = Sb;Sb = fb;fb = cj;
        }var Tb = ne(E, fb),
            Ja = ne(E, Sb);if (Tb && Ja && (1 !== ba.rangeCount || ba.anchorNode !== Tb.node || ba.anchorOffset !== Tb.offset || ba.focusNode !== Ja.node || ba.focusOffset !== Ja.offset)) {
          var Xc = ye.createRange();Xc.setStart(Tb.node, Tb.offset);ba.removeAllRanges();fb > Sb ? (ba.addRange(Xc), ba.extend(Ja.node, Ja.offset)) : (Xc.setEnd(Ja.node, Ja.offset), ba.addRange(Xc));
        }
      }
    }for (var ze = [], gb = E; gb = gb.parentNode;) {
      1 === gb.nodeType && ze.push({ element: gb, left: gb.scrollLeft, top: gb.scrollTop });
    }"function" === typeof E.focus && E.focus();for (var Ae = 0; Ae < ze.length; Ae++) {
      var Yc = ze[Ae];Yc.element.scrollLeft = Yc.left;Yc.element.scrollTop = Yc.top;
    }
  }gf = null;ce = !!ff;ff = null;a.current = b;for (T = m; null !== T;) {
    var ph = !1,
        qh = void 0;try {
      for (var dj = e; null !== T;) {
        var rh = T.effectTag;if (rh & 36) {
          var Zc = void 0,
              hb = T.alternate,
              x = T,
              sh = dj;switch (x.tag) {case 1:
              var ca = x.stateNode;if (x.effectTag & 4) if (null === hb) ca.props = x.memoizedProps, ca.state = x.memoizedState, ca.componentDidMount();else {
                var ej = hb.memoizedProps,
                    fj = hb.memoizedState;ca.props = x.memoizedProps;ca.state = x.memoizedState;ca.componentDidUpdate(ej, fj, ca.__reactInternalSnapshotBeforeUpdate);
              }var th = x.updateQueue;null !== th && (ca.props = x.memoizedProps, ca.state = x.memoizedState, $f(x, th, ca, sh));break;case 3:
              var uh = x.updateQueue;if (null !== uh) {
                var Be = null;if (null !== x.child) switch (x.child.tag) {case 5:
                    Be = x.child.stateNode;break;case 1:
                    Be = x.child.stateNode;}$f(x, uh, Be, sh);
              }break;case 5:
              var gj = x.stateNode;null === hb && x.effectTag & 4 && hf(x.type, x.memoizedProps) && gj.focus();break;case 6:
              break;case 4:
              break;case 12:
              break;case 13:
              if (x.effectTag & 32) {
                x.memoizedState = { alreadyCaptured: !0, didTimeout: !1, timedOutAt: 0 };xg(x, 1);break;
              }var vh = null !== hb ? hb.memoizedState : null,
                  Ub = x.memoizedState,
                  hj = null !== vh ? vh.didTimeout : !1,
                  Ce = x;if (null === Ub) Zc = !1;else if (Zc = Ub.didTimeout) Ce = x.child, Ub.alreadyCaptured = !1, 0 === Ub.timedOutAt && (Ub.timedOutAt = vg());if (Zc !== hj && null !== Ce) a: for (var De = Ce, wh = Zc, z = De;;) {
                if (5 === z.tag) {
                  var ij = z.stateNode;if (wh) ij.style.display = "none";else {
                    var jj = z.stateNode,
                        $c = z.memoizedProps.style,
                        kj = void 0 !== $c && null !== $c && $c.hasOwnProperty("display") ? $c.display : null;jj.style.display = kj;
                  }
                } else if (6 === z.tag) z.stateNode.nodeValue = wh ? "" : z.memoizedProps;else if (null !== z.child) {
                  z.child.return = z;z = z.child;continue;
                }if (z === De) break a;for (; null === z.sibling;) {
                  if (null === z.return || z.return === De) break a;z = z.return;
                }z.sibling.return = z.return;z = z.sibling;
              }break;case 17:
              break;default:
              r("163");}
        }if (rh & 128) {
          var ad = T.ref;if (null !== ad) {
            var xh = T.stateNode;switch (T.tag) {case 5:
                var Ee = xh;break;default:
                Ee = xh;}"function" === typeof ad ? ad(Ee) : ad.current = Ee;
          }
        }var lj = T.nextEffect;T.nextEffect = null;T = lj;
      }
    } catch (db) {
      ph = !0, qh = db;
    }ph && (null === T ? r("178") : void 0, Gh(T, qh), null !== T && (T = T.nextEffect));
  }Vh = Yh = !1;"function" === typeof zf && zf(b.stateNode);var Fe = b.expirationTime,
      Ge = b.childExpirationTime,
      yh = 0 === Fe || 0 !== Ge && Ge < Fe ? Ge : Fe;0 === yh && (Ph = null);a.expirationTime = yh;a.finishedWork = null;
}function ci() {
  return oi ? !0 : null === ri || ri.timeRemaining() > yi ? !1 : oi = !0;
}function Nh(a) {
  null === X ? r("246") : void 0;X.expirationTime = 0;pi || (pi = !0, qi = a);
}function Ii(a, b) {
  var c = Z;Z = !0;try {
    return a(b);
  } finally {
    (Z = c) || W || Gi(1, null);
  }
}function Ji(a, b) {
  if (Z && !si) {
    si = !0;try {
      return a(b);
    } finally {
      si = !1;
    }
  }return a(b);
}
function Ki(a, b, c) {
  if (fi) return a(b, c);Z || W || 0 === gi || (Gi(gi, null), gi = 0);var d = fi,
      e = Z;Z = fi = !0;try {
    return a(b, c);
  } finally {
    fi = d, (Z = e) || W || Gi(1, null);
  }
}
function Li(a, b, c, d, e) {
  var f = b.current;a: if (c) {
    c = c._reactInternalFiber;b: {
      2 === Gd(c) && 1 === c.tag ? void 0 : r("170");var g = c;do {
        switch (g.tag) {case 3:
            g = g.stateNode.context;break b;case 1:
            if (M(g.type)) {
              g = g.stateNode.__reactInternalMemoizedMergedChildContext;break b;
            }}g = g.return;
      } while (null !== g);r("171");g = void 0;
    }if (1 === c.tag) {
      var h = c.type;if (M(h)) {
        c = wf(c, h, g);break a;
      }
    }c = g;
  } else c = qf;null === b.context ? b.context = c : b.pendingContext = c;b = e;e = Tf(d);e.payload = { element: a };b = void 0 === b ? null : b;null !== b && (e.callback = b);
  Vf(f, e);xg(f, d);return d;
}function Mi(a, b, c, d) {
  var e = b.current,
      f = vg();e = wg(f, e);return Li(a, b, c, e, d);
}function Pi(a) {
  a = a.current;if (!a.child) return null;switch (a.child.tag) {case 5:
      return a.child.stateNode;default:
      return a.child.stateNode;}
}function Qi(a, b, c) {
  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;return { $$typeof: nc, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
}
Nb = function Nb(a, b, c) {
  switch (b) {case "input":
      Tc(a, c);b = c.name;if ("radio" === c.type && null != b) {
        for (c = a; c.parentNode;) {
          c = c.parentNode;
        }c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');for (b = 0; b < c.length; b++) {
          var d = c[b];if (d !== a && d.form === a.form) {
            var e = Qa(d);e ? void 0 : r("90");jc(d);Tc(d, e);
          }
        }
      }break;case "textarea":
      Qe(a, c);break;case "select":
      b = c.value, null != b && Ne(a, !!c.multiple, b, !1);}
};
function Ri(a) {
  var b = 2 + 25 * (((vg() - 2 + 500) / 25 | 0) + 1);b <= Th && (b = Th + 1);this._expirationTime = Th = b;this._root = a;this._callbacks = this._next = null;this._hasChildren = this._didComplete = !1;this._children = null;this._defer = !0;
}Ri.prototype.render = function (a) {
  this._defer ? void 0 : r("250");this._hasChildren = !0;this._children = a;var b = this._root._internalRoot,
      c = this._expirationTime,
      d = new Si();Li(a, b, null, c, d._onCommit);return d;
};
Ri.prototype.then = function (a) {
  if (this._didComplete) a();else {
    var b = this._callbacks;null === b && (b = this._callbacks = []);b.push(a);
  }
};
Ri.prototype.commit = function () {
  var a = this._root._internalRoot,
      b = a.firstBatch;this._defer && null !== b ? void 0 : r("251");if (this._hasChildren) {
    var c = this._expirationTime;if (b !== this) {
      this._hasChildren && (c = this._expirationTime = b._expirationTime, this.render(this._children));for (var d = null, e = b; e !== this;) {
        d = e, e = e._next;
      }null === d ? r("251") : void 0;d._next = e._next;this._next = b;a.firstBatch = this;
    }this._defer = !1;Di(a, c);b = this._next;this._next = null;b = a.firstBatch = b;null !== b && b._hasChildren && b.render(b._children);
  } else this._next = null, this._defer = !1;
};Ri.prototype._onComplete = function () {
  if (!this._didComplete) {
    this._didComplete = !0;var a = this._callbacks;if (null !== a) for (var b = 0; b < a.length; b++) {
      (0, a[b])();
    }
  }
};function Si() {
  this._callbacks = null;this._didCommit = !1;this._onCommit = this._onCommit.bind(this);
}Si.prototype.then = function (a) {
  if (this._didCommit) a();else {
    var b = this._callbacks;null === b && (b = this._callbacks = []);b.push(a);
  }
};
Si.prototype._onCommit = function () {
  if (!this._didCommit) {
    this._didCommit = !0;var a = this._callbacks;if (null !== a) for (var b = 0; b < a.length; b++) {
      var c = a[b];"function" !== typeof c ? r("191", c) : void 0;c();
    }
  }
};
function Ti(a, b, c) {
  b = N(3, null, null, b ? 3 : 0);a = { current: b, containerInfo: a, pendingChildren: null, earliestPendingTime: 0, latestPendingTime: 0, earliestSuspendedTime: 0, latestSuspendedTime: 0, latestPingedTime: 0, didError: !1, pendingCommitExpirationTime: 0, finishedWork: null, timeoutHandle: -1, context: null, pendingContext: null, hydrate: c, nextExpirationTimeToWorkOn: 0, expirationTime: 0, firstBatch: null, nextScheduledRoot: null };this._internalRoot = b.stateNode = a;
}
Ti.prototype.render = function (a, b) {
  var c = this._internalRoot,
      d = new Si();b = void 0 === b ? null : b;null !== b && d.then(b);Mi(a, c, null, d._onCommit);return d;
};Ti.prototype.unmount = function (a) {
  var b = this._internalRoot,
      c = new Si();a = void 0 === a ? null : a;null !== a && c.then(a);Mi(null, b, null, c._onCommit);return c;
};Ti.prototype.legacy_renderSubtreeIntoContainer = function (a, b, c) {
  var d = this._internalRoot,
      e = new Si();c = void 0 === c ? null : c;null !== c && e.then(c);Mi(b, d, a, e._onCommit);return e;
};
Ti.prototype.createBatch = function () {
  var a = new Ri(this),
      b = a._expirationTime,
      c = this._internalRoot,
      d = c.firstBatch;if (null === d) c.firstBatch = a, a._next = null;else {
    for (c = null; null !== d && d._expirationTime <= b;) {
      c = d, d = d._next;
    }a._next = d;null !== c && (c._next = a);
  }return a;
};function Ui(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}Yb = Ii;Zb = Ki;$b = function $b() {
  W || 0 === gi || (Gi(gi, null), gi = 0);
};
function Vi(a, b) {
  b || (b = a ? 9 === a.nodeType ? a.documentElement : a.firstChild : null, b = !(!b || 1 !== b.nodeType || !b.hasAttribute("data-reactroot")));if (!b) for (var c; c = a.lastChild;) {
    a.removeChild(c);
  }return new Ti(a, !1, b);
}
function Wi(a, b, c, d, e) {
  Ui(c) ? void 0 : r("200");var f = c._reactRootContainer;if (f) {
    if ("function" === typeof e) {
      var g = e;e = function e() {
        var a = Pi(f._internalRoot);g.call(a);
      };
    }null != a ? f.legacy_renderSubtreeIntoContainer(a, b, e) : f.render(b, e);
  } else {
    f = c._reactRootContainer = Vi(c, d);if ("function" === typeof e) {
      var h = e;e = function e() {
        var a = Pi(f._internalRoot);h.call(a);
      };
    }Ji((function () {
      null != a ? f.legacy_renderSubtreeIntoContainer(a, b, e) : f.render(b, e);
    }));
  }return Pi(f._internalRoot);
}
function Xi(a, b) {
  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;Ui(b) ? void 0 : r("200");return Qi(a, b, null, c);
}
var Yi = { createPortal: Xi, findDOMNode: function findDOMNode(a) {
    if (null == a) return null;if (1 === a.nodeType) return a;var b = a._reactInternalFiber;void 0 === b && ("function" === typeof a.render ? r("188") : r("268", Object.keys(a)));a = Jd(b);a = null === a ? null : a.stateNode;return a;
  }, hydrate: function hydrate(a, b, c) {
    return Wi(null, a, b, !0, c);
  }, render: function render(a, b, c) {
    return Wi(null, a, b, !1, c);
  }, unstable_renderSubtreeIntoContainer: function unstable_renderSubtreeIntoContainer(a, b, c, d) {
    null == a || void 0 === a._reactInternalFiber ? r("38") : void 0;return Wi(a, b, c, !1, d);
  }, unmountComponentAtNode: function unmountComponentAtNode(a) {
    Ui(a) ? void 0 : r("40");return a._reactRootContainer ? (Ji((function () {
      Wi(null, null, a, !1, (function () {
        a._reactRootContainer = null;
      }));
    })), !0) : !1;
  }, unstable_createPortal: function unstable_createPortal() {
    return Xi.apply(void 0, arguments);
  }, unstable_batchedUpdates: Ii, unstable_interactiveUpdates: Ki, flushSync: function flushSync(a, b) {
    W ? r("187") : void 0;var c = Z;Z = !0;try {
      return li(a, b);
    } finally {
      Z = c, Gi(1, null);
    }
  }, unstable_flushControlled: function unstable_flushControlled(a) {
    var b = Z;Z = !0;try {
      li(a);
    } finally {
      (Z = b) || W || Gi(1, null);
    }
  }, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: { Events: [Oa, Pa, Qa, Ga.injectEventPluginsByName, sa, Wa, function (a) {
      Ba(a, Va);
    }, Wb, Xb, ee, Ia] }, unstable_createRoot: function unstable_createRoot(a, b) {
    Ui(a) ? void 0 : r("278");return new Ti(a, !0, null != b && !0 === b.hydrate);
  } };(function (a) {
  var b = a.findFiberByHostInstance;return Cf(n({}, a, { findHostInstanceByFiber: function findHostInstanceByFiber(a) {
      a = Jd(a);return null === a ? null : a.stateNode;
    }, findFiberByHostInstance: function findFiberByHostInstance(a) {
      return b ? b(a) : null;
    } }));
})({ findFiberByHostInstance: Na, bundleType: 0, version: "16.6.0", rendererPackageName: "react-dom" });
var mj = { default: Yi },
    nj = mj && Yi || mj;module.exports = nj.default || nj;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(33);
} else {}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.6.0
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", { value: !0 });var c = null,
    f = 3,
    h = -1,
    k = -1,
    l = !1,
    m = !1,
    n = "object" === (typeof performance === "undefined" ? "undefined" : _typeof(performance)) && "function" === typeof performance.now,
    q = { timeRemaining: n ? function () {
    if (null !== c && c.expirationTime < k) return 0;var a = p() - performance.now();return 0 < a ? a : 0;
  } : function () {
    if (null !== c && c.expirationTime < k) return 0;var a = p() - Date.now();return 0 < a ? a : 0;
  }, didTimeout: !1 };function r() {
  if (!l) {
    var a = c.expirationTime;m ? t() : m = !0;_u(v, a);
  }
}
function w() {
  var a = c,
      b = c.next;if (c === b) c = null;else {
    var d = c.previous;c = d.next = b;b.previous = d;
  }a.next = a.previous = null;d = a.callback;b = a.expirationTime;a = a.priorityLevel;var e = f,
      R = k;f = a;k = b;try {
    var g = d(q);
  } finally {
    f = e, k = R;
  }if ("function" === typeof g) if (g = { callback: g, priorityLevel: a, expirationTime: b, next: null, previous: null }, null === c) c = g.next = g.previous = g;else {
    d = null;a = c;do {
      if (a.expirationTime >= b) {
        d = a;break;
      }a = a.next;
    } while (a !== c);null === d ? d = c : d === c && (c = g, r());b = d.previous;b.next = d.previous = g;g.next = d;g.previous = b;
  }
}function x() {
  if (-1 === h && null !== c && 1 === c.priorityLevel) {
    l = !0;q.didTimeout = !0;try {
      do {
        w();
      } while (null !== c && 1 === c.priorityLevel);
    } finally {
      l = !1, null !== c ? r() : m = !1;
    }
  }
}function v(a) {
  l = !0;q.didTimeout = a;try {
    if (a) for (; null !== c;) {
      var b = exports.unstable_now();if (c.expirationTime <= b) {
        do {
          w();
        } while (null !== c && c.expirationTime <= b);
      } else break;
    } else if (null !== c) {
      do {
        w();
      } while (null !== c && 0 < p() - exports.unstable_now());
    }
  } finally {
    l = !1, null !== c ? r() : m = !1, x();
  }
}
var y = Date,
    z = "function" === typeof setTimeout ? setTimeout : void 0,
    A = "function" === typeof clearTimeout ? clearTimeout : void 0,
    B = "function" === typeof requestAnimationFrame ? requestAnimationFrame : void 0,
    C = "function" === typeof cancelAnimationFrame ? cancelAnimationFrame : void 0,
    D,
    E;function F(a) {
  D = B((function (b) {
    A(E);a(b);
  }));E = z((function () {
    C(D);a(exports.unstable_now());
  }), 100);
}if (n) {
  var G = performance;exports.unstable_now = function () {
    return G.now();
  };
} else exports.unstable_now = function () {
  return y.now();
};var _u, t, p;
if ("undefined" !== typeof window && window._schedMock) {
  var H = window._schedMock;_u = H[0];t = H[1];p = H[2];
} else if ("undefined" === typeof window || "function" !== typeof window.addEventListener) {
  var I = null,
      J = -1,
      K = function K(a, b) {
    if (null !== I) {
      var d = I;I = null;try {
        J = b, d(a);
      } finally {
        J = -1;
      }
    }
  };_u = function u(a, b) {
    -1 !== J ? setTimeout(_u, 0, a, b) : (I = a, setTimeout(K, b, !0, b), setTimeout(K, 1073741823, !1, 1073741823));
  };t = function t() {
    I = null;
  };p = function p() {
    return Infinity;
  };exports.unstable_now = function () {
    return -1 === J ? 0 : J;
  };
} else {
  "undefined" !== typeof console && ("function" !== typeof B && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" !== typeof C && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));var L = null,
      M = !1,
      N = -1,
      O = !1,
      P = !1,
      Q = 0,
      S = 33,
      T = 33;p = function p() {
    return Q;
  };var U = "__reactIdleCallback$" + Math.random().toString(36).slice(2);window.addEventListener("message", (function (a) {
    if (a.source === window && a.data === U) {
      M = !1;a = L;var b = N;L = null;N = -1;var d = exports.unstable_now(),
          e = !1;if (0 >= Q - d) if (-1 !== b && b <= d) e = !0;else {
        O || (O = !0, F(V));L = a;N = b;return;
      }if (null !== a) {
        P = !0;try {
          a(e);
        } finally {
          P = !1;
        }
      }
    }
  }), !1);var V = function V(a) {
    if (null !== L) {
      F(V);var b = a - Q + T;b < T && S < T ? (8 > b && (b = 8), T = b < S ? S : b) : S = b;Q = a + T;M || (M = !0, window.postMessage(U, "*"));
    } else O = !1;
  };_u = function _u(a, b) {
    L = a;N = b;P || 0 > b ? window.postMessage(U, "*") : O || (O = !0, F(V));
  };t = function t() {
    L = null;M = !1;N = -1;
  };
}exports.unstable_ImmediatePriority = 1;
exports.unstable_UserBlockingPriority = 2;exports.unstable_NormalPriority = 3;exports.unstable_IdlePriority = 4;exports.unstable_runWithPriority = function (a, b) {
  switch (a) {case 1:case 2:case 3:case 4:
      break;default:
      a = 3;}var d = f,
      e = h;f = a;h = exports.unstable_now();try {
    return b();
  } finally {
    f = d, h = e, x();
  }
};
exports.unstable_scheduleCallback = function (a, b) {
  var d = -1 !== h ? h : exports.unstable_now();if ("object" === (typeof b === "undefined" ? "undefined" : _typeof(b)) && null !== b && "number" === typeof b.timeout) b = d + b.timeout;else switch (f) {case 1:
      b = d + -1;break;case 2:
      b = d + 250;break;case 4:
      b = d + 1073741823;break;default:
      b = d + 5E3;}a = { callback: a, priorityLevel: f, expirationTime: b, next: null, previous: null };if (null === c) c = a.next = a.previous = a, r();else {
    d = null;var e = c;do {
      if (e.expirationTime > b) {
        d = e;break;
      }e = e.next;
    } while (e !== c);null === d ? d = c : d === c && (c = a, r());b = d.previous;b.next = d.previous = a;a.next = d;a.previous = b;
  }return a;
};exports.unstable_cancelCallback = function (a) {
  var b = a.next;if (null !== b) {
    if (b === a) c = null;else {
      a === c && (c = b);var d = a.previous;d.next = b;b.previous = d;
    }a.next = a.previous = null;
  }
};exports.unstable_wrapCallback = function (a) {
  var b = f;return function () {
    var d = f,
        e = h;f = b;h = exports.unstable_now();try {
      return a.apply(this, arguments);
    } finally {
      f = d, h = e, x();
    }
  };
};exports.unstable_getCurrentPriorityLevel = function () {
  return f;
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactHotLoader = __webpack_require__(36);

var _socket = __webpack_require__(38);

var _socket2 = _interopRequireDefault(_socket);

var _App = __webpack_require__(64);

var _App2 = _interopRequireDefault(_App);

var _MessageForm = __webpack_require__(67);

var _MessageForm2 = _interopRequireDefault(_MessageForm);

var _MessageList = __webpack_require__(70);

var _MessageList2 = _interopRequireDefault(_MessageList);

var _UsersList = __webpack_require__(73);

var _UsersList2 = _interopRequireDefault(_UsersList);

var _UserForm = __webpack_require__(76);

var _UserForm2 = _interopRequireDefault(_UserForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var socket = (0, _socket2.default)('/');

var App = (function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = { users: [], messages: [], text: '', name: '' };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            socket.on('message', (function (message) {
                return _this2.messageReceive(message);
            }));
            socket.on('update', (function (_ref) {
                var users = _ref.users;
                return _this2.chatUpdate(users);
            }));
        }
    }, {
        key: 'messageReceive',
        value: function messageReceive(message) {
            var messages = [message].concat(_toConsumableArray(this.state.messages));
            this.setState({ messages: messages });
        }
    }, {
        key: 'chatUpdate',
        value: function chatUpdate(users) {
            this.setState({ users: users });
        }
    }, {
        key: 'handleMessageSubmit',
        value: function handleMessageSubmit(message) {
            var messages = [message].concat(_toConsumableArray(this.state.messages));
            this.setState({ messages: messages });
            socket.emit('message', message);
        }
    }, {
        key: 'handleUserSubmit',
        value: function handleUserSubmit(name) {
            this.setState({ name: name });
            socket.emit('join', name);
        }
    }, {
        key: 'render',
        value: function render() {
            return this.state.name !== '' ? this.renderLayout() : this.renderUserForm();
        }
    }, {
        key: 'renderLayout',
        value: function renderLayout() {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                { className: _App2.default.App },
                _react2.default.createElement(
                    'div',
                    { className: _App2.default.AppHeader },
                    _react2.default.createElement(
                        'div',
                        { className: _App2.default.AppTitle },
                        'ChatApp'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: _App2.default.AppRoom },
                        'App room'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: _App2.default.AppBody },
                    _react2.default.createElement(_UsersList2.default, {
                        users: this.state.users
                    }),
                    _react2.default.createElement(
                        'div',
                        { className: _App2.default.MessageWrapper },
                        _react2.default.createElement(_MessageList2.default, {
                            messages: this.state.messages
                        }),
                        _react2.default.createElement(_MessageForm2.default, {
                            onMessageSubmit: function onMessageSubmit(message) {
                                return _this3.handleMessageSubmit(message);
                            },
                            name: this.state.name
                        })
                    )
                )
            );
        }
    }, {
        key: 'renderUserForm',
        value: function renderUserForm() {
            var _this4 = this;

            return _react2.default.createElement(_UserForm2.default, { onUserSubmit: function onUserSubmit(name) {
                    return _this4.handleUserSubmit(name);
                } });
        }
    }]);

    return App;
})(_react.Component);

;

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(35)(module)))

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var evalAllowed = false;
try {
  eval('evalAllowed = true');
} catch (e) {}
// eval not allowed due to CSP


// RHL needs setPrototypeOf to operate Component inheritance, and eval to patch methods
var platformSupported = !!Object.setPrototypeOf && evalAllowed;

if (true) {
  if (false) {}
  module.exports = __webpack_require__(37);
} else {}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _interopDefault(t) {
  return t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "default" in t ? t.default : t;
}Object.defineProperty(exports, "__esModule", { value: !0 });var React = _interopDefault(__webpack_require__(1)),
    classCallCheck = function classCallCheck(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
},
    inherits = function inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
},
    possibleConstructorReturn = function possibleConstructorReturn(t, e) {
  if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
},
    AppContainer = (function (t) {
  function e() {
    return classCallCheck(this, e), possibleConstructorReturn(this, t.apply(this, arguments));
  }return inherits(e, t), e.prototype.render = function () {
    return React.Children.only(this.props.children);
  }, e;
})(React.Component),
    hot_prod = function hot_prod() {
  return function (t) {
    return t;
  };
},
    areComponentsEqual = function areComponentsEqual(t, e) {
  return t === e;
},
    setConfig = function setConfig() {},
    cold = function cold(t) {
  return t;
};exports.AppContainer = AppContainer, exports.hot = hot_prod, exports.areComponentsEqual = areComponentsEqual, exports.setConfig = setConfig, exports.cold = cold;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Module dependencies.
 */

var url = __webpack_require__(39);
var parser = __webpack_require__(12);
var Manager = __webpack_require__(19);
var debug = __webpack_require__(6)('socket.io-client');

/**
 * Module exports.
 */

module.exports = exports = lookup;

/**
 * Managers cache.
 */

var cache = exports.managers = {};

/**
 * Looks up an existing `Manager` for multiplexing.
 * If the user summons:
 *
 *   `io('http://localhost/a');`
 *   `io('http://localhost/b');`
 *
 * We reuse the existing instance based on same scheme/port/host,
 * and we initialize sockets for each namespace.
 *
 * @api public
 */

function lookup(uri, opts) {
  if ((typeof uri === 'undefined' ? 'undefined' : _typeof(uri)) === 'object') {
    opts = uri;
    uri = undefined;
  }

  opts = opts || {};

  var parsed = url(uri);
  var source = parsed.source;
  var id = parsed.id;
  var path = parsed.path;
  var sameNamespace = cache[id] && path in cache[id].nsps;
  var newConnection = opts.forceNew || opts['force new connection'] || false === opts.multiplex || sameNamespace;

  var io;

  if (newConnection) {
    debug('ignoring socket cache for %s', source);
    io = Manager(source, opts);
  } else {
    if (!cache[id]) {
      debug('new io instance for %s', source);
      cache[id] = Manager(source, opts);
    }
    io = cache[id];
  }
  if (parsed.query && !opts.query) {
    opts.query = parsed.query;
  }
  return io.socket(parsed.path, opts);
}

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = parser.protocol;

/**
 * `connect`.
 *
 * @param {String} uri
 * @api public
 */

exports.connect = lookup;

/**
 * Expose constructors for standalone build.
 *
 * @api public
 */

exports.Manager = __webpack_require__(19);
exports.Socket = __webpack_require__(25);

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/**
 * Module dependencies.
 */

var parseuri = __webpack_require__(17);
var debug = __webpack_require__(6)('socket.io-client:url');

/**
 * Module exports.
 */

module.exports = url;

/**
 * URL parser.
 *
 * @param {String} url
 * @param {Object} An object meant to mimic window.location.
 *                 Defaults to window.location.
 * @api public
 */

function url(uri, loc) {
  var obj = uri;

  // default to window.location
  loc = loc || global.location;
  if (null == uri) uri = loc.protocol + '//' + loc.host;

  // relative path support
  if ('string' === typeof uri) {
    if ('/' === uri.charAt(0)) {
      if ('/' === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }

    if (!/^(https?|wss?):\/\//.test(uri)) {
      debug('protocol-less url %s', uri);
      if ('undefined' !== typeof loc) {
        uri = loc.protocol + '//' + uri;
      } else {
        uri = 'https://' + uri;
      }
    }

    // parse
    debug('parse %s', uri);
    obj = parseuri(uri);
  }

  // make sure we treat `localhost:80` and `localhost` equally
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = '80';
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = '443';
    }
  }

  obj.path = obj.path || '/';

  var ipv6 = obj.host.indexOf(':') !== -1;
  var host = ipv6 ? '[' + obj.host + ']' : obj.host;

  // define unique id
  obj.id = obj.protocol + '://' + host + ':' + obj.port;
  // define href
  obj.href = obj.protocol + '://' + host + (loc && loc.port === obj.port ? '' : ':' + obj.port);

  return obj;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(11);

/**
 * Active `debug` instances.
 */
exports.instances = [];

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0,
      i;

  for (i in namespace) {
    hash = (hash << 5) - hash + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, (function (match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    }));

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy;

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);

  return debug;
}

function destroy() {
  var index = exports.instances.indexOf(this);
  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(42);
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();

/**
 * Colors.
 */

exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // Internet Explorer and Edge do not support colors.
  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance ||
  // is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) ||
  // is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 ||
  // double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit');

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, (function (match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  }));

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === (typeof console === 'undefined' ? 'undefined' : _typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch (e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch (e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(10)))

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(11);

/**
 * Active `debug` instances.
 */
exports.instances = [];

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0,
      i;

  for (i in namespace) {
    hash = (hash << 5) - hash + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, (function (match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    }));

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy;

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);

  return debug;
}

function destroy() {
  var index = exports.instances.indexOf(this);
  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*global Blob,File*/

/**
 * Module requirements
 */

var isArray = __webpack_require__(13);
var isBuf = __webpack_require__(18);
var toString = Object.prototype.toString;
var withNativeBlob = typeof global.Blob === 'function' || toString.call(global.Blob) === '[object BlobConstructor]';
var withNativeFile = typeof global.File === 'function' || toString.call(global.File) === '[object FileConstructor]';

/**
 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
 * Anything with blobs or files should be fed through removeBlobs before coming
 * here.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @api public
 */

exports.deconstructPacket = function (packet) {
  var buffers = [];
  var packetData = packet.data;
  var pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length; // number of binary 'attachments'
  return { packet: pack, buffers: buffers };
};

function _deconstructPacket(data, buffers) {
  if (!data) return data;

  if (isBuf(data)) {
    var placeholder = { _placeholder: true, num: buffers.length };
    buffers.push(data);
    return placeholder;
  } else if (isArray(data)) {
    var newData = new Array(data.length);
    for (var i = 0; i < data.length; i++) {
      newData[i] = _deconstructPacket(data[i], buffers);
    }
    return newData;
  } else if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object' && !(data instanceof Date)) {
    var newData = {};
    for (var key in data) {
      newData[key] = _deconstructPacket(data[key], buffers);
    }
    return newData;
  }
  return data;
}

/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @api public
 */

exports.reconstructPacket = function (packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  packet.attachments = undefined; // no longer useful
  return packet;
};

function _reconstructPacket(data, buffers) {
  if (!data) return data;

  if (data && data._placeholder) {
    return buffers[data.num]; // appropriate buffer (should be natural order anyway)
  } else if (isArray(data)) {
    for (var i = 0; i < data.length; i++) {
      data[i] = _reconstructPacket(data[i], buffers);
    }
  } else if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
    for (var key in data) {
      data[key] = _reconstructPacket(data[key], buffers);
    }
  }

  return data;
}

/**
 * Asynchronously removes Blobs or Files from data via
 * FileReader's readAsArrayBuffer method. Used before encoding
 * data as msgpack. Calls callback with the blobless data.
 *
 * @param {Object} data
 * @param {Function} callback
 * @api private
 */

exports.removeBlobs = function (data, callback) {
  function _removeBlobs(obj, curKey, containingObject) {
    if (!obj) return obj;

    // convert any blob
    if (withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File) {
      pendingBlobs++;

      // async filereader
      var fileReader = new FileReader();
      fileReader.onload = function () {
        // this.result == arraybuffer
        if (containingObject) {
          containingObject[curKey] = this.result;
        } else {
          bloblessData = this.result;
        }

        // if nothing pending its callback time
        if (! --pendingBlobs) {
          callback(bloblessData);
        }
      };

      fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
    } else if (isArray(obj)) {
      // handle array
      for (var i = 0; i < obj.length; i++) {
        _removeBlobs(obj[i], i, obj);
      }
    } else if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && !isBuf(obj)) {
      // and object
      for (var key in obj) {
        _removeBlobs(obj[key], key, obj);
      }
    }
  }

  var pendingBlobs = 0;
  var bloblessData = data;
  _removeBlobs(bloblessData);
  if (!pendingBlobs) {
    callback(bloblessData);
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(45);

/**
 * Exports parser
 *
 * @api public
 *
 */
module.exports.parser = __webpack_require__(3);

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Module dependencies.
 */

var transports = __webpack_require__(20);
var Emitter = __webpack_require__(2);
var debug = __webpack_require__(9)('engine.io-client:socket');
var index = __webpack_require__(24);
var parser = __webpack_require__(3);
var parseuri = __webpack_require__(17);
var parseqs = __webpack_require__(7);

/**
 * Module exports.
 */

module.exports = Socket;

/**
 * Socket constructor.
 *
 * @param {String|Object} uri or options
 * @param {Object} options
 * @api public
 */

function Socket(uri, opts) {
  if (!(this instanceof Socket)) return new Socket(uri, opts);

  opts = opts || {};

  if (uri && 'object' === (typeof uri === 'undefined' ? 'undefined' : _typeof(uri))) {
    opts = uri;
    uri = null;
  }

  if (uri) {
    uri = parseuri(uri);
    opts.hostname = uri.host;
    opts.secure = uri.protocol === 'https' || uri.protocol === 'wss';
    opts.port = uri.port;
    if (uri.query) opts.query = uri.query;
  } else if (opts.host) {
    opts.hostname = parseuri(opts.host).host;
  }

  this.secure = null != opts.secure ? opts.secure : global.location && 'https:' === location.protocol;

  if (opts.hostname && !opts.port) {
    // if no port is specified manually, use the protocol default
    opts.port = this.secure ? '443' : '80';
  }

  this.agent = opts.agent || false;
  this.hostname = opts.hostname || (global.location ? location.hostname : 'localhost');
  this.port = opts.port || (global.location && location.port ? location.port : this.secure ? 443 : 80);
  this.query = opts.query || {};
  if ('string' === typeof this.query) this.query = parseqs.decode(this.query);
  this.upgrade = false !== opts.upgrade;
  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
  this.forceJSONP = !!opts.forceJSONP;
  this.jsonp = false !== opts.jsonp;
  this.forceBase64 = !!opts.forceBase64;
  this.enablesXDR = !!opts.enablesXDR;
  this.timestampParam = opts.timestampParam || 't';
  this.timestampRequests = opts.timestampRequests;
  this.transports = opts.transports || ['polling', 'websocket'];
  this.transportOptions = opts.transportOptions || {};
  this.readyState = '';
  this.writeBuffer = [];
  this.prevBufferLen = 0;
  this.policyPort = opts.policyPort || 843;
  this.rememberUpgrade = opts.rememberUpgrade || false;
  this.binaryType = null;
  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
  this.perMessageDeflate = false !== opts.perMessageDeflate ? opts.perMessageDeflate || {} : false;

  if (true === this.perMessageDeflate) this.perMessageDeflate = {};
  if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
    this.perMessageDeflate.threshold = 1024;
  }

  // SSL options for Node.js client
  this.pfx = opts.pfx || null;
  this.key = opts.key || null;
  this.passphrase = opts.passphrase || null;
  this.cert = opts.cert || null;
  this.ca = opts.ca || null;
  this.ciphers = opts.ciphers || null;
  this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? true : opts.rejectUnauthorized;
  this.forceNode = !!opts.forceNode;

  // other options for Node.js client
  var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) === 'object' && global;
  if (freeGlobal.global === freeGlobal) {
    if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
      this.extraHeaders = opts.extraHeaders;
    }

    if (opts.localAddress) {
      this.localAddress = opts.localAddress;
    }
  }

  // set on handshake
  this.id = null;
  this.upgrades = null;
  this.pingInterval = null;
  this.pingTimeout = null;

  // set on heartbeat
  this.pingIntervalTimer = null;
  this.pingTimeoutTimer = null;

  this.open();
}

Socket.priorWebsocketSuccess = false;

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Protocol version.
 *
 * @api public
 */

Socket.protocol = parser.protocol; // this is an int

/**
 * Expose deps for legacy compatibility
 * and standalone browser access.
 */

Socket.Socket = Socket;
Socket.Transport = __webpack_require__(15);
Socket.transports = __webpack_require__(20);
Socket.parser = __webpack_require__(3);

/**
 * Creates transport of the given type.
 *
 * @param {String} transport name
 * @return {Transport}
 * @api private
 */

Socket.prototype.createTransport = function (name) {
  debug('creating transport "%s"', name);
  var query = clone(this.query);

  // append engine.io protocol identifier
  query.EIO = parser.protocol;

  // transport name
  query.transport = name;

  // per-transport options
  var options = this.transportOptions[name] || {};

  // session id if we already have one
  if (this.id) query.sid = this.id;

  var transport = new transports[name]({
    query: query,
    socket: this,
    agent: options.agent || this.agent,
    hostname: options.hostname || this.hostname,
    port: options.port || this.port,
    secure: options.secure || this.secure,
    path: options.path || this.path,
    forceJSONP: options.forceJSONP || this.forceJSONP,
    jsonp: options.jsonp || this.jsonp,
    forceBase64: options.forceBase64 || this.forceBase64,
    enablesXDR: options.enablesXDR || this.enablesXDR,
    timestampRequests: options.timestampRequests || this.timestampRequests,
    timestampParam: options.timestampParam || this.timestampParam,
    policyPort: options.policyPort || this.policyPort,
    pfx: options.pfx || this.pfx,
    key: options.key || this.key,
    passphrase: options.passphrase || this.passphrase,
    cert: options.cert || this.cert,
    ca: options.ca || this.ca,
    ciphers: options.ciphers || this.ciphers,
    rejectUnauthorized: options.rejectUnauthorized || this.rejectUnauthorized,
    perMessageDeflate: options.perMessageDeflate || this.perMessageDeflate,
    extraHeaders: options.extraHeaders || this.extraHeaders,
    forceNode: options.forceNode || this.forceNode,
    localAddress: options.localAddress || this.localAddress,
    requestTimeout: options.requestTimeout || this.requestTimeout,
    protocols: options.protocols || void 0
  });

  return transport;
};

function clone(obj) {
  var o = {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = obj[i];
    }
  }
  return o;
}

/**
 * Initializes transport to use and starts probe.
 *
 * @api private
 */
Socket.prototype.open = function () {
  var transport;
  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') !== -1) {
    transport = 'websocket';
  } else if (0 === this.transports.length) {
    // Emit error on next tick so it can be listened to
    var self = this;
    setTimeout((function () {
      self.emit('error', 'No transports available');
    }), 0);
    return;
  } else {
    transport = this.transports[0];
  }
  this.readyState = 'opening';

  // Retry with the next transport if the transport is disabled (jsonp: false)
  try {
    transport = this.createTransport(transport);
  } catch (e) {
    this.transports.shift();
    this.open();
    return;
  }

  transport.open();
  this.setTransport(transport);
};

/**
 * Sets the current transport. Disables the existing one (if any).
 *
 * @api private
 */

Socket.prototype.setTransport = function (transport) {
  debug('setting transport %s', transport.name);
  var self = this;

  if (this.transport) {
    debug('clearing existing transport %s', this.transport.name);
    this.transport.removeAllListeners();
  }

  // set up transport
  this.transport = transport;

  // set up transport listeners
  transport.on('drain', (function () {
    self.onDrain();
  })).on('packet', (function (packet) {
    self.onPacket(packet);
  })).on('error', (function (e) {
    self.onError(e);
  })).on('close', (function () {
    self.onClose('transport close');
  }));
};

/**
 * Probes a transport.
 *
 * @param {String} transport name
 * @api private
 */

Socket.prototype.probe = function (name) {
  debug('probing transport "%s"', name);
  var transport = this.createTransport(name, { probe: 1 });
  var failed = false;
  var self = this;

  Socket.priorWebsocketSuccess = false;

  function onTransportOpen() {
    if (self.onlyBinaryUpgrades) {
      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
      failed = failed || upgradeLosesBinary;
    }
    if (failed) return;

    debug('probe transport "%s" opened', name);
    transport.send([{ type: 'ping', data: 'probe' }]);
    transport.once('packet', (function (msg) {
      if (failed) return;
      if ('pong' === msg.type && 'probe' === msg.data) {
        debug('probe transport "%s" pong', name);
        self.upgrading = true;
        self.emit('upgrading', transport);
        if (!transport) return;
        Socket.priorWebsocketSuccess = 'websocket' === transport.name;

        debug('pausing current transport "%s"', self.transport.name);
        self.transport.pause((function () {
          if (failed) return;
          if ('closed' === self.readyState) return;
          debug('changing transport and sending upgrade packet');

          cleanup();

          self.setTransport(transport);
          transport.send([{ type: 'upgrade' }]);
          self.emit('upgrade', transport);
          transport = null;
          self.upgrading = false;
          self.flush();
        }));
      } else {
        debug('probe transport "%s" failed', name);
        var err = new Error('probe error');
        err.transport = transport.name;
        self.emit('upgradeError', err);
      }
    }));
  }

  function freezeTransport() {
    if (failed) return;

    // Any callback called by transport should be ignored since now
    failed = true;

    cleanup();

    transport.close();
    transport = null;
  }

  // Handle any error that happens while probing
  function onerror(err) {
    var error = new Error('probe error: ' + err);
    error.transport = transport.name;

    freezeTransport();

    debug('probe transport "%s" failed because of error: %s', name, err);

    self.emit('upgradeError', error);
  }

  function onTransportClose() {
    onerror('transport closed');
  }

  // When the socket is closed while we're probing
  function onclose() {
    onerror('socket closed');
  }

  // When the socket is upgraded while we're probing
  function onupgrade(to) {
    if (transport && to.name !== transport.name) {
      debug('"%s" works - aborting "%s"', to.name, transport.name);
      freezeTransport();
    }
  }

  // Remove all listeners on the transport and on self
  function cleanup() {
    transport.removeListener('open', onTransportOpen);
    transport.removeListener('error', onerror);
    transport.removeListener('close', onTransportClose);
    self.removeListener('close', onclose);
    self.removeListener('upgrading', onupgrade);
  }

  transport.once('open', onTransportOpen);
  transport.once('error', onerror);
  transport.once('close', onTransportClose);

  this.once('close', onclose);
  this.once('upgrading', onupgrade);

  transport.open();
};

/**
 * Called when connection is deemed open.
 *
 * @api public
 */

Socket.prototype.onOpen = function () {
  debug('socket open');
  this.readyState = 'open';
  Socket.priorWebsocketSuccess = 'websocket' === this.transport.name;
  this.emit('open');
  this.flush();

  // we check for `readyState` in case an `open`
  // listener already closed the socket
  if ('open' === this.readyState && this.upgrade && this.transport.pause) {
    debug('starting upgrade probes');
    for (var i = 0, l = this.upgrades.length; i < l; i++) {
      this.probe(this.upgrades[i]);
    }
  }
};

/**
 * Handles a packet.
 *
 * @api private
 */

Socket.prototype.onPacket = function (packet) {
  if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);

    this.emit('packet', packet);

    // Socket is live - any packet counts
    this.emit('heartbeat');

    switch (packet.type) {
      case 'open':
        this.onHandshake(JSON.parse(packet.data));
        break;

      case 'pong':
        this.setPing();
        this.emit('pong');
        break;

      case 'error':
        var err = new Error('server error');
        err.code = packet.data;
        this.onError(err);
        break;

      case 'message':
        this.emit('data', packet.data);
        this.emit('message', packet.data);
        break;
    }
  } else {
    debug('packet received with socket readyState "%s"', this.readyState);
  }
};

/**
 * Called upon handshake completion.
 *
 * @param {Object} handshake obj
 * @api private
 */

Socket.prototype.onHandshake = function (data) {
  this.emit('handshake', data);
  this.id = data.sid;
  this.transport.query.sid = data.sid;
  this.upgrades = this.filterUpgrades(data.upgrades);
  this.pingInterval = data.pingInterval;
  this.pingTimeout = data.pingTimeout;
  this.onOpen();
  // In case open handler closes socket
  if ('closed' === this.readyState) return;
  this.setPing();

  // Prolong liveness of socket on heartbeat
  this.removeListener('heartbeat', this.onHeartbeat);
  this.on('heartbeat', this.onHeartbeat);
};

/**
 * Resets ping timeout.
 *
 * @api private
 */

Socket.prototype.onHeartbeat = function (timeout) {
  clearTimeout(this.pingTimeoutTimer);
  var self = this;
  self.pingTimeoutTimer = setTimeout((function () {
    if ('closed' === self.readyState) return;
    self.onClose('ping timeout');
  }), timeout || self.pingInterval + self.pingTimeout);
};

/**
 * Pings server every `this.pingInterval` and expects response
 * within `this.pingTimeout` or closes connection.
 *
 * @api private
 */

Socket.prototype.setPing = function () {
  var self = this;
  clearTimeout(self.pingIntervalTimer);
  self.pingIntervalTimer = setTimeout((function () {
    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
    self.ping();
    self.onHeartbeat(self.pingTimeout);
  }), self.pingInterval);
};

/**
* Sends a ping packet.
*
* @api private
*/

Socket.prototype.ping = function () {
  var self = this;
  this.sendPacket('ping', (function () {
    self.emit('ping');
  }));
};

/**
 * Called on `drain` event
 *
 * @api private
 */

Socket.prototype.onDrain = function () {
  this.writeBuffer.splice(0, this.prevBufferLen);

  // setting prevBufferLen = 0 is very important
  // for example, when upgrading, upgrade packet is sent over,
  // and a nonzero prevBufferLen could cause problems on `drain`
  this.prevBufferLen = 0;

  if (0 === this.writeBuffer.length) {
    this.emit('drain');
  } else {
    this.flush();
  }
};

/**
 * Flush write buffers.
 *
 * @api private
 */

Socket.prototype.flush = function () {
  if ('closed' !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
    debug('flushing %d packets in socket', this.writeBuffer.length);
    this.transport.send(this.writeBuffer);
    // keep track of current length of writeBuffer
    // splice writeBuffer and callbackBuffer on `drain`
    this.prevBufferLen = this.writeBuffer.length;
    this.emit('flush');
  }
};

/**
 * Sends a message.
 *
 * @param {String} message.
 * @param {Function} callback function.
 * @param {Object} options.
 * @return {Socket} for chaining.
 * @api public
 */

Socket.prototype.write = Socket.prototype.send = function (msg, options, fn) {
  this.sendPacket('message', msg, options, fn);
  return this;
};

/**
 * Sends a packet.
 *
 * @param {String} packet type.
 * @param {String} data.
 * @param {Object} options.
 * @param {Function} callback function.
 * @api private
 */

Socket.prototype.sendPacket = function (type, data, options, fn) {
  if ('function' === typeof data) {
    fn = data;
    data = undefined;
  }

  if ('function' === typeof options) {
    fn = options;
    options = null;
  }

  if ('closing' === this.readyState || 'closed' === this.readyState) {
    return;
  }

  options = options || {};
  options.compress = false !== options.compress;

  var packet = {
    type: type,
    data: data,
    options: options
  };
  this.emit('packetCreate', packet);
  this.writeBuffer.push(packet);
  if (fn) this.once('flush', fn);
  this.flush();
};

/**
 * Closes the connection.
 *
 * @api private
 */

Socket.prototype.close = function () {
  if ('opening' === this.readyState || 'open' === this.readyState) {
    this.readyState = 'closing';

    var self = this;

    if (this.writeBuffer.length) {
      this.once('drain', (function () {
        if (this.upgrading) {
          waitForUpgrade();
        } else {
          close();
        }
      }));
    } else if (this.upgrading) {
      waitForUpgrade();
    } else {
      close();
    }
  }

  function close() {
    self.onClose('forced close');
    debug('socket closing - telling transport to close');
    self.transport.close();
  }

  function cleanupAndClose() {
    self.removeListener('upgrade', cleanupAndClose);
    self.removeListener('upgradeError', cleanupAndClose);
    close();
  }

  function waitForUpgrade() {
    // wait for upgrade to finish since we can't send packets while pausing a transport
    self.once('upgrade', cleanupAndClose);
    self.once('upgradeError', cleanupAndClose);
  }

  return this;
};

/**
 * Called upon transport error
 *
 * @api private
 */

Socket.prototype.onError = function (err) {
  debug('socket error %j', err);
  Socket.priorWebsocketSuccess = false;
  this.emit('error', err);
  this.onClose('transport error', err);
};

/**
 * Called upon transport close.
 *
 * @api private
 */

Socket.prototype.onClose = function (reason, desc) {
  if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
    debug('socket close with reason: "%s"', reason);
    var self = this;

    // clear timers
    clearTimeout(this.pingIntervalTimer);
    clearTimeout(this.pingTimeoutTimer);

    // stop event from firing again for transport
    this.transport.removeAllListeners('close');

    // ensure transport won't stay open
    this.transport.close();

    // ignore further transport communication
    this.transport.removeAllListeners();

    // set ready state
    this.readyState = 'closed';

    // clear session id
    this.id = null;

    // emit close event
    this.emit('close', reason, desc);

    // clean buffers after, so users can still
    // grab the buffers on `close` event
    self.writeBuffer = [];
    self.prevBufferLen = 0;
  }
};

/**
 * Filters upgrades, returning only those matching client transports.
 *
 * @param {Array} server upgrades
 * @api private
 *
 */

Socket.prototype.filterUpgrades = function (upgrades) {
  var filteredUpgrades = [];
  for (var i = 0, j = upgrades.length; i < j; i++) {
    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
  }
  return filteredUpgrades;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module exports.
 *
 * Logic borrowed from Modernizr:
 *
 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
 */

try {
  module.exports = typeof XMLHttpRequest !== 'undefined' && 'withCredentials' in new XMLHttpRequest();
} catch (err) {
  // if XMLHttp support is disabled in IE then it will throw
  // when trying to create
  module.exports = false;
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/**
 * Module requirements.
 */

var XMLHttpRequest = __webpack_require__(14);
var Polling = __webpack_require__(21);
var Emitter = __webpack_require__(2);
var inherit = __webpack_require__(8);
var debug = __webpack_require__(9)('engine.io-client:polling-xhr');

/**
 * Module exports.
 */

module.exports = XHR;
module.exports.Request = Request;

/**
 * Empty function
 */

function empty() {}

/**
 * XHR Polling constructor.
 *
 * @param {Object} opts
 * @api public
 */

function XHR(opts) {
  Polling.call(this, opts);
  this.requestTimeout = opts.requestTimeout;
  this.extraHeaders = opts.extraHeaders;

  if (global.location) {
    var isSSL = 'https:' === location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    this.xd = opts.hostname !== global.location.hostname || port !== opts.port;
    this.xs = opts.secure !== isSSL;
  }
}

/**
 * Inherits from Polling.
 */

inherit(XHR, Polling);

/**
 * XHR supports binary
 */

XHR.prototype.supportsBinary = true;

/**
 * Creates a request.
 *
 * @param {String} method
 * @api private
 */

XHR.prototype.request = function (opts) {
  opts = opts || {};
  opts.uri = this.uri();
  opts.xd = this.xd;
  opts.xs = this.xs;
  opts.agent = this.agent || false;
  opts.supportsBinary = this.supportsBinary;
  opts.enablesXDR = this.enablesXDR;

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  opts.requestTimeout = this.requestTimeout;

  // other options for Node.js client
  opts.extraHeaders = this.extraHeaders;

  return new Request(opts);
};

/**
 * Sends data.
 *
 * @param {String} data to send.
 * @param {Function} called upon flush.
 * @api private
 */

XHR.prototype.doWrite = function (data, fn) {
  var isBinary = typeof data !== 'string' && data !== undefined;
  var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
  var self = this;
  req.on('success', fn);
  req.on('error', (function (err) {
    self.onError('xhr post error', err);
  }));
  this.sendXhr = req;
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

XHR.prototype.doPoll = function () {
  debug('xhr poll');
  var req = this.request();
  var self = this;
  req.on('data', (function (data) {
    self.onData(data);
  }));
  req.on('error', (function (err) {
    self.onError('xhr poll error', err);
  }));
  this.pollXhr = req;
};

/**
 * Request constructor
 *
 * @param {Object} options
 * @api public
 */

function Request(opts) {
  this.method = opts.method || 'GET';
  this.uri = opts.uri;
  this.xd = !!opts.xd;
  this.xs = !!opts.xs;
  this.async = false !== opts.async;
  this.data = undefined !== opts.data ? opts.data : null;
  this.agent = opts.agent;
  this.isBinary = opts.isBinary;
  this.supportsBinary = opts.supportsBinary;
  this.enablesXDR = opts.enablesXDR;
  this.requestTimeout = opts.requestTimeout;

  // SSL options for Node.js client
  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;

  // other options for Node.js client
  this.extraHeaders = opts.extraHeaders;

  this.create();
}

/**
 * Mix in `Emitter`.
 */

Emitter(Request.prototype);

/**
 * Creates the XHR object and sends the request.
 *
 * @api private
 */

Request.prototype.create = function () {
  var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;

  var xhr = this.xhr = new XMLHttpRequest(opts);
  var self = this;

  try {
    debug('xhr open %s: %s', this.method, this.uri);
    xhr.open(this.method, this.uri, this.async);
    try {
      if (this.extraHeaders) {
        xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
        for (var i in this.extraHeaders) {
          if (this.extraHeaders.hasOwnProperty(i)) {
            xhr.setRequestHeader(i, this.extraHeaders[i]);
          }
        }
      }
    } catch (e) {}

    if ('POST' === this.method) {
      try {
        if (this.isBinary) {
          xhr.setRequestHeader('Content-type', 'application/octet-stream');
        } else {
          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
        }
      } catch (e) {}
    }

    try {
      xhr.setRequestHeader('Accept', '*/*');
    } catch (e) {}

    // ie6 check
    if ('withCredentials' in xhr) {
      xhr.withCredentials = true;
    }

    if (this.requestTimeout) {
      xhr.timeout = this.requestTimeout;
    }

    if (this.hasXDR()) {
      xhr.onload = function () {
        self.onLoad();
      };
      xhr.onerror = function () {
        self.onError(xhr.responseText);
      };
    } else {
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 2) {
          try {
            var contentType = xhr.getResponseHeader('Content-Type');
            if (self.supportsBinary && contentType === 'application/octet-stream') {
              xhr.responseType = 'arraybuffer';
            }
          } catch (e) {}
        }
        if (4 !== xhr.readyState) return;
        if (200 === xhr.status || 1223 === xhr.status) {
          self.onLoad();
        } else {
          // make sure the `error` event handler that's user-set
          // does not throw in the same tick and gets caught here
          setTimeout((function () {
            self.onError(xhr.status);
          }), 0);
        }
      };
    }

    debug('xhr data %s', this.data);
    xhr.send(this.data);
  } catch (e) {
    // Need to defer since .create() is called directly fhrom the constructor
    // and thus the 'error' event can only be only bound *after* this exception
    // occurs.  Therefore, also, we cannot throw here at all.
    setTimeout((function () {
      self.onError(e);
    }), 0);
    return;
  }

  if (global.document) {
    this.index = Request.requestsCount++;
    Request.requests[this.index] = this;
  }
};

/**
 * Called upon successful response.
 *
 * @api private
 */

Request.prototype.onSuccess = function () {
  this.emit('success');
  this.cleanup();
};

/**
 * Called if we have data.
 *
 * @api private
 */

Request.prototype.onData = function (data) {
  this.emit('data', data);
  this.onSuccess();
};

/**
 * Called upon error.
 *
 * @api private
 */

Request.prototype.onError = function (err) {
  this.emit('error', err);
  this.cleanup(true);
};

/**
 * Cleans up house.
 *
 * @api private
 */

Request.prototype.cleanup = function (fromError) {
  if ('undefined' === typeof this.xhr || null === this.xhr) {
    return;
  }
  // xmlhttprequest
  if (this.hasXDR()) {
    this.xhr.onload = this.xhr.onerror = empty;
  } else {
    this.xhr.onreadystatechange = empty;
  }

  if (fromError) {
    try {
      this.xhr.abort();
    } catch (e) {}
  }

  if (global.document) {
    delete Request.requests[this.index];
  }

  this.xhr = null;
};

/**
 * Called upon load.
 *
 * @api private
 */

Request.prototype.onLoad = function () {
  var data;
  try {
    var contentType;
    try {
      contentType = this.xhr.getResponseHeader('Content-Type');
    } catch (e) {}
    if (contentType === 'application/octet-stream') {
      data = this.xhr.response || this.xhr.responseText;
    } else {
      data = this.xhr.responseText;
    }
  } catch (e) {
    this.onError(e);
  }
  if (null != data) {
    this.onData(data);
  }
};

/**
 * Check if it has XDomainRequest.
 *
 * @api private
 */

Request.prototype.hasXDR = function () {
  return 'undefined' !== typeof global.XDomainRequest && !this.xs && this.enablesXDR;
};

/**
 * Aborts the request.
 *
 * @api public
 */

Request.prototype.abort = function () {
  this.cleanup();
};

/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */

Request.requestsCount = 0;
Request.requests = {};

if (global.document) {
  if (global.attachEvent) {
    global.attachEvent('onunload', unloadHandler);
  } else if (global.addEventListener) {
    global.addEventListener('beforeunload', unloadHandler, false);
  }
}

function unloadHandler() {
  for (var i in Request.requests) {
    if (Request.requests.hasOwnProperty(i)) {
      Request.requests[i].abort();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Gets the keys for an object.
 *
 * @return {Array} keys
 * @api private
 */

module.exports = Object.keys || function keys(obj) {
  var arr = [];
  var has = Object.prototype.hasOwnProperty;

  for (var i in obj) {
    if (has.call(obj, i)) {
      arr.push(i);
    }
  }
  return arr;
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(50);
var ieee754 = __webpack_require__(51);
var isArray = __webpack_require__(52);

exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength();

function typedArraySupport() {
  try {
    var arr = new Uint8Array(1);
    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function foo() {
        return 42;
      } };
    return arr.foo() === 42 && // typed array instances can be augmented
    typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
    arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
  } catch (e) {
    return false;
  }
}

function kMaxLength() {
  return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
}

function createBuffer(that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length');
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length);
    }
    that.length = length;
  }

  return that;
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer(arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length);
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error('If encoding is specified then the first argument must be a string');
    }
    return allocUnsafe(this, arg);
  }
  return from(this, arg, encodingOrOffset, length);
}

Buffer.poolSize = 8192; // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype;
  return arr;
};

function from(that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length);
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset);
  }

  return fromObject(that, value);
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length);
};

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;
  if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    });
  }
}

function assertSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number');
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative');
  }
}

function alloc(that, size, fill, encoding) {
  assertSize(size);
  if (size <= 0) {
    return createBuffer(that, size);
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
  }
  return createBuffer(that, size);
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding);
};

function allocUnsafe(that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }
  return that;
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size);
};

function fromString(that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);

  var actual = that.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }

  return that;
}

function fromArrayLike(that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }
  return that;
}

function fromArrayBuffer(that, array, byteOffset, length) {
  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds');
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds');
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }
  return that;
}

function fromObject(that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that;
    }

    obj.copy(that, 0, 0, len);
    return that;
  }

  if (obj) {
    if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0);
      }
      return fromArrayLike(that, obj);
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data);
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
}

function checked(length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
  }
  return length | 0;
}

function SlowBuffer(length) {
  if (+length != length) {
    // eslint-disable-line eqeqeq
    length = 0;
  }
  return Buffer.alloc(+length);
}

Buffer.isBuffer = function isBuffer(b) {
  return !!(b != null && b._isBuffer);
};

Buffer.compare = function compare(a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers');
  }

  if (a === b) return 0;

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

Buffer.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;
    default:
      return false;
  }
};

Buffer.concat = function concat(list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }

  if (list.length === 0) {
    return Buffer.alloc(0);
  }

  var i;
  if (length === undefined) {
    length = 0;
    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;
  for (i = 0; i < list.length; ++i) {
    var buf = list[i];
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }
    buf.copy(buffer, pos);
    pos += buf.length;
  }
  return buffer;
};

function byteLength(string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length;
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength;
  }
  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0;

  // Use a for loop to avoid recursion
  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len;
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length;
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2;
      case 'hex':
        return len >>> 1;
      case 'base64':
        return base64ToBytes(string).length;
      default:
        if (loweredCase) return utf8ToBytes(string).length; // assume utf8
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}
Buffer.byteLength = byteLength;

function slowToString(encoding, start, end) {
  var loweredCase = false;

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0;
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return '';
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return '';
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return '';
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end);

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end);

      case 'ascii':
        return asciiSlice(this, start, end);

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end);

      case 'base64':
        return base64Slice(this, start, end);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true;

function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16() {
  var len = this.length;
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits');
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }
  return this;
};

Buffer.prototype.swap32 = function swap32() {
  var len = this.length;
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits');
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }
  return this;
};

Buffer.prototype.swap64 = function swap64() {
  var len = this.length;
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits');
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }
  return this;
};

Buffer.prototype.toString = function toString() {
  var length = this.length | 0;
  if (length === 0) return '';
  if (arguments.length === 0) return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};

Buffer.prototype.equals = function equals(b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
  if (this === b) return true;
  return Buffer.compare(this, b) === 0;
};

Buffer.prototype.inspect = function inspect() {
  var str = '';
  var max = exports.INSPECT_MAX_BYTES;
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }
  return '<Buffer ' + str + '>';
};

Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer');
  }

  if (start === undefined) {
    start = 0;
  }
  if (end === undefined) {
    end = target ? target.length : 0;
  }
  if (thisStart === undefined) {
    thisStart = 0;
  }
  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index');
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }
  if (thisStart >= thisEnd) {
    return -1;
  }
  if (start >= end) {
    return 1;
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;

  if (this === target) return 0;

  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);

  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1;

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }
  byteOffset = +byteOffset; // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
  if (byteOffset >= buffer.length) {
    if (dir) return -1;else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;else return -1;
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1;
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }

  throw new TypeError('val must be string, number or Buffer');
}

function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();
    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }
      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read(buf, i) {
    if (indexSize === 1) {
      return buf[i];
    } else {
      return buf.readUInt16BE(i * indexSize);
    }
  }

  var i;
  if (dir) {
    var foundIndex = -1;
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
    for (i = byteOffset; i >= 0; i--) {
      var found = true;
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break;
        }
      }
      if (found) return i;
    }
  }

  return -1;
}

Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};

Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};

Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};

function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = Number(length);
    if (length > remaining) {
      length = remaining;
    }
  }

  // must be an even number of digits
  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

  if (length > strLen / 2) {
    length = strLen / 2;
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i;
    buf[offset + i] = parsed;
  }
  return i;
}

function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}

function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}

function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}

function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}

function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}

Buffer.prototype.write = function write(string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0;
    // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0;
    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    }
    // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds');
  }

  if (!encoding) encoding = 'utf8';

  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length);

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length);

      case 'ascii':
        return asciiWrite(this, string, offset, length);

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length);

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON() {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};

function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf);
  } else {
    return base64.fromByteArray(buf.slice(start, end));
  }
}

function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];

  var i = start;
  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }
          break;
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res);
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = '';
  var i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }
  return res;
}

function asciiSlice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }
  return ret;
}

function latin1Slice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret;
}

function hexSlice(buf, start, end) {
  var len = buf.length;

  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;

  var out = '';
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }
  return out;
}

function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }
  return res;
}

Buffer.prototype.slice = function slice(start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;

  var newBuf;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, undefined);
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf;
};

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}

Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val;
};

Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val;
};

Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset];
};

Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};

Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};

Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};

Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};

Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val;
};

Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val;
};

Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return this[offset];
  return (0xff - this[offset] + 1) * -1;
};

Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | this[offset + 1] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | this[offset] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};

Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};

Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, true, 23, 4);
};

Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, false, 23, 4);
};

Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, true, 52, 8);
};

Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, false, 52, 8);
};

function checkInt(buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
}

Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = value & 0xff;
  return offset + 1;
};

function objectWriteUInt16(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2;
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2;
};

function objectWriteUInt32(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4;
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4;
};

Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = value & 0xff;
  return offset + 1;
};

Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2;
};

Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2;
};

Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4;
};

Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4;
};

function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
  if (offset < 0) throw new RangeError('Index out of range');
}

function writeFloat(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}

Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};

Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};

function writeDouble(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert);
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert);
};

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start;

  // Copy 0 bytes; we're done
  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0;

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds');
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
  if (end < 0) throw new RangeError('sourceEnd out of bounds');

  // Are we oob?
  if (end > this.length) end = this.length;
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
  }

  return len;
};

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0);
      if (code < 256) {
        val = code;
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string');
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding);
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index');
  }

  if (end <= start) {
    return this;
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;

  if (!val) val = 0;

  var i;
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this;
};

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean(str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return '';
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '=';
  }
  return str;
}

function stringtrim(str) {
  if (str.trim) return str.trim();
  return str.replace(/^\s+|\s+$/g, '');
}

function toHex(n) {
  if (n < 16) return '0' + n.toString(16);
  return n.toString(16);
}

function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        }

        // valid lead
        leadSurrogate = codePoint;

        continue;
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue;
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null;

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else {
      throw new Error('Invalid code point');
    }
  }

  return bytes;
}

function asciiToBytes(str) {
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }
  return byteArray;
}

function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break;

    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray;
}

function base64ToBytes(str) {
  return base64.toByteArray(base64clean(str));
}

function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }
  return i;
}

function isnan(val) {
  return val !== val; // eslint-disable-line no-self-compare
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;

var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
  revLookup[code.charCodeAt(i)] = i;
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;

function getLens(b64) {
  var len = b64.length;

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4');
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=');
  if (validLen === -1) validLen = len;

  var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;

  return [validLen, placeHoldersLen];
}

// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function _byteLength(b64, validLen, placeHoldersLen) {
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function toByteArray(b64) {
  var tmp;
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));

  var curByte = 0;

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0 ? validLen - 4 : validLen;

  for (var i = 0; i < len; i += 4) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[curByte++] = tmp >> 16 & 0xFF;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  return arr;
}

function tripletToBase64(num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}

function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
    output.push(tripletToBase64(tmp));
  }
  return output.join('');
}

function fromByteArray(uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
  }

  return parts.join('');
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];

  i += d;

  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * An abstraction for slicing an arraybuffer even when
 * ArrayBuffer.prototype.slice is not supported
 *
 * @api public
 */

module.exports = function (arraybuffer, start, end) {
  var bytes = arraybuffer.byteLength;
  start = start || 0;
  end = end || bytes;

  if (arraybuffer.slice) {
    return arraybuffer.slice(start, end);
  }

  if (start < 0) {
    start += bytes;
  }
  if (end < 0) {
    end += bytes;
  }
  if (end > bytes) {
    end = bytes;
  }

  if (start >= bytes || start >= end || bytes === 0) {
    return new ArrayBuffer(0);
  }

  var abv = new Uint8Array(arraybuffer);
  var result = new Uint8Array(end - start);
  for (var i = start, ii = 0; i < end; i++, ii++) {
    result[ii] = abv[i];
  }
  return result.buffer;
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = after;

function after(count, callback, err_cb) {
    var bail = false;
    err_cb = err_cb || noop;
    proxy.count = count;

    return count === 0 ? callback() : proxy;

    function proxy(err, result) {
        if (proxy.count <= 0) {
            throw new Error('after called too many times');
        }
        --proxy.count;

        // after first error, rest are passed to err_cb
        if (err) {
            bail = true;
            callback(err);
            // future error callbacks will go to error handler
            callback = err_cb;
        } else if (proxy.count === 0 && !bail) {
            callback(null, result);
        }
    }
}

function noop() {}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*! https://mths.be/utf8js v2.1.2 by @mathias */

var stringFromCharCode = String.fromCharCode;

// Taken from https://mths.be/punycode
function ucs2decode(string) {
	var output = [];
	var counter = 0;
	var length = string.length;
	var value;
	var extra;
	while (counter < length) {
		value = string.charCodeAt(counter++);
		if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
			// high surrogate, and there is a next character
			extra = string.charCodeAt(counter++);
			if ((extra & 0xFC00) == 0xDC00) {
				// low surrogate
				output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
			} else {
				// unmatched surrogate; only append this code unit, in case the next
				// code unit is the high surrogate of a surrogate pair
				output.push(value);
				counter--;
			}
		} else {
			output.push(value);
		}
	}
	return output;
}

// Taken from https://mths.be/punycode
function ucs2encode(array) {
	var length = array.length;
	var index = -1;
	var value;
	var output = '';
	while (++index < length) {
		value = array[index];
		if (value > 0xFFFF) {
			value -= 0x10000;
			output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
			value = 0xDC00 | value & 0x3FF;
		}
		output += stringFromCharCode(value);
	}
	return output;
}

function checkScalarValue(codePoint, strict) {
	if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
		if (strict) {
			throw Error('Lone surrogate U+' + codePoint.toString(16).toUpperCase() + ' is not a scalar value');
		}
		return false;
	}
	return true;
}
/*--------------------------------------------------------------------------*/

function createByte(codePoint, shift) {
	return stringFromCharCode(codePoint >> shift & 0x3F | 0x80);
}

function encodeCodePoint(codePoint, strict) {
	if ((codePoint & 0xFFFFFF80) == 0) {
		// 1-byte sequence
		return stringFromCharCode(codePoint);
	}
	var symbol = '';
	if ((codePoint & 0xFFFFF800) == 0) {
		// 2-byte sequence
		symbol = stringFromCharCode(codePoint >> 6 & 0x1F | 0xC0);
	} else if ((codePoint & 0xFFFF0000) == 0) {
		// 3-byte sequence
		if (!checkScalarValue(codePoint, strict)) {
			codePoint = 0xFFFD;
		}
		symbol = stringFromCharCode(codePoint >> 12 & 0x0F | 0xE0);
		symbol += createByte(codePoint, 6);
	} else if ((codePoint & 0xFFE00000) == 0) {
		// 4-byte sequence
		symbol = stringFromCharCode(codePoint >> 18 & 0x07 | 0xF0);
		symbol += createByte(codePoint, 12);
		symbol += createByte(codePoint, 6);
	}
	symbol += stringFromCharCode(codePoint & 0x3F | 0x80);
	return symbol;
}

function utf8encode(string, opts) {
	opts = opts || {};
	var strict = false !== opts.strict;

	var codePoints = ucs2decode(string);
	var length = codePoints.length;
	var index = -1;
	var codePoint;
	var byteString = '';
	while (++index < length) {
		codePoint = codePoints[index];
		byteString += encodeCodePoint(codePoint, strict);
	}
	return byteString;
}

/*--------------------------------------------------------------------------*/

function readContinuationByte() {
	if (byteIndex >= byteCount) {
		throw Error('Invalid byte index');
	}

	var continuationByte = byteArray[byteIndex] & 0xFF;
	byteIndex++;

	if ((continuationByte & 0xC0) == 0x80) {
		return continuationByte & 0x3F;
	}

	// If we end up here, it’s not a continuation byte
	throw Error('Invalid continuation byte');
}

function decodeSymbol(strict) {
	var byte1;
	var byte2;
	var byte3;
	var byte4;
	var codePoint;

	if (byteIndex > byteCount) {
		throw Error('Invalid byte index');
	}

	if (byteIndex == byteCount) {
		return false;
	}

	// Read first byte
	byte1 = byteArray[byteIndex] & 0xFF;
	byteIndex++;

	// 1-byte sequence (no continuation bytes)
	if ((byte1 & 0x80) == 0) {
		return byte1;
	}

	// 2-byte sequence
	if ((byte1 & 0xE0) == 0xC0) {
		byte2 = readContinuationByte();
		codePoint = (byte1 & 0x1F) << 6 | byte2;
		if (codePoint >= 0x80) {
			return codePoint;
		} else {
			throw Error('Invalid continuation byte');
		}
	}

	// 3-byte sequence (may include unpaired surrogates)
	if ((byte1 & 0xF0) == 0xE0) {
		byte2 = readContinuationByte();
		byte3 = readContinuationByte();
		codePoint = (byte1 & 0x0F) << 12 | byte2 << 6 | byte3;
		if (codePoint >= 0x0800) {
			return checkScalarValue(codePoint, strict) ? codePoint : 0xFFFD;
		} else {
			throw Error('Invalid continuation byte');
		}
	}

	// 4-byte sequence
	if ((byte1 & 0xF8) == 0xF0) {
		byte2 = readContinuationByte();
		byte3 = readContinuationByte();
		byte4 = readContinuationByte();
		codePoint = (byte1 & 0x07) << 0x12 | byte2 << 0x0C | byte3 << 0x06 | byte4;
		if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
			return codePoint;
		}
	}

	throw Error('Invalid UTF-8 detected');
}

var byteArray;
var byteCount;
var byteIndex;
function utf8decode(byteString, opts) {
	opts = opts || {};
	var strict = false !== opts.strict;

	byteArray = ucs2decode(byteString);
	byteCount = byteArray.length;
	byteIndex = 0;
	var codePoints = [];
	var tmp;
	while ((tmp = decodeSymbol(strict)) !== false) {
		codePoints.push(tmp);
	}
	return ucs2encode(codePoints);
}

module.exports = {
	version: '2.1.2',
	encode: utf8encode,
	decode: utf8decode
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
(function () {
  "use strict";

  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

  // Use a lookup table to find the index.
  var lookup = new Uint8Array(256);
  for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
  }

  exports.encode = function (arraybuffer) {
    var bytes = new Uint8Array(arraybuffer),
        i,
        len = bytes.length,
        base64 = "";

    for (i = 0; i < len; i += 3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
      base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
      base64 += chars[bytes[i + 2] & 63];
    }

    if (len % 3 === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }

    return base64;
  };

  exports.decode = function (base64) {
    var bufferLength = base64.length * 0.75,
        len = base64.length,
        i,
        p = 0,
        encoded1,
        encoded2,
        encoded3,
        encoded4;

    if (base64[base64.length - 1] === "=") {
      bufferLength--;
      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
        bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i += 4) {
      encoded1 = lookup[base64.charCodeAt(i)];
      encoded2 = lookup[base64.charCodeAt(i + 1)];
      encoded3 = lookup[base64.charCodeAt(i + 2)];
      encoded4 = lookup[base64.charCodeAt(i + 3)];

      bytes[p++] = encoded1 << 2 | encoded2 >> 4;
      bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
      bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }

    return arraybuffer;
  };
})();

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Create a blob builder even when vendor prefixes exist
 */

var BlobBuilder = typeof BlobBuilder !== 'undefined' ? BlobBuilder : typeof WebKitBlobBuilder !== 'undefined' ? WebKitBlobBuilder : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : false;

/**
 * Check if Blob constructor is supported
 */

var blobSupported = (function () {
  try {
    var a = new Blob(['hi']);
    return a.size === 2;
  } catch (e) {
    return false;
  }
})();

/**
 * Check if Blob constructor supports ArrayBufferViews
 * Fails in Safari 6, so we need to map to ArrayBuffers there.
 */

var blobSupportsArrayBufferView = blobSupported && (function () {
  try {
    var b = new Blob([new Uint8Array([1, 2])]);
    return b.size === 2;
  } catch (e) {
    return false;
  }
})();

/**
 * Check if BlobBuilder is supported
 */

var blobBuilderSupported = BlobBuilder && BlobBuilder.prototype.append && BlobBuilder.prototype.getBlob;

/**
 * Helper function that maps ArrayBufferViews to ArrayBuffers
 * Used by BlobBuilder constructor and old browsers that didn't
 * support it in the Blob constructor.
 */

function mapArrayBufferViews(ary) {
  return ary.map((function (chunk) {
    if (chunk.buffer instanceof ArrayBuffer) {
      var buf = chunk.buffer;

      // if this is a subarray, make a copy so we only
      // include the subarray region from the underlying buffer
      if (chunk.byteLength !== buf.byteLength) {
        var copy = new Uint8Array(chunk.byteLength);
        copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
        buf = copy.buffer;
      }

      return buf;
    }

    return chunk;
  }));
}

function BlobBuilderConstructor(ary, options) {
  options = options || {};

  var bb = new BlobBuilder();
  mapArrayBufferViews(ary).forEach((function (part) {
    bb.append(part);
  }));

  return options.type ? bb.getBlob(options.type) : bb.getBlob();
};

function BlobConstructor(ary, options) {
  return new Blob(mapArrayBufferViews(ary), options || {});
};

if (typeof Blob !== 'undefined') {
  BlobBuilderConstructor.prototype = Blob.prototype;
  BlobConstructor.prototype = Blob.prototype;
}

module.exports = (function () {
  if (blobSupported) {
    return blobSupportsArrayBufferView ? Blob : BlobConstructor;
  } else if (blobBuilderSupported) {
    return BlobBuilderConstructor;
  } else {
    return undefined;
  }
})();

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(11);

/**
 * Active `debug` instances.
 */
exports.instances = [];

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0,
      i;

  for (i in namespace) {
    hash = (hash << 5) - hash + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, (function (match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    }));

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy;

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);

  return debug;
}

function destroy() {
  var index = exports.instances.indexOf(this);
  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/**
 * Module requirements.
 */

var Polling = __webpack_require__(21);
var inherit = __webpack_require__(8);

/**
 * Module exports.
 */

module.exports = JSONPPolling;

/**
 * Cached regular expressions.
 */

var rNewline = /\n/g;
var rEscapedNewline = /\\n/g;

/**
 * Global JSONP callbacks.
 */

var callbacks;

/**
 * Noop.
 */

function empty() {}

/**
 * JSONP Polling constructor.
 *
 * @param {Object} opts.
 * @api public
 */

function JSONPPolling(opts) {
  Polling.call(this, opts);

  this.query = this.query || {};

  // define global callbacks array if not present
  // we do this here (lazily) to avoid unneeded global pollution
  if (!callbacks) {
    // we need to consider multiple engines in the same page
    if (!global.___eio) global.___eio = [];
    callbacks = global.___eio;
  }

  // callback identifier
  this.index = callbacks.length;

  // add callback to jsonp global
  var self = this;
  callbacks.push((function (msg) {
    self.onData(msg);
  }));

  // append to query string
  this.query.j = this.index;

  // prevent spurious errors from being emitted when the window is unloaded
  if (global.document && global.addEventListener) {
    global.addEventListener('beforeunload', (function () {
      if (self.script) self.script.onerror = empty;
    }), false);
  }
}

/**
 * Inherits from Polling.
 */

inherit(JSONPPolling, Polling);

/*
 * JSONP only supports binary as base64 encoded strings
 */

JSONPPolling.prototype.supportsBinary = false;

/**
 * Closes the socket.
 *
 * @api private
 */

JSONPPolling.prototype.doClose = function () {
  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  if (this.form) {
    this.form.parentNode.removeChild(this.form);
    this.form = null;
    this.iframe = null;
  }

  Polling.prototype.doClose.call(this);
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

JSONPPolling.prototype.doPoll = function () {
  var self = this;
  var script = document.createElement('script');

  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  script.async = true;
  script.src = this.uri();
  script.onerror = function (e) {
    self.onError('jsonp poll error', e);
  };

  var insertAt = document.getElementsByTagName('script')[0];
  if (insertAt) {
    insertAt.parentNode.insertBefore(script, insertAt);
  } else {
    (document.head || document.body).appendChild(script);
  }
  this.script = script;

  var isUAgecko = 'undefined' !== typeof navigator && /gecko/i.test(navigator.userAgent);

  if (isUAgecko) {
    setTimeout((function () {
      var iframe = document.createElement('iframe');
      document.body.appendChild(iframe);
      document.body.removeChild(iframe);
    }), 100);
  }
};

/**
 * Writes with a hidden iframe.
 *
 * @param {String} data to send
 * @param {Function} called upon flush.
 * @api private
 */

JSONPPolling.prototype.doWrite = function (data, fn) {
  var self = this;

  if (!this.form) {
    var form = document.createElement('form');
    var area = document.createElement('textarea');
    var id = this.iframeId = 'eio_iframe_' + this.index;
    var iframe;

    form.className = 'socketio';
    form.style.position = 'absolute';
    form.style.top = '-1000px';
    form.style.left = '-1000px';
    form.target = id;
    form.method = 'POST';
    form.setAttribute('accept-charset', 'utf-8');
    area.name = 'd';
    form.appendChild(area);
    document.body.appendChild(form);

    this.form = form;
    this.area = area;
  }

  this.form.action = this.uri();

  function complete() {
    initIframe();
    fn();
  }

  function initIframe() {
    if (self.iframe) {
      try {
        self.form.removeChild(self.iframe);
      } catch (e) {
        self.onError('jsonp polling iframe removal error', e);
      }
    }

    try {
      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
      var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
      iframe = document.createElement(html);
    } catch (e) {
      iframe = document.createElement('iframe');
      iframe.name = self.iframeId;
      iframe.src = 'javascript:0';
    }

    iframe.id = self.iframeId;

    self.form.appendChild(iframe);
    self.iframe = iframe;
  }

  initIframe();

  // escape \n to prevent it from being converted into \r\n by some UAs
  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
  data = data.replace(rEscapedNewline, '\\\n');
  this.area.value = data.replace(rNewline, '\\n');

  try {
    this.form.submit();
  } catch (e) {}

  if (this.iframe.attachEvent) {
    this.iframe.onreadystatechange = function () {
      if (self.iframe.readyState === 'complete') {
        complete();
      }
    };
  } else {
    this.iframe.onload = complete;
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/**
 * Module dependencies.
 */

var Transport = __webpack_require__(15);
var parser = __webpack_require__(3);
var parseqs = __webpack_require__(7);
var inherit = __webpack_require__(8);
var yeast = __webpack_require__(23);
var debug = __webpack_require__(9)('engine.io-client:websocket');
var BrowserWebSocket = global.WebSocket || global.MozWebSocket;
var NodeWebSocket;
if (typeof window === 'undefined') {
  try {
    NodeWebSocket = __webpack_require__(61);
  } catch (e) {}
}

/**
 * Get either the `WebSocket` or `MozWebSocket` globals
 * in the browser or try to resolve WebSocket-compatible
 * interface exposed by `ws` for Node-like environment.
 */

var WebSocket = BrowserWebSocket;
if (!WebSocket && typeof window === 'undefined') {
  WebSocket = NodeWebSocket;
}

/**
 * Module exports.
 */

module.exports = WS;

/**
 * WebSocket transport constructor.
 *
 * @api {Object} connection options
 * @api public
 */

function WS(opts) {
  var forceBase64 = opts && opts.forceBase64;
  if (forceBase64) {
    this.supportsBinary = false;
  }
  this.perMessageDeflate = opts.perMessageDeflate;
  this.usingBrowserWebSocket = BrowserWebSocket && !opts.forceNode;
  this.protocols = opts.protocols;
  if (!this.usingBrowserWebSocket) {
    WebSocket = NodeWebSocket;
  }
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

inherit(WS, Transport);

/**
 * Transport name.
 *
 * @api public
 */

WS.prototype.name = 'websocket';

/*
 * WebSockets support binary
 */

WS.prototype.supportsBinary = true;

/**
 * Opens socket.
 *
 * @api private
 */

WS.prototype.doOpen = function () {
  if (!this.check()) {
    // let probe timeout
    return;
  }

  var uri = this.uri();
  var protocols = this.protocols;
  var opts = {
    agent: this.agent,
    perMessageDeflate: this.perMessageDeflate
  };

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  if (this.extraHeaders) {
    opts.headers = this.extraHeaders;
  }
  if (this.localAddress) {
    opts.localAddress = this.localAddress;
  }

  try {
    this.ws = this.usingBrowserWebSocket ? protocols ? new WebSocket(uri, protocols) : new WebSocket(uri) : new WebSocket(uri, protocols, opts);
  } catch (err) {
    return this.emit('error', err);
  }

  if (this.ws.binaryType === undefined) {
    this.supportsBinary = false;
  }

  if (this.ws.supports && this.ws.supports.binary) {
    this.supportsBinary = true;
    this.ws.binaryType = 'nodebuffer';
  } else {
    this.ws.binaryType = 'arraybuffer';
  }

  this.addEventListeners();
};

/**
 * Adds event listeners to the socket
 *
 * @api private
 */

WS.prototype.addEventListeners = function () {
  var self = this;

  this.ws.onopen = function () {
    self.onOpen();
  };
  this.ws.onclose = function () {
    self.onClose();
  };
  this.ws.onmessage = function (ev) {
    self.onData(ev.data);
  };
  this.ws.onerror = function (e) {
    self.onError('websocket error', e);
  };
};

/**
 * Writes data to socket.
 *
 * @param {Array} array of packets.
 * @api private
 */

WS.prototype.write = function (packets) {
  var self = this;
  this.writable = false;

  // encodePacket efficient as it uses WS framing
  // no need for encodePayload
  var total = packets.length;
  for (var i = 0, l = total; i < l; i++) {
    (function (packet) {
      parser.encodePacket(packet, self.supportsBinary, (function (data) {
        if (!self.usingBrowserWebSocket) {
          // always create a new object (GH-437)
          var opts = {};
          if (packet.options) {
            opts.compress = packet.options.compress;
          }

          if (self.perMessageDeflate) {
            var len = 'string' === typeof data ? global.Buffer.byteLength(data) : data.length;
            if (len < self.perMessageDeflate.threshold) {
              opts.compress = false;
            }
          }
        }

        // Sometimes the websocket has already been closed but the browser didn't
        // have a chance of informing us about it yet, in that case send will
        // throw an error
        try {
          if (self.usingBrowserWebSocket) {
            // TypeError is thrown when passing the second argument on Safari
            self.ws.send(data);
          } else {
            self.ws.send(data, opts);
          }
        } catch (e) {
          debug('websocket closed before onclose event');
        }

        --total || done();
      }));
    })(packets[i]);
  }

  function done() {
    self.emit('flush');

    // fake drain
    // defer to next tick to allow Socket to clear writeBuffer
    setTimeout((function () {
      self.writable = true;
      self.emit('drain');
    }), 0);
  }
};

/**
 * Called upon close
 *
 * @api private
 */

WS.prototype.onClose = function () {
  Transport.prototype.onClose.call(this);
};

/**
 * Closes socket.
 *
 * @api private
 */

WS.prototype.doClose = function () {
  if (typeof this.ws !== 'undefined') {
    this.ws.close();
  }
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

WS.prototype.uri = function () {
  var query = this.query || {};
  var schema = this.secure ? 'wss' : 'ws';
  var port = '';

  // avoid port if default for schema
  if (this.port && ('wss' === schema && Number(this.port) !== 443 || 'ws' === schema && Number(this.port) !== 80)) {
    port = ':' + this.port;
  }

  // append timestamp to URI
  if (this.timestampRequests) {
    query[this.timestampParam] = yeast();
  }

  // communicate binary support capabilities
  if (!this.supportsBinary) {
    query.b64 = 1;
  }

  query = parseqs.encode(query);

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};

/**
 * Feature detection for WebSocket.
 *
 * @return {Boolean} whether this transport is available.
 * @api public
 */

WS.prototype.check = function () {
  return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 61 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = toArray;

function toArray(list, index) {
    var array = [];

    index = index || 0;

    for (var i = index || 0; i < list.length; i++) {
        array[i - index] = list[i];
    }

    return array;
}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Expose `Backoff`.
 */

module.exports = Backoff;

/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */

function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 10000;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}

/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */

Backoff.prototype.duration = function () {
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand = Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};

/**
 * Reset the number of attempts.
 *
 * @api public
 */

Backoff.prototype.reset = function () {
  this.attempts = 0;
};

/**
 * Set the minimum duration
 *
 * @api public
 */

Backoff.prototype.setMin = function (min) {
  this.ms = min;
};

/**
 * Set the maximum duration
 *
 * @api public
 */

Backoff.prototype.setMax = function (max) {
  this.max = max;
};

/**
 * Set the jitter
 *
 * @api public
 */

Backoff.prototype.setJitter = function (jitter) {
  this.jitter = jitter;
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(65);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "body {\n    margin: 0;\n}\n\n._3HtT6GDZDXMjHHfhWbFwsK {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    height: 100vh;\n}\n\n._llPSW5iWAXYliq7g-hel {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    border-bottom: 1px solid #ccc;\n}\n\n._1tPWRuM3cHxgEU3qrRkHhf {\n    display: flex;\n    width: 25vw;\n    border-right: 1px solid #ccc;\n    justify-content: center;\n    box-sizing: border-box;\n    padding: 20px;\n}\n\n._3MMUFcgGDSdP1d0FlbFIdO {\n    display: flex;\n    width: 75vw;\n    justify-content: center;\n    box-sizing: border-box;\n    padding: 20px;\n}\n\n._1Xm1lSJwOROAwGzk130swu {\n    display: flex;\n    flex-direction: row;\n    flex: 1;\n}\n\n._1dVqIOiBK1eT6KrIm6Hnyo {\n    display: flex;\n    flex-direction: column;\n    width: 75vw;\n    flex: 1;\n}", ""]);

// exports
exports.locals = {
	"App": "_3HtT6GDZDXMjHHfhWbFwsK",
	"AppHeader": "_llPSW5iWAXYliq7g-hel",
	"AppTitle": "_1tPWRuM3cHxgEU3qrRkHhf",
	"AppRoom": "_3MMUFcgGDSdP1d0FlbFIdO",
	"AppBody": "_1Xm1lSJwOROAwGzk130swu",
	"MessageWrapper": "_1dVqIOiBK1eT6KrIm6Hnyo"
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, (function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, (function (o, $1) {
			return $1;
		})).replace(/^'(.*)'$/, (function (o, $1) {
			return $1;
		}));

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	}));

	// send back the fixed css
	return fixedCss;
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _MessageForm = __webpack_require__(68);

var _MessageForm2 = _interopRequireDefault(_MessageForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MessageForm = (function (_Component) {
  _inherits(MessageForm, _Component);

  function MessageForm(props) {
    _classCallCheck(this, MessageForm);

    var _this = _possibleConstructorReturn(this, (MessageForm.__proto__ || Object.getPrototypeOf(MessageForm)).call(this, props));

    _this.state = { text: '' };
    return _this;
  }

  _createClass(MessageForm, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      var message = {
        from: this.props.name,
        text: this.state.text
      };
      this.props.onMessageSubmit(message);
      this.setState({ text: '' });
    }
  }, {
    key: 'changeHandler',
    value: function changeHandler(e) {
      this.setState({ text: e.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'form',
        { className: _MessageForm2.default.MessageForm, onSubmit: function onSubmit(e) {
            return _this2.handleSubmit(e);
          } },
        _react2.default.createElement('input', {
          className: _MessageForm2.default.MessageInput,
          onChange: function onChange(e) {
            return _this2.changeHandler(e);
          },
          value: this.state.text,
          placeholder: 'Message'
        })
      );
    }
  }]);

  return MessageForm;
})(_react.Component);

exports.default = MessageForm;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(69);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "._1jMi-csxQtX0aGs1vYDoVW {\n    display: flex;\n    flex-direction: row;\n}\n\n._2CwExyCf7HbiY7VMTFtGOz {\n    flex: 1;\n    padding: 20px;\n    border: 0;\n    border-top: 1px solid #ccc;\n}", ""]);

// exports
exports.locals = {
	"MessageForm": "_1jMi-csxQtX0aGs1vYDoVW",
	"MessageInput": "_2CwExyCf7HbiY7VMTFtGOz"
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _MessageList = __webpack_require__(71);

var _MessageList2 = _interopRequireDefault(_MessageList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Message = function Message(props) {
  return _react2.default.createElement(
    'div',
    { className: _MessageList2.default.Message },
    _react2.default.createElement(
      'strong',
      null,
      props.from,
      ' :'
    ),
    _react2.default.createElement(
      'span',
      null,
      props.text
    )
  );
};

var MessageList = function MessageList(props) {
  return _react2.default.createElement(
    'div',
    { className: _MessageList2.default.MessageList },
    props.messages.map((function (message, i) {
      return _react2.default.createElement(Message, {
        key: i,
        from: message.from,
        text: message.text
      });
    }))
  );
};

exports.default = MessageList;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(72);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "._2UvbzmgCLZxth5pRT2XhDs {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    width: 75vw;\n    padding: 20px;\n}", ""]);

// exports
exports.locals = {
	"MessageList": "_2UvbzmgCLZxth5pRT2XhDs"
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _UsersList = __webpack_require__(74);

var _UsersList2 = _interopRequireDefault(_UsersList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UsersList = function UsersList(props) {
  return _react2.default.createElement(
    'div',
    { className: _UsersList2.default.Users },
    _react2.default.createElement(
      'div',
      { className: _UsersList2.default.UsersOnline },
      props.users.length,
      ' people online'
    ),
    _react2.default.createElement(
      'ul',
      { className: _UsersList2.default.UsersList },
      props.users.map((function (user) {
        return _react2.default.createElement(
          'li',
          { key: user.id, className: _UsersList2.default.UserItem },
          user.name
        );
      }))
    )
  );
};

exports.default = UsersList;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(75);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "._16RYw-DuB3WVvAZYlpObwy {\n    display: flex;\n    flex: 1;\n    width: 25vw;\n    justify-content: flex-start;\n    flex-direction: column;\n    border-right: 1px solid #ccc;\n}\n\n._2YzLrdLd1MeWx4XQSssJpj {\n    padding: 20px;\n    text-align: center;\n    background: #ccc;\n}\n\n.y02-8vkS2VDRQHBSq-5zv {\n    margin: 0;\n    padding: 0;\n}\n\n._1QIEu1GWfORrHbUUbSWp9g {\n    list-style: none;\n    border-bottom: 1px solid #ccc;\n    padding: 20px;\n    margin: 0 0 0 20px;\n}", ""]);

// exports
exports.locals = {
	"Users": "_16RYw-DuB3WVvAZYlpObwy",
	"UsersOnline": "_2YzLrdLd1MeWx4XQSssJpj",
	"UsersList": "y02-8vkS2VDRQHBSq-5zv",
	"UserItem": "_1QIEu1GWfORrHbUUbSWp9g"
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _UserForm = __webpack_require__(77);

var _UserForm2 = _interopRequireDefault(_UserForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserForm = (function (_Component) {
  _inherits(UserForm, _Component);

  function UserForm(props) {
    _classCallCheck(this, UserForm);

    var _this = _possibleConstructorReturn(this, (UserForm.__proto__ || Object.getPrototypeOf(UserForm)).call(this, props));

    _this.state = { name: '' };
    return _this;
  }

  _createClass(UserForm, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      this.props.onUserSubmit(this.state.name);
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState({ name: e.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'form',
        { className: _UserForm2.default.UserForm, onSubmit: function onSubmit(e) {
            return _this2.handleSubmit(e);
          } },
        _react2.default.createElement('input', {
          className: _UserForm2.default.UserInput,
          placeholder: 'Write your nickname and press enter',
          onChange: function onChange(e) {
            return _this2.handleChange(e);
          },
          value: this.state.name
        })
      );
    }
  }]);

  return UserForm;
})(_react.Component);

exports.default = UserForm;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(78);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 78 */
/***/ ((function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "._2paQGz9IZpfMwzHu4k5HeL {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100vw;\n    height: 100vh;\n}\n\n._37u6J9ZrBigjkeSnmF2fyE {\n    padding: 20px;\n    font-size: 2em;\n    border: 0;\n    border-bottom: 1px solid #ccc;\n    width: 510px;\n}", ""]);

// exports
exports.locals = {
	"UserForm": "_2paQGz9IZpfMwzHu4k5HeL",
	"UserInput": "_37u6J9ZrBigjkeSnmF2fyE"
};

/***/ }))
/******/ ]);