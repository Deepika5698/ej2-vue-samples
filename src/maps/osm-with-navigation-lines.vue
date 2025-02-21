<template>
<div>
<div class="control-section">
<div>
<ejs-maps id='container' :load='load' :titleSettings='titleSettings' :zoomSettings='zoomSettings' :annotations='annotations' :centerPosition='centerPosition'>
    <template v-slot:mexicoSvgTemplate="{}">
        <div><img src="src/maps/images/group.svg" style="height:15px;width:15px;"></img></div>
    </template>
    <template v-slot:mexicoBalloonTemplate="{}">
        <div><img src="src/maps/images/ballon.png" style="height:30px;width:20px;"></img></div>
    </template>
    <template v-slot:mexicoTextTemplate="{}">
        <div style= "font-weight:500; font-size: 13px; text-align: left; font-family:Segoe UI; ">Mexico</div>
    </template>
    <template v-slot:laSvgTemplate="{}">
        <div><img src="src/maps/images/oval.svg" style="height:15px;width:15px;"></img></div>
    </template>
    <template v-slot:laBalloonTemplate="{}">
        <div><div style="text-align: right; font-weight:500; font-size: 13px; font-family:Segoe UI;">Los Angeles</br>International Airport</div></div>
    </template>
    <template v-slot:laTextTemplate="{}">
        <div><img src="src/maps/images/map-tooltip.svg" style="height:50px;width:100px;"></img></div>
    </template>
    <e-layers>
        <e-layer layerType='OSM' :navigationLineSettings='navigationLineSettings'>
            <e-markerSettings>
                <e-markerSetting visible='true' :dataSource='mexicoSvgDataSource' :template="'mexicoSvgTemplate'" :tooltipSettings='mexicoSvgTooltipSettings'></e-markerSetting>
                <e-markerSetting visible='true' :dataSource='mexicoBalloonDataSource' :template="'mexicoBalloonTemplate'" :tooltipSettings='mexicoBalloonTooltipSettings'></e-markerSetting>
                <e-markerSetting visible='true' :dataSource='mexicoTextDataSource' :template="'mexicoTextTemplate'"></e-markerSetting>
                <e-markerSetting visible='true' :dataSource='laSvgDataSource' :template="'laSvgTemplate'" :tooltipSettings='laSvgTooltipSettings'></e-markerSetting>
                <e-markerSetting visible='true' :dataSource='laBalloonDataSource' :template="'laBalloonTemplate'"></e-markerSetting>
                <e-markerSetting visible='true' :dataSource='laTextDataSource' :template="'laTextTemplate'"></e-markerSetting>
            </e-markerSettings>
        </e-layer>
    </e-layers>
</ejs-maps>
</div>
   <div style="float: right"> 
        <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>
    </div>
    <br/>

    <div style="float: right; margin-right: 10px;">Source:
        <a href="https://www.google.co.in/maps/dir/Los+Angeles,+CA,+USA/Mexico+City,+Mexico/@26.3645122,-117.6940069,5z/data=!4m14!4m13!1m5!1m1!1s0x80c2c75ddc27da13:0xe22fdf6f254608f4!2m2!1d-118.2436849!2d34.0522342!1m5!1m1!1s0x85ce0036b1352927:0xdefd9e4ee8d18a5b!2m2!1d-99.1013498!2d19.2464696!3e4?hl=en" target="_blank">www.google.co.in/maps</a>
    </div>  
</div>
<div id="action-description">
        <p>
            This sample illustrates the flight route from Los Angeles to Mexico City using navigation lines in the OpenStreetMap.
       </p>
    </div>
    <div id="description">
        <p>
            In this example, you can see how to render the navigation lines in the OpenStreetMap. The source and destination locations have been denoted using the marker template.
       
        <p style="font-weight: 500">Injecting Module</p>
        <p>
            The maps component features are segregated into individual modules by feature. To use a marker, inject the Marker module using the <code>Maps.Inject(Marker)</code> method.
        </p>
    </div>
</div>
</template>
<script>
import Vue from 'vue';
import { MapsPlugin,Bubble, Zoom, MapsTooltip, Marker, NavigationLine } from '@syncfusion/ej2-vue-maps';
Vue.use(MapsPlugin);
export default Vue.extend({
data:function(){
    return{
        titleSettings: {
            text: 'Flight route from Los Angeles to Mexico city',
            textStyle: {
                size: '16px',
                fontFamily: 'Segoe UI'
            }
        },
        zoomSettings: {
            zoomFactor: 5,
            enable: false
        },
        centerPosition: {
            latitude: 27.0902,
            longitude: -105.7129
        },
        annotations: [{
            content: '<div style="height:18px;width:170px;background:white;text-align:center">' +
                '<a href="https://www.openstreetmap.org/copyright"  target = "_blank" > © OpenStreetMap contributors </a></div > ',
            verticalAlignment: 'Far',
            zIndex: '1',
            x: '-40',
            y: '-20',
            horizontalAlignment: 'Far'
        }],
        mexicoSvgDataSource: [{ name: 'Mexico City', latitude: 23.6445, longitude: -102.832 }],
        mexicoSvgTooltipSettings: {
            visible: true,
            valuePath: 'name',
            textStyle: {
                fontFamily: 'Segoe UI'
            }
        },
        mexicoBalloonDataSource: [{ name: 'Mexico City', latitude: 24.2005, longitude: -102.832 }],
        mexicoBalloonTooltipSettings: { visible: true, valuePath: 'name' },
        mexicoTextDataSource: [{ name: 'Mexico City', latitude: 24.0005, longitude: -101.200 }],
        laSvgDataSource: [{ name: 'Los Angeles', latitude: 34.0522, longitude: -118.2437 }],
        laSvgTooltipSettings: { visible: true, valuePath: 'name' },
        laBalloonDataSource: [{ name: 'Los Angeles City', latitude: 34.7000, longitude: -121.5000 }],
        laTextDataSource: [{ latitude: 28.5, longitude: -110.400 }],
        navigationLineSettings: [{
            width: 8,
            visible: true,
            angle: -0.05,
            color: '#00ace6',
            latitude: [23.6445, 34.0522],
            longitude: [-102.832, -118.2437]
        }]
    }
},
provide: {
    maps: [Zoom, Bubble, MapsTooltip, Marker, NavigationLine]
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