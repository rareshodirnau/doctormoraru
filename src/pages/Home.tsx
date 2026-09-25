import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FadeUp, SectionEyebrow, SectionHeading, BeforeAfterSlider,
  ArrowRight, CheckIcon, ChevronDown, StarIcon, GoogleIcon,
  IconCertificate, IconFamily, IconPlan, IconLocation,
  MapPinIcon, MailIcon, ClockIcon, PhoneIcon, TAG_COLORS, TREATMENTS,
} from '../shared'

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: '#FAFAF7' }}>
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{ backgroundColor: '#EDF8F6', clipPath: 'ellipse(62% 82% at 80% 50%)' }} />
      <svg className="absolute top-0 right-0 opacity-[0.06] pointer-events-none" width="300" height="300" viewBox="0 0 300 300" aria-hidden="true">
        {[0,1,2,3].map(i => <ellipse key={i} cx="260" cy="55" rx={55+i*32} ry={85+i*52} fill="none" stroke="#123F46" strokeWidth="1"/>)}
      </svg>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
          <div className="max-w-xl">
            <FadeUp>
              <div className="flex items-center gap-3 mb-7">
                <div className="w-8 h-px" style={{ backgroundColor: '#25A7A1' }} />
                <span className="text-[11px] font-sans font-semibold tracking-widest uppercase" style={{ color: '#25A7A1' }}>Ortodonție pentru copii și adulți</span>
              </div>
            </FadeUp>
            <FadeUp delay={100}>
              <h1 className="mb-6" style={{ fontFamily: 'Newsreader, Georgia, serif', fontSize: 'clamp(2.6rem, 5vw, 4rem)', fontWeight: 400, color: '#123F46', letterSpacing: '-0.02em', lineHeight: 1.06 }}>
                Un zâmbet armonios{' '}
                <em style={{ fontStyle: 'italic', fontWeight: 300 }}>începe cu un tratament planificat corect.</em>
              </h1>
            </FadeUp>
            <FadeUp delay={200}>
              <p className="text-base font-sans leading-relaxed mb-8" style={{ color: '#607178', maxWidth: '38ch' }}>
                Tratamente ortodontice personalizate, bazate pe echilibrul dintre poziția dinților, mușcătură și trăsăturile feței.
              </p>
            </FadeUp>
            <FadeUp delay={300}>
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <a href="#contact"
                  className="inline-flex items-center justify-center gap-2 font-sans font-semibold text-sm text-white px-6 py-3.5 transition-colors duration-200"
                  style={{ backgroundColor: '#25A7A1', borderRadius: '12px' }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#123F46')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#25A7A1')}>
                  Programează o consultație
                </a>
                <a href="#tratamente"
                  className="inline-flex items-center justify-center gap-2 font-sans font-medium text-sm px-6 py-3.5 border transition-colors duration-200"
                  style={{ color: '#123F46', borderColor: '#DDE5E4', borderRadius: '12px' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#25A7A1'; e.currentTarget.style.color = '#25A7A1' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#DDE5E4'; e.currentTarget.style.color = '#123F46' }}>
                  Descoperă tratamentele <ArrowRight />
                </a>
              </div>
            </FadeUp>
            <FadeUp delay={400}>
              <div className="flex items-center gap-3 pt-5 border-t" style={{ borderColor: '#DDE5E4' }}>
                <p className="text-sm font-sans" style={{ color: '#607178' }}>
                  <span className="font-semibold" style={{ color: '#123F46' }}>Peste 10 ani</span> de experiență în ortodonție · Cluj-Napoca
                </p>
              </div>
            </FadeUp>
          </div>

          {/* Portrait */}
          <div className="relative hidden lg:block">
            <div className="absolute" style={{ width: '390px', height: '510px', top: '-28px', left: '-28px', borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%', backgroundColor: '#EDF8F6', border: '1px solid #DDE5E4', zIndex: 0 }} />
            <svg className="absolute" style={{ top: '-44px', right: '-36px', zIndex: 0, opacity: 0.14 }} width="200" height="200" viewBox="0 0 200 200" aria-hidden="true">
              <path d="M100 10 A90 90 0 0 1 190 100" stroke="#25A7A1" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <path d="M120 5 A95 95 0 0 1 195 120" stroke="#123F46" strokeWidth="1" fill="none" strokeLinecap="round"/>
            </svg>
            <div className="relative overflow-hidden" style={{ width: '370px', height: '530px', borderRadius: '50% 50% 48% 52% / 58% 58% 42% 42%', zIndex: 1, backgroundColor: '#DDE5E4' }}>
              <img src="https://doctormoraru.ro/wp-content/uploads/2019/08/P7160026-cv.jpg" alt="Dr. Raluca Moraru, medic specialist ortodont" className="w-full h-full object-cover"/>
            </div>
            <div className="absolute bottom-12 -left-14 bg-white px-5 py-4 shadow-lg" style={{ borderRadius: '14px', border: '1px solid #DDE5E4', zIndex: 2 }}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EDF8F6' }}><IconCertificate /></div>
                <div><p className="text-xs font-sans font-semibold" style={{ color: '#123F46' }}>Medic Specialist</p><p className="text-xs font-sans" style={{ color: '#607178' }}>Ortodonție · 10+ ani</p></div>
              </div>
            </div>
            <div className="absolute top-12 -right-10 bg-white px-4 py-3 shadow-md" style={{ borderRadius: '12px', border: '1px solid #DDE5E4', zIndex: 2 }}>
              <div className="flex items-center gap-2"><IconLocation /><p className="text-xs font-sans font-semibold" style={{ color: '#123F46' }}>Cluj-Napoca</p></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #FAFAF7)' }} />
    </section>
  )
}

// ─── Trust ────────────────────────────────────────────────────────────────────

function TrustSection() {
  const items = [
    { icon: <IconCertificate />, title: 'Medic specialist ortodont', desc: 'Formare universitară și specializare clinică' },
    { icon: <IconFamily />, title: 'Tratamente pentru copii și adulți', desc: 'Îngrijire adaptată fiecărei vârste' },
    { icon: <IconPlan />, title: 'Planuri de tratament personalizate', desc: 'Fiecare tratament este gândit individual' },
    { icon: <IconLocation />, title: 'Cabinet în Cluj-Napoca', desc: 'Consultații la sediu sau online' },
  ]
  return (
    <section className="border-y" style={{ borderColor: '#DDE5E4', backgroundColor: '#FAFAF7' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <FadeUp key={item.title} delay={i * 75}>
              <div className="flex flex-col gap-2.5 py-9 px-7" style={{ borderRight: i < 3 ? '1px solid #DDE5E4' : 'none' }}>
                <div className="mb-0.5">{item.icon}</div>
                <h3 className="font-sans font-semibold text-[13px] leading-snug" style={{ color: '#123F46' }}>{item.title}</h3>
                <p className="text-xs font-sans leading-relaxed" style={{ color: '#607178' }}>{item.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Patient Entry Points ──────────────────────────────────────────────────────

function PatientCardsSection() {
  const cards = [
    { label: 'Copii', title: 'Ortodonție pentru copii', desc: 'Detectarea timpurie a problemelor ortodontice permite intervenții mai simple și rezultate de durată. Evaluarea este recomandată de la 7 ani.', image: 'https://images.unsplash.com/photo-1758691463331-2ac00e6f676f?w=600&h=760&fit=crop&auto=format', alt: 'Consultație ortodontică pediatrică', bg: '#EDF8F6' },
    { label: 'Adolescenți', title: 'Ortodonție pentru adolescenți', desc: 'Perioada adolescenței este optimă pentru tratamentul ortodontic. Oferim aparate fixe estetice și opțiuni discrete adaptate stilului de viață.', image: 'https://images.unsplash.com/photo-1629747490241-624f07d70e1e?w=600&h=760&fit=crop&auto=format', alt: 'Adolescent cu aparat dentar', bg: '#F0F7F6' },
    { label: 'Adulți', title: 'Ortodonție pentru adulți', desc: 'Nu există o vârstă limită pentru un tratament ortodontic. Aliniatorii transparenți și aparatele estetice permit tratament discret la orice vârstă.', image: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?w=600&h=760&fit=crop&auto=format', alt: 'Adult după tratament ortodontic', bg: '#FAFAF7' },
  ]
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: '#FAFAF7' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="flex items-end justify-between mb-12">
            <div>
              <SectionEyebrow label="Cine tratăm" />
              <SectionHeading><>Tratamente adaptate<br /><em style={{ fontStyle: 'italic', fontWeight: 300 }}>fiecărei etape de viață</em></></SectionHeading>
            </div>
            <a href="#contact" className="hidden md:flex items-center gap-1.5 text-sm font-sans font-medium transition-opacity hover:opacity-60" style={{ color: '#25A7A1' }}>
              Programează consultația <ArrowRight />
            </a>
          </div>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <FadeUp key={card.title} delay={i * 90}>
              <article className="group flex flex-col overflow-hidden" style={{ borderRadius: '16px', border: '1px solid #DDE5E4', backgroundColor: card.bg }}>
                <div className="relative overflow-hidden" style={{ height: '300px', backgroundColor: '#DDE5E4' }}>
                  <img src={card.image} alt={card.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
                  <div className="absolute top-4 left-4 font-sans font-semibold text-xs tracking-wider uppercase px-3 py-1.5" style={{ backgroundColor: 'rgba(255,255,255,0.92)', color: '#123F46', borderRadius: '20px' }}>{card.label}</div>
                </div>
                <div className="flex flex-col gap-3 p-7 flex-1">
                  <h3 style={{ fontFamily: 'Newsreader, Georgia, serif', fontSize: '1.25rem', fontWeight: 500, color: '#123F46', letterSpacing: '-0.015em', lineHeight: 1.25 }}>{card.title}</h3>
                  <p className="text-[13.5px] font-sans leading-relaxed flex-1" style={{ color: '#607178' }}>{card.desc}</p>
                  <a href="#tratamente" className="inline-flex items-center gap-1.5 text-sm font-sans font-semibold mt-1 transition-colors duration-200" style={{ color: '#25A7A1' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#123F46')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#25A7A1')}>
                    Află mai multe <ArrowRight />
                  </a>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Treatments Section ───────────────────────────────────────────────────────

function TreatmentsSection() {
  const [featured, ...rest] = TREATMENTS
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: '#EDF8F6' }} id="tratamente">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionEyebrow label="Tratamente ortodontice" />
              <SectionHeading><>Soluția potrivită<br /><em style={{ fontStyle: 'italic', fontWeight: 300 }}>pentru fiecare pacient</em></></SectionHeading>
            </div>
            <Link to="/tratament/aparat-metalic" className="inline-flex items-center gap-1.5 text-sm font-sans font-medium transition-opacity hover:opacity-60 self-start md:self-auto" style={{ color: '#25A7A1' }}>
              Toate tratamentele <ArrowRight />
            </Link>
          </div>
        </FadeUp>

        {/* Featured */}
        <FadeUp>
          <div className="grid lg:grid-cols-2 gap-5 mb-5">
            <Link to={`/tratament/${featured.slug}`} className="relative overflow-hidden group" style={{ borderRadius: '16px', border: '1px solid #DDE5E4', backgroundColor: 'white', minHeight: '320px', display: 'block' }}>
              <img src={featured.image} alt={featured.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(18,63,70,0.85) 40%, rgba(18,63,70,0.1) 100%)' }}/>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block text-xs font-sans font-semibold tracking-wider uppercase px-3 py-1 mb-3" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'white', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.2)' }}>{featured.tag}</span>
                <h3 style={{ fontFamily: 'Newsreader, Georgia, serif', fontSize: '1.6rem', fontWeight: 500, color: 'white', letterSpacing: '-0.01em', lineHeight: 1.2 }}>{featured.name}</h3>
                <p className="text-sm font-sans mt-2 mb-4 leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '40ch' }}>{featured.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-sans font-semibold" style={{ color: '#25A7A1' }}>
                  Vezi tratamentul <ArrowRight />
                </span>
              </div>
            </Link>
            <div className="flex flex-col gap-5">
              {rest.slice(0, 2).map((t, i) => (
                <FadeUp key={t.slug} delay={i * 80}>
                  <Link to={`/tratament/${t.slug}`} className="flex items-center gap-5 bg-white p-5 group transition-shadow hover:shadow-sm" style={{ borderRadius: '14px', border: '1px solid #DDE5E4', display: 'flex' }}>
                    <div className="relative overflow-hidden flex-shrink-0 rounded-[10px]" style={{ width: '90px', height: '90px', backgroundColor: '#EDF8F6' }}>
                      <img src={t.image} alt={t.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[11px] font-sans font-semibold tracking-wider uppercase px-2 py-0.5" style={{ backgroundColor: TAG_COLORS[t.tag].bg, color: TAG_COLORS[t.tag].text, borderRadius: '20px' }}>{t.tag}</span>
                      </div>
                      <h3 className="font-sans font-semibold text-sm mb-1" style={{ color: '#123F46' }}>{t.name}</h3>
                      <p className="text-xs font-sans leading-relaxed mb-2" style={{ color: '#607178' }}>{t.desc}</p>
                      <span className="inline-flex items-center gap-1 text-xs font-sans font-semibold transition-colors" style={{ color: '#25A7A1' }}>
                        Vezi tratamentul <ArrowRight size={12} />
                      </span>
                    </div>
                  </Link>
                </FadeUp>
              ))}
            </div>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {rest.slice(2).map((t, i) => (
            <FadeUp key={t.slug} delay={i * 80}>
              <Link to={`/tratament/${t.slug}`} className="bg-white p-5 group transition-shadow hover:shadow-sm flex flex-col gap-4" style={{ borderRadius: '14px', border: '1px solid #DDE5E4', display: 'flex' }}>
                <div className="relative overflow-hidden rounded-[10px]" style={{ height: '140px', backgroundColor: '#EDF8F6' }}>
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-sans font-semibold tracking-wider uppercase px-2.5 py-1" style={{ backgroundColor: TAG_COLORS[t.tag].bg, color: TAG_COLORS[t.tag].text, borderRadius: '20px' }}>{t.tag}</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-sm mb-1.5" style={{ color: '#123F46' }}>{t.name}</h3>
                  <p className="text-xs font-sans leading-relaxed mb-3" style={{ color: '#607178' }}>{t.desc}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-sans font-semibold" style={{ color: '#25A7A1' }}>
                    Vezi tratamentul <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Cases preview ────────────────────────────────────────────────────────────

const CASES_PREVIEW = [
  { category: 'Adolescenți', treatment: 'Aparat dentar metalic', duration: '18 luni', summary: 'Corecție inghesuire severă cu extracții de premolari. Rezultat stabil la 2 ani post-tratament.', before: 'https://images.unsplash.com/photo-1629747490241-624f07d70e1e?w=640&h=480&fit=crop&auto=format', after: 'https://images.unsplash.com/photo-1589386417686-0d34b5903d23?w=640&h=480&fit=crop&auto=format' },
  { category: 'Adulți', treatment: 'Alignere transparente', duration: '14 luni', summary: 'Corecție malpoziții anterioare și îmbunătățire estetică. Tratament fără extracții.', before: 'https://images.unsplash.com/photo-1629540266304-fff9c67b7660?w=640&h=480&fit=crop&auto=format', after: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?w=640&h=480&fit=crop&auto=format' },
  { category: 'Copii', treatment: 'Tratament timpuriu', duration: '12 luni', summary: 'Corecție disfuncție de respirație și poziție anormală a mandibulei.', before: 'https://images.unsplash.com/photo-1652761029249-6ec32a82ccb0?w=640&h=480&fit=crop&auto=format', after: 'https://images.unsplash.com/photo-1758691463331-2ac00e6f676f?w=640&h=480&fit=crop&auto=format' },
]

function CasesPreviewSection() {
  const [filter, setFilter] = useState('Toate')
  const filters = ['Toate', 'Copii', 'Adolescenți', 'Adulți']
  const filtered = filter === 'Toate' ? CASES_PREVIEW : CASES_PREVIEW.filter(c => c.category === filter)

  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: '#FAFAF7' }} id="cazuri">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="mb-12">
            <SectionEyebrow label="Rezultate clinice" />
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <SectionHeading><>Rezultate construite cu<br /><em style={{ fontStyle: 'italic', fontWeight: 300 }}>răbdare și precizie</em></></SectionHeading>
              <div className="flex items-center gap-2 flex-wrap">
                {filters.map(f => (
                  <button key={f} onClick={() => setFilter(f)}
                    className="text-xs font-sans font-semibold px-4 py-2 transition-all duration-200"
                    style={{ borderRadius: '20px', border: '1px solid', borderColor: filter === f ? '#25A7A1' : '#DDE5E4', backgroundColor: filter === f ? '#25A7A1' : 'white', color: filter === f ? 'white' : '#607178' }}>
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {filtered.map((c, i) => (
            <FadeUp key={i} delay={i * 80}>
              <div className="flex flex-col gap-4 bg-white p-5" style={{ borderRadius: '16px', border: '1px solid #DDE5E4' }}>
                <BeforeAfterSlider before={c.before} after={c.after} beforeAlt={`Caz ${i+1} înainte`} afterAlt={`Caz ${i+1} după`}/>
                <div className="flex flex-wrap gap-2 mt-1">
                  <span className="text-[11px] font-sans font-semibold tracking-wide uppercase px-2.5 py-1" style={{ backgroundColor: '#EDF8F6', color: '#123F46', borderRadius: '20px' }}>{c.category}</span>
                  <span className="text-[11px] font-sans font-semibold tracking-wide uppercase px-2.5 py-1" style={{ backgroundColor: '#F5F5F5', color: '#607178', borderRadius: '20px' }}>⏱ {c.duration}</span>
                </div>
                <div>
                  <p className="text-sm font-sans font-semibold mb-1" style={{ color: '#123F46' }}>{c.treatment}</p>
                  <p className="text-xs font-sans leading-relaxed" style={{ color: '#607178' }}>{c.summary}</p>
                </div>
                <p className="text-[11px] font-sans italic" style={{ color: '#ADB5BD', borderTop: '1px solid #DDE5E4', paddingTop: '10px' }}>
                  Imagini utilizate cu acordul pacienților. Datele de identificare sunt protejate.
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
        <FadeUp>
          <div className="text-center">
            <Link to="/cazuri" className="inline-flex items-center gap-2 font-sans font-semibold text-sm px-6 py-3.5 border-2 transition-colors duration-200"
              style={{ color: '#123F46', borderColor: '#DDE5E4', borderRadius: '12px' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#25A7A1'; e.currentTarget.style.color = '#25A7A1' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#DDE5E4'; e.currentTarget.style.color = '#123F46' }}>
              Vezi toate cazurile <ArrowRight />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

// ─── Process ──────────────────────────────────────────────────────────────────

const STEPS = [
  { num: '01', title: 'Consultația inițială', desc: 'Evaluare clinică completă a dentiției, mușcăturii și structurii faciale. Discutăm obiectivele și opțiunile de tratament.' },
  { num: '02', title: 'Investigații și diagnostic', desc: 'Radiografii, fotografii clinice și, dacă este necesar, amprente digitale pentru un diagnostic precis.' },
  { num: '03', title: 'Planul de tratament', desc: 'Planificăm etapele, durata estimată și tipul de aparat recomandat. Totul este transparent și personalizat.' },
  { num: '04', title: 'Tratamentul și monitorizarea', desc: 'Controale periodice pentru ajustări și monitorizare atentă a progresului, până la finalizare și contenție.' },
]

function ProcessSection() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: '#EDF8F6' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-14">
            <SectionEyebrow label="Cum funcționează" />
            <SectionHeading center><>Procesul de tratament <em style={{ fontStyle: 'italic', fontWeight: 300 }}>pas cu pas</em></>
            </SectionHeading>
          </div>
        </FadeUp>
        <div className="relative hidden lg:grid grid-cols-4 gap-8 mb-12">
          <div className="absolute top-8 left-[12.5%] right-[12.5%] h-px" style={{ backgroundColor: '#DDE5E4' }} />
          {STEPS.map((step, i) => (
            <FadeUp key={step.num} delay={i * 100}>
              <div className="flex flex-col items-start">
                <div className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-6 font-semibold text-lg" style={{ backgroundColor: 'white', border: '1.5px solid #25A7A1', color: '#25A7A1', fontFamily: 'Newsreader, Georgia, serif' }}>{step.num}</div>
                <h3 className="font-sans font-semibold text-sm mb-2 leading-tight" style={{ color: '#123F46' }}>{step.title}</h3>
                <p className="text-xs font-sans leading-relaxed" style={{ color: '#607178' }}>{step.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
        <div className="lg:hidden flex flex-col gap-0">
          {STEPS.map((step, i) => (
            <FadeUp key={step.num} delay={i * 80}>
              <div className="flex gap-5 pb-8 relative">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm z-10" style={{ backgroundColor: 'white', border: '1.5px solid #25A7A1', color: '#25A7A1', fontFamily: 'Newsreader, Georgia, serif' }}>{step.num}</div>
                  {i < STEPS.length - 1 && <div className="w-px flex-1 mt-2" style={{ backgroundColor: '#DDE5E4' }} />}
                </div>
                <div className="pt-2">
                  <h3 className="font-sans font-semibold text-sm mb-2" style={{ color: '#123F46' }}>{step.title}</h3>
                  <p className="text-xs font-sans leading-relaxed" style={{ color: '#607178' }}>{step.desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
        <FadeUp delay={400}>
          <div className="text-center mt-4">
            <a href="#contact" className="inline-flex items-center gap-2 font-sans font-semibold text-sm px-6 py-3.5 border-2 transition-colors duration-200"
              style={{ color: '#123F46', borderColor: '#25A7A1', borderRadius: '12px' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#25A7A1'; e.currentTarget.style.color = 'white' }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#123F46' }}>
              Cum decurge prima consultație <ArrowRight />
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

// ─── Philosophy ───────────────────────────────────────────────────────────────

function PhilosophySection() {
  return (
    <section className="py-24 lg:py-36 relative overflow-hidden" style={{ backgroundColor: '#EDF8F6' }} id="despre">
      <svg className="absolute top-0 right-0 opacity-[0.05] pointer-events-none" width="480" height="480" viewBox="0 0 480 480" aria-hidden="true">
        {[0,1,2,3,4].map(i => <ellipse key={i} cx="380" cy="100" rx={120+i*40} ry={180+i*60} fill="none" stroke="#123F46" strokeWidth="1"/>)}
      </svg>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_400px] gap-16 lg:gap-24 items-center">
          <div>
            <FadeUp><SectionEyebrow label="Filosofia tratamentului" /></FadeUp>
            <FadeUp delay={100}><SectionHeading><>Mai mult decât <em style={{ fontStyle: 'italic', fontWeight: 300 }}>alinierea dinților</em></></SectionHeading></FadeUp>
            <FadeUp delay={200}>
              <p className="text-base font-sans leading-relaxed mt-6 mb-8" style={{ color: '#607178', maxWidth: '46ch' }}>
                Tratamentul ortodontic urmărește obținerea unei mușcături funcționale, în armonie cu musculatura, articulațiile și trăsăturile feței. Fiecare decizie terapeutică este ancorată în echilibrul facial al pacientului.
              </p>
            </FadeUp>
            <FadeUp delay={300}>
              <div className="inline-flex flex-col gap-2 px-7 py-5 mb-8" style={{ border: '1px solid rgba(37,167,161,0.25)', borderRadius: '14px', backgroundColor: 'rgba(255,255,255,0.7)' }}>
                <span className="font-sans font-semibold tracking-widest uppercase text-[11px]" style={{ color: '#25A7A1' }}>Concept clinic</span>
                <span style={{ fontFamily: 'Newsreader, Georgia, serif', fontSize: '1.55rem', fontWeight: 500, color: '#123F46', letterSpacing: '-0.01em', fontStyle: 'italic' }}>Face Driven Treatment</span>
                <p className="text-sm font-sans" style={{ color: '#607178' }}>Tratament ghidat de armonia feței, nu doar de mișcarea dinților.</p>
              </div>
            </FadeUp>
            <FadeUp delay={400}>
              <ul className="flex flex-col gap-3">
                {['Evaluare completă a structurii faciale și ocluzale','Plan de tratament individualizat și transparent','Monitorizare continuă pe durata întregului tratament','Colaborare interdisciplinară când este necesar'].map(p => (
                  <li key={p} className="flex items-start gap-3 text-sm font-sans" style={{ color: '#607178' }}>
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(37,167,161,0.12)' }}><CheckIcon /></span>
                    {p}
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
          <div className="relative hidden lg:block">
            <svg className="absolute -top-8 -left-8 z-0 pointer-events-none" width="460" height="580" viewBox="0 0 460 580" aria-hidden="true">
              <path d="M230 30 C80 30 30 180 30 290 C30 420 110 540 230 540 C350 540 430 420 430 290 C430 180 380 30 230 30 Z" fill="none" stroke="#25A7A1" strokeWidth="1" opacity="0.18"/>
              <path d="M230 60 C100 60 60 190 60 290 C60 410 130 510 230 510" fill="none" stroke="#123F46" strokeWidth="0.75" opacity="0.12" strokeDasharray="6 6"/>
            </svg>
            <div className="relative z-10 overflow-hidden" style={{ width: '380px', height: '500px', borderRadius: '50% 50% 46% 54% / 55% 55% 45% 45%', backgroundColor: '#DDE5E4', border: '1px solid rgba(37,167,161,0.15)' }}>
              <img src="https://images.unsplash.com/photo-1782397132123-0166b524d6bc?w=760&h=1000&fit=crop&auto=format" alt="Cabinet de ortodonție Dr. Raluca Moraru" className="w-full h-full object-cover"/>
            </div>
            <div className="absolute -bottom-5 -right-4 bg-white px-5 py-4 z-20 shadow-md" style={{ borderRadius: '14px', border: '1px solid #DDE5E4', maxWidth: '195px' }}>
              <p className="text-[10px] font-sans font-semibold mb-1 uppercase tracking-wider" style={{ color: '#25A7A1' }}>Ortodonție de precizie</p>
              <p className="text-xs font-sans leading-relaxed" style={{ color: '#607178' }}>Fiecare caz este analizat în detaliu înainte de orice decizie terapeutică.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── About ────────────────────────────────────────────────────────────────────

function AboutSection() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: '#FAFAF7' }} id="doctor">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_360px] gap-16 lg:gap-24 items-start">
          <div>
            <FadeUp><SectionEyebrow label="Despre medic" /></FadeUp>
            <FadeUp delay={100}>
              <h2 className="mb-2" style={{ fontFamily: 'Newsreader, Georgia, serif', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 400, color: '#123F46', letterSpacing: '-0.02em', lineHeight: 1.1 }}>Dr. Raluca Moraru</h2>
              <p className="text-sm font-sans font-semibold tracking-wide mb-7" style={{ color: '#25A7A1' }}>Medic specialist în ortodonție și ortopedie dento-facială</p>
            </FadeUp>
            <FadeUp delay={200}>
              <div className="space-y-4 mb-8">
                <p className="text-base font-sans leading-relaxed" style={{ color: '#607178' }}>Am ales ortodonția pentru că este o specialitate care combină precizia tehnică cu sensibilitatea estetică — și, mai presus de toate, pentru că schimbă modul în care oamenii se raportează la ei înșiși.</p>
                <p className="text-base font-sans leading-relaxed" style={{ color: '#607178' }}>În cabinet, fiecare pacient beneficiază de o evaluare completă înainte de orice decizie de tratament. Cred că un plan bun este mai valoros decât o tehnologie sofisticată aplicată fără context.</p>
              </div>
            </FadeUp>
            <FadeUp delay={300}>
              <div className="border-t pt-7 mb-7" style={{ borderColor: '#DDE5E4' }}>
                <p className="text-xs font-sans font-semibold tracking-widest uppercase mb-5" style={{ color: '#25A7A1' }}>Formare și specializare</p>
                <div className="space-y-4">
                  {[
                    { year: '2010', text: 'Medic dentiș — Universitatea de Medicină și Farmacie, Cluj-Napoca' },
                    { year: '2013', text: 'Rezidențiat în Ortodonție și Ortopedie Dento-Facială' },
                    { year: '2014', text: 'Medic specialist ortodont — atestat de practică independentă' },
                    { year: '2016–', text: 'Formare continuă: cursuri internaționale în tehnici edgewise, aliniatori și Face Driven Treatment' },
                  ].map(e => (
                    <div key={e.year} className="flex gap-5">
                      <span className="text-xs font-sans font-semibold w-12 flex-shrink-0 mt-0.5" style={{ color: '#25A7A1' }}>{e.year}</span>
                      <p className="text-sm font-sans leading-relaxed" style={{ color: '#607178' }}>{e.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={400}>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-sans font-semibold transition-colors" style={{ color: '#25A7A1' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#123F46')}
                onMouseLeave={e => (e.currentTarget.style.color = '#25A7A1')}>
                Curriculum vitae complet <ArrowRight />
              </a>
            </FadeUp>
          </div>
          <FadeUp delay={200}>
            <div className="lg:sticky lg:top-28">
              <div className="overflow-hidden mb-4" style={{ borderRadius: '16px', height: '460px', backgroundColor: '#DDE5E4', border: '1px solid #DDE5E4' }}>
                <img src="https://doctormoraru.ro/wp-content/uploads/2019/08/P7160026-cv.jpg" alt="Dr. Raluca Moraru în cabinet" className="w-full h-full object-cover"/>
              </div>
              <div className="flex gap-3 flex-wrap">
                {['Ortodonție', 'Ortopedie dento-facială', 'Alignere digitale', 'Face Driven Treatment'].map(tag => (
                  <span key={tag} className="text-[11px] font-sans font-medium px-3 py-1.5" style={{ backgroundColor: '#EDF8F6', color: '#123F46', borderRadius: '20px', border: '1px solid #DDE5E4' }}>{tag}</span>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

// ─── Tarife ───────────────────────────────────────────────────────────────────

const PRICES = [
  { name: 'Consultație de evaluare', desc: 'Examinare clinică, discuție despre opțiunile de tratament, radiografie panoramică inclusă dacă este necesară.', price: '200 lei', note: null },
  { name: 'Aparat dentar metalic', desc: 'Prețul include: aplicare, toate ședințele de control și ajustare pe durata tratamentului, debonding și contenție fixă.', price: '3.000 – 5.500 lei', note: 'Cel mai accesibil' },
  { name: 'Aparat dentar ceramic', desc: 'Bracket-uri ceramice cu vizibilitate redusă. Același protocol de control ca aparatul metalic.', price: '4.500 – 7.000 lei', note: null },
  { name: 'Aparat dentar din safir', desc: 'Bracket-uri monucristaline, transparente. Estetica maximă în categoria aparatelor fixe.', price: '5.500 – 8.500 lei', note: 'Premium' },
  { name: 'Alignere transparente', desc: 'Include planificarea 3D, toate seriile de aliniatoare, controale și retenție post-tratament.', price: '6.000 – 10.000 lei', note: null },
  { name: 'Aparat de contenție', desc: 'Contenție fixă sau mobilă, confecționată individual după finalizarea tratamentului activ.', price: '500 – 1.500 lei', note: null },
]

function TarifeSection() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: '#FAFAF7' }} id="tarife">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-14">
            <SectionEyebrow label="Tarife" />
            <SectionHeading center>
              <>Transparență în<br /><em style={{ fontStyle: 'italic', fontWeight: 300 }}>fiecare etapă</em></>
            </SectionHeading>
            <p className="text-sm font-sans leading-relaxed mt-5 mx-auto" style={{ color: '#607178', maxWidth: '48ch' }}>
              Prețurile orientative de mai jos sunt valabile pentru tratamente complete. Costul exact este stabilit după consultația de evaluare, în funcție de complexitatea cazului.
            </p>
          </div>
        </FadeUp>

        <div className="flex flex-col gap-0 overflow-hidden" style={{ borderRadius: '16px', border: '1px solid #DDE5E4' }}>
          {PRICES.map((item, i) => (
            <FadeUp key={item.name} delay={i * 60}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-7 py-6 bg-white transition-colors hover:bg-[#EDF8F6]"
                style={{ borderBottom: i < PRICES.length - 1 ? '1px solid #DDE5E4' : 'none' }}>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-sans font-semibold text-sm" style={{ color: '#123F46' }}>{item.name}</h3>
                    {item.note && (
                      <span className="text-[10px] font-sans font-semibold tracking-wider uppercase px-2 py-0.5" style={{ backgroundColor: '#EDF8F6', color: '#25A7A1', borderRadius: '20px', border: '1px solid rgba(37,167,161,0.2)' }}>{item.note}</span>
                    )}
                  </div>
                  <p className="text-xs font-sans leading-relaxed" style={{ color: '#607178', maxWidth: '52ch' }}>{item.desc}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span style={{ fontFamily: 'Newsreader, Georgia, serif', fontSize: '1.2rem', fontWeight: 500, color: '#123F46', letterSpacing: '-0.01em' }}>{item.price}</span>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={400}>
          <div className="mt-6 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5" style={{ borderRadius: '14px', backgroundColor: '#EDF8F6', border: '1px solid rgba(37,167,161,0.2)' }}>
            <div className="flex-1">
              <p className="text-sm font-sans font-semibold mb-1" style={{ color: '#123F46' }}>Plata în rate fără dobândă</p>
              <p className="text-xs font-sans leading-relaxed" style={{ color: '#607178' }}>Oferim posibilitatea achitării tratamentului în rate lunare, fără dobândă. Detaliile sunt stabilite individual, la prima consultație.</p>
            </div>
            <a href="#contact" className="flex-shrink-0 inline-flex items-center gap-2 font-sans font-semibold text-sm text-white px-5 py-3 transition-colors"
              style={{ backgroundColor: '#25A7A1', borderRadius: '10px' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#123F46')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#25A7A1')}>
              Solicită ofertă <ArrowRight />
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

// ─── Patient Guide preview ────────────────────────────────────────────────────

const GUIDE_ARTICLES = [
  { slug: 'inghesuire-dentara', category: 'Probleme frecvente', title: 'Inghesuire dentară: cauze și soluții ortodontice', time: '5 min', color: '#EDF8F6', textColor: '#123F46' },
  { slug: 'varsta-evaluare', category: 'Vârsta potrivită', title: 'La ce vârstă este recomandată prima evaluare ortodontică?', time: '4 min', color: '#F0F7F6', textColor: '#123F46' },
  { slug: 'alimentatie-aparat', category: 'Viața cu aparat', title: 'Ce să mâncați (și ce să evitați) în timpul tratamentului', time: '6 min', color: '#FFF8F0', textColor: '#92400E' },
  { slug: 'igiena-aparat', category: 'Igienă și îngrijire', title: 'Periaj și ață dentară cu aparat dentar fix — ghid complet', time: '7 min', color: '#F0FDF4', textColor: '#166534' },
  { slug: 'urgente-ortodontice', category: 'Urgențe ortodontice', title: 'Bracket desprins sau sârmă care deranjează — ce faceți?', time: '3 min', color: '#FDF2F8', textColor: '#9D174D' },
  { slug: 'intrebari-frecvente', category: 'Întrebări frecvente', title: 'Răspunsuri la cele mai comune întrebări despre ortodonție', time: '8 min', color: '#F8FAFC', textColor: '#334155' },
]

function PatientGuideSection() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: '#EDF8F6' }} id="ghid">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <SectionEyebrow label="Ghidul pacientului" />
              <SectionHeading><>Răspunsuri pentru fiecare<br /><em style={{ fontStyle: 'italic', fontWeight: 300 }}>etapă a tratamentului</em></></SectionHeading>
            </div>
            <Link to="/ghid" className="inline-flex items-center gap-1.5 text-sm font-sans font-medium transition-opacity hover:opacity-60 self-start md:self-auto" style={{ color: '#25A7A1' }}>
              Toate articolele <ArrowRight />
            </Link>
          </div>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {GUIDE_ARTICLES.map((a, i) => (
            <FadeUp key={a.slug} delay={i * 70}>
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
  )
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

const TESTIMONIALS = [
  { initials: 'A.M.', treatment: 'Alignere transparente', duration: '13 luni', text: 'Am ales cabinetul Dr. Moraru după o recomandare a medicului stomatolog. Procesul de planificare a fost transparent și am știut din prima consultație la ce să mă aștept. Rezultatul a depășit așteptările.', stars: 5 },
  { initials: 'L.P.', treatment: 'Aparat dentar ceramic', duration: '20 luni', text: 'Fiica mea a purtat aparat ceramic timp de aproape doi ani. Echipa a fost extrem de răbdătoare cu ea. Acum, la finalul tratamentului, diferența este remarcabilă — atât estetic cât și funcțional.', stars: 5 },
  { initials: 'R.D.', treatment: 'Tratament timpuriu', duration: '12 luni', text: 'Am venit cu fiul meu la 8 ani, destul de sceptic că e prea devreme. Consultația mi-a schimbat perspectiva complet — intervenția timpurie a simplificat mult tratamentul ulterior.', stars: 5 },
]

function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: '#FAFAF7' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-14">
            <SectionEyebrow label="Experiența pacienților" />
            <SectionHeading center><>Ce spun <em style={{ fontStyle: 'italic', fontWeight: 300 }}>pacienții noștri</em></></SectionHeading>
          </div>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <FadeUp key={t.initials} delay={i * 90}>
              <div className="flex flex-col gap-5 p-7 h-full" style={{ borderRadius: '16px', border: '1px solid #DDE5E4', backgroundColor: 'white' }}>
                <div className="flex items-center gap-1">{[...Array(t.stars)].map((_, j) => <StarIcon key={j}/>)}</div>
                <p className="text-[14px] font-sans leading-relaxed flex-1" style={{ color: '#607178' }}>"{t.text}"</p>
                <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: '#EDF8F6' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center font-sans font-semibold text-xs" style={{ backgroundColor: '#EDF8F6', color: '#123F46' }}>{t.initials}</div>
                    <div>
                      <p className="text-xs font-sans font-semibold" style={{ color: '#123F46' }}>{t.initials}</p>
                      <p className="text-[11px] font-sans" style={{ color: '#607178' }}>{t.treatment} · {t.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5"><GoogleIcon /><span className="text-[11px] font-sans" style={{ color: '#ADB5BD' }}>Google</span></div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const FAQS = [
  { q: 'La ce vârstă este recomandat primul consult ortodontic?', a: 'Primul consult ortodontic este recomandat în jurul vârstei de 7 ani, când primii molari permanenți și incisivii centrali sunt pe arcadă. Detectarea timpurie a unor probleme de mușcătură sau de spațiu permite intervenții mai simple și mai eficiente.' },
  { q: 'Cât durează un tratament ortodontic?', a: 'Durata variază în funcție de complexitatea cazului: de la 6–12 luni pentru cazuri simple, până la 24–30 de luni pentru cazuri complexe. Vă vom comunica estimarea personalizată după consultație.' },
  { q: 'Aparatul dentar provoacă durere?', a: 'În primele zile după aplicare sau după fiecare activare, pot apărea disconfort sau sensibilitate. Acestea sunt reacții normale și dispar de regulă în 2–5 zile. Aparatele din safire și ceramice sunt mai blânde cu mucoasa bucală.' },
  { q: 'Cât de des sunt necesare controalele?', a: 'Controalele sunt de obicei la 6–8 săptămâni pentru aparatele fixe. Pentru aliniatori, programările pot fi mai rare. Ritmul este stabilit individual, în funcție de planul de tratament.' },
  { q: 'Ce tip de aparat dentar mi se potrivește?', a: 'Alegerea tipului de aparat depinde de natura problemei ortodontice, vârstă, stil de viață și preferințele estetice. Vă vom prezenta opțiunile potrivite după evaluarea clinică și vom lua decizia împreună.' },
  { q: 'Cât costă un tratament ortodontic?', a: 'Costul depinde de tipul de aparat și de complexitatea cazului. Oferim un plan financiar transparent după consultație, cu posibilitatea de plată în rate. Ne propunem ca prețul să nu fie un obstacol în calea unui tratament de calitate.' },
]

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: '#EDF8F6' }}>
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-12">
            <SectionEyebrow label="Întrebări frecvente" />
            <SectionHeading center><>Clarificăm <em style={{ fontStyle: 'italic', fontWeight: 300 }}>cele mai comune nelămuriri</em></></SectionHeading>
          </div>
        </FadeUp>
        <div className="flex flex-col gap-2">
          {FAQS.map((faq, i) => (
            <FadeUp key={i} delay={i * 50}>
              <div className="bg-white overflow-hidden" style={{ borderRadius: '12px', border: '1px solid #DDE5E4' }}>
                <button className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
                  <span className="font-sans font-semibold text-sm leading-snug" style={{ color: '#123F46' }}>{faq.q}</span>
                  <span className="flex-shrink-0" style={{ color: '#25A7A1' }}><ChevronDown open={open === i}/></span>
                </button>
                <div style={{ maxHeight: open === i ? '300px' : '0', overflow: 'hidden', transition: 'max-height 0.35s ease' }}>
                  <p className="px-6 pb-5 text-sm font-sans leading-relaxed" style={{ color: '#607178' }}>{faq.a}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Final CTA ────────────────────────────────────────────────────────────────

function FinalCTASection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: '#123F46' }}>
      <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" aria-hidden="true">
        <defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/></pattern></defs>
        <rect width="100%" height="100%" fill="url(#grid)"/>
      </svg>
      <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <FadeUp>
          <div className="flex justify-center mb-6"><div className="w-12 h-px" style={{ backgroundColor: '#25A7A1' }} /></div>
          <h2 className="mb-5" style={{ fontFamily: 'Newsreader, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 400, color: 'white', letterSpacing: '-0.02em', lineHeight: 1.12 }}>
            Primul pas este<br /><em style={{ fontStyle: 'italic', fontWeight: 300, color: '#25A7A1' }}>o evaluare corectă.</em>
          </h2>
          <p className="text-base font-sans leading-relaxed mb-10 mx-auto" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '40ch' }}>
            Programați o consultație și aflați ce opțiuni de tratament sunt potrivite pentru dumneavoastră.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 font-sans font-semibold text-sm text-white px-7 py-4 transition-colors duration-200"
              style={{ backgroundColor: '#25A7A1', borderRadius: '12px' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1d8f8a')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#25A7A1')}>
              Programează o consultație
            </a>
            <a href="tel:+40264000000" className="inline-flex items-center justify-center gap-2 font-sans font-semibold text-sm px-7 py-4 border-2 transition-colors duration-200"
              style={{ color: 'white', borderColor: 'rgba(255,255,255,0.25)', borderRadius: '12px' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#25A7A1')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)')}>
              <PhoneIcon /> Sună la cabinet
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', type: '', reason: '', message: '', gdpr: false })
  const [submitted, setSubmitted] = useState(false)
  const inputStyle = { border: '1px solid #DDE5E4', borderRadius: '10px', backgroundColor: 'white', color: '#263238', fontFamily: 'Manrope, system-ui, sans-serif', fontSize: '14px', outline: 'none', width: '100%', padding: '12px 14px' }

  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: '#FAFAF7' }} id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="mb-14">
            <SectionEyebrow label="Contact și programări" />
            <SectionHeading><>Suntem aici<br /><em style={{ fontStyle: 'italic', fontWeight: 300 }}>pentru dumneavoastră</em></></SectionHeading>
          </div>
        </FadeUp>
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16">
          <FadeUp>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-5">
                {[
                  { icon: <MapPinIcon />, label: 'Adresă', value: 'Str. Exemplu nr. 10, Cluj-Napoca', link: 'https://maps.google.com' },
                  { icon: <PhoneIcon />, label: 'Telefon', value: '+40 264 000 000', link: 'tel:+40264000000' },
                  { icon: <MailIcon />, label: 'Email', value: 'contact@drmoraru.ro', link: 'mailto:contact@drmoraru.ro' },
                  { icon: <ClockIcon />, label: 'Program', value: 'Luni – Vineri: 09:00 – 18:00', link: null },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: '#EDF8F6', color: '#25A7A1' }}>{item.icon}</div>
                    <div>
                      <p className="text-[11px] font-sans font-semibold tracking-wider uppercase mb-0.5" style={{ color: '#ADB5BD' }}>{item.label}</p>
                      {item.link ? <a href={item.link} className="text-sm font-sans hover:text-[#25A7A1] transition-colors" style={{ color: '#263238' }}>{item.value}</a>
                        : <p className="text-sm font-sans" style={{ color: '#263238' }}>{item.value}</p>}
                    </div>
                  </div>
                ))}
              </div>
              <div className="overflow-hidden" style={{ borderRadius: '14px', border: '1px solid #DDE5E4', height: '260px' }}>
                <iframe title="Locație cabinet Dr. Raluca Moraru" src="https://www.openstreetmap.org/export/embed.html?bbox=23.56,46.76,23.60,46.79&layer=mapnik&marker=46.7712,23.5790" className="w-full h-full" style={{ border: 'none', filter: 'saturate(0.7) brightness(1.05)' }} loading="lazy"/>
              </div>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-sans font-semibold transition-colors" style={{ color: '#25A7A1' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#123F46')}
                onMouseLeave={e => (e.currentTarget.style.color = '#25A7A1')}>
                Deschide în Google Maps <ArrowRight />
              </a>
            </div>
          </FadeUp>
          <FadeUp delay={100}>
            <div className="bg-white p-8 lg:p-10" style={{ borderRadius: '18px', border: '1px solid #DDE5E4' }}>
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EDF8F6' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#25A7A1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <p style={{ fontFamily: 'Newsreader, Georgia, serif', fontSize: '1.5rem', fontWeight: 400, color: '#123F46' }}>Mesaj trimis!</p>
                  <p className="text-sm font-sans" style={{ color: '#607178' }}>Vă vom contacta în cel mai scurt timp pentru confirmare.</p>
                  <button onClick={() => setSubmitted(false)} className="text-sm font-sans font-semibold mt-2 transition-opacity hover:opacity-60" style={{ color: '#25A7A1' }}>Trimite alt mesaj</button>
                </div>
              ) : (
                <>
                  <p className="font-sans font-semibold text-sm mb-6" style={{ color: '#123F46' }}>Formular de programare</p>
                  <form onSubmit={e => { e.preventDefault(); setSubmitted(true) }} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[11px] font-sans font-semibold tracking-wider uppercase block mb-1.5" style={{ color: '#607178' }}>Nume *</label>
                        <input type="text" required placeholder="Numele dumneavoastră" style={inputStyle} value={form.name} onChange={e => setForm({...form, name: e.target.value})} onFocus={e => (e.target.style.borderColor = '#25A7A1')} onBlur={e => (e.target.style.borderColor = '#DDE5E4')}/>
                      </div>
                      <div>
                        <label className="text-[11px] font-sans font-semibold tracking-wider uppercase block mb-1.5" style={{ color: '#607178' }}>Telefon *</label>
                        <input type="tel" required placeholder="+40 7xx xxx xxx" style={inputStyle} value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} onFocus={e => (e.target.style.borderColor = '#25A7A1')} onBlur={e => (e.target.style.borderColor = '#DDE5E4')}/>
                      </div>
                    </div>
                    <div>
                      <label className="text-[11px] font-sans font-semibold tracking-wider uppercase block mb-1.5" style={{ color: '#607178' }}>Email</label>
                      <input type="email" placeholder="adresa@email.ro" style={inputStyle} value={form.email} onChange={e => setForm({...form, email: e.target.value})} onFocus={e => (e.target.style.borderColor = '#25A7A1')} onBlur={e => (e.target.style.borderColor = '#DDE5E4')}/>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[11px] font-sans font-semibold tracking-wider uppercase block mb-1.5" style={{ color: '#607178' }}>Tip pacient</label>
                        <select style={{...inputStyle, cursor: 'pointer'}} value={form.type} onChange={e => setForm({...form, type: e.target.value})} onFocus={e => (e.target.style.borderColor = '#25A7A1')} onBlur={e => (e.target.style.borderColor = '#DDE5E4')}>
                          <option value="">Selectați...</option>
                          <option>Copil (până la 12 ani)</option>
                          <option>Adolescent (12–18 ani)</option>
                          <option>Adult (18+ ani)</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-[11px] font-sans font-semibold tracking-wider uppercase block mb-1.5" style={{ color: '#607178' }}>Motivul programării</label>
                        <select style={{...inputStyle, cursor: 'pointer'}} value={form.reason} onChange={e => setForm({...form, reason: e.target.value})} onFocus={e => (e.target.style.borderColor = '#25A7A1')} onBlur={e => (e.target.style.borderColor = '#DDE5E4')}>
                          <option value="">Selectați...</option>
                          <option>Consultație de evaluare</option>
                          <option>Aparat dentar fix</option>
                          <option>Alignere transparente</option>
                          <option>Urgență ortodontică</option>
                          <option>Altele</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="text-[11px] font-sans font-semibold tracking-wider uppercase block mb-1.5" style={{ color: '#607178' }}>Mesaj</label>
                      <textarea placeholder="Descrieți pe scurt situația sau întrebările dumneavoastră..." rows={3} style={{...inputStyle, resize: 'none'}} value={form.message} onChange={e => setForm({...form, message: e.target.value})} onFocus={e => (e.target.style.borderColor = '#25A7A1')} onBlur={e => (e.target.style.borderColor = '#DDE5E4')}/>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" id="gdpr" required checked={form.gdpr} onChange={e => setForm({...form, gdpr: e.target.checked})} className="mt-1 flex-shrink-0 accent-[#25A7A1]"/>
                      <label htmlFor="gdpr" className="text-xs font-sans leading-relaxed" style={{ color: '#607178' }}>
                        Sunt de acord cu <a href="#" className="underline underline-offset-2" style={{ color: '#25A7A1' }}>Politica de confidențialitate</a> și consimț procesarea datelor cu caracter personal în scopul programării. *
                      </label>
                    </div>
                    <button type="submit" className="w-full font-sans font-semibold text-sm text-white py-4 transition-colors duration-200 mt-1"
                      style={{ backgroundColor: '#25A7A1', borderRadius: '11px' }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#123F46')}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#25A7A1')}>
                      Trimite cererea de programare
                    </button>
                  </form>
                </>
              )}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

// ─── Home page ────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <PatientCardsSection />
      <TreatmentsSection />
      <CasesPreviewSection />
      <ProcessSection />
      <PhilosophySection />
      <AboutSection />
      <TarifeSection />
      <PatientGuideSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
      <ContactSection />
    </>
  )
}
