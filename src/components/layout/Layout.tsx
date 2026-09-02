import { Outlet, Link, useLocation } from 'react-router-dom';
import {
  WuAppHeader,
  WuFooter,
  WuSidebar,
  WuSidebarContent,
  WuSidebarFooter,
  WuSidebarGroup,
  WuSidebarItem,
  WuSidebarMenu,
} from '@npm-questionpro/wick-ui-lib';

const categories = [
  {
    name: 'UX Architecture',
    logo: 'wm-home',
    products: [
      { name: 'Home', link: '/', icon: 'wm-home' },
      { name: 'About', link: '/about', icon: 'wc-analytics' },
    ],
  },
  {
    name: 'Resources',
    logo: 'wc-document',
    products: [{ name: 'Docs', link: 'https://wick-ui.questionpro.com', icon: 'wc-document' }],
  },
];

const navItems = [
  { to: '/', label: 'Home', icon: 'wm-home' },
  { to: '/about', label: 'About', icon: 'wc-analytics' },
] as const;

export function Layout() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col">
      <WuAppHeader
        productName="QuestionPro UX"
        categories={categories}
        user={{
          profile: {
            title: 'Design Team',
            subtitle: 'design@questionpro.com',
            initials: 'DT',
          },
        }}
        onLogout={() => console.log('logout')}
      />

      {/* Sidebar + content row: sidebar and footer live at the same visual level (footer is inside the inset beside the sidebar, not full-width below it) */}
      <div className="flex flex-1 min-h-0">
        <WuSidebar
          defaultOpen
          Sidebar={
            <>
              <WuSidebarContent>
                <WuSidebarGroup label="Navigation">
                  <WuSidebarMenu>
                    {navItems.map(item => (
                      <WuSidebarItem
                        key={item.to}
                        Icon={<span className={item.icon} aria-hidden="true" />}
                        isActive={location.pathname === item.to}
                      >
                        <Link to={item.to}>{item.label}</Link>
                      </WuSidebarItem>
                    ))}
                  </WuSidebarMenu>
                </WuSidebarGroup>

                <WuSidebarGroup label="Resources">
                  <WuSidebarMenu>
                    <WuSidebarItem Icon={<span className="wc-document" aria-hidden="true" />}>
                      <a href="https://wick-ui.questionpro.com" target="_blank" rel="noreferrer">
                        WickUI Docs
                      </a>
                    </WuSidebarItem>
                    <WuSidebarItem Icon={<span className="wc-analytics" aria-hidden="true" />}>
                      <a href="https://questionpro.com" target="_blank" rel="noreferrer">
                        QuestionPro
                      </a>
                    </WuSidebarItem>
                  </WuSidebarMenu>
                </WuSidebarGroup>
              </WuSidebarContent>

              <WuSidebarFooter>
                <WuSidebarMenu>
                  <WuSidebarItem
                    Icon={<span className="wm-archive" aria-hidden="true" />}
                    isActive={location.pathname === '/archive'}
                  >
                    <Link to="/archive">Archive</Link>
                  </WuSidebarItem>
                  <WuSidebarItem
                    Icon={<span className="wm-settings" aria-hidden="true" />}
                    isActive={location.pathname === '/settings'}
                  >
                    <Link to="/settings">Settings</Link>
                  </WuSidebarItem>
                </WuSidebarMenu>
              </WuSidebarFooter>
            </>
          }
        >
          {/* Inset: single header per page (SectionHeader h-16 px-4 border rgba) + content + footer — no duplicate toolbar */}
          <div className="flex min-h-0 flex-1 flex-col bg-[var(--wu-bg)]">
            <main className="flex-1 overflow-auto">
              <Outlet />
            </main>

            <WuFooter>
              <div>
                <span>QuestionPro UX · Information architecture © {new Date().getFullYear()}</span>
              </div>
            </WuFooter>
          </div>
        </WuSidebar>
      </div>
    </div>
  );
}
