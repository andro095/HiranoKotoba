import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            jsxImportSource: "@emotion/react",
            babel: {
                plugins: ["@emotion/babel-plugin"],
            }
        }),
    ],
    resolve: {
        alias: {
            "@assets": path.resolve(__dirname, "./src/assets"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@enums": path.resolve(__dirname, "./src/enums"),
            "@helpers": path.resolve(__dirname, "./src/helpers"),
            "@hooks": path.resolve(__dirname, "./src/hooks"),
            "@interfaces": path.resolve(__dirname, "./src/interfaces"),
            "@locale": path.resolve(__dirname, "./src/locale"),
            "@mfirebase": path.resolve(__dirname, "./src/mfirebase"),
            "@private": path.resolve(__dirname, "./src/private"),
            "@public": path.resolve(__dirname, "./src/public"),
            "@router": path.resolve(__dirname, "./src/router"),
            "@store": path.resolve(__dirname, "./src/store"),
            "@theme": path.resolve(__dirname, "./src/theme"),
        }
    },
    server: {
        open:
            process.env.BROWSER='/Applications/Microsoft\ Edge.app/Contents/MacOS/Microsoft\ Edge'
    }
})
