import { WuHeading, WuText, WuCard, WuButton } from '@npm-questionpro/wick-ui-lib';
import { SectionHeader } from '@/components/common/SectionHeader';

export default function Interviews() {
  return (
    <div className="flex flex-col">
      <SectionHeader
        title="Interviews"
        actions={
          <WuButton variant="primary" Icon={<span className="wm-add" aria-hidden="true" />}>
            New interview
          </WuButton>
        }
      />
      <div className="mx-auto w-full max-w-5xl space-y-6 px-6 py-6">
        <WuText size="md">
          Plan, conduct, and review user interviews. This is a placeholder for the interviews view.
        </WuText>

        <WuCard>
          <div className="p-6">
            <WuHeading size="sm">No interviews yet</WuHeading>
            <WuText size="sm" className="mt-1 text-[var(--wu-color-gray-subtle)]">
              Scheduled interviews and findings will appear here.
            </WuText>
          </div>
        </WuCard>
      </div>
    </div>
  );
}
