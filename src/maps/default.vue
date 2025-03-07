<template>
<div>
<div class="control-section">
<ejs-maps id='container' :load='load' :titleSettings='titleSettings' :zoomSettings='zoomSettings' :legendSettings='legendSettings'>
    <template v-slot:asiaTemplate="{}">
        <div id="marker1" class="markerTemplate">Asia</div>
    </template>
    <template v-slot:australiaTemplate="{}">
        <div id="marker2" class="markerTemplate">Australia</div>
    </template>
    <template v-slot:africaTemplate="{}">
        <div id="marker3" class="markerTemplate">Africa</div>
    </template>
    <template v-slot:europeTemplate="{}">
        <div id="marker4" class="markerTemplate">Europe</div>
    </template>
    <template v-slot:northAmericaTemplate="{}">
        <div id="marker5" class="markerTemplate" style="width:50px">North America</div>
    </template>
    <template v-slot:southAmericaTemplate="{}">
        <div id="marker6" class="markerTemplate" style="width:50px">South America</div>
    </template>
    <e-layers>
        <e-layer :shapeData='shapeData' :shapePropertyPath='shapePropertyPath' :shapeDataPath='shapeDataPath' :dataSource='dataSource' :shapeSettings='shapeSettings'>
            <e-markerSettings>
                <e-markerSetting visible='true' shape='Image' imageUrl='src/maps/images/ballon.png' height='20' width='20' animationDuration='0' :dataSource='markerShapeDataSource' :tooltipSettings='markerTooltipSettings'></e-markerSetting>
                <e-markerSetting visible='true' animationDuration='0' :dataSource='asiaDataSource' :template="'asiaTemplate'"></e-markerSetting>
                <e-markerSetting visible='true' animationDuration='0' :dataSource='australiaDataSource' :template="'australiaTemplate'"></e-markerSetting>
                <e-markerSetting visible='true' animationDuration='0' :dataSource='africaDataSource' :template="'africaTemplate'"></e-markerSetting>
                <e-markerSetting visible='true' animationDuration='0' :dataSource='europeDataSource' :template="'europeTemplate'"></e-markerSetting>
                <e-markerSetting visible='true' animationDuration='0' :dataSource='northAmericaDataSource' :template="'northAmericaTemplate'"></e-markerSetting>
                <e-markerSetting visible='true' animationDuration='0' :dataSource='southAmericaDataSource' :template="'southAmericaTemplate'"></e-markerSetting>
            </e-markerSettings>
        </e-layer>
    </e-layers>
</ejs-maps>

    <div style="float: right; margin-right: 10px;">Source:
        <a href="https://craft.co/youtube/locations" target="_blank">craft.co/youtube/locations</a>
     </div>
</div>
<div id="action-description">
        <p>
            This sample visualizes the continents in the world by rendering these in a map layer. Also marks the office locations of YouTube in the world using markers.
       </p>
    </div>
    <div id="description">
        <p>
           In this example, you can see how to render a map with the provided GeoJSON data. Group of shapes can be combined to form a layer of the map. You can bind the desired colors from the data source to the map shapes. The marker templates are used to display the names for shapes and mark specific locations. Legend is enabled in this example to represent each continent.
        </p>
        <p>
    Tooltip is enabled in this example. To see the tooltip in action, hover the mouse over a marker or tap a marker in touch enabled devices.
        </p>
    <br/>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
           Maps component features are segregated into individual feature-wise modules. To use a marker, inject the <code>Marker</code> module using the <code>Maps.Inject(Marker)</code> method, and use a legend by injecting the <code>Legend</code> module.
        </p>
       
    </div>
</div>
</template>
<style scoped>
    .markerTemplate {
        font-size: 12px;
        color: white;
        text-shadow: 0px 1px 1px black;
        font-weight: 500;
        font-family: Segoe UI;
    }
</style>
<script>
import Vue from 'vue';
import { MapsPlugin,Legend, Marker, MapsTooltip, MapAjax } from '@syncfusion/ej2-vue-maps';
Vue.use(MapsPlugin);
export default Vue.extend({
data:function(){
    return{
        titleSettings: {
            text: 'YouTube office locations',
            textStyle: {
                size: '16px',
                fontFamily: 'Segoe UI'
            }
        },
        zoomSettings: {
            enable: false
        },
        legendSettings: {
            visible: true,
            textStyle: {
                fontFamily: 'Segoe UI'
            }
        },
        shapeData:new MapAjax('./src/maps/map-data/world-map.json'),
        shapePropertyPath: 'continent',
        shapeDataPath: 'continent',
        dataSource:new MapAjax('./src/maps/map-data/default-datasource.json'),
        shapeSettings: {
                    colorValuePath: 'color',
        },
        markerShapeDataSource: [
            { latitude: 37.6276571, longitude: -122.4276688, name: 'San Bruno' },
            { latitude: 33.5302186, longitude: -117.7418381, name: 'Laguna Niguel' },
            { latitude: 40.7424509, longitude: -74.0081468, name: 'New York' },
            { latitude: -23.5268201, longitude: -46.6489927, name: 'Bom Retiro' },
            { latitude: 43.6533855, longitude: -79.3729994, name: 'Toronto' },
            { latitude: 48.8773406, longitude: 2.3299627, name: 'Paris' },
            { latitude: 52.4643089, longitude: 13.4107368, name: 'Berlin' },
            { latitude: 19.1555762, longitude: 72.8849595, name: 'Mumbai' },
            { latitude: 35.6628744, longitude: 139.7345469, name: 'Minato' },
            { latitude: 51.5326602, longitude: -0.1262422, name: 'London' }
        ],
        markerTooltipSettings: {
            visible: true,
            valuePath: 'name',
            textStyle: {
                fontFamily: 'Segoe UI'
            }
        },
        asiaDataSource: [{ latitude: 50.32087157990324, longitude: 90.015625 }],
        australiaDataSource: [{ latitude: -25.88583769986199, longitude: 134.296875 }],
        africaDataSource: [{ latitude: 16.97274101999902, longitude: 16.390625 }],
        europeDataSource: [{ latitude: 49.95121990866204, longitude: 18.468749999999998 }],
        northAmericaDataSource: [{ latitude: 59.88893689676585, longitude: -109.3359375 }],
        southAmericaDataSource:  [{ latitude: -6.64607562172573, longitude: -55.54687499999999 }]
    }
},
provide: {
    maps: [Legend, Marker, MapsTooltip]
},
/* custom code start */
methods:{
   load: function(args) {
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.maps.theme =
        (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
    }  
}
/* custom code end */
})
</script>

