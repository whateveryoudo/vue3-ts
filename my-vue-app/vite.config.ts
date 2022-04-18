/*
 * @Author: ykx
 * @Date: 2021-05-11 15:08:07
 * @LastEditTime: 2022-04-18 16:06:36
 * @LastEditors: your name
 * @Description:
 * @FilePath: \my-vue-app\vite.config.ts
 */
import { defineConfig, ConfigEnv } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import WindiCSS from 'vite-plugin-windicss'
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import { generateModifyVars } from "./build/generate/generateModifyVars";
// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv) => {
  const IS_PRODUCTION = mode === "production";
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
  });
};
