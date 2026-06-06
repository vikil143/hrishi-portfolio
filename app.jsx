// App root + Tweaks (accent color).

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#85AB8B"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    document.documentElement.style.setProperty('--accent', t.accent);
  }, [t.accent]);

  return (
    <div id="top">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Achievements />
      <Contact />

      <TweaksPanel>
        <TweakSection label="Theme" />
        <TweakColor
          label="Accent"
          value={t.accent}
          options={['#85AB8B', '#5C9A6B', '#6FB39A', '#9BAA6B', '#4E8C7A']}
          onChange={(v) => setTweak('accent', v)}
        />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
