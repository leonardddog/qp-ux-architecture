import { WuButton, WuHeading } from '@npm-questionpro/wick-ui-lib';
import { Link } from 'react-router-dom';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ActivitySection } from '@/components/home/ActivitySection';
import { RecentlyOpenedCards } from '@/components/home/RecentlyOpenedCards';
import { UpcomingEventsList } from '@/components/home/UpcomingSection';

function PlaceholderSection({
  title,
  className,
  fullWidth,
}: {
  title: string;
  className?: string;
  fullWidth?: boolean;
}) {
  return (
    <section aria-label={title} className={['flex min-h-0 flex-col', className ?? ''].join(' ')}>
      <div className="mb-3">
        <WuHeading size="md" className="text-[#1b3380]">
          {title}
        </WuHeading>
      </div>
      <div
        className={[
          'flex-1 rounded-md border border-solid border-[rgba(27,51,128,0.16)] bg-[#dcecfa] p-6 text-sm text-[var(--wu-color-gray-subtle)]',
          fullWidth ? 'w-full' : 'w-[80%]',
        ].join(' ')}
      >
        Placeholder
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-full flex-col lg:h-full lg:overflow-hidden">
      <SectionHeader
        title="Your research at a glance"
        actions={
          <div className="flex items-center gap-2">
            <Link to="/workspace">
              <WuButton variant="secondary">Browse templates</WuButton>
            </Link>
            <Link to="/usability-tests">
              <WuButton variant="primary">New study</WuButton>
            </Link>
          </div>
        }
      />

      <div className="flex w-full flex-1 flex-col px-[var(--home-gutter)] pt-[var(--home-gutter)] lg:min-h-0">
        <div className="grid flex-1 gap-[var(--home-gutter)] lg:min-h-0 lg:grid-cols-[minmax(0,1fr)_clamp(300px,30%,350px)] min-[1500px]:grid-cols-[minmax(0,1fr)_clamp(300px,30%,403px)] min-[1700px]:grid-cols-[minmax(0,1fr)_clamp(300px,30%,560px)]">
          <div className="thin-scroll flex min-w-0 flex-col gap-[var(--home-gutter)] lg:min-h-0 lg:overflow-auto lg:overscroll-contain lg:pb-[var(--home-gutter)]">
            <RecentlyOpenedCards className="lg:h-[33%] lg:shrink-0" />
            <div className="grid min-w-0 flex-1 grid-cols-2 gap-[var(--home-gutter)] lg:min-h-0">
              <section aria-label="Upcoming events" className="flex min-h-0 flex-col">
                <div className="mb-3">
                  <WuHeading size="md" className="text-[#1b3380]">
                    Upcoming events
                  </WuHeading>
                </div>
                <div className="min-h-0 flex-1">
                  <UpcomingEventsList />
                </div>
              </section>
              <PlaceholderSection title="Another section" fullWidth />
            </div>
          </div>
          <div className="flex min-w-0 gap-[var(--home-gutter)] lg:min-h-0">
            <div aria-hidden="true" className="hidden w-px shrink-0 self-stretch bg-[rgba(27,51,128,0.08)] lg:block" />
            <div className="flex min-w-0 flex-1 flex-col lg:min-h-0">
              <ActivitySection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
