<template>
<div class="control-section">
      <div class="col-md-9 control-section">
           <ejs-treegrid ref='treegrid' :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' :selectionSettings='selectionSettings' :editSettings='editSettings' height='900'>
            <e-columns>
                 <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right' isPrimaryKey='true' :edit='editparams' :validationRules='taskidrules'></e-column>
                 <e-column field='taskName' headerText='Task Name' width='190'  editType= 'stringedit' :validationRules='tasknamerules'></e-column>
                 <e-column field='startDate' headerText='Start Date' width='100' format="yMd"  editType='datepickeredit' textAlign='Right' :validationRules='startdaterules'></e-column>
                 <e-column field='duration' headerText='Duration' width='90' textAlign='Right' :edit='editparams' editType='numericedit' :validationRules='durationrules'></e-column>
            </e-columns>
        </ejs-treegrid>
      </div>
      <div>
        <div class="col-md-3 property-section">
             <table id="property" title="Event Trace">
                    <tr style="height: 50px">
            <td style="width: 30%">
                <b>Keys</b>
            </td>
            <td style="width: 70%;padding-right: 10px">
                <b>Description</b>
            </td>
         </tr>
         <tr style="height:50px;">
            <td style="width: 30%">
                <b>F2</b>
            </td>
            <td style="width: 30%">
                Row edit
            </td>
         </tr>
         <tr style="height:50px;">
            <td style="width: 30%">
                <b>Enter</b>
            </td>
            <td style="width: 30%">
                Save request
            </td>
         </tr>
         <tr style="height:50px;">
            <td style="width: 30%">
                <b>Delete</b>
            </td>
            <td style="width: 30%">
                Delete row
            </td>
         </tr>
         <tr style="height:50px;">
             <td style="width: 30%">
                <b>Ctrl + Shift + UpArrow</b>
            </td>
            <td style="width: 30%">
                Collapse Child Grid
            </td>
         </tr>
         <tr style="height:50px;">
            <td style="width: 30%">
                <b>Ctrl + Shift + DownArrow</b>
            </td>
            <td style="width: 30%">
                Expand Child Grid
            </td>
         </tr>
         <tr style="height:50px;">
            <td style="width: 30%">
                <b>Ctrl + UpArrow</b>
            </td>
            <td style="width: 30%">
                Collapse All
            </td>
        </tr>
        <tr style="height:50px;">
            <td style="width: 30%">
                <b>Ctrl + DownArrow</b>
            </td>
            <td style="width: 30%">
                Expand All
            </td>
        </tr>
        <tr style="height:50px;">
            <td style="width: 30%">
                <b>Ctrl + Home</b>
            </td>
            <td style="width: 30%">
                First row selection
            </td>
        </tr>
        <tr style="height:50px;">
            <td style="width: 30%">
                <b>Ctrl + End</b>
            </td>
            <td style="width: 30%">
                Last row selection
            </td>
        </tr>
        <tr style="height:50px;">
            <td style="width: 30%">
                <b>Home</b>
            </td>
            <td style="width: 30%">
                First cell selection
            </td>
        </tr>
        <tr style="height:50px;">
            <td style="width: 30%">
                <b>End</b>
            </td>
            <td style="width: 30%">
                Last cell selection
            </td>
        </tr>
        <tr style="height:50px;">
            <td style="width: 30%">
                <b>Up Arrow</b>
            </td>
            <td style="width: 30%">
                Move row selection up
            </td>
        </tr>
        <tr style="height:50px;">
            <td style="width: 30%">
                <b>Down Arrow</b>
            </td>
            <td style="width: 30%">
                Move row selection down
            </td>
        </tr>
        <tr style="height:50px;">
            <td style="width: 30%">
                <b>Right Arrow</b>
            </td>
            <td style="width: 30%">
                Move Cell selection right
            </td>
        </tr>
        <tr style="height:50px;">
            <td style="width: 30%">
                <b>Left Arrow</b>
            </td>
            <td style="width: 30%">
                Move Cell selection left
            </td>
        </tr>
        <tr style="height:50px;">
            <td style="width: 30%">
                <b>Shift + Down/Up</b>
            </td>
            <td style="width: 30%">
                Multiple row Selection
            </td>
        </tr>
        <tr style="height:50px;">
            <td style="width: 30%">
                <b>Alt + j</b>
            </td>
            <td style="width: 30%">
                Focus Tree Grid element
            </td>
        </tr>
    </table>
        </div>
    </div>

    <div id="action-description">
    <p>This demo showcases the keyboard shortcuts applicable on Tree Grid and also lists out in below description, how those applicable 
        shortcuts interacts with Tree Grid actions.
    </p>
</div>
<div id="description">
    <p>
        All the Tree Grid actions can be controlled via keyboard keys and is availed by using <code>allowKeyboardInteraction</code> property which is set to true by default. The applicable key 
          combinations and its relative functionalities are listed below.
    </p>
    <p>
        <table>
            <tr><td><b>Keys</b></td><td><b>Description</b></td></tr>
            <tr><td><code>Ctrl + Down Arrow</code></td><td>ExpandAll</td></tr>
            <tr><td><code>Ctrl + Up Arrow</code></td><td>CollapseAll</td></tr>
            <tr><td><code>F2</code></td><td>Edit</td></tr>
            <tr><td><code>ESC</code></td><td>Cancel</td></tr>
            <tr><td><code>Enter</code></td><td>Save</td></tr>
            <tr><td><code>Insert</code></td><td>Add</td></tr>
            <tr><td><code>Delete</code></td><td>Delete</td></tr>
            <tr><td><code>Ctrl + Home</code></td><td>First row selection</td></tr>
            <tr><td><code>Ctrl + End</code></td><td>Last row selection</td></tr>
            <tr><td><code>Home</code></td><td>First cell selection</td></tr>
            <tr><td><code>End</code></td><td>Last cell selection</td></tr>
            <tr><td><code>Up Arrow</code></td><td>Move row selection up</td></tr>
            <tr><td><code>Down Arrow</code></td><td>Move row selection down</td></tr>
            <tr><td><code>Up Arrow</code></td><td>Move Cell selection up</td></tr>
            <tr><td><code>Down Arrow</code></td><td>Move Cell selection down</td></tr>
            <tr><td><code>Right Arrow</code></td><td>Move Cell selection right</td></tr>
            <tr><td><code>Left Arrow</code></td><td>Move Cell selection left</td></tr>
            <tr><td><code>Shift + Down/Up</code></td><td>Multiple row Selection</td></tr>
            <tr><td style="width:70%"><code>Shift + Right/Left/Down/Up</code></td><td>Multiple Cell Selection</td></tr>
            <tr><td><code>Ctrl + Shift + Up Arrow</code></td><td>Collapse selected parent row</td></tr>
            <tr><td><code>Ctrl + Shift + Down Arrow</code></td><td>Expand selected parent row</td></tr>
            <tr><td><code>Alt + j</code></td><td>Focus Tree Grid element</td></tr>
            <tr><td><code>Tab</code></td><td>Go to next cell for editing</td></tr>
            <tr><td><code>Shift + Tab</code></td><td>Go to previous cell for editing</td></tr>
            <tr><td><code>PageDown</code></td><td>Go to Next page</td></tr>
            <tr><td><code>PageUp</code></td><td>Go to Previous page</td></tr>
            <tr><td><code>Ctrl + Alt + PageUp</code></td><td>Go to First page</td></tr>
            <tr><td><code>Ctrl + Alt + PageDown</code></td><td>Go to Last page</td></tr>
            <tr><td><code>Alt + PageUp</code></td><td>Go to Next pager</td></tr>
            <tr><td><code>Alt + PageDown</code></td><td>Go to last pager</td></tr>
        </table>
    </p>

    <p>
        More information on the Tree Grid keyboard interaction can be found in the documentation section.
    </p>
</div> 
</div>
</template>
<!-- custom code start -->
<style scoped>
        #EventLog b{
            color: #388e3c;
        }
        hr {
            margin: 1px 10px 1px 0px;
            border-top: 1px solid #eee;
        }
</style>
<!-- custom code end -->
<script lang="ts">
import Vue from "vue";
import { TreeGridPlugin, Page, Edit, TreeGridComponent } from "@syncfusion/ej2-vue-treegrid";
import { DropDownListPlugin, ChangeEventArgs} from "@syncfusion/ej2-vue-dropdowns";
import { sampleData } from "./data-source";

Vue.use(TreeGridPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: sampleData,
      selectionSettings: { type: 'Multiple' },
      editSettings: { allowDeleting: true, allowEditing: true, allowAdding: true, mode: 'Row' },
      editparams : { params: { format: 'n' } },
      taskidrules : { required: true , number: true},
      tasknamerules : { required: true},
      startdaterules : { date: true},
      enddaterules : { date: true},
      durationrules : { number: true , min: 0},
      progressrules : { number: true , min: 0},
    };
  },
  provide: {
      treegrid: [ Page, Edit ]
    },
   methods:{
  }

});
</script>
