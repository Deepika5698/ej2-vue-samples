<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the way of data binding Grid component with remote service. The Grid data source is bound to
        remote data using DataManager.
        </p>
    </div>
    <div>
        <ejs-grid :dataSource="data" :allowPaging='true'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width='160'></e-column>
                <e-column field='EmployeeID' headerText='Employee ID' width='120' textAlign='Right'></e-column>
                <e-column field='Freight' headerText='Freight' width='150' format='C2' textAlign='Right'></e-column>
                <e-column field='ShipCountry' headerText='ShipCountry' width='150' ></e-column>
            </e-columns>
        </ejs-grid>
    </div>

     <div id="description">
        <p>The Grid supports data binding. The <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#datasource">
        dataSource
        </a></code> property can be assigned with the instance of <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/documentation/data/api-dataManager.html">
        DataManager</a></code> to bind remote data.</p>
        
        <p>The DataManager, which will act as an 
            interface between the service endpoint and the Grid, will require the below minimal information to interact with service endpoint properly.
        </p>
        <ul>
            <li><code>DataManager->url</code> - Defines the service endpoint to fetch data</li>
            <li><code>DataManager->adaptor</code> - Defines the adaptor option. By default, <code>ODataAdaptor</code> is used for remote binding.</li>
        </ul>
        <p>Adaptor is responsible for processing response and request from/to the service endpoint. <code>@syncfusion/ej2-data</code> package provides
        some predefined adaptors which are designed to interact with particular service endpoints. They are,</p>
        <ul>
            <li><code>UrlAdaptor</code> - Use this to interact any remote services. This is the base adaptor for all remote based adaptors.</li>
            <li><code>ODataAdaptor</code> - Use this to interact with OData endpoints.</li>
            <li><code>ODataV4Adaptor</code> - Use this to interact with OData V4 endpoints.</li>
            <li><code>WebApiAdaptor</code> - Use this to interact with Web API created under OData standards.</li>
            <li><code>WebMethodAdaptor</code> - Use this to interact with web methods.</li>
        </ul>
        <p>In this demo, remote data is bound by assigning service data as an instance of <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/documentation/data/api-dataManager.html">
        DataManager</a></code> to the <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#datasource">
        dataSource
        </a></code> property.</p>

        <p>
            More information on the data binding can be found in this
            <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/grid/data-binding.html#remote-data">documentation section</a>.
        </p>
    </div>

</div>
</template>
<script lang="ts">
import Vue from "vue";
import { GridPlugin, Page } from "@syncfusion/ej2-vue-grids";
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";

Vue.use(GridPlugin);

export default Vue.extend({
  data: () => {
    let SERVICE_URI: string =
      "https://services.syncfusion.com/vue/production/";
    return {
      data: new DataManager({
        url: SERVICE_URI + 'api/Orders',
        adaptor: new WebApiAdaptor()
      })
    };
  },
  provide: {
      grid: [Page]
  }
});
</script>
