import { useState, useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { scoringLeaders } from '../data/nba-scoring-champs';

//Claude made this function to display data on hover
function CustomTooltip({ active, payload, label, ppgUnit }) {
  if (!active || !payload || !payload.length) return null;
  const point = payload[0].payload;
  return (
    <div className="chart-tooltip">
      <strong>{label}</strong>
      <div>{point.player} ({point.team})</div>
      <div>{point.ppg} {ppgUnit}</div>
    </div>
  );
}

export default function ScoringLineChart({ t }) {
  const [range, setRange] = useState([0, scoringLeaders.length - 1]);

  const visibleData = useMemo(
    () => scoringLeaders.slice(range[0], range[1] + 1),
    [range]
  );

  const handleStartChange = (e) => {
    const value = Math.min(Number(e.target.value), range[1]);
    setRange([value, range[1]]);
  };

  const handleEndChange = (e) => {
    const value = Math.max(Number(e.target.value), range[0]);
    setRange([range[0], value]);
  };

  //Claude helped with the styling of the chart and range sliders
  return (
    <div className="chart-card">
      <h3>{t.lineChartTitle}</h3>
      <p className="chart-subtitle">{t.lineChartSubtitle}</p>

      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={visibleData} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="season" angle={-45} textAnchor="end" height={60} />
          <YAxis domain={[25, 37]} tickFormatter={(v) => `${v} ${t.ppgUnit}`} />
          <Tooltip content={<CustomTooltip ppgUnit={t.ppgUnit} />} />
          <Line
            type="monotone"
            dataKey="ppg"
            stroke="#1d4ed8"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="range-slider">
        <label>
          {t.from}: {scoringLeaders[range[0]].season}
          <input
            type="range"
            min={0}
            max={scoringLeaders.length - 1}
            value={range[0]}
            onChange={handleStartChange}
          />
        </label>
        <label>
          {t.to}: {scoringLeaders[range[1]].season}
          <input
            type="range"
            min={0}
            max={scoringLeaders.length - 1}
            value={range[1]}
            onChange={handleEndChange}
          />
        </label>
      </div>
    </div>
  );
}