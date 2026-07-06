"use client";
import{useState,useEffect,useRef,FormEvent}from"react";
import{useRouter}from"next/navigation";

const P="01040036244",PD="0104 003 6244",PI="+201040036244",WN="201040036244";
const WM="مرحباً، محتاج تفاصيل مكادي هايتس الغردقة — Makadi Heights Orascom";
const WU=`https://wa.me/${WN}?text=${encodeURIComponent(WM)}`;
const WK="PASTE_WEB3FORMS_KEY_HERE";

function trackCall(l="call"){if(typeof window!=="undefined"&&(window as any).gtag)(window as any).gtag("event","click_call",{event_category:"contact",event_label:l});}
function trackWA(l="wa"){if(typeof window!=="undefined"&&(window as any).gtag)(window as any).gtag("event","click_whatsapp",{event_category:"contact",event_label:l});}
function trackLead(l="form"){if(typeof window!=="undefined"&&(window as any).gtag)(window as any).gtag("event","generate_lead",{event_category:"lead",event_label:l});}

const CDN="https://assets.live.beyond-creation.net/makadi/";
const I={
  hero:"https://gprproperty.com/wp-content/uploads/2025/07/Makadi-Heights-Hurghada-2-copy.webp",
  og:CDN+"makadi_fddfe986f9.png",
  logo:"https://www.makadiheights.com/relogo-tiffany.png",
  g1:"https://gprproperty.com/wp-content/uploads/2025/07/Makadi-Heights-Hurghada-copy.webp",
  g2:"https://gprproperty.com/wp-content/uploads/2025/07/Makadi-Heights-copy.webp",
  g3:"https://gprproperty.com/wp-content/uploads/2025/07/Makadi-Heights-Hurghada-3-copy.webp",
  g4:"https://gprproperty.com/wp-content/uploads/2025/07/Makadi-Heights-Hurghada-4-copy.webp",
  g5:"https://gprproperty.com/wp-content/uploads/2025/07/Makadi-Heights-Hurghada-5-copy.webp",
};

const UNITS=[
  {n:"شقق غرفة نوم",en:"1BR Apartment",p:"من ٧,٧٠٠,٠٠٠ جنيه",area:"من ٩٢ م²"},
  {n:"شقق غرفتين",en:"2BR Apartment",p:"اتصل للسعر",area:"مساحات متعددة"},
  {n:"شقق ٣ غرف",en:"3BR Apartment",p:"اتصل للسعر",area:"مساحات واسعة"},
  {n:"تاون هاوس",en:"Townhouse",p:"اتصل للسعر",area:"مساحات متنوعة"},
  {n:"توين هاوس",en:"Twinhouse",p:"اتصل للسعر",area:"مساحات واسعة"},
  {n:"فيلا مستقلة",en:"Standalone Villa",p:"اتصل للسعر",area:"مساحات فاخرة"},
];
const FAQS=[
  {q:"أين تقع مكادي هايتس — Makadi Heights؟",a:"مكادي هايتس الغردقة Makadi Heights Hurghada تقع في خليج مكادي على البحر الأحمر، ١٢ دقيقة من مطار الغردقة الدولي. مكادي هايتس أوراسكوم على ارتفاع ٧٨ متر فوق سطح البحر."},
  {q:"ما مساحة مكادي هايتس أوراسكوم — Makadi Heights Orascom؟",a:"٩٠٠ فدان (٣.٤ مليون م²)، ٨٥٪ مساحات خضراء ومفتوحة. مكادي هايتس Makadi Heights — مدينة متكاملة من أوراسكوم Orascom Development."},
  {q:"ما أنواع الوحدات في مكادي هايتس — Makadi Heights؟",a:"شقق (غرفة - ٣ غرف)، تاون هاوس، توين هاوس، وفيلات مستقلة. مكادي هايتس أوراسكوم — تشطيب كامل بإطلالة بانورامية على البحر الأحمر."},
  {q:"كم أسعار مكادي هايتس الغردقة — Makadi Heights Hurghada؟",a:"تبدأ من ٧,٧٠٠,٠٠٠ جنيه للشقق. أسعار مكادي هايتس أوراسكوم Makadi Heights Orascom استرشادية — تواصل واتساب لآخر الأسعار."},
  {q:"ما خطة سداد Makadi Heights مكادي هايتس؟",a:"١٠٪ مقدم وتقسيط حتى ٧ سنوات. مرحلة كريست Crest جاهزة للتسليم. مكادي هايتس — Makadi Heights أوراسكوم Orascom."},
  {q:"من المطور العقاري لمكادي هايتس — Makadi Heights؟",a:"أوراسكوم للتنمية — Orascom Development بقيادة سميح ساويرس. ٣٠+ سنة خبرة. مطور الجونة وأو ويست. مكادي هايتس أوراسكوم — مدرجة بالبورصة السويسرية."},
];
const NAV=[["#about","المشروع"],["#units","الوحدات"],["#payment","السداد"],["#gallery","المعرض"],["#amenities","المرافق"],["#contact","سجل"]];
const PhI=()=><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const Chv=()=><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>;

export default function Home(){
  const router=useRouter();
  const[fq,sFq]=useState<number|null>(null);const[mn,sMn]=useState(false);
  const[fs,sFs]=useState<"idle"|"sending"|"sent"|"error">("idle");
  const[pop,sPop]=useState(false);const[ps,sPs]=useState<"idle"|"sending"|"sent"|"error">("idle");
  const[ck,sCk]=useState(false);const[prv,sPrv]=useState(false);
  const pr=useRef(false);const fr=useRef<HTMLFormElement>(null);const pfr=useRef<HTMLFormElement>(null);
  useEffect(()=>{document.querySelectorAll(".fin").forEach(el=>{new IntersectionObserver(([e])=>{if(e.isIntersecting)e.target.classList.add("vis")},{threshold:.1}).observe(el)});try{if(!localStorage.getItem("mk_ck"))sCk(true)}catch{sCk(true)}},[]);
  useEffect(()=>{if(pr.current)return;const os=()=>{if(window.scrollY/(document.documentElement.scrollHeight-window.innerHeight)>=.55)go()};const t=setTimeout(()=>go(),16000);window.addEventListener("scroll",os,{passive:true});function go(){if(pr.current)return;pr.current=true;sPop(true);document.body.classList.add("p-on");window.removeEventListener("scroll",os);clearTimeout(t)}return()=>{window.removeEventListener("scroll",os);clearTimeout(t)}},[]);
  function cp(){sPop(false);document.body.classList.remove("p-on")}
  async function sub(r:React.RefObject<HTMLFormElement|null>,ss:(s:any)=>void,src:string){if(!r.current)return;ss("sending");const fd=new FormData(r.current);const pl:Record<string,string>={};fd.forEach((v,k)=>pl[k]=v.toString());try{const res=await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(pl)});const d=await res.json();if(d.success){ss("sent");trackLead(src);r.current.reset();if(src==="main_form")setTimeout(()=>router.push("/thank-you"),800)}else throw 0}catch{ss("error")}}

  return(<>
    <header className="hd"><div className="hd-in">
      <a className="hd-logo" href="#hero"><img src={I.logo} alt="مكادي هايتس Makadi Heights أوراسكوم"/><div><div className="hd-logo-t">MAKADI HEIGHTS</div><div className="hd-logo-s">مكادي هايتس · أوراسكوم</div></div></a>
      <nav className="hd-nav">{NAV.map(([h,l])=><a key={h} href={h}>{l}</a>)}</nav>
      <div className="hd-acts"><a className="hd-call" href={`tel:${PI}`} onClick={()=>trackCall("hd")}><PhI/><span>{PD}</span></a><a className="hd-wa" href={WU} target="_blank" rel="noopener" onClick={()=>trackWA("hd")}>💬 واتساب</a><button className="hd-mob" onClick={()=>sMn(!mn)}>☰</button></div>
    </div>{mn&&<div style={{background:"#0e1e2a",padding:"10px 20px"}}>{NAV.map(([h,l])=><a key={h} href={h} onClick={()=>sMn(false)} style={{display:"block",padding:"9px 0",color:"rgba(255,255,255,.65)",textDecoration:"none",fontSize:"13px",borderBottom:"1px solid rgba(255,255,255,.03)"}}>{l}</a>)}</div>}</header>

    <section className="hero" id="hero"><div className="hero-bg"><img src={I.hero} alt="مكادي هايتس الغردقة — Makadi Heights Hurghada أوراسكوم Orascom البحر الأحمر"/><div className="hero-ov"/></div>
    <div className="hero-ct">
      <p className="hero-tag">Orascom Development · أوراسكوم للتنمية</p>
      <h1 className="hero-h">مكادي <em>هايتس</em><br/>Makadi <em>Heights</em></h1>
      <p className="hero-p">مكادي هايتس الغردقة من أوراسكوم — Makadi Heights Hurghada by Orascom Development. ٩٠٠ فدان على ارتفاع ٧٨ متر فوق البحر في خليج مكادي. شقق وفيلات بتشطيب كامل وإطلالة بانورامية على البحر الأحمر. مكادي هايتس أوراسكوم — مدينة متكاملة.</p>
      <p className="hero-kw">مكادي هايتس · Makadi Heights · أوراسكوم · Orascom · مكادي هايتس الغردقة · البحر الأحمر · Hurghada</p>
      <div className="hero-stats">
        <div className="hero-st"><strong>٩٠٠</strong><span>فدان</span></div>
        <div className="hero-st"><strong>٧٨م</strong><span>فوق البحر</span></div>
        <div className="hero-st"><strong>١٠٪</strong><span>مقدم</span></div>
        <div className="hero-st"><strong>٨٥٪</strong><span>خضرة ومرافق</span></div>
      </div>
      <div className="hero-btns"><a className="b-teal" href="#contact">سجل اهتمامك</a><a className="b-wa" href={WU} target="_blank" rel="noopener" onClick={()=>trackWA("hero")}>💬 واتساب</a><a className="b-ghost" href="#units">الوحدات</a></div>
    </div></section>

    <div className="trust"><div className="trust-in">
      <div className="trust-i"><strong>٩٠٠</strong> فدان</div><div className="trust-i"><strong>٧٨م</strong> ارتفاع</div>
      <div className="trust-i"><strong>٣٥</strong> حمام سباحة</div><div className="trust-i"><strong>١٢ دق</strong> المطار</div>
      <div className="trust-i"><strong>٨٥٪</strong> خضرة</div>
    </div></div>

    <section className="sec about" id="about"><div className="sec-in">
      <div className="fin" style={{textAlign:"center"}}><span className="sec-tag">Makadi Heights · مكادي هايتس أوراسكوم</span>
        <h2 className="sec-h" style={{textAlign:"center"}}>مدينة متكاملة على <em>البحر الأحمر</em></h2>
        <p className="sec-p c">مكادي هايتس Makadi Heights من أوراسكوم Orascom Development — مدينة ساحلية متكاملة في خليج مكادي بالغردقة. ٩٠٠ فدان على ارتفاع ٧٨ متر فوق سطح البحر. ٨٥٪ مساحات خضراء ومفتوحة. ٣٥ حمام سباحة وبحيرة ٦,٠٠٠ م² وكلوب هاوس ٣٣,٠٠٠ م². مكادي هايتس أوراسكوم — تشطيب كامل وإطلالة بانورامية.</p>
      </div>
      <div className="about-grid fin">
        <div className="about-img"><img src={I.g1} alt="مكادي هايتس الغردقة — Makadi Heights Hurghada أوراسكوم Orascom"/></div>
        <div className="about-pts">
          {[{i:"🏔",t:"٧٨ متر فوق سطح البحر",d:"مكادي هايتس — Makadi Heights على أعلى نقطة في خليج مكادي — إطلالة بانورامية"},{i:"🏖",t:"شاطئ خاص على البحر الأحمر",d:"شاطئ رملي ساحر — مكادي هايتس أوراسكوم Makadi Heights Orascom"},{i:"🏊",t:"٣٥ حمام سباحة + بحيرة ٦,٠٠٠ م²",d:"مسطحات مائية وشلالات وInfinity Pool — Makadi Heights"},{i:"🏛",t:"أوراسكوم — Orascom Development",d:"سميح ساويرس — ٣٠+ سنة خبرة — مطور الجونة وأو ويست. مكادي هايتس أوراسكوم"}].map((x,i)=>
            <div key={i} className="about-pt"><div className="about-pt-i">{x.i}</div><div><h3>{x.t}</h3><p>{x.d}</p></div></div>
          )}
        </div>
      </div>
      <div className="about-stats fin">
        {[{v:"900",l:"فدان — مكادي هايتس"},{v:"78m",l:"ارتفاع فوق البحر"},{v:"85%",l:"خضرة ومرافق"},{v:"35",l:"حمام سباحة"}].map((s,i)=>
          <div key={i} className="about-stat"><strong>{s.v}</strong><span>{s.l}</span></div>
        )}
      </div>
    </div></section>

    <div className="band"><h3>سجل في مكادي هايتس — Makadi Heights الغردقة</h3><p>١٠٪ مقدم — تقسيط ٧ سنوات — تشطيب كامل — أوراسكوم Orascom Development</p>
      <div className="band-btns"><a className="b-teal" href="#contact">سجل الآن</a><a className="b-wa" href={WU} target="_blank" rel="noopener" onClick={()=>trackWA("mid")}>💬 واتساب</a><a className="b-ghost" href={`tel:${PI}`} onClick={()=>trackCall("mid")}><PhI/> اتصل</a></div>
    </div>

    <section className="sec" id="units"><div className="sec-in fin" style={{textAlign:"center"}}>
      <span className="sec-tag">وحدات مكادي هايتس · Makadi Heights Units</span>
      <h2 className="sec-h" style={{textAlign:"center"}}>الوحدات في <em>مكادي هايتس</em></h2>
      <p className="sec-p c">شقق وتاون هاوس وتوين هاوس وفيلات في Makadi Heights من أوراسكوم Orascom — تشطيب كامل بإطلالة بانورامية على البحر الأحمر</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14,marginTop:24}}>
        {UNITS.map((u,i)=><div key={i} style={{padding:20,background:"var(--color-cream)",borderRadius:16,border:"1px solid rgba(42,124,142,.06)",textAlign:"center"}}>
          <span style={{fontSize:9,fontWeight:700,letterSpacing:2,textTransform:"uppercase",color:"var(--color-teal)"}}>Makadi Heights</span>
          <div style={{fontSize:16,fontWeight:700,margin:"6px 0 2px"}}>{u.n}</div>
          <div style={{fontSize:10,color:"var(--color-muted)",marginBottom:6}}>{u.en}</div>
          <div style={{fontSize:9,color:"var(--color-muted)"}}>يبدأ من</div>
          <div style={{fontSize:17,fontWeight:800,color:"var(--color-dark)",margin:"2px 0 4px"}}>{u.p}</div>
          <div style={{fontSize:10,color:"var(--color-teal)",marginBottom:12}}>📐 {u.area}</div>
          <a href={WU} target="_blank" rel="noopener" style={{display:"block",padding:10,borderRadius:9,border:"2px solid var(--color-dark)",color:"var(--color-dark)",fontSize:11,fontWeight:700,textDecoration:"none"}} onClick={()=>trackWA(`unit_${i}`)}>استفسر واتساب</a>
        </div>)}
      </div>
      <p style={{fontSize:10,color:"var(--color-muted)",marginTop:16}}>أسعار مكادي هايتس الغردقة — Makadi Heights Orascom استرشادية وقابلة للتغيير</p>
    </div></section>

    <section className="sec" id="payment" style={{background:"var(--color-cream)"}}><div className="sec-in fin" style={{textAlign:"center"}}>
      <h2 className="sec-h" style={{textAlign:"center"}}>سداد <em>Makadi Heights</em></h2>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:18,marginTop:24,textAlign:"right"}}>
        <div style={{padding:26,borderRadius:16,background:"#fff",border:"1px solid rgba(42,124,142,.05)",borderBottom:"3px solid var(--color-teal)"}}>
          <h3 style={{fontFamily:"var(--font-head)",fontSize:18,fontWeight:600,marginBottom:14}}>نظام التقسيط</h3>
          <ul style={{listStyle:"none",padding:0}}>{["١٠٪ مقدم","تقسيط حتى ٧ سنوات","تشطيب كامل لكل الوحدات","مرحلة كريست Crest — تسليم فعلي","أسعار تبدأ من ٧.٧ مليون"].map((l,i)=><li key={i} style={{padding:"8px 0",borderBottom:"1px solid rgba(42,124,142,.04)",fontSize:12,display:"flex",gap:7}}>✓ {l}</li>)}</ul>
          <div style={{marginTop:14}}><a className="b-wa" href={WU} target="_blank" rel="noopener" style={{width:"100%",justifyContent:"center"}} onClick={()=>trackWA("pay")}>💬 تفاصيل السداد</a></div>
        </div>
        <div style={{padding:26,borderRadius:16,background:"#fff",border:"1px solid rgba(42,124,142,.05)",borderBottom:"3px solid var(--color-teal)"}}>
          <h3 style={{fontFamily:"var(--font-head)",fontSize:18,fontWeight:600,marginBottom:14}}>لماذا مكادي هايتس — Makadi Heights؟</h3>
          <ul style={{listStyle:"none",padding:0}}>{["أوراسكوم Orascom — ٣٠+ سنة خبرة","٧٠٪ من الوحدات بإطلالة بحر مباشرة","١٢ دقيقة من مطار الغردقة","مدينة متكاملة — مدارس ومستشفيات","٣٥ حمام سباحة + شاطئ خاص"].map((l,i)=><li key={i} style={{padding:"8px 0",borderBottom:"1px solid rgba(42,124,142,.04)",fontSize:12,display:"flex",gap:7}}>✓ {l}</li>)}</ul>
        </div>
      </div>
    </div></section>

    <section className="sec gal" id="gallery"><div className="sec-in fin" style={{textAlign:"center"}}>
      <h2 className="sec-h" style={{textAlign:"center"}}>معرض <em>Makadi Heights</em></h2>
      <div className="gal-grid">
        <div className="gal-it big"><img src={I.hero} alt="مكادي هايتس الغردقة — Makadi Heights Orascom"/><div className="gal-cap">مكادي هايتس — Makadi Heights Panoramic</div></div>
        <div className="gal-it"><img src={I.g2} alt="مكادي هايتس أوراسكوم"/><div className="gal-cap">مكادي هايتس — Sea View</div></div>
        <div className="gal-it"><img src={I.g3} alt="Makadi Heights Hurghada"/><div className="gal-cap">Makadi Heights — Pool</div></div>
        <div className="gal-it"><img src={I.g4} alt="مكادي هايتس فيلات"/><div className="gal-cap">مكادي هايتس — Villas</div></div>
        <div className="gal-it"><img src={I.g5} alt="Makadi Heights Orascom"/><div className="gal-cap">Makadi Heights — Landscape</div></div>
      </div>
    </div></section>

    <section className="am" id="amenities"><div className="am-in fin" style={{textAlign:"center"}}>
      <h2 className="sec-h" style={{color:"#fff",textAlign:"center"}}>مرافق <em style={{color:"var(--color-teal-light)"}}>مكادي هايتس</em></h2>
      <div className="am-grid">{[{i:"🏊",n:"٣٥ حمام سباحة"},{i:"🌊",n:"بحيرة ٦,٠٠٠ م²"},{i:"🏠",n:"كلوب هاوس ٣٣,٠٠٠ م²"},{i:"🏖",n:"شاطئ خاص"},{i:"🏥",n:"مركز طبي"},{i:"🏫",n:"مدارس وحضانات"},{i:"🏪",n:"مول تجاري"},{i:"🏋️",n:"Ignite Gym"},{i:"🚴",n:"مسارات دراجات"},{i:"🏃",n:"مسارات جري"},{i:"☀️",n:"محطة طاقة شمسية"},{i:"🔒",n:"أمن ٢٤/٧"}].map((x,i)=>
        <div key={i} className="am-c"><div className="am-c-i">{x.i}</div><div className="am-c-n">{x.n}</div></div>
      )}</div>
    </div></section>

    <section className="sec faq"><div className="sec-in fin" style={{textAlign:"center"}}>
      <h2 className="sec-h" style={{textAlign:"center"}}>أسئلة عن <em>مكادي هايتس</em> — Makadi Heights FAQ</h2>
      <div className="faq-list">{FAQS.map((x,i)=><div key={i} className="faq-i"><button className={`faq-q ${fq===i?"op":""}`} onClick={()=>sFq(fq===i?null:i)}><span>{x.q}</span><span className="arr"><Chv/></span></button><div className={`faq-a ${fq===i?"op":""}`}><p>{x.a}</p></div></div>)}</div>
    </div></section>

    <div className="disc"><p>هذا الموقع يقدم معلومات عن مكادي هايتس — Makadi Heights من أوراسكوم — Orascom Development. أسعار استرشادية وقابلة للتغيير. التعاقد مع المطور مباشرة.</p></div>

    <section className="ct" id="contact"><div className="sec-in fin">
      <div style={{textAlign:"center"}}><h2 className="sec-h" style={{color:"#fff",textAlign:"center"}}>سجل في <em style={{color:"var(--color-teal-light)"}}>مكادي هايتس</em></h2></div>
      <div className="ct-wrap">
        <div className="ct-left">
          <p>سجّل في مكادي هايتس الغردقة — Makadi Heights Hurghada من أوراسكوم Orascom وفريق المبيعات هيتواصل معاك.</p>
          <a className="ct-row" href={`tel:${PI}`} onClick={()=>trackCall("ct")}><PhI/><span>{PD}</span></a>
          <a className="ct-row" href={WU} target="_blank" rel="noopener" onClick={()=>trackWA("ct")}>💬 واتساب مكادي هايتس</a>
          <div style={{marginTop:14}}><a className="b-wa" href={WU} target="_blank" rel="noopener" style={{width:"100%",justifyContent:"center"}} onClick={()=>trackWA("ct_big")}>💬 واتساب الآن — Makadi Heights</a></div>
        </div>
        <div className="ct-form"><div className="cf-title">سجل في Makadi Heights</div>
          <form ref={fr} onSubmit={(e:FormEvent)=>{e.preventDefault();sub(fr,sFs,"main_form")}} style={{textAlign:"right"}}>
            <input type="hidden" name="access_key" value={WK}/><input type="hidden" name="subject" value="Lead — مكادي هايتس Makadi Heights أوراسكوم"/><input type="hidden" name="from_name" value="Makadi Heights Landing"/><input type="checkbox" name="botcheck" style={{display:"none"}}/>
            <div className="cf-row"><div className="cf-f"><label>الاسم *</label><input name="name" placeholder="اسمك" required/></div><div className="cf-f"><label>الموبايل *</label><input name="phone" type="tel" dir="ltr" placeholder="01012345678" required/></div></div>
            <div className="cf-f"><label>نوع الوحدة</label><select name="unit_type"><option value="غير محدد">اختر</option><option value="شقة">شقة</option><option value="تاون هاوس">تاون هاوس</option><option value="توين هاوس">توين هاوس</option><option value="فيلا">فيلا</option></select></div>
            {fs==="sent"?<div style={{textAlign:"center",padding:"14px 0"}}><div style={{fontSize:36}}>✓</div><p style={{color:"var(--color-teal-light)",fontWeight:700}}>تم — جاري التحويل</p></div>
            :<button type="submit" className="cf-sub" disabled={fs==="sending"}>{fs==="sending"?"جاري...":"سجل الآن — مكادي هايتس"}</button>}
            {fs==="error"&&<p style={{color:"#ef4444",fontSize:10,textAlign:"center",marginTop:6}}>خطأ — <a href={WU} target="_blank" style={{color:"var(--color-teal-light)"}}>واتساب</a></p>}
            <p style={{fontSize:8,color:"rgba(255,255,255,.2)",textAlign:"center",marginTop:8}}>بإرسال النموذج توافق على <button onClick={()=>sPrv(true)} type="button" style={{background:"none",border:"none",color:"var(--color-teal-light)",textDecoration:"underline",cursor:"pointer",fontSize:8}}>سياسة الخصوصية</button></p>
          </form>
        </div>
      </div>
    </div></section>

    <footer className="ft"><div>
      <img src={I.logo} alt="Makadi Heights" style={{height:36,marginBottom:12,opacity:.6}}/>
      <p className="ft-t">مكادي هايتس — Makadi Heights من أوراسكوم Orascom Development. خليج مكادي، الغردقة. أسعار استرشادية.</p>
      <div className="ft-links"><button onClick={()=>sPrv(true)} style={{color:"rgba(255,255,255,.3)",fontSize:10,textDecoration:"underline",background:"none",border:"none",cursor:"pointer"}}>سياسة الخصوصية</button><a href="#about" style={{color:"rgba(255,255,255,.3)",fontSize:10}}>المشروع</a></div>
      <p className="ft-cr">© 2026 Makadi Heights · مكادي هايتس · أوراسكوم Orascom Development</p>
    </div></footer>

    <div className="float-btns"><a className="float-btn fwa" href={WU} target="_blank" rel="noopener" onClick={()=>trackWA("float")}>💬</a><a className="float-btn fcall" href={`tel:${PI}`} onClick={()=>trackCall("float")}>📞</a></div>

    <div className={`p-bk ${pop?"on":""}`} onClick={cp}/><div className={`p-dlg ${pop?"on":""}`}><button className="p-x" onClick={cp}>✕</button>
      <p style={{fontSize:9,fontWeight:700,letterSpacing:2,textTransform:"uppercase",color:"var(--color-teal-light)",marginBottom:8}}>🏖 مكادي هايتس — Makadi Heights</p>
      <h2 style={{fontFamily:"var(--font-head)",fontSize:22,fontWeight:600,marginBottom:6}}>سجل في مكادي هايتس الغردقة</h2>
      <p style={{fontSize:11,color:"rgba(255,255,255,.5)",marginBottom:14}}>Makadi Heights من أوراسكوم — ١٠٪ مقدم، تشطيب كامل</p>
      {ps==="sent"?<p style={{textAlign:"center",color:"var(--color-teal-light)",fontWeight:700,padding:16}}>✓ تم</p>
      :<form ref={pfr} onSubmit={(e:FormEvent)=>{e.preventDefault();sub(pfr,sPs,"popup").then(()=>setTimeout(cp,2500))}}>
        <input type="hidden" name="access_key" value={WK}/><input type="hidden" name="subject" value="Popup — مكادي هايتس Makadi Heights"/><input type="hidden" name="from_name" value="MH Popup"/><input type="checkbox" name="botcheck" style={{display:"none"}}/>
        <div className="cf-f"><label>الاسم *</label><input name="name" placeholder="اسمك" required style={{padding:10,fontSize:11}}/></div>
        <div className="cf-f"><label>الموبايل *</label><input name="phone" type="tel" dir="ltr" placeholder="01012345678" required style={{padding:10,fontSize:11}}/></div>
        <button type="submit" className="cf-sub" disabled={ps==="sending"} style={{marginTop:4}}>{ps==="sending"?"...":"سجل — مكادي هايتس"}</button>
        <a href={WU} target="_blank" rel="noopener" onClick={()=>trackWA("popup")} style={{display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginTop:10,padding:10,borderRadius:8,background:"#25d366",color:"#fff",fontSize:11,fontWeight:700,textDecoration:"none"}}>💬 واتساب Makadi Heights</a>
      </form>}
    </div>

    {prv&&<><div style={{position:"fixed",inset:0,zIndex:300,background:"rgba(0,0,0,.6)"}} onClick={()=>sPrv(false)}/><div style={{position:"fixed",zIndex:301,top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:"min(520px,92vw)",maxHeight:"85vh",overflowY:"auto",background:"#fff",borderRadius:16,padding:"28px 24px"}}>
      <button onClick={()=>sPrv(false)} style={{position:"absolute",top:10,left:10,background:"#f0f0f0",border:"none",borderRadius:"50%",width:28,height:28,fontSize:14,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>✕</button>
      <h2 style={{fontFamily:"var(--font-head)",fontSize:22,fontWeight:600,marginBottom:12}}>سياسة الخصوصية</h2>
      <div style={{fontSize:11,lineHeight:1.8,color:"var(--color-muted)"}}>
        <p style={{marginBottom:8}}>نجمع الاسم والهاتف فقط — للتواصل بخصوص مكادي هايتس Makadi Heights من أوراسكوم Orascom.</p>
        <p style={{marginBottom:8}}>بياناتك مشفرة ومحمية. لا نبيع بياناتك.</p>
        <p>تواصل: <a href={`tel:${PI}`} style={{color:"var(--color-teal)"}}>{PD}</a></p>
      </div></div></>}

    {ck&&<div className="ck"><p>نستخدم cookies لتحسين تجربتك. <button onClick={()=>sPrv(true)} style={{background:"none",border:"none",color:"var(--color-teal-light)",textDecoration:"underline",cursor:"pointer",fontSize:10}}>سياسة الخصوصية</button></p>
      <div className="ck-btns"><button className="ck-ok" onClick={()=>{sCk(false);try{localStorage.setItem("mk_ck","1")}catch{}}}>موافق</button><button className="ck-no" onClick={()=>sCk(false)}>رفض</button></div>
    </div>}

    <nav className="mbar"><div className="mbar-in"><a className="m-call" href={`tel:${PI}`} onClick={()=>trackCall("mob")}><PhI/>{PD}</a><a className="m-wa" href={WU} target="_blank" rel="noopener" onClick={()=>trackWA("mob")}>💬</a><a className="m-book" href="#contact">سجل</a></div></nav>
  </>);
}
