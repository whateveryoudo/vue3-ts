/*
 * @Author: ykx
 * @Date: 2021-05-11 15:08:07
 * @LastEditTime: 2022-04-22 14:28:45
 * @LastEditors: your name
 * @Description:
 * @FilePath: \my-vue-app\vite.config.ts
 */
import { defineConfig, ConfigEnv, loadEnv, type ProxyOptions } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import WindiCSS from "vite-plugin-windicss";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import { generateModifyVars } from "./build/generate/generateModifyVars";
// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv) => {
  // const ROOT = process.cwd(); // 项目根目录
  const IS_PRODUCTION = mode === "production";
  // const { VITE_GLOB_BASE_API } = loadEnv(mode, ROOT);
  // 接口代理设置
  //https://www.jianshu.com/p/ff5ee22b2053
  const PROXY_CONFIG: Record<string, string | ProxyOptions> = {
    '^/api': {
      target: "https://nest-api.buqiyuan.site/api/",
      changeOrigin: true, // 将Origin的来源更改为目标URL
      rewrite: (path) => path.replace(/^\/api/, '')
    },
  };
  return defineConfig({
    plugins: [
      vue(),
      WindiCSS(),
      Components({
        resolvers: [
          AntDesignVueResolver({
            importStyle: IS_PRODUCTION ? "less" : false, // 开发环境设置false，在main全量引入，让vite预构建
          }),
        ],
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src") + "/",
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: generateModifyVars(),
          javascriptEnabled: true,
        },
      },
    },
    server: {
      open: true,
      proxy: PROXY_CONFIG
    },
  });
};
