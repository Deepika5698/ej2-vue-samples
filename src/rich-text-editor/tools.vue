<template>
<div>
<div class="control-section">
    <div class="sample-container">
        <div class="default-section">
        <ejs-richtexteditor ref="rteObj" :value="value" :toolbarSettings="toolbarSettings" :actionBegin="handleFullScreen" :actionComplete="actionCompleteHandler" :showCharCount="showCharCount" :maxLength="maxLength" :fileManagerSettings="fileManagerSettings" :quickToolbarSettings='quickToolbarSettings'></ejs-richtexteditor>
        </div>
    </div>
</div>
<div id="action-description">
    <p>This sample demonstrates the full features of Rich Text Editor that includes all the tools and functionalities.</p>
</div>

<div id="description">
    <p>The editor’s toolbar contains commands to format the content. The toolbar consists of:</p>
    <ul>
        <li><code>Lists</code> - NumberFormat list and BulletFormat list types.</li>
        <li><code>Links</code> - A hyperlink can be inserted into the editor for quick access to related information.</li>
        <li><code>Image</code> - Inserts and manages images.</li>
        <li><code>Table</code> - Inserts and manages Tables.</li>
        <li><code>Alignment</code> - Aligns the content with left, center, and right margins.</li>
        <li><code>Undo/Redo</code> - Allows undo/redo operations.</li>
        <li><code>Indent/ Outdent</code> - Increases/decreases the indent level of the content.</li>
        <li><code>Lower / Upper case</code> – Changes the casing of the selected text.</li>
        <li><code>SubScript / SuperScript</code> - Makes the selected text as subscript (lower)/superscript(upper).</li>
        <li><code>FullScreen</code> - Stretches the editor to the maximum width and height of the browser window.</li>
        <li><code>Format</code> – Formats the sentence in different ways such as heading level, quotation, and code snippet</li>
        <li><code>Styles</code> – Allows you to apply inline styles to the selected content like bold, italic, and more.</li>
        <li><code>Insert Code</code> - Allows you to apply code format to the selected parent nodes. In the above sample, the style for the code format ('pre' tag) is applied by adding the background color.</li>
        <li><code>Insert Emoticon</code> - Inserts the emoticon to the editor</li>
    </ul>
    <p><b>Injecting Module</b></p>
    <p>The above features built as modules have to be included in your application. For example, to use image and link, we need to inject <code>Toolbar, Link, Image, HtmlEditor, QuickToolbar, Table, EmojiPicker</code> into the <code>provide</code> section.</p>
</div>
</div>
</template>
<style scoped>
    .e-code-mirror::before {
        content: '\e345';
    }

    .e-html-preview::before {
        content: '\e350';
    }

    .CodeMirror-linenumber,
    .CodeMirror-gutters {
        display: none;
    }
    .sb-header {
        z-index: 100;
    }

    .sb-content.e-view.hide-header {
        top: 0 !important;
    }

    .sb-header.e-view.hide-header {
        display: none;
    }

    .fabric-dark .cm-s-default .cm-tag,
    .bootstrap5-dark .cm-s-default .cm-tag,
    .material-dark .cm-s-default .cm-tag,
    .tailwind-dark .cm-s-default .cm-tag,
    .highcontrast .cm-s-default .cm-tag {
        color: #00ff00;
    }

    .fabric-dark .cm-s-default .cm-string,
    .bootstrap5-dark .cm-s-default .cm-string,
    .material-dark .cm-s-default .cm-string,
    .tailwind-dark .cm-s-default .cm-string {
        color: blue;
    }

    .highcontrast .cm-s-default .cm-string {
        color: #ffd939;
    }

    .fabric-dark .cm-s-default .cm-attribute,
    .bootstrap5-dark .cm-s-default .cm-attribute,
    .material-dark .cm-s-default .cm-attribute,
    .tailwind-dark .cm-s-default .cm-attribute,
    .highcontrast .cm-s-default .cm-attribute {
        color: #f00;
    }
    
    .fabric-dark .CodeMirror,
    .bootstrap5-dark .CodeMirror,
    .material-dark .CodeMirror,
    .tailwind-dark .CodeMirror {
        background:  #303030;
        color: white;
    }

    .highcontrast .CodeMirror {
        background: black;
        color: white;
    }

    .e-richtexteditor .e-rte-content .e-content pre {
        padding: 10px;
        background: #F4F5F7;
    }
    .fabric-dark .e-richtexteditor .e-rte-content .e-content pre,
    .bootstrap5-dark .e-richtexteditor .e-rte-content .e-content pre,
    .material-dark .e-richtexteditor .e-rte-content .e-content pre,
    .tailwind-dark .e-richtexteditor .e-rte-content .e-content pre,
    .highcontrast .e-richtexteditor .e-rte-content .e-content pre {
        padding: 10px;
        background: #303030;
    }
</style>
<script>
import Vue from "vue";
import { Browser, addClass, removeClass } from "@syncfusion/ej2-base";
import { RichTextEditorPlugin, Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar, Table, FileManager, EmojiPicker } from "@syncfusion/ej2-vue-richtexteditor";

Vue.use(RichTextEditorPlugin);

let hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';

export default Vue.extend({
    data: function() {
        return {
            showCharCount: true,
            myCodeMirror: '',
            fileManagerSettings: {
                enable: true,
                path: '/Pictures/Food',
                ajaxSettings: {
                    url: hostUrl + 'api/FileManager/FileOperations',
                    getImageUrl: hostUrl + 'api/FileManager/GetImage',
                    uploadUrl: hostUrl + 'api/FileManager/Upload',
                    downloadUrl: hostUrl + 'api/FileManager/Download'
                }
            },
            quickToolbarSettings: {
                table: ['TableHeader', 'TableRows', 'TableColumns', 'TableCell', '-', 'BackgroundColor', 'TableRemove', 'TableCellVerticalAlign', 'Styles']
            },
            value: `<p>The Rich Text Editor is a WYSIWYG ("what you see is what you get") editor useful to create and edit content and return the valid <a href='https://ej2.syncfusion.com/home/' target='_blank'>HTML markup</a> or <a href='https://ej2.syncfusion.com/home/' target='_blank'>markdown</a> of the content</p>
        <p><b>Toolbar</b></p>
        <ol>
        <li> 
        <p>The Toolbar contains commands to align the text, insert a link, insert an image, insert list, undo/redo operations, HTML view, etc </p>
        </li>
        <li> 
        <p>The Toolbar is fully customizable </p>
        </li>
        </ol>
        <p><b>Links</b></p>
        <ol>
        <li>
        <p>You can insert a hyperlink with its corresponding dialog </p>
        </li>
        <li>
        <p>Attach a hyperlink to the displayed text. </p>
        </li>
        <li>
        <p>Customize the quick toolbar based on the hyperlink </p> 
        </li>
        </ol>
        <p><b>Image.</b></p>
        <ol>
        <li>
        <p>Allows you to insert images from an online source as well as the local computer </p> 
        </li>
        <li>
        <p>You can upload an image </p>
        </li>
        <li> 
        <p>Provides an option to customize the quick toolbar for an image </p>
        </li>
        </ol>
         <img alt="Logo" src="./source/rich-text-editor/images/RTEImage-Feather.png" style="width: 300px;">`,
            toolbarSettings: {
                items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
                'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
                'LowerCase', 'UpperCase', 'SuperScript', 'SubScript' , 'EmojiPicker', '|',
                'Formats', 'Alignments', 'NumberFormatList', 'BulletFormatList',
                'Outdent', 'Indent', '|',
                'CreateTable', 'CreateLink', 'Image', 'FileManager', '|', 'ClearFormat', 'Print', 'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
            },
        };
    },
    methods: {
        mirrorConversion: function(e) {
            var textArea = this.$refs.rteObj.ej2Instances.contentModule.getEditPanel();
            var id = this.$refs.rteObj.ej2Instances.getID() +  'mirror-view';
            var mirrorView = this.$refs.rteObj.$el.parentNode.querySelector('#' + id);
            var charCount = this.$refs.rteObj.$el.parentNode.querySelector('.e-rte-character-count');
            if (e.targetItem === 'Preview') {
                textArea.style.display = 'block';
                mirrorView.style.display = 'none';
                textArea.innerHTML = this.myCodeMirror.getValue();
                charCount.style.display = 'block';
            }
            else {
                if (!mirrorView) {
                    mirrorView = document.createElement('div', { className: 'e-content' });
                    mirrorView.id = id;
                    textArea.parentNode.appendChild(mirrorView);
                }
                else {
                    mirrorView.innerHTML = '';
                }
                textArea.style.display = 'none';
                mirrorView.style.display = 'block';
                this.renderCodeMirror(mirrorView, this.$refs.rteObj.ej2Instances.value);
                charCount.style.display = 'none';
            }
        },
        renderCodeMirror: function(mirrorView, content) {
        this.myCodeMirror = CodeMirror(mirrorView, {
            value: content,
            lineNumbers: true,
            mode: 'text/html',
            lineWrapping: true,

        });
    },
    handleFullScreen: function(e){
        var sbCntEle = document.querySelector('.sb-content.e-view');
        var sbHdrEle = document.querySelector('.sb-header.e-view');
        var leftBar;
        var transformElement;
        if (Browser.isDevice) {
            leftBar = document.querySelector('#right-sidebar');
            transformElement = document.querySelector('.sample-browser.e-view.e-content-animation');
        }
        else {
            leftBar = document.querySelector('#left-sidebar');
            transformElement = document.querySelector('#right-pane');
        }
        if (e.targetItem === 'Maximize') {
            if (Browser.isDevice && Browser.isIos) {
                addClass([sbCntEle, sbHdrEle], ['hide-header']);
            }
            addClass([leftBar], ['e-close']);
            removeClass([leftBar], ['e-open']);
            if (!Browser.isDevice) {
                transformElement.style.marginLeft = '0px';
            }
            transformElement.style.transform = 'inherit';
        }
        else if (e.targetItem === 'Minimize') {
            if (Browser.isDevice && Browser.isIos) {
                removeClass([sbCntEle, sbHdrEle], ['hide-header']);
            }
            removeClass([leftBar], ['e-close']);
            if (!Browser.isDevice) {
                addClass([leftBar], ['e-open']);
                transformElement.style.marginLeft = leftBar.offsetWidth + 'px';
            }
            transformElement.style.transform = 'translateX(0px)';
        }
    },
        actionCompleteHandler: function(e) {
           if (e.targetItem && (e.targetItem === 'SourceCode' || e.targetItem === 'Preview')) {
                this.$refs.rteObj.ej2Instances.sourceCodeModule.getPanel().style.display = 'none';
                this.mirrorConversion(e);
            }
            else {
                var proxy = this;
                setTimeout(function () { proxy.$refs.rteObj.ej2Instances.toolbarModule.refreshToolbarOverflow(); }, 1000);
            }
        }
    },
    provide:{
        richtexteditor:[Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar, Table, FileManager, EmojiPicker]
    }
});
</script>
