// Hero section — full-screen boomerang video background.

const BG_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_131941_d136af49-e243-493a-be14-6ff3f24e09e6.mp4';

const NAV_LINKS = [
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

function Hero() {
  const R = window.RESUME;
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <section
      data-screen-label="Hero"
      className="relative w-full min-h-[100svh] overflow-hidden bg-[#dfe7d8]"
    >
      <BoomerangVideoBg src={BG_VIDEO} className="absolute inset-0 w-full h-full" />
      {/* legibility scrims */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#eef2e9]/55 via-transparent to-[#1f2a1d]/15 pointer-events-none" />

      {/* NAV */}
      <nav className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 sm:py-6">
        <a href="#top" className="flex items-center gap-3 text-[#1f2a1d]">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1f2a1d] text-[#eef2e9] text-sm font-semibold tracking-tight">
            {R.initials}
          </span>
          <span className="hidden sm:block text-base md:text-lg font-semibold tracking-tight">
            {R.name}
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-1 bg-white/70 backdrop-blur-md rounded-full pl-6 pr-1 py-1 shadow-sm border border-white/60">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm px-3.5 py-2 transition-colors ${
                i === 0 ? 'font-semibold text-[#1f2a1d]' : 'font-medium text-[#4b5b47] hover:text-[#1f2a1d]'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 bg-[#1f2a1d] hover:bg-[#2a3827] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
          >
            Download CV
          </a>
        </div>

        <div className="flex items-center gap-3 sm:gap-5 text-[#1f2a1d]">
          <a
            href={'mailto:' + R.email}
            className="hidden sm:flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
          >
            <Icon name="mail" className="w-4 h-4" />
            Email me
          </a>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden relative flex items-center justify-center w-10 h-10 rounded-full bg-white/70 backdrop-blur-md border border-white/60 text-[#1f2a1d] transition-all duration-300 hover:bg-white/90"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <Icon name="menu" className={`w-5 h-5 absolute transition-all duration-300 ${menuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100'}`} />
            <Icon name="x" className={`w-5 h-5 absolute transition-all duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 -rotate-90 scale-50'}`} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden fixed inset-0 z-20 transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMenuOpen(false)}
      >
        <div className="absolute inset-0 bg-[#1f2a1d]/40 backdrop-blur-sm" />
      </div>
      <div
        className={`lg:hidden fixed top-0 right-0 bottom-0 z-20 w-[85%] max-w-sm bg-[#f3f5ef]/95 backdrop-blur-xl shadow-2xl transition-transform duration-500 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)' }}
      >
        <div className="flex flex-col h-full pt-24 px-8 pb-8">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-[#1f2a1d] py-4 border-b border-[#1f2a1d]/10 transition-all duration-500 ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                style={{ transitionDelay: menuOpen ? `${150 + i * 70}ms` : '0ms' }}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div
            className={`mt-8 flex flex-col gap-3 transition-all duration-500 ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
            style={{ transitionDelay: menuOpen ? '400ms' : '0ms' }}
          >
            <a href={'mailto:' + R.email} className="flex items-center gap-2 text-sm font-medium text-[#2d3a2a]">
              <Icon name="mail" className="w-4 h-4" /> {R.email}
            </a>
            <a href={'tel:' + R.phone.replace(/\s/g, '')} className="flex items-center gap-2 text-sm font-medium text-[#2d3a2a]">
              <Icon name="phone" className="w-4 h-4" /> {R.phone}
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="mt-2 text-center bg-[#1f2a1d] hover:bg-[#2a3827] text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors">
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* HERO COPY */}
      <div className="relative z-10 flex flex-col items-center text-center pt-28 sm:pt-32 md:pt-36 px-5 sm:px-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/65 backdrop-blur-md border border-white/60 px-4 py-1.5 text-[#2d3a2a] text-xs sm:text-sm font-medium mb-7 sm:mb-9">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
          {R.title} · {R.location}
        </div>
        <h1
          className="font-normal leading-[0.95] text-[#336443] text-[2.1rem] sm:text-5xl md:text-6xl lg:text-[4.75rem] xl:text-[5.25rem] max-w-5xl"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.035em' }}
        >
          {R.heroLead}{' '}
          <span style={{ color: 'var(--accent)' }}>{R.heroAccent}</span>
        </h1>
        <p className="mt-6 sm:mt-8 text-[#3d5638] text-sm sm:text-base md:text-lg leading-relaxed max-w-xl px-2">
          {R.summary}
        </p>
        <div className="mt-8 sm:mt-9 flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
          <a href="#contact" className="flex items-center gap-2 bg-[#1f2a1d] hover:bg-[#2a3827] text-white text-sm font-medium px-6 py-3 rounded-full transition-colors shadow-sm">
            <Icon name="download" className="w-4 h-4" /> Download CV
          </a>
          <a href={'mailto:' + R.email} className="flex items-center gap-2 bg-white/75 backdrop-blur-md border border-white/70 hover:bg-white text-[#1f2a1d] text-sm font-medium px-6 py-3 rounded-full transition-colors">
            Get in touch <Icon name="arrowUpRight" className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* BOTTOM-LEFT identity card */}
      <div className="absolute left-4 right-4 sm:right-auto sm:left-6 md:left-10 bottom-6 sm:bottom-8 md:bottom-10 z-10 max-w-xs">
        <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 px-5 py-4 shadow-sm">
          <div className="flex items-center gap-2 text-[#2d3a2a] mb-1.5">
            <Icon name="sparkles" className="w-4 h-4" style={{ color: 'var(--accent)' }} />
            <span className="text-xs font-semibold uppercase tracking-wide">Currently</span>
          </div>
          <p className="text-[#1f2a1d] text-sm font-semibold leading-snug">
            {R.experience[0].role}
          </p>
          <p className="text-[#4b5b47] text-xs leading-relaxed mt-0.5">
            {R.experience[0].company}
          </p>
        </div>
      </div>

      {/* BOTTOM-RIGHT scroll cue */}
      <a
        href="#experience"
        className="hidden sm:flex absolute right-6 md:right-10 bottom-8 md:bottom-10 z-10 items-center gap-2.5 text-[#1f2a1d] text-sm group"
      >
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/70 backdrop-blur-md border border-white/60 group-hover:bg-white transition-colors">
          <Icon name="arrowDown" className="w-4 h-4" />
        </span>
        <span className="font-medium">Explore the work</span>
      </a>
    </section>
  );
}

window.Hero = Hero;
