<template>
<div>
    <div class="control-section file-sql">
         <div class="sample-container">
            <ejs-filemanager id="filemanager" :ajaxSettings='ajaxSettings' :toolbarSettings='toolbarSettings' :contextMenuSettings="contextMenuSettings" >
            </ejs-filemanager>
        </div>
    </div>
    <div id="action-description">
        <p>This sample demonstrates how to utilize the <a target="_blank" href="https://github.com/SyncfusionExamples/sql-server-database-aspcore-file-provider">SQL server file system provider</a> with File Manager component. To run the service, configure the SQL server database connection using the <code>SetSQLConnection</code> method to set the connection <i><b>name</b></i>, <i><b>table name</b></i> and <i><b>rootId</b></i> of the SQL table.</p>
    </div>
    <div id="description">
        <p>The File Manager component is used to explore a file system through a web application, similar to the windows explorer for windows. It supports all the basic file operations such as create, rename, delete and so on.</p>

         <p><b>Note: </b>File Manager’s upload functionality is restricted in online demo. To work with upload functionality, please download <a target="_blank" href="https://github.com/SyncfusionExamples/sql-server-database-aspcore-file-provider">SQL Database Provider</a> from the GitHub repository.</p>
    </div>
</div>
</template>
<style>
.file-sql .sample-container {
    margin: 10px 10px 10px 10px;
}
</style>
<script>
import Vue from "vue";
import { FileManagerPlugin, NavigationPane, Toolbar, DetailsView, ContextMenu, FileManagerComponent } from "@syncfusion/ej2-vue-filemanager";

Vue.use(FileManagerPlugin);
/**
 * File Manager sample with SQL service
 */
let hostUrl = 'https://ng2jq.syncfusion.com/ej2-sql-service/';
export default Vue.extend ({
     data: function() {
        return {            
           ajaxSettings:  {
                url: hostUrl + 'api/FileManager/Fileoperations',
                getImageUrl: hostUrl + 'api/FileManager/GetImage',
                uploadUrl: hostUrl + 'api/FileManager/Upload',
                downloadUrl: hostUrl + 'api/FileManager/Download'
            },
            toolbarSettings: { items: ['NewFolder', 'SortBy', 'Cut', 'Copy', 'Paste', 'Delete', 'Refresh', 'Download', 'Rename', 'Selection', 'View', 'Details']},
            contextMenuSettings: {
                layout: ["SortBy", "View", "Refresh", "|", "Paste",  "|", "NewFolder", "|", "Details", "|", "SelectAll"],
                visible: true
            }
        };
    },
    provide: {
            filemanager: [NavigationPane, DetailsView, Toolbar, ContextMenu]
    }
});
</script>
