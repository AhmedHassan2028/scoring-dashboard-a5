import { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { scoringLeaders, titlesPerPlayer } from '../data/nba-scoring-champs';

const playerColors = {
  'Kevin Durant': '#1648d1',
  'James Harden': '#db1f1f',
  'Russell Westbrook': '#1caa50',
  'Joel Embiid': '#882cdf',
  'Stephen Curry': '#e7ae06',
  'Luka Doncic': '#089abf',
  'Carmelo Anthony': '#ea580c',
  'Shai Gilgeous-Alexander': '#d32171',
};

//Claude made this function to display data on hover
function CustomTooltip({ active, payload, titleWord, titlesWord }) {
  if (!active || !payload || !payload.length) return null;
  const point = payload[0].payload;
  const label = point.titles !== 1 ? titlesWord : titleWord;
  return (
    <div className="chart-tooltip">
      <strong>{point.player}</strong>
      <div>{point.titles} {label}</div>
    </div>
  );
}

export default function TitlesBarChart({ t, onSelectPlayer, selectedPlayer }) {
  const [sortBy, setSortBy] = useState('titles');

  //Fct to sort the data based on the selected sorting option
  const sortedData = [...titlesPerPlayer].sort((a, b) =>
    sortBy === 'titles'
      ? b.titles - a.titles
      : a.player.localeCompare(b.player)
  );

  //Claude helped with the styling of the chart and sort toggle
  return (
    <div className="chart-card">
      <h3>{t.barChartTitle}</h3>
      <p className="chart-subtitle">{t.barChartSubtitle}</p>

      <div className="sort-toggle">
        <label>
          <input
            type="radio"
            name="sortBy"
            checked={sortBy === 'titles'}
            onChange={() => setSortBy('titles')}
          />
          {t.sortByTitles}
        </label>
        <label>
          <input
            type="radio"
            name="sortBy"
            checked={sortBy === 'alphabetical'}
            onChange={() => setSortBy('alphabetical')}
          />
          {t.sortAlphabetically}
        </label>
      </div>

      <ResponsiveContainer width="100%" height={360}>
        <BarChart
          data={sortedData}
          layout="vertical"
          margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis type="number" allowDecimals={false} />
          <YAxis
            type="category"
            dataKey="player"
            width={150}
            tick={{ fontSize: 13 }}
          />
          <Tooltip content={<CustomTooltip titleWord={t.title} titlesWord={t.titlesWord} />} />
          <Bar
            dataKey="titles"
            radius={[0, 4, 4, 0]}
            onClick={(data) => onSelectPlayer && onSelectPlayer(data.player)}
            cursor="pointer"
          >
            {sortedData.map((entry) => (
              <Cell
                key={entry.player}
                fill={playerColors[entry.player] || '#8cbcf4'}
                opacity={selectedPlayer && entry.player !== selectedPlayer ? 0.4 : 1}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}