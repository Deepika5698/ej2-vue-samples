<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the usage of context menu in Grid component. Right click anywhere on the Grid to view context
        menu.
        </p>
    </div>
    <div>
        <ejs-grid :dataSource="data" id="gridcomp" :allowPaging='true' :allowExcelExport='true' :allowPdfExport='true' :allowSorting='true'
        :contextMenuItems="contextMenuItems" :editSettings  ='editing'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' isPrimaryKey='true'></e-column>
                <e-column field='CustomerName' headerText='Customer Name' width='160'></e-column>
                <e-column field='Freight' headerText='Freight' format='C2' textAlign='Right' editType='numericedit' width='120'></e-column>
                <e-column field='ShipName' headerText='Ship Name' width='200'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit'></e-column>
                <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
            </e-columns>
        </ejs-grid>
    </div>

     <div id="description">
        <p>
            Grid has options to show the context menu when right click on it. To configure the items in context menu, you should define
            either default or custom item in
            <code><a target="_blank" class="code"
                href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#contextmenuitems">contextMenuItems
                </a></code>. Each item will be shown based on it target. The default items are
            <br>
        </p>
        <ul>
            <li>
                <code>Edit</code> - Edit the current record.</li>
            <li>
                <code>Delete</code> - Delete the current record.</li>
            <li>
                <code>Save</code> - Save the edited record.</li>
            <li>
                <code>Cancel</code> - Cancel the edited state.</li>
            <li>
                <code>Copy</code> - Copy the selected records.</li>
            <li>
                <code>PdfExport</code> - Export the grid as Pdf format.</li>
            <li>
                <code>ExcelExport</code> - Export the grid as Excel format.</li>
            <li>
                <code>CsvExport</code> - Export the grid as CSV format.</li>
            <li>
                <code>SortAscending</code> - Sort the current column in ascending order.</li>
            <li>
                <code>SortDescending</code> - Sort the current column in descending order.</li>
            <li>
                <code>FirstPage</code> - Go to the first page.</li>
            <li>
                <code>PrevPage</code> - Go to the previous page.</li>
            <li>
                <code>LastPage</code> - Go to the last page.</li>
            <li>
                <code>NextPage</code> - Go to the next page.</li>
        </ul>

        <br/>
        <p>
            While using the Grid in a touch device environment, touch and hold the Grid row cell to show the context menu.
        </p>

        <p>
            In this demo, Context Menu feature has enabled by defining the
            <code> contextMenuItems </code> property with all default items.

        </p>

        <p style="font-weight: 500">Injecting Module</p>
        <p>
            Grid component features are segregated into individual feature-wise modules. To use Context Menu feature, we need to inject
            <code>ContextMenu</code> into the
            <code>provide</code> section.
        </p>
    </div>
</div>
</template>
<script lang="ts">
import Vue from "vue";
import { GridPlugin, ContextMenu, Sort, Edit, ExcelExport, PdfExport, Page, Resize } from "@syncfusion/ej2-vue-grids";
import { orderDetails } from "./data-source";

Vue.use(GridPlugin);

export default Vue.extend({
  data: () => {
    return {
    data: orderDetails,
    contextMenuItems: ['AutoFit', 'AutoFitAll', 'SortAscending', 'SortDescending',
            'Copy', 'Edit', 'Delete', 'Save', 'Cancel',
            'PdfExport', 'ExcelExport', 'CsvExport', 'FirstPage', 'PrevPage',
            'LastPage', 'NextPage'],
    editing: { allowDeleting: true, allowEditing: true }
    };
  },
  provide: {
      grid: [ContextMenu, Sort, Edit, ExcelExport, PdfExport, Page, Resize]
    }
});
</script>