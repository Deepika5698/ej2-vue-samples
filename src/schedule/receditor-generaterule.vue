<template>
    <div class="schedule-vue-sample">
        <div class="col-md-12 control-section">
            <div class="content-wrapper recurrence-editor-wrap">
                <div style="padding-bottom:15px;">
                    <label>Rule Output</label>
                    <div class="rule-output-container">
                        <div id="rule-output">FREQ=DAILY;INTERVAL=1;</div>
                    </div>
                </div>
                <ejs-recurrenceeditor id='editor' ref="EditorObj" :selectedType='selectedType' :change="onChange"></ejs-recurrenceeditor>
            </div>
        </div>

        <div id="action-description">
            <p>
                This demo showcases the recurrence rule generation based on the options selected from the Recurrence editor and it usually
                follows the
                <a href="https://tools.ietf.org/html/rfc5545#section-3.3.10" target="_blank">iCalendar</a> specifications.
                This generated recurrence rule string is a valid one to be used with the Scheduler event’s recurrence rule
                field.
            </p>
        </div>

        <div id="description">
            <p>
                In this demo, a specific rule has been set to the recurrence editor manually by making use of the
                <code>setRecurrenceRule</code> method which will be displayed on the label placed at the top of it. Also,
                when the user dynamically change the options in recurrence editor, the modified rule value as per the selection
                will be displayed on it which is retrieved within the
                <code>change</code> event.
            </p>
        </div>
    </div>
</template>
<style>
    .schedule-vue-sample .recurrence-editor-wrap {
        margin: 0 25%;
    }

    .schedule-vue-sample .rule-output-container {
        height: auto;
        border: 1px solid #969696;
    }

    .schedule-vue-sample #rule-output {
        padding: 8px 4px;
        text-align: center;
        min-height: 20px;
        overflow: hidden;
        overflow-wrap: break-word;
    }

    @media (max-width: 580px) {
        .schedule-vue-sample .recurrence-editor-wrap {
            margin: 0 5%;
        }
    }
</style>
<script>
    import Vue from "vue";
    import { RecurrenceEditorPlugin } from "@syncfusion/ej2-vue-schedule";
    Vue.use(RecurrenceEditorPlugin);
    export default Vue.extend({
        data: function () {
            return {
                selectedType: 1
            }
        },
        mounted: function () {
            let recObject = this.$refs.EditorObj;
            recObject.setRecurrenceRule('FREQ=DAILY;INTERVAL=2;COUNT=8');
        },
        methods: {
            onChange: function (args) {
                let outputElement = document.getElementById('rule-output');
                outputElement.innerText = args.value;
            }
        }
    });

</script>