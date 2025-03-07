<template>
<div>
    <div class="col-lg-8 control-section multiline">
        <div class="multiline_wrapper">
            <ejs-textbox ref="textareaObj" id="default" :multiline="true" :floatLabelType='floatLabelType' :enabled='enabled' :readonly='readOnly' placeholder="Enter your address"></ejs-textbox>
        </div>
    </div>
    <div class="col-lg-4 property-section">
    <table id="property" class="multiline-property" title="Properties">
        <tbody>
            <tr>
                <td class="left-side">Float Label Type</td>
                <td><ejs-dropdownlist id="float" :fields = "fields" :index = "currentIndex" :dataSource = "items" :popupHeight= "popupHeight" :change= "floatHandler">
                </ejs-dropdownlist></td>
            </tr>
            <tr>
                <td class="left-side">Disabled</td>
                <td><ejs-checkbox id="sample" :change= "enabledHandler" cssClass= "multiline" :checked="false" name="Multiline"></ejs-checkbox></td>
            </tr>
            <tr>
                <td class="left-side">Read only</td>
                <td><ejs-checkbox id="sample1" :change= "readonlyHandler" cssClass= "multiline" :checked="false" name="Multiline"></ejs-checkbox></td>
            </tr>
            <tr>
                <td class="left-side">Rows</td>
                <td><ejs-numerictextbox :value="2" format="##" :min="min" :max="max" :step="step" :change= "rowHandler"></ejs-numerictextbox></td>
            </tr>
        </tbody>
    </table>
</div>
    <div id="action-description">
     <p>
            This example demonstrates the multiline functionalities of the textbox component. 
            Enter or fill the textbox with multiple rows of text. 
            Choose the corresponding option from the property panel to update the multiline textbox.
        </p>
    </div>

    <div id="description">
    <p>The Multiline Textbox is used to edit or display multiple lines of text that helps you to accept address, description, comments, feedbacks, and more in a form. 
                In this sample, rendered multiline textbox from <b>textarea</b> tag and the following options are available to customize it:</p>
        <ul>
                <li>Choose float label types either 'Never', 'Always', or 'Auto' to float the placeholder text.</li>
                <li>To make a read-only multiline textbox, check the "read-only" option.</li>
                <li>Disable the textbox by unchecking an "enabled" option.</li>
                <li>Change the number of rows count to restrict the length of the input.</li> 
            </ul>
        <p>Note: After resizing the multiline textbox manually, the selected rows option from the property panel is not updated to the multiline textbox.</p>
    </div>
</div>
</template>
<style scoped>
.multiline_wrapper {
    max-width: 250px;
    margin: 0 auto;
    padding: 40px 0px 0px;
}
.multiline-property .left-side{
    font-size: 14px;
    padding: 8px;
    width: 50%;
}
.multiline-property.property-panel-table div.multiline {
    padding-left: 0px;
}
</style>

<script>
import Vue from "vue";
import { TextBoxPlugin } from '@syncfusion/ej2-vue-inputs';
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";

Vue.use(TextBoxPlugin);
Vue.use(CheckBoxPlugin);
Vue.use(DropDownListPlugin);
Vue.use(NumericTextBoxPlugin);

export default Vue.extend({
    data: function(){
        return {
            max: 20,
            min: 1,
            step: 1,
        items: [
            { sizeVal: 'Auto' , sizeTxt: 'Auto' },
            { sizeVal: 'Never' , sizeTxt: 'Never' },
            { sizeVal: 'Always' , sizeTxt: 'Always' },
        ],
        fields: { text: 'sizeTxt', value: 'sizeVal' },
          popupHeight: 200,
          currentIndex: 0,
          floatLabelType: 'Auto',
          enabled: true,
          readOnly: false,
          floatHandler: (args) => {
            switch (args.value) {
                case 'Auto':
                    this.floatLabelType = 'Auto';
                    break;
                case 'Always':
                    this.floatLabelType = 'Always';
                    break;
                case 'Never':
                    this.floatLabelType = 'Never';
                    break;
          }
          },
        
        enabledHandler: (args) => {
           this.enabled = !args.checked;
        },
        readonlyHandler: (args) => {
          this.readOnly = args.checked;
        },
        rowHandler: (args) => {
          this.$refs.textareaObj.addAttributes({rows: args.value});
        }
        }
    },
});
    </script>