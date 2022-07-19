<template>
  <div class="login-main">
    <vue-particles
      color="#fff"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="2"
      linesColor="#fff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <a-card :bordered="false" class="login-form" style="">
      <img src="../../assets/logo.png" class="logo-image" />
      <div class="login-title-next">注册</div>
      <a-form-model ref="ruleForm" :model="form" :rules="rules">
        <a-form-model-item prop="phoneNumber">
          <a-input
            v-model="form.phoneNumber"
            placeholder="请输入手机号"
            size="large"
          >
            <a-icon slot="prefix" type="mobile" />
          </a-input>
        </a-form-model-item>
        <a-form-model-item prop="verificationCode">
          <a-input
            v-model="form.verificationCode"
            placeholder="请输入验证码"
            size="large"
            @keyup.enter="doRegister"
          >
            <a-icon slot="prefix" type="safety-certificate" />
            <a-button
              type="link"
              slot="suffix"
              :disabled="getButtonDisabled"
              @click="getVerificationCode(60)"
            >
              {{ this.getButtonText }}
            </a-button>
          </a-input>
        </a-form-model-item>
      </a-form-model>
      <a-button
        type="primary"
        size="large"
        block
        :loading="registerLoading"
        @click="doRegister"
        >注册</a-button
      >
      <a-button
        style="padding: 0"
        type="link"
        @click="() => this.$router.push('/login')"
        >返回登录</a-button
      >
      <a-button
        style="padding: 0; float: right"
        type="link"
        @click="() => this.$router.push('/')"
        >返回首页</a-button
      >
    </a-card>
  </div>
</template>

<script>
import { getSmsCode, userRegister } from "@/api/user";

export default {
  data() {
    const validatorPhone = function (rule, value, callback) {
      if (!/^1\d{10}$/.test(value)) {
        callback(new Error("请输入正确的手机号"));
      } else {
        callback();
      }
    };
    return {
      form: {
        phoneNumber: "",
        verificationCode: "",
        uuid: "",
      },
      rules: {
        phoneNumber: [{ validator: validatorPhone, trggier: "blur" }],
        verificationCode: [
          { required: true, message: "请输入验证码", trigger: "blur" },
        ],
      },
      timer: null,
      count: null,
      getButtonDisabled: false,
      getButtonText: "获取验证码",
      registerLoading: false,
    };
  },
  methods: {
    doRegister() {
      this.registerLoading = true;
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          userRegister({
            phoneNumber: this.form.phoneNumber,
            code: this.form.verificationCode,
            uuid: this.form.uuid,
          }).then((response) => {
            if (response.code === 200) {
              this.msgSuccess("注册成功");
              this.registerLoading = false;
              /* 注册后返回登录页面 */
              this.$router.replace("/login");
            } else {
              this.registerLoading = false;
              this.msgError(response.msg);
            }
          });
        } else {
          console.log("error submit!!");
          this.registerLoading = false;
          return false;
        }
      });
    },
    getVerificationCode(delay) {
      const number = this.form["phoneNumber"];
      if (!/^1\d{10}$/.test(number)) {
        this.msgError("请输入正确的手机号");
      } else {
        getSmsCode({
          phoneNumber: number,
        }).then((response) => {
          if (response.code === 200) {
            this.form["uuid"] = response.uuid;
            const time_out = delay;
            if (!this.timer) {
              this.count = time_out;
              this.getButtonDisabled = true;
              this.timer = setInterval(() => {
                if (this.count > 0 && this.count <= time_out) {
                  this.getButtonText = `再次获取(${this.count})`;
                  this.count--;
                } else {
                  this.timer = null;
                  this.getButtonDisabled = false;
                  this.getButtonText = "获取验证码";
                }
              }, 1000);
            }
            this.msgSuccess("验证码已发送");
          }
        });
      }
    },
  },
};
</script>

<style scoped>
.login-main {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-image: url("../../assets/login/bg.jpg");
  background-size: cover;
}

.login-form {
  width: 380px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.logo-image {
  width: 100%;
  height: 100px;
  object-fit: contain;
}

.login-title-next {
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
}
</style>
