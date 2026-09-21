import { WuHeading, WuText, WuCard, WuButton } from '@npm-questionpro/wick-ui-lib';
import { SectionHeader } from '@/components/common/SectionHeader';

export default function Diaries() {
  return (
    <div className="flex flex-col">
      <SectionHeader
        title="Diaries"
        actions={
          <WuButton variant="primary" Icon={<span className="wm-add" aria-hidden="true" />}>
            New diary entry
          </WuButton>
        }
      />
      <div className="mx-auto w-full max-w-5xl space-y-6 px-6 py-6">
        <WuText size="md">
          Collect and review diary studies. This is a placeholder for the diaries view.
        </WuText>

        <WuCard>
          <div className="p-6">
            <WuHeading size="sm">No diary entries yet</WuHeading>
            <WuText size="sm" className="mt-1 text-[var(--wu-color-gray-subtle)]">
              Participant entries and observations will appear here.
            </WuText>
          </div>
        </WuCard>
      </div>
    </div>
  );
}
