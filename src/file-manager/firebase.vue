<template>
<div>
    <div class="control-section file-firebase">
         <div class="sample-container">
            <ejs-filemanager id="overview_file" :ajaxSettings='ajaxSettings' :toolbarSettings='toolbarSettings' :contextMenuSettings="contextMenuSettings" >
            </ejs-filemanager>
        </div>
    </div>
    <div id="action-description">
       <p>This sample demonstrates how to utilize the Firebase realtime cloud storage database with File Manager component.To run the service, create an <a target="_blank" href="https://console.firebase.google.com/">firebase realtime database</a> and then register the firebase realtime database <i><b>Rest API link</b></i> and <i><b>root node</b></i> name  using <code>RegisterFirebaseRealtimeDB</code> method to perform the file operations.</p>
    </div>
    <div id="description">
         <p>The File Manager component is used to explore a file system through a web application, similar to the windows explorer for windows. It supports all the basic file operations such as create, rename, delete and so on.</p>
         <b>Note: </b>File Manager's upload functionality is restricted in online demo. To work with upload functionality, please download <a target="_blank" href="https://github.com/SyncfusionExamples/firebase-realtime-database-aspcore-file-provider">firebase-realtime-database-aspcore-file-provider</a> from the GitHub repository.
    </div>
</div>
</template>
<style>
.file-firebase .sample-container {
    margin: 10px 10px 10px 10px;
}
</style>
<script>
import Vue from "vue";
import { FileManagerPlugin, NavigationPane, Toolbar, DetailsView, FileManagerComponent } from "@syncfusion/ej2-vue-filemanager";

Vue.use(FileManagerPlugin);
/**
 * File Manager sample with firebase realtime database service
 */
let hostUrl = 'https://realtime-firebase.azurewebsites.net/';
export default Vue.extend ({
     data: function() {
        return {            
           ajaxSettings:  {
                url: hostUrl + 'api/FirebaseProvider/FirebaseRealtimeFileOperations',
                getImageUrl: hostUrl + 'api/FirebaseProvider/FirebaseRealtimeGetImage',
                uploadUrl: hostUrl + 'api/FirebaseProvider/FirebaseRealtimeUpload',
                downloadUrl: hostUrl + 'api/FirebaseProvider/FirebaseRealtimeDownload'
            },
            toolbarSettings: { items: ['NewFolder', 'SortBy', 'Cut', 'Copy', 'Paste', 'Delete', 'Refresh', 'Download', 'Rename', 'Selection', 'View', 'Details']},
            contextMenuSettings: {
                layout: ["SortBy", "View", "Refresh", "|", "Paste",  "|", "NewFolder", "|", "Details", "|", "SelectAll"],
                visible: true
            }
        };
    },
    provide: {
            filemanager: [NavigationPane, DetailsView, Toolbar]
    }
});
</script>