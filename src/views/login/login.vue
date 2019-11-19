<template>
  <div class="login-container">
    <!-- 左侧  form -->
    <div class="form-wrapper"></div>
    <!-- 右侧  图片 -->
    <img src="../../assets/login_banner_ele.png" alt class="img" />
  </div>
</template>

<script>
export default {
  name: "login"
};
</script>

<style lang='less'>
.login-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  background: linear-gradient(
    225deg,
    rgba(1, 198, 250, 1),
    rgba(20, 147, 250, 1)
  );
  .form-wrapper {
    width: 478px;
    height: 550px;
    background-color: #f5f5f5;
  }
}
</style>