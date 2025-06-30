import { mergeConfig } from 'vite';

export default (config) => {
  return mergeConfig(config, {
    server: {
      allowedHosts: ['content.kingswindowtint.com', 'localhost']
    }
  });
};