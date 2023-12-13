// vite.config.js
export default {
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:5000', // Your Express server address
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  };
  