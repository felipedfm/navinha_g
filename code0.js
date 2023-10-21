gdjs.menuCode = {};
gdjs.menuCode.GDiniciarObjects1= [];
gdjs.menuCode.GDiniciarObjects2= [];
gdjs.menuCode.GDSAIRObjects1= [];
gdjs.menuCode.GDSAIRObjects2= [];
gdjs.menuCode.GDMENUBGObjects1= [];
gdjs.menuCode.GDMENUBGObjects2= [];


gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDiniciarObjects1Objects = Hashtable.newFrom({"iniciar": gdjs.menuCode.GDiniciarObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDiniciarObjects1Objects = Hashtable.newFrom({"iniciar": gdjs.menuCode.GDiniciarObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDSAIRObjects1Objects = Hashtable.newFrom({"SAIR": gdjs.menuCode.GDSAIRObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDSAIRObjects1Objects = Hashtable.newFrom({"SAIR": gdjs.menuCode.GDSAIRObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDiniciarObjects1Objects = Hashtable.newFrom({"iniciar": gdjs.menuCode.GDiniciarObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDSAIRObjects1Objects = Hashtable.newFrom({"SAIR": gdjs.menuCode.GDSAIRObjects1});
gdjs.menuCode.eventsList0 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("iniciar"), gdjs.menuCode.GDiniciarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDiniciarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.menuCode.GDiniciarObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDiniciarObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDiniciarObjects1[i].setColor("208;2;27");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("iniciar"), gdjs.menuCode.GDiniciarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDiniciarObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.menuCode.GDiniciarObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDiniciarObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDiniciarObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SAIR"), gdjs.menuCode.GDSAIRObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDSAIRObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.menuCode.GDSAIRObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDSAIRObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDSAIRObjects1[i].setColor("208;2;27");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SAIR"), gdjs.menuCode.GDSAIRObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDSAIRObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.menuCode.GDSAIRObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDSAIRObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDSAIRObjects1[i].setColor("255;255;255");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("iniciar"), gdjs.menuCode.GDiniciarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDiniciarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "stage01", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SAIR"), gdjs.menuCode.GDSAIRObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDSAIRObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{



}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDiniciarObjects1.length = 0;
gdjs.menuCode.GDiniciarObjects2.length = 0;
gdjs.menuCode.GDSAIRObjects1.length = 0;
gdjs.menuCode.GDSAIRObjects2.length = 0;
gdjs.menuCode.GDMENUBGObjects1.length = 0;
gdjs.menuCode.GDMENUBGObjects2.length = 0;

gdjs.menuCode.eventsList0(runtimeScene);

return;

}

gdjs['menuCode'] = gdjs.menuCode;
