import React from "react";

const highlights = [
  "স্বচ্ছ নির্বাচন, তথ্যের পূর্ণ প্রকাশ",
  "ন্যায়ভিত্তিক রাষ্ট্র, নাগরিক মর্যাদা নিশ্চিত",
  "গণভোটে হ্যাঁ — উন্নয়ন ও স্থিতিশীলতার পথে",
  "আপনার এক ভোটই ভবিষ্যৎ বদলায়",
];

const pillars = [
  {
    title: "স্বচ্ছতা",
    text: "ভোটকেন্দ্র, ব্যালট, গণনা—সবকিছুই সবার সামনে।",
  },
  {
    title: "সমতা",
    text: "প্রান্তিক জনগোষ্ঠীর অধিকার ও সমান সুযোগ।",
  },
  {
    title: "আস্থা",
    text: "প্রতিশ্রুতি নয়, নির্ভরযোগ্য বাস্তবায়ন।",
  },
  {
    title: "উন্নয়ন",
    text: "দক্ষ কর্মসংস্থান, শিক্ষা ও স্বাস্থ্যকে অগ্রাধিকার।",
  },
];

const timeline = [
  { time: "০৭:৩০", label: "ভোটগ্রহণ শুরু" },
  { time: "১২:০০", label: "মধ্যাহ্ন বিরতি পর্যবেক্ষণ" },
  { time: "১৬:৩০", label: "ভোটগ্রহণ শেষ" },
  { time: "১৭:৩০", label: "গণনা প্রক্রিয়া শুরু" },
];

const pledges = [
  "প্রতিটি ভোটারের নিরাপত্তা নিশ্চিত করা হবে।",
  "স্বাধীন পর্যবেক্ষক ও গণমাধ্যমের পূর্ণ প্রবেশাধিকার থাকবে।",
  "নির্বাচনী ব্যয়ের হিসাব সর্বসমক্ষে প্রকাশ করা হবে।",
];

const stats = [
  { value: "১৩তম", label: "জাতীয় সংসদ নির্বাচন" },
  { value: "১২ ফেব্রু", label: "ভোটের দিন ২০২৬" },
  { value: "৭:৩০–৪:৩০", label: "ভোটের সময়" },
];

export default function App() {
  const audioRef = React.useRef(null);
  const [showWelcome, setShowWelcome] = React.useState(true);

  const handleCloseWelcome = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = false;
      audio.play().catch(() => {});
    }
    setShowWelcome(false);
  };

  return (
    <div className="page">
      <div className="noise" aria-hidden="true" />
      <div className="orb orb--one" aria-hidden="true" />
      <div className="orb orb--two" aria-hidden="true" />
      <div className="orb orb--three" aria-hidden="true" />
      <div className="rays" aria-hidden="true" />

      {showWelcome && (
        <div className="welcome" role="dialog" aria-modal="true">
          <div className="welcome-card">
            <p className="welcome-title">স্বাগতম</p>
            <p className="welcome-text">
              গণভোটে হ্যাঁ দিন,
              <br />
              দাড়িপাল্লায় ভোট দিন
            </p>
            <button
              type="button"
              className="welcome-close"
              onClick={handleCloseWelcome}
            >
              প্রবেশ করুন
            </button>
          </div>
        </div>
      )}

      <main className="shell">
        <header className="hero">
          <div className="hero-content">
            <span className="chip">বাংলাদেশ নির্বাচন | ১৩তম সংসদ</span>
            <h1>ন্যায়, ভারসাম্য, বিশ্বাসযোগ্যতা</h1>
            <p className="lead">
              দাড়িপাল্লা প্রতীক মানে স্বচ্ছতা ও সমতার স্পষ্ট বার্তা। এই
              প্রচারণা জনগণের মর্যাদা ও দায়িত্বশীল নেতৃত্বের জন্য—প্রতিটি ভোটের
              সম্মান নিশ্চিত করতে আমরা অঙ্গীকারবদ্ধ।
            </p>
            <div className="meta-grid">
              <div className="meta-card">
                <span>ভোটের দিন</span>
                <strong>১২ ফেব্রুয়ারি ২০২৬</strong>
              </div>
              <div className="meta-card">
                <span>সময়</span>
                <strong>সকাল ৭:৩০ – বিকেল ৪:৩০</strong>
              </div>
              <div className="meta-card">
                <span>অঙ্গীকার</span>
                <strong>সবার অংশগ্রহণে নিরাপদ নির্বাচন</strong>
              </div>
            </div>
            <div className="cta-row">
              <div className="cta-pill">গণভোটে হ্যাঁ</div>
              <div className="cta-pill ghost">প্রতীক: দাড়িপাল্লা</div>
            </div>
          </div>

          <div className="hero-panel">
            <div className="emblem-card">
              <div className="emblem-photo">
                <img
                  src="/images/daripalla.png"
                  alt="দাড়িপাল্লা প্রতীক"
                  loading="eager"
                />
              </div>
              <div>
                <h2>দাড়িপাল্লা</h2>
                <p>
                  ন্যায়, ভারসাম্য ও বিশ্বাসযোগ্যতার প্রতীক—জনগণের ন্যায্য অধিকার
                  প্রতিষ্ঠায় দাড়িপাল্লার বার্তা।
                </p>
              </div>
            </div>

            <div className="stat-grid">
              {stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="highlight-card">
              <h3>প্রচারবার্তা</h3>
              <ul>
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </header>

        <section className="ribbon">
          <p>স্বচ্ছ নির্বাচন • দায়িত্বশীল নেতৃত্ব • জনগণের আস্থা</p>
        </section>

        <section className="pillars">
          <div className="section-head">
            <h2>মূল স্তম্ভ</h2>
            <p>রাষ্ট্রগঠনের মৌলিক চার ভিত্তি—যা দাড়িপাল্লার বার্তাকে এগিয়ে নেয়।</p>
          </div>
          <div className="pillar-grid">
            {pillars.map((pillar) => (
              <article className="pillar" key={pillar.title}>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="split">
          <div className="manifesto">
            <h2>জনগণের অঙ্গীকার</h2>
            <p>
              উন্নয়ন তখনই টেকসই হয়, যখন তা ন্যায় ও স্বচ্ছতার সাথে যুক্ত থাকে।
              দাড়িপাল্লা প্রতীক সেই ভারসাম্যকে সামনে আনে—কর্মসংস্থান, শিক্ষা,
              স্বাস্থ্য ও নাগরিক নিরাপত্তাকে কেন্দ্র করে একটি নতুন সমন্বিত পথ।
            </p>
            <div className="pledge-list">
              {pledges.map((pledge) => (
                <div className="pledge" key={pledge}>
                  {pledge}
                </div>
              ))}
            </div>
          </div>

          <div className="timeline">
            <h2>ভোটের দিনের পথচিত্র</h2>
            <div className="timeline-list">
              {timeline.map((item) => (
                <div className="timeline-item" key={item.time}>
                  <span className="time">{item.time}</span>
                  <span className="label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="callout">
          <div>
            <h2>আপনার ভোট, আপনার ভবিষ্যৎ</h2>
            <p>
              ভোটকেন্দ্রে উপস্থিত থাকুন, গণভোটে হ্যাঁ দিন এবং দাড়িপাল্লা প্রতীকে
              সমর্থন জানান। দায়িত্বশীল নির্বাচনের মাধ্যমে আমরা এগিয়ে যাব।
            </p>
          </div>
          <div className="callout-badge">YES</div>
          <div className="audio-hidden">
            <audio ref={audioRef} preload="metadata" loop playsInline>
              <source
                src="/audio/dekhe-dekhe-kete-gelo-bela.mp3"
                type="audio/mpeg"
              />
            </audio>
          </div>
        </section>
      </main>
    </div>
  );
}
