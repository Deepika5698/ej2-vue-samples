<template>
  <div class="control-section">
    <div align='center'>
        <ejs-accumulationchart style='display:block' :theme='theme' align='center' id='chartcontainer' 
            :chartArea='chartArea' :legendSettings='legendSettings'  :pointRender='pointRender'  :centerLabel='centerLabel' :enableBorderOnMouseMove='false'>
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='seriesData' :border='border' xName='Browser' :radius='radius' yName='Users' :startAngle='startAngle' :dataLabel='dataLabel'
                 innerRadius='65%' name='Project'> </e-accumulation-series>
             
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
   <div id="action-description">
    <p>
      This Vue donut chart example visualizes mobile browser statistics. The center label shows information about the data in the donut series.
    </p>
</div>

<div id="description">
    <p>
      In this example, you can see how to render and configure a donut chart. To create a donut in the pie series, we use the <code>innerRadius</code> property. The <code>centerLabel</code> property allows you to specify the default text that will be rendered in the center. You can also customize the text that will render when the mouse pointer is hovered over one of the donut slices using the <code>hoverTextFormat</code> property.</p>
      <br>
        <p style="font-weight: 500"><b>Injecting Module</b></p>
        <p>
          The Charts component’s features are segregated into individual feature modules. To use pie chart, we need to inject <code>PieSeries</code> module using <code>provide: { chart: [PieSeries] }</code> method.
        </p>
    <p>
      More information about the donut series can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/accumulation-chart/pie-dough-nut/#doughnut-chart">documentation section</a>.
    </p>
</div>
</div>

</template>
<style scoped>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { AccumulationChartPlugin, PieSeries, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip } from "@syncfusion/ej2-vue-charts";
Vue.use(AccumulationChartPlugin);
let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i,  'Contrast');
let seriesColor = ['#FFE066', "#FAB666", "#F68F6A", "#F3646A", "#CC555A", "#9C4649"];
export default Vue.extend({
  data: function() {
    return {
         theme:theme,
         seriesData:
        [{ Browser: 'Chrome', Users: 61.31, DataLabelMappingName: 'Chrome: 61.31%' }, 
          { Browser: 'Safari', Users: 24.68, DataLabelMappingName: Browser.isDevice ? 'Safari:<br> 24.68%' : 'Safari: 24.68%' },
          { Browser: 'Edge', Users: 5.00, DataLabelMappingName: 'Edge: 5.00%' },
          { Browser: 'Samsung Internet', Users: 2.72, DataLabelMappingName: 'Samsung Internet: 2.72%' },
          { Browser: 'Firefox', Users: 2.66, DataLabelMappingName: 'Firefox: 2.66%' },
          { Browser: 'Others', Users: 3.63, DataLabelMappingName: Browser.isDevice ? 'Others: <br> 3.63%' : 'Others: 3.63%' }
        ],

        chartArea: {
            border: {
                width: 0
            }
        },
        dataLabel: {
            visible: true,
            name: 'DataLabelMappingName',
            position: 'Outside',
            font: {
                fontWeight: '600',
              
            },
            connectorStyle: { 
                length: '20px',
                type: 'Curve'
            }
        },
        centerLabel:{
          text : 'Mobile<br>Browsers<br>Statistics',
          hoverTextFormat: '${point.x} <br> Browser Share <br> ${point.y}%',
          textStyle: {
                fontWeight: '600',
                size: Browser.isDevice ? '8px' : '15px'
            },
        },
        radius: Browser.isDevice ? '40%' : '70%',
        border: { width: 1 },
        legendSettings: {
            visible: false,
        },
      startAngle: Browser.isDevice ? '30' : '62', 
    };
  },
  provide: {
    accumulationchart: [AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel]
  },
  methods: {
    pointRender: function(args) {
       let selectedTheme = location.hash.split('/')[1];
       selectedTheme = selectedTheme ? selectedTheme : 'Material';
        if (selectedTheme==='fluent')
        {
          args.fill = seriesColor[args.point.index % 10];
        }
        else if(selectedTheme==='bootstrap5')
        {
          args.fill = seriesColor[args.point.index % 10];
        }
        if (selectedTheme.indexOf('dark') > -1 )
        {
          if(selectedTheme.indexOf('material') > -1 )
          {
            args.border.color = '#303030' ;
           
          }
          else if(selectedTheme.indexOf('bootstrap5') > -1 )
          {
            args.border.color = '#212529' ;
          }
          else if(selectedTheme.indexOf('bootstrap') > -1 )
          {
            args.border.color = '#1A1A1A' ;
            
          }
          else if(selectedTheme.indexOf('tailwind') > -1 )
          {
            args.border.color = '#1F2937' ;
          }
          else if(selectedTheme.indexOf('fluent') > -1 )
          {
            args.border.color = '#252423' ;
          }
          else if(selectedTheme.indexOf('fabric') > -1 )
          {
            args.border.color = '#201f1f' ;
          }
          else
          {
            args.border.color = '#222222' ;
          }
        }
        else if(selectedTheme.indexOf('highcontrast') > -1)
        {
          args.border.color = '#000000' ;
        }
        else
        {
          args.border.color = '#FFFFFF' ;
        }
      }

  }

});
</script>