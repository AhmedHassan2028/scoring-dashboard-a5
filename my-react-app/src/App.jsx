import './App.css'
import ScoringLineChart from './components/line-chart';
import MetricCards from './components/metric-cards';
import TitlesBarChart from './components/bar-chart';
import { useState } from 'react';
import { translations } from './translations';

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [language, setLanguage] = useState('en');
  const t = translations[language];

  return (
    <>
    <div className="app">
      <header className="app-header">
        <h1>{t.dashboardTitle}</h1>
        <div className="language-toggle">
          <button
            className={language === 'en' ? 'active' : ''}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
          <button
            className={language === 'fr' ? 'active' : ''}
            onClick={() => setLanguage('fr')}
          >
            FR
          </button>
        </div>
      </header>

      <main className="app-main">
        <MetricCards t={t} />
        <ScoringLineChart t={t} />
        <TitlesBarChart
          t={t}
          selectedPlayer={selectedPlayer}
          onSelectPlayer={setSelectedPlayer}
        />
      </main>
    </div>
    </>
  )
}

export default App