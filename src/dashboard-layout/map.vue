<template>
<div class="maps-container">
<ejs-maps class="map-container" :load='load' style='display:block;height:100%;width:100%;' ref="mapInstance" :legendSettings='legendSettings'>
    <e-layers>
        <e-layer :shapeData='shapeData' :shapePropertyPath='shapePropertyPath' :shapeDataPath='shapeDataPath' :dataSource='dataSource' :shapeSettings='shapeSettings' :markerSettings='markerSettings'></e-layer>
    </e-layers>
</ejs-maps>

</div>
</template>
<style>
    .dashboard-seo .markerTemplate {
        font-size: 12px;
        color: white;
        text-shadow: 0px 1px 1px black;
        font-weight: 500
    }
</style>
<script>
import Vue from 'vue';
import { MapsPlugin,Legend, Marker, MapsTooltip, MapAjax } from '@syncfusion/ej2-vue-maps';
Vue.use(MapsPlugin);
export default Vue.extend({
data:function(){
    return{
        legendSettings: {
            visible: false
        },
        shapeData:new MapAjax('./src/dashboard-layout/map-data/world-map.json'),
        shapePropertyPath: 'continent',
        shapeDataPath: 'continent',
        dataSource:new MapAjax('./src/dashboard-layout/map-data/default-datasource.json'),
        shapeSettings: {
                    colorValuePath: 'color',
        },
        markerSettings: [
                    {
                        visible: true,
                        dataSource: [
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
                        shape: 'Image',
                        imageUrl: './src/dashboard-layout/images/ballon.png',
                        height: 20,
                        width: 20,
                        offset: {
                            y: -10,
                            x: 0
                        },
                        tooltipSettings: {
                            visible: true,
                            valuePath: 'name'
                        },
                        animationDuration: 0
                    },
                    {
                        visible: true,
                        tooltipSettings: {
                            visible: true
                        },
                        template: '<div id="marker1" class="markerTemplate">Asia' +
                            '</div>',
                        dataSource: [
                            { latitude: 50.32087157990324, longitude: 90.015625 }
                        ],
                        animationDuration: 0
                    },
                    {
                        visible: true,
                        template: '<div id="marker2" class="markerTemplate">Australia' +
                            '</div>',
                        dataSource: [
                            { latitude: -25.88583769986199, longitude: 134.296875 }
                        ],
                        animationDuration: 0
                    },
                    {
                        visible: true,
                        template: '<div id="marker3" class="markerTemplate">Africa' +
                            '</div>',
                        dataSource: [
                            { latitude: 16.97274101999902, longitude: 16.390625 }
                        ],
                        animationDuration: 0
                    },
                    {
                        visible: true,
                        template: '<div id="marker4" class="markerTemplate">Europe' +
                            '</div>',
                        dataSource: [
                            { latitude: 49.95121990866204, longitude: 18.468749999999998 }
                        ],
                        animationDuration: 0,
                    },
                    {
                        visible: true,
                        template: '<div id="marker5" class="markerTemplate" style="width:50px">North America' +
                            '</div>',
                        dataSource: [
                            { latitude: 59.88893689676585, longitude: -109.3359375 }
                        ],
                        animationDuration: 0
                    },
                    {
                        visible: true,
                        template: '<div id="marker6" class="markerTemplate" style="width:50px">South America' +
                            '</div>',
                        dataSource: [
                            { latitude: -6.64607562172573, longitude: -55.54687499999999 }
                        ],
                        animationDuration: 0
                    },
                ]
    }
},
provide: {
    maps: [Legend, Marker, MapsTooltip]
},
methods: {
    load: function(args) {
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.maps.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
    }
},
mounted() {
    this.$refs.mapInstance.height ="100%";
    this.$refs.mapInstance.width ="100%";
  }

})
</script>
<style>
.dashboard-seo .map-container,.dashboard-seo .maps-container{
    height:100%;
    width: 100%;
}
</style>