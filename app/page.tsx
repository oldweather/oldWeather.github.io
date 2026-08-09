function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <section className="hero">
        <nav className="nav" aria-label="Primary navigation">
          <a className="wordmark" href="#top" aria-label="Old Weather home">
            <span className="mark" aria-hidden="true">OW</span>
            <span>Old Weather</span>
          </a>
          <a className="nav-link" href="#legacy">About the project <span aria-hidden="true">↓</span></a>
        </nav>

        <div className="hero-copy" id="top">
          <p className="kicker">A citizen-science project for climate history</p>
          <h1>Yesterday’s logs.<br /><em>Tomorrow’s climate.</em></h1>
          <p className="intro">
            Old Weather brought volunteers and scientists together to recover weather
            observations recorded at sea since the mid-19th century.
          </p>
          <a className="primary-link" href="#legacy">Read about its legacy <span aria-hidden="true">↓</span></a>
        </div>

        <div className="chart" aria-hidden="true">
          <div className="sun" />
          <div className="ship"><span /><span /><span /></div>
          <div className="wave wave-one" />
          <div className="wave wave-two" />
          <div className="wave wave-three" />
          <p className="coordinate north">72° N</p>
          <p className="coordinate west">18° W</p>
        </div>
      </section>

      <section className="mission" id="legacy" aria-labelledby="mission-heading">
        <p className="section-number">01 — The project</p>
        <div>
          <h2 id="mission-heading">The project is currently resting.</h2>
          <p>
            Old Weather is not currently running an active transcription project. Over
            many years, its volunteers helped turn handwritten ships’ logs into usable
            climate records—revealing voyages, lives, and a richer picture of our
            changing climate. This page now serves as a signpost to that work.
          </p>
        </div>
      </section>

      <section className="more" aria-labelledby="more-heading">
        <div>
          <p className="section-number">02 — The legacy</p>
          <h2 id="more-heading">Explore the science<br />and stories.</h2>
        </div>
        <div className="more-links">
          <a href="https://oldweather.wordpress.com/" target="_blank" rel="noreferrer">Project blog <Arrow /></a>
          <a href="https://oldweather.wordpress.com/results/" target="_blank" rel="noreferrer">Data &amp; results <Arrow /></a>
          <a href="https://www.zooniverse.org/" target="_blank" rel="noreferrer">About Zooniverse <Arrow /></a>
        </div>
      </section>

      <footer>
        <a className="wordmark" href="#top"><span className="mark" aria-hidden="true">OW</span><span>Old Weather</span></a>
        <p>A citizen-science legacy in climate data rescue.</p>
        <p>© {new Date().getFullYear()} Old Weather</p>
      </footer>
    </main>
  );
}
