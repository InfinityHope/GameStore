import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    resolve: {
        alias: {
            '@/': path.resolve(__dirname, './src'),
            '@/components': path.resolve(__dirname, '././src/components'),
            '@/ui': path.resolve(__dirname, './src/components/UI'),
            '@/pages': path.resolve(__dirname, './src/pages'),
            '@/assets': path.resolve(__dirname, './src/assets'),
            '@/context': path.resolve(__dirname, './src/context'),
            '@/hoc': path.resolve(__dirname, './src/hoc'),
            '@/hooks': path.resolve(__dirname, './src/hooks'),
            '@/layouts': path.resolve(__dirname, './src/layouts'),
            '@/models': path.resolve(__dirname, './src/models'),
            '@/redux': path.resolve(__dirname, './src/redux'),
            '@/reduxReducers': path.resolve(__dirname, './src/redux/reducers'),
            '@/reduxApi': path.resolve(__dirname, './src/redux/api'),
            '@/utils': path.resolve(__dirname, './src/utils'),
            '@/data': path.resolve(__dirname, './src/data'),
        },
    },
})

// [
// { find: '@', replacement: path.resolve(__dirname, 'src') },
//     { find: '@/components', replacement: path.resolve(__dirname, 'src/components') },
//     { find: '@/ui', replacement: path.resolve(__dirname, 'src/components/UI') },
//     { find: '@/pages', replacement: path.resolve(__dirname, 'src/pages') },
//     { find: '@/assets', replacement: path.resolve(__dirname, 'src/assets') },
//     { find: '@/context', replacement: path.resolve(__dirname, 'src/context') },
//     { find: '@/hoc', replacement: path.resolve(__dirname, 'src/hoc') },
//     { find: '@/hooks', replacement: path.resolve(__dirname, 'src/hooks') },
//     { find: '@/layouts', replacement: path.resolve(__dirname, 'src/layouts') },
//     { find: '@/models', replacement: path.resolve(__dirname, 'src/models') },
//     { find: '@/redux', replacement: path.resolve(__dirname, 'src/redux') },
//     {
//         find: '@/redux-reducers',
//         replacement: path.resolve(__dirname, 'src/redux/reducers'),
//     },
//     { find: '@/redux-api', replacement: path.resolve(__dirname, 'src/redux/api') },
//     { find: '@/utils', replacement: path.resolve(__dirname, 'src/utils') },
// ],
