<template>
  
<div class="control-section ajax-accordion">
    <div class="control_wrapper accordion-control-section">
        <div class="product_title"> iPhone X Product Specification </div>
         <ejs-accordion ref="Accordion_Nested" :expanding="expanding" :created="created" expandMode='Single'>
             <e-accordionitems>
                 <e-accordionitem header='Network & Connectivity' content='' expanded="true"></e-accordionitem>
                 <e-accordionitem header='Feature' content='<div id="nested_Acc"></div>'></e-accordionitem>
                 <e-accordionitem header='Hardware & Software' content='#Hard_Soft_features'></e-accordionitem>
              </e-accordionitems>
        </ejs-accordion>
    </div>

    <div id="Sensor_features" style="display:none">
        <table>
            <tbody><tr>
                <td class="e-bold">Proximity sensor</td>
                <td>Yes</td>
            </tr>
            <tr>
                <td class="e-bold">Face ID</td>
                <td>Yes</td>
            </tr>
            <tr>
                <td class="e-bold">Accelerometer</td>
                <td>Yes</td>
            </tr>
        </tbody></table>
    </div>
    <div id="Hard_Soft_features" style="display:none">
        <table>
            <tbody><tr>
                <th rowspan="3"> Hardware</th>
                <td class="e-bold" rowspan="2 ">Chip</td>
                <td>Apple A11 Bionic chip with 64-bit architecture</td>
            </tr>
            <tr>
                <td>Embedded M11 motion coprocessor</td>
            </tr>
            <tr>
                <td class="e-bold">Capacity</td>
                <td>64GB/256GB</td>
            </tr>
            <tr>
                <th> Software</th>
                <td class="e-bold" rowspan="2 ">Operating System</td>
                <td>iOS 11</td>
            </tr>
        </tbody></table>
    </div>
    <div id="Video_Rec_features" style="display:none">
        <table>
            <tbody>
            <tr>
                <th class="e-bold" rowspan="6">Video Recording</th>
                <td class="e-bold">4K video recording</td>
            </tr>
            <tr>
                <td class="e-bold">1080p &amp; 720p HD video recording</td>
            </tr>
            <tr>
                <td class="e-bold">Optical zoom, 6x digital zoom</td>
            </tr>
            <tr>
                <td class="e-bold">Slow motion video support</td>
            </tr>
            <tr>
                <td class="e-bold">Take 8MP still photos while recording 4K video</td>
            </tr>
            <tr>
                <td class="e-bold">Noise reduction</td>
            </tr>

        </tbody></table>
    </div>
    <div id="Camera_features" style="display:none">
        <table>
            <tbody><tr>
                <th class="e-bold" rowspan="3">Camera</th>
                <td class="e-bold"> 12MP wide-angle</td>
            </tr>
            <tr>
                <td class="e-bold">Live Photos with stabilization</td>
            </tr>
            <tr>
                <td class="e-bold">Body and face detection</td>
            </tr>
            <tr>
                <th class="e-bold" rowspan="4">TrueDepth Camera</th>
                <td class="e-bold"> 7MP camera</td>
            </tr>
            <tr>
                <td class="e-bold"> Animoji</td>
            </tr>
            <tr>
                <td class="e-bold"> Face detection</td>
            </tr>
        </tbody></table>
    </div>
    <div id="source_link">Source: &nbsp;
        <a href="https://www.apple.com/iphone-x/specs/" target="_blank">www.apple.com/iphone-x/specs/</a>
   </div>
    <div id="action-description">
        <p>This sample demonstrates rendering <code>Accordion</code> content from external source using <code>Ajax</code> library. The content of panel “Network & Connectivity” is loaded from external element.</p>
    </div>

    <div id="description">
        <p>This sample illustrates the external webpage content loaded inside the Accordion panel by using AJAX library.</p>
        <p>More information about Accordion can be found in this <a href="https://ej2.syncfusion.com/vue/documentation/accordion/getting-started/" target="_blank">documentation</a> section.</p>
    </div>
</div>
</template>
<style>

    @-moz-document url-prefix() {
      .ajax-accordion .e-accordion .e-content table {
        border-collapse: initial;
    }
    }

    .ajax-accordion .e-accordion table {
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
    }

    .ajax-accordion .e-accordion table th,
    .ajax-accordion .e-accordion table td {
        font-weight: normal;
        padding: 5px;
        text-align: left;
        border: 1px solid #ddd
    }

    .ajax-accordion .product_title {
        text-align: center;
        margin: 20px 0;
        padding: 10px 0;
        text-overflow: ellipsis;
        font-weight: bold;
        font-size: 16px;
    }

    .ajax-accordion .accordion-control-section {
        margin: 0 10% 0 10%;
        padding-bottom: 25px;
    }

/* custom code start */
    .ajax-accordion #source_link {
        float: right;
        margin-right: 10px;
    }
    @media screen and (max-width: 768px) {
        .ajax-accordion .accordion-control-section {
            margin: 0;
            margin-bottom: 20px;
        }
        .ajax-accordion #source_link {
          margin-top: -25px;
          margin-right: 0px; 
        }
    }
/* custom code end */
</style>
<script>
import Vue from "vue";
import { AccordionPlugin } from "@syncfusion/ej2-vue-navigations";
import { Accordion, ExpandEventArgs } from '@syncfusion/ej2-navigations';
import { Ajax } from '@syncfusion/ej2-base';
Vue.use(AccordionPlugin);
export default Vue.extend({
   methods: {
       expanding: function(e) {
        if (e.isExpanded && [].indexOf.call(this.$refs.Accordion_Nested.ej2Instances.items, e.item) === 1) {
          if (e.element.querySelectorAll('.e-accordion').length > 0) {
            return;
        }
        //Initialize Nested Accordion component
        this.nestAcrdn = new Accordion({
            expandMode: 'Single',
            items: [
                { header: 'Sensor', content: '#Sensor_features' },
                { header: 'Camera', content: '#Camera_features' },
                { header: 'Video Recording', content: '#Video_Rec_features' },
            ]
        });
        //Render initialized Nested Accordion component
        this.nestAcrdn.appendTo('#nested_Acc');
    }
     },
     created: function(args){
           let ajax = new Ajax('./src/accordion/ajax-content.html', 'GET', true);
                ajax.onSuccess = (data) => {
                    this.$refs.Accordion_Nested.ej2Instances.items[0].content = data;
                     this.$refs.Accordion_Nested.ej2Instances.refresh();
                };
                ajax.send();
     }
   }
});
</script>