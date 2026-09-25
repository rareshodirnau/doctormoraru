import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FadeUp, SectionEyebrow, BeforeAfterSlider, ArrowRight } from '../shared'

const ALL_CASES = [
  { id: 1, category: 'Adolescenți', problem: 'Inghesuire severă', treatment: 'Aparat metalic', duration: '18 luni', summary: 'Corecție inghesuire severă cu extracții de premolari. Mușcătură funcțională restabilită. Stabilitate menținută la 2 ani post-tratament.', before: 'https://images.unsplash.com/photo-1629747490241-624f07d70e1e?w=640&h=480&fit=crop&auto=format', after: 'https://images.unsplash.com/photo-1589386417686-0d34b5903d23?w=640&h=480&fit=crop&auto=format' },
  { id: 2, category: 'Adulți', problem: 'Malpoziții anterioare', treatment: 'Alignere transparente', duration: '14 luni', summary: 'Corecție malpoziții incisivi superiori și inferiori. Tratament fără extracții, plan realizat cu simulare 3D. Rezultat stabil.', before: 'https://images.unsplash.com/photo-1629540266304-fff9c67b7660?w=640&h=480&fit=crop&auto=format', after: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?w=640&h=480&fit=crop&auto=format' },
  { id: 3, category: 'Copii', problem: 'Mușcătură încrucișată', treatment: 'Tratament timpuriu', duration: '12 luni', summary: 'Intervenție timpurie la 9 ani pentru corecția mușcăturii încrucișate posterioare și redireționarea creșterii mandibulare.', before: 'https://images.unsplash.com/photo-1652761029249-6ec32a82ccb0?w=640&h=480&fit=crop&auto=format', after: 'https://images.unsplash.com/photo-1758691463331-2ac00e6f676f?w=640&h=480&fit=crop&auto=format' },
  { id: 4, category: 'Adulți', problem: 'Diastema frontală', treatment: 'Aparat ceramic', duration: '16 luni', summary: 'Închidere diastemă interincisivă superioară combinată cu corecție ocluzie distalizată. Finalizare cu contenție fixă.', before: 'https://images.unsplash.com/photo-1625241152315-4a698f74ceb7?w=640&h=480&fit=crop&auto=format', after: 'https://images.unsplash.com/photo-1629540266304-fff9c67b7660?w=640&h=480&fit=crop&auto=format' },
  { id: 5, category: 'Adolescenți', problem: 'Ocluzie adâncă', treatment: 'Aparat ceramic', duration: '22 luni', summary: 'Corecție ocluzie adâncă acoperită combinată cu corecție inghesuire moderată. Pacient de 15 ani, rezultat estetic și funcțional.', before: 'https://images.unsplash.com/photo-1652761029249-6ec32a82ccb0?w=640&h=480&fit=crop&auto=format', after: 'https://images.unsplash.com/photo-1629747490241-624f07d70e1e?w=640&h=480&fit=crop&auto=format' },
  { id: 6, category: 'Adulți', problem: 'Progenie ușoară', treatment: 'Aparat safir', duration: '24 luni', summary: 'Corecție progenie clasa III ușoară la adult, fără intervenție chirurgicală. Tratament cu aparate din safir pentru discreție maximă.', before: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?w=640&h=480&fit=crop&auto=format', after: 'https://images.unsplash.com/photo-1629540266304-fff9c67b7660?w=640&h=480&fit=crop&auto=format' },
]

const CATEGORY_FILTERS = ['Toate', 'Copii', 'Adolescenți', 'Adulți']

const TREATMENT_FILTERS = ['Toate tratamentele', 'Aparat metalic', 'Aparat ceramic', 'Aparat safir', 'Alignere transparente', 'Tratament timpuriu']

export default function CasesPage() {
  const [category, setCategory] = useState('Toate')
  const [problem, setProblem] = useState('Toate problemele')
  const [treatment, setTreatment] = useState('Toate tratamentele')

  const filtered = ALL_CASES.filter(c => {
    const matchCat = category === 'Toate' || c.category === category
    const matchProb = problem === 'Toate problemele' || c.problem.includes(problem.replace('Inghesuire', 'inghesuire').split(' ')[0])
    const matchTrt = treatment === 'Toate tratamentele' || c.treatment === treatment
    return matchCat && matchProb && matchTrt
  })

  return (
    <div style={{ backgroundColor: '#FAFAF7', paddingTop: '80px' }}>
      {/* Breadcrumb */}
      <div style={{ backgroundColor: '#EDF8F6', borderBottom: '1px solid #DDE5E4' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center gap-2 text-xs font-sans" style={{ color: '#607178' }}>
          <Link to="/" className="hover:text-[#25A7A1] transition-colors">Acasă</Link>
          <span style={{ color: '#DDE5E4' }}>/</span>
          <span style={{ color: '#123F46', fontWeight: 600 }}>Cazuri clinice</span>
        </div>
      </div>

      {/* Header */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#EDF8F6' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <SectionEyebrow label="Cazuri clinice" />
            <h1 style={{ fontFamily: 'Newsreader, Georgia, serif', fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: 400, color: '#123F46', letterSpacing: '-0.02em', lineHeight: 1.1 }} className="mb-4">
              Rezultate construite cu{' '}
              <em style={{ fontStyle: 'italic', fontWeight: 300 }}>răbdare și precizie</em>
            </h1>
            <p className="text-base font-sans leading-relaxed" style={{ color: '#607178', maxWidth: '52ch' }}>
              Fiecare caz reflectă un plan de tratament individualizat, adaptat particularităților anatomice și funcționale ale pacientului. Datele de identificare sunt protejate în conformitate cu normele de confidențialitate medicală.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b sticky top-[80px] z-30" style={{ backgroundColor: 'rgba(250,250,247,0.96)', borderColor: '#DDE5E4', backdropFilter: 'blur(12px)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
            {/* Category */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-sans font-semibold tracking-widest uppercase" style={{ color: '#607178' }}>Categorie:</span>
              {CATEGORY_FILTERS.map(f => (
                <button key={f} onClick={() => setCategory(f)}
                  className="text-xs font-sans font-semibold px-3 py-1.5 transition-all"
                  style={{ borderRadius: '20px', border: '1px solid', borderColor: category === f ? '#25A7A1' : '#DDE5E4', backgroundColor: category === f ? '#25A7A1' : 'white', color: category === f ? 'white' : '#607178' }}>
                  {f}
                </button>
              ))}
            </div>
            {/* Treatment */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-sans font-semibold tracking-widest uppercase" style={{ color: '#607178' }}>Tratament:</span>
              {TREATMENT_FILTERS.map(f => (
                <button key={f} onClick={() => setTreatment(f)}
                  className="text-xs font-sans font-semibold px-3 py-1.5 transition-all"
                  style={{ borderRadius: '20px', border: '1px solid', borderColor: treatment === f ? '#25A7A1' : '#DDE5E4', backgroundColor: treatment === f ? '#25A7A1' : 'white', color: treatment === f ? 'white' : '#607178' }}>
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-sans text-base" style={{ color: '#607178' }}>Niciun caz nu corespunde filtrelor selectate.</p>
              <button onClick={() => { setCategory('Toate'); setProblem('Toate problemele'); setTreatment('Toate tratamentele') }}
                className="mt-4 text-sm font-sans font-semibold transition-colors" style={{ color: '#25A7A1' }}>
                Resetează filtrele
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filtered.map((c, i) => (
                <FadeUp key={c.id} delay={i * 70}>
                  <article className="bg-white p-6 flex flex-col gap-5" style={{ borderRadius: '18px', border: '1px solid #DDE5E4' }}>
                    <BeforeAfterSlider before={c.before} after={c.after} beforeAlt={`Caz ${c.id} înainte`} afterAlt={`Caz ${c.id} după`} height={400}/>
                    {/* Meta */}
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[11px] font-sans font-semibold tracking-wide uppercase px-3 py-1.5" style={{ backgroundColor: '#EDF8F6', color: '#123F46', borderRadius: '20px' }}>{c.category}</span>
                      <span className="text-[11px] font-sans font-semibold tracking-wide uppercase px-3 py-1.5" style={{ backgroundColor: '#F5F5F5', color: '#607178', borderRadius: '20px' }}>{c.problem}</span>
                      <span className="text-[11px] font-sans font-semibold tracking-wide uppercase px-3 py-1.5" style={{ backgroundColor: '#F0F7F6', color: '#123F46', borderRadius: '20px' }}>{c.treatment}</span>
                      <span className="text-[11px] font-sans font-semibold tracking-wide uppercase px-3 py-1.5" style={{ backgroundColor: '#FAFAF7', color: '#607178', borderRadius: '20px', border: '1px solid #DDE5E4' }}>⏱ {c.duration}</span>
                    </div>
                    <p className="text-sm font-sans leading-relaxed" style={{ color: '#607178' }}>{c.summary}</p>
                    <p className="text-[11px] font-sans italic pt-3 border-t" style={{ color: '#ADB5BD', borderColor: '#EDF8F6' }}>
                      Cazul este prezentat cu acordul pacientului. Toate datele de identificare sunt protejate conform legislației GDPR și normelor deontologice medicale.
                    </p>
                  </article>
                </FadeUp>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Privacy note */}
      <section className="py-10 border-t" style={{ borderColor: '#DDE5E4' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <FadeUp>
            <p className="text-xs font-sans leading-relaxed" style={{ color: '#ADB5BD' }}>
              Toate cazurile sunt prezentate în scop educativ și informativ. Imaginile sunt utilizate cu acordul explicit al pacienților. Datele de identificare sunt anonimizate în conformitate cu Regulamentul (UE) 2016/679 (GDPR) și normele deontologice ale Colegiului Medicilor Stomatologi din România.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#EDF8F6' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="mb-4" style={{ fontFamily: 'Newsreader, Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 400, color: '#123F46', letterSpacing: '-0.02em' }}>
              Cazul tău merită <em style={{ fontStyle: 'italic', fontWeight: 300 }}>o evaluare personalizată</em>
            </h2>
            <p className="text-sm font-sans leading-relaxed mb-8" style={{ color: '#607178' }}>
              Programează o consultație și vei primi un diagnostic clar și un plan de tratament adaptat situației tale.
            </p>
            <Link to="/#contact" className="inline-flex items-center gap-2 font-sans font-semibold text-sm text-white px-7 py-4 transition-colors"
              style={{ backgroundColor: '#25A7A1', borderRadius: '12px' }}>
              Programează o consultație <ArrowRight />
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}
