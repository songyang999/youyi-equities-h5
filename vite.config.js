import { defineConfig } from 'vite'
import path from 'path'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from '@vant/auto-import-resolver'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'


// https://vitejs.dev/config/
export default defineConfig(() => {
    const additionalData = '@import "~/styles/variable.scss";'
    const config = {
        plugins: [
            uni(),
            AutoImport({
                imports: ["vue"],
                resolvers: [VantResolver()],
            }),
            Components({
                resolvers: [VantResolver()],
            }),
            /** svg 图标配置 */
            createSvgIconsPlugin({
                iconDirs: [path.resolve(process.cwd(), "src/assets/svg")],
                symbolId: 'icon-[dir]-[name]'
            })
        ],
        /**路径别名配置 */
        resolve: {
            alias: {
                '@': path.join(__dirname, 'src'),
                '~': path.resolve(__dirname, './src')
            }
        },
        css: {
            preprocessorOptions: {
                scss: { charset: false, additionalData },
            },
        },
        server: {
            proxy: {
                '/api': {
                    target: 'https://quanyi.xinruivr.com', // 接口地址
                    changeOrigin: true, //跨域
                    rewrite: (path) => path.replace(/^\/api/, '')
                },
            }
        }
    }
    return config
})
