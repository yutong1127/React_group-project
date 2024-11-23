import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
    },
    define: {
        // 添加这个来打印环境变量
        __API_URL__: JSON.stringify(process.env.VITE_API_BASE_URL),
    },
});
