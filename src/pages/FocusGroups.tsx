import { WuHeading, WuText, WuCard, WuButton } from '@npm-questionpro/wick-ui-lib';
import { SectionHeader } from '@/components/common/SectionHeader';

export default function FocusGroups() {
  return (
    <div className="flex flex-col">
      <SectionHeader
        title="Focus groups"
        actions={
          <WuButton variant="primary" Icon={<span className="wm-add" aria-hidden="true" />}>
            New focus group
          </WuButton>
        }
      />
      <div className="mx-auto w-full max-w-5xl space-y-6 px-6 py-6">
        <WuText size="md">
          Organize and analyze focus group sessions. This is a placeholder for the focus groups
          view.
        </WuText>

        <WuCard>
          <div className="p-6">
            <WuHeading size="sm">No focus groups yet</WuHeading>
            <WuText size="sm" className="mt-1 text-[var(--wu-color-gray-subtle)]">
              Planned sessions and insights will appear here.
            </WuText>
          </div>
        </WuCard>
      </div>
    </div>
  );
}
