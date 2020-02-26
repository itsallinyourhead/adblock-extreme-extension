function GetTokenNoRegExp(string) {
  var a = string.split(/[\*\^]/), b = a.length, c = 0, d = 0, e = 0, f, g;
  for ( ; c < b; c++)
    (f = (g = a[c]).length) > d && (d = f, e = g);
  return e;
}
function GetTokenRegExp(string) {
  var a, b;
  '^' == string.slice(0, 1) && (string = string.slice(1));
  if (0 <= (a = Math.min(0 <= (b = string.search(/\\[^/.:]/)) ? b : Infinity, 0 <= (b = string.search(/[^\\]\./)) ? b + 1 : Infinity, 0 <= (b = string.indexOf('?')) ? b : Infinity, 0 <= (b = string.indexOf('(')) ? b : Infinity, 0 <= (b = string.indexOf('[')) ? b : Infinity, 0 <= (b = string.indexOf('{')) ? b : Infinity, 0 <= (b = string.indexOf('*')) ? b : Infinity, 0 <= (b = string.indexOf('^')) ? b : Infinity, 0 <= (b = string.indexOf('$')) ? b : Infinity, 0 <= (b = string.indexOf('+')) ? b : Infinity, 0 <= (b = string.indexOf('|')) ? b : Infinity)))
    string = string.slice(0, a);
  if (0 <= string.indexOf('\\'))
    string = string.replace(/\\/g, '');
  return '' != string ? string : 0;
}
onmessage = function(a) {
  var a = a.data, Download = a[3], c, d, e, f, g, h, i, j, k, l, m, n;
  if (!(c = a[0])) {
    Start = 1 * new Date;
    postMessage([
      'LoadingBar',
      0
    ]);
    ExtensionId = a[4];
    Lists = a[1];
    TLDs = a[2];
    UpdateCounter0 = a[5];
    if (!a[6]) {
      ABPPropertiesW = [];
      BlockDomains = ' ';
      BlockDomainsF = ' ';
      BlockDomainsTP = ' ';
      BlockHTTPSURLs = ' ';
      BlockHTTPURLs = ' ';
      BlockNoDomains = [];
      BlockProtocolsURLs = {};
      BlockURLs = ' ';
      BlockWSSURLs = ' ';
      BlockWSURLs = ' ';
      FilterDomains = ' ';
      FramesDomains = ' ';
      FramesHTTPSURLs = ' ';
      FramesHTTPURLs = ' ';
      FramesNoDomains = [];
      FramesPathsE = [];
      FramesPathsF = [];
      FramesPathsP = [];
      FramesPathsPE = [];
      FramesPathsPR = [];
      FramesPathsPS = [];
      FramesPathsR = [];
      FramesPathsS = [];
      FramesProtocolsURLs = {};
      FramesRegexp = [[{}, {}], [{}, {}]];
      FramesTest = 0;
      FramesURLs = ' ';
      GenericBlockDomains = ' ';
      GenericBlockHTTPSURLs = ' ';
      GenericBlockHTTPURLs = ' ';
      GenericBlockNoDomains = 0;
      GenericBlockPathsE = [];
      GenericBlockPathsF = [];
      GenericBlockPathsP = [];
      GenericBlockPathsPE = [];
      GenericBlockPathsPR = [];
      GenericBlockPathsPS = [];
      GenericBlockPathsR = [];
      GenericBlockPathsS = [];
      GenericBlockProtocolsURLs = [];
      GenericBlockRegexp = [[{}, {}], [{}, {}]];
      GenericBlockTest = 0;
      GenericBlockURLs = ' ';
      Hide = {};
      HideClasses = ',';
      HideClassesW = ',';
      HideHosts = ' ';
      HideIds = ',';
      HideIdsW = ',';
      HideOther = [];
      HideOtherW = [];
      ListsCounter = 0;
      ListsNumber = 3;
      HTTPSUpgrade = {};
      MapPathsF = [[], [], [], [], ' ', [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
      MapPathsWF = [[], [], [], [], ' ', [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
      Maps = {};
      Paths = [];
      Paths0 = [];
      Paths1 = [];
      Paths2 = [];
      Paths3 = [];
      PathsShortcuts = [];
      PathsShortcutsValues = [];
      Paths0Shortcuts = [];
      Paths0ShortcutsValues = [];
      Paths1Shortcuts = [];
      Paths1ShortcutsValues = [];
      Paths2Shortcuts = [];
      Paths2ShortcutsValues = [];
      Paths3Shortcuts = [];
      Paths3ShortcutsValues = [];
      PathsW = [];
      PathsW0 = [];
      PathsW1 = [];
      PathsW2 = [];
      PathsW3 = [];
      PathsWShortcuts = [];
      PathsWShortcutsValues = [];
      PathsW0Shortcuts = [];
      PathsW0ShortcutsValues = [];
      PathsW1Shortcuts = [];
      PathsW1ShortcutsValues = [];
      PathsW2Shortcuts = [];
      PathsW2ShortcutsValues = [];
      PathsW3Shortcuts = [];
      PathsW3ShortcutsValues = [];
      PathsF = [];
      PathsFFO = [];
      PathsWF = [];
      PathsWFFO = [];
      PathsE = [];
      PathsENoFO = [];
      PathsWE = [];
      PathsWENoFO = [];
      PathsP = [];
      PathsWP = [];
      PathsPE = [];
      PathsWPE = [];
      PathsPR = [];
      PathsWPR = [];
      PathsPS = [];
      PathsWPS = [];
      PathsR = [];
      PathsWR = [];
      PathsS = [];
      PathsSNoFO = [];
      PathsSNoFO0 = [];
      PathsSNoFO1 = [];
      PathsSNoFO2 = [];
      PathsSNoFO3 = [];
      PathsWS = [];
      PathsWSNoFO = [];
      PathsWSNoFO0 = [];
      PathsWSNoFO1 = [];
      PathsWSNoFO2 = [];
      PathsWSNoFO3 = [];
      PropertiesW = [];
      Regexp = [[{}, {}], [{}, {}]];
      RegexpW = [[{}, {}], [{}, {}]];
      RegexpD = [[{}, {}], [{}, {}]];
      RegexpDW = [[{}, {}], [{}, {}]];
      WhiteCollapse = ' ';
      WhiteDomains = ' ';
      WhiteDomainsF = ' ';
      WhiteDomainsTP = ' ';
      WhiteDonottrack = ' ';
      WhiteElemhide = ' ';
      WhiteHTTPURLs = ' ';
      WhiteHTTPSURLs = ' ';
      WhiteNoDomains = [];
      WhiteProtocolsURLs = {};
      WhiteURLs = ' ';
      WhiteWSURLs = ' ';
      WhiteWSSURLs = ' ';
      Lists.Own && 1 == Lists.Own.e ? (ListsNumber++, Update = 1) : Update = 0;
      if (Lists.Ads)
        for (c = Object.keys(Lists.Ads), d = e = c.length - 1; 0 <= e; --e) {
          (f = Lists.Ads[c[e]]).f && delete f.f;
          if (f.e)
            'https://easylist-downloads.adblockplus.org/easylist.txt' == f.u && (m = f, n = c[e]),
            ++ListsNumber && ++Update;
        }
      if (Lists.Social)
        for (e = Object.keys(Lists.Social), f = g = e.length - 1; 0 <= g; --g)
          (h = Lists.Social[e[g]]).f && delete h.f,
          h.e && ListsNumber++ && Update++;
      if (Lists.Other)
        for (g = Object.keys(Lists.Other), h = i = g.length - 1; 0 <= i; --i)
          (j = Lists.Other[g[i]]).f && delete j.f,
          j.e && ++ListsNumber && ++Update;
      if (Lists.HTTPS)
        for (i = Object.keys(Lists.HTTPS), j = k = i.length - 1; 0 <= k; --k)
          (l = Lists.HTTPS[i[k]]).f && delete l.f,
          l.e && ++ListsNumber && ++Update;
      k = SiteSpecific = 0;
      for (l = 0; l <= d; ++l)
        (m = Lists.Ads[n = c[l]]).e && (k = 1, send(m, n, 'Ads', Download));
      for (l = 0; l <= f; ++l)
        (m = Lists.Social[n = e[l]]).e && (k = 1, send(m, n, 'Social', Download));
      for (l = 0; l <= h; ++l)
        (m = Lists.Other[n = g[l]]).e && (k = 1, send(m, n, 'Other', Download));
      for (l = 0; l <= j; ++l)
        (m = Lists.HTTPS[n = i[l]]).e && (k = 1, send(m, n, 'HTTPS', Download));
      if (Lists.Own && 1 == (c = Lists.Own).e)
        k = 1,
        convert(c.u.split('\n'), 'Own', 'Own', 0);
      if (!k)
        convert([], 0, 0, 0);
    }
  }
  else if(2 > c)
    console.log(a[1] + ' - Download failed!' + ((c = a[5]) ? ' Using ' + ((d = a[2]) ? (6E4 > (e = 1 * new Date - d) ? 'a few seconds' : 36E5 > e ? (e = Math.floor(e / 6E4)) + ' minute' + (1 < e ? 's' : '') : 864E5 > e ? (e = Math.floor(e / 36E5)) + ' hour' + (1 < e ? 's' : '') : (e = Math.floor(e / 864E5)) + ' day' + (1 < e ? 's' : '')) + ' ' : '') + 'old copy instead.' : '')),
    convert(c ? c : [], a[3], a[4], 0);
  else
    convert(a[1] || [], a[2], a[3], 1);
};
function send(a, b, c, Download) {
  var e, f, g;
  if (Download || !(e = a.d) || 864E5 < (1 * new Date - e))
    postMessage([
      'downloading',
      b,
      c
    ]),
    e = new XMLHttpRequest,
    e.addEventListener('readystatechange', function() {
      if (3 < e.readyState)
        if (200 == (f = e.status))
          (g = Lists[c]) && (g = g[b]) && (g.c = 1 * new Date),
          console.log(b + ': Download succeeded'),
          0 <= (e = e.responseText).indexOf('\r') && (e = e.replace(/\r/g, '')),
          0 <= (f = e.indexOf('\n')) && (e = e.slice(f + 1)),
          f = e.split('\n'),
          postMessage([
            'SaveList',
            escape(c + b),
            f
          ]),
          convert(f, c, b, 1);
        else
          postMessage([
            'Error',
            a.d,
            b,
            c,
            f,
            UpdateCounter0
          ]);
    }),
    e.addEventListener('timeout', function() {
      postMessage([
        'timeout',
        a.d,
        b,
        c,
        UpdateCounter0
      ]);
    }),
    //e.open('GET', (f = a.u) + (0 <= f.indexOf("?") ? '&' : '?') + '_=' + Math.random()),
    e.open('GET', a.u),
    e.send();
  else
    postMessage([
      'UseOldList',
      b,
      c,
      UpdateCounter0
    ]);
}
function convert(List, T, ListName, D) {
  var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z,
      I, V, W, X, Y, Z,
      AA, AB, AC, AD, AE, AF, AG, AH,
      _0, _0L, _0L2, _1, _1L, _1L2, _2, _2L, _2L2, _3, _4, _5, _6, _7, _8, _L0, _L1, _L2, _L3,
      Abort,
      Block,
      Domain,
      Filter,
      FilterIndex = List.length - 1,
      FilterOption,
      FilterOptions,
      FODomains,
      FODomains2,
      FOIndex,
      FONoDomains,
      FONoHTTPS,
      FramesFilter,
      FramesFO,
      FramesPath,
      GenericBlockFilter,
      GenericBlockFO,
      GenericBlockPath,
      Host,
      ListTime = 1 * new Date,
      MatchCase,
      Origin,
      Path,
      PathsProtocol = 0,
      Protocol,
      RE,
      Target,
      TLD,
      Type,
      www;
  postMessage([
    'LoadingProgress',
    (a = ++ListsCounter / ListsNumber * 100),
    T,
    ListName
  ]);
  for ( ; 0 <= FilterIndex; --FilterIndex) {
    if ('' == (Filter = List[FilterIndex].trim())                               // empty filter
    || 0 == Filter.indexOf('!') || 0 == Filter.indexOf('||^') || 0 == Filter.indexOf('|^'))
      continue;
    if ((0 == Filter.indexOf('||') && (Block = 1, Type = 0, Filter = Filter.substring(2))// domains and URLs
    || 0 == Filter.indexOf('|') && (Block = 1, Type = 1, Filter = Filter.substring(1))
    || 0 == Filter.indexOf('@@||') && (Block = 0, Type = 4, Filter = Filter.substring(4))
    || 0 == Filter.indexOf('@@|') && (Block = 0, Type = 3, Filter = Filter.substring(3))
    || 0 == Filter.indexOf('$') && (Block = 1, Type = 2)
    || 0 == Filter.indexOf('@@$') && (Block = 0, Type = 2))
    && !PathsProtocol) {
      Protocol = '';
      MatchCase = www = 0;
      if (1 == Type || 3 == Type)                                               // protocol
        if (a = 0 <= (b = Filter.lastIndexOf('$')) ? Filter.substring(0, b) : Filter, 0 < (b = a.indexOf(':'))) {
          for (c = b - 1, d = 1; 0 <= c; c--)
            if (0 > 'abcdefghijklmnopqrstuvwxyz-ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(a.substring(c, c + 1))) {
              d = 0;
              break;
            }
          if (d) {
            Protocol = a.substring(0, b).toLowerCase();
            if ('//' == a.substring(b + 1, b + 3))
              Filter = Filter.slice(b + 3);
            else if ('/' == a.substring(b + 1, b + 2))
              Filter = Filter.slice(b + 2);
            else
              Filter = Filter.slice(b + 1);
          }
          else {
            FilterIndex++;
            PathsProtocol = Type;
            continue;
          }
        }
        else {
          FilterIndex++;
          PathsProtocol = Type;
          continue;
        }
      FilterOptions = [];
      if (0 <= (k = Filter.lastIndexOf('$')))                                   // filter options
        FilterOptions = Filter.substring(k + 1).toLowerCase().split(','),
        Filter = Filter.substring(0, k);
      if (0 <= Filter.indexOf('**'))
        Filter = Filter.replace(/\*+/g, '*');
      if ('' == Filter)
        RE = 0;
      if ('' != Filter && 2 != Type) {
        if (0 < (k = Filter.indexOf('/'))) {                                    // URL
          if (l = Filter.substring(0, k), m = l.indexOf('^'), n = l.indexOf('*'), 0 > m && 0 > n)
            Path = Filter.substring(k),
            Filter = '.' != l.slice(-1) ? l : l.slice(0, -1);
          else if (0 <= m && (m < n || 0 > n))
            Path = Filter.substring(m + 1),
            Filter = Filter.substring(0, ('.' != Filter[m - 1] ? m : m - 1));
          else
            '.' == Filter.slice(-1) && (Filter = Filter.slice(0, -1)),
            Path = '';
          RE = 0
        }
        else if (k = Filter.indexOf('^'), l = Filter.indexOf('*'), 0 <= k && (k < l || 0 > l))
          Path = Filter.slice(k + 1),
          Filter = Filter.substring(0, ('.' != Filter[k - 1] ? k : k - 1)),
          RE = 0;
        else
          Path = '',
          RE = 1;
        if (!RE)
          RE = (0 <= Filter.indexOf('*') || 0 <= Filter.indexOf('^') || '' == Path && '.' == Filter.slice(-1)) ? 1 : 0;
        if ('' == Filter
        || '.' == Filter.substring(0, 1)
        || '.' == Filter.slice(-1) && !RE) {
          console.log('%cinvalid domain: ' + List[FilterIndex], 'color:#00f');
          continue;
        }
        ('*' == Path || '/' == Path || '/*' == Path) && (Path = '');
        if (!RE && (Host = Filter.toLowerCase()) && !(1 == (c = FilterOptions.length) && ('https' == (d = FilterOptions[0]) || 0 == d.indexOf('https='))))// www
          if (0 <= (c = Host.lastIndexOf('.')) && 0 <= (k = (l = Host.substring(0, c)).lastIndexOf('.')))
            if (0 <= (l = l.substring(0, k).lastIndexOf('.'))) {
              if (0 <= TLDs.indexOf(' ' + Host.substring(l + 1)) + ' ') {
                if ('www' == (c = Host.substring(0, l)).substring(0, c.lastIndexOf('.')))
                  www = 1;
              }
              else if (0 <= TLDs.indexOf(' ' + Host.substring(k + 1) + ' ') && 'www' == Host.substring(0, l))
                www = 1;
            }
            else if (0 == Host.indexOf('www.' ))
              www = 1;
      }
      else                                                                      // no domain
        Host = Path = '';
      FODomains = FODomains2 = '|';
      FONoDomains = FramesFO = GenericBlockFO = '';
      for (FOIndex = FilterOptions.length - 1, Abort = FONoHTTPS = 0; 0 <= FOIndex; --FOIndex)// filter options
        if ('third-party' == (FilterOption = FilterOptions[FOIndex]) || '~first-party' == FilterOption)// third-party and ~first-party
          0 > FONoDomains.indexOf('t') && (FONoDomains += 't'),
          FONoHTTPS = 1;
        else if ('popup' == FilterOption)                                       // popup
          0 > FONoDomains.indexOf('p') && (FONoDomains += 'p'),
          FONoHTTPS = 1;
        else if ('~third-party' == FilterOption || 'first-party' == FilterOption)// ~third-party and first-party
          0 > FONoDomains.indexOf('T') && (FONoDomains += 'T'),
          FONoHTTPS = 1;
        else if ('~popup' == FilterOption)                                      // ~popup
          FONoHTTPS = 1;
        else if ('script' == FilterOption)                                      // types
          0 > FONoDomains.indexOf('s') && (FONoDomains += 's'),
          FONoHTTPS = 1;
        else if ('image' == FilterOption)
          0 > FONoDomains.indexOf('i') && (FONoDomains += 'i'),
          FONoHTTPS = 1;
        else if ('xmlhttprequest' == FilterOption)
          0 > FONoDomains.indexOf('x') && (FONoDomains += 'x'),
          FONoHTTPS = 1;
        else if ('subdocument' == FilterOption)
          0 > FONoDomains.indexOf('l') && (FONoDomains += 'l'),
          FONoHTTPS = 1;
        else if ('object' == FilterOption || 'object-subrequest' == FilterOption)
          0 > FONoDomains.indexOf('o') && (FONoDomains += 'o'),
          FONoHTTPS = 1;
        else if ('media' == FilterOption)
          0 > FONoDomains.indexOf('m') && (FONoDomains += 'm'),
          FONoHTTPS = 1;
        else if ('stylesheet' == FilterOption)
          0 > FONoDomains.indexOf('y') && (FONoDomains += 'y'),
          FONoHTTPS = 1;
        else if ('other' == FilterOption)
          0 > FONoDomains.indexOf('j') && (FONoDomains += 'j'),
          FONoHTTPS = 1;
        else if ('document' == FilterOption)
          0 > FONoDomains.indexOf('u') && (FONoDomains += 'u'),
          FONoHTTPS = 1;
        else if ('webrtc' == FilterOption)
          0 > FONoDomains.indexOf('w') && (FONoDomains += 'w'),
          FONoHTTPS = 1;
        else if ('websocket' == FilterOption)
          0 > FONoDomains.indexOf('q') && (FONoDomains += 'q'),
          FONoHTTPS = 1;
        else if ('font' == FilterOption)
          0 > FONoDomains.indexOf('f') && (FONoDomains += 'f'),
          FONoHTTPS = 1;
        else if ('ping' == FilterOption)
          0 > FONoDomains.indexOf('k') && (FONoDomains += 'k'),
          FONoHTTPS = 1;
        else if ('csp_report' == FilterOption)
          0 > FONoDomains.indexOf('r') && (FONoDomains += 'r'),
          FONoHTTPS = 1;
        else if ('~script' == FilterOption)
          0 > FONoDomains.indexOf('S') && (FONoDomains += 'S'),
          FONoHTTPS = 1;
        else if ('~image' == FilterOption)
          0 > FONoDomains.indexOf('I') && (FONoDomains += 'I'),
          FONoHTTPS = 1;
        else if ('~xmlhttprequest' == FilterOption)
          0 > FONoDomains.indexOf('X') && (FONoDomains += 'X'),
          FONoHTTPS = 1;
        else if ('~subdocument' == FilterOption)
          0 > FONoDomains.indexOf('L') && (FONoDomains += 'L'),
          FONoHTTPS = 1;
        else if ('~object' == FilterOption || '~object-subrequest' == FilterOption)
          0 > FONoDomains.indexOf('O') && (FONoDomains += 'O'),
          FONoHTTPS = 1;
        else if ('~media' == FilterOption)
          0 > FONoDomains.indexOf('M') && (FONoDomains += 'M'),
          FONoHTTPS = 1;
        else if ('~stylesheet' == FilterOption)
          0 > FONoDomains.indexOf('Y') && (FONoDomains += 'Y'),
          FONoHTTPS = 1;
        else if ('~other' == FilterOption)
          0 > FONoDomains.indexOf('J') && (FONoDomains += 'J'),
          FONoHTTPS = 1;
        else if ('~document' == FilterOption)
          0 > FONoDomains.indexOf('U') && (FONoDomains += 'U'),
          FONoHTTPS = 1;
        else if ('~webrtc' == FilterOption)
          0 > FONoDomains.indexOf('W') && (FONoDomains += 'W'),
          FONoHTTPS = 1;
        else if ('~websocket' == FilterOption)
          0 > FONoDomains.indexOf('Q') && (FONoDomains += 'Q'),
          FONoHTTPS = 1;
        else if ('~font' == FilterOption)
          0 > FONoDomains.indexOf('F') && (FONoDomains += 'F'),
          FONoHTTPS = 1;
        else if ('~ping' == FilterOption)
          0 > FONoDomains.indexOf('K') && (FONoDomains += 'K'),
          FONoHTTPS = 1;
        else if ('~csp_report' == FilterOption)
          0 > FONoDomains.indexOf('R') && (FONoDomains += 'R'),
          FONoHTTPS = 1;
        else if (0 == FilterOption.indexOf('domain=')) {
          for (a = FilterOption.substring(7).split('|'), b = a.length - 1; 0 <= b; --b) {
            c = a[b];
            '.' == c.slice(-1) && (c = c.slice(0, -1));
            if ('~' != c.slice(0, 1))                                           // domain=
              0 > FODomains.indexOf('|' + c + '|') && (FODomains = '|' + c + FODomains);
            else                                                                // domain=~
              c = c.substring(1),
              0 > FODomains2.indexOf('|' + c + '|') && (FODomains2 = '|' + c + FODomains2);
          }
          FONoHTTPS = 1;
        }
        else if (0 == FilterOption.indexOf('https=')) {                         // https
          if ('http' != Protocol) {
            Abort = 1;
            console.log("missing 'http://' in " + List[FilterIndex].trim());
            break;
          }
          for (a = (Target = FilterOption.slice(6).toLowerCase()).length, b = 0, c = 1; b < a; ++b)
            if (0 > 'abcdefghijklmnopqrstuvwxyz-0123456789.'.indexOf(Target[b])) {
              c = 0;
              break;
            }
          if (!c) {
            Abort = 1;
            console.log('invalid target domain: ' + Target);
            console.log(List[FilterIndex]);
            break;
          }
          if (!Block || RE) {
            Abort = 1;
            console.log('invalid filter: ' + List[FilterIndex]);
            break;
          }
          if (0 > (a = Host.lastIndexOf('.'))) {                                // 0 dots in Host
            console.log('invalid filter: ' + List[FilterIndex]);
            break;
          }
          else if (0 > (b = (c = Host.substring(0, a)).lastIndexOf('.')))       // 1 dot in Host
            Domain = Origin = c,
            TLD = Host.slice(a + 1);
          else if (0 <= (d = (e = Host.substring(0, b)).lastIndexOf('.')))      // 3 or more dots in Host
            if (0 > TLDs.indexOf(' ' + (f = Host.slice(d + 1)) + ' '))
              if (0 > TLDs.indexOf(' ' + (g = Host.slice(b + 1)) + ' '))
                if (0 > Host.substring(0, d).lastIndexOf('.') && !isNaN(Host.replace(/\./g, '')))// IP address
                  Domain = Origin = '',
                  TLD = Host;
                else                                                            // 0 dots in TLD
                  Domain = c,
                  Origin = Host.substring(b + 1, a),
                  TLD = Host.slice(a + 1);
              else                                                              // 1 dot in TLD
                Domain = e,
                Origin = Host.substring(d + 1, b),
                TLD = g;
            else if (0 > (a = (b = Host.substring(0, d)).lastIndexOf('.')))     // 2 dots in TLD
              Domain = Origin = b,
              TLD = f;
            else
              Domain = b,
              Origin = Host.substring(a + 1, d),
              TLD = f;
          else if (0 > TLDs.indexOf(' ' + Host.slice(b + 1) + ' '))             // 0 dots in TLD
            Domain = c,
            Origin = Host.substring(b + 1, a),
            TLD = Host.slice(a + 1);
          else                                                                  // 1 dot in TLD
            Domain = e,
            Origin = Host.substring(d + 1, b),
            TLD = Host.slice(b + 1);
          a = HTTPSUpgrade[TLD] || (HTTPSUpgrade[TLD] = {});
          if (0 > (b = Domain.indexOf('.')))
            if ('www.' + Origin + '.' + TLD == Target)
              if (a[5])
                a[5] += ' ' + Domain;
              else
                a[5] = Domain;
            else
              if (a[6])
                a[6] += ' ' + Domain + '^' + Target;
              else
                a[6] = Domain + '^' + Target;
          else if (Origin + '.' + TLD == 'www.' + Target)
            if (a[4])
              a[4] += ' ' + Domain.slice(b + 1);
            else
              a[4] = Domain.slice(b + 1);
          else
            if (a[6])
              a[6] += ' ' + Domain + '^' + Target;
            else
              a[6] = Domain + '^' + Target;
          !FONoHTTPS && !FOIndex && (Abort = 1);
        }
        else if ('https' == FilterOption) {
          if (RE) {
            Abort = 1;
            console.log('invalid filter: ' + List[FilterIndex]);
            break;
          }
          if (1 == Type || 3 == Type)
            if ('http' != Protocol) {
              Abort = 1;
              console.log("missing 'http://' in " + List[FilterIndex].trim());
              break;
            }
          if (0 > (a = Host.lastIndexOf('.'))) {                                // 0 dots in Host
            console.log('invalid filter: ' + List[FilterIndex]);
            break;
          }
          else if (0 > (b = (c = Host.substring(0, a)).lastIndexOf('.')))       // 1 dot in Host
            Domain = Origin = c,
            TLD = Host.slice(a + 1);
          else if (0 <= (d = (e = Host.substring(0, b)).lastIndexOf('.')))      // 3 or more dots in Host
            if (0 > TLDs.indexOf(' ' + (f = Host.slice(d + 1)) + ' '))
              if (0 > TLDs.indexOf(' ' + (g = Host.slice(b + 1)) + ' '))
                if (0 > Host.substring(0, d).lastIndexOf('.') && !isNaN(Host.replace(/\./g, '')))// IP address
                  Domain = Origin = '',
                  TLD = Host;
                else                                                            // 0 dots in TLD
                  Domain = c,
                  Origin = Host.substring(b + 1, a),
                  TLD = Host.slice(a + 1);
              else                                                              // 1 dot in TLD
                Domain = e,
                Origin = Host.substring(d + 1, b),
                TLD = g;
            else if (0 > (a = (b = Host.substring(0, d)).lastIndexOf('.')))     // 2 dots in TLD
              Domain = Origin = b,
              TLD = f;
            else
              Domain = b,
              Origin = Host.substring(a + 1, d),
              TLD = f;
          else if (0 > TLDs.indexOf(' ' + Host.slice(b + 1) + ' '))             // 0 dots in TLD
            Domain = c,
            Origin = Host.substring(b + 1, a),
            TLD = Host.slice(a + 1);
          else                                                                  // 1 dot in TLD
            Domain = e,
            Origin = Host.substring(d + 1, b),
            TLD = Host.slice(b + 1);
          a = HTTPSUpgrade[TLD] || (HTTPSUpgrade[TLD] = {});
          if (Block)
            b = '' != Protocol ? 0 : 2;
          else
            b = '' != Protocol ? 1 : 3;              
          if (q = a[b]) {
            if (1 != q)
              if ('' != Domain)
                a[b] += ' ' + Domain;
              else
                a[b] = 1;
          }
          else
            a[b] = '' != Domain ? Domain : 1;
          !FONoHTTPS && !FOIndex && (Abort = 1);
        }
        else if ('match-case' == FilterOption) {                                // match-case
          if ('' != Path || RE)
            MatchCase = 1,
            0 > FONoDomains.indexOf('a') && (FONoDomains = 'a' + FONoDomains),
            0 > FramesFO.indexOf('a') && (FramesFO = 'a' + FramesFO),
            0 > GenericBlockFO.indexOf('a') && (GenericBlockFO = 'a' + GenericBlockFO);
          FONoHTTPS = 1;
        }
        else if ('collapse' == FilterOption)                                    // collapse
          0 > WhiteCollapse.indexOf(' ' + (www ? Filter.slice(4) : Filter) + ' ') && 0 > FramesFO.indexOf('c') && (FramesFO += 'c'),
          FONoHTTPS = 1;
        else if ('~collapse' == FilterOption) {                                 // ~collapse
          0 <= (a = FramesFO.indexOf('c')) && (FramesFO = FramesFO.substring(0, a) + FramesFO.slice(a + 1));
          WhiteCollapse += (a = www ? Filter.slice(4) : Filter) + ' ';
          if (0 <= (b = FilterDomains.indexOf(' ' + a + '^'))) {
            c = FilterDomains.slice(b + (a = a.length) + 2);
            d = c.indexOf(' ');
            if (0 <= (e = c.slice(0, d).indexOf('c')))
              if (2 > d)
                FilterDomains = FilterDomains.substring(0, b) + FilterDomains.slice(b + a + 3);
              else
                FilterDomains = FilterDomains.slice(0, (b = b + a + 2 + e)) + FilterDomains.substring(b + 1);
          }
          FONoHTTPS = 1;
        }
        else if ('donottrack' == FilterOption) {                                // donottrack
          Abort = 1;
          break;
        }
        else if ('elemhide' == FilterOption) {                                  // elemhide
          if (Block) {
            console.log('error - filter must be whitelisted: ' + List[FilterIndex]);
            Abort = 1;
            break;
          }
          0 > WhiteElemhide.indexOf(' ' + (www ? Filter.slice(4) : Filter) + ' ') && 0 > FramesFO.indexOf('e') && (FramesFO += 'e');
          FONoHTTPS = 1;
        }
        else if ('~elemhide' == FilterOption) {                                 // ~elemhide
          if (Block) {
            console.log('error - filter must be whitelisted: ' + List[FilterIndex]);
            Abort = 1;
            break;
          }
          0 <= (a = FramesFO.indexOf('e')) && (FramesFO = FramesFO.substring(0, a) + FramesFO.slice(a + 1));
          WhiteElemhide += (a = www ? Filter.slice(4) : Filter) + ' ';
          if (0 <= (b = FilterDomains.indexOf(' ' + a + '^'))) {
            c = FilterDomains.slice(b + (a = a.length) + 2);
            d = c.indexOf(' ');
            if (0 <= (e = c.slice(0, d).indexOf('e')))
              if (2 > d)
                FilterDomains = FilterDomains.substring(0, b) + FilterDomains.slice(b + a + 3);
              else
                FilterDomains = FilterDomains.slice(0, (b = b + a + 2 + e)) + FilterDomains.substring(b + 1);
          }
          FONoHTTPS = 1;
        }
        else if ('genericblock' == FilterOption) {                              // genericblock
          if (Block) {
            console.log('error - filter must be whitelisted: ' + List[FilterIndex]);
            Abort = 1;
            break;
          }
          FONoHTTPS = 1;
          GenericBlockFO += 'b';
        }
        else if ('generichide' == FilterOption) {                               // generichide
          if (Block) {
            console.log('error - filter must be whitelisted: ' + List[FilterIndex]);
            Abort = 1;
            break;
          }
          0 > FramesFO.indexOf('h') && (FramesFO += 'h');
          FONoHTTPS = 1
        }
        else if (0 == FilterOption.indexOf('sitekey=')) {                       // sitekey
          Abort = 1;
          break;
        }
        else if ('' == FilterOption) {                                          // empty
        }
        else {                                                                  // invalid filter option
          a = 0;
          if (0 > 'abcdefghijklmnopqrstuvwxyz~ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(FilterOption[0]))
            a = 1;
          for (b = 0 > (c = FilterOption.indexOf('=')) ? FilterOption.slice(1) : FilterOption.slice(1, c), c = b.length - 1; 0 <= c; --c)
            if (0 > 'abcdefghijklmnopqrstuvwxyz-ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(b[c])) {
              a = 1;
              break;
            }
          if (a) {
            Path = '/' + Path + '$' + FilterOptions.join('');
            FODomains = FODomains2 = '|';
            FONoDomains = '';
            break;
          }
          Abort = 1;
          //console.log('invalid filter option: ' + FilterOption);
          //console.log(List[FilterIndex]);
          break;
        }
      if (Abort)
        continue;
      ('tT' == FONoDomains || 'Tt' == FONoDomains) && (FONoDomains = '');
      www && (Host = Host.slice(4));
      if (0 <= GenericBlockFO.indexOf('b')) {
        GenericBlockFilter = Filter;
        1 < GenericBlockFO.length && (GenericBlockFO = 'ab');
        if ('' == Path) {                                                       // no URL
          if (RE || ('' == Host && '' != Protocol)) {                           // GeneralBlockRegexp
            if (RE)
              !MatchCase && (GenericBlockFilter = GenericBlockFilter.toLowerCase());
            else
              GenericBlockFilter = '';
            if (!(0 <= (b = GenericBlockFilter.indexOf('*')) && b < GenericBlockFilter.lastIndexOf('^')))
              a = 0;
            else
              a = 1;
            if ('|' == GenericBlockFilter.slice(-1))
              GenericBlockFilter = GenericBlockFilter.slice(0, -1) + '$',
              a = 1;
            if ('' == Protocol)
              b = GenericBlockRegexp[a][0];
            else
              b = ((b = GenericBlockRegexp[a][1])[Protocol] || (b[Protocol] = {}));
            b = b[c = GenericBlockFilter.slice(0, 1).toLowerCase()] || (b[c] = []);
            if ('*' == c)
              GenericBlockFilter = GenericBlockFilter.substring(1);
            if (a)
              d = GetTokenNoRegExp(GenericBlockFilter),
              0 <= GenericBlockFilter.indexOf('/') && (GenericBlockFilter = GenericBlockFilter.replace(/\//g, '\\/')),
              0 <= GenericBlockFilter.indexOf('.') && (GenericBlockFilter = GenericBlockFilter.replace(/\./g, '\\.')),
              0 <= GenericBlockFilter.indexOf('|') && (GenericBlockFilter = GenericBlockFilter.replace(/\|/g, '\\|')),
              0 <= GenericBlockFilter.indexOf('?') && (GenericBlockFilter = GenericBlockFilter.replace(/\?/g, '\\?')),
              0 <= GenericBlockFilter.indexOf('+') && (GenericBlockFilter = GenericBlockFilter.replace(/\+/g, '\\+')),
              0 <= GenericBlockFilter.indexOf('(') && (GenericBlockFilter = GenericBlockFilter.replace(/\(/g, '\\(')),
              0 <= GenericBlockFilter.indexOf(')') && (GenericBlockFilter = GenericBlockFilter.replace(/\)/g, '\\)')),
              0 <= GenericBlockFilter.indexOf('[') && (GenericBlockFilter = GenericBlockFilter.replace(/\[/g, '\\[')),
              0 <= GenericBlockFilter.indexOf(']') && (GenericBlockFilter = GenericBlockFilter.replace(/\]/g, '\\]')),
              0 <= GenericBlockFilter.indexOf('{') && (GenericBlockFilter = GenericBlockFilter.replace(/\{/g, '\\{')),
              0 <= GenericBlockFilter.indexOf('}') && (GenericBlockFilter = GenericBlockFilter.replace(/\}/g, '\\}')),
              0 <= GenericBlockFilter.indexOf('*') && (GenericBlockFilter = GenericBlockFilter.replace(/\*/g, '(.+|)')),
              0 <= GenericBlockFilter.indexOf('$') && (GenericBlockFilter = GenericBlockFilter.replace(/\*/g, '\\$')),
              0 <= GenericBlockFilter.indexOf('^') && (GenericBlockFilter = GenericBlockFilter.replace(/\^/g, '[^a-z0-9A-Z-._%]'));
            if ('*' != c)
              GenericBlockFilter = GenericBlockFilter.substring(1);
            c = 1;
            if (a)
              for (e = b.length - 2; 0 < e; e -= 3) {
                if (GenericBlockFO == b[e]) {
                  b[e - 1].push(GenericBlockFilter);
                  c = 0;
                  b[e + 1].push(d);
                  break;
                }
              }
            else
              if ('' != GenericBlockFilter)
                for (e = b.length - 1; 0 < e; e -= 2) {
                  if (GenericBlockFO == b[e]) {
                    b[e - 1].push(GenericBlockFilter);
                    c = 0;
                    break;
                  }
                }
              else
                for (e = b.length - 1; 0 <= e; e--)
                  if (GenericBlockFO == b[e]) {
                    c = 0;
                    break;
                  }
            if (c) {
              GenericBlockTest = 1;
              if (a)
                b.push([GenericBlockFilter], GenericBlockFO, [d]);
              else
                if ('' != GenericBlockFilter)
                  b.push([GenericBlockFilter], GenericBlockFO);
                else
                  GenericBlockRegexp[0][1][Protocol][''] = 1;
            }
          }
          else if ('' == Protocol)
            if ('' != Host)
              GenericBlockDomains += Host + '^' + GenericBlockFO + ' ';
            else
              GenericBlockNoDomains = 1;
          else if ('https' == Protocol)
            GenericBlockHTTPSURLs += Host + '^$' + GenericBlockFO + ' ';
          else if ('http' == Protocol)
            GenericBlockHTTPURLs += Host + '^$' + GenericBlockFO + ' ';
          else
            if (GenericBlockProtocolsURLs[Protocol])
              GenericBlockProtocolsURLs[Protocol] += Host + '^$' + GenericBlockFO + ' ';
            else
              GenericBlockProtocolsURLs[Protocol] = ' ' + Host + '^$' + GenericBlockFO + ' ';
        }
        else if (0 > GenericBlockDomains.indexOf(' ' + Host + ' ')) {           // URL
          GenericBlockPath = Path;
          !MatchCase && (GenericBlockPath = GenericBlockPath.toLowerCase());
          a = GenericBlockPath.indexOf('*');
          if ('|' == GenericBlockPath.slice(-1))
            b = 1,
            GenericBlockPath = GenericBlockPath.slice(0, -1);
          else
            b = 0;
          if (0 > a && 0 > GenericBlockPath.indexOf('^'))                       // normal characters
            a = b ? 3 : 1,
            GenericBlockPath = GenericBlockPath.slice(1);
          else if (0 <= a && a < GenericBlockPath.lastIndexOf('^'))             // Reg Exp
            a = 9,
            0 <= GenericBlockPath.indexOf('/') && (GenericBlockPath = GenericBlockPath.replace(/\//g, '\\/')),
            0 <= GenericBlockPath.indexOf('.') && (GenericBlockPath = GenericBlockPath.replace(/\./g, '\\.')),
            0 <= GenericBlockPath.indexOf('|') && (GenericBlockPath = GenericBlockPath.replace(/\|/g, '\\|')),
            0 <= GenericBlockPath.indexOf('?') && (GenericBlockPath = GenericBlockPath.replace(/\?/g, '\\?')),
            0 <= GenericBlockPath.indexOf('+') && (GenericBlockPath = GenericBlockPath.replace(/\+/g, '\\+')),
            0 <= GenericBlockPath.indexOf('(') && (GenericBlockPath = GenericBlockPath.replace(/\(/g, '\\(')),
            0 <= GenericBlockPath.indexOf(')') && (GenericBlockPath = GenericBlockPath.replace(/\)/g, '\\)')),
            0 <= GenericBlockPath.indexOf('[') && (GenericBlockPath = GenericBlockPath.replace(/\[/g, '\\[')),
            0 <= GenericBlockPath.indexOf(']') && (GenericBlockPath = GenericBlockPath.replace(/\]/g, '\\]')),
            0 <= GenericBlockPath.indexOf('{') && (GenericBlockPath = GenericBlockPath.replace(/\{/g, '\\{')),
            0 <= GenericBlockPath.indexOf('}') && (GenericBlockPath = GenericBlockPath.replace(/\}/g, '\\}')),
            0 <= GenericBlockPath.indexOf('*') && (GenericBlockPath = GenericBlockPath.replace(/\*/g, '(.+|)')),
            0 <= GenericBlockPath.indexOf('$') && (GenericBlockPath = GenericBlockPath.replace(/\*/g, '\\$')),
            0 <= GenericBlockPath.indexOf('^') && (GenericBlockPath = GenericBlockPath.replace(/\^/g, '[^a-z0-9A-Z-._%]'));
          else                                                                  // special characters
            a = b ? 7 : 5;
          if ('' == Protocol)
            GenericBlockURLs += Host + '^' + a + GenericBlockPath + '$' + GenericBlockFO + ' ';
          else if ('https' == Protocol)
            GenericBlockHTTPSURLs += Host + '^' + a + GenericBlockPath + '$' + GenericBlockFO + ' ';
          else if ('http' == Protocol)
            GenericBlockHTTPURLs += Host + '^' + a + GenericBlockPath + '$' + GenericBlockFO + ' ';
          else
            if (GenericBlockProtocolsURLs[Protocol])
              GenericBlockProtocolsURLs[Protocol] += Host + '^' + a + GenericBlockPath + '$' + GenericBlockFO + ' ';
            else
              GenericBlockProtocolsURLs[Protocol] = ' ' + Host + '^' + a + GenericBlockPath + '$' + GenericBlockFO + ' ';
        }
        if ('' == FramesFO && ('' == FONoDomains || 'a' == FONoDomains) && '|' == FODomains && '|' == FODomains2)
          continue;
      }
      if ('' != FramesFO) {
        FramesFilter = Filter;
        FramesFO = FramesFO.split('').sort().join('');
        if ('' == Path) {                                                       // no URL
          if (RE || ('' == Host && '' != Protocol)) {                           // FramesRegexp
            if (RE)
              !MatchCase && (FramesFilter = FramesFilter.toLowerCase());
            else
              FramesFilter = '';
            if (!(0 <= (b = FramesFilter.indexOf('*')) && b < FramesFilter.lastIndexOf('^')))
              a = 0;
            else
              a = 1;
            if ('|' == FramesFilter.slice(-1))
              FramesFilter = FramesFilter.slice(0, -1) + '$',
              a = 1;
            if ('' == Protocol)
              b = FramesRegexp[a][0];
            else
              b = ((b = FramesRegexp[a][1])[Protocol] || (b[Protocol] = {}));
            b = b[c = FramesFilter.slice(0, 1).toLowerCase()] || (b[c] = []);
            if ('*' == c)
              FramesFilter = FramesFilter.substring(1);
            if (a)
              d = GetTokenNoRegExp(FramesFilter),
              0 <= FramesFilter.indexOf('/') && (FramesFilter = FramesFilter.replace(/\//g, '\\/')),
              0 <= FramesFilter.indexOf('.') && (FramesFilter = FramesFilter.replace(/\./g, '\\.')),
              0 <= FramesFilter.indexOf('|') && (FramesFilter = FramesFilter.replace(/\|/g, '\\|')),
              0 <= FramesFilter.indexOf('?') && (FramesFilter = FramesFilter.replace(/\?/g, '\\?')),
              0 <= FramesFilter.indexOf('+') && (FramesFilter = FramesFilter.replace(/\+/g, '\\+')),
              0 <= FramesFilter.indexOf('(') && (FramesFilter = FramesFilter.replace(/\(/g, '\\(')),
              0 <= FramesFilter.indexOf(')') && (FramesFilter = FramesFilter.replace(/\)/g, '\\)')),
              0 <= FramesFilter.indexOf('[') && (FramesFilter = FramesFilter.replace(/\[/g, '\\[')),
              0 <= FramesFilter.indexOf(']') && (FramesFilter = FramesFilter.replace(/\]/g, '\\]')),
              0 <= FramesFilter.indexOf('{') && (FramesFilter = FramesFilter.replace(/\{/g, '\\{')),
              0 <= FramesFilter.indexOf('}') && (FramesFilter = FramesFilter.replace(/\}/g, '\\}')),
              0 <= FramesFilter.indexOf('*') && (FramesFilter = FramesFilter.replace(/\*/g, '(.+|)')),
              0 <= FramesFilter.indexOf('$') && (FramesFilter = FramesFilter.replace(/\*/g, '\\$')),
              0 <= FramesFilter.indexOf('^') && (FramesFilter = FramesFilter.replace(/\^/g, '[^a-z0-9A-Z-._%]'));
            if ('*' != c)
              FramesFilter = FramesFilter.substring(1);
            c = 1;
            if (a)
              for (e = b.length - 2; 0 < e; e -= 3) {
                if (FramesFO == b[e]) {
                  b[e - 1].push(FramesFilter);
                  c = 0;
                  b[e + 1].push(d);
                  break;
                }
              }
            else
              if ('' != FramesFilter)
                for (e = b.length - 1; 0 < e; e -= 2) {
                  if (FramesFO == b[e]) {
                    b[e - 1].push(FramesFilter);
                    c = 0;
                    break;
                  }
                }
              else
                for (e = b.length - 1; 0 <= e; e--)
                  if (FramesFO == b[e]) {
                    c = 0;
                    break;
                  }
            if (c) {
              if (a)
                b.push([FramesFilter], FramesFO, [d]);
              else
                if ('' != FramesFilter)
                  b.push([FramesFilter], FramesFO);
                else
                  b.push(FramesFO);
            }
          }
          else if ('' == Protocol)
            if ('' != Host)
              FramesDomains += Host + '^' + FramesFO + ' ';
            else
              FramesNoDomains.push(FramesFO);
          else if ('https' == Protocol)
            FramesHTTPSURLs += Host + '^$' + FramesFO + ' ';
          else if ('http' == Protocol)
            FramesHTTPURLs += Host + '^$' + FramesFO + ' ';
          else
            if (FramesProtocolsURLs[Protocol])
              FramesProtocolsURLs[Protocol] += Host + '^$' + FramesFO + ' ';
            else
              FramesProtocolsURLs[Protocol] = ' ' + Host + '^$' + FramesFO + ' ';
        }
        else if (0 > FramesDomains.indexOf(' ' + Host + ' ')) {                 // URL
          FramesPath = Path;
          !MatchCase && (FramesPath = FramesPath.toLowerCase());
          a = FramesPath.indexOf('*');
          if ('|' == FramesPath.slice(-1))
            b = 1,
            FramesPath = FramesPath.slice(0, -1);
          else
            b = 0;
          if (0 > a && 0 > FramesPath.indexOf('^'))                             // normal characters
            a = b ? 3 : 1,
            FramesPath = FramesPath.slice(1);
          else if (0 <= a && a < FramesPath.lastIndexOf('^'))                   // Reg Exp
            a = 9,
            0 <= FramesPath.indexOf('/') && (FramesPath = FramesPath.replace(/\//g, '\\/')),
            0 <= FramesPath.indexOf('.') && (FramesPath = FramesPath.replace(/\./g, '\\.')),
            0 <= FramesPath.indexOf('|') && (FramesPath = FramesPath.replace(/\|/g, '\\|')),
            0 <= FramesPath.indexOf('?') && (FramesPath = FramesPath.replace(/\?/g, '\\?')),
            0 <= FramesPath.indexOf('+') && (FramesPath = FramesPath.replace(/\+/g, '\\+')),
            0 <= FramesPath.indexOf('(') && (FramesPath = FramesPath.replace(/\(/g, '\\(')),
            0 <= FramesPath.indexOf(')') && (FramesPath = FramesPath.replace(/\)/g, '\\)')),
            0 <= FramesPath.indexOf('[') && (FramesPath = FramesPath.replace(/\[/g, '\\[')),
            0 <= FramesPath.indexOf(']') && (FramesPath = FramesPath.replace(/\]/g, '\\]')),
            0 <= FramesPath.indexOf('{') && (FramesPath = FramesPath.replace(/\{/g, '\\{')),
            0 <= FramesPath.indexOf('}') && (FramesPath = FramesPath.replace(/\}/g, '\\}')),
            0 <= FramesPath.indexOf('*') && (FramesPath = FramesPath.replace(/\*/g, '(.+|)')),
            0 <= FramesPath.indexOf('$') && (FramesPath = FramesPath.replace(/\*/g, '\\$')),
            0 <= FramesPath.indexOf('^') && (FramesPath = FramesPath.replace(/\^/g, '[^a-z0-9A-Z-._%]'));
          else                                                                  // special characters
            a = b ? 7 : 5;
          if ('' == Protocol)
            FramesURLs += Host + '^' + a + FramesPath + '$' + FramesFO + ' ';
          else if ('https' == Protocol)
            FramesHTTPSURLs += Host + '^' + a + FramesPath + '$' + FramesFO + ' ';
          else if ('http' == Protocol)
            FramesHTTPURLs += Host + '^' + a + FramesPath + '$' + FramesFO + ' ';
          else
            if (FramesProtocolsURLs[Protocol])
              FramesProtocolsURLs[Protocol] += Host + '^' + a + FramesPath + '$' + FramesFO + ' ';
            else
              FramesProtocolsURLs[Protocol] = ' ' + Host + '^' + a + FramesPath + '$' + FramesFO + ' ';
        }
        if (('' == FONoDomains || 'a' == FONoDomains) && '|' == FODomains && '|' == FODomains2)
          continue;
      }
      if ('' == Path)                                                           // no URL
        if (RE || ('' == Host && '' != Protocol)) {                             // Regexp
          if ('|' != FODomains || '|' != FODomains2)
            continue;
          if (RE)
            !MatchCase && (Filter = Filter.toLowerCase());
          else
            Filter = '';
          if (!(0 <= (b = Filter.indexOf('*')) && b < Filter.lastIndexOf('^')))
            a = 0;
          else
            a = 1;
          if ('|' == Filter.slice(-1))
            Filter = Filter.slice(0, -1) + '$',
            a = 1;
          if (Block)
            '' == Protocol ? b = Regexp[a][0] : b = ((b = Regexp[a][1])[Protocol] || (b[Protocol] = {}));
          else
            '' == Protocol ? b = RegexpW[a][0] : b = ((b = RegexpW[a][1])[Protocol] || (b[Protocol] = {}));
          b = b[c = Filter.slice(0, 1).toLowerCase()] || (b[c] = []);
          if ('*' == c)
            Filter = Filter.substring(1);
          if (a)
            d = GetTokenNoRegExp(Filter),
            0 <= Filter.indexOf('/') && (Filter = Filter.replace(/\//g, '\\/')),
            0 <= Filter.indexOf('.') && (Filter = Filter.replace(/\./g, '\\.')),
            0 <= Filter.indexOf('|') && (Filter = Filter.replace(/\|/g, '\\|')),
            0 <= Filter.indexOf('?') && (Filter = Filter.replace(/\?/g, '\\?')),
            0 <= Filter.indexOf('+') && (Filter = Filter.replace(/\+/g, '\\+')),
            0 <= Filter.indexOf('(') && (Filter = Filter.replace(/\(/g, '\\(')),
            0 <= Filter.indexOf(')') && (Filter = Filter.replace(/\)/g, '\\)')),
            0 <= Filter.indexOf('[') && (Filter = Filter.replace(/\[/g, '\\[')),
            0 <= Filter.indexOf(']') && (Filter = Filter.replace(/\]/g, '\\]')),
            0 <= Filter.indexOf('{') && (Filter = Filter.replace(/\{/g, '\\{')),
            0 <= Filter.indexOf('}') && (Filter = Filter.replace(/\}/g, '\\}')),
            0 <= Filter.indexOf('*') && (Filter = Filter.replace(/\*/g, '(.+|)')),
            0 <= Filter.indexOf('$') && (Filter = Filter.replace(/\*/g, '\\$')),
            0 <= Filter.indexOf('^') && (Filter = Filter.replace(/\^/g, '[^a-z0-9A-Z-._%]'));
          if ('*' != c)
            Filter = Filter.substring(1);
          FODomains = '|' == FODomains ? '' : 'd' + FODomains.slice(1, -1);
          FODomains2 = '|' == FODomains2 ? '' : 'D' + FODomains2.slice(1, -1);
          FONoDomains = '' != FONoDomains ? FONoDomains.split('').sort().join('') : 0;
          c = ('0' != FONoDomains ? FONoDomains : '') + FODomains + FODomains2;
          '' == c && (c = 0);
          e = 1;
          if (a)
            for (f = b.length - 2; 0 < f; f -= 3) {
              if (c == b[f]) {
                b[f - 1].push(Filter);
                e = 0;
                b[f + 1].push(d);
                break;
              }
            }
          else
            if ('' != Filter)
              for (f = b.length - 1; 0 < f; f -= 2) {
                if (c == b[f]) {
                  b[f - 1].push(Filter);
                  e = 0;
                  break;
                }
              }
            else
              for (f = b.length - 1; 0 <= f; f--)
                if (c == b[f]) {
                  e = 0;
                  break;
                }
          if (e) {
            if (a)
              b.push([Filter], c, [d]);
            else
              if ('' != Filter)
                b.push([Filter], c);
              else
                b.push(c);
          }
        }
        else if ('' == FONoDomains && '|' == FODomains && '|' == FODomains2) {  // domain
          if (Block) {
            if ('' == Protocol) {
              if (0 > BlockDomains.indexOf(' ' + Host + ' ') && 0 > WhiteDomains.indexOf(' ' + Host + ' ')) {
                for ( ; ; )
                  if (0 > (g = BlockDomains.indexOf('.' + Host + ' ')))
                    break;
                  else
                    BlockDomains = BlockDomains.substring(0, BlockDomains.substring(0, g).lastIndexOf(' ')) + BlockDomains.substring(g + Host.length + 1);
                for (g = 1, h = Host; ; )
                  if (0 <= BlockDomains.indexOf(' ' + h + ' ') || 0 <= WhiteDomains.indexOf(' ' + h + ' ')) {
                    g = 0;
                    break;
                  }
                  else if (0 <= (i = h.indexOf('.')))
                    h = h.substring(i + 1);
                  else
                    break;
                if (g) {
                  BlockDomains += Host + ' ';
                  for ( ; ; )
                    if (0 > (g = BlockDomainsF.indexOf(' ' + Host + '^')))
                      break;
                    else
                      BlockDomainsF = BlockDomainsF.substring(0, g) + BlockDomainsF.substring((g = g + Host.length + 2) + BlockDomainsF.substring(g).indexOf(' '));
                  for ( ; ; )
                    if (0 > (g = BlockURLs.indexOf(' ' + Host + '^')))
                      break;
                    else
                      BlockURLs = BlockURLs.substring(0, g) + BlockURLs.substring((g = g + Host.length + 2) + BlockURLs.substring(g).indexOf(' '));
                  for ( ; ; )
                    if (0 > (g = BlockHTTPSURLs.indexOf(' ' + Host + '^')))
                      break;
                    else
                      BlockHTTPSURLs = BlockHTTPSURLs.substring(0, g) + BlockHTTPSURLs.substring((g = g + Host.length + 2) + BlockHTTPSURLs.substring(g).indexOf(' '));
                  for ( ; ; )
                    if (0 > (g = BlockHTTPURLs.indexOf(' ' + Host + '^')))
                      break;
                    else
                      BlockHTTPURLs = BlockHTTPURLs.substring(0, g) + BlockHTTPURLs.substring((g = g + Host.length + 2) + BlockHTTPURLs.substring(g).indexOf(' '));
                  for ( ; ; )
                    if (0 > (g = BlockWSSURLs.indexOf(' ' + Host + '^')))
                      break;
                    else
                      BlockWSSURLs = BlockWSSURLs.substring(0, g) + BlockWSSURLs.substring((g = g + Host.length + 2) + BlockWSSURLs.substring(g).indexOf(' '));
                  for ( ; ; )
                    if (0 > (g = BlockWSURLs.indexOf(' ' + Host + '^')))
                      break;
                    else
                      BlockWSURLs = BlockWSURLs.substring(0, g) + BlockWSURLs.substring((g = g + Host.length + 2) + BlockWSURLs.substring(g).indexOf(' '));
                 }
              }
            }
            else if ('https' == Protocol)
              BlockHTTPSURLs += Host + '^ ';
            else if ('http' == Protocol)
              BlockHTTPURLs += Host + '^ ';
            else if ('wss' == Protocol)
              BlockWSSURLs += Host + '^ ';
            else if ('ws' == Protocol)
              BlockWSURLs += Host + '^ ';
            else
              if (BlockProtocolsURLs[Protocol])
                BlockProtocolsURLs[Protocol] += Host + '^ ';
              else
                BlockProtocolsURLs[Protocol] = ' ' + Host + '^ ';
          }
          else {
            if ('' == Protocol) {
              if (0 > WhiteDomains.indexOf(' ' + Host + ' ')) {
                for ( ; ; )
                  if (0 > (g = WhiteDomains.indexOf('.' + Host + ' ')))
                    break;
                  else
                    WhiteDomains = WhiteDomains.substring(0, WhiteDomains.substring(0, g).lastIndexOf(' ')) + WhiteDomains.substring(g + Host.length + 1);
                for (g = 1, h = Host; ; )
                  if (0 <= WhiteDomains.indexOf(' ' + h + ' ')) {
                    g = 0;
                    break;
                  }
                  else if (0 <= (i = h.indexOf('.')))
                    h = h.substring(i + 1);
                  else
                    break;
                if (g) {
                  WhiteDomains += Host + ' ';
                  for ( ; ; )
                    if (0 > (g = WhiteDomainsF.indexOf(' ' + Host + '^')))
                      break;
                    else
                      WhiteDomainsF = WhiteDomainsF.substring(0, g) + WhiteDomainsF.substring((g = g + Host.length + 2) + WhiteDomainsF.substring(g).indexOf(' '));
                  for ( ; ; )
                    if (0 > (g = WhiteURLs.indexOf(' ' + Host + '^')))
                      break;
                    else
                      WhiteURLs = WhiteURLs.substring(0, g) + WhiteURLs.substring((g = g + Host.length + 2) + WhiteURLs.substring(g).indexOf(' '));
                  for ( ; ; )
                    if (0 > (g = WhiteHTTPSURLs.indexOf(' ' + Host + '^')))
                      break;
                    else
                      WhiteHTTPSURLs = WhiteHTTPSURLs.substring(0, g) + WhiteHTTPSURLs.substring((g = g + Host.length + 2) + WhiteHTTPSURLs.substring(g).indexOf(' '));
                  for ( ; ; )
                    if (0 > (g = WhiteHTTPURLs.indexOf(' ' + Host + '^')))
                      break;
                    else
                      WhiteHTTPURLs = WhiteHTTPURLs.substring(0, g) + WhiteHTTPURLs.substring((g = g + Host.length + 2) + WhiteHTTPURLs.substring(g).indexOf(' '));
                  for ( ; ; )
                    if (0 > (g = WhiteWSSURLs.indexOf(' ' + Host + '^')))
                      break;
                    else
                      WhiteWSSURLs = WhiteWSSURLs.substring(0, g) + WhiteWSSURLs.substring((g = g + Host.length + 2) + WhiteWSSURLs.substring(g).indexOf(' '));
                  for ( ; ; )
                    if (0 > (g = WhiteWSURLs.indexOf(' ' + Host + '^')))
                      break;
                    else
                      WhiteWSURLs = WhiteWSURLs.substring(0, g) + WhiteWSURLs.substring((g = g + Host.length + 2) + WhiteWSURLs.substring(g).indexOf(' '));
                  for ( ; ; )
                    if (0 > (g = BlockURLs.indexOf(' ' + Host + '^')))
                      break;
                    else
                      BlockURLs = BlockURLs.substring(0, g) + BlockURLs.substring((g = g + Host.length + 2) + BlockURLs.substring(g).indexOf(' '));
                  for ( ; ; )
                    if (0 > (g = BlockHTTPSURLs.indexOf(' ' + Host + '^')))
                      break;
                    else
                      BlockHTTPSURLs = BlockHTTPSURLs.substring(0, g) + BlockHTTPSURLs.substring((g = g + Host.length + 2) + BlockHTTPSURLs.substring(g).indexOf(' '));
                  for ( ; ; )
                    if (0 > (g = BlockHTTPURLs.indexOf(' ' + Host + '^')))
                      break;
                    else
                      BlockHTTPURLs = BlockHTTPURLs.substring(0, g) + BlockHTTPURLs.substring((g = g + Host.length + 2) + BlockHTTPURLs.substring(g).indexOf(' '));
                  for ( ; ; )
                    if (0 > (g = BlockWSSURLs.indexOf(' ' + Host + '^')))
                      break;
                    else
                      BlockWSSURLs = BlockWSSURLs.substring(0, g) + BlockWSSURLs.substring((g = g + Host.length + 2) + BlockWSSURLs.substring(g).indexOf(' '));
                  for ( ; ; )
                    if (0 > (g = BlockWSURLs.indexOf(' ' + Host + '^')))
                      break;
                    else
                      BlockWSURLs = BlockWSURLs.substring(0, g) + BlockWSURLs.substring((g = g + Host.length + 2) + BlockWSURLs.substring(g).indexOf(' '));
                }
              }
            }
            else if ('https' == Protocol)
              WhiteHTTPSURLs += Host + '^ ';
            else if ('http' == Protocol)
              WhiteHTTPURLs += Host + '^ ';
            else if ('wss' == Protocol)
              WhiteWSSURLs += Host + '^ ';
            else if ('ws' == Protocol)
              WhiteWSURLs += Host + '^ ';
            else
              if (WhiteProtocolsURLs[Protocol])
                WhiteProtocolsURLs[Protocol] += Host + '^ ';
              else
                WhiteProtocolsURLs[Protocol] = ' ' + Host + '^ ';
          }
        }
        else {
          if (Block) {
            if (0 > BlockDomains.indexOf(' ' + Host + ' ') && 0 > WhiteDomains.indexOf(' ' + Host + ' '))
              if ('' == Protocol)
                if ('' != Host)
                  if ('t' != FONoDomains)
                    BlockDomainsF += Host + '^' + FONoDomains + ('|' == FODomains ? '' : 'd' + FODomains.slice(1, -1)) + ('|' == FODomains2 ? '' : 'D' + FODomains2.slice(1, -1)) + ' ';
                  else {
                    if (0 > BlockDomainsTP.indexOf(' ' + Host + ' ') && 0 > WhiteDomainsTP.indexOf(' ' + Host + ' ')) {
                      BlockDomainsTP += Host + ' ';
                      for (g = 0; ; )
                        if (0 > (h = BlockURLs.substring(g).indexOf(' ' + Host + '^')))
                          break;
                        else {
                          if (1 < (i = BlockURLs.substring(g + h).indexOf('$')) && 0 > BlockURLs.substring(g + h + 1, (i = g + h + i)).indexOf(' ') && 0 <= BlockURLs.substring(i, (i = i + BlockURLs.substring(i).indexOf(' '))).indexOf('t'))
                            g += h,
                            BlockURLs = BlockURLs.substring(0, g) + BlockURLs.substring(i);
                          else
                            g += h + 2;
                        }
                      for (g = 0; ; )
                        if (0 > (h = BlockHTTPSURLs.substring(g).indexOf(' ' + Host + '^')))
                          break;
                        else {
                          if (1 < (i = BlockHTTPSURLs.substring(g + h).indexOf('$')) && 0 > BlockHTTPSURLs.substring(g + h + 1, (i = g + h + i)).indexOf(' ') && 0 <= BlockHTTPSURLs.substring(i, (i = i + BlockHTTPSURLs.substring(i).indexOf(' '))).indexOf('t'))
                            g += h,
                            BlockHTTPSURLs = BlockHTTPSURLs.substring(0, g) + BlockHTTPSURLs.substring(i);
                          else
                            g += h + 2;
                        }
                      for (g = 0; ; )
                        if (0 > (h = BlockHTTPURLs.substring(g).indexOf(' ' + Host + '^')))
                          break;
                        else {
                          if (1 < (i = BlockHTTPURLs.substring(g + h).indexOf('$')) && 0 > BlockHTTPURLs.substring(g + h + 1, (i = g + h + i)).indexOf(' ') && 0 <= BlockHTTPURLs.substring(i, (i = i + BlockHTTPURLs.substring(i).indexOf(' '))).indexOf('t'))
                            g += h,
                            BlockHTTPURLs = BlockHTTPURLs.substring(0, g) + BlockHTTPURLs.substring(i);
                          else
                            g += h + 2;
                        }
                      for (g = 0; ; )
                        if (0 > (h = BlockWSSURLs.substring(g).indexOf(' ' + Host + '^')))
                          break;
                        else {
                          if (1 < (i = BlockWSSURLs.substring(g + h).indexOf('$')) && 0 > BlockWSSURLs.substring(g + h + 1, (i = g + h + i)).indexOf(' ') && 0 <= BlockWSSURLs.substring(i, (i = i + BlockWSSURLs.substring(i).indexOf(' '))).indexOf('t'))
                            g += h,
                            BlockWSSURLs = BlockWSSURLs.substring(0, g) + BlockWSSURLs.substring(i);
                          else
                            g += h + 2;
                        }
                      for (g = 0; ; )
                        if (0 > (h = BlockWSURLs.substring(g).indexOf(' ' + Host + '^')))
                          break;
                        else {
                          if (1 < (i = BlockWSURLs.substring(g + h).indexOf('$')) && 0 > BlockWSURLs.substring(g + h + 1, (i = g + h + i)).indexOf(' ') && 0 <= BlockWSURLs.substring(i, (i = i + BlockWSURLs.substring(i).indexOf(' '))).indexOf('t'))
                            g += h,
                            BlockWSURLs = BlockWSURLs.substring(0, g) + BlockWSURLs.substring(i);
                          else
                            g += h + 2;
                        }
                    }
                  }
                else
                  BlockNoDomains.push(FONoDomains + ('|' != FODomains ? 'd' + FODomains.slice(1, -1) : '') + ('|' != FODomains2 ? 'D' + FODomains2.slice(1, -1) : ''));
              else if (g = Host + '^$' + FONoDomains + ('|' != FODomains ? 'd' + FODomains.slice(1, -1) : '') + ('|' != FODomains2 ? 'D' + FODomains2.slice(1, -1) : '') + ' ', 'https' == Protocol)
                BlockHTTPSURLs += g;
              else if ('http' == Protocol)
                BlockHTTPURLs += g;
              else if ('wss' == Protocol)
                BlockWSSURLs += g;
              else if ('ws' == Protocol)
                BlockWSURLs += g;
              else
                if (BlockProtocolsURLs[Protocol])
                  BlockProtocolsURLs[Protocol] += g;
                else
                  BlockProtocolsURLs[Protocol] = ' ' + g;
          }
          else {
            if (0 > WhiteDomains.indexOf(' ' + Host + ' '))
              if ('' == Protocol) {
                if ('' != Host)
                  if ('t' != FONoDomains)
                    WhiteDomainsF += Host + '^' + FONoDomains + ('|' == FODomains ? '' : 'd' + FODomains.slice(1, -1)) + ('|' == FODomains2 ? '' : 'D' + FODomains2.slice(1, -1)) + ' ';
                  else {
                    if (0 > WhiteDomainsTP.indexOf(' ' + Host + ' ')) {
                      WhiteDomainsTP += Host + ' ';
                      for ( ; ; )
                        if (0 > (g = BlockDomainsTP.indexOf(' ' + Host + ' ')))
                          break;
                        else
                          BlockDomainsTP = BlockDomainsTP.substring(0, g) + BlockDomainsTP.substring(g + Host.length + 1);
                        for (g = 0; ; )
                          if (0 > (h = BlockURLs.substring(g).indexOf(' ' + Host + '^')))
                            break;
                          else {
                            if (1 < (i = BlockURLs.substring(g + h).indexOf('$')) && 0 > BlockURLs.substring(g + h + 1, (i = g + h + i)).indexOf(' ') && 0 <= BlockURLs.substring(i, (i = i + BlockURLs.substring(i).indexOf(' '))).indexOf('t'))
                              g += h,
                              BlockURLs = BlockURLs.substring(0, g) + BlockURLs.substring(i);
                            else
                              g += h + 2;
                          }
                        for (g = 0; ; )
                          if (0 > (h = BlockHTTPSURLs.substring(g).indexOf(' ' + Host + '^')))
                            break;
                          else {
                            if (1 < (i = BlockHTTPSURLs.substring(g + h).indexOf('$')) && 0 > BlockHTTPSURLs.substring(g + h + 1, (i = g + h + i)).indexOf(' ') && 0 <= BlockHTTPSURLs.substring(i, (i = i + BlockHTTPSURLs.substring(i).indexOf(' '))).indexOf('t'))
                              g += h,
                              BlockHTTPSURLs = BlockHTTPSURLs.substring(0, g) + BlockHTTPSURLs.substring(i);
                            else
                              g += h + 2;
                          }
                        for (g = 0; ; )
                          if (0 > (h = BlockHTTPURLs.substring(g).indexOf(' ' + Host + '^')))
                            break;
                          else {
                            if (1 < (i = BlockHTTPURLs.substring(g + h).indexOf('$')) && 0 > BlockHTTPURLs.substring(g + h + 1, (i = g + h + i)).indexOf(' ') && 0 <= BlockHTTPURLs.substring(i, (i = i + BlockHTTPURLs.substring(i).indexOf(' '))).indexOf('t'))
                              g += h,
                              BlockHTTPURLs = BlockHTTPURLs.substring(0, g) + BlockHTTPURLs.substring(i);
                            else
                              g += h + 2;
                          }
                        for (g = 0; ; )
                          if (0 > (h = BlockWSSURLs.substring(g).indexOf(' ' + Host + '^')))
                            break;
                          else {
                            if (1 < (i = BlockWSSURLs.substring(g + h).indexOf('$')) && 0 > BlockWSSURLs.substring(g + h + 1, (i = g + h + i)).indexOf(' ') && 0 <= BlockWSSURLs.substring(i, (i = i + BlockWSSURLs.substring(i).indexOf(' '))).indexOf('t'))
                              g += h,
                              BlockWSSURLs = BlockWSSURLs.substring(0, g) + BlockWSSURLs.substring(i);
                            else
                              g += h + 2;
                          }
                        for (g = 0; ; )
                          if (0 > (h = BlockWSURLs.substring(g).indexOf(' ' + Host + '^')))
                            break;
                          else {
                            if (1 < (i = BlockWSURLs.substring(g + h).indexOf('$')) && 0 > BlockWSURLs.substring(g + h + 1, (i = g + h + i)).indexOf(' ') && 0 <= BlockWSURLs.substring(i, (i = i + BlockWSURLs.substring(i).indexOf(' '))).indexOf('t'))
                              g += h,
                              BlockWSURLs = BlockWSURLs.substring(0, g) + BlockWSURLs.substring(i);
                            else
                              g += h + 2;
                          }
                        for (g = 0; ; )
                          if (0 > (h = WhiteURLs.substring(g).indexOf(' ' + Host + '^')))
                            break;
                          else {
                            if (1 < (i = WhiteURLs.substring(g + h).indexOf('$')) && 0 > WhiteURLs.substring(g + h + 1, (i = g + h + i)).indexOf(' ') && 0 <= WhiteURLs.substring(i, (i = i + WhiteURLs.substring(i).indexOf(' '))).indexOf('t'))
                              g += h,
                              WhiteURLs = WhiteURLs.substring(0, g) + WhiteURLs.substring(i);
                            else
                              g += h + 2;
                          }
                        for (g = 0; ; )
                          if (0 > (h = WhiteHTTPSURLs.substring(g).indexOf(' ' + Host + '^')))
                            break;
                          else {
                            if (1 < (i = WhiteHTTPSURLs.substring(g + h).indexOf('$')) && 0 > WhiteHTTPSURLs.substring(g + h + 1, (i = g + h + i)).indexOf(' ') && 0 <= WhiteHTTPSURLs.substring(i, (i = i + WhiteHTTPSURLs.substring(i).indexOf(' '))).indexOf('t'))
                              g += h,
                              WhiteHTTPSURLs = WhiteHTTPSURLs.substring(0, g) + WhiteHTTPSURLs.substring(i);
                            else
                              g += h + 2;
                          }
                        for (g = 0; ; )
                          if (0 > (h = WhiteHTTPURLs.substring(g).indexOf(' ' + Host + '^')))
                            break;
                          else {
                            if (1 < (i = WhiteHTTPURLs.substring(g + h).indexOf('$')) && 0 > WhiteHTTPURLs.substring(g + h + 1, (i = g + h + i)).indexOf(' ') && 0 <= WhiteHTTPURLs.substring(i, (i = i + WhiteHTTPURLs.substring(i).indexOf(' '))).indexOf('t'))
                              g += h,
                              WhiteHTTPURLs = WhiteHTTPURLs.substring(0, g) + WhiteHTTPURLs.substring(i);
                            else
                              g += h + 2;
                          }
                        for (g = 0; ; )
                          if (0 > (h = WhiteWSSURLs.substring(g).indexOf(' ' + Host + '^')))
                            break;
                          else {
                            if (1 < (i = WhiteWSSURLs.substring(g + h).indexOf('$')) && 0 > WhiteWSSURLs.substring(g + h + 1, (i = g + h + i)).indexOf(' ') && 0 <= WhiteWSSURLs.substring(i, (i = i + WhiteWSSURLs.substring(i).indexOf(' '))).indexOf('t'))
                              g += h,
                              WhiteWSSURLs = WhiteWSSURLs.substring(0, g) + WhiteWSSURLs.substring(i);
                            else
                              g += h + 2;
                          }
                        for (g = 0; ; )
                          if (0 > (h = WhiteWSURLs.substring(g).indexOf(' ' + Host + '^')))
                            break;
                          else {
                            if (1 < (i = WhiteWSURLs.substring(g + h).indexOf('$')) && 0 > WhiteWSURLs.substring(g + h + 1, (i = g + h + i)).indexOf(' ') && 0 <= WhiteWSURLs.substring(i, (i = i + WhiteWSURLs.substring(i).indexOf(' '))).indexOf('t'))
                              g += h,
                              WhiteWSURLs = WhiteWSURLs.substring(0, g) + WhiteWSURLs.substring(i);
                            else
                              g += h + 2;
                          }
                    }
                  }
                else
                  WhiteNoDomains.push(FONoDomains + ('|' != FODomains ? 'd' + FODomains.slice(1, -1) : '') + ('|' != FODomains2 ? 'D' + FODomains2.slice(1, -1) : ''));
              }
              else if (g = Host + '^$' + FONoDomains + ('|' != FODomains ? 'd' + FODomains.slice(1, -1) : '') + ('|' != FODomains2 ? 'D' + FODomains2.slice(1, -1) : '') + ' ', 'https' == Protocol)
                WhiteHTTPSURLs += g;
              else if ('http' == Protocol)
                WhiteHTTPURLs += g;
              else if ('wss' == Protocol)
                WhiteWSSURLs += g;
              else if ('ws' == Protocol)
                WhiteWSURLs += g;
              else
                if (WhiteProtocolsURLs[Protocol])
                  WhiteProtocolsURLs[Protocol] += g;
                else
                  WhiteProtocolsURLs[Protocol] = ' ' + g;
          }
        }
      else {                                                                    // URL
        !MatchCase && (Path = Path.toLowerCase());
        h = Path.indexOf('*');
        if ('|' == Path.slice(-1))
          j = 1,
          Path = Path.slice(0, -1);
        else
          j = 0;
        if (0 > h && 0 > Path.indexOf('^'))                                     // normal characters
          h = j ? 2 : 0,
          Path = Path.slice(1);
        else if (0 <= h && h < Path.lastIndexOf('^'))                           // Reg Exp
          h = 8,
          0 <= Path.indexOf('/') && (Path = Path.replace(/\//g, '\\/')),
          0 <= Path.indexOf('.') && (Path = Path.replace(/\./g, '\\.')),
          0 <= Path.indexOf('|') && (Path = Path.replace(/\|/g, '\\|')),
          0 <= Path.indexOf('?') && (Path = Path.replace(/\?/g, '\\?')),
          0 <= Path.indexOf('+') && (Path = Path.replace(/\+/g, '\\+')),
          0 <= Path.indexOf('(') && (Path = Path.replace(/\(/g, '\\(')),
          0 <= Path.indexOf(')') && (Path = Path.replace(/\)/g, '\\)')),
          0 <= Path.indexOf('[') && (Path = Path.replace(/\[/g, '\\[')),
          0 <= Path.indexOf(']') && (Path = Path.replace(/\]/g, '\\]')),
          0 <= Path.indexOf('{') && (Path = Path.replace(/\{/g, '\\{')),
          0 <= Path.indexOf('}') && (Path = Path.replace(/\}/g, '\\}')),
          0 <= Path.indexOf('*') && (Path = Path.replace(/\*/g, '(.+|)')),
          0 <= Path.indexOf('$') && (Path = Path.replace(/\*/g, '\\$')),
          0 <= Path.indexOf('^') && (Path = Path.replace(/\^/g, '[^a-z0-9A-Z-._%]'));
        else                                                                    // special characters
          h = j ? 6 : 4;
        if (Block) {                                                            // BlockURLs
          if (0 > BlockDomains.indexOf(' ' + Host + ' ') && 0 > WhiteDomains.indexOf(' ' + Host + ' ') && !(0 <= FONoDomains.indexOf('t') && (0 <= BlockDomainsTP.indexOf(' ' + Host + ' ') || 0 <= WhiteDomainsTP.indexOf(' ' + Host + ' '))))
            if ('' == Protocol)
              BlockURLs += Host + '^' + ((i = ('' != FONoDomains || '|' != FODomains || '|' != FODomains2)) ? h + 1 : h) + Path + (i ? '$' + FONoDomains + ('|' != FODomains ? 'd' + FODomains.slice(1, -1) : '') + ('|' != FODomains2 ? 'D' + FODomains2.slice(1, -1) : '') : '') + ' ';
            else if (j = Host + '^' + ((i = ('' != FONoDomains || '|' != FODomains || '|' != FODomains2)) ? h + 1 : h) + Path + (i ? '$' + FONoDomains + ('|' != FODomains ? 'd' + FODomains.slice(1, -1) : '') + ('|' != FODomains2 ? 'D' + FODomains2.slice(1, -1) : '') : '') + ' ', 'https' == Protocol)
              BlockHTTPSURLs += j;
            else if ('http' == Protocol)
              BlockHTTPURLs += j;
            else if ('wss' == Protocol)
              BlockWSSURLs += j;
            else if ('ws' == Protocol)
              BlockWSURLs += j;
            else
              if (BlockProtocolsURLs[Protocol])
                BlockProtocolsURLs[Protocol] += j;
              else
                BlockProtocolsURLs[Protocol] = ' ' + j;
        }
        else                                                                    // WhiteURLs
          if (0 > WhiteDomains.indexOf(' ' + Host + ' ') && !(0 <= FONoDomains.indexOf('t') && 0 <= WhiteDomainsTP.indexOf(' ' + Host + ' ')))
            if ('' == Protocol)
              WhiteURLs += Host + '^' + ((i = ('' != FONoDomains || '|' != FODomains || '|' != FODomains2)) ? h + 1 : h) + Path + (i ? '$' + FONoDomains + ('|' != FODomains ? 'd' + FODomains.slice(1, -1) : '') + ('|' != FODomains2 ? 'D' + FODomains2.slice(1, -1) : '') : '') + ' ';
            else if (j = Host + '^' + ((i = ('' != FONoDomains || '|' != FODomains || '|' != FODomains2)) ? h + 1 : h) + Path + (i ? '$' + FONoDomains + ('|' != FODomains ? 'd' + FODomains.slice(1, -1) : '') + ('|' != FODomains2 ? 'D' + FODomains2.slice(1, -1) : '') : '') + ' ', 'https' == Protocol)
              WhiteHTTPSURLs += j;
            else if ('http' == Protocol)
              WhiteHTTPURLs += j;
            else if ('wss' == Protocol)
              WhiteWSSURLs += j;
            else if ('ws' == Protocol)
              WhiteWSURLs += j;
            else
              if (WhiteProtocolsURLs[Protocol])
                WhiteProtocolsURLs[Protocol] += j;
              else
                WhiteProtocolsURLs[Protocol] = ' ' + j;
      }
    }
    else if (0 <= (h = Filter.indexOf('#@#')) && (i = 3) || 0 <= (h = Filter.indexOf('#?#')) && (i = 8) || 0 <= (h = Filter.indexOf('#@?#')) && (i = 9) || 0 <= (h = Filter.indexOf('##')) && (i = 2)) {// element hiding
      I = i;
      j = Filter.substring(0, h).toLowerCase().trim();
      if (1) {
        if ('' == j && 7 < i) {
          console.log('error - filter needs a domain: ' + List[FilterIndex]);
          continue;
        }
        k = '';
        l = n = 1;
        m = Filter.substring(h + (8 > i ? i : 9 > i ? 3 : 4)).trim();
        if (4 > i)                                                              // To Do: put i and m in loop
          0 <= m.indexOf('(') && (i += 6);
        else if (7 < i)
          0 > m.indexOf('(') && (i -= 6);
        _0 = [];                                                                // ABPProperties
        _0L = [];
        _0L2 = [];
        _1 = [];
        _1L = [];
        _1L2= [];
        _2 = [];
        _2L = [];
        _2L2 = [];
        _3 = [];                                                                // Properties
        _4 = [];                                                                // PropertiesW
        _5 = _6 = _7 = _8 = '';                                                 // Classes and Ids
        if (l)
          for (8 > i && (i = 3 > i ? 4 : 5), l = '', n = X = Y = Z = 0, V = W = -1; ; )
            // n = 0: outside of everything
            // n = 1: inside [
            // n = 2: inside [ and leading ='
            // n = 3: inside [ and leading ="
            // n = 4: inside [ and leading =
            // n = 5: after : and (
            // V = 1: -abp-properties with ()
            // W = 1: -abp-properties with []
            // X = 0: {} allowed in m
            // X = 1: {} not allowed in m
            // Y = 1: [ appeared previously so all characters are allowed in front of :
            // Z = 1: [] in () appeared
            // _0, _1, _2 content of -abp-properties
            // *_L0*[-abp-properties=*_L1*stuff*_L2*]*_L3*
            if (!n) {
              for (o = m.length, p = 0; p < o; p++)
                if (0 == m.indexOf(',')) {
                  m = m.slice(1).trim();
                  if ('' != l) {
                    if (0 > W)
                      if (0 > V)
                        if (6 > i)
                          k += l + ',';
                        else if (9 > i)
                          _3.push(l);
                        else
                          _4.push(l);
                      else if (!V)
                        _0.push(l),
                        _0L.push(_L0, _L1, _L2, _L3);
                      else if (2 > V)
                        _1.push(l),
                        _1L.push(_L0, _L1, _L2, _L3);
                      else
                        _2.push(l),
                        _2L.push(_L0, _L1, _L2, _L3);        
                    else if (!W)
                      _0.push(l),
                      _0L.push(_L0, _L1, _L2, _L3);
                    else if (2 > W)
                      _1.push(l),
                      _1L.push(_L0, _L1, _L2, _L3);
                    else
                      _2.push(l),
                      _2L.push(_L0, _L1, _L2, _L3);
                    l = ''
                  }
                  V = W = -1;
                }
                else
                  break;
              if (0 > ('#.abcdefghijklmnopqrstuvwxyz-ABCDEFGHIJKLMNOPQRSTUVWXYZ_\\{}[]*: ' + (Y ? '>~+' : '')).indexOf(m.charAt(0))) {
                k = '';
                break;
              }
              for (o = p = q = -1, r = s = t = m; ; )
                if (0 <= (u = r.indexOf('['))) {
                  if ('\\' != r[u - 1]) {
                    o = u;
                    break;
                  }
                  r = r.slice(u + 1);
                }
                else
                  break;
              for ( ; ; )
                if (0 <= (r = s.indexOf(':'))) {
                  if ('\\' != s[r - 1]) {
                    p = r;
                    break;
                  }
                  s = s.slice(r + 1);
                }
                else
                  break;
              for ( ; ; )
                if (0 <= (r = t.indexOf(','))) {
                  if ('\\' != t[r - 1]) {
                    q = r;
                    break;
                  }
                  t = t.slice(r + 1);
                }
                else
                  break;
              r = Math.min(0 <= o ? o : Infinity, 0 <= p ? p : Infinity, 0 <= q ? q : Infinity);
              if (Infinity == r) {
                if (!h && '' == l) {
                  if ('.' == (o = m[0])) {
                    if ('.' == m) {
                      //console.log('Invalid class: . in ' + Filter);
                      break;
                    }
                    if (0 > 'abcdefghijklmnopqrstuvwxyz-ABCDEFGHIJKLMNOPQRSTUVWXYZ_\\'.indexOf(m[1])) {
                      //console.log('Invalid class: ' + m + ' in ' + Filter);
                      break;
                    }
                    for (o = m.slice(2), p = o.length, q = 1; 0 < p; p--)
                      if (0 > 'abcdefghijklmnopqrstuvwxyz-ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_\\'.indexOf(o[p - 1])) {
                        q = 0;
                        break;
                    }
                    if (q) {
                      if (3 > I)
                        0 > HideClasses.indexOf(',' + m + ',') && (HideClasses += m + ',');
                      else
                        0 > HideClassesW.indexOf(',' + m + ',') && (HideClassesW += m + ',');
                      break;
                    }
                  }
                  if ('#' == o) {
                    if ('#' == m) {
                      //console.log('Invalid id: . in ' + Filter);
                      break;
                    }
                    if (0 > 'abcdefghijklmnopqrstuvwxyz-ABCDEFGHIJKLMNOPQRSTUVWXYZ_\\'.indexOf(m[1])) {
                      //console.log('Invalid id: ' + m + ' in ' + Filter);
                      break;
                    }
                    for (o = m.slice(2), p = o.length, q = 1; 0 < p; p--)
                      if (0 > 'abcdefghijklmnopqrstuvwxyz-ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_\\'.indexOf(o[p - 1])) {
                        q = 0;
                        break;
                    }
                    if (q) {
                      if (3 > I)
                        0 > HideIds.indexOf(',' + m + ',') && (HideIds += m + ',');
                      else
                        0 > HideIdsW.indexOf(',' + m + ',') && (HideIdsW += m + ',');
                      break;
                    }
                  }
                }
                p = q = m;
                for (r = 1; ; )
                  if (0 <= (s = p.indexOf('#')))
                    if ('\\' == p[s - 1] || 0 <= (t = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_\\').indexOf(u = p.charAt(s + 1)) || '-' == u && 0 <= t.indexOf(p.charAt(s + 2)))
                      p = p.slice(s + 2);
                    else {
                      r = 0;
                      break;
                    }
                  else
                    break;
                if (1 > r) {
                  k = '';
                  break;
                }
                for (r = 1; ; )
                  if (0 <= (s = q.indexOf('.')))
                    if ('\\' == q[s - 1] || 0 <= (t = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_\\').indexOf(u = q.charAt(s + 1)) || '-' == u && 0 <= t.indexOf(q.charAt(s + 2)))
                      q = q.slice(s + 2);
                    else {
                      r = 0;
                      break;
                    }
                  else
                    break;
                if (!r) {
                  k = '';
                  break;
                }
                if ('' != (o = l + m))
                  if (0 > W)
                    if (0 > V)
                      if (6 > i)
                        k += o + ',';
                      else if (9 > i)
                        _3.push(o);
                      else
                        _4.push(o);
                    else if (!V)
                      _0.push(o),
                      _0L.push(_L0, _L1, _L2, _L3);
                    else if (2 > V)
                      _1.push(o),
                      _1L.push(_L0, _L1, _L2, _L3);
                    else
                      _2.push(o),
                      _2L.push(_L0, _L1, _L2, _L3); 
                  else if (!W)
                    _0.push(o),
                    _0L.push(_L0, _L1, _L2, _L3);
                  else if (2 > W)
                    _1.push(o),
                    _1L.push(_L0, _L1, _L2, _L3);
                  else
                    _2.push(o),
                    _2L.push(_L0, _L1, _L2, _L3);
                break
              }
              if (q == r) {
                if (!h && '' == l) {
                  if ('.' == (o = (p = m.substring(0, r))[0])) {
                    if ('.' == p) {
                      m = m.substring(1);
                      //console.log('Invalid class: . in ' + Filter);
                      continue;
                    }
                    if (0 > 'abcdefghijklmnopqrstuvwxyz-ABCDEFGHIJKLMNOPQRSTUVWXYZ_\\'.indexOf(p[1])) {
                      m = m.substring(r + 1);
                      //console.log('Invalid class: ' + p + ' in ' + Filter);
                      continue;
                    }
                    for (o = p.slice(2), q = o.length, s = 1; 0 < q; --q)
                      if (0 > 'abcdefghijklmnopqrstuvwxyz-ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_\\'.indexOf(o[q - 1])) {
                        s = 0;
                        break;
                    }
                    if (s) {
                      3 > I ? 0 > HideClasses.indexOf(',' + p + ',') && (HideClasses += p + ',') : 0 > HideClassesW.indexOf(',' + p + ',') && (HideClassesW += p + ',');
                      m = m.substring(r + 1);
                      continue;
                    }
                  }
                  if ('#' == o) {
                    if ('#' == p) {
                      m = m.substring(1);
                      //console.log('Invalid id: . in ' + Filter);
                      continue;
                    }
                    if (0 > 'abcdefghijklmnopqrstuvwxyz-ABCDEFGHIJKLMNOPQRSTUVWXYZ_\\'.indexOf(p[1])) {
                      m = m.substring(r + 1);
                      //console.log('Invalid id: ' + p + ' in ' + Filter);
                      continue;
                    }
                    for (o = p.slice(2), q = o.length, s = 1; 0 < q; --q)
                      if (0 > 'abcdefghijklmnopqrstuvwxyz-ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_\\'.indexOf(o[q - 1])) {
                        s = 0;
                        break
                    }
                    if (s) {
                      3 > I ? 0 > HideIds.indexOf(',' + p + ',') && (HideIds += p + ',') : 0 > HideIdsW.indexOf(',' + p + ',') && (HideIdsW += p + ',');
                      m = m.substring(r + 1);
                      continue;
                    }
                  }
                }
                for (o = l + m.substring(0, r), p = s = m, t = o.length, u = 1; 0 < t; --t)
                  if (0 > ('abcdefghijklmnopqrstuvwxyz-ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.#_\\ >+~*:()\t' + (1 > X ? '{}' : '')).indexOf(o[t - 1])) {
                    u = 0;
                    break;
                  }
                if (!u) {
                  k = '';
                  break;
                }
                for (t = 1; ; )
                  if (0 <= (u = p.indexOf('#')))
                    if ('\\' == p[u - 1] || 0 <= (v = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_\\').indexOf(w = p.charAt(u + 1)) || '-' == w && 0 <= v.indexOf(p.charAt(u + 2)))
                      p = p.slice(u + 2);
                    else {
                      t = 0;
                      break;
                    }
                  else
                    break;
                if (!t) {
                  k = '';
                  break;
                }
                for (t = 1; ; )
                  if (0 <= (u = s.indexOf('.')))
                    if ('\\' == s[u - 1] || 0 <= (v = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_\\').indexOf(w = s.charAt(u + 1)) || '-' == w && 0 <= v.indexOf(s.charAt(u + 2)))
                      s = s.slice(u + 2);
                    else {
                      t = 0;
                      break;
                    }
                  else
                    break;
                if (!t) {
                  k = '';
                  break;
                }
                if ('' != o)
                  if (0 > W)
                    if (0 > V)
                      if (6 > i)
                        k += o + ',';
                      else if (9 > i)
                        _3.push(o);
                      else
                        _4.push(o);
                    else if (!V)
                      _0.push(o),
                      _0L.push(_L0, _L1, _L2, _L3);
                    else if (2 > V)
                      _1.push(o),
                      _1L.push(_L0, _L1, _L2, _L3);
                    else
                      _2.push(o),
                      _2L.push(_L0, _L1, _L2, _L3); 
                  else if (!W)
                    _0.push(o),
                    _0L.push(_L0, _L1, _L2, _L3);
                  else if (2 > W)
                    _1.push(o),
                    _1L.push(_L0, _L1, _L2, _L3);
                  else
                    _2.push(o),
                    _2L.push(_L0, _L1, _L2, _L3);
                l = '';
                m = m.substring(r + 1);
                X = Y = 0;
              }
              else if (p == r) {
                for (o = l + (p = q = m.substring(0, r)), s = o.length, t = 1; 0 < s; --s)
                  if (!Y && 0 > ('abcdefghijklmnopqrstuvwxyz-ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.#_\\ >+~*:()\t' + (1 > X ? '{}' : '')).indexOf(o[s - 1])) {
                    t = 0;
                    break;
                  }
                if (!t) {
                  k = '';
                  break;
                }
                for (o = 1; ; )
                  if (0 <= (s = p.indexOf('#')))
                    if ('\\' == p[s - 1] || 0 <= (t = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_\\').indexOf(u = p.charAt(s + 1)) || '-' == u && 0 <= t.indexOf(p.charAt(s + 2)))
                      p = p.slice(s + 2);
                    else {
                      o = 0;
                      break;
                    }
                  else
                    break;
                if (!o) {
                  k = '';
                  break;
                }
                for (o = 1; ; )
                  if (0 <= (s = q.indexOf('.')))
                    if ('\\' == q[s - 1] || 0 <= (t = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_\\').indexOf(u = q.charAt(s + 1)) || '-' == u && 0 <= t.indexOf(q.charAt(s + 2)))
                      q = q.slice(s + 2);
                    else {
                      o = 0;
                      break;
                    }
                  else
                    break;
                if (!o) {
                  k = '';
                  break;
                }
                l += m.slice(0, r + 1);
                m = m.slice(r + 1);
                if (7 < i && '-abp-properties(' == m.slice(0, 16)) {
                  _L0 = 0 < (o = l.length) ? o - 1 : 0;
                  _L1  = _L0 + 17;
                  l += m.slice(0, 16);
                  m = m.slice(16);
                  n = 5;
                  V = 0;
                  continue;
                }
                for (o = p = q = r = s = t = u = v = -1, w = AA = AB = AC = AD = AE = AF = AG = m; ; )
                  if (0 <= (AH = w.indexOf('('))) {
                    if ('\\' != w[AH - 1]) {
                      o = AH;
                      break;
                    }
                    w = w.slice(AH + 1);
                  }
                  else
                    break;
                for ( ; ; )
                  if (0 <= (w = AA.indexOf('['))) {
                    if ('\\' != AA[w - 1]) {
                      p = w;
                      break;
                    }
                    AA = AA.slice(w + 1);
                  }
                  else
                    break;
                for ( ; ; )
                  if (0 <= (w = AB.indexOf('>'))) {
                    if ('\\' != AB[w - 1]) {
                      q = w;
                      break;
                    }
                    AB = AB.slice(w + 1);
                  }
                  else
                    break;
                for ( ; ; )
                  if (0 <= (w = AC.indexOf('~'))) {
                    if ('\\' != AC[w - 1]) {
                      r = w;
                      break;
                    }
                    AC = AC.slice(w + 1);
                  }
                  else
                    break;
                for ( ; ; )
                  if (0 <= (w = AD.indexOf('+'))) {
                    if ('\\' != AD[w - 1]) {
                      s = w;
                      break;
                    }
                    AD = AD.slice(w + 1);
                  }
                  else
                    break;
                for ( ; ; )
                  if (0 <= (w = AE.indexOf('*'))) {
                    if ('\\' != AE[w - 1]) {
                      t = w;
                      break;
                    }
                    AE = AE.slice(w + 1);
                  }
                  else
                    break;
                for ( ; ; )
                  if (0 <= (w = AF.indexOf(':'))) {
                    if ('\\' != AF[w - 1]) {
                      u = w;
                      break;
                    }
                    AF = AF.slice(q + 1);
                  }
                  else
                    break;
                for ( ; ; )
                  if (0 <= (w = AG.indexOf(','))) {
                    if ('\\' != AG[w - 1]) {
                      v = w;
                      break;
                    }
                    AG = AG.slice(w + 1);
                  }
                  else
                    break;
                q = Math.min(
                  0 <= o ? o : Infinity,
                  0 <= p ? p : Infinity,
                  0 <= q ? q : Infinity,
                  0 <= r ? r : Infinity,
                  0 <= s ? s : Infinity,
                  0 <= t ? t : Infinity,
                  0 <= u ? u : Infinity,
                  0 <= v ? v : Infinity
                );
                if (Infinity == q) {
                  for (o = m.length, p = 1; 0 < o; o--)
                    if (0 > 'abcdefghijklmnopqrstuvwxyz-ABCDEFGHIJKLMNOPQRSTUVWXYZ\\ \t'.indexOf(m[o - 1])) {
                      p = 0;
                      break;
                    }
                  if (!p) {
                    k = '';
                    break;
                  }
                  if ('' != (o = l + m))
                    if (0 > W)
                      if (0 > V)
                        if (6 > i)
                          k += o + ',';
                        else if (9 > i)
                          _3.push(o);
                        else
                          _4.push(o);
                      else if (!V)
                        _0.push(o),
                        _0L.push(_L0, _L1, _L2, _L3);
                      else if (2 > V)
                        _1.push(o),
                        _1L.push(_L0, _L1, _L2, _L3);
                      else
                        _2.push(o),
                        _2L.push(_L0, _L1, _L2, _L3); 
                    else if (!W)
                      _0.push(o),
                      _0L.push(_L0, _L1, _L2, _L3);
                    else if (2 > W)
                      _1.push(o),
                      _1L.push(_L0, _L1, _L2, _L3);
                    else
                      _2.push(o),
                      _2L.push(_L0, _L1, _L2, _L3);
                  break
                }
                for (r = m.slice(0, q), s = r.length, t = 1; 0 < s; --s)
                  if (0 > ('abcdefghijklmnopqrstuvwxyz-ABCDEFGHIJKLMNOPQRSTUVWXYZ\\' + ((o == q || p == q) ? '' : ' \t')).indexOf(r[s - 1])) {
                    t = 0;
                    break;
                  }
                if (!t) {
                  k = '';
                  break;
                }
                l += m.substring(0, q + 1);
                m = m.slice(q + 1);
                if (o == q)
                  p = m.trim(),
                  '[' != p.substring(0, 1) ? n = 5 : (m = p.slice(1), n = Z = 1),
                  X = 1;
                else if (p == q)
                  n = 1;
                else if (v == q)
                  n = X = 0;
                else
                  n = 0;
              }
              else {
                for (Y = 1, o = m.slice(0, r), q = o.length, s = 1; 0 < q; --q)
                  if (0 > ('abcdefghijklmnopqrstuvwxyz-ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.#_\\ >+~*:()\t' + (1 > X ? '{}' : '')).indexOf(o[q - 1]) && '\\' != o.charAt(q - 2)) {
                    s = 0;
                    break;
                  }
                if (1 > s) {
                  k = '';
                  break;
                }
                l += m.slice(0, r + 1);
                m = m.slice(r + 1).trim();
                if (0 > 'abcdefghijklmnopqrstuvwxyz-ABCDEFGHIJKLMNOPQRSTUVWXYZ\\'.indexOf(m.charAt(0))) {
                  k = '';
                  break;
                }
                n = 1;
              }
            }
            else if (2 > n) {
              for (o = p = -1, q = r = m; ; )
                if (0 <= (s = q.indexOf('='))) {
                  if ('\\' != q[s - 1]) {
                    o = s;
                    break;
                  }
                  q = q.slice(q + 1);
                }
                else
                  break;
              for ( ; ; )
                if (0 <= (q = r.indexOf(']'))) {
                  if ('\\' != r[q - 1]) {
                    p = q;
                    break;
                  }
                  r = r.slice(q + 1);
                }
                else
                  break;
              q = Math.min(
                0 <= o ? o : Infinity,
                0 <= p ? p : Infinity
              );
              if (Infinity == q) {
                k = '';
                break;
              }
              if (o == q) {
                if (0 > 'abcdefghijklmnopqrstuvwxyz-ABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789~|^$*\\'.indexOf(m.charAt(o - 1))) {
                  k = '';
                  break;
                }
                for (o = m.slice(0, o - 1).length, p = 1; 0 < o; o--)
                  if (0 > 'abcdefghijklmnopqrstuvwxyz-ABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789\\'.indexOf(m[o - 1]) && '\\' != m.charAt(o - 2)) {
                    p = 0;
                    break;
                  }
                if (!p) {
                  k = '';
                  break;
                }
                if ('-abp-properties' == m.slice(0, q))
                  W = 0;
                if ("'" == (p = m.charAt(q + 1)))
                  0 <= W && (_L0 = l.length - 1, _L1 = l.length + 17),
                  l += m.slice(0, q + 2),
                  m = m.slice(q + 2),
                  n = 2;
                else if ('"' == p)
                  0 <= W && (_L0 = l.length - 1, _L1 = l.length + 17),
                  l += m.slice(0, q + 2),
                  m = m.slice(q + 2),
                  n = 3;
                else
                  0 <= W && (_L0 = l.length - 1, _L1 = l.length + 16),
                  l += m.slice(0, q + 1),
                  m = m.slice(q + 1),
                  n = 4;
              }
              else {
                l += m.slice(0, q + 1);
                m = m.slice(q + 1);
                if (!Z)
                  n = 0;
                else {
                  m = m.trim();
                  if (')' == m.substring(0, 1))
                    Y = 1,
                    n = Z = 0,
                    l += ')',
                    m = m.slice(1);
                  else {
                    k = '';
                    break;
                  }
                }
              }
            }
            else if (3 > n) {
              for (o = 1, r = ''; ; )
                if (0 <= (p = m.indexOf("'"))) {
                  if ('\\' == m.slice(p - 1, p))
                    l += (q = m.slice(0, p + 1)),
                    r += q,
                    m = m.slice(p + 1);
                  else {
                    l += m.slice(0, p + 1) + ']';
                    0 <= W && (_L2 = l.length - 2);
                    r += m.slice(0, p);
                    m = m.slice(p + 1).trim();
                    if (']' == m.substring(0, 1)) {
                      0 <= W && (_L3 = l.length);
                      m = m.slice(1);
                      if (!Z)
                        n = o = 0;
                      else {
                        m = m.trim();
                        if (')' == m.substring(0, 1))
                          Y = 1,
                          n = o = Z = 0,
                          l += ')',
                          m = m.slice(1);
                      }
                    }
                    break;
                  }
                }
                else
                  break;
              if (o) {
                k = '';
                break;
              }
              if (0 <= W)
                if ('/' == r.substring(0, 1) && '/' == r.slice(-1))
                  W = 2;
                else if (0 <= r.indexOf('*'))
                  W = 1;
            }
            else if (4 > n) {
              for (o = 1, r = ''; ; )
                if (0 <= (p = m.indexOf('"'))) {
                  if ('\\' == m.slice(p - 1, p))
                    l += (q = m.slice(0, p + 1)),
                    r += q,
                    m = m.slice(p + 1);
                  else {
                    l += m.slice(0, p + 1) + ']';
                    0 <= W && (_L2 = l.length - 2);
                    r += m.slice(0, p);
                    m = m.slice(p + 1).trim();
                    if (']' == m.substring(0, 1)) {
                      0 <= W && (_L3 = l.length);
                      m = m.slice(1);
                      if (!Z)
                        n = o = 0;
                      else {
                        m = m.trim();
                        if (')' == m.substring(0, 1))
                          Y = 1,
                          n = o = Z = 0,
                          l += ')',
                          m = m.slice(1);
                      }
                    }
                    break;
                  }
                }
                else
                  break;
              if (o) {
                k = '';
                break;
              }
              if (0 <= W)
                if ('/' == r.substring(0, 1) && '/' == r.slice(-1))
                  W = 2;
                else if (0 <= r.indexOf('*'))
                  W = 1;
            }
            else if(5 > n) {
              for (o = 1, r = ''; ; )
                if (0 < (p = m.indexOf(']'))) {
                  q = m;
                  l += m.slice(0, p + 1);
                  0 <= W && (_L2 = l.length - 1, _L3 = _L2 + 1);
                  r += m.slice(0, p);
                  m = m.slice(p + 1);
                  if ('\\' != q.charAt(p - 1)) {
                    if (!Z)
                      n = o = 0;
                    else {
                      m = m.trim();
                      if (')' == m.substring(0, 1))
                        Y = 1,
                        n = o = Z = 0,
                        l += ')',
                        m = m.slice(1);
                    }
                    break;
                  }
                }
                else
                  break;
              if (o) {
                k = '';
                break;
              }
              if (0 <= W)
                if ('/' == r.charAt(0) && '/' == r.slice(-1))
                  W = 2;
                else if (0 <= r.indexOf('*'))
                  W = 1;
            }
            else {
              if (0 <= V) {
                _L2 = 0;
                if ('/' == m.charAt(0))
                  for (o = 1; ; ) {
                    p = Math.min(0 <= (q = m.indexOf('(')) ? q : Infinity, 0 <= (r = m.indexOf(')')) ? r : Infinity);
                    if (p == q)
                      '\\' != m.charAt(p - 1) && o++,
                      _L2 += p + 1,
                      l += m.slice(0, p + 1),
                      m = m.slice(p + 1);
                    else if (p == r) {
                      _L2 += p + 1;
                      l += m.slice(0, p + 1);
                      if ('\\' != m.charAt(p - 2)) {
                        if (!--o) {
                          if ('/' == m.charAt(p - 1))
                            _L2 += _L1 - 1,
                            _L3 = _L2 + 1,
                            m = m.slice(p + 1),
                            n = 0,
                            V = 2;
                          break;
                        }
                      }
                      m = m.slice(p + 1);
                    }
                    else
                      break;
                  }
                if (!V) {
                  0 <= m.indexOf('*') && (V = 1);
                  for (o = 1; ; )
                    if (0 <= (p = m.indexOf(')'))) {
                      _L2 = _L1 + p;
                      _L3 = _L2 + 1;
                      l += m.slice(0, p + 1);
                      m = m.slice(p + 1);
                      n = o = 0;
                      break;
                    }
                  if (o) {
                    k = '';
                    break;
                  }
                }
              }
              else {
                for (o = 1; ; ) {
                  p = Math.min(0 <= (q = m.indexOf('(')) ? q : Infinity, 0 <= (r = m.indexOf(')')) ? r : Infinity);
                  if (p == q)
                    '\\' != m.charAt(p - 1) && o++,
                    l += m.slice(0, p + 1),
                    m = m.slice(p + 1);
                  else if (p == r) {
                    l += m.slice(0, p + 1);
                    r = m;
                    m = m.slice(p + 1);
                    if ('\\' != r.charAt(p - 1) && !--o) {
                      n = 0;
                      break;
                    }
                  }
                  else
                    break;
                }
                if (o) {
                  k = '';
                  break;
                }
              }
            }
        if (h && (('' == k && !_0.length && !_1.length && !_2.length && !_3.length && !_4.length) || ',,' == k.slice(-2))) {
          //console.log('Invalid filter: ' + Filter);
          continue;
        }
        if (h) {
          for ( ; '' != j; ) {
            if (0 <= (h = j.indexOf(',')))
              m = j.substring(0, h),
              j = j.substring(h + 1);
            else
              m = j,
              j = '';
            if ('' == m)
              continue;
            if (0 <= m.indexOf('..') || ('.' != m.slice(-1) && ('' == m.slice(0, m.lastIndexOf('.')))) || ('.' == m)) {
              console.log('Invalid domain: ' + m + ' in ' + Filter);
              continue;
            }
            if (0 == m.indexOf('~'))
              p = (0 == i || 2 == i || 4 == i || 6 == i || 8 == i) ? i + 1 : i - 1,
              m = m.slice(1);
            else
              p = i;
            l = Hide[m] || (Hide[m] = {});
            if ('' != k)
              if (4 > p) {
                q = k.slice(1, -1);
                if (!((0 == p && HideClassesW.includes(q)) || (2 == p && HideIdsW.includes(q)))) {
                  if (1 == p || 3 == p) {
                    if (r = l[p])
                      !r.includes(q) && r.push(q);
                    else
                      0 > HideHosts.indexOf(' ' + m + ' ') && (HideHosts += m + ' '),
                      l[p] = [q];
                    if (r = l[p - 1]) {
                      for (s = 1; ; ) {
                        t = 1;
                        if (0 <= (u = r.indexOf(',' + q + ',')))
                          r = r.substring(0, u) + r.substring(u + q.length + 1),
                          s = t = 0;
                        if (0 == (u = r.indexOf(q + ',')))
                          r = r.substring(u + q.length + 1),
                          s = t = 0;
                        if (0 <= (u = (r + ' ').indexOf(',' + q + ' ')))
                          r = r.substring(0, u),
                          s = t = 0;
                        if (r == q)
                          r = '',
                          s = t = 0;
                        if (t)
                          break;
                      }
                      if ('' == r)
                        delete l[p - 1];
                      else if (!s)
                        l[p - 1] = r;
                    }
                  }
                  else if (!((r = l[p + 1]) && r.includes(q)))
                    if (r = l[p])
                      0 > r.indexOf(',' + q + ',') && 0 != r.indexOf(q + ',') && q != r && (l[p] = r + ',' + q);
                    else
                      0 > HideHosts.indexOf(' ' + m + ' ') && (HideHosts += m + ' '),
                      l[p] = q;
                }
              }
              else
                if (',' == k[k.length - 1] && (k = k.slice(0, -1)), (q = l[p])) {
                  for (s = 1, t = q.length - 1; 0 <= t; t--)
                    if (k == q[t]) {
                      s = 0;
                      break;
                    }
                  s && l[p].push(k)
                }
                else
                  4 == p && 0 > HideHosts.indexOf(' ' + m + ' ') && (HideHosts += m + ' '),
                  l[p] = [k];
            if (3 < p) {
              if (-1 != (s = _0.length - 1)) {
                if ((q = l[0 < p % 2 ? 7 : 6]) && (t = q[0])) {
                  for (u = t.length - 1; 0 <= s; s -= 3) {
                    if (v = _0[s], '' != (w = v.substring(_0L[s * 4 + 1], _0L[s * 4 + 2]).toLowerCase())) {
                      for (x = v.substring(0, _0L[s * 4]), v = v.substring(_0L[s * 4 + 3]), y = u, z = 1; 0 <= y; y -= 3)
                        if (w == t[y - 2] && x == t[y - 1] && v == t[y]) {
                          z = 0;
                          break;
                        }
                      if (z) {
                        t.push(w, x, v);
                        if (6 < p) {
                          for (l = ABPPropertiesW.length - 1, s = 1; 0 <= l; --l)
                            if (m == ABPPropertiesW[l]) {
                              s = 0;
                              break;
                            }
                          s && ABPPropertiesW.push(m);
                        }
                        else
                          0 > HideHosts.indexOf(' ' + m + ' ') && (HideHosts += m + ' ');
                      }
                    }
                  }
                }
                else {
                  s = l[t = 0 < p % 2 ? 7 : 6] || (l[t] = []);
                  u = s[0] || (s[0] = []);
                  for (v = _0.length, w = x = 0; w < v; ++w)
                    if ('' != (y = _0[w].substring(_0L[w * 4 + 1], _0L[w * 4 + 2]).toLowerCase()))
                      x = 1,
                      u.push(y, _0[w].substring(0, _0L[w * 4]), _0[w].substring(_0L[w * 4 + 3]));
                  if (x) {
                    if (6 < t) {
                      for (l = ABPPropertiesW.length - 1, s = 1; 0 <= l; l--)
                        if (m == ABPPropertiesW[l]) {
                          s = 0;
                          break;
                        }
                      s && ABPPropertiesW.push(m);
                    }
                    else
                      0 > HideHosts.indexOf(' ' + m + ' ') && (HideHosts += m + ' ');
                  }
                  else
                    if (!s[1] && !s[2])
                      delete l[t];
                    else
                      delete s[0];
                }
              }
              if (-1 != (s = _1.length - 1)) {
                if ((q = l[0 < p % 2 ? 7 : 6]) && (t = q[1])) {
                  for (u = t.length - 1; 0 <= s; s -= 3) {
                    if (v = _1[s], '' != (w = v.substring(_1L[s * 4 + 1], _1L[s * 4 + 2]).toLowerCase())) {
                      for (x = v.substring(0, _1L[s * 4]), v = v.substring(_1L[s * 4 + 3]), y = u, z = 1; 0 <= y; y -= 3)
                        if (w == t[y - 2] && x == t[y - 1] && v == t[y]) {
                          z = 0;
                          break;
                        }
                      if (z) {
                        t.push(w, x, v);
                        if (6 < p) {
                          for (l = ABPPropertiesW.length - 1, s = 1; 0 <= l; --l)
                            if (m == ABPPropertiesW[l]) {
                              s = 0;
                              break;
                            }
                          s && ABPPropertiesW.push(m);
                        }
                        else
                          0 > HideHosts.indexOf(' ' + m + ' ') && (HideHosts += m + ' ');
                      }
                    }
                  }
                }
                else {
                  s = l[t = 0 < p % 2 ? 7 : 6] || (l[t] = []);
                  u = s[1] || (s[1] = []);
                  for (v = _1.length, w = x = 0; w < v; ++w)
                    if ('' != (y = _1[w].substring(_1L[w * 4 + 1], _1L[w * 4 + 2]).toLowerCase()))
                      x = 1,
                      u.push(y, _1[w].substring(0, _1L[w * 4]), _1[w].substring(_1L[w * 4 + 3]));
                  if (x) {
                    if (6 < t) {
                      for (l = ABPPropertiesW.length - 1, s = 1; 0 <= l; --l)
                        if (m == ABPPropertiesW[l]) {
                          s = 0;
                          break;
                        }
                      s && ABPPropertiesW.push(m);
                    }
                    else
                      0 > HideHosts.indexOf(' ' + m + ' ') && (HideHosts += m + ' ');
                  }
                  else
                    if (!s[0] && !s[2])
                      delete l[t];
                    else
                      delete s[1];
                }
              }
              if (-1 != (s = _2.length - 1)) {
                if ((q = l[0 < p % 2 ? 7 : 6]) && (t = q[2])) {
                  for (u = t.length - 1; 0 <= s; s -= 3) {
                    if (v = _2[s], '' != (w = v.substring(_2L[s * 4 + 1], _2L[s * 4 + 2]).slice(1, -1).toLowerCase())) {
                      for (x = v.substring(0, _2L[s * 4]), v = v.substring(_2L[s * 4 + 3]), y = u, z = 1; 0 <= y; y -= 3)
                        if (w == t[y - 2] && x == t[y - 1] && v == t[y]) {
                          z = 0;
                          break;
                        }
                      if (z) {
                        t.push(w, x, v);
                        if (6 < p) {
                          for (l = ABPPropertiesW.length - 1, s = 1; 0 <= l; --l)
                            if (m == ABPPropertiesW[l]) {
                              s = 0;
                              break;
                            }
                          s && ABPPropertiesW.push(m);
                        }
                        else
                          0 > HideHosts.indexOf(' ' + m + ' ') && (HideHosts += m + ' ');
                      }
                    }
                  }
                }
                else {
                  s = l[t = 0 < p % 2 ? 7 : 6] || (l[t] = []);
                  u = s[2] || (s[2] = []);
                  for (v = _2.length, w = x = 0; w < v; w++)
                    if ('' != (y = _2[w].substring(_2L[w * 4 + 1], _2L[w * 4 + 2]).slice(1, -1).toLowerCase()))
                      x = 1,
                      u.push(y, _2[w].substring(0, _2L[w * 4]), _2[w].substring(_2L[w * 4 + 3]));
                  if (x) {
                    if (6 < t) {
                      for (l = ABPPropertiesW.length - 1, s = 1; 0 <= l; --l)
                        if (m == ABPPropertiesW[l]) {
                          s = 0;
                          break;
                        }
                      s && ABPPropertiesW.push(m);
                    }
                    else
                      0 > HideHosts.indexOf(' ' + m + ' ') && (HideHosts += m + ' ');
                  }
                  else
                    if (!s[0] && !s[1])
                      delete l[t];
                    else
                      delete s[2];
                }
              }
              if (-1 != (s = _3.length - 1)) {
                if (q = l[8]) {
                  for (t = q.length - 1; 0 <= s; --s) {
                    for (u = _3[s], v = t, w = 1; 0 <= v; --v)
                      if (u == q[v]) {
                        w = 0;
                        break;
                      }
                    if (w) {
                      v = u.replace(/ /g, '').toLowerCase();
                      for (w = 1, x = -1; ; )
                        if (0 > (x = v.indexOf('(', x + 1)))
                          break;
                        else if (':-abp-contains' != v.slice(x - 14, x) && ':-abp-has' != (y = v.slice(x - 9, x)) && ':contains' != y && ':first-child' != v.slice(x - 12, x) && ':has' != v.slice(x - 4, x) && ':has-text' != y) {
                          v = l[4] || (l[4] = []);
                          v.push(u);
                          w = 0;
                          break;
                        }
                      if (w)
                        v = l[w = 0 > u.indexOf('(') ? 4 : 8] || (l[w] = []),
                        v.push(u);
                      0 > HideHosts.indexOf(' ' + m + ' ') && (HideHosts += m + ' ');
                    }
                  }
                }
                else {
                  for ( ; 0 <= s; --s) {
                    t = (u = _3[s]).replace(/ /g, '').toLowerCase();
                    for (v = 1, w = -1; ; )
                      if (0 > (w = t.indexOf('(', w + 1)))
                        break;
                      else if (':-abp-contains' != t.slice(w - 14, w) && ':-abp-has' != (x = t.slice(w - 9, w)) && ':contains' != x && ':first-child' != t.slice(w - 12, w) && ':has' != t.slice(w - 4, w) && ':has-text' != x) {
                        t = l[4] || (l[4] = []);
                        t.push(u);
                        v = 0;
                        break;
                      }
                    if (v)
                      t = l[v = 0 > u.indexOf('(') ? 4 : 8] || (l[v] = []),
                      t.push(u);
                  }
                  0 > HideHosts.indexOf(' ' + m + ' ') && (HideHosts += m + ' ');
                }
              }
              if (-1 != (s = _4.length - 1)) {
                if (q = l[9]) {
                  for (t = q.length - 1; 0 <= s; --s) {
                    for (u = _4[s], v = t, w = 1; 0 <= v; --v)
                      if (u == q[v]) {
                        w = 0;
                        break;
                      }
                    if (w) {
                      for (v = PropertiesW.length - 1, w = 1; 0 <= v; --v)
                        if (m == PropertiesW[v]) {
                          w = 0;
                          break;
                        }
                      w && PropertiesW.push(m);
                      v = u.replace(/ /g, '').toLowerCase();
                      for (w = 1, x = -1; ; )
                        if (0 > (x = v.indexOf('(', x + 1)))
                          break;
                        else if (':-abp-contains' != v.slice(x - 14, x) && ':-abp-has' != (y = v.slice(x - 9, x)) && ':contains' != y && ':first-child' != v.slice(x - 12, x) && ':has' != v.slice(x - 4, x) && ':has-text' != y) {
                          v = l[5] || (l[5] = []);
                          v.push(u);
                          w = 0;
                          break;
                        }
                      if (w)
                        v = l[w = 0 > u.indexOf('(') ? 5 : 9] || (l[w] = []),
                        v.push(u);
                      0 > HideHosts.indexOf(' ' + m + ' ') && (HideHosts += m + ' ');
                    }
                  }
                }
                else {
                  for ( ; 0 <= s; --s) {
                    for (v = PropertiesW.length - 1, w = 1; 0 <= v; --v)
                      if (m == PropertiesW[v]) {
                        w = 0;
                        break;
                      }
                    w && PropertiesW.push(m);
                    t = (u = _4[s]).replace(/ /g, '').toLowerCase();
                    for (v = 1, w = -1; ; )
                      if (0 > (w = t.indexOf('(', w + 1)))
                        break;
                      else if (':-abp-contains' != t.slice(w - 14, w) && ':-abp-has' != (x = t.slice(w - 9, w)) && ':contains' != x && ':first-child' != t.slice(w - 12, w) && ':has' != t.slice(w - 4, w) && ':has-text' != x) {
                        t = l[5] || (l[5] = []);
                        t.push(u);
                        v = 0;
                        break;
                      }
                    if (v)
                      t = l[v = 0 > u.indexOf('(') ? 5 : 9] || (l[v] = []),
                      t.push(u);
                  }
                  0 > HideHosts.indexOf(' ' + m + ' ') && (HideHosts += m + ' ');
                }
              }
            }
          }
        }
        else if (!j)
          if (k = k.slice(0, -1), 5 > i) {
            for (l = 1, m = HideOther.length - 1; 0 <= m; --m)
              if (k == HideOther[m]) {
                l = 0;
                break;
              }
            l && HideOther.push(k);
          }
          else {
            for (l = 1, m = HideOtherW.length - 1; 0 <= m; --m)
              if (k == HideOtherW[m]) {
                l = 0;
                break;
              }
            l && HideOtherW.push(k);
          }
      }
    }
    else {                                                                      // paths
      if (0 == Filter.indexOf('@@') || 3 == PathsProtocol)
        Block = 0,
        !PathsProtocol && (Filter = Filter.slice(2));
      else
        Block = 1;
      if (0 <= (a = Filter.lastIndexOf('$')))
        FilterOptions = Filter.slice(a + 1).split(','),
        Filter = Filter.substring(0, a);
      else
        FilterOptions = [];
      if (0 <= Filter.indexOf(' ')) {
        console.log('Invalid filter (contains whitespace in path): ' + List[FilterIndex]);
        PathsProtocol = 0;
        continue;
      }
      if (0 <= Filter.indexOf('**'))
        Filter = Filter.replace(/\*+/g, '*');
      if (PathsProtocol && '*' == Filter.charAt(0))
        Filter = Filter.substring(1),
        PathsProtocol = 0;
      if (0 == Filter.indexOf('/') && '/' == Filter.slice(-1) && '/' != Filter) {
        Filter = Filter.slice(1, -1);
        if (0 > Filter.indexOf('[') && 0 > Filter.indexOf('{') && 0 > Filter.indexOf('(') && 0 > Filter.indexOf('+') && 0 > Filter.indexOf('$') && 0 > Filter.indexOf('^') && 0 > Filter.indexOf('.') && 0 > Filter.indexOf('*') && 0 > Filter.indexOf('|') && 0 > Filter.indexOf('\\'))
          Type = 0;                                                             // Type = 0: open end
        else
          Type = 2;                                                             // Type = 2: regular expression
      }
      else {
        0 == Filter.indexOf('*') && 1 != PathsProtocol && (Filter = Filter.slice(1));
        if ('|' == Filter.slice(-1) && '\\' != Filter.slice(-2, -1)) {
          Filter = Filter.slice(0, -1);
          if ('*' == Filter.slice(-1))
            Filter = Filter.slice(0, -1),
            Type = 0;                                                           // Type = 0: open end
          else
            Type = 1;                                                           // Type = 1: URL ends here
        }
        else
          '*' == Filter.slice(-1) && (Filter = Filter.slice(0, -1)),
          Type = 0;                                                             // Type = 0: open end
      }
      if (0 > (j = FilterOptions.length - 1) && 0 > Filter.indexOf('*') && 0 > Filter.indexOf('^') && !PathsProtocol && !Type) {// Paths
        if ('' != Filter)
          if (Block)
            if (0 <= Filter.indexOf('?'))
              Paths0.push(Filter.toLowerCase());
            else if (0 <= Filter.indexOf('&'))
              Paths1.push(Filter.toLowerCase());
            else if (0 <= Filter.indexOf('_'))
              Paths2.push(Filter.toLowerCase());
            else if (0 <= Filter.indexOf('-'))
              Paths3.push(Filter.toLowerCase());
            else
              Paths.push(Filter.toLowerCase());
          else
            if (0 <= Filter.indexOf('?'))
              PathsW0.push(Filter.toLowerCase());
            else if (0 <= Filter.indexOf('&'))
              PathsW1.push(Filter.toLowerCase());
            else if (0 <= Filter.indexOf('_'))
              PathsW2.push(Filter.toLowerCase());
            else if (0 <= Filter.indexOf('-'))
              PathsW3.push(Filter.toLowerCase());
            else
              PathsW.push(Filter.toLowerCase());
      }
      else {
        FODomains = FODomains2 = '|';
        FONoDomains = FramesFO = GenericBlockFO = '';
        MatchCase = 0;
        for (FOIndex = FilterOptions.length - 1, Abort = 0; 0 <= FOIndex; --FOIndex)// filter options
          if ('third-party' == (FilterOption = FilterOptions[FOIndex]) || '~first-party' == FilterOption)// third-party and ~first-party
            0 > FONoDomains.indexOf('t') && (FONoDomains += 't');
          else if ('popup' == FilterOption)                                     // popup
            0 > FONoDomains.indexOf('p') && (FONoDomains += 'p');
          else if ('~third-party' == FilterOption || 'first-party' == FilterOption)// ~third-party and first-party
            0 > FONoDomains.indexOf('T') && (FONoDomains += 'T');
          else if ('~popup' == FilterOption) {                                  // ~popup
          }
          else if ('script' == FilterOption)                                    // types
            0 > FONoDomains.indexOf('s') && (FONoDomains += 's');
          else if ('image' == FilterOption)
            0 > FONoDomains.indexOf('i') && (FONoDomains += 'i');
          else if ('xmlhttprequest' == FilterOption)
            0 > FONoDomains.indexOf('x') && (FONoDomains += 'x');
          else if ('subdocument' == FilterOption)
            0 > FONoDomains.indexOf('l') && (FONoDomains += 'l');
          else if ('object' == FilterOption || 'object-subrequest' == FilterOption)
            0 > FONoDomains.indexOf('o') && (FONoDomains += 'o');
          else if ('media' == FilterOption)
            0 > FONoDomains.indexOf('m') && (FONoDomains += 'm');
          else if ('stylesheet' == FilterOption)
            0 > FONoDomains.indexOf('y') && (FONoDomains += 'y');
          else if ('other' == FilterOption)
            0 > FONoDomains.indexOf('j') && (FONoDomains += 'j');
          else if ('document' == FilterOption)
            0 > FONoDomains.indexOf('u') && (FONoDomains += 'u');
          else if ('webrtc' == FilterOption)
            0 > FONoDomains.indexOf('w') && (FONoDomains += 'w');
          else if ('websocket' == FilterOption)
            0 > FONoDomains.indexOf('q') && (FONoDomains += 'q');
          else if ('font' == FilterOption)
            0 > FONoDomains.indexOf('f') && (FONoDomains += 'f');
          else if ('ping' == FilterOption)
            0 > FONoDomains.indexOf('k') && (FONoDomains += 'k');
          else if ('csp_report' == FilterOption)
            0 > FONoDomains.indexOf('r') && (FONoDomains += 'r');
          else if ('~script' == FilterOption)
            0 > FONoDomains.indexOf('S') && (FONoDomains += 'S');
          else if ('~image' == FilterOption)
            0 > FONoDomains.indexOf('I') && (FONoDomains += 'I');
          else if ('~xmlhttprequest' == FilterOption)
            0 > FONoDomains.indexOf('X') && (FONoDomains += 'X');
          else if ('~subdocument' == FilterOption)
            0 > FONoDomains.indexOf('L') && (FONoDomains += 'L');
          else if ('~object' == FilterOption || '~object-subrequest' == FilterOption)
            0 > FONoDomains.indexOf('O') && (FONoDomains += 'O');
          else if ('~media' == FilterOption)
            0 > FONoDomains.indexOf('M') && (FONoDomains += 'M');
          else if ('~stylesheet' == FilterOption)
            0 > FONoDomains.indexOf('Y') && (FONoDomains += 'Y');
          else if ('~other' == FilterOption)
            0 > FONoDomains.indexOf('J') && (FONoDomains += 'J');
          else if ('~document' == FilterOption)
            0 > FONoDomains.indexOf('U') && (FONoDomains += 'U');
          else if ('~webrtc' == FilterOption)
            0 > FONoDomains.indexOf('W') && (FONoDomains += 'W');
          else if ('~websocket' == FilterOption)
            0 > FONoDomains.indexOf('Q') && (FONoDomains += 'Q');
          else if ('~font' == FilterOption)
            0 > FONoDomains.indexOf('F') && (FONoDomains += 'F');
          else if ('~ping' == FilterOption)
            0 > FONoDomains.indexOf('K') && (FONoDomains += 'K');
          else if ('~csp_report' == FilterOption)
            0 > FONoDomains.indexOf('R') && (FONoDomains += 'R');
          else if (0 == FilterOption.indexOf('domain=')) {
            for (a = FilterOption.substring(7).split('|'), b = a.length - 1; 0 <= b; --b) {
              c = a[b];
              '.' == c.slice(-1) && (c = c.slice(0, -1));
              if ('~' != c.slice(0, 1))                                         // domain=
                0 > FODomains.indexOf('|' + c + '|') && (FODomains = '|' + c + FODomains);
              else                                                              // domain=~
                c = c.substring(1),
                0 > FODomains2.indexOf('|' + c + '|') && (FODomains2 = '|' + c + FODomains2);
            }
          }
          else if (0 == FilterOption.indexOf('https=') || 'https' == FilterOption) {// https
            Abort = 1;
            console.log("Filter Option 'https' needs a domain: " + List[FilterIndex].trim());
            break;
          }
          else if ('match-case' == FilterOption) {                              // match-case
            if ('' != Filter || RE)
              Filter = Filter.toLowerCase(),
              0 > FONoDomains.indexOf('a') && (FONoDomains = 'a' + FONoDomains),
              0 > FramesFO.indexOf('a') && (FramesFO = 'a' + FramesFO),
              0 > GenericBlockFO.indexOf('a') && (GenericBlockFO = 'a' + GenericBlockFO);
          }
          else if ('collapse' == FilterOption)                                  // collapse
            0 > WhiteCollapse.indexOf(' ' + (www ? Filter.slice(4) : Filter) + ' ') && 0 > FramesFO.indexOf('c') && (FramesFO += 'c');
          else if ('~collapse' == FilterOption) {                               // ~collapse
            0 <= (a = FramesFO.indexOf('c')) && (FramesFO = FramesFO.substring(0, a) + FramesFO.slice(a + 1));
            WhiteCollapse += (a = www ? Filter.slice(4) : Filter) + ' ';
            if (0 <= (b = FilterDomains.indexOf(' ' + a + '^'))) {
              c = FilterDomains.slice(b + (a = a.length) + 2);
              d = c.indexOf(' ');
              if (0 <= (e = c.slice(0, d).indexOf('c')))
                if (2 > d)
                  FilterDomains = FilterDomains.substring(0, b) + FilterDomains.slice(b + a + 3);
                else
                  FilterDomains = FilterDomains.slice(0, (b = b + a + 2 + e)) + FilterDomains.substring(b + 1);
            }
          }
          else if ('donottrack' == FilterOption) {                              // donottrack
            Abort = 1;
            break;
          }
          else if ('elemhide' == FilterOption) {                                // elemhide
            if (Block) {
              console.log('error - filter must be whitelisted: ' + List[FilterIndex]);
              Abort = 1;
              break;
            }
            0 > WhiteElemhide.indexOf(' ' + (www ? Filter.slice(4) : Filter) + ' ') && 0 > FramesFO.indexOf('e') && (FramesFO += 'e')
          }
          else if ('~elemhide' == FilterOption) {                               // ~elemhide
            if (Block) {
              console.log('error - filter must be whitelisted: ' + List[FilterIndex]);
              Abort = 1;
              break;
            }
            if (0 <= (a = FramesFO.indexOf('e')))
              FramesFO = FramesFO.substring(0, a) + FramesFO.slice(a + 1);
            WhiteElemhide += (a = www ? Filter.slice(4) : Filter) + ' ';
            if (0 <= (b = FilterDomains.indexOf(' ' + a + '^'))) {
              c = FilterDomains.slice(b + (a = a.length) + 2);
              d = c.indexOf(' ');
              if (0 <= (e = c.slice(0, d).indexOf('e')))
                if (2 > d)
                  FilterDomains = FilterDomains.substring(0, b) + FilterDomains.slice(b + a + 3);
                else
                  FilterDomains = FilterDomains.slice(0, (b = b + a + 2 + e)) + FilterDomains.substring(b + 1);
            }
          }
          else if ('genericblock' == FilterOption) {                            // genericblock
            if (Block) {
              console.log('error - filter must be whitelisted: ' + List[FilterIndex]);
              Abort = 1;
              break;
            }
            GenericBlockFO += 'b';
          }
          else if ('generichide' == FilterOption) {                             // generichide
            if (Block) {
              console.log('error - filter must be whitelisted: ' + List[FilterIndex]);
              Abort = 1;
              break;
            }
            0 > FramesFO.indexOf('h') && (FramesFO += 'h');
          }
          else if (0 == FilterOption.indexOf('sitekey=')) {                     // sitekey
            Abort = 1;
            break;
          }
          else if ('' == FilterOption) {                                        // empty
          }
          else {                                                                // invalid filter option
            a = 0;
            if (0 > 'abcdefghijklmnopqrstuvwxyz~ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(FilterOption[0]))
              a = 1;
            for (b = 0 > (c = FilterOption.indexOf('=')) ? FilterOption.slice(1) : FilterOption.slice(1, c), c = b.length - 1; 0 <= c; c--)
              if (0 > 'abcdefghijklmnopqrstuvwxyz-ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(b[c])) {
                a = 1;
                break;
              }
            if (a) {
              Filter += '$' + FilterOptions.join('');
              FODomains = FODomains2 = '|';
              FONoDomains = '';
              break;
            }
            Abort = 1;
            console.log('invalid filter option: ' + FilterOption);
            console.log(List[FilterIndex]);
            break;
          }
        if (Abort) {
          PathsProtocol = 0;
          continue;
        }
        if ('tT' == FONoDomains || 'Tt' == FONoDomains)
          FONoDomains = '';
        if ('' != GenericBlockFO) {
          GenericBlockTest = 1;
          GenericBlockFilter = Filter;
          1 < GenericBlockFO.length && (GenericBlockFO = 'ab');
          if (1 < Type) {                                                       // regular expression
            a = PathsProtocol ? GenericBlockPathsPR : GenericBlockPathsR;
            b = GetTokenRegExp(GenericBlockFilter);
            for (c = a.length - 2, d = 1; 0 < c; c -= 3)
              if (GenericBlockFO == '' + a[c]) {
                a[c - 1].push(GenericBlockFilter);
                d = 0;
                a[c + 1].push(b);
                break;
              }
            if (d)
              a.push([GenericBlockFilter], GenericBlockFO, [b]);
          }
          else if (0 > GenericBlockFilter.indexOf('*') && 0 > GenericBlockFilter.indexOf('^')) {// no special characters
            if (Type)                                                           // URL ends here
              a = PathsProtocol ? GenericBlockPathsPE : GenericBlockPathsE;
            else                                                                // open end
              a = PathsProtocol ? GenericBlockPathsP : GenericBlockPathsF;
            for (b = a.length - 1, c = 1; 0 < b; b -= 2)
              if (GenericBlockFO == '' + a[b]) {
                a[b - 1].push(GenericBlockFilter);
                c = 0;
                break;
              }
            if (c)
              a.push([GenericBlockFilter], GenericBlockFO);
          }
          else {
            if (!(0 <= (h = GenericBlockFilter.indexOf('*')) && h < GenericBlockFilter.lastIndexOf('^')) && !Type) {
              a = PathsProtocol ? GenericBlockPathsPS : GenericBlockPathsS;
              b = GetTokenNoRegExp(GenericBlockFilter);
              for (c = a.length - 2, d = 1; 0 < c; c -= 3)
                if (GenericBlockFO == '' + a[c]) {
                  a[c - 1].push(GenericBlockFilter);
                  d = 0;
                  a[c + 1].push(b);
                  break;
                }
              if (d)
                a.push([GenericBlockFilter], GenericBlockFO, [b]);
            }
            else {
              0 <= GenericBlockFilter.indexOf('/') && (GenericBlockFilter = GenericBlockFilter.replace(/\//g, '\\/'));
              0 <= GenericBlockFilter.indexOf('.') && (GenericBlockFilter = GenericBlockFilter.replace(/\./g, '\\.'));
              0 <= GenericBlockFilter.indexOf('|') && (GenericBlockFilter = GenericBlockFilter.replace(/\|/g, '\\|'));
              0 <= GenericBlockFilter.indexOf('?') && (GenericBlockFilter = GenericBlockFilter.replace(/\?/g, '\\?'));
              0 <= GenericBlockFilter.indexOf('+') && (GenericBlockFilter = GenericBlockFilter.replace(/\+/g, '\\+'));
              0 <= GenericBlockFilter.indexOf('(') && (GenericBlockFilter = GenericBlockFilter.replace(/\(/g, '\\('));
              0 <= GenericBlockFilter.indexOf(')') && (GenericBlockFilter = GenericBlockFilter.replace(/\)/g, '\\)'));
              0 <= GenericBlockFilter.indexOf('[') && (GenericBlockFilter = GenericBlockFilter.replace(/\[/g, '\\['));
              0 <= GenericBlockFilter.indexOf(']') && (GenericBlockFilter = GenericBlockFilter.replace(/\]/g, '\\]'));
              0 <= GenericBlockFilter.indexOf('{') && (GenericBlockFilter = GenericBlockFilter.replace(/\{/g, '\\{'));
              0 <= GenericBlockFilter.indexOf('}') && (GenericBlockFilter = GenericBlockFilter.replace(/\}/g, '\\}'));
              0 <= GenericBlockFilter.indexOf('$') && (GenericBlockFilter = GenericBlockFilter.replace(/\}/g, '\\$'));
              0 <= GenericBlockFilter.indexOf('*') && (GenericBlockFilter = GenericBlockFilter.replace(/\*+/g, '(.+|)'));
              0 <= GenericBlockFilter.indexOf('^') && (GenericBlockFilter = GenericBlockFilter.replace(/\^/g, '[^a-z0-9A-Z-._%]'));
              Type && (GenericBlockFilter += '$');
              a = PathsProtocol ? GenericBlockPathsPR : GenericBlockPathsR;
              b = GetTokenRegExp(GenericBlockFilter);
              for (c = a.length - 2, d = 1; 0 < c; c -= 3)
                if (GenericBlockFO == '' + a[c]) {
                  a[c - 1].push(GenericBlockFilter);
                  d = 0;
                  a[c + 1].push(b);
                  break;
                }
              if (d)
                a.push([GenericBlockFilter], GenericBlockFO, [b]);
            }
          }
          if ('' == FramesFO && ('' == FONoDomains || 'a' == FONoDomains) && '|' == FODomains && '|' == FODomains2) {
            PathsProtocol = 0;
            continue;
          }
        }
        if ('' != FramesFO) {
          FramesTest = 1;
          FramesFilter = Filter;
          FramesFO = FramesFO.split('').sort().join('');
          if (1 < Type) {                                                       // regular expression
            a = PathsProtocol ? FramesPathsPR : FramesPathsR;
            b = GetTokenRegExp(FramesFilter);
            for (c = a.length - 2, d = 1; 0 < c; c -= 3)
              if (FramesFO == '' + a[c]) {
                a[c - 1].push(FramesFilter);
                d = 0;
                a[c + 1].push(b);
                break;
              }
            if (d)
              a.push([FramesFilter], FramesFO, [b]);
          }
          else if (0 > FramesFilter.indexOf('*') && 0 > FramesFilter.indexOf('^')) {// no special characters
            if (Type)                                                           // URL ends here
              a = PathsProtocol ? FramesPathsPE : FramesPathsE;
            else                                                                // open end
              a = PathsProtocol ? FramesPathsP : FramesPathsF;
            for (b = a.length - 1, c = 1; 0 < b; b -= 2)
              if (FramesFO == '' + a[b]) {
                a[b - 1].push(FramesFilter);
                c = 0;
                break;
              }
            if (c)
              a.push([FramesFilter], FramesFO);
          }
          else {
            if (!(0 <= (h = FramesFilter.indexOf('*')) && h < FramesFilter.lastIndexOf('^')) && !Type) {
              a = PathsProtocol ? FramesPathsPS : FramesPathsS;
              b = GetTokenNoRegExp(FramesFilter);
              for (c = a.length - 2, d = 1; 0 < c; c -= 3)
                if (FramesFO == '' + a[c]) {
                  a[c - 1].push(FramesFilter);
                  d = 0;
                  a[c + 1].push(b);
                  break;
                }
              if (d)
                a.push([FramesFilter], FramesFO, [b]);
            }
            else {
              0 <= FramesFilter.indexOf('/') && (FramesFilter = FramesFilter.replace(/\//g, '\\/'));
              0 <= FramesFilter.indexOf('.') && (FramesFilter = FramesFilter.replace(/\./g, '\\.'));
              0 <= FramesFilter.indexOf('|') && (FramesFilter = FramesFilter.replace(/\|/g, '\\|'));
              0 <= FramesFilter.indexOf('?') && (FramesFilter = FramesFilter.replace(/\?/g, '\\?'));
              0 <= FramesFilter.indexOf('+') && (FramesFilter = FramesFilter.replace(/\+/g, '\\+'));
              0 <= FramesFilter.indexOf('(') && (FramesFilter = FramesFilter.replace(/\(/g, '\\('));
              0 <= FramesFilter.indexOf(')') && (FramesFilter = FramesFilter.replace(/\)/g, '\\)'));
              0 <= FramesFilter.indexOf('[') && (FramesFilter = FramesFilter.replace(/\[/g, '\\['));
              0 <= FramesFilter.indexOf(']') && (FramesFilter = FramesFilter.replace(/\]/g, '\\]'));
              0 <= FramesFilter.indexOf('{') && (FramesFilter = FramesFilter.replace(/\{/g, '\\{'));
              0 <= FramesFilter.indexOf('}') && (FramesFilter = FramesFilter.replace(/\}/g, '\\}'));
              0 <= FramesFilter.indexOf('$') && (FramesFilter = FramesFilter.replace(/\}/g, '\\$'));
              0 <= FramesFilter.indexOf('*') && (FramesFilter = FramesFilter.replace(/\*+/g, '(.+|)'));
              0 <= FramesFilter.indexOf('^') && (FramesFilter = FramesFilter.replace(/\^/g, '[^a-z0-9A-Z-._%]'));
              Type && (FramesFilter += '$');
              a = PathsProtocol ? FramesPathsPR : FramesPathsR;
              b = GetTokenRegExp(FramesFilter);
              for (c = a.length - 2, d = 1; 0 < c; c -= 3)
                if (FramesFO == '' + a[c]) {
                  a[c - 1].push(FramesFilter);
                  d = 0;
                  a[c + 1].push(b);
                  break;
                }
              if (d)
                a.push([FramesFilter], FramesFO, [b]);
            }
          }
          if (('' == FONoDomains || 'a' == FONoDomains) && '|' == FODomains && '|' == FODomains2) {
            PathsProtocol = 0;
            continue;
          }
        }
        FODomains = '|' == FODomains ? '' : 'd' + FODomains.slice(1, -1);
        FODomains2 = '|' == FODomains2 ? '' : 'D' + FODomains2.slice(1, -1);
        FONoDomains = '' != FONoDomains ? FONoDomains.split('').sort().join('') : 0;
        a = ('0' != FONoDomains ? FONoDomains : '') + FODomains + FODomains2;
        '' == a && (a = 0);
        if (!a && 0 > Filter.indexOf('*') && 0 > Filter.indexOf('^') && !PathsProtocol && !Type) {// Paths
          if ('' != Filter)
            if (Block)
              if (0 <= Filter.indexOf('?'))
                Paths0.push(Filter.toLowerCase());
              else if (0 <= Filter.indexOf('&'))
                Paths1.push(Filter.toLowerCase());
              else if (0 <= Filter.indexOf('_'))
                Paths2.push(Filter.toLowerCase());
              else if (0 <= Filter.indexOf('-'))
                Paths3.push(Filter.toLowerCase());
              else
                Paths.push(Filter.toLowerCase());
            else
              if (0 <= Filter.indexOf('?'))
                PathsW0.push(Filter.toLowerCase());
              else if (0 <= Filter.indexOf('&'))
                PathsW1.push(Filter.toLowerCase());
              else if (0 <= Filter.indexOf('_'))
                PathsW2.push(Filter.toLowerCase());
              else if (0 <= Filter.indexOf('-'))
                PathsW3.push(Filter.toLowerCase());
              else
                PathsW.push(Filter.toLowerCase());
        }
        else if (1 < Type) {                                                    // regular expression
          b = 0;                                                                // remove trailing \ if their number is not even
          for (c = Filter.length; 0 < c; --c) {
            if ('\\' != Filter.slice(c - 1, c))
              break;
            ++b;
          }
          if (0 < b % 2) {
            Filter = Filter.slice(0, -b);
            if ('' == Filter)
              continue;
          }
          b = Block ? PathsProtocol ? PathsPR : PathsR : PathsProtocol ? PathsWPR : PathsWR;
          c = GetTokenRegExp(Filter);
          for (d = b.length - 2, e = 1; 0 < d; d -= 3)
            if (a == '' + b[d]) {
              b[d - 1].push(Filter);
              e = 0;
              b[d + 1].push(c);
              break;
            }
          if (e)
            b.push([Filter], a, [c]);
        }
        else if (0 > Filter.indexOf('*') && 0 > Filter.indexOf('^')) {          // no special characters
          if (Type) {                                                           // URL ends here
            if (PathsProtocol) {
              if (Block)
                b = PathsPE;
              else
                b = PathsWPE;
              for (c = b.length - 1, d = 1; 0 < c; c -= 2)
                if (a == '' + b[c]) {
                  b[c - 1].push(Filter);
                  d = 0;
                  break;
                }
              if (d)
                b.push([Filter], a);
            }
            else {
              if (!a) {
                (Block ? PathsENoFO : PathsWENoFO).push(Filter);
                continue;
              }
              if (Block)
                b = PathsE;
              else
                b = PathsWE;
              for (c = b.length - 1, d = 1; 0 < c; c -= 2)
                if (a == '' + b[c]) {
                  b[c - 1].push(Filter);
                  d = 0;
                  break;
                }
              if (d)
                b.push([Filter], a);
            }
          }
          else                                                                  // open end
            if ('' != Filter) {
              if (PathsProtocol) {
                if (Block)
                  b = PathsP;
                else
                  b = PathsWP;
                for (c = b.length - 1, d = 1; 0 < c; c -= 2)
                  if (a == '' + b[c]) {
                    b[c - 1].push(Filter);
                    d = 0;
                    break;
                  }
                if (d)
                  b.push([Filter], a);
              }
              else {
                if (Block)
                  b = PathsF,
                  c = PathsFFO;
                else
                  b = PathsWF,
                  c = PathsWFFO;
                for (d = c.length - 1, e = 1; 0 <= d; d--)
                  if (a == '' + c[d]) {
                    b[d].push(Filter);
                    e = 0;
                    break;
                  }
                if (e)
                  b.push([Filter]),
                  c.push(a);
              }
            }
            else
              if (Block)
                BlockNoDomains.push(a);
              else
                WhiteNoDomains.push(a);
        }
        else {
          if (!(0 <= (h = Filter.indexOf('*')) && h < Filter.lastIndexOf('^')) && !Type) {
            b = Block ? PathsProtocol ? PathsPS : PathsS : PathsProtocol ? PathsWPS : PathsWS;
            if (!PathsProtocol)
              if (!a) {
                if (Block)
                  if (0 <= Filter.indexOf('?'))
                    PathsSNoFO0.push(Filter);
                  else if (0 <= Filter.indexOf('&'))
                    PathsSNoFO1.push(Filter);
                  else if (0 <= Filter.indexOf('_'))
                    PathsSNoFO2.push(Filter);
                  else if (0 <= Filter.indexOf('-'))
                    PathsSNoFO3.push(Filter);
                  else
                    PathsSNoFO.push(Filter);
                else
                  if (0 <= Filter.indexOf('?'))
                    PathsWSNoFO0.push(Filter);
                  else if (0 <= Filter.indexOf('&'))
                    PathsWSNoFO1.push(Filter);
                  else if (0 <= Filter.indexOf('_'))
                    PathsWSNoFO2.push(Filter);
                  else if (0 <= Filter.indexOf('-'))
                    PathsWSNoFO3.push(Filter);
                  else
                    PathsWSNoFO.push(Filter);
                continue;
              }
              else
                b = Block ? PathsS : PathsPS;
            else
              b = Block ? PathsPS : PathsWPS;
            if (0 <= Filter.indexOf('**'))
              Filter = Filter.replace(/\*+/g, '*');
            c = GetTokenNoRegExp(Filter);
            for (d = b.length - 2, e = 1; 0 < d; d -= 3)
              if (a == '' + b[d]) {
                b[d - 1].push(Filter);
                e = 0;
                b[d + 1].push(c);
                break;
              }
            if (e)
              b.push([Filter], a, [c]);
          }
          else {
            b = 0;                                                              // remove trailing \ if their number is not even
            for (c = Filter.length; 0 < c; --c) {
              if ('\\' != Filter.slice(c - 1, c))
                break;
              ++b;
            }
            if (0 < b % 2) {
              Filter = Filter.slice(0, -b);
              if ('' == Filter)
                continue;
            }
            0 <= Filter.indexOf('/') && (Filter = Filter.replace(/\//g, '\\/'));
            0 <= Filter.indexOf('.') && (Filter = Filter.replace(/\./g, '\\.'));
            0 <= Filter.indexOf('|') && (Filter = Filter.replace(/\|/g, '\\|'));
            0 <= Filter.indexOf('?') && (Filter = Filter.replace(/\?/g, '\\?'));
            0 <= Filter.indexOf('+') && (Filter = Filter.replace(/\+/g, '\\+'));
            0 <= Filter.indexOf('(') && (Filter = Filter.replace(/\(/g, '\\('));
            0 <= Filter.indexOf(')') && (Filter = Filter.replace(/\)/g, '\\)'));
            0 <= Filter.indexOf('[') && (Filter = Filter.replace(/\[/g, '\\['));
            0 <= Filter.indexOf(']') && (Filter = Filter.replace(/\]/g, '\\]'));
            0 <= Filter.indexOf('{') && (Filter = Filter.replace(/\{/g, '\\{'));
            0 <= Filter.indexOf('}') && (Filter = Filter.replace(/\}/g, '\\}'));
            0 <= Filter.indexOf('$') && (Filter = Filter.replace(/\}/g, '\\$'));
            0 <= Filter.indexOf('*') && (Filter = Filter.replace(/\*+/g, '(.+|)'));
            0 <= Filter.indexOf('^') && (Filter = Filter.replace(/\^/g, '[^a-z0-9A-Z-._%]'));
            Type && (Filter += '$');
            b = Block ? PathsProtocol ? PathsPR : PathsR : PathsProtocol ? PathsWPR : PathsWR;
            c = GetTokenRegExp(Filter);
            for (d = b.length - 2, e = 1; 0 < d; d -= 3)
              if (a == '' + b[d]) {
                b[d - 1].push(Filter);
                e = 0;
                b[d + 1].push(c);
                break;
              }
            if (e)
              b.push([Filter], a, [c]);
          }
        }
      }
      PathsProtocol = 0;
    }
  }
  //console.log(ListName + ' in ms: ' + (1 * new Date - ListTime));
  if (2 > SiteSpecific) {
    After = 1 * new Date;
    if (!SiteSpecific)
      if ((f = Lists[T]) && (f = f[ListName]))
        if (1 == D)
          f.d = g = 1 * new Date,
          postMessage([
            'UpdateListsStatus',
            T,
            ListName,
            g
          ]);
        else
          0 == D && (f.f = 1 * new Date);
    if (1 > --Update) {
      postMessage([
        'LoadingBar',
        ++ListsCounter / ListsNumber * 100
      ]);
      if (1 > SiteSpecific && (a = Lists.SiteSpecific)) {
        for (SiteSpecific = 2, b = (e = Object.keys(a)).length - 1; 0 <= b; --b)
          f = new XMLHttpRequest,
          f.addEventListener('readystatechange', function() {
            if (200 == f.status)
              convert(f.responseText.replace(/\r/g, '').split('\n'));
          }),
          f.open('GET', 'chrome-extension://' + ExtensionId + '/SiteSpecific/filter/' + Object.getOwnPropertyNames(a)[b] + '.txt', false),
          f.send();
        SiteSpecific = 0;
      }

      /* -abp-properties whitelist */

      function ABPPropertiesWhitelist(a) {
        var b = a[7];
        if (b) {
          for (var c = b.length, d = 0, e, f, g, h, i, j; d < c; d += 3)
            if (e = a[6])
              for (f = b[d], g = b[d + 1], h = b[d + 2], i = e.length, j = 0; j < i; j += 3)
                if (f == e[j] && g == e[j + 1] && h == e[j + 2])
                  a[6] = e.slice(0, j).concat(e.slice(j + 3));
          delete a[7];
          (b = a[6]) && !b[0] && delete a[6];
        }
        return a;
      }
      if (a = ABPPropertiesW.length)
        for (b = 0; b < a; ++b)
          if ((c = ABPPropertiesW[b]) && (d = Hide[c])) {
            Hide[c] = ABPPropertiesWhitelist(d);
            if (!d[0] && !d[1] && !d[2] && !d[3] && !d[4] && !d[5] && !d[6] && !d[8] && !d[9]) {
              delete Hide[c];
              if (0 <= (c = HideHosts.indexOf(d = ' ' + c + ' ')))
                HideHosts = HideHosts.slice(0, c) + HideHosts.slice(c + d.length - 1);
            }
          }

      /* properties whitelist */

      function PropertiesWhitelist(a) {
        var b = a[9];
        if (b) {
          for (var c = b.length - 1, d, e, f, g; 0 <= c; --c)
            if (d = a[8])
              for (e = b[c], f = d.length - 1; 0 <= f; --f)
                if (e == d[f])
                  a[8] = d.slice(0, f).concat(d.slice(f + 1));
          delete a[9];
          if ((b = a[8]) && !b[0])
            delete a[8];
        }
        b = a[5];
        if (b) {
          for (var c = b.length - 1, d, e, f, g; 0 <= c; c--)
            if (d = a[4])
              for (e = b[c], f = d.length - 1; 0 <= f; f--)
                if (e == d[f])
                  a[4] = d.slice(0, f).concat(d.slice(f + 1));
          delete a[5];
          if ((b = a[4]) && !b[0])
            delete a[4];
        }
        return a;
      }
      if (a = PropertiesW.length)
        for (b = 0; b < a; ++b)
          if ((c = PropertiesW[b]) && (d = Hide[c])) {
              Hide[c] = PropertiesWhitelist(d);
              if (!d[0] && !d[1] && !d[2] && !d[3] && !d[4] && !d[5] && !d[6] && !d[8]) {
                delete Hide[c];
                if (0 <= (c = HideHosts.indexOf(d = ' ' + c + ' ')))
                  HideHosts = HideHosts.slice(0, c) + HideHosts.slice(c + d.length - 1);
              }
          }

      for (a = HideClassesW, b = a.length - 1; 0 <= b; --b)                     // remove whitelisted HideClasses
        if (0 <= (e = HideClasses.indexOf((f = ',' + a[b]) + ',')))
          HideIds = HideIds.slice(0, e) + HideIds.slice(e + f.length);
      for (a = HideIdsW, b = a.length - 1; 0 <= b; b--)                         // remove whitelisted HideIds
        if (0 <= (e = HideIds.indexOf((f = ',' + a[b]) + ',')))
          HideIds = HideIds.slice(0, e) + HideIds.slice(e + f.length);
      for (a = HideOther.join(','), b = HideOther.length - 1, e = HideOtherW.length - 1; 0<= e; --e)// remove whitelisted HideOther
        if (0 <= a.indexOf(f = HideOtherW[e]))
          for (g = b; 0 <= g; --g)
            if (f == HideOther[g])
              HideOther = HideOther.slice(0, g).concat(HideOther.slice(g + 1)),
              a = HideOther.join(','),
              --b;
      if (',' != HideClasses) {                                                 // transform HideClasses
        HideClasses = HideClasses.slice(1, -1);
        if ((b = HideClasses.match(/,/g)) && 8192 < b.length) {
          for (b = '', HideClasses = HideClasses.split(','); 8192 < HideClasses.length; )
            b += HideClasses.splice(0, 8192).join(',') + '{display:none !important}';
          HideClasses = b + HideClasses.join(',');
        }
        if ('' != HideClasses && '}' != HideClasses.slice(-1))
          HideClasses += '{display:none !important}';
      }
      else
        HideClasses = '';
      HideClassesW = ',' == HideClassesW ? '' : HideClassesW.slice(1, -1).replace(/\./g, '').split(',');
      if (',' != HideIds) {                                                     // transform HideIds
        HideIds = HideIds.slice(1, -1);
        if ((b = HideIds.match(/,/g)) && 8192 < b.length) {
          for (b = '', HideIds = HideIds.split(','); 8192 < HideIds.length; )
            b += HideIds.splice(0, 8192).join(',') + '{display:none !important}';
          HideIds = b + HideIds.join(',');
        }
        if ('' != HideIds && '}' != HideIds.slice(-1))
          HideIds += '{display:none !important}';
      }
      else
        HideIds = '';
      HideIdsW = ',' == HideIdsW ? '' : HideIdsW.slice(1, -1).replace(/#/g, '').split(',');

      /* Paths */

      function PathsShortcutsF(array) {
        var a = [], b = [], c = [], d, e, f, g, h, i, j, k;
        for ( ; ; ) {
          for (d = {}, e = array.length - 1; 0 <= e; --e)
            if (f = array[e])
              for (g = f.length - 4, h = 0, i = ' '; h <= g; ++h)
                if (0 > i.indexOf(' ' + (j = f.substring(h, h + 4)) + ' '))
                  i += j + ' ',
                  d[j] = (k = d[j]) ? k + 1 : 1;
          e = [];
          for (f in d)
            e.push([f, d[f]]);
          e.sort(function(d, e) {
            return d[1] - e[1];
          });
          if ((f = e[e.length - 1]) && 4 < f[1]) {
            f = f[0];
            a.push(f);
            b.push([]);
            g = b[b.length - 1];
            for (h = array.length - 1; 0 <= h; --h)
              if ((i = array[h]) && 0 <= i.indexOf(f))
                delete array[h],
                g.push(i);
          }
          else
            break;
        }
        for (d = array.length - 1; 0 <= d; --d)
          (e = array[d]) && c.push(e);
        return [a.reverse(), b.reverse(), c];
      }
      a = PathsShortcutsF(Paths);
      PathsShortcuts = a[0];
      PathsShortcutsValues = a[1];
      Paths = a[2];
      a = PathsShortcutsF(Paths0);
      Paths0Shortcuts = a[0];
      Paths0ShortcutsValues = a[1];
      Paths0 = a[2];
      a = PathsShortcutsF(Paths1);
      Paths1Shortcuts = a[0];
      Paths1ShortcutsValues = a[1];
      Paths1 = a[2];
      a = PathsShortcutsF(Paths2);
      Paths2Shortcuts = a[0];
      Paths2ShortcutsValues = a[1];
      Paths2 = a[2];
      a = PathsShortcutsF(Paths3);
      Paths3Shortcuts = a[0];
      Paths3ShortcutsValues = a[1];
      Paths3 = a[2];
      a = PathsShortcutsF(PathsW);
      PathsWShortcuts = a[0];
      PathsWShortcutsValues = a[1];
      PathsW = a[2];
      a = PathsShortcutsF(PathsW0);
      PathsW0Shortcuts = a[0];
      PathsW0ShortcutsValues = a[1];
      PathsW0 = a[2];
      a = PathsShortcutsF(PathsW1);
      PathsW1Shortcuts = a[0];
      PathsW1ShortcutsValues = a[1];
      PathsW1 = a[2];
      a = PathsShortcutsF(PathsW2);
      PathsW2Shortcuts = a[0];
      PathsW2ShortcutsValues = a[1];
      PathsW2 = a[2];
      a = PathsShortcutsF(PathsW3);
      PathsW3Shortcuts = a[0];
      PathsW3ShortcutsValues = a[1];
      PathsW3 = a[2];

      /* Maps */

      function MapsDomains(b, d, e, index, counter) {
        var a, c, f, g, h, i;
        for (a = 0 ; ; ) {
          if (0 <= (c = e.indexOf('|', a)))
            f = 1,
            g = e.substring(a, c),
            a = c + 1;
          else
            f = 0,
            g = e.substring(a);
          g = Maps[g] || (Maps[g] = []);
          g = g[index] || (g[index] = []);
          if (!d)
            if (0 <= counter)
              g[counter] ? g[counter].push(b) : g[counter] = [b];
            else if (-2 < counter)
              g[0] ? g[0].push(b) : g[0] = [b],
              g[1] ? g[1].push(b) : g[1] = [b];
            else
              g[2] ? g[2].push(b) : g[2] = [b],
              g[3] ? g[3].push(b) : g[3] = [b];
          else
            if (0 <= counter)
              0 <= d.indexOf('r') && ((h = g[i = 6 + counter]) ? h.push(b) : g[i] = [b]),
              0 <= d.indexOf('f') && ((h = g[i = 10 + counter]) ? h.push(b) : g[i] = [b]),
              0 <= d.indexOf('i') && ((h = g[i = 14 + counter]) ? h.push(b) : g[i] = [b]),
              0 <= d.indexOf('m') && ((h = g[i = 18 + counter]) ? h.push(b) : g[i] = [b]),
              0 <= d.indexOf('o') && ((h = g[i = 22 + counter]) ? h.push(b) : g[i] = [b]),
              0 <= d.indexOf('j') && ((h = g[i = 26 + counter]) ? h.push(b) : g[i] = [b]),
              0 <= d.indexOf('k') && ((h = g[i = 30 + counter]) ? h.push(b) : g[i] = [b]),
              0 <= d.indexOf('s') && ((h = g[i = 34 + counter]) ? h.push(b) : g[i] = [b]),
              0 <= d.indexOf('y') && ((h = g[i = 38 + counter]) ? h.push(b) : g[i] = [b]),
              0 <= d.indexOf('l') && ((h = g[i = 42 + counter]) ? h.push(b) : g[i] = [b]),
              0 <= d.indexOf('x') && ((h = g[i = 46 + counter]) ? h.push(b) : g[i] = [b]),
              0 <= d.indexOf('w') && ((h = g[i = 50 + counter]) ? h.push(b) : g[i] = [b]),
              0 <= d.indexOf('q') && ((h = g[i = 54 + counter]) ? h.push(b) : g[i] = [b]);
            else if (-2 < counter)
              0 <= d.indexOf('r') && (g[6] ? g[6].push(b) : (g[6] = [b])) && (g[7] ? g[7].push(b) : g[7] = []),
              0 <= d.indexOf('i') && (g[10] ? g[10].push(b) : (g[10] = [b])) && (g[11] ? g[11].push(b) : g[11] = [b]),
              0 <= d.indexOf('f') && (g[14] ? g[14].push(b) : (g[14] = [b])) && (g[15] ? g[15].push(b) : g[15] = [b]),
              0 <= d.indexOf('i') && (g[18] ? g[18].push(b) : (g[18] = [b])) && (g[19] ? g[19].push(b) : g[19] = [b]),
              0 <= d.indexOf('m') && (g[22] ? g[22].push(b) : (g[22] = [b])) && (g[23] ? g[23].push(b) : g[23] = [b]),
              0 <= d.indexOf('o') && (g[26] ? g[26].push(b) : (g[26] = [b])) && (g[27] ? g[27].push(b) : g[27] = [b]),
              0 <= d.indexOf('k') && (g[30] ? g[30].push(b) : (g[30] = [b])) && (g[31] ? g[31].push(b) : g[31] = [b]),
              0 <= d.indexOf('s') && (g[34] ? g[34].push(b) : (g[34] = [b])) && (g[35] ? g[35].push(b) : g[35] = [b]),
              0 <= d.indexOf('y') && (g[38] ? g[38].push(b) : (g[38] = [b])) && (g[39] ? g[39].push(b) : g[39] = [b]),
              0 <= d.indexOf('l') && (g[42] ? g[42].push(b) : (g[42] = [b])) && (g[43] ? g[43].push(b) : g[43] = [b]),
              0 <= d.indexOf('x') && (g[46] ? g[46].push(b) : (g[46] = [b])) && (g[47] ? g[47].push(b) : g[47] = [b]),
              0 <= d.indexOf('w') && (g[50] ? g[50].push(b) : (g[50] = [b])) && (g[51] ? g[51].push(b) : g[51] = [b]),
              0 <= d.indexOf('q') && (g[54] ? g[54].push(b) : (g[54] = [b])) && (g[55] ? g[55].push(b) : g[55] = [b]);
            else
              0 <= d.indexOf('r') && (g[8] ? g[8].push(b) : (g[8] = [b])) && (g[9] ? g[9].push(b) : g[9] = []),
              0 <= d.indexOf('f') && (g[12] ? g[12].push(b) : (g[12] = [b])) && (g[13] ? g[13].push(b) : g[13] = [b]),
              0 <= d.indexOf('i') && (g[16] ? g[16].push(b) : (g[16] = [b])) && (g[17] ? g[17].push(b) : g[17] = [b]),
              0 <= d.indexOf('m') && (g[20] ? g[20].push(b) : (g[20] = [b])) && (g[21] ? g[21].push(b) : g[21] = [b]),
              0 <= d.indexOf('o') && (g[24] ? g[24].push(b) : (g[24] = [b])) && (g[25] ? g[25].push(b) : g[25] = [b]),
              0 <= d.indexOf('j') && (g[28] ? g[28].push(b) : (g[28] = [b])) && (g[29] ? g[29].push(b) : g[29] = [b]),
              0 <= d.indexOf('k') && (g[32] ? g[32].push(b) : (g[32] = [b])) && (g[33] ? g[33].push(b) : g[33] = [b]),
              0 <= d.indexOf('s') && (g[36] ? g[36].push(b) : (g[36] = [b])) && (g[37] ? g[37].push(b) : g[37] = [b]),
              0 <= d.indexOf('y') && (g[40] ? g[40].push(b) : (g[40] = [b])) && (g[41] ? g[41].push(b) : g[41] = [b]),
              0 <= d.indexOf('l') && (g[44] ? g[44].push(b) : (g[44] = [b])) && (g[45] ? g[45].push(b) : g[45] = [b]),
              0 <= d.indexOf('x') && (g[48] ? g[48].push(b) : (g[48] = [b])) && (g[49] ? g[49].push(b) : g[49] = [b]),
              0 <= d.indexOf('w') && (g[52] ? g[52].push(b) : (g[52] = [b])) && (g[53] ? g[53].push(b) : g[53] = [b]),
              0 <= d.indexOf('q') && (g[56] ? g[56].push(b) : (g[56] = [b])) && (g[57] ? g[57].push(b) : g[57] = [b]);
          if(!f)
            break;
        }
      }
      /*
        6     csp_report TP
        7     csp_report ~TP
        8     csp_report TP Popup
        9     csp_report ~TP Popup
        10    font TP
        11    font ~TP
        12    font TP Popup
        13    font ~TP Popup
        14    image TP
        15    image ~TP
        16    image TP Popup
        17    image ~TP Popup
        18    media TP
        19    media ~TP
        20    media TP Popup
        21    media ~TP Popup
        22    object TP
        23    object ~TP
        24    object TP Popup
        25    object ~TP Popup
        26    other TP
        27    other ~TP
        28    other TP Popup
        29    other ~TP Popup
        30    ping TP
        31    ping ~TP
        32    ping TP Popup
        33    ping ~TP Popup
        34    script TP
        35    script ~TP
        36    script TP Popup
        37    script ~TP Popup
        38    stylesheet TP
        39    stylesheet ~TP
        40    stylesheet TP Popup
        41    stylesheet ~TP Popup
        42    subdocument TP
        43    subdocument ~TP
        44    subdocument TP Popup
        45    subdocument ~TP Popup
        46    xmlhttprequest TP
        47    xmlhttprequest ~TP
        48    xmlhttprequest TP Popup
        49    xmlhttprequest ~TP Popup
        50    webrtc TP
        51    webrtc ~TP
        52    webrtc TP Popup
        53    webrtc ~TP Popup
        54    websocket TP
        55    websocket ~TP
        56    websocket TP Popup
        57    websocket ~TP Popup
      */
      function MapsTypes(b, d, mapArray, counter) {
        if (0 <= counter)
          0 <= d.indexOf('r') && mapArray[6 + counter].push(b),
          0 <= d.indexOf('f') && mapArray[10 + counter].push(b),
          0 <= d.indexOf('i') && mapArray[14 + counter].push(b),
          0 <= d.indexOf('m') && mapArray[18 + counter].push(b),
          0 <= d.indexOf('o') && mapArray[22 + counter].push(b),
          0 <= d.indexOf('j') && mapArray[26 + counter].push(b),
          0 <= d.indexOf('k') && mapArray[30 + counter].push(b),
          0 <= d.indexOf('s') && mapArray[34 + counter].push(b),
          0 <= d.indexOf('y') && mapArray[38 + counter].push(b),
          0 <= d.indexOf('l') && mapArray[42 + counter].push(b),
          0 <= d.indexOf('x') && mapArray[46 + counter].push(b),
          0 <= d.indexOf('w') && mapArray[50 + counter].push(b),
          0 <= d.indexOf('q') && mapArray[54 + counter].push(b);
        else if (-2 < counter)
          0 <= d.indexOf('r') && mapArray[6].push(b) && mapArray[7].push(b),
          0 <= d.indexOf('f') && mapArray[10].push(b) && mapArray[11].push(b),
          0 <= d.indexOf('i') && mapArray[14].push(b) && mapArray[15].push(b),
          0 <= d.indexOf('m') && mapArray[18].push(b) && mapArray[19].push(b),
          0 <= d.indexOf('o') && mapArray[22].push(b) && mapArray[23].push(b),
          0 <= d.indexOf('j') && mapArray[26].push(b) && mapArray[27].push(b),
          0 <= d.indexOf('k') && mapArray[30].push(b) && mapArray[31].push(b),
          0 <= d.indexOf('s') && mapArray[34].push(b) && mapArray[35].push(b),
          0 <= d.indexOf('y') && mapArray[38].push(b) && mapArray[39].push(b),
          0 <= d.indexOf('l') && mapArray[42].push(b) && mapArray[43].push(b),
          0 <= d.indexOf('x') && mapArray[46].push(b) && mapArray[47].push(b),
          0 <= d.indexOf('w') && mapArray[50].push(b) && mapArray[51].push(b),
          0 <= d.indexOf('q') && mapArray[54].push(b) && mapArray[55].push(b);
        else
          0 <= d.indexOf('r') && mapArray[8].push(b) && mapArray[9].push(b),
          0 <= d.indexOf('f') && mapArray[12].push(b) && mapArray[13].push(b),
          0 <= d.indexOf('i') && mapArray[16].push(b) && mapArray[17].push(b),
          0 <= d.indexOf('m') && mapArray[20].push(b) && mapArray[21].push(b),
          0 <= d.indexOf('o') && mapArray[24].push(b) && mapArray[25].push(b),
          0 <= d.indexOf('j') && mapArray[28].push(b) && mapArray[29].push(b),
          0 <= d.indexOf('k') && mapArray[32].push(b) && mapArray[33].push(b),
          0 <= d.indexOf('s') && mapArray[36].push(b) && mapArray[37].push(b),
          0 <= d.indexOf('y') && mapArray[40].push(b) && mapArray[41].push(b),
          0 <= d.indexOf('l') && mapArray[44].push(b) && mapArray[45].push(b),
          0 <= d.indexOf('x') && mapArray[48].push(b) && mapArray[49].push(b),
          0 <= d.indexOf('w') && mapArray[52].push(b) && mapArray[53].push(b),
          0 <= d.indexOf('q') && mapArray[56].push(b) && mapArray[57].push(b);
      }
      function MapsF(array, index, mapArray) {
        for (a = array.length, b = 0; b < a; ++b) {
          c = array[b];
          // d: Filter Options
          // e: domain
          if (0 <= (e = c.indexOf('d')) && 0 > c.substring(0, e).indexOf('D')) {
            d = c.substring(0, e);
            e = c.substring(e + 1);
            if (0 <= (f = e.indexOf('D')))
              e = e.substring(0, f);
          }
          else if (0 <= (e = c.indexOf('D')))
            d = c.substring(0, e),
            e = '';
          else
            d = c,
            e = '';
          if (0 > d.indexOf('r')
          && 0 > d.indexOf('f')
          && 0 > d.indexOf('i')
          && 0 > d.indexOf('m')
          && 0 > d.indexOf('o')
          && 0 > d.indexOf('j')
          && 0 > d.indexOf('k')
          && 0 > d.indexOf('s')
          && 0 > d.indexOf('y')
          && 0 > d.indexOf('l')
          && 0 > d.indexOf('x')
          && 0 > d.indexOf('w')
          && 0 > d.indexOf('q'))
            f = 1;
          else
            f = 0;
          /*
            Index   TP      ~TP     Popup
            0 + 1
            0       x
            1               x
            2 + 3                   x
            0 + 1   x       x
            2       x               x
            3               x       x
            2 + 3   x       x       x

            4       match-case
            5       ~domain
          */
          if (0 <= d.indexOf('t'))
            if (0 <= d.indexOf('T'))
              if (0 <= d.indexOf('p'))
                if ('' != e)
                  if (f)
                    MapsDomains(b, 0, e, index, -2);
                  else
                    MapsDomains(b, d, e, index, -2);
                else
                  if (f)
                    mapArray[2].push(b),
                    mapArray[3].push(b);
                  else
                    MapsTypes(b, d, mapArray, -2);
              else
                if ('' != e)
                  if (f)
                    MapsDomains(b, 0, e, index, -1);
                  else
                    MapsDomains(b, d, e, index, -1);
                else
                  if (f)
                    mapArray[0].push(b),
                    mapArray[1].push(b);
                  else
                    MapsTypes(b, d, mapArray, -1);
            else
              if (0 <= d.indexOf('p'))
                if ('' != e)
                  if (f)
                    MapsDomains(b, 0, e, index, 2);
                  else
                    MapsDomains(b, d, e, index, 2);
                 else
                  if (f)
                    mapArray[2].push(b);
                  else
                    MapsTypes(b, d, mapArray, 2);
              else
                if ('' != e)
                  if (f)
                    MapsDomains(b, 0, e, index, 0);
                  else
                    MapsDomains(b, d, e, index, 0);
                else
                  if (f)
                    mapArray[0].push(b);
                  else
                    MapsTypes(b, d, mapArray, 0);
          else
            if (0 <= d.indexOf('T'))
              if (0 <= d.indexOf('p'))
                if ('' != e)
                  if (f)
                    MapsDomains(b, 0, e, index, 3);
                  else
                    MapsDomains(b, d, e, index, 3);
                else
                  if (f)
                    mapArray[3].push(b);
                  else
                    MapsTypes(b, d, mapArray, 3);
              else
                if ('' != e)
                  if (f)
                    MapsDomains(b, 0, e, index, 1);
                  else
                    MapsDomains(b, d, e, index, 1);
                else
                  if (f)
                    mapArray[1].push(b);
                  else
                    MapsTypes(b, d, mapArray, 1);
            else
              if (0 <= d.indexOf('p'))
                if ('' != e)
                  if (f)
                    MapsDomains(b, 0, e, index, -2);
                  else
                    MapsDomains(b, d, e, index, -2);
                else
                  if (f)
                    mapArray[2].push(b),
                    mapArray[3].push(b);
                  else
                    MapsTypes(b, d, mapArray, -2);
              else
                if ('' != e)
                  if (f)
                    MapsDomains(b, 0, e, index, -1);
                  else
                    MapsDomains(b, d, e, index, -1);
                else
                  if (f)
                    mapArray[0].push(b),
                    mapArray[1].push(b);
                  else
                    MapsTypes(b, d, mapArray, -1);
          0 <= d.indexOf('a') && (mapArray[4] += b + ' ');                      // match-case
          0 <= (d = c.indexOf('D')) && (mapArray[5][b] = c.substring(d + 1));   // ~domain
        }
      }
      MapsF(PathsFFO, 0, MapPathsF);
      MapsF(PathsWFFO, 1, MapPathsWF);
      postMessage([
        'UpdateComplete',
        1,
        Lists,
        HTTPSUpgrade,
        BlockDomains,
        WhiteDomains,
        BlockDomainsTP,
        WhiteDomainsTP,
        BlockDomainsF,
        WhiteDomainsF,
        FilterDomains,
        BlockNoDomains,
        WhiteNoDomains,
        BlockURLs,
        WhiteURLs,
        BlockHTTPSURLs,
        WhiteHTTPSURLs,
        BlockHTTPURLs,
        WhiteHTTPURLs,
        BlockWSURLs,
        WhiteWSURLs,
        BlockWSSURLs,
        WhiteWSSURLs,
        BlockProtocolsURLs,
        WhiteProtocolsURLs,
        Maps,
        Regexp,
        RegexpW,
        RegexpD,
        RegexpDW,
        Paths,
        Paths0,
        Paths1,
        Paths2,
        Paths3,
        PathsShortcuts,
        PathsShortcutsValues,
        Paths0Shortcuts,
        Paths0ShortcutsValues,
        Paths1Shortcuts,
        Paths1ShortcutsValues,
        Paths2Shortcuts,
        Paths2ShortcutsValues,
        Paths3Shortcuts,
        Paths3ShortcutsValues,
        PathsW,
        PathsW0,
        PathsW1,
        PathsW2,
        PathsW3,
        PathsWShortcuts,
        PathsWShortcutsValues,
        PathsW0Shortcuts,
        PathsW0ShortcutsValues,
        PathsW1Shortcuts,
        PathsW1ShortcutsValues,
        PathsW2Shortcuts,
        PathsW2ShortcutsValues,
        PathsW3Shortcuts,
        PathsW3ShortcutsValues,
        PathsF,
        PathsWF,
        PathsENoFO,
        PathsWENoFO,
        PathsE,
        PathsWE,
        PathsR,
        PathsWR,
        PathsS,
        PathsWS,
        PathsSNoFO,
        PathsSNoFO0,
        PathsSNoFO1,
        PathsSNoFO2,
        PathsSNoFO3,
        PathsWSNoFO,
        PathsWSNoFO0,
        PathsWSNoFO1,
        PathsWSNoFO2,
        PathsWSNoFO3,
        PathsP,
        PathsWP,
        PathsPE,
        PathsWPE,
        PathsPR,
        PathsWPR,
        PathsPS,
        PathsWPS,
        MapPathsF,
        MapPathsWF,
        GenericBlockDomains,
        GenericBlockNoDomains,
        GenericBlockURLs,
        GenericBlockHTTPSURLs,
        GenericBlockHTTPURLs,
        GenericBlockProtocolsURLs,
        GenericBlockRegexp,
        GenericBlockPathsE,
        GenericBlockPathsF,
        GenericBlockPathsP,
        GenericBlockPathsPE,
        GenericBlockPathsPR,
        GenericBlockPathsPS,
        GenericBlockPathsR,
        GenericBlockPathsS,
        GenericBlockTest,
        FramesDomains,
        FramesNoDomains,
        FramesURLs,
        FramesHTTPSURLs,
        FramesHTTPURLs,
        FramesProtocolsURLs,
        FramesRegexp,
        FramesPathsE,
        FramesPathsF,
        FramesPathsP,
        FramesPathsPE,
        FramesPathsPR,
        FramesPathsPS,
        FramesPathsR,
        FramesPathsS,
        FramesTest,
        HideClasses,
        HideClassesW,
        HideIds,
        HideIdsW,
        HideOther,
        HideOtherW,
        Hide,
        HideHosts
      ]);
      //console.log('Update after loop in ms: ' + (1 * new Date - After));
      console.log('Update in ms: ' + (1 * new Date - Start));
      close();
    }
  }
}