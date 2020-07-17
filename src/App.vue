<template>
  <div id="app">
    <div class="btn-group">
      <span>默认按钮:</span>
      <c-button>默认按钮</c-button>
      <c-button type="primary">主要按钮</c-button>
      <c-button type="success">成功按钮</c-button>
      <c-button type="info">信息按钮</c-button>
      <c-button type="warning">警告按钮</c-button>
      <c-button type="danger">危险按钮</c-button>
    </div>
    <div class="btn-group">
      <span>朴素按钮:</span>
      <c-button plain>朴素按钮</c-button>
      <c-button type="primary" plain>主要按钮</c-button>
      <c-button type="success" plain>成功按钮</c-button>
      <c-button type="info" plain>信息按钮</c-button>
      <c-button type="warning" plain>警告按钮</c-button>
      <c-button type="danger" plain>危险按钮</c-button>
    </div>
    <div class="btn-group">
      <span>圆角按钮:</span>
      <c-button round>圆角按钮</c-button>
      <c-button type="primary" round>主要按钮</c-button>
      <c-button type="success" round>成功按钮</c-button>
      <c-button type="info" round>信息按钮</c-button>
      <c-button type="warning" round>警告按钮</c-button>
      <c-button type="danger" round>危险按钮</c-button>
    </div>
    <div class="btn-group">
      <span>普通禁用:</span>
      <c-button disabled>圆角按钮</c-button>
      <c-button type="primary" disabled>主要按钮</c-button>
      <c-button type="success" disabled>成功按钮</c-button>
      <c-button type="info" disabled>信息按钮</c-button>
      <c-button type="warning" disabled>警告按钮</c-button>
      <c-button type="danger" disabled>危险按钮</c-button>
    </div>
    <div class="btn-group">
      <span>朴素禁用:</span>
      <c-button disabled plain>圆角按钮</c-button>
      <c-button type="primary" disabled plain>主要按钮</c-button>
      <c-button type="success" disabled plain>成功按钮</c-button>
      <c-button type="info" disabled plain>信息按钮</c-button>
      <c-button type="warning" disabled plain>警告按钮</c-button>
      <c-button type="danger" disabled plain>危险按钮</c-button>
    </div>
  </div>
</template>

<script>
import CButton from './components/button'

export default {
  name: 'App',
  components: {
    CButton
  },
  methods: {
  }
}
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .btn-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin-top: 20px;
  }
</style>
