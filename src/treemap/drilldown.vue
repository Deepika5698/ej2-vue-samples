<template>
<div>
    <div class="col-lg-9 control-section">
        <ejs-treemap id='container' ref='treemap' align="center" :load='load' :drillStart='drillStart' :tooltipRendering='tooltipRendering' :palette='palette' :titleSettings='titleSettings' :enableDrillDown='enableDrillDown' format='n' :useGroupingSeparator='useGroupingSeparator' :dataSource='dataSource' :weightValuePath='weightValuePath' :tooltipSettings='tooltipSettings' :leafItemSettings='leafItemSettings' :levels='levels'></ejs-treemap>
    <div style="float: right; margin-right: 10px;">Source:
        <a href="https://en.wikipedia.org/wiki/List_of_continents_by_population" target="_blank">en.wikipedia.org</a>
    </div>
    </div>
    
    <div class="col-lg-3 property-section">
        <table id="property" title="Properties" style="width: 100%;">
         <colgroup>
            <col span="1" style="width: 50%;">
            <col span="1" style="width: 50%;">
         </colgroup>
                <tr style="height: 50px">
                <td>
                    <div class="property-text">Drill Down View</div>
                </td>
                <td>
                    <div class="property-text" style="margin-left: 0px; margin-top: -7px;">
                    <ejs-checkbox ref="drillView" id="drillView" :change="changeDrillView" ></ejs-checkbox>
                    </div>                    
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div class="property-text"> Bread Crumb</div>
                </td>
                <td>
                    <div class="property-text" style="margin-left: 0px; margin-top: -7px;">
                    <ejs-checkbox ref="breadCrumb" id="breadCrumb" :change="changebreadCrumb"></ejs-checkbox>
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div class="property-text">Bread Crumb Connector</div>
                </td>
                <td>
               <div class="property-text" style="margin-left: 10px;">
                   <ejs-textbox ref="text" id="breadCrumbText"  value=" - "  style="width:100%;" v-model="textValue" :change='changebreadCrumbText'></ejs-textbox>
               </div>    
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div class="property-text">Header Alignment</div>
                </td>
                <td>
                 <div class="property-text" style="margin-left: 10px;">
                    <ejs-dropdownlist id='headerAlignment' style="width:110;" :dataSource='headerdata' :fields='localFields' index=0 :width='labelswidth' :change='changeHeader'></ejs-dropdownlist>
                 </div>    
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div class="property-text">Label Alignment</div>
                </td>
                <td>
                <div class="property-text" style="margin-left: 10px;">
                    <ejs-dropdownlist id='labelAlignment' style="width:110;" :dataSource='headerdata' :fields='localFields' index=0 :width='labelswidth' :change='changeLabels'></ejs-dropdownlist>
                </div>
                </td>
            </tr>
        </table>
    </div>
<div id="action-description">
    <p>
        This sample demonstrates drill-down with the continents at the top level followed by regions and countries. By clicking a continent, you can view all the countries available in that continent clearly.
    </p>
</div>
<div id="description">
    <p>
        In this example you can see how to render a TreeMap with multiple items and drill it further. Tooltip is enabled in this example. To see the tooltip in action, hover the mouse over an item or tap an item in touch enabled devices.
    </p>
</div>
</div>
</template>
<style scoped> 
    div.property-text {
        padding-left: 0px; padding-top: 0px;
    }
    
 </style>
<script>
import Vue from 'vue';
import { TreeMapPlugin, TreeMapTooltip } from "@syncfusion/ej2-vue-treemap";
import { DrillDown } from '../treemap/treemap-data/drilldown-sample';
Vue.use(TreeMapPlugin);
export default Vue.extend({
data:function(){
return{
        palette: ['#9999ff', '#CCFF99', '#FFFF99', '#FF9999', '#FF99FF', '#FFCC66'],
        titleSettings: {
            text: 'List of countries by population',
            textStyle: { size: '15px', fontFamily: 'Segoe UI'}
        },
        enableDrillDown: true,
        useGroupingSeparator: true,
        dataSource: DrillDown,
        weightValuePath: 'Population',
        tooltipSettings: {
            visible: true,
            format: '${Name} : ${Population}',
            textStyle: {
                fontFamily: 'Segoe UI'
            }
        },
         leafItemSettings: {
            labelPath: 'Name',
            showLabels: false,
            labelStyle: { size: '0px', fontFamily: 'Segoe UI' },
            border: { color: 'black', width: 0.5 }
        },
        levels: [
            { groupPath: 'Continent', border: { color: 'black', width: 0.5 } },
            { groupPath: 'States', border: { color: 'black', width: 0.5 } },
            { groupPath: 'Region', showHeader: true, border: { color: 'black', width: 0.5 } },
        ],
        headerdata:[
            {value: 'Near', text: 'Near'},
            {value: 'Far', text: 'Far'},
            {value: 'Center', text: 'Center'}
        ],
        localFields:{ text: 'value', value: 'text' },
        labelswidth: '100%',
        textValue: '-' 
}
},
provide:{
    treemap:[TreeMapTooltip]
},
methods:{
    /* custom code start */
    load:function(args){
        let theme = location.hash.split('/')[1];
        theme = theme ? theme : 'Material'; 
        args.treemap.theme = (theme.charAt(0).toUpperCase() +
            theme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
    },
    /* custom code end */
    drillStart:function(args){
        if (args.item[Object.keys(args.item)[0]].length === 1) {
                args.treemap.levels[2].showHeader = true;
            } else {
                args.treemap.levels[2].showHeader = false;
        }
    },
    tooltipRendering:function(args){
         if (args.item['groupIndex'] !== 2 ) {
                args.cancel = true;
        }
    },
    changeHeader: function(args){
        let treemap = this.$refs.treemap.ej2Instances; 
        for(let i=0;i<treemap.levels.length - 1;i++) {
            treemap.levels[i].headerAlignment = args.value;        
        }        
        treemap.refresh();
    },
    changeLabels: function(args){
        let treemap = this.$refs.treemap.ej2Instances;
        treemap.levels[2].headerAlignment = args.value;       
        treemap.refresh();
    },
    changeDrillView: function(args) {
        let treemap = this.$refs.treemap.ej2Instances;
        if(args.checked === true) {
            treemap.drillDownView = true;
        }
        else {
            treemap.drillDownView = false;
        }
        treemap.refresh();
    },
    changebreadCrumb: function(args) {
        let treemap = this.$refs.treemap.ej2Instances;
        this.$refs.treemap.ej2Instances.enableBreadcrumb = this.$refs.breadCrumb.ej2Instances.checked;
        treemap.refresh();
    },
    changebreadCrumbText: function(args) {
        let treemap = this.$refs.treemap.ej2Instances;
        this.textValue = args.value;
        treemap.breadcrumbConnector = this.textValue ; 
        treemap.refresh();
    }        
}
})
</script>