<template>
  <button class="c-button" :class="[
    type ? 'c-button--' + type : '',
    size ? 'c-button--' + size : '',
    {
        'is-disabled': disabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
    }
    ]" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ColaButton',
  inject: {
    cForm: {
      default: ''
    },
    cFormItem: {
      default: ''
    }
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean
  },
  computed: {
    // typeClass () {
    //   return 'c-button ' + 'c-button--' + this.type
    // }
  },
  mounted () {
    console.log(this.cForm)
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

<style lang="scss" scoped>
  /*基本按钮样式*/
  .c-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-scect: none;
    -webkit-user-scect: none;
    -ms-user-scect: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
  }
  /*圆角按钮样式*/
  .c-button.is-round {
    border-radius: 20px;
    padding: 12px 23px;
  }
  /*禁用按钮样式*/
  .c-button.is-disabled, .c-button.is-disabled:focus, .c-button.is-disabled:hover {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
  }
  .c-button:hover, .c-button:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  /*普通按钮激活样式*/
  .c-button:active {
    color: #3a8ee6;
    border-color: #3a8ee6;
    outline: none;
  }
  /*普通朴素按钮样式*/
  .c-button.is-plain:focus, .c-button.is-plain:hover {
    background: #fff;
    border-color: #409eff;
    color: #409eff;
  }
  /*朴素按钮禁用样式*/
  .c-button.is-disabled.is-plain, .c-button.is-disabled.is-plain:focus, .c-button.is-disabled.is-plain:hover {
    background-color: #fff;
    border-color: #ebeef5;
    color: #c0c4cc;
  }
  /*朴素按钮激活样式*/
  .c-button.is-active, .c-button.is-plain:active {
    border-color: #3a8ee6;
    color: #3a8ee6;
  }
  .c-button.is-plain:active {
    background: #fff;
    outline: none;
  }
  /*主要按钮样式*/
  .c-button--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
  }

  .c-button--primary:hover, .c-button--primary:focus {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
  /*主要按钮激活样式*/
  .c-button--primary.is-active, .c-button--primary:active {
    background: #3a8ee6;
    border-color: #3a8ee6;
    color: #fff;
  }
  .c-button--primary:active {
    outline: none;
  }
  /*主要按钮禁用样式*/
  .c-button--primary.is-disabled, .c-button--primary.is-disabled:active, .c-button--primary.is-disabled:focus, .c-button--primary.is-disabled:hover {
    color: #fff;
    background-color: #a0cfff;
    border-color: #a0cfff;
  }
  /*主要朴素按钮样式*/
  .c-button--primary.is-plain {
    color: #409eff;
    background: #ecf5ff;
    border-color: #b3d8ff;
  }
  .c-button--primary.is-plain:focus, .c-button--primary.is-plain:hover {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
  /*主要朴素按钮激活样式*/
  .c-button--primary.is-plain:active {
    background: #3a8ee6;
    border-color: #3a8ee6;
    color: #fff;
    outline: none;
  }
  /*主要朴素按钮禁用样式*/
  .c-button--primary.is-plain.is-disabled, .c-button--primary.is-plain.is-disabled:active, .c-button--primary.is-plain.is-disabled:focus, .c-button--primary.is-plain.is-disabled:hover {
    color: #8cc5ff;
    background-color: #ecf5ff;
    border-color: #d9ecff;
  }
  /*成功按钮样式*/
  .c-button--success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
  }

  .c-button--success:hover, .c-button--success:focus {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
  /*成功按钮激活样式*/
  .c-button--success.is-active, .c-button--success:active {
    background: #5daf34;
    border-color: #5daf34;
    color: #fff;
    outline: none;
  }
  /*成功按钮禁用样式*/
  .c-button--success.is-disabled, .c-button--success.is-disabled:active, .c-button--success.is-disabled:focus, .c-button--success.is-disabled:hover {
    color: #fff;
    background-color: #b3e19d;
    border-color: #b3e19d;
  }
  /*成功朴素按钮样式*/
  .c-button--success.is-plain {
    color: #67c23a;
    background: #f0f9eb;
    border-color: #c2e7b0;
  }
  .c-button--success.is-plain:focus, .c-button--success.is-plain:hover {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
  /*成功朴素按钮激活样式*/
  .c-button--success.is-plain:active {
    background: #5daf34;
    border-color: #5daf34;
    color: #fff;
    outline: none;
  }
  /*成功朴素按钮禁用样式*/
  .c-button--success.is-plain.is-disabled, .c-button--success.is-plain.is-disabled:active, .c-button--success.is-plain.is-disabled:focus, .c-button--success.is-plain.is-disabled:hover {
    color: #a4da89;
    background-color: #f0f9eb;
    border-color: #e1f3d8;
  }
  /*信息按钮样式*/
  .c-button--info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
  }

  .c-button--info:hover, .c-button--info:focus {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
  }
  /*信息按钮激活样式*/
  .c-button--info.is-active, .c-button--info:active {
    background: #82848a;
    border-color: #82848a;
    color: #fff;
    outline: none;
  }
  /*信息按钮禁用样式*/
  .c-button--info.is-disabled, .c-button--info.is-disabled:active, .c-button--info.is-disabled:focus, .c-button--info.is-disabled:hover {
    color: #fff;
    background-color: #c8c9cc;
    border-color: #c8c9cc;
  }
  /*信息朴素按钮样式*/
  .c-button--info.is-plain {
    color: #909399;
    background: #f4f4f5;
    border-color: #d3d4d6;
  }

  .c-button--info.is-plain:focus, .c-button--info.is-plain:hover {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
  /*信息朴素按钮激活样式*/
  .c-button--info.is-plain:active {
    background: #82848a;
    border-color: #82848a;
    color: #fff;
    outline: none;
  }
  /*信息朴素按钮禁用样式*/
  .c-button--info.is-plain.is-disabled, .c-button--info.is-plain.is-disabled:active, .c-button--info.is-plain.is-disabled:focus, .c-button--info.is-plain.is-disabled:hover {
    color: #bcbec2;
    background-color: #f4f4f5;
    border-color: #e9e9eb;
  }
  /*警告按钮样式*/
  .c-button--warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
  }

  .c-button--warning:hover, .c-button--warning:focus {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }
  /*警告按钮激活样式*/
  .c-button--warning.is-active, .c-button--warning:active {
    background: #cf9236;
    border-color: #cf9236;
    color: #fff;
    outline: none;
  }
  /*警告按钮禁用样式*/
  .c-button--warning.is-disabled, .c-button--warning.is-disabled:active, .c-button--warning.is-disabled:focus, .c-button--warning.is-disabled:hover {
    color: #fff;
    background-color: #f3d19e;
    border-color: #f3d19e;
  }
  /*警告朴素按钮样式*/
  .c-button--warning.is-plain {
    color: #e6a23c;
    background: #fdf6ec;
    border-color: #f5dab1;
  }

  .c-button--warning.is-plain:focus, .c-button--warning.is-plain:hover {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
  /*警告朴素按钮激活样式*/
  .c-button--warning.is-plain:active {
    background: #cf9236;
    border-color: #cf9236;
    color: #fff;
    outline: none;
  }
  /*警告朴素按钮禁用样式*/
  .c-button--warning.is-plain.is-disabled, .c-button--warning.is-plain.is-disabled:active, .c-button--warning.is-plain.is-disabled:focus, .c-button--warning.is-plain.is-disabled:hover {
    color: #f0c78a;
    background-color: #fdf6ec;
    border-color: #faecd8;
  }
  /*危险按钮样式*/
  .c-button--danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
  }
  .c-button--danger:hover, .c-button--danger:focus {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }
  /*危险按钮激活样式*/
  .c-button--danger.is-active, .c-button--danger:active {
    background: #dd6161;
    border-color: #dd6161;
    color: #fff;
    outline: none;
  }
  /*危险按钮禁用样式*/
  .c-button--danger.is-disabled, .c-button--danger.is-disabled:active, .c-button--danger.is-disabled:focus, .c-button--danger.is-disabled:hover {
    color: #fff;
    background-color: #fab6b6;
    border-color: #fab6b6;
  }
  /*危险朴素按钮样式*/
  .c-button--danger.is-plain {
    color: #f56c6c;
    background: #fef0f0;
    border-color: #fbc4c4;
  }
  .c-button--danger.is-plain:focus, .c-button--danger.is-plain:hover {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
  /*危险按钮激活样式*/
  .c-button--danger.is-plain:active {
    background: #dd6161;
    border-color: #dd6161;
    color: #fff;
    outline: none;
  }
  /*危险朴素按钮禁用样式*/
  .c-button--danger.is-plain.is-disabled, .c-button--danger.is-plain.is-disabled:active, .c-button--danger.is-plain.is-disabled:focus, .c-button--danger.is-plain.is-disabled:hover {
    color: #f9a7a7;
    background-color: #fef0f0;
    border-color: #fde2e2;
  }
</style>
