<template>
<div>
<div id="action-description">
    <p>
        This sample illustrates the export feature in the range navigator. You can export the range navigator in PNG, SVG, PDF, or JPEG format by clicking <code>Export</code>.
    </p>
</div>
<div>
    <div class="col-lg-9 control-section">
        <div class="content-wrapper">
            <br>
            <h4 id="days" align="center" style="font-family: Segoe UI;font-weight: 500; font-style:normal; font-size:15px;"> Conns,Inc Stock Close Details</h4>
            <div align="center">
                <ejs-rangenavigator style='display:block' ref='range' align='center' id='containerExport' :value='value' groupBy='Quarter'
                    valueType='DateTime' intervalType='Months' labelFormat='MMM' enableGrouping=true :dataSource='dataSource' xName='xDate'
                    yName='Close' :width='width' :changed='changed' :theme='themes' animationDuration=500>
                </ejs-rangenavigator>
            </div>
            <br>
            <br>
            <div align="center">
                <ejs-chart style='display:block;' ref='chart' id='chartExport' align='center' :chartArea='chartArea' :width='width' :primaryXAxis='primaryXAxis'
                    :primaryYAxis='primaryYAxis' :tooltip='tooltip' :legendSettings='legendSettings' height='350' :theme='themes'>
                    <e-series-collection>
                        <e-series :dataSource='dataSource' name='Close' xName='xDate' yName='Close' width='2' type='SplineArea' :border='border' :fill='fill'></e-series>
                    </e-series-collection>
                </ejs-chart>
            </div>
        </div>
    </div>
    <div class="col-lg-3 property-section">
        <table id="property" class="property-panel-table" title="Properties" style="width: 100%">
                    <tr style="height: 50px">
                        <td style="width: 40%">
                            <div>Export Type:</div>
                        </td>
                        <td style="width: 60%;">
                            <div>
                            <ejs-dropdownlist ref='dropdown' id='exporttype' index=0 :dataSource='dropDownData' width='80'></ejs-dropdownlist>
                            </div>
                        </td>
                    </tr>
                    <tr style="height: 50px">
                        <td style="width: 40%">
                            <div>File Name:</div>
                        </td>
                        <td style="width: 40%;">
                            <div class="e-float-input" style='margin-top: 0px;'>
                                <input type="text" value="Chart" id="fileName">
                            </div>
                        </td>
                    </tr>
                    <tr id="button-control" style="height: 50px" align='center'>
                        <td align='center'>
                            <div>
                                <ejs-button cssClass="e-flat" iconCss='e-icons e-export-icon' isPrimary=true v-on:click.native='onClick' id="exportBtn">EXPORT</ejs-button>
                            </div>
                        </td>
                    </tr>
                    <tr id="button-control" style="height: 50px">
                            <td align='center'>
                                <div>
                                     <ejs-button id="togglebtn" cssClass= 'e-flat' isPrimary=true :iconCss='iconCss' v-on:click.native='mode'>Print</ejs-button>
                                </div>
                            </td>
                        </tr>
                </table>
    </div>
</div>

<div id="description">
    <p>
        In this example, you can see how to render and configure the export feature. The rendered range navigator can be exported as either JPEG, PNG, or SVG format. It can be achieved using the Blob. It is supported only in modern browsers.
    </p>
    <p>
        More information on the export can be found in this
        <a target="_blank" href="http://ej2.syncfusion.com/documentation/chart/api-series.html#type-chartseriestype">documentation section</a>.
    </p>
</div>
</div>
</template>
<style>

    #button-control {
      width: 100%;
      text-align: center;
    }

    #control-containerExport {
      padding: 0px !important;
    }
  
    .e-print-icon::before {
        content: "\e34b";
    }

   .e-view.fabric .e-print-icon::before, .e-view.fabric-dark .e-print-icon::before {
        content: "\e7df";
    }

    .e-view.bootstrap .e-print-icon::before {
        content: "\ebd2";
    }

    .e-view.bootstrap4 .e-print-icon::before {
        content: "\e743";
    }

    .e-view.tailwind .e-print-icon::before, .e-view.tailwind-dark .e-print-icon::before {
        content: "\e76c";
    }

    .e-view.highcontrast .e-print-icon::before {
        content: "\ebf9";
    }

    .e-view.bootstrap5 .e-print-icon::before, .e-view.bootstrap5-dark .e-print-icon::before {
        content: "\e75d";
    }

    .e-view.material .e-export-icon::before, .e-view.material-dark .e-export-icon::before, .e-view.bootstrap .e-export-icon::before, .e-view.bootstrap-dark .e-export-icon::before {
        content: '\e728';
    }
    .e-view.material3 .e-print-icon::before, .e-view.material3-dark .e-print-icon::before {
        content: '\e75d';
    }

</style>
<script>
import Vue from "vue";
import { Browser } from "@syncfusion/ej2-base";
import { RangeNavigatorPlugin, ChartPlugin, SplineAreaSeries, StepLineSeries, DateTime, Crosshair,
  Tooltip, Export} from "@syncfusion/ej2-vue-charts";
import { exportData } from "./data-source";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(RangeNavigatorPlugin);
Vue.use(ChartPlugin);
Vue.use(DropDownListPlugin);
Vue.use(ButtonPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');
let themes = ['bootstrap5', 'bootstrap5dark', 'tailwind', 'tailwinddark', 'material', 'materialdark', 'bootstrap4', 'bootstrap', 'bootstrapdark', 'fabric', 'fabricdark', 'highcontrast', 'fluent', 'fluentDark', 'material3', 'material3dark'];
let borderColor = ['#6355C7', '#8F80F4', '#5A61F6', '#8B5CF6', '#00bdae', '#9ECB08', '#a16ee5', '#a16ee5', '#a16ee5', '#4472c4', '#4472c4', '#79ECE4', '#1AC9E6', '#1AC9E6', '#6355C7', '#4EAAFF'];
let regionColor = ['rgba(99, 85, 199, 0.3)', 'rgba(143, 128, 244, 0.3)', 'rgba(90, 97, 246, 0.3)', 'rgba(139, 92, 246, 0.3)', 'rgba(0, 189, 174, 0.3)',
'rgba(158, 203, 8, 0.3)', 'rgba(161, 110, 229, 0.3)', 'rgba(161, 110, 229, 0.3)', 'rgba(161, 110, 229, 0.3)', 'rgba(68, 114, 196, 0.3)',
'rgba(68, 114, 196, 0.3)', 'rgba(121, 236, 228, 0.3)', 'rgba(26, 201, 230, 0.3)', 'rgba(26, 201, 230, 0.3)', 'rgba(99, 85, 199, 0.3)', 'rgba(78, 170, 255, 0.3)'];

export default Vue.extend({
  data: function() {
    return {
      //Chart Properties
      primaryXAxis: {
         valueType: 'DateTime', crosshairTooltip: { enable: true },
         edgeLabelPlacement: 'Shift', majorGridLines: { width: 0 }
      },
      fill: regionColor[themes.indexOf(theme.toLowerCase())],
      border: { width: 2, color: borderColor[themes.indexOf(theme.toLowerCase())] },
      primaryYAxis: {
          minimum: 81, maximum: 87, interval: 2,
            majorTickLines: { width: 0 }, lineStyle: { width: 0 },
            labelFormat: '{value}M', title: 'Million in USD'
      },
      chartArea: { border: { width: 0 } },
      tooltip: { enable: true, shared: true },
      legendSettings: { visible: false },
      
      //Range Navigator Properties
      value: [new Date('2013-05-01'), new Date('2013-08-01')],
      dataSource: exportData,
      width: "100%",
      navigatorBorder: { width: 0 },
      dropDownData: ["JPEG", "PNG", "SVG", "PDF"],
      themes: theme,
      iconCss: 'e-icons e-print-icon',
    };
  },
  provide: {
    rangeNavigator: [DateTime],
    chart: [SplineAreaSeries, DateTime, Crosshair, Tooltip, Export]
  },
  updated: function() {
    this.$nextTick(function() {
        this.$refs.range.ej2Instances.refresh();
        this.$refs.chart.ej2Instances.refresh();
      });
    },
  methods: {
   changed: function(args) {
     if(document.getElementById('chartExport').children.length) {
        this.$refs.chart.ej2Instances.primaryXAxis.zoomFactor = args.zoomFactor;
        this.$refs.chart.ej2Instances.primaryXAxis.zoomPosition = args.zoomPosition;
        this.$refs.chart.ej2Instances.dataBind();
     }
    },
    onClick: function(args) {
      let fileName = document.getElementById("fileName").value;
      let rangeComponent = this.$refs.range.ej2Instances;
      let chart = this.$refs.chart.ej2Instances;
      let dropDown = this.$refs.dropdown.ej2Instances;
      chart.exportModule.export(dropDown.value, fileName, null, [rangeComponent, chart]);
    },
    mode: function(args) {
      this.$refs.range.ej2Instances.print(["containerExport", "chartExport"]);
    }
  }
});
</script>