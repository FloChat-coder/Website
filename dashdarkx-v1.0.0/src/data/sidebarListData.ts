import sitemap from 'routes/sitemap';

export const topListData = sitemap.filter((item) => {
  const id = item.id;
  // Keep everything in the top list EXCEPT 'settings'
  if (id === 'settings') {
    return false;
  }
  return true;
});

// FIX: Removed 'item' argument since it wasn't being used
export const bottomListData = sitemap.filter(() => {
  // Currently empty, but you can add 'help' or 'logout' here later
  return false;
});

// This MUST match the ID used in sitemap.ts
export const profileListData = sitemap.find((item) => item.id === 'settings');