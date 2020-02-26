FacebookTimelineFindMe = '",5p4m,Демеушілік көрсеткен,Apmaksāta reklāma,Babestua,Bersponsor,Chartered,Спонсорирано,Commandité,Daukar Nauyi,Disponsori,Ditaja,Được tài trợ,Expensum,Geborg,Gesponsert,Gesponsord,Giisponsoran,Hirdetés,Icyamamaza ndasukirwaho,Imedhaminiwa,Kostað,La maalgeliyey,May Sponsor,Misy mpanohana,Oñepatrosinapyre,Paeroniet,Patrocinado,Patrocinat,Patronadu de:,Рэклама,pəɹosuodS,Plaćeni oglas,Publicidad,Reklama,Reklamo,Remiama,Sponsa,Sponset,Sponsitud,Sponsor dəstəkli,Sponsore,Sponsored,Sponsoreret,Sponsorisé,Sponsorizat,Sponsorizuar,Sponsorizzata,Sponsorjat,Sponsorkirî,Sponsorlu,Sponsorowane,Sponzorirano,Sponzorováno,Stuðlað,Urraithe,Χορηγούμενη,Yoɓanaama,რეკლამა,Գովազդային,تعاون کردہ,ⵉⴷⵍ,प्रायोजित,ได้รับการสนับสนุน,広告,14분 전,ပံ့ပိုးထားသည်,贊助,赞助内容,സ്പോൺസർ ചെയ്തത്,අනුග්‍රහය දක්වන ලද,ממומן,"';
FacebookTimeline =
  'for(h=h.getElementsByTagName("a"),i=h.length-1;0<=i;i--)'+
    'if((j=h[i].getElementsByTagName("div")[0])&&0<(k=(l=j.getElementsByTagName("div")).length)){'+
      'if(2<k){'+
        'if(0>FindMe.indexOf("," + (m=l[0].innerHTML)+(n=l[2].innerHTML) + ",")'+
        '&&0>FindMe.indexOf("," + m + ",")'+
        '&&0>FindMe.indexOf("," + (l=l[1].innerHTML) + ",")'+
        '&&0>FindMe.indexOf("," + n + ",")'+
        '&&0>FindMe.indexOf("," + m+l + ",")'+
        '&&0>FindMe.indexOf("," + l+n + ",")'+
        '&&0>FindMe.indexOf("," + m+l+n + ","))'+
          'continue'+
      '}'+
      'else if(1<k){'+
        'if(0>FindMe.indexOf("," + (m=l[0].innerHTML) + ",")'+
        '&&0>FindMe.indexOf("," + (n=l[1].innerHTML) + ",")'+
        '&&0>FindMe.indexOf("," + m+n + ","))'+
          'continue'+
      '}'+
      'else if(1>k){'+
        'if(0>FindMe.indexOf("," + l[0].innerHTML + ","))'+
          'continue'+
      '}'+
      'else '+
        'continue;'+
      'for(;j=j.parentNode;)'+
        'if((k=j.id)&&0==k.indexOf("hyperfeed_story_id_")&&(m=j.tagName)&&"div"==m.toLowerCase()){'+
          'm=document.createElement("style");'+
          'm.innerHTML="#"+k+"{display:none !important}";'+
          'document.getElementsByTagName("head")[0].appendChild(m);'+
          'g=1;'+
          'break'+
        '}'+
      'if(g)'+
        'break'+
    '}';
FacebookTimelineTest = 1