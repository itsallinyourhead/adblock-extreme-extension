//(a = document.getElementsByTagName('html')[0]).parentNode.removeChild(a);

/* WebRTC wrapper */

(function() {
  var a = 20 + (2 > (a = parseInt(Math.random().toString().slice(-1))) ? 1 : 4 > a ? 2 : 6 > a ? 3 : 8 > a ? 4 : 5),
      b = '', c;
  for ( ; 0 < a; a--)
    b+= 1/26 > (c = Math.random()) ? 'a' : 2/26 > c ? 'b' : 3/26 > c ? 'c' : 4/26 > c ? 'd' : 5/26 > c ? 'e' : 6/26 > c ? 'f' : 7/26 > c ? 'g' : 8/26 > c ? 'h' : 9/26 > c ? 'i' : 10/26 > c ? 'j' : 11/26 > c ? 'k' : 12/26 > c ? 'l' : 13/26 > c ? 'm' : 14/26 > c ? 'n' : 15/26 > c ? 'o' : 16/26 > c ? 'p' : 17/26 > c ? 'q' : 18/26 > c ? 'r' : 19/26 > c ? 's' : 20/26 > c ? 't' : 21/26 > c ? 'u' : 22/26 > c ? 'v' : 23/26 > c ? 'w' : 24/26 > c ? 'x' : 25/26 > c ? 'y' : 'z';
  var A = 'random' + b;
  document.addEventListener(A,function(a) {
    var url = a.detail.url;
    chrome.runtime.sendMessage({a:[,,,,'arguments[2](BeforeRequest({frameId:arguments[1].frameId,tabId:arguments[1].tab.id,type:"webrtc",url:"' + url + '"}))']},function(a) {
      document.dispatchEvent(new CustomEvent(A + url, {detail: a && (a = a.cancel) ? 1 : 0}))
    })
  });
  function WebRTC(a, b) {
    var c = new WeakSet(),
        d = WeakSet.prototype.has.bind(c),
        e = WeakSet.prototype.add.bind(c),
        f = Function.prototype.toString.bind(WebRTC),
        g, h, i, j, k;
    function B(b) {
      if (b && !d(b)) {
        e(b);
        try {
          b[a] = g;
          b.eval('(' + f() + ')("' + a + '", !0)');
          delete b[a]
        }
        catch (c) {}
      }
    }
    for (c of [HTMLFrameElement, HTMLIFrameElement, HTMLObjectElement])
      g = Object.getOwnPropertyDescriptor((h = c.prototype), 'contentDocument'),
      Object.defineProperty(h, 'contentDocument', g),
      i = Object.getOwnPropertyDescriptor(h, 'contentWindow'),
      Object.defineProperty(h, 'contentWindow', i),
      j = Function.prototype.call.bind(g.get),
      k = Function.prototype.call.bind(i.get),
      i.get = function() {
        var a = k(this);
        B(a);
        return a
      },
      g.get = function()
      {
        A(k(this));
        return j(this)
      };
    var C = window.CustomEvent;
    if (b)
      g = window[a];
    else {
      var D = document.removeEventListener.bind(document),
          E = document.addEventListener.bind(document),
          F = document.dispatchEvent.bind(document);
      g = function(url, G) {
        H = a + url;
        function I(c) {
          G(c.detail);
          D(H, I)
        }
        E(H, I);
        F(new C(a, {detail: {url}}))
      }
    }
    function J(c, g, h) {
      for (var i of h)
        if (c.hasOwnProperty(i))
          Object.defineProperty(g, i, Object.getOwnPropertyDescriptor(c, i))
    }
    var K = window.RTCPeerConnection,
        L = Function.prototype.call.bind(K.prototype.close),
        M = String,
        N = Array;
    var {create: createObject, defineProperty} = Object;
    function O(url) {
      if ('undefined' != typeof url)
        return M(url)
    }
    function P(c, g) {
      if (null == c || 'object' != typeof c)
        return c;
      for (var h = N(c.length), i = h.length - 1; 0 <= i; i--)
        defineProperty(h, i, {configurable: !1, enumerable: !1, writable: !1, value: g(c[i])});
      defineProperty(h, "length", {configurable: !1, enumerable: !1, writable: !1, value: h.length});
      return h
    }
    function Q(c) {
      if (null == c || 'object' != typeof c)
        return c;
      var g = P(c.iceServers, function(h) {
        var {url, urls} = h;
        if ('undefined' != typeof urls && !(urls instanceof N))
          urls = [urls];
        return createObject(h, {
          url: {
            configurable: !1, enumerable: !1, writable: !1,
            value: O(url)
          },
          urls: {
            configurable: !1, enumerable: !1, writable: !1,
            value: P(urls, O)
          }
        })
      });
      return createObject(c, {
        iceServers: {
          configurable: !1, enumerable: !1, writable: !1,
          value: g
        }
      })
    }
    function R(c, h) {
      g(h, function(i) {
        if (i) {
          try {
            L(c)
          }
          catch (j) {}
        }
      })
    }
    function S(c, g) {
      if (g && g.iceServers)
        for (var h = g.iceServers.length - 1, i, j; 0 <= h; h--)
          if (i = g.iceServers[h]) {
            if (i.url)
              R(c, i.url);
            if (i.urls)
              for (j = i.urls.length - 1; 0 <= j; j--)
                R(c, i.urls[j])
          }
    }
    if (K.prototype.setConfiguration)
      T = Function.prototype.call.bind(K.prototype.setConfiguration),
      K.prototype.setConfiguration = function(c) {
        c = Q(c);
        T(this, c);
        S(this, c)
      };
    function U(...args) {
      if (!(this instanceof U))
        return K();
      var c = Q(args[0]),
          g = new K(c, args.length > 1 ? args[1] : undefined);
      S(g, c);
      return g
    }
    U.prototype = K.prototype;
    V = U.bind();
    J(K, V, ['generateCertificate', 'name', 'prototype']);
    K.prototype.constructor = V;
    'RTCPeerConnection' in window && (window.RTCPeerConnection = V);
    'webkitRTCPeerConnection' in window && (window.webkitRTCPeerConnection = V)
  }
  if (document instanceof HTMLDocument) {
    c = window.frameElement && window.frameElement.getAttribute('sandbox');
    if ('string' != typeof c || /(^|\s)allow-scripts(\s|$)/i.test(c))
      c = document.createElement('script'),
      c.async = !1,
      c.textContent = '(' + WebRTC + ')("' + A + '");',
      document.documentElement.appendChild(c),
      c.remove()
  }
})()