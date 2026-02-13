export const rootPaths = {
  root: '/',
  pagesRoot: 'pages',
  errorRoot: 'error',
};

export default {
  dashboard: `/${rootPaths.pagesRoot}/dashboard`,
  
  // Internal App Paths
  integrations: {
    googleSheets: `/${rootPaths.pagesRoot}/integrations/google-sheets`,
    drive: `/${rootPaths.pagesRoot}/integrations/drive`,
  },
  ai: {
    prompt: `/${rootPaths.pagesRoot}/ai/prompt`,
    apiKeys: `/${rootPaths.pagesRoot}/ai/api-keys`,
  },

  // ADDED BACK: External Auth Paths (Fixes the crash)
  login: 'https://flochat-ocya.onrender.com/signin', 
  signup: 'https://flochat-ocya.onrender.com/register', 

  404: `/${rootPaths.errorRoot}/404`,
};