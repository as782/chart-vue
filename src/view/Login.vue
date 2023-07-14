<template>
  <div class="container">
    <div class="container-left">
       <i class="logo"><img src="@/assets/images/logo.jpg" alt=""></i>
      <div class="bg-main-img">
        <img src="@/assets/images/login-main-bg.jpg" alt="" />
      </div>
      <img class="bg-main-img-ware" src="@/assets/images/login-bg.svg" alt="" />
    </div>
    <div class="container-right">
      <div class="login-wrap">
        <div  class="login-wrap-form">
          <div class="ava">
            <h1>欢迎使用智能BI系统</h1>
          </div>
          <div class="form-layout">
            <a-form
              id="components-form-demo-normal-login"
              :form="form"
              class="login-form"
              @submit="handleSubmit"
            >
              <a-form-item>
                <a-input
                  v-decorator="[
                    'username',
                    {
                      rules: [{ required: true, message: '请输入账号!' }],
                      initialValue: 'zxl',
                    },
                  ]"
                  placeholder="账号"
                >
                  <a-icon
                    slot="prefix"
                    type="user"
                    style="color: rgba(0, 0, 0, 0.25)"
                  />
                </a-input>
              </a-form-item>
              <a-form-item>
                <a-input
                  v-decorator="[
                    'password',
                    {
                      rules: [{ required: true, message: '请输入密码！' }],
                      initialValue: '123456',
                    },
                  ]"
                  type="password"
                  placeholder="密码"
                >
                  <a-icon
                    slot="prefix"
                    type="lock"
                    style="color: rgba(0, 0, 0, 0.25)"
                  />
                </a-input>
              </a-form-item>
              <a-form-item>
                <a-checkbox
                  v-decorator="[
                    'remember',
                    {
                      valuePropName: 'checked',
                      initialValue: true,
                    },
                  ]"
                >
                  记住密码
                </a-checkbox>
                <a class="login-form-forgot" href=""> 忘记密码 </a>
                <a-button
                  type="primary"
                  html-type="submit"
                  class="login-form-button"
                >
                  登录
                </a-button>
                Or
                <router-link to="/mylayout/analysis"> 现在注册! </router-link>
              </a-form-item>
            </a-form>
          </div>
        </div>
      
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields(async (err, values) => {
        if (!err) {
          const { username: userName, password: userPassword } = values;

          await this.$store.dispatch("login/Login", {
            userName: userName,
            userPassword: userPassword,
          });

          this.$router.push({ path: "/mylayout/analysis" });

          console.log("login表单的值为: ", values);
        }
      });
    },
  },
};
</script>
<style scoped>
 .avatar-uploader  {
  display: block;
  width: 64px;
  height: 64px;
  border: 1px solid #ddd;
  border-radius: 50%;
}
 .avatar-uploader .up-btn {
  display: block;
  width: 64px;
  height: 64px;
  border: 1px solid #ddd;
  border-radius: 50%;
}

.container {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #cccccc;
}

.container .container-left {
  flex: 1;
  position: relative;
  /* background-color: #d3efff; */
  background-image: linear-gradient(to right bottom , rgb(89, 71, 221),rgb(255, 253, 253), rgb(243, 243, 243));
  margin-right: 100px;
  /* background-image: url("@/assets/images/login-main-bg.jpg") ;
  background-repeat: no-repeat; */
  
}
.container-left .bg-main-img {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 45%;
   
}
.container-left .bg-main-img img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 0%;
}
.container-left .bg-main-img-ware {
  position: absolute;
  top: 0;
  right: -100px;
}

.container .container-right {
  display: flex;
  justify-content: center;
  width: 700px;
  margin: auto;
}
.container .container-right .login-wrap {
  border: 1px solid #ddd;
  border-radius: 13px;
  width: 500px;
  height: 500px;
  position: relative;
  overflow: hidden;
  background-color: #fff;
}
.container .container-right .login-wrap .login-wrap-form {
  width: 100%;
  height: 100%;
}
.container .container-right .login-wrap .login-wrap-form .ava {
  width: 100%;
  text-align: center;
  margin: 15px 0px 0px 0px;
}
.container .container-right .login-wrap .login-wrap-form .form-layout {
  padding: 50px;
  height: 100%;
}

/* 修改antd默认 */
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>