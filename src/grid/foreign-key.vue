<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>
            In this sample, <b>Customer Name</b> column is a foreign column. You can perform filtering, sorting or editing in the foreign key column.
        </p>
    </div>
    <div>
        <ejs-grid :dataSource="data" :allowPaging='true' :pageSettings="pageSettings" :allowFiltering='true' :filterSettings="filterSettings"
    :editSettings='editOptions' :toolbar='toolbarItems' :allowSorting='true'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' :validationRules='orderidrules' :isPrimaryKey='true'></e-column>
                <e-column field='CustomerID' headerText='Customer Name' width='150' :validationRules='customeridrules'
                foreignKeyValue='ContactName' foreignKeyField='CustomerID' :dataSource='customerData'></e-column>
                <e-column field='Freight' headerText='Freight' width='150' format='C2' textAlign='Right' editType='numericedit'></e-column>
                <e-column field='ShipName' headerText='Ship Name' width='170'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit'></e-column>
            </e-columns>
        </ejs-grid>
    </div>

     <div id="description">
       <p>
            Grid has option to show foreign key columns. It can be enabled by setting 
            <code><a target="_blank" class="code" href="http://ej2.syncfusion.com/vue/documentation/grid/api-column.html#datasource">column.dataSource </a></code> 
            property with either local or remote data and column field and text can be defined by using
            <code><a target="_blank" class="code" href="http://ej2.syncfusion.com/vue/documentation/grid/api-column.html#foreignkeyfield">column.foreignKeyField</a></code> and
            <code><a target="_blank" class="code" href="http://ej2.syncfusion.com/vue/documentation/grid/api-column.html#foreignkeyvalue">column.foreignKeyValue</a></code> properties.
        </p>    
         
         <br>
         <p style="font-weight: 500">Injecting Module:</p>
        <p>
            Grid features are segregated into individual feature-wise modules. To use foreign key column feature, we need to inject
            <code> ForeignKey </code> into the <code>provide</code> section.
        </p>
    </div>

</div>
</template>
<script lang="ts">
import Vue from "vue";
import { GridPlugin, ForeignKey, Sort, Edit, Filter, Toolbar, Page } from "@syncfusion/ej2-vue-grids";
import { orderDetails, customerData } from "./data-source";

Vue.use(GridPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: orderDetails.slice(0),
      pageSettings : {pageCount: 5},
      filterSettings : {type: 'Menu'},
      toolbarItems :  ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
      customerData : customerData,
      editOptions : { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
      orderidrules: { required: true, number: true },
      customeridrules: { required: true },
    };
  },
  provide: {
      grid: [ForeignKey, Sort, Edit, Filter, Toolbar, Page ]
  }
});
</script>