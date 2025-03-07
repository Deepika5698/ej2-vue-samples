<template>
<div class="control-section">
    <div class="diagram-control">
        <ejs-diagram style='display:block' ref='diagramObj' id="diagram" :width='width' :height='height' :snapSettings='snapSettings' :tool='tool' :layout='layout' :selectionChange='selectionChange' :getNodeDefaults='getNodeDefaults' :selectedItems='selectedItems' :getConnectorDefaults='getConnectorDefaults' :dataSourceSettings='dataSourceSettings'
        :getCustomTool='getCustomTool'></ejs-diagram>
        <input id="palette" style="visibility: hidden;position: absolute" type="color" name="favcolor" value="#000000">
    </div>

<div id="action-description">
    <p>
        This sample demonstrates the concept of creativity using mind map layout algorithm. User handles are used to extend the mind map interactively.
    </p>
</div>
<div id="description">
    <p>
        This example shows how to generate a mind map from an external data source. The <code>type</code> property of the <code>layout</code> can be used to enable the mind map layout algorithm. The
        <code>getBranch</code> property can also be used to define the branches at both left and right sides.
    </p>

    <p style="font-weight: 500">Injecting Module</p>
    <p>
        The diagram component’s features are segregated into individual feature-wise modules. To generate diagrams from an external
        data source, inject <code>DataBinding</code> module using <code>provide: { diagram: [DataBinding] }</code> method. To automatically generate a mind map, inject
        <code>Mindmap</code> module using <code>provide: { diagram: [Mindmap] }</code> method.
    </p>
    <br>
</div>
</div>
</template>

<style scoped>
</style>

<script>
import Vue from "vue";
import {
  DiagramPlugin,
  Diagram,
  ConnectorModel,
  Connector,
  Node,
  ConnectorConstraints,
  DataBinding,
  PointPortModel,
  PointPort,
  randomId,
  PortVisibility,
  UserHandleModel,
  SelectorConstraints,
  ToolBase,
  MouseEventArgs,
  SnapConstraints,
  NodeModel,
  MindMap,
  HierarchicalTree,
  ISelectionChangeEventArgs,
  DiagramTools,
  NodeConstraints,
  MoveTool,
  IElement,
  cloneObject,
  TextModel,
  Side,
  MarginModel,
  HorizontalAlignment,
  VerticalAlignment
} from "@syncfusion/ej2-vue-diagrams";
import { DataManager, Query } from "@syncfusion/ej2-data";
import { mindMap } from "./diagram-data";

Vue.use(DiagramPlugin);



let diagramInstance;
let items = new DataManager(
  mindMap,
  new Query().take(7)
);
export default Vue.extend({
  data: function() {
    return {
      width: "100%",
      height: "550px",
      snapSettings: { constraints: SnapConstraints.None },
      tool: DiagramTools.SingleSelect,
      layout: {
        type: "MindMap",
         orientation:"Horizontal",
        getBranch: (node, nodes) => {
          return ((node).data).branch;
        },
        horizontalSpacing: 50
      },
      //Selectionchange event for Node and connector
      selectionChange: (arg) => {
        if (arg.state === "Changing") {
          if (
            arg.newValue[0] instanceof Node &&
            diagramInstance.selectedItems.userHandles
          ) {
            for (let handle of diagramInstance.selectedItems.userHandles) {
              handle.visible = true;
            }
            if (
              ((arg.newValue[0]).data).branch ===
                "Left" ||
              ((arg.newValue[0]).data).branch ===
                "subLeft"
            ) {
              hideUserHandle("leftHandle");
              changeUserHandlePosition("leftHandle");
            } else if (
              ((arg.newValue[0]).data).branch ===
                "Right" ||
              ((arg.newValue[0]).data).branch ===
                "subRight"
            ) {
              hideUserHandle("rightHandle");
              changeUserHandlePosition("rightHandle");
            } else if (
              ((arg.newValue[0]).data).branch === "Root"
            ) {
              hideUserHandle("delete");
            }
          } else {
            hideUserHandle("leftHandle");
            hideUserHandle("rightHandle");
            hideUserHandle("delete");
          }
        }
      },
      selectedItems: {
        constraints: SelectorConstraints.UserHandle,
        userHandles: handle
      },
      dataSourceSettings: {
        id: "id",
        parentId: "parentId",
        dataSource: items,
        root: String(1)
      },
      //sets node default value
      getNodeDefaults: (obj) => {
        obj.constraints = NodeConstraints.Default & ~NodeConstraints.Drag;
        if (
          (obj.data).branch === "Left" ||
          (obj.data).branch === "Right" ||
          (obj.data).branch === "Root"
        ) {
          obj.shape = { type: "Basic", shape: "Ellipse" };
          obj.borderColor = "black"; /* tslint:disable:no-string-literal */
          obj.style = {
            fill:
              (obj.data).branch === "Root"
                ? "#E74C3C"
                : "#F39C12",
            strokeColor: "none",
            strokeWidth: 2
          };
          obj.annotations = [
            {
              content: (obj.data).Label,
              margin: { left: 10, right: 10, top: 10, bottom: 10 },
              style: { color: "white" }
            }
          ];
          let port = getPort();
          for (let i = 0; i < port.length; i++) {
            obj.ports.push(new PointPort(obj, "ports", port[i], true));
          }
        } else {
          let color; /* tslint:disable:no-string-literal */
          if (
            (obj.data).branch === "Right" ||
            (obj.data).branch === "subRight"
          ) {
            color = "#8E44AD";
          } else {
            color = "#3498DB";
          }
          obj.shape = { type: "Basic", shape: "Rectangle" };
          obj.style = { fill: color, strokeWidth: 0 };
          obj.minWidth = 100;
          obj.height = 4;
          let port = getPort();
          for (let i = 0; i < port.length; i++) {
            obj.ports.push(new PointPort(obj, "ports", port[i], true));
          }
          obj.annotations = [
            {
              content: (obj.data).Label,
              offset: { x: 0.5, y: 0 },
              verticalAlignment: "Bottom"
            }
          ];
          (obj.shape).margin = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          };
        }
        return obj;
      },
      //sets connector default value
      getConnectorDefaults: (connector,diagram) => {
        connector.type = "Bezier";
        connector.targetDecorator = { shape: "None" };
        if (connector.sourceID && connector.targetID && connector.constraints) {
          let sourceNode = diagram.getObject(connector.sourceID);
          let targetNode = diagram.getObject(connector.targetID);
          if (
            (targetNode.data).branch === "Right" ||
            (targetNode.data).branch === "subRight"
          ) {
            connector.sourcePortID = sourceNode.ports[0].id;
            connector.targetPortID = targetNode.ports[1].id;
            connector.style = { strokeWidth: 5, strokeColor: "#8E44AD" };
          } else if (
            (targetNode.data).branch === "Left" ||
            (targetNode.data).branch === "subLeft"
          ) {
            connector.sourcePortID = sourceNode.ports[1].id;
            connector.targetPortID = targetNode.ports[0].id;
            connector.style = { strokeWidth: 5, strokeColor: "#3498DB" };
          }
          connector.constraints &= ~ConnectorConstraints.Select;
        }
        return connector;
      },
      getCustomTool: getTool
    };
  },
  provide: {
    diagram: [DataBinding, MindMap, HierarchicalTree]
  },
  mounted: function() {
    diagramInstance = this.$refs.diagramObj.ej2Instances;
    diagramInstance.fitToPage();
  }
});

//creation of the Ports
function getPort() {
  let port = [
    {
      id: "port1",
      offset: { x: 0, y: 0.5 },
      visibility: PortVisibility.Hidden,
      style: { fill: "black" }
    },
    {
      id: "port2",
      offset: { x: 1, y: 0.5 },
      visibility: PortVisibility.Hidden,
      style: { fill: "black" }
    }
  ];
  return port;
}
function addNode() {
  let obj = {};
  obj.id = randomId();
  obj.data = {};
  (obj.data).Label = "Node";
  return obj;
}

function addConnector(source, target) {
  let connector = {};
  connector.id = randomId();
  connector.sourceID = source.id;
  connector.targetID = target.id;
  return connector;
}
//Tool for Userhandles.
function getTool(action) {
  let tool;
  if (action === "leftHandle") {
    tool = new LeftExtendTool(diagramInstance.commandHandler);
  } else if (action === "rightHandle") {
    tool = new RightExtendTool(diagramInstance.commandHandler);
  } else if (action === "delete") {
    tool = new DeleteClick(diagramInstance.commandHandler);
  }
  return tool;
}

class LeftExtendTool extends ToolBase {
   mouseDown(args) {
    super.mouseDown(args);
    this.inAction = true;
  }
   mouseUp(args) {
    if (this.inAction) {
      let selectedObject = this.commandHandler.getSelectedObject();
      if (selectedObject[0]) {
        if (selectedObject[0] instanceof Node) {
          let node = addNode();
          if ((selectedObject[0].data).branch === "Root") {
            (node.data).branch = "Right";
          } else if (
            (selectedObject[0].data).branch === "Right" ||
            (selectedObject[0].data).branch === "subRight"
          ) {
            (node.data).branch = "subRight";
          }
          getTextEditValue(selectedObject[0], node);
        }
      }
    }
  }
}

class RightExtendTool extends ToolBase {
  //mouseDown event
   mouseDown(args) {
    super.mouseDown(args);
    this.inAction = true;
  }
  //mouseDown event
   mouseUp(args) {
    if (this.inAction) {
      let selectedObject = this.commandHandler.getSelectedObject();
      if (selectedObject[0]) {
        if (selectedObject[0] instanceof Node) {
          let node = addNode();
          if ((selectedObject[0].data).branch === "Root") {
            (node.data ).branch = "Left";
          } else if (
            (selectedObject[0].data).branch === "Left" ||
            (selectedObject[0].data).branch === "subLeft"
          ) {
            (node.data).branch = "subLeft";
          }
          getTextEditValue(selectedObject[0], node);
        }
      }
    }
  }
}
class DeleteClick extends ToolBase {
  //mouseDown event
   mouseDown(args) {
    super.mouseDown(args);
    this.inAction = true;
  }
  //mouseup event
   mouseUp(args) {
    if (this.inAction) {
      let selectedObject = this.commandHandler.getSelectedObject();
      if (selectedObject[0]) {
        if (selectedObject[0] instanceof Node) {
          let node = selectedObject[0] ;
          this.removeSubChild(node);
        }
        diagramInstance.doLayout();
      }
    }
  }
  //Remove the subchild Elements
   removeSubChild(node) {
    for (let i = node.outEdges.length - 1; i >= 0; i--) {
      let connector = diagramInstance.getObject(
        node.outEdges[i]
      );
      let childNode = diagramInstance.getObject(
        connector.targetID
      );
      if (childNode.outEdges.length > 0) {
        this.removeSubChild(childNode);
      } else {
        diagramInstance.remove(childNode);
      }
    }
    diagramInstance.remove(node);
  }
}
//hide the require userhandle.
function hideUserHandle(name) {
  if (diagramInstance.selectedItems.userHandles) {
    for (let handle of diagramInstance.selectedItems.userHandles) {
      if (handle.name === name) {
        handle.visible = false;
      }
    }
  }
}
let leftarrow =
  "M11.924,6.202 L4.633,6.202 L4.633,9.266 L0,4.633 L4.632,0 L4.632,3.551 L11.923,3.551 L11.923,6.202Z";
let rightarrow =
  "M0,3.063 L7.292,3.063 L7.292,0 L11.924,4.633 L7.292,9.266 L7.292,5.714 L0.001,5.714 L0.001,3.063Z";
let deleteicon =
  "M 7.04 22.13 L 92.95 22.13 L 92.95 88.8 C 92.95 91.92 91.55 94.58 88.76" +
  "96.74 C 85.97 98.91 82.55 100 78.52 100 L 21.48 100 C 17.45 100 14.03 98.91 11.24 96.74 C 8.45 94.58 7.04" +
  "91.92 7.04 88.8 z M 32.22 0 L 67.78 0 L 75.17 5.47 L 100 5.47 L 100 16.67 L 0 16.67 L 0 5.47 L 24.83 5.47 z";

let leftuserhandle = setUserHandle(
  //it is in dedicated line here.
  "leftHandle",
  leftarrow,
  "Left",
  1,
  { top: 0, bottom: 0, left: 0, right: 10 },
  "Left",
  "Top"
);
let rightuserhandle = setUserHandle(
  //it is in dedicated line here.
  "rightHandle",
  rightarrow,
  "Right",
  1,
  { top: 0, bottom: 0, left: 10, right: 0 },
  "Right",
  "Top"
);
let deleteuserhandle = setUserHandle(
  //it is in dedicated line here.
  "delete",
  deleteicon,
  "Top",
  0.5,
  { top: 0, bottom: 10, left: 0, right: 0 },
  "Center",
  "Center"
);
let handle = [
  leftuserhandle,
  rightuserhandle,
  deleteuserhandle
];
//set and creation of the Userhandle.
function setUserHandle( //it is in dedicated line here.
  name,
  pathData,
  side,
  offset,
  margin,
  halignment,
  valignment
) {
  let userhandle = {
    name: name,
    pathData: pathData,
    backgroundColor: "black",
    pathColor: "white",
    side: side,
    offset: offset,
    margin: margin,
    horizontalAlignment: halignment,
    verticalAlignment: valignment
  };
  return userhandle;
}
//Change the Position of the UserHandle.
function changeUserHandlePosition(change) {
  if (diagramInstance.selectedItems.userHandles) {
    for (let handle of diagramInstance.selectedItems.userHandles) {
      if (handle.name === "delete" && change === "leftHandle") {
        applyHandle(
          handle,
          "Left",
          1,
          { top: 0, bottom: 0, left: 0, right: 10 },
          "Left",
          "Top"
        );
      } else if (handle.name === "delete" && change === "rightHandle") {
        applyHandle(
          handle,
          "Right",
          1,
          { top: 0, bottom: 0, left: 10, right: 0 },
          "Right",
          "Top"
        );
      }
    }
  }
}
//set the value for UserHandle element.
function applyHandle( //it is in dedicated line here.
  handle,
  side,
  offset,
  margin,
  halignment,
  valignment
) {
  handle.side = side;
  handle.offset = offset;
  handle.margin = margin;
  handle.horizontalAlignment = halignment;
  handle.verticalAlignment = valignment;
}
function getTextEditValue(selectObject, node){
    var connector = addConnector(selectObject, node);
   diagramInstance.clearSelection();
   var nd = diagramInstance.add(node);
   diagramInstance.add(connector);
   diagramInstance.doLayout();
   diagramInstance.bringIntoView(nd.wrapper.bounds);
   diagramInstance.select([diagramInstance.nameTable[nd.id]]);
   diagramInstance.startTextEdit(diagramInstance.selectedItems.nodes[0]);
}
</script>
