"use client";
import{useState,useEffect,useRef,FormEvent}from"react";
import{useRouter}from"next/navigation";

const P="01040036244",PD="0104 003 6244",PI="+201040036244",WN="201040036244";
const WK="PASTE_WEB3FORMS_KEY_HERE";

function trackCall(l="call"){if(typeof window!=="undefined"&&(window as any).gtag)(window as any).gtag("event","click_call",{event_category:"contact",event_label:l});}
function trackWA(l="wa"){if(typeof window!=="undefined"&&(window as any).gtag)(window as any).gtag("event","click_whatsapp",{event_category:"contact",event_label:l});}
function trackLead(l="form"){if(typeof window!=="undefined"&&(window as any).gtag)(window as any).gtag("event","generate_lead",{event_category:"lead",event_label:l});}

const CDN="https://assets.live.beyond-creation.net/makadi/";
const I={
  hero:CDN+"0a0a39721f9d0bbfb602aa7ef5b2f336.jpg",logo:"https://www.makadiheights.com/relogo-tiffany.png",
  topio:CDN+"a163b5d2310a1e797cba3722470ff6f0.jpg",ria:CDN+"37b187b97e4a81fc4a5ca03a09c3a6d2.jpg",
  sole:CDN+"a57898c8bac5575678d2ecf608a95ad9.jpg",dua:CDN+"77a4edf469fd622618cbfbf4e6201de5.jpg",
  aden:CDN+"ef4cd83a8833280a87752f73bd531ad2.jpg",cape:CDN+"8510472c32a36548446d7b7b72328685.jpg",
  bayou:CDN+"956acc809aedc5264532ece248ca4c67.jpg",brook:CDN+"04abf0bab7e6ad41d8fd18711de053a8.jpg",
  ledge:CDN+"267d2c05fc254d30a97378c2f691d075.jpg",map:"https://www.makadiheights.com/Masterplan-main.webp",
};

const T={ar:{
  dir:"rtl"as const,font:"'IBM Plex Sans Arabic',sans-serif",
  wa_msg:"مرحباً، محتاج تفاصيل مكادي هايتس الغردقة — Makadi Heights Orascom",
  nav_wa:"💬 واتساب",hero_tag:"Orascom Development · أوراسكوم للتنمية",
  hero_h1:"مكادي",hero_h2:"هايتس",hero_p:"مكادي هايتس الغردقة من أوراسكوم — Makadi Heights by Orascom Development. ٩٠٠ فدان على ارتفاع ٧٨ م فوق البحر في خليج مكادي. شقق وفيلات بتشطيب كامل وإطلالة بانورامية على البحر الأحمر. مكادي هايتس أوراسكوم — مدينة متكاملة.",
  stats:[{v:"٩٠٠",l:"فدان"},{v:"٧٨م",l:"فوق البحر"},{v:"١٠٪",l:"مقدم"},{v:"٨٥٪",l:"خضرة"}],
  btn1:"سجل اهتمامك",btn_units:"الوحدات",
  trust:["٩٠٠ فدان","٧٨م ارتفاع","٣٥ سباحة","١٢ دق المطار","٨٥٪ خضرة"],
  about_tag:"Makadi Heights · مكادي هايتس أوراسكوم",about_h:"مدينة متكاملة على",about_h2:"البحر الأحمر",
  about_p:"مكادي هايتس Makadi Heights من أوراسكوم Orascom — ٩٠٠ فدان على ارتفاع ٧٨ متر. ٨٥٪ مساحات خضراء. ٣٥ حمام سباحة وبحيرة ٦,٠٠٠ م² وكلوب هاوس ٣٣,٠٠٠ م². مكادي هايتس أوراسكوم — تشطيب كامل.",
  about_pts:[{i:"🏔",t:"٧٨ م فوق سطح البحر",d:"مكادي هايتس — إطلالة بانورامية على البحر الأحمر"},{i:"🏖",t:"شاطئ خاص",d:"شاطئ رملي ساحر — مكادي هايتس أوراسكوم"},{i:"🏊",t:"٣٥ حمام سباحة",d:"مسطحات مائية وInfinity Pool — Makadi Heights"},{i:"🏛",t:"أوراسكوم — Orascom",d:"سميح ساويرس — ٣٠+ سنة خبرة — مطور الجونة"}],
  about_stats:[{v:"900",l:"فدان"},{v:"78m",l:"ارتفاع"},{v:"85%",l:"خضرة"},{v:"35",l:"سباحة"}],
  band_h:"سجل في مكادي هايتس — Makadi Heights",band_p:"١٠٪ مقدم — تقسيط ٧ سنوات — تشطيب كامل — أوراسكوم",
  units_tag:"وحدات مكادي هايتس · Units",units_h:"الوحدات في",units_h2:"مكادي هايتس",
  units:[{n:"شقق غرفة نوم",p:"من ٧.٧ مليون"},{n:"شقق غرفتين",p:"اتصل للسعر"},{n:"شقق ٣ غرف",p:"اتصل للسعر"},{n:"تاون هاوس",p:"اتصل للسعر"},{n:"توين هاوس",p:"اتصل للسعر"},{n:"فيلا مستقلة",p:"اتصل للسعر"}],
  u_from:"يبدأ من",u_btn:"استفسر واتساب",u_disc:"أسعار مكادي هايتس أوراسكوم Makadi Heights Orascom استرشادية",
  gal_h:"معرض",gal_h2:"مكادي هايتس",
  am_h:"مرافق",am_h2:"مكادي هايتس",
  am:[{i:"🏊",n:"٣٥ حمام سباحة"},{i:"🌊",n:"بحيرة ٦,٠٠٠ م²"},{i:"🏠",n:"كلوب هاوس"},{i:"🏖",n:"شاطئ خاص"},{i:"🏥",n:"مركز طبي"},{i:"🏫",n:"مدارس"},{i:"🏪",n:"مول تجاري"},{i:"🏋️",n:"Ignite Gym"},{i:"🚴",n:"مسارات دراجات"},{i:"🏃",n:"مسارات جري"},{i:"☀️",n:"طاقة شمسية"},{i:"🔒",n:"أمن ٢٤/٧"}],
  ct_h:"سجل في",ct_h2:"مكادي هايتس",ct_p:"سجّل في مكادي هايتس الغردقة — Makadi Heights من أوراسكوم Orascom وفريق المبيعات هيتواصل معاك.",
  cf_title:"سجل في Makadi Heights",f_name:"الاسم *",f_ph:"اسمك",f_phone:"الموبايل *",f_unit:"نوع الوحدة",f_choose:"اختر",
  f_opts:["شقة","تاون هاوس","توين هاوس","فيلا"],f_sub:"سجل الآن",f_sending:"جاري...",f_sent:"تم — جاري التحويل",
  disc:"هذا الموقع يقدم معلومات عن مكادي هايتس — Makadi Heights من أوراسكوم Orascom. أسعار استرشادية.",
  ft_t:"مكادي هايتس — Makadi Heights من أوراسكوم Orascom. خليج مكادي، الغردقة. أسعار استرشادية.",
  privacy:"سياسة الخصوصية",prv_t:"نجمع الاسم والهاتف فقط — للتواصل بخصوص مكادي هايتس Makadi Heights من أوراسكوم. بياناتك مشفرة ومحمية.",
  ck_t:"نستخدم cookies لتحسين تجربتك.",ck_ok:"موافق",ck_no:"رفض",
  pop_h:"سجل في مكادي هايتس الغردقة",pop_p:"Makadi Heights أوراسكوم — ١٠٪ مقدم، تشطيب كامل",
},en:{
  dir:"ltr"as const,font:"'Inter',sans-serif",
  wa_msg:"Hi, I'm interested in Makadi Heights Hurghada by Orascom — please share details",
  nav_wa:"💬 WhatsApp",hero_tag:"Orascom Development · 30+ Years of Excellence",
  hero_h1:"Makadi",hero_h2:"Heights",hero_p:"Makadi Heights Hurghada by Orascom Development — 900 acres at 78m above sea level in Makadi Bay. Fully finished apartments and villas with panoramic Red Sea views. Makadi Heights Orascom — a fully integrated coastal city.",
  stats:[{v:"900",l:"Acres"},{v:"78m",l:"Above Sea"},{v:"10%",l:"Down Payment"},{v:"85%",l:"Green Spaces"}],
  btn1:"Register Now",btn_units:"Units",
  trust:["900 Acres","78m Elevation","35 Pools","12 Min Airport","85% Green"],
  about_tag:"Makadi Heights · Orascom Development",about_h:"An Integrated City on the",about_h2:"Red Sea",
  about_p:"Makadi Heights by Orascom Development — 900 acres, 78m above sea level. 85% green spaces. 35 pools, 6,000 sqm lagoon, 33,000 sqm clubhouse. Makadi Heights Orascom — fully finished with panoramic views.",
  about_pts:[{i:"🏔",t:"78m Above Sea Level",d:"Makadi Heights — panoramic Red Sea views from every angle"},{i:"🏖",t:"Private Beach",d:"Pristine sandy beach — Makadi Heights Orascom"},{i:"🏊",t:"35 Swimming Pools",d:"Water features and Infinity Pool — Makadi Heights"},{i:"🏛",t:"Orascom Development",d:"Samih Sawiris — 30+ years — developer of El Gouna"}],
  about_stats:[{v:"900",l:"Acres"},{v:"78m",l:"Elevation"},{v:"85%",l:"Green"},{v:"35",l:"Pools"}],
  band_h:"Register at Makadi Heights Hurghada",band_p:"10% Down — 7 Year Plan — Fully Finished — Orascom Development",
  units_tag:"Makadi Heights Units",units_h:"Available Units at",units_h2:"Makadi Heights",
  units:[{n:"1BR Apartment",p:"From 7.7M EGP"},{n:"2BR Apartment",p:"Call for Price"},{n:"3BR Apartment",p:"Call for Price"},{n:"Townhouse",p:"Call for Price"},{n:"Twinhouse",p:"Call for Price"},{n:"Standalone Villa",p:"Call for Price"}],
  u_from:"Starting From",u_btn:"Inquire on WhatsApp",u_disc:"Makadi Heights Orascom prices are indicative and subject to change",
  gal_h:"Gallery",gal_h2:"Makadi Heights",
  am_h:"Amenities at",am_h2:"Makadi Heights",
  am:[{i:"🏊",n:"35 Swimming Pools"},{i:"🌊",n:"6,000 sqm Lagoon"},{i:"🏠",n:"Clubhouse"},{i:"🏖",n:"Private Beach"},{i:"🏥",n:"Medical Center"},{i:"🏫",n:"Schools"},{i:"🏪",n:"Shopping Mall"},{i:"🏋️",n:"Ignite Gym"},{i:"🚴",n:"Cycling Tracks"},{i:"🏃",n:"Jogging Paths"},{i:"☀️",n:"Solar Power"},{i:"🔒",n:"24/7 Security"}],
  ct_h:"Register at",ct_h2:"Makadi Heights",ct_p:"Register at Makadi Heights Hurghada by Orascom Development and our sales team will contact you.",
  cf_title:"Register — Makadi Heights",f_name:"Full Name *",f_ph:"Your name",f_phone:"Phone *",f_unit:"Unit Type",f_choose:"Choose",
  f_opts:["Apartment","Townhouse","Twinhouse","Villa"],f_sub:"Register Now",f_sending:"Submitting...",f_sent:"Thank you! Redirecting...",
  disc:"Information about Makadi Heights by Orascom Development. Prices subject to change.",
  ft_t:"Makadi Heights by Orascom Development. Makadi Bay, Hurghada. Prices indicative.",
  privacy:"Privacy Policy",prv_t:"We collect name and phone only via the form — to contact you about Makadi Heights Orascom. Your data is encrypted and protected.",
  ck_t:"We use cookies to improve your experience.",ck_ok:"Accept",ck_no:"Decline",
  pop_h:"Register at Makadi Heights",pop_p:"Makadi Heights Orascom — 10% down, fully finished",
}};

const PhI=()=><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;

export default function Home(){
  const router=useRouter();
  const[lang,setLang]=useState<"ar"|"en">("ar");
  const[mn,sMn]=useState(false);
  const[fs,sFs]=useState<"idle"|"sending"|"sent"|"error">("idle");
  const[pop,sPop]=useState(false);const[ps,sPs]=useState<"idle"|"sending"|"sent"|"error">("idle");
  const[ck,sCk]=useState(false);const[prv,sPrv]=useState(false);
  const pr=useRef(false);const fr=useRef<HTMLFormElement>(null);const pfr=useRef<HTMLFormElement>(null);
  const t=T[lang];
  const WU=`https://wa.me/${WN}?text=${encodeURIComponent(t.wa_msg)}`;
  const NAV=[["#about",lang==="ar"?"المشروع":"About"],["#units",lang==="ar"?"الوحدات":"Units"],["#gallery",lang==="ar"?"المعرض":"Gallery"],["#amenities",lang==="ar"?"المرافق":"Amenities"],["#contact",lang==="ar"?"سجل":"Register"]];

  useEffect(()=>{document.querySelectorAll(".fin").forEach(el=>{new IntersectionObserver(([e])=>{if(e.isIntersecting)e.target.classList.add("vis")},{threshold:.1}).observe(el)});try{if(!localStorage.getItem("mk_ck"))sCk(true)}catch{sCk(true)}},[]);
  useEffect(()=>{if(pr.current)return;const os=()=>{if(window.scrollY/(document.documentElement.scrollHeight-window.innerHeight)>=.55)go()};const ti=setTimeout(()=>go(),16000);window.addEventListener("scroll",os,{passive:true});function go(){if(pr.current)return;pr.current=true;sPop(true);document.body.classList.add("p-on");window.removeEventListener("scroll",os);clearTimeout(ti)}return()=>{window.removeEventListener("scroll",os);clearTimeout(ti)}},[]);
  function cp(){sPop(false);document.body.classList.remove("p-on")}
  async function sub(r:React.RefObject<HTMLFormElement|null>,ss:(s:any)=>void,src:string){if(!r.current)return;ss("sending");const fd=new FormData(r.current);const pl:Record<string,string>={};fd.forEach((v,k)=>pl[k]=v.toString());try{const res=await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(pl)});const d=await res.json();if(d.success){ss("sent");trackLead(src);r.current.reset();if(src==="main_form")setTimeout(()=>router.push("/thank-you"),800)}else throw 0}catch{ss("error")}}

  return(<div dir={t.dir} style={{fontFamily:t.font}}>
    <div className="lang-btn"><button className={`lang-opt ${lang==="ar"?"on":""}`} onClick={()=>setLang("ar")}>عربي</button><button className={`lang-opt ${lang==="en"?"on":""}`} onClick={()=>setLang("en")}>EN</button></div>

    <header className="hd"><div className="hd-in">
      <a className="hd-logo" href="#"><img src={I.logo} alt="Makadi Heights مكادي هايتس"/><div><div className="hd-logo-t">MAKADI HEIGHTS</div><div className="hd-logo-s">مكادي هايتس · أوراسكوم</div></div></a>
      <nav className="hd-nav">{NAV.map(([h,l])=><a key={h} href={h}>{l}</a>)}</nav>
      <div className="hd-acts"><a className="hd-call" href={`tel:${PI}`} onClick={()=>trackCall("hd")}><PhI/><span>{PD}</span></a><a className="hd-wa" href={WU} target="_blank" rel="noopener" onClick={()=>trackWA("hd")}>{t.nav_wa}</a><button className="hd-mob" onClick={()=>sMn(!mn)}>☰</button></div>
    </div>{mn&&<div style={{background:"#0e1e2a",padding:"10px 20px"}}>{NAV.map(([h,l])=><a key={h} href={h} onClick={()=>sMn(false)} style={{display:"block",padding:"9px 0",color:"rgba(255,255,255,.65)",textDecoration:"none",fontSize:13}}>{l}</a>)}</div>}</header>

    <section className="hero" id="hero"><div className="hero-bg"><img src={I.hero} alt="مكادي هايتس الغردقة Makadi Heights Hurghada Orascom أوراسكوم"/><div className="hero-ov"/></div>
    <div className="hero-ct"><p className="hero-tag">{t.hero_tag}</p>
      <h1 className="hero-h">{t.hero_h1} <em>{t.hero_h2}</em></h1>
      <p className="hero-p">{t.hero_p}</p>
      <div className="hero-stats">{t.stats.map((s,i)=><div key={i} className="hero-st"><strong>{s.v}</strong><span>{s.l}</span></div>)}</div>
      <div className="hero-btns"><a className="b-teal" href="#contact">{t.btn1}</a><a className="b-wa" href={WU} target="_blank" rel="noopener" onClick={()=>trackWA("hero")}>{t.nav_wa}</a><a className="b-ghost" href="#units">{t.btn_units}</a></div>
    </div></section>

    <div className="trust"><div className="trust-in">{t.trust.map((x,i)=><div key={i} className="trust-i"><strong>{x.split(" ")[0]}</strong> {x.split(" ").slice(1).join(" ")}</div>)}</div></div>

    <section className="sec about" id="about"><div className="sec-in">
      <div className="fin" style={{textAlign:"center"}}><span className="sec-tag">{t.about_tag}</span><h2 className="sec-h" style={{textAlign:"center"}}>{t.about_h} <em>{t.about_h2}</em></h2><p className="sec-p c">{t.about_p}</p></div>
      <div className="about-grid fin">
        <div className="about-img"><img src={I.topio} alt="مكادي هايتس Makadi Heights Orascom أوراسكوم"/></div>
        <div className="about-pts">{t.about_pts.map((x,i)=><div key={i} className="about-pt"><div className="about-pt-i">{x.i}</div><div><h3>{x.t}</h3><p>{x.d}</p></div></div>)}</div>
      </div>
      <div className="about-stats fin">{t.about_stats.map((s,i)=><div key={i} className="about-stat"><strong>{s.v}</strong><span>{s.l}</span></div>)}</div>
    </div></section>

    <div className="band"><h3>{t.band_h}</h3><p>{t.band_p}</p>
      <div className="band-btns"><a className="b-teal" href="#contact">{t.btn1}</a><a className="b-wa" href={WU} target="_blank" rel="noopener" onClick={()=>trackWA("mid")}>{t.nav_wa}</a><a className="b-ghost" href={`tel:${PI}`} onClick={()=>trackCall("mid")}><PhI/> {PD}</a></div>
    </div>

    <section className="sec" id="units"><div className="sec-in fin" style={{textAlign:"center"}}>
      <span className="sec-tag">{t.units_tag}</span><h2 className="sec-h" style={{textAlign:"center"}}>{t.units_h} <em>{t.units_h2}</em></h2>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14,marginTop:24}}>
        {t.units.map((u,i)=><div key={i} style={{padding:20,background:"var(--color-cream)",borderRadius:16,border:"1px solid rgba(42,124,142,.06)",textAlign:"center"}}>
          <span style={{fontSize:9,fontWeight:700,letterSpacing:2,textTransform:"uppercase",color:"var(--color-teal)"}}>Makadi Heights</span>
          <div style={{fontSize:16,fontWeight:700,margin:"6px 0 2px"}}>{u.n}</div>
          <div style={{fontSize:9,color:"var(--color-muted)"}}>{t.u_from}</div>
          <div style={{fontSize:17,fontWeight:800,color:"var(--color-dark)",margin:"2px 0 12px"}}>{u.p}</div>
          <a href={WU} target="_blank" rel="noopener" style={{display:"block",padding:10,borderRadius:9,border:"2px solid var(--color-dark)",color:"var(--color-dark)",fontSize:11,fontWeight:700,textDecoration:"none"}} onClick={()=>trackWA(`unit_${i}`)}>{t.u_btn}</a>
        </div>)}
      </div>
      <p style={{fontSize:10,color:"var(--color-muted)",marginTop:16}}>{t.u_disc}</p>
    </div></section>

    <section className="sec gal" id="gallery"><div className="sec-in fin" style={{textAlign:"center"}}>
      <h2 className="sec-h" style={{textAlign:"center"}}>{t.gal_h} <em>{t.gal_h2}</em></h2>
      <div className="gal-grid">
        <div className="gal-it big"><img src={I.hero} alt="Makadi Heights مكادي هايتس"/><div className="gal-cap">Makadi Heights — Crest Panoramic</div></div>
        <div className="gal-it"><img src={I.ria} alt="Makadi Heights Ria"/><div className="gal-cap">Ria — Villas</div></div>
        <div className="gal-it"><img src={I.sole} alt="Makadi Heights Sole"/><div className="gal-cap">Sole — Standalone</div></div>
        <div className="gal-it"><img src={I.dua} alt="Makadi Heights DUA"/><div className="gal-cap">DUA — Apartments</div></div>
        <div className="gal-it"><img src={I.cape} alt="Makadi Heights Cape"/><div className="gal-cap">Cape — Sea View</div></div>
        <div className="gal-it big"><img src={I.map} alt="Makadi Heights Master Plan مكادي هايتس"/><div className="gal-cap">Makadi Heights — Master Plan</div></div>
      </div>
    </div></section>

    <section className="am" id="amenities"><div className="am-in fin" style={{textAlign:"center"}}>
      <h2 className="sec-h" style={{color:"#fff",textAlign:"center"}}>{t.am_h} <em style={{color:"var(--color-teal-light)"}}>{t.am_h2}</em></h2>
      <div className="am-grid">{t.am.map((x,i)=><div key={i} className="am-c"><div className="am-c-i">{x.i}</div><div className="am-c-n">{x.n}</div></div>)}</div>
    </div></section>

    <div className="disc"><p>{t.disc}</p></div>

    <section className="ct" id="contact"><div className="sec-in fin">
      <div style={{textAlign:"center"}}><h2 className="sec-h" style={{color:"#fff",textAlign:"center"}}>{t.ct_h} <em style={{color:"var(--color-teal-light)"}}>{t.ct_h2}</em></h2></div>
      <div className="ct-wrap">
        <div className="ct-left"><p>{t.ct_p}</p>
          <a className="ct-row" href={`tel:${PI}`} onClick={()=>trackCall("ct")}><PhI/><span>{PD}</span></a>
          <a className="ct-row" href={WU} target="_blank" rel="noopener" onClick={()=>trackWA("ct")}>{t.nav_wa} Makadi Heights</a>
          <div style={{marginTop:14}}><a className="b-wa" href={WU} target="_blank" rel="noopener" style={{width:"100%",justifyContent:"center"}} onClick={()=>trackWA("ct_big")}>{t.nav_wa}</a></div>
        </div>
        <div className="ct-form"><div className="cf-title">{t.cf_title}</div>
          <form ref={fr} onSubmit={(e:FormEvent)=>{e.preventDefault();sub(fr,sFs,"main_form")}}>
            <input type="hidden" name="access_key" value={WK}/><input type="hidden" name="subject" value="Lead — مكادي هايتس Makadi Heights Orascom"/><input type="hidden" name="from_name" value="Makadi Landing"/><input type="checkbox" name="botcheck" style={{display:"none"}}/>
            <div className="cf-row"><div className="cf-f"><label>{t.f_name}</label><input name="name" placeholder={t.f_ph} required/></div><div className="cf-f"><label>{t.f_phone}</label><input name="phone" type="tel" dir="ltr" placeholder="01012345678" required/></div></div>
            <div className="cf-f"><label>{t.f_unit}</label><select name="unit_type"><option value="">{t.f_choose}</option>{t.f_opts.map((o,i)=><option key={i} value={o}>{o}</option>)}</select></div>
            {fs==="sent"?<div style={{textAlign:"center",padding:"14px 0"}}><div style={{fontSize:36}}>✓</div><p style={{color:"var(--color-teal-light)",fontWeight:700}}>{t.f_sent}</p></div>
            :<button type="submit" className="cf-sub" disabled={fs==="sending"}>{fs==="sending"?t.f_sending:t.f_sub}</button>}
            {fs==="error"&&<p style={{color:"#ef4444",fontSize:10,textAlign:"center",marginTop:6}}>Error — <a href={WU} target="_blank" style={{color:"var(--color-teal-light)"}}>WhatsApp</a></p>}
            <p style={{fontSize:8,color:"rgba(255,255,255,.2)",textAlign:"center",marginTop:8}}><button onClick={()=>sPrv(true)} type="button" style={{background:"none",border:"none",color:"var(--color-teal-light)",textDecoration:"underline",cursor:"pointer",fontSize:8}}>{t.privacy}</button></p>
          </form>
        </div>
      </div>
    </div></section>

    <footer className="ft"><div><img src={I.logo} alt="Makadi Heights" style={{height:36,marginBottom:12,opacity:.6}}/><p className="ft-t">{t.ft_t}</p>
      <div className="ft-links"><button onClick={()=>sPrv(true)} style={{color:"rgba(255,255,255,.3)",fontSize:10,textDecoration:"underline",background:"none",border:"none",cursor:"pointer"}}>{t.privacy}</button></div>
      <p className="ft-cr">© 2026 Makadi Heights · مكادي هايتس · Orascom أوراسكوم</p>
    </div></footer>

    <div className="float-btns"><a className="float-btn fwa" href={WU} target="_blank" rel="noopener" onClick={()=>trackWA("float")}>💬</a><a className="float-btn fcall" href={`tel:${PI}`} onClick={()=>trackCall("float")}>📞</a></div>

    <div className={`p-bk ${pop?"on":""}`} onClick={cp}/><div className={`p-dlg ${pop?"on":""}`} dir={t.dir}><button className="p-x" onClick={cp}>✕</button>
      <h2 style={{fontFamily:"var(--font-head)",fontSize:20,fontWeight:600,marginBottom:6}}>{t.pop_h}</h2>
      <p style={{fontSize:11,color:"rgba(255,255,255,.5)",marginBottom:14}}>{t.pop_p}</p>
      {ps==="sent"?<p style={{textAlign:"center",color:"var(--color-teal-light)",fontWeight:700,padding:16}}>✓</p>
      :<form ref={pfr} onSubmit={(e:FormEvent)=>{e.preventDefault();sub(pfr,sPs,"popup").then(()=>setTimeout(cp,2500))}}>
        <input type="hidden" name="access_key" value={WK}/><input type="hidden" name="subject" value="Popup — Makadi Heights"/><input type="hidden" name="from_name" value="MH Popup"/><input type="checkbox" name="botcheck" style={{display:"none"}}/>
        <div className="cf-f"><label>{t.f_name}</label><input name="name" placeholder={t.f_ph} required style={{padding:10,fontSize:11}}/></div>
        <div className="cf-f"><label>{t.f_phone}</label><input name="phone" type="tel" dir="ltr" placeholder="01012345678" required style={{padding:10,fontSize:11}}/></div>
        <button type="submit" className="cf-sub" disabled={ps==="sending"} style={{marginTop:4}}>{ps==="sending"?"...":t.f_sub}</button>
        <a href={WU} target="_blank" rel="noopener" onClick={()=>trackWA("popup")} style={{display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginTop:10,padding:10,borderRadius:8,background:"#25d366",color:"#fff",fontSize:11,fontWeight:700,textDecoration:"none"}}>{t.nav_wa}</a>
      </form>}
    </div>

    {prv&&<><div style={{position:"fixed",inset:0,zIndex:300,background:"rgba(0,0,0,.6)"}} onClick={()=>sPrv(false)}/><div style={{position:"fixed",zIndex:301,top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:"min(520px,92vw)",maxHeight:"85vh",overflowY:"auto",background:"#fff",borderRadius:16,padding:"28px 24px"}} dir={t.dir}>
      <button onClick={()=>sPrv(false)} style={{position:"absolute",top:10,[t.dir==="rtl"?"left":"right"]:10,background:"#f0f0f0",border:"none",borderRadius:"50%",width:28,height:28,fontSize:14,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>✕</button>
      <h2 style={{fontFamily:"var(--font-head)",fontSize:22,fontWeight:600,marginBottom:12}}>{t.privacy}</h2>
      <p style={{fontSize:11,lineHeight:1.8,color:"var(--color-muted)"}}>{t.prv_t}</p>
    </div></>}

    {ck&&<div className="ck" dir={t.dir}><p>{t.ck_t}</p>
      <div className="ck-btns"><button className="ck-ok" onClick={()=>{sCk(false);try{localStorage.setItem("mk_ck","1")}catch{}}}>{t.ck_ok}</button><button className="ck-no" onClick={()=>sCk(false)}>{t.ck_no}</button></div>
    </div>}

    <nav className="mbar"><div className="mbar-in"><a className="m-call" href={`tel:${PI}`} onClick={()=>trackCall("mob")}><PhI/>{PD}</a><a className="m-wa" href={WU} target="_blank" rel="noopener" onClick={()=>trackWA("mob")}>💬</a><a className="m-book" href="#contact">{lang==="ar"?"سجل":"Register"}</a></div></nav>
  </div>);
}
