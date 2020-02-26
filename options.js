defaultLists = {
  Ads: {
    'EasyList main (english)': 'https://easylist-downloads.adblockplus.org/easylist.txt',
    'Supplemental': 'https://lists.adblockextreme.org/supplemental', 
    'EasyList arabic': 'https://easylist-downloads.adblockplus.org/Liste_AR.txt',
    'EasyList bulgarian': 'https://stanev.org/abp/adblock_bg.txt',
    'EasyList chinese': 'https://easylist-downloads.adblockplus.org/easylistchina.txt',
    'EasyList czech and slovak': 'https://raw.githubusercontent.com/tomasko126/easylistczechandslovak/master/filters.txt',
    'EasyList dutch': 'https://easylist-downloads.adblockplus.org/easylistdutch.txt',
    'EasyList french': 'https://easylist-downloads.adblockplus.org/liste_fr.txt',
    'EasyList german': 'https://easylist-downloads.adblockplus.org/easylistgermany.txt',
    'EasyList hebrew': 'https://raw.githubusercontent.com/easylist/EasyListHebrew/master/EasyListHebrew.txt',
    'EasyList indonesian': 'https://raw.githubusercontent.com/heradhis/indonesianadblockrules/master/subscriptions/abpindo.txt',
    'EasyList italian': 'https://easylist-downloads.adblockplus.org/easylistitaly.txt',
    'EasyList japanese': 'https://raw.githubusercontent.com/k2jp/abp-japanese-filters/master/abpjf.txt',
    'EasyList japanese mobile': 'https://280blocker.net/files/280blocker_adblock.txt',
    'EasyList latvian': 'https://notabug.org/latvian-list/adblock-latvian/raw/master/lists/latvian-list.txt'
  },
  HTTPS: {
    'Extreme HTTPS': 'https://lists.adblockextreme.org/HTTPS'
  },
  Other: {
    'Adblock warning removal': 'https://easylist-downloads.adblockplus.org/antiadblockfilters.txt',
    'EasyList privacy': 'https://easylist-downloads.adblockplus.org/easyprivacy.txt',
    'Fanboy cookie warnings': 'https://www.fanboy.co.nz/fanboy-cookiemonster.txt',
    'Stop Cryptomining': 'https://raw.githubusercontent.com/hoshsadiq/adblock-nocoin-list/master/nocoin.txt'
  },
  Social: {
    'EasyList social': 'https://easylist-downloads.adblockplus.org/fanboy-social.txt'
  }
};
StatsShow = 0;
StatsTimeout = '';
function StatsCommata(a, b, c) {
  document.getElementById(a + 'Percent').innerHTML = 0 <= (c = 0 < b ? Math.round(b / c * 1E3) / 10 : 0).toString().indexOf('.') ? c : c + '.0';
  for (b = b.toString(), c = b.length - 3; 0 < c; c -= 3)
    b = b.slice(0, c) + ',' + b.slice(c);
  document.getElementById(a).textContent = b;
}
function StatsFill(a, b, c, d, e) {
  var f = a + b + c + d + e;
  StatsCommata('statsUnchangedHTTPS', a, f);
  StatsCommata('statsUnchangedHTTP', b, f);
  StatsCommata('statsToHTTPS', c, f);
  StatsCommata('statsBlockedHTTPS', d, f);
  StatsCommata('statsBlockedHTTP', e, f);
  StatsCommata('statsTotalBlocked', d + e, f);
  StatsCommata('statsTotalHTTPS', a + c + d, f);
  StatsCommata('statsTotalHTTP', b + e, f);
  StatsCommata('statsTotal', f, f);
  var g = document.getElementById('statsCanvas'), h;
  if (f) {
    g.style.visibility = 'visible';
    a = [a, b, c, d, e];
    b = ['#0f0', '#3fae31', '#ff0', '#f00', '#ae3131'];
    c = a.length;
    d = 1.5 * Math.PI;
    e = 1.5 * Math.PI;
    for(g = g.getContext('2d'), h = 0; h < c; ++h)
      d = e,
      e += a[h] / f * 2 * Math.PI,
      g.beginPath(),
      g.moveTo(125, 125),
      g.arc(125 ,125, 125, d, e, !1),
      g.closePath(),
      g.fillStyle = b[h],
      g.fill();
  }
  else
    g.style.visibility = 'hidden';
  StatsTimeout = setTimeout(StatsGet, 500);
}
function StatsGet() {
  if (!StatsShow)
    document.getElementById('statsReset0').style.display = 'none',
    StatsFill(parseInt(localStorage.unchangedHTTPS), parseInt(localStorage.unchangedHTTP), parseInt(localStorage.toHTTPS), parseInt(localStorage.blockedHTTPS), parseInt(localStorage.blockedHTTP));
  else
    chrome.storage.local.get('StatsRequests', function(a) {
      document.getElementById('statsReset0').style.display = 'inline-block';
      var b = parseInt(localStorage.unchangedHTTPS),
          c = parseInt(localStorage.unchangedHTTP),
          d = parseInt(localStorage.toHTTPS),
          e = parseInt(localStorage.blockedHTTPS),
          f = parseInt(localStorage.blockedHTTP),
          g;
      if (a = a.StatsRequests)
        StatsFill((g = a[0] || 0) + b, (g = a[1] || 0) + c, (g = a[2] || 0) + d, (g = a[3] || 0) + e, (g = a[4] || 0) + f);
      else
        StatsFill(b, c, d, e, f);
    });
}
function StatsReset() {
  clearTimeout(StatsTimeout);
  document.getElementById('statsUnchangedHTTPS').textContent = "0";
  localStorage.unchangedHTTPS = "0";
  document.getElementById('statsUnchangedHTTP').textContent = "0";
  localStorage.unchangedHTTP = "0";
  document.getElementById('statsToHTTPS').textContent = "0";
  localStorage.toHTTPS = "0";
  document.getElementById('statsBlockedHTTPS').textContent = "0";
  localStorage.blockedHTTPS = "0";
  document.getElementById('statsBlockedHTTP').textContent = "0";
  document.getElementById('statsTotalBlocked').textContent = "0";
  document.getElementById('statsTotalHTTPS').textContent = "0";
  document.getElementById('statsTotalHTTP').textContent = "0";
  document.getElementById('statsTotal').textContent = "0";
  localStorage.blockedHTTP = "0";
  document.getElementById('statsUnchangedHTTPSPercent').textContent = '0.0';
  document.getElementById('statsUnchangedHTTPPercent').textContent = '0.0';
  document.getElementById('statsToHTTPSPercent').textContent = '0.0';
  document.getElementById('statsBlockedHTTPSPercent').textContent = '0.0';
  document.getElementById('statsBlockedHTTPPercent').textContent = '0.0';
  document.getElementById('statsTotalBlockedPercent').textContent = '0.0';
  document.getElementById('statsTotalHTTPSPercent').textContent = '0.0';
  document.getElementById('statsTotalHTTPPercent').textContent = '0.0';
  document.getElementById('statsTotalPercent').textContent = '0.0';
  StatsGet();
}
function StatsReset0() {
  clearTimeout(StatsTimeout);
  chrome.storage.local.remove('StatsRequests', function() {
    document.getElementById('statsUnchangedHTTPS').textContent = 0;
    localStorage.unchangedHTTPS = 0;
    document.getElementById('statsUnchangedHTTP').textContent = 0;
    localStorage.unchangedHTTP = 0;
    document.getElementById('statsToHTTPS').textContent = 0;
    localStorage.toHTTPS = 0;
    document.getElementById('statsBlockedHTTPS').textContent = 0;
    localStorage.blockedHTTPS = 0;
    document.getElementById('statsBlockedHTTP').textContent = 0;
    document.getElementById('statsTotalBlocked').textContent = 0;
    document.getElementById('statsTotalHTTPS').textContent = 0;
    document.getElementById('statsTotalHTTP').textContent = 0;
    document.getElementById('statsTotal').textContent = 0;
    localStorage.blockedHTTP = 0;
    document.getElementById('statsUnchangedHTTPSPercent').textContent = '0.0';
    document.getElementById('statsUnchangedHTTPPercent').textContent = '0.0';
    document.getElementById('statsToHTTPSPercent').textContent = '0.0';
    document.getElementById('statsBlockedHTTPSPercent').textContent = '0.0';
    document.getElementById('statsBlockedHTTPPercent').textContent = '0.0';
    document.getElementById('statsTotalBlockedPercent').textContent = '0.0';
    document.getElementById('statsTotalHTTPSPercent').textContent = '0.0';
    document.getElementById('statsTotalHTTPPercent').textContent = '0.0';
    document.getElementById('statsTotalPercent').textContent = '0.0';
    StatsGet();
  });
}
document.getElementById('statsReset').addEventListener('click', StatsReset);
document.getElementById('statsReset0').addEventListener('click', StatsReset0);
document.getElementById('statsShowAll').addEventListener('click', function() {
  StatsShow = 1;
  clearTimeout(StatsTimeout);
  StatsGet();
  chrome.storage.local.set({StatsShow: 1});
});
document.getElementById('statsShowOnly').addEventListener('click', function() {
  StatsShow = 0;
  clearTimeout(StatsTimeout);
  StatsGet();
  chrome.storage.local.remove('StatsShow');
});
for (var a = document.getElementsByTagName('div'), b = a.length - 1, c, d, e, f; 0 <= b; --b)
  if ((c = a[b].className) && 'nav' == c)
    for (c = a[b].getElementsByTagName('span'), d = c.length - 1; 0 <= d; --d)
      if ((e = (f = c[d]).className) && 0 == e.search('nav0'))
        f.addEventListener('click', function() {
          var a, b;
          this.firstChild.removeAttribute('style');
          this.style.cursor = 'pointer';
          location.hash = '#' + (a = (b = this.getAttribute('class')).slice(b.lastIndexOf(' ') + 1));
          chrome.storage.local.set({OptionsPage:a});
          'StatisticsId' != a ? clearTimeout(StatsTimeout) : StatsGet();
        }),
        f.addEventListener('keydown', function(a) {
          var a, b;
          if (13 == a.keyCode)
            location.hash = '#' + (a = (b = this.getAttribute('class')).slice(b.lastIndexOf(' ') + 1)),
            chrome.storage.local.set({OptionsPage:a}),
            'StatisticsId' != a ? clearTimeout(StatsTimeout) : StatsGet();
        }),
        f.addEventListener('mousedown', function() {
          this.firstChild.setAttribute('style', 'outline: 0');
        });
function UpdateCounter() {
  return (localStorage.updateCounter = localStorage.updateCounter ? parseInt(localStorage.updateCounter) + 1 : 1);
}
function UpdateLists() {
  Stop();
  ListsStatusClear();
  chrome.runtime.sendMessage({a:[, , , , 'UpdateLists', Lists, ListsStatus, UpdateCounter(), true]});
}
document.getElementById('updateLists').addEventListener('click', UpdateLists);
document.getElementById('Version').textContent = 'Version: ' + chrome.runtime.getManifest().version;
SortAds = [];
SortHTTPS = [];
SortOther = [];
SortSocial = [];
function AddList(a, b) {
  var c = document.getElementById('lists' + b),
      d = c.getElementsByTagName('table')[0], e, f, g;
  if ((e = Lists[b]) && (e = e[a])) {
    f =
      '<td class=t1><label class=switch><input checked=checked class=switchI name="' + (g = b + a) + '" type=checkbox><span class=switchL data-on=ON data-off=OFF></span><span class=switchH></span></label></td>'+
      '<td class=t2><a href="' + e.u + '" target=blank>' + a + '</a></td>'+
      '<td class=t3><button class=trash name="' + g + '" title="Remove list"></button></td>'+
      '<td class=t4 id="Date' + (e = escape(g)) + '"></td>'+
      '<td class=t5 id="Note' + e + '"></td>';
    (e = 'Ads' == b ? SortAds : 'HTTPS' == b ? SortHTTPS : 'Other' == b ? SortOther : SortSocial).push(a);
    e.sort();
    if (d) {
      for (g = e.length - 1; 0 < g && a != e[g]; --g)
        ;
      (a = document.createElement('tr')).innerHTML = f;
      (d = d.getElementsByTagName('tbody')[0]).insertBefore(a, d.getElementsByTagName('tr')[g]);
    }
    else
      c.innerHTML = '<table><tr>' + f + '</tr></table>';
    for (a = (c = c.getElementsByTagName('table')[0]).getElementsByTagName('label'), d = a.length - 1; 0 <= d; --d)
      a[d].addEventListener('focusout', onFocusOut);
    for (a = c.getElementsByTagName('input'), d = a.length - 1; 0 <= d; --d)
      a[d].addEventListener('click', onClickEnabled),
      a[d].addEventListener('keyup', onKeyUp);
    for (a = c.getElementsByTagName('button'), c = a.length - 1; 0 <= c; --c)
      a[c].addEventListener('click', onClickRemove);
    TabIndex(b);
  }
}
function Age(a) {
  var b = (new Date).getTime() - a, c;
  if (a) {
    if (6E4 > b)
      c = 'Updated ' + 'a few seconds';
    else if (36E5 > b)
      c = 'Updated ' + (b = Math.floor(b / 6E4)) + ' minute' + (1 < b ? 's' : '');
    else if (864E5 > b)
      c = 'Updated ' + (b = Math.floor(b / 36E5)) + ' hour' + (1 < b ? 's' : '');
    else
      c = 'Updated ' + (b = Math.floor(b / 864E5)) + ' day' + (1 < b ? 's' : '');
  }
  else
    c = 'File not found.';
  return c;
}
function Current() {
  if ('undefined' != typeof Lists) {
    for (var a = document.getElementsByTagName('td'), b = a.length - 1, c, d, e, f, g, h; 0 <= b; --b)
      if ((c = (d = a[b]).id) && 0 == c.search('Date')) {
        e = c.slice(4);
        if ('Ads' == (f = c.slice(4, 7))
        && (g = Lists.Ads[h = unescape(c.slice(7))])
        || 'HTTPS' == (f = c.slice(4, 9))
        && (g = Lists.HTTPS[h = unescape(c.slice(9))])
        || 'Other' == f
        && (g = Lists.Other[h = unescape(c.slice(9))])
        || (g = Lists[f = 'Social'][h = unescape(c.slice(10))]))
          if ('undefined' != typeof ListsStatus
          && (f = ListsStatus[f])
          && (f = f[h])
          && ((f = f.s)
          || '' == f))
            f != d.innerHTML && (d.innerHTML = f);
          else {
            c = Age(g.d);
            if (g.d)
              if (g.f)
                h = 'Download failed' + Age(g.f).slice(7) + ' ago!',
                h != d.innerHTML && (d.innerHTML = h);
              else
                c + '.ago' != d.innerHTML && (d.innerHTML = c + ' ago.');
            else
              g.f && 'File not found!' != d.innerHTML && (d.innerHTML = 'File not found!');
            if (g.e)
              h = g.f ? (g.d ? ' Using' + c.slice(7) + ' old copy instead.' : '') : '',
              h != document.getElementById('Note' + e).innerHTML && (document.getElementById('Note' + e).innerHTML = h);
          }
      }
    current = setTimeout(Current, 1E3);
  }
  else
    chrome.storage.local.get('Lists', function(a) {
      if ('undefined' == typeof Lists)
        if (a = a.Lists)
          Lists = a;
        else
          Lists = {
            Ads: {
              'EasyList main (english)': {e: 1, u: 'https://easylist-downloads.adblockplus.org/easylist.txt'},
              'Supplemental': {e: 1, u: 'https://lists.adblockextreme.org/supplemental'}
            },
            HTTPS: {
              'Extreme HTTPS': {e: 0, u: 'https://lists.adblockextreme.org/HTTPS'}
            },
            Other: {
              'Adblock warning removal': {e: 1, u: 'https://easylist-downloads.adblockplus.org/antiadblockfilters.txt'},
              'EasyList privacy': {e: 1, u: 'https://easylist-downloads.adblockplus.org/easyprivacy.txt'},
              'Stop Cryptomining': {e: 1, u: 'https://raw.githubusercontent.com/hoshsadiq/adblock-nocoin-list/master/nocoin.txt'}
            },
            SiteSpecific: {
              FacebookAdsRight: 1
            },
            Social: {
              'EasyList social': {e: 0, u: 'https://easylist-downloads.adblockplus.org/fanboy-social.txt'}
            }
          };
      Current();
    });
}
function TabIndex(a) {
  for (var a = document.getElementById('lists' + a).getElementsByTagName('*'), b = a.length - 1, c; 0 <= b; --b)
    if (0 <= ' a button input '.indexOf(' ' + (c = a[b]).tagName.toLowerCase() + ' '))
      'undefined' != c.tabindex && c.removeAttribute('tabindex');
}
function ListsStatusClear() {
  var a, b, c, d, e, f;
  ListsStatus = {Ads: {}, HTTPS: {}, Other: {}, Social: {}};
  for (a = Object.keys(b = Lists['Ads']), c =  a.length - 1; 0 <= c; --c)
    if (b[d = a[c]].e)
      ListsStatus['Ads'][d] = {s: ''},
      (e = document.getElementById('DateAds' + (f = escape(d)))) && (e.innerHTML = ''),
      (e = document.getElementById('NoteAds' + f)) && (e.innerHTML = '');
  for (a = Object.keys(b = Lists['Social']), c =  a.length - 1; 0 <= c; --c)
    if (b[d = a[c]].e)
      ListsStatus['Social'][d] = {s: ''},
      (e = document.getElementById('DateSocial' + (f = escape(d)))) && (e.innerHTML = ''),
      (e = document.getElementById('NoteSocial' + f)) && (e.innerHTML = '');
  for (a = Object.keys(b = Lists['Other']), c =  a.length - 1; 0 <= c; --c)
    if (b[d = a[c]].e)
      ListsStatus['Other'][d] = {s: ''},
      (e = document.getElementById('DateOther' + (f = escape(d)))) && (e.innerHTML = ''),
      (e = document.getElementById('NoteOther' + f)) && (e.innerHTML = '');
  for (a = Object.keys(b = Lists['HTTPS']), c =  a.length - 1; 0 <= c; --c)
    if (b[d = a[c]].e)
      ListsStatus['HTTPS'][d] = {s: ''},
      (e = document.getElementById('DateHTTPS' + (f = escape(d)))) && (e.innerHTML = ''),
      (e = document.getElementById('NoteHTTPS' + f)) && (e.innerHTML = '');
}
function onClickEnabled() {
  Stop();
  ListsStatusClear();
  var a = this.parentNode.getElementsByTagName('input')[0], b = a.name, c;
  if ('Ads' == (c = b.slice(0, 3)))
    b = b.slice(3);
  else if ('HTTPS' == (c = b.slice(0, 5)))
    b = b.slice(5);
  else if ('Other' == c)
    b = b.slice(5);
  else
    b = b.slice(6),
    c = 'Social';
  if (a.checked)
    Lists[c][b].e = 1;
  else
    Lists[c][b].e = 0,
    (a = ListsStatus[c]) && (a = a[b]) && delete a.s;
  chrome.runtime.sendMessage({a:[, , , , 'UpdateLists', Lists, ListsStatus, UpdateCounter(), false]});
}
function onClickRemove() {
  var a = this.name, b, c, d, e, f;
  if ('Ads' == (b = a.slice(0, 3)))
    a = a.slice(3);
  else if ('HTTPS' == (b = a.slice(0, 5)))
    a = a.slice(5);
  else if ('Other' == b)
    a = a.slice(5);
  else
    a = a.slice(6),
    b = 'Social';
  if (!Lists[b][a])
    return;
  for (c = Lists[b][a].u, d = (e = Object.keys(f = defaultLists[b])).length - 1; 0 <= d; --d)
    if (f[e[d]] == c) {
      c = Object.getOwnPropertyNames(f)[d];
      for (d = document.getElementById('addSelect').getElementsByTagName('option'), e = d.length - 1; 0 <= e; --e)
        if ((f = d[e]).innerHTML == c + ' ✔') {
          f.innerHTML = c;
          break;
        }
      break;
    }
  c = Lists[b][a].e;
  delete Lists[b][a];
  d = 'Ads' == b ? SortAds : 'HTTPS' == b ? SortHTTPS : 'Other' == b ? SortOther : SortSocial;
  for (e = d.length - 1; 0 < e && a != d[e]; --e)
    ;
  d = d.slice(0, e).concat(d.slice(e + 1));
  'Ads' == b ? SortAds = d : 'HTTPS' == b ? SortHTTPS = d : 'Other' == b ? SortOther = d : SortSocial = d;
  if (c)
    Stop(),
    ListsStatusClear(),
    chrome.runtime.sendMessage({a:['ClickRemove', , , , 'ListRemoveEnabled', Lists, escape(a), b, UpdateCounter(), ListsStatus]});
  else
    Stop(),
    chrome.runtime.sendMessage({a:['ClickRemove', , , , 'ListRemoveDisabled', Lists, escape(a), b, UpdateCounter()]});
  Object.keys(Lists[b]).length ? (a = this.parentNode.parentNode).parentNode.removeChild(a) : (document.getElementById('lists' + b).innerHTML = '');
}
function onFocusOut() {                                                         // fake outline for toggle buttons
  document.hasFocus() && (this.getElementsByTagName('input')[0].className = 'switchI');
}
function onKeyUp(e) {                                                           // detect keyboard navigation for toggle buttons
  if (e && (e = e.which))
    if (13 == e)
      this.click();
    else if (9 == e)
      this.className = 'switchI switchIFocus';
}
function RemoveList(a) {
  for (var b = document.getElementById('lists').getElementsByTagName('a'), c = b.length - 1, d; 0 <= c; --c)
    if (a == b[c].href) {
      (d = b[c].parentNode.parentNode).parentNode.removeChild(d);
      break;
    }
}
function Stop() {
  Stop2('Ads');
  Stop2('Social');
  Stop2('Other');
  Stop2('HTTPS');
}
function Stop2(a) {
  if (a = Lists[a])
    for (var b = Object.keys(a), c = b.length - 1, d; 0 <= c; --c)
      (d = a[b[c]]).f && delete d.f;
}
function WhitelistBuild() {
  var a;
  if (' ' != (a = Whitelist)) {
    for (var a = a.slice(1, -1).split(' ').sort(), b = a.length, c = 0, d = ''; c < b; ++c)
      d += '<div class="listsWhiteBottom listsWhite">' + a[c] + '<button class=trashHide title="Remove site"></button></div>';
    (a = document.getElementById('listsWhite')).innerHTML = d;
    c = a.getElementsByTagName('div');
    5 < b && (c[c.length - 1].className = 'listsWhite');
    for (a = a.getElementsByTagName('button'), c = 0; c < b; ++c)
      a[c].addEventListener('click', WhitelistRemove);
  }
  else
    document.getElementById('listsWhite').innerHTML = '<div class=listsWhiteNo>No sites are whitelisted.</div>';
}
function WhitelistRemove() {
  var a = this.parentNode,
      b,
      Host = a.firstChild.textContent;
  if (0 <= (b= Whitelist.indexOf(' ' + Host + ' ')))
    Whitelist = Whitelist.slice(0, b) + Whitelist.slice(b + Host.length + 1);
  b = a.parentNode.getElementsByTagName('div');
  a.parentNode.removeChild(a);
  if (0 > (a = b.length - 1))
    document.getElementById('listsWhite').innerHTML = '<div class=listsWhiteNo>No sites are whitelisted.</div>';
  else if (4 == a)
    b[a].className = 'listsWhiteBottom listsWhite';
  else if (4 < a)
    b[a].className = 'listsWhite';
  chrome.runtime.sendMessage({a:['Whitelist', , 'Whitelist', ,'Whitelist', Whitelist, Host, 'Icon16.png']});
}
function WhitelistAdd(a) {
  13 == a.keyCode && WhitelistSubmit();
}
function WhitelistError() {
  this.parentNode.innerHTML = '';
}
function WhitelistSubmit() {
  var Host = document.getElementById('listsWhiteAdd').value.toLowerCase(), a = '', b, c, d, e;
  if ('' == Host)
    a = 'Error: no site added &nbsp;<button></button>';
  else if (0 <= Host.indexOf('..'))
    a = 'Error: successive dots not allowed &nbsp;<button></button>';
  else if ('.' == Host.slice(0, 1))
    a = 'Error: dot at beginning not allowed &nbsp;<button></button>';
  else if (0 > Host.indexOf('.'))
    a = 'Error: no dot &nbsp;<button></button>';
  else {
    for (b = Host.length, c = 0, d = ''; c < b; ++c)
      if (0 > 'abcdefghijklmnopqrstuvwxyz-0123456789.'.indexOf(e = Host.slice(c, c + 1))) {
        d = e;
        break;
      }
    '' != d && (a = 'Error: invalid character "' + d + '" &nbsp;<button></button>');
  }
  (b = document.getElementById('listsWhiteError')).innerHTML = a;
  (b = b.getElementsByTagName('button')[0]) && (b.className = 'trash') && (b.addEventListener('click', WhitelistError)) && (b.title = 'Remove error message');
  if ('' == a) {
    if ('.' == Host.slice(-1))
      Host = Host.slice(0, -1);
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
    if (0 <= Whitelist.indexOf(' ' + Host + ' ')) {
      (a = document.getElementById('listsWhiteError')).innerHTML = 'Error: site is already whitelisted &nbsp;<button class=trash title="Remove error message"></button>';
      a.getElementsByTagName('button')[0].addEventListener('click', WhitelistError);
      return;
    }
    Whitelist += Host + ' ';
    WhitelistBuild();
    chrome.runtime.sendMessage({a:['Whitelist', , 'Whitelist', , 'Whitelist', Whitelist, Host, 'Icon16Whitelist.png']});
  }
}
WhitelistShowTest = 0;
function WhitelistShow() {
  if (!WhitelistShowTest)
    ++WhitelistShowTest,
    document.getElementById('listsWhiteShow').innerHTML = 'Hide help...',
    document.getElementById('listsWhiteHelp').innerHTML =
      'Add only host. Whitelists all protocols and ports.<br>'+
      '<br>'+
      '"example.com" matches "www.example.com" too.<br>'+
      '<br>'+
      'Remove sites with related cross in list on the left.<br>'+
      '<br>'+
      'Sites can also be whitelisted or removed with extension icon.';
  else
    --WhitelistShowTest,
    document.getElementById('listsWhiteShow').innerHTML = 'Show help...',
    document.getElementById('listsWhiteHelp').innerHTML = '';
  this.blur();
}
function Badge() {
  chrome.runtime.sendMessage({a:['Badge', , , , 'Badge', this.checked]});
}
function Smooth() {
  if (this.checked)
    chrome.runtime.sendMessage({a:['Smooth',,,,'SmoothSet', true]});
  else
    chrome.runtime.sendMessage({a:['Smooth',,,,'SmoothRemove', false]});
}
function OwnEnabled() {
  !Lists.Own && (Lists.Own = {});
  Lists.Own.e = this.checked ? 1 : 0;
  var a = Lists.Own.u = document.getElementById('listsOwnTextarea').value;
  ListsStatusClear();
  chrome.runtime.sendMessage({a:['ListsOwn', , , , 'UpdateLists', Lists, ListsStatus, UpdateCounter(), false]});
}
function OwnApply() {
  !Lists.Own && (Lists.Own = {});
  'undefined' == typeof Lists.Own.e && (Lists.Own.e = document.getElementById('listsOwnEnabled').checked ? 1 : 0);
  var a = Lists.Own.u = document.getElementById('listsOwnTextarea').value;
  ListsStatusClear();
  0 != Lists.Own.e && chrome.runtime.sendMessage({a:[, , , , 'UpdateLists', Lists, ListsStatus, UpdateCounter(), false]});
}
function ListsAddOwn() {
  var a = document.getElementById('listsAddWarningOuter'),
      b = document.getElementById('listsAddWarning'),
      c = document.getElementById('listsAddName').value.trim(),
      d = document.getElementById('listsAddURL').value.trim(),
      e, f, g, h;
  a.style.display = 'none';
  if ('' == d) {
    a.style.display = 'inline-block';
    b.innerHTML = 'missing URL';
    return;
  }
  if ('https://' != d.slice(0, 8).toLowerCase()) {
    a.style.display = 'inline-block';
    b.innerHTML = 'protocol must be https';
    return;
  }
  if (9 > d.length) {
    a.style.display = 'inline-block';
    b.innerHTML = 'missing domain';
    return;
  }
  if (30 < (e = c.length)) {
    a.style.display = 'inline-block';
    b.innerHTML = 'max characters for name: 30, currently: ' + e;
    return;
  }
  if (0 <= c.indexOf('"')) {
    a.style.display = 'inline-block';
    b.innerHTML = 'no " in name allowed';
    return;
 }
  if (/\s/g.test(d)) {
    a.style.display = 'inline-block';
    b.innerHTML = 'no white spaces in URL allowed';
    return;
  }
  if ('' == c)
    if (0 <= (e = d.lastIndexOf('/')) && e + 1 < d.length)
      if ('.txt' == (c = d.slice(e + 1)).toLowerCase().slice(-4) && 4 < c.length)
        c = c.slice(0, -4);
      else
        c = d.slice(8);
  0 <= c.indexOf('"') && (c = c.replace(/"/g, ''));
  '' == c && (c = 'empty');
  if (0 <= (e = (f = d.slice(8)).indexOf('/')))
    d = 'https://' + f.slice(0, e).toLowerCase() + f.slice(e);
  for (e = (g = Object.keys(h = Lists['Ads'])).length - 1; 0 <=e; --e)
    if (h[g[e]].u == d) {
      a.style.display = 'inline-block';
      b.innerHTML = 'list already added';
      return;
    }
  for (e = (g = Object.keys(h = Lists['Social'])).length - 1; 0 <=e; --e)
    if (h[g[e]].u == d) {
      a.style.display = 'inline-block';
      b.innerHTML = 'list already added';
      return;
    }
  for (e = (g = Object.keys(h = Lists['Other'])).length - 1; 0 <=e; --e)
    if (h[g[e]].u == d) {
      a.style.display = 'inline-block';
      b.innerHTML = 'list already added';
      return;
    }
  for (e = (g = Object.keys(h = Lists['HTTPS'])).length - 1; 0 <=e; --e)
    if (h[g[e]].u == d) {
      a.style.display = 'inline-block';
      b.innerHTML = 'list already added';
      return;
    }
  e = document.getElementById('listsAddCategory').value;
  e = 1 > e ? 'Ads' : 2 > e ? 'Social' : 3 > e ? 'Other' : 'HTTPS';
  Lists[e][c] = {};
  Lists[e][c].e = 1;
  Lists[e][c].u = d;
  AddList(c, e);
  ListsStatusClear();
  chrome.runtime.sendMessage({a:['AddList', , , , 'ListAddOwn', Lists, ListsStatus, UpdateCounter(), false, c, e]});
}
document.getElementById('listsAddWarningRemove').addEventListener('click', function() {
  document.getElementById('listsAddWarningOuter').style.display = 'none';
});
function onKeyDownListsAdd(e) {
  13 == e.keyCode && ListsAddOwn();
}
document.getElementById('listsAddName').addEventListener('keydown', onKeyDownListsAdd);
document.getElementById('listsAddURL').addEventListener('keydown', onKeyDownListsAdd);
function ListsOwnShow() {
  var a, b;
  this.parentNode.removeChild(this);
  document.getElementById('listsOwnApply').className = (a = document.getElementById('listsOwnTextarea')).className = '';
  if (window.Lists && (b = Lists.Own) && (b = b.u) && '' != b)
    a.value = b;
}
function Message(a) {                                                           // listen to incoming messages
  let b, c, d, e, f, g, h;
  if (b = a.a[0])
    if ('AddList' == b) {                                                       // add list
      if (undefined != (b = a.a[5]) && 'string' == typeof(c = a.a[9]) && 'string' == typeof(d = a.a[10]))
        Lists = b,
        AddList(c, d);
    }
    else if ('Badge' == b) {                                                    // enable or disable Badge
      if (undefined != (b = a.a[5]))
        document.getElementById('GeneralBadge').checked = b;
    }
    else if ('ClickRemove' == b) {                                              // remove list
      if (undefined != typeof(b = a.a[5]) && 'string' == typeof(c = a.a[6]) && 'string' == typeof(d = a.a[7])) {
        Lists = b;
        if (0 < Object.keys(Lists[d]).length)
          (e = document.getElementById('Date' + d + c).parentNode).parentNode.removeChild(e);
        else
          document.getElementById('lists' + d).textContent = '';
      }
    }
    else if ('downloading' == b) {                                              // set status to downloading
      if (undefined != (b = a.a[5]) && 'string' == typeof(c = a.a[6]))
        ListsStatus = b,
        (a = document.getElementById('Date' + c)) && (a.textContent = 'downloading...');
    }
    else if ('ListName-ListsStatus' == b) {                                     // update list overview
      if (undefined !=      (b =  a.a[5])
      && 'string' == typeof (c =  a.a[6])
      && 'string' == typeof (d =  a.a[7])
      && 'string' == typeof (e =  a.a[8])
      && 'number' == typeof (f =  a.a[9])
      && 'string' == typeof (g = a.a[10])) {
        ListsStatus = b;
        if (h = document.getElementById('Date' + c))
          a.textContent = Age((Lists[d][e]).d = f) + ' ago.',
          clearTimeout(current),
          document.getElementById('Note' + g).textContent = '',
          Current();
      }
    }
    else if ('ListsOwn' == b) {                                                 // enable or disable own list
      if (undefined != (b = a.a[5])) {
        Lists = b;
        if (Lists.Own)
          document.getElementById('listsOwnEnabled').checked = Lists.Own.e;
      }
    }
    else if ('ListsStatusUndefined' == b)                                       // set ListsStatus to undefined
      ListsStatus = undefined;
    else if ('LoadingBar-Converting' == b) {                                    // change width of loading bar and show status converting
      if (undefined !=       (b = a.a[5])
      &&  undefined !=       (c = a.a[6])
      && 'string'   == typeof(d = a.a[7])) {
        document.getElementById("loadingBar").style.width = b + '%';
        ListsStatus = c;
        (a = document.getElementById('Date' + d)) && (a.textContent = 'converting...');
      }
    }
    else if ('LoadingBar-Lists' == b) {                                         // change width of loading bar and override Lists
      if (undefined != (b = a.a[5]))
        Lists = b,
        ListsStatus = undefined,
        document.getElementById('loadingBar').style.width = 0;
    }
    else if ('LoadingBar' == b) {                                               // change width of loading bar
      if ('string' == typeof(b = a.a[5]))
        document.getElementById('loadingBar').style.width = b + '%';
    }
    else if ('LogConsole' == b) {                                               // log blocked or redirected requests in console
      if ('string' == typeof(b = a.a[5]) && 'boolean' == typeof(c = a.a[6]))
        if (b = document.getElementById('GeneralLog' + b))
          b.checked = c;
    }
    else if('SiteSpecific' == b) {                                              // enable or disable site specific filter
      if (undefined != (b = a.a[5]) && 'string' == typeof(c = a.a[9]) && 'boolean' == typeof(d = a.a[10]))
        Lists = b,
        document.getElementById('SiteSpecific' + c).checked = d;
    }
    else if ('SiteSpecificFacebookTimeline' == b) {                             // site specific: enable or disable Facebook timeline filter
      if ('boolean' == typeof(b = a.a[5]))
        document.getElementById('SiteSpecificFacebookTimelineId').checked = b;
    }
    else if ('SiteSpecificYouTubeAnnotations' == b) {                           // site specific: enable or disable YouTube annotations filter
      if ('boolean' == typeof(b = a.a[5]))
        document.getElementById('SiteSpecificYouTubeAnnotations').checked = b;
    }
    else if ('Smooth' == b) {                                                   // enable or disable smooth page load
      if (undefined != (b = a.a[5]))
        document.getElementById('GeneralSmooth').checked = b;
    }
    else if ('Whitelist' == b) {                                                // update Whitelist
      if ('string' == typeof(b = a.a[5]))
        Whitelist = b,
        WhitelistBuild();
    }
}
function Get() {
  chrome.runtime.sendMessage({a:[, , , , 'transferVariables', ['Badge', 'Lists', 'ListsStatus', 'LoadingProgress', 'LogBlock', 'LogHTTPS', 'Smooth', 'TLDs']]}, function(a) {
    if ('undefined' == typeof a) {
      setTimeout(Get, 50);
      return;
    }
    var A, b, c;
    (b = a.LoadingProgress) && (document.getElementById('loadingBar').style.width = b + '%');
    Lists = a.Lists;
    ListsStatus = a.ListsStatus;
    (b = document.getElementById('GeneralBadge')).checked = a.Badge;
    b.addEventListener('click', Badge);
    (b = document.getElementById('GeneralSmooth')).checked = a.Smooth;
    b.addEventListener('click', Smooth);
    Current();
    chrome.runtime.onMessage.addListener(Message);
    TLDs = a.TLDs;
    document.getElementById('listsWhiteAdd').addEventListener('keyup', WhitelistAdd);
    document.getElementById('listsWhiteSubmit').addEventListener('click', WhitelistSubmit);
    document.getElementById('listsWhiteShow').addEventListener('click', WhitelistShow);
    document.getElementById('listsAddSubmit').addEventListener('click', ListsAddOwn);
    A = function(b) {
      var c;
      (c = document.getElementById('GeneralLog' + b)).checked = a['Log' + b];
      c.addEventListener('click', function() {
        chrome.runtime.sendMessage({a:['LogConsole', , , , 'LogConsole', b, this.checked]});
      });
    };
    A('Block');
    A('HTTPS');
    chrome.storage.local.get(['FacebookTimelineTest', 'Lists', 'OptionsPage', 'StatsShow', 'Whitelist', 'YouTubeAnnotationsTest'], function(a) {
      var A, b, c, d, e, f, g, h, i, j;
      if ('undefined' == typeof Lists)
        if (b = a.Lists)
          Lists = b;
        else
          Lists = {
            Ads: {
              'EasyList main (english)': {e: 1, u: 'https://easylist-downloads.adblockplus.org/easylist.txt'},
              'Supplemental': {e: 1, u: 'https://lists.adblockextreme.org/supplemental'}
            },
            HTTPS: {
              'Extreme HTTPS': {e: 0, u: 'https://lists.adblockextreme.org/HTTPS'}
            },
            Other: {
              'Adblock warning removal': {e: 1, u: 'https://easylist-downloads.adblockplus.org/antiadblockfilters.txt'},
              'EasyList privacy': {e: 1, u: 'https://easylist-downloads.adblockplus.org/easyprivacy.txt'},
              'Stop Cryptomining': {e: 1, u: 'https://raw.githubusercontent.com/hoshsadiq/adblock-nocoin-list/master/nocoin.txt'}
            },
            SiteSpecific: {
              FacebookAdsRight: 1
            },
            Social: {
              'EasyList social': {e: 0, u: 'https://easylist-downloads.adblockplus.org/fanboy-social.txt'}
            }
          };
      (c = document.getElementById('addSelect')).addEventListener('change', function() {
        document.getElementById('listsAddWarningOuter').style.display = 'none';
        var a = this.value, b, c = document.getElementById('addOwn').style, d;
        b = this.getElementsByTagName('option')[this.selectedIndex];
        if (0 != (d = b.value) && 1 != d && ' ✔' != b.innerHTML.slice(-2))
          b.innerHTML += ' ✔';
        if (1 == a)
          c.display = 'block',
          document.getElementById('listsAddURL').focus();
        else if (c.display = 'none',
        ('Ads' == (b = a.slice(0, 3))
        && (a = a.slice(3))
        || 'HTTPS' == (b = a.slice(0, 5))
        && (a = a.slice(5))
        || 'Other' == b
        && (a = a.slice(5))
        || (b = 'Social')
        && (a = a.slice(6)))) {
          if (Lists[b] && Lists[b][a]) {                                        // To Do: highlight existing list
          }
          else {
            !Lists[b] && (Lists[b] = {});
            Lists[b][a] = {e: 1, u: defaultLists[b][a]};
            AddList(a, b);
            ListsStatusClear();
            chrome.runtime.sendMessage({a:['AddList', , , , 'UpdateLists', Lists, ListsStatus, UpdateCounter(), true, a, b]});
          }
          this.value = 0;
        }
      });
      c = c.getElementsByTagName('optgroup');
      if (d = Lists.Ads)
        for (e = c[0].getElementsByTagName('option'), f = e.length, g = 0; g < f; ++g)
          for (h = defaultLists.Ads[e[g].innerHTML], i = (j = Object.keys(d)).length - 1; 0 <= i; --i)
            if (d[j[i]].u == h) {
              e[g].innerHTML += ' ✔';
              break;
            }
      if (d = Lists.Social)
        for (e = c[1].getElementsByTagName('option'), f = e.length, g = 0; g < f; ++g)
          for (h = defaultLists.Social[e[g].innerHTML], i = (j = Object.keys(d)).length - 1; 0 <= i; --i)
            if (d[j[i]].u == h) {
              e[g].innerHTML += ' ✔';
              break;
            }
      if (d = Lists.Other)
        for (e = c[2].getElementsByTagName('option'), f = e.length, g = 0; g < f; ++g)
          for (h = defaultLists.Other[e[g].innerHTML], i = (j = Object.keys(d)).length - 1; 0 <= i; --i)
            if (d[j[i]].u == h) {
              e[g].innerHTML += ' ✔';
              break;
            }
      if (d = Lists.HTTPS)
        for (e = c[3].getElementsByTagName('option'), f = e.length, g = 0; g < f; ++g)
          for (h = defaultLists.HTTPS[e[g].innerHTML], i = (j = Object.keys(d)).length - 1; 0 <= i; --i)
            if (d[j[i]].u == h) {
              e[g].innerHTML += ' ✔';
              break;
            }
      function A(b) {
        var c, d;
        if (c = Lists[b]) {
          for (var e = Object.keys(c), f = e.length, g = 0, h = '', i, j, k = 'Ads' == b ? SortAds : 'HTTPS' == b ? SortHTTPS : 'Other' == b ? SortOther : SortSocial; f > g; ++g)
            h +=
              '<tr>'+
                '<td class=t1><label class=switch><input ' + (0 < (i = c[j = e[g]].e) ? 'checked=checked ' : '') + 'class=switchI name="' + b + j + '" type=checkbox><span class=switchL data-on=ON data-off=OFF></span><span class=switchH></span></label></td>'+
                '<td class=t2><a href="' + c[j].u + '" target=blank>' + j + '</a></td>'+
                '<td class=t3><button class=trash name="' + b + j + '" title="Remove list"></button></td>'+
                '<td class=t4 id="Date' + b + (i = escape(j)) + '"></td>'+
                '<td class=t5 id="Note' + b + i + '"></td>'+
              '</tr>',
            k.push(j);
          if ('' != h) {
            k.sort();
            (c = document.getElementById('lists' + b)).innerHTML = '<table>' + h + '</table>';
            for (c = (d = c.getElementsByTagName('table')[0]).getElementsByTagName('label'), e = c.length - 1; 0 <= e; --e)
              c[e].addEventListener('focusout', onFocusOut);
            for (c = d.getElementsByTagName('input'), e = c.length - 1; 0 <= e; --e)
              c[e].addEventListener('click', onClickEnabled),
              c[e].addEventListener('keyup', onKeyUp);
            for (c = d.getElementsByTagName('button'), d = c.length - 1; 0 <= d; --d)
              c[d].addEventListener('click', onClickRemove);
          }
        }
      }
      A('Ads');
      A('Social');
      A('Other');
      A('HTTPS');
      A = function(b) {
        Lists.SiteSpecific[b.slice(12)] && (document.getElementById(b).checked = 1);
        document.getElementById(b).addEventListener('click', function() {
          var b = this.id,
              c = b.slice(12);
          if (this.checked)
            Lists.SiteSpecific[c] = 1,
            ListsStatusClear(),
            chrome.runtime.sendMessage({a:['SiteSpecific', , , , 'UpdateLists', Lists, ListsStatus, UpdateCounter(), false, c, true]});
          else 
            Lists.SiteSpecific[c] && delete Lists.SiteSpecific[c],
            ListsStatusClear(),
            chrome.runtime.sendMessage({a:['SiteSpecific', , , , 'UpdateLists', Lists, ListsStatus, UpdateCounter(), false, c, false]});
        });
      };
      A('SiteSpecificFacebookAdsRight');
      A('SiteSpecificFacebookAppsRight');
      Whitelist = a.Whitelist || ' ';
      WhitelistBuild();
      b = document.getElementById('SiteSpecificFacebookTimelineId');
      0 != a.FacebookTimelineTest && (b.checked = 1);
      b.addEventListener('click', function() {
        if (this.checked)
          chrome.runtime.sendMessage({a:['SiteSpecificFacebookTimeline', , , , 'SiteSpecificFacebookTimelineEnable', true]});
        else
          chrome.runtime.sendMessage({a:['SiteSpecificFacebookTimeline', , , , 'SiteSpecificFacebookTimelineDisable', false]});
      });
      b = document.getElementById('SiteSpecificYouTubeAnnotations');
      1 == a.YouTubeAnnotationsTest && (b.checked = 1);
      b.addEventListener('click', function() {
        if (this.checked)
          chrome.runtime.sendMessage({a:['SiteSpecificYouTubeAnnotations', , , , 'SiteSpecificYouTubeAnnotationsEnable', true]});
        else
          chrome.runtime.sendMessage({a:['SiteSpecificYouTubeAnnotations', , , , 'SiteSpecificYouTubeAnnotationsDisable', false]})
      });
      StatsShow = a.StatsShow ? 1 : 0;
      document.getElementById('statsShow' + (StatsShow ? 'All' : 'Only')).checked = 'checked';
      location.hash = (a = a.OptionsPage) && document.getElementById(a) ? '#' + a : '#ListsId';
      'StatisticsId' == a && StatsGet();
      c = (d = Lists.Own) && 0 == d.e ? 0 : 1;
      (a = document.getElementById('listsOwnActive')).innerHTML = '<label class=switch><input' + (c ? ' checked=checked' : '') + ' class=switchI id=listsOwnEnabled type=checkbox><span class=switchL data-on=ON data-off=OFF></span><span class=switchH></span></label>';
      (a = a.getElementsByTagName('label')[0]).addEventListener('focusout', onFocusOut);
      a.getElementsByTagName('input')[0].addEventListener('keyup', onKeyUp);
      document.getElementById('listsOwnEnabled').addEventListener('click', OwnEnabled);
      document.getElementById('listsOwnShow').addEventListener('click', ListsOwnShow);
      document.getElementById('listsOwnApply').addEventListener('click', OwnApply);
      a = A = b = c = d = e = f = g = h = i = j = undefined;
    });
  });
}
Get();