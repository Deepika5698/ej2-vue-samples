<template>
<div class="col-lg-12 control-section card-control-section horizontal_card_layout">
    <div class="e-card-resize-container">
        <div class="row">
            <div class="row card-layout">
                <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                    <!-- Horizontal Card Layout for iphone-X Product -->
                    <div tabindex="0" class="e-card e-card-horizontal e-product" id="horizontal_phone_product">
                        <div class="e-card-stacked">
                            <div class="e-card-header">
                                <div class="e-card-header-caption">
                                    <div class="e-card-header-title"> iPhone X</div>
                                    <div class="e-card-sub-title">Marketed by Apple Inc</div>
                                </div>
                            </div>
                            <div class="e-card-content">
                                The iPhone X has a 5.8-inch diagonal OLED color-accurate screen, has two cameras on the rear. One is a 12-megapixel with
                                support for face detection. It is capable of capturing 4K video at 24, 30 or 60 frames per
                                second. It supports Qi-standard wireless charging.
                            </div>
                            <div class="e-card-actions" style="justify-content:center">
                                <button class="e-btn e-outline e-primary">
                                    <div class="e-size">64GB </div>
                                </button>
                                <button class="e-btn e-outline e-primary">
                                    <div class="e-size">256GB </div>
                                </button>
                            </div>
                        </div>
                        <img src="./images/iphone.png" alt="iPhone X" height="415px" style="width:50%">
                    </div>
                </div>
                <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                    <div id="vertical_Sample">
                        <!-- Horizontal Card Layout for Philips Trimmer Product -->
                        <div tabindex="0" class="e-card e-card-horizontal" id="horizontal_product">
                            <div class="e-card-stacked">
                                <div class="e-card-header">
                                    <div class="e-card-header-caption">
                                        <div class="e-card-header-title">Philips Trimmer</div>
                                    </div>
                                </div>
                                <div class="e-card-content" style="height: 146px">
                                    Philips trimmers are designed to last longer than 4 ordinary trimmers and DuraPower Technology which optimizes power.
                                </div>
                            </div>
                            <img src="./images/Trimmer.png" alt="Trimmer">
                        </div>
                        <!-- Horizontal Card Layout for Canon Product -->
                        <div tabindex="0" class="e-card e-card-horizontal" id="horizontal_product">
                            <img src="./images/Camera.png" style="height:214px" alt="Camera">
                            <div class="e-card-stacked">
                                <div class="e-card-header">
                                    <div class="e-card-header-caption">
                                        <div class="e-card-header-title">Canon 135mm</div>
                                    </div>
                                </div>
                                <div class="e-card-content" style="height: 146px">
                                    The fastest 135mm telephoto lens in its class. Two UD-glass elements
                                    correct secondary spectrum for outstanding sharpness and color.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="source_link">Source: &nbsp;
        <table>
            <tbody><tr>
                <td>
                    <a href="https://www.philips.co.in/c-m-pe/face-stylers-and-grooming-kits/trimmers" target="_blank">https://www.philips.co.in/c-m-pe/face-stylers-and-grooming-kits/trimmers</a>
                </td>
            </tr>
            <tr>
                <td>
                    <a href="https://en.wikipedia.org/wiki/IPhone_X" target="_blank">https://en.wikipedia.org/wiki/IPhone_X</a>
                </td>
            </tr>
            <tr>
                <td>
                    <a href="https://en.wikipedia.org/wiki/Canon_EF_135mm_lens" target="_blank">https://en.wikipedia.org/wiki/Canon_EF_135mm_lens</a>
                </td>
            </tr>
        </tbody></table>
    </div>
       <div id="action-description">
    <p>This sample demonstrates card rendering with horizontal layout. Based on the horizontal structure, product card is shown with detailed information.</p>
</div>
<div id="description">
    <p>By default, card elements are stacked one after another vertically. You can customize the card with specific direction by adding <strong>e-card-horizontal</strong> to align elements horizontally. Using <strong>e-card-stacked</strong> class, you can split the horizontal layout with a stacked element on left or right of the card.</p>
    <p>More information about Card can be found in this
        <a href="https://ej2.syncfusion.com/vue/documentation/card/getting-started/" target="_blank"> documentation section</a>.</p>
</div>
</div>
</template>
<style scoped>
    .e-card-horizontal.e-product {
        height: 420px;
    }

    .e-bigger.fluent .e-card-horizontal.e-product,
    .e-bigger.fluent-dark .e-card-horizontal.e-product {
        height: 480px;
    }

    .card-control-section.horizontal_card_layout #horizontal_phone_product .e-card-stacked {
        justify-content: flex-start;
    }

    .card-control-section.horizontal_card_layout #horizontal_phone_product .e-card-actions button:last-child {
        margin-left: 8px;
    }

    .fabric .card-control-section.horizontal_card_layout #horizontal_phone_product .e-card-actions button:last-child,
    .highcontrast .card-control-section.horizontal_card_layout #horizontal_phone_product .e-card-actions button:last-child {
        margin-left: 7px;
    }

    .card-control-section.horizontal_card_layout .e-card.e-card-horizontal.e-product .e-card-stacked> :first-child,
    .card-control-section.horizontal_card_layout #vertical_Sample .e-card.e-card-horizontal .e-card-stacked> :first-child,
    .card-control-section.horizontal_card_layout #vertical_Sample .e-card.e-card-horizontal .e-card-stacked> :first-child {
        flex-grow: initial;
    }

    .card-control-section.horizontal_card_layout #vertical_Sample {
        height: inherit;
    }

    .card-control-section.horizontal_card_layout #vertical_Sample .e-card img {
        height: 188px;
    }

    .card-control-section.horizontal_card_layout #vertical_Sample .e-card {
        height: 50%;
    }

    .card-control-section.horizontal_card_layout #vertical_Sample .e-card:first-child {
        margin-bottom: 10px;
    }

    .card-control-section.horizontal_card_layout #vertical_Sample .e-card>* {
        width: 50%;
        justify-content: flex-start;
    }

    .card-control-section.horizontal_card_layout #horizontal_product .e-card-header {
        width: 100%;
    }

    #source_link {
        float: right;
        margin-right: 10px;
    }

    @media screen and (max-width: 768px) {
        #source_link {
            margin-top: -10px;
            margin-right: 0px;
        }
    }

    .card-control-section.horizontal_card_layout .e-card-resize-container {
        margin-bottom: 50px;
    }

    .card-control-section.horizontal_card_layout .col-xs-6.col-sm-6.col-lg-6.col-md-6 {
        width: 100%;
        padding: 10px;
        margin: auto;
    }

    .card-control-section.horizontal_card_layout .card-layout {
        margin: auto;
        max-width: 870px;
    }

    img {
	    height: 100%;
    }
    @media (min-width: 912px) {
        .card-control-section.horizontal_card_layout .col-xs-6.col-sm-6.col-lg-6.col-md-6 {
            width: 50%;
        }
        .card-control-section.horizontal_card_layout .card-layout {
            max-width: 800px;
        }
    }

    @media (max-width: 600px) {
        .card-control-section.horizontal_card_layout .card-layout {
            max-width: 400px !important;
        }
    }

    @media (max-width: 912px) {
        .card-control-section.horizontal_card_layout .row.card-layout {
            display: flex;
            flex-direction: column;
        }
        .card-control-section.horizontal_card_layout .card-layout {
            max-width: 640px;
        }
    }

    @media (min-width: 700px) and (max-width: 912px) {
        .card-control-section.horizontal_card_layout .col-xs-6.col-sm-6.col-lg-6.col-md-6 {
            width: 70%;
        }
    }

    @media (min-width: 600px) and (max-width: 700px) {
        .card-control-section.horizontal_card_layout .col-xs-6.col-sm-6.col-lg-6.col-md-6 {
            width: 80%;
        }
    }
</style>
<script>
import Vue from "vue";
export default Vue.extend({

});

</script>
