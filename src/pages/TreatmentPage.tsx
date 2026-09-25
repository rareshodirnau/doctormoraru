import { useParams, Link } from 'react-router-dom'
import { FadeUp, SectionEyebrow, ArrowRight, ArrowLeft, CheckIcon, ChevronDown, TREATMENTS, TAG_COLORS } from '../shared'
import { useState } from 'react'

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="overflow-hidden" style={{ borderRadius: '12px', border: '1px solid #DDE5E4', backgroundColor: 'white' }}>
      <button className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left" onClick={() => setOpen(!open)}>
        <span className="font-sans font-semibold text-sm leading-snug" style={{ color: '#123F46' }}>{q}</span>
        <span className="flex-shrink-0" style={{ color: '#25A7A1' }}><ChevronDown open={open}/></span>
      </button>
      <div style={{ maxHeight: open ? '300px' : '0', overflow: 'hidden', transition: 'max-height 0.35s ease' }}>
        <p className="px-6 pb-5 text-sm font-sans leading-relaxed" style={{ color: '#607178' }}>{a}</p>
      </div>
    </div>
  )
}

export default function TreatmentPage() {
  const { slug } = useParams()
  const treatment = TREATMENTS.find(t => t.slug === slug) ?? TREATMENTS[0]
  const related = TREATMENTS.filter(t => t.slug !== treatment.slug).slice(0, 3)

  const faqs = [
    { q: `Cât durează tratamentul cu ${treatment.name.toLowerCase()}?`, a: `Durata medie este ${treatment.duration}. Durata exactă depinde de complexitatea cazului și de complianța pacientului.` },
    { q: 'Este dureros tratamentul ortodontic?', a: 'În primele zile după aplicare sau activare, pot apărea disconfort sau sensibilitate. Acestea dispar de regulă în 2–5 zile.' },
    { q: 'Ce restricții alimentare există?', a: 'Pentru aparatele fixe, se recomandă evitarea alimentelor tari, lipicioase sau foarte dure. Aliniatorii se îndepărtează la masă.' },
    { q: 'Care este frecvența controalelor?', a: 'Controalele sunt planificate la 6–8 săptămâni pentru aparatele fixe. Ritmul exact este stabilit în funcție de planul individual de tratament.' },
  ]

  return (
    <div style={{ backgroundColor: '#FAFAF7', paddingTop: '80px' }}>
      {/* Breadcrumb */}
      <div style={{ backgroundColor: '#EDF8F6', borderBottom: '1px solid #DDE5E4' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center gap-2 text-xs font-sans" style={{ color: '#607178' }}>
          <Link to="/" className="hover:text-[#25A7A1] transition-colors">Acasă</Link>
          <span style={{ color: '#DDE5E4' }}>/</span>
          <Link to="/#tratamente" className="hover:text-[#25A7A1] transition-colors">Tratamente</Link>
          <span style={{ color: '#DDE5E4' }}>/</span>
          <span style={{ color: '#123F46', fontWeight: 600 }}>{treatment.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#EDF8F6' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-20 items-center">
            <div>
              <FadeUp>
                <SectionEyebrow label="Tratament ortodontic" />
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[11px] font-sans font-semibold tracking-wider uppercase px-3 py-1.5" style={{ backgroundColor: TAG_COLORS[treatment.tag]?.bg ?? '#EDF8F6', color: TAG_COLORS[treatment.tag]?.text ?? '#123F46', borderRadius: '20px' }}>{treatment.tag}</span>
                  <span className="text-xs font-sans" style={{ color: '#607178' }}>Durată estimată: {treatment.duration}</span>
                </div>
                <h1 style={{ fontFamily: 'Newsreader, Georgia, serif', fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: 400, color: '#123F46', letterSpacing: '-0.02em', lineHeight: 1.1 }} className="mb-6">
                  {treatment.name}
                </h1>
                <p className="text-base font-sans leading-relaxed mb-8" style={{ color: '#607178', maxWidth: '46ch' }}>
                  {treatment.longDesc}
                </p>
                <div className="flex gap-3 flex-wrap">
                  <a href="#contact-section" className="inline-flex items-center justify-center gap-2 font-sans font-semibold text-sm text-white px-6 py-3.5 transition-colors duration-200"
                    style={{ backgroundColor: '#25A7A1', borderRadius: '12px' }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#123F46')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#25A7A1')}>
                    Programează o consultație
                  </a>
                  <Link to="/#tarife" className="inline-flex items-center gap-2 font-sans font-medium text-sm px-6 py-3.5 border transition-colors"
                    style={{ color: '#123F46', borderColor: '#DDE5E4', borderRadius: '12px' }}>
                    Vezi tarife <ArrowRight />
                  </Link>
                </div>
              </FadeUp>
            </div>

            <FadeUp delay={150}>
              <div className="overflow-hidden" style={{ borderRadius: '16px', height: '440px', backgroundColor: '#DDE5E4', border: '1px solid #DDE5E4' }}>
                <img src={treatment.image} alt={treatment.name} className="w-full h-full object-cover"/>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Who is it for + Benefits */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#FAFAF7' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <FadeUp>
              <p className="text-xs font-sans font-semibold tracking-widest uppercase mb-5" style={{ color: '#25A7A1' }}>Potrivit pentru</p>
              <ul className="flex flex-col gap-3">
                {treatment.suitedFor.map(s => (
                  <li key={s} className="flex items-start gap-3 text-sm font-sans" style={{ color: '#607178' }}>
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EDF8F6' }}><CheckIcon /></span>
                    {s}
                  </li>
                ))}
              </ul>
            </FadeUp>

            <FadeUp delay={100}>
              <p className="text-xs font-sans font-semibold tracking-widest uppercase mb-5" style={{ color: '#25A7A1' }}>Avantaje principale</p>
              <ul className="flex flex-col gap-3">
                {treatment.benefits.map(b => (
                  <li key={b} className="flex items-start gap-3 text-sm font-sans" style={{ color: '#607178' }}>
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EDF8F6' }}><CheckIcon /></span>
                    {b}
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Treatment stages */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#EDF8F6' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <SectionEyebrow label="Etapele tratamentului" />
              <h2 style={{ fontFamily: 'Newsreader, Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 400, color: '#123F46', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                Cum decurge tratamentul
              </h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {treatment.stages.map((stage, i) => (
              <FadeUp key={i} delay={i * 80}>
                <div className="flex items-start gap-4 bg-white p-6" style={{ borderRadius: '14px', border: '1px solid #DDE5E4' }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm" style={{ backgroundColor: '#EDF8F6', color: '#25A7A1', fontFamily: 'Newsreader, Georgia, serif', border: '1px solid rgba(37,167,161,0.2)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <p className="text-sm font-sans leading-relaxed pt-1" style={{ color: '#607178' }}>{stage}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Price + practical info */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#FAFAF7' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <FadeUp>
              <div className="p-8" style={{ borderRadius: '16px', border: '1px solid #DDE5E4', backgroundColor: 'white' }}>
                <p className="text-xs font-sans font-semibold tracking-widest uppercase mb-3" style={{ color: '#25A7A1' }}>Cost orientativ</p>
                <p style={{ fontFamily: 'Newsreader, Georgia, serif', fontSize: '2rem', fontWeight: 400, color: '#123F46', letterSpacing: '-0.02em' }}>{treatment.price}</p>
                <p className="text-xs font-sans leading-relaxed mt-2 mb-5" style={{ color: '#607178' }}>Prețul include toate ședințele de control pe durata tratamentului. Costul exact este stabilit după consultația de evaluare.</p>
                <div className="p-4" style={{ borderRadius: '10px', backgroundColor: '#EDF8F6', border: '1px solid rgba(37,167,161,0.15)' }}>
                  <p className="text-xs font-sans font-semibold mb-1" style={{ color: '#123F46' }}>Plată în rate fără dobândă</p>
                  <p className="text-xs font-sans" style={{ color: '#607178' }}>Posibilitate de eșalonare lunară, stabilită la prima consultație.</p>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={100}>
              <div className="p-8" style={{ borderRadius: '16px', border: '1px solid #DDE5E4', backgroundColor: 'white' }}>
                <p className="text-xs font-sans font-semibold tracking-widest uppercase mb-5" style={{ color: '#25A7A1' }}>Informații practice</p>
                <ul className="flex flex-col gap-4 text-sm font-sans" style={{ color: '#607178' }}>
                  <li className="flex gap-3"><span className="flex-shrink-0 font-semibold" style={{ color: '#123F46', minWidth: '100px' }}>Durată</span> {treatment.duration}</li>
                  <li className="flex gap-3"><span className="flex-shrink-0 font-semibold" style={{ color: '#123F46', minWidth: '100px' }}>Frecvență</span> Control la 6–8 săptămâni</li>
                  <li className="flex gap-3"><span className="flex-shrink-0 font-semibold" style={{ color: '#123F46', minWidth: '100px' }}>Vârstă</span> De la 7 ani, fără limită superioară</li>
                  <li className="flex gap-3"><span className="flex-shrink-0 font-semibold" style={{ color: '#123F46', minWidth: '100px' }}>Igienizare</span> Facilă cu periuță interdentară</li>
                </ul>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#EDF8F6' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-10">
              <SectionEyebrow label="Întrebări frecvente" />
              <h2 style={{ fontFamily: 'Newsreader, Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 400, color: '#123F46', letterSpacing: '-0.02em' }}>Despre {treatment.name.toLowerCase()}</h2>
            </div>
          </FadeUp>
          <div className="flex flex-col gap-2">
            {faqs.map(faq => <FAQItem key={faq.q} {...faq}/>)}
          </div>
        </div>
      </section>

      {/* Related treatments */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#FAFAF7' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="flex items-end justify-between mb-10">
              <h2 style={{ fontFamily: 'Newsreader, Georgia, serif', fontSize: '1.8rem', fontWeight: 400, color: '#123F46', letterSpacing: '-0.02em' }}>Alte tratamente</h2>
              <Link to="/#tratamente" className="text-sm font-sans font-medium transition-opacity hover:opacity-60 flex items-center gap-1.5" style={{ color: '#25A7A1' }}>
                Toate tratamentele <ArrowRight />
              </Link>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {related.map((t, i) => (
              <FadeUp key={t.slug} delay={i * 80}>
                <Link to={`/tratament/${t.slug}`} className="group flex flex-col overflow-hidden bg-white transition-shadow hover:shadow-md" style={{ borderRadius: '14px', border: '1px solid #DDE5E4', display: 'flex' }}>
                  <div className="relative overflow-hidden" style={{ height: '180px', backgroundColor: '#EDF8F6' }}>
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] font-sans font-semibold tracking-wider uppercase px-2.5 py-1" style={{ backgroundColor: TAG_COLORS[t.tag]?.bg, color: TAG_COLORS[t.tag]?.text, borderRadius: '20px' }}>{t.tag}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-sans font-semibold text-sm mb-2" style={{ color: '#123F46' }}>{t.name}</h3>
                    <p className="text-xs font-sans leading-relaxed mb-3" style={{ color: '#607178' }}>{t.desc}</p>
                    <span className="inline-flex items-center gap-1 text-xs font-sans font-semibold" style={{ color: '#25A7A1' }}>
                      Detalii <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#123F46' }} id="contact-section">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="mb-4" style={{ fontFamily: 'Newsreader, Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 400, color: 'white', letterSpacing: '-0.02em' }}>
              Dorești să afli dacă{' '}
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#25A7A1' }}>{treatment.name.toLowerCase()}</em>{' '}
              ți se potrivește?
            </h2>
            <p className="text-sm font-sans leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Programează o consultație de evaluare și vei primi un plan de tratament personalizat.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/#contact" className="inline-flex items-center justify-center gap-2 font-sans font-semibold text-sm text-white px-7 py-4 transition-colors"
                style={{ backgroundColor: '#25A7A1', borderRadius: '12px' }}>
                Programează o consultație
              </Link>
              <a href="tel:+40264000000" className="inline-flex items-center justify-center gap-2 font-sans font-semibold text-sm px-7 py-4 border-2"
                style={{ color: 'white', borderColor: 'rgba(255,255,255,0.25)', borderRadius: '12px' }}>
                Sună la cabinet
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Back link */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <Link to="/#tratamente" className="inline-flex items-center gap-2 text-sm font-sans font-medium transition-colors" style={{ color: '#607178' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#25A7A1')}
          onMouseLeave={e => (e.currentTarget.style.color = '#607178')}>
          <ArrowLeft /> Înapoi la tratamente
        </Link>
      </div>
    </div>
  )
}
