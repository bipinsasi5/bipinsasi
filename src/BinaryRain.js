import React, { useMemo } from 'react';

const BinaryRain = React.memo(() => {
  const columns = useMemo(() => {
    const cols = [];
    const count = 20;
    for (let i = 0; i < count; i++) {
      cols.push({
        id: i,
        left: `${5 + (i / count) * 90}%`,
        delay: `${Math.random() * 12}s`,
        duration: `${10 + Math.random() * 15}s`,
        opacity: 0.08 + Math.random() * 0.12,
        size: 12 + Math.random() * 4,
        chars: Array.from({ length: 25 + Math.floor(Math.random() * 15) }, () =>
          Math.random() > 0.5 ? '1' : '0'
        ).join('\n'),
      });
    }
    return cols;
  }, []);

  return (
    <div className="binary-rain" aria-hidden="true">
      {columns.map(col => (
        <div
          key={col.id}
          className="binary-column"
          style={{
            left: col.left,
            animationDelay: col.delay,
            animationDuration: col.duration,
            opacity: col.opacity,
            fontSize: `${col.size}px`,
          }}
        >
          {col.chars}
        </div>
      ))}
    </div>
  );
});

BinaryRain.displayName = 'BinaryRain';

export default BinaryRain;
