<template>
<div>
<div class="control-section">
    <div class="content-wrapper">
        <ejs-heatmap id='container' :titleSettings='titleSettings' :xAxis='xAxis' :yAxis='yAxis' :dataSource='dataSource' :dataSourceSettings='dataSourceSettings' :paletteSettings='paletteSettings' :cellSettings='cellSettings' :load='load' :tooltipRender='tooltipRender'></ejs-heatmap>
    </div>
</div>
<div style="float: right; margin-right: 10px;">Source:
    <a href="https://en.wikipedia.org/wiki/2016_Summer_Olympics_medal_table" target="_blank">https://en.wikipedia.org/</a>
</div>
<div id="action-description">
    <p>
         This sample visualizes the overall Olympic medals won by the countries in all the summer Olympic events from the year 2000 to 2016.
    </p>
</div>
<div id="description">
    <p>
       In this example, you can see how to bind JSON data and configure the Heatmap using the data adaptor support. You can bind the JSON data with information for each row to the Heatmap using <code>isJsonData</code> and by defining the <code>adaptorType</code> properties. In row JSON data, the row header is mapped using the <code>xDataMapping</code>.
    </p>
    <p>
        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>
    <br>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
       Heatmap component features are segregated into individual feature-wise modules. To use data adaptor support, we need to inject <code>Adaptor</code> module using <code>Heatmap.Inject(Adaptor)</code> method, to use a tooltip, inject the <code>Tooltip</code> module using the <code>Heatmap.Inject(Tooltip)</code> method, and use a legend by injecting the <code>Legend</code> module using the <code>Heatmap.Inject(Legend)</code> method.
    </p>
</div>
</div>
</template>
<script>
import Vue from 'vue';
import { HeatMapPlugin, Tooltip, Legend, Adaptor } from "@syncfusion/ej2-vue-heatmap";
Vue.use(HeatMapPlugin);
export default Vue.extend({
data:function(){
return{
        titleSettings: {
            text: 'Olympic Medal Achievements of most Successful Countries',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal'
            }
        },
         xAxis: {
            labels: ['China', 'France', 'GBR', 'Germany', 'Italy', 'Japan', 'KOR', 'Russia', 'USA'],
            labelRotation: 45,
            labelIntersectAction: 'None'
        },
        yAxis: {
            title : {text: 'Olympic Year'},
            labels: ['2000', '2004', '2008', '2012', '2016']
        },
        dataSource: [
            { 'Region': 'USA', '2000': 93, '2004': 101, '2008': 112, '2012': 103, '2016': 121 },
            { 'Region': 'GBR', '2000': 28, '2004': 30, '2008': 49, '2012': 65, '2016': 67 },
            { 'Region': 'China', '2000': 58, '2004': 63, '2008': 100, '2012': 91, '2016': 70 },
            { 'Region': 'Russia', '2000': 89, '2004': 90, '2008': 60, '2012': 69, '2016': 55 },
            { 'Region': 'Germany', '2000': 56, '2004': 49, '2008': 41, '2012': 44, '2016': 42 },
            { 'Region': 'Japan', '2000': 18, '2004': 37, '2008': 25, '2012': 38, '2016': 41 },
            { 'Region': 'France', '2000': 38, '2004': 33, '2008': 43, '2012': 35, '2016': 42 },
            { 'Region': 'KOR', '2000': 28, '2004': 30, '2008': 32, '2012': 30, '2016': 21 },
            { 'Region': 'Italy', '2000': 34, '2004': 32, '2008': 27, '2012': 28, '2016': 28 }
        ],
        dataSourceSettings:  {
            isJsonData: true,
            adaptorType: 'Table',
            xDataMapping: 'Region'
        },
        paletteSettings: {
            palette: [{ color: '#F0C27B' },
            { color: '#4B1248' }
            ]
        },
        cellSettings: {
            border: {
                width: 1,
                radius: 4,
                color: 'white'
            }
        }
      
}
},
provide:{
    heatmap:[Tooltip, Legend, Adaptor]
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
        args.content = [args.yLabel + ' | ' + args.xLabel + ' : ' + args.value + ' medals'];
    }
  }
})
</script>