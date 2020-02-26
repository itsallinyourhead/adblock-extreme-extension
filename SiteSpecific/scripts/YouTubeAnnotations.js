YouTubeAnnotations1 =
  'var YTFunction0=function(){'+
    'let a,b,c,d,e;'+
    'if(a=document.getElementsByTagName("html")[0]){'+
      'if((b=(c=document.getElementsByTagName("video"))[0])&&(d=(e=document.getElementsByClassName("ytp-settings-button"))[0])){'+
        'YTInserted=1;'+
        'YTVideo=b;'+
        'YTObserver.disconnect();'+
        'YTObserver2.disconnect();'+
        'd.click();'+
        'd.click();'+
        'if((c=c[1])&&(d=e[1])){'+
          'YTVideoA=c;'+
          'd.click();'+
          'd.click()'+
        '}'+
        'else '+
          'YTVideoA=undefined;'+
        'YTObserver.observe(document.getElementsByTagName("html")[0],{childList:true,subtree:true});'+
        'if(!YTFunction1())'+
          'YTObserver1.observe(document.getElementsByTagName("html")[0],{childList:true,subtree:true});'+
        'if(YTVideoA&&!YTFunction1(1))'+
          'YTObserver1A.observe(document.getElementsByTagName("html")[0],{childList:true,subtree:true})'+
      '}'+
      'else '+
        'YTObserver2.observe(document.getElementsByTagName("html")[0],{childList:true,subtree:true});'+
      'a.addEventListener("' + Random1 + '",YTRandom1);'+
      'a.addEventListener("' + Random2 + '",YTRandom2)'+
    '}'+
    'else '+
      'setTimeout(YTFunction0,1E3)'+
  '},'+
  'YTFunction1=function(a){'+
    'if((a&&YTFunction1ATest)||(!a&&YTFunction1Test))'+
      'return 1;'+
    'let b=document.getElementsByClassName("ytp-panel-menu"),c=b.length,d=0,e,f,g,h,i,z=0;'+
    'for(;d<c;d++)'+
      'for(e=(f=b[d]).parentNode;;)'+
        'if((g=e.id)&&("player"==g||"movie_player"==g||"contents"==g)){'+
          'if(a&&2>++z)'+
            'break;'+
          'for(h=f.getElementsByClassName("ytp-menuitem-label"),e=h.length-1;0<=e;e--)'+
            'if(0<=YTLanguages.indexOf(","+(g=h[e]).textContent+",")){'+
              'if("true"==g.parentNode.getAttribute("aria-checked"))'+
                'g.click();'+
              'if(a)'+
                'YTFunction1ATest=1,'+
                'YTSettingsA=g,'+
                'g.parentNode.addEventListener("click",YTStatusA),'+
                '(i||(i=document.getElementsByTagName("video")[1]))&&YTObserver0A.observe(i,{attributes:true,attributeFilter:["src"]});'+
              'else '+
                'YTFunction1Test=1,'+
                'YTSettings=g,'+
                'g.parentNode.addEventListener("click",YTStatus),'+
                '(i||(i=document.getElementsByTagName("video")[0]))&&YTObserver0.observe(i,{attributes:true,attributeFilter:["src"]});'+
              'return 1'+
            '}'+
          'return 0'+
        '}'+
        'else if(!(e=e.parentNode))'+
          'break;'+
    'return 0'+
  '},'+
  'YTFunction1Test,'+
  'YTFunction1ATest,'+
  'YTInserted,'+
  'YTLanguages=",Aantekeninge,Aantekeningen,Adnotacje,Adnotări,Anmerkungen,Annotasiyalar,Annotations,Annoteringar,Annoteringer,Anotácie,Anotaciones,Anotacions,Anotacións,Anotações,Anotasi,Bilješke,Chú thích,Ek Açıklamalar,Izichasiselo,Izohlar,Komentarai,Kommentárok,Merkinnät,Mga Anotasyon,Napomene,Notas,Oharpenak,Piezīmes,Poznámky,Pripisi,Shënime,Textaskýringar,Ufafanuzi,Ülekatted,Анатацыі,Аннотациялар,Анотації,Σχολιασμοί,Напомене,Пояснения,Тэмдэглэгээ,Ծանոթագրություններ,تشریحات,التعليقات التوضيحية,حاشیه‌نویسی‌ها,एनोटेशनहरू,भाष्ये,टिप्पणियां,টিকা রচনা,ਐਨੋਟੇਸ਼ਨਸ,ઍનોટેશન્સ,விரிவுரைகள்,ఉల్లేఖనాలు,ಟಿಪ್ಪಣಿಗಳು,വ്യാഖ്യാനങ്ങൾ,විවරණ,คำอธิบายประกอบ,ຄໍາ​ອະທິບາຍ​ປະກອບ,မှတ်စာများ,ანოტაციები,ማብራሪያዎች,ចំណារ​ពន្យល់,注释,註解,アノテーション,특수효과,הערות,",'+
  'YTObserverFunction=function(a,b){'+
    'let c,d,e,f;'+
    'd=document.getElementsByTagName("video");'+
    'if(!(e=d[0])){'+
      'if(YTVideo)'+
        'c=1'+
    '}'+
    'else if(YTVideoA)'+
      'if((f=d[1])){'+
        'if(f==YTVideo||e==YTVideoA||!(e==YTVideo&&f==YTVideoA))'+
          'c=1'+
      '}'+
      'else '+
        'c=1;'+
    'else if((YTVideo&&e!=YTVideo)||d[1])'+
      'c=1;'+
    'd=(e=chrome.runtime)&&e.getManifest();'+
    'if(c||!d){'+
      'YTFunction1Test=YTFunction1ATest=YTVideo=YTVideoA=undefined;'+
      'b.disconnect();'+
      'YTObserver0.disconnect();'+
      'YTObserver0A.disconnect();'+
      'YTObserver1.disconnect();'+
      'YTObserver1A.disconnect();'+
      'YTObserver2.disconnect();'+
      'if(YTSettings)'+
        'YTSettings.removeEventListener("click",YTStatus),'+
        'YTSettings=undefined;'+
      'if(YTSettingsA)'+
        'YTSettingsA.removeEventListener("click",YTStatusA),'+
        'YTSettingsA=undefined;'+
      'if(c&&d)'+
        'YTFunction0()'+
    '}'+
  '},'+
  'YTObserver=new MutationObserver(YTObserverFunction),'+
  'YTObserver0Function=function(a){'+
    'YTObserver1.disconnect();'+
    'let c=location.search,d,e,f,g,h,i,j,k,l;'+
    'if(0<=(d=c.indexOf("?v="))||0<=(d=c.indexOf("&v=")))'+
      'c=0>(e=c.indexOf("&",d+2))?c.substring(d+3):c.substring(d+3,e);'+
    'else '+
      'c=location.pathname;'+
    'for(d=a.length-1;0<=d;d--)'+
      'if((e=a[d].target)&&(e=e.parentNode)&&(e=e.parentNode)){'+
        'e=e.className.indexOf("ad-showing");'+
        'f=YTVideoId;'+
        'if(c!=YTVideoId&&0>e)'+
          'YTTest=0,'+
          'YTVideoId=c;'+
        'if(!YTTest||0<=e){'+
          'if(!f&&(g=document.getElementsByClassName("ytp-settings-button")[0])){'+
            'g.click();'+
            'g.click()'+
          '}'+
          'for(g=document.getElementsByClassName("ytp-panel-menu"),h=g.length,i=0;i<h;i++)'+
            'for(j=(k=g[i]).parentNode;;)'+
              'if((l=j.id)&&("player"==l||"movie_player"==l||"contents"==l)){'+
                'for(j=k.getElementsByClassName("ytp-menuitem-label"),k=j.length-1;0<=k;k--)'+
                  'if(0<=YTLanguages.indexOf(","+(l=j[k]).textContent+",")){'+
                    'if("true"==l.parentNode.getAttribute("aria-checked"))'+
                      'l.click();'+
                    'return'+
                  '}'+
                'return'+
              '}'+
              'else if(!(j=j.parentNode))'+
                'break'+
        '}'+
      '}'+
  '},'+
  'YTObserver0=new MutationObserver(YTObserver0Function),'+
  'YTObserver0AFunction=function(a){'+
    'YTObserver1A.disconnect();'+
    'let c=location.search,d,e,f,g,h,i,j,k,l,z;'+
    'if(0<=(d=c.indexOf("?v="))||0<=(d=c.indexOf("&v=")))'+
      'c=0>(e=c.indexOf("&",d+2))?c.substring(d+3):c.substring(d+3,e);'+
    'else '+
      'c=location.pathname;'+
    'for(d=a.length-1;0<=d;d--)'+
      'if((e=a[d].target)&&(e=e.parentNode)&&(e=e.parentNode)){'+
        'e=e.className.indexOf("ad-showing");'+
        'f=YTVideoIdA;'+
        'if(c!=VideoIdA&&0>e)'+
          'YTTestA=0,'+
          'YTVideoIdA=c;'+
        'if(!YTTestA||0<=e){'+
          'if(!f&&(g=document.getElementsByClassName("ytp-settings-button")[1])){'+
            'g.click();'+
            'g.click()'+
          '}'+
          'for(g=document.getElementsByClassName("ytp-panel-menu"),h=g.length,i=0,z=0;i<h;i++)'+
            'for(j=(k=g[i]).parentNode;;)'+
              'if((l=j.id)&&("player"==l||"movie_player"==l||"contents"==l)){'+
                'if(2>++z)'+
                  'break;'+
                'for(j=k.getElementsByClassName("ytp-menuitem-label"),k=j.length-1;0<=k;k--)'+
                  'if(0<=YTLanguages.indexOf(","+(l=j[k]).textContent+",")){'+
                    'if("true"==l.parentNode.getAttribute("aria-checked"))'+
                      'l.click();'+
                    'return'+
                  '}'+
                'return'+
              '}'+
              'else if(!(j=j.parentNode))'+
                'break'+
        '}'+
      '}'+
  '},'+
  'YTObserver0A=new MutationObserver(YTObserver0AFunction),'+
  'YTObserver1Function=function(a,b){'+
    'YTFunction1()&&b.disconnect()'+
  '},'+
  'YTObserver1=new MutationObserver(YTObserver1Function),'+
  'YTObserver1AFunction=function(a,b){'+
    'YTFunction1A()&&b.disconnect()'+
  '},'+
  'YTObserver1A=new MutationObserver(YTObserver1AFunction),'+
  'YTObserver2Function=function(a,b){'+
    'if(document.querySelector(".ytp-settings-button")){'+
      'b.disconnect();'+
      'YTFunction0()'+
    '}'+
  '},'+
  'YTObserver2=new MutationObserver(YTObserver2Function),'+
  'YTRandom1=function(){'+
    'YTFunction1Test=YTSettings=YTSettingsA=YTVideo=YTVideoA=undefined;'+
    'let a;'+
    'if(a=document.getElementsByTagName("html")[0])'+
      'a.dispatchEvent(new CustomEvent("' + Random3 + '"));'+
    'if((a=chrome.runtime)&&a.getManifest())'+
      'YTFunction0()'+
  '},'+
  'YTRandom2=function(){'+
    'YTFunction1Test=undefined;'+
    'YTObserver.disconnect();'+
    'YTObserver0.disconnect();'+
    'YTObserver0A.disconnect();'+
    'YTObserver1.disconnect();'+
    'YTObserver1A.disconnect();'+
    'YTObserver2.disconnect();'+
    'if(YTSettings)'+
      'YTSettings.removeEventListener("click",YTStatus),'+
      'YTSettings=undefined;'+
    'if(YTSettingsA)'+
      'YTSettingsA.removeEventListener("click",YTStatusA),'+
      'YTSettingsA=undefined'+
  '},'+
  'YTSettings,'+
  'YTSettingsA,'+
  'YTStatus=function(){'+
    'let a;'+
    'if((a=document.getElementsByTagName("video")[0])&&(a=a.parentNode)&&(a=a.parentNode)&&0>a.className.indexOf("ad-showing"))'+
      'YTTest="true"==this.getAttribute("aria-checked")?1:0'+
  '},'+
  'YTStatusA=function(){'+
    'let a;'+
    'if((a=document.getElementsByTagName("video")[1])&&(a=a.parentNode)&&(a=a.parentNode)&&0>a.className.indexOf("ad-showing"))'+
      'YTTestA="true"==this.getAttribute("aria-checked")?1:0'+
  '},'+
  'YTTest,'+
  'YTTestA,'+
  'YTVideo,'+
  'YTVideoA,'+
  'YTVideoId;'+
  'YTFunction0();';
YouTubeAnnotations2 =
  'if(YTInserted&&(!document.getElementsByTagName("html")[0]||!((d=chrome.runtime)&&d.getManifest()))){'+
    'YTFunction1Test=YTInserted=undefined;'+
    'YTObserver.disconnect();'+
    'YTObserver0.disconnect();'+
    'YTObserver0A.disconnect();'+
    'YTObserver1.disconnect();'+
    'YTObserver1A.disconnect();'+
    'YTObserver2.disconnect();'+
    'if(YTSettings)'+
      'YTSettings.removeEventListener("click",YTStatus),'+
      'YTSettings=undefined;'+
    'if(YTSettingsA)'+
      'YTSettingsA.removeEventListener("click",YTStatusA),'+
      'YTSettingsA=undefined'+
  '}';
YouTubeAnnotationsTest = 1