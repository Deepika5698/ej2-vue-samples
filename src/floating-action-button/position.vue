<template>
    <div class="control-section">
        <div id="target" class="fab-position-container fab-index">
            <ejs-fab id="fab1" iconCss= 'fab-icons fab-icon-people'
            title= 'Top Left' cssClass="e-success" position= 'TopLeft'
            target= '#target'></ejs-fab>

            <ejs-fab id="fab2" iconCss= 'fab-icons fab-icon-people'
            title= 'Top Center'  cssClass="e-warning" position= 'TopCenter'
            target= '#target'></ejs-fab>

            <ejs-fab id="fab3" iconCss= 'fab-icons fab-icon-people'
            title= 'Top Right'  cssClass="e-success" position= 'TopRight'
            target= '#target'></ejs-fab>

            <ejs-fab id="fab4" iconCss= 'fab-icons fab-icon-people'
            title= 'Middle Left'  cssClass="e-warning" position= 'MiddleLeft'
            target= '#target'></ejs-fab>

            <ejs-fab id="fab5" iconCss= 'fab-icons fab-icon-people'
            title= 'Middle Center' position= 'MiddleCenter'
            target= '#target'></ejs-fab>

            <ejs-fab id="fab6" iconCss= 'fab-icons fab-icon-people'
            title= 'Middle Right'  cssClass="e-warning" position= 'MiddleRight'
            target= '#target'></ejs-fab>

            <ejs-fab id="fab7" iconCss= 'fab-icons fab-icon-people'
            title= 'Bottom Left'  cssClass="e-success" position= 'BottomLeft'
            target= '#target'></ejs-fab>

                <ejs-fab id="fab8" iconCss= 'fab-icons fab-icon-people'
            title= 'Bottom Center' cssClass="e-warning" position= 'BottomCenter'
            target= '#target'></ejs-fab>

                <ejs-fab id="fab9" iconCss= 'fab-icons fab-icon-people'
            title= 'Bottom Right'  cssClass="e-success" position= 'BottomRight'
            target= '#target'></ejs-fab>
        </div>
        <div id="action-description">
             <p>This sample demonstrates the different positions of the Floating Action Button in the target container.</p>
        </div>
        <div id="description">
            <p>
                Use the <code>position</code> property to change the position of the FAB in the target element.
            </p>
        </div>
    </div>
</template>
<style>
    .fab-position-container {
        position: relative;
        min-height: 400px;
    }
    .fab-index {
        z-index:500 !important;
    }

    @font-face {
        font-family: 'fab-icons';
        src: url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    [class^="fab-icon-"],
    [class*=" fab-icon-"] {
        font-family: 'fab-icons' !important;
        speak: none;
        font-size: 55px;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: inherit;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .fab-icon-people:before {
        content: "\e70a";
    }
</style> 
<script>
import Vue from "vue";
import { FabPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(FabPlugin);

export default Vue.extend({});
</script>

