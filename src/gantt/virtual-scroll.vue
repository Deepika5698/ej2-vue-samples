<template>
<div>
<div class="control-section">
    <div class="content-wrapper">
        <ejs-gantt ref='gantt' id="virtualscroll"  
            :dataSource= "data"
            :taskFields= "taskFields"
            :allowSelection= "true"
            :enableVirtualization= "true"
			:labelSettings= "labelSettings"
            :height= "height"
            :treeColumnIndex= "1"
            :highlightWeekends= "true"
            :columns= "columns"
            :splitterSettings= "splitterSettings">
        </ejs-gantt>
    </div>
</div>

<div id="action-description">
    <p>This sample demonstrates the Virtual Scroll support in the Gantt Chart. This feature allows users to load a large amount of data effectively.
        It also reduces the DOM element's weight by virtually updating DOM during the vertical scroll.</p>
</div>

<div id="description">
    <p>Virtualization support is used to render large number tasks in Gantt with effective performance. In this mode all the tasks are
        fetched from data source initially, then some of the records are rendered in DOM which are compact to the current viewport area.
        While scrolling tasks are updated in DOM as per current viewport position. This mode can be enabled by setting
        <code>enableVirtualization</code> property as true. </p>
    <p>By default during Virtual scroll Shimmer effect is enabled you can disable this by changing <code>enableVirtualMaskRow</code> to false</p>
</div>
</div>
</template>
<script>
import Vue from "vue";
import { GanttPlugin, Selection, VirtualScroll } from "@syncfusion/ej2-vue-gantt";
import { virtualData } from './data-source';
Vue.use(GanttPlugin);
export default Vue.extend({
  data: function() {
      return{
            data: virtualData,
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                parentID: 'parentID'
            },
            columns: [
               { field: 'TaskID' },
                { field: 'TaskName' },
                { field: 'StartDate' },
                { field: 'Duration' },
                { field: 'Progress' }
            ],
            height: '450px',
            labelSettings: {
               taskLabel: 'Progress'
            },
            splitterSettings: {
                columnIndex: 2
            }
      };
  },
  provide: {
      gantt: [ Selection, VirtualScroll]
  }
});
</script>