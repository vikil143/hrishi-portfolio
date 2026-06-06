// Content sections below the hero.

function SectionHeader({ num, label, title }) {
  return (
    <div className="mb-10 sm:mb-14">
      <div className="flex items-center gap-3 text-[#85AB8B] mb-5">
        <span className="text-xs font-semibold tracking-[0.18em] tabular-nums" style={{ color: 'var(--accent)' }}>{num}</span>
        <span className="h-px flex-1 max-w-[44px]" style={{ background: 'var(--accent)' }} />
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4b5b47]">{label}</span>
      </div>
      <h2
        className="text-[#336443] text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.02]"
        style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}
      >
        {title}
      </h2>
    </div>
  );
}

function About() {
  const R = window.RESUME;
  return (
    <section id="about" className="bg-[#f3f5ef] px-5 sm:px-6 md:px-10 py-20 sm:py-28 border-b border-[#1f2a1d]/10">
      <div className="max-w-6xl mx-auto">
        <SectionHeader num="01" label="Profile" title="Operational excellence, end to end." />
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <p className="lg:col-span-7 text-[#3d5638] text-lg sm:text-xl leading-relaxed" style={{ textWrap: 'pretty' }}>
            {R.longSummary}
          </p>
          <div className="lg:col-span-5 grid grid-cols-2 gap-px bg-[#1f2a1d]/10 rounded-2xl overflow-hidden border border-[#1f2a1d]/10">
            {R.stats.map((s) => (
              <div key={s.label} className="bg-[#f3f5ef] p-5 sm:p-6">
                <div className="text-[#1f2a1d] text-3xl sm:text-4xl font-normal" style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}>{s.value}</div>
                <div className="text-[#4b5b47] text-xs sm:text-[13px] leading-snug mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 sm:mt-16">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4b5b47] mb-5">Core competencies</div>
          <div className="flex flex-wrap gap-2.5">
            {R.competencies.map((c) => (
              <span key={c} className="rounded-full border border-[#1f2a1d]/15 bg-white/60 px-4 py-2 text-sm text-[#2d3a2a]">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const R = window.RESUME;
  return (
    <section id="experience" className="bg-[#eef2e9] px-5 sm:px-6 md:px-10 py-20 sm:py-28 border-b border-[#1f2a1d]/10">
      <div className="max-w-6xl mx-auto">
        <SectionHeader num="02" label="Experience" title="Where I've delivered." />
        <div className="flex flex-col">
          {R.experience.map((job, i) => (
            <div
              key={i}
              data-screen-label={'Experience ' + (i + 1)}
              className="grid lg:grid-cols-12 gap-5 lg:gap-10 py-8 sm:py-10 border-t border-[#1f2a1d]/12 first:border-t-0"
            >
              <div className="lg:col-span-4">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="text-[13px] font-semibold tabular-nums text-[#4b5b47]">{job.period}</span>
                  {job.current && (
                    <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold text-[#1f2a1d]" style={{ background: 'color-mix(in oklab, var(--accent) 40%, white)' }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1f2a1d]" /> Now
                    </span>
                  )}
                </div>
                <h3 className="text-[#1f2a1d] text-xl sm:text-2xl font-medium leading-tight" style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
                  {job.company}
                </h3>
                <div className="mt-2 flex items-center gap-2 text-[#4b5b47] text-sm">
                  <Icon name="briefcase" className="w-3.5 h-3.5" />
                  <span>{job.role}</span>
                </div>
                <div className="mt-1 flex items-center gap-2 text-[#4b5b47] text-sm">
                  <Icon name="mapPin" className="w-3.5 h-3.5" />
                  <span>{job.location}</span>
                </div>
              </div>
              <ul className="lg:col-span-8 flex flex-col gap-3.5">
                {job.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-[#3d5638] text-[15px] sm:text-base leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--accent)' }} />
                    <span style={{ textWrap: 'pretty' }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  const R = window.RESUME;
  return (
    <section id="education" className="bg-[#f3f5ef] px-5 sm:px-6 md:px-10 py-20 sm:py-28 border-b border-[#1f2a1d]/10">
      <div className="max-w-6xl mx-auto">
        <SectionHeader num="03" label="Education" title="Foundations." />
        <div className="grid md:grid-cols-3 gap-px bg-[#1f2a1d]/10 rounded-2xl overflow-hidden border border-[#1f2a1d]/10">
          {R.education.map((ed, i) => (
            <div key={i} className="bg-[#f3f5ef] p-6 sm:p-8 flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <span className="flex items-center justify-center w-10 h-10 rounded-full border border-[#1f2a1d]/15 text-[#1f2a1d]">
                  <Icon name="cap" className="w-5 h-5" />
                </span>
                <span className="text-sm font-semibold tabular-nums text-[#4b5b47]">{ed.year}</span>
              </div>
              <h3 className="text-[#1f2a1d] text-lg font-medium leading-snug" style={{ fontFamily: 'var(--font-display)' }}>{ed.degree}</h3>
              <p className="text-[#3d5638] text-sm mt-2 leading-relaxed">{ed.school}</p>
              <p className="text-[#4b5b47] text-xs mt-0.5">{ed.city}</p>
              <div className="mt-auto pt-5">
                <span className="inline-flex items-baseline gap-1.5 text-[#1f2a1d]">
                  <span className="text-2xl font-normal" style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>{ed.score}</span>
                  <span className="text-[11px] uppercase tracking-wide text-[#4b5b47]">score</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const R = window.RESUME;
  return (
    <section id="skills" className="bg-[#eef2e9] px-5 sm:px-6 md:px-10 py-20 sm:py-28 border-b border-[#1f2a1d]/10">
      <div className="max-w-6xl mx-auto">
        <SectionHeader num="04" label="Capabilities" title="Skills & tools." />
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
          {R.skillGroups.map((g) => (
            <div key={g.label}>
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-[#1f2a1d]/12">
                <Icon name="layers" className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                <h3 className="text-[#1f2a1d] text-sm font-semibold uppercase tracking-wide">{g.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {g.items.map((it) => (
                  <span key={it} className="rounded-full border border-[#1f2a1d]/15 bg-white/55 px-3.5 py-1.5 text-sm text-[#2d3a2a]">{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-10 border-t border-[#1f2a1d]/12">
          <div className="flex items-center gap-2.5 mb-6">
            <Icon name="languages" className="w-4 h-4" style={{ color: 'var(--accent)' }} />
            <h3 className="text-[#1f2a1d] text-sm font-semibold uppercase tracking-wide">Languages</h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {R.languages.map((l) => (
              <div key={l.name} className="flex items-baseline justify-between gap-4 border-b border-[#1f2a1d]/10 pb-3">
                <span className="text-[#1f2a1d] text-lg" style={{ fontFamily: 'var(--font-display)' }}>{l.name}</span>
                <span className="text-[#4b5b47] text-xs text-right">{l.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  const R = window.RESUME;
  return (
    <section className="bg-[#1f2a1d] px-5 sm:px-6 md:px-10 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-semibold tracking-[0.18em] tabular-nums" style={{ color: 'var(--accent)' }}>05</span>
            <span className="h-px flex-1 max-w-[44px]" style={{ background: 'var(--accent)' }} />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#85AB8B]">Impact</span>
          </div>
          <h2 className="text-[#eef2e9] text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.02]" style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}>
            Key achievements.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {R.achievements.map((a, i) => (
            <div key={i} className="flex flex-col">
              <span className="flex items-center justify-center w-11 h-11 rounded-full mb-6" style={{ background: 'color-mix(in oklab, var(--accent) 30%, #1f2a1d)', color: 'var(--accent)' }}>
                <Icon name="award" className="w-5 h-5" />
              </span>
              <h3 className="text-[#eef2e9] text-xl font-medium leading-snug mb-3" style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.01em' }}>
                {a.title}
              </h3>
              <p className="text-[#a9bba1] text-[15px] leading-relaxed" style={{ textWrap: 'pretty' }}>{a.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const R = window.RESUME;
  const items = [
    { icon: 'mail', label: 'Email', value: R.email, href: 'mailto:' + R.email },
    { icon: 'phone', label: 'Phone', value: R.phone, href: 'tel:' + R.phone.replace(/\s/g, '') },
    { icon: 'mapPin', label: 'Location', value: R.location + ' · ' + R.availability, href: null },
  ];
  return (
    <section id="contact" className="bg-[#f3f5ef] px-5 sm:px-6 md:px-10 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-semibold tracking-[0.18em] tabular-nums" style={{ color: 'var(--accent)' }}>06</span>
              <span className="h-px flex-1 max-w-[44px]" style={{ background: 'var(--accent)' }} />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4b5b47]">Contact</span>
            </div>
            <h2 className="text-[#336443] text-4xl sm:text-5xl md:text-6xl font-normal leading-[0.98]" style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.035em' }}>
              Let's build something<br />
              <span style={{ color: 'var(--accent)' }}>that runs smoothly.</span>
            </h2>
            <div className="mt-9 flex items-center gap-4 flex-wrap">
              <a href={'mailto:' + R.email} className="flex items-center gap-2 bg-[#1f2a1d] hover:bg-[#2a3827] text-white text-sm font-medium px-6 py-3 rounded-full transition-colors">
                <Icon name="mail" className="w-4 h-4" /> Email me
              </a>
              <button type="button" onClick={() => window.print()} className="flex items-center gap-2 bg-white/70 border border-[#1f2a1d]/15 hover:bg-white text-[#1f2a1d] text-sm font-medium px-6 py-3 rounded-full transition-colors">
                <Icon name="download" className="w-4 h-4" /> Save / print CV
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col">
            {items.map((it) => {
              const inner = (
                <div className="flex items-start gap-4 py-5 border-t border-[#1f2a1d]/12">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full border border-[#1f2a1d]/15 text-[#1f2a1d] shrink-0">
                    <Icon name={it.icon} className="w-4 h-4" />
                  </span>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.14em] text-[#4b5b47] mb-1">{it.label}</div>
                    <div className="text-[#1f2a1d] text-[15px] sm:text-base font-medium">{it.value}</div>
                  </div>
                </div>
              );
              return it.href ? (
                <a key={it.label} href={it.href} className="group hover:opacity-80 transition-opacity">{inner}</a>
              ) : (
                <div key={it.label}>{inner}</div>
              );
            })}
          </div>
        </div>

        <footer className="mt-20 pt-8 border-t border-[#1f2a1d]/12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-[#1f2a1d]">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#1f2a1d] text-[#eef2e9] text-xs font-semibold">{R.initials}</span>
            <span className="text-sm font-medium">{R.fullName}</span>
          </div>
          <span className="text-[#4b5b47] text-xs">{R.title} · {R.location}</span>
        </footer>
      </div>
    </section>
  );
}

Object.assign(window, { About, Experience, Education, Skills, Achievements, Contact });
