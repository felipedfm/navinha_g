gdjs.gameoverCode = {};
gdjs.gameoverCode.GDiniciarObjects1= [];
gdjs.gameoverCode.GDiniciarObjects2= [];
gdjs.gameoverCode.GDSAIRObjects1= [];
gdjs.gameoverCode.GDSAIRObjects2= [];
gdjs.gameoverCode.GDMENUBGObjects1= [];
gdjs.gameoverCode.GDMENUBGObjects2= [];
gdjs.gameoverCode.GDNewObjectObjects1= [];
gdjs.gameoverCode.GDNewObjectObjects2= [];


gdjs.gameoverCode.mapOfGDgdjs_9546gameoverCode_9546GDiniciarObjects1Objects = Hashtable.newFrom({"iniciar": gdjs.gameoverCode.GDiniciarObjects1});
gdjs.gameoverCode.mapOfGDgdjs_9546gameoverCode_9546GDiniciarObjects1Objects = Hashtable.newFrom({"iniciar": gdjs.gameoverCode.GDiniciarObjects1});
gdjs.gameoverCode.mapOfGDgdjs_9546gameoverCode_9546GDSAIRObjects1Objects = Hashtable.newFrom({"SAIR": gdjs.gameoverCode.GDSAIRObjects1});
gdjs.gameoverCode.mapOfGDgdjs_9546gameoverCode_9546GDSAIRObjects1Objects = Hashtable.newFrom({"SAIR": gdjs.gameoverCode.GDSAIRObjects1});
gdjs.gameoverCode.mapOfGDgdjs_9546gameoverCode_9546GDiniciarObjects1Objects = Hashtable.newFrom({"iniciar": gdjs.gameoverCode.GDiniciarObjects1});
gdjs.gameoverCode.mapOfGDgdjs_9546gameoverCode_9546GDSAIRObjects1Objects = Hashtable.newFrom({"SAIR": gdjs.gameoverCode.GDSAIRObjects1});
gdjs.gameoverCode.eventsList0 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("iniciar"), gdjs.gameoverCode.GDiniciarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.gameoverCode.mapOfGDgdjs_9546gameoverCode_9546GDiniciarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.gameoverCode.GDiniciarObjects1 */
{for(var i = 0, len = gdjs.gameoverCode.GDiniciarObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDiniciarObjects1[i].setColor("208;2;27");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("iniciar"), gdjs.gameoverCode.GDiniciarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.gameoverCode.mapOfGDgdjs_9546gameoverCode_9546GDiniciarObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.gameoverCode.GDiniciarObjects1 */
{for(var i = 0, len = gdjs.gameoverCode.GDiniciarObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDiniciarObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SAIR"), gdjs.gameoverCode.GDSAIRObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.gameoverCode.mapOfGDgdjs_9546gameoverCode_9546GDSAIRObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.gameoverCode.GDSAIRObjects1 */
{for(var i = 0, len = gdjs.gameoverCode.GDSAIRObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDSAIRObjects1[i].setColor("208;2;27");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SAIR"), gdjs.gameoverCode.GDSAIRObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.gameoverCode.mapOfGDgdjs_9546gameoverCode_9546GDSAIRObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.gameoverCode.GDSAIRObjects1 */
{for(var i = 0, len = gdjs.gameoverCode.GDSAIRObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDSAIRObjects1[i].setColor("255;255;255");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("iniciar"), gdjs.gameoverCode.GDiniciarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.gameoverCode.mapOfGDgdjs_9546gameoverCode_9546GDiniciarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "stage01", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SAIR"), gdjs.gameoverCode.GDSAIRObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.gameoverCode.mapOfGDgdjs_9546gameoverCode_9546GDSAIRObjects1Objects, runtimeScene, true, false);
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

gdjs.gameoverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameoverCode.GDiniciarObjects1.length = 0;
gdjs.gameoverCode.GDiniciarObjects2.length = 0;
gdjs.gameoverCode.GDSAIRObjects1.length = 0;
gdjs.gameoverCode.GDSAIRObjects2.length = 0;
gdjs.gameoverCode.GDMENUBGObjects1.length = 0;
gdjs.gameoverCode.GDMENUBGObjects2.length = 0;
gdjs.gameoverCode.GDNewObjectObjects1.length = 0;
gdjs.gameoverCode.GDNewObjectObjects2.length = 0;

gdjs.gameoverCode.eventsList0(runtimeScene);

return;

}

gdjs['gameoverCode'] = gdjs.gameoverCode;
