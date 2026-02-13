import sitemap from 'routes/sitemap';

// 1. Top List: Keeps everything EXCEPT the settings/profile item
export const topListData = sitemap.filter((item) => {
  const id = item.id;
  // We exclude 'settings' because it goes to the bottom profile section
  if (id === 'settings' || id === 'authentication') {
    return false;
  }
  return true;
});

// 2. Bottom List: (Optional) Any extra links like "Help" or "Logout"
export const bottomListData = sitemap.filter((item) => {
  const id = item.id;
  if (id === 'authentication') {
    return true;
  }
  return false;
});

// 3. Profile Item: MUST match the ID 'settings' from your sitemap.ts
export const profileListData = sitemap.find((item) => item.id === 'settings');