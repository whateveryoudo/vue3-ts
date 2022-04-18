<!--
 * @Author: ykx
 * @Date: 2021-05-11 17:13:32
 * @LastEditTime: 2022-04-18 17:35:57
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
      <a-form :model="formState" v-bind="formItemLayout">
        <a-form-item
          label="用户名"
          :rules="[{ required: true, message: '请输入用户名' }]"
        >
          <a-input
            placeholder="请输入用户名"
            v-model:value="formState.username"
          >
            <template #prefix><user-outlined type="user" /></template>
          </a-input>
        </a-form-item>
        <a-form-item
          label="密码"
          :rules="[{ required: true, message: '请输入密码' }]"
        >
          <a-input
            placeholder="请输入密码"
            v-model:value="formState.password"
          />
        </a-form-item>
         <a-form-item
          label="图形验证码"
          :rules="[{ required: true, message: '请输入' }]"
        >
          <a-input
            placeholder="请输入密码"
            v-model:value="formState.password"
          />
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { UserOutlined, LockOutlined, SafetyOutlined } from '@ant-design/icons-vue';
interface FormState {
  username: String;
  password: String;
  verifyCode: String;
}
export default defineComponent({
  setup() {
    const formState = reactive<FormState>({
      username: "",
      password: "",
      verifyCode: "",
    });
    return {
      UserOutlined,
      LockOutlined,
      SafetyOutlined,
      formState,
      formItemLayout: {
        labelCol: { span: 6 },
        wrapperCol: { span: 16 },
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
    }
    :deep(.ant-form){
      width: 400px;
    }
  }
}
</style>
