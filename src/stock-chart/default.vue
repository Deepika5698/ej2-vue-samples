<template>
  <div class="control-section">
    <div>
      <ejs-stockchart
        style="display:block"
        id="stockchartcontainerdefault"
        :primaryXAxis="primaryXAxis"
        :primaryYAxis="primaryYAxis"
        :chartArea="chartArea"
        :tooltip="tooltip"
        :crosshair="crosshair"
        :tooltipRender="tooltipRender"
        :title="title"
        :border="border"
        :enablePeroiSelector="enablePeroiSelector"
        :theme="theme"
      >
        <e-stockchart-series-collection>
          <e-stockchart-series :dataSource="seriesData" type="Candle"  volume='volume' xName='x' low='low' high='high' open='open' close='close'></e-stockchart-series>
        </e-stockchart-series-collection>
      </ejs-stockchart>
    </div>

    <div id="action-description">
      <p>This <a target="_blank" href="https://www.syncfusion.com/vue-components/vue-stock-chart">Vue Stock Chart</a> example visualizes the AAPL stock price with candle chart. Tooltip and crosshair show the information about the data and period.</p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render and configure the stock chart. The candle type series chart shows financial data and trends at equal intervals. The <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/stock-chart/period-selector">Period Selector</a> and <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/stock-chart/range-selector">Range Selector</a> can be used to select a range with specified periods.
      </p>
      <p>
        Stock Chart provides support to 10 types of <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/stock-chart/technical-indicators">Technical Indicators</a> namely <code>Accumulation Distribution</code>, <code>ATR</code>, <code>EMA</code>, <code>SMA</code>, <code>TMA</code>, <code>Momentum</code>, <code>MACD</code>, <code>RSI</code>, <code>Stochastic</code>, <code>Bollinger Band</code>. By using indicator dropdown box, add and remove the required indicator types.
      </p>
      <p>
        <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover the chart or tap on it in touch enabled devices.
      </p>
      <br>
      <p style="font-weight: 500">Injecting Module</p>
      <p>
        The Stock chart component features are segregated into individual feature-wise modules. To use date-time axis, inject
        the
        <code>DateTime</code> and <code>CandleSeries</code> module using <code> provide: { stockchart: [ DateTime, CandleSeries] },</code> method.
      </p>
      <p>
        More information about the stock charts can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/stock-chart/getting-started">documentation section</a>.
      </p>
      
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Browser } from "@syncfusion/ej2-base";
import { chartData } from "./indicator-data";
import {
  StockChartPlugin,
  DateTime,
  CandleSeries,
  Tooltip,
  Crosshair,
  RangeTooltip,
  LineSeries,
  SplineSeries,
  HiloOpenCloseSeries,
  HiloSeries,
  RangeAreaSeries,
  Trendlines,
  EmaIndicator,
  RsiIndicator,
  BollingerBands,
  TmaIndicator,
  MomentumIndicator,
  SmaIndicator,
  AtrIndicator,
  AccumulationDistributionIndicator,
  MacdIndicator,
  StochasticIndicator,
  Export
} from "@syncfusion/ej2-vue-charts";

Vue.use(StockChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i,  'Contrast');

export default Vue.extend({
  data: function() {
    return {
      seriesData: chartData,
      theme: theme,
      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: "DateTime",
        majorGridLines: { color: "transparent" },
        crosshairTooltip: { enable: true }
      },

      //Initializing Primary Y Axis
      primaryYAxis: {
        lineStyle: { color: "transparent" },
        majorTickLines: { color: "transparent", height: 0 }
      },
      crosshair: {
        enable: true,
      },
      title: 'AAPL Stock Price',
      chartArea: {
        border: {
          width: 0
        }
      },
      border : {width : 0},
      enablePeroiSelector: true,
      tooltip: { enable: true },
    };
  },
  provide: {
    stockChart: [
      DateTime,
      Tooltip,
      Crosshair,
      RangeTooltip,
      LineSeries,
      SplineSeries,
      CandleSeries,
      HiloOpenCloseSeries,
      HiloSeries,
      RangeAreaSeries,
      Trendlines,
      EmaIndicator,
      RsiIndicator,
      BollingerBands,
      TmaIndicator,
      MomentumIndicator,
      SmaIndicator,
      AtrIndicator,
      AccumulationDistributionIndicator,
      MacdIndicator,
      StochasticIndicator,
      Export
    ]
  },
  methods: {
        tooltipRender: function(args){
            if (args.text.split('<br/>')[4]) { 
              let target = parseInt(args.text.split('<br/>')[4].split('<b>')[1].split('</b>')[0]);
              let value  = (target / 100000000).toFixed(1) + 'B';
              args.text = args.text.replace(args.text.split('<br/>')[4].split('<b>')[1].split('</b>')[0], value);
        }
    } 
  }
});
</script>