<template>
  <div class="control-section">
    <div id="custom-control">
        <div class="row">
            <div id="e-shirt-preview"></div>
        </div>
        <div id="custom-content" class="row">
            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 e-circle-wrap">
                <ejs-colorpicker id="circle-palette" mode="Palette" :modeSwitcher="false" :inline="true" :showButtons="false" :columns="biggerPalettesColn" :presetColors="circlePaletteColors" :beforeTileRender="beforeCircleTileRender" :change="onChange"></ejs-colorpicker>
            </div>
            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 e-rounded-wrap">
                <ejs-colorpicker id="rounded-palette" mode="Palette" :modeSwitcher="false" :inline="true" :showButtons="false" :columns="roundedPalettesColn" :presetColors="roundedPaletteColors" :beforeTileRender="beforeRoundedTileRender" :change="roundedPaletteChange"></ejs-colorpicker>
            </div>
            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 e-square-wrap">
                <ejs-colorpicker id="square-palette" mode="Palette" :modeSwitcher="false" :inline="true" :showButtons="false" :columns="squarePalettesColn" :presetColors="squarePaletteColors" :beforeTileRender="beforeSquareTileRender" :change="onChange"></ejs-colorpicker>
            </div>
            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6 e-scroll-wrap">
                <ejs-colorpicker id="scroll-palette" mode="Palette" :modeSwitcher="false" :inline="true" :showButtons="false" :columns="biggerPalettesColn" :presetColors="scrollPaletteColors" :beforeTileRender="beforeScrollTileRender" :change="onChange"></ejs-colorpicker>
            </div>
        </div>
    </div>
    <div id="action-description">
    <p>This sample demonstrates how to customize the color palettes with different types and styles.</p>
</div>
<div id="description">
    <p>
        The ColorPicker component is a user interface to select and adjust color values. This supports various color specifications
        like RGB (Red Green Blue), HSV (Hue Saturation Value), and Hex codes.
    </p>
    <p>
        In this sample,</p>
    <ul>
        <li>
            Select the shirt color from different customized palettes. It contains circle, square, rounded edge, and multiple
            scroll palettes.
        </li>
        <li>Using the
            <code>
                <a target="_blank" class="code" href="https://ej2.syncfusion.com/vue/documentation/api/color-picker/#presetcolors">presetColors
                </a>
            </code> property, you can specify the custom colors to be loaded.</li>
    </ul>
    <p>
        More information about ColorPicker can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/color-picker/how-to/customize-colorpicker">
            documentation section</a>.
    </p>
</div>

</div>
</template>

<style scoped>
/* custom code start */
/* Common sample level styles */
#custom-control {
    margin: auto 0;
    text-align: center;
}
#custom-control .col-lg-6 {
    margin-bottom: 20px;
}
#custom-control .col-lg-6.e-circle-wrap {
    width: 26%;
}
#custom-control .col-lg-6.e-square-wrap {
    margin-top: 37px;
    width: 22%;
}
#custom-control .col-lg-6.e-rounded-wrap {
    margin-top: 35px;
    width: 19%;
}
#custom-control .col-lg-6.e-scroll-wrap {
    width: 33%;
}
#custom-control.e-mobile-control .col-lg-6 {
    width: 55%;
}

/* Preview area styles */
#custom-control #e-shirt-preview {
    background: transparent url('images/shirt.png') no-repeat;
    height: 320px;
    margin: 20px auto;
    display: inline-block;
    width: 400px;
    background-color: rgb(244, 67, 54);
}
#custom-control.e-mobile-control #e-shirt-preview {
    margin-left: -21%;
    width: 320px;
}
.highcontrast #custom-control #e-shirt-preview {
    background: transparent url('images/shirt_highcontrast.png') no-repeat;
    background-color: rgb(244, 67, 54);
}

/* Common sample level styles for mobile */
@media only screen and (min-width: 768px) {
    #custom-control.e-mobile-control .col-sm-12 {
        width: 25%;
    }
}
#custom-control.e-mobile-control #custom-content {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
}
#custom-control.e-mobile-control #custom-content .col-xs-12 {
    flex: 0 0 auto;
}
/* custom code end */
/* Circle palette customization */
.e-container .e-palette .e-circle-palette {
    border: 0;
    height: 32px;
    width: 32px;
    border-radius: 20px;
    margin: 4px;
}
.e-bigger .e-container .e-palette .e-circle-palette {
    height: 32px;
    width: 32px;
}
.e-container .e-palette .e-circle-palette:hover {
    box-shadow: none;
    transform: scale(1.2);
    transition: transform .2s ease-out;
}
.e-circle-palette .e-circle-selection {
    height: 32px;
    width: 32px;
    border-radius: 20px;
    display: inline-block;
    transform: scale(0);
    transition: transform 1.2s ease-in;
}
.e-circle-palette.e-selected .e-circle-selection {
    transform: scale(0.8);
    background-color: #fff;
    transition: transform .2s ease-out;
}
#circle-palette+.e-container,
#scroll-palette+.e-container {
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
}

/* Scrollable palette customization */
#scroll-palette+.e-container .e-custom-palette.e-palette-group,
.e-bigger #scroll-palette+.e-container .e-custom-palette.e-palette-group {
    height: 125px;
}
.e-container .e-palette .e-scroll-palette {
    border: 0;
    color: #fff;
    line-height: 24px;
    font-size: 16px;
    height: 24px;
    width: 35px;
    margin-top: 2px;
    margin-left: 10px;
}
.e-bigger .e-container .e-palette .e-scroll-palette {
    height: 24px;
    width: 35px;
}
.e-container .e-palette .e-scroll-palette.e-selected::before {
    content: '\e933';
}
.tailwind .e-container .e-palette .e-scroll-palette.e-selected::before,
.tailwind-dark .e-container .e-palette .e-scroll-palette.e-selected::before {
    content: '\e856';
}
.bootstrap5 .e-container .e-palette .e-scroll-palette.e-selected::before,
.bootstrap5-dark .e-container .e-palette .e-scroll-palette.e-selected::before {
    content: '\e727';
}
.bootstrap4 .e-container .e-palette .e-scroll-palette.e-selected::before,
.bootstrap4-dark .e-container .e-palette .e-scroll-palette.e-selected::before {
    content: '\e718';
}
.bootstrap .e-container .e-palette .e-scroll-palette.e-selected::before,
.bootstrap-dark .e-container .e-palette .e-scroll-palette.e-selected::before,
.fabric .e-container .e-palette .e-scroll-palette.e-selected::before,
.fabric-dark .e-container .e-palette .e-scroll-palette.e-selected::before,
.highcontrast .e-container .e-palette .e-scroll-palette.e-selected::before {
    content: '\e7ff';
}
.highcontrast .e-container .e-palette {
    border-bottom-color: transparent;
}

/* Square palette customization */
.e-container .e-palette .e-square-palette,
.e-bigger .e-container .e-palette .e-square-palette {
    width: 20px;
    height: 20px;
}
#square-palette+.e-container .e-custom-palette .e-palette,
#rounded-palette+.e-container .e-custom-palette .e-palette {
    padding: 5px;
}

/* Rounded corner palette customization */
.e-container .e-palette .e-rounded-palette {
    border-radius: 4px;
    margin: 3px;
    height: 16px;
    width: 16px;
}
.e-bigger .e-container .e-palette .e-rounded-palette {
    height: 16px;
    width: 16px;
}
.e-container .e-palette .e-rounded-palette:hover,
.e-container .e-palette .e-scroll-palette:hover {
    box-shadow: none;
}
.e-container .e-palette .e-circle-palette.e-selected,
.e-container .e-palette .e-rounded-palette.e-selected,
.e-container .e-palette .e-square-palette.e-selected,
.e-container .e-palette .e-scroll-palette.e-selected {
    outline: none;
}
</style>

<script>
import Vue from "vue";
import { createElement } from "@syncfusion/ej2-base";
import { ColorPickerPlugin } from "@syncfusion/ej2-vue-inputs";

Vue.use(ColorPickerPlugin);

export default Vue.extend({
  data: function() {
    return {
        biggerPalettesColn: 4,
        squarePalettesColn: 8,
        roundedPalettesColn: 5,
        circlePaletteColors: {'custom': ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#2196f3', '#03a9f4', '#00bcd4',
                    '#009688', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107']},
        squarePaletteColors: {'custom1': ['#b80000', '#db3e00', '#fccb00', '#008b02', '#006b76', '#1273de', '#004dcf',
                    '#5300eb', '#eb9694', '#fad0c3', '#fef3bd', '#c1e1c5', '#bedadc', '#c4def6', '#bed3f3',
                    '#d4c4fb']},
        roundedPaletteColors: {'custom1': ['#ff6900', '#fcb900', '#7bdcb5', '#00d084', '#8ed1fc', '#0693e3', '#abb8c3', '#eb144c',
                    '#f78da7', '#9900ef']},
        scrollPaletteColors: {
                'custom1': ['#ef9a9a', '#e57373', '#ef5350', '#f44336', '#f48fb1', '#f06292',
                    '#ec407a', '#e91e63', '#ce93d8', '#ba68c8', '#ab47bc', '#9c27b0', '#b39ddb',
                    '#9575cd', '#7e57c2', '#673AB7'],
                'custom2': ['#9FA8DA', '#7986CB', '#5C6BC0', '#3F51B5', '#90CAF9', '#64B5F6',
                    '#42A5F5', '#2196F3', '#81D4FA', '#4FC3F7', '#29B6F6', '#03A9F4',
                    '#80DEEA', '#4DD0E1', '#26C6DA', '#00BCD4'],
                'custom3': ['#80CBC4', '#4DB6AC', '#26A69A', '#009688', '#A5D6A7', '#81C784',
                    '#66BB6A', '#4CAF50', '#C5E1A5', '#AED581', '#9CCC65', '#8BC34A', '#E6EE9C',
                    '#DCE775', '#D4E157', '#CDDC39'],
                'custom4': ['#FFF59D', '#FFF176', '#FFEE58', '#FFEB3B', '#FFE082', '#FFD54F',
                    '#FFCA28', '#FFC107', '#FFCC80', '#FFB74D', '#FFA726', '#FF9800', '#FFAB91',
                    '#FF8A65', '#FF7043', '#FF5722']}
    }
  },
  methods: {
    onChange: function(args) {
      document.getElementById("e-shirt-preview").style.backgroundColor = args.currentValue.hex;
    },
    roundedPaletteChange: function(args) {
        document.getElementById("rounded-palette").nextElementSibling.querySelector(".e-selected").style.boxShadow
            = args.currentValue.hex + ' 0 0 4px';
        document.getElementById("e-shirt-preview").style.backgroundColor = args.currentValue.hex;
    },
    beforeCircleTileRender: function(args) {
        args.element.classList.add("e-circle-palette");
        args.element.appendChild(createElement('span', { className: 'e-circle-selection' }));
    },
    beforeSquareTileRender: function(args) {
        args.element.classList.add("e-square-palette");
    },
    beforeRoundedTileRender: function(args) {
        args.element.classList.add("e-rounded-palette");
    },
    beforeScrollTileRender: function(args) {
        args.element.classList.add("e-icons");
        args.element.classList.add("e-scroll-palette");
    }
  },
  mounted: function() {
    this.$nextTick(function () {
        if (window.browserDetails.isDevice) {
            document.getElementById("custom-control").classList.add("e-mobile-control");
        }
    });
  }
});
</script>