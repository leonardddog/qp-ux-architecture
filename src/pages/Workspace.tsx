import { WuButton, WuCard, WuHeading, WuText } from '@npm-questionpro/wick-ui-lib';
import { SectionHeader } from '@/components/common/SectionHeader';

export default function Workspace() {
  return (
    <div className="flex flex-col">
      <SectionHeader title="Workspaces" actions={<WuButton variant="primary">New project</WuButton>} />
      <div className="mx-auto w-full max-w-5xl space-y-6 px-6 py-6">
        <WuText size="md">Manage your workspace projects and team activity.</WuText>

        <div className="grid gap-6 md:grid-cols-2">
          <WuCard>
            <div className="p-6 space-y-3">
              <WuHeading size="sm">Overview</WuHeading>
              <WuText size="sm" className="text-[var(--wu-color-gray-subtle)]">
                Track active projects and recent updates in this workspace.
              </WuText>
              <div className="pt-2">
                <WuButton variant="outlined" size="sm">
                  View projects
                </WuButton>
              </div>
            </div>
          </WuCard>

          <WuCard>
            <div className="p-6 space-y-3">
              <WuHeading size="sm">Team</WuHeading>
              <WuText size="sm" className="text-[var(--wu-color-gray-subtle)]">
                Collaborate with workspace members and manage access.
              </WuText>
              <div className="pt-2">
                <WuButton variant="secondary" size="sm">
                  Invite member
                </WuButton>
              </div>
            </div>
          </WuCard>
        </div>

        <WuCard>
          <div className="p-6">
            <WuHeading size="sm">Recent activity</WuHeading>
            <WuText size="sm" className="mt-1 text-[var(--wu-color-gray-subtle)]">
              No recent activity. Projects and updates will appear here.
            </WuText>
          </div>
        </WuCard>
      </div>
    </div>
  );
}
