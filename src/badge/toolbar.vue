<template>
    <div  class="badge-toolbar">
        <div class="col-lg-12 control-section">
            <div class="sample_container">
                <ejs-toolbar id="toolbar">
                    <e-items>
                        <e-item :template="notification"></e-item>
                        <e-item :template="mail"></e-item>
                        <e-item :template="user"></e-item>
                        <e-item :template="love"></e-item>
                    </e-items>
                </ejs-toolbar>
            </div>
        </div>

        <div id="action-description">
            <p>This sample demonstrates the integration of badges into toolbar component to display mails, requests, etc.</p>
        </div>

        <div id="description">
            <p>The badge can be integrated into the toolbar to display the notifications of custom buttons to users. Here, SVG icons
                use the target for badge elements to display notifications.
            </p>
        </div>
    </div>
</template>

<style>
    .badge-toolbar .sample_container {
        display: table;
        margin: auto;
        margin-top: 117px;
    }

    body.bootstrap5 .badge-toolbar .e-toolbar,
    body.material .badge-toolbar .e-toolbar,
    body.tailwind .badge-toolbar .e-toolbar{
        border: 1px solid #dee2e6;
    }

    .tailwind-dark .sample_container.badge-toolbar,
    .bootstrap5-dark .sample_container.badge-toolbar,
    .bootstrap-dark .sample_container.badge-toolbar,
    .fabric-dark .sample_container.badge-toolbar {
        border: 1px solid #dddddd;
    }

    @media only screen and (max-width: 550px) {
        .badge-toolbar .sample_container #toolbar .header {
            display: none;
        }

        .material .badge-toolbar .sample_container .e-toolbar .e-toolbar-items:first-child>.e-toolbar-item:last-child {
            margin-right: 9px;
        }

        .bootstrap .badge-toolbar .sample_container .e-toolbar .e-toolbar-items:first-child>.e-toolbar-item:last-child {
            margin-right: 10px;
        }
    }

    .badge-toolbar .sample_container .badge-block {
        position: relative;
        display: inline-block;
        margin: 20px 13px 10px 10px;
    }

    .badge-toolbar .icons {
        width: 28px;
        height: 28px;
        display: inline-block;
    }

    .badge-toolbar #toolbar .header {
        font-size: 18px;
        margin-right: 56px;
    }

    /* SVG Icons */

    .badge-toolbar .love {
        background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%23a6a5a6' d='M8.532.81c3.029 0 5.932 1.668 7.468 4.521 2.139-3.97 6.922-5.644 11.008-3.726 4.289 2.012 6.177 7.212 4.218 11.617C29.273 17.614 16 31.19 16 31.19 15.916 31.137 2.727 17.614.774 13.222-1.186 8.817.703 3.617 4.993 1.605A8.299 8.299 0 0 1 8.532.81z'/%3E%3C/svg%3E") no-repeat 100% 100%;
    }

    .badge-toolbar .message {
        background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%23a6a5a6' d='M0 5.126h.024l7.547 7.393 8.405 8.252 8.405-8.252 7.547-7.393H32v22.6H0zm1.902-.852h28.195l-7.048 5.929L16 16.132l-7.049-5.929z'/%3E%3C/svg%3E") no-repeat 100% 100%;
    }

    .badge-toolbar .user-profile {
        background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%23a6a5a6' d='M8.772 18.363a11.978 11.978 0 0 0 7.229 2.416c2.71 0 5.214-.899 7.229-2.416 4.71.593 8.354 4.61 8.354 9.481V32H.416v-4.156c0-4.871 3.646-8.888 8.356-9.481zM16.001 0a8.727 8.727 0 1 1-.003 17.455A8.727 8.727 0 0 1 16.001 0z'/%3E%3C/svg%3E") no-repeat 100% 100%;
    }
</style>

<script>
import Vue from "vue";
import { ToolbarPlugin } from "@syncfusion/ej2-vue-navigations";
import { Browser } from '@syncfusion/ej2-base';
Vue.use(ToolbarPlugin);

export default Vue.extend({
    data: function() {
        return {
            notification: '<div class="header"> Notification </div>',
            mail: '<div>' +
            '<div class="badge-block">' +
            '<div class="message icons"></div>' +
            '<span class="e-badge e-badge-primary e-badge-notification e-badge-overlap">35</span>' +
            '</div>' +
            '</div>',
            user: '<div>' +
            '<div class="badge-block">' +
            '<div class="user-profile icons"></div>' +
            '<span class="e-badge e-badge-success e-badge-notification e-badge-overlap">28</span>' +
            '</div>' +
            '</div>',
            love: '<div>' +
            '<div class="badge-block">' +
            '<div class="love icons"></div>' +
            '<span class="e-badge e-badge-info e-badge-notification e-badge-overlap">98</span>' +
            '</div>' +
            '</div>'
        };
    },
    mounted: function() {
    }

});
</script>