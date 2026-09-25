import { Link } from 'react-router-dom';
import { WuCard, WuHeading, WuText } from '@npm-questionpro/wick-ui-lib';
import { latestItems } from '@/data/home';
import type { LatestItem, StudyType } from '@/data/home';
import { StudyTypeBadge } from './StudyTypeBadge';

const kindLabel: Record<LatestItem['kind'], string> = {
  project: 'Project',
  study: 'Study',
};

const studyLink: Record<StudyType, string> = {
  'usability-test': '/usability-tests',
  interview: '/interviews',
  'focus-group': '/focus-groups',
  diary: '/diaries',
};

function formatRelative(iso: string): string {
  const d = new Date(iso);
  const diff = Date.now() - d.getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return 'Today';
  if (days === 1) return 'Yesterday';
  return `${days}d ago`;
}

export function LatestSection() {
  return (
    <section>
      <div className="mb-3">
        <WuHeading size="md">Recently opened</WuHeading>
        <WuText size="sm" className="mt-1 text-[var(--wu-color-gray-subtle)]">
          Recent items you’ve opened — quick resume where you left off.
        </WuText>
      </div>
      <div className="grid grid-cols-2 gap-[var(--home-gap-sm)] sm:grid-cols-3 xl:grid-cols-5">
        {latestItems.slice(0, 5).map(item => {
          const isFolder = item.kind === 'project';
          return (
            <Link key={item.id} to={studyLink[item.studyType]} className="block">
              <WuCard className="flex h-full flex-col gap-3 p-4 hover:shadow-sm hover:border-[rgba(27,51,128,0.16)] transition-shadow">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[rgba(27,51,128,0.04)] text-[#1B3380]">
                  <span className={isFolder ? 'wm-folder' : 'wm-description'} aria-hidden="true" />
                </div>
                <span className="line-clamp-2 min-h-[2.5em] text-sm font-medium leading-5 text-[#1B3380]">
                  {item.title}
                </span>
                <span className="flex flex-wrap items-center gap-2 text-xs">
                  <StudyTypeBadge type={item.studyType} />
                  <span className="rounded-full bg-white px-2 py-0.5 text-xs text-[#545E6B] border border-[rgba(27,51,128,0.08)]">
                    {kindLabel[item.kind]}
                  </span>
                </span>
                <span className="text-xs text-[var(--wu-color-gray-subtle)]">
                  {formatRelative(item.lastVisited)}
                </span>
              </WuCard>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
