import type { StudyType } from '@/data/home';

export const studyTypeMeta: Record<StudyType, { label: string; icon: string }> = {
  'usability-test': { label: 'Usability test', icon: 'wm-trackpad-input' },
  interview: { label: 'Interview', icon: 'wm-forum' },
  'focus-group': { label: 'Focus group', icon: 'wm-groups-2' },
  diary: { label: 'Diary', icon: 'wm-clinical-notes' },
};

export function StudyTypeBadge({ type }: { type: StudyType }) {
  const { label, icon } = studyTypeMeta[type];
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-[rgba(27,51,128,0.08)] bg-[rgba(27,51,128,0.04)] px-2 py-0.5 text-xs font-medium text-[#545E6B]">
      <span className={icon} aria-hidden="true" />
      {label}
    </span>
  );
}
