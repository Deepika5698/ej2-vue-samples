<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
    <p>This sample demonstrates the Tree Grid component with the auto wrap column cell feature. 
        In this sample, you can see that Task Name column cell content exceeded the available width hence it has been wrapped into multiple lines.
    </p>
</div>

<div id="description">
    <p>Auto wrap cell content can be enabled using <code>allowTextWrap</code> property of the Tree Grid. Setting this property will wrap cell text on multiple lines. 
        This feature is useful to view the cell content when it exceeds the cell width.</p>
    <p>Setting this property will wrap the text in both content cell and header cell.</p>
    <p>In this demo, the <code>allowTextWrap</code> property is enabled, and you can also see that the Task Name column whose content exceeded the cell width is wrapped into multiple lines.
    </p>
    <p>
        More information about Auto wrap cells can be found in this documentation section.
    </p>
</div>
    <div>
        <ejs-treegrid :dataSource='data' childMapping='subtasks' :allowTextWrap='true' :height='350' :treeColumnIndex='1' :allowPaging= 'true' :pageSettings='pageSettings'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' textAlign='Right' width='90'></e-column>
                <e-column field='taskName' headerText='Task Name' width='110'></e-column>
                <e-column field='startDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='endDate' headerText='End Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width='90' textAlign='Right'></e-column>
                <e-column field='progress' headerText='Progress' width='90' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
    </div>
</div>
</template>
<!-- custom code start -->
<style>
    .e-bigger.bootstrap5 .e-treegrid .e-treegridexpand, .e-bigger.bootstrap5 .e-treegrid .e-treegridcollapse,
    .e-bigger.bootstrap5-dark .e-treegrid .e-treegridexpand, .e-bigger.bootstrap5-dark .e-treegrid .e-treegridcollapse {
        width: 18px;
    }
</style>
<!-- custom code end -->
<script lang="ts">
import Vue from "vue";
import { TreeGridPlugin, Page } from "@syncfusion/ej2-vue-treegrid";
import { textWrapData } from "./data-source";

Vue.use(TreeGridPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: textWrapData,
      pageSettings: { pageCount: 4, pageSize: 10 }
    };
  },
  provide: {
      treegrid: [ Page ]
    },
   methods:{
  }

});
</script>