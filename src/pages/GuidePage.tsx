import { useParams, Link } from 'react-router-dom'
import { FadeUp, SectionEyebrow, ArrowRight, ArrowLeft, CheckIcon } from '../shared'
import { useState } from 'react'

const ARTICLES: Record<string, {
  slug: string; category: string; categoryColor: string; categoryText: string;
  title: string; subtitle: string; time: string; reviewedBy: string; reviewDate: string;
  toc: string[]; intro: string; sections: { heading: string; content: string }[];
  keyPoints: string[]; disclaimer: string;
}> = {
  'inghesuire-dentara': {
    slug: 'inghesuire-dentara',
    category: 'Probleme frecvente',
    categoryColor: '#EDF8F6',
    categoryText: '#123F46',
    title: 'Inghesuire dentară: cauze, consecințe și soluții ortodontice',
    subtitle: 'Tot ce trebuie să știi despre una dintre cele mai frecvente probleme ortodontice',
    time: '5 min',
    reviewedBy: 'Dr. Raluca Moraru, medic specialist ortodont',
    reviewDate: 'Iulie 2025',
    toc: ['Ce este inghesuirea dentară?', 'Cauzele inghesuirii', 'Consecințele netratate', 'Opțiuni de tratament', 'La ce vârstă intervenim?'],
    intro: 'Inghesuirea dentară este una dintre cele mai frecvente probleme cu care se prezintă pacienții la consultația ortodontică. Apare atunci când spațiul disponibil pe arcadă este insuficient pentru a permite erupția corectă și alinierea tuturor dinților permanenți.',
    sections: [
      {
        heading: 'Ce este inghesuirea dentară?',
        content: 'Inghesuirea dentară reprezintă o discrepanță între dimensiunea dinților și lungimea arcadei dentare. Dinții nu dispun de suficient spațiu pentru a erupe în poziție corectă, suprapunându-se, rotindu-se sau erupând în poziții necorespunzătoare. Poate afecta atât arcada superioară, cât și cea inferioară, sau ambele simultan.',
      },
      {
        heading: 'Cauzele inghesuirii dentare',
        content: 'Inghesuirea are de regulă o componentă genetică — moștenești dimensiunea dinților de la un părinte și dimensiunea oaselor maxilare de la celălalt. Factorii care pot contribui la agravarea situației includ: pierderea prematură a dinților de lapte, obiceiuri vicioase (suge degetul, respirație orală prelungită), lipsa de stimulare a creșterii osoase prin masticație insuficientă sau alăptare artificială prelungită.',
      },
      {
        heading: 'Consecințele inghesuirii netratate',
        content: 'Lăsată netratată, inghesuirea poate genera dificultăți de igienizare (ceea ce crește riscul de carie și parodontopatii), uzură dentară inegală, probleme funcționale în masticație și articulație temporomandibulară, dar și impact psihologic legat de aspectul estetic al zâmbetului.',
      },
      {
        heading: 'Opțiuni de tratament ortodontic',
        content: 'Tratamentul depinde de severitatea inghesuirii și de vârsta pacientului. La copii, intervențiile timpurii cu aparate funcționale pot ghida creșterea osoasă și crea spațiu. La adolescenți și adulți, se apelează la aparate fixe (metalice, ceramice, safir) sau la aliniatoare transparente, cu sau fără extracții de premolari în funcție de complexitatea cazului.',
      },
      {
        heading: 'La ce vârstă este recomandat tratamentul?',
        content: 'Prima evaluare ortodontică este recomandată în jurul vârstei de 7 ani. Chiar dacă nu orice copil necesită tratament la această vârstă, detectarea timpurie a unei inghesuiri moderate sau severe permite planificarea unor intervenții care simplifică semnificativ tratamentul ulterior și, în unele cazuri, evită extracțiile.',
      },
    ],
    keyPoints: [
      'Inghesuirea este cel mai frecvent motiv de prezentare la consultația ortodontică',
      'Are o componentă genetică importantă — nu este cauzată de alăptare sau de obiceiuri alimentare',
      'Poate fi tratată eficient la orice vârstă, de la copii la adulți',
      'Tratamentul timpuriu (7–10 ani) poate simplifica semnificativ intervențiile ulterioare',
      'Aliniatorii și aparatele fixe sunt la fel de eficiente pentru inghesuire moderată',
    ],
    disclaimer: 'Acest articol are scop educativ și nu înlocuiește consultul medical. Diagnosticul și planul de tratament sunt stabilite individual, de către medicul specialist ortodont, în urma unui examen clinic complet.',
  },
  'urgente-ortodontice': {
    slug: 'urgente-ortodontice',
    category: 'Urgențe ortodontice',
    categoryColor: '#FDF2F8',
    categoryText: '#9D174D',
    title: 'Bracket desprins sau sârmă care deranjează — ce faceți?',
    subtitle: 'Ghid de prim ajutor pentru situațiile neașteptate cu aparatul dentar',
    time: '3 min',
    reviewedBy: 'Dr. Raluca Moraru, medic specialist ortodont',
    reviewDate: 'Iulie 2025',
    toc: ['Ce este o urgență ortodontică?', 'Bracket desprins', 'Sârmă care iese sau înțeapă', 'Aparat pierdut sau deformat', 'Când sunați la cabinet?'],
    intro: 'Urgențele ortodontice sunt situații neprevăzute care pot apărea în timpul tratamentului cu aparat dentar. Deși pot fi incomode, rareori reprezintă o urgență medicală adevărată. Știind cum să acționați, puteți gestiona situația până la consultul programat sau de urgență.',
    sections: [
      {
        heading: 'Ce este o urgență ortodontică?',
        content: 'O urgență ortodontică include: bracket desprins, sârmă ortodontică ieșită din inelul terminal sau care înțeapă mucoasa, aparat mobil pierdut sau rupt, durere persistentă după activare. Cele mai frecvente situații pot fi gestionate temporar acasă, fără a fi necesară o vizită urgentă.',
      },
      {
        heading: 'Bracket desprins — ce faceți?',
        content: 'Dacă un bracket s-a desprins de pe dinte dar a rămas pe sârmă, el va culisa de-a lungul arcului și nu reprezintă un pericol imediat. Puteți folosi ceara ortodontică (disponibilă în farmacii) pentru a-l stabiliza și a preveni iritarea mucoasei. Programați o consultație în decurs de câteva zile pentru rebonding. Dacă bracket-ul a căzut complet, păstrați-l și aduceți-l la cabinet.',
      },
      {
        heading: 'Sârmă care iese sau înțeapă',
        content: 'Dacă capătul sârmei ieșit din ultimul bracket irită obrazul sau gingiile, folosiți o bucată de ceară ortodontică pentru a acoperi porțiunea ascuțită. Dacă sârma a ieșit complet din bracket, nu încercați să o introduceți singur. Apelați la cabinet pentru o programare urgentă sau de urgență.',
      },
      {
        heading: 'Durere după activare — este normală?',
        content: 'Disconfortul sau sensibilitatea în primele 2–5 zile după o activare sau după aplicarea aparatului este normală și face parte din procesul de adaptare. Puteți administra analgezice obișnuite (ibuprofen sau paracetamol) la doza recomandată. Dacă durerea este intensă și persistă mai mult de o săptămână, contactați cabinetul.',
      },
      {
        heading: 'Când sunați imediat la cabinet?',
        content: 'Contactați cabinetul de urgență dacă: un sârmă a penetrat mucoasa orală și nu poate fi acoperită cu ceară, apare o inflamație sau infecție vizibilă, durerea este insuportabilă sau se intensifică rapid, sau dacă ați înghițit o componentă a aparatului.',
      },
    ],
    keyPoints: [
      'Urgențele ortodontice rareori necesită intervenție imediată — există prim ajutor temporar',
      'Ceara ortodontică este cel mai util accesoriu în situații de urgență',
      'Nu folosiți clești sau unelte pentru a repara aparatul acasă',
      'Un bracket desprins nu oprește tratamentul, dar trebuie reparat în câteva zile',
      'Durerea post-activare este normală și durează 2–5 zile',
    ],
    disclaimer: 'Informațiile din acest articol au scop educativ. În caz de durere intensă, sângerare sau orice situație care vă îngrijorează, contactați imediat cabinetul sau prezentați-vă la un medic.',
  },
}

const FALLBACK_ARTICLE = {
  slug: 'ghid',
  category: 'Ghidul pacientului',
  categoryColor: '#EDF8F6',
  categoryText: '#123F46',
  title: 'Ghidul pacientului ortodontic',
  subtitle: 'Informații complete pentru fiecare etapă a tratamentului',
  time: '8 min',
  reviewedBy: 'Dr. Raluca Moraru, medic specialist ortodont',
  reviewDate: 'Iulie 2025',
  toc: ['Înainte de tratament', 'Primele săptămâni', 'Igiena orală', 'Alimentația', 'Controalele periodice'],
  intro: 'Tratamentul ortodontic este un parteneriat pe termen mediu sau lung între medic și pacient. Cu cât ești mai bine informat, cu atât procesul va fi mai confortabil și mai eficient.',
  sections: [
    { heading: 'Înainte de tratament', content: 'Prima consultație include o evaluare clinică completă, fotografii și, dacă este cazul, radiografii. Nu este necesară nicio pregătire specială din partea pacientului. Este util să notați orice întrebări pe care le aveți.' },
    { heading: 'Primele săptămâni', content: 'Adaptarea la aparat durează de regulă 1–2 săptămâni. Pot apărea disconfort, sensibilitate dentară ușoară și iritarea mucoasei. Ceara ortodontică poate atenua iritațiile. Aceste simptome dispar treptat pe măsură ce vă obișnuiți cu aparatul.' },
    { heading: 'Igiena orală cu aparat', content: 'Igiena orală este mai importantă ca niciodată în timpul tratamentului ortodontic. Se recomandă periaj de cel puțin 3 ori pe zi, cu periuță ortodontică, periuță interdentară și ață dentară cu ghid. Irigatorul oral poate fi un ajutor suplimentar.' },
    { heading: 'Alimentația cu aparat fix', content: 'Evitați alimentele tari (nuci, covrigei, fructe mușcate direct), lipicioase (caramele, gumă de mestecat) sau foarte dure. Tăiați merele și morcovii în bucăți mici. Consumați cu moderație băuturile colorate care pot pătia elastic-urile ceramice.' },
    { heading: 'Controalele periodice', content: 'Nu săriți controalele programate — sunt esențiale pentru progresul tratamentului. Dacă nu puteți ajunge, anunțați cabinetul în avans. Fiecare ședință de activare menține tratamentul pe traiectoria planificată.' },
  ],
  keyPoints: ['Informarea pacientului este cheia unui tratament de succes', 'Igiena orală impecabilă previne complicațiile', 'Controalele regulate sunt parte esențială a tratamentului', 'Comunicați deschis cu medicul dumneavoastră orice disconfort'],
  disclaimer: 'Acest ghid are scop educativ general. Recomandările individuale sunt stabilite de medicul dumneavoastră specialist ortodont.',
}

const RELATED_ARTICLES = [
  { slug: 'inghesuire-dentara', category: 'Probleme frecvente', title: 'Inghesuire dentară: cauze și soluții ortodontice', time: '5 min', color: '#EDF8F6', textColor: '#123F46' },
  { slug: 'urgente-ortodontice', category: 'Urgențe ortodontice', title: 'Bracket desprins sau sârmă care deranjează — ce faceți?', time: '3 min', color: '#FDF2F8', textColor: '#9D174D' },
]

export default function GuidePage() {
  const { slug } = useParams()
  const [activeSection, setActiveSection] = useState(0)

  const article = slug ? (ARTICLES[slug] ?? FALLBACK_ARTICLE) : FALLBACK_ARTICLE

  return (
    <div style={{ backgroundColor: '#FAFAF7', paddingTop: '80px' }}>
      {/* Breadcrumb */}
      <div style={{ backgroundColor: '#EDF8F6', borderBottom: '1px solid #DDE5E4' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center gap-2 text-xs font-sans flex-wrap" style={{ color: '#607178' }}>
          <Link to="/" className="hover:text-[#25A7A1] transition-colors">Acasă</Link>
          <span style={{ color: '#DDE5E4' }}>/</span>
          <Link to="/ghid" className="hover:text-[#25A7A1] transition-colors">Ghidul pacientului</Link>
          <span style={{ color: '#DDE5E4' }}>/</span>
          <span style={{ color: '#123F46', fontWeight: 600 }}>{article.category}</span>
        </div>
      </div>

      {/* Article header */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#EDF8F6' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <span className="inline-block text-[11px] font-sans font-semibold tracking-wider uppercase px-3 py-1.5 mb-6" style={{ backgroundColor: article.categoryColor, color: article.categoryText, borderRadius: '20px' }}>{article.category}</span>
            <h1 style={{ fontFamily: 'Newsreader, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#123F46', letterSpacing: '-0.02em', lineHeight: 1.1 }} className="mb-4">
              {article.title}
            </h1>
            <p className="text-base font-sans leading-relaxed mb-8" style={{ color: '#607178' }}>{article.subtitle}</p>
            <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t" style={{ borderColor: '#DDE5E4' }}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0" style={{ backgroundColor: '#DDE5E4' }}>
                  <img src="https://images.unsplash.com/photo-1659353888906-adb3e0041693?w=80&h=80&fit=crop&auto=format" alt="Dr. Raluca Moraru" className="w-full h-full object-cover"/>
                </div>
                <div>
                  <p className="text-xs font-sans font-semibold" style={{ color: '#123F46' }}>Verificat medical de</p>
                  <p className="text-xs font-sans" style={{ color: '#607178' }}>{article.reviewedBy}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs font-sans" style={{ color: '#ADB5BD' }}>
                <span>⏱ {article.time} citire</span>
                <span>Actualizat: {article.reviewDate}</span>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Article body + TOC */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[260px_1fr] gap-12 lg:gap-20 items-start">

            {/* TOC */}
            <FadeUp>
              <div className="lg:sticky lg:top-28">
                <p className="text-[11px] font-sans font-semibold tracking-widest uppercase mb-4" style={{ color: '#25A7A1' }}>Cuprins</p>
                <nav className="flex flex-col gap-1">
                  {article.toc.map((item, i) => (
                    <button key={i} onClick={() => setActiveSection(i)}
                      className="text-left text-sm font-sans py-2 px-3 transition-all"
                      style={{
                        borderRadius: '8px', color: activeSection === i ? '#123F46' : '#607178',
                        backgroundColor: activeSection === i ? '#EDF8F6' : 'transparent',
                        fontWeight: activeSection === i ? 600 : 400,
                        borderLeft: `2px solid ${activeSection === i ? '#25A7A1' : 'transparent'}`,
                      }}>
                      {item}
                    </button>
                  ))}
                </nav>

                {/* Key points sidebar */}
                <div className="mt-8 p-5" style={{ borderRadius: '14px', backgroundColor: '#EDF8F6', border: '1px solid rgba(37,167,161,0.15)' }}>
                  <p className="text-[11px] font-sans font-semibold tracking-widest uppercase mb-4" style={{ color: '#25A7A1' }}>Puncte cheie</p>
                  <ul className="flex flex-col gap-2.5">
                    {article.keyPoints.map(p => (
                      <li key={p} className="flex items-start gap-2 text-xs font-sans leading-relaxed" style={{ color: '#607178' }}>
                        <span className="flex-shrink-0 mt-0.5"><CheckIcon /></span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeUp>

            {/* Article content */}
            <FadeUp delay={100}>
              <div className="max-w-2xl">
                {/* Intro */}
                <p className="text-lg font-sans leading-relaxed mb-10" style={{ color: '#263238', borderLeft: '3px solid #25A7A1', paddingLeft: '20px' }}>
                  {article.intro}
                </p>

                {/* Sections */}
                {article.sections.map((section, i) => (
                  <div key={i} className="mb-10">
                    <h2 className="mb-4" style={{ fontFamily: 'Newsreader, Georgia, serif', fontSize: '1.5rem', fontWeight: 500, color: '#123F46', letterSpacing: '-0.01em' }}>
                      {section.heading}
                    </h2>
                    <p className="text-base font-sans leading-relaxed" style={{ color: '#607178', lineHeight: 1.8 }}>
                      {section.content}
                    </p>
                    {i < article.sections.length - 1 && (
                      <div className="mt-8 border-t" style={{ borderColor: '#DDE5E4' }} />
                    )}
                  </div>
                ))}

                {/* Medical disclaimer */}
                <div className="mt-12 p-6" style={{ borderRadius: '14px', backgroundColor: '#F8FAFC', border: '1px solid #DDE5E4' }}>
                  <p className="text-[11px] font-sans font-semibold tracking-widest uppercase mb-2" style={{ color: '#ADB5BD' }}>Disclaimer medical</p>
                  <p className="text-xs font-sans leading-relaxed" style={{ color: '#607178' }}>{article.disclaimer}</p>
                </div>

                {/* CTA inline */}
                <div className="mt-12 p-8" style={{ borderRadius: '16px', backgroundColor: '#EDF8F6', border: '1px solid rgba(37,167,161,0.2)' }}>
                  <p style={{ fontFamily: 'Newsreader, Georgia, serif', fontSize: '1.35rem', fontWeight: 400, color: '#123F46', letterSpacing: '-0.01em' }} className="mb-3">
                    Ai întrebări despre situația ta?
                  </p>
                  <p className="text-sm font-sans leading-relaxed mb-5" style={{ color: '#607178' }}>
                    Programează o consultație de evaluare și primești un diagnostic clar și personalizat.
                  </p>
                  <Link to="/#contact" className="inline-flex items-center gap-2 font-sans font-semibold text-sm text-white px-6 py-3 transition-colors"
                    style={{ backgroundColor: '#25A7A1', borderRadius: '10px' }}>
                    Programează acum <ArrowRight />
                  </Link>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Related articles */}
      <section className="py-16 lg:py-24 border-t" style={{ borderColor: '#DDE5E4', backgroundColor: '#FAFAF7' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="flex items-end justify-between mb-10">
              <div>
                <SectionEyebrow label="Continuă să citești" />
                <h2 style={{ fontFamily: 'Newsreader, Georgia, serif', fontSize: '1.8rem', fontWeight: 400, color: '#123F46', letterSpacing: '-0.02em' }}>Articole similare</h2>
              </div>
              <Link to="/ghid" className="text-sm font-sans font-medium transition-opacity hover:opacity-60 flex items-center gap-1.5" style={{ color: '#25A7A1' }}>
                Toate articolele <ArrowRight />
              </Link>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
            {RELATED_ARTICLES.filter(a => a.slug !== slug).map((a, i) => (
              <FadeUp key={a.slug} delay={i * 80}>
                <Link to={`/ghid/${a.slug}`} className="group flex flex-col gap-3 p-6 bg-white transition-shadow hover:shadow-md" style={{ borderRadius: '14px', border: '1px solid #DDE5E4', display: 'flex' }}>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-sans font-semibold tracking-wider uppercase px-2.5 py-1" style={{ backgroundColor: a.color, color: a.textColor, borderRadius: '20px' }}>{a.category}</span>
                    <span className="text-[11px] font-sans" style={{ color: '#ADB5BD' }}>⏱ {a.time} citire</span>
                  </div>
                  <h3 className="font-sans font-semibold text-sm leading-snug group-hover:text-[#25A7A1] transition-colors" style={{ color: '#123F46' }}>{a.title}</h3>
                  <span className="inline-flex items-center gap-1 text-xs font-sans font-semibold" style={{ color: '#25A7A1' }}>Citește articolul <ArrowRight size={12} /></span>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Back */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <Link to="/ghid" className="inline-flex items-center gap-2 text-sm font-sans font-medium transition-colors" style={{ color: '#607178' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#25A7A1')}
          onMouseLeave={e => (e.currentTarget.style.color = '#607178')}>
          <ArrowLeft /> Înapoi la ghidul pacientului
        </Link>
      </div>
    </div>
  )
}
