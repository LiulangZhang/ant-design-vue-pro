<template>
  <div class="contact">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="titlepage text_align_center">
            <h2>联系我们</h2>
          </div>
        </div>
        <div class="col-md-8 offset-md-2">
          <a-form class="main_form" @submit="handleSubmit" :form="form">
            <a-form-item class="row col-md-12">
              <a-input
                class="form_control"
                v-decorator="['companyName', { rules: [{ required: true, message: '请输入姓名' }] }]"
                name="companyName"
                placeholder="公司名称"
              />
            </a-form-item>
            <a-form-item class="row col-md-12">
              <a-input
                class="form_control"
                v-decorator="['name', { rules: [{ required: true, message: '请输入姓名' }] }]"
                name="name"
                placeholder="联系人"
              />
            </a-form-item>
            <a-form-item class="row col-md-12">
              <a-input
                class="form_control"
                v-decorator="['mobile', { rules: [{ required: true, message: '联系电话' }] }]"
                name="mobile"
                placeholder="联系电话"
              />
            </a-form-item>
            <a-form-item class="row col-md-12">
              <textarea
                class="textarea"
                v-decorator="['content', { rules: [{ required: true, message: '请写下你的具体需求' }] }]"
                name="content"
                placeholder="请写下你的具体需求"
              ></textarea>
            </a-form-item>
            <a-form-item class="row col-md-12">
              <a-button class="send_btn" :disabled="smsSendBtn" @click="handleSubmit" type="primary">发送</a-button>
            </a-form-item>
          </a-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { contact } from '@/api/home/home'
export default {
  name: 'BaseForm',
  data () {
    return {
      form: this.$form.createForm(this),
      smsSendBtn: false
    }
  },
  methods: {
    // handler
    handleSubmit (e) {
      const { $notification } = this
      this.form.validateFields((err, values) => {
        if (!err) {
          contact(values)
            .then((res) => {
              // setTimeout(hide, 2500)
              $notification['success']({
                message: '提示',
                description: '我们已收到您的需求，会尽快联系您',
                duration: 8
              })
            })
            .catch((err) => {
              this.requestFailed(err)
            })
          console.log('Received values of form: ', values)
        } else {
        }
      })
    }
  }
}
</script>
