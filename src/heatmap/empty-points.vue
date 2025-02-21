<template>
<div>
<div class="control-section">
    <div>
        <div class="content-wrapper" style='width:99%'>
        <ejs-heatmap id='container' :titleSettings='titleSettings' :xAxis='xAxis' :yAxis='yAxis' :dataSource='dataSource' :cellSettings='cellSettings' :paletteSettings='paletteSettings' :legendSettings='legendSettings' :load='load' :tooltipRender='tooltipRender'></ejs-heatmap>
    </div>
    </div>
</div>
<div id="action-description">
    <p>
        This sample visualizes the number of deffective product count per 1000 units coming out from a manufacturing unit
        Data points are enhanced with labels and tooltip. Some data points were not marked with any values which indicates there are no deffective products and these data points are termed as empty points.
    </p>
</div>
<div id="description">
   <p>
         In this example, you can see how to render empty points in the Heatmap. The empty points or the points with no data can be marked using <code>null</code> in the data source. 
         You can also customize the background color of the empty points by using the <code>emptyPointColor</code> property in <code>paletteSettings</code>
         
    </p>
    <p>
        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>
    <br>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
       Heatmap component features are segregated into individual feature-wise modules. To use a tooltip, inject the <code>Tooltip </code>  module using the <code>Heatmap.Inject(Tooltip) </code> method, and use a legend by injecting the <code>Legend </code>  module using the <code>Heatmap.Inject(Legend) </code>  method.
    </p>

</div>
</div>
</template>
<script>
import Vue from 'vue';
import { HeatMapPlugin, Tooltip, Legend } from "@syncfusion/ej2-vue-heatmap";
import { emptyPointDataSource } from './empty-point-data-source.json';
Vue.use(HeatMapPlugin);
export default Vue.extend({
data:function(){
return{
        titleSettings: {
              text: 'Deffective Count per 1000 Products from a Manufacturing Unit',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal'
            }
        },
         xAxis: {
            labels: ['2007', '2008', '2009', '2010', '2011',
                '2012', '2013', '2014', '2015', '2016', '2017'],
        },
        yAxis: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May',
                'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],

        },
        dataSource: emptyPointDataSource,
        cellSettings: {
            border: {
                width: '0',
                color: 'white'
            },
            showLabel:true
        },
        paletteSettings: {
             palette: [{ color: 'rgb(172, 213, 242)' },
            { color: 'rgb(127, 168, 201)' },
            { color: 'rgb(82, 123, 160)' },
            { color: 'rgb(37, 78, 119)' },
            ],
            type: 'Gradient'
        },
        legendSettings: {
            position: 'Bottom',
            width: '250px',
            showLabel: true
        }
}
},
provide:{
    heatmap:[Tooltip, Legend]
},
methods: {
    load: function(args) {
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.heatmap.theme =
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1).replace(/-dark/i, "Dark");
    },
    tooltipRender: function(args)
    {
         args.content = [args.yLabel + ' | ' + args.xLabel + ' : ' + args.value + ' deffective units'];
    }
  }
})
</script>
