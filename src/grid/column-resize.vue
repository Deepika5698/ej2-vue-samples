<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
         <p>This sample demonstrates the Grid column rendering with a specified width. This sample also shows how to enable the resizing feature. Click and drag the right corner of each column header to resize it.
    </p>
    </div>
    <div>
        <div style="overflow-x: auto; margin-left: 4px;">
            <ejs-grid :dataSource="data" :allowResizing='true' height='400' width='850' :autoFit='true'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' minWidth='100' width='150' maxWidth='200' textAlign='Right'></e-column>
                    <e-column field='CustomerName' headerText='Customer Name' minWidth='8' width='150'></e-column>
                    <e-column field='Freight' headerText='Freight' minWidth='8' width='120' format='C2' textAlign='Right'></e-column>
                    <e-column field='ShippedDate' headerText='Shipped Date' :allowResizing = 'false' width='150' format="yMd" textAlign='Right'></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' minWidth='8'  width='150'></e-column>
                </e-columns> 
            </ejs-grid>
        </div>
    </div>

     <div id="description">
        <p>
            By default, if the total width of the columns is less than the width of the Grid, columns will automatically fill to the grid's width. The Grid's AutoFit feature prevents Grid columns from filling more than their specified width by enabling the <code>autoFit</code> as true.
        </p>
        <br/>

        <p>The Grid columns can be resized by clicking and dragging at the right edge of column's header. To enable column, resize behavior, set the <code><a target="_blank" class="code"
            href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#allowresizing">allowResizing
            </a></code> property to true. You can also prevent the resize of a particular column by setting
            <code><a target="_blank" class="code"
            href="http://ej2.syncfusion.com/vue/documentation/grid/api-columnDirective.html#allowresizing">columns->allowResizing
            </a></code> to false in columns definition.
    
            And, by double clicking at the right edge of column header, the respective column width will get auto adjusted to its fit using the <code><a target="_blank" class="code"
                href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#autofitcolumns">autoFitColumns
                </a></code> method.
    
        </p>
        <br/>
    
        <p>
            In this demo, the allowResizing feature is enabled by setting the <code>allowResizing</code> property to true and <b>Order ID</b> column can be resized
            between the range of <code><a target="_blank" class="code"
                href="http://ej2.syncfusion.com/vue/documentation/grid/api-columnDirective.html#minwidth">minWidth (100px)
                </a></code> and <code><a target="_blank" class="code"
                    href="http://ej2.syncfusion.com/vue/documentation/grid/api-columnDirective.html#maxwidth">maxWidth (200px).
                    </a></code> Also, column resizing is disabled for the <b>Shipped Date</b> column.
        </p>
    
        <p style="font-weight: 500">Injecting Module:</p>
        <p>
            Grid features are segregated into individual feature-wise modules. 
            To use resize feature, inject the
            <code>Resize</code> using the <code>provide</code> section.
        </p>
    </div>

</div>
</template>
<script lang="ts">
import Vue from "vue";
import { GridPlugin, Resize } from "@syncfusion/ej2-vue-grids";
import { orderDetails } from "./data-source";

Vue.use(GridPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: orderDetails
    };
  },
  provide: {
      grid: [Resize]
  }
});
</script>