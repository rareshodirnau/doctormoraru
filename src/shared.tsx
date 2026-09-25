import { useState, useEffect, useRef, type ReactNode } from 'react'

// ─── Icons ────────────────────────────────────────────────────────────────────

export function PhoneIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.5a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  )
}

export function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  )
}

export function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  )
}

export function ArrowRight({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  )
}

export function ArrowLeft({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
    </svg>
  )
}

export function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#25A7A1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

export function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"
      style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s ease' }}>
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  )
}

export function StarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="#25A7A1" stroke="none">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  )
}

export function MapPinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/>
    </svg>
  )
}

export function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}

export function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  )
}

export function GoogleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

export function IconCertificate() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#25A7A1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="5"/><path d="M12 13v8M9 17l3 2 3-2"/>
    </svg>
  )
}

export function IconFamily() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#25A7A1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="7" r="3"/><circle cx="16" cy="7" r="3"/><path d="M2 21v-2a5 5 0 015-5h10a5 5 0 015 5v2"/>
    </svg>
  )
}

export function IconPlan() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#25A7A1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 9h6M9 13h4M9 17h2"/>
    </svg>
  )
}

export function IconLocation() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#25A7A1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/>
    </svg>
  )
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect() } }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

// ─── FadeUp ───────────────────────────────────────────────────────────────────

export function FadeUp({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView()
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(22px)',
      transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
    }}>
      {children}
    </div>
  )
}

// ─── Typography helpers ───────────────────────────────────────────────────────

export function SectionEyebrow({ label, light = false }: { label: string; light?: boolean }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-6 h-px" style={{ backgroundColor: light ? 'rgba(37,167,161,0.7)' : '#25A7A1' }} />
      <span className="text-[11px] font-sans font-semibold tracking-widest uppercase" style={{ color: light ? 'rgba(37,167,161,0.9)' : '#25A7A1' }}>{label}</span>
    </div>
  )
}

export function SectionHeading({ children, light = false, center = false }: { children: ReactNode; light?: boolean; center?: boolean }) {
  return (
    <h2 style={{
      fontFamily: 'Newsreader, Georgia, serif',
      fontSize: 'clamp(2rem, 3.5vw, 2.9rem)',
      fontWeight: 400,
      color: light ? 'white' : '#123F46',
      letterSpacing: '-0.02em',
      lineHeight: 1.1,
      textAlign: center ? 'center' : undefined,
    }}>
      {children}
    </h2>
  )
}

// ─── Before/After Slider ──────────────────────────────────────────────────────

export function BeforeAfterSlider({ before, after, beforeAlt, afterAlt, height = 360 }: {
  before: string; after: string; beforeAlt: string; afterAlt: string; height?: number
}) {
  const [pos, setPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const updatePos = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setPos(Math.max(8, Math.min(92, ((clientX - rect.left) / rect.width) * 100)))
  }

  return (
    <div ref={containerRef}
      className="relative select-none overflow-hidden"
      style={{ borderRadius: '14px', height, cursor: 'col-resize', backgroundColor: '#DDE5E4' }}
      onMouseDown={e => { dragging.current = true; updatePos(e.clientX) }}
      onMouseUp={() => { dragging.current = false }}
      onMouseLeave={() => { dragging.current = false }}
      onMouseMove={e => { if (dragging.current) updatePos(e.clientX) }}
      onTouchMove={e => updatePos(e.touches[0].clientX)}
      onTouchStart={e => updatePos(e.touches[0].clientX)}>
      <div className="absolute inset-0">
        <img src={before} alt={beforeAlt} className="w-full h-full object-cover" style={{ filter: 'grayscale(55%) brightness(0.9)' }}/>
        <div className="absolute top-4 left-4 font-sans font-semibold text-xs tracking-wider uppercase px-3 py-1.5 text-white" style={{ backgroundColor: 'rgba(0,0,0,0.45)', borderRadius: '20px' }}>Înainte</div>
      </div>
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={after} alt={afterAlt} className="w-full h-full object-cover"/>
        <div className="absolute top-4 right-4 font-sans font-semibold text-xs tracking-wider uppercase px-3 py-1.5" style={{ backgroundColor: 'rgba(37,167,161,0.9)', color: 'white', borderRadius: '20px' }}>După</div>
      </div>
      <div className="absolute top-0 bottom-0 w-0.5 bg-white pointer-events-none" style={{ left: `${pos}%`, transform: 'translateX(-50%)', boxShadow: '0 0 8px rgba(0,0,0,0.2)' }}>
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 bg-white rounded-full shadow-lg flex items-center justify-center text-xs font-bold" style={{ color: '#123F46' }}>⟷</div>
      </div>
    </div>
  )
}

// ─── Tag colors ───────────────────────────────────────────────────────────────

export const TAG_COLORS: Record<string, { bg: string; text: string }> = {
  'Clasic':         { bg: '#EDF8F6', text: '#123F46' },
  'Estetic':        { bg: '#F0F0FF', text: '#3730A3' },
  'Premium':        { bg: '#FFF7ED', text: '#92400E' },
  'Copii':          { bg: '#F0FDF4', text: '#166534' },
  'Invizibil':      { bg: '#F8FAFC', text: '#334155' },
  'Post-tratament': { bg: '#FDF2F8', text: '#9D174D' },
}

// ─── Treatments data ──────────────────────────────────────────────────────────

export const TREATMENTS = [
  {
    slug: 'aparat-metalic',
    name: 'Aparat dentar metalic',
    desc: 'Soluția clasică de înaltă eficiență, potrivită pentru toate categoriile de vârstă și pentru cazuri complexe.',
    longDesc: 'Aparatul dentar fix metalic rămâne standardul de aur în ortodonție datorită eficienței, durabilității și cost-eficienței sale. Bracket-urile din oțel inoxidabil permit mișcări ortodontice precise, controlate în toate planurile spațiale.',
    image: 'https://images.unsplash.com/photo-1598256989809-394fa4f6cd26?w=560&h=380&fit=crop&auto=format',
    tag: 'Clasic',
    duration: '12–30 luni',
    suitedFor: ['Copii și adolescenți', 'Adulți cu cazuri complexe', 'Pacienți care prioritizează eficiența față de estetică'],
    benefits: ['Eficiență maximă în corecția tuturor tipurilor de malocluzii', 'Durabilitate și rezistență în timp', 'Cel mai accesibil cost din gama de aparate fixe', 'Compatibil cu tehnici avansate de finisaj ocluzal'],
    stages: ['Consultație și fotografii clinice', 'Montarea bracket-urilor (1 ședință)', 'Controale la 6–8 săptămâni', 'Finalizare și aparat de contenție'],
    price: '3.000 – 5.500 lei',
  },
  {
    slug: 'aparat-ceramic',
    name: 'Aparat dentar ceramic',
    desc: 'Brackete în tonul smalțului dentar — eficiența aparatelor fixe, discreția esteticii ceramice.',
    longDesc: 'Aparatul dentar ceramic oferă aceeași eficiență terapeutică ca varianta metalică, cu avantajul vizibilității reduse. Bracket-urile ceramice sunt fabricate din polixtrial de aluminiu, un material alb sau translucid care se mimetizează cu culoarea dinților.',
    image: 'https://images.unsplash.com/photo-1720685193964-4529228a33c1?w=560&h=380&fit=crop&auto=format',
    tag: 'Estetic',
    duration: '12–30 luni',
    suitedFor: ['Adolescenți și adulți cu preocupări estetice', 'Pacienți activi social sau profesional', 'Persoane care doresc un aparat mai puțin vizibil'],
    benefits: ['Vizibilitate redusă față de aparatele metalice', 'Eficiență terapeutică similară variantei metalice', 'Material rezistent la colorare', 'Confort bun al mucoasei orale'],
    stages: ['Consultație și planificare', 'Bonding ceramic (1 ședință)', 'Controale periodice la 6–8 săptămâni', 'Debonding și contenție'],
    price: '4.500 – 7.000 lei',
  },
  {
    slug: 'aparat-safir',
    name: 'Aparat dentar din safir',
    desc: 'Brackete din cristal de safir monocristalin — transparente, rezistente la colorare, cu impact vizual minim.',
    longDesc: 'Bracket-urile din safir monocristalin sunt fabricate dintr-un singur cristal de aluminiu, ceea ce le conferă o transparență superioară ceramicii policristaline. Acestea sunt practic invizibile pe dinți și nu se colorează în contact cu alimentele.',
    image: 'https://images.unsplash.com/photo-1656514894252-fb336a3ad6a6?w=560&h=380&fit=crop&auto=format',
    tag: 'Premium',
    duration: '12–28 luni',
    suitedFor: ['Adulți cu cerințe estetice foarte ridicate', 'Persoane active în medii publice sau profesionale', 'Pacienți care doresc maximul de discreție cu un aparat fix'],
    benefits: ['Transparență maximă — practic invizibil', 'Nu se colorează în contact cu alimente sau băuturi', 'Suprafață netedă, biocompatibilă', 'Eficiență terapeutică completă'],
    stages: ['Evaluare și plan de tratament', 'Bonding brackets safir', 'Monitorizare la 6–8 săptămâni', 'Finalizare și contenție'],
    price: '5.500 – 8.500 lei',
  },
  {
    slug: 'aparate-mobile',
    name: 'Aparate dentare mobile',
    desc: 'Indicate în tratamentul interceptiv timpuriu. Se îndepărtează pentru igienizare și la masă.',
    longDesc: 'Aparatele mobile sunt utilizate în special în ortodonția interceptivă la copii, pentru corectarea unor disfuncții musculare, a unor obiceiuri vicioase sau pentru ghidarea creșterii osoase. Ele pot fi îndepărtate de pacient, ceea ce facilitează igiena orală.',
    image: 'https://images.unsplash.com/photo-1632053002928-1919605ee6f7?w=560&h=380&fit=crop&auto=format',
    tag: 'Copii',
    duration: '6–18 luni',
    suitedFor: ['Copii între 6 și 12 ani', 'Pacienți cu disfuncții musculare sau de respirație', 'Tratamente interceptive înainte de tratamentul fix'],
    benefits: ['Posibilitate de îndepărtare pentru igienizare', 'Ideal pentru tratament interceptiv timpuriu', 'Ghidarea creșterii osoase', 'Cost redus față de aparatele fixe'],
    stages: ['Evaluare și amprente', 'Confecționarea aparatului (2–3 săptămâni)', 'Instruire privind purtarea', 'Controale la 6–8 săptămâni'],
    price: '1.500 – 3.000 lei',
  },
  {
    slug: 'alignere',
    name: 'Alignere transparente',
    desc: 'Plăcuțe detașabile din material transparent, personalizate digital. Confort maxim, vizibilitate minimă.',
    longDesc: 'Aliniatorii transparenți sunt o serie de plăcuțe detașabile, fabricate din material termoplastic transparent de înaltă calitate. Fiecare set de aliniatoare mișcă dinții progresiv, conform unui plan de tratament digitalizat, conceput în 3D.',
    image: 'https://images.unsplash.com/photo-1629540266304-fff9c67b7660?w=560&h=380&fit=crop&auto=format',
    tag: 'Invizibil',
    duration: '8–24 luni',
    suitedFor: ['Adulți care prioritizează discreția', 'Persoane cu un stil de viață activ', 'Pacienți cu cazuri de complexitate medie'],
    benefits: ['Practic invizibil în conversație', 'Detașabil la masă și pentru igienizare', 'Confort superior față de aparatele fixe', 'Planificare digitală 3D precisă'],
    stages: ['Evaluare și scanare 3D', 'Simulare digitală a tratamentului', 'Livrarea seriei de aliniatoare', 'Controale la 6–10 săptămâni'],
    price: '6.000 – 10.000 lei',
  },
  {
    slug: 'contentie',
    name: 'Aparate de contenție',
    desc: 'Mențin rezultatele după finalizarea tratamentului activ. Esențiale pentru stabilitatea pe termen lung.',
    longDesc: 'Contenția este faza finală, dar esențială, a oricărui tratament ortodontic. Aparatele de contenție mențin dinții în noua lor poziție pe parcursul remodelării osoase. Pot fi fixe (o sârmă lipită pe fața internă a dinților) sau mobile (o plăcuță sau o gutieră transparentă).',
    image: 'https://images.unsplash.com/photo-1657470179441-c69861f0f748?w=560&h=380&fit=crop&auto=format',
    tag: 'Post-tratament',
    duration: 'Nedeterminat (recomandat pe termen lung)',
    suitedFor: ['Orice pacient care a finalizat tratamentul ortodontic', 'Adulți cu tendință de recidivă', 'Pacienți cu stabilitate ocluzală dificil de menținut'],
    benefits: ['Stabilizarea rezultatelor pe termen lung', 'Prevenirea recidivei', 'Opțiuni fixe (invizibile) sau mobile (detașabile)', 'Îngrijire simplă și discretă'],
    stages: ['Îndepărtarea aparatului activ', 'Amprentă sau scanare pentru contenție', 'Aplicarea aparatului de contenție', 'Control la 3 luni, apoi anual'],
    price: '500 – 1.500 lei',
  },
]
