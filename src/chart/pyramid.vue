<template>
  <div class="control-section">
    <div align='center'>
        <ejs-accumulationchart ref="chart" :theme='theme' style='display:block' align='center' id='chartcontainer' :title='title'
            :legendSettings='legendSettings' :tooltip='tooltip' :load='load'>
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='seriesData' type='Pyramid' xName='Foods' yName='Calories' :dataLabel='dataLabel'  name='Food' width='45%' height='80%' neckWidth='15%' gapRatio=0.03 explode='true' :emptyPointSettings='emptyPointSettings' > </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
   <div id="action-description">
    <p>
      This Vue Pyramid Chart visualizes food comparison data by using pyramid series.
    </p>
</div>
<div id="description">
    <p> In this example, you can see how to render and configure a pyramid chart. This chart is shaped like a triangle, with lines dividing it into sections of varying widths. Depending on the Y coordinate, the width indicates a level of hierarchy among other categories. The DataLabel  represents individual data and its value.</p>
    <p> <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover a point or tap on a point in touch-enabled devices.</p>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
        chart component features are segregated into individual feature-wise modules. To use pyramid series, we need to inject
        <code>PyramidSeries</code> module using <code>provide: { accumulationchart: [PyramidSeries] },</code> method.
    </p>
    <p>
        More information about the pyramid series can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/accumulation-chart/pyramid/">documentation section</a>.
    </p>
</div>
</div>

</template>
<style scoped>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { AccumulationChartPlugin, AccumulationTooltip, PyramidSeries, AccumulationLegend, AccumulationDataLabel } from "@syncfusion/ej2-vue-charts";
Vue.use(AccumulationChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i,  'Contrast');

export default Vue.extend({
  data: function() {
    return {
         theme: theme,
      seriesData: [
        { Foods :  "Milk, Youghnut, Cheese", Calories : 435, DataLabelMappingName : Browser.isDevice ? 'Milk, Youghnut,<br> Cheese:  435 cal' :  "Milk, Youghnut, Cheese: 435 cal" },
        { Foods :  "Vegetables", Calories : 470, DataLabelMappingName : "Vegetables: 470 cal" },
        { Foods :  "Meat, Poultry, Fish", Calories : 475, DataLabelMappingName : Browser.isDevice ? 'Meat, Poultry,<br> Fish: 475 cal' : "Meat, Poultry, Fish: 475 cal" },
        { Foods :  "Rice, Pasta", Calories : 930, DataLabelMappingName : Browser.isDevice ? 'Rice, Pasta:<br> 930 cal' : "Rice, Pasta: 930 cal" },
        { Foods :  "Fruits", Calories : 520, DataLabelMappingName : Browser.isDevice ? 'Fruits: <br> 520 cal' :  "Fruits: 520 cal" },
      ],
        
        dataLabel: {
          name: 'DataLabelMappingName', visible: true, position: 'Outside', connectorStyle: {length: '1%'}, font: {
            fontWeight: '600'}
        },

        emptyPointSettings: { mode: 'Drop', fill: 'red' },

        legendSettings: {
            visible: false,
            toggleVisibility: false
        },

        tooltip: {  header:'', enable: true, format: '${point.x} : <b>${point.y} cal</b>' },

       
      title: "Food Comparison Chart"
    };
  },
  provide: {
    accumulationchart: [AccumulationLegend, PyramidSeries, AccumulationTooltip, AccumulationDataLabel]
  },
  methods: {

      textRender: function(args){
            args.text = args.text;
      },
   
   
  },
 
});
</script>