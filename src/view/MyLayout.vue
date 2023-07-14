<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="light" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1" @click="goRouter(1)">
          <a-icon type="bar-chart" />
          <span>
            智能分析
          </span>
        </a-menu-item>
        <a-menu-item key="2" @click="goRouter(2)">
          <a-icon type="bar-chart" />
          <span>智能分析(异步)</span>
        </a-menu-item>
        <a-menu-item key="3" @click="goRouter(3)">
          <a-icon type="pie-chart" />
          <span>我的图表</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="() => (collapsed = !collapsed)" />
        <div class="user-info">
          <div class="ava">
            <a-avatar :size="32" icon="user" :src="userinfo.userAvatar" />
          </div>
          <div class="outbtn">
            <a-button @click="loginout">退出登录</a-button>
          </div>
        </div>
      </a-layout-header>
      <a-layout-content :style="{ padding: '40px', background: '#dfdfdf33', minHeight: '360px' }">
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer style="background-color: #dfdfdf33;">
        <div class="footer">智能BI ©2023 </div>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import { message } from 'ant-design-vue';



export default {
  name: "MyLayout",

  data() {
    return {
      collapsed: false,
      userinfo: {}
    };
  },
  mounted() {
    console.log("????");
    //挂载获取用户信息；
    this.getuserInfo();
  },
  methods: {
    async loginout() {
      try {
        //退出清除token和vuex的存储
        await this.$store.dispatch("login/Loginout");
        //退出后回到Home
        this.$router.push("/login");
      } catch (error) {
        console.log(error.message);
      }
    },
    //路由跳转
    goRouter(n) {
      if (n === 1) {
        this.$router.push({ path: '/mylayout/analysis' })
      }
      if (n === 2) {
        this.$router.push({ path: '/mylayout/asyncanalysis' })
      }
      if (n === 3) {
        this.$router.push({ path: '/mylayout/mycharts' });

      }
    },
    // 获取用户信息
    getuserInfo() {
      this.$store.dispatch('login/getUserInfo').then(res => {
        console.log(this.$store);
        this.userinfo = this.$store.state.login.userinfo;
      })
    }
  },
};
</script>
<style>
#components-layout-demo-custom-trigger div.logo {
  height: 32px;
  margin: 16px;
  border-radius: 12px;
  background: url('@/assets/images/logo.jpg');
  background-size: 168px 32px;
  background-repeat: no-repeat;

}

.ant-menu-item>a {
  /* 导航按钮文字显示问题 */
  display: inline !important;
  width: 100%;
}

.ant-layout .ant-layout-sider {
  /* 侧边栏背景 */
  position: relative;
  min-width: 0;
  background: #ffffff;
  transition: all 0.2s;
}

.footer {
  text-align: center;

}

.user-info {
  position: absolute;
  top: 0px;
  right: 10px;
  display: flex;
  justify-content: space-around;

}

.user-info .ava {
  margin: 0 5px;
}

.ant-menu-vertical>.ant-menu-item,
.ant-menu-vertical-left>.ant-menu-item,
.ant-menu-vertical-right>.ant-menu-item,
.ant-menu-inline>.ant-menu-item {
  height: 60px;
  line-height: 60px;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgb(255, 255, 255);
  margin: 16px;

}
</style>
