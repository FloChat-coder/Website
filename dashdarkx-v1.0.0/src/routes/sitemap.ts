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
    icon: 'mingcute:plugin-2-fill',
    items: [
      {
        name: 'Google Sheets',
        pathName: 'google-sheets',
        path: '/integrations/google-sheets',
      },
      {
        name: 'Drive & Docs',
        pathName: 'drive-docs',
        path: '/integrations/drive',
      },
    ],
  },
  {
    id: 'ai-settings',
    subheader: 'AI Configuration',
    icon: 'mingcute:ai-fill',
    items: [
      {
        name: 'System Prompt',
        pathName: 'system-prompt',
        path: '/ai/prompt',
      },
      {
        name: 'API Keys',
        pathName: 'api-keys',
        path: '/ai/api-keys',
      },
    ],
  },
  {
    id: 'leads',
    subheader: 'Leads & Chats',
    path: '/leads',
    icon: 'mingcute:chat-4-fill',
  },
  {
    id: 'analytics',
    subheader: 'Analytics',
    path: '/analytics',
    icon: 'mingcute:chart-bar-fill',
  },
  {
    id: 'widget',
    subheader: 'Widget Customization',
    path: '/widget',
    icon: 'mingcute:palette-fill',
  },
  {
    id: 'settings', // MATCHES sidebarListData.ts
    subheader: 'Account Settings',
    path: '/settings',
    icon: 'material-symbols:settings-rounded',
  },
];

export default sitemap;