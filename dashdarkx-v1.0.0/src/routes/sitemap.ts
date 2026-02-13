import paths from './paths';

export interface SubMenuItem {
  name: string;
  pathName: string;
  path: string;
  active?: boolean;
}

export interface MenuItem {
  id: string;
  subheader: string;
  path?: string;
  icon?: string;
  avatar?: string;
  active?: boolean;
  items?: SubMenuItem[];
}

const sitemap: MenuItem[] = [
  {
    id: 'dashboard',
    subheader: 'Dashboard',
    path: '/',
    icon: 'mingcute:home-1-fill',
    active: true,
  },
  {
    id: 'integrations',
    subheader: 'Integrations',
    path: '#!', // Fallback path prevents crash if logic fails
    icon: 'mingcute:plugin-2-fill',
    items: [
      {
        name: 'Google Sheets',
        pathName: 'google-sheets',
        path: paths.integrations.googleSheets,
      },
      {
        name: 'Drive & Docs',
        pathName: 'drive-docs',
        path: paths.integrations.drive,
      },
    ],
  },
  {
    id: 'ai-settings',
    subheader: 'AI Configuration',
    path: '#!',
    icon: 'mingcute:ai-fill',
    items: [
      {
        name: 'System Prompt',
        pathName: 'system-prompt',
        path: paths.ai.prompt,
      },
      {
        name: 'API Keys',
        pathName: 'api-keys',
        path: paths.ai.apiKeys,
      },
    ],
  },
  {
    id: 'leads',
    subheader: 'Leads & Chats',
    path: '#!',
    icon: 'mingcute:chat-4-fill',
  },
  {
    id: 'widget',
    subheader: 'Widget Design',
    path: '#!',
    icon: 'mingcute:palette-fill',
  },
  {
    id: 'settings', // Matches logic in sidebarListData.ts
    subheader: 'Account Settings',
    path: '#!',
    icon: 'material-symbols:settings-rounded',
  },
];

export default sitemap;