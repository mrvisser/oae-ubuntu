(function(e,t){var n;typeof require!="undefined"&&typeof exports!="undefined"&&typeof module!="undefined"?n=require("globalize"):n=e.Globalize,n.addCultureInfo("ur","default",{name:"ur",englishName:"Urdu",nativeName:"اُردو",language:"ur",isRTL:!0,numberFormat:{currency:{pattern:["$n-","$n"],symbol:"Rs"}},calendars:{standard:{firstDay:1,days:{names:["اتوار","پير","منگل","بدھ","جمعرات","جمعه","هفته"],namesAbbr:["اتوار","پير","منگل","بدھ","جمعرات","جمعه","هفته"],namesShort:["ا","پ","م","ب","ج","ج","ه"]},months:{names:["جنوری","فروری","مارچ","اپریل","مئی","جون","جولائی","اگست","ستمبر","اکتوبر","نومبر","دسمبر",""],namesAbbr:["جنوری","فروری","مارچ","اپریل","مئی","جون","جولائی","اگست","ستمبر","اکتوبر","نومبر","دسمبر",""]},patterns:{d:"dd/MM/yyyy",D:"dd MMMM, yyyy",f:"dd MMMM, yyyy h:mm tt",F:"dd MMMM, yyyy h:mm:ss tt",M:"dd MMMM"}},Hijri:{name:"Hijri",firstDay:1,days:{names:["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],namesAbbr:["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],namesShort:["ح","ن","ث","ر","خ","ج","س"]},months:{names:["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""],namesAbbr:["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""]},eras:[{name:"بعد الهجرة",start:null,offset:0}],twoDigitYearMax:1451,patterns:{d:"dd/MM/yy",D:"dd/MM/yyyy",f:"dd/MM/yyyy h:mm tt",F:"dd/MM/yyyy h:mm:ss tt",M:"dd MMMM"},convert:{ticks1970:621355968e5,monthDays:[0,30,59,89,118,148,177,207,236,266,295,325,355],minDate:-425216736e5,maxDate:0xe677d21fdbff,hijriAdjustment:0,toGregorian:function(e,t,n){var r=this.daysToYear(e)+this.monthDays[t]+n-1-this.hijriAdjustment,i=new Date(r*864e5-this.ticks1970);return i.setMinutes(i.getMinutes()+i.getTimezoneOffset()),i},fromGregorian:function(e){if(e<this.minDate||e>this.maxDate)return null;var t=this.ticks1970+(e-0)-e.getTimezoneOffset()*6e4,n=Math.floor(t/864e5)+1+this.hijriAdjustment,r,i,s=Math.floor((n-227013)*30/10631)+1,o=this.daysToYear(s),u=this.isLeapYear(s)?355:354;n<o?(s--,o-=u):n===o?(s--,o=this.daysToYear(s)):n>o+u&&(o+=u,s++),i=0;var a=n-o;while(i<=11&&a>this.monthDays[i])i++;return i--,r=a-this.monthDays[i],[s,i,r]},daysToYear:function(e){var t=Math.floor((e-1)/30)*30,n=e-t-1,r=Math.floor(t*10631/30)+227013;while(n>0)r+=this.isLeapYear(n)?355:354,n--;return r},isLeapYear:function(e){return(e*11+14)%30<11}}}}})})(this);