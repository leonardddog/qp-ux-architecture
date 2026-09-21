import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Archive from '@/pages/Archive';
import Diaries from '@/pages/Diaries';
import FocusGroups from '@/pages/FocusGroups';
import Interviews from '@/pages/Interviews';
import Settings from '@/pages/Settings';
import Studies from '@/pages/Studies';
import UsabilityTests from '@/pages/UsabilityTests';
import Workspace from '@/pages/Workspace';
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="workspace" element={<Workspace />} />
        <Route path="archive" element={<Archive />} />
        <Route path="usability-tests" element={<UsabilityTests />} />
        <Route path="interviews" element={<Interviews />} />
        <Route path="focus-groups" element={<FocusGroups />} />
        <Route path="diaries" element={<Diaries />} />
        <Route path="studies" element={<Studies />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
