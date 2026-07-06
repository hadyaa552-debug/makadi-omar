import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "مكادي هايتس الغردقة — أوراسكوم | Makadi Heights Hurghada by Orascom",
  description: "مكادي هايتس Makadi Heights الغردقة من أوراسكوم للتطوير Orascom Development — ٩٠٠ فدان على ارتفاع ٧٨ م فوق البحر في خليج مكادي. شقق وفيلات وتاون هاوس بتشطيب كامل، أسعار تبدأ من ٧.٧ مليون، ١٠٪ مقدم وتقسيط حتى ٧ سنوات. مكادي هايتس أوراسكوم — مدينة متكاملة على البحر الأحمر. سميح ساويرس.",
  keywords: "مكادي هايتس,Makadi Heights,أوراسكوم,Orascom,مكادي هايتس الغردقة,Makadi Heights Hurghada,مكادي هايتس أوراسكوم,البحر الأحمر,خليج مكادي,شقق مكادي هايتس,فيلات مكادي هايتس,سميح ساويرس,Orascom Development",
  openGraph:{title:"مكادي هايتس أوراسكوم — Makadi Heights Orascom | الغردقة",description:"مكادي هايتس — ٩٠٠ فدان، ٧٨م فوق البحر، تشطيب كامل. أوراسكوم Orascom.",locale:"ar_EG",type:"website",images:["https://assets.live.beyond-creation.net/makadi/makadi_fddfe986f9.png"]},
};
export default function L({children}:{children:React.ReactNode}){return(
  <html lang="ar" dir="rtl"><head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&display=swap" rel="stylesheet"/>
    {/* ══ Google Ads Tag ══ */}
    {/* <script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXX" /> */}
    {/* <script dangerouslySetInnerHTML={{__html:`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','AW-XXXXXXX');`}} /> */}
  </head><body>{children}</body></html>
);}
