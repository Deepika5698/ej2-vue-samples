<template>
  <div class="col-lg-12 control-section msg-variant-section">
    <div class="content-wrapper">
      <div class="col-lg-4 col-md-6 content-section">
        <h4>Filled</h4>
        <ejs-message id="col-lg-4 col-md-6 msg_default_filled" variant="Filled">Editing is restricted</ejs-message>
        <ejs-message id="msg_info_filled" severity="Info" variant="Filled">Please read the comments carefully</ejs-message>
        <ejs-message id="msg_success_filled" severity="Success" variant="Filled">Your message has been sent successfully</ejs-message>
        <ejs-message id="msg_warning_filled" severity="Warning" variant="Filled">There was a problem with your network connection</ejs-message>
        <ejs-message id="msg_error_filled" severity="Error" variant="Filled">A problem occurred while submitting your data</ejs-message>
      </div>
      <div class="col-lg-4 col-md-6 content-section">
        <h4>Outlined</h4>
        <ejs-message id="col-lg-4 col-md-6 msg_default_outlined" variant="Outlined">Editing is restricted</ejs-message>
        <ejs-message id="msg_info_outlined" severity="Info" variant="Outlined">Please read the comments carefully</ejs-message>
        <ejs-message id="msg_success_outlined" severity="Success" variant="Outlined">Your message has been sent successfully</ejs-message>
        <ejs-message id="msg_warning_outlined" severity="Warning" variant="Outlined">There was a problem with your network connection</ejs-message>
        <ejs-message id="msg_error_outlined" severity="Error" variant="Outlined">A problem occurred while submitting your data</ejs-message>
      </div>
      <div class="col-lg-4 content-section">
        <h4>Text</h4>
        <ejs-message id="msg_default">Editing is restricted</ejs-message>
        <ejs-message id="msg_info" severity="Info">Please read the comments carefully</ejs-message>
        <ejs-message id="msg_success" severity="Success">Your message has been sent successfully</ejs-message>
        <ejs-message id="msg_warning" severity="Warning">There was a problem with your network connection</ejs-message>
        <ejs-message id="msg_error" severity="Error">A problem occurred while submitting your data</ejs-message>
      </div>
    </div>
    <div id="action-description">
      <p>This sample demonstrates the predefined appearance variants for the Vue Message component.</p>
    </div>
    <div id="description">
      <p>The Message component can be displayed with predefined appearance variants. The available variants are <b>Text</b>, <b>Outlined</b> and <b>Filled</b>. The default variant type is <b>Text</b>.</p>
      <ul>
        <li><b>Text</b> - The severity is differentiated using a text color and a light background color.</li>
        <li><b>Outlined</b> - The severity is differentiated using a text color and a border without background.</li>
        <li><b>Filled</b> - The severity is differentiated using a text color and a dark background color.</li>
      </ul>
      <p>In this sample, messages are displayed with different appearances based on the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/message/#variant">variant</a> property.</p>
    </div>
  </div>
</template>

<style>
.msg-variant-section .content-section {
  margin: 0 auto;
  max-width: 520px;
  padding-top: 10px;
}

.msg-variant-section .e-message {
  margin: 10px 0;
}

.msg-variant-section .content-wrapper {
  max-width: 1560px; 
  margin: 0 auto;
}
</style>

<script>
import Vue from "vue";
import { MessagePlugin } from "@syncfusion/ej2-vue-notifications";

Vue.use(MessagePlugin);
export default Vue.extend({
  data: function () {
    return {};
  },
});
</script>
