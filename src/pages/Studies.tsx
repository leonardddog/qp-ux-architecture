import { WuHeading, WuText, WuCard, WuButton } from '@npm-questionpro/wick-ui-lib';
import { SectionHeader } from '@/components/common/SectionHeader';

export default function Studies() {
  return (
    <div className="flex flex-col">
      <SectionHeader
        title="Studies"
        actions={
          <WuButton variant="primary" Icon={<span className="wm-add" aria-hidden="true" />}>
            New study
          </WuButton>
        }
      />
      <div className="mx-auto w-full max-w-5xl space-y-6 px-6 py-6">
        <WuText size="md">
          All study types in one place. Content behavior for this unified view will be defined
          later.
        </WuText>

        <WuCard>
          <div className="p-6">
            <WuHeading size="sm">No studies yet</WuHeading>
            <WuText size="sm" className="mt-1 text-[var(--wu-color-gray-subtle)]">
              Studies of every type will appear here.
            </WuText>
          </div>
        </WuCard>
      </div>
    </div>
  );
}
