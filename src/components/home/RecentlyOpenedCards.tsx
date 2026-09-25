import { Link } from 'react-router-dom';
import { WuCard, WuHeading } from '@npm-questionpro/wick-ui-lib';
import { latestItems } from '@/data/home';
import type { StudyType } from '@/data/home';
import { studyTypeMeta } from './StudyTypeBadge';

const studyLink: Record<StudyType, string> = {
  'usability-test': '/usability-tests',
  interview: '/interviews',
  'focus-group': '/focus-groups',
  diary: '/diaries',
};

/**
 * Recently opened rows replicating the Figma `Card/Folder` component:
 * fixed 64px horizontal rows — title (14px medium #545e6b) + study-type
 * subtitle (12px #9b9b9b) with a hover-reveal kebab. No icon tile, no chips.
 */
export function RecentlyOpenedCards({ className }: { className?: string }) {
  return (
    <section aria-label="Recently opened" className={['flex min-h-0 flex-col', className ?? ''].join(' ')}>
      <div className="mb-3">
        <WuHeading size="md" className="text-[#1b3380]">
          Recently opened
        </WuHeading>
      </div>
      <div className="thin-scroll flex min-h-0 flex-1 flex-col content-start gap-3 overflow-y-auto overscroll-contain lg:flex-row">
        {latestItems.slice(0, 4).map(item => (
          <Link key={item.id} to={studyLink[item.studyType]} className="group block lg:min-w-0 lg:flex-1">
            <WuCard
              rounded
              className="flex h-[64px] flex-row items-center gap-2 border-[rgba(0,0,0,0.1)] py-[8px] pl-[16px] pr-[8px]"
            >
              <span className="flex min-w-0 flex-1 flex-col gap-[2px]">
                <span className="truncate text-[14px] font-medium leading-4 text-[#545e6b]">
                  {item.title}
                </span>
                <span className="truncate text-[12px] leading-4 text-[#9b9b9b]">
                  {studyTypeMeta[item.studyType].label}
                </span>
              </span>
              <span
                aria-hidden="true"
                className="flex size-6 shrink-0 items-center justify-center text-lg text-[#545e6b] opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
              >
                <span className="wm-more-vert" />
              </span>
            </WuCard>
          </Link>
        ))}
      </div>
    </section>
  );
}
