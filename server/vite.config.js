// vite.config.js
// vite.config.js
export default {
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:3000', // Your Express server's address
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  };
  