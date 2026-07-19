export default function MetricCards({ t }) {
  return (
    <div className="metric-cards">
      <div className="metric-card">
        <p className="metric-label">{t.mostRecentChampion}</p>
        <p className="metric-value">Luka Dončić</p>
        <p className="metric-stat">33.5 {t.ppgUnit} · 2025-26</p>
      </div>
      <div className="metric-card">
        <p className="metric-label">{t.mostTitles}</p>
        <p className="metric-value">Kevin Durant / James Harden</p>
        <p className="metric-stat">3 {t.titlesEach} · 2010-11 to 2025-26</p>
      </div>
    </div>
  );
}