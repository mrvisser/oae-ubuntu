(function(e,t){var n;typeof require!="undefined"&&typeof exports!="undefined"&&typeof module!="undefined"?n=require("globalize"):n=e.Globalize,n.addCultureInfo("dv-MV","default",{name:"dv-MV",englishName:"Divehi (Maldives)",nativeName:"ދިވެހިބަސް (ދިވެހި ރާއްޖެ)",language:"dv",isRTL:!0,numberFormat:{currency:{pattern:["n $-","n $"],symbol:"ރ."}},calendars:{standard:{name:"Hijri",days:{names:["އާދީއްތަ","ހޯމަ","އަންގާރަ","ބުދަ","ބުރާސްފަތި","ހުކުރު","ހޮނިހިރު"],namesAbbr:["އާދީއްތަ","ހޯމަ","އަންގާރަ","ބުދަ","ބުރާސްފަތި","ހުކުރު","ހޮނިހިރު"],namesShort:["އާ","ހޯ","އަ","ބު","ބު","ހު","ހޮ"]},months:{names:["މުޙައްރަމް","ޞަފަރު","ރަބީޢުލްއައްވަލް","ރަބީޢުލްއާޚިރު","ޖުމާދަލްއޫލާ","ޖުމާދަލްއާޚިރާ","ރަޖަބް","ޝަޢްބާން","ރަމަޟާން","ޝައްވާލް","ޛުލްޤަޢިދާ","ޛުލްޙިއްޖާ",""],namesAbbr:["މުޙައްރަމް","ޞަފަރު","ރަބީޢުލްއައްވަލް","ރަބީޢުލްއާޚިރު","ޖުމާދަލްއޫލާ","ޖުމާދަލްއާޚިރާ","ރަޖަބް","ޝަޢްބާން","ރަމަޟާން","ޝައްވާލް","ޛުލްޤަޢިދާ","ޛުލްޙިއްޖާ",""]},AM:["މކ","މކ","މކ"],PM:["މފ","މފ","މފ"],eras:[{name:"ހިޖްރީ",start:null,offset:0}],twoDigitYearMax:1451,patterns:{d:"dd/MM/yy",D:"dd/MM/yyyy",t:"HH:mm",T:"HH:mm:ss",f:"dd/MM/yyyy HH:mm",F:"dd/MM/yyyy HH:mm:ss",M:"dd MMMM"},convert:{ticks1970:621355968e5,monthDays:[0,30,59,89,118,148,177,207,236,266,295,325,355],minDate:-425216736e5,maxDate:0xe677d21fdbff,hijriAdjustment:0,toGregorian:function(e,t,n){var r=this.daysToYear(e)+this.monthDays[t]+n-1-this.hijriAdjustment,i=new Date(r*864e5-this.ticks1970);return i.setMinutes(i.getMinutes()+i.getTimezoneOffset()),i},fromGregorian:function(e){if(e<this.minDate||e>this.maxDate)return null;var t=this.ticks1970+(e-0)-e.getTimezoneOffset()*6e4,n=Math.floor(t/864e5)+1+this.hijriAdjustment,r,i,s=Math.floor((n-227013)*30/10631)+1,o=this.daysToYear(s),u=this.isLeapYear(s)?355:354;n<o?(s--,o-=u):n===o?(s--,o=this.daysToYear(s)):n>o+u&&(o+=u,s++),i=0;var a=n-o;while(i<=11&&a>this.monthDays[i])i++;return i--,r=a-this.monthDays[i],[s,i,r]},daysToYear:function(e){var t=Math.floor((e-1)/30)*30,n=e-t-1,r=Math.floor(t*10631/30)+227013;while(n>0)r+=this.isLeapYear(n)?355:354,n--;return r},isLeapYear:function(e){return(e*11+14)%30<11}}},Gregorian_Localized:{days:{names:["އާދީއްތަ","ހޯމަ","އަންގާރަ","ބުދަ","ބުރާސްފަތި","ހުކުރު","ހޮނިހިރު"],namesAbbr:["އާދީއްތަ","ހޯމަ","އަންގާރަ","ބުދަ","ބުރާސްފަތި","ހުކުރު","ހޮނިހިރު"],namesShort:["އާ","ހޯ","އަ","ބު","ބު","ހު","ހޮ"]},months:{names:["ޖަނަވަރީ","ފެބްރުއަރީ","މާޗް","އޭޕްރިލް","މެއި","ޖޫން","ޖުލައި","އޯގަސްޓް","ސެޕްޓެމްބަރ","އޮކްޓޯބަރ","ނޮވެމްބަރ","ޑިސެމްބަރ",""],namesAbbr:["ޖަނަވަރީ","ފެބްރުއަރީ","މާޗް","އޭޕްރިލް","މެއި","ޖޫން","ޖުލައި","އޯގަސްޓް","ސެޕްޓެމްބަރ","އޮކްޓޯބަރ","ނޮވެމްބަރ","ޑިސެމްބަރ",""]},AM:["މކ","މކ","މކ"],PM:["މފ","މފ","މފ"],eras:[{name:"މީލާދީ",start:null,offset:0}],patterns:{d:"dd/MM/yy",D:"ddd, yyyy MMMM dd",t:"HH:mm",T:"HH:mm:ss",f:"ddd, yyyy MMMM dd HH:mm",F:"ddd, yyyy MMMM dd HH:mm:ss",Y:"yyyy, MMMM"}}}})})(this);