import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { PhoneIcon, MenuIcon, CloseIcon, MapPinIcon, MailIcon, ClockIcon } from '../shared'

// ─── Announcement Bar ─────────────────────────────────────────────────────────

export function AnnouncementBar() {
  return (
    <div style={{ backgroundColor: '#123F46' }} className="text-white py-2.5 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center flex-wrap gap-x-6 gap-y-1 text-xs font-sans tracking-wide">
        <span style={{ color: 'rgba(255,255,255,0.55)' }}>Cabinet de ortodonție în Cluj-Napoca</span>
        <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
        <a href="tel:+40264000000" className="text-white font-medium hover:opacity-70 transition-opacity flex items-center gap-1.5">
          <PhoneIcon />&nbsp;+40 264 000 000
        </a>
        <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
        <Link to="/#contact" className="font-medium underline underline-offset-2 hover:opacity-70 transition-opacity" style={{ color: '#25A7A1' }}>
          Programează o consultație
        </Link>
      </div>
    </div>
  )
}

// ─── Navigation ───────────────────────────────────────────────────────────────

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Reset scroll on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const handleSectionLink = (hash: string) => {
    setMenuOpen(false)
    if (isHome) {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/' + hash)
    }
  }

  const navItems = [
    { label: 'Acasă', type: 'link', to: '/' },
    { label: 'Despre medic', type: 'section', hash: '#despre' },
    { label: 'Tratamente', type: 'section', hash: '#tratamente' },
    { label: 'Cazuri', type: 'link', to: '/cazuri' },
    { label: 'Ghidul pacientului', type: 'link', to: '/ghid' },
    { label: 'Tarife', type: 'section', hash: '#tarife' },
    { label: 'Contact', type: 'section', hash: '#contact' },
  ]

  return (
    <>
      <header className="fixed left-0 right-0 z-50 transition-all duration-300" style={{
        top: scrolled ? 0 : '35px',
        backgroundColor: scrolled ? 'rgba(250,250,247,0.96)' : 'transparent',
        borderBottom: scrolled ? '1px solid #DDE5E4' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
      }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex flex-col leading-none">
              <span style={{ fontFamily: 'Newsreader, Georgia, serif', fontSize: '1.15rem', fontWeight: 600, color: '#123F46', letterSpacing: '-0.01em' }}>
                Dr. Raluca Moraru
              </span>
              <span className="text-[10px] font-sans font-medium tracking-widest uppercase mt-0.5" style={{ color: '#607178' }}>
                Medic specialist ortodont
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map(item => (
                item.type === 'link' ? (
                  <Link key={item.label} to={item.to!}
                    className="text-[13px] font-sans font-medium transition-colors duration-200"
                    style={{ color: location.pathname === item.to ? '#25A7A1' : '#263238' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#25A7A1')}
                    onMouseLeave={e => (e.currentTarget.style.color = location.pathname === item.to ? '#25A7A1' : '#263238')}>
                    {item.label}
                  </Link>
                ) : (
                  <button key={item.label}
                    onClick={() => handleSectionLink(item.hash!)}
                    className="text-[13px] font-sans font-medium transition-colors duration-200"
                    style={{ color: '#263238' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#25A7A1')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#263238')}>
                    {item.label}
                  </button>
                )
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a href="tel:+40264000000" className="hidden md:flex items-center gap-1.5 text-xs font-medium transition-opacity hover:opacity-60" style={{ color: '#123F46' }}>
                <PhoneIcon /><span>+40 264 000 000</span>
              </a>
              <button
                onClick={() => handleSectionLink('#contact')}
                className="hidden md:block text-[13px] font-sans font-semibold px-5 py-2.5 text-white transition-colors duration-200"
                style={{ backgroundColor: '#25A7A1', borderRadius: '11px' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#123F46')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#25A7A1')}>
                Programează
              </button>
              <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2" style={{ color: '#263238' }} aria-label="Meniu">
                {menuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div className="fixed inset-0 z-40 flex flex-col px-8 pt-28 pb-10 lg:hidden transition-all duration-500" style={{
        backgroundColor: '#123F46',
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? 'all' : 'none',
        transform: menuOpen ? 'translateY(0)' : 'translateY(-10px)',
      }}>
        <nav className="flex flex-col gap-6 flex-1">
          {navItems.map((item, i) => (
            item.type === 'link' ? (
              <Link key={item.label} to={item.to!}
                onClick={() => setMenuOpen(false)}
                className="hover:opacity-60 transition-opacity"
                style={{ fontFamily: 'Newsreader, Georgia, serif', fontSize: '1.9rem', fontWeight: 400, fontStyle: 'italic', color: 'white',
                  opacity: menuOpen ? 1 : 0, transform: menuOpen ? 'translateY(0)' : 'translateY(14px)',
                  transition: `opacity 0.4s ease ${i * 55}ms, transform 0.4s ease ${i * 55}ms` }}>
                {item.label}
              </Link>
            ) : (
              <button key={item.label}
                onClick={() => handleSectionLink(item.hash!)}
                className="text-left hover:opacity-60 transition-opacity"
                style={{ fontFamily: 'Newsreader, Georgia, serif', fontSize: '1.9rem', fontWeight: 400, fontStyle: 'italic', color: 'white',
                  opacity: menuOpen ? 1 : 0, transform: menuOpen ? 'translateY(0)' : 'translateY(14px)',
                  transition: `opacity 0.4s ease ${i * 55}ms, transform 0.4s ease ${i * 55}ms` }}>
                {item.label}
              </button>
            )
          ))}
        </nav>
        <div className="flex flex-col gap-3 border-t pt-5" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          <a href="tel:+40264000000" className="flex items-center gap-2 text-sm font-sans" style={{ color: 'rgba(255,255,255,0.5)' }}>
            <PhoneIcon />+40 264 000 000
          </a>
          <button onClick={() => handleSectionLink('#contact')}
            className="text-center font-sans font-semibold py-4 text-white"
            style={{ backgroundColor: '#25A7A1', borderRadius: '13px' }}>
            Programează o consultație
          </button>
        </div>
      </div>
    </>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#0D2E34' }} className="pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-12">
          <div>
            <p style={{ fontFamily: 'Newsreader, Georgia, serif', fontSize: '1.2rem', fontWeight: 500, color: 'white', letterSpacing: '-0.01em' }}>Dr. Raluca Moraru</p>
            <p className="text-[10px] font-sans tracking-widest uppercase mt-1 mb-4" style={{ color: 'rgba(255,255,255,0.35)' }}>Medic specialist ortodont</p>
            <p className="text-sm font-sans leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '28ch' }}>
              Cabinet de ortodonție în Cluj-Napoca. Tratamente personalizate pentru copii, adolescenți și adulți.
            </p>
            <div className="flex gap-3">
              {['fb', 'ig', 'g'].map(s => (
                <a key={s} href="#" className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-sans font-semibold transition-colors"
                  style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)' }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#25A7A1')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)')}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-sans font-semibold tracking-widest uppercase mb-5" style={{ color: 'rgba(255,255,255,0.35)' }}>Navigație</p>
            <ul className="flex flex-col gap-2.5 text-sm font-sans">
              {[
                { label: 'Acasă', to: '/' },
                { label: 'Despre medic', to: '/#despre' },
                { label: 'Cazuri', to: '/cazuri' },
                { label: 'Ghidul pacientului', to: '/ghid' },
                { label: 'Tarife', to: '/#tarife' },
                { label: 'Contact', to: '/#contact' },
              ].map(item => (
                <li key={item.label}>
                  <Link to={item.to} className="transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-sans font-semibold tracking-widest uppercase mb-5" style={{ color: 'rgba(255,255,255,0.35)' }}>Tratamente</p>
            <ul className="flex flex-col gap-2.5 text-sm font-sans">
              {['Aparat metalic','Aparat ceramic','Aparat safir','Alignere transparente','Aparate mobile','Contenție'].map((t, i) => {
                const slugs = ['aparat-metalic','aparat-ceramic','aparat-safir','alignere','aparate-mobile','contentie']
                return (
                  <li key={t}>
                    <Link to={`/tratament/${slugs[i]}`} className="transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }}>{t}</Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-sans font-semibold tracking-widest uppercase mb-5" style={{ color: 'rgba(255,255,255,0.35)' }}>Contact</p>
            <ul className="flex flex-col gap-3 text-sm font-sans">
              <li className="flex items-start gap-2 leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                <MapPinIcon /><span>Str. Exemplu nr. 10,<br/>Cluj-Napoca, România</span>
              </li>
              <li>
                <a href="tel:+40264000000" className="flex items-center gap-2 transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  <PhoneIcon />+40 264 000 000
                </a>
              </li>
              <li>
                <a href="mailto:contact@drmoraru.ro" className="flex items-center gap-2 transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  <MailIcon />contact@drmoraru.ro
                </a>
              </li>
              <li className="flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                <ClockIcon /><span>Luni – Vineri: 09:00–18:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <p className="text-xs font-sans" style={{ color: 'rgba(255,255,255,0.3)' }}>© {new Date().getFullYear()} Dr. Raluca Moraru · Toate drepturile rezervate</p>
          <div className="flex gap-5 text-xs font-sans flex-wrap justify-center">
            {['Politica de confidențialitate','Politica de cookie-uri','Disclaimer medical'].map(l => (
              <a key={l} href="#" className="transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.3)' }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── Mobile Sticky Bottom Bar ─────────────────────────────────────────────────

export function MobileBottomBar() {
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 200)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-transform duration-300"
      style={{ transform: scrolled ? 'translateY(0)' : 'translateY(100%)', backgroundColor: 'rgba(250,250,247,0.97)', borderTop: '1px solid #DDE5E4', backdropFilter: 'blur(12px)', padding: '10px 16px 14px' }}>
      <div className="flex gap-3 max-w-lg mx-auto">
        <a href="tel:+40264000000"
          className="flex-1 flex items-center justify-center gap-2 font-sans font-semibold text-sm py-3.5 border-2 transition-colors"
          style={{ color: '#123F46', borderColor: '#DDE5E4', borderRadius: '11px' }}>
          <PhoneIcon /> Sună
        </a>
        <button
          onClick={() => { const el = document.querySelector('#contact'); el ? el.scrollIntoView({ behavior: 'smooth' }) : navigate('/#contact') }}
          className="flex-[2] flex items-center justify-center font-sans font-semibold text-sm text-white py-3.5 transition-colors"
          style={{ backgroundColor: '#25A7A1', borderRadius: '11px' }}>
          Programează o consultație
        </button>
      </div>
    </div>
  )
}

// ─── Page Layout wrapper ──────────────────────────────────────────────────────

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: '#FAFAF7' }}>
      <AnnouncementBar />
      <Navigation />
      <main>{children}</main>
      <Footer />
      <MobileBottomBar />
    </div>
  )
}
