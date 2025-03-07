<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
    <p>This sample demonstrates the usage of template columns in Tree Grid. 
       In this sample, we have shown Spark Line control in the Tree Grid columns.
    </p>
</div>
<div id="description">
    <p>
        The Tree Grid provides a way to use a custom layout for each cell using column template feature. 
        The <code>columns->template</code> property accepts either string or HTML element`s ID value, which will be used as the template for the cell.
    </p>
    <p>
        In this demo, using column template, we have presented sparkLine charts for the "Tax per annum", "One day index" and "Year GR" columns. In <code>columns->template</code> we have assigned with the ID of a SCRIPT element whose content is used as the template.
    </p>
    <p>The template expression should be provided inside <code>${...}</code> interpolation syntax</p>
        <p>
            More information on the column template can be found in this
            <a target="_blank" 
                href="https://ej2.syncfusion.com/vue/documentation/treegrid/columns/column-template/">
               documentation section</a>.
        </p>
</div>
    <div>
        <ejs-treegrid :dataSource='data' childMapping='Children' :treeColumnIndex='0' :height='380' :rowHeight='83' :rowDataBound='rowDataBound'>
            <e-columns>
                <e-column field='EmpID' headerText='Employee ID' width='180'></e-column>
                <e-column field='Name' headerText='Name' width='170'></e-column>
                <e-column field='DOB' headerText='DOB' width='110' format='yMd' textAlign='Right'></e-column>
                <e-column headerText='Tax Per Annum' width='170' :template="'template1'" ></e-column>
                <e-column headerText='One Day Index' width='170' :template="'template2'" ></e-column>
                <e-column headerText='Year GR' width='180' :template="'template3'" ></e-column>
            </e-columns>
            <template v-slot:template1="{data}">
               <div :id="`spkline${data.EmployeeID}`"></div>
           </template>
           <template v-slot:template2="{data}">
               <div :id="`spkarea${data.EmployeeID}`"></div>
           </template>
           <template v-slot:template3="{data}">
               <div :id="`spkwl${data.EmployeeID}`"></div>
           </template>
        </ejs-treegrid>
    </div>

</div>
</template>
<script lang="ts">
import Vue from "vue";
import { TreeGridPlugin } from "@syncfusion/ej2-vue-treegrid";
import { SparklinePlugin } from "@syncfusion/ej2-vue-charts";
import { sparkdata, textdata, getSparkData } from "./data-source";
import { RowDataBoundEventArgs, getObject } from '@syncfusion/ej2-grids';
import { EmitType } from '@syncfusion/ej2-base';
import { Sparkline, ISparklineLoadEventArgs, SparklineTheme } from '@syncfusion/ej2-charts';

Vue.use(TreeGridPlugin);
Vue.use(SparklinePlugin);

let line: Sparkline;
let column: Sparkline;
let winloss: Sparkline;

export default Vue.extend({
  data: () => {
    return {
      data: textdata,
    };
  },
   methods : {
    rowDataBound: function(args: RowDataBoundEventArgs) {
            let data: string = getObject('EmployeeID', args.data);
            let spkline = (args.row as Element).querySelector('#spkline' + data);
            let spkarea = (args.row as Element).querySelector('#spkarea' + data);
            let spkwl = (args.row as Element).querySelector('#spkwl' + data);
            line = new Sparkline({
                height: '50px',
                width: '150px',
                lineWidth: 2,
                valueType: 'Numeric',
                fill: '#3C78EF',
                dataSource: getSparkData('line', +data)
            });
            line.appendTo(spkline as HTMLElement);
            let column: Sparkline = new Sparkline({
                height: '50px',
                width: '150px',
                type: 'Column',
                valueType: 'Numeric',
                fill: '#3C78EF',
                negativePointColor: '#f7a816',
                dataSource: getSparkData('column', +data)
            });
            column.appendTo(spkarea as HTMLElement);
            winloss = new Sparkline({
                height: '50px',
                width: '150px',
                type: 'WinLoss',
                valueType: 'Numeric',
                fill: '#3C78EF',
                tiePointColor: 'darkgray',
                negativePointColor: '#f7a816',
                dataSource: getSparkData('column', +data)
            });
            winloss.appendTo(spkwl as HTMLElement);
        },    
  }

});
</script>
