<template>
  <div class="control-section">
    <div id="spreadsheet-cell-binding">
        <ejs-spreadsheet  ref="spreadsheet" :showRibbon="false" :showFormulaBar="false" :created="created">
            <e-sheets>
                <e-sheet name="Monthly Budget" selectedRange="D13">
                    <e-rows>
                        <e-row>
                            <e-cells>
                                <e-cell value="Category"></e-cell>
                                <e-cell value="Planned cost"></e-cell>
                                <e-cell value="Actual cost"></e-cell>
                                <e-cell value="Difference"></e-cell>
                            </e-cells>
                        </e-row>
                        <e-row>
                            <e-cells>
                                <e-cell value="Food"></e-cell>
                                <e-cell value="$7000"></e-cell>
                                <e-cell value="$8120"></e-cell>
                                <e-cell formula="=B2-C2" format="$#,##0.00"></e-cell>
                            </e-cells>
                        </e-row>
                        <e-row>
                            <e-cells>
                                <e-cell value="Loan"></e-cell>
                                <e-cell value="$1500"></e-cell>
                                <e-cell value="$1500"></e-cell>
                                <e-cell formula="=B3-C3" format="$#,##0.00"></e-cell>
                            </e-cells>
                        </e-row>
                        <e-row>
                            <e-cells>
                                <e-cell value="Medical"></e-cell>
                                <e-cell value="$300"></e-cell>
                                <e-cell value="$0"></e-cell>
                                <e-cell formula="=B4-C4" format="$#,##0.00"></e-cell>
                            </e-cells>
                        </e-row>
                        <e-row>
                            <e-cells>
                                <e-cell value="Clothing"></e-cell>
                                <e-cell value="$400"></e-cell>
                                <e-cell value="$140"></e-cell>
                                <e-cell formula="=B5-C5" format="$#,##0.00"></e-cell>
                            </e-cells>
                        </e-row>
                        <e-row>
                            <e-cells>
                                <e-cell value="Education"></e-cell>
                                <e-cell value="$900"></e-cell>
                                <e-cell value="$750"></e-cell>
                                <e-cell formula="=B6-C6" format="$#,##0.00"></e-cell>
                            </e-cells>
                        </e-row>
                        <e-row>
                            <e-cells>
                                <e-cell value="Insurance"></e-cell>
                                <e-cell value="$30"></e-cell>
                                <e-cell value="$30"></e-cell>
                                <e-cell formula="=B7-C7" format="$#,##0.00"></e-cell>
                            </e-cells>
                        </e-row>
                        <e-row>
                            <e-cells>
                                <e-cell value="Utilities"></e-cell>
                                <e-cell value="$130"></e-cell>
                                <e-cell value="$160"></e-cell>
                                <e-cell formula="=B8-C8" format="$#,##0.00"></e-cell>
                            </e-cells>
                        </e-row>
                        <e-row>
                            <e-cells>
                                <e-cell value="Enterainment"></e-cell>
                                <e-cell value="$500"></e-cell>
                                <e-cell value="$730"></e-cell>
                                <e-cell formula="=B9-C9" format="$#,##0.00"></e-cell>
                            </e-cells>
                        </e-row>
                        <e-row>
                            <e-cells>
                                <e-cell value="Maintainance"></e-cell>
                                <e-cell value="$50"></e-cell>
                                <e-cell value="$70"></e-cell>
                                <e-cell formula="=B10-C10" format="$#,##0.00"></e-cell>
                            </e-cells>
                        </e-row>
                        <e-row>
                            <e-cells>
                                <e-cell value="Transportation"></e-cell>
                                <e-cell value="$250"></e-cell>
                                <e-cell value="$400"></e-cell>
                                <e-cell formula="=B11-C11" format="$#,##0.00"></e-cell>
                            </e-cells>
                        </e-row>
                        <e-row>
                            <e-cells>
                                <e-cell value="Gifts/Donations"></e-cell>
                                <e-cell value="$0"></e-cell>
                                <e-cell value="$100"></e-cell>
                                <e-cell formula="=B12-C12" format="$#,##0.00"></e-cell>
                            </e-cells>
                        </e-row>
                        <e-row>
                            <e-cells>
                                <e-cell :index="2" value="Total Difference:"></e-cell>
                                <e-cell formula="=D2+D12" format="$#,##0.00"></e-cell>
                            </e-cells>
                        </e-row>
                    </e-rows>
                    <e-columns>
                        <e-column :width="110"></e-column>
                        <e-column :width="115"></e-column>
                        <e-column :width="110"></e-column>
                        <e-column :width="100"></e-column>
                    </e-columns>
                </e-sheet>
            </e-sheets>
        </ejs-spreadsheet>
    </div>
    <!-- custom code start -->
     <div id="action-description">
        <p>
            This sample illustrates a monthly budget for a home using planned versus actual costs with cell data binding
            feature.
        </p>
     </div>
    <div id="description">
        <p>
            The <code>Spreadsheet</code> component supports data binding for individual cells in a sheet. You can set value
            and format to a cell using following properties:
            <ul>
                <li><code>index</code> - Specify index for a cell.</li>
                <li><code>value</code> - Specify cell value.</li>
                <li><code>format</code> - Apply number formatting for the cell.</li>
            </ul>
        </p>
        <p>
            More information about cell data binding feature can be found in this
            <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/spreadsheet/data-binding/#cell-data-binding">
            documentation</a> section.
        </p>
     </div>
     <!-- custom code end -->
  </div>
</template>
<!-- custom code start -->
<style>
    #spreadsheet-cell-binding {
        height: 550px;
    }
    #sb-content .e-spreadsheet .e-tab .e-tab-text {
        display: inherit;
    }
</style>
<!-- custom code end -->
<script>
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
Vue.use(SpreadsheetPlugin);
export default Vue.extend({
   data: () => {
    return {
    }
  },
  methods: {
    created: function() {
        var spreadsheet = this.$refs.spreadsheet;
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:D1');
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'right' }, 'C13');
        spreadsheet.cellFormat({ fontWeight: 'bold' }, 'D13');
    }
  }
});
</script>