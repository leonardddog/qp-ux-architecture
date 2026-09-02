import type { ReactNode } from 'react';

type SectionHeaderProps = {
  title: string;
  actions?: ReactNode;
  className?: string;
};

export function SectionHeader({ title, actions, className }: SectionHeaderProps) {
  return (
    <header
      className={[
        'flex h-16 shrink-0 items-center justify-between border-b bg-white px-4',
        'border-[rgba(27,51,128,0.08)]',
        className ?? '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <h2 className="truncate text-[18px] font-medium leading-none text-[#545E6B]">{title}</h2>
      {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
    </header>
  );
}
