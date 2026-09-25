import { WuChip, WuHeading, WuText } from '@npm-questionpro/wick-ui-lib';
import { upcomingEvents } from '@/data/home';
import { DateBadge } from './DateBadge';
import { studyTypeMeta } from './StudyTypeBadge';

function formatTimeRange(startIso: string, endIso: string): string {
  const s = new Date(startIso);
  const e = new Date(endIso);
  const day = s.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  const sh = s.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  const eh = e.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  return `${day} · ${sh} – ${eh}`;
}

export function UpcomingEventsList() {
  return (
    <div className="divide-y divide-[rgba(27,51,128,0.08)]">
      {upcomingEvents.map(ev => (
        <div key={ev.id} className="flex items-center gap-4 py-4">
          <DateBadge date={ev.startsAt} />
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-normal text-[#1b87e6]">{ev.title}</div>
            <div className="mt-1 flex flex-wrap items-center gap-2">
              <WuChip variant="primary" size="sm">
                <span className={studyTypeMeta[ev.studyType].icon} aria-hidden="true" />
                {studyTypeMeta[ev.studyType].label}
              </WuChip>
              <span className="text-xs text-[var(--wu-color-gray-subtle)]">
                {formatTimeRange(ev.startsAt, ev.endsAt)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function UpcomingSection() {
  return (
    <section>
      <div className="mb-3">
        <WuHeading size="md">Upcoming</WuHeading>
        <WuText size="sm" className="mt-1 text-[var(--wu-color-gray-subtle)]">
          Scheduled sessions and diary launches — never miss a study.
        </WuText>
      </div>
      <UpcomingEventsList />
    </section>
  );
}
