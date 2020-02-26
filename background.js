'use strict';
delete localStorage.updateCounter;
var Badge,
    BlockDomains = '',
    BlockDomainsF = '',
    BlockDomainsTP = '',
    Blocked = [],
    BlockedURLs = [],
    BlockHTTPSURLs = '',
    BlockHTTPURLs = '',
    BlockNoDomains = [],
    BlockNoDomainsL = -1,
    BlockProtocolsURLs = {},
    BlockRequestIds = [],
    BlockURLs = '',
    BlockWSSURLs = '',
    BlockWSURLs = '',
    ExtensionId = chrome.runtime.id,
    FacebookTimeline = '{}',
    FacebookTimelineTest = 0,
    FakePopups = [],
    FakePopupsContextmenu = [],
    FilterDomains = '',
    FramesDomains = '',
    FramesHTTPSURLs = '',
    FramesHTTPURLs = '',
    FramesNoDomains = [],
    FramesNoDomainsL = -1,
    FramesPathsE = [],
    FramesPathsEL = -1,
    FramesPathsF = [],
    FramesPathsFL = -1,
    FramesPathsP = [],
    FramesPathsPL = -1,
    FramesPathsPE = [],
    FramesPathsPEL = -1,
    FramesPathsPR = [],
    FramesPathsPRL = -1,
    FramesPathsPS = [],
    FramesPathsPSL = -2,
    FramesPathsR = [],
    FramesPathsRL = -1,
    FramesPathsS = [],
    FramesPathsSL = -2,
    FramesProtocolsURLs = {},
    FramesRegexp = [[{}, {}], [{}, {}]],
    FramesTest = 0,
    FramesURLs = '',
    GenericBlockDomains = '',
    GenericBlockHTTPSURLs = '',
    GenericBlockHTTPURLs = '',
    GenericBlockNoDomains = 0,
    GenericBlockPathsE = [],
    GenericBlockPathsEL = -1,
    GenericBlockPathsF = [],
    GenericBlockPathsFL = -1,
    GenericBlockPathsP = [],
    GenericBlockPathsPL = -1,
    GenericBlockPathsPE = [],
    GenericBlockPathsPEL = -1,
    GenericBlockPathsPR = [],
    GenericBlockPathsPRL = -1,
    GenericBlockPathsPS = [],
    GenericBlockPathsPSL = -2,
    GenericBlockPathsR = [],
    GenericBlockPathsRL = -1,
    GenericBlockPathsS = [],
    GenericBlockPathsSL = -2,
    GenericBlockProtocolsURLs = [],
    GenericBlockRegexp = [[{}, {}], [{}, {}]],
    GenericBlockTest = 0,
    GenericBlockURLs = '',
    HideClasses,
    HideClassesW = [],
    HideClassesWL = -1,
    HideIds,
    HideIdsW = [],
    HideIdsWL = -1,
    HideOther = [],
    HideOtherL = -1,
    HideOtherW = [],
    HideOtherWL = -1,
    HostInitiators = [],
    Hosts = [],
    Hosts2 = [],
    HTTPSBlacklist = ' ',
    HTTPSIds = [],
    HTTPSUpgrade = {},
    Inserted = [],
    LastUpdate,
    Lists,
    ListsStatus,
    LoadingProgress,
    LogBlock = 0,
    LogHTTPS = 0,
    MapPathsF = [[], [], [], [], '', [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
    MapPathsF0L = -1,
    MapPathsF1L = -1,
    MapPathsF2L = -1,
    MapPathsF3L = -1,
    MapPathsWF = [[], [], [], [], '', [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
    MapPathsWF0L = -1,
    MapPathsWF1L = -1,
    MapPathsWF2L = -1,
    MapPathsWF3L = -1,
    Maps = {},
    Origins = [],
    Paths = [],
    Paths0 = [],
    Paths0L = -1,
    Paths0Shortcuts = [],
    Paths0ShortcutsL = -1,
    Paths0ShortcutsValues = [],
    Paths1 = [],
    Paths1L = -1,
    Paths1Shortcuts = [],
    Paths1ShortcutsL = -1,
    Paths1ShortcutsValues = [],
    Paths2 = [],
    Paths2L = -1,
    Paths2Shortcuts = [],
    Paths2ShortcutsL = -1,
    Paths2ShortcutsValues = [],
    Paths3 = [],
    Paths3L = -1,
    Paths3Shortcuts = [],
    Paths3ShortcutsL = -1,
    Paths3ShortcutsValues = [],
    PathsE = [],
    PathsEL = -1,
    PathsENoFO = [],
    PathsENoFOL = -1,
    PathsF = [],
    PathsL = -1,
    PathsP = [],
    PathsPE = [],
    PathsPEL = -1,
    PathsPL = -1,
    PathsPR = [],
    PathsPRL = -1,
    PathsPS = [],
    PathsPSL = -1,
    PathsR = [],
    PathsRL = -1,
    PathsS = [],
    PathsShortcuts = [],
    PathsShortcutsL = -1,
    PathsShortcutsValues = [],
    PathsSL = -1,
    PathsSNoFO = [],
    PathsSNoFO0 = [],
    PathsSNoFO0L = -1,
    PathsSNoFO1 = [],
    PathsSNoFO1L = -1,
    PathsSNoFO2 = [],
    PathsSNoFO2L = -1,
    PathsSNoFO3 = [],
    PathsSNoFO3L = -1,
    PathsSNoFOL = -1,
    PathsW = [],
    PathsW0 = [],
    PathsW0L = -1,
    PathsW0Shortcuts = [],
    PathsW0ShortcutsL = -1,
    PathsW0ShortcutsValues = [],
    PathsW1 = [],
    PathsW1L = -1,
    PathsW1Shortcuts = [],
    PathsW1ShortcutsL = -1,
    PathsW1ShortcutsValues = [],
    PathsW2 = [],
    PathsW2L = -1,
    PathsW2Shortcuts = [],
    PathsW2ShortcutsL = -1,
    PathsW2ShortcutsValues = [],
    PathsW3 = [],
    PathsW3L = -1,
    PathsW3Shortcuts = [],
    PathsW3ShortcutsL = -1,
    PathsW3ShortcutsValues = [],
    PathsWE = [],
    PathsWEL = -1,
    PathsWENoFO = [],
    PathsWENoFOL = -1,
    PathsWF = [],
    PathsWL = -1,
    PathsWP = [],
    PathsWPE = [],
    PathsWPEL = -1,
    PathsWPL = -1,
    PathsWPR = [],
    PathsWPRL = -1,
    PathsWPS = [],
    PathsWPSL = -1,
    PathsWR = [],
    PathsWRL = -1,
    PathsWS = [],
    PathsWShortcuts = [],
    PathsWShortcutsL = -1,
    PathsWShortcutsValues = [],
    PathsWSNoFO0 = [],
    PathsWSNoFO0L = -1,
    PathsWSNoFO1 = [],
    PathsWSNoFO1L = -1,
    PathsWSNoFO2 = [],
    PathsWSNoFO2L = -1,
    PathsWSNoFO3 = [],
    PathsWSNoFO3L = -1,
    PathsWSL = -1,
    PathsWSNoFO = [],
    PathsWSNoFOL = -1,
    PopupOpener = [],
    PopupTab = [],
    PopupWindow = [],
    Random,
    Random0,
    Random1,
    Random2,
    Random3,
    Regexp = [[{}, {}], [{}, {}]],
    RegexpW = [[{}, {}], [{}, {}]],
    RegexpD = [[{}, {}], [{}, {}]],
    RegexpDW = [[{}, {}], [{}, {}]],
    RemovedTabs = [],
    Smooth,
    Update,
    UpdateCounter = 0,
    UpdateCounter0 = 0,
    URLs = [],
    WhiteDomains = '',
    WhiteDomainsF = '',
    WhiteDomainsTP = '',
    Whitelist = ' ',
    WhiteHTTPSURLs = '',
    WhiteHTTPURLs = '',
    WhiteNoDomains = [],
    WhiteNoDomainsL = -1,
    WhiteProtocolsURLs = {},
    WhiteURLs = '',
    WhiteWSSURLs = '',
    WhiteWSURLs = '',
    Windows = ' ',
    YouTubeAnnotations1 = '',
    YouTubeAnnotations2 = '',
    YouTubeAnnotationsTest = 0;
(function() {
  if (localStorage.Test) {
    var a = parseInt(localStorage.unchangedHTTPS),
        b = parseInt(localStorage.unchangedHTTP),
        c = parseInt(localStorage.toHTTPS),
        d = parseInt(localStorage.blockedHTTPS),
        e = parseInt(localStorage.blockedHTTP);
    chrome.storage.local.get('StatsRequests', function(f) {
      let g;
      (g = f.StatsRequests) && (a += g[0], b += g[1], c+= g[2], d += g[3], e += g[4]);
      chrome.storage.local.set({StatsRequests: [a, b, c, d, e]}, function() {
        delete localStorage.Test;
      });
    });
    localStorage.unchangedHTTPS = 0;
    localStorage.unchangedHTTP = 0;
    localStorage.toHTTPS = 0;
    localStorage.blockedHTTPS = 0;
    localStorage.blockedHTTP = 0;
  }
  else
    localStorage.unchangedHTTPS = localStorage.unchangedHTTPS || 0,
    localStorage.unchangedHTTP = localStorage.unchangedHTTP || 0,
    localStorage.toHTTPS = localStorage.toHTTPS || 0,
    localStorage.blockedHTTPS = localStorage.blockedHTTPS || 0,
    localStorage.blockedHTTP = localStorage.blockedHTTP || 0;
})();
function SiteSpecificScript(a) {
  let b = document.createElement('script');
  b.src = 'SiteSpecific/scripts/' + a + '.js';
  document.body.appendChild(b);
}
chrome.windows.getAll({populate: true}, function(a) {
  a.forEach(function(a) {
    Windows += a.id + ' ';
    a.tabs.forEach(function(a) {
      var b, c, d, e, Host, tabId = a.id, URL = a.url;
      if (0 <= tabId)
        if (0 < (a = URL.indexOf('://')) && 0 > URL.slice(0, a).indexOf(':')) { // URL
          URLs[tabId] = 0 > (b = URL.indexOf('#')) ? URL : URL.slice(0, b);
          if ('https://' == URL.slice(0, 8) || 'http://' == URL.slice(0, 7)) {
            Host = (a = URL.slice(a + 3), b = a.indexOf('/'), c = a.indexOf(':'), (0 > c || c > b) && 0 <= b) ? a.slice(0, b) : 0 < c && c < b ? a.slice(0, c) : a;
            '.' == Host.slice(-1) && (Host = Host.slice(0, -1));
            chrome.webNavigation.getAllFrames({tabId: tabId}, function(a) {
              a.forEach(function(a) {
                var b, c, d, e, f, frameId, g, Host, URL = a.url;
                if ('https://' == URL.slice(0, 8) && (b = 8) || 'http://' == URL.slice(0, 7) && (b = 7)) {
                  Host = (c = URL.slice(b), d = c.indexOf('/'), e = c.indexOf(':'), (0 > e || e > d) && 0 <= d) ? c.slice(0, d) : 0 < e && e < d ? c.slice(0, e) : c;
                  '.' == Host.slice(-1) && (Host = Host.slice(0, -1));
                  if (0 > (c = Host.lastIndexOf('.')) || 0 > (e = Host.slice(0, c).lastIndexOf('.')))// 0 or 1 dot in Host
                    d = Host;
                  else if (0 <= (f = Host.slice(0, e).lastIndexOf('.')))        // 3 or more dots in Host
                    if (0 > TLDs.indexOf(' ' + (g = Host.slice(f + 1)) + ' '))
                      if (0 > TLDs.indexOf(' ' + (e = Host.slice(e + 1)) + ' '))
                        if (0 > (g = Host.slice(0, f).lastIndexOf('.')) && !isNaN(Host.replace(/\./g, '')))// IP address
                          d = Host;
                        else                                                    // 0 dots in TLD
                          d = e;
                      else                                                      // 1 dot in TLD
                        d = g;
                    else                                                        // 2 dots in TLD
                      d = 0 > (g = Host.slice(0, f).lastIndexOf('.')) ? Host : Host.slice(g + 1);
                  else if (0 > TLDs.indexOf(' ' + (f = Host.slice(e + 1)) + ' '))// 0 dots in TLD
                    d = f;
                  else                                                          // 1 dot in TLD
                    d = Host;
                  c = Origins[tabId] || (Origins[tabId] = []);
                  c[frameId = a.frameId] = 0 > (c = a.parentFrameId) ? [d] : [d, c];
                  c = HostInitiators[tabId] || (HostInitiators[tabId] = []);
                  c[frameId] = URL.substring(0, b) + Host;
                }
              });
            });
            Hosts[tabId] = Host;
            if (0 <= (a = (b = Host).lastIndexOf('.')) && 0 <= (c = (d = b.slice(0, a)).lastIndexOf('.')))
              if (0 <= (d = d.slice(0, c).lastIndexOf('.'))) {
                if (0 <= TLDs.indexOf(' ' + (e = b.slice(d + 1)) + ' ')) {
                  if ('www' == (a = b.slice(0, d)).slice(0, a.lastIndexOf('.')))
                    b = b.slice(4);
                }
                else if (0 <= TLDs.indexOf(' ' + b.slice(c + 1) + ' ') && 'www' == b.slice(0, d))
                  b = e;
              }
              else if (0 == b.indexOf('www.' ))
                b = b.slice(c + 1);
            Hosts2[tabId] = b;
          }
        }
        else                                                                    // no URL
          URLs[tabId] = 0 > (a = URL.indexOf('#')) ? URL : URL.slice(0, a);
    })
  })
});
function WindowsCreated(details) {
  //console.log(details);
  Windows += details.id + ' ';
  'popup' == details.type && (PopupWindow[details.id] = 1);
}
chrome.windows.onCreated.addListener(WindowsCreated);
function RemovedWindows(a) {
  let b;
  if (Windows == ' ' + a + ' ')
    localStorage.Test = 1;
  else
    Windows = Windows.slice(0, (b = Windows.indexOf(' ' + a + ' '))) + Windows.slice(b + a.toString().length + 1);
}
chrome.windows.onRemoved.addListener(RemovedWindows);
function Activated(details) {
  let a, tabId = details.tabId;
  if (0 <= tabId && Badge && (a = Blocked[tabId]) && !RemovedTabs[tabId])
    chrome.tabs.get(tabId, function() {
      if (chrome.runtime.lastError)
        return;
      chrome.browserAction.setBadgeText({text:a < 1E3 ? a.toString() : '1K+', tabId: tabId});
    });
}
chrome.tabs.onActivated.addListener(Activated);
chrome.browserAction.setBadgeBackgroundColor({color: '#5e5e5e'});
function Removed(tabId) {
  let a, b, c, d;
  Blocked[tabId] && delete Blocked[tabId];
  BlockedURLs[tabId] && delete BlockedURLs[tabId];
  FakePopups[tabId] && delete FakePopups[tabId];
  FakePopupsContextmenu[tabId] && delete FakePopupsContextmenu[tabId];
  HostInitiators[tabId] && delete HostInitiators[tabId];
  Hosts[tabId] && delete Hosts[tabId];
  Hosts2[tabId] && delete Hosts2[tabId];
  HTTPSIds[tabId] && delete HTTPSIds[tabId];
  Inserted[tabId] && delete Inserted[tabId];
  Origins[tabId] && delete Origins[tabId];
  PopupOpener[tabId] && delete PopupOpener[tabId];
  RemovedTabs[tabId] = 1;
  setTimeout(
    'RemovedTabs[' + tabId + '] && delete RemovedTabs[' + tabId + '];'+
    'URLs[' + tabId + '] && delete URLs[' + tabId + '];',
    1E3
  );
}
chrome.tabs.onRemoved.addListener(Removed);
function Replaced(a, b) {
  let c;
  console.log('REPLACED: ' + a + ' - ' + b);
  (c = Blocked[b]) && (Blocked[a] = c);
  (c = BlockedURLs[b]) && (BlockedURLs[a] = c);
  (c = FakePopups[b]) && (FakePopups[a] = c);
  (c = FakePopupsContextmenu[b]) && (FakePopupsContextmenu[a] = c);
  (c = HostInitiators[b]) && (HostInitiators[a] = c);
  (c = Hosts[b]) && (Hosts[a] = c);
  (c = Hosts2[b]) && (Hosts2[a] = c);
  (c = HTTPSIds[b]) && (HTTPSIds[a] = c);
  (c = Inserted[b]) && (Inserted[a] = c);
  (c = Origins[b]) && (Origins[a] = c);
  (c = PopupOpener[b]) && (PopupOpener[a] = c);
  (c = RemovedTabs[b]) && (RemovedTabs[a] = c);
  (c = URLs[b]) && (URLs[a] = c);
}
chrome.tabs.onReplaced.addListener(Replaced);
function BadgeIncrease(tabId, URL) {
  0 <= tabId && chrome.tabs.get(tabId, function(a) {
    if (chrome.runtime.lastError)
      return;
    let b, c;
    Blocked[tabId] = 0 < (b = Blocked[tabId]) ? ++b : (b = 1);
    0 <= (c = URL.indexOf('://')) && (URL = URL.substring(c + 3));
    0 <= (c = URL.indexOf(':')) ? URL = URL.substring(c + 1) : 0 <= (c = URL.indexOf('/')) && (URL = URL.substring(c + 1));
    '.' == URL.slice(-1) && (URL = URL.substring(0, -1));
    BlockedURLs[tabId] ? ((c = BlockedURLs[tabId][URL]) ? BlockedURLs[tabId][URL] = c + 1 : BlockedURLs[tabId][URL] = 1) : (BlockedURLs[tabId] = {}, BlockedURLs[tabId][URL] = 1);
    if (Badge &&  b < 1001 && a.active && !RemovedTabs[tabId])
      chrome.browserAction.setBadgeText({text:b < 1E3 ? b.toString() : '1K+', tabId: tabId});
  })
}
function FOLog(Options) {
  let a = Options.indexOf('d'), b = Options.indexOf('D'), c, d, e = '';
  if (0 <= a)
    c = Options.substring(0, a),
    d = 0 <= b ? b : Options.length;
  else if(0 <= b)
    c = Options.substring(0, b);
  else
    c = Options;
  0 <= c.indexOf('p') && (e = 'popup');
  0 <= c.indexOf('s') && (e += (e ? ',' : '') + 'script');
  0 <= c.indexOf('S') && (e += (e ? ',' : '') + '~script');
  0 <= c.indexOf('i') && (e += (e ? ',' : '') + 'image');
  0 <= c.indexOf('I') && (e += (e ? ',' : '') + '~image');
  0 <= c.indexOf('o') && (e += (e ? ',' : '') + 'object');
  0 <= c.indexOf('O') && (e += (e ? ',' : '') + '~object');
  0 <= c.indexOf('x') && (e += (e ? ',' : '') + 'xmlhttprequest');
  0 <= c.indexOf('X') && (e += (e ? ',' : '') + '~xmlhttprequest');
  0 <= c.indexOf('l') && (e += (e ? ',' : '') + 'subdocument');
  0 <= c.indexOf('L') && (e += (e ? ',' : '') + '~subdocument');
  0 <= c.indexOf('y') && (e += (e ? ',' : '') + 'stylesheet');
  0 <= c.indexOf('Y') && (e += (e ? ',' : '') + '~stylesheet');
  0 <= c.indexOf('j') && (e += (e ? ',' : '') + 'other');
  0 <= c.indexOf('J') && (e += (e ? ',' : '') + '~other');
  0 <= c.indexOf('m') && (e += (e ? ',' : '') + 'media');
  0 <= c.indexOf('M') && (e += (e ? ',' : '') + '~media');
  0 <= c.indexOf('f') && (e += (e ? ',' : '') + 'font');
  0 <= c.indexOf('F') && (e += (e ? ',' : '') + '~font');
  0 <= c.indexOf('k') && (e += (e ? ',' : '') + 'ping');
  0 <= c.indexOf('K') && (e += (e ? ',' : '') + '~ping');
  0 <= c.indexOf('q') && (e += (e ? ',' : '') + 'websocket');
  0 <= c.indexOf('Q') && (e += (e ? ',' : '') + '~websocket');
  0 <= c.indexOf('r') && (e += (e ? ',' : '') + 'csp_report');
  0 <= c.indexOf('R') && (e += (e ? ',' : '') + '~csp_report');
  0 <= c.indexOf('u') && (e += (e ? ',' : '') + 'document');
  0 <= c.indexOf('U') && (e += (e ? ',' : '') + '~document');
  0 <= c.indexOf('w') && (e += (e ? ',' : '') + 'webrtc');
  0 <= c.indexOf('W') && (e += (e ? ',' : '') + '~webrtc');
  0 <= c.indexOf('a') && (e += (e ? ',' : '') + 'match-case');
  0 <= c.indexOf('A') && (e += (e ? ',' : '') + '~match-case');
  0 <= c.indexOf('t') && (e += (e ? ',' : '') + 'third-party');
  0 <= c.indexOf('T') && (e += (e ? ',' : '') + '~third-party');
  if (0 <= a)
    return (e ? e + ',' : '') + 'domain=' + Options.substring(a + 1, d) + (0 <= b ? '|~' + Options.substring(b + 1).replace(/\|/g, '~|') : '');
  else if (0 <= b)
    return (e ? e + ',' : '') + 'domain=~' + Options.substring(b + 1).replace(/\|/g, '~|');
  return e;
}
function UpdateMessage(a) {
  let b, c, d, e, f, g;
  if (b = a.data[0])
    if ('downloading' == b) {                                                   // set status to downloading
      if ('string' == typeof(b = a.data[1]) && 'string' == typeof(c = a.data[2])) {
        if ("undefined" != typeof ListsStatus && ListsStatus[c] && ListsStatus[c][b])
          ListsStatus[c][b].s = 'downloading...';
        chrome.runtime.sendMessage({a:['downloading', , , , , ListsStatus, c + escape(b)]});
      }
    }
    else if ('Error' == b) {                                                    // error while downloading list
      if (undefined !=       (b = a.data[1])
      && 'string'   == typeof(c = a.data[2])
      && 'string'   == typeof(d = a.data[3])
      && undefined  !=       (e = a.data[4]))
        chrome.storage.local.get(escape(d + c), function(a) {
          if (UpdateCounter0 == e && window.Update)
            Update.postMessage([
                1,
                c + ': Error ' + e,
                b,
                d,
                c,
                a[escape(d + c)] || 0
            ]);
        });
    }
    else if ('LoadingBar' == b) {                                               // change width of loadingbar
      if ('number' == typeof(b = a.data[1]))
        LoadingProgress = b,
        chrome.runtime.sendMessage({a:['LoadingBar', , , , , b.toString()]});
    }
    else if ('LoadingProgress' == b) {                                          // loading progress
      if (undefined != (b = a.data[1])
      &&  undefined != (c = a.data[2])
      &&  undefined != (d = a.data[3])) {
        LoadingProgress = b;
        if ('undefined' != typeof ListsStatus && ListsStatus[c] && ListsStatus[c][d])
          ListsStatus[c][d].s = "converting...";
        chrome.runtime.sendMessage({a:['LoadingBar-Converting', , , , , b, ListsStatus, c + escape(d)]});
      }
    }
    else if ('SaveList' == b) {                                                 // save list
      if ('string' == typeof(b = a.data[1]) && undefined != (c = a.data[2]))
        d = {},
        d[b] = c,
        chrome.storage.local.set(d);
    }
    else if ('timeout' == b) {                                                  // timeout while downloading list
      if (undefined !=       (b = a.data[1])
      && 'string'   == typeof(c = a.data[2])
      && 'string'   == typeof(d = a.data[3])
      && undefined  !=       (e = a.data[4]))
        chrome.storage.local.get(escape(d + c), function(a) {
          if (UpdateCounter0 == e && window.Update)
            Update.postMessage([
                1,
                c + ': timeout ' + e,
                b,
                d,
                c,
                a[escape(d + c)] || 0
            ]);
        });
    }
    else if('UpdateComplete' == b) {                                            // update complete
      a = window.NewStorage = a.data;
      b = 2;
      chrome.storage.local.set({
        LastUpdate: 1 * new Date,
        Lists: a[b],
        HTTPSUpgrade: a[++b],
        BlockDomains: a[++b],
        WhiteDomains: a[++b],
        BlockDomainsTP: a[++b],
        WhiteDomainsTP: a[++b],
        BlockDomainsF: a[++b],
        WhiteDomainsF: a[++b],
        FilterDomains: a[++b],
        BlockNoDomains: a[++b],
        WhiteNoDomains: a[++b],
        BlockURLs: a[++b],
        WhiteURLs: a[++b],
        BlockHTTPSURLs: a[++b],
        WhiteHTTPSURLs: a[++b],
        BlockHTTPURLs: a[++b],
        WhiteHTTPURLs: a[++b],
        BlockWSURLs: a[++b],
        WhiteWSURLs: a[++b],
        BlockWSSURLs: a[++b],
        WhiteWSSURLs: a[++b],
        BlockProtocolsURLs: a[++b],
        WhiteProtocolsURLs: a[++b],
        Maps: a[++b],
        Regexp: a[++b],
        RegexpW: a[++b],
        RegexpD: a[++b],
        RegexpDW: a[++b],
        Paths: a[++b],
        Paths0: a[++b],
        Paths1: a[++b],
        Paths2: a[++b],
        Paths3: a[++b],
        PathsShortcuts: a[++b],
        PathsShortcutsValues: a[++b],
        Paths0Shortcuts: a[++b],
        Paths0ShortcutsValues: a[++b],
        Paths1Shortcuts: a[++b],
        Paths1ShortcutsValues: a[++b],
        Paths2Shortcuts: a[++b],
        Paths2ShortcutsValues: a[++b],
        Paths3Shortcuts: a[++b],
        Paths3ShortcutsValues: a[++b],
        PathsW: a[++b],
        PathsW0: a[++b],
        PathsW1: a[++b],
        PathsW2: a[++b],
        PathsW3: a[++b],
        PathsWShortcuts: a[++b],
        PathsWShortcutsValues: a[++b],
        PathsW0Shortcuts: a[++b],
        PathsW0ShortcutsValues: a[++b],
        PathsW1Shortcuts: a[++b],
        PathsW1ShortcutsValues: a[++b],
        PathsW2Shortcuts: a[++b],
        PathsW2ShortcutsValues: a[++b],
        PathsW3Shortcuts: a[++b],
        PathsW3ShortcutsValues: a[++b],
        PathsF: a[++b],
        PathsWF: a[++b],
        PathsENoFO: a[++b],
        PathsWENoFO: a[++b],
        PathsE: a[++b],
        PathsWE: a[++b],
        PathsR: a[++b],
        PathsWR: a[++b],
        PathsS: a[++b],
        PathsWS: a[++b],
        PathsSNoFO: a[++b],
        PathsSNoFO0: a[++b],
        PathsSNoFO1: a[++b],
        PathsSNoFO2: a[++b],
        PathsSNoFO3: a[++b],
        PathsWSNoFO: a[++b],
        PathsWSNoFO0: a[++b],
        PathsWSNoFO1: a[++b],
        PathsWSNoFO2: a[++b],
        PathsWSNoFO3: a[++b],
        PathsP: a[++b],
        PathsPW: a[++b],
        PathsPE: a[++b],
        PathsWPE: a[++b],
        PathsPR: a[++b],
        PathsWPR: a[++b],
        PathsPS: a[++b],
        PathsWPS: a[++b],
        MapPathsF: a[++b],
        MapPathsWF: a[++b],
        GenericBlockDomains: a[++b],
        GenericBlockNoDomains: a[++b],
        GenericBlockURLs: a[++b],
        GenericBlockHTTPSURLs: a[++b],
        GenericBlockHTTPURLs: a[++b],
        GenericBlockProtocolsURLs: a[++b],
        GenericBlockRegexp: a[++b],
        GenericBlockPathsE: a[++b],
        GenericBlockPathsF: a[++b],
        GenericBlockPathsP: a[++b],
        GenericBlockPathsPE: a[++b],
        GenericBlockPathsPR: a[++b],
        GenericBlockPathsPS: a[++b],
        GenericBlockPathsR: a[++b],
        GenericBlockPathsS: a[++b],
        GenericBlockTest: a[++b],
        FramesDomains: a[++b],
        FramesNoDomains: a[++b],
        FramesURLs: a[++b],
        FramesHTTPSURLs: a[++b],
        FramesHTTPURLs: a[++b],
        FramesProtocolsURLs: a[++b],
        FramesRegexp: a[++b],
        FramesPathsE: a[++b],
        FramesPathsF: a[++b],
        FramesPathsP: a[++b],
        FramesPathsPE: a[++b],
        FramesPathsPR: a[++b],
        FramesPathsPS: a[++b],
        FramesPathsR: a[++b],
        FramesPathsS: a[++b],
        FramesTest: a[++b],
        HideClasses: a[++b],
        HideClassesW: a[++b],
        HideIds: a[++b],
        HideIdsW: a[++b],
        HideOther: a[++b],
        HideOtherW: a[++b]},
        function() {
        chrome.storage.local.get(['HideHosts'], function(c) {
          let d = c.HideHosts, e = NewStorage[++b], f = NewStorage[++b];
          if (' ' != f)
            e['HideHosts'] = f.slice(1, -1);
          else
            d && (d += ' HideHosts');
          clearTimeout(LastUpdate);
          LastUpdate = setTimeout('update(1)', 864E5);
          if (d)
            chrome.storage.local.remove(d.split(' '), function() {
              if (e)
                chrome.storage.local.set(e, function() {
                  LoadingProgress = NewStorage = undefined;
                  LoadVariables(1);
                  chrome.runtime.sendMessage({a:['LoadingBar-Lists', , , , , a[2]]});
                  a = d = e = undefined;
                  console.log('Update complete');
                });
              else 
                LoadingProgress = NewStorage = undefined,
                LoadVariables(1),
                chrome.runtime.sendMessage({a:['LoadingBar-Lists', , , , , a[2]]}),
                a = d = undefined,
                console.log('Update complete');
            });
          else 
            if (e)
              chrome.storage.local.set(e, function() {
                LoadingProgress = NewStorage = undefined;
                LoadVariables(1);
                chrome.runtime.sendMessage({a:['LoadingBar-Lists', , , , , a[2]]});
                a = e = undefined;
                console.log('Update complete');
              });
            else 
              LoadingProgress=NewStorage=undefined,
              LoadVariables(1),
              chrome.runtime.sendMessage({a:['LoadingBar-Lists', , , , , a[2]]}),
              a = undefined,
              console.log('Update complete');
          b = f = Lists = ListsStatus = Update = undefined;
        });
      });
    }
    else if ('UpdateListsStatus' == b) {                                        // update lists status
      if (undefined !=        (b = a.data[1])//T
      && 'string'   == typeof (c = a.data[2])//Name
      && undefined  !=        (d = a.data[3]))//g
        b = b.toString();
        if ('undefined' != typeof ListsStatus && ListsStatus[b])
          delete ListsStatus[b][c];
        chrome.runtime.sendMessage({a:['ListName-ListsStatus', , , , , ListsStatus, (e = b + escape(c)), b, c, d, e]});
    }
    else if ('UseOldList' == b) {                                               // use old list
      if ('string' == typeof(b = a.data[1])
      &&  'string' == typeof(c = a.data[2])
      && undefined != (d = a.data[3]))
        chrome.storage.local.get([escape(c + b)], function(a) {
          if (UpdateCounter0 == d && window.Update)
            Update.postMessage([
              2,
              a[escape(c + b)],
              c,
              b
            ]);
        });
    }
}
function update(Download) {
  if (Lists)
    window.Update && Update.terminate(),
    (Update = new Worker('update.js')).addEventListener('message', UpdateMessage),
    Update.postMessage([0, Lists, TLDs, Download, ExtensionId, ++UpdateCounter0]);
  else
    chrome.storage.local.get(['Lists'], function(a) {
      window.Update && Update.terminate();
      (Update = new Worker('update.js')).addEventListener('message', UpdateMessage);
      Update.postMessage([0, a.Lists, TLDs, Download, ExtensionId, ++UpdateCounter0]);
    });
}
function GenericBlockCheckPaths(URL, URL2) {
  var a, b, c;
  for (a = GenericBlockPathsFL; 0 < a; a -= 2) {
    b = 'a' == GenericBlockPathsF[a][0] ? URL : URL2;
    if (GenericBlockPathsF[a - 1].some(c => 0 <= b.indexOf(c)))
      return 1;
  }
  for (a = GenericBlockPathsEL; 0 < a; a -= 2) {
    b = (c = GenericBlockPathsE[a]) && 'a' == c[0] ? URL + ' ' : URL2 + ' ';
    if (GenericBlockPathsE[a - 1].some(c => 0 <= b.indexOf(c + ' ')))
      return 1;
  }
  for (a = GenericBlockPathsSL; 0 < a; a -= 3) {
    b = (c = GenericBlockPathsS[a]) && 'a' == c[0] ? URL : URL2;
    c = GenericBlockPathsS[a + 1];
    if (GenericBlockPathsS[a - 1].some((value) => {
      if ((!c || 0 <= b.indexOf(c)) && SpecialCharacters('*', 0, b, value))
        return 1;
    }))
      return 1;
  }
  for (a = GenericBlockPathsPL; 0 < a; a -= 2) {
    b = (c = GenericBlockPathsP[a]) && 'a' == c[0] ? URL : URL2;
    if (GenericBlockPathsP[a - 1].some(c => 0 == b.indexOf(c)))
      return 1;
  }
  for (a = GenericBlockPathsPEL; 0 < a; a -= 2) {
    b = (c = GenericBlockPathsPE[a]) && 'a' == c[0] ? URL + ' ' : URL2 + ' ';
    if (GenericBlockPathsPE[a - 1].some(c => b == c + ' '))
      return 1;
  }
  for (a = GenericBlockPathsPSL; 0 < a; a -= 3) {
    b = (c = GenericBlockPathsPS[a]) && 'a' == c[0] ? URL : URL2;
    c = GenericBlockPathsPS[a + 1];
    if (GenericBlockPathsPS[a - 1].some((value) => {
      if ((!c || 0 <= b.indexOf(c)) && SpecialCharacters('', 0, b, value))
        return 1;
    }))
      return 1;
  }
  for (a = GenericBlockPathsRL; 0 < a; a -= 3) {
    b = (c = GenericBlockPathsR[a]) && 'a' == c[0] ? URL : URL2;
    c = GenericBlockPathsR[a + 1];
    if (GenericBlockPathsR[a - 1].some((value) => {
      if ((!c || 0 <= b.indexOf(c)) && 0 <= b.search(value))
        return 1;
    }))
      return 1;
  }
  for (a = GenericBlockPathsPRL; 0 < a; a -= 3) {
    b = (c = GenericBlockPathsPR[a]) && 'a' == c[0] ? URL : URL2;
    c = GenericBlockPathsPR[a + 1];
    if (GenericBlockPathsPR[a - 1].some((value) => {
      if ((!c || 0 <= b.indexOf(c)) && 0 == b.search(value))
        return 1;
    }))
      return 1;
  }
  return 0;
}
function GenericBlockCheckURLs(Check, HostPart, Path, Path2) {
  var a, b, c, d, e;
  for ( ; ; )
    if (0 <= (a = Check.indexOf(' ' + HostPart + '^'))) {
      Check = Check.substring(a + HostPart.length + 2);
      a = Check.indexOf(' ');
      b = Check.substring(1, a);
      c = Check[0];
      if ('$' != c)
        d = b.substring((e = b.indexOf('$')) + 1),
        b = b.substring(0, e),
        e = 'a' == d[0] ? Path : Path2;
      else
        d = b.substring(1),
        e = 'a' == d[0] ? Path : Path2;
      if (('1' == c && 1 == e.indexOf(b))
      || ('3' == c && '/' + b == e)
      || ('5' == c && SpecialCharacters('', 0, e, b))
      || ('7' == c && SpecialCharacters('', 1, e, b))
      || ('9' == c && 1 == e.search(b))
      || '$' == c)
        return 1;
      Check = Check.substring(a);
    }
    else
      break;
  return 0;
}
function FramesCheckURLs(Check, HostPart, Path, Path2) {
  var a, b, c, d, e, Result = '';
  for ( ; ; )
    if (0 <= (a = Check.indexOf(' ' + HostPart + '^'))) {
      Check = Check.substring(a + HostPart.length + 2);
      a = Check.indexOf(' ');
      b = Check.substring(1, a);
      c = Check[0];
      if ('$' != c)
        d = b.substring((e = b.indexOf('$')) + 1),
        b = b.substring(0, e),
        e = 'a' == d[0] ? Path : Path2;
      else
        d = b.substring(1),
        e = 'a' == d[0] ? Path : Path2;
      if (('1' == c && 1 == e.indexOf(b))
      || ('3' == c && '/' + b == e)
      || ('5' == c && SpecialCharacters('', 0, e, b))
      || ('7' == c && SpecialCharacters('', 1, e, b))
      || ('9' == c && 1 == e.search(b))
      || '$' == c)
        Result += d;
      Check = Check.substring(a);
    }
    else
      break;
  return Result;
}
function Insert() {
}
function LoadVariables(Initialized) {
  chrome.storage.local.get(
  [
    'Badge',
    'BlockDomains',
    'BlockDomainsF',
    'BlockDomainsTP',
    'BlockHTTPSURLs',
    'BlockHTTPURLs',
    'BlockNoDomains',
    'BlockProtocolsURLs',
    'BlockURLs',
    'BlockWSSURLs',
    'BlockWSURLs',
    'FacebookTimelineTest',
    'FilterDomains',
    'FramesDomains',
    'FramesHTTPSURLs',
    'FramesHTTPURLs',
    'FramesNoDomains',
    'FramesPathsE',
    'FramesPathsF',
    'FramesPathsP',
    'FramesPathsPE',
    'FramesPathsPR',
    'FramesPathsPS',
    'FramesPathsR',
    'FramesPathsS',
    'FramesProtocolsURLs',
    'FramesRegexp',
    'FramesTest',
    'FramesURLs',
    'GenericBlockDomains',
    'GenericBlockHTTPSURLs',
    'GenericBlockHTTPURLs',
    'GenericBlockNoDomains',
    'GenericBlockPathsE',
    'GenericBlockPathsF',
    'GenericBlockPathsP',
    'GenericBlockPathsPE',
    'GenericBlockPathsPR',
    'GenericBlockPathsPS',
    'GenericBlockPathsR',
    'GenericBlockPathsS',
    'GenericBlockProtocolsURLs',
    'GenericBlockRegexp',
    'GenericBlockTest',
    'GenericBlockURLs',
    'HideClasses',
    'HideClassesW',
    'HideIds',
    'HideIdsW',
    'HideOther',
    'HideOtherW',
    'HTTPSUpgrade',
    'LastUpdate',
    'LogBlock',
    'LogHTTPS',
    'MapPathsF',
    'MapPathsWF',
    'Maps',
    'Paths',
    'Paths0',
    'Paths0Shortcuts',
    'Paths0ShortcutsValues',
    'Paths1',
    'Paths1Shortcuts',
    'Paths1ShortcutsValues',
    'Paths2',
    'Paths2Shortcuts',
    'Paths2ShortcutsValues',
    'Paths3',
    'Paths3Shortcuts',
    'Paths3ShortcutsValues',
    'PathsE',
    'PathsENoFO',
    'PathsF',
    'PathsP',
    'PathsPE',
    'PathsPR',
    'PathsPS',
    'PathsR',
    'PathsS',
    'PathsShortcuts',
    'PathsShortcutsValues',
    'PathsSNoFO',
    'PathsSNoFO0',
    'PathsSNoFO1',
    'PathsSNoFO2',
    'PathsSNoFO3',
    'PathsW',
    'PathsW0',
    'PathsW0Shortcuts',
    'PathsW0ShortcutsValues',
    'PathsW1',
    'PathsW1Shortcuts',
    'PathsW1ShortcutsValues',
    'PathsW2',
    'PathsW2Shortcuts',
    'PathsW2ShortcutsValues',
    'PathsW3',
    'PathsW3Shortcuts',
    'PathsW3ShortcutsValues',
    'PathsWE',
    'PathsWENoFO',
    'PathsWF',
    'PathsWP',
    'PathsWPE',
    'PathsWPR',
    'PathsWPS',
    'PathsWR',
    'PathsWS',
    'PathsWShortcuts',
    'PathsWShortcutsValues',
    'PathsWSNoFO',
    'PathsWSNoFO0',
    'PathsWSNoFO1',
    'PathsWSNoFO2',
    'PathsWSNoFO3',
    'Random',
    'Random0',
    'Random1',
    'Random2',
    'Random3',
    'Regexp',
    'RegexpW',
    'RegexpD',
    'RegexpDW',
    'Smooth',
    'WhiteDomains',
    'WhiteDomainsF',
    'WhiteDomainsTP',
    'WhiteHTTPSURLs',
    'WhiteHTTPURLs',
    'Whitelist',
    'WhiteNoDomains',
    'WhiteProtocolsURLs',
    'WhiteURLs',
    'WhiteWSSURLs',
    'WhiteWSURLs',
    'YouTubeAnnotationsTest'
  ],
  function(a) {
    var b, c;
    if (b = a.LastUpdate)
      BlockDomains = (c = a.BlockDomains) ? c : '',
      BlockDomainsF = (c = a.BlockDomainsF) ? c : '',
      BlockDomainsTP = (c = a.BlockDomainsTP) ? c : '',
      BlockHTTPURLs = (c = a.BlockHTTPURLs) ? c : '',
      BlockHTTPSURLs = (c = a.BlockHTTPSURLs) ? c : '',
      (c = a.BlockNoDomains) ? (BlockNoDomains = c, BlockNoDomainsL = c.length - 1) : (BlockNoDomains = [], BlockNoDomainsL = -1),
      BlockProtocolsURLs = (c = a.BlockProtocolsURLs) ? c : [],
      BlockURLs = (c = a.BlockURLs) ? c : '',
      BlockWSURLs = (c = a.BlockWSURLs) ? c : '',
      BlockWSSURLs = (c = a.BlockWSSURLs) ? c : '',
      FilterDomains = (c = a.FilterDomains) ? c : '',
      FramesDomains = (c = a.FramesDomains) ? c : '',
      FramesHTTPSURLs = (c = a.FramesHTTPSURLs) ? c : '',
      FramesHTTPURLs = (c = a.FramesHTTPURLs) ? c : '',
      (c = a.FramesPathsE) ? (FramesPathsE = c, FramesPathsEL = c.length - 1) : (FramesPathsE = [], FramesPathsEL = -1),
      (c = a.FramesPathsF) ? (FramesPathsF = c, FramesPathsFL = c.length - 1) : (FramesPathsF = [], FramesPathsFL = -1),
      (c = a.FramesPathsP) ? (FramesPathsP = c, FramesPathsPL = c.length - 1) : (FramesPathsP = [], FramesPathsPL = -1),
      (c = a.FramesPathsPE) ? (FramesPathsPE = c, FramesPathsPEL = c.length - 1) : (FramesPathsPE = [], FramesPathsPEL = -1),
      (c = a.FramesPathsPR) ? (FramesPathsPR = c, FramesPathsPRL = c.length - 2) : (FramesPathsPR = [], FramesPathsPRL = -1),
      (c = a.FramesPathsPS) ? (FramesPathsPS = c, FramesPathsPSL = c.length - 2) : (FramesPathsPS = [], FramesPathsPSL = -1),
      (c = a.FramesPathsR) ? (FramesPathsR = c, FramesPathsRL = c.length - 2) : (FramesPathsR = [], FramesPathsRL = -1),
      (c = a.FramesPathsS) ? (FramesPathsS = c, FramesPathsSL = c.length - 2) : (FramesPathsS = [], FramesPathsSL = -1),
      FramesProtocolsURLs = (c = a.FramesProtocolsURLs) ? c : {},
      FramesTest = a.FramesTest ? 1 : 0,
      FramesURLs = (c = a.FramesURLs) ? c : '',
      (c = a.FramesNoDomains) ? (FramesNoDomains = c, FramesNoDomainsL = c.length - 1) : (FramesNoDomains = [], FramesNoDomainsL = -1),
      FramesRegexp = (c = a.FramesRegexp) ? c : [[{}, {}], [{}, {}]],
      GenericBlockDomains = (c = a.GenericBlockDomains) ? c : '',
      GenericBlockHTTPSURLs = (c = a.GenericBlockHTTPSURLs) ? c : '',
      GenericBlockHTTPURLs = (c = a.GenericBlockHTTPURLs) ? c : '',
      GenericBlockNoDomains = a.GenericBlockNoDomains ? 1 : 0,
      (c = a.GenericBlockPathsE) ? (GenericBlockPathsE = c, GenericBlockPathsEL = c.length - 1) : (GenericBlockPathsE = [], GenericBlockPathsEL = -1),
      (c = a.GenericBlockPathsF) ? (GenericBlockPathsF = c, GenericBlockPathsFL = c.length - 1) : (GenericBlockPathsF = [], GenericBlockPathsFL = -1),
      (c = a.GenericBlockPathsP) ? (GenericBlockPathsP = c, GenericBlockPathsPL = c.length - 1) : (GenericBlockPathsP = [], GenericBlockPathsPL = -1),
      (c = a.GenericBlockPathsPE) ? (GenericBlockPathsPE = c, GenericBlockPathsPEL = c.length - 1) : (GenericBlockPathsPE = [], GenericBlockPathsPEL = -1),
      (c = a.GenericBlockPathsPR) ? (GenericBlockPathsPR = c, GenericBlockPathsPRL = c.length - 2) : (GenericBlockPathsPR = [], GenericBlockPathsPRL = -1),
      (c = a.GenericBlockPathsPS) ? (GenericBlockPathsPS = c, GenericBlockPathsPSL = c.length - 2) : (GenericBlockPathsPS = [], GenericBlockPathsPSL = -1),
      (c = a.GenericBlockPathsR) ? (GenericBlockPathsR = c, GenericBlockPathsRL = c.length - 2) : (GenericBlockPathsR = [], GenericBlockPathsRL = -1),
      (c = a.GenericBlockPathsS) ? (GenericBlockPathsS = c, GenericBlockPathsSL = c.length - 2) : (GenericBlockPathsS = [], GenericBlockPathsSL = -1),
      GenericBlockProtocolsURLs = (c = a.GenericBlockProtocolsURLs) ? c : {},
      GenericBlockRegexp = (c = a.GenericBlockRegexp) ? c : [[{}, {}], [{}, {}]],
      GenericBlockTest = a.GenericBlockTest ? 1 : 0,
      GenericBlockURLs = (c = a.GenericBlockURLs) ? c : '',
      HideClasses = (c = a.HideClasses) ? c : '',
      (c = a.HideClassesW) ? (HideClassesW = c, HideClassesWL = c.length) : (HideClassesW = [], HideClassesWL = -1),
      HideIds = (c = a.HideIds) ? c : '',
      (c = a.HideIdsW) ? (HideIdsW = c, HideIdsWL = c.length) : (HideIdsW = [], HideIdsWL = -1),
      (c = a.HideOther) ? (HideOther = c, HideOtherL = c.length - 1) : (HideOther = [], HideOtherL = -1),
      (c = a.HideOtherW) ? (HideOtherW = c, HideOtherWL = c.length - 1) : (HideOtherW = [], HideOtherWL = -1),
      HTTPSUpgrade = (c = a.HTTPSUpgrade) ? c : {},
      (c = a.MapPathsF) ? (MapPathsF = c, MapPathsF0L = c[0].length - 1, MapPathsF1L = c[1].length - 1, MapPathsF2L = c[2].length - 1, MapPathsF3L = c[3].length - 1) : (MapPathsF = [[], [], [], [], '', [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []], MapPathsF0L = MapPathsF1L = MapPathsF2L = MapPathsF3L = -1),
      (c = a.MapPathsWF) ? (MapPathsWF = c, MapPathsWF0L = c[0].length - 1, MapPathsWF1L = c[1].length - 1, MapPathsWF2L = c[2].length - 1, MapPathsWF3L = c[3].length - 1) : (MapPathsWF = [[], [], [], [], '', [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []], MapPathsWF0L = MapPathsWF1L = MapPathsWF2L = MapPathsWF3L = -1),
      Maps = (c = a.Maps) ? c : {},
      (c = a.Paths) ? (Paths = c, PathsL = c.length - 1) : (Paths = [], PathsL = -1),
      (c = a.PathsShortcuts) ? (PathsShortcuts = c, PathsShortcutsL = c.length - 1) : (PathsShortcuts = [], PathsShortcutsL = -1),
      PathsShortcutsValues = (c = a.PathsShortcutsValues) ? c : [],
      (c = a.Paths0) ? (Paths0 = c, Paths0L = c.length - 1) : (Paths0 = [], Paths0L = -1),
      (c = a.Paths0Shortcuts) ? (Paths0Shortcuts = c, Paths0ShortcutsL = c.length - 1) : (Paths0Shortcuts = [], Paths0ShortcutsL = -1),
      Paths0ShortcutsValues = (c = a.Paths0ShortcutsValues) ? c : [],
      (c = a.Paths1) ? (Paths1 = c, Paths1L = c.length - 1) : (Paths1 = [], Paths1L = -1),
      (c = a.Paths1Shortcuts) ? (Paths1Shortcuts = c, Paths1ShortcutsL = c.length - 1) : (Paths1Shortcuts = [], Paths1ShortcutsL = -1),
      Paths1ShortcutsValues = (c = a.Paths1ShortcutsValues) ? c : [],
      (c = a.Paths2) ? (Paths2 = c, Paths2L = c.length - 1) : (Paths2 = [], Paths2L = -1),
      (c = a.Paths2Shortcuts) ? (Paths2Shortcuts = c, Paths2ShortcutsL = c.length - 1) : (Paths2Shortcuts = [], Paths2ShortcutsL = -1),
      Paths2ShortcutsValues = (c = a.Paths2ShortcutsValues) ? c : [],
      (c = a.Paths3) ? (Paths3 = c, Paths3L = c.length - 1) : (Paths3 = [], Paths3L = -1),
      (c = a.Paths3Shortcuts) ? (Paths3Shortcuts = c, Paths3ShortcutsL = c.length - 1) : (Paths3Shortcuts = [], Paths3ShortcutsL = -1),
      Paths3ShortcutsValues = (c = a.Paths3ShortcutsValues) ? c : [],
      (c = a.PathsW) ? (PathsW = c, PathsWL = c.length - 1) : (PathsW = [], PathsWL = -1),
      (c = a.PathsWShortcuts) ? (PathsWShortcuts = c, PathsWShortcutsL = c.length - 1) : (PathsWShortcuts = [], PathsWShortcutsL = -1),
      PathsWShortcutsValues = (c = a.PathsWShortcutsValues) ? c : [],
      (c = a.PathsW0) ? (PathsW0 = c, PathsW0L = c.length - 1) : (PathsW0 = [], PathsW0L = -1),
      (c = a.PathsW0Shortcuts) ? (PathsW0Shortcuts = c, PathsW0ShortcutsL = c.length - 1) : (PathsW0Shortcuts = [], PathsW0ShortcutsL = -1),
      PathsW0ShortcutsValues = (c = a.PathsW0ShortcutsValues) ? c : [],
      (c = a.PathsW1) ? (PathsW1 = c, PathsW1L = c.length - 1) : (PathsW1 = [], PathsW0L = -1),
      (c = a.PathsW1Shortcuts) ? (PathsW1Shortcuts = c, PathsW1ShortcutsL = c.length - 1) : (PathsW1Shortcuts = [], PathsW1ShortcutsL = -1),
      PathsW1ShortcutsValues = (c = a.PathsW1ShortcutsValues) ? c : [],
      (c = a.PathsW2) ? (PathsW2 = c, PathsW2L = c.length - 1) : (PathsW2 = [], PathsW2L = -1),
      (c = a.PathsW2Shortcuts) ? (PathsW2Shortcuts = c, PathsW2ShortcutsL = c.length - 1) : (PathsW2Shortcuts = [], PathsW2ShortcutsL = -1),
      PathsW2ShortcutsValues = (c = a.PathsW2ShortcutsValues) ? c : [],
      (c = a.PathsW3) ? (PathsW3 = c, PathsW3L = c.length - 1) : (PathsW3 = [], PathsW3L = -1),
      (c = a.PathsW3Shortcuts) ? (PathsW3Shortcuts = c, PathsW3ShortcutsL = c.length - 1) : (PathsW3Shortcuts = [], PathsW3ShortcutsL = -1),
      PathsW3ShortcutsValues = (c = a.PathsW3ShortcutsValues) ? c : [],
      (c = a.PathsE) ? (PathsE = c, PathsEL = c.length - 1) : (PathsE = [], PathsEL = -1),
      (c = a.PathsWE) ? (PathsWE = c, PathsWEL = c.length - 1) : (PathsWE = [], PathsWEL = -1),
      (c = a.PathsENoFO) ? (PathsENoFO = c, PathsENoFOL = c.length - 1) : (PathsENoFO = [], PathsENoFOL = -1),
      (c = a.PathsWENoFO) ? (PathsWENoFO = c, PathsWENoFOL = c.length - 1) : (PathsWENoFO = [], PathsWENoFOL = -1),
      PathsF = (c = a.PathsF) ? c : [],
      PathsWF = (c = a.PathsWF) ? c : [],
      (c = a.PathsR) ? (PathsR = c, PathsRL = c.length - 2) : (PathsR = [], PathsRL = -1),
      (c = a.PathsWR) ? (PathsWR = c, PathsWRL = c.length - 2) : (PathsWR = [], PathsWRL = -1),
      (c = a.PathsS) ? (PathsS = c, PathsSL = c.length - 2) : (PathsS = [], PathsSL = -1),
      (c = a.PathsWS) ? (PathsWS = c, PathsWSL = c.length - 2) : (PathsWS = [], PathsWSL = -1),
      (c = a.PathsSNoFO) ? (PathsSNoFO = c, PathsSNoFOL = c.length - 1) : (PathsSNoFO = [], PathsSNoFOL = -1),
      (c = a.PathsSNoFO0) ? (PathsSNoFO0 = c, PathsSNoFO0L = c.length - 1) : (PathsSNoFO0 = [], PathsSNoFO0L = -1),
      (c = a.PathsSNoFO1) ? (PathsSNoFO1 = c, PathsSNoFO1L = c.length - 1) : (PathsSNoFO1 = [], PathsSNoFO1L = -1),
      (c = a.PathsSNoFO2) ? (PathsSNoFO2 = c, PathsSNoFO2L = c.length - 1) : (PathsSNoFO2 = [], PathsSNoFO2L = -1),
      (c = a.PathsSNoFO3) ? (PathsSNoFO3 = c, PathsSNoFO3L = c.length - 1) : (PathsSNoFO3 = [], PathsSNoFO3L = -1),
      (c = a.PathsWSNoFO) ? (PathsWSNoFO = c, PathsWSNoFOL = c.length - 1) : (PathsWSNoFO = [], PathsWSNoFOL = -1),
      (c = a.PathsWSNoFO0) ? (PathsWSNoFO0 = c, PathsWSNoFO0L = c.length - 1) : (PathsWSNoFO0 = [], PathsWSNoFO0L = -1),
      (c = a.PathsWSNoFO1) ? (PathsWSNoFO1 = c, PathsWSNoFO1L = c.length - 1) : (PathsWSNoFO1 = [], PathsWSNoFO1L = -1),
      (c = a.PathsWSNoFO2) ? (PathsWSNoFO2 = c, PathsWSNoFO2L = c.length - 1) : (PathsWSNoFO2 = [], PathsWSNoFO2L = -1),
      (c = a.PathsWSNoFO3) ? (PathsWSNoFO3 = c, PathsWSNoFO3L = c.length - 1) : (PathsWSNoFO3 = [], PathsWSNoFO3L = -1),
      (c = a.PathsP) ? (PathsP = c, PathsPL = c.length - 1) : (PathsP = [], PathsPL = -1),
      (c = a.PathsWP) ? (PathsWP = c, PathsWPL = c.length - 1) : (PathsWP = [], PathsWPL = -1),
      (c = a.PathsPE) ? (PathsPE = c, PathsPEL = c.length - 1) : (PathsPE = [], PathsPEL = -1),
      (c = a.PathsWPE) ? (PathsWPE = c, PathsWPEL = c.length - 1) : (PathsWPE = [], PathsWPEL = -1),
      (c = a.PathsPR) ? (PathsPR = c, PathsPRL = c.length - 2) : (PathsPR = [], PathsPRL = -1),
      (c = a.PathsWPR) ? (PathsWPR = c, PathsWPRL = c.length - 2) : (PathsWPR = [], PathsWPRL = -1),
      (c = a.PathsPS) ? (PathsPS = c, PathsPSL = c.length - 2) : (PathsPS = [], PathsPSL = -1),
      (c = a.PathsWPS) ? (PathsWPS = c, PathsWPSL = c.length - 2) : (PathsWPS = [], PathsWPSL = -1),
      Random = a.Random,
      Random0 = a.Random0,
      Random1 = a.Random1,
      Random2 = a.Random2,
      Random3 = a.Random3,
      Regexp = a.Regexp,
      RegexpW = (c = a.RegexpW) ? c : [[{}, {}], [{}, {}]],
      RegexpD = (c = a.RegexpD) ? c : [[{}, {}], [{}, {}]],
      RegexpDW = (c = a.RegexpDW) ? c : [[{}, {}], [{}, {}]],
      a.Smooth && (Smooth = true),
      WhiteDomains = (c = a.WhiteDomains) ? c : '',
      WhiteDomainsF = (c = a.WhiteDomainsF) ? c : '',
      WhiteDomainsTP = (c = a.WhiteDomainsTP) ? c : '',
      Whitelist = (c = a.Whitelist) ? c : ' ',
      WhiteHTTPURLs = (c = a.WhiteHTTPURLs) ? c : '',
      WhiteHTTPSURLs = (c = a.WhiteHTTPSURLs) ? c : '',
      (c = a.WhiteNoDomains) ? (WhiteNoDomains = c, WhiteNoDomainsL = c.length - 1) : (WhiteNoDomains = [], WhiteNoDomainsL = -1),
      WhiteProtocolsURLs = (c = a.WhiteProtocolsURLs) ? c : {},
      WhiteURLs = (c = a.WhiteURLs) ? c : '',
      WhiteWSURLs = (c = a.WhiteWSURLs) ? c : '',
      WhiteWSSURLs = (c = a.WhiteWSSURLs) ? c : '',
      b = 1 * new Date - b,
      LastUpdate = setTimeout('update(1)', 864E5 <= b ? 1E4 : 864E5 - b);
    else {                                                                      // first run
      var c;
      b = function() {
        var a = parseInt(Math.random().toString().slice(-1));
        return 2 > a ? 1 : 4 > a ? 2 : 6 > a ? 3 : 8 > a ? 4 : 5;
      };
      c = function(a) {
        for (var b = '', c; 0 < a; a--)
          b+= 1/26 > (c = Math.random()) ? 'a' : 2/26 > c ? 'b' : 3/26 > c ? 'c' : 4/26 > c ? 'd' : 5/26 > c ? 'e' : 6/26 > c ? 'f' : 7/26 > c ? 'g' : 8/26 > c ? 'h' : 9/26 > c ? 'i' : 10/26 > c ? 'j' : 11/26 > c ? 'k' : 12/26 > c ? 'l' : 13/26 > c ? 'm' : 14/26 > c ? 'n' : 15/26 > c ? 'o' : 16/26 > c ? 'p' : 17/26 > c ? 'q' : 18/26 > c ? 'r' : 19/26 > c ? 's' : 20/26 > c ? 't' : 21/26 > c ? 'u' : 22/26 > c ? 'v' : 23/26 > c ? 'w' : 24/26 > c ? 'x' : 25/26 > c ? 'y' : 'z';
        return b;
      };
      chrome.storage.local.set({Random: Random = c(35 + b()), Random0: Random0 = c(30 + b()), Random1: Random1 = (c(25 + b())), Random2: Random2 = (c(20 + b())), Random3: Random3 = (c(15 + b()))}, function() {
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
        if ('undefined' == typeof ListsStatus)
          ListsStatus = {
            Ads: {
              'EasyList main (english)': {s: ''},
              'Supplemental': {s: ''}
            },
            HTTPS: {
            },
            Other: {
              'Adblock warning removal': {s: ''},
              'EasyList privacy': {s: ''},
              'Stop Cryptomining': {s: ''}
            },
            SiteSpecific: {
              FacebookAdsRight: 1
            },
            Social: {
            }
          };
	    var a = chrome.i18n.getUILanguage();
		if (1 < a.length)
          if ('ja' == (a = a.substring(0, 2).toLowerCase()))
	        Lists['Ads']['EasyList japanese'] = {e: 1, u: 'https://raw.githubusercontent.com/k2jp/abp-japanese-filters/master/abpjf.txt'},
	        Lists['Ads']['EasyList japanese mobile'] = {e: 1, u: 'https://280blocker.net/files/280blocker_adblock.txt'},
            ListsStatus['Ads']['EasyList japanese'] = {s: ''},
            ListsStatus['Ads']['EasyList japanese mobile'] = {s: ''};
          else if ('de' == a)
	        Lists['Ads']['EasyList german'] = {e: 1, u: 'https://easylist-downloads.adblockplus.org/easylistgermany.txt'},
            ListsStatus['Ads']['EasyList german'] = {s: ''};
          else if ('ar' == a)
	        Lists['Ads']['EasyList arabic'] = {e: 1, u: 'https://easylist-downloads.adblockplus.org/Liste_AR.txt'},
            ListsStatus['Ads']['EasyList arabic'] = {s: ''};
          else if ('bg' == a)
	        Lists['Ads']['EasyList bulgarian'] = {e: 1, u: 'https://stanev.org/abp/adblock_bg.txt'},
            ListsStatus['Ads']['EasyList bulgarian'] = {s: ''};
          else if ('zh' == a)
	        Lists['Ads']['EasyList chinese'] = {e: 1, u: 'https://easylist-downloads.adblockplus.org/easylistchina.txt'},
            ListsStatus['Ads']['EasyList chinese'] = {s: ''};
          else if ('cs' == a || 'sk' == a)
	        Lists['Ads']['EasyList czech and slovak'] = {e: 1, u: 'https://raw.githubusercontent.com/tomasko126/easylistczechandslovak/master/filters.txt'},
            ListsStatus['Ads']['EasyList czech and slovak'] = {s: ''};
          else if ('da' == a)
	        Lists['Ads']['EasyList dutch'] = {e: 1, u: 'https://easylist-downloads.adblockplus.org/easylistdutch.txt'},
            ListsStatus['Ads']['EasyList dutch'] = {s: ''};
          else if ('fr' == a)
	        Lists['Ads']['EasyList french'] = {e: 1, u: 'https://easylist-downloads.adblockplus.org/liste_fr.txt'},
            ListsStatus['Ads']['EasyList french'] = {s: ''};
          else if ('he' == a)
	        Lists['Ads']['EasyList hebrew'] = {e: 1, u: 'https://raw.githubusercontent.com/easylist/EasyListHebrew/master/EasyListHebrew.txt'},
            ListsStatus['Ads']['EasyList hebrew'] = {s: ''};
          else if ('id' == a)
	        Lists['Ads']['EasyList indonesian'] = {e: 1, u: 'https://raw.githubusercontent.com/heradhis/indonesianadblockrules/master/subscriptions/abpindo.txt'},
            ListsStatus['Ads']['EasyList indonesian'] = {s: ''};
          else if ('it' == a)
	        Lists['Ads']['EasyList italian'] = {e: 1, u: 'https://easylist-downloads.adblockplus.org/easylistitaly.txt'},
            ListsStatus['Ads']['EasyList italian'] = {s: ''};
          else if ('lv' == a)
	        Lists['Ads']['EasyList latvian'] = {e: 1, u: 'https://notabug.org/latvian-list/adblock-latvian/raw/master/lists/latvian-list.txt'},
            ListsStatus['Ads']['EasyList latvian'] = {s: ''};
        update();
      });
      HideClasses = HideIds = HideOther = '';
    }
    if (!Initialized) {
      Badge = void 0 == a.Badge;
      void 0 == a.FacebookTimelineTest && SiteSpecificScript('FacebookTimeline');
      LogBlock = void 0 == a.LogBlock ? 0 : 1;
      LogHTTPS = void 0 == a.LogHTTPS ? 0 : 1;
      1 == a.YouTubeAnnotationsTest && SiteSpecificScript('YouTubeAnnotations');
      Insert = function(frameId, tabId, URL) {
        var a;
        if (0 <= tabId && 0 <= (a = URL.indexOf('://')) && 0 > URL.slice(0, a).indexOf(':')) {
          var b, c, d, e, Host, Path, Path2, Protocol, TH;
          a = 0 > (a = (b = URL.slice((c = URL.indexOf('://')) + 3)).indexOf('#')) ? b : b.slice(0, a);
          Protocol = URL.slice(0, c);
          b = a.indexOf('/');
          c = a.indexOf(':');
          (0 > c || c > b) && 0 <= b ? (Host = a.slice(0, b), Path = a.slice(b)) : 0 < c && c < b ? (Host = a.slice(0, c), Path = a.slice(b)) : (Host = a, Path = '/');
          '.' == Host.slice(-1) && (Host = Host.slice(0, -1));
          Path2 = Path.toLowerCase();
          if (0 <= (a = (TH = Host).lastIndexOf('.')) && 0 <= (b = (c = TH.slice(0, a)).lastIndexOf('.')))
            if (0 <= (c = c.slice(0, b).lastIndexOf('.'))) {
              if (0 <= TLDs.indexOf(' ' + (d = TH.slice(c + 1)) + ' ')) {
                if ('www' == (e = TH.slice(0, c)).slice(0, e.lastIndexOf('.')))
                  TH = TH.slice(4);
              }
              else if (0 <= TLDs.indexOf(' ' + TH.slice(b + 1) + ' ') && 'www' == TH.slice(0, c))
                TH = d;
            }
            else if (0 == TH.indexOf('www.' ))
              TH = TH.slice(b + 1);
          if (0 > Whitelist.indexOf(' ' + TH + ' ')) {
            for (a = TH, b = [a]; ; )
              if (0 <= (c = a.indexOf('.')))
                b.push(a = a.slice(c + 1));
              else
                break;
            chrome.storage.local.get(b, function(a) {
              var ABPPropertiesRegExp = [],
                  ABPPropertiesRegExpL,
                  ABPPropertiesSimple = [],
                  ABPPropertiesSimpleL,
                  ABPPropertiesSpecial = [],
                  ABPPropertiesSpecialL,
                  ABPPropertiesTest = 0,
                  c, d, e, f, g, h, i, j, k, l, m, n, o,
                  HideClassesHost = '',
                  HideClassesHostW = [],
                  HideIdsHost = '',
                  HideIdsHostW = [],
                  HideOtherHost = [],
                  HideOtherHostW = [],
                  Properties = [],
                  PropertiesTest = 0,
                  URL2 = URL.toLowerCase();
              for (c = b.length - 1; 0 <= c; c--)
                if (d = a[b[c]]) {
                  if (e = d[0])
                    HideClassesHost += ('' == HideClassesHost ? '' : ',') + e;
                  if (e = d[1])
                    HideClassesHostW = HideClassesHostW.concat(e);
                  if (e = d[2])
                    HideIdsHost += ('' == HideIdsHost ? '' : ',') + e;
                  if (e = d[3])
                    HideIdsHostW = HideIdsHostW.concat(e);
                  if (e = d[4])
                    HideOtherHost = HideOtherHost.concat(e);
                  if (e = d[5])
                    HideOtherHostW = HideOtherHostW.concat(e);
                  if (e = d[6]) {
                    if (f = e[0])
                      ABPPropertiesSimple = ABPPropertiesSimple.concat(f),
                      ABPPropertiesTest = 1;
                    if (f = e[1])
                      ABPPropertiesSpecial = ABPPropertiesSpecial.concat(f),
                      ABPPropertiesTest = 1;
                    if (f = e[2])
                      ABPPropertiesRegExp = ABPPropertiesRegExp.concat(f),
                      ABPPropertiesTest = 1;
                  }
                  if (e = d[8])
                    Properties = Properties.concat(e),
                    PropertiesTest = 1;
                }
              a = '';
              b = Host;
              c = 1;
              for ( ; ; ) {
                a += FramesCheckURLs(FramesURLs, b, Path, Path2);
                if (d = (e = (f = FramesRegexp[0])[0])[g = b[0]])
                  for (h = d.length - 1; 0 < h; h -= 2)
                    for (i = d[h], j = d[h - 1], k = j.length - 1, l = i && 'a' == i[0] ? b + Path : b + Path2; 0 <= k; --k)
                      if (SpecialCharacters(g, 0, l, j[k])) {
                        a += i;
                        break;
                      }
                if (d = e['*'])
                  for (e = d.length - 1; 0 < e; e -= 2)
                    for (h = d[e], i = d[e - 1], j = i.length - 1, k = h && 'a' == h[0] ? b + Path : b + Path2; 0 <= j; --j)
                      if (SpecialCharacters('*', 0, k, i[j])) {
                        a += h;
                        break;
                      }
                if (d = (e = (h = FramesRegexp[1])[0])[g])
                  for (i = d.length - 2; 0 < i; i -= 3)
                    for (j = d[i], k = d[i - 1], l = k.length - 1, m = j && 'a' == j[0] ? b + Path : b + Path2, n = d[i + 1]; 0 <= l; --l)
                      if ((!(o = n[l]) || 0 <= m.indexOf(o)) && 0 == m.search(g + k[l])) {
                        a += j;
                        break;
                      }
                if (d = e['*'])
                  for (e = d.length - 2; 0 < e; e -= 3)
                    for (i = d[e], j = d[e - 1], k = j.length - 1, l = i && 'a' == i[0] ? b + Path : b + Path2, m = d[e + 1]; 0 <= k; --k)
                      if ((!(n = m[k]) || 0 <= l.indexOf(n)) && 0 <= l.search(j[k])) {
                        a += i;
                        break;
                      }
                if (c) {
                  for (d = FramesNoDomains, e = FramesNoDomainsL; 0 <= e; --e)
                    a += d[e];
                  if (d = f[1][Protocol]) {
                    if (e = d[''])
                      for (f = e.length - 1, 0; 0 <= f; f--)
                        a += e[f];
                    if (e = d[g]) {
                      for (f = e.length - 1; 0 < f; f -= 2)
                        for (i = e[f], j = e[f - 1], k = j.length - 1, l = i && 'a' == i[0] ? b + Path : b + Path2; 0 <= k; --k)
                          if (SpecialCharacters(g, 0, l, j[k])) {
                            a += i;
                            break;
                          }
                      if (d = d['*'])
                        for (e = d.length - 1; 0 < e; e -= 2)
                          for (f = d[e], i = d[e - 1], j = i.length - 1, k = f && 'a' == f[0] ? b + Path : b + Path2; 0 <= j; --j)
                            if (SpecialCharacters('*', 0, k, i[j])) {
                              a += f;
                              break;
                            }
                    }
                  }
                }
                if (d = h[1][Protocol]) {
                  if (e = d[g])
                    for (f = e.length - 2; 0 < f; f -= 3)
                      for (h = e[f], i = e[f - 1], j = i.length - 1, k = h && 'a' == h[0] ? b + Path : b + Path2, l = e[f + 1]; 0 <= j; --j)
                        if ((!(m = l[j]) || 0 <= k.indexOf(m)) && 0 == k.search(g + i[j])) {
                          a += h;
                          break;
                        }
                  if (d = d['*'])
                    for (e = d.length - 2; 0 < e; e -= 3)
                      for (f = d[e], g = d[e - 1], h = g.length - 1, i = f && 'a' == f[0] ? b + Path : b + Path2, j = d[e + 1]; 0 <= h; --h)
                        if ((!(k = j[h]) || 0 <= i.indexOf(k)) && 0 <= i.search(g[h])) {
                          a += f;
                          break;
                        }
                }
                if (0 <= (d = b.indexOf('.')))
                  b = b.substring(d + 1),
                  c = 0;
                else
                  break;
              }
              if ('https' == Protocol)
                a += FramesCheckURLs(FramesHTTPSURLs, Host, Path, Path2);
              else if ('http' == Protocol)
                a += FramesCheckURLs(FramesHTTPURLs, Host, Path, Path2);
              else if (b = FramesProtocolsURLs[Protocol])
                a += FramesCheckURLs(b, Host, Path, Path2);
              if (FramesTest) {
                for (b = FramesPathsFL; 0 < b; b -= 2) {
                  c = 'a' == (d = FramesPathsF[b])[0] ? URL : URL2;
                  if (FramesPathsF[b - 1].some(e => 0 <= c.indexOf(e)))
                    a += d;
                }
                for (b = FramesPathsEL; 0 < b; b -= 2) {
                  c = (d = FramesPathsE[b]) && 'a' == d[0] ? URL + ' ' : URL2 + ' ';
                  if (FramesPathsE[b - 1].some(e => 0 <= c.indexOf(e + ' ')))
                    a += d;
                }
                for (b = FramesPathsSL; 0 < b; b -= 3) {
                  c = (d = FramesPathsS[b]) && 'a' == d[0] ? URL : URL2;
                  e = FramesPathsS[b + 1];
                  FramesPathsS[b - 1].some((value) => {
                    if ((!e || 0 <= c.indexOf(e)) && SpecialCharacters('*', 0, c, value)) {
                      a += d;
                      return 1;
                    }
                  });
                }
                for (b = FramesPathsPL; 0 < b; b -= 2) {
                  c = (d = FramesPathsP[b]) && 'a' == d[0] ? URL : URL2;
                  if (FramesPathsP[b - 1].some(e => 0 == c.indexOf(e)))
                    a += d;
                }
                for (b = FramesPathsPEL; 0 < b; b -= 2) {
                  c = (d = FramesPathsPE[b]) && 'a' == d[0] ? URL + ' ' : URL2 + ' ';
                  if (FramesPathsPE[b - 1].some(e => c == e + ' '))
                    a += d;
                }
                for (b = FramesPathsPSL; 0 < b; b -= 3) {
                  c = (d = FramesPathsPS[b]) && 'a' == d[0] ? URL : URL2;
                  e = FramesPathsPS[b + 1];
                  FramesPathsPS[b - 1].some((value) => {
                    if ((!e || 0 <= c.indexOf(e)) && SpecialCharacters('', 0, c, value)) {
                      a += d;
                      return 1;
                    }
                  });
                }
                for (b = FramesPathsRL; 0 < b; b -= 3) {
                  c = (d = FramesPathsR[b]) && 'a' == d[0] ? URL : URL2;
                  e = FramesPathsR[b + 1];
                  FramesPathsR[b - 1].some((value) => {
                    if ((!e || 0 <= c.indexOf(e)) && 0 <= c.search(value)) {
                      a += d;
                      return 1;
                    }
                  });
                }
                for (b = FramesPathsPRL; 0 < b; b -= 3) {
                  c = (d = FramesPathsPR[b]) && 'a' == d[0] ? URL : URL2;
                  e = FramesPathsPR[b + 1];
                  FramesPathsPR[b - 1].some((value) => {
                    if ((!e || 0 <= c.indexOf(e)) && 0 == c.search(value)) {
                      a += d;
                      return 1;
                    }
                  });
                }
              }
              if (0 <= a.indexOf('h'))                                        // generichide
                var HideClassesNew = '',
                    HideIdsNew = '',
                    HideOtherNew = [];
              else
                var HideClassesNew = HideClasses,
                    HideIdsNew = HideIds,
                    HideOtherNew = HideOther;
              if (-1 < (a = b = HideClassesHostW.length - 1)) {               // whitelist
                if ('' != HideClassesNew) {
                  for ( ; 0 <= a; a--) {
                    if (0 <= (c = HideClassesNew.indexOf(',.' + (d = HideClassesHostW[a]) + ',')))
                      HideClassesNew = HideClassesNew.substring(0, c + 1) + HideClassesNew.substring(c + d.length + 3);
                    if (0 <= (c = HideClassesNew.indexOf(',.' + d + '{')))
                      HideClassesNew = HideClassesNew.substring(0, c) + HideClassesNew.substring(c + d.length + 2);
                    if (0 <= (c = HideClassesNew.indexOf('}.' + d + ',')))
                      HideClassesNew = HideClassesNew.substring(0, c + 1) + HideClassesNew.substring(c + d.length + 3);
                    if (0 <= (c = HideClassesNew.indexOf('}.' + d + '{')))
                      HideClassesNew = HideClassesNew.substring(0, c + 1) + HideClassesNew.substring(c + d.length + 2);
                    if (0 == HideClassesNew.indexOf('.' + d + ','))
                      HideClassesNew = HideClassesNew.substring(d.length + 2);
                    if (0 == HideClassesNew.indexOf('.' + d + '{'))
                      HideClassesNew = HideClassesNew.substring(d.length + 26);
                  }
                  for ( ; ; )
                    if (0 <= (a = HideClassesNew.indexOf('{display:none !important}{display:none !important}')))
                      HideClassesNew = HideClassesNew.substring(0, a) + HideClassesNew.substring(a + 25);
                    else
                      break;
                  '}' != HideClassesNew.slice(-1) && (HideClassesNew += '{display:none !important}');
                  '{display:none !important}'  == HideClassesNew && (HideClassesNew = '');
                }
                if ('' != HideClassesHost) {
                  for ( ; 0 <= b; b--)
                    for (a = HideClassesHostW[b]; ; ) {
                      c = 1;
                      if (0 <= (d = HideClassesHost.indexOf(',' + a + ',')))
                        HideClassesHost = HideClassesHost.slice(0, d + 1) + HideClassesHost.slice(d + a.length + 2),
                        c = 0;
                      if (0 <= (d = (HideClassesHost + ' ').indexOf(',' + a + ' ')))
                        HideClassesHost = HideClassesHost.slice(0, d),
                        c = 0;
                      if (0 == (d = HideClassesHost.indexOf(a + ',')))
                        HideClassesHost = HideClassesHost.slice(a.length + 1),
                        c = 0;
                      if (HideClassesHost == a)
                        HideClassesHost = '',
                        c = 0;
                      if (c)
                        break;
                    }
                }
              }
              if ('' != HideClassesHost) {
                for (b = HideClassesWL; 0 <= b; --b)
                  for (c = HideClassesW[b]; ; ) {
                    d = 1;
                    if (0 <= (e = HideClassesHost.indexOf(',' + c + ',')))
                      HideClassesHost = HideClassesHost.slice(0, e + 1) + HideClassesHost.slice(e + f.length + 2),
                      d = 0;
                    if (0 <= (e = (HideClassesHost + ' ').indexOf(',' + c + ' ')))
                      HideClassesHost = HideClassesHost.slice(0, e),
                      d = 0;
                    if (0 == (e = HideClassesHost.indexOf(c + ',')))
                      HideClassesHost = HideClassesHost.slice(e.length + 1),
                      d = 0;
                    if (HideClassesHost == c)
                      HideClassesHost = '',
                      d = 0;
                    if (d)
                      break;
                  }
                if ('' != HideClassesHost)
                  if ((a = HideClassesHost.match(/,/g)) && 8191 < a.length) {
                    for (a = HideClassesHost.split(','), HideClassesHost = ''; 8192 < a.length; )
                      HideClassesHost += a.splice(0, 8192).join(',.') + '{display:none !important}';
                    a.length && (HideClassesHost = HideClassesHost + a.join(',.') + '{display:none !important}');
                  }
                  else
                    HideClassesHost = '.' + HideClassesHost.replace(/,/g, ',.') + '{display:none !important}';
              }
              if (-1 < (a = b = HideIdsHostW.length - 1)) {
                if ('' != HideIdsNew) {
                  for ( ; 0 <= a; a--) {
                    if (0 <= (c = HideIdsNew.indexOf(',.' + (d = HideIdsHostW[a]) + ',')))
                      HideIdsNew = HideIdsNew.substring(0, c + 1) + HideIdsNew.substring(c + d.length + 3);
                    if (0 <= (c = HideIdsNew.indexOf(',.' + d + '{')))
                      HideIdsNew = HideIdsNew.substring(0, c) + HideIdsNew.substring(c + d.length + 2);
                    if (0 <= (c = HideIdsNew.indexOf('}.' + d + ',')))
                      HideIdsNew = HideIdsNew.substring(0, c + 1) + HideIdsNew.substring(c + d.length + 3);
                    if (0 <= (c = HideIdsNew.indexOf('}.' + d + '{')))
                      HideIdsNew = HideIdsNew.substring(0, c + 1) + HideIdsNew.substring(c + d.length + 2);
                    if (0 == HideIdsNew.indexOf('.' + d + ','))
                      HideIdsNew = HideIdsNew.substring(d.length + 2);
                    if (0 == HideIdsNew.indexOf('.' + d + '{'))
                      HideIdsNew = HideIdsNew.substring(d.length + 26);
                  }
                  for ( ; ; )
                    if (0 <= (a = HideIdsNew.indexOf('{display:none !important}{display:none !important}')))
                      HideIdsNew = HideIdsNew.substring(0, a) + HideIdsNew.substring(a + 25);
                    else
                      break;
                  '}' != HideIdsNew.slice(-1) && (HideIdsNew += '{display:none !important}');
                  '{display:none !important}'  == HideIdsNew && (HideIdsNew = '');
                }
                if ('' != HideIdsHost) {
                  for ( ; 0 <= b; b--)
                    for (a = HideIdsHostW[b]; ; ) {
                      c = 1;
                      if (0 <= (d = HideIdsHost.indexOf(',' + a + ',')))
                        HideIdsHost = HideIdsHost.slice(0, d + 1) + HideIdsHost.slice(d + a.length + 2),
                        c = 0;
                      if (0 <= (d = (HideIdsHost + ' ').indexOf(',' + a + ' ')))
                        HideIdsHost = HideIdsHost.slice(0, d),
                        c = 0;
                      if (0 == (d = HideIdsHost.indexOf(a + ',')))
                        HideIdsHost = HideIdsHost.slice(a.length + 1),
                        c = 0;
                      if (HideIdsHost == a)
                        HideIdsHost = '',
                        c = 0;
                      if (c)
                        break;
                    }
                }
              }
              if ('' != HideIdsHost) {
                for (b = HideIdsWL; 0 <= b; b--)
                  for (c = HideIdsW[b]; ; ) {
                    d = 1;
                    if (0 <= (e = HideIdsHost.indexOf(',' + c + ',')))
                      HideIdsHost = HideIdsHost.slice(0, e + 1) + HideIdsHost.slice(e + f.length + 2),
                      d = 0;
                    if (0 <= (e = (HideIdsHost + ' ').indexOf(',' + c + ' ')))
                      HideIdsHost = HideIdsHost.slice(0, e),
                      d = 0;
                    if (0 == (e = HideIdsHost.indexOf(c + ',')))
                      HideIdsHost = HideIdsHost.slice(e.length + 1),
                      d = 0;
                    if (HideIdsHost == c)
                      HideIdsHost = '',
                      d = 0;
                    if (d)
                      break;
                  }
                if ('' != HideIdsHost)
                  if ((a = HideIdsHost.match(/,/g)) && 8191 < a.length) {
                    for (a = HideIdsHost.split(','), HideIdsHost = ''; 8192 < a.length; )
                      HideIdsHost += a.splice(0, 8192).join(',#') + '{display:none !important}';
                    a.length && (HideIdsHost = HideIdsHost + a.join(',#') + '{display:none !important}');
                  }
                  else
                    HideIdsHost = '#' + HideIdsHost.replace(/,/g, ',#') + '{display:none !important}';
              }
              if (-1 < (a = b = HideOtherHostW.length - 1)) {
                if (c = HideOtherL)
                  for ( ; 0 <= a; --a)
                    for (d = HideOtherHostW[a]; 0 <= c; --c)
                      if (d == HideOtherNew[c])
                        HideOtherNew = HideOtherNew.slice(0, c).concat(HideOtherNew.slice(c + 1)),
                        c--;
                if (a = HideOtherHost.length)
                  for ( ; 0 <= b; --b)
                    for (d = HideOtherHostW[b]; 0 <= a; --a)
                      if (d == HideOtherHost[a])
                        HideOtherHost = HideOtherHost.slice(0, a).concat(HideOtherHost.slice(a + 1)),
                        a--
              }
              if (a = HideOtherNew.length) {
                for (b = HideOtherHost.join(','), c = HideOtherHost.length - 1, d = HideOtherWL; 0 <= d; --d)
                  if (0 <= b.indexOf(e = HideOtherW[d]))
                    for (f = c; 0 <= f; --f)
                      if (e == HideOtherHost[f])
                        HideOtherHost = HideOtherHost.slice(0, f).concat(HideOtherHost.slice(f + 1)),
                        b = HideOtherHost.join(','),
                        c--;
                if (8192 < a) {
                  for (a = ''; 8192 < HideOtherNew.length; )
                    a += HideOtherNew.split(0, 8192).join(',') + '{display:none !important}',
                    HideOtherNew = HideOtherNew.slice(8192);
                  HideOtherNew.length && (a += '{display:none !important}');
                  HideOtherNew = a;
                }
                else
                  HideOtherNew = HideOtherNew.join(',') + '{display:none !important}';
              }
              else
                HideOtherNew = '';
              if (a = HideOtherHost.length)
                if (8192 < a) {
                  for (a = ''; 8192 < HideOtherHost.length; )
                    a += HideOtherHost.split(0, 8192).join(',') + '{display:none !important}',
                    HideOtherHost = HideOtherHost.slice(8192);
                  HideOtherHost.length && (a += '{display:none !important}');
                  HideOtherHost = a;
                }
                else
                  HideOtherHost = HideOtherHost.join(',') + '{display:none !important}';
              else
                HideOtherHost = '';
              chrome.tabs.insertCSS(
                tabId,
                {
                  code: (Smooth && 0 == frameId ? HideClassesNew + HideClassesHost + HideIdsNew + HideIdsHost : '') + HideOtherNew + HideOtherHost,
                  cssOrigin: 'user',
                  frameId: frameId,
                  runAt: 'document_start'
                },
                function() {
                  if (chrome.runtime.lastError)
                    return;
                }
              );
              ABPPropertiesRegExpL = ABPPropertiesRegExp.length;
              ABPPropertiesSimpleL = ABPPropertiesSimple.length;
              ABPPropertiesSpecialL = ABPPropertiesSpecial.length;
              var a;
              chrome.tabs.executeScript(
                tabId,
                {
                  code:
                    '{'+
                      'Hidden = [];'+
                      ((!Smooth || 0 < frameId) && ',' != HideClassesNew + HideClassesHost ?
                        'HideClasses = ",' + HideClassesNew + HideClassesHost + '".replace(/\\{display: none !important\\}/g, ",").replace(/\\./g, "");'
                      : '')+
                      ((!Smooth || 0 < frameId) && ',' != HideIdsNew + HideIdsHost ?
                        'HideIds = ",' + HideIdsNew + HideIdsHost + '".replace(/\\{display: none !important\\}/g, ",").replace(/#/g, "");'
                      : '')+
                      'HideCSS = ";display: none !important; height: 0 !important; max-height: 0 !important; max-width: 0 !important; overflow: hidden !important; visibility: hidden !important; width: 0 !important;";'+
                      'var a, b;'+
                      'HideURL = 0 > (a = (b = location.href).indexOf("#")) ? b : b.slice(0, a);'+
                      (FacebookTimelineTest ?
                        'if ("www.facebook.com" == location.host)'+
                          'FindMe = ' + FacebookTimelineFindMe + ';'
                      : '')+
                      (PropertiesTest ?
                        'function PropertiesTestRandomF(a) {'+
                          'for (var b = "", c; 0 < a; --a)'+
                            'b += 1/26 > (c = Math.random()) ? "a" : 2/26 > c ? "b" : 3/26 > c ? "c" : 4/26 > c ? "d" : 5/26 > c ? "e" : 6/26 > c ? "f" : 7/26 > c ? "g" : 8/26 > c ? "h" : 9/26 > c ? "i" : 10/26 > c ? "j" : 11/26 > c ? "k" : 12/26 > c ? "l" : 13/26 > c ? "m" : 14/26 > c ? "n" : 15/26 > c ? "o" : 16/26 > c ? "p" : 17/26 > c ? "q" : 18/26 > c ? "r" : 19/26 > c ? "s" : 20/26 > c ? "t" : 21/26 > c ? "u" : 22/26 > c ? "v" : 23/26 > c ? "w" : 24/26 > c ? "x" : 25/26 > c ? "y" : "z";'+
                          'return b;'+
                        '}'+
                        'function PropertiesTestRandomF0() {'+
                          'return parseInt(Math.random().toString().slice(-1));'+
                        '}'+
                        'PropertiesTestHideTest = 1;'+
                        'function PropertiesTestHide(a) {'+
                          'a.hidden = 1;'+
                          'a.style.cssText += HideCSS;'+
                          'if (PropertiesTestHideTest) {'+
                            'var b;'+
                            'PropertiesTestHideTest = 0;'+
                            'PropertiesTestRandom = PropertiesTestRandomF(2 + PropertiesTestRandomF0()) + PropertiesTestRandomF0() + PropertiesTestRandomF(1 + PropertiesTestRandomF0());'+
                            'if ((b = chrome.runtime) && b.getManifest())'+
                              'b.sendMessage({a:['+
                                ', '+
                                ', '+
                                ', '+
                                ', '+
                                '"HideElements", '+
                                '"' + tabId + '", '+
                                '"' + frameId + '", '+
                                '"Host", '+
                                'location.hostname, '+
                                '"[" + PropertiesTestRandom + "]" + "{display: none !important}"'+
                              ']});'+
                          '}'+
                          'a.setAttribute(PropertiesTestRandom, "");'+
                          'Hidden.push(a);'+
                        '}'+
                        'function PropertiesTestF(A) {'+
                          'if (A) {'+
                            'if (!A.tagName)'+
                              'return;'+
                            'var a,b;'+
                            'if (a = A.parentNode)'+
                              'A = (b = a.parentNode) ? b : a;'+
                          '}'+
                          'for (var a=Properties.length-1, b, c, C, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, X, Y; 0 <= a; --a)'+
                            'for (b = Properties[a], c = A ? [A] : [document], d = e = 0; ; ) {'+
                              // c accumulated element
                              // d:0 nothing or " " appeared
                              // d:1 > appeared
                              // d:2 + appeared
                              // d:3 ~ appeared
                              // d:4 . or # or [ or : appeared
                              // e:1 :-abp-has( appeared
                              'if ("" == (b = b.trim())) {'+                     // end of property
                                'if (!d && !e)'+
                                  'for (d = c.length, f = 0; f < d ;++f)'+
                                    'PropertiesTestHide(c[f]);'+
                                'break;'+
                              '}'+
                              'else {'+
                                'f = Math.min(0 <= (g = b.indexOf(" ")) ? g : Infinity, 0 <= (h = b.indexOf(".")) ? h : Infinity, 0 <= (i = b.indexOf("#")) ? i : Infinity, 0 <= (j = b.indexOf("*")) ? j : Infinity, 0 <= (k = b.indexOf(">")) ? k : Infinity, 0 <= (l = b.indexOf("+")) ? l : Infinity, 0 <= (m = b.indexOf("~")) ? m : Infinity, 0 <= (n = b.indexOf("[")) ? n : Infinity, 0 <= (o = b.indexOf(":")) ? o : Infinity, 0 <= (X = b.indexOf(")")) ? X : Infinity);'+
                                'if (Infinity == f) {'+                         // nothing appeared
                                  'if (e)'+
                                    'break;'+
                                  'b = b.toLowerCase();'+
                                  'if (f = c.length, g = 0, !d)'+
                                    'for ( ; g < f; ++g)'+
                                      'for (h = c[g].getElementsByTagName(b), i = h.length, j = 0; j < i ; ++j)'+
                                        'PropertiesTestHide(h[j]);'+
                                  'else if (2 > d) {'+
                                    'for ( ; g < f; ++g)'+
                                      'for (h = c[g].children, i = h.length, j = 0; j < i; ++j)'+
                                        'if (k = h[j], ("*" == b || (l = k.tagName) && b == l.toLowerCase()))'+
                                          'PropertiesTestHide(k);'+
                                  '}'+
                                  'else if (3 > d) {'+
                                    'for ( ; g < f; ++g)'+
                                      'if ((h = c[g].nextSibling) && ("*" == b || ((i = h.tagName) && b == i.toLowerCase())))'+
                                        'PropertiesTestHide(h);'+
                                  '}'+
                                  'else '+
                                    'for ( ; g < f; ++g)'+
                                      'if (h = c[g].nextSibling)'+
                                        'for ( ; ; ) {'+
                                          'if ((k = h.tagName) && b == k.toLowerCase())'+
                                            'PropertiesTestHide(h);'+
                                          'if (!(h = h.nextSibling))'+
                                            'break;'+
                                        '}'+
                                  'break;'+
                                '}'+
                                'else {'+
                                  'o = 0;'+
                                  'if (f && "" != (p = b.slice(0, f).toUpperCase())) {'+// characters before match
                                    'q = [];'+
                                    'r = (e ? C : c).length;'+
                                    's = 0;'+
                                    'if (!d)'+
                                      'for ( ; s <r ; ++s)'+
                                        'for (t = (e ? C : c)[s].getElementsByTagName(p), u = t.length, v = 0; v < u; ++v)'+
                                          'q.push(t[v]);'+
                                    'else if (2 > d)'+
                                      'for ( ; s < r; ++s)'+
                                        'for (t = (e ? C : c)[s].children, u = t.length, v = 0; v < u; ++v)'+
                                          'p == (w = t[v]).tagName&&q.push(w);'+
                                    'else if(3 > d)'+
                                      'for ( ; s < r; ++s)'+
                                        '(t = (e ? C : c)[s].nextSibling) && p == t.tagName&&q.push(t);'+
                                    'else '+
                                      'for ( ; s < r; ++s)'+
                                        'if (t = (e ? C : c)[s].nextSibling)'+
                                          'for ( ; ; ){'+
                                            'p == t.tagName && q.push(t);'+
                                            'if (!(t = t.nextSibling))'+
                                              'break;'+
                                          '}'+
                                    'if (!q.length)'+
                                      'break;'+
                                    'e ? C = q : c = q;'+
                                    'o = 1;'+
                                  '}'+
                                  'b = b.slice(f + 1);'+
                                  'if (g == f)'+                                // " " appeared
                                    'continue;'+
                                  'if (h == f || i == f) {'+                    // . or # appeared
                                    'g = Math.min('+
                                      '0 <= (i = b.indexOf(" ")) ? i : Infinity,'+
                                      '0 <= (i = b.indexOf(".")) ? i : Infinity,'+
                                      '0 <= (i = b.indexOf("#")) ? i : Infinity,'+
                                      '0 <= (i = b.indexOf("*")) ? i : Infinity,'+
                                      '0 <= (i = b.indexOf(">")) ? i : Infinity,'+
                                      '0 <= (i = b.indexOf("+")) ? i : Infinity,'+
                                      '0 <= (i = b.indexOf("~")) ? i : Infinity,'+
                                      '0 <= (i = b.indexOf("[")) ? i : Infinity,'+
                                      '0 <= (i = b.indexOf(":")) ? i : Infinity,'+
                                      '0 <= (i = b.indexOf(")")) ? i : Infinity'+
                                    ');'+
                                    'if ("" == (i = b.slice(0, g)))'+
                                      'break;'+
                                    'j = [];'+
                                    'k = (e ? C : c).length;'+
                                    'l = 0;'+
                                    'if (h == f)'+                              // . appeared
                                      'if (o)'+
                                        'for ( ; l < k; ++l)'+
                                          '(f = (h = (e ? C : c)[l]).className) && 0 <= (" " + f + " ").indexOf(" " + i + " ") && j.push(h);'+
                                      'else if (3 < d)'+
                                        'for ( ; l < k; ++l)'+
                                          '(f = (h = (e ? C : c)[l]).className) && 0 <= (" " + f + " ").indexOf(" " + i + " ") && j.push(h);'+
                                      'else if (!d)'+
                                        'for ( ; l < k; ++l)'+
                                          'for (f = (e ? C : c)[l].getElementsByTagName("*"), h = f.length, m = 0; m < h; ++m)'+
                                            '(n = (o = f[m]).className) && 0 <= (" " + n + " ").indexOf(" " + i + " ") && j.push(o);'+
                                      'else if (2 > d)'+
                                        'for ( ; l < k; ++l)'+
                                          'for (f = (e ? C : c)[l].children, h = f.length, m = 0; m < h; ++m)'+
                                            '(n = (o = f[m]).className) && 0 <= (" " + n + " ").indexOf(" " + i + " ") && j.push(o);'+
                                      'else if (3 > d)'+
                                        'for ( ; l < k; ++l)'+
                                          '(f = (e ? C : c)[l].nextSibling) && (h = f.className) && 0 <= (" " + h + " ").indexOf(" " + i + " ") && j.push(f);'+
                                      'else {'+
                                        'for ( ; l < k; ++l)'+
                                          'if (f = (e ? C : c)[l].nextSibling)'+
                                            'for ( ; ; ) {'+
                                              '(h = f.className) && 0 <= (" " + h + " ").indexOf(" " + i + " ") && j.push(f);'+
                                              'if (!(f = f.nextSibling))'+
                                                'break;'+
                                            '}'+
                                      '}'+
                                    'else '+                                    // # appeared
                                      'if (o)'+
                                        'for ( ; l < k; ++l)'+
                                          'i == (f = (e ? C : c)[l]).id && j.push(f);'+
                                      'else if (3 < d)'+
                                        'for ( ; l < k; ++l)'+
                                          'i == (f = (e ? C : c)[l]).id && j.push(f);'+
                                      'else if (!d)'+
                                        'for ( ; l < k; ++l)'+
                                          'for (f = (e ? C : c)[l].getElementsByTagName("*"), h = f.length, m = 0; m < h; ++m)'+
                                            '(n = f[m]) && i == n.id && j.push(n);'+
                                      'else if (2 > d)'+
                                        'for ( ; l < k; ++l)'+
                                          'for (f = (e ? C : c)[l].children, h = f.length, m = 0; m < h; ++m)'+
                                            'i == (n = f[m]).id && j.push(n);'+
                                      'else if (3 > d)'+
                                        'for ( ; l < k; ++l)'+
                                          '(f = (e ? C : c)[l].nextSibling) && i == f.id && j.push(f);'+
                                      'else '+
                                        'for ( ; l < k; ++l)'+
                                          'if (f = (e ? C : c)[l].nextSibling)'+
                                            'for ( ; ; ){'+
                                              'i == f.id && j.push(f);'+
                                              'if (!(f = f.nextSibling))'+
                                                'break;'+
                                            '}'+
                                    'if (!j.length)'+
                                      'break;'+
                                    'b = b.slice(g);'+
                                    'e ? C = j : c = j;'+
                                    'd = ("." == (g = b.slice(0, 1)) || "#" == g || "["==g || ":" == g) ? 4 : 0;'+
                                  '}'+
                                  'else if (j == f) {'+                         // * appeared
                                    'for (f = (e ? C : c).length, g = 0, h = []; g < f; ++g)'+
                                      'for (i = (e ? C : c)[g].getElementsByTagName("*"), j = i.length, k = 0; k < j; ++k)'+
                                        'h.push(i[k]);'+
                                    'if (!h.length)'+
                                      'break;'+
                                    'e ? C = h : c = h;'+
                                  '}'+
                                  'else if (k == f)'+                           // > appeared
                                    'd = 1;'+
                                  'else if (l == f || m == f) {'+               // + or ~ appeared
                                    'if ((e ? C : c) == [document])'+
                                      'break;'+
                                    'd = l == f ? 2 : 3;'+
                                  '}'+
                                  'else if (n == f) {'+                         // [ appeared
                                    'f = Math.min('+
                                      '0 <= (g = b.indexOf("]")) ? g : Infinity,'+
                                      '0 <= (h = b.indexOf("=")) ? h : Infinity,'+
                                      '0 <= (i = b.indexOf("~=")) ? i : Infinity,'+
                                      '0 <= (j = b.indexOf("|=")) ? j : Infinity,'+
                                      '0 <= (k = b.indexOf("^=")) ? k : Infinity,'+
                                      '0 <= (l = b.indexOf("$=")) ? l : Infinity,'+
                                      '0 <= (m = b.indexOf("*=")) ? m : Infinity'+
                                    ');'+
                                    'if (Infinity == f || 1 > f || "" == (m = b.slice(0, f).trim().toLowerCase()))'+
                                      'break;'+
                                    'n = [];'+
                                    'p = (e ? C : c).length;'+
                                    'q = 0;'+
                                    'if (o)'+
                                      'for ( ; q < p; ++q)'+
                                        '(o = (e ? C : c)[q]).getAttribute(m) && n.push(o);'+
                                    'else if (3 < d)'+
                                      'for ( ; q < p; ++q)'+
                                        '(o = (e ? C : c)[q]).getAttribute(m) && n.push(o);'+
                                    'else if (!d)'+
                                      'for ( ; q < p; ++q)'+
                                        'for (o = (e ? C : c)[q].getElementsByTagName("*"), r = o.length, s = 0; s < r; ++s)'+
                                          '(t = o[s]).getAttribute(m) && n.push(t);'+
                                    'else if (2 > d)'+
                                      'for ( ; q < p; ++q)'+
                                        'for (o = (e ? C : c)[q].children, r = o.length, s = 0; s < r; ++s)'+
                                          '(t = o[s]).getAttribute(m) && n.push(t);'+
                                    'else if (3 > d)'+
                                      'for ( ; q < p; ++q)'+
                                        '(o = (e ? C : c)[q].nextSibling) && o.getAttribute(m) && n.push(o);'+
                                    'else '+
                                      'for ( ; q < p; ++q)'+
                                        'if (o = (e ? C : c)[q].nextSibling)'+
                                          'for ( ; ; ) {'+
                                            'o.getAttribute(m) && n.push(o);'+
                                            'if (!(o = o.nextSibling))'+
                                              'break;'+
                                          '}'+
                                    'if (!n.length)'+
                                      'break;'+
                                    'b = b.slice(f + ((g == f || h == f) ? 1 : 2));'+
                                    'e ? C = n : c = n;'+
                                    'if (g == f)'+                              // ] appeared
                                      'continue;'+
                                    // g what appeared
                                    'else if (h == f)'+                         // = appeared
                                      'g = 0;'+
                                    'else if (i == f)'+                         // ~ appeared
                                      'g = 1;'+
                                    'else if (j == f)'+                         // | appeared
                                      'g = 2;'+ 
                                    'else if (k == f)'+                         // ^ appeared
                                       'g = 3;'+
                                    'else if (l == f)'+                         // $ appeared
                                       'g = 4;'+
                                    'else '+                                    // * appeared
                                       'g = 5;'+
                                    // f ' or " or nothing
                                    '("\'" == (f = b.slice(0, 1)) || "\\"" == f) ? b = b.slice(1) : f = "]";'+
                                    // h value
                                    'for (h = "", i = 0; ; )'+
                                      'if (0 <= (j = b.indexOf(f)))'+
                                        'if (h += b.slice(0, j), "\" != b.slice(j - 1, j)) {'+
                                          'b = b.slice(j + ("]" != f ? 1 : 0));'+
                                          'break;'+
                                        '}'+
                                        'else '+
                                          'b = b.slice(j + 1);'+
                                      'else {'+
                                        'i = 1;'+
                                        'break;'+
                                      '}'+
                                    'if (i)'+
                                      'break;'+
                                    'h = h.trim();'+
                                    'if ("style" == m)'+
                                      'if (!g)'+                                // = appeared
                                        'for (f = [], i = (e ? C : c).length, j = 0; j < i; ++j)'+
                                          'h == (k = (e ? C : c)[j]).style.cssText && f.push(k);'+
                                      'else if (2 > g)'+                        // ~ appeared
                                        'for (f = [], i = (e ? C : c).length, j = 0; j < i; ++j)'+
                                          '(" " + h + " ") == (" " + (k = (e ? C : c)[j]).style.cssText + " ") && f.push(k);'+
                                      'else if (3 > g)'+                        // | appeared
                                        'for (f = [], i = (e ? C : c).length, j = 0; j < i; ++j)'+
                                          '0 <= ("-" + (k = (e ? C : c)[j]).style.cssText + "-").indexOf("-" + h + "-") && f.push(k);'+
                                      'else if (4 > g)'+                        // ^ appeared
                                        'for (f = [], i = (e ? C : c).length, j = 0; j < i; ++j)'+
                                          '0 == (k = (e ? C : c)[j]).style.cssText.indexOf(h) && f.push(k);'+
                                      'else if(5>g)'+                           // $ appeared
                                        'for(f=[],i=(e?C:c).length,j=0,k=h.length;j<i;j++)'+
                                          '(l=(n=(e?C:c)[j]).style.cssText)&&h==l.slice(l.length-k)&&f.push(n);'+
                                      'else '+                                  // * appeared
                                        'for (f = [], i = (e ? C : c).length, j = 0; j < i; ++j)'+
                                          '0 <= (k = (e ? C : c)[j]).style.cssText.indexOf(h) && f.push(k);'+
                                    'else '+
                                      'if (!g)'+                                // = appeared
                                        'for (f = [], i = (e ? C : c).length, j = 0; j < i; ++j)'+
                                          'h == (k = (e ? C : c)[j]).getAttribute(m) && f.push(k);'+
                                      'else if (2 > g)'+                        // ~ appeared
                                        'for (f = [], i = (e ? C : c).length, j = 0; j < i; ++j)'+
                                          '(" " + h + " ") == (" " + (k = (e ? C : c)[j]).getAttribute(m) + " ") && f.push(k);'+
                                      'else if (3 > g)'+                        // | appeared
                                        'for (f = [], i = (e ? C : c).length, j = 0; j < i; ++j)'+
                                          '0 <= ("-" + (k = (e ? C : c)[j]).getAttribute(m) + "-").indexOf("-" + h + "-") && f.push(k);'+
                                      'else if (4 > g)'+                        // ^ appeared
                                        'for (f = [], i = (e ? C : c).length, j = 0; j < i; ++j)'+
                                          '0 == (k = (e ? C : c)[j]).getAttribute(m).indexOf(h) && f.push(k);'+
                                      'else if (5 > g)'+                        // $ appeared
                                        'for (f = [], i = (e ? C : c).length, j = 0, k = h.length; j < i; ++j)'+
                                          '(l = (n = (e ? C : c)[j]).getAttribute(m)) && h == l.slice(l.length - k) && f.push(n);'+
                                      'else '+                                  // * appeared
                                        'for (f = [], i = (e ? C : c).length, j = 0; j < i; ++j)'+
                                          '0 <= (k = (e ? C : c)[j]).getAttribute(m).indexOf(h) && f.push(k);'+
                                    'if (!f.length || 0 > (g = b.indexOf("]")) || "" != b.slice(0, g).trim())'+
                                      'break;'+
                                    'd = ("." == (h = b.slice(g, g + 1)) || "#" == h || "[" == h || ":" == h) ? 4 : 0;'+
                                    'b = b.slice(g + 1);'+
                                    'e ? C = f : c = f;'+
                                  '}'+
                                  'else if(X == f) {'+                          // ) appeared
                                    'if (!e)'+
                                      'break;'+
                                    'e = 0;'+
                                    'for (f = c.length, g = 0, h = C.length, i = []; g < f; ++g)'+
                                      'for (j = (k = c[g]).getElementsByTagName("*"), l = j.length, m = 0; m < l; ++m)'+
                                        'for (n = j[m], o = 0; o < h; ++o)'+
                                          'if (n == C[o]){'+
                                            'i.push(k);'+
                                            'break;'+
                                        '}'+
                                    'c = i;'+
                                  '}'+
                                  'else {'+                                     // : appeared
                                    'f = Math.min('+
                                      '0 <= (g = b.indexOf("(")) ? g : Infinity,'+
                                      '0 <= (g = b.indexOf(" ")) ? g : Infinity,'+
                                      '0 <= (g = b.indexOf(".")) ? g : Infinity,'+
                                      '0 <= (g = b.indexOf("#")) ? g : Infinity,'+
                                      '0 <= (g = b.indexOf("*")) ? g : Infinity,'+
                                      '0 <= (g = b.indexOf(">")) ? g : Infinity,'+
                                      '0 <= (g = b.indexOf("+")) ? g : Infinity,'+
                                      '0 <= (g = b.indexOf("~")) ? g : Infinity,'+
                                      '0 <= (g = b.indexOf("[")) ? g : Infinity,'+
                                      '0 <= (g = b.indexOf(":")) ? g : Infinity'+
                                    ');'+
                                    'if ("" == (g = b.slice(0, f).toLowerCase()))'+
                                      'break;'+
                                    'h = [];'+
                                    'i = (e ? C : c).length;'+
                                    'j = 0;'+
                                    'if ("-abp-has" == g && "(" == b.slice(f, f + 1)) {'+
                                      'if (e)'+
                                        'break;'+
                                      'if (!o && 4 > d) {'+
                                        'if (!d)'+
                                          'for ( ; j < i; ++j)'+
                                            'for (g = (c == document ? c : c[j]).getElementsByTagName("*"), k = g.length, l = 0; l < k; ++l)'+
                                              'h.push(g[l]);'+
                                        'else if (2 > d) {'+
                                          'for ( ; j < i; ++j)'+
                                            'for (g = (c == document ? c : c[j]).children, k = g.length, l = 0; l < k; ++l)'+
                                              'h.push(g[l]);'+
                                        '}'+
                                        'else if (3 > d) {'+
                                          'for ( ; j < i; ++j)'+
                                            'if (g = c[j].nextSibling)'+
                                              'h.push(g);'+
                                        '}'+
                                        'else '+
                                          'for ( ; j < i; ++j)'+
                                            'if (g = c[j].nextSibling)'+
                                              'for ( ; ; ){'+
                                                'h.push(g);'+
                                                'if (!(g = g.nextSibling))'+
                                                  'break;'+
                                              '}'+
                                        'if (!h.length)'+
                                          'break;'+
                                        'c = h;'+
                                      '}'+
                                      'b = b.slice(f + 1);'+
                                      'C = c;'+
                                      'e = 1;'+
                                    '}'+
                                    'else if (("-abp-contains" == g || "has-text" == g) && "(" == b.slice(f, f + 1)) {'+
                                      'if (0 > (g = b.indexOf(")")))'+
                                        'break;'+
                                      'for (g = b.slice(f + 1, g), k = e ? C : c, l = k.length, m = 0; m < l; ++m)'+
                                        '0 <= (n = k[m]).innerText.indexOf(g) && h.push(n);'+
                                      'if (!h.length)'+
                                        'break;'+
                                      'b = b.slice(f + g.length + 2);'+
                                      'e ? C = h : c = h;'+
                                    '}'+
                                    'else if ("first-child" == g) {'+
                                      'if (c == [document])'+
                                        'break;'+
                                      'if (o)'+
                                        'for ( ; j < i; ++j)'+
                                          '((g = (e ? C : c)[j]) == g.parentNode.firstChild) && h.push(g);'+
                                      'else if (3 < d)'+
                                        'for ( ; j < i; ++j)'+
                                          '((g = (e ? C : c)[j]) == g.parentNode.firstChild) && h.push(g);'+
                                      'else if (!d || 2 > d)'+
                                        'for ( ; j < i ; ++j)'+
                                          '(g = (e ? C : c)[j].firstChild) && h.push(g);'+
                                      'else if (3 > d)'+
                                        'for ( ; j < i ; ++j)'+
                                          '(g = (e ? C : c)[j].nextSibling) && (g = g.firstChild) && h.push(g);'+
                                      'else '+
                                        'for ( ; j < i; ++j)'+
                                          'if ((g = (e ? C : c)[j].nextSibling) && (g = g.firstChild))'+
                                            'for ( ; ; ) {'+
                                              'h.push(g);'+
                                              'if (!(g = g.nextSibling) || !(g = g.firstChild))'+
                                                'break;'+
                                            '}'+
                                      'if (!h.length)'+
                                        'break;'+
                                      'b = b.slice(f);'+
                                      'e ? C = h : c = h;'+
                                    '}'+
                                    'else '+
                                      'break;'+
                                    'd = ("." == (f = b.slice(0, 1)) || "#" == f || "[" == f || ":" == f) ? 4 : 0;'+
                                  '}'+
                                '}'+
                              '}'+
                            '}'+
                        '}'+
                        'chrome.runtime.onMessage.addListener(function(a) {'+
                          'chrome.runtime.onMessage = null;'+
                          'Properties = a[3];'+
                          'if ("complete" == (a = document.readyState) || "interactive" == a)'+
                            'PropertiesTestF();'+
                          'else '+
                            'document.addEventListener("DOMContentLoaded", PropertiesTestF);'+
                        '});'
                      : '')+
                      (ABPPropertiesTest ?
                        'ABPPropertiesHrefs = [];'+
                        'ABPPropertiesRules  =[];'+
                        'function ABPPropertiesInsert(a) {'+
                          'var b;'+
                          '(b = chrome.runtime) && b.getManifest() && b.sendMessage({a:['+
                            ', '+
                            ', '+
                            ', '+
                            ', '+
                            '"HideElements", '+
                            '"' + tabId + '", '+
                            '"' + frameId + '", '+
                            '"Host", '+
                            'location.hostname, '+
                            'a + "{display: none !important}"'+
                          ']});'+
                        '}'+
                        'function ABPPropertiesF(a, b) {'+
                          'var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r;'+
                          'if (c = a.cssRules)'+
                            'for (d = c.length - 1; 0 <= d; --d) {'+
                              'if (e = (f = c[d]).cssText) {'+
                                'for (g = 0, h = ABPPropertiesRules.length - 1, b && ABPPropertiesRulesNew.push(e); 0 <= h; --h)'+
                                  'if (e == ABPPropertiesRules[h]) {'+
                                    'g = 1;'+
                                    'break'+
                                  '}'+
                                'if (g)'+
                                  'continue;'+
                                'ABPPropertiesRules.push(e);'+
                                'if (0 <= (g = e.lastIndexOf("{"))) {'+
                                  'h = e.slice(g + 1).toLowerCase();'+
                                  'i = 0;'+
                                  (ABPPropertiesSimpleL ?
                                    'for (j = ABPPropertiesSimpleL, k = 0; k < j; k += 3)'+
                                      'if (0 <= h.indexOf(ABPPropertiesSimple[k]))'+
                                        '(l = f.selectorText) && (i = 1) && ABPPropertiesInsert(ABPPropertiesSimple[k + 1] + l + ABPPropertiesSimple[k + 2]);'
                                  : '')+
                                  (ABPPropertiesSpecialL ?
                                    'if (!i) {'+
                                      'for (j = ABPPropertiesSpecialL, k = 0; k < j; k += 3) {'+
                                        'for (l = ABPPropertiesSpecial[k].split("*"), m = l.length, n = 0, o = h, p = 1; n < m; ++n)'+
                                          'if (0 > (q = o.indexOf(r = l[n]))) {'+
                                            'p = 0;'+
                                            'break;'+
                                          '}'+
                                          'else '+
                                            'o = o.slice(q + r.length);'+
                                        'p && (l = f.selectorText) && (i = 1) && ABPPropertiesInsert(ABPPropertiesSpecial[k + 1] + l + ABPPropertiesSpecial[k + 2]);'+
                                      '}'+
                                    '}'
                                  : '')+
                                  (ABPPropertiesRegExpL ?
                                    'if (!i)'+
                                      'for (j = ABPPropertiesRegExpL, k = 0; k < j; k += 3)'+
                                        'if (0 <= h.search(ABPPropertiesRegExp[k]))'+
                                          '(l = f.selectorText) && ABPPropertiesInsert(ABPPropertiesRegExp[k + 1] + l + ABPPropertiesRegExp[k + 2])'
                                  : '')+
                                '}'+
                              '}'+
                            '}'+
                          'else if (a = a.href) {'+
                            'for (c = ABPPropertiesHrefs.length - 1, d = 0; 0 <= c; --c)'+
                              'if (a == ABPPropertiesHrefs[c]) {'+
                                'd = 1;'+
                                'break;'+
                              '}'+
                            'if (d)'+
                              'return;'+
                            'ABPPropertiesHrefs.push(a);'+
                            'c = new XMLHttpRequest;'+
                            'c.addEventListener("readystatechange", function() {'+
                              'if (3 < c.readyState && 200 == c.status) {'+
                                'd = document.createElement("style");'+
                                'd.appendChild(document.createTextNode(c.responseText));'+
                                'd.type = "text/css";'+
                                'if (e = document.getElementsByTagName("head")[0])'+
                                  '(f = e.childNodes[0]) ? e.insertBefore(d, f) : e.appendChild(d);'+
                                'else if(e = document.getElementsByTagName("html")[0])'+
                                  '(f = e.childNodes[0]) ? e.insertBefore(d, f) : e.appendChild(d);'+
                                'else '+
                                  '(e = document.childNodes[0]) ? document.insertBefore(d, e) : document.appendChild(d);'+
                                '(e = document.styleSheets) && (e = e[0]) && d.parentNode.removeChild(d) && ABPPropertiesF(e);'+
                              '}'+
                            '});'+
                            'c.open("GET", a);'+
                            'c.send();'+
                          '}'+
                        '}'+
                        'function ABPPropertiesAll() {'+
                          '"undefined" != typeof ABPPropertiesTimeout && clearTimeout(ABPPropertiesTimeout);'+
                          'ABPPropertiesRulesNew = [];'+
                          'for (var a = document.styleSheets, b = a.length - 1; 0 <= b; --b)'+
                            'ABPPropertiesF(a[b], 1);'+
                          'ABPPropertiesRules = ABPPropertiesRulesNew;'+
                          'ABPPropertiesTimeout = setTimeout(ABPPropertiesAll, 1E3);'+
                        '}'+
                        'chrome.runtime.onMessage.addListener(function(a) {'+
                          'chrome.runtime.onMessage = null;'+
                          'ABPProperties = a;'+
                          (ABPPropertiesSimpleL ? 'ABPPropertiesSimple = ABPProperties[0]; ABPPropertiesSimpleL = ABPPropertiesSimple.length;' : '')+
                          (ABPPropertiesSpecialL ? 'ABPPropertiesSpecial = ABPProperties[1];ABPPropertiesSpecialL = ABPPropertiesSpecial.length;' : '')+
                          (ABPPropertiesRegExpL ? 'ABPPropertiesRegExp = ABPProperties[2];ABPPropertiesRegExpL = ABPPropertiesRegExp.length;' : '')+
                          'ABPPropertiesAll();'+
                        '});'
                      : '')+
                      'function HideFunction(a, b) {'+
                        'var c = 0, d = a.id, e, f;'+
                        ((!Smooth || 0 < frameId) && ',' != HideIdsNew + HideIdsHost ?
                          'if ((0 == b || 1 == b || "id" == b) && d && 0 <= HideIds.indexOf("," + d + ","))'+
                            'c = 1,'+
                            'f = "#" + d;'
                        : '')+
                        ((!Smooth || 0 < frameId) && ',' != HideClassesNew + HideClassesHost ?
                          'if ((0 == b || 1 == b || "class" == b) && 1 > c && (d = a.classList))'+
                            'for (e = d.length - 1; 0 <= e; --e)'+
                              'if (0 <= HideClasses.indexOf("," + (f = d[e]) + ",")) {'+
                                'c = 1;'+
                                'f = "." + f;'+
                                'break;'+
                              '}'
                        : '')+
                        'if (0 < c)'+
                          'a.hidden = 1,'+
                          'a.style.cssText += HideCSS'+
                          (0 < frameId ?
                            ', '+
                            'a = location.href, '+
                            '0 <= (d = a.indexOf("#")) && (a = a.slice(0, d)), '+
                            '(d = chrome.runtime) && d.getManifest() && d.sendMessage({a:['+
                              ', '+
                              ', '+
                              ', '+
                              ', '+
                              '"HideElements", '+
                              '"' + tabId + '", '+
                              '"' + frameId + '", '+
                              '"URLs", '+
                              'a, '+
                              'f + "{display: none !important}"'+
                            ']});'
                          :
                            ';'
                          )+
                        'if (0 != b)'+
                          'return c;'+
                      '}'+
                      'function ObserverFunction(a, b) {'+
                        'var c = a.length - 1, d, e, f, g, h, i, j, k, l, m;'+
                        (YouTubeAnnotationsTest && ('youtube.com' == TH || 'gaming.youtube.com' == TH || 'youtube-nocookie.com' == TH) ? YouTubeAnnotations2 : '')+
                        'd = 0 > (d = (e = location.href).indexOf("#")) ? e : e.slice(0, d);'+
                        'HideURL != d && (HideURL = d, Hidden = []);'+
                        'for ( ; 0 <= c; --c) {'+
                          'if (d = (e = a[c]).attributeName) {'+
                            'if ("class" == d || "id" == d) {'+
                              'e = e.target;'+
                              'for (f = Hidden.length - 1, g = 1; 0 <= f; --f)'+
                                'if (e == Hidden[f]) {'+
                                  'g = 0;'+
                                  'break;'+
                                '}'+
                              (0 < frameId && (',' != HideIdsNew + HideIdsHost || ',' != HideClassesNew + HideClassesHost) ?
                                'if (g)'+
                                  'if (HideFunction(e, d))'+
                                    'Hidden.push(e);'+
                                  (PropertiesTest ?
                                    'else '+
                                      '"undefined" != typeof Properties && PropertiesTestF(e);'
                                  : '')
                              :
                                (PropertiesTest ?
                                  '"undefined" != typeof Properties && PropertiesTestF(e);'
                                : '')
                              )+
                            '}'+
                            'else if ("target" == d) {'+
                              'if ((e = e.target) && (f = e.tagName) && ("a" == (f = f.toLowerCase()) || "area" == f))'+
                                'if ((f = e.target) && ("_blank" == (f = f.toLowerCase()) || "blank" == f))'+
                                  'e.onclick = BlankClick,'+
                                  'e.oncontextmenu = BlankContextmenu,'+
                                  'e.onmouseup = BlankMouseUp;'+
                                'else '+
                                  'e.onclick = e.oncontextmenu = e.onmouseup = null;'+
                            '}'+
                            'else if("' + Random + '" == d) {'+
                              'if ((f = document.getElementsByTagName("html")[0]) && "" == f.getAttribute("' + Random + '") && (g = e.target) && (g = g.tagName) && "html" == g.toLowerCase()) {'+
                                'f.setAttribute("' + Random0 + '", "");'+
                                'for (f = document.getElementsByTagName("a"), g = f.length, h = 0; h < g; ++h)'+
                                  'if ((i = (j = f[h]).target) && ("_blank" == (i = i.toLowerCase()) || "blank" == i))'+
                                    'j.onclick = j.oncontextmenu = j.onmouseup = null;'+
                                'for (f = document.getElementsByTagName("area"), g = f.length, h = 0; h < g; ++h)'+
                                  'if ((i = (j = f[h]).target) && ("_blank" == (i = i.toLowerCase()) || "blank" == i))'+
                                    'j.onclick = j.oncontextmenu = j.onmouseup = null;'+
                              '}'+
                            '}'+
                            'else {'+
                              'f = 1;'+
                              (ABPPropertiesTest ?
                                'if ((g = e.target) && (g = g.tagName) && "style" == g.toLowerCase())'+
                                  'f = 0,'+
                                  'ABPPropertiesAll();'
                              : '')+
                              (PropertiesTest ?
                                'if (f) {'+
                                  'for (f = Hidden.length - 1, g = 1; 0 <= f; --f)'+
                                    'if (e == Hidden[f]) {'+
                                      'g = 0;'+
                                      'break;'+
                                    '}'+
                                  (0 < frameId && (',' != HideIdsNew + HideIdsHost || ',' != HideClassesNew + HideClassesHost) ?
                                    'if (g && HideFunction(e, d))'+
                                      'Hidden.push(e);'
                                  : '')+
                                '}'
                              : '')+
                            '}'+
                          '}'+
                          'else if (d = e.addedNodes) {'+
                            (FacebookTimelineTest ?
                              'if ("www.facebook.com" == location.host && "/" == location.pathname) {'+
                                'for (var f = d.length - 1, g = 0; 0 <= f; --f)'+
                                  'if ((h = d[f]).tagName) {'+
                                    FacebookTimeline+
                                  '}'+
                                'if (g)'+
                                  'continue;'+
                              '}'
                            : '')+
                            'for (e = d.length - 1; 0 <= e; --e) {'+
                              'if ((f = d[e]).getElementsByTagName && (g = f.getElementsByTagName("*")))'+
                                'for (h = g.length - 1, i = 0; 0 <= h; --h) {'+
                                  'j = g[h];'+
                                  (0 < frameId && (',' != HideIdsNew + HideIdsHost || ',' != HideClassesNew + HideClassesHost) ?
                                    'HideFunction(j, 1) && Hidden.push(j);'
                                  : '')+
                                  'if ("a" == (k = j.tagName.toLowerCase()) || "area" == k)'+
                                    'if ((k = j.target) && ("_blank" == (k = k.toLowerCase()) || "blank" == k))'+
                                      'j.onclick = BlankClick,'+
                                      'j.oncontextmenu = BlankContextmenu,'+
                                      'j.onmouseup = BlankMouseUp;'+
                                    'else '+
                                      '"style" == k && (i = 1);'+
                                '}'+
                              (ABPPropertiesTest ?
                                'i && ABPPropertiesAll();'
                              : '')+
                              (0 < frameId && (',' != HideIdsNew + HideIdsHost || ',' != HideClassesNew + HideClassesHost) ?
                                'if (HideFunction(f, 1))'+
                                  'Hidden.push(f);'+
                                (PropertiesTest ?
                                  'else '+
                                    '"undefined" != typeof Properties&&PropertiesTestF(f);'
                                : '')
                              :
                                (PropertiesTest ?
                                  '"undefined" != typeof Properties&&PropertiesTestF(f);'
                                : '')
                              )+
                              'if ((g = f.tagName) && ("a" == (g = g.toLowerCase()) || "area" == g) && (g = f.target) && ("_blank" == (g = g.toLowerCase()) || "blank" == g))'+
                                'f.onclick = BlankClick,'+
                                'f.ononcontextmenu = BlankContextmenu,'+
                                'f.onmouseup = BlankMouseUp;'+
                            '}'+
                          '}'+
                        '}'+
                      '}'+
                      'Observer = new MutationObserver(ObserverFunction);'+
                      'function BlankClick() {'+
                        'var a, b;'+
                        'if ((a = this.href) && (a = " " + a + " "))'+
                          'if ((b = chrome.runtime) && b.getManifest())'+
                            'b.sendMessage({a:['+
                              ', '+
                              ', '+
                              ', '+
                              ', '+
                              '"FakePopups", '+
                              '"' + tabId + '", '+
                              'a'+
                            ']});'+
                          'else '+
                            'BlankClick = function() {};'+
                      '}'+
                      'function BlankContextmenu() {'+
                        'var a, b;'+
                        'if (a = this.href)'+
                          'if ((b = chrome.runtime) && b.getManifest())'+
                            'b.sendMessage({a:['+
                              ', '+
                              ', '+
                              ', '+
                              ', '+
                              '"FakePopupsContextmenu", '+
                              '"' + tabId + '", '+
                              '" " + a + " "'+
                            ']});'+
                          'else '+
                            'BlankContextmenu = function() {};'+
                      '}'+
                      'function BlankMouseUp(a) {'+
                        'var b;'+
                        'if (2 == a.which && (a = this.href) && (a = " " + a + " "))'+
                          'if ((b = chrome.runtime) && b.getManifest())'+
                            'b.sendMessage({a:['+
                              ', '+
                              ', '+
                              ', '+
                              ', '+
                              '"FakePopups", '+
                              '"' + tabId + '", '+
                              'a'+
                            ']});'+
                          'else '+
                            'BlankMouseUp = function() {};'+
                      '}'+
                      'function HTMLEvent() {'+
                        'let a;'+
                        'if (a = document.getElementsByTagName("html")[0])'+
                          'a.dispatchEvent(new CustomEvent("' + Random0 + '"));'+
                        (YouTubeAnnotationsTest && ('youtube.com' == TH || 'gaming.youtube.com' == TH || 'youtube-nocookie.com' == TH) ?
                          'YTFunction1Test=YTFunction1ATest = YTVideo=YTVideoA = undefined;'+
                          'YTObserver.disconnect();'+
                          'YTObserver0.disconnect();'+
                          'YTObserver0A.disconnect();'+
                          'YTObserver1.disconnect();'+
                          'YTObserver1A.disconnect();'+
                          'YTObserver2.disconnect();'+
                          'if (YTSettings)'+
                            'YTSettings.removeEventListener("click", YTStatus),'+
                            'YTSettings = undefined;'+
                          'if (SettingsA)'+
                            'YTSettingsA.removeEventListener("click", YTStatusA),'+
                            'YTSettingsA = undefined;'+
                          '(a=chrome.runtime) && a.getManifest() && YTFunction0();'
                        : '')+
                      '}'+
                      'function Ready() {'+
                        'var a, b, c, d, e, f, g, h, i, j, k, l, m, n;'+
                        ((!Smooth || 0 < frameId) && (',' != HideIdsNew + HideIdsHost || ',' != HideClassesNew + HideClassesHost) ?
                          'if (a = document.body)'+
                            'for (a = a.getElementsByTagName("*"), b = a.length, c = 0; c < b; ++c)'+
                              'if (0 > ",audio,base,bdo,button,canvas,code,col,colgroup,datalist,embed,font,html,img,input,kbd,keygen,link,meta,object,picture,pre,script,select,source,style,textarea,video,wbr,".indexOf("," + (d = a[c]).tagName.toLowerCase() + ","))'+
                                'HideFunction(d, 0);'
                        : '')+
                        'for (a = document.getElementsByTagName("a"), b = a.length, c = 0; c < b; ++c)'+
                          'if ((d = (e = a[c]).target) && ("_blank" == (d = d.toLowerCase()) || "blank" == d))'+
                            'e.onclick = BlankClick,'+
                            'e.oncontextmenu = BlankContextmenu,'+
                            'e.onmouseup = BlankMouseUp;'+
                        'for (a = document.getElementsByTagName("area"), b = a.length, c - 0; c < b; ++c)'+
                          'if ((d = (e = a[c]).target) && ("_blank" == (d = d.toLowerCase()) || "blank" == d))'+
                            'e.onclick = BlankClick,'+
                            'e.oncontextmenu = BlankContextmenu,'+
                            'e.onmouseup = BlankMouseUp;'+
                        (FacebookTimelineTest ?
                          'if ((h = document.body) && "www.facebook.com" == (i = location.host) && "/" == location.pathname) {'+
                            FacebookTimeline+
                          '}'
                        : '')+
                      '}'+
                      'if (a = document.getElementsByTagName("html")[0]) {'+
                        (YouTubeAnnotationsTest && ('youtube.com' == TH || 'gaming.youtube.com' == TH || 'youtube-nocookie.com' == TH) ? YouTubeAnnotations1 : '')+
                        'a.addEventListener("' + Random + '", HTMLEvent);'+
                        'Observer.observe(a, {attributes: true, ' + (PropertiesTest ? '' : 'attributeFilter: ["class", "id", "target"], ') + 'childList: true, subtree: true});'+
                      '}'+
                      'var e, f, g, h, i, j, k;'+
                      'if ("complete" == (e = document.readyState) || "interactive" == e)'+
                        'Ready();'+
                      'else '+
                        'document.addEventListener("DOMContentLoaded", Ready);'+
                    '}',
                  frameId: frameId,
                  runAt: 'document_start'
                },
                function() {
                  if (chrome.runtime.lastError)
                    return;
                  if (ABPPropertiesTest || PropertiesTest)
                    chrome.tabs.sendMessage(
                      tabId,
                      [ABPPropertiesSimpleL ? ABPPropertiesSimple : [], ABPPropertiesSpecialL ? ABPPropertiesSpecial : [], ABPPropertiesRegExpL ? ABPPropertiesRegExp : [], Properties],
                      {
                        frameId: frameId
                      },
                      function() {
                        if (chrome.runtime.lastError)
                          return;
                      }
                    )
                }
              )
            });
          }
        }
      };
      chrome.windows.getAll({populate: true}, function(a) {
        a.forEach(function(a) {
          a.tabs.forEach(function(a) {
            var b, c, d, e, frameId, Host, tabId = a.id, URL = a.url;
            if (0 <= tabId) {

              /* check if script is inserted */

              chrome.webNavigation.getAllFrames({tabId: tabId}, function(a) {
                if (!a)
                  return;
                for (var b = a.length, c = 0, d, e; c < b; ++c)
                  chrome.tabs.executeScript(
                    tabId,
                    {
                      code:
                        '{'+
                          'var a, b, c;'+
                          'if (a = document.getElementsByTagName("html")[0]) {'+
                            'b = 1;'+
                            'c = function() {'+
                              'b = 0'+
                            '};'+
                            'a.addEventListener("' + Random0 + '", c);'+
                            'a.dispatchEvent(new CustomEvent("' + Random + '"));'+
                            'a.removeEventListener("' + Random0 + '", c);'+
                            'if (b) {'+
                              'if ((c = chrome.runtime) && c.getManifest())'+
                                'c.sendMessage({a:['+
                                  ', '+
                                  ', '+
                                  ', '+
                                  ', '+
                                  '"Insert", '+
                                  '"' + tabId + '", '+
                                  '"' + (d = a[c]).frameId + '", '+
                                  '"' + d.url + '"'+
                            '}'+
                            (YouTubeAnnotationsTest && ('youtube.com' == TH || 'gaming.youtube.com' == TH || 'youtube-nocookie.com' == TH) ?
                              'else '+
                                'a.dispatchEvent(new CustomEvent("' + Random1 + '"));'
                            : '')+
                            'function BlankClick() {'+
                              'var a, b;'+
                              'if ((a = this.href) && (a = " " + a + " "))'+
                                'if ((b = chrome.runtime) && b.getManifest())'+
                                  'b.sendMessage({a:['+
                                    ', '+
                                    ', '+
                                    ', '+
                                    ', '+
                                    '"FakePopups", '+
                                    '"' + tabId + '", '+
                                    'a'+
                                  ']});'+
                                'else '+
                                  'BlankClick = function() {};'+
                            '}'+
                            'function BlankContextmenu() {'+
                              'var a, b;'+
                              'if (a = this.href)'+
                                'if ((b = chrome.runtime) && b.getManifest())'+
                                  'b.sendMessage({a:['+
                                    ', '+
                                    ', '+
                                    ', '+
                                    ', '+
                                    '"FakePopupsContextmenu", '+
                                    '"' + tabId + '", '+
                                    '" " + a + " "'+
                                  ']});'+
                                'else '+
                                  'BlankContextmenu = function() {};'+
                            '}'+
                            'function BlankMouseUp(a) {'+
                              'var b;'+
                              'if (2 == a.which && (a = this.href) && (a = " " + a + " "))'+
                                'if ((b = chrome.runtime) && b.getManifest())'+
                                  'b.sendMessage({a:['+
                                    ', '+
                                    ', '+
                                    ', '+
                                    ', '+
                                    '"FakePopups", '+
                                    '"' + tabId + '", '+
                                    'a'+
                                  ']});'+
                                'else '+
                                  'BlankMouseUp = function() {};'+
                            '}'+
                            'function Ready() {'+
                              'for (var a = document.getElementsByTagName("a"), b = a.length, c = 0, d, e; c < b; ++c)'+
                                'if ((d = (e = a[c]).target) && ("_blank" == (d = d.toLowerCase()) || "blank" == d))'+
                                  'e.onclick = BlankClick,'+
                                  'e.oncontextmenu = BlankContextmenu,'+
                                  'e.onmouseup = BlankMouseUp;'+
                              'for (a = document.getElementsByTagName("area"), b = a.length, c = 0; c < b; ++c)'+
                                'if ((d = (e = a[c]).target) && ("_blank" == (d = d.toLowerCase()) || "blank" == d))'+
                                  'e.onclick = BlankClick,'+
                                  'e.oncontextmenu = BlankContextmenu,'+
                                  'e.onmouseup = BlankMouseUp;'+
                            '}'+
                            'if ("complete" == document.readyState || "interactive" == document.readyState)'+
                              'Ready();'+
                            'else '+
                              'document.addEventListener("DOMContentLoaded", Ready);'+
                          '}'+
                        '}',
                      frameId: frameId,
                      runAt: 'document_start'
                    },
                    function() {
                      if (chrome.runtime.lastError)
                        return;
                    }
                  );
              });

              /* Icon */

              if (0 < (b = URL.indexOf('://')) && 0 > URL.slice(0, b).indexOf(':')) {
                Host = (b = URL.slice(b + 3), c = b.indexOf('/'), d = b.indexOf(':'), (0 > d || d > c) && 0 <= c) ? b.slice(0, c) : 0 < d && d < c ? b.slice(0, d) : b;
                '.' == Host.slice(-1) && (Host = Host.slice(0, -1));
                if (0 <= (a = (b = Host).lastIndexOf('.')) && 0 <= (c = (d = b.slice(0, a)).lastIndexOf('.')))
                  if (0 <= (d = d.slice(0, c).lastIndexOf('.'))) {
                    if (0 <= TLDs.indexOf(' ' + (e = b.slice(d + 1)) + ' ')) {
                      if ('www' == (a = b.slice(0, d)).slice(0, a.lastIndexOf('.')))
                        b = b.slice(4);
                    }
                    else if (0 <= TLDs.indexOf(' ' + b.slice(c + 1) + ' ') && 'www' == b.slice(0, d))
                      b = e;
                  }
                  else if (0 == b.indexOf('www.' ))
                    b = b.slice(c + 1);
                if (0 <= Whitelist.indexOf(' ' + b + ' '))
                  chrome.browserAction.setIcon({path: 'Icon16Whitelist.png', tabId: tabId}, function(){
                    if (chrome.runtime.lastError)
                      return;
                  });
              }
            }
          });
        });
      });
    }
  });
}
LoadVariables(0);
function Message(a) {                                                           // listen to incoming messages
  let b, c, d, e, f, g;
  if (b = a.a[4])
    if ('transferArrayElement' == b) {                                          // transfer array element
      b = {};
      if ('string' == typeof(c = a.a[5]) && 'number' == typeof(d = a.a[6]))
        if ((e = window[c]) && (f = e[d]))
          b[c] = f;
      arguments[2](b);
    }
    else if ('transferVariables' == b) {                                        // transfer variables
      b = {};
      if (c = a.a[5])
        for (d = c.length - 1; 0 <= d; --d)
          (e = window[f = c[d]]) && (b[f] = e);
      arguments[2](b);
    }
    else if('Badge' == b) {                                                     // enable or disable badge
      if (undefined != (b = a.a[5])) {
          Badge = b;
          chrome.windows.getAll({populate: true}, function(a) {
            a.forEach(function(a) {
              for (c = a.tabs, d = c.length - 1; 0 <= d; --d)
                if ((e = c[d]).active) {
                  f = e.id;
                  chrome.browserAction.setBadgeText({text: (b ? 0 <= (g = Blocked[f]) ? g < 1E3 ? g.toString() : '1K+' : '' : ''), tabId: f});
                  break;
                }
            });
          });
          if (b)
            chrome.storage.local.remove('Badge');
          else
            chrome.storage.local.set({Badge: false});
      }
    }
    else if ('FakePopups' == b) {                                               // content script: fake popups
      if ('number' == typeof(b = parseInt(a.a[5])) && 'string' == typeof(c = a.a[6]))
        if (FakePopups[b])
          FakePopups[b] += c;
        else
          FakePopups[b] = c;
    }
    else if ('FakePopupsContextmenu' == b) {                                    // content script: fake popups
      if ('number' == typeof(b = parseInt(a.a[5])) && 'string' == typeof(c = a.a[6]))
        if (d = FakePopupsContextmenu[b])
          0 > d.indexOf(c) && (FakePopupsContextmenu[b] += c);
        else
          FakePopupsContextmenu[b] = c;
    }
    else if ('HideElements' == b) {                                             // content script: hide elements
      if ('number' == typeof(b = parseInt(a.a[5]))
      &&  'number' == typeof(c = parseInt(a.a[6]))
      &&  'string' == typeof(d = a.a[7])
      &&  'string' == typeof(e = a.a[8])
      &&  'string' == typeof(f = a.a[9]))
        if (e == ('Hosts' == d ? Hosts : URLs)[b])
          chrome.tabs.insertCSS(
            b,
            {
              code: f,
              frameId: c
            },
            function() {
              if (chrome.runtime.lastError)
                return;
            }
          );
    }
    else if ('Insert' == b) {                                                   // insert content script if not already inserted
      if ('number' == typeof(b = parseInt(a.a[5]))
      &&  'number' == typeof(c = parseInt(a.a[6]))
      &&  'string' == typeof(d = a.a[7]))
        Insert(c, b, d);
    }
    else if('ListAddOwn' == b) {                                                // add own list
      if (undefined != (b = a.a[7])
      &&  undefined != (c = a.a[5])
      &&  undefined != (d = a.a[6]))
        if (b > UpdateCounter) {
          UpdateCounter = b;
          Lists = c;
          ListsStatus = d;
          update();
        }
        else if (!window.Update)
          chrome.runtime.sendMessage({a:['ListsStatusUndefined']});
    }
    else if('ListRemoveDisabled' == b) {                                        // remove disabled list
      if (undefined !=       (b = a.a[5])
      && 'string'   == typeof(c = a.a[6])
      && 'string'   == typeof(d = a.a[7])
      &&  undefined !=       (e = a.a[8])) {
        if(e > UpdateCounter) {
          UpdateCounter = e;
          chrome.storage.local.set({Lists: b});
        }
        chrome.storage.local.remove(d + c);
      }
    }
    else if('ListRemoveEnabled' == b) {                                         // remove enabled list
      if(undefined !=       (b = a.a[5])
      && 'string'  == typeof(c = a.a[6])
      && 'string'  == typeof(d = a.a[7])
      && undefined !=       (e = a.a[8])
      && undefined !=       (f = a.a[9])) {
        if (e > UpdateCounter) {
          UpdateCounter = e;
          Lists = b;
          ListsStatus = f;
          chrome.storage.local.remove(d + c, function() {
            update();
          });
        }
        else if(!window.Update)
          chrome.runtime.sendMessage({a:['ListsStatusUndefined']});
      }
    }
    else if ('LogConsole' == b) {                                               // log blocked or redirected requests in console
      if ('string' == typeof(b = a.a[5]) && 'boolean' == typeof(c = a.a[6]))
        if (c) {
          if ('Block' == b) {
            if (!LogBlock)
              chrome.storage.local.set({LogBlock: 1}, function() {
                LogBlock = 1;
              });
          }
          else if('HTTPS' == b)
            if (!LogHTTPS)
              chrome.storage.local.set({LogHTTPS: 1}, function() {
                LogHTTPS = 1;
              });
        }
        else {
          if ('Block' == b) {
            if (LogBlock)
              chrome.storage.local.remove('LogBlock', function() {
                LogBlock = 0;
              });
          }
          else if ('HTTPS' == b)
            if (LogHTTPS)
              chrome.storage.local.remove('LogHTTPS', function() {
                LogHTTPS = 0;
              });
        }
    }
    else if ('SiteSpecificFacebookTimelineDisable' == b)                        // site specific: disable facebook timeline filter
      chrome.storage.local.set({FacebookTimelineTest: 0}, function() {
        FacebookTimelineTest = 0;
        FacebookTimeline = undefined;
      });
    else if ('SiteSpecificFacebookTimelineEnable' == b)                         // site specific: enable facebook timeline filter
      SiteSpecificScript('FacebookTimeline'),
      chrome.storage.local.remove('FacebookTimelineTest', function() {
        FacebookTimelineTest = 1;
      });
    else if ('SiteSpecificYouTubeAnnotationsDisable' == b)                      // site specific: disable YouTube Annotations hiding
      chrome.storage.local.remove('YouTubeAnnotationsTest', function() {
        YouTubeAnnotationsTest = 0;
        YouTubeAnnotations1 = YouTubeAnnotations2 = '';
        chrome.windows.getAll({populate: true}, function(a) {
          a.forEach(function(a) {
            a.tabs.forEach(function(a) {
              var b = a.id;
              if (0 <= b)
                chrome.webNavigation.getAllFrames({tabId: b}, function(a) {
                  for (var c = a.length, d = 0, e, f, g, h, i, j; d < c; ++d) {
                    e = (f = a[d]).url;
                    g = 0 > (g = (h = e.slice(e.indexOf('://') + 3)).indexOf('#')) ? h : h.slice(0, g);
                    h = g.indexOf('/');
                    i = g.indexOf(':');
                    j = g.slice(0, 0 > i ? 0 <= h ? h : g.length : i < h ? i : 0 < h ? h : i);
                    if ('www.youtube.com' == j || 'gaming.youtube.com' == j || 'www.youtube-nocookie.com' == j)
                      chrome.tabs.executeScript(
                        b,
                        {
                          code:
                            'var a = document.getElementsByTagName("html")[0];'+
                            'a && a.dispatchEvent(new CustomEvent("' + Random2 + '"));',
                          frameId: f.frameId,
                          runAt: 'document_start'
                        },
                        function() {
                          if (chrome.runtime.lastError)
                            return;
                        }
                      );
                  }
                });
            });
          });
        });
      });
    else if ('SiteSpecificYouTubeAnnotationsEnable' == b) {                     // site specific: enable YouTube Annotations hiding
      SiteSpecificScript('YouTubeAnnotations');
      chrome.storage.local.set({YouTubeAnnotationsTest: 1}, function() {
        YouTubeAnnotationsTest = 1;
        chrome.windows.getAll({populate: true}, function(a) {
          a.forEach(function(a) {
            a.tabs.forEach(function(a) {
              var b = a.id;
              if (0 <= b)
                chrome.webNavigation.getAllFrames({tabId: b}, function(a) {
                  for(var c = a.length, d = 0, e, f, g, h, i, j; d < c; ++d) {
                    e = (f = a[d]).url;
                    g = 0 > (g = (h = e.slice(e.indexOf('://') + 3)).indexOf('#')) ? h : h.slice(0, g);
                    h = g.indexOf('/');
                    i = g.indexOf(':');
                    j = g.slice(0, 0 > i ? 0 <= h ? h : g.length : i < h ? i : 0 < h ? h : i);
                    if ('www.youtube.com' == j || 'gaming.youtube.com' == j|| 'www.youtube-nocookie.com' == j)
                      chrome.tabs.executeScript(
                        b,
                        {
                          code:
                            'var a = document.getElementsByTagName("html")[0], b, c, d;'+
                            'if (a) {'+
                              'b = 1;'+
                              'c = function() {'+
                                'b = 0;'+
                              '};'+
                              'a.addEventListener("' + Random3 + '", c);'+
                              'a.dispatchEvent(new CustomEvent("' + Random1 + '"));'+
                              'a.removeEventListener("' + Random3 + '", c);'+
                              'if (b) {'+
                                'function YTObserverXFunction() {'+
                                   YouTubeAnnotations2+
                                '}'+
                                'YTObserverX = new MutationObserver(YTObserverXFunction);'+
                                'YTObserverX.observe(a, {attributes:true, childList:true, subtree:true});'+
                                YouTubeAnnotations1+
                              '}'+
                            '}',
                          frameId: f.frameId,
                          runAt: 'document_start'
                        },
                        function() {
                          if (chrome.runtime.lastError)
                            return;
                        }
                      );
                  }
                });
            });
          });
        });
      });
    }
    else if ('SmoothRemove' == b)                                               // remove Smooth
      chrome.storage.local.remove('Smooth', function() {
        Smooth = undefined;
      });
    else if ('SmoothSet' == b)                                                  // set Smooth to true
      chrome.storage.local.set({Smooth: true}, function() {
        Smooth = true;
      });
    else if('UpdateLists' == b) {                                               // update lists
      if (undefined != (b = a.a[5])
      &&  undefined != (c = a.a[6])
      &&  undefined != (d = a.a[7]))
        if (d > UpdateCounter) {
          UpdateCounter = d;
          Lists = b;
          ListsStatus = c;
          update(a.a[8] ? true : false);
        }
        else if(!window.Update)
          chrome.runtime.sendMessage({a:['ListsStatusUndefined']});
    }
    else if('Whitelist' == b) {                                                 // whitelist: add or remove host
      if ('string' == typeof(b = a.a[5]) && 'string' == typeof(c = a.a[6]) && 'string' == typeof(d = a.a[7]))
        chrome.storage.local.set({Whitelist: (Whitelist = b)}),
        chrome.windows.getAll({populate: true}, function(a) {
          a.forEach(function(a) {
            a.tabs.forEach(function(a) {
              let tabId = a.id;
              (b = Hosts2[tabId]) && c == b && chrome.browserAction.setIcon({path: d, tabId: tabId}, function() {
                  if (chrome.runtime.lastError)
                    return;
              });
            });
          });
        });
    }
}
chrome.runtime.onMessage.addListener(Message);
function LogReplace (a) {
  return a.replace(/\(\.\+\|\)/g, '*').replace(/\[\^a-z0-9A-Z-\._%\]/g, '^').replace(/\\\./g, '.').replace(/\\\?/g, '?');
}
function FO(GenericBlock, HostInitiator, Options, Popup, TP, Type) {
  var a = Options.indexOf('d'), b = Options.indexOf('D'), c, d, e = 0, f = 0, g;
  if (0 <= a)
    c = Options.slice(0, a),
    d = 0 < b ? b : Options.length;
  else if (0 <= b)
    c = Options.slice(0, b);
  else
    c = Options;
  if ((0 > c.indexOf('t') || ((TP || 0 <= c.indexOf('T')) && (e = 1)))          // third-party
  && (0 > c.indexOf('T') || (!TP && (e = 1)))                                   // ~third-party
  && ((0 > c.indexOf('s') && 0 > c.indexOf('i') && 0 > c.indexOf('o') && 0 > c.indexOf('x') && 0 > c.indexOf('l') && 0 > c.indexOf('y') && 0 > c.indexOf('j') && 0 > c.indexOf('m') && 0 > c.indexOf('f') && 0 > c.indexOf('k') && 0 > c.indexOf('q') && 0 > c.indexOf('w') && 0 > c.indexOf('r') && 0 > c.indexOf('u')) || (('script' == Type && 0 <= c.indexOf('s')) || ('image' == Type && 0 <= c.indexOf('i')) || ('object' == Type && 0 <= c.indexOf('o')) || ('xmlhttprequest' == Type && 0 <= c.indexOf('x')) || ('sub_frame' == Type && 0 <= c.indexOf('l')) || ('stylesheet' == Type && 0 <= c.indexOf('y')) || ('other' == Type && 0 <= c.indexOf('j')) || ('media' == Type && 0 <= c.indexOf('m')) || ('font' == Type && 0 <= c.indexOf('f')) || ('ping' == Type && 0 <= c.indexOf('k')) || ('websocket' == Type && 0 <= c.indexOf('q')) || ('webrtc' == Type && 0 <= c.indexOf('w')) || ('csp_report' == Type && 0 <= c.indexOf('r')) || ('main_frame' == Type && 0 <= c.indexOf('u'))) && (e = 1) && (f = 1))// type
  && (f || (0 > c.indexOf('S') && 0 > c.indexOf('I') && 0 > c.indexOf('O') && 0 > c.indexOf('X') && 0 > c.indexOf('L') && 0 > c.indexOf('Y') && 0 > c.indexOf('J') && 0 > c.indexOf('M') && 0 > c.indexOf('F') && 0 > c.indexOf('K') && 0 > c.indexOf('Q') && 0 > c.indexOf('W') && 0 > c.indexOf('R') && 0 > c.indexOf('U')) || (('script' != Type && 0 <= c.indexOf('S')) || ('image' != Type && 0 <= c.indexOf('I')) || ('object' != Type && 0 <= c.indexOf('O')) || ('xmlhttprequest' != Type && 0 <= c.indexOf('X')) || ('sub_frame' != Type && 0 <= c.indexOf('L')) || ('stylesheet' != Type && 0 <= c.indexOf('Y')) || ('other' != Type && 0 <= c.indexOf('J')) || ('media' != Type && 0 <= c.indexOf('M')) || ('font' != Type && 0 <= c.indexOf('F')) || ('ping' != Type && 0 <= c.indexOf('K')) || ('websocket' != Type && 0 <= c.indexOf('Q')) || ('webrtc' != Type && 0 <= c.indexOf('W')) || ('csp_report' != Type && 0 <= c.indexOf('R')) || ('main_frame' != Type && 0 <= c.indexOf('U'))) && (e = 1))// ~type
  && ((0 > (g = c.indexOf('p')) && !Popup) || (0 <= g && Popup && (e = 1)))) {  // popup
    GenericBlock && (e = 0);

    /* domain */

    f = 0;
    if (0 > a)
      f = 1;
    else if (HostInitiator)
      for (c = 0; ; ) {
        if (0 <= ('|' + Options.substring(a + 1, d) + '|').indexOf('|' + HostInitiator.substring(c) + '|')) {
          e = f = 1;
          break;
        }
        if (0 > (g = HostInitiator.indexOf('.', c)))
          break;
        c = g + 1;
      }

    /* ~domain */

    g = 0;
    if (0 > b)
      g = 1;
    else if (HostInitiator)
      for (a = 0; ; ) {
        if (0 <= ('|' + Options.substring(b + 1) + '|').indexOf('|' + HostInitiator.substring(a) + '|'))
          break;
        if (0 > (c = HostInitiator.indexOf('.', a))) {
          e = g = 1;
          break;
        }
        a = c + 1;
      }

    return e && f && g;
  }
  return 0;
}
function SpecialCharacters(Beginning, End, Path, SC) {
  var a = Beginning ? 1 : 0, b = 0, c = 0, d, e, f, g, h;
  if (Beginning)
    if ('*' == Beginning)
      a = 1;
    else
      if (0 <= (b = Path.indexOf(Beginning)))
        a = 0,
        b++;
      else
        return 0;
  else
    a = 0;
  for ( ; ; ) {
    d = a ? 0 : SC.indexOf('*', b);
    e = SC.indexOf('^', b);
    if (0 > d && 0 > e)
      if (End)
        if (Path.substring(c) == SC.substring(b))
          return 1;
        else
          return 0;
      else if (0 == Path.indexOf(SC.substring(b), c))
        return 1;
      else
        return 0;
    else if (0 <= d && (0 > e || d <= e)) {
      if (0 == Path.indexOf(SC.substring(b, b + d), c)) {
        e = SC.indexOf('*', (a ? b : ++b) + d);
        f = SC.indexOf('^', b + d);
        if(0 <= (g = 0 <= e ? (e < f || 0 > f) ? e : 0 <= f ? f : -1 : 0 <= f ? f : -1))
          if (0 <= (h = Path.indexOf(SC.substring(b + d, b + d + g), c + d)))
            b += (g = SC.substring(b + d, b + d + g).length),
            c += h + g;
          else
            return 0;
        else if (0 <= (e = Path.indexOf(SC.substring(b + d), c + d)))
          return (End ? SC.substring(b + d) == Path.substring(c + d + e) ? 1 : 0 : 1);
        else
          return 0;
      }
      else
        return 0;
    }
    else
      if (0 == Path.indexOf(SC.substring(b, b + e), c) && 0 > 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-._%'.indexOf(Path.substring(c + e, c + e + 1)))
        b += e + 1,
        c += e + 1;
      else
        return 0;
    a = 0;
  }
}
function CheckURLs(Check, GenericBlock, HostPart, HostInitiator, Path, Path2, Popup, Protocol, TP, Type, W) {
  var a, b, B = 0, c, d, e, E;
  for ( ; ; ) {
    if (0 <= (a = Check.indexOf(' ' + HostPart + '^'))) {
      Check = Check.substring(a + HostPart.length + 2);
      a = Check.indexOf(' ');
      b = Check.substring(1, a);
      c = Check[0];
      if ('1' == c || '3' == c || '5' == c || '7' == c || '9' == c)
        d = b.substring((e = b.indexOf('$')) + 1),
        b = b.substring(0, e),
        e = 'a' == d[0] ? Path : Path2;
      else if ('$' == c)
        d = b.substring(1),
        e = 'a' == d[0] ? Path : Path2;
      if ('0' == c) {
        if (!GenericBlock && !Popup && 1 == Path2.indexOf(b)) {
          LogBlock && !W && (E = ('' == Protocol ? '||' : '|' + Protocol + '://') + HostPart + '/' + b);
          B = 1;
          break;
        }
      }
      else if ('1' == c) {
        if (1 == e.indexOf(b) && ('a' == d || FO(GenericBlock, HostInitiator, d, Popup, TP, Type))) {
          LogBlock && !W && (E = ('' == Protocol ? '||' : '|' + Protocol + '://') + HostPart + '/' + b + '$' + FOLog(d));
          B = 1;
          break;
        }
      }
      else if ('2' == c) {
        if (!GenericBlock && !Popup && (b = '/' + b) == Path2) {
          LogBlock && !W && (E = ('' == Protocol ? '||' : '|' + Protocol + '://') + HostPart + b + '|');
          B = 1;
          break;
        }
      }
      else if ('3' == c) {
        if ((b = '/' + b) == e && ('a' == d || FO(GenericBlock, HostInitiator, d, Popup, TP, Type))) {
          LogBlock && !W && (E = ('' == Protocol ? '||' : '|' + Protocol + '://') + HostPart + b + '|$' + FOLog(d));
          B = 1;
          break;
        }
      }
      else if ('4' == c) {
        if (!GenericBlock && !Popup && SpecialCharacters('', 0, Path2, b)) {
          LogBlock && !W && (E = ('' == Protocol ? '||' : '|' + Protocol + '://') + HostPart + b);
          B = 1;
          break;
        }
      }
      else if ('5' == c) {
        if (SpecialCharacters('', 0, e, b) && ('a' == d || FO(GenericBlock, HostInitiator, d, Popup, TP, Type))) {
          LogBlock && !W && (E = ('' == Protocol ? '||' : '|' + Protocol + '://') + HostPart + b + '$' + FOLog(d));
          B = 1;
          break;
        }
      }
      else if ('6' == c) {
        if (!GenericBlock && !Popup && SpecialCharacters('', 1, Path2, b)) {
          LogBlock && !W && (E = ('' == Protocol ? '||' : '|' + Protocol + '://') + HostPart + b + '|');
          B = 1;
          break;
        }
      }
      else if ('7' == c) {
        if (SpecialCharacters('', 1, e, b) && ('a' == d || FO(GenericBlock, HostInitiator, d, Popup, TP, Type))) {
          LogBlock && !W && (E = ('' == Protocol ? '||' : '|' + Protocol + '://') + HostPart + b + '|$' + FOLog(d));
          B = 1;
          break;
        }
      }
      else if ('8' == c) {
        if (!GenericBlock && !Popup && 1 == Path2.search(b)) {
          LogBlock && !W && (E = ('' == Protocol ? '||' : '|' + Protocol + '://') + HostPart + '/' + LogReplace('$' == b.slice(-1) ? b.slice(0, -1) + '|' : b));
          B = 1;
          break;
        }
      }
      else if ('9' == c) {
        if (1 == e.search(b) && ('a' == d || FO(GenericBlock, HostInitiator, d, Popup, TP, Type))) {
          LogBlock && !W && (E = ('' == Protocol ? '||' : '|' + Protocol + '://') + HostPart + '/' + LogReplace('$' == b.slice(-1) ? b.slice(0, -1) + '|' : b) + '$' + FOLog(d));
          B = 1;
          break;
        }
      }
      else if ('$' == c) {
        if (!Popup && ('a' == d || FO(GenericBlock, HostInitiator, d, Popup, TP, Type))) {
          LogBlock && !W && (E = '|' + Protocol + '://' + HostPart + '^$' + FOLog(d));
          B = 1;
          break;
        }
      }
      else if (!Popup) {
        if (!GenericBlock) {
          LogBlock && !W && (E = '|' + Protocol + '://' + HostPart + '^');
          B = 1;
          break;
        }
      }
      Check = Check.substring(a);
    }
    else
      break;
    if (B)
      break;
  }
  return [B, E];
}
function CheckDomains(GenericBlock, Host, HostInitiator, Path, Path2, Popup, Protocol, TP, Type, W) {
  var a = 1, b, c, d, e, f, g, h, i, j, k, l, m, n;
  for ( ; ; ) {
    if (!GenericBlock && !Popup && 0 <= (!W ? BlockDomains : WhiteDomains).indexOf(' ' + Host + ' ')) {
      if (!W)
        return [1, '||' + Host + '^'];
      return 2;
    }
    else if (!GenericBlock && TP && !Popup && 0 <= (!W ? BlockDomainsTP : WhiteDomainsTP).indexOf(' ' + Host + ' ')) {
      if (!W)
        return [1, '||' + Host + '^$third-party'];
      return 2;
    }
    else {
      for (b = !W ? BlockDomainsF : WhiteDomainsF, c = 0; ; )
        if (0 <= (d = b.substring(c).indexOf(' ' + Host + '^'))) {
          c += d + Host.length + 2;
          e = b.substring(c, c + b.substring(c).indexOf(' '));
          if (FO(GenericBlock, HostInitiator, e, Popup, TP, Type)) {
            if (!W)
              return [1, LogBlock ? '||' + Host + '^$' + FOLog(e) : undefined];
            return 2;
          }
        }
        else
          break;
      if ((b = CheckURLs((!W ? BlockURLs : WhiteURLs), GenericBlock, Host, HostInitiator, Path, Path2, Popup, '', TP, Type, W))[0]) {
        if (!W)
          return [1, LogBlock ? b[1] : undefined];
        return 2;
      }
      else {
        if (b = (c = (d = (!W ? Regexp : RegexpW)[0])[0])[e = Host[0]])
          for (f = b.length - 1; 0 < f; f -= 2) {
            if (!(g = b[f]) || FO(GenericBlock, HostInitiator, g, Popup, TP, Type)) {
              if (!g && Popup)
                continue;
              for (h = b[f - 1], i = h.length - 1, j = g && 'a' == g[0] ? Host + Path : Host + Path2; 0 <= i; i--)
                if (SpecialCharacters(e, 0, j, (k = h[i]))) {
                  if (!W)
                    return [1, LogBlock ? '||' + e + k + (g ? '$' + FOLog(g) : '') : undefined];
                  return 2;
                }
            }
          }
        if (b = c['*'])
          for (c = b.length - 1; 0 < c; c -= 2)
            if (!(f = b[c]) || FO(GenericBlock, HostInitiator, f, Popup, TP, Type)) {
              if (!g && Popup)
                continue;
              for (g = b[c - 1], h = g.length - 1, i = f && 'a' == f[0] ? Host + Path : Host + Path2; 0 <= h; h--)
                if (SpecialCharacters('*', 0, i, (j = g[h]))) {
                  if (!W)
                    return [1, LogBlock ? '||' + '*' + LogReplace(j) + (f ? '$' + FOLog(f) : '') : undefined];
                  return 2;
                }
            }
        if (b = (c = (f = (!W ? Regexp : RegexpW)[1])[0])[e])
          for (g = b.length - 2; 0 < g; g -= 3)
            if (!(h = b[g]) || FO(GenericBlock, HostInitiator, h, Popup, TP, Type)) {
              if (!h && Popup)
                continue;
              for (i = b[g - 1], j = i.length - 1, k = h && 'a' == h[0] ? Host + Path : Host + Path2, l = b[g + 1]; 0 <= j; j--)
                if ((!(m = l[j]) || 0 <= k.indexOf(m)) && 0 == k.search(e + (m = i[j]))) {
                  if (!W)
                    return [1, LogBlock ? '||' + e + LogReplace(m) + (h ? '$' + FOLog(h) : '') : undefined];
                  return 2;
                }
            }
        if (b = c['*'])
          for (c = b.length - 2; 0 < c; c -= 3)
            if (!(g = b[c]) || FO(GenericBlock, HostInitiator, g, Popup, TP, Type)) {
              if (!g && Popup)
                continue;
              for (h = b[c - 1], i = h.length - 1, j = g && 'a' == g[0] ? Host + Path : Host + Path2, k = b[c + 1]; 0 <= i; i--)
                if ((!(l = k[i]) || 0 <= j.indexOf(l)) && 0 <= j.search(l = h[i])) {
                  if (!W)
                    return [1, LogBlock ? '||' + '*' + LogReplace(l) + (g ? '$' + FOLog(g) : '') : undefined];
                  return 2;
                }
            }
        if (a) {
          for (!W ? (b = BlockNoDomains, c = BlockNoDomainsL) : (b = WhiteNoDomains, c = WhiteNoDomainsL); 0 <= c; c--)
            if (FO(GenericBlock, HostInitiator, (g = b[c]), Popup, TP, Type)) {
              if (!W)
                return [1, LogBlock ? '$' + FOLog(g) : undefined];
              return 2;
            }
          if (b = d[1][Protocol]) {
            if (c = b[''])
              for (d = c.length - 1; 0 <= d; d--)
                if (!(g = c[d]) || FO(GenericBlock, HostInitiator, g, Popup, TP, Type)) {
                  if (!g && Popup)
                    continue;
                  if (!W)
                    return [1, LogBlock ? '|' + Protocol + '://' + (g ? '$' + FOLog(g) : '') : undefined];
                  return 2;
                }
            if (c = b[e]) {
              for (d = c.length - 1; 0 < d; d -= 2)
                if (!(g = c[d]) || FO(GenericBlock, HostInitiator, g, Popup, TP, Type)) {
                  if (!g && Popup)
                    continue;
                  for (h = c[d - 1], i = h.length - 1, j = g && 'a' == g[0] ? Host + Path : Host + Path2; 0 <= i; i--)
                    if (SpecialCharacters(e, 0, j, (k = h[i]))) {
                      if (!W)
                        return [1, LogBlock ? '|' + Protocol + '://' + e + k + (g ? '$' + FOLog(g) : '') : undefined];
                      return 2;
                    }
                }
              if (b = b['*'])
                for (c = b.length - 1; 0 < c; c -= 2)
                  if (!(d = b[c]) || FO(GenericBlock, HostInitiator, d, Popup, TP, Type)) {
                    if (!d && Popup)
                      continue;
                    for (g = b[c - 1], h = g.length - 1, i = d && 'a' == d[0] ? Host + Path : Host + Path2; 0 <= h; h--)
                      if (SpecialCharacters('*', 0, i, (j = g[h]))) {
                        if (!W)
                          return [1, LogBlock ? '|' + Protocol + '://*' + LogReplace(j) + (d ? '$' + FOLog(d) : '') : undefined];
                        return 2;
                      }
                  }
            }
          }
        }
        if (b = f[1][Protocol]) {
          if (c = b[e])
            for (d = c.length - 2; 0 < d; d -= 3)
              if (!(f = c[d]) || FO(GenericBlock, HostInitiator, f, Popup, TP, Type)) {
                if (!g && Popup)
                  continue;
                for (g = c[d - 1], h = g.length - 1, i = f && 'a' == f[0] ? Host + Path : Host + Path2, j = c[d + 1]; 0 <= h; h--)
                  if ((!(k = j[h]) || 0 <= i.indexOf(k)) && 0 == i.search(e + (k = g[h]))) {
                    if (!W)
                      return [1, LogBlock ? '|' + Protocol + '://' + e + LogReplace(k) + (f ? '$' + FOLog(f) : '') : undefined];
                    return 2;
                  }
              }
          if (b = b['*'])
            for (c = b.length - 2; 0 < c; c -= 3)
              if (!(d = b[c]) || FO(GenericBlock, HostInitiator, d, Popup, TP, Type)) {
                if (!d && Popup)
                  continue;
                for (e = b[c - 1], f = e.length - 1, g = d && 'a' == d[0] ? Host + Path : Host + Path2, h = b[c + 1]; 0 <= f; f--)
                  if ((!(i = h[f]) || 0 <= g.indexOf(i)) && 0 <= g.search(i = e[f])) {
                    if (!W)
                      return [1, LogBlock ? '|' + Protocol + '://*' + LogReplace(i) + (d ? '$' + FOLog(d) : '') : undefined];
                    return 2;
                  }
              }
        }
      }
    }
    if (0 <= (b = Host.indexOf('.')))
      Host = Host.substring(b + 1),
      a = 0;
    else
      break;
  }
  if ('https' == Protocol) {
    if ((a = CheckURLs((!W ? BlockHTTPSURLs : WhiteHTTPSURLs), GenericBlock, HostInitiator, HostInitiator, Path, Path2, Popup, 'https', TP, Type, W))[0]) {
      if (!W)
        return [1, LogBlock ? a[1] : undefined];
      return 2;
    }
  }
  else if ('http' == Protocol) {
    if ((a = CheckURLs((!W ? BlockHTTPURLs : WhiteHTTPURLs), GenericBlock, HostInitiator, HostInitiator, Path, Path2, Popup, 'http', TP, Type, W))[0]) {
      if (!W)
        return [1, LogBlock ? a[1] : undefined];
      return 2;
    }
  }
  else if ('wss' == Protocol) {
    if ((a = CheckURLs((!W ? BlockWSSURLs : WhiteWSSURLs), GenericBlock, HostInitiator, HostInitiator, Path, Path2, Popup, 'wss', TP, Type, W))[0]) {
      if (!W)
        return [1, LogBlock ? a[1] : undefined];
      return 2;
    }
  }
  else if ('ws' == Protocol) {
    if ((a = CheckURLs((!W ? BlockWSURLs : WhiteWSURLs), GenericBlock, HostInitiator, HostInitiator, Path, Path2, Popup, 'ws', TP, Type, W))[0]) {
      if (!W)
        return [1, LogBlock ? a[1] : undefined];
      return 2;
    }
  }
  else if (a = !W ? BlockProtocolsURLs[Protocol] : WhiteProtocolsURLs[Protocol])
    if ((a = CheckURLs(a, GenericBlock, HostInitiator, HostInitiator, Path, Path2, Popup, Protocol, TP, Type, W))[0]) {
      if (!W)
        return [1, LogBlock ? a[1] : undefined];
      return 2;
    }
  return !W ? [0, undefined] : 1;
}
function CheckPaths(GenericBlock, HostInitiator, Popup, TP, Type, TypeId, URL, URL2, W) {
  var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s;
  if (!GenericBlock && !Popup) {
    for (!W ? (a = Paths, b = PathsL) : (a = PathsW, b = PathsWL); 0 <= b; b--)
      if (0 <= URL2.indexOf(c = a[b]))
        return [1, c];
    for (!W ? (a = PathsShortcuts, b = PathsShortcutsL, c = PathsShortcutsValues) : (a = PathsWShortcuts, b = PathsWShortcutsL, c = PathsWShortcutsValues); 0 <= b; b--)
      if (0 <= URL2.indexOf(a[b]))
        for (d = c[b], e = d.length - 1; 0 <= e; e--)
          if (0 <= URL2.indexOf(f = d[e]))
            return [1, f];
    for (!W ? (a = PathsENoFO, b = PathsENoFOL) : (a = PathsWENoFO, b = PathsWENoFOL); 0 <= b; b--)
      if (URL2.endsWith(c = a[b]))
        return [1, c + '|'];
    if (0 <= URL.indexOf('?')) {
      for (!W ? (a = Paths0, b = Paths0L) : (a = PathsW0, b = PathsW0L); 0 <= b; b--)
        if (0 <= URL2.indexOf(c = a[b]))
          return [1, c];
      for (!W ? (a = Paths0Shortcuts, b = Paths0ShortcutsL, c = Paths0ShortcutsValues) : (a = PathsW0Shortcuts, b = PathsW0ShortcutsL, c = PathsW0ShortcutsValues); 0 <= b; b--)
        if (0 <= URL2.indexOf(a[b]))
          for (d = c[b], e = d.length - 1; 0 <= e; e--)
            if (0 <= URL2.indexOf(f = d[e]))
              return [1, f];
      for (!W ? (a = PathsSNoFO0, b = PathsSNoFO0L) : (a = PathsWSNoFO0, b = PathsWSNoFO0L); 0 <= b; b--)
        if (SpecialCharacters('*', 0, URL2, (c = a[b])))
          return [1, c];
    }
    if (0 <= URL.indexOf('&')) {
      for (!W ? (a = Paths1, b = Paths1L) : (a = PathsW1, b = PathsW1L); 0 <= b; b--)
        if (0 <= URL2.indexOf(c = a[b]))
          return [1, c];
      for (!W ? (a = Paths1Shortcuts, b = Paths1ShortcutsL, c = Paths1ShortcutsValues) : (a = PathsW1Shortcuts, b = PathsW1ShortcutsL, c = PathsW1ShortcutsValues); 0 <= b; b--)
        if (0 <= URL2.indexOf(a[b]))
          for (d = c[b], e = d.length - 1; 0 <= e; e--)
            if (0 <= URL2.indexOf(f = d[e]))
              return [1, f];
      for (!W ? (a = PathsSNoFO1, b = PathsSNoFO1L) : (a = PathsWSNoFO1, b = PathsWSNoFO1L); 0 <= b; b--)
        if (SpecialCharacters('*', 0, URL2, (c = a[b])))
          return [1, c];
    }
    if (0 <= URL.indexOf('_')) {
      for (!W ? (a = Paths2, b = Paths2L) : (a = PathsW2, b = PathsW2L); 0 <= b; b--)
        if (0 <= URL2.indexOf(c = a[b]))
          return [1, c];
      for (!W ? (a = Paths2Shortcuts, b = Paths2ShortcutsL, c = Paths2ShortcutsValues) : (a = PathsW2Shortcuts, b = PathsW2ShortcutsL, c = PathsW2ShortcutsValues); 0 <= b; b--)
        if (0 <= URL2.indexOf(a[b]))
          for (d = c[b], e = d.length - 1; 0 <= e; e--)
            if (0 <= URL2.indexOf(f = d[e]))
              return [1, f];
      for (!W ? (a = PathsSNoFO2, b = PathsSNoFO2L) : (a = PathsWSNoFO2, b = PathsWSNoFO2L); 0 <= b; b--)
        if (SpecialCharacters('*', 0, URL2, (c = a[b])))
          return [1, c];
    }
    if (0 <= URL.indexOf('-')) {
      for (!W ? (a = Paths3, b = Paths3L) : (a = PathsW3, b = PathsW3L); 0 <= b; b--)
        if (0 <= URL2.indexOf(c = a[b]))
          return [1, c];
      for (!W ? (a = Paths3Shortcuts, b = Paths3ShortcutsL, c = Paths3ShortcutsValues) : (a = PathsW3Shortcuts, b = PathsW3ShortcutsL, c = PathsW3ShortcutsValues); 0 <= b; b--)
        if (0 <= URL2.indexOf(a[b]))
          for (d = c[b], e = d.length - 1; 0 <= e; e--)
            if (0 <= URL2.indexOf(f = d[e]))
              return [1, f];
      for (!W ? (a = PathsSNoFO3, b = PathsSNoFO3L) : (a = PathsWSNoFO3, b = PathsWSNoFO3L); 0 <= b; b--)
        if (SpecialCharacters('*', 0, URL2, (c = a[b])))
          return [1, c];
    }
    for (!W ? (a = PathsSNoFO, b = PathsSNoFOL) : (a = PathsWSNoFO, b = PathsWSNoFOL); 0 <= b; b--)
      if (SpecialCharacters('*', 0, URL2, (c = a[b])))
        return [1, c];
  }
  if (!W) {
    a = MapPathsF;
    b = a[4];
    c = a[5];
    d = PathsF;
    e = 0;
    if (TP)
      if (Popup)
        f = 2,
        g = MapPathsF2L;
      else
        f = 0,
        g = MapPathsF0L;
    else
      if (Popup)
        f = 3,
        g = MapPathsF3L;
      else
        f = 1,
        g = MapPathsF1L;
  }
  else {
    a = MapPathsWF;
    b = a[4];
    c = a[5];
    d = PathsWF;
    e = 1;
    if (TP)
      if (Popup)
        f = 2,
        g = MapPathsWF2L;
      else
        f = 0,
        g = MapPathsWF0L;
    else
      if (Popup)
        f = 3,
        g = MapPathsWF3L;
      else
        f = 1,
        g = MapPathsWF1L;
  }
  if (!GenericBlock) {
    for (h = a[f]; 0 <= g; g--)
      for (j = 0 <= b.indexOf(' ' + (i = h[g]) + ' ') ? URL : URL2, k = d[i], l = k.length - 1; 0 <= l; l--)
        if (0 <= j.indexOf(m = k[l])) {                                         // third-party can't be reconstructed
          n = 1;
          o = undefined;
          if (HostInitiator && (o = c[i]))
            for (p = 0; ; ) {
              if (0 <= ('|' + o + '|').indexOf('|' + HostInitiator.substring(p) + '|')) {
                n = 0;
                break;
              }
              if (0 > (q = HostInitiator.indexOf('.', p)))
                break;
              p = q + 1;
            }
          if (n)
            return [1, LogBlock && !W ? m + (Popup ? '$popup' + (o ? ',domain=~' + o.replace(/\|/g, '|~') : '') : (o ? '$domain=~' + o.replace(/\|/g, '|~') : '')) : undefined];
        }
    for (g = a[TypeId + f], h = g.length - 1; 0 <= h; h--)
      for (j = 0 <= b.indexOf(' ' + (i = g[h]) + ' ') ? URL : URL2, k = d[i], l = k.length - 1; 0 <= l; l--)
        if (0 <= j.indexOf(m = k[l])) {                                         // third-party can't be reconstructed
          n = 1;
          o = undefined;
          if (HostInitiator && (o = c[i]))
            for (p = 0; ; ) {
              if (0 <= ('|' + o + '|').indexOf('|' + HostInitiator.substring(p) + '|')) {
                n = 0;
                break;
              }
              if (0 > (q = HostInitiator.indexOf('.', p)))
                break;
              p = q + 1;
            }
          if (n)
            return [1, LogBlock && !W ? m + '$' + (Popup ? 'popup' + (o ? ',domain=~' + o.replace(/\|/g, '|~') : '') : (o ? '$domain=~' + o.replace(/\|/g, '|~') : '')) + ',' + Type : undefined];
        }
  }
  if (HostInitiator)
    for (g = 0; ; ) {
      if ((h = Maps[HostInitiator.substring(g)]) && (h = h[e])) {
        if (i = h[f])
          for (j = i.length - 1; 0 <= j; j--)
            for (k = 0 <= b.indexOf(' ' + (l = i[j]) + ' ') ? URL : URL2, m = d[l], n = m.length - 1; 0 <= n; n--)
              if (0 <= k.indexOf(o = m[n])) {                                   // third-party can't be reconstructed
                p = 1;
                q = undefined;
                if (HostInitiator && (q = c[l]))
                  for (r = 0; ; ) {
                    if (0 <= ('|' + q + '|').indexOf('|' + HostInitiator.substring(r) + '|')) {
                      p = 0;
                      break;
                    }
                    if (0 > (s = HostInitiator.indexOf('.', r)))
                      break;
                    r = s + 1;
                  }
                if (p)
                  return [1, LogBlock && !W ? o + (Popup ? '$popup,' : '$') + 'domain=' + HostInitiator.substring(g) + (q ? '|~' + q.replace(/\|/g, '|~') : (q ? '|~' + q.replace(/\|/g, '|~') : '')) : undefined];
              }
        if (i = h[TypeId + f])
          for (j = i.length - 1; 0 <= j; j--)
            for (k = 0 <= b.indexOf(' ' + (l = i[j]) + ' ') ? URL : URL2, m = d[l], n = m.length - 1; 0 <= n; n--)
              if (0 <= k.indexOf(o = m[n])) {                                   // third-party can't be reconstructed
                p = 1;
                q = undefined;
                if (HostInitiator && (q = c[l]))
                  for (r = 0; ; ) {
                    if (0 <= ('|' + q + '|').indexOf('|' + HostInitiator.substring(r) + '|')) {
                      p = 0;
                      break;
                    }
                    if (0 > (s = HostInitiator.indexOf('.', r)))
                      break;
                    r = s + 1;
                  }
                if (p)
                  return [1, LogBlock && !W ? o + '$' + (Popup ? 'popup,' : '$') + Type + 'domain=' + HostInitiator.substring(g) + (q ? '|~' + q.replace(/\|/g, '|~') : (q ? '|~' + q.replace(/\|/g, '|~') : '')) : undefined];
              }
      }
      if (0 > (h = HostInitiator.indexOf('.', g)))
        break;
      g = h + 1;
    }
  for (!W ? (a = PathsE, b = PathsEL) : (a = PathsWE, b = PathsWEL); 0 < b; b -= 2)
    if (FO(GenericBlock, HostInitiator, (c = a[b]), Popup, TP, Type))
      for (d = 'a' == c[0] ? URL : URL2, e = a[b - 1], f = e.length - 1; 0 <= f; f--)
        if (d.endsWith(g = e[f]))
          return LogBlock && !W ? [1, g + '|$' + FOLog(c)] : [1];
  for (!W ? (a = PathsS, b = PathsSL) : (a = PathsWS, b = PathsWSL); 0 < b; b -= 3)
    if (0 <= (c = 'a' == (d = a[b])[0] ? URL : URL2).indexOf(a[b + 1]) && FO(GenericBlock, HostInitiator, d, Popup, TP, Type))
      for (e = a[b + 1], f = a[b - 1], g = f.length - 1; 0 <= g; g--)
        if ((!(h = e[g]) || 0 <= c.indexOf(h)) && SpecialCharacters('*', 0, c, (h = f[g])))
          return LogBlock && !W ? [1, h + '$' + FOLog(d)] : [1];

  for (!W ? (a = PathsP, b = PathsPL) : (a = PathsWP, b = PathsWPL); 0 < b; b -= 2)
    if (!(c = a[b]) || FO(GenericBlock, HostInitiator, c, Popup, TP, Type)) {
      if (!c && Popup)
        continue;
      d = c && 'a' == c[0] ? URL : URL2;
      for (e = a[b - 1], f = e.length - 1; 0 <= f; f--)
        if (0 == d.indexOf(g = e[f]))
          return LogBlock && !W ? [1, '|' + g + (c ? '$' + FOLog(c) : '')] : [1];
    }
  for (!W ? (a = PathsPE, b = PathsPEL) : (a = PathsWPE, b = PathsWPEL); 0 < b; b -= 2)
    if (!(c = a[b]) || FO(GenericBlock, HostInitiator, c, Popup, TP, Type)) {
      if (!c && Popup)
        continue;
      d = c && 'a' == c[0] ? URL : URL2;
      for (e = a[b - 1], f = e.length - 1; 0 <= f; f--)
        if (d == e[f])
          return LogBlock && !W ? [1, '|' + d.slice(0, -1) + (c ? '$' + FOLog(c) : '') + '|'] : [1];
    }
  for (!W ? (a = PathsPS, b = PathsPSL) : (a = PathsWPS, b = PathsWPSL); 0 < b; b -= 3)
    if (!(c = a[b]) || FO(GenericBlock, HostInitiator, c, Popup, TP, Type)) {
      if (!c && Popup)
        continue;
      d = c && 'a' == c[0] ? URL : URL2;
      for (e = a[b + 1], f = a[b - 1], g = f.length - 1; 0 <= g; g--)
        if ((!(h = e[g]) || 0 <= d.indexOf(h)) && SpecialCharacters('', 0, d, (h = f[g])))
          return LogBlock && !W ? [1, '|' + h + (c ? '$' + FOLog(c) : '')] : [1];
    }
  for (!W ? (a = PathsR, b = PathsRL) : (a = PathsWR, b = PathsWRL); 0 < b; b -= 3)
    if (!(c = a[b]) || FO(GenericBlock, HostInitiator, c, Popup, TP, Type)) {
      if (!c && Popup)
        continue;
      d = c && 'a' == c[0] ? URL : URL2;
      for (e = a[b + 1], f = a[b - 1], g = f.length - 1; 0 <= g; g--)
        if ((!(h = e[g]) || 0 <= d.indexOf(h)) && 0 <= d.search(h = f[g]))
          return LogBlock && !W ? [1, ((0 <= h.indexOf('(.+|)') || 0 <= h.indexOf('[^a-z0-9A-Z-._%]')) ? LogReplace(h) : '/' + h + '/') + (c ? '$' + FOLog(c) : '')] : [1];
    }
  for (!W ? (a = PathsPR, b = PathsPRL) : (a = PathsWPR, b = PathsWPRL); 0 < b; b -= 3)
    if (!(c = a[b]) || FO(GenericBlock, HostInitiator, c, Popup, TP, Type)) {
      if (!c && Popup)
        continue;
      d = c && 'a' == c[0] ? URL : URL2;
      for (e = a[b + 1], f = a[b - 1], g = f.length - 1; 0 <= g; g--)
        if ((!(h = e[g]) || 0 <= d.indexOf(h)) && 0 == d.search(h = f[g]))
          return LogBlock && !W ? [1, '|' + ((0 <= h.indexOf('(.+|)') || 0 <= h.indexOf('[^a-z0-9A-Z-._%]')) ? LogReplace(h) : '/' + h + '/') + (c ? '$' + FOLog(c) : '')] : [1];
    }
  return [0];
}
let RegTime = [];
let Time = [];
function BlockNonURL(frameId, PopupOpenerTabIdArray, tabId, Type, TypeId, URL) {
  var a, b, B = 0, c, d, E,
      HostInitiator = (a = HostInitiators[tabId]) && (a = a[frameId]) ? a : 0,
      TP = 'sub_frame' == Type ? 1 : 0,
      URL2 = URL.toLowerCase(),
      GenericBlock = GenericBlockTest ? GenericBlockCheckPaths(URL, URL2) : 0;
  'main_frame' == Type && (URLs[tabId] = URL);
  a = PopupOpenerTabIdArray[0];
  for (b = BlockNoDomainsL; 0 <= b; b--)
    if (FO(GenericBlock, 0, HostInitiator, (c = BlockNoDomains[b]), a, TP, Type)) {
      B = 1;
      LogBlock && (E = '$' + FOLog(c));
      break;
    }
  if (!B && 0 < (c = CheckPaths(GenericBlock, 0, HostInitiator, a, 0, 0, Type, TypeId, URL, URL2, 0))[0])
    B = 1,
    LogBlock && (E = c[1]);
  if (B) {
    for (b = WhiteNoDomainsL; 0 <= b; b--)
      if (FO(0, 0, HostInitiator, WhiteNoDomains[b], a, TP, Type)) {
        B = 2;
        break;
      }
    if (2 > B && !CheckPaths(0, 0, HostInitiator, a, 0, 0, Type, TypeId, URL, URL2, 1)[0])
      RemovedTabs[tabId] = 1,
      chrome.tabs.remove(tabId, function() {
        LogBlock && console.log('%cBlocked: Type=main_frame Filter=' + E + ' \nURL=' + unescape(URL), 'color:#f00');
        if (chrome.runtime.lastError)
          return;
        BadgeIncrease(PopupOpenerTabIdArray[1], 0 > (a = URL.indexOf(':')) ? URL : URL.substring(0, a));
      });
  }
}
function BlockURL(frameId, HostInitiator, parentFrameId, Popup, tabId, Type, URL) {
  var a, b, c, d, e, Host, Path, Protocol, TypeId;
  if (!('webrtc' == Type && (a = URL.match(/:/g)) && 1 < a.length))             // no webrtc
    a = URL.indexOf('://'),
    b = URL.slice(a + 3),
    c = b.indexOf('/'),
    d = b.lastIndexOf(':'),
    (0 > d || d > c) && 0 <= c ? (Host = b.slice(0, c), Path = b.slice(c)) : 0 < d && d < c ? (Host = b.slice(0, d), Path = b.slice(c)) : (Host = b, Path = '/'),
    '.' == Host.slice(-1) && (Host = Host.slice(0, -1)),
    Protocol = URL.slice(0, a);
  else                                                                          // webrtc
    a = URL.slice(0, 0 <= (b = URL.indexOf('?')) ? b : URL.length),
    Host = a.slice((c = a.indexOf(':')) + 1, a.lastIndexOf(':')),
    '[' == Host.substring(0, 1) && ']' == Host.slice(-1) && (Host = Host.slice(1, -1)),//IPv6 address
    Path = 0 <= b ? URL.slice(b + 1) : '',
    Protocol = URL.slice(0, c);
  !HostInitiator && (HostInitiator = Protocol + '://' + Host);
  if (!('webrtc' == Type && (a = HostInitiator.match(/:/g)) && 1 < a.length))   // no webrtc
    if (0 <= (a = HostInitiator.indexOf('://')))
      HostInitiator = HostInitiator.slice(a + 3),
      '.' == HostInitiator.slice(-1) && (HostInitiator = HostInitiator.slice(0, -1));
    else
      HostInitiator = '';
  else                                                                          // webrtc
    a = HostInitiator.slice(0, 0 <= (b = HostInitiator.indexOf('?')) ? b : HostInitiator.length),
    HostInitiator = a.slice((c = a.indexOf(':')) + 1, a.lastIndexOf(':')),
    '[' == HostInitiator.substring(0, 1) && ']' == HostInitiator.slice(-1) && (HostInitiator = HostInitiator.slice(1, -1));//IPv6 address
  if ('sub_frame' == Type || 'main_frame' == Type)
    a = HostInitiators[tabId] || (HostInitiators[tabId] = []),
    a[frameId] = HostInitiator;
  if ('image' == Type)
    TypeId = 14;
  else if ('script' == Type)
    TypeId = 34;
  else if ('stylesheet' == Type)
    TypeId = 38;
  else if ('sub_frame' == Type)
    TypeId = 42;
  else if ('xmlhttprequest' == Type)
    TypeId = 46;
  else if ('object' == Type)
    TypeId = 22;
  else if ('font' == Type)
    TypeId = 10;
  else if ('other' == Type)
    TypeId = 26;
  else if ('media' == Type)
    TypeId = 18;
  else if ('ping' == Type)
    TypeId = 30;
  else if ('webrtc' == Type)
    TypeId = 50;
  else if ('websocket' == Type)
    TypeId = 54;
  else if ('csp_report' == Type)
    TypeId = 6;
  else
    TypeId = -1;
  var Host2,
      Path2 = Path.toLowerCase(),
      URL2 = URL.toLowerCase(),
      B = 0,
      e, f, g, h, i, j, k, l, m, n, o,
      Domain,
      E,
      GenericBlock = 0,
      TH = ' ' + (0 == Popup ? Host : Popup) + ' ',
      TLD,
      TP = 1;

  /* create Domain and TLD */

  if (0 > (a = Host.lastIndexOf('.')))                                          // 0 dots in Host
    Domain = '',
    TLD = Host;
  else if (0 > (b = Host.slice(0, a).lastIndexOf('.')))                         // 1 dot in Host
    if (0 > TLDs.indexOf(' ' + Host + ' '))                                     // 0 dots in TLD 
      Domain = Host.slice(0, a),
      TLD = Host.slice(a + 1),
      Domain + '.' + TLD;
    else                                                                        // 1 dot in TLD
      Domain = '',
      TLD = Host;
  else if (0 <= (c = Host.slice(0, b).lastIndexOf('.')))                        // 3 or more dots in Host
    if (0 > TLDs.indexOf(' ' + Host.slice(c + 1) + ' '))
      if (0 > TLDs.indexOf(' ' + Host.slice(b + 1) + ' '))
        if (0 > Host.slice(0, c).lastIndexOf('.') && !isNaN(Host.replace(/\./g, '')))// IP address
          Domain = Host,
          TLD = '?';
        else                                                                    // 0 dots in TLD
          Domain = Host.slice(b + 1, a),
          TLD = Host.slice(a + 1);
      else                                                                      // 1 dot in TLD
        Domain = Host.slice(c + 1, b),
        TLD = Host.slice(b + 1);
    else if (0 > (a = Host.slice(0, c).lastIndexOf('.')))                       // 2 dots in TLD
      Domain = Host.slice(0, c),
      TLD = Host.slice(c + 1);
    else
      Domain = Host.slice(a + 1, c),
      TLD = Host.slice(c + 1);
  else if (0 > TLDs.indexOf(' ' + Host.slice(b + 1) + ' '))                     // 0 dots in TLD
    if (0 > TLDs.indexOf(' ' + Host + ' '))
      Domain = Host.slice(b + 1, a),
      TLD = Host.slice(a + 1);
    else
      Domain = '',
      TLD = Host;
  else                                                                          // 1 dot in TLD
    if (0 > TLDs.indexOf(' ' + Host + ' '))
      Domain = Host.slice(c + 1, b),
      TLD = Host.slice(b + 1);
    else
      Domain = '',
      TLD = Host;

  /* change TH and TP */

  if (0 <= tabId) {
    (a = Hosts[tabId]) && (TH = ' ' + a + ' ');
    if (Popup)
      1 != Popup && ((b = PopupOpener[tabId]) && (c = Origins[b[1]]) && (d = c[frameId]) && Domain + '.' + TLD == d[0]) && (TP = 0);
    else if ('main_frame' == Type || ((b = Origins[tabId]) && (c = b['sub_frame' == Type ? parentFrameId : frameId]) && Domain + '.' + TLD == c[0]))
      TP = 0;
  }

  /* override TH */

  if (0 <= (a = (TH = TH.slice(1, -1)).lastIndexOf('.')) && 0 <= (b = (c = TH.slice(0, a)).lastIndexOf('.')))// whitelist block
    if (0 <= (c = c.slice(0, b).lastIndexOf('.'))) {
      if (0 <= TLDs.indexOf(' ' + (d = TH.slice(c + 1)) + ' ')) {
        if ('www' == (a = TH.slice(0, c)).slice(0, a.lastIndexOf('.')))
          TH = TH.slice(4);
      }
      else if (0 <= TLDs.indexOf(' ' + TH.slice(b + 1) + ' ') && 'www' == TH.slice(0, c))
        TH = d;
    }
    else if (0 == TH.indexOf('www.'))
      TH = TH.slice(b + 1);

  /* create Host2 */

  if (0 <= (a = (Host2 = Host).lastIndexOf('.')) && 0 <= (b = (c = Host2.slice(0, a)).lastIndexOf('.')))// whitelist block
    if (0 <= (c = c.slice(0, b).lastIndexOf('.'))) {
      if (0 <= TLDs.indexOf(' ' + (d = Host2.slice(c + 1)) + ' ')) {
        if ('www' == (a = Host2.slice(0, c)).slice(0, a.lastIndexOf('.')))
          Host2 = Host2.slice(4);
      }
      else if (0 <= TLDs.indexOf(' ' + Host2.slice(b + 1) + ' ') && 'www' == Host2.slice(0, c))
        Host2 = d;
    }
    else if (0 == Host2.indexOf('www.' ))
      Host2 = Host2.slice(b + 1);

  if (0 <= Whitelist.indexOf(' ' + TH + ' '))
    B = 2;
  else {

    /* GenericBlock */

    if (!GenericBlockNoDomains) {
      a = Host;
      b = 1;
      for ( ; ; ) {
        if (GenericBlockCheckURLs(GenericBlockURLs, a, Path, Path2)) {
          GenericBlock = 1;
          break;
        }
        if (GenericBlockTest) {
          if (c = (d = (e = GenericBlockRegexp[0])[0])[f = a[0]]) {
            for (g = c.length - 1, h = 0; 0 < g; g -= 2) {
              for (i = c[g], j = c[g - 1], k = j.length - 1, l = i && 'a' == i[0] ? a + Path : a + Path2; 0 <= k; k--)
                if (SpecialCharacters(f, 0, l, j[k])) {
                  GenericBlock = h = 1;
                  break;
                }
              if (h)
                break;
            }
            if (GenericBlock)
              break;
          }
          if (c = d['*']) {
            for (d = c.length - 1, g = 0; 0 < d; d -= 2) {
              for (h = c[d], i = c[d - 1], j = i.length - 1, k = h && 'a' == h[0] ? a + Path : a + Path2; 0 <= j; j--)
                if (SpecialCharacters('*', 0, k, i[j])) {
                  GenericBlock = g = 1;
                  break;
                }
              if (g)
                break;
            }
            if (GenericBlock)
              break;
          }
          if (c = (d = (g = GenericBlockRegexp[1])[0])[f]) {
            for (h = c.length - 2, i = 0; 0 < h; h -= 3) {
              for (j = c[h], k = c[h - 1], l = k.length - 1, m = j && 'a' == j[0] ? a + Path : a + Path2, n = c[h + 1]; 0 <= l; l--)
                if ((!(o = n[l]) || 0 <= m.indexOf(o)) && 0 == m.search(f + k[l])) {
                  GenericBlock = i = 1;
                  break;
                }
                if (i)
                  break;
              }
            if (GenericBlock)
              break;
          }
          if (c = d['*']) {
            for (d = c.length - 2, h = 0; 0 < d; d -= 3) {
              for (i = c[d], j = c[d - 1], k = j.length - 1, l = i && 'a' == i[0] ? a + Path : a + Path2, m = c[d + 1]; 0 <= k; k--)
                if ((!(n = m[k]) || 0 <= l.indexOf(n)) && 0 <= l.search(j[k])) {
                  GenericBlock = h = 1;
                  break;
              }
              if (h)
                break;
            }
            if (GenericBlock)
              break;
          }
          if (b)
            if (c = e[1][Protocol]) {
              if (d = c['']) {
                GenericBlock = 1;
                break;
              }
              if (d = c[f]) {
                for (e = d.length - 1, h = 0; 0 < e; e -= 2) {
                  for (i = d[e], j = d[e - 1], k = j.length - 1, l = i && 'a' == i[0] ? a + Path : a + Path2; 0 <= k; k--)
                    if (SpecialCharacters(f, 0, l, j[k])) {
                      GenericBlock = h = 1;
                      break;
                    }
                  if (h)
                    break;
                }
                if (GenericBlock)
                  break;
                if (c = c['*']) {
                  for (d = c.length - 1, e = 0; 0 < d; d -= 2) {
                    for (h = c[d], i = c[d - 1], j = i.length - 1, k = h && 'a' == h[0] ? a + Path : a + Path2; 0 <= j; j--)
                      if (SpecialCharacters('*', 0, k, i[j])) {
                        GenericBlock = e = 1;
                        break;
                      }
                    if (e)
                      break;
                  }
                  if (GenericBlock)
                    break;
                }
              }
            }
          if (c = g[1][Protocol]) {
            if (d = c[f]) {
              for (e = d.length - 2, g = 0; 0 < e; e -= 3) {
                for (h = d[e], i = d[e - 1], j = i.length - 1, k = h && 'a' == h[0] ? a + Path : a + Path2, l = d[e + 1]; 0 <= j; j--)
                  if ((!(m = l[j]) || 0 <= k.indexOf(m)) && 0 == k.search(f + i[j])) {
                    GenericBlock = g = 1;
                    break;
                  }
                if (g)
                  break;
              }
              if (GenericBlock)
                break;
            }
            if (c = c['*']) {
              for (d = c.length - 2, e = 0; 0 < d; d -= 3) {
                for (f = c[d], g = c[d - 1], h = g.length - 1, i = f && 'a' == f[0] ? a + Path : a + Path2, j = d[d + 1]; 0 <= h; h--)
                  if ((!(k = j[h]) || 0 <= i.indexOf(k)) && 0 <= i.search(g[h])) {
                    GenericBlock = e = 1;
                    break;
                  }
                if (e)
                  break;
              }
              if (GenericBlock)
                break;
            }
          }
        }
        if (0 <= (c = a.indexOf('.')))
          a = a.substring(c + 1),
          b = 0;
        else
          break;
      }
      if (!GenericBlock)
        if ('https' == Protocol) {
          if (GenericBlockCheckURLs(GenericBlockHTTPSURLs, Host, Path, Path2))
            GenericBlock = 1;
        }
        else if ('http' == Protocol) {
          if (GenericBlockCheckURLs(GenericBlockHTTPURLs, Host, Path, Path2))
            GenericBlock = 1;
        }
        else if (a = GenericBlockProtocolsURLs[Protocol]) {
          if (GenericBlockCheckURLs(a, Host, Path, Path2))
            GenericBlock = 1;
        }
      if (!GenericBlock && GenericBlockTest && GenericBlockCheckPaths(URL, URL2))
        GenericBlock = 1;
    }
    else
      GenericBlock = 1;

    /* block domains */

    a = CheckDomains(GenericBlock, Host, HostInitiator, Path, Path2, Popup, Protocol, TP, Type, 0);
    B = a[0];
    B && LogBlock && (E = a[1]);

    /* block Paths */

    if (!B)
      a = CheckPaths(GenericBlock, HostInitiator, Popup, TP, Type, TypeId, URL, URL2, 0),
      B = a[0],
      B && LogBlock && (E = a[1]);

    /* whitelist domains */

    if (B) {
      B = CheckDomains(0, Host, HostInitiator, Path, Path2, Popup, Protocol, TP, Type, 1);

      /* whitelist Paths */

      if (1 == B)
        B = 1 > CheckPaths(0, HostInitiator, Popup, TP, Type, TypeId, URL, URL2, 1)[0] ? 1 : 2;
    }
  }
  return [B, Domain, E, Host, Path, Protocol, TH, TLD, TP];
}
function TabsCreated(details) {
  //console.log(details);
  var a, b, c;
  if (a = details.openerTabId) {
    if ((b = Hosts2[a]) && 0 <= Whitelist.indexOf(' ' + b + ' '))
      return;
    'complete' == details.status && '' == details.title && '' == details.url && (c = URLs[a]) && ('https://' == c.slice(0, 8) || 'http://' == c.slice(0, 7)) && (PopupOpener[details.id] = [b || 1, a, 1]);
  }
  else if (PopupWindow[a = details.windowId])
    delete PopupWindow[a],
    PopupTab[details.id] = 1;
}
chrome.tabs.onCreated.addListener(TabsCreated);
function CreatedNavigationTarget(details) {
  //console.log(details);
  var a, b, c, d, openerTabId, tabId, sourceTabId, Type = details.type, URL = details.url;
  undefined == Type && (Type = 'other');
  0 <= (a = URL.indexOf('#')) && (URL = URL.slice(0, a));
  if (PopupTab[tabId = details.tabId])
    delete PopupTab[tabId],
    a = Hosts2[sourceTabId = details.sourceTabId],
    (b = URLs[sourceTabId]) && ('https://' == b.slice(0, 8) || 'http://' == b.slice(0, 7)) && (PopupOpener[tabId] = [a || 1, sourceTabId, 1]);
  if (a = PopupOpener[tabId]) {
    if ((b = FakePopups[openerTabId = a[1]]) && 0 <= (c = b.indexOf(d = ' ' + URL + ' '))) {
      delete PopupOpener[tabId];
      b = b.slice(0, c) + b.slice(c + d.length);
      '' == b ? delete FakePopups[openerTabId] : FakePopups[openerTabId] = b;
      return;
    }
    else if ((b = FakePopupsContextmenu[openerTabId]) && 0 <= b.indexOf(' ' + URL + ' ')) {
      delete PopupOpener[tabId];
      return;
    }
    if (0 > (b = URL.indexOf('://')) || 0 <= URL.slice(0, b).indexOf(':'))
      BlockNonURL(0, a, tabId, (a = Type), ('main_frame' == a ? 9 : 27), URL);
    else
      if (1 == (b = BlockURL(0, '', 0, a[0], tabId, Type, URL))[0] && (RemovedTabs[tabId] = 1))
        chrome.tabs.remove(tabId, function() {
          LogBlock && console.log('%cBlocked: Type=main_frame Filter=' + b[2] + '\nProtocol=' + b[5] + ' Host=' + b[3] + '\nPath=' + unescape(b[4]), 'color:#f00');
          BadgeIncrease(openerTabId, b[3]);
            'https' == (c = b[5]) ? (localStorage.blockedHTTPS = parseInt(localStorage.blockedHTTPS) + 1) : 'http' == c && (localStorage.blockedHTTP = parseInt(localStorage.blockedHTTP) + 1);
          if (chrome.runtime.lastError)
            return;
        });
  }
}
chrome.webNavigation.onCreatedNavigationTarget.addListener(CreatedNavigationTarget);
function BeforeRequest(details) {
  //console.log(details);
  var a,
      tabId = details.tabId,
      Type = details.type,
      URL = details.url;
  undefined == Type && (Type = 'other');
  0 <= (a = URL.indexOf('#')) && (URL = URL.slice(0, a));
  if (0 == URL.indexOf('chrome:') || 0 == URL.indexOf('chrome-extension:') || RemovedTabs[tabId] || ('webrtc' != Type && (0 > (a = URL.indexOf('://')) || 0 <= URL.slice(0, a).indexOf(':'))))
    return;

  var frameId = details.frameId,
      a = PopupOpener[tabId],
      Popup = 'main_frame' == Type && a ? a[0] : 0,
      a = BlockURL(frameId, (details.initiator || 0), details.parentFrameId, Popup, tabId, Type, URL),
      b, c, d, e, f, g,
      B = a[0],
      Domain = a[1],
      Domain2,
      E = a[2],
      Host = a[3],
      https,
      Path = a[4],
      Protocol = a[5],
      requestId = details.requestId,
      //Start2,
      TH = a[6],
      TLD = a[7],
      TP = a[8];
  //Start2 = (new Date).getTime();

  //Time.push((new Date).getTime() - Start2);
  //for (a = b = Time.length - 1, c = 0; 0 <= a; a--)
    //c += Time[a];
  //console.log('block?: ' + (c / b));

  /* redirect to HTTPS */

  if ((1 != B || 'main_frame' == Type) && !details.onHistoryStateUpdated)
    if ('http' == Protocol && 0 > HTTPSBlacklist.indexOf(' ' + Host + ' ') && (a = HTTPSUpgrade[TLD])) {
      Domain2 = Host.slice(0, -TLD.length - 1);
      if ('www.' + Domain == Domain2 && (b = a[4]) && 0 <= (' ' + b + ' ').indexOf(' ' + Domain + ' '))
        B = 3,
        LogHTTPS && (E = '|http://' + Host + '^$https=' + Domain + '.' + TLD),
        https = Domain + '.' + TLD + Path;
      if (3 != B) {
        if (Domain == Domain2 && (b = a[5]) && 0 <= (' ' + b + ' ').indexOf(' ' + Domain + ' '))
          B = 3,
          LogHTTPS && (E = '|http://' + Host + '^$https=www.' + Host),
          https = 'www.' + Host + Path;
        if (3 != B) {
          if ((b = a[6]) && 0 <= (c = (' ' + b).indexOf(' ' + Domain2 + '^')))
            B = 3,
            a = (b + ' ').slice((d = c + Domain2.length + 1), d + b.slice(d).indexOf(' ')),
            LogHTTPS && (E = '|http://' + Host + '^$https=' + a),
            https = a + Path;
          if (3 != B) {
            if ((b = a[0]) && 0 <= (' ' + b + ' ').indexOf(' ' + Domain2 + ' '))
              B = 3,
              LogHTTPS && (E = '|http://' + Host + '^$https'),
              https = Host + Path;
            if (3 != B) {
              if (b = a[2])
                for (c = Domain2; ; ) {
                  if (0 > (d = c.indexOf('.')))
                    break;
                  if (0 <= (' ' + b + ' ').indexOf(' ' + c + ' ')) {
                    B = 3;
                    LogHTTPS && (E = '||' + c + '^$https');
                    https = Host + Path;
                    break
                  }
                  c = c.slice(d + 1);
                }
            }
          }
        }
      }
      if (2 < B) {                                                              // whitelist HTTPS
        if ((b = a[1]) && 0 <= (' ' + b + ' ').indexOf(' ' + Domain2 + ' '))
          B = 2;
        if (2 < B) {
          if (b = a[3])
            for (c = Domain2; ; ) {
              if (0 > (d = c.indexOf('.')))
                break;
              if (0 <= (' ' + b + ' ').indexOf(' ' + c + ' ')) {
                B = 2;
                break;
              }
              c = c.slice(d + 1);
            }
        }
      }
      3 == B && (localStorage.toHTTPS = parseInt(localStorage.toHTTPS) + 1);
    }
    else
      'https' == Protocol && (localStorage.unchangedHTTPS = parseInt(localStorage.unchangedHTTPS) + 1);
  if (1 == B) {                                                                 // block
    if ('main_frame' == Type)
      if (Popup)
        PopupOpener[tabId][3] = Host;
      else
        return;
    else
      if ('sub_frame' == Type) {                                                // sub_frame
        BadgeIncrease(tabId, Host);
        LogBlock && console.log('%cBlocked: Type=sub_frame Filter=' + E + '\nProtocol=' + Protocol + ' Host=' + Host + '\nPath=' + unescape(Path), 'color:#f00');
        if (details.onHistoryStateUpdated)
          chrome.tabs.executeScript(
            tabId,
            {
              code: 'location.href="data:text/plain;base64,"',
              frameId: frameId,
              runAt: 'document_start'
            },
            function() {
              if (chrome.runtime.lastError)
                return;
            }
          );
        else
          return { redirectUrl: 'data:text/plain;base64,' };
      }
      else if ('webrtc' == Type) {                                              // webrtc
        BadgeIncrease(tabId, Host);
        LogBlock && console.log('%cBlocked: Type=' + Type + ' Filter=' + E + '\nProtocol=' + Protocol + ' Host=' + Host + '\nPath=' + unescape(Path), 'color:#f00');
        return { cancel: true };
      }
      else                                                                      // no webrtc
        BlockRequestIds[requestId] = [Host, '%cBlocked: Type=' + Type + ' Filter=' + E + '\nProtocol=' + Protocol + ' Host=' + Host + '\nPath=' + unescape(Path), Protocol];
  }
  else if (3 == B) {                                                            // redirect to HTTPS
    a = 0 > (b = URL.indexOf('?')) ? URL : URL.substring(7, b);
    if (b = HTTPSIds[tabId])
      if (c = b[requestId]) {
        for (d = c.length - 1, e = 0; e <= d; e++)                              // avoid feedback loops
          if (a == c[e]) {
            delete b[requestId];
            0 > HTTPSBlacklist.indexOf(' ' + Host + ' ') && (HTTPSBlacklist += Host + ' ') && LogHTTPS && console.log('%cAdded to HTTPSBlacklist for this session: ' + Host, 'color:#00f');
            return;
          }
        b[requestId].push(a);
      }
      else
        b[requestId] = [a];
    else
      HTTPSIds[tabId] = [],
      HTTPSIds[tabId][requestId] = [a];
    LogHTTPS && console.log('%cRedirect to HTTPS: Type=' + Type + ' Filter=' + E + '\nFrom http' + unescape(URL.slice(URL.indexOf(':'))) + '\nTo  ' + unescape('https://' + https), 'color:#00f');
    return { redirectUrl: 'https://' + https };
  }
  else if (('sub_frame' == Type || 'main_frame' == Type) && 0 <= tabId) {
    if (Host != Hosts[tabId] || 0 <= Whitelist.indexOf(' ' + TH + ' ')) {
      if ('https://' == URL.slice(0, 8) || 'http://' == URL.slice(0, 7))
        'main_frame' == Type && (Origins[tabId] = []),
        a = Origins[tabId] || (Origins[tabId] = []),
        a[frameId] = 0 <= (b = details.parentFrameId) ? ['' != Domain ? Domain + ('' != TLD ? '.' + TLD : '') : TLD, b] : ['' != Domain ? Domain + ('' != TLD ? '.' + TLD : '') : TLD];
    }
    if ('main_frame' == Type)
      Blocked[tabId] && delete Blocked[tabId],
      BlockedURLs[tabId] && delete BlockedURLs[tabId];
  }
}
chrome.webRequest.onBeforeRequest.addListener(BeforeRequest, { urls: ['<all_urls>'] }, ['blocking']);
function BeforeSendHeaders(details) {
  //console.log(details);
  var a,
      requestId = details.requestId,
      tabId;
  if (a = BlockRequestIds[requestId]) {
    delete BlockRequestIds[requestId];
    chrome.storage.local.get('Badge', function() {
      var b, c, d, e, f, g;
      LogBlock && console.log(a[1], 'color:#f00');
      'https' == (b = a[2]) ? (localStorage.blockedHTTPS = parseInt(localStorage.blockedHTTPS) + 1) : 'http' == b && (localStorage.blockedHTTP = parseInt(localStorage.blockedHTTP) + 1);
      if ((b = HTTPSIds[tabId = details.tabId]) && b[requestId])
        localStorage.toHTTPS = parseInt(localStorage.toHTTPS) - 1,
        delete b[requestId];
      if (0 > details.parentFrameId)
        for (b = (c = details.requestHeaders).length - 1; 0 <= b; b--)
          if ('referer' == (d = c[b]).name.toLowerCase()) {
            d = d.value;
            0 <= (e = d.indexOf('#')) && (d = d.slice(0, e));
            if ((e = (f = d.slice(g = d.indexOf('://') + 3)).indexOf('/')) && e + g + 1 < d.length) {
              if ((f = URLs[tabId]) && d != f)
                return;
            }
            else {
              d = f.indexOf(':');
              var Host = (0 > d || d > e) && 0 <= e ? f.slice(0, e) : 0 < d && d < e ? f.slice(0, d) : f;
              '.' == Host.slice(-1) && (Host = Host.slice(0, -1));
              if ((e = Hosts[tabId]) && Host != e)
                return;
            }
            break;
          }
      BadgeIncrease(tabId, a[0]);
    });
    return { cancel: true };
  }
  else
    'http://' == details.url.slice(0, 7) && (localStorage.unchangedHTTP = parseInt(localStorage.unchangedHTTP) + 1);
}
chrome.webRequest.onBeforeSendHeaders.addListener(BeforeSendHeaders, { urls: ['<all_urls>'] }, ['blocking', 'requestHeaders']);
function HeadersReceived(details) {
  //console.log(details);
  var a, b, c, d, e, f, g, Host, requestId, tabId, URL;

  /* HTTPSBlacklist */

  if ((a = HTTPSIds[tabId = details.tabId]) && (b = a[requestId = details.requestId]))
    if (301 == (c = details.statusCode) && 0 == (URL = details.url).indexOf('http://')) {
      URL = URL.substring(7);
      0 <= (c = URL.indexOf('?')) && (URL = URL.substring(0, c));
      0 <= (c = URL.indexOf('#')) && (URL = URL.substring(0, c));
      for (c = b.length - 1; 0 <= c; c--)
        if (URL == (d = b[c]) || (0 > URL.indexOf('/') && (e = d.match(/\//g)) && 1 == e.length && d == URL + '/')) {
          e = d.indexOf('/');
          f = d.indexOf(':');
          Host = d.slice(0, 0 > f ? 0 <= e ? e : d.length : f < e ? f : 0 < e ? e : f);
          '.' == Host.slice(-1) && (Host = Host.slice(0, -1));
          0 > HTTPSBlacklist.indexOf(' ' + Host + ' ') && (HTTPSBlacklist += Host + ' ') && LogHTTPS && console.log('%cAdded to HTTPSBlacklist for this session: ' + Host, 'color:#00f');
          localStorage.toHTTPS = parseInt(localStorage.toHTTPS) - 1;
          break;
        }
    }
    else if (301 == c || 302 == c) {
      for (c = details.responseHeaders, d = c.length - 1; 0 <= d; d--)
        if ((e = (f = c[d]).name) && 'location' == e.toLowerCase() && (e = f.value) && 0 == e.toLowerCase().indexOf('http://')) {
          e = e.substring(7);
          0 <= (c = e.indexOf('?')) && (e = e.substring(0, c));
          0 <= (c = e.indexOf('#')) && (e = e.substring(0, c));
          for (c = b.length - 1; 0 <= c; c--)
            if (e == (d = b[c]) || (0 > e.indexOf('/') && (f = d.match(/\//g)) && 1 == f.length && d == e + '/')) {
              f = d.indexOf('/');
              g = d.indexOf(':');
              Host = d.slice(0, 0 > g ? 0 <= f ? f : d.length : g < f ? g : 0 < f ? f : g);
              '.' == Host.slice(-1) && (Host = Host.slice(0, -1));
              0 > HTTPSBlacklist.indexOf(' ' + Host + ' ') && (HTTPSBlacklist += Host + ' ') && LogHTTPS && console.log('%cAdded to HTTPSBlacklist for this session: ' + Host, 'color:#00f');
              localStorage.toHTTPS = parseInt(localStorage.toHTTPS) - 1;
              break;
            }
          break;
        }
    }
    else
      delete a[requestId];
}
chrome.webRequest.onHeadersReceived.addListener(HeadersReceived, { urls: ['<all_urls>'] }, ['responseHeaders']);
function WebRequestCompleted(details) {
  //console.log(details);
  var a,
      frameId = details.frameId,
      tabId = details.tabId,
      URL;
  if (details.fromCache && 0 <= (a = (URL = details.url).indexOf('://')) && 0 > URL.slice(0, a).indexOf(':'))
    Insert(frameId, tabId, URL),
    a = Inserted[tabId] || (Inserted[tabId] = []),
    a[frameId] = 1;
  else
    (a = Inserted[tabId]) && a[frameId] && delete a[frameId];
}
chrome.webRequest.onCompleted.addListener(WebRequestCompleted, { types:['main_frame', 'sub_frame'], urls: ['<all_urls>'] });
function Updated(tabId, a, b) {
  //console.log(a);
  //console.log(b);
  var c, d, e, f, URL = b.url;
  if (0 <= tabId && 'loading' == (c = a.status)) {
    if (c = a.url)
      if (0 <= (d = c.indexOf('#')) && (c = c.slice(0, d)), c != URLs[tabId])
        Blocked[tabId] && delete Blocked[tabId],
        BlockedURLs[tabId] && delete BlockedURLs[tabId];
    if (URL) {
      if (0 <= (c = URL.indexOf('://')) && 0 > URL.slice(0, c).indexOf(':')) {
        URLs[tabId] = 0 <= (e = URL.indexOf('#')) ? URL.slice(0, e) : URL;
        if ('https://' == URL.slice(0, 8) || 'http://' == URL.slice(0, 7)) {

          /* Hosts */

          var Host, TH;
          c = URL.slice(c + 3);
          d = c.indexOf('/');
          e = c.indexOf(':');
          Host = c.slice(0, 0 > e ? 0 <= d ? d : c.length : e < d ? e : 0 < d ? d : e);
          '.' == Host.slice(-1) && (Host = Host.slice(0, -1));
          Host != Hosts[tabId] && (Hosts[tabId] = Host);
          if (0 <= (c = (TH = Host).lastIndexOf('.')) && 0 <= (d = (e = TH.slice(0, c)).lastIndexOf('.')))
            if (0 <= (e = e.slice(0, d).lastIndexOf('.'))) {
              if (0 <= TLDs.indexOf(' ' + (f = TH.slice(e + 1)) + ' ')) {
                if ('www' == (e = TH.slice(0, e)).slice(0, e.lastIndexOf('.')))
                  TH = TH.slice(4);
              }
              else if (0 <= TLDs.indexOf(' ' + TH.slice(d + 1) + ' ') && 'www' == TH.slice(0, e))
                TH = f;
            }
            else if (0 == TH.indexOf('www.' ))
              TH = TH.slice(d + 1);
          Hosts2[tabId] = TH;

          /* Icon */

          chrome.browserAction.setIcon({path: 'Icon16' + (0 > Whitelist.indexOf(' ' + TH + ' ') ? '' : 'Whitelist') + '.png', tabId: tabId}, function(){
            if (chrome.runtime.lastError)
              return;
          });
        }
      }
      else
        URLs[tabId] = 0 <= (c = URL.indexOf('#')) ? URL.slice(0, c) : URL;
    }
  }
}
chrome.tabs.onUpdated.addListener(Updated);
function Committed(details) {
  //console.log(details);
  var a, b, c, d,
      frameId = details.frameId,
      tabId = details.tabId,
      Type = details.type,
      URL = details.url;
  undefined == Type && (Type = 'other');
  0 <= (a = URL.indexOf('#')) && (URL =  URL.slice(0, a));
  if ((a = Inserted[tabId]) && a[frameId])
    delete a[frameId];
  else
    Insert(frameId, tabId, URL);
  if ((a = PopupOpener[tabId = details.tabId]) && 'auto_subframe' != details.transitionType && !RemovedTabs[tabId]) {
    if (1 == a[2]) {
      a[2] = 2;
      if (a[3]) {
        RemovedTabs[tabId] = 1;
        chrome.tabs.remove(tabId, function() {
          var d, Host, Path, Protocol;
          if (0 <= (b = URL.indexOf('://')) && 0 > URL.slice(0, b).indexOf(':'))
            Protocol = URL.slice(0, b),
            b = URL.slice(b + 3),
            c = b.indexOf('/'),
            d = b.indexOf(':'),
            (0 > d || d > c) && 0 <= c ? (Host = b.slice(0, c), Path = b.slice(c)) : 0 < d && d < c ? (Host = b.slice(0, d), Path = b.slice(c)) : (Host = b, Path = '/'),
            '.' == Host.slice(-1) && (Host = Host.slice(0, -1)),
            URL = Host + Path;
          Protocol && ('https' == Protocol ? (localStorage.blockedHTTPS = parseInt(localStorage.blockedHTTPS) + 1) : 'http' == Protocol && (localStorage.blockedHTTP = parseInt(localStorage.blockedHTTP) + 1));
          if (chrome.runtime.lastError)
            return;
          BadgeIncrease(a[1], URL)
        });
        return;
      }
      (0 > (b = URL.indexOf('://')) || 0 <= URL.slice(0, b).indexOf(':')) && BlockNonURL(frameId, a, tabId, Type, ('main_frame' == Type ? 9 : 27), URL);
    }
    else if (b = details.transitionQualifiers) {
      if (a[3]) {
        for (c = b.length, d = 0; d < c; d++)
          if ('client_redirect' == b[d]) {
            RemovedTabs[tabId] = 1;
            chrome.tabs.remove(tabId, function() {
              if (0 <= (b = URL.indexOf('://')) && 0 > URL.slice(0, b).indexOf(':'))
                'https' == (b = URL.slice(0, b)) ? (localStorage.blockedHTTPS = parseInt(localStorage.blockedHTTPS) + 1) : 'http' == b && (localStorage.blockedHTTP = parseInt(localStorage.blockedHTTP) + 1);
              if (chrome.runtime.lastError)
                return;
              BadgeIncrease(a[1], a[2]);
            });
            return;
          }
        delete PopupOpener[tabId];
      }
      else
        (0 > (b = URL.indexOf('://')) || 0 <= URL.slice(0, b).indexOf(':')) && BlockNonURL(frameId, a, tabId, Type, ('main_frame' == Type ? 9 : 27), URL);
    }
  }
  if (!frameId && (0 > (a = URL.indexOf('://')) || 0 <= URL.slice(0, a).indexOf(':')))
    chrome.browserAction.setIcon({path: 'Icon16.png', tabId: tabId}, function(){
      if (chrome.runtime.lastError)
        return;
    }),
    Hosts[tabId] && delete Hosts[tabId],
    Hosts2[tabId] && delete Hosts2[tabId];
}
chrome.webNavigation.onCommitted.addListener(Committed);
function HistoryStateUpdated(details) {
  //console.log(details);
  let a, b, c, frameId = details.frameId, initiator, tabId = details.tabId, Type = details.type, URL;
  undefined == Type && (Type = 'other');
  if (frameId) {
    0 <= (a = (URL = details.url).indexOf('#')) && (URL = URL.substring(0, a));
    if ((a = Origins[tabId]) && (b = a[frameId]) && 0 <= (b = b[1]) && (a = a[b]) && (a = a[0])) {
      initiator = 0 <= (b = a.indexOf('?')) ? a.substring(0, b) : a;
      if (0 <= (a = initiator.indexOf('://'))) {
        if ((b = initiator.substring(a + 3)) && 0 <= (c = b.indexOf('/')))
          initiator = initiator.substring(0, a + 3 + c);
      }
      else
        initiator = 0;
    }
    else
      initiator = 0;
    BeforeRequest({frameId:frameId,initiator:initiator,parentFrameId:(a = Origins[tabId]) && (a = a[frameId]) && 0 <= (a = a[1]) ? a : frameId,onHistoryStateUpdated:1,tabId:tabId,type:Type,url:URL});
  }
  else
    if (0 <= tabId)
      chrome.tabs.get(tabId, function(a) {
        if (chrome.runtime.lastError)
          return;
        Blocked[tabId] && delete Blocked[tabId];
        BlockedURLs[tabId] && delete BlockedURLs[tabId];
        Badge && a.active && !RemovedTabs[tabId] && chrome.browserAction.setBadgeText({text: '', tabId: tabId});
      });
}
chrome.webNavigation.onHistoryStateUpdated.addListener(HistoryStateUpdated);
function ErrorOccurred(details) {
  //console.log(details);
  let a,
      error = details.error,
      frameId = details.frameId,
      requestId = details.requestId,
      tabId = details.tabId,
      Type = details.type;
  undefined == Type && (Type = 'other');
  if ((a = HTTPSIds[tabId]) && a[requestId]) {                                  // HTTPSBlacklist
    delete a[requestId];
    if ('net::ERR_EMPTY_RESPONSE' == error) {
      let b, c, Host, URL = details.url;
      if ((a = URL.indexOf('://')) && 0 > URL.slice(0, a).indexOf(':'))
        a = URL.slice(a + 3),
        b = a.indexOf('/'),
        c = a.indexOf(':'),
        Host = a.slice(0, 0 > c ? 0 <= b ? b : a.length : c < b ? c : 0 < b ? b : c),
        0 > HTTPSBlacklist.indexOf(' ' + Host + ' ') && (HTTPSBlacklist += Host + ' ') && LogHTTPS && console.log('%cAdded to HTTPSBlacklist for this session: ' + Host, 'color:#00f');
        if ('main_frame' == Type)
          chrome.tabs.update(tabId, {url: 'http://' + a }, function() {
            localStorage.toHTTPS = parseInt(localStorage.toHTTPS) - 1;
            if (chrome.runtime.lastError)
              return;
          });
    }
  }
  BlockRequestIds[requestId] && delete BlockRequestIds[requestId];              // delete global arrays
  if ('main_frame' == Type) {
    Blocked[tabId] && delete Blocked[tabId];
    BlockedURLs[tabId] && delete BlockedURLs[tabId];
    HTTPSIds[tabId] && delete HTTPSIds[tabId];
    if ('net::ERR_ABORTED' == error)
      (a = Inserted[tabId]) && a[frameId] && delete a[frameId];
    else
      PopupOpener[tabId] && delete PopupOpener[tabId];
  }
  else
    (a = HTTPSIds[tabId]) && a[requestId] && delete a[requestId];
}
chrome.webRequest.onErrorOccurred.addListener(ErrorOccurred, { urls: ['<all_urls>'] });
function ResponseStarted(details) {
  let requestId = details.requestId;
  BlockRequestIds[requestId] && delete BlockRequestIds[requestId];
}
chrome.webRequest.onResponseStarted.addListener(ResponseStarted, { urls: ['<all_urls>'] });