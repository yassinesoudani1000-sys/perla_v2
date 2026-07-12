<script>
// ============ IMAGE URIS (injected) ============
const IMG = {"goldSeal": "/extracted_images/image_95.png", "hero": "/extracted_images/image_96.png", "shop": "/extracted_images/image_97.png", "logo": "/extracted_images/image_98.png", "tree": "/extracted_images/image_99.jpeg"};

function renderGallery(){
  const sources={hero:IMG.hero,shop:IMG.shop,tree:IMG.tree,logo:IMG.logo};
  document.querySelectorAll("[data-gallery-img]").forEach(img=>{
    const key=img.dataset.galleryImg;
    if(sources[key]) img.src=sources[key];
  });
}

const AWARD_IMG = {"us_miami": "/extracted_images/image_100.jpeg", "eu_geneva": "/extracted_images/image_101.jpeg", "afro_abudhabi": "/extracted_images/image_102.jpeg", "uae_alain": "/extracted_images/image_103.jpeg", "biol_novello24": "/extracted_images/image_104.jpeg", "athens23": "/extracted_images/image_105.jpeg", "biol25": "/extracted_images/image_106.jpeg", "biol26": "/extracted_images/image_107.jpeg",
  "alain26_cert": "/extracted_images/image_108.png",
  "biol26_cert": "/extracted_images/image_109.png",
  "geneva26_cert": "/extracted_images/image_110.png"
};
const IMG_TIN5 = "/extracted_images/image_111.png";
const IMG_GLASS250 = "/extracted_images/image_112.png";
const IMG_GLASS500 = "/extracted_images/image_113.png";
const IMG_GLASS750 = "/extracted_images/image_114.png";
const IMG_GLASS1000 = "/extracted_images/image_115.png";
const IMG_GLASS500Q = "/extracted_images/image_116.png";
const IMG_GLASS750Q = "/extracted_images/image_117.png";
const IMG_TIN3 = "/extracted_images/image_118.png";

const IMG_TIN1 = "/extracted_images/image_119.png";

// ============ DATA ============
const PRODUCTS = [
  {id:"p3",cat:"glass",flag:"",name:"Vestige 250 ml",vol:"250 ml · Runde Glasflasche",notes:"Kompaktes Format — perfekt zum Probieren oder Mitnehmen.",price:8.90,img:IMG_GLASS250},
  {id:"p2",cat:"glass",flag:"",name:"Vestige 500 ml",vol:"500 ml · Runde Glasflasche",notes:"Der ideale Einstieg in die Prestige-Linie für die tägliche Tafel.",price:14.90,img:IMG_GLASS500},
  {id:"p1",cat:"glass",flag:"Best in the World · Genf",name:"Vestige 750 ml",vol:"750 ml · Runde Glasflasche",notes:"Das Flaggschiff der Édition Prestige. Grüner Apfel, süße Mandel, seidiger Abgang.",price:19.90,img:IMG_GLASS750},
  {id:"p10",cat:"glass",flag:"",name:"Vestige Carré 500 ml",vol:"500 ml · Eckige Glasflasche",notes:"Die Édition Prestige in der eleganten eckigen Flasche — markant im Regal, edel auf der Tafel.",price:14.90,img:IMG_GLASS500Q},
  {id:"p11",cat:"glass",flag:"",name:"Vestige Carré 750 ml",vol:"750 ml · Eckige Glasflasche",notes:"Das 750-ml-Format in der eckigen Prestige-Flasche — ein Statement für anspruchsvolle Genießer.",price:19.90,img:IMG_GLASS750Q},
  {id:"p9",cat:"glass",flag:"Magnum",name:"Vestige 1 L",vol:"1 L · Eckige Glasflasche",notes:"Großzügig, prestigeträchtig — der Klassiker im Magnum-Format.",price:24.90,img:IMG_GLASS1000},
  {id:"p4",cat:"tin",flag:"Zurzeit nicht verfügbar",name:"Heritage Dose 1 L",vol:"1 L · Metalldose",notes:"Lichtdicht versiegelt — schützt Polyphenole über Monate.",price:24.90,available:false,img:IMG_TIN1},
  {id:"p5",cat:"tin",flag:"",badge:"Mehrfach goldprämiert 2026",name:"Heritage Dose 3 L",vol:"3 L · Metalldose",notes:"Für Genießer und Familien, die Laperla großzügig schätzen.",trust:"Mit internationalen Goldmedaillen ausgezeichnet — ein sichtbares Qualitätsversprechen für anspruchsvolle Käufer.",price:64.90,img:IMG_TIN3},
  {id:"p8",cat:"tin",flag:"",badge:"Mehrfach goldprämiert 2026",name:"Heritage Dose 5 L",vol:"5 L · Metalldose",notes:"Das Großformat für die anspruchsvolle Küche.",trust:"Mit internationalen Goldmedaillen ausgezeichnet — ein sichtbares Qualitätsversprechen für anspruchsvolle Käufer.",price:99.90,img:IMG_TIN5},
  {id:"p6",cat:"gift",flag:"Wieder verfügbar",name:"Coffret Prestige",vol:"2 × 250 ml · Geschenkbox",notes:"Zwei 250-ml-Flaschen der Édition Prestige — als hochwertiges Geschenkset für besondere Anlässe.",price:17,img:IMG_GLASS250,images:[IMG_GLASS250,IMG_GLASS250]},
  {id:"p7",cat:"gift",flag:"Zurzeit nicht verfügbar",name:"Coffret Or Suprême",vol:"750 ml + Karaffe",notes:"Flaschenset mit handgefertigter Ausgießkaraffe — das ultimative Geschenk.",price:89,available:false,img:IMG_GLASS750}
];

const OFFERS = {
  o1:{name:"Édition Prestige 250 ml",vol:"250 ml · Édition Prestige",price:8.90},
  o2:{name:"Édition Prestige 500 ml",vol:"500 ml · Édition Prestige · Bestseller",price:14.90},
  o3:{name:"Édition Prestige 750 ml",vol:"750 ml · Édition Prestige",price:19.90}
};

// B2B configurator items (price per unit, litres per unit)
const B2B = [
  {id:"b1",name:"Glasflasche 750 ml",fmt:"Karton à 12 Flaschen",litres:9,price:78,tier:"Retail"},
  {id:"b2",name:"Glasflasche 500 ml",fmt:"Karton à 15 Flaschen",litres:7.5,price:69,tier:"Retail"},
  {id:"b3",name:"Metalldose 5 L",fmt:"Karton à 4 Dosen",litres:20,price:128,tier:"Food-Service",img:IMG_TIN5},
  {id:"b5",name:"Fass 20 L",fmt:"Einzelfass",litres:20,price:112,tier:"Bulk"},
  {id:"b6",name:"Fass 200 L",fmt:"Einzelfass",litres:200,price:990,tier:"Bulk"},
  {id:"b7",name:"IBC-Container 1000 L",fmt:"Einzelcontainer",litres:1000,price:4650,tier:"Bulk"}
];

const AWARDS_DATA = [
  {key:"alain26_cert",flag:"Gold 2026",name:"Al Ain Early Harvest Competition",place:"Al Ain, Abu Dhabi · VAE · 2026",desc:"Offizielles Gold-Medal-Zertifikat · La Perla Chetoui · Al Ain Heritage Festival"},
  {key:"biol26_cert",flag:"Gold 2026",name:"BIOL International Prize",place:"Bari, Italien · 2026",desc:"Offizielles BIOL-Goldmedaillen-Zertifikat · Best Organic Extra Virgin Olive Oil"},
  {key:"geneva26_cert",flag:"Gold 2026",name:"European International Olive Oil Competition",place:"Genf, Schweiz · 2026",desc:"Offizielles Teilnahme- und Gold-Zertifikat · Geneva 2026 · La Perla"},
  {key:"uae_alain",flag:"Gold",name:"Al Ain Early Harvest Competition",place:"Al Ain, Abu Dhabi · 2026",desc:"Gold Medal · La Perla Chetoui · Al Ain Heritage Festival"},
  {key:"biol26",flag:"Gold",name:"BIOL International Prize",place:"Bari, Italien · 2026",desc:"Gold Medal · 31. Internationaler Preis · Bestes Bio-EVOO"},
  {key:"eu_geneva",flag:"★ Best in World",name:"European International Competition",place:"Genf, Schweiz · 2024",desc:"Best Olive Oil in the World — Gold, 3. Edition EIOOC"},
  {key:"us_miami",flag:"Gold",name:"US International Competition",place:"Miami, USA · 2024",desc:"Goldmedaille für Qualitäts-Exzellenz · USIOOC"},
  {key:"afro_abudhabi",flag:"Gold",name:"Afro-Asian International Competition",place:"Abu Dhabi, VAE · 2024",desc:"Gold — Best Extra Virgin · AAIOOC"},
  {key:"biol_novello24",flag:"Extragold",name:"BIOLNOVELLO",place:"Bari, Italien · 2024",desc:"BIOLNOVELLO Extragold Medal · Bio Extra Vergine"},
  {key:"biol25",flag:"Gold",name:"BIOLNOVELLO",place:"Bari, Italien · 2025",desc:"BIOLNOVELLO Gold Medal · Kampagne 2025/26"},
  {key:"athens23",flag:"Double Gold",name:"Athena International Competition",place:"Athen · 2023",desc:"Double Gold Medal · ATHIOOC · „La Perla Chemlali"}
];

const MEDALS = [
  {y:"Al Ain 2026",l:"Gold"},{y:"Genf 2026",l:"Gold"},{y:"Bari 2026",l:"Gold"},
  {y:"Genf 2024",l:"Best in World"},{y:"Miami 2024",l:"Gold"},{y:"Abu Dhabi 2024",l:"Gold"},
  {y:"Bari 2024",l:"Extragold"},{y:"Athen 2023",l:"Double Gold"}
];

const FAQS = [
  {q:"Wie funktioniert der Container-Konfigurator?",a:"Wählen Sie im Konfigurator beliebig viele Formate (Glas, Dose, Fass, IBC) und Mengen. Volumen, Mengenrabatt und Gesamtpreis werden live berechnet. Anschließend zahlen Sie sofort und schließen den B2B-Kaufvertrag online ab."},
  {q:"Welche Zahlungsarten stehen zur Verfügung?",a:"Kreditkarte (Visa/Mastercard), PayPal, Klarna (Rechnung/Ratenkauf), SEPA-Lastschrift/-Überweisung, Apple Pay und Google Pay. Geschäftskunden können nach Bonitätsprüfung auch auf Rechnung mit Zahlungsziel bestellen."},
  {q:"Ist Laperla für den EU-Import zertifiziert?",a:"Ja. Wir halten ECO-CERT (EU-Bio, TN-BIO-001), USDA Organic, Organic Bio und FDA. Die Kennzeichnung erfolgt nach EU-Verordnung 1169/2011 und 29/2012. Alle Dokumente liegen jeder Lieferung bei."},
  {q:"Wie hoch ist mein Provisionssatz?",a:"Die Provision ist gestaffelt: 8 % (Partner, bis 5.000 L/Jahr), 14 % (Distributor, 5.000–25.000 L) und 20 % (Exklusiv, ab 25.000 L). Ihr aktueller Satz und Ihre Abrechnung sind im Händler-Dashboard sichtbar."},
  {q:"Wo wird das Öl produziert und kann ich es besuchen?",a:"Unsere Haine und Mühle liegen in Tunesien. Geschäftsbesuche zur Lieferantenprüfung sind willkommen — vereinbaren Sie eine Besichtigung oder virtuelle Tour."}
];

const DISTRIBUTORS = [
  {name:"Agentur Blumann",role:"Vertriebspartner · Deutschland",rows:[["⬦","Stephan Blumann"],["⌂","Auf der Ayl 62, 54295 Trier"],["☎","0176 / 533 26268"],["✉","stephanblumann@gmail.com"]]}
];

const ORDERS = [
  {id:"LP-2026-0044",date:"14.06.2026",items:"1.200 L · Glas & Dose",total:"3.480,00 €",status:"transit",statusLabel:"In Transit"},
  {id:"LP-2026-0042",date:"02.06.2026",items:"800 L · Metalldose",total:"1.536,00 €",status:"open",statusLabel:"Offen"},
  {id:"LP-2026-0041",date:"18.04.2026",items:"2.000 L · Bulkware",total:"4.980,00 €",status:"delivered",statusLabel:"Zugestellt"},
  {id:"LP-2026-0033",date:"03.03.2026",items:"2.250 L · Glas",total:"9.870,00 €",status:"paid",statusLabel:"Bezahlt"}
];

const COMMISSIONS = [
  {period:"Q1 2026",vol:"2.250 L",base:"9.870 €",pct:"14 %",amount:"1.381,80 €",status:"paid"},
  {period:"Q2 2026",vol:"4.000 L",base:"13.176 €",pct:"14 %",amount:"1.844,64 €",status:"open"}
];

const DOCS = [
  {name:"Analysezertifikat (COA) · Charge 2026-A",type:"PDF · COA",date:"14.06.2026"},
  {name:"ECO-CERT Bio-Zertifikat · TN-BIO-001",type:"PDF · Zertifikat",date:"01.01.2026"},
  {name:"Ursprungszeugnis · Tunesien",type:"PDF · Export",date:"14.06.2026"},
  {name:"Rechnung LP-2026-0042",type:"PDF · Rechnung",date:"02.06.2026"},
  {name:"Händlervertrag · Distributor",type:"PDF · Vertrag",date:"03.03.2026"}
];

// ============ STATE ============
let cart=[]; let configState={}; let checkoutMode="retail"; let loggedIn=false; let dealerApproved=(localStorage.getItem("laperlaDealerApproved")==="1"); window.dealerApproved=dealerApproved;
let checkoutStep=1; let lastSubmittedOrder=null;
/*
  Backend-Anbindung für den Live-Betrieb:
  Diese URL soll auf eine sichere Supabase Edge Function / Serverless API zeigen.
  Der optionale Backend-Endpunkt speichert die Anfrage dauerhaft. Ohne Backend nutzt die Seite
  die aktive E-Mail-Schnittstelle zu info@aniso-olive.de und sichert die Anfrage zusätzlich lokal.
*/
window.LAPERLA_ORDER_BACKEND_ENDPOINT = window.LAPERLA_ORDER_BACKEND_ENDPOINT || "";
window.LAPERLA_ORDER_EMAIL_ENDPOINT = window.LAPERLA_ORDER_EMAIL_ENDPOINT || "https://formsubmit.co/ajax/info@aniso-olive.de";
window.LAPERLA_ORDER_RECIPIENT = "info@aniso-olive.de";

// ============ HELPERS ============
function fmt(n){return n.toLocaleString("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2})+" €";}
function fmtInt(n){return n.toLocaleString("de-DE")+" €";}
function toast(m){const t=document.getElementById("toast");t.textContent=m;t.classList.add("show");clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove("show"),2200);}
function t(k){const d=(typeof I18N!=="undefined")?(I18N[currentLang]||I18N.de):null;if(!d)return k;return d[k]!==undefined?d[k]:(I18N.de&&I18N.de[k]!==undefined?I18N.de[k]:k);}

// ============ RENDER: PRODUCTS ============
function productMediaMarkup(p){
  const badge=p.flag?`<span class="pc-flag${p.available===false?" unavailable-v88":""}">${p.flag}</span>`:p.badge?`<span class="pc-flag trust-badge">${p.badge}</span>`:"";
  const media=p.images?.length
    ? `<span class="pc-media-pair">${p.images.map((src,i)=>`<img src="${src}" alt="${p.name} – Flasche ${i+1}">`).join("")}</span>`
    : `<img src="${p.img||IMG.shop}" alt="${p.name}">`;
  return `${badge}${media}`;
}
function renderProducts(filter=window.__lastFilter||"all"){window.__lastFilter=filter;
  document.getElementById("productGrid").innerHTML = PRODUCTS.filter(p=>filter==="all"||p.cat===filter).map(p=>`
    <div class="product-card${p.available===false?" product-unavailable-v88":""}">
      <button class="pc-media pc-media-click" type="button" data-product-detail="${p.id}" aria-label="Große Detailansicht von ${p.name} öffnen">${productMediaMarkup(p)}</button>
      <div class="pc-body">
        <div class="pc-cat">${p.cat==="glass"?t("cat_glass"):p.cat==="tin"?t("cat_tin"):t("cat_gift")}</div>
        <h3>${p.name}</h3><div class="pc-vol">${p.vol}</div><p class="pc-notes">${p.notes}</p>${p.trust?`<div class="pc-trust"><span class="star">★</span><span>${p.trust}</span></div>`:""}
        ${p.available===false
          ? `<div class="pc-foot unavailable-foot-v88"><div class="unavailable-text-v88">${t("unavail")}</div><button class="pc-add unavailable-btn-v88" type="button" disabled>${t("not_orderable")}</button></div>`
          : `<div class="pc-foot"><div class="pc-price">${fmt(p.price)}<small>${t("incl_vat")}</small></div><button class="pc-add" data-add="${p.id}">${t("add_cart")}</button></div>`}
      </div>
    </div>`).join("");
}

// ============ RENDER: AWARDS ============
function renderAwards(){
  const medalTemplate = (m,i,realIndex)=>{
    const parts = m.y.split(" ");
    const year = parts.pop();
    const city = parts.join(" ");
    const rank = m.l.toLowerCase().includes("double") ? "Double Gold" :
                 m.l.toLowerCase().includes("extra") ? "Extragold" :
                 m.l.toLowerCase().includes("best") ? "Best Award" : "Gold Medal";
    const isCurrent = year === "2026";
    return `
    <div class="medal-item ${isCurrent ? "is-2026" : ""}" data-medal="${realIndex}" tabindex="0" role="button" aria-label="${rank} ${city} ${year} öffnen">
      <div class="medal">
        <img class="medal-photo" src="${IMG.goldSeal}" alt="LAPERLA Goldmedaille">
      </div>
      <div class="medal-rank">${rank}</div>
      <div class="my">${city}</div>
      <div class="ml">${year}</div>
    </div>`;
  };

  const medals2026 = MEDALS.map((m,i)=>({...m,_realIndex:i})).filter(m=>m.y.includes("2026"));
  const medalsRest = MEDALS.map((m,i)=>({...m,_realIndex:i})).filter(m=>!m.y.includes("2026"));

  const row2026 = document.getElementById("medalRow2026");
  if(row2026){
    row2026.innerHTML = medals2026.map((m,i)=>medalTemplate(m,i,m._realIndex)).join("");
  }

  const spotlight = AWARDS_DATA.filter(a=>a.place.includes("2026")).slice(0,3);
  const spotlightEl = document.getElementById("awards2026Spotlight");
  if(spotlightEl){
    spotlightEl.innerHTML = spotlight.map(a=>`
      <div class="award-2026-card" data-cert="${a.key}">
        <div class="award-2026-img"><span>${a.flag}</span><img src="${AWARD_IMG[a.key]}" alt="${a.name}"></div>
        <div class="award-2026-meta"><h4>${a.name}</h4><p>${a.place}</p></div>
      </div>`).join("");
  }

  document.getElementById("medalRow").innerHTML = medalsRest.map((m,i)=>medalTemplate(m,i,m._realIndex)).join("");

  document.getElementById("certGallery").innerHTML = AWARDS_DATA.filter(a=>!a.place.includes("2026")).map(a=>`
    <div class="cert-card" data-cert="${a.key}">
      <div class="img"><span class="cert-flag">${a.flag}</span><img src="${AWARD_IMG[a.key]}" alt="${a.name}"></div>
      <div class="meta"><h4>${a.name}</h4><div class="place">${a.place}</div><div class="desc">${a.desc}</div></div>
    </div>`).join("");
}

function renderFaqs(){
  document.getElementById("faqList").innerHTML = FAQS.map(f=>`
    <div class="faq-item"><button class="faq-q">${f.q}<span class="pm">+</span></button><div class="faq-a"><p>${f.a}</p></div></div>`).join("");
}

// ============ HERITAGE TREE SVG ============
function renderHeritageArt(){
  const el=document.getElementById("heritageArt");
  if(!el || el.dataset.locked==="1") return;
}

// ============ B2B CONFIGURATOR ============
function discountFor(litres){
  if(litres>=1000) return 0.18; if(litres>=500) return 0.14; if(litres>=200) return 0.09; if(litres>=50) return 0.05; return 0;
}
function renderConfig(){
  document.getElementById("configProducts").innerHTML = B2B.map(b=>`
    <div class="config-item">
      <div class="thumb"><img src="${b.img||IMG.shop}" alt=""></div>
      <div class="info"><h4>${b.name}<span class="config-tier">${b.tier}</span></h4><div class="fmt">${b.fmt}</div><div class="unit">${fmtInt(b.price)} / Einheit · ${b.litres} L</div></div>
      <div class="config-controls"><div class="config-qty">
        <button data-cfg="${b.id}" data-d="-1">−</button>
        <input type="text" id="cfg-${b.id}" value="0" readonly>
        <button data-cfg="${b.id}" data-d="1">+</button>
      </div></div>
    </div>`).join("");
  B2B.forEach(b=>configState[b.id]=0);
  updateConfig();
}
function updateConfig(){
  let litres=0,subtotal=0,lines=[];
  B2B.forEach(b=>{const q=configState[b.id]||0;if(q>0){litres+=b.litres*q;subtotal+=b.price*q;lines.push(`<div class="config-line"><span class="cl-name">${q}× ${b.name}</span><span class="cl-val">${fmtInt(b.price*q)}</span></div>`);}});
  const disc=discountFor(litres);const total=subtotal*(1-disc);
  document.getElementById("configLines").innerHTML = lines.length?lines.join(""):`<div class="config-empty">Noch keine Artikel gewählt. Erhöhen Sie links die Mengen.</div>`;
  document.getElementById("configVol").textContent = litres.toLocaleString("de-DE")+" L";
  document.getElementById("configVolFill").style.width = Math.min(100,litres/1000*100)+"%";
  document.getElementById("configDiscount").textContent = Math.round(disc*100)+" %";
  document.getElementById("configTotal").textContent = fmtInt(Math.round(total));
  window._configTotal = total;
}

// ============ CART ============
function addToCart(id){const p=PRODUCTS.find(x=>x.id===id);const l=cart.find(x=>x.id===id);if(l)l.qty++;else cart.push({...p,qty:1});updateCart();toast(`„${p.name}" hinzugefügt`);}
function changeQty(id,d){const l=cart.find(x=>x.id===id);if(!l)return;l.qty+=d;if(l.qty<=0)cart=cart.filter(x=>x.id!==id);updateCart();}
function cartTotal(){return cart.reduce((s,x)=>s+x.price*x.qty,0);}
function updateCart(){
  const count=cart.reduce((s,x)=>s+x.qty,0);
  document.getElementById("cartCount").textContent=count;
  const items=document.getElementById("cartItems");
  if(!cart.length){items.innerHTML=`<div class="cart-empty">Ihr Warenkorb ist noch leer.<br>Entdecken Sie die Kollektion.</div>`;}
  else{items.innerHTML=cart.map(x=>`
    <div class="cart-line"><div class="cart-line-img">${x.images?.length?x.images.map(src=>`<img src="${src}" alt="${x.name}">`).join(""):`<img src="${x.img||IMG.shop}" alt="${x.name}">`}</div>
      <div class="cart-line-info"><h5>${x.name}</h5><div class="v">${x.vol}</div><div class="cart-unit-price-v114">Einzelpreis: ${fmt(x.price)}</div>
        <div class="qty"><button data-qty="${x.id}" data-d="-1">−</button><span>${x.qty}</span><button data-qty="${x.id}" data-d="1">+</button></div></div>
      <div class="cart-line-price"><small>Gesamt</small>${fmt(x.price*x.qty)}</div></div>`).join("");}
  const tot=fmt(cartTotal());document.getElementById("cartTotal").textContent=tot;
}
function openCart(){document.getElementById("cartDrawer").classList.add("open");document.getElementById("drawerOverlay").classList.add("open");}
function closeCart(){document.getElementById("cartDrawer").classList.remove("open");document.getElementById("drawerOverlay").classList.remove("open");}

// ============ DASHBOARD ============
function renderDashboard(){
  const statusClass={transit:"st-transit",open:"st-open",delivered:"st-delivered",paid:"st-paid"};
  const orderRows = ORDERS.map(o=>`<tr><td class="oid">${o.id}</td><td>${o.date}</td><td>${o.items}</td><td>${o.total}</td><td><span class="badge-status ${statusClass[o.status]}">${o.statusLabel}</span></td></tr>`).join("");
  const head=`<tr><th>Bestellung</th><th>Datum</th><th>Artikel</th><th>Betrag</th><th>Status</th></tr>`;
  document.getElementById("ovOrders").innerHTML = head+ORDERS.slice(0,3).map(o=>`<tr><td class="oid">${o.id}</td><td>${o.date}</td><td>${o.items}</td><td>${o.total}</td><td><span class="badge-status ${statusClass[o.status]}">${o.statusLabel}</span></td></tr>`).join("");
  document.getElementById("allOrders").innerHTML = head+orderRows;
  document.getElementById("commTable").innerHTML = `<tr><th>Zeitraum</th><th>Volumen</th><th>Umsatz</th><th>Satz</th><th>Provision</th><th>Status</th></tr>`+COMMISSIONS.map(c=>`<tr><td>${c.period}</td><td>${c.vol}</td><td>${c.base}</td><td>${c.pct}</td><td style="color:var(--gold-deep);font-weight:600">${c.amount}</td><td><span class="badge-status ${c.status==='paid'?'st-paid':'st-open'}">${c.status==='paid'?'Ausgezahlt':'Offen'}</span></td></tr>`).join("");
  document.getElementById("docTable").innerHTML = `<tr><th>Dokument</th><th>Typ</th><th>Datum</th><th></th></tr>`+DOCS.map(d=>`<tr><td>${d.name}</td><td>${d.type}</td><td>${d.date}</td><td><a class="btn-link" href="#" onclick="event.preventDefault();window.__toast&&window.__toast('Download gestartet')">Herunterladen</a></td></tr>`).join("");
  renderTrackSteps();
}
function renderTrackSteps(){
  const steps=[
    {t:"Bestellung bestätigt",d:"14.06.2026",state:"done"},
    {t:"Abfüllung & Verpackung",d:"Tunesien",state:"done"},
    {t:"Verschifft · Hafen Sousse",d:"17.06.2026",state:"done"},
    {t:"Mittelmeer-Transit",d:"unterwegs",state:"current"},
    {t:"Zustellung Trier",d:"ETA 23.06.2026",state:""}
  ];
  document.getElementById("trackSteps").innerHTML = steps.map(s=>`<div class="track-step ${s.state}"><span class="dot"></span><div class="ts-t">${s.t}</div><div class="ts-d">${s.d}</div></div>`).join("");
}

// ============ MAP SVG (Tunesien → Mittelmeer → Deutschland) ============
function mapSVG(progress){
  // progress 0..1 of ship along route
  const TN={x:430,y:330}, DE={x:470,y:120};
  const mid={x:380,y:230};
  // bezier point at progress
  function bez(t){const x=(1-t)*(1-t)*TN.x+2*(1-t)*t*mid.x+t*t*DE.x;const y=(1-t)*(1-t)*TN.y+2*(1-t)*t*mid.y+t*t*DE.y;return{x,y};}
  const ship=bez(progress);
  return `<svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
    <defs><linearGradient id="sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#16273d"/><stop offset="1" stop-color="#0c1623"/></linearGradient></defs>
    <rect width="800" height="400" fill="url(#sea)"/>
    <!-- grid dots -->
    <g fill="rgba(212,175,82,.06)">${Array.from({length:40}).map((_,i)=>`<circle cx="${(i%10)*80+20}" cy="${Math.floor(i/10)*100+30}" r="1.5"/>`).join("")}</g>
    <!-- Europe / Germany landmass (stylised) -->
    <path d="M340 60 Q420 40 520 70 Q580 90 560 150 Q540 190 470 200 Q400 200 360 160 Q330 110 340 60Z" fill="#23303f" stroke="rgba(212,175,82,.25)" stroke-width="1"/>
    <text x="470" y="120" fill="rgba(246,241,228,.5)" font-size="13" font-family="serif" text-anchor="middle" letter-spacing="2">DEUTSCHLAND</text>
    <circle cx="${DE.x}" cy="${DE.y}" r="6" fill="#2a5499" stroke="#fff" stroke-width="1.5"/>
    <text x="${DE.x+12}" y="${DE.y+4}" fill="#9bbce8" font-size="11" font-family="sans-serif">Trier</text>
    <!-- Italy boot hint -->
    <path d="M430 200 Q450 240 440 270 L455 268 Q466 230 448 198Z" fill="#23303f" opacity=".7"/>
    <!-- North Africa / Tunisia -->
    <path d="M330 300 Q420 280 520 300 Q600 320 580 380 L320 390 Q300 340 330 300Z" fill="#1f2a1a" stroke="rgba(92,107,51,.4)" stroke-width="1"/>
    <text x="440" y="365" fill="rgba(246,241,228,.5)" font-size="13" font-family="serif" text-anchor="middle" letter-spacing="2">TUNESIEN</text>
    <circle cx="${TN.x}" cy="${TN.y}" r="6" fill="#5C6B33" stroke="#fff" stroke-width="1.5"/>
    <text x="${TN.x+12}" y="${TN.y+4}" fill="#aebf8a" font-size="11" font-family="sans-serif">Tunisia</text>
    <!-- Mediterranean label -->
    <text x="370" y="255" fill="rgba(155,188,232,.45)" font-size="11" font-family="serif" font-style="italic" text-anchor="middle">Mittelmeer</text>
    <!-- route -->
    <path d="M${TN.x} ${TN.y} Q${mid.x} ${mid.y} ${DE.x} ${DE.y}" stroke="rgba(212,175,82,.35)" stroke-width="2" stroke-dasharray="6 6" fill="none"/>
    <path d="M${TN.x} ${TN.y} Q${mid.x} ${mid.y} ${ship.x} ${ship.y}" stroke="var(--gold-bright,#D4AF52)" stroke-width="2.5" fill="none"/>
    <!-- ship -->
    <g transform="translate(${ship.x},${ship.y})">
      <circle r="13" fill="rgba(212,175,82,.18)"><animate attributeName="r" values="11;17;11" dur="2.5s" repeatCount="indefinite"/></circle>
      <circle r="7" fill="#D4AF52" stroke="#fff" stroke-width="1.5"/>
      <text y="4" font-size="9" text-anchor="middle">🚢</text>
    </g>
  </svg>`;
}
function europePresenceSVG(){
  return `<svg viewBox="0 0 920 560" preserveAspectRatio="xMidYMid meet">
    <defs>
      <linearGradient id="euSea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#182336"/><stop offset="1" stop-color="#101826"/></linearGradient>
      <linearGradient id="euLand" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d8d4c8"/><stop offset="1" stop-color="#a9a28f"/></linearGradient>
      <linearGradient id="goldPin" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f1df9c"/><stop offset="1" stop-color="#b8892b"/></linearGradient>
      <filter id="glow"><feGaussianBlur stdDeviation="8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    <rect width="920" height="560" rx="12" fill="url(#euSea)"/>
    <g fill="rgba(212,175,82,.06)">${Array.from({length:66}).map((_,i)=>`<circle cx="${(i%11)*86+30}" cy="${Math.floor(i/11)*92+28}" r="1.6"/>`).join('')}</g>
    <g fill="url(#euLand)" stroke="rgba(255,255,255,.18)" stroke-width="1.2">
      <path d="M210 145 C250 110 318 96 382 102 C448 108 504 128 556 160 C594 184 612 210 612 240 C612 270 598 294 571 312 C542 330 500 338 460 342 C427 345 396 354 366 370 C334 388 300 392 270 381 C244 371 227 350 215 328 C204 307 186 293 164 279 C143 266 126 245 126 220 C126 196 145 177 170 170 C186 165 198 158 210 145 Z"/>
      <path d="M496 326 C520 338 535 355 544 373 C551 388 552 407 546 425 C539 446 520 463 498 470 C478 476 462 466 454 450 C446 435 444 416 447 397 C451 373 464 350 496 326 Z" opacity=".95"/>
      <path d="M125 188 C109 177 95 174 78 178 C64 181 52 192 49 206 C46 221 49 239 61 250 C72 260 88 265 104 262 C119 259 131 249 138 237 C145 225 145 206 139 195 C136 191 131 189 125 188 Z" opacity=".96"/>
      <path d="M598 154 C626 143 655 144 679 153 C698 160 715 178 719 198 C723 217 715 236 699 251 C681 268 657 276 632 273 C612 270 598 259 590 244 C583 229 580 212 583 196 C586 180 590 162 598 154 Z" opacity=".95"/>
    </g>
    <g fill="rgba(212,175,82,.08)">
      <circle cx="504" cy="170" r="74"/>
      <circle cx="458" cy="256" r="56"/>
      <circle cx="432" cy="205" r="40"/>
      <circle cx="585" cy="355" r="28"/>
    </g>
    <text x="462" y="84" fill="rgba(246,241,228,.78)" font-size="24" font-family="Cinzel,serif" text-anchor="middle" letter-spacing="4">EUROPA</text>
    <text x="462" y="108" fill="rgba(246,241,228,.42)" font-size="10" font-family="Jost,sans-serif" text-anchor="middle" letter-spacing="3">SELECTED LAPERLA PRESENCE</text>

    <g filter="url(#glow)">
      <circle cx="474" cy="210" r="8.5" fill="url(#goldPin)" stroke="#fff3cf" stroke-width="1.5"/>
      <circle cx="474" cy="210" r="22" fill="rgba(212,175,82,.14)"/>
      <text x="489" y="204" fill="#f5df9a" font-size="12" font-family="Jost,sans-serif" font-weight="600">DEUTSCHLAND</text>
      <text x="489" y="220" fill="rgba(246,241,228,.68)" font-size="10" font-family="Jost,sans-serif">Kernmarkt</text>

      <circle cx="468" cy="248" r="6.5" fill="url(#goldPin)" stroke="#fff3cf" stroke-width="1.4"/>
      <circle cx="468" cy="248" r="18" fill="rgba(212,175,82,.12)"/>
      <text x="482" y="243" fill="#f5df9a" font-size="11.5" font-family="Jost,sans-serif" font-weight="600">SCHWEIZ</text>
      <text x="482" y="257" fill="rgba(246,241,228,.68)" font-size="9.5" font-family="Jost,sans-serif">Premium Markt</text>

      <circle cx="492" cy="190" r="6.5" fill="#5eb7ff" stroke="#e7f6ff" stroke-width="1.4"/>
      <circle cx="492" cy="190" r="16" fill="rgba(94,183,255,.14)"/>
      <text x="507" y="186" fill="#9fd8ff" font-size="11.5" font-family="Jost,sans-serif" font-weight="600">BERLIN</text>
      <text x="507" y="200" fill="rgba(231,246,255,.66)" font-size="9.5" font-family="Jost,sans-serif">Edition & Projekte</text>

      <circle cx="585" cy="355" r="6.5" fill="url(#goldPin)" stroke="#fff3cf" stroke-width="1.4"/>
      <circle cx="585" cy="355" r="18" fill="rgba(212,175,82,.12)"/>
      <text x="600" y="350" fill="#f5df9a" font-size="11.5" font-family="Jost,sans-serif" font-weight="600">MONACO</text>
      <text x="600" y="364" fill="rgba(246,241,228,.68)" font-size="9.5" font-family="Jost,sans-serif">Luxury Positioning</text>
    </g>
  </svg>`;
}

function renderMaps(){
  // logistics map + distributor cards
  const trackMapEl=document.getElementById("trackMap");
  if(trackMapEl) trackMapEl.innerHTML = mapSVG(0.6);
  const distCardsEl=document.getElementById("distCards");
  if(distCardsEl) distCardsEl.innerHTML = DISTRIBUTORS.map(d=>`
    <div class="dist-card"><h4>${d.name}</h4><div class="role">${d.role}</div>${d.rows.map(r=>`<div class="row"><span class="ic">${r[0]}</span><span>${r[1]}</span></div>`).join("")}</div>`).join("")
    + `<div class="dist-card territory-card"><h4 style="color:var(--gold-bright)">Vertriebsland angeben</h4><div class="role">Wo möchten Sie Laperla vertreiben?</div><div class="row"><span class="ic">⬦</span><span>Wählen Sie ein oder mehrere Länder aus. Die Auswahl wird sichtbar golden markiert und direkt in die B2B-Anfrage übernommen.</span></div><form class="territory-form" id="territoryInterestForm"><div class="country-helper">Länder auswählen:</div><div class="country-choice-grid" id="territoryCountries"><label class="country-choice" for="territory-country-0"><input type="checkbox" id="territory-country-0" name="countries" value="Deutschland"><span>Deutschland</span></label><label class="country-choice" for="territory-country-1"><input type="checkbox" id="territory-country-1" name="countries" value="Schweiz"><span>Schweiz</span></label><label class="country-choice" for="territory-country-2"><input type="checkbox" id="territory-country-2" name="countries" value="Österreich"><span>Österreich</span></label><label class="country-choice" for="territory-country-3"><input type="checkbox" id="territory-country-3" name="countries" value="Monaco"><span>Monaco</span></label><label class="country-choice" for="territory-country-4"><input type="checkbox" id="territory-country-4" name="countries" value="Frankreich"><span>Frankreich</span></label><label class="country-choice" for="territory-country-5"><input type="checkbox" id="territory-country-5" name="countries" value="Italien"><span>Italien</span></label><label class="country-choice" for="territory-country-6"><input type="checkbox" id="territory-country-6" name="countries" value="Spanien"><span>Spanien</span></label><label class="country-choice" for="territory-country-7"><input type="checkbox" id="territory-country-7" name="countries" value="Belgien"><span>Belgien</span></label><label class="country-choice" for="territory-country-8"><input type="checkbox" id="territory-country-8" name="countries" value="Niederlande"><span>Niederlande</span></label><label class="country-choice" for="territory-country-9"><input type="checkbox" id="territory-country-9" name="countries" value="Luxemburg"><span>Luxemburg</span></label><label class="country-choice" for="territory-country-10"><input type="checkbox" id="territory-country-10" name="countries" value="Vereinigtes Königreich"><span>Vereinigtes Königreich</span></label></div><div class="multi-note">Mehrfachauswahl möglich — ausgewählte Länder werden golden markiert.</div><input type="text" name="region" placeholder="Stadt / Region (optional)"><select name="exclusivity" required><option value="">Geplante Exklusivität auswählen *</option><option>Exklusiver Vertrieb pro Land gewünscht</option><option>Exklusiver Vertrieb nur für Region / Stadt</option><option>Nicht exklusiv / offener Vertrieb</option><option>Noch offen / verhandelbar</option></select><label style="display:flex;gap:8px;align-items:flex-start;font-size:.78rem;line-height:1.45;color:rgba(246,241,228,.74)"><input type="checkbox" name="exclusiveConsent" style="margin-top:4px;accent-color:#d4af52"><span>Exklusivrechte werden erst nach schriftlicher Zustimmung von Laperla gültig.</span></label><button class="btn btn-gold btn-sm" type="submit">Länder speichern & Anfrage starten</button></form><div class="territory-note">Nach dem Speichern gelangen Sie direkt zur Anfrage für den Geschäftskundenbereich.</div></div>`;
}

// ============ ROUTING ============
const SECTION_SCROLL={};
const ROUTE_PAGES={
  home:"page-home",
  editions:"page-editions",
  shop:"page-shop",
  awards:"page-awards",
  gallery:"page-gallery",
  wholesale:"page-wholesale",
  "wholesale-gate":"page-wholesale-code",
  origin:"page-origin",
  discover:"page-discover",
  berlin:"page-berlin-edition",
  europe:"page-europe",
  distributors:"page-distributors",
  legal:"page-legal",
  about:"page-about",
  mission:"page-mission",
  story:"page-story",
  account:"page-account",
  "b2b-login":"page-account",
  dashboard:"page-dashboard",
  "b2b-shop":"page-wholesale",
  "b2b-container":"page-wholesale",
  "b2b-pallet":"page-wholesale",
  "b2b-partners":"page-distributors",
  "b2b-approval":"page-b2b-approval"
};
const ROUTE_ALIASES={
  "berlin-edition":"berlin",
  "land-entdecken":"discover",
  "herkunft":"origin",
  "grosshandel":"wholesale",
  "großhandel":"wholesale",
  "kollektion":"shop"
};
function normalizeRouteTarget(target){
  target=(target||"home").toString().trim();
  target=ROUTE_ALIASES[target]||target;
  return ROUTE_PAGES[target] ? target : "home";
}
function routeHash(target,legalTarget){
  target=normalizeRouteTarget(target);
  return legalTarget ? "#"+target+"/"+legalTarget : "#"+target;
}
function readRouteFromLocation(){
  let raw=(window.location.hash||"").replace(/^#/,"").trim();
  if(!raw) return {target:"home",legalTarget:null};
  try{raw=decodeURIComponent(raw);}catch(e){}
  const parts=raw.split("/").filter(Boolean);
  return {
    target:normalizeRouteTarget(parts[0]||"home"),
    legalTarget:parts[1]||null
  };
}
function syncBrowserHistory(target,opts){
  opts=opts||{};
  if(opts.skipHistory) return;
  if(!window.history || !history.pushState) return;
  const legalTarget=opts.legalTarget||null;
  const nextHash=routeHash(target,legalTarget);
  const state={target:normalizeRouteTarget(target),legalTarget};
  if(opts.replace){
    history.replaceState(state,"",nextHash);
  }else if(window.location.hash!==nextHash){
    history.pushState(state,"",nextHash);
  }
}
function go(target,opts){
  opts=opts||{};
  target=normalizeRouteTarget(target);

  // Alle Geschäftskunden-Bereiche sind geschützt: ohne Geheimcode kein direkter Zugang.
  const protectedB2BTargets={
    wholesale:{target:"wholesale",label:"Großhändler / B2B Shop"},
    distributors:{target:"distributors",label:"Vertriebspartner"},
    "b2b-shop":{target:"wholesale",label:"B2B Shop"},
    "b2b-container":{target:"wholesale",scrollTarget:"configurator",label:"Container konfigurieren"},
    "b2b-pallet":{target:"wholesale",scrollTarget:"pallet-configurator",label:"Paletten konfigurieren"},
    account:{target:"account",label:"Konto anmelden / registrieren"},
    "b2b-login":{target:"account",label:"Konto anmelden / registrieren"}
  };

  let protectedB2B=protectedB2BTargets[target]||null;
  if(target==="wholesale" && opts.scrollTarget==="configurator"){
    protectedB2B={target:"wholesale",scrollTarget:"configurator",label:"Container konfigurieren"};
  }
  if(target==="wholesale" && opts.scrollTarget==="pallet-configurator"){
    protectedB2B={target:"wholesale",scrollTarget:"pallet-configurator",label:"Paletten konfigurieren"};
  }

  if(protectedB2B && !opts.bypassCode){
    try{sessionStorage.setItem("laperlaPendingB2BTargetV85",JSON.stringify(protectedB2B));}catch(e){}
    if(window.__setB2BGateLabel)window.__setB2BGateLabel(protectedB2B.label);
    target="wholesale-gate";
    opts.scrollTarget=null;
  }else if(protectedB2B && opts.bypassCode){
    target=protectedB2B.target;
    if(protectedB2B.scrollTarget) opts.scrollTarget=protectedB2B.scrollTarget;
  }

  // Account/Dashboard bleibt weiterhin Login-Bereich. Vertriebspartner läuft jetzt über Code-Zugang.
  const b2bGated=["dashboard"];
  dealerApproved=(localStorage.getItem("laperlaDealerApproved")==="1"); window.dealerApproved=dealerApproved;
  if(b2bGated.includes(target) && !loggedIn){
    if(window.__toast && !opts.fromPop)window.__toast("Bitte melden Sie sich als Geschäftskunde an");
    if(window.setCustType)window.setCustType("business");
    target="account";
  }else if(b2bGated.includes(target) && !dealerApproved){
    if(window.__toast && !opts.fromPop)window.__toast("Zugang erst nach Zustimmung von Laperla");
    target="b2b-approval";
  }

  const pages={...ROUTE_PAGES,account:loggedIn?"page-dashboard":"page-account","b2b-login":loggedIn?"page-dashboard":"page-account",dashboard:"page-dashboard"};
  let pid=pages[target]||"page-home";
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  const page=document.getElementById(pid);
  if(page)page.classList.add("active");

  const gate=document.getElementById("gate");
  if(gate)gate.classList.add("hidden");

  // light header on dark-hero pages (home scene + wholesale & distributors)
  const darkPages=["wholesale","wholesale-gate","distributors","berlin"];
  const isDark = target==="home" || darkPages.includes(target);
  const header=document.getElementById("header");
  if(header)header.classList.toggle("on-dark", isDark);

  window.__currentRouteTarget=target;
  syncBrowserHistory(target,{...opts,legalTarget:opts.legalTarget||null});

  if(opts.legalTarget && typeof window.__showLegal==="function"){
    setTimeout(()=>window.__showLegal(opts.legalTarget),0);
  }

  if(opts.scrollTarget){
    setTimeout(()=>{
      const el=document.getElementById(opts.scrollTarget);
      if(el){
        const y=el.getBoundingClientRect().top + window.pageYOffset - 96;
        window.scrollTo({top:Math.max(0,y),behavior:"smooth"});
      }
    },320);
  }else if(!opts.keepScroll){
    window.scrollTo({top:0,behavior:"instant"});
  }
  if(window.closeMenu)window.closeMenu();
}
function showStartGate(){
  const gate=document.getElementById("gate");
  if(gate)gate.classList.remove("hidden");
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  const home=document.getElementById("page-home");
  if(home)home.classList.add("active");
  const header=document.getElementById("header");
  if(header)header.classList.remove("on-dark","scrolled");
  window.__currentRouteTarget="gate";
  window.scrollTo({top:0,behavior:"instant"});
  if(window.closeMenu)window.closeMenu();
}
function initBrowserHistory(){
  if(window.__laperlaHistoryReady) return;
  window.__laperlaHistoryReady=true;
  if("scrollRestoration" in history) history.scrollRestoration="manual";

  const hasHash=!!window.location.hash;
  const initial=hasHash ? readRouteFromLocation() : {target:"gate",legalTarget:null};

  // Wichtig: Beim ersten Öffnen KEIN #home erzwingen.
  // So erscheint zuerst Logo + Auswahl Privatkunde / Großhandel.
  history.replaceState(initial,"", hasHash ? window.location.href : (window.location.pathname + window.location.search));

  if(hasHash){
    go(initial.target,{skipHistory:true,fromPop:true,legalTarget:initial.legalTarget});
  }else{
    showStartGate();
  }

  window.addEventListener("popstate",function(e){
    const state=e.state || (window.location.hash ? readRouteFromLocation() : {target:"gate"});
    if(!state.target || state.target==="gate"){
      showStartGate();
      return;
    }
    go(state.target||"home",{skipHistory:true,fromPop:true,legalTarget:state.legalTarget||null});
  });

  // Delegierte Navigation für später dynamisch eingefügte Links/Buttons.
  document.addEventListener("click",function(e){
    const el=e.target.closest("[data-nav]");
    if(!el || e.defaultPrevented) return;
    const href=el.getAttribute("href")||"";
    if(href && href!=="#" && !href.startsWith("#")) return;
    e.preventDefault();
    go(el.dataset.nav,{
      legalTarget:el.dataset.legaltarget||null,
      scrollTarget:el.dataset.scroll||null
    });
  });
}

// ============ CHECKOUT · GASTBESTELLUNG ============
function checkoutItems(){
  if(checkoutMode==="b2b"){
    return B2B.filter(b=>(configState[b.id]||0)>0).map(b=>({id:b.id,name:b.name,vol:b.fmt,price:b.price,qty:configState[b.id],img:b.img||IMG.shop,images:b.images||null}));
  }
  return cart.map(x=>({id:x.id,name:x.name,vol:x.vol,price:x.price,qty:x.qty,img:x.img||IMG.shop,images:x.images||null}));
}
function checkoutSubtotal(){
  if(checkoutMode==="b2b") return Math.round(window._configTotal||0);
  return cartTotal();
}
function checkoutShippingCost(){
  const method=document.getElementById("deliveryMethod")?.value||"standard";
  if(checkoutMode==="b2b" || method==="pickup" || method==="individual") return 0;
  return checkoutSubtotal()>=90?0:6.90;
}
function checkoutShippingLabel(){
  const method=document.getElementById("deliveryMethod")?.value||"standard";
  if(checkoutMode==="b2b" || method==="individual") return "Wird individuell geprüft";
  if(method==="pickup") return "0,00 € · Abholung";
  return checkoutShippingCost()===0?"Kostenfrei":"6,90 €";
}
function renderCheckoutProductFocusV116(){
  const host=document.getElementById("checkoutProductFocusV116");
  if(!host)return;
  const items=checkoutItems();
  const x=items[0];
  if(!x){host.innerHTML='<div class="checkout-product-focus-copy-v116"><b>Keine Produkte</b></div>';return;}
  const images=x.images?.length?x.images:[x.img||IMG.shop];
  const more=items.length>1?`<div class="checkout-product-focus-more-v116">+ ${items.length-1} weitere${items.length-1===1?'s Produkt':' Produkte'}</div>`:'';
  host.innerHTML=`<div class="checkout-product-focus-image-v116${images.length>1?' multi':''}">${images.map(src=>`<img src="${src}" alt="${x.name}">`).join('')}</div><div class="checkout-product-focus-copy-v116"><b>${x.name}</b><small>${x.qty} × ${x.vol||'Produkt'}</small><strong>${fmt(x.price*x.qty)}</strong>${more}</div>`;
}
function renderCheckoutProductStrip(){
  const host=document.getElementById("checkoutProductStrip");
  if(!host)return;
  const items=checkoutItems();
  host.innerHTML=items.map(x=>`<div class="checkout-product-card-v115"><span class="checkout-product-photo-v115">${x.images?.length?x.images.map(src=>`<img src="${src}" alt="${x.name}">`).join(""):`<img src="${x.img||IMG.shop}" alt="${x.name}">`}</span><span class="checkout-product-copy-v115"><b>${x.name}</b><small>${x.qty} × ${x.vol||"Produkt"}</small><strong>${fmt(x.price*x.qty)}</strong></span></div>`).join("")||`<div class="checkout-product-card-v115"><span class="checkout-product-copy-v115"><b>Keine Produkte</b></span></div>`;
  renderCheckoutProductFocusV116();
}
function renderCheckoutSummary(){
  renderCheckoutProductStrip();
  const items=checkoutItems();
  const host=document.getElementById("checkoutOrderItems");
  if(host) host.innerHTML=items.map(x=>`<div class="checkout-summary-item-v108"><span class="checkout-summary-photo-v114">${x.images?.length?x.images.map(src=>`<img src="${src}" alt="${x.name}">`).join(""):`<img src="${x.img||IMG.shop}" alt="${x.name}">`}</span><span><b>${x.name}</b><small>${x.vol||""} · ${fmt(x.price)} je Stück</small></span><span class="qty">${x.qty} ×</span><span class="price">${fmt(x.price*x.qty)}</span></div>`).join("")||`<div class="checkout-summary-item-v108"><span>Keine Artikel gewählt</span></div>`;
  const subtotal=checkoutSubtotal(), shipping=checkoutShippingCost();
  document.getElementById("checkoutSubtotal").textContent=fmt(subtotal);
  document.getElementById("checkoutShipping").textContent=checkoutShippingLabel();
  document.getElementById("checkoutTotal").textContent=fmt(subtotal+shipping);
}
function setCheckoutStep(step){
  checkoutStep=Math.max(1,Math.min(3,step));
  document.querySelectorAll("[data-checkout-step]").forEach(p=>p.classList.toggle("active",Number(p.dataset.checkoutStep)===checkoutStep));
  document.querySelectorAll("[data-step-indicator]").forEach(i=>{const n=Number(i.dataset.stepIndicator);i.classList.toggle("active",n===checkoutStep);i.classList.toggle("done",n<checkoutStep);});
  document.getElementById("checkoutBack").hidden=checkoutStep===1;
  document.getElementById("checkoutNext").hidden=checkoutStep===3;
  document.getElementById("placeOrder").hidden=checkoutStep!==3;
  document.getElementById("checkoutNext").textContent=checkoutStep===1?"Weiter zur Adresse":"Weiter zur Übersicht";
  if(checkoutStep===3) renderCheckoutSummary();
  document.querySelector(".checkout-main-v108")?.scrollTo({top:0,behavior:"smooth"});
}
function showCheckoutBusinessFields(){
  const business=document.getElementById("customerType").value==="business" || checkoutMode==="b2b";
  document.getElementById("companyField").classList.toggle("is-hidden",!business);
  document.getElementById("vatField").classList.toggle("is-hidden",!business);
  document.getElementById("customerCompany").required=business;
}
function toggleShippingFields(){
  const same=document.getElementById("sameShipping").checked;
  const fields=document.getElementById("shippingFields");
  fields.style.display=same?"none":"grid";
  ["shippingStreet","shippingZip","shippingCity"].forEach(id=>document.getElementById(id).required=!same);
}
function invalidField(id,message){
  const el=document.getElementById(id); if(!el)return false;
  if(!String(el.value||"").trim()){el.focus();toast(message);return true;}
  if(id==="customerEmail" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim())){el.focus();toast("Bitte geben Sie eine gültige E-Mail-Adresse ein");return true;}
  return false;
}
function validateCheckoutStep(step){
  if(step===1){
    if(invalidField("customerFirst","Bitte Vornamen eingeben"))return false;
    if(invalidField("customerLast","Bitte Nachnamen eingeben"))return false;
    if(invalidField("customerEmail","Bitte E-Mail-Adresse eingeben"))return false;
    if(invalidField("customerPhone","Bitte Telefonnummer eingeben"))return false;
    if((document.getElementById("customerType").value==="business"||checkoutMode==="b2b")&&invalidField("customerCompany","Bitte Firmennamen eingeben"))return false;
  }
  if(step===2){
    if(invalidField("billingStreet","Bitte Rechnungsadresse eingeben"))return false;
    if(invalidField("billingZip","Bitte PLZ eingeben"))return false;
    if(invalidField("billingCity","Bitte Ort eingeben"))return false;
    if(!document.getElementById("sameShipping").checked){
      if(invalidField("shippingStreet","Bitte Lieferadresse eingeben"))return false;
      if(invalidField("shippingZip","Bitte Liefer-PLZ eingeben"))return false;
      if(invalidField("shippingCity","Bitte Lieferort eingeben"))return false;
    }
  }
  return true;
}
function generateOrderNumber(){
  const year=new Date().getFullYear(); const key=`laperlaOrderCounter_${year}`;
  let counter=parseInt(localStorage.getItem(key)||"123",10)+1;
  localStorage.setItem(key,String(counter));
  return `LP-${year}-${String(counter).padStart(5,"0")}`;
}
function checkoutAddress(prefix){
  return {street:document.getElementById(prefix+"Street").value.trim(),zip:document.getElementById(prefix+"Zip").value.trim(),city:document.getElementById(prefix+"City").value.trim(),country:document.getElementById(prefix+"Country").value};
}
function buildOrderRequest(){
  const same=document.getElementById("sameShipping").checked;
  const billing=checkoutAddress("billing");
  const subtotal=checkoutSubtotal(),shipping=checkoutShippingCost();
  return {
    orderNumber:generateOrderNumber(),
    createdAt:new Date().toISOString(),
    status:"Anfrage",
    mode:checkoutMode,
    customer:{type:document.getElementById("customerType").value,firstName:document.getElementById("customerFirst").value.trim(),lastName:document.getElementById("customerLast").value.trim(),email:document.getElementById("customerEmail").value.trim(),phone:document.getElementById("customerPhone").value.trim(),company:document.getElementById("customerCompany").value.trim(),vatId:document.getElementById("customerVat").value.trim()},
    billingAddress:billing,
    shippingAddress:same?billing:checkoutAddress("shipping"),
    sameShipping:same,
    deliveryMethod:document.getElementById("deliveryMethod").value,
    note:document.getElementById("orderNote").value.trim(),
    items:checkoutItems(),
    totals:{subtotal,shipping,total:subtotal+shipping,currency:"EUR",shippingLabel:checkoutShippingLabel()},
    consents:{terms:true,privacy:true,withdrawal:true},
    contractNotice:"Unverbindliche Bestellanfrage. Kaufvertrag erst mit schriftlicher Auftragsbestätigung."
  };
}
function saveOrderLocally(order){
  try{
    const orders=JSON.parse(localStorage.getItem("laperlaOrderRequests")||"[]");
    orders.unshift(order); localStorage.setItem("laperlaOrderRequests",JSON.stringify(orders.slice(0,200)));
    localStorage.setItem("laperlaLastOrderRequest",JSON.stringify(order));
    return true;
  }catch(err){console.error("Lokale Bestellsicherung fehlgeschlagen",err);return false;}
}
function orderEmailPayload(order){
  const billing=order.billingAddress||{};
  const shipping=order.shippingAddress||billing;
  const customer=order.customer||{};
  const deliveryLabels={standard:"Standardversand Deutschland",pickup:"Abholung nach Vereinbarung",individual:"Spedition / individuelle Lieferung"};
  const products=(order.items||[]).map(x=>`${x.qty} × ${x.name} (${x.vol}) – ${fmt(x.price*x.qty)}`).join("\n");
  const addressText=a=>[a.street,a.zip,a.city,a.country].filter(Boolean).join(", ");
  return {
    _subject:`Neue Laperla Bestellanfrage ${order.orderNumber}`,
    _template:"table",
    _replyto:customer.email||"",
    _captcha:"false",
    _url:(location.protocol==="file:"?"https://laperla-olive.de/bestellung":location.href),
    email:customer.email||"",
    Bestellnummer:order.orderNumber,
    Datum:new Date(order.createdAt).toLocaleString("de-DE"),
    Kunde:`${customer.firstName||""} ${customer.lastName||""}`.trim(),
    Kundentyp:customer.type==="business"?"Geschäftskunde":"Privatkunde",
    Firma:customer.company||"–",
    Umsatzsteuer_ID:customer.vatId||"–",
    Telefon:customer.phone||"–",
    Rechnungsadresse:addressText(billing)||"–",
    Lieferadresse:addressText(shipping)||addressText(billing)||"–",
    Lieferart:deliveryLabels[order.deliveryMethod]||order.deliveryMethod||"–",
    Produkte:products||"–",
    Warenwert:fmt(order.totals.subtotal),
    Versand:order.totals.shippingLabel,
    Vorlaeufige_Gesamtsumme:fmt(order.totals.total),
    Bemerkung:order.note||"–",
    Vertragsstatus:"Unverbindliche Bestellanfrage – Kaufvertrag erst mit schriftlicher Auftragsbestätigung"
  };
}
async function transmitOrder(order){
  const backendEndpoint=String(window.LAPERLA_ORDER_BACKEND_ENDPOINT||"").trim();
  const emailEndpoint=String(window.LAPERLA_ORDER_EMAIL_ENDPOINT||"").trim();

  // FormSubmit funktioniert laut Anbieter nicht zuverlässig bei direkt geöffneten file://-Dateien.
  if(!backendEndpoint && location.protocol==="file:"){
    return {
      ok:false,
      mode:"local",
      reason:"file-protocol",
      message:"Die HTML-Datei wurde direkt vom Computer geöffnet. Der E-Mail-Dienst akzeptiert Bestellungen erst über eine echte Webadresse oder einen lokalen Webserver."
    };
  }

  const controller=new AbortController();
  const timer=setTimeout(()=>controller.abort(),20000);
  try{
    if(backendEndpoint){
      const response=await fetch(backendEndpoint,{
        method:"POST",
        headers:{"Content-Type":"application/json","Accept":"application/json"},
        body:JSON.stringify(order),
        signal:controller.signal
      });
      const data=await response.json().catch(()=>({}));
      if(!response.ok)throw new Error(data.message||`Backend HTTP ${response.status}`);
      return {ok:true,mode:"backend",data};
    }

    if(!emailEndpoint)return {ok:false,mode:"local",reason:"not-configured",message:"Keine E-Mail-Schnittstelle konfiguriert."};

    const body=new URLSearchParams();
    Object.entries(orderEmailPayload(order)).forEach(([key,value])=>body.append(key,String(value??"")));

    const response=await fetch(emailEndpoint,{
      method:"POST",
      headers:{
        "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",
        "Accept":"application/json"
      },
      body:body.toString(),
      signal:controller.signal
    });

    const raw=await response.text();
    let data={};
    try{data=raw?JSON.parse(raw):{};}catch(_){data={message:raw};}
    const successValue=String(data.success??"").toLowerCase();
    const message=String(data.message||"");
    const activationRequired=/activat|confirm/i.test(message) && !/success/i.test(message);

    if(activationRequired){
      return {ok:false,mode:"activation",reason:"activation-required",message:message||"Formular muss einmal per E-Mail aktiviert werden.",data};
    }
    if(!response.ok || successValue==="false"){
      throw new Error(message||`E-Mail HTTP ${response.status}`);
    }
    return {ok:true,mode:"email",data};
  }catch(err){
    console.error("Bestellübertragung nicht erreichbar",err);
    return {ok:false,mode:"local",reason:String(err),message:err?.message||String(err)};
  }finally{
    clearTimeout(timer);
  }
}
function downloadOrderCopy(order){
  if(!order)return;
  const lines=["LAPERLA OLIVE OIL – BESTELLANFRAGE",order.orderNumber,"",`Datum: ${new Date(order.createdAt).toLocaleString("de-DE")}`,`Kunde: ${order.customer.firstName} ${order.customer.lastName}`,`E-Mail: ${order.customer.email}`,`Telefon: ${order.customer.phone}`,order.customer.company?`Firma: ${order.customer.company}`:"","",...order.items.map(x=>`${x.qty} × ${x.name} (${x.vol}) – ${fmt(x.price*x.qty)}`),"",`Warenwert: ${fmt(order.totals.subtotal)}`,`Versand: ${order.totals.shippingLabel}`,`Vorläufige Gesamtsumme: ${fmt(order.totals.total)}`,"",order.contractNotice].filter(Boolean);
  const blob=new Blob([lines.join("\n")],{type:"text/plain;charset=utf-8"}); const url=URL.createObjectURL(blob); const a=document.createElement("a");a.href=url;a.download=`${order.orderNumber}-Bestellanfrage.txt`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
}
function resetCheckoutForm(){
  document.getElementById("checkoutForm").reset();
  document.getElementById("sameShipping").checked=true;
  document.getElementById("customerType").value=checkoutMode==="b2b"?"business":"private";
  ["checkoutTerms","checkoutPrivacy","checkoutWithdrawal"].forEach(id=>document.getElementById(id).checked=false);
  toggleShippingFields();showCheckoutBusinessFields();setCheckoutStep(1);
}
function openCheckout(mode,total,title,sub){
  checkoutMode=mode||"retail";
  document.getElementById("checkoutFormView").style.display="block";
  document.getElementById("orderDoneView").style.display="none";
  document.getElementById("checkoutTitle").textContent=checkoutMode==="b2b"?"B2B-Anfrage als Gast":"Bestellung als Gast";
  document.getElementById("checkoutSub").textContent=checkoutMode==="b2b"?"Konfiguration → Firmendaten → Lieferadresse → Anfrage absenden":"Warenkorb → Kundendaten → Lieferadresse → Bestellübersicht → Bestellanfrage absenden";
  resetCheckoutForm();renderCheckoutSummary();
  const modal=document.getElementById("checkoutModal");modal.classList.add("open");modal.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";
}
function closeCheckout(){const modal=document.getElementById("checkoutModal");modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.style.overflow="";}


function applyOrderTransmissionResult(order,result,localSaved){
  const icon=document.getElementById("orderDoneIcon");
  const title=document.getElementById("orderDoneTitle");
  const msg=document.getElementById("orderDoneMsg");
  const status=document.getElementById("orderBackendStatus");
  const retry=document.getElementById("retryOrderSend");

  icon.className="check";
  retry.hidden=true;

  if(result.ok){
    icon.textContent="✓";
    title.textContent="Bestellanfrage erfolgreich übermittelt";
    msg.textContent=`Ihre Bestellanfrage wurde unter ${order.orderNumber} an Laperla übermittelt. Wir prüfen Verfügbarkeit, Lieferkosten und Gesamtpreis und melden uns unter ${order.customer.email}.`;
    status.className="order-status-v108 ok";
    status.textContent=result.mode==="backend"
      ? "Sicher übermittelt: Die Anfrage wurde an das Bestell-Backend übertragen."
      : `E-Mail bestätigt: Die vollständige Bestellanfrage wurde an ${window.LAPERLA_ORDER_RECIPIENT} übermittelt und zusätzlich auf diesem Gerät gesichert.`;
    return;
  }

  icon.textContent="!";
  retry.hidden=false;
  if(result.reason==="activation-required"){
    icon.classList.add("activation");
    title.textContent="E-Mail-Schnittstelle noch nicht aktiviert";
    msg.textContent=`Die Anfrage ${order.orderNumber} wurde lokal gesichert, aber noch nicht per E-Mail zugestellt.`;
    status.className="order-status-v108 activation";
    status.textContent=`FormSubmit hat eine Aktivierungs-E-Mail an ${window.LAPERLA_ORDER_RECIPIENT} angefordert. Bitte Posteingang und Spam prüfen, den Aktivierungslink anklicken und anschließend „E-Mail erneut senden“ wählen.`;
  }else if(result.reason==="file-protocol"){
    icon.classList.add("error");
    title.textContent="E-Mail wurde nicht versendet";
    msg.textContent=`Die Anfrage ${order.orderNumber} wurde nur lokal auf diesem Gerät gesichert.`;
    status.className="order-status-v108 error";
    status.textContent="Diese Datei wurde direkt als HTML-Datei geöffnet. Für echten E-Mail-Versand muss die Website über https://laperla-olive.de oder einen lokalen Webserver geöffnet werden. Es wurde keine E-Mail an info@aniso-olive.de gesendet.";
  }else{
    icon.classList.add("error");
    title.textContent="E-Mail konnte nicht versendet werden";
    msg.textContent=`Die Anfrage ${order.orderNumber} wurde ${localSaved?"lokal gesichert":"nicht gespeichert"}.`;
    status.className="order-status-v108 error";
    status.textContent=`Die Übermittlung an ${window.LAPERLA_ORDER_RECIPIENT} ist fehlgeschlagen. ${result.message||"Bitte Internetverbindung und E-Mail-Schnittstelle prüfen."}`;
  }
}

// ============ INIT ============
// ============ I18N / SPRACHEN ============
const I18N={"de": {"nav_home": "Markenwelt", "nav_shop": "Shop · Kollektion", "nav_awards": "Auszeichnungen", "nav_gallery": "Galerie", "nav_wholesale": "Großhandel · B2B-Shop", "nav_config": "Container konfigurieren", "nav_commission": "Provisionsmodell", "nav_dist": "Vertriebspartner", "nav_account": "Anmelden / Registrieren", "nav_dashboard": "Mein Händler-Dashboard", "nav_logout": "Abmelden", "grp_discover": "Entdecken", "grp_business": "Geschäftskunden", "grp_account": "Konto", "grp_service": "Service", "acct": "⬦ Konto", "acct_in": "⬦ Mein Konto", "hero_desc": "Geschichte und Gesundheit in jedem Tropfen. Kaltgepresst aus uralten Chemlali-Bäumen der Haine Tunesiens, seit Generationen. Prämiert auf drei Kontinenten.", "hero_cta1": "Kollektion entdecken", "hero_cta2": "Für Unternehmen", "offers_ey": "Premium Olivenöl", "offers_h": "Édition Prestige — Kuratierte Sets", "purity_lead_pre": "Säuregehalt unter", "cta_shop": "Zum Shop", "cta_ws": "Großhandel", "add_cart": "In den Warenkorb", "incl_vat": "inkl. MwSt.", "unavail": "Zurzeit nicht verfügbar", "not_orderable": "Nicht bestellbar", "cat_glass": "Glasflasche", "cat_tin": "Metalldose", "cat_gift": "Geschenkedition", "menu_brand": "Marke", "menu_quality": "Qualität & Auszeichnungen", "lnk_story": "Story", "lnk_about": "Über uns", "lnk_mission": "Mission", "lnk_origin": "Herkunft · Tunesien", "lnk_discover": "Tunesien entdecken", "lnk_collection": "Kollektion", "lnk_offers": "Angebote", "lnk_certified": "Zertifizierte Reinheit", "lnk_certs": "Zertifikate & Awards", "lnk_intl": "Internationale Auszeichnungen", "lnk_ws": "Großhändler", "lnk_dist": "Vertriebspartner", "lnk_pallet": "Paletten konfigurieren", "lnk_b2bshop": "B2B Shop", "w_products": "Produkte", "acct_sub": "Code-Zugang · Login · Registrierung · Freigabe", "logout_sub": "Sitzung beenden", "hs_ey": "Zembra la Romaine · Tunesien", "hs_title_a": "Wo alles begann — ", "hs_title_b": "und nichts vergessen wurde", "hs_lead": "Zwischen felsigem Boden und Meeresluft wachsen Olivenbäume, die älter sind als jede Marke. Aus ihren Früchten entsteht Laperla Vestige — ein Öl, das Herkunft nicht behauptet, sondern beweist.", "hs_text": "Jede Ernte folgt dem Rhythmus der Natur: von Hand gepflückt, innerhalb weniger Stunden kalt extrahiert und ungefiltert in seiner reinsten Form bewahrt. Kein Kompromiss, keine Abkürzung — nur ehrliches, sauberes Öl mit vollständiger Rückverfolgbarkeit bis zum Baum.", "hs_f1": "Sortenrein & ungefiltert aus einer Herkunft", "hs_f2": "Von der Ernte bis zur Kaltextraktion", "hs_f3": "Zertifiziert & international goldprämiert", "hs_bio": "Bio", "menu_brand_sub": "Story · Über uns · Mission · Herkunft · Tunesien", "menu_collection_sub": "Produkte · Berlin Edition · Angebote", "menu_quality_sub": "Ultra Purity · Zertifikate & Awards", "menu_b2b_sub": "Großhändler · Vertriebspartner · Container", "w_all": "Alle", "shop_h": "Die Kollektion", "shop_sub": "Entdecken Sie die Édition Prestige in Glasflaschen, Metalldosen und ausgewählten Geschenkformaten.", "w_details": "Details ansehen", "lnk_editions": "Editionen", "lnk_berlin": "Berlin Edition"}, "en": {"nav_home": "Brand World", "nav_shop": "Shop · Collection", "nav_awards": "Awards", "nav_gallery": "Gallery", "nav_wholesale": "Wholesale · B2B Shop", "nav_config": "Configure Container", "nav_commission": "Commission Model", "nav_dist": "Distribution Partners", "nav_account": "Sign in / Register", "nav_dashboard": "My Dealer Dashboard", "nav_logout": "Sign out", "grp_discover": "Discover", "grp_business": "Business", "grp_account": "Account", "grp_service": "Service", "acct": "⬦ Account", "acct_in": "⬦ My Account", "hero_desc": "History and health in every drop. Cold-pressed from ancient Chemlali trees in the groves of Tunisia, for generations. Awarded across three continents.", "hero_cta1": "Discover the Collection", "hero_cta2": "For Business", "offers_ey": "Premium Olive Oil", "offers_h": "Édition Prestige — Curated Sets", "purity_lead_pre": "Acidity below", "cta_shop": "To the Shop", "cta_ws": "Wholesale", "add_cart": "Add to Cart", "incl_vat": "incl. VAT", "unavail": "Currently unavailable", "not_orderable": "Not orderable", "cat_glass": "Glass Bottle", "cat_tin": "Metal Tin", "cat_gift": "Gift Edition", "menu_brand": "Brand", "menu_quality": "Quality & Awards", "lnk_story": "Story", "lnk_about": "About us", "lnk_mission": "Mission", "lnk_origin": "Origin · Tunisia", "lnk_discover": "Discover Tunisia", "lnk_collection": "Collection", "lnk_offers": "Offers", "lnk_certified": "Certified Purity", "lnk_certs": "Certificates & Awards", "lnk_intl": "International Awards", "lnk_ws": "Wholesalers", "lnk_dist": "Distribution Partners", "lnk_pallet": "Configure Pallets", "lnk_b2bshop": "B2B Shop", "w_products": "Products", "acct_sub": "Code access · Login · Registration · Approval", "logout_sub": "End session", "hs_ey": "Zembra la Romaine · Tunisia", "hs_title_a": "Where it all began — ", "hs_title_b": "and nothing was forgotten", "hs_lead": "Between rocky soil and sea air grow olive trees older than any brand. From their fruit comes Laperla Vestige — an oil that doesn't claim its origin, it proves it.", "hs_text": "Every harvest follows nature's rhythm: hand-picked, cold-extracted within hours and preserved unfiltered in its purest form. No compromise, no shortcuts — just honest, clean oil with full traceability back to the tree.", "hs_f1": "Single-variety & unfiltered from one origin", "hs_f2": "From harvest to cold extraction", "hs_f3": "Certified & awarded gold worldwide", "hs_bio": "Organic", "menu_brand_sub": "Story · About us · Mission · Origin · Tunisia", "menu_collection_sub": "Products · Berlin Edition · Offers", "menu_quality_sub": "Ultra Purity · Certificates & Awards", "menu_b2b_sub": "Wholesalers · Distribution Partners · Container", "w_all": "All", "shop_h": "The Collection", "shop_sub": "Discover the Édition Prestige in glass bottles, metal tins and selected gift formats.", "w_details": "View details", "lnk_editions": "Editions", "lnk_berlin": "Berlin Edition"}, "fr": {"nav_home": "Univers de la marque", "nav_shop": "Boutique · Collection", "nav_awards": "Distinctions", "nav_gallery": "Galerie", "nav_wholesale": "Gros · Boutique B2B", "nav_config": "Configurer le conteneur", "nav_commission": "Modèle de commission", "nav_dist": "Partenaires de distribution", "nav_account": "Se connecter / S'inscrire", "nav_dashboard": "Mon tableau de bord", "nav_logout": "Se déconnecter", "grp_discover": "Découvrir", "grp_business": "Professionnels", "grp_account": "Compte", "grp_service": "Service", "acct": "⬦ Compte", "acct_in": "⬦ Mon compte", "hero_desc": "De l'histoire et de la santé dans chaque goutte. Pressée à froid à partir d'oliviers Chemlali centenaires des oliveraies de Tunisie, depuis des générations. Primée sur trois continents.", "hero_cta1": "Découvrir la collection", "hero_cta2": "Pour les entreprises", "offers_ey": "Huile d'Olive Premium", "offers_h": "Édition Prestige — Coffrets sélectionnés", "purity_lead_pre": "Acidité inférieure à", "cta_shop": "Vers la boutique", "cta_ws": "Gros", "add_cart": "Ajouter au panier", "incl_vat": "TVA incluse", "unavail": "Momentanément indisponible", "not_orderable": "Commande impossible", "cat_glass": "Bouteille en verre", "cat_tin": "Bidon métallique", "cat_gift": "Édition cadeau", "menu_brand": "Marque", "menu_quality": "Qualité & Distinctions", "lnk_story": "Histoire", "lnk_about": "À propos", "lnk_mission": "Mission", "lnk_origin": "Origine · Tunisie", "lnk_discover": "Découvrir la Tunisie", "lnk_collection": "Collection", "lnk_offers": "Offres", "lnk_certified": "Pureté certifiée", "lnk_certs": "Certificats & Récompenses", "lnk_intl": "Distinctions internationales", "lnk_ws": "Grossistes", "lnk_dist": "Partenaires de distribution", "lnk_pallet": "Configurer des palettes", "lnk_b2bshop": "Boutique B2B", "w_products": "Produits", "acct_sub": "Accès par code · Connexion · Inscription", "logout_sub": "Terminer la session", "hs_ey": "Zembra la Romaine · Tunisie", "hs_title_a": "Là où tout a commencé — ", "hs_title_b": "et rien n'a été oublié", "hs_lead": "Entre sol rocheux et air marin poussent des oliviers plus anciens que toute marque. De leurs fruits naît Laperla Vestige — une huile qui n'affirme pas son origine : elle la prouve.", "hs_text": "Chaque récolte suit le rythme de la nature : cueillie à la main, extraite à froid en quelques heures et conservée non filtrée dans sa forme la plus pure. Aucun compromis, aucun raccourci — seulement une huile honnête et pure, avec une traçabilité complète jusqu'à l'arbre.", "hs_f1": "Monovariétale & non filtrée, une seule origine", "hs_f2": "De la récolte à l'extraction à froid", "hs_f3": "Certifiée & médaillée d'or à l'international", "hs_bio": "Bio", "menu_brand_sub": "Histoire · À propos · Mission · Origine · Tunisie", "menu_collection_sub": "Produits · Berlin Edition · Offres", "menu_quality_sub": "Ultra Purity · Certificats & Récompenses", "menu_b2b_sub": "Grossistes · Partenaires de distribution · Container", "w_all": "Tous", "shop_h": "La Collection", "shop_sub": "Découvrez l'Édition Prestige en bouteilles de verre, bidons métalliques et coffrets cadeaux sélectionnés.", "w_details": "Voir les détails", "lnk_editions": "Éditions", "lnk_berlin": "Berlin Edition"}, "it": {"nav_home": "Mondo del marchio", "nav_shop": "Shop · Collezione", "nav_awards": "Riconoscimenti", "nav_gallery": "Galleria", "nav_wholesale": "Ingrosso · Shop B2B", "nav_config": "Configura container", "nav_commission": "Modello di commissione", "nav_dist": "Partner di distribuzione", "nav_account": "Accedi / Registrati", "nav_dashboard": "La mia dashboard", "nav_logout": "Esci", "grp_discover": "Scopri", "grp_business": "Aziende", "grp_account": "Account", "grp_service": "Servizio", "acct": "⬦ Account", "acct_in": "⬦ Il mio account", "hero_desc": "Storia e salute in ogni goccia. Spremuto a freddo da antichi olivi Chemlali negli uliveti della Tunisia, da generazioni. Premiato in tre continenti.", "hero_cta1": "Scopri la collezione", "hero_cta2": "Per le aziende", "offers_ey": "Olio d'Oliva Premium", "offers_h": "Édition Prestige — Set selezionati", "purity_lead_pre": "Acidità inferiore allo", "cta_shop": "Allo shop", "cta_ws": "Ingrosso", "add_cart": "Aggiungi al carrello", "incl_vat": "IVA inclusa", "unavail": "Momentaneamente non disponibile", "not_orderable": "Non ordinabile", "cat_glass": "Bottiglia di vetro", "cat_tin": "Latta metallica", "cat_gift": "Edizione regalo", "menu_brand": "Marchio", "menu_quality": "Qualità & Premi", "lnk_story": "Storia", "lnk_about": "Chi siamo", "lnk_mission": "Missione", "lnk_origin": "Origine · Tunisia", "lnk_discover": "Scoprire la Tunisia", "lnk_collection": "Collezione", "lnk_offers": "Offerte", "lnk_certified": "Purezza certificata", "lnk_certs": "Certificati & Premi", "lnk_intl": "Riconoscimenti internazionali", "lnk_ws": "Grossisti", "lnk_dist": "Partner di distribuzione", "lnk_pallet": "Configura pallet", "lnk_b2bshop": "Shop B2B", "w_products": "Prodotti", "acct_sub": "Accesso con codice · Login · Registrazione", "logout_sub": "Terminare la sessione", "hs_ey": "Zembra la Romaine · Tunisia", "hs_title_a": "Dove tutto è cominciato — ", "hs_title_b": "e nulla è stato dimenticato", "hs_lead": "Tra terreno roccioso e aria di mare crescono ulivi più antichi di qualsiasi marchio. Dai loro frutti nasce Laperla Vestige — un olio che non dichiara la propria origine: la dimostra.", "hs_text": "Ogni raccolto segue il ritmo della natura: raccolto a mano, estratto a freddo in poche ore e conservato non filtrato nella sua forma più pura. Nessun compromesso, nessuna scorciatoia — solo olio onesto e pulito, con tracciabilità completa fino all'albero.", "hs_f1": "Monovarietale e non filtrato, un'unica origine", "hs_f2": "Dalla raccolta all'estrazione a freddo", "hs_f3": "Certificato e premiato con oro internazionale", "hs_bio": "Biologico", "menu_brand_sub": "Storia · Chi siamo · Missione · Origine · Tunisia", "menu_collection_sub": "Prodotti · Berlin Edition · Offerte", "menu_quality_sub": "Ultra Purity · Certificati & Premi", "menu_b2b_sub": "Grossisti · Partner di distribuzione · Container", "w_all": "Tutti", "shop_h": "La Collezione", "shop_sub": "Scoprite l'Édition Prestige in bottiglie di vetro, latte metalliche e formati regalo selezionati.", "w_details": "Vedi dettagli", "lnk_editions": "Edizioni", "lnk_berlin": "Berlin Edition"}, "es": {"nav_home": "Mundo de marca", "nav_shop": "Tienda · Colección", "nav_awards": "Premios", "nav_gallery": "Galería", "nav_wholesale": "Mayorista · Tienda B2B", "nav_config": "Configurar contenedor", "nav_commission": "Modelo de comisión", "nav_dist": "Socios de distribución", "nav_account": "Iniciar sesión / Registrarse", "nav_dashboard": "Mi panel de distribuidor", "nav_logout": "Cerrar sesión", "grp_discover": "Descubrir", "grp_business": "Empresas", "grp_account": "Cuenta", "grp_service": "Servicio", "acct": "⬦ Cuenta", "acct_in": "⬦ Mi cuenta", "hero_desc": "Historia y salud en cada gota. Prensado en frío de antiguos olivos Chemlali en los olivares de Túnez, durante generaciones. Premiado en tres continentes.", "hero_cta1": "Descubrir la colección", "hero_cta2": "Para empresas", "offers_ey": "Aceite de Oliva Premium", "offers_h": "Édition Prestige — Sets seleccionados", "purity_lead_pre": "Acidez inferior al", "cta_shop": "A la tienda", "cta_ws": "Mayorista", "add_cart": "Añadir al carrito", "incl_vat": "IVA incluido", "unavail": "No disponible por el momento", "not_orderable": "No disponible para pedido", "cat_glass": "Botella de vidrio", "cat_tin": "Lata metálica", "cat_gift": "Edición regalo", "menu_brand": "Marca", "menu_quality": "Calidad y premios", "lnk_story": "Historia", "lnk_about": "Sobre nosotros", "lnk_mission": "Misión", "lnk_origin": "Origen · Túnez", "lnk_discover": "Descubrir Túnez", "lnk_collection": "Colección", "lnk_offers": "Ofertas", "lnk_certified": "Pureza certificada", "lnk_certs": "Certificados y premios", "lnk_intl": "Premios internacionales", "lnk_ws": "Mayoristas", "lnk_dist": "Socios de distribución", "lnk_pallet": "Configurar palets", "lnk_b2bshop": "Tienda B2B", "w_products": "Productos", "acct_sub": "Acceso con código · Inicio de sesión · Registro", "logout_sub": "Cerrar la sesión", "hs_ey": "Zembra la Romaine · Túnez", "hs_title_a": "Donde todo comenzó — ", "hs_title_b": "y nada se olvidó", "hs_lead": "Entre suelo rocoso y aire marino crecen olivos más antiguos que cualquier marca. De sus frutos nace Laperla Vestige: un aceite que no afirma su origen, lo demuestra.", "hs_text": "Cada cosecha sigue el ritmo de la naturaleza: recogida a mano, extraída en frío en pocas horas y conservada sin filtrar en su forma más pura. Sin compromisos ni atajos: solo aceite honesto y limpio, con trazabilidad completa hasta el árbol.", "hs_f1": "Monovarietal y sin filtrar, de un solo origen", "hs_f2": "De la cosecha a la extracción en frío", "hs_f3": "Certificado y premiado con oro internacional", "hs_bio": "Ecológico", "menu_brand_sub": "Historia · Sobre nosotros · Misión · Origen · Túnez", "menu_collection_sub": "Productos · Berlin Edition · Ofertas", "menu_quality_sub": "Ultra Purity · Certificados y premios", "menu_b2b_sub": "Mayoristas · Socios de distribución · Container", "w_all": "Todos", "shop_h": "La Colección", "shop_sub": "Descubra la Édition Prestige en botellas de vidrio, latas metálicas y formatos de regalo seleccionados.", "w_details": "Ver detalles", "lnk_editions": "Ediciones", "lnk_berlin": "Berlin Edition"}, "pt": {"nav_home": "Universo da marca", "nav_shop": "Loja · Coleção", "nav_awards": "Prémios", "nav_gallery": "Galeria", "nav_wholesale": "Grossista · Loja B2B", "nav_config": "Configurar contentor", "nav_commission": "Modelo de comissão", "nav_dist": "Parceiros de distribuição", "nav_account": "Iniciar sessão / Registar", "nav_dashboard": "O meu painel de revendedor", "nav_logout": "Terminar sessão", "grp_discover": "Descobrir", "grp_business": "Empresas", "grp_account": "Conta", "grp_service": "Serviço", "acct": "⬦ Conta", "acct_in": "⬦ A minha conta", "hero_desc": "História e saúde em cada gota. Prensado a frio de oliveiras Chemlali centenárias dos olivais da Tunísia, há gerações. Premiado em três continentes.", "hero_cta1": "Descobrir a coleção", "hero_cta2": "Para empresas", "offers_ey": "Azeite Premium", "offers_h": "Édition Prestige — Conjuntos selecionados", "purity_lead_pre": "Acidez inferior a", "cta_shop": "Para a loja", "cta_ws": "Grossista", "add_cart": "Adicionar ao carrinho", "incl_vat": "IVA incluído", "unavail": "Indisponível de momento", "not_orderable": "Não disponível para encomenda", "cat_glass": "Garrafa de vidro", "cat_tin": "Lata metálica", "cat_gift": "Edição de oferta", "menu_brand": "Marca", "menu_quality": "Qualidade e prémios", "lnk_story": "História", "lnk_about": "Sobre nós", "lnk_mission": "Missão", "lnk_origin": "Origem · Tunísia", "lnk_discover": "Descobrir a Tunísia", "lnk_collection": "Coleção", "lnk_offers": "Ofertas", "lnk_certified": "Pureza certificada", "lnk_certs": "Certificados e prémios", "lnk_intl": "Prémios internacionais", "lnk_ws": "Grossistas", "lnk_dist": "Parceiros de distribuição", "lnk_pallet": "Configurar paletes", "lnk_b2bshop": "Loja B2B", "w_products": "Produtos", "acct_sub": "Acesso por código · Login · Registo", "logout_sub": "Terminar sessão", "hs_ey": "Zembra la Romaine · Tunísia", "hs_title_a": "Onde tudo começou — ", "hs_title_b": "e nada foi esquecido", "hs_lead": "Entre solo rochoso e brisa marítima crescem oliveiras mais antigas do que qualquer marca. Dos seus frutos nasce o Laperla Vestige — um azeite que não afirma a origem: prova-a.", "hs_text": "Cada colheita segue o ritmo da natureza: apanhado à mão, extraído a frio em poucas horas e conservado sem filtrar na sua forma mais pura. Sem compromissos nem atalhos — apenas azeite honesto e limpo, com rastreabilidade total até à árvore.", "hs_f1": "Monovarietal e não filtrado, de uma só origem", "hs_f2": "Da colheita à extração a frio", "hs_f3": "Certificado e premiado com ouro internacional", "hs_bio": "Biológico", "menu_brand_sub": "História · Sobre nós · Missão · Origem · Tunísia", "menu_collection_sub": "Produtos · Berlin Edition · Ofertas", "menu_quality_sub": "Ultra Purity · Certificados e prémios", "menu_b2b_sub": "Grossistas · Parceiros de distribuição · Container", "w_all": "Todos", "shop_h": "A Coleção", "shop_sub": "Descubra a Édition Prestige em garrafas de vidro, latas metálicas e formatos de oferta selecionados.", "w_details": "Ver detalhes", "lnk_editions": "Edições", "lnk_berlin": "Berlin Edition"}, "nl": {"nav_home": "Merkwereld", "nav_shop": "Shop · Collectie", "nav_awards": "Onderscheidingen", "nav_gallery": "Galerij", "nav_wholesale": "Groothandel · B2B-shop", "nav_config": "Container configureren", "nav_commission": "Commissiemodel", "nav_dist": "Distributiepartners", "nav_account": "Inloggen / Registreren", "nav_dashboard": "Mijn dealerdashboard", "nav_logout": "Uitloggen", "grp_discover": "Ontdekken", "grp_business": "Zakelijke klanten", "grp_account": "Account", "grp_service": "Service", "acct": "⬦ Account", "acct_in": "⬦ Mijn account", "hero_desc": "Geschiedenis en gezondheid in elke druppel. Koudgeperst uit eeuwenoude Chemlali-bomen in de olijfgaarden van Tunesië, al generaties lang. Bekroond op drie continenten.", "hero_cta1": "Ontdek de collectie", "hero_cta2": "Voor bedrijven", "offers_ey": "Premium Olijfolie", "offers_h": "Édition Prestige — Samengestelde sets", "purity_lead_pre": "Zuurgraad onder", "cta_shop": "Naar de shop", "cta_ws": "Groothandel", "add_cart": "In winkelwagen", "incl_vat": "incl. btw", "unavail": "Tijdelijk niet beschikbaar", "not_orderable": "Niet bestelbaar", "cat_glass": "Glazen fles", "cat_tin": "Metalen blik", "cat_gift": "Geschenkeditie", "menu_brand": "Merk", "menu_quality": "Kwaliteit & Onderscheidingen", "lnk_story": "Verhaal", "lnk_about": "Over ons", "lnk_mission": "Missie", "lnk_origin": "Herkomst · Tunesië", "lnk_discover": "Tunesië ontdekken", "lnk_collection": "Collectie", "lnk_offers": "Aanbiedingen", "lnk_certified": "Gecertificeerde zuiverheid", "lnk_certs": "Certificaten & Awards", "lnk_intl": "Internationale onderscheidingen", "lnk_ws": "Groothandelaren", "lnk_dist": "Distributiepartners", "lnk_pallet": "Pallets configureren", "lnk_b2bshop": "B2B-shop", "w_products": "Producten", "acct_sub": "Codetoegang · Inloggen · Registratie", "logout_sub": "Sessie beëindigen", "hs_ey": "Zembra la Romaine · Tunesië", "hs_title_a": "Waar alles begon — ", "hs_title_b": "en niets werd vergeten", "hs_lead": "Tussen rotsachtige grond en zeelucht groeien olijfbomen die ouder zijn dan welk merk dan ook. Uit hun vruchten ontstaat Laperla Vestige — een olie die haar herkomst niet claimt, maar bewijst.", "hs_text": "Elke oogst volgt het ritme van de natuur: met de hand geplukt, binnen enkele uren koud geëxtraheerd en ongefilterd bewaard in zijn zuiverste vorm. Geen compromissen, geen sluiproutes — alleen eerlijke, zuivere olie met volledige traceerbaarheid tot aan de boom.", "hs_f1": "Eén ras & ongefilterd uit één herkomst", "hs_f2": "Van oogst tot koude extractie", "hs_f3": "Gecertificeerd & internationaal met goud bekroond", "hs_bio": "Biologisch", "menu_brand_sub": "Verhaal · Over ons · Missie · Herkomst · Tunesië", "menu_collection_sub": "Producten · Berlin Edition · Aanbiedingen", "menu_quality_sub": "Ultra Purity · Certificaten & Awards", "menu_b2b_sub": "Groothandelaren · Distributiepartners · Container", "w_all": "Alle", "shop_h": "De Collectie", "shop_sub": "Ontdek de Édition Prestige in glazen flessen, metalen blikken en geselecteerde geschenkformaten.", "w_details": "Details bekijken", "lnk_editions": "Edities", "lnk_berlin": "Berlin Edition"}, "sv": {"nav_home": "Varumärkesvärlden", "nav_shop": "Butik · Kollektion", "nav_awards": "Utmärkelser", "nav_gallery": "Galleri", "nav_wholesale": "Grossist · B2B-butik", "nav_config": "Konfigurera container", "nav_commission": "Provisionsmodell", "nav_dist": "Distributionspartner", "nav_account": "Logga in / Registrera", "nav_dashboard": "Min återförsäljarpanel", "nav_logout": "Logga ut", "grp_discover": "Upptäck", "grp_business": "Företagskunder", "grp_account": "Konto", "grp_service": "Service", "acct": "⬦ Konto", "acct_in": "⬦ Mitt konto", "hero_desc": "Historia och hälsa i varje droppe. Kallpressad från uråldriga Chemlali-träd i Tunisiens olivlundar, i generationer. Prisbelönt på tre kontinenter.", "hero_cta1": "Upptäck kollektionen", "hero_cta2": "För företag", "offers_ey": "Premium Olivolja", "offers_h": "Édition Prestige — Utvalda set", "purity_lead_pre": "Syrahalt under", "cta_shop": "Till butiken", "cta_ws": "Grossist", "add_cart": "Lägg i varukorgen", "incl_vat": "inkl. moms", "unavail": "Tillfälligt slut", "not_orderable": "Kan inte beställas", "cat_glass": "Glasflaska", "cat_tin": "Metallburk", "cat_gift": "Presentutgåva", "menu_brand": "Varumärke", "menu_quality": "Kvalitet & Utmärkelser", "lnk_story": "Berättelse", "lnk_about": "Om oss", "lnk_mission": "Mission", "lnk_origin": "Ursprung · Tunisien", "lnk_discover": "Upptäck Tunisien", "lnk_collection": "Kollektion", "lnk_offers": "Erbjudanden", "lnk_certified": "Certifierad renhet", "lnk_certs": "Certifikat & Utmärkelser", "lnk_intl": "Internationella utmärkelser", "lnk_ws": "Grossister", "lnk_dist": "Distributionspartner", "lnk_pallet": "Konfigurera pallar", "lnk_b2bshop": "B2B-butik", "w_products": "Produkter", "acct_sub": "Kodåtkomst · Inloggning · Registrering", "logout_sub": "Avsluta session", "hs_ey": "Zembra la Romaine · Tunisien", "hs_title_a": "Där allt började — ", "hs_title_b": "och inget glömdes bort", "hs_lead": "Mellan stenig mark och havsluft växer olivträd som är äldre än något varumärke. Ur deras frukter föds Laperla Vestige — en olja som inte påstår sitt ursprung, utan bevisar det.", "hs_text": "Varje skörd följer naturens rytm: handplockad, kallextraherad inom några timmar och bevarad ofiltrerad i sin renaste form. Inga kompromisser, inga genvägar — bara ärlig, ren olja med full spårbarhet ända till trädet.", "hs_f1": "En sort & ofiltrerad från ett ursprung", "hs_f2": "Från skörd till kallextraktion", "hs_f3": "Certifierad & internationellt guldbelönad", "hs_bio": "Ekologisk", "menu_brand_sub": "Berättelse · Om oss · Mission · Ursprung · Tunisien", "menu_collection_sub": "Produkter · Berlin Edition · Erbjudanden", "menu_quality_sub": "Ultra Purity · Certifikat & Utmärkelser", "menu_b2b_sub": "Grossister · Distributionspartner · Container", "w_all": "Alla", "shop_h": "Kollektionen", "shop_sub": "Upptäck Édition Prestige i glasflaskor, metallburkar och utvalda presentformat.", "w_details": "Visa detaljer", "lnk_editions": "Utgåvor", "lnk_berlin": "Berlin Edition"}, "da": {"nav_home": "Brandunivers", "nav_shop": "Butik · Kollektion", "nav_awards": "Udmærkelser", "nav_gallery": "Galleri", "nav_wholesale": "Engros · B2B-butik", "nav_config": "Konfigurer container", "nav_commission": "Provisionsmodel", "nav_dist": "Distributionspartnere", "nav_account": "Log ind / Opret konto", "nav_dashboard": "Mit forhandlerdashboard", "nav_logout": "Log ud", "grp_discover": "Opdag", "grp_business": "Erhvervskunder", "grp_account": "Konto", "grp_service": "Service", "acct": "⬦ Konto", "acct_in": "⬦ Min konto", "hero_desc": "Historie og sundhed i hver dråbe. Koldpresset fra ældgamle Chemlali-træer i Tunesiens olivenlunde, gennem generationer. Prisbelønnet på tre kontinenter.", "hero_cta1": "Opdag kollektionen", "hero_cta2": "For virksomheder", "offers_ey": "Premium Olivenolie", "offers_h": "Édition Prestige — Udvalgte sæt", "purity_lead_pre": "Syreindhold under", "cta_shop": "Til butikken", "cta_ws": "Engros", "add_cart": "Læg i kurven", "incl_vat": "inkl. moms", "unavail": "Midlertidigt udsolgt", "not_orderable": "Kan ikke bestilles", "cat_glass": "Glasflaske", "cat_tin": "Metaldåse", "cat_gift": "Gaveudgave", "menu_brand": "Brand", "menu_quality": "Kvalitet & Priser", "lnk_story": "Historie", "lnk_about": "Om os", "lnk_mission": "Mission", "lnk_origin": "Oprindelse · Tunesien", "lnk_discover": "Oplev Tunesien", "lnk_collection": "Kollektion", "lnk_offers": "Tilbud", "lnk_certified": "Certificeret renhed", "lnk_certs": "Certifikater & Priser", "lnk_intl": "Internationale udmærkelser", "lnk_ws": "Grossister", "lnk_dist": "Distributionspartnere", "lnk_pallet": "Konfigurer paller", "lnk_b2bshop": "B2B-butik", "w_products": "Produkter", "acct_sub": "Kodeadgang · Login · Registrering", "logout_sub": "Afslut session", "hs_ey": "Zembra la Romaine · Tunesien", "hs_title_a": "Hvor det hele begyndte — ", "hs_title_b": "og intet blev glemt", "hs_lead": "Mellem klippegrund og havluft vokser oliventræer, der er ældre end noget brand. Af deres frugter opstår Laperla Vestige — en olie, der ikke hævder sin oprindelse, men beviser den.", "hs_text": "Hver høst følger naturens rytme: håndplukket, koldekstraheret inden for få timer og bevaret ufiltreret i sin reneste form. Ingen kompromiser, ingen genveje — kun ærlig, ren olie med fuld sporbarhed helt tilbage til træet.", "hs_f1": "Én sort & ufiltreret fra én oprindelse", "hs_f2": "Fra høst til koldekstraktion", "hs_f3": "Certificeret & internationalt guldpræmieret", "hs_bio": "Økologisk", "menu_brand_sub": "Historie · Om os · Mission · Oprindelse · Tunesien", "menu_collection_sub": "Produkter · Berlin Edition · Tilbud", "menu_quality_sub": "Ultra Purity · Certifikater & Priser", "menu_b2b_sub": "Grossister · Distributionspartnere · Container", "w_all": "Alle", "shop_h": "Kollektionen", "shop_sub": "Oplev Édition Prestige i glasflasker, metaldåser og udvalgte gaveformater.", "w_details": "Se detaljer", "lnk_editions": "Udgaver", "lnk_berlin": "Berlin Edition"}, "no": {"nav_home": "Merkevareunivers", "nav_shop": "Butikk · Kolleksjon", "nav_awards": "Utmerkelser", "nav_gallery": "Galleri", "nav_wholesale": "Engros · B2B-butikk", "nav_config": "Konfigurer container", "nav_commission": "Provisjonsmodell", "nav_dist": "Distribusjonspartnere", "nav_account": "Logg inn / Registrer deg", "nav_dashboard": "Mitt forhandlerdashbord", "nav_logout": "Logg ut", "grp_discover": "Oppdag", "grp_business": "Bedriftskunder", "grp_account": "Konto", "grp_service": "Service", "acct": "⬦ Konto", "acct_in": "⬦ Min konto", "hero_desc": "Historie og helse i hver dråpe. Kaldpresset fra eldgamle Chemlali-trær i Tunisias olivenlunder, gjennom generasjoner. Prisbelønnet på tre kontinenter.", "hero_cta1": "Oppdag kolleksjonen", "hero_cta2": "For bedrifter", "offers_ey": "Premium Olivenolje", "offers_h": "Édition Prestige — Utvalgte sett", "purity_lead_pre": "Syreinnhold under", "cta_shop": "Til butikken", "cta_ws": "Engros", "add_cart": "Legg i handlekurven", "incl_vat": "inkl. mva.", "unavail": "Midlertidig utsolgt", "not_orderable": "Kan ikke bestilles", "cat_glass": "Glassflaske", "cat_tin": "Metallboks", "cat_gift": "Gaveutgave", "menu_brand": "Merkevare", "menu_quality": "Kvalitet & Utmerkelser", "lnk_story": "Historie", "lnk_about": "Om oss", "lnk_mission": "Misjon", "lnk_origin": "Opprinnelse · Tunisia", "lnk_discover": "Opplev Tunisia", "lnk_collection": "Kolleksjon", "lnk_offers": "Tilbud", "lnk_certified": "Sertifisert renhet", "lnk_certs": "Sertifikater & Priser", "lnk_intl": "Internasjonale utmerkelser", "lnk_ws": "Grossister", "lnk_dist": "Distribusjonspartnere", "lnk_pallet": "Konfigurer paller", "lnk_b2bshop": "B2B-butikk", "w_products": "Produkter", "acct_sub": "Kodetilgang · Innlogging · Registrering", "logout_sub": "Avslutt økt", "hs_ey": "Zembra la Romaine · Tunisia", "hs_title_a": "Der alt begynte — ", "hs_title_b": "og ingenting ble glemt", "hs_lead": "Mellom steinete jord og havluft vokser oliventrær som er eldre enn noe merke. Av fruktene deres oppstår Laperla Vestige — en olje som ikke hevder sitt opphav, men beviser det.", "hs_text": "Hver innhøsting følger naturens rytme: håndplukket, kaldekstrahert i løpet av få timer og bevart ufiltrert i sin reneste form. Ingen kompromisser, ingen snarveier — bare ærlig, ren olje med full sporbarhet helt til treet.", "hs_f1": "Én sort & ufiltrert fra ett opphav", "hs_f2": "Fra innhøsting til kaldekstraksjon", "hs_f3": "Sertifisert & internasjonalt gullpremiert", "hs_bio": "Økologisk", "menu_brand_sub": "Historie · Om oss · Misjon · Opprinnelse · Tunisia", "menu_collection_sub": "Produkter · Berlin Edition · Tilbud", "menu_quality_sub": "Ultra Purity · Sertifikater & Priser", "menu_b2b_sub": "Grossister · Distribusjonspartnere · Container", "w_all": "Alle", "shop_h": "Kolleksjonen", "shop_sub": "Opplev Édition Prestige i glassflasker, metallbokser og utvalgte gaveformater.", "w_details": "Se detaljer", "lnk_editions": "Utgaver", "lnk_berlin": "Berlin Edition"}, "fi": {"nav_home": "Brändin maailma", "nav_shop": "Kauppa · Kokoelma", "nav_awards": "Palkinnot", "nav_gallery": "Galleria", "nav_wholesale": "Tukku · B2B-kauppa", "nav_config": "Kontin konfigurointi", "nav_commission": "Provisiomalli", "nav_dist": "Jakelukumppanit", "nav_account": "Kirjaudu / Rekisteröidy", "nav_dashboard": "Jälleenmyyjän hallintapaneeli", "nav_logout": "Kirjaudu ulos", "grp_discover": "Tutustu", "grp_business": "Yritysasiakkaat", "grp_account": "Tili", "grp_service": "Palvelu", "acct": "⬦ Tili", "acct_in": "⬦ Oma tili", "hero_desc": "Historiaa ja terveyttä jokaisessa pisarassa. Kylmäpuristettu Tunisian oliivilehtojen ikivanhoista Chemlali-puista, sukupolvien ajan. Palkittu kolmella mantereella.", "hero_cta1": "Tutustu kokoelmaan", "hero_cta2": "Yrityksille", "offers_ey": "Premium-Oliiviöljy", "offers_h": "Édition Prestige — Valikoidut setit", "purity_lead_pre": "Happopitoisuus alle", "cta_shop": "Kauppaan", "cta_ws": "Tukku", "add_cart": "Lisää ostoskoriin", "incl_vat": "sis. alv", "unavail": "Tilapäisesti loppu", "not_orderable": "Ei tilattavissa", "cat_glass": "Lasipullo", "cat_tin": "Metallitölkki", "cat_gift": "Lahjapainos", "menu_brand": "Brändi", "menu_quality": "Laatu & Palkinnot", "lnk_story": "Tarina", "lnk_about": "Meistä", "lnk_mission": "Missio", "lnk_origin": "Alkuperä · Tunisia", "lnk_discover": "Tutustu Tunisiaan", "lnk_collection": "Kokoelma", "lnk_offers": "Tarjoukset", "lnk_certified": "Sertifioitu puhtaus", "lnk_certs": "Sertifikaatit & Palkinnot", "lnk_intl": "Kansainväliset palkinnot", "lnk_ws": "Tukkukauppiaat", "lnk_dist": "Jakelukumppanit", "lnk_pallet": "Lavojen konfigurointi", "lnk_b2bshop": "B2B-kauppa", "w_products": "Tuotteet", "acct_sub": "Koodipääsy · Kirjautuminen · Rekisteröinti", "logout_sub": "Lopeta istunto", "hs_ey": "Zembra la Romaine · Tunisia", "hs_title_a": "Missä kaikki alkoi — ", "hs_title_b": "eikä mitään unohdettu", "hs_lead": "Kivisen maaperän ja meri-ilman välissä kasvaa oliivipuita, jotka ovat vanhempia kuin yksikään tuotemerkki. Niiden hedelmistä syntyy Laperla Vestige — öljy, joka ei väitä alkuperäänsä vaan todistaa sen.", "hs_text": "Jokainen sadonkorjuu seuraa luonnon rytmiä: käsin poimittu, kylmäuutettu muutamassa tunnissa ja säilytetty suodattamattomana puhtaimmassa muodossaan. Ei kompromisseja, ei oikoteitä — vain rehellistä, puhdasta öljyä, jonka voi jäljittää puuhun asti.", "hs_f1": "Yksi lajike & suodattamaton, yksi alkuperä", "hs_f2": "Sadonkorjuusta kylmäuuttoon", "hs_f3": "Sertifioitu & kansainvälisesti kullalla palkittu", "hs_bio": "Luomu", "menu_brand_sub": "Tarina · Meistä · Missio · Alkuperä · Tunisia", "menu_collection_sub": "Tuotteet · Berlin Edition · Tarjoukset", "menu_quality_sub": "Ultra Purity · Sertifikaatit & Palkinnot", "menu_b2b_sub": "Tukkukauppiaat · Jakelukumppanit · Container", "w_all": "Kaikki", "shop_h": "Kokoelma", "shop_sub": "Tutustu Édition Prestige -sarjaan lasipulloissa, metallitölkeissä ja valikoiduissa lahjapakkauksissa.", "w_details": "Näytä tiedot", "lnk_editions": "Painokset", "lnk_berlin": "Berlin Edition"}, "pl": {"nav_home": "Świat marki", "nav_shop": "Sklep · Kolekcja", "nav_awards": "Nagrody", "nav_gallery": "Galeria", "nav_wholesale": "Hurt · Sklep B2B", "nav_config": "Konfiguracja kontenera", "nav_commission": "Model prowizyjny", "nav_dist": "Partnerzy dystrybucyjni", "nav_account": "Zaloguj się / Zarejestruj", "nav_dashboard": "Panel dealera", "nav_logout": "Wyloguj się", "grp_discover": "Odkryj", "grp_business": "Klienci biznesowi", "grp_account": "Konto", "grp_service": "Serwis", "acct": "⬦ Konto", "acct_in": "⬦ Moje konto", "hero_desc": "Historia i zdrowie w każdej kropli. Tłoczona na zimno z wiekowych drzew Chemlali w tunezyjskich gajach oliwnych, od pokoleń. Nagradzana na trzech kontynentach.", "hero_cta1": "Odkryj kolekcję", "hero_cta2": "Dla firm", "offers_ey": "Oliwa z Oliwek Premium", "offers_h": "Édition Prestige — Wyselekcjonowane zestawy", "purity_lead_pre": "Kwasowość poniżej", "cta_shop": "Do sklepu", "cta_ws": "Hurt", "add_cart": "Do koszyka", "incl_vat": "z VAT", "unavail": "Chwilowo niedostępne", "not_orderable": "Niedostępne do zamówienia", "cat_glass": "Butelka szklana", "cat_tin": "Puszka metalowa", "cat_gift": "Edycja prezentowa", "menu_brand": "Marka", "menu_quality": "Jakość i nagrody", "lnk_story": "Historia", "lnk_about": "O nas", "lnk_mission": "Misja", "lnk_origin": "Pochodzenie · Tunezja", "lnk_discover": "Odkryj Tunezję", "lnk_collection": "Kolekcja", "lnk_offers": "Oferty", "lnk_certified": "Certyfikowana czystość", "lnk_certs": "Certyfikaty i nagrody", "lnk_intl": "Nagrody międzynarodowe", "lnk_ws": "Hurtownicy", "lnk_dist": "Partnerzy dystrybucyjni", "lnk_pallet": "Konfiguracja palet", "lnk_b2bshop": "Sklep B2B", "w_products": "Produkty", "acct_sub": "Dostęp kodem · Logowanie · Rejestracja", "logout_sub": "Zakończ sesję", "hs_ey": "Zembra la Romaine · Tunezja", "hs_title_a": "Tam, gdzie wszystko się zaczęło — ", "hs_title_b": "i nic nie zostało zapomniane", "hs_lead": "Pomiędzy skalistym podłożem a morskim powietrzem rosną drzewa oliwne starsze niż jakakolwiek marka. Z ich owoców powstaje Laperla Vestige — oliwa, która nie deklaruje pochodzenia, lecz go dowodzi.", "hs_text": "Każdy zbiór podąża za rytmem natury: zbierana ręcznie, tłoczona na zimno w ciągu kilku godzin i przechowywana niefiltrowana w najczystszej postaci. Bez kompromisów i dróg na skróty — tylko uczciwa, czysta oliwa z pełną identyfikowalnością aż do drzewa.", "hs_f1": "Jednoodmianowa i niefiltrowana, jedno pochodzenie", "hs_f2": "Od zbioru do tłoczenia na zimno", "hs_f3": "Certyfikowana i nagradzana złotem na świecie", "hs_bio": "Bio", "menu_brand_sub": "Historia · O nas · Misja · Pochodzenie · Tunezja", "menu_collection_sub": "Produkty · Berlin Edition · Oferty", "menu_quality_sub": "Ultra Purity · Certyfikaty i nagrody", "menu_b2b_sub": "Hurtownicy · Partnerzy dystrybucyjni · Container", "w_all": "Wszystkie", "shop_h": "Kolekcja", "shop_sub": "Odkryj Édition Prestige w szklanych butelkach, metalowych puszkach i wybranych formatach prezentowych.", "w_details": "Zobacz szczegóły", "lnk_editions": "Edycje", "lnk_berlin": "Berlin Edition"}, "cs": {"nav_home": "Svět značky", "nav_shop": "Obchod · Kolekce", "nav_awards": "Ocenění", "nav_gallery": "Galerie", "nav_wholesale": "Velkoobchod · B2B obchod", "nav_config": "Konfigurace kontejneru", "nav_commission": "Provizní model", "nav_dist": "Distribuční partneři", "nav_account": "Přihlásit se / Registrovat", "nav_dashboard": "Můj dealerský panel", "nav_logout": "Odhlásit se", "grp_discover": "Objevte", "grp_business": "Firemní zákazníci", "grp_account": "Účet", "grp_service": "Servis", "acct": "⬦ Účet", "acct_in": "⬦ Můj účet", "hero_desc": "Historie a zdraví v každé kapce. Lisováno za studena z prastarých stromů Chemlali v tuniských olivových hájích, po generace. Oceněno na třech kontinentech.", "hero_cta1": "Objevte kolekci", "hero_cta2": "Pro firmy", "offers_ey": "Prémiový Olivový Olej", "offers_h": "Édition Prestige — Vybrané sady", "purity_lead_pre": "Kyselost pod", "cta_shop": "Do obchodu", "cta_ws": "Velkoobchod", "add_cart": "Do košíku", "incl_vat": "vč. DPH", "unavail": "Momentálně nedostupné", "not_orderable": "Nelze objednat", "cat_glass": "Skleněná láhev", "cat_tin": "Plechovka", "cat_gift": "Dárková edice", "menu_brand": "Značka", "menu_quality": "Kvalita a ocenění", "lnk_story": "Příběh", "lnk_about": "O nás", "lnk_mission": "Mise", "lnk_origin": "Původ · Tunisko", "lnk_discover": "Objevte Tunisko", "lnk_collection": "Kolekce", "lnk_offers": "Nabídky", "lnk_certified": "Certifikovaná čistota", "lnk_certs": "Certifikáty a ocenění", "lnk_intl": "Mezinárodní ocenění", "lnk_ws": "Velkoobchodníci", "lnk_dist": "Distribuční partneři", "lnk_pallet": "Konfigurace palet", "lnk_b2bshop": "B2B obchod", "w_products": "Produkty", "acct_sub": "Přístup kódem · Přihlášení · Registrace", "logout_sub": "Ukončit relaci", "hs_ey": "Zembra la Romaine · Tunisko", "hs_title_a": "Kde vše začalo — ", "hs_title_b": "a nic nebylo zapomenuto", "hs_lead": "Mezi skalnatou půdou a mořským vzduchem rostou olivovníky starší než jakákoli značka. Z jejich plodů vzniká Laperla Vestige — olej, který svůj původ netvrdí, ale dokazuje.", "hs_text": "Každá sklizeň následuje rytmus přírody: sbíráno ručně, lisováno za studena během několika hodin a uchováno nefiltrované v nejčistší podobě. Žádné kompromisy, žádné zkratky — jen poctivý, čistý olej s plnou dohledatelností až ke stromu.", "hs_f1": "Jednoodrůdový a nefiltrovaný, jediný původ", "hs_f2": "Od sklizně po lisování za studena", "hs_f3": "Certifikováno a mezinárodně oceněno zlatem", "hs_bio": "Bio", "menu_brand_sub": "Příběh · O nás · Mise · Původ · Tunisko", "menu_collection_sub": "Produkty · Berlin Edition · Nabídky", "menu_quality_sub": "Ultra Purity · Certifikáty a ocenění", "menu_b2b_sub": "Velkoobchodníci · Distribuční partneři · Container", "w_all": "Vše", "shop_h": "Kolekce", "shop_sub": "Objevte Édition Prestige ve skleněných lahvích, plechovkách a vybraných dárkových formátech.", "w_details": "Zobrazit podrobnosti", "lnk_editions": "Edice", "lnk_berlin": "Berlin Edition"}, "hu": {"nav_home": "Márkavilág", "nav_shop": "Üzlet · Kollekció", "nav_awards": "Díjak", "nav_gallery": "Galéria", "nav_wholesale": "Nagykereskedelem · B2B üzlet", "nav_config": "Konténer konfigurálása", "nav_commission": "Jutalékmodell", "nav_dist": "Értékesítési partnerek", "nav_account": "Bejelentkezés / Regisztráció", "nav_dashboard": "Kereskedői irányítópultom", "nav_logout": "Kijelentkezés", "grp_discover": "Fedezze fel", "grp_business": "Üzleti ügyfelek", "grp_account": "Fiók", "grp_service": "Szolgáltatás", "acct": "⬦ Fiók", "acct_in": "⬦ Fiókom", "hero_desc": "Történelem és egészség minden cseppben. Hidegen sajtolva Tunézia olívaligeteinek ősi Chemlali-fáiról, generációk óta. Három kontinensen díjazva.", "hero_cta1": "Fedezze fel a kollekciót", "hero_cta2": "Vállalatoknak", "offers_ey": "Prémium Olívaolaj", "offers_h": "Édition Prestige — Válogatott szettek", "purity_lead_pre": "Savtartalom kevesebb mint", "cta_shop": "Az üzletbe", "cta_ws": "Nagykereskedelem", "add_cart": "Kosárba", "incl_vat": "ÁFA-val", "unavail": "Jelenleg nem elérhető", "not_orderable": "Nem rendelhető", "cat_glass": "Üvegpalack", "cat_tin": "Fémdoboz", "cat_gift": "Ajándékkiadás", "menu_brand": "Márka", "menu_quality": "Minőség és díjak", "lnk_story": "Történet", "lnk_about": "Rólunk", "lnk_mission": "Küldetés", "lnk_origin": "Eredet · Tunézia", "lnk_discover": "Fedezze fel Tunéziát", "lnk_collection": "Kollekció", "lnk_offers": "Ajánlatok", "lnk_certified": "Tanúsított tisztaság", "lnk_certs": "Tanúsítványok és díjak", "lnk_intl": "Nemzetközi díjak", "lnk_ws": "Nagykereskedők", "lnk_dist": "Értékesítési partnerek", "lnk_pallet": "Raklapok konfigurálása", "lnk_b2bshop": "B2B üzlet", "w_products": "Termékek", "acct_sub": "Kódos hozzáférés · Bejelentkezés · Regisztráció", "logout_sub": "Munkamenet befejezése", "hs_ey": "Zembra la Romaine · Tunézia", "hs_title_a": "Ahol minden kezdődött — ", "hs_title_b": "és semmi sem merült feledésbe", "hs_lead": "Sziklás talaj és tengeri levegő között olyan olajfák nőnek, amelyek régebbiek minden márkánál. Gyümölcseikből születik a Laperla Vestige — egy olaj, amely nem állítja az eredetét, hanem bizonyítja.", "hs_text": "Minden szüret a természet ritmusát követi: kézzel szedve, néhány órán belül hidegen sajtolva, és szűretlenül, legtisztább formájában megőrizve. Nincs kompromisszum, nincs rövidítés — csak becsületes, tiszta olaj, teljes nyomonkövethetőséggel egészen a fáig.", "hs_f1": "Egyfajtájú és szűretlen, egyetlen eredet", "hs_f2": "A szürettől a hideg sajtolásig", "hs_f3": "Tanúsított és nemzetközi aranydíjas", "hs_bio": "Bio", "menu_brand_sub": "Történet · Rólunk · Küldetés · Eredet · Tunézia", "menu_collection_sub": "Termékek · Berlin Edition · Ajánlatok", "menu_quality_sub": "Ultra Purity · Tanúsítványok és díjak", "menu_b2b_sub": "Nagykereskedők · Értékesítési partnerek · Container", "w_all": "Összes", "shop_h": "A kollekció", "shop_sub": "Fedezze fel az Édition Prestige-t üvegpalackokban, fémdobozokban és válogatott ajándékformátumokban.", "w_details": "Részletek megtekintése", "lnk_editions": "Kiadások", "lnk_berlin": "Berlin Edition"}, "ro": {"nav_home": "Universul mărcii", "nav_shop": "Magazin · Colecție", "nav_awards": "Premii", "nav_gallery": "Galerie", "nav_wholesale": "En-gros · Magazin B2B", "nav_config": "Configurare container", "nav_commission": "Model de comision", "nav_dist": "Parteneri de distribuție", "nav_account": "Autentificare / Înregistrare", "nav_dashboard": "Panoul meu de dealer", "nav_logout": "Deconectare", "grp_discover": "Descoperiți", "grp_business": "Clienți business", "grp_account": "Cont", "grp_service": "Servicii", "acct": "⬦ Cont", "acct_in": "⬦ Contul meu", "hero_desc": "Istorie și sănătate în fiecare picătură. Presat la rece din arbori Chemlali seculari din livezile de măslini ale Tunisiei, de generații. Premiat pe trei continente.", "hero_cta1": "Descoperiți colecția", "hero_cta2": "Pentru companii", "offers_ey": "Ulei de Măsline Premium", "offers_h": "Édition Prestige — Seturi selecționate", "purity_lead_pre": "Aciditate sub", "cta_shop": "Spre magazin", "cta_ws": "En-gros", "add_cart": "Adaugă în coș", "incl_vat": "TVA inclus", "unavail": "Momentan indisponibil", "not_orderable": "Nu poate fi comandat", "cat_glass": "Sticlă", "cat_tin": "Cutie metalică", "cat_gift": "Ediție cadou", "menu_brand": "Marcă", "menu_quality": "Calitate și premii", "lnk_story": "Poveste", "lnk_about": "Despre noi", "lnk_mission": "Misiune", "lnk_origin": "Origine · Tunisia", "lnk_discover": "Descoperiți Tunisia", "lnk_collection": "Colecție", "lnk_offers": "Oferte", "lnk_certified": "Puritate certificată", "lnk_certs": "Certificate și premii", "lnk_intl": "Premii internaționale", "lnk_ws": "Angrosiști", "lnk_dist": "Parteneri de distribuție", "lnk_pallet": "Configurare paleți", "lnk_b2bshop": "Magazin B2B", "w_products": "Produse", "acct_sub": "Acces cu cod · Autentificare · Înregistrare", "logout_sub": "Încheiere sesiune", "hs_ey": "Zembra la Romaine · Tunisia", "hs_title_a": "Unde a început totul — ", "hs_title_b": "și nimic nu a fost uitat", "hs_lead": "Între sol stâncos și aerul mării cresc măslini mai vechi decât orice marcă. Din fructele lor se naște Laperla Vestige — un ulei care nu își afirmă originea, ci o dovedește.", "hs_text": "Fiecare recoltă urmează ritmul naturii: cules manual, extras la rece în câteva ore și păstrat nefiltrat, în forma sa cea mai pură. Fără compromisuri, fără scurtături — doar ulei onest și curat, cu trasabilitate completă până la copac.", "hs_f1": "Monovarietal și nefiltrat, o singură origine", "hs_f2": "De la recoltă la extracția la rece", "hs_f3": "Certificat și premiat cu aur internațional", "hs_bio": "Ecologic", "menu_brand_sub": "Poveste · Despre noi · Misiune · Origine · Tunisia", "menu_collection_sub": "Produse · Berlin Edition · Oferte", "menu_quality_sub": "Ultra Purity · Certificate și premii", "menu_b2b_sub": "Angrosiști · Parteneri de distribuție · Container", "w_all": "Toate", "shop_h": "Colecția", "shop_sub": "Descoperiți Édition Prestige în sticle, cutii metalice și formate cadou selecționate.", "w_details": "Vezi detalii", "lnk_editions": "Ediții", "lnk_berlin": "Berlin Edition"}, "el": {"nav_home": "Ο κόσμος της μάρκας", "nav_shop": "Κατάστημα · Συλλογή", "nav_awards": "Διακρίσεις", "nav_gallery": "Γκαλερί", "nav_wholesale": "Χονδρική · Κατάστημα B2B", "nav_config": "Διαμόρφωση εμπορευματοκιβωτίου", "nav_commission": "Μοντέλο προμήθειας", "nav_dist": "Συνεργάτες διανομής", "nav_account": "Σύνδεση / Εγγραφή", "nav_dashboard": "Ο πίνακας εμπόρου μου", "nav_logout": "Αποσύνδεση", "grp_discover": "Ανακαλύψτε", "grp_business": "Επιχειρήσεις", "grp_account": "Λογαριασμός", "grp_service": "Εξυπηρέτηση", "acct": "⬦ Λογαριασμός", "acct_in": "⬦ Ο λογαριασμός μου", "hero_desc": "Ιστορία και υγεία σε κάθε σταγόνα. Ψυχρής έκθλιψης από αιωνόβια δέντρα Chemlali στους ελαιώνες της Τυνησίας, εδώ και γενιές. Βραβευμένο σε τρεις ηπείρους.", "hero_cta1": "Ανακαλύψτε τη συλλογή", "hero_cta2": "Για επιχειρήσεις", "offers_ey": "Premium Ελαιόλαδο", "offers_h": "Édition Prestige — Επιλεγμένα σετ", "purity_lead_pre": "Οξύτητα κάτω από", "cta_shop": "Προς το κατάστημα", "cta_ws": "Χονδρική", "add_cart": "Προσθήκη στο καλάθι", "incl_vat": "με ΦΠΑ", "unavail": "Προσωρινά μη διαθέσιμο", "not_orderable": "Μη διαθέσιμο για παραγγελία", "cat_glass": "Γυάλινη φιάλη", "cat_tin": "Μεταλλικό δοχείο", "cat_gift": "Συσκευασία δώρου", "menu_brand": "Μάρκα", "menu_quality": "Ποιότητα & Βραβεία", "lnk_story": "Ιστορία", "lnk_about": "Σχετικά με εμάς", "lnk_mission": "Αποστολή", "lnk_origin": "Προέλευση · Τυνησία", "lnk_discover": "Ανακαλύψτε την Τυνησία", "lnk_collection": "Συλλογή", "lnk_offers": "Προσφορές", "lnk_certified": "Πιστοποιημένη καθαρότητα", "lnk_certs": "Πιστοποιητικά & Βραβεία", "lnk_intl": "Διεθνείς διακρίσεις", "lnk_ws": "Χονδρέμποροι", "lnk_dist": "Συνεργάτες διανομής", "lnk_pallet": "Διαμόρφωση παλετών", "lnk_b2bshop": "Κατάστημα B2B", "w_products": "Προϊόντα", "acct_sub": "Πρόσβαση με κωδικό · Σύνδεση · Εγγραφή", "logout_sub": "Τερματισμός συνεδρίας", "hs_ey": "Zembra la Romaine · Τυνησία", "hs_title_a": "Εκεί όπου όλα ξεκίνησαν — ", "hs_title_b": "και τίποτα δεν ξεχάστηκε", "hs_lead": "Ανάμεσα σε βραχώδη εδάφη και θαλασσινό αέρα μεγαλώνουν ελαιόδεντρα παλαιότερα από κάθε μάρκα. Από τους καρπούς τους γεννιέται το Laperla Vestige — ένα λάδι που δεν ισχυρίζεται την προέλευσή του, αλλά την αποδεικνύει.", "hs_text": "Κάθε συγκομιδή ακολουθεί τον ρυθμό της φύσης: μαζεμένο στο χέρι, ψυχρής έκθλιψης μέσα σε λίγες ώρες και αφιλτράριστο στην πιο αγνή του μορφή. Κανένας συμβιβασμός, καμία συντόμευση — μόνο τίμιο, καθαρό λάδι με πλήρη ιχνηλασιμότητα έως το δέντρο.", "hs_f1": "Μονοποικιλιακό & αφιλτράριστο από μία προέλευση", "hs_f2": "Από τη συγκομιδή έως την ψυχρή έκθλιψη", "hs_f3": "Πιστοποιημένο & διεθνώς βραβευμένο με χρυσό", "hs_bio": "Βιολογικό", "menu_brand_sub": "Ιστορία · Σχετικά με εμάς · Αποστολή · Προέλευση · Τυνησία", "menu_collection_sub": "Προϊόντα · Berlin Edition · Προσφορές", "menu_quality_sub": "Ultra Purity · Πιστοποιητικά & Βραβεία", "menu_b2b_sub": "Χονδρέμποροι · Συνεργάτες διανομής · Container", "w_all": "Όλα", "shop_h": "Η Συλλογή", "shop_sub": "Ανακαλύψτε την Édition Prestige σε γυάλινες φιάλες, μεταλλικά δοχεία και επιλεγμένες συσκευασίες δώρου.", "w_details": "Δείτε λεπτομέρειες", "lnk_editions": "Εκδόσεις", "lnk_berlin": "Berlin Edition"}, "tr": {"nav_home": "Marka Dünyası", "nav_shop": "Mağaza · Koleksiyon", "nav_awards": "Ödüller", "nav_gallery": "Galeri", "nav_wholesale": "Toptan · B2B Mağaza", "nav_config": "Konteyner Yapılandırma", "nav_commission": "Komisyon Modeli", "nav_dist": "Dağıtım Ortakları", "nav_account": "Giriş / Kayıt", "nav_dashboard": "Bayi Panelim", "nav_logout": "Çıkış Yap", "grp_discover": "Keşfedin", "grp_business": "Kurumsal Müşteriler", "grp_account": "Hesap", "grp_service": "Hizmet", "acct": "⬦ Hesap", "acct_in": "⬦ Hesabım", "hero_desc": "Her damlada tarih ve sağlık. Tunus'un zeytinliklerindeki asırlık Chemlali ağaçlarından, nesillerdir soğuk sıkım. Üç kıtada ödüllü.", "hero_cta1": "Koleksiyonu Keşfedin", "hero_cta2": "Kurumsal Müşteriler", "offers_ey": "Premium Zeytinyağı", "offers_h": "Édition Prestige — Seçilmiş Setler", "purity_lead_pre": "Maksimum asitlik", "cta_shop": "Mağazaya Git", "cta_ws": "Toptan", "add_cart": "Sepete Ekle", "incl_vat": "KDV dahil", "unavail": "Şu anda mevcut değil", "not_orderable": "Sipariş edilemez", "cat_glass": "Cam Şişe", "cat_tin": "Metal Kutu", "cat_gift": "Hediye Edisyonu", "menu_brand": "Marka", "menu_quality": "Kalite ve Ödüller", "lnk_story": "Hikâye", "lnk_about": "Hakkımızda", "lnk_mission": "Misyon", "lnk_origin": "Köken · Tunus", "lnk_discover": "Tunus'u Keşfedin", "lnk_collection": "Koleksiyon", "lnk_offers": "Teklifler", "lnk_certified": "Sertifikalı Saflık", "lnk_certs": "Sertifikalar ve Ödüller", "lnk_intl": "Uluslararası Ödüller", "lnk_ws": "Toptancılar", "lnk_dist": "Dağıtım Ortakları", "lnk_pallet": "Palet Yapılandırma", "lnk_b2bshop": "B2B Mağaza", "w_products": "Ürünler", "acct_sub": "Kodla erişim · Giriş · Kayıt", "logout_sub": "Oturumu sonlandır", "hs_ey": "Zembra la Romaine · Tunus", "hs_title_a": "Her şeyin başladığı yer — ", "hs_title_b": "ve hiçbir şey unutulmadı", "hs_lead": "Kayalık toprak ile deniz havası arasında, her markadan daha yaşlı zeytin ağaçları yetişir. Onların meyvelerinden Laperla Vestige doğar — kökenini iddia etmeyen, kanıtlayan bir yağ.", "hs_text": "Her hasat doğanın ritmini izler: elle toplanır, birkaç saat içinde soğuk sıkımla elde edilir ve filtrelenmeden en saf haliyle korunur. Taviz yok, kestirme yok — yalnızca ağaca kadar tam izlenebilirliğe sahip dürüst, temiz yağ.", "hs_f1": "Tek çeşit ve filtresiz, tek köken", "hs_f2": "Hasattan soğuk sıkıma", "hs_f3": "Sertifikalı ve uluslararası altın ödüllü", "hs_bio": "Organik", "menu_brand_sub": "Hikâye · Hakkımızda · Misyon · Köken · Tunus", "menu_collection_sub": "Ürünler · Berlin Edition · Teklifler", "menu_quality_sub": "Ultra Purity · Sertifikalar ve Ödüller", "menu_b2b_sub": "Toptancılar · Dağıtım Ortakları · Container", "w_all": "Tümü", "shop_h": "Koleksiyon", "shop_sub": "Édition Prestige'i cam şişelerde, metal kutularda ve seçilmiş hediye formatlarında keşfedin.", "w_details": "Detayları Gör", "lnk_editions": "Edisyonlar", "lnk_berlin": "Berlin Edition"}, "ru": {"nav_home": "Мир бренда", "nav_shop": "Магазин · Коллекция", "nav_awards": "Награды", "nav_gallery": "Галерея", "nav_wholesale": "Опт · B2B-магазин", "nav_config": "Конфигурация контейнера", "nav_commission": "Комиссионная модель", "nav_dist": "Дистрибьюторы", "nav_account": "Войти / Регистрация", "nav_dashboard": "Панель дилера", "nav_logout": "Выйти", "grp_discover": "Открыть для себя", "grp_business": "Для бизнеса", "grp_account": "Аккаунт", "grp_service": "Сервис", "acct": "⬦ Аккаунт", "acct_in": "⬦ Мой аккаунт", "hero_desc": "История и здоровье в каждой капле. Холодный отжим из вековых деревьев сорта Chemlali в оливковых рощах Туниса — из поколения в поколение. Отмечено наградами на трёх континентах.", "hero_cta1": "Открыть коллекцию", "hero_cta2": "Для бизнеса", "offers_ey": "Премиальное оливковое масло", "offers_h": "Édition Prestige — избранные наборы", "purity_lead_pre": "Кислотность ниже", "cta_shop": "В магазин", "cta_ws": "Опт", "add_cart": "В корзину", "incl_vat": "с НДС", "unavail": "Временно недоступно", "not_orderable": "Недоступно для заказа", "cat_glass": "Стеклянная бутылка", "cat_tin": "Жестяная банка", "cat_gift": "Подарочное издание", "menu_brand": "Бренд", "menu_quality": "Качество и награды", "lnk_story": "История", "lnk_about": "О нас", "lnk_mission": "Миссия", "lnk_origin": "Происхождение · Тунис", "lnk_discover": "Откройте Тунис", "lnk_collection": "Коллекция", "lnk_offers": "Предложения", "lnk_certified": "Сертифицированная чистота", "lnk_certs": "Сертификаты и награды", "lnk_intl": "Международные награды", "lnk_ws": "Оптовики", "lnk_dist": "Дистрибьюторы", "lnk_pallet": "Конфигурация паллет", "lnk_b2bshop": "B2B-магазин", "w_products": "Продукция", "acct_sub": "Доступ по коду · Вход · Регистрация", "logout_sub": "Завершить сеанс", "hs_ey": "Zembra la Romaine · Тунис", "hs_title_a": "Там, где всё началось, — ", "hs_title_b": "и ничего не забыто", "hs_lead": "Среди каменистой почвы и морского воздуха растут оливковые деревья старше любого бренда. Из их плодов рождается Laperla Vestige — масло, которое не заявляет о происхождении, а доказывает его.", "hs_text": "Каждый урожай следует ритму природы: собран вручную, отжат холодным способом в течение нескольких часов и сохранён нефильтрованным в самой чистой форме. Без компромиссов и коротких путей — только честное, чистое масло с полной прослеживаемостью до самого дерева.", "hs_f1": "Моносортовое и нефильтрованное, единое происхождение", "hs_f2": "От сбора до холодного отжима", "hs_f3": "Сертифицировано, золотые награды мира", "hs_bio": "Био", "menu_brand_sub": "История · О нас · Миссия · Происхождение · Тунис", "menu_collection_sub": "Продукция · Berlin Edition · Предложения", "menu_quality_sub": "Ultra Purity · Сертификаты и награды", "menu_b2b_sub": "Оптовики · Дистрибьюторы · Container", "w_all": "Все", "shop_h": "Коллекция", "shop_sub": "Откройте Édition Prestige в стеклянных бутылках, жестяных банках и избранных подарочных форматах.", "w_details": "Подробнее", "lnk_editions": "Издания", "lnk_berlin": "Berlin Edition"}, "uk": {"nav_home": "Світ бренду", "nav_shop": "Магазин · Колекція", "nav_awards": "Нагороди", "nav_gallery": "Галерея", "nav_wholesale": "Опт · B2B-магазин", "nav_config": "Конфігурація контейнера", "nav_commission": "Комісійна модель", "nav_dist": "Дистриб'ютори", "nav_account": "Увійти / Зареєструватися", "nav_dashboard": "Панель дилера", "nav_logout": "Вийти", "grp_discover": "Відкрийте", "grp_business": "Для бізнесу", "grp_account": "Обліковий запис", "grp_service": "Сервіс", "acct": "⬦ Обліковий запис", "acct_in": "⬦ Мій обліковий запис", "hero_desc": "Історія та здоров'я в кожній краплі. Холодний віджим зі столітніх дерев сорту Chemlali в оливкових гаях Тунісу — з покоління в покоління. Відзначено нагородами на трьох континентах.", "hero_cta1": "Відкрити колекцію", "hero_cta2": "Для бізнесу", "offers_ey": "Преміальна оливкова олія", "offers_h": "Édition Prestige — добірні набори", "purity_lead_pre": "Кислотність нижче", "cta_shop": "До магазину", "cta_ws": "Опт", "add_cart": "До кошика", "incl_vat": "з ПДВ", "unavail": "Тимчасово недоступно", "not_orderable": "Недоступно для замовлення", "cat_glass": "Скляна пляшка", "cat_tin": "Металева банка", "cat_gift": "Подарункове видання", "menu_brand": "Бренд", "menu_quality": "Якість і нагороди", "lnk_story": "Історія", "lnk_about": "Про нас", "lnk_mission": "Місія", "lnk_origin": "Походження · Туніс", "lnk_discover": "Відкрийте Туніс", "lnk_collection": "Колекція", "lnk_offers": "Пропозиції", "lnk_certified": "Сертифікована чистота", "lnk_certs": "Сертифікати та нагороди", "lnk_intl": "Міжнародні нагороди", "lnk_ws": "Оптовики", "lnk_dist": "Дистриб'ютори", "lnk_pallet": "Конфігурація палет", "lnk_b2bshop": "B2B-магазин", "w_products": "Продукція", "acct_sub": "Доступ за кодом · Вхід · Реєстрація", "logout_sub": "Завершити сеанс", "hs_ey": "Zembra la Romaine · Туніс", "hs_title_a": "Там, де все почалося, — ", "hs_title_b": "і нічого не забуто", "hs_lead": "Серед кам'янистого ґрунту та морського повітря ростуть оливкові дерева, старші за будь-який бренд. З їхніх плодів народжується Laperla Vestige — олія, що не заявляє про походження, а доводить його.", "hs_text": "Кожен урожай слідує ритму природи: зібраний вручну, віджатий холодним способом протягом кількох годин і збережений нефільтрованим у найчистішій формі. Без компромісів і скорочень — лише чесна, чиста олія з повною простежуваністю аж до дерева.", "hs_f1": "Моносортова та нефільтрована, єдине походження", "hs_f2": "Від збору до холодного віджиму", "hs_f3": "Сертифіковано, золоті нагороди світу", "hs_bio": "Органічна", "menu_brand_sub": "Історія · Про нас · Місія · Походження · Туніс", "menu_collection_sub": "Продукція · Berlin Edition · Пропозиції", "menu_quality_sub": "Ultra Purity · Сертифікати та нагороди", "menu_b2b_sub": "Оптовики · Дистриб'ютори · Container", "w_all": "Усі", "shop_h": "Колекція", "shop_sub": "Відкрийте Édition Prestige у скляних пляшках, металевих банках і добірних подарункових форматах.", "w_details": "Детальніше", "lnk_editions": "Видання", "lnk_berlin": "Berlin Edition"}, "ar": {"nav_home": "عالم العلامة", "nav_shop": "المتجر · المجموعة", "nav_awards": "الجوائز", "nav_gallery": "المعرض", "nav_wholesale": "الجملة · متجر B2B", "nav_config": "تكوين الحاوية", "nav_commission": "نموذج العمولة", "nav_dist": "شركاء التوزيع", "nav_account": "تسجيل الدخول / التسجيل", "nav_dashboard": "لوحة التاجر الخاصة بي", "nav_logout": "تسجيل الخروج", "grp_discover": "اكتشف", "grp_business": "عملاء الأعمال", "grp_account": "الحساب", "grp_service": "الخدمة", "acct": "⬦ الحساب", "acct_in": "⬦ حسابي", "hero_desc": "تاريخ وصحة في كل قطرة. معصور على البارد من أشجار الشملالي العريقة في بساتين تونس، منذ أجيال. حائز على جوائز في ثلاث قارات.", "hero_cta1": "اكتشف المجموعة", "hero_cta2": "للشركات", "offers_ey": "زيت زيتون فاخر", "offers_h": "Édition Prestige — أطقم مختارة", "purity_lead_pre": "حموضة أقل من", "cta_shop": "إلى المتجر", "cta_ws": "الجملة", "add_cart": "أضف إلى السلة", "incl_vat": "شامل الضريبة", "unavail": "غير متوفر حالياً", "not_orderable": "غير قابل للطلب", "cat_glass": "زجاجة", "cat_tin": "عبوة معدنية", "cat_gift": "إصدار الهدايا", "menu_brand": "العلامة", "menu_quality": "الجودة والجوائز", "lnk_story": "القصة", "lnk_about": "من نحن", "lnk_mission": "المهمة", "lnk_origin": "المنشأ · تونس", "lnk_discover": "اكتشف تونس", "lnk_collection": "المجموعة", "lnk_offers": "العروض", "lnk_certified": "نقاء معتمد", "lnk_certs": "الشهادات والجوائز", "lnk_intl": "جوائز دولية", "lnk_ws": "تجار الجملة", "lnk_dist": "شركاء التوزيع", "lnk_pallet": "تكوين المنصات", "lnk_b2bshop": "متجر B2B", "w_products": "المنتجات", "acct_sub": "دخول برمز · تسجيل الدخول · التسجيل", "logout_sub": "إنهاء الجلسة", "hs_ey": "Zembra la Romaine · تونس", "hs_title_a": "حيث بدأ كل شيء — ", "hs_title_b": "ولم يُنسَ شيء", "hs_lead": "بين التربة الصخرية ونسيم البحر تنمو أشجار زيتون أقدم من أي علامة تجارية. من ثمارها يولد Laperla Vestige — زيت لا يدّعي أصله، بل يثبته.", "hs_text": "كل حصاد يتبع إيقاع الطبيعة: يُقطف يدوياً، ويُعصر على البارد خلال ساعات قليلة، ويُحفظ دون ترشيح في أنقى صوره. لا تنازلات ولا طرق مختصرة — فقط زيت نقي وصادق بإمكانية تتبع كاملة حتى الشجرة.", "hs_f1": "صنف واحد وغير مرشّح من مصدر واحد", "hs_f2": "من الحصاد إلى العصر البارد", "hs_f3": "معتمد وحائز على الذهب دولياً", "hs_bio": "عضوي", "menu_brand_sub": "القصة · من نحن · المهمة · المنشأ · تونس", "menu_collection_sub": "المنتجات · Berlin Edition · العروض", "menu_quality_sub": "Ultra Purity · الشهادات والجوائز", "menu_b2b_sub": "تجار الجملة · شركاء التوزيع · Container", "w_all": "الكل", "shop_h": "المجموعة", "shop_sub": "اكتشف Édition Prestige في زجاجات وعبوات معدنية وتشكيلات هدايا مختارة.", "w_details": "عرض التفاصيل", "lnk_editions": "إصدارات", "lnk_berlin": "Berlin Edition"}, "ja": {"nav_home": "ブランドの世界", "nav_shop": "ショップ · コレクション", "nav_awards": "受賞歴", "nav_gallery": "ギャラリー", "nav_wholesale": "卸売 · B2Bショップ", "nav_config": "コンテナ構成", "nav_commission": "コミッションモデル", "nav_dist": "販売パートナー", "nav_account": "ログイン / 登録", "nav_dashboard": "ディーラーダッシュボード", "nav_logout": "ログアウト", "grp_discover": "発見する", "grp_business": "法人のお客様", "grp_account": "アカウント", "grp_service": "サービス", "acct": "⬦ アカウント", "acct_in": "⬦ マイアカウント", "hero_desc": "一滴一滴に歴史と健康を。チュニジアの畑に育つ古木のChemlaliオリーブから、世代を超えてコールドプレスで搾油。三大陸で受賞。", "hero_cta1": "コレクションを見る", "hero_cta2": "法人のお客様へ", "offers_ey": "プレミアム オリーブオイル", "offers_h": "Édition Prestige — 厳選セット", "purity_lead_pre": "酸度 最大", "cta_shop": "ショップへ", "cta_ws": "卸売", "add_cart": "カートに入れる", "incl_vat": "税込", "unavail": "現在在庫切れ", "not_orderable": "ご注文いただけません", "cat_glass": "ガラスボトル", "cat_tin": "メタル缶", "cat_gift": "ギフトエディション", "menu_brand": "ブランド", "menu_quality": "品質と受賞", "lnk_story": "ストーリー", "lnk_about": "私たちについて", "lnk_mission": "ミッション", "lnk_origin": "産地 · チュニジア", "lnk_discover": "チュニジアを知る", "lnk_collection": "コレクション", "lnk_offers": "オファー", "lnk_certified": "認証された純度", "lnk_certs": "認証と受賞", "lnk_intl": "国際的な受賞歴", "lnk_ws": "卸売業者", "lnk_dist": "販売パートナー", "lnk_pallet": "パレット構成", "lnk_b2bshop": "B2Bショップ", "w_products": "製品", "acct_sub": "コードアクセス · ログイン · 登録", "logout_sub": "セッションを終了", "hs_ey": "Zembra la Romaine · チュニジア", "hs_title_a": "すべてが始まった場所 — ", "hs_title_b": "何ひとつ忘れられていない", "hs_lead": "岩の大地と海風のあいだに、どのブランドよりも古いオリーブの木々が育ちます。その果実から生まれるLaperla Vestigeは、産地を語るのではなく、品質で証明するオイルです。", "hs_text": "収穫はすべて自然のリズムに従います。手摘みで収穫し、数時間以内にコールドプレスで搾油、無濾過のまま最も純粋な姿で瓶詰めします。妥協も近道もなく、木まで完全に遡れる、誠実でクリーンなオイルだけをお届けします。", "hs_f1": "単一品種・無濾過・単一産地", "hs_f2": "収穫からコールドプレスまで", "hs_f3": "認証取得・国際金賞受賞", "hs_bio": "オーガニック", "menu_brand_sub": "ストーリー · 私たちについて · ミッション · 産地 · チュニジア", "menu_collection_sub": "製品 · Berlin Edition · オファー", "menu_quality_sub": "Ultra Purity · 認証と受賞", "menu_b2b_sub": "卸売業者 · 販売パートナー · Container", "w_all": "すべて", "shop_h": "コレクション", "shop_sub": "Édition Prestigeを、ガラスボトル・メタル缶・厳選ギフト形式でお楽しみください。", "w_details": "詳細を見る", "lnk_editions": "エディション", "lnk_berlin": "Berlin Edition"}, "zh": {"nav_home": "品牌世界", "nav_shop": "商店 · 系列", "nav_awards": "奖项", "nav_gallery": "画廊", "nav_wholesale": "批发 · B2B商店", "nav_config": "集装箱配置", "nav_commission": "佣金模式", "nav_dist": "分销合作伙伴", "nav_account": "登录 / 注册", "nav_dashboard": "我的经销商面板", "nav_logout": "退出登录", "grp_discover": "探索", "grp_business": "企业客户", "grp_account": "账户", "grp_service": "服务", "acct": "⬦ 账户", "acct_in": "⬦ 我的账户", "hero_desc": "每一滴都蕴含历史与健康。源自突尼斯橄榄园中古老的Chemlali橄榄树，世代相传，冷压萃取。荣获三大洲奖项。", "hero_cta1": "探索系列", "hero_cta2": "企业客户", "offers_ey": "高级橄榄油", "offers_h": "Édition Prestige — 精选套装", "purity_lead_pre": "酸度低于", "cta_shop": "前往商店", "cta_ws": "批发", "add_cart": "加入购物车", "incl_vat": "含增值税", "unavail": "暂时缺货", "not_orderable": "暂不可订购", "cat_glass": "玻璃瓶", "cat_tin": "金属罐", "cat_gift": "礼品版", "menu_brand": "品牌", "menu_quality": "品质与奖项", "lnk_story": "品牌故事", "lnk_about": "关于我们", "lnk_mission": "使命", "lnk_origin": "产地 · 突尼斯", "lnk_discover": "探索突尼斯", "lnk_collection": "产品系列", "lnk_offers": "优惠", "lnk_certified": "认证纯度", "lnk_certs": "证书与奖项", "lnk_intl": "国际奖项", "lnk_ws": "批发商", "lnk_dist": "分销合作伙伴", "lnk_pallet": "托盘配置", "lnk_b2bshop": "B2B商店", "w_products": "产品", "acct_sub": "代码访问 · 登录 · 注册", "logout_sub": "结束会话", "hs_ey": "Zembra la Romaine · 突尼斯", "hs_title_a": "一切的起点 — ", "hs_title_b": "传承从未被遗忘", "hs_lead": "在岩石土壤与海风之间，生长着比任何品牌都古老的橄榄树。它们的果实孕育出Laperla Vestige——一款不空谈产地、而以品质证明产地的橄榄油。", "hs_text": "每一次采收都遵循自然的节奏：手工采摘，数小时内冷压萃取，未经过滤，保留最纯净的形态。没有妥协，没有捷径——只有诚实、纯净、可全程追溯至每一棵树的橄榄油。", "hs_f1": "单一品种，未经过滤，单一产地", "hs_f2": "从采收到冷压萃取", "hs_f3": "权威认证，国际金奖", "hs_bio": "有机", "menu_brand_sub": "品牌故事 · 关于我们 · 使命 · 产地 · 突尼斯", "menu_collection_sub": "产品 · Berlin Edition · 优惠", "menu_quality_sub": "Ultra Purity · 证书与奖项", "menu_b2b_sub": "批发商 · 分销合作伙伴 · Container", "w_all": "全部", "shop_h": "产品系列", "shop_sub": "以玻璃瓶、金属罐及精选礼品形式，探索Édition Prestige系列。", "w_details": "查看详情", "lnk_editions": "版本", "lnk_berlin": "Berlin Edition"}, "ko": {"nav_home": "브랜드 세계", "nav_shop": "숍 · 컬렉션", "nav_awards": "수상 내역", "nav_gallery": "갤러리", "nav_wholesale": "도매 · B2B 숍", "nav_config": "컨테이너 구성", "nav_commission": "커미션 모델", "nav_dist": "유통 파트너", "nav_account": "로그인 / 회원가입", "nav_dashboard": "딜러 대시보드", "nav_logout": "로그아웃", "grp_discover": "둘러보기", "grp_business": "기업 고객", "grp_account": "계정", "grp_service": "서비스", "acct": "⬦ 계정", "acct_in": "⬦ 내 계정", "hero_desc": "한 방울마다 역사와 건강을 담았습니다. 튀니지 올리브 밭의 오래된 Chemlali 나무에서 대대로 콜드프레스 방식으로 얻은 오일. 3개 대륙에서 수상했습니다.", "hero_cta1": "컬렉션 보기", "hero_cta2": "기업 고객", "offers_ey": "프리미엄 올리브 오일", "offers_h": "Édition Prestige — 큐레이티드 세트", "purity_lead_pre": "산도 최대", "cta_shop": "숍으로", "cta_ws": "도매", "add_cart": "장바구니에 담기", "incl_vat": "부가세 포함", "unavail": "일시 품절", "not_orderable": "주문 불가", "cat_glass": "유리병", "cat_tin": "메탈 캔", "cat_gift": "기프트 에디션", "menu_brand": "브랜드", "menu_quality": "품질 및 수상", "lnk_story": "스토리", "lnk_about": "회사 소개", "lnk_mission": "미션", "lnk_origin": "원산지 · 튀니지", "lnk_discover": "튀니지 둘러보기", "lnk_collection": "컬렉션", "lnk_offers": "프로모션", "lnk_certified": "인증된 순도", "lnk_certs": "인증서 및 수상", "lnk_intl": "국제 수상", "lnk_ws": "도매업체", "lnk_dist": "유통 파트너", "lnk_pallet": "팔레트 구성", "lnk_b2bshop": "B2B 숍", "w_products": "제품", "acct_sub": "코드 액세스 · 로그인 · 가입", "logout_sub": "세션 종료", "hs_ey": "Zembra la Romaine · 튀니지", "hs_title_a": "모든 것이 시작된 곳 — ", "hs_title_b": "그리고 아무것도 잊히지 않았습니다", "hs_lead": "바위투성이 땅과 바닷바람 사이에서 어떤 브랜드보다 오래된 올리브나무가 자랍니다. 그 열매에서 태어난 Laperla Vestige는 원산지를 주장하는 것이 아니라 증명하는 오일입니다.", "hs_text": "모든 수확은 자연의 리듬을 따릅니다. 손으로 수확하여 몇 시간 안에 콜드프레스로 착유하고, 여과하지 않은 가장 순수한 형태로 담습니다. 타협도 지름길도 없이, 나무까지 완전히 추적 가능한 정직하고 깨끗한 오일만을 전합니다.", "hs_f1": "단일 품종 · 무여과 · 단일 원산지", "hs_f2": "수확부터 콜드프레스까지", "hs_f3": "인증 획득 · 국제 금상 수상", "hs_bio": "유기농", "menu_brand_sub": "스토리 · 회사 소개 · 미션 · 원산지 · 튀니지", "menu_collection_sub": "제품 · Berlin Edition · 프로모션", "menu_quality_sub": "Ultra Purity · 인증서 및 수상", "menu_b2b_sub": "도매업체 · 유통 파트너 · Container", "w_all": "전체", "shop_h": "컬렉션", "shop_sub": "유리병, 메탈 캔, 엄선된 기프트 형태의 Édition Prestige를 만나보세요.", "w_details": "상세 보기", "lnk_editions": "에디션", "lnk_berlin": "Berlin Edition"}};
let currentLang="de";
function applyLang(lang){
  currentLang=lang;const d=I18N[lang]||I18N.de;
  document.querySelectorAll("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;const v=(d[k]!==undefined)?d[k]:I18N.de[k];if(v!==undefined){el.textContent=v;el.dir=(lang==="ar")?"auto":"";}});
  const lc=document.getElementById("langCurrent");if(lc)lc.textContent=lang.toUpperCase();
  document.querySelectorAll(".lang-opt").forEach(o=>o.classList.toggle("active",o.dataset.lang===lang));
  document.documentElement.lang=lang;
  try{localStorage.setItem("laperla_lang",lang);}catch(e){}
  if(typeof renderProducts==="function"&&document.getElementById("productGrid"))renderProducts(window.__lastFilter||"all");
  const ab=document.getElementById("acctBtn");if(ab&&!ab.querySelector("*"))ab.textContent=(window.__isLoggedIn&&window.__isLoggedIn())?d.acct_in:d.acct;
}

document.addEventListener("DOMContentLoaded",()=>{
  window.__toast=toast;
  renderProducts();renderAwards();renderFaqs();renderHeritageArt();renderConfig();renderDashboard();renderMaps();renderGallery();updateCart();

  // GATE
  const gate=document.getElementById("gate");
  document.querySelectorAll(".path-card").forEach(c=>c.addEventListener("click",()=>{
    const p=c.dataset.path;
    const dest=p==="retail"?"home":"wholesale";
    gate.classList.add("hidden");
    setTimeout(()=>go(dest),300);
  }));

  // NAV
  document.querySelectorAll("[data-nav]").forEach(el=>el.addEventListener("click",e=>{
    e.preventDefault();
    go(el.dataset.nav,{legalTarget:el.dataset.legaltarget||null,scrollTarget:el.dataset.scroll||null});
    if(el.dataset.legaltarget){showLegal(el.dataset.legaltarget);}
  }));

  // LEGAL tabs
  function showLegal(key){
    document.querySelectorAll(".legal-tab").forEach(t=>t.classList.toggle("active",t.dataset.legal===key));
    document.querySelectorAll(".legal-content").forEach(c=>c.classList.remove("active"));
    const el=document.getElementById("legal-"+key);if(el)el.classList.add("active");
    const titles={impressum:"Impressum",datenschutz:"Datenschutz",cookies:"Cookie-Richtlinie",versandzahlung:"Versand & Zahlung",agb:"Allgemeine Geschäftsbedingungen",widerruf:"Widerrufsbelehrung"};
    const h=document.getElementById("legalHeading");if(h)h.textContent=titles[key]||"Rechtliche Informationen";
  }
  window.__showLegal=showLegal;
  document.querySelectorAll(".legal-tab").forEach(t=>t.addEventListener("click",()=>{
    showLegal(t.dataset.legal);
    syncBrowserHistory("legal",{legalTarget:t.dataset.legal});
  }));
  initBrowserHistory();

  // header scroll
  const header=document.getElementById("header");
  window.addEventListener("scroll",()=>header.classList.toggle("scrolled",window.scrollY>40));

  // SLIDE MENU
  const slideMenu=document.getElementById("slideMenu"), menuOverlay=document.getElementById("menuOverlay");
  window.openMenu=()=>{slideMenu.classList.add("open");menuOverlay.classList.add("open");};
  window.closeMenu=()=>{slideMenu.classList.remove("open");menuOverlay.classList.remove("open");};
  document.getElementById("burger").addEventListener("click",openMenu);
  document.getElementById("menuClose").addEventListener("click",closeMenu);
  menuOverlay.addEventListener("click",closeMenu);
  // menu links with optional scroll-to-section
  document.querySelectorAll("[data-scroll]").forEach(l=>l.addEventListener("click",e=>{
    const sec=l.dataset.scroll;
    setTimeout(()=>{
      const el=document.getElementById(sec);
      if(el){
        const y=el.getBoundingClientRect().top + window.pageYOffset - 96;
        window.scrollTo({top:Math.max(0,y),behavior:"smooth"});
      }
    },420);
  }));

  // LANGUAGE SWITCH
  const langBtn=document.getElementById("langBtn"),langMenu=document.getElementById("langMenu");
  langBtn.addEventListener("click",e=>{e.stopPropagation();langMenu.classList.toggle("open");});
  document.addEventListener("click",()=>langMenu.classList.remove("open"));
  document.querySelectorAll(".lang-opt").forEach(o=>o.addEventListener("click",()=>{applyLang(o.dataset.lang);langMenu.classList.remove("open");const nm=o.querySelector(".lo-name");toast(nm?nm.textContent:o.textContent);}));

  // filters
  function applyShopFilter(filter){
    const safe=filter||"all";
    document.querySelectorAll(".filter-chip").forEach(x=>x.classList.toggle("active",x.dataset.filter===safe));
    renderProducts(safe);
  }
  document.getElementById("shopFilters").addEventListener("click",e=>{const c=e.target.closest(".filter-chip");if(!c)return;applyShopFilter(c.dataset.filter);});

  // product detail lightbox
  const productDetailLightbox=document.getElementById("productDetailLightbox");
  const productDetailMedia=document.getElementById("productDetailMedia");
  const productDetailKicker=document.getElementById("productDetailKicker");
  const productDetailTitle=document.getElementById("productDetailTitle");
  const productDetailVol=document.getElementById("productDetailVol");
  const productDetailNotes=document.getElementById("productDetailNotes");
  const productDetailTrust=document.getElementById("productDetailTrust");
  const productDetailPrice=document.getElementById("productDetailPrice");
  const productDetailAction=document.getElementById("productDetailAction");
  function openProductDetail(id){
    const p=PRODUCTS.find(x=>x.id===id);if(!p)return;
    const imgs=p.images?.length?p.images:[p.img||IMG.shop];
    productDetailMedia.classList.toggle("is-pair",imgs.length>1);
    productDetailMedia.innerHTML=imgs.map((src,i)=>`<img src="${src}" alt="${p.name}${imgs.length>1?` – Flasche ${i+1}`:""}">`).join("");
    productDetailKicker.textContent=p.cat==="glass"?"Glasflasche":p.cat==="tin"?"Metalldose":"Geschenkedition";
    productDetailTitle.textContent=p.name;
    productDetailVol.textContent=p.vol;
    productDetailNotes.textContent=p.notes;
    if(p.trust){productDetailTrust.hidden=false;productDetailTrust.textContent="★ "+p.trust;}else{productDetailTrust.hidden=true;productDetailTrust.textContent="";}
    productDetailPrice.innerHTML=p.available===false?"":`${fmt(p.price)}<small>${t("incl_vat")}</small>`;
    productDetailAction.innerHTML=p.available===false
      ? `<div class="product-detail-unavailable">Zurzeit nicht verfügbar</div>`
      : `<button class="btn btn-gold" type="button" data-detail-add="${p.id}">In den Warenkorb</button>`;
    productDetailLightbox.classList.add("open");
    productDetailLightbox.setAttribute("aria-hidden","false");
    document.body.style.overflow="hidden";
  }
  function closeProductDetail(){
    productDetailLightbox.classList.remove("open");
    productDetailLightbox.setAttribute("aria-hidden","true");
    document.body.style.overflow="";
  }
  document.getElementById("productGrid").addEventListener("click",e=>{
    const detail=e.target.closest("[data-product-detail]");
    if(detail){openProductDetail(detail.dataset.productDetail);return;}
  });
  document.getElementById("productDetailClose").addEventListener("click",closeProductDetail);
  productDetailLightbox.addEventListener("click",e=>{if(e.target===productDetailLightbox)closeProductDetail();});
  productDetailAction.addEventListener("click",e=>{const b=e.target.closest("[data-detail-add]");if(!b)return;addToCart(b.dataset.detailAdd);closeProductDetail();openCart();});
  document.addEventListener("keydown",e=>{if(e.key==="Escape"&&productDetailLightbox.classList.contains("open"))closeProductDetail();});

  // add to cart
  document.getElementById("productGrid").addEventListener("click",e=>{const b=e.target.closest("[data-add]");if(!b)return;addToCart(b.dataset.add);b.classList.add("added");b.textContent="✓ Hinzugefügt";setTimeout(()=>{b.classList.remove("added");b.textContent="In den Warenkorb";},1400);});
  document.addEventListener("click",e=>{
    const quickAdd=e.target.closest("[data-add]");
    if(quickAdd && !quickAdd.closest("#productGrid")){
      addToCart(quickAdd.dataset.add);
      const original=quickAdd.textContent;
      quickAdd.textContent="✓ Im Warenkorb";
      setTimeout(()=>quickAdd.textContent=original,1400);
    }
    const filterTrigger=e.target.closest("[data-filter-target]");
    if(filterTrigger){
      const target=filterTrigger.dataset.filterTarget||"all";
      go("shop");
      setTimeout(()=>applyShopFilter(target),180);
    }
  });

  // offers add-to-cart
  document.querySelectorAll("[data-offer]").forEach(btn=>btn.addEventListener("click",()=>{
    const o=OFFERS[btn.dataset.offer];if(!o)return;
    const id="offer_"+btn.dataset.offer;const l=cart.find(x=>x.id===id);
    if(l)l.qty++;else cart.push({id,name:o.name,vol:o.vol,price:o.price,qty:1});
    updateCart();toast(`„${o.name}" hinzugefügt`);openCart();
  }));

  // cart
  document.getElementById("cartBtn").addEventListener("click",openCart);
  document.getElementById("cartClose").addEventListener("click",closeCart);
  document.getElementById("drawerOverlay").addEventListener("click",closeCart);
  document.getElementById("cartItems").addEventListener("click",e=>{const b=e.target.closest("[data-qty]");if(!b)return;changeQty(b.dataset.qty,parseInt(b.dataset.d));});

  // retail checkout
  document.getElementById("checkoutBtn").addEventListener("click",()=>{if(!cart.length){toast("Ihr Warenkorb ist leer");return;}closeCart();openCheckout("retail");});

  // config
  document.getElementById("toConfig")&&document.getElementById("toConfig").addEventListener("click",()=>document.getElementById("configurator").scrollIntoView({behavior:"smooth"}));
  document.getElementById("configProducts").addEventListener("click",e=>{const b=e.target.closest("[data-cfg]");if(!b)return;const id=b.dataset.cfg,d=parseInt(b.dataset.d);configState[id]=Math.max(0,(configState[id]||0)+d);document.getElementById("cfg-"+id).value=configState[id];updateConfig();});
  document.getElementById("configCheckout").addEventListener("click",()=>{const t=window._configTotal||0;if(t<=0){toast("Bitte wählen Sie zuerst Artikel");return;}openCheckout("b2b",fmtInt(Math.round(t))+" zzgl. MwSt.","B2B-Kaufvertrag","Sofortzahlung & verbindlicher Vertragsabschluss.");});

  // checkout modal
  const cm=document.getElementById("checkoutModal");
  document.getElementById("checkoutClose").addEventListener("click",closeCheckout);
  cm.addEventListener("click",e=>{if(e.target===cm)closeCheckout();});
  document.getElementById("customerType").addEventListener("change",showCheckoutBusinessFields);
  document.getElementById("sameShipping").addEventListener("change",toggleShippingFields);
  document.getElementById("deliveryMethod").addEventListener("change",renderCheckoutSummary);
  document.getElementById("checkoutNext").addEventListener("click",()=>{if(validateCheckoutStep(checkoutStep))setCheckoutStep(checkoutStep+1);});
  document.getElementById("checkoutBack").addEventListener("click",()=>setCheckoutStep(checkoutStep-1));
  document.getElementById("placeOrder").addEventListener("click",async()=>{
    if(!document.getElementById("checkoutTerms").checked){toast("Bitte akzeptieren Sie die AGB");return;}
    if(!document.getElementById("checkoutPrivacy").checked){toast("Bitte bestätigen Sie den Datenschutz");return;}
    if(!document.getElementById("checkoutWithdrawal").checked){toast("Bitte bestätigen Sie die Widerrufsbelehrung");return;}
    const button=document.getElementById("placeOrder");button.disabled=true;button.textContent="Anfrage wird gesichert …";
    const order=buildOrderRequest(); const localSaved=saveOrderLocally(order); const result=await transmitOrder(order);
    if(result.ok && result.data?.orderNumber)order.orderNumber=result.data.orderNumber;
    lastSubmittedOrder=order;
    document.getElementById("checkoutFormView").style.display="none";
    document.getElementById("orderDoneView").style.display="block";
    document.getElementById("orderDoneNumber").textContent=order.orderNumber;
    applyOrderTransmissionResult(order,result,localSaved);
    if(result.ok && checkoutMode==="retail"){cart=[];updateCart();}
    button.disabled=false;button.textContent="Bestellanfrage absenden";
  });
  document.getElementById("downloadOrderCopy").addEventListener("click",()=>downloadOrderCopy(lastSubmittedOrder));
  document.getElementById("retryOrderSend").addEventListener("click",async()=>{
    if(!lastSubmittedOrder)return;
    const retry=document.getElementById("retryOrderSend");
    retry.disabled=true;retry.textContent="E-Mail wird erneut gesendet …";
    const result=await transmitOrder(lastSubmittedOrder);
    applyOrderTransmissionResult(lastSubmittedOrder,result,true);
    if(result.ok && checkoutMode==="retail"){cart=[];updateCart();}
    retry.disabled=false;retry.textContent="E-Mail erneut senden";
  });
  document.getElementById("orderDoneClose").addEventListener("click",()=>{closeCheckout();go(checkoutMode==="b2b"?(loggedIn?"dashboard":"wholesale"):"shop");});

  // FAQ
  document.getElementById("faqList").addEventListener("click",e=>{const it=e.target.closest(".faq-item");if(!it)return;it.classList.toggle("open");});

  // awards lightbox
  const lightbox=document.getElementById("lightbox");
  const lbImg=document.getElementById("lbImg");
  const lbKicker=document.getElementById("lbKicker");
  const lbTitle=document.getElementById("lbTitle");
  const lbMeta=document.getElementById("lbMeta");
  const lbDesc=document.getElementById("lbDesc");
  function openAwardLightbox({img,kicker,title,meta,desc}){
    lbImg.src=img; lbKicker.textContent=kicker||"Luxury Gallery"; lbTitle.textContent=title||"Award"; lbMeta.textContent=meta||""; lbDesc.textContent=desc||"";
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden","false");
    document.body.style.overflow="hidden";
  }
  function closeAwardLightbox(){
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden","true");
    document.body.style.overflow="";
  }
  function openCertFromCard(card){
    const a=AWARDS_DATA.find(x=>x.key===card.dataset.cert); if(!a) return;
    openAwardLightbox({
      img:AWARD_IMG[a.key],
      kicker:a.place.includes("2026") ? "2026 Spotlight" : (a.flag || "Official Certificate"),
      title:a.name,
      meta:a.place,
      desc:a.desc
    });
  }
  document.getElementById("certGallery").addEventListener("click",e=>{
    const c=e.target.closest("[data-cert]"); if(!c) return;
    openCertFromCard(c);
  });
  document.getElementById("awards2026Spotlight")?.addEventListener("click",e=>{
    const c=e.target.closest("[data-cert]"); if(!c) return;
    openCertFromCard(c);
  });
  function openMedalFromCard(card){
    const m=MEDALS[Number(card.dataset.medal)]; if(!m) return;
    const parts=m.y.split(" "); const year=parts.pop(); const city=parts.join(" ");
    const rank=m.l.toLowerCase().includes("double") ? "Double Gold" : m.l.toLowerCase().includes("extra") ? "Extragold" : m.l.toLowerCase().includes("best") ? "Best Award" : "Gold Medal";
    openAwardLightbox({
      img:IMG.goldSeal,
      kicker:year==="2026" ? "Goldmedaillon 2026" : "International Award",
      title:rank,
      meta:city+" · "+year,
      desc:year==="2026"
        ? "Aktuelle 2026-Goldmedaille im Vordergrund der Laperla Awards. Diese Auszeichnung steht als erster sichtbarer Qualitätsbeweis für die Premium-Positionierung der Marke."
        : "Kuratierte Medaillen-Ansicht aus der Laperla Award-Sammlung. Diese Auszeichnung steht für internationale Anerkennung, sichtbare Premium-Qualität und eine starke Vertrauenswirkung im Auftritt der Marke."
    });
  }
  ["medalRow2026","medalRow"].forEach(id=>{
    const row=document.getElementById(id); if(!row) return;
    row.addEventListener("click",e=>{const c=e.target.closest("[data-medal]"); if(!c) return; openMedalFromCard(c);});
    row.addEventListener("keydown",e=>{if((e.key==="Enter"||e.key===" ")&&e.target.closest("[data-medal]")){e.preventDefault();openMedalFromCard(e.target.closest("[data-medal]"));}});
  });
  document.getElementById("lbClose").addEventListener("click",closeAwardLightbox);
  lightbox.addEventListener("click",e=>{if(e.target.id==="lightbox")closeAwardLightbox();});
  document.addEventListener("keydown",e=>{if(e.key==="Escape"&&lightbox.classList.contains("open"))closeAwardLightbox();});

  // AUTH
  // AUTH — customer type toggle
  let custType="private";
  function applyCust(){
    document.querySelectorAll(".cust-opt").forEach(o=>o.classList.toggle("active",o.dataset.cust===custType));
    document.querySelectorAll("[data-cust-form]").forEach(f=>{f.style.display=(f.dataset.custForm===custType && document.querySelector('.auth-tab.active').dataset.auth==='register')?"flex":"none";});
    document.querySelectorAll("[data-cust-show]").forEach(e=>{e.style.display=e.dataset.custShow===custType?"inline":"none";});
  }
  window.setCustType=(t)=>{custType=t;applyCust();};
  document.querySelectorAll(".cust-opt").forEach(o=>o.addEventListener("click",()=>{custType=o.dataset.cust;applyCust();}));
  document.querySelectorAll(".auth-tab").forEach(t=>t.addEventListener("click",()=>{
    document.querySelectorAll(".auth-tab").forEach(x=>x.classList.remove("active"));t.classList.add("active");
    const mode=t.dataset.auth;
    document.getElementById("form-login").classList.toggle("active",mode==="login");
    const showReg=mode==="register";
    document.getElementById("form-register").classList.toggle("active",showReg && custType==="private");
    document.getElementById("form-register-biz").classList.toggle("active",showReg && custType==="business");
    document.getElementById("form-register").style.display=(showReg&&custType==="private")?"flex":"none";
    document.getElementById("form-register-biz").style.display=(showReg&&custType==="business")?"flex":"none";
    document.getElementById("form-login").style.display=mode==="login"?"flex":"none";
  }));
  // reflect login state in menu + header
  function updateAccountUI(){
    const dash=document.getElementById("menuDashLink"),logout=document.getElementById("menuLogoutLink"),acctL=document.getElementById("menuAccountLink");
    if(dash)dash.style.display=loggedIn?"block":"none";
    if(logout)logout.style.display=loggedIn?"block":"none";
    if(acctL)acctL.style.display=loggedIn?"none":"block";
    const d=I18N[currentLang]||I18N.de;
    const ab=document.getElementById("acctBtn");if(ab)ab.textContent=loggedIn?d.acct_in:d.acct;
  }
  window.__updateAccountUI=updateAccountUI;
  window.__isLoggedIn=()=>loggedIn;
  document.getElementById("loginBtn").addEventListener("click",()=>{
    if(custType==="business"){loggedIn=true;updateAccountUI();toast("Willkommen zurück, Stephan Blumann");go("dashboard");}
    else{loggedIn=true;updateAccountUI();toast("Willkommen zurück!");go("shop");}
  });
  document.getElementById("registerBtnP").addEventListener("click",()=>{if(!document.getElementById("regTermsP").checked){toast("Bitte AGB & Datenschutz akzeptieren");return;}loggedIn=true;updateAccountUI();toast("Privatkonto erstellt — willkommen!");go("shop");});
  document.getElementById("registerBtn").addEventListener("click",()=>{if(!document.getElementById("regTerms").checked){toast("Bitte AGB & Datenschutz akzeptieren");return;}loggedIn=true;updateAccountUI();toast("Händlerkonto erstellt");go("dashboard");});
  // LOGOUT
  document.getElementById("menuLogoutLink").addEventListener("click",e=>{e.preventDefault();loggedIn=false;updateAccountUI();toast("Sie wurden abgemeldet");go("home");});
  document.getElementById("dashLogout").addEventListener("click",()=>{loggedIn=false;updateAccountUI();toast("Sie wurden abgemeldet");go("home");});
  applyCust();updateAccountUI();(function(){let l="de";try{const sv=localStorage.getItem("laperla_lang");if(sv&&I18N[sv])l=sv;}catch(e){}applyLang(l);})();

  // dashboard tabs
  document.querySelectorAll(".dash-tab").forEach(t=>t.addEventListener("click",()=>{document.querySelectorAll(".dash-tab").forEach(x=>x.classList.remove("active"));t.classList.add("active");document.querySelectorAll(".dash-panel").forEach(p=>p.classList.remove("active"));document.getElementById("dash-"+t.dataset.dash).classList.add("active");}));
  document.getElementById("payInvoice").addEventListener("click",()=>openCheckout("b2b","3.480,00 €","Rechnung begleichen","Rechnung LP-2026-0042 · sofortige Zahlung."));

  // marquee duplicate
  const mq=document.getElementById("mq"); if(mq && !mq.dataset.ready){ const base=mq.innerHTML; mq.innerHTML=base+base+base+base; mq.dataset.ready="1"; }

  // animate ship slightly on track map
  let prog=0.6, dir=1;
  setInterval(()=>{prog+=0.0015*dir;if(prog>0.66||prog<0.54)dir*=-1;const tm=document.getElementById("trackMap");if(tm&&document.getElementById("page-dashboard").classList.contains("active"))tm.innerHTML=mapSVG(prog);},120);
});
// expose for config button
window._scrollConfig=false;

</script>
<div aria-hidden="true" class="gallery-lightbox" id="galleryLightbox">
<button aria-label="Galerie schließen" class="gallery-lightbox-close" id="galleryLightboxClose">×</button>
<div class="gallery-lightbox-inner">
<div class="gallery-lightbox-media"><img alt="Galeriebild" id="galleryLightboxImage"/></div>
<div class="gallery-lightbox-copy">
<div class="k" id="galleryLightboxKicker">Galerie</div>
<h3 id="galleryLightboxTitle">Laperla</h3>
<p id="galleryLightboxDesc">Kuratiertes Bild aus der Laperla Bildwelt.</p>
</div>
</div>
</div>
<script>
(function(){
  const EXPORT_EMAIL = "info@aniso-olive.de";
  const API_REQUEST_ENDPOINT = "/api/b2b-requests";
  const API_EMAIL_ENDPOINT = "/api/send-b2b-request";
  function getRequests(){
    try{return JSON.parse(localStorage.getItem("laperlaB2BRequests")||"[]")}catch(e){return []}
  }
  function saveRequests(list){
    localStorage.setItem("laperlaB2BRequests", JSON.stringify(list));
  }
  function backendStatus(msg,type="warn"){
    const box=document.getElementById("backendStatusBox");
    if(!box) return;
    box.innerHTML=msg;
    box.className="backend-status show "+type;
  }
  async function sendRequestToBackend(req){
    try{
      const res=await fetch(API_REQUEST_ENDPOINT,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(req)
      });
      if(!res.ok) throw new Error("Backend Antwort: "+res.status);
      backendStatus("<b>Backend verbunden.</b><br>Die Anfrage wurde in der Datenbank gespeichert.","ok");
      return true;
    }catch(err){
      backendStatus("<b>Lokal gespeichert.</b><br>Backend/API ist in dieser Vorschau noch nicht verbunden. Sobald die Seite mit dem Backend-Paket läuft, wird die Anfrage automatisch über /api/b2b-requests gespeichert.","warn");
      return false;
    }
  }
  function getLastRequest(){
    const reqs=getRequests();
    return reqs.length ? reqs[reqs.length-1] : null;
  }
  function statusBox(msg){
    const box=document.getElementById("approvalStatusBox");
    if(!box) return;
    box.innerHTML=msg;
    box.classList.add("show");
  }
  function getCountryValues(scope){
    if(!scope) return [];
    return Array.from(scope.querySelectorAll('input[name="countries"]:checked')).map(i=>i.value).filter(Boolean);
  }
  function setCountryValues(scope, values){
    if(!scope) return;
    const arr = Array.isArray(values)?values:String(values||"").split(",").map(v=>v.trim()).filter(Boolean);
    scope.querySelectorAll('input[name="countries"]').forEach(input=>input.checked = arr.includes(input.value));
  }
  function ensureCountriesSelected(scope){
    const values=getCountryValues(scope);
    if(values.length) return true;
    if(window.__toast) window.__toast("Bitte mindestens ein Land auswählen");
    const first=scope?.querySelector('input[name="countries"]');
    if(first) first.focus();
    return false;
  }
  function needsExclusiveConsent(value){
    return /Exklusiv/i.test(String(value||""));
  }
  function validateExclusiveConsent(scope){
    const exclusivityField=scope.querySelector('[name="exclusivity"]');
    const consentField=scope.querySelector('[name="exclusiveConsent"]');
    if(!exclusivityField || !consentField) return true;
    if(needsExclusiveConsent(exclusivityField.value) && !consentField.checked){
      if(window.__toast) window.__toast("Bitte bestätigen Sie die Exklusivitäts-Bedingung");
      consentField.focus();
      return false;
    }
    return true;
  }
  function requestSummary(req){
    if(!req) return "";
    return [
      `Firma: ${req.company||'-'}`,
      `Ansprechpartner: ${req.contact||'-'}`,
      `E-Mail: ${req.email||'-'}`,
      `Telefon: ${req.phone||'-'}`,
      `Vertriebsländer: ${req.countriesJoined||req.country||'-'}`,
      `Region: ${req.region||'-'}`,
      `Exklusivität: ${req.exclusivity||'-'}`,
      `Exklusivitäts-Bestätigung: ${req.exclusiveConsent ? 'Ja' : 'Nein'}`,
      `Geschäftsart: ${req.type||'-'}`,
      `Menge: ${req.volume||'-'}`,
      `Nachricht: ${req.message||'-'}`,
      `Eingang: ${req.date||'-'}`,
    ].join("\n");
  }
  function showExportActions(show=true){
    const box=document.getElementById('approvalExportActions');
    if(box) box.classList.toggle('show', !!show);
  }
  function pdfEscape(text){
    return String(text||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^\x20-\x7E]/g,"-").replace(/[()\\]/g, "\\$&");
  }
  function wrapPdfLine(text,max=86){
    const words=String(text||"").split(/\s+/);
    const lines=[]; let line="";
    words.forEach(w=>{
      if((line+" "+w).trim().length>max){ if(line) lines.push(line); line=w; }
      else line=(line+" "+w).trim();
    });
    if(line) lines.push(line);
    return lines.length?lines:[""];
  }
  function createPdfBlob(req){
    const rawLines = [
      "LAPERLA B2B-ANFRAGE",
      "Erstellt: "+new Date().toLocaleString("de-DE"),
      "",
      "Firma: "+(req.company||"-"),
      "Ansprechpartner: "+(req.contact||"-"),
      "E-Mail: "+(req.email||"-"),
      "Telefon: "+(req.phone||"-"),
      "Vertriebslaender: "+(req.countriesJoined||req.country||"-"),
      "Region: "+(req.region||"-"),
      "Exklusivitaet: "+(req.exclusivity||"-"),
      "Exklusivitaets-Bestaetigung: "+(req.exclusiveConsent ? "Ja" : "Nein"),
      "Geschaeftsart: "+(req.type||"-"),
      "Geplante Menge: "+(req.volume||"-"),
      "",
      "Nachricht:",
      ...(wrapPdfLine(req.message||"-",86)),
      "",
      "Hinweis: Exklusivrechte gelten erst nach schriftlicher Zustimmung von Laperla."
    ].flatMap(l=>wrapPdfLine(l,86));

    const contentParts=["BT","/F1 11 Tf","50 790 Td"];
    rawLines.slice(0,52).forEach((line,i)=>{
      if(i>0) contentParts.push("0 -15 Td");
      contentParts.push("("+pdfEscape(line)+") Tj");
    });
    contentParts.push("ET");
    const stream=contentParts.join("\\n");
    const enc=new TextEncoder();
    const objects=[
      "1 0 obj\\n<< /Type /Catalog /Pages 2 0 R >>\\nendobj\\n",
      "2 0 obj\\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\\nendobj\\n",
      "3 0 obj\\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>\\nendobj\\n",
      "4 0 obj\\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\\nendobj\\n",
      "5 0 obj\\n<< /Length "+enc.encode(stream).length+" >>\\nstream\\n"+stream+"\\nendstream\\nendobj\\n"
    ];
    let pdf="%PDF-1.4\\n";
    const offsets=[0];
    objects.forEach(o=>{ offsets.push(enc.encode(pdf).length); pdf+=o; });
    const xref=enc.encode(pdf).length;
    pdf+="xref\\n0 6\\n0000000000 65535 f \\n";
    for(let i=1;i<=5;i++) pdf+=String(offsets[i]).padStart(10,"0")+" 00000 n \\n";
    pdf+="trailer\\n<< /Size 6 /Root 1 0 R >>\\nstartxref\\n"+xref+"\\n%%EOF";
    return new Blob([pdf],{type:"application/pdf"});
  }
  function downloadBlob(blob, filename){
    const a=document.createElement("a");
    a.href=URL.createObjectURL(blob);
    a.download=filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(()=>{URL.revokeObjectURL(a.href); a.remove();},500);
  }
  function exportRequestPDF(req){
    if(!req){ if(window.__toast) window.__toast("Keine Anfrage zum Export vorhanden"); return; }
    const safeName=String(req.company||"Laperla-B2B-Anfrage").replace(/[^a-z0-9_-]+/gi,"_");
    downloadBlob(createPdfBlob(req), safeName+"_B2B_Anfrage.pdf");
    if(window.__toast) window.__toast("PDF wurde heruntergeladen");
  }
  async function exportRequestEmail(req){
    if(!req){ if(window.__toast) window.__toast("Keine Anfrage zum Export vorhanden"); return; }
    try{
      const res=await fetch(API_EMAIL_ENDPOINT,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(req)
      });
      if(!res.ok) throw new Error("Backend Antwort: "+res.status);
      backendStatus("<b>E-Mail gesendet.</b><br>Die B2B-Anfrage wurde über das Backend an Laperla weitergeleitet.","ok");
      if(window.__toast) window.__toast("E-Mail wurde über Backend gesendet");
    }catch(err){
      backendStatus("<b>E-Mail-Backend noch nicht verbunden.</b><br>Die Anfrage ist lokal gespeichert. Im Backend-Paket ist der echte SMTP-Versand vorbereitet. Bis dahin öffnet sich als Fallback Ihr E-Mail-Programm.","warn");
      const subject=encodeURIComponent(`Laperla B2B-Anfrage – ${req.company||'Neue Anfrage'}`);
      const body=encodeURIComponent(requestSummary(req));
      window.location.href=`mailto:${EXPORT_EMAIL}?subject=${subject}&body=${body}`;
    }
  }
  function renderAdminApproval(){
    const listEl=document.getElementById("approvalRequestsList");
    if(!listEl) return;
    const reqs=getRequests();
    const approved=(localStorage.getItem("laperlaDealerApproved")==="1");
    if(!reqs.length){
      listEl.innerHTML='<div class="admin-request-card"><div class="top"><h4>Noch keine B2B-Anfrage</h4><span class="approval-pill">wartet</span></div><div class="meta">Sobald ein Geschäftskunde eine Freigabe anfragt, erscheint die Anfrage hier.</div></div>';
      return;
    }
    listEl.innerHTML=reqs.slice().reverse().map((r,idx)=>{
      const realIndex=reqs.length-1-idx;
      return `<div class="admin-request-card">
        <div class="top">
          <h4>${r.company||"B2B Anfrage"}</h4>
          <span class="approval-pill ${approved?'approved':''}">${approved?'freigegeben':'wartet auf Zustimmung'}</span>
        </div>
        <div class="meta">
          Ansprechpartner: ${r.contact||"-"}<br>
          E-Mail: ${r.email||"-"} · Telefon: ${r.phone||"-"}<br>
          Vertriebsländer: ${r.countriesJoined||r.country||"-"}${r.region?` · Region: ${r.region}`:''}<br>
          Exklusivität: ${r.exclusivity||"-"} · Zustimmung: ${r.exclusiveConsent ? 'Ja' : 'Nein'}<br>
          Bereich: ${r.type||"-"} · Menge: ${r.volume||"-"}<br>
          Nachricht: ${r.message||"-"}<br>
          Eingang: ${r.date||"-"}
        </div>
        <div class="admin-request-actions">
          <button class="btn btn-gold btn-sm" data-approve-b2b="${realIndex}">Zustimmung erteilen</button>
          <button class="btn btn-ghost btn-sm" data-revoke-b2b>Freigabe sperren</button>
          <button class="btn btn-ghost btn-sm" data-export-pdf="${realIndex}" style="color:var(--gold-bright);border-color:var(--gold-bright)">PDF</button>
          <button class="btn btn-ghost btn-sm" data-export-mail="${realIndex}" style="color:var(--gold-bright);border-color:var(--gold-bright)">E-Mail</button>
        </div>
      </div>`;
    }).join("");
  }

  document.addEventListener("submit", function(e){
    const territory=e.target.closest("#territoryInterestForm");
    if(territory){
      e.preventDefault();
      if(!validateExclusiveConsent(territory)) return;
      if(!ensureCountriesSelected(territory)) return;
      const countries = getCountryValues(territory);
      const region = territory.querySelector('[name="region"]')?.value || "";
      const exclusivity = territory.querySelector('[name="exclusivity"]')?.value || "";
      const exclusiveConsent = territory.querySelector('[name="exclusiveConsent"]')?.checked ? '1' : '';
      localStorage.setItem("laperlaDesiredCountries", JSON.stringify(countries));
      localStorage.setItem("laperlaDesiredRegion", region);
      localStorage.setItem("laperlaDesiredExclusivity", exclusivity);
      localStorage.setItem("laperlaDesiredExclusiveConsent", exclusiveConsent);
      if(window.__toast) window.__toast("Vertriebsländer gespeichert");
      const approvalCountries=document.getElementById("approvalCountries");
      setCountryValues(approvalCountries, countries);
      const regionField=document.querySelector('#b2bApprovalForm input[name="region"]');
      if(regionField) regionField.value=region;
      const exclusivityField=document.querySelector('#b2bApprovalForm select[name="exclusivity"]');
      if(exclusivityField) exclusivityField.value=exclusivity;
      const consentField=document.getElementById('exclusiveConsent');
      if(consentField) consentField.checked=!!exclusiveConsent;
      if(typeof go==="function") go("b2b-approval");
      return;
    }

    const form=e.target.closest("#b2bApprovalForm");
    if(form){
      e.preventDefault();
      if(!validateExclusiveConsent(form)) return;
      const fd=new FormData(form);
      const data=Object.fromEntries(fd.entries());
      if(!ensureCountriesSelected(form)) return;
      const countries = getCountryValues(form);
      data.countries = countries;
      data.countriesJoined = countries.join(', ');
      data.exclusiveConsent = form.querySelector('[name="exclusiveConsent"]')?.checked ? '1' : '';
      data.date=new Date().toLocaleString("de-DE");
      const reqs=getRequests();
      reqs.push(data);
      saveRequests(reqs);
      sendRequestToBackend(data);
      localStorage.setItem("laperlaDealerApproved","0");
      localStorage.setItem("laperlaDesiredCountries", JSON.stringify(countries));
      localStorage.setItem("laperlaDesiredRegion", data.region||"");
      localStorage.setItem("laperlaDesiredExclusivity", data.exclusivity||"");
      localStorage.setItem("laperlaDesiredExclusiveConsent", data.exclusiveConsent||"");
      statusBox("<b>Anfrage gespeichert.</b><br>Ihr Zugang ist noch nicht freigegeben. Laperla prüft die Anfrage, die gewünschten Länder, die Exklusivität und die Zustimmung zu den Exklusivitäts-Bedingungen und erteilt danach die Freigabe für den Geschäftskundenbereich.");
      showExportActions(true);
      form.reset();
      renderAdminApproval();
      if(window.__toast) window.__toast("B2B-Freigabe angefragt");
      return;
    }
  });

  document.addEventListener("click", function(e){
    const approveBtn=e.target.closest("[data-approve-b2b]");
    if(approveBtn){
      localStorage.setItem("laperlaDealerApproved","1");
      window.dealerApproved=true;
      renderAdminApproval();
      if(window.__toast) window.__toast("B2B-Zugang durch Laperla freigegeben");
      return;
    }
    if(e.target.closest("[data-revoke-b2b]")){
      localStorage.setItem("laperlaDealerApproved","0");
      window.dealerApproved=false;
      renderAdminApproval();
      if(window.__toast) window.__toast("B2B-Zugang gesperrt");
      return;
    }
    const pdfAdmin=e.target.closest('[data-export-pdf]');
    if(pdfAdmin){
      const idx=Number(pdfAdmin.getAttribute('data-export-pdf'));
      const req=getRequests()[idx];
      exportRequestPDF(req); return;
    }
    const mailAdmin=e.target.closest('[data-export-mail]');
    if(mailAdmin){
      const idx=Number(mailAdmin.getAttribute('data-export-mail'));
      const req=getRequests()[idx];
      exportRequestEmail(req); return;
    }
    if(e.target.closest('#approvalPdfBtn')){ exportRequestPDF(getLastRequest()); return; }
    if(e.target.closest('#approvalMailBtn')){ exportRequestEmail(getLastRequest()); return; }
  });

  window.renderAdminApproval=renderAdminApproval;
  function prefillApprovalMarket(){
    const approvalCountries=document.getElementById("approvalCountries");
    const regionField=document.querySelector('#b2bApprovalForm input[name="region"]');
    const exclusivityField=document.querySelector('#b2bApprovalForm select[name="exclusivity"]');
    const consentField=document.getElementById('exclusiveConsent');
    let savedCountries=[];
    try{ savedCountries=JSON.parse(localStorage.getItem("laperlaDesiredCountries")||"[]") }catch(e){ savedCountries=[] }
    const savedRegion=localStorage.getItem("laperlaDesiredRegion")||"";
    const savedExclusivity=localStorage.getItem("laperlaDesiredExclusivity")||"";
    const savedConsent=localStorage.getItem("laperlaDesiredExclusiveConsent")||"";
    if(approvalCountries && savedCountries.length) setCountryValues(approvalCountries, savedCountries);
    if(regionField && savedRegion && !regionField.value) regionField.value=savedRegion;
    if(exclusivityField && savedExclusivity && !exclusivityField.value) exclusivityField.value=savedExclusivity;
    if(consentField && savedConsent) consentField.checked=true;
    showExportActions(!!getLastRequest());
  }
  document.addEventListener("DOMContentLoaded", function(){ renderAdminApproval(); prefillApprovalMarket(); });
  setTimeout(function(){ renderAdminApproval(); prefillApprovalMarket(); }, 600);
})();
</script>
<script>
(function(){
  function closeMenuIfOpen(){
    document.querySelector(".slide-menu")?.classList.remove("open");
    document.querySelector(".menu-overlay")?.classList.remove("open");
  }

  document.addEventListener("click", function(e){
    const link = e.target.closest(".menu-link[data-scroll]");
    if(!link) return;

    const targetId = link.getAttribute("data-scroll");
    const navTarget = link.getAttribute("data-nav");
    if(!targetId || !navTarget) return;

    e.preventDefault();

    const goFn = window.go || window.navigateTo || null;
    if(typeof goFn === "function"){
      goFn(navTarget);
    }else{
      document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
      const page = document.getElementById("page-" + navTarget);
      if(page) page.classList.add("active");
    }

    closeMenuIfOpen();

    setTimeout(function(){
      const el = document.getElementById(targetId);
      if(el) el.scrollIntoView({behavior:"smooth", block:"start"});
    }, 220);
  }, true);
})();
</script>
<script>
(function(){
  const logo=document.querySelector('.header-logo[data-scroll]');
  if(!logo) return;
  logo.addEventListener('click', function(e){
    e.preventDefault();
    const goFn = window.go || window.navigateTo || null;
    if(typeof goFn === 'function'){
      goFn('home');
    }else{
      document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
      const page=document.getElementById('page-home');
      if(page) page.classList.add('active');
    }
    setTimeout(function(){
      const el=document.getElementById('hero');
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    }, 180);
  });
})();
</script>
<script>
(function(){
  function initClickableGallery(){
    const modal = document.getElementById("galleryLightbox");
    const modalImg = document.getElementById("galleryLightboxImage");
    const titleEl = document.getElementById("galleryLightboxTitle");
    const descEl = document.getElementById("galleryLightboxDesc");
    const kickerEl = document.getElementById("galleryLightboxKicker");
    const closeBtn = document.getElementById("galleryLightboxClose");

    if(!modal || !modalImg) return;

    function openFromCard(card){
      const img = card.querySelector("img");
      if(!img || !img.src) return;

      const title = card.querySelector(".gallery-body h3, h3, h4")?.textContent?.trim() || "Laperla";
      const desc = card.querySelector(".gallery-body p, p")?.textContent?.trim() || "Kuratiertes Bild aus der Laperla Bildwelt.";
      const kicker = card.querySelector(".gallery-body .k, .k, .ey")?.textContent?.trim() || "Galerie";

      modalImg.src = img.src;
      modalImg.alt = img.alt || title;
      if(titleEl) titleEl.textContent = title;
      if(descEl) descEl.textContent = desc;
      if(kickerEl) kickerEl.textContent = kicker;

      modal.classList.add("open");
      modal.setAttribute("aria-hidden","false");
      document.body.style.overflow = "hidden";
    }

    function closeGallery(){
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden","true");
      document.body.style.overflow = "";
      setTimeout(function(){ if(!modal.classList.contains("open")) modalImg.src = ""; }, 180);
    }

    document.querySelectorAll("[data-gallery-card], .gallery-card").forEach(function(card){
      card.addEventListener("click", function(e){
        e.preventDefault();
        openFromCard(card);
      });
    });

    if(closeBtn){
      closeBtn.addEventListener("click", function(e){
        e.preventDefault();
        e.stopPropagation();
        closeGallery();
      });
    }

    modal.addEventListener("click", function(e){
      if(e.target === modal) closeGallery();
    });

    document.addEventListener("keydown", function(e){
      if(e.key === "Escape" && modal.classList.contains("open")) closeGallery();
    });
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", initClickableGallery);
  }else{
    initClickableGallery();
  }
})();
</script>

<script id="pallet-configurator-js">
(function(){
  const PALLETS = {
    p750:{name:"Palette Glasflasche 750 ml",cartons:72,units:864,litres:648,price:72*78},
    p500:{name:"Palette Glasflasche 500 ml",cartons:80,units:1200,litres:600,price:80*69},
    p5l:{name:"Palette Metalldose 5 L",cartons:48,units:192,litres:960,price:48*128},
    mixed:{name:"Mischpalette Prestige",cartons:72,units:960,litres:624,price:5650}
  };
  const money = n => Math.round(n).toLocaleString("de-DE")+" €";
  const discount = litres => litres>=2500 ? .20 : litres>=1000 ? .18 : litres>=500 ? .14 : litres>=200 ? .09 : .05;

  function byId(id){return document.getElementById(id);}
  function updatePallet(){
    const type = byId("palletType");
    const qtyInput = byId("palletQty");
    if(!type || !qtyInput) return;
    const p = PALLETS[type.value] || PALLETS.p750;
    const qty = Math.max(1, parseInt(qtyInput.value||"1",10));
    const litres = p.litres * qty;
    const cartons = p.cartons * qty;
    const units = p.units * qty;
    let subtotal = p.price * qty;
    if(byId("palletPrivate")?.checked) subtotal += 290 * qty;
    if(byId("palletGift")?.checked) subtotal += 390 * qty;
    const disc = discount(litres);
    const total = subtotal * (1-disc);

    byId("palletSummaryQty").textContent = qty.toLocaleString("de-DE");
    byId("palletSummaryCartons").textContent = cartons.toLocaleString("de-DE");
    byId("palletSummaryUnits").textContent = units.toLocaleString("de-DE");
    byId("palletSummaryLitres").textContent = litres.toLocaleString("de-DE")+" L";
    byId("palletSummaryDiscount").textContent = Math.round(disc*100)+" %";
    byId("palletSummaryTotal").textContent = money(total);
    window._palletQuote = {type:p.name,qty,cartons,units,litres,total};
  }

  function scrollToPallet(){
    document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
    byId("page-wholesale")?.classList.add("active");
    byId("slideMenu")?.classList.remove("open");
    byId("menuOverlay")?.classList.remove("open");
    document.body.classList.remove("menu-is-open");
    setTimeout(()=>byId("pallet-configurator")?.scrollIntoView({behavior:"smooth",block:"start"}),180);
  }

  document.addEventListener("DOMContentLoaded", function(){
    ["palletType","palletPrivate","palletGift"].forEach(id=>byId(id)?.addEventListener("change",updatePallet));
    byId("palletMinus")?.addEventListener("click",function(){
      const i=byId("palletQty"); if(!i) return;
      i.value=Math.max(1,parseInt(i.value||"1",10)-1); updatePallet();
    });
    byId("palletPlus")?.addEventListener("click",function(){
      const i=byId("palletQty"); if(!i) return;
      i.value=Math.min(99,parseInt(i.value||"1",10)+1); updatePallet();
    });
    byId("toPallet")?.addEventListener("click",function(e){e.preventDefault();scrollToPallet();});
    document.querySelectorAll('[data-scroll="pallet-configurator"]').forEach(el=>{
      el.addEventListener("click",function(e){e.preventDefault();scrollToPallet();},true);
    });
    byId("palletInquiry")?.addEventListener("click",function(){
      updatePallet();
      const q=window._palletQuote||{};
      const body=[
        "Paletten-Anfrage Laperla Olive Oil",
        "",
        "Paletten-Typ: "+(q.type||""),
        "Anzahl Paletten: "+(q.qty||""),
        "Kartons: "+(q.cartons||""),
        "Einheiten/Flaschen: "+(q.units||""),
        "Gesamtvolumen: "+(q.litres||"")+" L",
        "Schätzung: "+money(q.total||0),
        "",
        "Bitte Angebot, Lieferzeit, Transport und B2B-Freigabe bestätigen."
      ].join("\n");
      window.location.href="mailto:?subject="+encodeURIComponent("Paletten-Anfrage Laperla Olive Oil")+"&body="+encodeURIComponent(body);
    });
    updatePallet();
  });
})();
</script>

<script id="footerJumpFix">
(function(){
  function showPage(pageId){
    document.querySelectorAll(".page").forEach(function(p){p.classList.remove("active");});
    var page=document.getElementById(pageId);
    if(page) page.classList.add("active");

    var gate=document.getElementById("gate");
    if(gate) gate.classList.add("hidden");

    var header=document.getElementById("header");
    if(header){
      header.classList.toggle("on-dark", pageId==="page-home");
      header.classList.add("scrolled");
    }

    if(window.closeMenu) window.closeMenu();
  }

  function jumpTo(id){
    var pageId = (id==="faq") ? "page-wholesale" : "page-home";
    showPage(pageId);

    window.__currentRouteTarget = (pageId==="page-wholesale") ? "wholesale-public-faq" : "home";

    setTimeout(function(){
      var el=document.getElementById(id);
      if(!el) return;
      var y = el.getBoundingClientRect().top + window.pageYOffset - 105;
      window.scrollTo({top:Math.max(0,y), behavior:"smooth"});
    },120);
  }

  document.addEventListener("click", function(e){
    var el=e.target.closest("[data-footer-jump]");
    if(!el) return;
    e.preventDefault();
    e.stopPropagation();
    if(e.stopImmediatePropagation) e.stopImmediatePropagation();
    jumpTo(el.dataset.footerJump);
  }, true);
})();
</script>

<script id="deMapSelection">
(function(){
  const states = [{"id": "bw", "name": "Baden-Württemberg", "cities": "Stuttgart · Karlsruhe · Mannheim", "focus": "Premium-Retail, Feinkost & Gastronomie", "x": 48, "y": 78}, {"id": "by", "name": "Bayern", "cities": "München · Nürnberg · Augsburg", "focus": "Hotels, Restaurants & Handel", "x": 63, "y": 80}, {"id": "be", "name": "Berlin", "cities": "Berlin · Hauptstadtvertretung", "focus": "Hauptkoordination Deutschland", "x": 66, "y": 32}, {"id": "bb", "name": "Brandenburg", "cities": "Potsdam · Cottbus · Frankfurt (Oder)", "focus": "Regionale Partner & Feinkost", "x": 70, "y": 37}, {"id": "hb", "name": "Bremen", "cities": "Bremen · Bremerhaven", "focus": "Hanseatischer Handel & Gastro", "x": 38, "y": 26}, {"id": "hh", "name": "Hamburg", "cities": "Hamburg · Hafen & Premiumhandel", "focus": "Import, Großhandel & Hotels", "x": 47, "y": 17}, {"id": "he", "name": "Hessen", "cities": "Frankfurt · Wiesbaden · Kassel", "focus": "Business, Retail & Gastronomie", "x": 45, "y": 57}, {"id": "mv", "name": "Mecklenburg-Vorpommern", "cities": "Rostock · Schwerin · Stralsund", "focus": "Tourismus, Hotels & Feinkost", "x": 61, "y": 13}, {"id": "ni", "name": "Niedersachsen", "cities": "Hannover · Braunschweig · Osnabrück", "focus": "Handel, Märkte & B2B", "x": 39, "y": 35}, {"id": "nw", "name": "Nordrhein-Westfalen", "cities": "Köln · Düsseldorf · Dortmund", "focus": "Starke B2B- und Gastro-Region", "x": 29, "y": 52}, {"id": "rp", "name": "Rheinland-Pfalz", "cities": "Mainz · Koblenz · Trier", "focus": "Wein, Feinkost & Gastronomie", "x": 34, "y": 67}, {"id": "sl", "name": "Saarland", "cities": "Saarbrücken · Neunkirchen", "focus": "Grenzregion & Premiumhandel", "x": 29, "y": 75}, {"id": "sn", "name": "Sachsen", "cities": "Dresden · Leipzig · Chemnitz", "focus": "Retail, Feinkost & Hotels", "x": 66, "y": 58}, {"id": "st", "name": "Sachsen-Anhalt", "cities": "Magdeburg · Halle (Saale)", "focus": "Regionale Distribution", "x": 57, "y": 43}, {"id": "sh", "name": "Schleswig-Holstein", "cities": "Kiel · Lübeck · Flensburg", "focus": "Küste, Hotels & Feinkost", "x": 48, "y": 7}, {"id": "th", "name": "Thüringen", "cities": "Erfurt · Jena · Weimar", "focus": "Kultur, Feinkost & Gastronomie", "x": 52, "y": 60}];

  function setMapState(id){
    const s = states.find(x => x.id === id) || states[0];
    if(!s) return;

    document.querySelectorAll(".de-map-pin").forEach(pin => {
      pin.classList.toggle("active", pin.dataset.state === s.id);
    });

    document.querySelectorAll(".state-location-card").forEach(card => {
      const h = card.querySelector("h4");
      card.classList.toggle("active", h && h.textContent.trim() === s.name);
    });

    const select = document.getElementById("deStateSelect");
    if(select && select.value !== s.id) select.value = s.id;

    const result = document.getElementById("deMapResult");
    if(result){
      result.innerHTML = `
        <div class="k">Aktives Vertriebsgebiet</div>
        <h4>${s.name}</h4>
        <p>${s.cities}</p>
        <div class="f">${s.focus}</div>
      `;
    }
  }

  document.addEventListener("click", function(e){
    const pin = e.target.closest(".de-map-pin");
    if(!pin) return;
    e.preventDefault();
    setMapState(pin.dataset.state);
    const grid = document.querySelector(".state-location-grid");
    if(grid){
      setTimeout(() => grid.scrollIntoView({behavior:"smooth", block:"nearest"}), 120);
    }
  });

  document.addEventListener("change", function(e){
    if(e.target && e.target.id === "deStateSelect") setMapState(e.target.value);
  });

  document.addEventListener("DOMContentLoaded", function(){
    setMapState("be");
  });
})();
</script>

<script id="deRealMapAndLocations">
(function(){
  const stateData = [{"id": "bw", "name": "Baden-Württemberg", "city": "Stuttgart", "cities": "Stuttgart · Karlsruhe · Mannheim", "focus": "Premium-Retail, Feinkost & Gastronomie", "lat": 48.7758, "lon": 9.1829, "partner": "LaPerla Südwest Partner", "contact": "+49 176 9996 9996", "email": "info@aniso-olive.de"}, {"id": "by", "name": "Bayern", "city": "München", "cities": "München · Nürnberg · Augsburg", "focus": "Hotels, Restaurants & Handel", "lat": 48.1351, "lon": 11.582, "partner": "LaPerla Bayern Partner", "contact": "+49 176 9996 9996", "email": "info@aniso-olive.de"}, {"id": "be", "name": "Berlin", "city": "Berlin", "cities": "Berlin · Hauptstadtvertretung", "focus": "Hauptkoordination Deutschland", "lat": 52.52, "lon": 13.405, "partner": "ANISO / LaPerla Deutschland Hauptvertretung", "contact": "+49 176 9996 9996", "email": "info@aniso-olive.de"}, {"id": "bb", "name": "Brandenburg", "city": "Potsdam", "cities": "Potsdam · Cottbus · Frankfurt (Oder)", "focus": "Regionale Partner & Feinkost", "lat": 52.3906, "lon": 13.0645, "partner": "LaPerla Brandenburg Partner", "contact": "+49 176 9996 9996", "email": "info@aniso-olive.de"}, {"id": "hb", "name": "Bremen", "city": "Bremen", "cities": "Bremen · Bremerhaven", "focus": "Hanseatischer Handel & Gastro", "lat": 53.0793, "lon": 8.8017, "partner": "LaPerla Bremen Partner", "contact": "+49 176 9996 9996", "email": "info@aniso-olive.de"}, {"id": "hh", "name": "Hamburg", "city": "Hamburg", "cities": "Hamburg · Hafen & Premiumhandel", "focus": "Import, Großhandel & Hotels", "lat": 53.5511, "lon": 9.9937, "partner": "LaPerla Hamburg Partner", "contact": "+49 176 9996 9996", "email": "info@aniso-olive.de"}, {"id": "he", "name": "Hessen", "city": "Frankfurt am Main", "cities": "Frankfurt · Wiesbaden · Kassel", "focus": "Business, Retail & Gastronomie", "lat": 50.1109, "lon": 8.6821, "partner": "LaPerla Hessen Partner", "contact": "+49 176 9996 9996", "email": "info@aniso-olive.de"}, {"id": "mv", "name": "Mecklenburg-Vorpommern", "city": "Rostock", "cities": "Rostock · Schwerin · Stralsund", "focus": "Tourismus, Hotels & Feinkost", "lat": 54.0924, "lon": 12.0991, "partner": "LaPerla Nordost Partner", "contact": "+49 176 9996 9996", "email": "info@aniso-olive.de"}, {"id": "ni", "name": "Niedersachsen", "city": "Hannover", "cities": "Hannover · Braunschweig · Osnabrück", "focus": "Handel, Märkte & B2B", "lat": 52.3759, "lon": 9.732, "partner": "LaPerla Niedersachsen Partner", "contact": "+49 176 9996 9996", "email": "info@aniso-olive.de"}, {"id": "nw", "name": "Nordrhein-Westfalen", "city": "Düsseldorf", "cities": "Köln · Düsseldorf · Dortmund", "focus": "Starke B2B- und Gastro-Region", "lat": 51.2277, "lon": 6.7735, "partner": "LaPerla NRW Partner", "contact": "+49 176 9996 9996", "email": "info@aniso-olive.de"}, {"id": "rp", "name": "Rheinland-Pfalz", "city": "Mainz", "cities": "Mainz · Koblenz · Trier", "focus": "Wein, Feinkost & Gastronomie", "lat": 49.9929, "lon": 8.2473, "partner": "LaPerla Rheinland-Pfalz Partner", "contact": "+49 176 9996 9996", "email": "info@aniso-olive.de"}, {"id": "sl", "name": "Saarland", "city": "Saarbrücken", "cities": "Saarbrücken · Neunkirchen", "focus": "Grenzregion & Premiumhandel", "lat": 49.2402, "lon": 6.9969, "partner": "LaPerla Saarland Partner", "contact": "+49 176 9996 9996", "email": "info@aniso-olive.de"}, {"id": "sn", "name": "Sachsen", "city": "Dresden", "cities": "Dresden · Leipzig · Chemnitz", "focus": "Retail, Feinkost & Hotels", "lat": 51.0504, "lon": 13.7373, "partner": "LaPerla Sachsen Partner", "contact": "+49 176 9996 9996", "email": "info@aniso-olive.de"}, {"id": "st", "name": "Sachsen-Anhalt", "city": "Magdeburg", "cities": "Magdeburg · Halle (Saale)", "focus": "Regionale Distribution", "lat": 52.1205, "lon": 11.6276, "partner": "LaPerla Sachsen-Anhalt Partner", "contact": "+49 176 9996 9996", "email": "info@aniso-olive.de"}, {"id": "sh", "name": "Schleswig-Holstein", "city": "Kiel", "cities": "Kiel · Lübeck · Flensburg", "focus": "Küste, Hotels & Feinkost", "lat": 54.3233, "lon": 10.1228, "partner": "LaPerla Schleswig-Holstein Partner", "contact": "+49 176 9996 9996", "email": "info@aniso-olive.de"}, {"id": "th", "name": "Thüringen", "city": "Erfurt", "cities": "Erfurt · Jena · Weimar", "focus": "Kultur, Feinkost & Gastronomie", "lat": 50.9848, "lon": 11.0299, "partner": "LaPerla Thüringen Partner", "contact": "+49 176 9996 9996", "email": "info@aniso-olive.de"}];

  function mapUrl(lat, lon){
    const dLon = 2.0;
    const dLat = 1.25;
    const bbox = [
      (lon - dLon).toFixed(4),
      (lat - dLat).toFixed(4),
      (lon + dLon).toFixed(4),
      (lat + dLat).toFixed(4)
    ].join(",");
    return "https://www.openstreetmap.org/export/embed.html?bbox=" + bbox + "&layer=mapnik&marker=" + lat.toFixed(4) + "," + lon.toFixed(4);
  }

  function activateLocal(id){
    const s = stateData.find(x => x.id === id) || stateData.find(x => x.id === "be") || stateData[0];
    if(!s) return;

    const iframe = document.getElementById("deRealMapFrame");
    if(iframe) iframe.src = mapUrl(Number(s.lat), Number(s.lon));

    const label = document.getElementById("deRealMapLabel");
    if(label) label.textContent = s.city + " · " + s.name;

    document.querySelectorAll(".local-partner-card").forEach(card => {
      card.classList.toggle("active", card.dataset.localState === s.id);
    });

    document.querySelectorAll(".de-map-pin").forEach(pin => {
      pin.classList.toggle("active", pin.dataset.state === s.id);
    });

    const select = document.getElementById("deStateSelect");
    if(select && select.value !== s.id) select.value = s.id;
  }

  document.addEventListener("click", function(e){
    const btn = e.target.closest("[data-local-select]");
    if(btn){
      e.preventDefault();
      activateLocal(btn.dataset.localSelect);
      const map = document.getElementById("deutschland-karte");
      if(map) setTimeout(() => map.scrollIntoView({behavior:"smooth", block:"center"}), 120);
      return;
    }

    const pin = e.target.closest(".de-map-pin");
    if(pin){
      activateLocal(pin.dataset.state);
    }
  }, true);

  document.addEventListener("change", function(e){
    if(e.target && e.target.id === "deStateSelect") activateLocal(e.target.value);
  }, true);

  document.addEventListener("DOMContentLoaded", function(){
    activateLocal("be");
  });
})();
</script>

<script id="wholesaleSecretCodeGate">
(function(){
  const SECRET_CODES = ["LAPERLA2026","ANISO2026","GROSSHANDEL"];
  const PENDING_KEY = "laperlaPendingB2BTargetV85";
  const LABELS = {
    wholesale:"Großhändler / B2B Shop",
    distributors:"Vertriebspartner",
    "b2b-shop":"B2B Shop",
    "b2b-container":"Container konfigurieren",
    "b2b-pallet":"Paletten konfigurieren",
    account:"Konto anmelden / registrieren",
    "b2b-login":"Konto anmelden / registrieren"
  };

  function readPending(){
    try{
      const raw=sessionStorage.getItem(PENDING_KEY);
      return raw ? JSON.parse(raw) : null;
    }catch(e){return null;}
  }

  function savePending(obj){
    try{sessionStorage.setItem(PENDING_KEY,JSON.stringify(obj));}catch(e){}
    setGateLabel(obj && obj.label ? obj.label : "Geschützter B2B-Bereich");
  }

  function setGateLabel(label){
    const el=document.getElementById("wcgTargetLabelV85");
    if(el) el.textContent="Code-Zugang für: "+(label||"geschützter B2B-Bereich");
  }

  window.__setB2BGateLabel=setGateLabel;
  window.__openB2BCodeGate=function(target,scrollTarget,label){
    const obj={target:target||"wholesale",label:label||LABELS[target]||"Geschützter B2B-Bereich"};
    if(scrollTarget) obj.scrollTarget=scrollTarget;
    if(target==="b2b-container"){obj.target="wholesale";obj.scrollTarget="configurator";obj.label="Container konfigurieren";}
    if(target==="b2b-pallet"){obj.target="wholesale";obj.scrollTarget="pallet-configurator";obj.label="Paletten konfigurieren";}
    if(target==="b2b-shop"){obj.target="wholesale";obj.label="B2B Shop";}
    if(target==="account" || target==="b2b-login"){obj.target="account";obj.label="Konto anmelden / registrieren";}
    savePending(obj);
    if(window.go) window.go("wholesale-gate",{bypassCode:true});
  };

  function openProtectedArea(){
    const pending=readPending() || {target:"wholesale",label:"Großhändler / B2B Shop"};
    try{sessionStorage.removeItem(PENDING_KEY);}catch(e){}

    const opts={bypassCode:true};
    if(pending.scrollTarget) opts.scrollTarget=pending.scrollTarget;

    if(window.go){
      window.go(pending.target||"wholesale",opts);
    }
  }

  document.addEventListener("click",function(e){
    const link=e.target.closest("[data-b2b-gate]");
    if(!link) return;
    e.preventDefault();
    e.stopPropagation();
    if(e.stopImmediatePropagation)e.stopImmediatePropagation();

    const key=link.getAttribute("data-b2b-gate")||"wholesale";
    const scroll=link.getAttribute("data-scroll")||null;
    const label=link.textContent.trim()||LABELS[key]||"Geschützter B2B-Bereich";
    window.__openB2BCodeGate(key,scroll,label);
  },true);

  document.addEventListener("submit",function(e){
    const form=e.target.closest("#wholesaleCodeForm");
    if(!form) return;
    e.preventDefault();

    const input=document.getElementById("wholesaleSecretCode");
    const status=document.getElementById("wholesaleCodeStatus");
    const code=(input && input.value ? input.value : "").trim().toUpperCase();

    if(SECRET_CODES.includes(code)){
      if(status){
        status.classList.remove("error");
        status.textContent="Zugang freigeschaltet. Der geschützte Bereich wird geöffnet …";
      }
      setTimeout(openProtectedArea,420);
    }else{
      if(status){
        status.classList.add("error");
        status.textContent="Falscher Geheimcode. Bitte prüfen oder Freigabe anfordern.";
      }
      if(input) input.focus();
    }
  },true);

  document.addEventListener("DOMContentLoaded",function(){
    const pending=readPending();
    if(pending) setGateLabel(pending.label);
  });
})();
</script>

<script id="clearOldWholesaleApproval">
(function(){
  try{ localStorage.removeItem("laperlaWholesaleCodeApproved"); }catch(e){}
})();
</script>

<script id="menuProAccordionV63">
(function(){
  function setAccordion(acc, open){
    const head = acc.querySelector(".menu-pro-head");
    const panel = acc.querySelector(".menu-pro-panel");
    if(!head || !panel) return;
    acc.classList.toggle("open", !!open);
    panel.hidden = !open;
    head.setAttribute("aria-expanded", open ? "true" : "false");
  }

  function initMenuAccordions(){
    document.querySelectorAll("[data-menu-accordion]").forEach(function(acc){
      const open = acc.classList.contains("open");
      setAccordion(acc, open);
    });
  }

  document.addEventListener("click", function(e){
    const head = e.target.closest(".menu-pro-head");
    if(!head) return;
    const acc = head.closest("[data-menu-accordion]");
    if(!acc) return;

    e.preventDefault();
    e.stopPropagation();

    const nextOpen = !acc.classList.contains("open");
    setAccordion(acc, nextOpen);
  }, true);

  document.addEventListener("keydown", function(e){
    if(e.key !== "Enter" && e.key !== " ") return;
    const head = e.target.closest(".menu-pro-head");
    if(!head) return;
    e.preventDefault();
    head.click();
  }, true);

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", initMenuAccordions);
  }else{
    initMenuAccordions();
  }

  window.__fixMenuAccordions = initMenuAccordions;
})();
</script>

<script id="quickScrollV64">
(function(){
  document.addEventListener("click", function(e){
    const btn = e.target.closest("[data-scroll]");
    if(!btn) return;
    const targetId = btn.getAttribute("data-scroll");
    if(!targetId) return;
    setTimeout(function(){
      const el = document.getElementById(targetId);
      if(el) el.scrollIntoView({behavior:"smooth", block:"start"});
    }, 180);
  }, true);
})();
</script>

<script id="brandNavigationHardFixV75">
(function(){
  const brandPages = {
    story: "page-story",
    about: "page-about",
    mission: "page-mission",
  };

  function closeMenu(){
    document.body.classList.remove("menu-open");
    document.documentElement.classList.remove("menu-open");
    document.querySelectorAll(".side-menu,.menu-pro,.menu-drawer,#menu,#sideMenu").forEach(function(el){
      el.classList.remove("open","active","is-open");
    });
  }

  function showBrandPage(key){
    const pageId = brandPages[key];
    const page = document.getElementById(pageId);
    if(!page) return false;

    document.querySelectorAll(".page").forEach(function(p){ p.classList.remove("active"); });
    page.classList.add("active");

    const gate = document.getElementById("gate");
    if(gate) gate.classList.add("hidden");

    const header = document.getElementById("header");
    if(header){
      header.classList.add("scrolled");
      header.classList.remove("on-dark");
    }

    closeMenu();
    window.__currentRouteTarget = key;
    window.scrollTo({top:0, behavior:"smooth"});
    return true;
  }

  document.addEventListener("click", function(e){
    const link = e.target.closest("[data-brand-nav]");
    if(!link) return;

    const key = link.getAttribute("data-brand-nav");
    if(!brandPages[key]) return;

    e.preventDefault();
    e.stopPropagation();
    if(e.stopImmediatePropagation) e.stopImmediatePropagation();

    showBrandPage(key);
  }, true);
})();
</script>

<!-- ============ COOKIE CONSENT ============ -->
<div class="cookie-banner-v80" id="cookieBannerV80" aria-live="polite" hidden>
  <div class="cookie-card-v80">
    <div>
      <span>Datenschutz &amp; Cookies</span>
      <h3>Cookie-Einstellungen</h3>
      <p>Wir nutzen notwendige Cookies für Warenkorb, Login und Sicherheit. Analyse- und Marketing-Cookies werden nur mit Ihrer Zustimmung aktiviert.</p>
    </div>
    <div class="cookie-actions-v80">
      <button type="button" class="cookie-btn ghost" id="cookieNecessaryV80">Nur notwendige</button>
      <button type="button" class="cookie-btn ghost" id="cookieCustomizeV80">Einstellungen</button>
      <button type="button" class="cookie-btn gold" id="cookieAcceptAllV80">Alle akzeptieren</button>
    </div>
  </div>
</div>

<div class="cookie-modal-v80" id="cookieModalV80" hidden>
  <div class="cookie-modal-box-v80" role="dialog" aria-modal="true" aria-labelledby="cookieModalTitleV80">
    <button type="button" class="cookie-x-v80" id="cookieCloseV80" aria-label="Schließen">✕</button>
    <span>Privacy Center</span>
    <h3 id="cookieModalTitleV80">Cookie-Einstellungen verwalten</h3>
    <label class="cookie-switch-v80 disabled">
      <input type="checkbox" checked disabled>
      <div><b>Notwendige Cookies</b><small>Erforderlich für Warenkorb, Login, Sicherheit und Cookie-Auswahl.</small></div>
    </label>
    <label class="cookie-switch-v80">
      <input type="checkbox" id="cookieAnalyticsV80">
      <div><b>Analyse-Cookies</b><small>Helfen uns zu verstehen, wie die Website genutzt wird.</small></div>
    </label>
    <label class="cookie-switch-v80">
      <input type="checkbox" id="cookieMarketingV80">
      <div><b>Marketing-Cookies</b><small>Ermöglichen Marketing, Kampagnen und externe Medien.</small></div>
    </label>
    <div class="cookie-modal-actions-v80">
      <button type="button" class="cookie-btn ghost" id="cookieSaveV80">Auswahl speichern</button>
      <button type="button" class="cookie-btn gold" id="cookieAcceptAllModalV80">Alle akzeptieren</button>
    </div>
  </div>
</div>

<script id="cookieConsentV81">
(function(){
  const KEY = "laperlaCookieConsentV82";

  function get(id){ return document.getElementById(id); }

  function readConsent(){
    try { return JSON.parse(localStorage.getItem(KEY) || "null"); }
    catch(e){ return null; }
  }

  function writeConsent(settings){
    const consent = {
      necessary: true,
      analytics: !!settings.analytics,
      marketing: !!settings.marketing,
      savedAt: new Date().toISOString()
    };
    try { localStorage.setItem(KEY, JSON.stringify(consent)); } catch(e) {}
    window.laperlaCookieConsent = consent;
    hideCookieUI();
  }

  function hideCookieUI(){
    const banner = get("cookieBannerV80");
    const modal = get("cookieModalV80");
    if(banner) banner.hidden = true;
    if(modal) modal.hidden = true;
    document.body.classList.remove("cookie-modal-open");
  }

  function showBannerIfNeeded(){
    const banner = get("cookieBannerV80");
    if(!banner) return;
    banner.hidden = !!readConsent();
  }

  function openSettings(){
    const modal = get("cookieModalV80");
    const consent = readConsent() || {analytics:false, marketing:false};
    const analytics = get("cookieAnalyticsV80");
    const marketing = get("cookieMarketingV80");
    if(analytics) analytics.checked = !!consent.analytics;
    if(marketing) marketing.checked = !!consent.marketing;
    if(modal) modal.hidden = false;
    document.body.classList.add("cookie-modal-open");
  }

  function saveSelection(){
    writeConsent({
      analytics: !!get("cookieAnalyticsV80")?.checked,
      marketing: !!get("cookieMarketingV80")?.checked
    });
  }

  function acceptAll(){
    const analytics = get("cookieAnalyticsV80");
    const marketing = get("cookieMarketingV80");
    if(analytics) analytics.checked = true;
    if(marketing) marketing.checked = true;
    writeConsent({analytics:true, marketing:true});
  }

  function onlyNecessary(){
    const analytics = get("cookieAnalyticsV80");
    const marketing = get("cookieMarketingV80");
    if(analytics) analytics.checked = false;
    if(marketing) marketing.checked = false;
    writeConsent({analytics:false, marketing:false});
  }

  function handleCookieClick(e){
    const target = e.target.closest(
      "#cookieAcceptAllV80,#cookieAcceptAllModalV80,#cookieSaveV80,#cookieNecessaryV80,#cookieCustomizeV80,#cookieSettingsFooter,#cookieCloseV80,#cookieFloatingV82"
    );
    if(!target) return;

    e.preventDefault();
    e.stopPropagation();
    if(e.stopImmediatePropagation) e.stopImmediatePropagation();

    if(target.id === "cookieAcceptAllV80" || target.id === "cookieAcceptAllModalV80"){
      acceptAll();
      return;
    }
    if(target.id === "cookieSaveV80"){
      saveSelection();
      return;
    }
    if(target.id === "cookieNecessaryV80"){
      onlyNecessary();
      return;
    }
    if(target.id === "cookieCustomizeV80" || target.id === "cookieSettingsFooter" || target.id === "cookieFloatingV82"){
      openSettings();
      return;
    }
    if(target.id === "cookieCloseV80"){
      const modal = get("cookieModalV80");
      if(modal) modal.hidden = true;
      document.body.classList.remove("cookie-modal-open");
      return;
    }
  }

  // Capture-Phase, damit kein anderes Website-Script die Cookie-Buttons abfängt.
  document.addEventListener("click", handleCookieClick, true);

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", showBannerIfNeeded);
  }else{
    showBannerIfNeeded();
  }

  window.laperlaOpenCookieSettings = openSettings;
})();
</script>

<button type="button" class="cookie-floating-v82" id="cookieFloatingV82" aria-label="Cookie-Einstellungen öffnen">
  Cookies
</button>


<script>
(function(){
  "use strict";
  const DRAFT_KEY="laperlaCheckoutDraftV121";
  const draftIds=["customerType","customerFirst","customerLast","customerEmail","customerPhone","customerCompany","customerVat","billingStreet","billingZip","billingCity","billingCountry","sameShipping","shippingStreet","shippingZip","shippingCity","shippingCountry","deliveryMethod","orderNote"];

  function itemCountV121(){
    try{return checkoutItems().reduce((sum,x)=>sum+Number(x.qty||0),0);}catch(_){return 0;}
  }
  function updateCheckoutLiveV121(){
    const count=itemCountV121();
    const label=count===1?"1 Artikel":`${count} Artikel`;
    let total=0;
    try{total=checkoutSubtotal()+checkoutShippingCost();}catch(_){total=0;}
    const totalText=typeof fmt==="function"?fmt(total):`${total.toFixed(2)} €`;
    ["checkoutHeaderItemsV121","checkoutActionItemsV121","checkoutSummaryCountV121"].forEach(id=>{const el=document.getElementById(id);if(el)el.textContent=label;});
    ["checkoutHeaderTotalV121","checkoutActionTotalV121"].forEach(id=>{const el=document.getElementById(id);if(el)el.textContent=totalText;});
  }

  function syncCustomerCardsV121(){
    const value=document.getElementById("customerType")?.value||"private";
    document.querySelectorAll("[data-customer-type]").forEach(btn=>{
      const active=btn.dataset.customerType===value;
      btn.classList.toggle("active",active);
      btn.setAttribute("aria-pressed",String(active));
    });
  }
  function syncDeliveryCardsV121(){
    const value=document.getElementById("deliveryMethod")?.value||"standard";
    document.querySelectorAll("[data-delivery]").forEach(btn=>{
      const active=btn.dataset.delivery===value;
      btn.classList.toggle("active",active);
      btn.setAttribute("aria-pressed",String(active));
    });
  }

  function fieldWrapperV121(el){return el?.closest(".checkout-field-v108")||null;}
  function clearFieldErrorV121(el){
    if(!el)return;
    const wrap=fieldWrapperV121(el);
    wrap?.classList.remove("has-error");
    el.removeAttribute("aria-invalid");
    wrap?.querySelector(".checkout-field-error-v121")?.remove();
  }
  function markFieldErrorV121(el,message){
    if(!el)return;
    const wrap=fieldWrapperV121(el);
    if(!wrap)return;
    clearFieldErrorV121(el);
    wrap.classList.add("has-error");
    el.setAttribute("aria-invalid","true");
    const error=document.createElement("div");
    error.className="checkout-field-error-v121";
    error.textContent=message;
    wrap.appendChild(error);
  }
  function updateFieldStateV121(el){
    if(!el || !el.matches("input,select,textarea"))return;
    const wrap=fieldWrapperV121(el);
    if(!wrap || wrap.classList.contains("checkout-native-select-v121"))return;
    const filled=el.type==="checkbox"?el.checked:String(el.value||"").trim().length>0;
    wrap.classList.toggle("is-complete",filled && el.type!=="checkbox" && el.tagName!=="TEXTAREA");
    if(filled)clearFieldErrorV121(el);
  }

  function saveCheckoutDraftV121(){
    try{
      const data={};
      draftIds.forEach(id=>{
        const el=document.getElementById(id);if(!el)return;
        data[id]=el.type==="checkbox"?el.checked:el.value;
      });
      localStorage.setItem(DRAFT_KEY,JSON.stringify(data));
    }catch(err){console.warn("Checkout-Entwurf konnte nicht gespeichert werden",err);}
  }
  function restoreCheckoutDraftV121(){
    try{
      const raw=localStorage.getItem(DRAFT_KEY);if(!raw)return;
      const data=JSON.parse(raw);
      draftIds.forEach(id=>{
        const el=document.getElementById(id);if(!el || data[id]===undefined)return;
        if(el.type==="checkbox")el.checked=Boolean(data[id]);else el.value=String(data[id]);
        updateFieldStateV121(el);
      });
      if(typeof checkoutMode!=="undefined" && checkoutMode==="b2b"){const type=document.getElementById("customerType");if(type)type.value="business";}
      if(typeof showCheckoutBusinessFields==="function")showCheckoutBusinessFields();
      if(typeof toggleShippingFields==="function")toggleShippingFields();
      syncCustomerCardsV121();syncDeliveryCardsV121();
      if(typeof renderCheckoutSummary==="function")renderCheckoutSummary();
    }catch(err){console.warn("Checkout-Entwurf konnte nicht geladen werden",err);}
  }
  function clearCheckoutDraftV121(resetFields){
    try{localStorage.removeItem(DRAFT_KEY);}catch(_){}
    if(resetFields && typeof resetCheckoutForm==="function"){
      resetCheckoutForm();
      syncCustomerCardsV121();syncDeliveryCardsV121();
      document.querySelectorAll("#checkoutForm .is-complete,#checkoutForm .has-error").forEach(el=>el.classList.remove("is-complete","has-error"));
      document.querySelectorAll("#checkoutForm .checkout-field-error-v121").forEach(el=>el.remove());
      updateCheckoutLiveV121();
      if(typeof toast==="function")toast("Eingaben wurden gelöscht");
    }
  }

  function escapeHtmlV121(value){return String(value??"").replace(/[&<>'"]/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[ch]));}
  function renderCheckoutReviewV121(){
    const host=document.getElementById("checkoutReviewV121");if(!host)return;
    const first=document.getElementById("customerFirst")?.value.trim()||"";
    const last=document.getElementById("customerLast")?.value.trim()||"";
    const email=document.getElementById("customerEmail")?.value.trim()||"";
    const phone=document.getElementById("customerPhone")?.value.trim()||"";
    const type=document.getElementById("customerType")?.value==="business"?"Geschäftskunde":"Privatkunde";
    const company=document.getElementById("customerCompany")?.value.trim()||"";
    const street=document.getElementById("billingStreet")?.value.trim()||"";
    const zip=document.getElementById("billingZip")?.value.trim()||"";
    const city=document.getElementById("billingCity")?.value.trim()||"";
    const country=document.getElementById("billingCountry")?.value||"";
    const delivery=document.getElementById("deliveryMethod")?.value||"standard";
    const deliveryLabel={standard:"Standardversand",pickup:"Abholung nach Vereinbarung",individual:"Individuelle Lieferung"}[delivery]||delivery;
    host.innerHTML=`
      <article class="checkout-review-card-v121"><span>Kontakt</span><b>${escapeHtmlV121(first)} ${escapeHtmlV121(last)}</b><small>${escapeHtmlV121(type)}${company?` · ${escapeHtmlV121(company)}`:""}<br>${escapeHtmlV121(email)}${phone?` · ${escapeHtmlV121(phone)}`:""}</small><button type="button" data-review-step="1">Ändern</button></article>
      <article class="checkout-review-card-v121"><span>Rechnung & Lieferung</span><b>${escapeHtmlV121(street)}</b><small>${escapeHtmlV121(zip)} ${escapeHtmlV121(city)}${country?` · ${escapeHtmlV121(country)}`:""}<br>${escapeHtmlV121(deliveryLabel)}</small><button type="button" data-review-step="2">Ändern</button></article>`;
  }

  function goToStepV121(target){
    const current=Number(window.checkoutStep||1);
    if(target<=current){setCheckoutStep(target);return;}
    let step=current;
    while(step<target){if(!validateCheckoutStep(step))return;step++;setCheckoutStep(step);}
  }

  document.addEventListener("DOMContentLoaded",function(){
    const form=document.getElementById("checkoutForm");if(!form)return;

    document.querySelectorAll("[data-step-indicator]").forEach(indicator=>{
      indicator.setAttribute("role","button");indicator.setAttribute("tabindex","0");
      const activate=()=>goToStepV121(Number(indicator.dataset.stepIndicator));
      indicator.addEventListener("click",activate);
      indicator.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();activate();}});
    });

    document.getElementById("customerTypeCardsV121")?.addEventListener("click",e=>{
      const btn=e.target.closest("[data-customer-type]");if(!btn)return;
      const select=document.getElementById("customerType");select.value=btn.dataset.customerType;
      select.dispatchEvent(new Event("change",{bubbles:true}));
      syncCustomerCardsV121();saveCheckoutDraftV121();
    });
    document.getElementById("deliveryCardsV121")?.addEventListener("click",e=>{
      const btn=e.target.closest("[data-delivery]");if(!btn)return;
      const select=document.getElementById("deliveryMethod");select.value=btn.dataset.delivery;
      select.dispatchEvent(new Event("change",{bubbles:true}));
      syncDeliveryCardsV121();saveCheckoutDraftV121();updateCheckoutLiveV121();
    });
    document.getElementById("checkoutReviewV121")?.addEventListener("click",e=>{
      const btn=e.target.closest("[data-review-step]");if(btn)setCheckoutStep(Number(btn.dataset.reviewStep));
    });
    document.getElementById("clearCheckoutDraftV121")?.addEventListener("click",()=>clearCheckoutDraftV121(true));
    const consentIds=["checkoutTerms","checkoutPrivacy","checkoutWithdrawal"];
    document.getElementById("placeOrder")?.addEventListener("click",()=>{
      consentIds.forEach(id=>{const input=document.getElementById(id);input?.closest(".checkout-check-v108")?.classList.toggle("has-error",!input.checked);});
    },true);
    consentIds.forEach(id=>document.getElementById(id)?.addEventListener("change",e=>{if(e.target.checked)e.target.closest(".checkout-check-v108")?.classList.remove("has-error");}));

    let draftTimer=0;
    form.addEventListener("input",e=>{
      updateFieldStateV121(e.target);
      clearTimeout(draftTimer);draftTimer=setTimeout(saveCheckoutDraftV121,180);
    });
    form.addEventListener("change",e=>{
      updateFieldStateV121(e.target);saveCheckoutDraftV121();
      if(e.target.id==="customerType")syncCustomerCardsV121();
      if(e.target.id==="deliveryMethod")syncDeliveryCardsV121();
      updateCheckoutLiveV121();
    });

    const originalInvalid=window.invalidField;
    if(typeof originalInvalid==="function"){
      window.invalidField=function(id,message){
        const invalid=originalInvalid(id,message);
        if(invalid)markFieldErrorV121(document.getElementById(id),message);
        return invalid;
      };
    }
    const originalSetStep=window.setCheckoutStep;
    if(typeof originalSetStep==="function"){
      window.setCheckoutStep=function(step){
        originalSetStep(step);updateCheckoutLiveV121();
        if(Number(step)===3)renderCheckoutReviewV121();
      };
    }
    const originalRender=window.renderCheckoutSummary;
    if(typeof originalRender==="function"){
      window.renderCheckoutSummary=function(){originalRender();updateCheckoutLiveV121();};
    }
    const originalOpen=window.openCheckout;
    if(typeof originalOpen==="function"){
      window.openCheckout=function(){
        const result=originalOpen.apply(this,arguments);
        restoreCheckoutDraftV121();syncCustomerCardsV121();syncDeliveryCardsV121();updateCheckoutLiveV121();
        return result;
      };
    }
    const originalApplyResult=window.applyOrderTransmissionResult;
    if(typeof originalApplyResult==="function"){
      window.applyOrderTransmissionResult=function(order,result,localSaved){
        const value=originalApplyResult(order,result,localSaved);
        if(result?.ok)clearCheckoutDraftV121(false);
        return value;
      };
    }

    syncCustomerCardsV121();syncDeliveryCardsV121();updateCheckoutLiveV121();
  });
})();
</script>

<script>
(function(){
  function showEditions(){
    document.body.classList.add('show-editions-v126');
    if(typeof go==='function') go('home');
    setTimeout(()=>{
      const el=document.getElementById('editions-overview');
      if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
    },260);
    const dr=document.getElementById('drawer'); if(dr) dr.classList.remove('open');
    const ov=document.getElementById('drawerOverlay'); if(ov) ov.classList.remove('open');
  }
  document.addEventListener('click', e=>{
    const el = e.target.closest('[data-nav="editions-overview"]');
    if(!el) return;
    e.preventDefault();
    showEditions();
  }, true);
})();
</script>
<script>
(function(){
  function showBerlin(){
    document.body.classList.add('show-berlin-v127');
    if(typeof go==='function') go('home');
    setTimeout(()=>{
      const el=document.getElementById('royal-edition');
      if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
    },260);
    const dr=document.getElementById('drawer'); if(dr) dr.classList.remove('open');
    const ov=document.getElementById('drawerOverlay'); if(ov) ov.classList.remove('open');
  }
  document.addEventListener('click', e=>{
    const el = e.target.closest('[data-nav="berlin-edition"]');
    if(!el) return;
    e.preventDefault();
    showBerlin();
  }, true);
})();
</script>
<script>
(function(){
  const track = document.querySelector('.reviews-track-v131');
  if(!track) return;
  const cards = Array.from(track.children);
  cards.forEach(c => track.appendChild(c.cloneNode(true)));
})();
</script>
</body>
</html>
