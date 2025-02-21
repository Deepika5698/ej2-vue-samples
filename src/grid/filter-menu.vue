<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>
            This sample demonstrates filtering Grid columns using menu, checkbox, and Excel filter UI.
            In this sample, click the filter icon on the column header to filter a particular column.
            You can change the filter type on the properties panel. When Excel filter type is selected, you can sort the column using the sort option in the Excel filter dialog.
        </p>
    </div>
    <div>
        <div class="select-wrap">
            <ejs-dropdownlist id='ddlelement' :dataSource='ddldata' value='Menu' :fields='ddlfields' :change="onChange"></ejs-dropdownlist>
        </div>

        <ejs-grid ref='grid' :dataSource="data" :allowPaging='true' :allowFiltering='true' :allowSorting='true' :pageSettings='pageSettings' :filterSettings='filterSettings'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'></e-column>
                <e-column field='CustomerName' headerText='Customer Name' width='150'></e-column>
                <e-column field='OrderDate' headerText='Order Date' width='130' :format='formatoptions' textAlign='Right'></e-column>
                <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right'></e-column>
                <e-column field='ShippedDate' headerText='Shipped Date' width='130' format="yMd" type="date" textAlign='Right'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width='150'></e-column>
            </e-columns>
        </ejs-grid>
    </div>

     <div id="description">
        <p>The filtering feature enables the user to view a reduced number of records based on the filter criteria. It can be enabled by setting the <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-grid.html#allowfitering">allowFiltering
        </a></code> property to true. </p>
        <p>Grid supports the following filter types.</p>
        <ul>
            <li><code>FilterBar</code></li>
            <li><code>Menu</code></li>
            <li><code>CheckBox</code></li>
            <li><code>Excel</code></li>
        </ul>
        you can change the filter type by setting <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-filterSettings.html#type">filterSettings->type</a></code>
        <p>Now, the following additional filter operators are incorporated with the already existing operators.</p>
        <p>String type columns:</p>
            <ul>
                <li>Not Equal</li>
                <li>Does Not Start With</li>
                <li>Does Not End With</li>
                <li>Does Not Contain</li>
                <li>Empty</li>
                <li>Not Empty</li>
                <li>Like</li>
            </ul>
        <p>Number and Date type columns:</p>
            <ul>
                <li>Null</li>
                <li>Not Null</li>
            </ul>
        <p>For example, when the <b>Like</b> search operator is used:</p>
            <ul>
                <li>%a% - Filters words containing the character 'a'</li>
                <li>a%  - Filters words ending with 'a'</li>
                <li>%a  - Filters words starting with 'a'</li>
            </ul>
        <p>In this demo, filter menu is enabled by default. You can switch to other filter types using the dropdown.</p>
    </div>

</div>
</template>

<style scoped>
@import "../../styles/Grid/filter-menu.css";
</style>

<script lang="ts">
import Vue from "vue";
import { GridPlugin, Filter, Page, FilterType, Sort, GridComponent } from "@syncfusion/ej2-vue-grids";
import { DropDownListPlugin, ChangeEventArgs} from "@syncfusion/ej2-vue-dropdowns";
import { orderDataSource  } from "./data-source";

Vue.use(GridPlugin);
Vue.use(DropDownListPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: orderDataSource,
      ddlfields: { text: 'type', value: 'Id' },
      pageSettings: { pageCount: 5 },
      filterSettings: { type: 'Menu' },
      formatoptions: { type: 'dateTime', format: 'M/d/y hh:mm a' },
      ddldata: [
        { Id: 'Menu', type: 'Menu' },
        { Id: 'CheckBox', type: 'Checkbox' },
        { Id: 'Excel', type: 'Excel' }]
    };
  },
  methods: {
      onChange: function(e: ChangeEventArgs): void {
        this.filterSettings = {type: <FilterType>e.value};
        (<GridComponent>this.$refs.grid).clearFiltering();
    }
  },
  provide: {
      grid: [Filter, Page, Sort]
  }
});
</script>