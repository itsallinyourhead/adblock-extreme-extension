function WhitelistCheck() {
  document.getElementById('WhitelistId').checked = 0 > Whitelist.indexOf(' ' + Host + ' ');
}
function WhitelistF() {
  chrome.runtime.sendMessage({a:[, , , , 'transferVariables', ['Whitelist']]}, function(a) {
    Whitelist = a.Whitelist;
    if (document.getElementById('WhitelistId').checked) {
      if (0 <= (b = Whitelist.indexOf(' ' + Host + ' ')))
        Whitelist = Whitelist.slice(0, b) + Whitelist.slice(b + Host.length + 1);
      chrome.browserAction.setIcon({path: 'Icon16.png', tabId: tabId}, function() {
        chrome.runtime.sendMessage({a:['Whitelist', , 'Whitelist', , 'Whitelist', Whitelist, Host, 'Icon16.png']});
        if (chrome.runtime.lastError)
          return;
      });
    }
    else {
      if (0 > Whitelist.indexOf(' ' + Host + ' '))
        Whitelist += Host + ' ';
      chrome.browserAction.setIcon({path: 'Icon16Whitelist.png', tabId: tabId}, function() {
        chrome.runtime.sendMessage({a:['Whitelist', , 'Whitelist', , 'Whitelist', Whitelist, Host, 'Icon16Whitelist.png']});
        if (chrome.runtime.lastError)
          return;
      });
    }
  });
}
function ShowF() {
  show.blur();
  chrome.storage.local.get('show', function(a) {
    if (a.show)
      'undefined' != typeof updateTimeout && clearTimeout(updateTimeout),
      chrome.storage.local.remove('show'),
      show.innerHTML = 'Show blocked requests on this site',
      block.className = 'hidden';
    else
      chrome.storage.local.set({'show': 1}),
      BlockUpdate(),
      show.innerHTML = 'Hide blocked requests on this site',
      block.className = '';
    a = undefined;
  });
}
function BlockUpdate() {
  chrome.runtime.sendMessage({a:[, , , , 'transferArrayElement', 'BlockedURLs', tabId]}, function(a) {
    var URLs = a.BlockedURLs, b, c, d, e, f, g;
    if (URLs) {
      for (a = (b = Object.keys(URLs)).length, c = 0, d = []; c < a; ++c)
        d.push((e = b[c]) + ' ' + URLs[e]);
      d.sort();
      for (a = d.length, b = 0, c = ''; b < a; ++b)
        e = (f = d[b]).lastIndexOf(' '),
        g = parseInt(f.slice(e + 1)),
        c += '<span class="c e">' + (g > 999 ? '1K+' : g) + '</span><span class="e f g">' + f.slice(0, e) + '</span><br>';
      blockInner.innerHTML = '<span class="a c e">#</span><span class=a>Host</span><br>' + c.slice(0, -4);
    }
    else
      blockInner.innerHTML = '<span id=None>-</span>';
  });
  updateTimeout = setTimeout(BlockUpdate, 500);
}
function Get() {
  chrome.runtime.sendMessage({a:[, , , , 'transferVariables', ['TLDs']]}, function(a) {
    if ('undefined' == typeof a) {
      setTimeout(Get, 100);
      return;
    }
    var A, b;
    TLDs = a.TLDs;
    chrome.tabs.query({currentWindow: true, active: true}, function(a) {
      tabId = a[0].id;
      BlockedTotalF();
      var a = a[0].url,
          a = a.slice(a.indexOf('://') + 3),
          b = a.indexOf('/'),
          c = a.indexOf(':'),
          d, e;
      (0 > c || c > b) && 0 <= b ? (Host = a.slice(0, b), Path = a.slice(b)) : 0 < c && c < b ? (Host = a.slice(0, c), Path = a.slice(b)) : (Host = a, Path = '/');
      '.' == Host.slice(-1) && (Host = Host.slice(0, -1));
      URL = Host + Path;
      if (0 <= (a = Host.lastIndexOf('.')) && 0 <= (b = (c = Host.slice(0, a)).lastIndexOf('.')))
        if (0 <= (c = c.slice(0, b).lastIndexOf('.'))) {
          if (0 <= TLDs.indexOf(' ' + (d = Host.slice(c + 1)) + ' ')) {
            if ('www' == (a = Host.slice(0, c)).slice(0, a.lastIndexOf('.')))
              Host = Host.slice(4);
          }
          else if (0 <= TLDs.indexOf(' ' + Host.slice(b + 1) + ' ') && 'www' == Host.slice(0, c))
            Host = d;
        }
        else if (0 == Host.indexOf('www.' ))
          Host = Host.slice(b + 1);
      a = 1;
      if ('' == Host || 0 <= Host.indexOf('..') || '.' == Host.slice(0, 1) || '.' == Host.slice(-1) || 0 > Host.indexOf('.'))
        a = 0;
      else
        for (b = Host.length, c = 0; c < b; c++)
          if (0 > Host.slice(c, c + 1).search(/[a-zA-Z0-9.-]/)) {
            a = 0;
            break;
          }
      if (a) {
        document.getElementById('WhitelistOuter').style.display = 'block';
        document.getElementById('WhitelistId').addEventListener('click', WhitelistF);
        if (0 > Whitelist.indexOf(' ' + Host + ' '))
          document.getElementById('WhitelistId').checked = 1;
      }
      block = document.getElementById('Block');
      blockInner = document.getElementById('BlockInner');
      show = document.getElementById('Show');
      blockTop = show.offsetHeight + show.offsetTop - 8;
      chrome.storage.local.get(['show'],function(a) {
        if (a.show)
          block.className = '',
          BlockUpdate(),
          show.innerHTML = 'Hide blocked requests on this site';
        body = document.getElementsByTagName('body')[0];
        show.addEventListener('click', ShowF);
        a = undefined;
      });
    });
  });
}
chrome.storage.local.get(['Whitelist'], function(a) {
  Whitelist = a.Whitelist || ' ';
  Get();
  a = undefined;
});
function BlockedTotalF() {
  chrome.storage.local.get('StatsRequests', function(a) {
    chrome.runtime.sendMessage({a:[, , , , 'transferArrayElement', 'Blocked', tabId]}, function(b) {
      let Blocked = b.Blocked, c, d, e;
      if (Blocked) {                                                            // show blocked requests on th this site
        c = Blocked.toString();
        if (1E7 <= Blocked)
          c = 'over 10 million'
        else
          for (d = c.length - 3; 0 < d; d -=3)
            c = c.slice(0, d) + ',' + c.slice(d);
        document.getElementById('BlockedSiteNumber').textContent = c;
      }
      else
        document.getElementById('BlockedSiteNumber').textContent = 0;
      c = (parseInt(localStorage.blockedHTTPS) || 0) + (parseInt(localStorage.blockedHTTP) || 0);// show total blocked requests
      if (a = a.StatsRequests)
        c += a[3] + a[4];
      d = c.toString();
      if (1E7 <= c)
        d = 'over 10 million';
      else
        for (e = d.length - 3; 0 < e; e -=3)
          d = d.slice(0, e) + ',' + d.slice(e);
      document.getElementById('BlockedTotalNumber').textContent = d;
      setTimeout(BlockedTotalF, 500);
    });
  });
}
document.getElementById('OptionsButton').addEventListener('click', function() {
  location.href = chrome.runtime.openOptionsPage();
});
function Message(a) {                                                           // listen to incoming messages
  let b;
  if (b = a.a[2])
    if ('Whitelist' == b) {                                                     // whitelist: add or remove host
      if ('string' == typeof(b = a.a[5]))
        Whitelist = b,
        WhitelistCheck();
    }
}
chrome.runtime.onMessage.addListener(Message);