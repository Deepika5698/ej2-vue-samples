<template>
<div class="col-lg-12 control-section">
    <div>
        <ejs-gantt ref='gantt' id="HeaderTemplate" 
        :dataSource= "data"        
        :height = "height"
        :highlightWeekends= 'true'         
        :taskFields= "taskFields"
        :labelSettings= "labelSettings"
        :splitterSettings= "splitterSettings"
        :resourceFields= "resourceFields"
        :resources= "resources"
        :projectStartDate= "projectStartDate"
        :projectEndDate= "projectEndDate">
        <e-columns>
            <e-column field='TaskName' width='250' :headerTemplate="'nametemplate'"></e-column>
            <e-column field='StartDate' width='150' :headerTemplate="'datetemplate'"></e-column>
            <e-column field='resources' :headerTemplate="'resourcetemplate'"></e-column>
            <e-column field='Duration' :headerTemplate="'durationtemplate'"></e-column>
            <e-column field='Progress' :headerTemplate="'progresstemplate'"></e-column>
        </e-columns>
            <template v-slot:nametemplate="{data}">
            <div>
                    <img src="https://ej2.syncfusion.com/vue/demos/source/gantt/images/taskname.png" width="20px" height="20px" class="e-image"/> Task Name
                </div>
                </template>
            <template v-slot:datetemplate="{data}">
            <div>
                    <img src="https://ej2.syncfusion.com/vue/demos/source/gantt/images/startdate.png" width="20px" height="20px" class="e-image"/> Start Date
                </div>
                </template>
            <template v-slot:resourcetemplate="{data}">
            <div>
                    <img src="https://ej2.syncfusion.com/vue/demos/source/gantt/images/resources.png" width="20px" height="20px" class="e-image"/> Resources
                </div>
                </template>
            <template v-slot:durationtemplate="{data}">
            <div>
                    <img src="https://ej2.syncfusion.com/vue/demos/source/gantt/images/duration.png" width="20px" height="20px" class="e-image"/> Duration
                </div>
                </template>
            <template v-slot:progresstemplate="{data}">
            <div>
                    <img src="https://ej2.syncfusion.com/vue/demos/source/gantt/images/progress.png" width="20px" height="20px" class="e-image"/> Progress
                </div>
                </template>
    </ejs-gantt>       
    </div>

     <div id="action-description">
    <p>This sample demonstrates the Gantt header template feature. In this sample, custom icons have been shown in the column headers.</p>
    
</div>
<div id="description">
   <p>
        The Gantt provides a way to define a custom element in header element. The <code>Columns > headerTemplate</code> property accepts accepts a vue component,
        which will be used as the template for the header cell.
    </p>
    <p>In this demo, we have rendered the customized template for all column headers.</p> 
    <p>More information about the header template can be found in documentation section.</p>
</div>

</div>
</template>
<!-- custom code start -->
<style scoped>
   /deep/ .e-image {
        margin-right: 8px;
    }
</style>
<!-- custom code end -->
<script lang="ts">
import Vue from "vue";
import { GanttPlugin, Selection } from "@syncfusion/ej2-vue-gantt";
import { templateData, editingResources } from './data-source';

Vue.use(GanttPlugin);

export default Vue.extend({
  data: () => {
    return {
           data: templateData,
            height: '450px',             
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                resourceInfo: 'resources',
                dependency: 'Predecessor',
                child: 'subtasks'
            },
            resourceFields: {
                id: 'resourceId',
                name: 'resourceName'
            },
            resources: editingResources,
            labelSettings: {
                leftLabel: 'TaskName'
            },
            splitterSettings:{
                columnIndex: 4
            },
            projectStartDate: new Date('03/24/2019'),
            projectEndDate: new Date('07/06/2019'),
    };
  },
   provide : {
      gantt: [Selection],
    }
  });
</script>
