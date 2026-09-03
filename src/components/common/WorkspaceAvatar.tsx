import { useState } from 'react';

interface WorkspaceAvatarProps {
  label?: string;
  bg?: string;
  pool?: number;
}

function getRandomQualitative(pool = 9): string {
  const n = Math.floor(Math.random() * pool) + 1;
  return `var(--wu-chart-qualitative-${n})`;
}

export function WorkspaceAvatar({ label = 'W', bg, pool = 9 }: WorkspaceAvatarProps) {
  const [randomBg] = useState(() => bg ?? getRandomQualitative(pool));

  return (
    <span
      aria-hidden="true"
      style={{
        width: 20,
        height: 20,
        minWidth: 20,
        minHeight: 20,
        borderRadius: 2,
        background: randomBg,
        color: '#fff',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 12,
        fontWeight: 400,
        lineHeight: 1,
        flexShrink: 0,
      }}
    >
      {label}
    </span>
  );
}
