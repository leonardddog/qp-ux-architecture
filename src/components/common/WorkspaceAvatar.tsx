interface WorkspaceAvatarProps {
  label?: string;
  bg?: string;
  pool?: number;
}

export function WorkspaceAvatar({ label = 'W', bg }: WorkspaceAvatarProps) {
  const background = bg ?? 'var(--wu-chart-qualitative-11)';

  return (
    <span
      aria-hidden="true"
      style={{
        width: 20,
        height: 20,
        minWidth: 20,
        minHeight: 20,
        borderRadius: 2,
        background: background,
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
