import { defineConfig } from 'vite'
import htmlPurge from 'vite-plugin-purgecss'

export default defineConfig({
    plugins: [
        htmlPurge()
    ]
})