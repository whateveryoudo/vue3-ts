<!--
 * @Author: ykx
 * @Date: 2021-05-11 17:13:32
 * @LastEditTime: 2022-05-26 14:57:29
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \my-vue-app\src\views\login\index.vue
-->
<template>
  <div class="ydesign-login">
    <div class="ydesign-login-form">
      <header class="login-title">
        <img src="~@/assets/logo.png" width="45" />
        <h1 class="ml-2 font-bold mb-0 text-3xl">
          {{ $config.appName }}
        </h1>
      </header>
      <a-form :model="formState" v-bind="formItemLayout" @finish="onFinish">
        <a-form-item
          label="用户名"
          name="username"
          :rules="[{ required: true, message: '请输入用户名' }]"
        >
          <a-input
            v-model:value="formState.username"
            placeholder="rootadmin"
          >
            <template #prefix><UserOutlined type="user" /></template>
          </a-input>
        </a-form-item>
        <a-form-item
          label="密码"
          name="password"
          :rules="[{ required: true, message: '请输入密码' }]"
        >
          <a-input type="password" placeholder="123456" v-model:value="formState.password">
            <template #prefix><LockOutlined type="user" /></template>
          </a-input>
        </a-form-item>
        <a-form-item
          name="verifyCode"
          label="图形验证码"
          :rules="[{ required: true, message: '请输入验证码' }]"
        >
          <a-input
            placeholder="请输入验证码"
            v-model:value="formState.verifyCode"
          >
            <template #prefix><SafetyOutlined type="user" /></template>
            <template #suffix>
              <img
                :src="verifySrc"
                @click="setVerify"
                alt=""
                class="absolute right-0 h-full cursor-pointer"
              />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item v-bind="formItemLayout1">
          <a-button type="primary" html-type="submit" :loading="loading"
            >登录</a-button
          >
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import { message, Modal } from "ant-design-vue";
import { getImageCaptcha } from "@/api/login";
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '@/store/modules/user'
import {
  UserOutlined,
  LockOutlined,
  SafetyOutlined,
} from "@ant-design/icons-vue";
interface FormState {
  username: string;
  password: string;
  verifyCode: string;
  captchaId: string;
}
export default defineComponent({
  components: { UserOutlined, LockOutlined, SafetyOutlined },
  setup() {
    const verifySrc = ref("");
    const loading = ref(false);
    const route = useRoute();
  const router = useRouter();
    const userStore = useUserStore();
    const formState = reactive<FormState>({
      username: "",
      password: "",
      verifyCode: "",
      captchaId: ''
    });
    const setVerify = async () => {
      const { img, id } = await getImageCaptcha({ width: 100, height: 50 });
      verifySrc.value = img;
      formState.captchaId = id;
    };
    // 初始获取验证码
    setVerify();
    const onFinish = async () => {
      loading.value = true;
      message.loading("登录中...");
      try {
        await userStore.login(formState).finally(() => {
          loading.value = false;
          message.destroy();
        });
        message.success('登录成功')
        setTimeout (() => {router.replace((route.query.redirect as string) ?? '/')})
      } catch (e:any) {
        Modal.error({
          title: '系统提示',
          content: e.message
        });
        setVerify();
      }
    };
    return {
      setVerify,
      verifySrc,
      formState,
      loading,
      onFinish,
      formItemLayout: {
        labelCol: { span: 6 },
        wrapperCol: { span: 16 },
      },
      formItemLayout1: {
        wrapperCol: { offset: 6, span: 16 },
      },
    };
  },
});
</script>
<style lang="less" scoped>
@prefix-cls: ~"@{namespace}-login";
.@{prefix-cls} {
  background-image: url(@/assets/login.svg);
  width: 100%;
  height: 100vh;
  background-size: 100%;
  .@{prefix-cls}-form{
    margin-top: 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .login-title{
      display: flex;
      align-content: center;
      margin-bottom: 30px;
    }
    :deep(.ant-form){
      width: 500px;
    }
  }
}
</style>
