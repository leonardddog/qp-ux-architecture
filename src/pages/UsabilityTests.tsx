import { WuHeading, WuText, WuCard, WuButton } from '@npm-questionpro/wick-ui-lib';
import { SectionHeader } from '@/components/common/SectionHeader';

export default function UsabilityTests() {
  return (
    <div className="flex flex-col">
      <SectionHeader
        title="Usability tests"
        actions={
          <WuButton variant="primary" Icon={<span className="wm-add" aria-hidden="true" />}>
            New test
          </WuButton>
        }
      />
      <div className="mx-auto w-full max-w-5xl space-y-6 px-6 py-6">
        <WuText size="md">
          Plan, run, and review usability tests. This is a placeholder for the usability testing
          view.
        </WuText>

        <WuCard>
          <div className="p-6">
            <WuHeading size="sm">No usability tests yet</WuHeading>
            <WuText size="sm" className="mt-1 text-[var(--wu-color-gray-subtle)]">
              Created tests and recent results will appear here.
            </WuText>
          </div>
        </WuCard>
      </div>
    </div>
  );
}
