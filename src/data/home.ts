export type StudyKind = 'project' | 'study';
export type StudyType = 'usability-test' | 'interview' | 'focus-group' | 'diary';

export interface LatestItem {
  id: string;
  title: string;
  kind: StudyKind;
  studyType: StudyType;
  lastVisited: string; // ISO
  status: 'draft' | 'live' | 'closed';
  participants?: number;
}

export interface UpcomingEvent {
  id: string;
  title: string;
  studyType: StudyType;
  startsAt: string; // ISO
  endsAt: string; // ISO
}

export interface ActivityEntry {
  id: string;
  date: string; // MMM, DD
  time: string; // HH:mm
  userName: string;
  userInitials: string;
  description: string;
  tags: string[];
  userImage?: string;
}

const now = new Date();

function daysFromNow(days: number, hours = 10): string {
  const d = new Date(now);
  d.setDate(d.getDate() + days);
  d.setHours(hours, 0, 0, 0);
  return d.toISOString();
}

function daysAgo(days: number): string {
  const d = new Date(now);
  d.setDate(d.getDate() - days);
  return d.toISOString();
}

export const latestItems: LatestItem[] = [
  {
    id: 'l1',
    title: 'Checkout flow – Mobile app',
    kind: 'project',
    studyType: 'usability-test',
    lastVisited: daysAgo(0),
    status: 'live',
    participants: 124,
  },
  {
    id: 'l2',
    title: 'Post-purchase diary – Q4',
    kind: 'study',
    studyType: 'diary',
    lastVisited: daysAgo(1),
    status: 'live',
    participants: 42,
  },
  {
    id: 'l3',
    title: 'Shopper interviews – Gen Z',
    kind: 'study',
    studyType: 'interview',
    lastVisited: daysAgo(2),
    status: 'draft',
  },
  {
    id: 'l4',
    title: 'Homepage focus group',
    kind: 'study',
    studyType: 'focus-group',
    lastVisited: daysAgo(3),
    status: 'live',
  },
  {
    id: 'l5',
    title: 'Pricing perception – Interviews',
    kind: 'project',
    studyType: 'interview',
    lastVisited: daysAgo(5),
    status: 'closed',
  },
  {
    id: 'l6',
    title: 'Onboarding diary – Launch cohort',
    kind: 'study',
    studyType: 'diary',
    lastVisited: daysAgo(6),
    status: 'draft',
  },
];

export const upcomingEvents: UpcomingEvent[] = [
  {
    id: 'u1',
    title: 'New search',
    studyType: 'usability-test',
    startsAt: daysFromNow(1, 10),
    endsAt: daysFromNow(1, 11),
  },
  {
    id: 'u2',
    title: 'Power users',
    studyType: 'interview',
    startsAt: daysFromNow(2, 14),
    endsAt: daysFromNow(2, 15),
  },
  {
    id: 'u3',
    title: 'Checkout',
    studyType: 'focus-group',
    startsAt: daysFromNow(3, 9),
    endsAt: daysFromNow(3, 10),
  },
  {
    id: 'u4',
    title: 'Holiday quests',
    studyType: 'diary',
    startsAt: daysFromNow(5, 9),
    endsAt: daysFromNow(5, 17),
  },
];

export const activityLogs: ActivityEntry[] = [
  {
    id: 'a1',
    date: 'Mar, 10',
    time: '10:42',
    userName: 'Sofia R.',
    userInitials: 'SR',
    description: 'added 3 questions to diary "Post-purchase – Q4"',
    tags: ['diary'],
  },
  {
    id: 'a2',
    date: 'Mar, 10',
    time: '09:15',
    userName: 'Diego M.',
    userInitials: 'DM',
    description: 'changed launch date for "Usability test – New search" to Mar 16',
    tags: ['usability-test'],
  },
  {
    id: 'a3',
    date: 'Mar, 09',
    time: '16:30',
    userName: 'Jane D.',
    userInitials: 'JD',
    description: 'created study "Shopper interviews – Gen Z"',
    tags: ['interview'],
  },
  {
    id: 'a4',
    date: 'Mar, 09',
    time: '11:02',
    userName: 'Amir K.',
    userInitials: 'AK',
    description: 'archived project "Pricing perception – Interviews"',
    tags: ['project'],
  },
  {
    id: 'a5',
    date: 'Mar, 08',
    time: '14:20',
    userName: 'Sofia R.',
    userInitials: 'SR',
    description: 'scheduled focus group "Homepage – Checkout"',
    tags: ['focus-group'],
  },
  {
    id: 'a6',
    date: 'Mar, 08',
    time: '09:50',
    userName: 'Diego M.',
    userInitials: 'DM',
    description: 'launched diary quests for "Onboarding – Launch cohort"',
    tags: ['diary'],
  },
  {
    id: 'a7',
    date: 'Mar, 07',
    time: '17:05',
    userName: 'Jane D.',
    userInitials: 'JD',
    description: 'invited 12 participants to "Usability test – Mobile checkout"',
    tags: ['usability-test'],
  },
  {
    id: 'a8',
    date: 'Mar, 07',
    time: '10:11',
    userName: 'Amir K.',
    userInitials: 'AK',
    description: 'updated interview guide for "Power users"',
    tags: ['interview'],
  },
];
