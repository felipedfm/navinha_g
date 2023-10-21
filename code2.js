gdjs.stage02Code = {};
gdjs.stage02Code.forEachIndex3 = 0;

gdjs.stage02Code.forEachObjects3 = [];

gdjs.stage02Code.forEachTemporary3 = null;

gdjs.stage02Code.forEachTotalCount3 = 0;

gdjs.stage02Code.GDnaveObjects1= [];
gdjs.stage02Code.GDnaveObjects2= [];
gdjs.stage02Code.GDnaveObjects3= [];
gdjs.stage02Code.GDlimiterObjects1= [];
gdjs.stage02Code.GDlimiterObjects2= [];
gdjs.stage02Code.GDlimiterObjects3= [];
gdjs.stage02Code.GDtiroObjects1= [];
gdjs.stage02Code.GDtiroObjects2= [];
gdjs.stage02Code.GDtiroObjects3= [];
gdjs.stage02Code.GDenemyObjects1= [];
gdjs.stage02Code.GDenemyObjects2= [];
gdjs.stage02Code.GDenemyObjects3= [];
gdjs.stage02Code.GDexplosionObjects1= [];
gdjs.stage02Code.GDexplosionObjects2= [];
gdjs.stage02Code.GDexplosionObjects3= [];
gdjs.stage02Code.GDBGObjects1= [];
gdjs.stage02Code.GDBGObjects2= [];
gdjs.stage02Code.GDBGObjects3= [];
gdjs.stage02Code.GDtiroinimigoObjects1= [];
gdjs.stage02Code.GDtiroinimigoObjects2= [];
gdjs.stage02Code.GDtiroinimigoObjects3= [];
gdjs.stage02Code.GDscoreObjects1= [];
gdjs.stage02Code.GDscoreObjects2= [];
gdjs.stage02Code.GDscoreObjects3= [];
gdjs.stage02Code.GDupObjects1= [];
gdjs.stage02Code.GDupObjects2= [];
gdjs.stage02Code.GDupObjects3= [];
gdjs.stage02Code.GDdownObjects1= [];
gdjs.stage02Code.GDdownObjects2= [];
gdjs.stage02Code.GDdownObjects3= [];
gdjs.stage02Code.GDrightObjects1= [];
gdjs.stage02Code.GDrightObjects2= [];
gdjs.stage02Code.GDrightObjects3= [];
gdjs.stage02Code.GDleftObjects1= [];
gdjs.stage02Code.GDleftObjects2= [];
gdjs.stage02Code.GDleftObjects3= [];
gdjs.stage02Code.GDshotObjects1= [];
gdjs.stage02Code.GDshotObjects2= [];
gdjs.stage02Code.GDshotObjects3= [];
gdjs.stage02Code.GDboss01Objects1= [];
gdjs.stage02Code.GDboss01Objects2= [];
gdjs.stage02Code.GDboss01Objects3= [];
gdjs.stage02Code.GDtiroboss2Objects1= [];
gdjs.stage02Code.GDtiroboss2Objects2= [];
gdjs.stage02Code.GDtiroboss2Objects3= [];
gdjs.stage02Code.GDtirobossObjects1= [];
gdjs.stage02Code.GDtirobossObjects2= [];
gdjs.stage02Code.GDtirobossObjects3= [];


gdjs.stage02Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "next_level");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gameover", false);
}}

}


};gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDshotObjects1Objects = Hashtable.newFrom({"shot": gdjs.stage02Code.GDshotObjects1});
gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDtiroObjects1Objects = Hashtable.newFrom({"tiro": gdjs.stage02Code.GDtiroObjects1});
gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDtiroObjects1Objects = Hashtable.newFrom({"tiro": gdjs.stage02Code.GDtiroObjects1});
gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDtiroObjects1Objects = Hashtable.newFrom({"tiro": gdjs.stage02Code.GDtiroObjects1});
gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDlimiterObjects1Objects = Hashtable.newFrom({"limiter": gdjs.stage02Code.GDlimiterObjects1});
gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDlimiterObjects1Objects = Hashtable.newFrom({"limiter": gdjs.stage02Code.GDlimiterObjects1});
gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDupObjects1Objects = Hashtable.newFrom({"up": gdjs.stage02Code.GDupObjects1});
gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDrightObjects1Objects = Hashtable.newFrom({"right": gdjs.stage02Code.GDrightObjects1});
gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDleftObjects1Objects = Hashtable.newFrom({"left": gdjs.stage02Code.GDleftObjects1});
gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDdownObjects1Objects = Hashtable.newFrom({"down": gdjs.stage02Code.GDdownObjects1});
gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDnaveObjects1Objects = Hashtable.newFrom({"nave": gdjs.stage02Code.GDnaveObjects1});
gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.stage02Code.GDenemyObjects1});
gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDexplosionObjects1Objects = Hashtable.newFrom({"explosion": gdjs.stage02Code.GDexplosionObjects1});
gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDexplosionObjects1Objects = Hashtable.newFrom({"explosion": gdjs.stage02Code.GDexplosionObjects1});
gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDnaveObjects1Objects = Hashtable.newFrom({"nave": gdjs.stage02Code.GDnaveObjects1});
gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDtiroinimigoObjects1Objects = Hashtable.newFrom({"tiroinimigo": gdjs.stage02Code.GDtiroinimigoObjects1});
gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDexplosionObjects1Objects = Hashtable.newFrom({"explosion": gdjs.stage02Code.GDexplosionObjects1});
gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDenemyObjects2Objects = Hashtable.newFrom({"enemy": gdjs.stage02Code.GDenemyObjects2});
gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDtiroObjects2Objects = Hashtable.newFrom({"tiro": gdjs.stage02Code.GDtiroObjects2});
gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDenemyObjects2Objects = Hashtable.newFrom({"enemy": gdjs.stage02Code.GDenemyObjects2});
gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDexplosionObjects2Objects = Hashtable.newFrom({"explosion": gdjs.stage02Code.GDexplosionObjects2});
gdjs.stage02Code.eventsList1 = function(runtimeScene) {

};gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDtiroinimigoObjects3Objects = Hashtable.newFrom({"tiroinimigo": gdjs.stage02Code.GDtiroinimigoObjects3});
gdjs.stage02Code.eventsList2 = function(runtimeScene) {

};gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDtiroObjects1Objects = Hashtable.newFrom({"tiro": gdjs.stage02Code.GDtiroObjects1});
gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDtiroinimigoObjects1Objects = Hashtable.newFrom({"tiroinimigo": gdjs.stage02Code.GDtiroinimigoObjects1});
gdjs.stage02Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2.2, "timerenemy");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
}
if (isConditionTrue_0) {
gdjs.stage02Code.GDenemyObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDenemyObjects2Objects, gdjs.random(540), gdjs.random(-(200)), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timerenemy");
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.stage02Code.GDenemyObjects2);
{for(var i = 0, len = gdjs.stage02Code.GDenemyObjects2.length ;i < len;++i) {
    gdjs.stage02Code.GDenemyObjects2[i].addForce(0, 150, 0);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("explosion"), gdjs.stage02Code.GDexplosionObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.stage02Code.GDexplosionObjects2.length;i<l;++i) {
    if ( gdjs.stage02Code.GDexplosionObjects2[i].hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.stage02Code.GDexplosionObjects2[k] = gdjs.stage02Code.GDexplosionObjects2[i];
        ++k;
    }
}
gdjs.stage02Code.GDexplosionObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.stage02Code.GDexplosionObjects2 */
{for(var i = 0, len = gdjs.stage02Code.GDexplosionObjects2.length ;i < len;++i) {
    gdjs.stage02Code.GDexplosionObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.stage02Code.GDenemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("tiro"), gdjs.stage02Code.GDtiroObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDtiroObjects2Objects, gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDenemyObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.stage02Code.GDenemyObjects2 */
/* Reuse gdjs.stage02Code.GDtiroObjects2 */
gdjs.stage02Code.GDexplosionObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDexplosionObjects2Objects, (( gdjs.stage02Code.GDenemyObjects2.length === 0 ) ? 0 :gdjs.stage02Code.GDenemyObjects2[0].getPointX("Centre")), (( gdjs.stage02Code.GDenemyObjects2.length === 0 ) ? 0 :gdjs.stage02Code.GDenemyObjects2[0].getPointY("Centre")), "");
}{for(var i = 0, len = gdjs.stage02Code.GDenemyObjects2.length ;i < len;++i) {
    gdjs.stage02Code.GDenemyObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.stage02Code.GDtiroObjects2.length ;i < len;++i) {
    gdjs.stage02Code.GDtiroObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(100);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Space Shooter\\Sounds\\destroyer.wav", false, 100, 1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.stage02Code.GDenemyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.stage02Code.GDenemyObjects2.length;i<l;++i) {
    if ( gdjs.stage02Code.GDenemyObjects2[i].getY() > 1100 ) {
        isConditionTrue_0 = true;
        gdjs.stage02Code.GDenemyObjects2[k] = gdjs.stage02Code.GDenemyObjects2[i];
        ++k;
    }
}
gdjs.stage02Code.GDenemyObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.stage02Code.GDenemyObjects2 */
{for(var i = 0, len = gdjs.stage02Code.GDenemyObjects2.length ;i < len;++i) {
    gdjs.stage02Code.GDenemyObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.stage02Code.GDenemyObjects2);
{for(var i = 0, len = gdjs.stage02Code.GDenemyObjects2.length ;i < len;++i) {
    gdjs.stage02Code.GDenemyObjects2[i].returnVariable(gdjs.stage02Code.GDenemyObjects2[i].getVariables().getFromIndex(0)).setNumber(gdjs.randomInRange(1, 2));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.stage02Code.GDenemyObjects2);

for (gdjs.stage02Code.forEachIndex3 = 0;gdjs.stage02Code.forEachIndex3 < gdjs.stage02Code.GDenemyObjects2.length;++gdjs.stage02Code.forEachIndex3) {
gdjs.copyArray(runtimeScene.getObjects("tiroinimigo"), gdjs.stage02Code.GDtiroinimigoObjects3);
gdjs.stage02Code.GDenemyObjects3.length = 0;


gdjs.stage02Code.forEachTemporary3 = gdjs.stage02Code.GDenemyObjects2[gdjs.stage02Code.forEachIndex3];
gdjs.stage02Code.GDenemyObjects3.push(gdjs.stage02Code.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9629188);
}
if (isConditionTrue_0) {
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.stage02Code.GDenemyObjects3.length !== 0 ? gdjs.stage02Code.GDenemyObjects3[0] : null), (gdjs.stage02Code.GDtiroinimigoObjects3.length !== 0 ? gdjs.stage02Code.GDtiroinimigoObjects3[0] : null));
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.stage02Code.GDenemyObjects2);

for (gdjs.stage02Code.forEachIndex3 = 0;gdjs.stage02Code.forEachIndex3 < gdjs.stage02Code.GDenemyObjects2.length;++gdjs.stage02Code.forEachIndex3) {
gdjs.stage02Code.GDtiroinimigoObjects3.length = 0;

gdjs.stage02Code.GDenemyObjects3.length = 0;


gdjs.stage02Code.forEachTemporary3 = gdjs.stage02Code.GDenemyObjects2[gdjs.stage02Code.forEachIndex3];
gdjs.stage02Code.GDenemyObjects3.push(gdjs.stage02Code.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.stage02Code.GDenemyObjects3.length;i<l;++i) {
    if ( gdjs.stage02Code.GDenemyObjects3[i].getVariableNumber(gdjs.stage02Code.GDenemyObjects3[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.stage02Code.GDenemyObjects3[k] = gdjs.stage02Code.GDenemyObjects3[i];
        ++k;
    }
}
gdjs.stage02Code.GDenemyObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.stage02Code.GDenemyObjects3.length;i<l;++i) {
    if ( gdjs.stage02Code.GDenemyObjects3[i].timerElapsedTime("timeenemyshoot", gdjs.randomFloatInRange(0.8, 3)) ) {
        isConditionTrue_0 = true;
        gdjs.stage02Code.GDenemyObjects3[k] = gdjs.stage02Code.GDenemyObjects3[i];
        ++k;
    }
}
gdjs.stage02Code.GDenemyObjects3.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDtiroinimigoObjects3Objects, (( gdjs.stage02Code.GDenemyObjects3.length === 0 ) ? 0 :gdjs.stage02Code.GDenemyObjects3[0].getPointX("Center")), (( gdjs.stage02Code.GDenemyObjects3.length === 0 ) ? 0 :gdjs.stage02Code.GDenemyObjects3[0].getPointY("Center")), "");
}{for(var i = 0, len = gdjs.stage02Code.GDtiroinimigoObjects3.length ;i < len;++i) {
    gdjs.stage02Code.GDtiroinimigoObjects3[i].addPolarForce(90, 500, 1);
}
}{for(var i = 0, len = gdjs.stage02Code.GDenemyObjects3.length ;i < len;++i) {
    gdjs.stage02Code.GDenemyObjects3[i].resetTimer("timeenemyshoot");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Space Shooter\\Sounds\\tiro.wav", false, 100, 1);
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("tiro"), gdjs.stage02Code.GDtiroObjects1);
gdjs.copyArray(runtimeScene.getObjects("tiroinimigo"), gdjs.stage02Code.GDtiroinimigoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDtiroObjects1Objects, gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDtiroinimigoObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.stage02Code.GDtiroObjects1 */
/* Reuse gdjs.stage02Code.GDtiroinimigoObjects1 */
{for(var i = 0, len = gdjs.stage02Code.GDtiroObjects1.length ;i < len;++i) {
    gdjs.stage02Code.GDtiroObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.stage02Code.GDtiroinimigoObjects1.length ;i < len;++i) {
    gdjs.stage02Code.GDtiroinimigoObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDboss01Objects2Objects = Hashtable.newFrom({"boss01": gdjs.stage02Code.GDboss01Objects2});
gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDtirobossObjects2Objects = Hashtable.newFrom({"tiroboss": gdjs.stage02Code.GDtirobossObjects2});
gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDtiroboss2Objects2Objects = Hashtable.newFrom({"tiroboss2": gdjs.stage02Code.GDtiroboss2Objects2});
gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDnaveObjects2Objects = Hashtable.newFrom({"nave": gdjs.stage02Code.GDnaveObjects2});
gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDtirobossObjects2Objects = Hashtable.newFrom({"tiroboss": gdjs.stage02Code.GDtirobossObjects2});
gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDexplosionObjects2Objects = Hashtable.newFrom({"explosion": gdjs.stage02Code.GDexplosionObjects2});
gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDnaveObjects2Objects = Hashtable.newFrom({"nave": gdjs.stage02Code.GDnaveObjects2});
gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDtiroboss2Objects2Objects = Hashtable.newFrom({"tiroboss2": gdjs.stage02Code.GDtiroboss2Objects2});
gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDexplosionObjects2Objects = Hashtable.newFrom({"explosion": gdjs.stage02Code.GDexplosionObjects2});
gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDnaveObjects2Objects = Hashtable.newFrom({"nave": gdjs.stage02Code.GDnaveObjects2});
gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDboss01Objects2Objects = Hashtable.newFrom({"boss01": gdjs.stage02Code.GDboss01Objects2});
gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDexplosionObjects2Objects = Hashtable.newFrom({"explosion": gdjs.stage02Code.GDexplosionObjects2});
gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDtiroObjects2Objects = Hashtable.newFrom({"tiro": gdjs.stage02Code.GDtiroObjects2});
gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDtirobossObjects2Objects = Hashtable.newFrom({"tiroboss": gdjs.stage02Code.GDtirobossObjects2});
gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDtiroObjects1Objects = Hashtable.newFrom({"tiro": gdjs.stage02Code.GDtiroObjects1});
gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDtiroboss2Objects1Objects = Hashtable.newFrom({"tiroboss2": gdjs.stage02Code.GDtiroboss2Objects1});
gdjs.stage02Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 5000;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9650588);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1.2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9651092);
}
}
if (isConditionTrue_0) {
gdjs.stage02Code.GDboss01Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDboss01Objects2Objects, 195, -(400), "");
}{for(var i = 0, len = gdjs.stage02Code.GDboss01Objects2.length ;i < len;++i) {
    gdjs.stage02Code.GDboss01Objects2[i].addForce(0, 100, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("boss01"), gdjs.stage02Code.GDboss01Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.stage02Code.GDboss01Objects2.length;i<l;++i) {
    if ( gdjs.stage02Code.GDboss01Objects2[i].getY() > 45 ) {
        isConditionTrue_0 = true;
        gdjs.stage02Code.GDboss01Objects2[k] = gdjs.stage02Code.GDboss01Objects2[i];
        ++k;
    }
}
gdjs.stage02Code.GDboss01Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.stage02Code.GDboss01Objects2 */
{for(var i = 0, len = gdjs.stage02Code.GDboss01Objects2.length ;i < len;++i) {
    gdjs.stage02Code.GDboss01Objects2[i].clearForces();
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("boss01"), gdjs.stage02Code.GDboss01Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "shoot1");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.stage02Code.GDboss01Objects2.length;i<l;++i) {
    if ( gdjs.stage02Code.GDboss01Objects2[i].getY() >= -(10) ) {
        isConditionTrue_0 = true;
        gdjs.stage02Code.GDboss01Objects2[k] = gdjs.stage02Code.GDboss01Objects2[i];
        ++k;
    }
}
gdjs.stage02Code.GDboss01Objects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.stage02Code.GDboss01Objects2 */
gdjs.stage02Code.GDtirobossObjects2.length = 0;

gdjs.stage02Code.GDtiroboss2Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDtirobossObjects2Objects, (( gdjs.stage02Code.GDboss01Objects2.length === 0 ) ? 0 :gdjs.stage02Code.GDboss01Objects2[0].getPointX("shoot1")), (( gdjs.stage02Code.GDboss01Objects2.length === 0 ) ? 0 :gdjs.stage02Code.GDboss01Objects2[0].getPointY("shoot1")), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDtiroboss2Objects2Objects, (( gdjs.stage02Code.GDboss01Objects2.length === 0 ) ? 0 :gdjs.stage02Code.GDboss01Objects2[0].getPointX("shoot2")), (( gdjs.stage02Code.GDboss01Objects2.length === 0 ) ? 0 :gdjs.stage02Code.GDboss01Objects2[0].getPointY("shoot2")), "");
}{for(var i = 0, len = gdjs.stage02Code.GDtirobossObjects2.length ;i < len;++i) {
    gdjs.stage02Code.GDtirobossObjects2[i].addPolarForce(90, 600, 1);
}
}{for(var i = 0, len = gdjs.stage02Code.GDtiroboss2Objects2.length ;i < len;++i) {
    gdjs.stage02Code.GDtiroboss2Objects2[i].addPolarForce(90, 600, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "shoot1");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("nave"), gdjs.stage02Code.GDnaveObjects2);
gdjs.copyArray(runtimeScene.getObjects("tiroboss"), gdjs.stage02Code.GDtirobossObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDnaveObjects2Objects, gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDtirobossObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.stage02Code.GDnaveObjects2 */
/* Reuse gdjs.stage02Code.GDtirobossObjects2 */
gdjs.stage02Code.GDexplosionObjects2.length = 0;

{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.stage02Code.GDnaveObjects2.length ;i < len;++i) {
    gdjs.stage02Code.GDnaveObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDexplosionObjects2Objects, (( gdjs.stage02Code.GDnaveObjects2.length === 0 ) ? 0 :gdjs.stage02Code.GDnaveObjects2[0].getPointX("Centre")), (( gdjs.stage02Code.GDnaveObjects2.length === 0 ) ? 0 :gdjs.stage02Code.GDnaveObjects2[0].getPointY("Centre")), "");
}{for(var i = 0, len = gdjs.stage02Code.GDtirobossObjects2.length ;i < len;++i) {
    gdjs.stage02Code.GDtirobossObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Space Shooter\\Sounds\\destroyer.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "reiniciar");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("nave"), gdjs.stage02Code.GDnaveObjects2);
gdjs.copyArray(runtimeScene.getObjects("tiroboss2"), gdjs.stage02Code.GDtiroboss2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDnaveObjects2Objects, gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDtiroboss2Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.stage02Code.GDnaveObjects2 */
/* Reuse gdjs.stage02Code.GDtiroboss2Objects2 */
gdjs.stage02Code.GDexplosionObjects2.length = 0;

{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.stage02Code.GDnaveObjects2.length ;i < len;++i) {
    gdjs.stage02Code.GDnaveObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDexplosionObjects2Objects, (( gdjs.stage02Code.GDnaveObjects2.length === 0 ) ? 0 :gdjs.stage02Code.GDnaveObjects2[0].getPointX("Centre")), (( gdjs.stage02Code.GDnaveObjects2.length === 0 ) ? 0 :gdjs.stage02Code.GDnaveObjects2[0].getPointY("Centre")), "");
}{for(var i = 0, len = gdjs.stage02Code.GDtiroboss2Objects2.length ;i < len;++i) {
    gdjs.stage02Code.GDtiroboss2Objects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Space Shooter\\Sounds\\destroyer.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "reiniciar");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("boss01"), gdjs.stage02Code.GDboss01Objects2);
gdjs.copyArray(runtimeScene.getObjects("nave"), gdjs.stage02Code.GDnaveObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDnaveObjects2Objects, gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDboss01Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.stage02Code.GDnaveObjects2 */
gdjs.stage02Code.GDexplosionObjects2.length = 0;

{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.stage02Code.GDnaveObjects2.length ;i < len;++i) {
    gdjs.stage02Code.GDnaveObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDexplosionObjects2Objects, (( gdjs.stage02Code.GDnaveObjects2.length === 0 ) ? 0 :gdjs.stage02Code.GDnaveObjects2[0].getPointX("Centre")), (( gdjs.stage02Code.GDnaveObjects2.length === 0 ) ? 0 :gdjs.stage02Code.GDnaveObjects2[0].getPointY("Centre")), "");
}{gdjs.evtTools.sound.playSound(runtimeScene, "Space Shooter\\Sounds\\destroyer.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "reiniciar");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("tiro"), gdjs.stage02Code.GDtiroObjects2);
gdjs.copyArray(runtimeScene.getObjects("tiroboss"), gdjs.stage02Code.GDtirobossObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDtiroObjects2Objects, gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDtirobossObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.stage02Code.GDtiroObjects2 */
{for(var i = 0, len = gdjs.stage02Code.GDtiroObjects2.length ;i < len;++i) {
    gdjs.stage02Code.GDtiroObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("tiro"), gdjs.stage02Code.GDtiroObjects1);
gdjs.copyArray(runtimeScene.getObjects("tiroboss2"), gdjs.stage02Code.GDtiroboss2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDtiroObjects1Objects, gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDtiroboss2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.stage02Code.GDtiroObjects1 */
{for(var i = 0, len = gdjs.stage02Code.GDtiroObjects1.length ;i < len;++i) {
    gdjs.stage02Code.GDtiroObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDtiroObjects1Objects = Hashtable.newFrom({"tiro": gdjs.stage02Code.GDtiroObjects1});
gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDboss01Objects1Objects = Hashtable.newFrom({"boss01": gdjs.stage02Code.GDboss01Objects1});
gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDexplosionObjects1Objects = Hashtable.newFrom({"explosion": gdjs.stage02Code.GDexplosionObjects1});
gdjs.stage02Code.eventsList5 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.stage02Code.GDBGObjects1);
{for(var i = 0, len = gdjs.stage02Code.GDBGObjects1.length ;i < len;++i) {
    gdjs.stage02Code.GDBGObjects1[i].setYOffset(gdjs.stage02Code.GDBGObjects1[i].getYOffset() + (-(75) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 1;
if (isConditionTrue_0) {

{ //Subevents
gdjs.stage02Code.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("shot"), gdjs.stage02Code.GDshotObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.3, "timershot");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDshotObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("nave"), gdjs.stage02Code.GDnaveObjects1);
gdjs.stage02Code.GDtiroObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDtiroObjects1Objects, (( gdjs.stage02Code.GDnaveObjects1.length === 0 ) ? 0 :gdjs.stage02Code.GDnaveObjects1[0].getPointX("tiro")), (( gdjs.stage02Code.GDnaveObjects1.length === 0 ) ? 0 :gdjs.stage02Code.GDnaveObjects1[0].getPointY("tiro")), "");
}{for(var i = 0, len = gdjs.stage02Code.GDtiroObjects1.length ;i < len;++i) {
    gdjs.stage02Code.GDtiroObjects1[i].addForce(0, -(500), 1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Space Shooter\\Sounds\\tiro.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timershot");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.3, "timershot");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("nave"), gdjs.stage02Code.GDnaveObjects1);
gdjs.stage02Code.GDtiroObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDtiroObjects1Objects, (( gdjs.stage02Code.GDnaveObjects1.length === 0 ) ? 0 :gdjs.stage02Code.GDnaveObjects1[0].getPointX("tiro")), (( gdjs.stage02Code.GDnaveObjects1.length === 0 ) ? 0 :gdjs.stage02Code.GDnaveObjects1[0].getPointY("tiro")), "");
}{for(var i = 0, len = gdjs.stage02Code.GDtiroObjects1.length ;i < len;++i) {
    gdjs.stage02Code.GDtiroObjects1[i].addForce(0, -(500), 1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Space Shooter\\Sounds\\tiro.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timershot");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("limiter"), gdjs.stage02Code.GDlimiterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tiro"), gdjs.stage02Code.GDtiroObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDtiroObjects1Objects, gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDlimiterObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.stage02Code.GDtiroObjects1 */
{for(var i = 0, len = gdjs.stage02Code.GDtiroObjects1.length ;i < len;++i) {
    gdjs.stage02Code.GDtiroObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("limiter"), gdjs.stage02Code.GDlimiterObjects1);
gdjs.copyArray(runtimeScene.getObjects("nave"), gdjs.stage02Code.GDnaveObjects1);
{for(var i = 0, len = gdjs.stage02Code.GDnaveObjects1.length ;i < len;++i) {
    gdjs.stage02Code.GDnaveObjects1[i].separateFromObjectsList(gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDlimiterObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.stage02Code.GDlimiterObjects1.length ;i < len;++i) {
    gdjs.stage02Code.GDlimiterObjects1[i].hide();
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("up"), gdjs.stage02Code.GDupObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDupObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("nave"), gdjs.stage02Code.GDnaveObjects1);
{for(var i = 0, len = gdjs.stage02Code.GDnaveObjects1.length ;i < len;++i) {
    gdjs.stage02Code.GDnaveObjects1[i].getBehavior("TopDownMovement").simulateUpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.stage02Code.GDrightObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDrightObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("nave"), gdjs.stage02Code.GDnaveObjects1);
{for(var i = 0, len = gdjs.stage02Code.GDnaveObjects1.length ;i < len;++i) {
    gdjs.stage02Code.GDnaveObjects1[i].getBehavior("TopDownMovement").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.stage02Code.GDleftObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDleftObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("nave"), gdjs.stage02Code.GDnaveObjects1);
{for(var i = 0, len = gdjs.stage02Code.GDnaveObjects1.length ;i < len;++i) {
    gdjs.stage02Code.GDnaveObjects1[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("down"), gdjs.stage02Code.GDdownObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDdownObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("nave"), gdjs.stage02Code.GDnaveObjects1);
{for(var i = 0, len = gdjs.stage02Code.GDnaveObjects1.length ;i < len;++i) {
    gdjs.stage02Code.GDnaveObjects1[i].getBehavior("TopDownMovement").simulateDownKey();
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.stage02Code.GDenemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("nave"), gdjs.stage02Code.GDnaveObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDnaveObjects1Objects, gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDenemyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.stage02Code.GDenemyObjects1 */
/* Reuse gdjs.stage02Code.GDnaveObjects1 */
gdjs.stage02Code.GDexplosionObjects1.length = 0;

{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.stage02Code.GDnaveObjects1.length ;i < len;++i) {
    gdjs.stage02Code.GDnaveObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDexplosionObjects1Objects, (( gdjs.stage02Code.GDnaveObjects1.length === 0 ) ? 0 :gdjs.stage02Code.GDnaveObjects1[0].getPointX("Centre")), (( gdjs.stage02Code.GDnaveObjects1.length === 0 ) ? 0 :gdjs.stage02Code.GDnaveObjects1[0].getPointY("Centre")), "");
}{for(var i = 0, len = gdjs.stage02Code.GDenemyObjects1.length ;i < len;++i) {
    gdjs.stage02Code.GDenemyObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDexplosionObjects1Objects, (( gdjs.stage02Code.GDenemyObjects1.length === 0 ) ? 0 :gdjs.stage02Code.GDenemyObjects1[0].getPointX("Centre")), (( gdjs.stage02Code.GDenemyObjects1.length === 0 ) ? 0 :gdjs.stage02Code.GDenemyObjects1[0].getPointY("Centre")), "");
}{gdjs.evtTools.sound.playSound(runtimeScene, "Space Shooter\\Sounds\\destroyer.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "reiniciar");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("nave"), gdjs.stage02Code.GDnaveObjects1);
gdjs.copyArray(runtimeScene.getObjects("tiroinimigo"), gdjs.stage02Code.GDtiroinimigoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDnaveObjects1Objects, gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDtiroinimigoObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.stage02Code.GDnaveObjects1 */
/* Reuse gdjs.stage02Code.GDtiroinimigoObjects1 */
gdjs.stage02Code.GDexplosionObjects1.length = 0;

{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.stage02Code.GDnaveObjects1.length ;i < len;++i) {
    gdjs.stage02Code.GDnaveObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDexplosionObjects1Objects, (( gdjs.stage02Code.GDnaveObjects1.length === 0 ) ? 0 :gdjs.stage02Code.GDnaveObjects1[0].getPointX("Centre")), (( gdjs.stage02Code.GDnaveObjects1.length === 0 ) ? 0 :gdjs.stage02Code.GDnaveObjects1[0].getPointY("Centre")), "");
}{for(var i = 0, len = gdjs.stage02Code.GDtiroinimigoObjects1.length ;i < len;++i) {
    gdjs.stage02Code.GDtiroinimigoObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Space Shooter\\Sounds\\destroyer.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "reiniciar");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("tiro"), gdjs.stage02Code.GDtiroObjects1);
gdjs.copyArray(runtimeScene.getObjects("tiroinimigo"), gdjs.stage02Code.GDtiroinimigoObjects1);
{for(var i = 0, len = gdjs.stage02Code.GDtiroinimigoObjects1.length ;i < len;++i) {
    gdjs.stage02Code.GDtiroinimigoObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.stage02Code.GDtiroObjects1.length ;i < len;++i) {
    gdjs.stage02Code.GDtiroObjects1[i].clearForces();
}
}}

}


{



}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1.5, "reiniciar");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gameover", false);
}}

}


{



}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {

{ //Subevents
gdjs.stage02Code.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.stage02Code.GDscoreObjects1);
{for(var i = 0, len = gdjs.stage02Code.GDscoreObjects1.length ;i < len;++i) {
    gdjs.stage02Code.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{



}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {

{ //Subevents
gdjs.stage02Code.eventsList4(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("boss01"), gdjs.stage02Code.GDboss01Objects1);
gdjs.copyArray(runtimeScene.getObjects("tiro"), gdjs.stage02Code.GDtiroObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDtiroObjects1Objects, gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDboss01Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.stage02Code.GDboss01Objects1.length;i<l;++i) {
    if ( gdjs.stage02Code.GDboss01Objects1[i].getY() >= -(10) ) {
        isConditionTrue_0 = true;
        gdjs.stage02Code.GDboss01Objects1[k] = gdjs.stage02Code.GDboss01Objects1[i];
        ++k;
    }
}
gdjs.stage02Code.GDboss01Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.stage02Code.GDboss01Objects1 */
/* Reuse gdjs.stage02Code.GDtiroObjects1 */
{for(var i = 0, len = gdjs.stage02Code.GDtiroObjects1.length ;i < len;++i) {
    gdjs.stage02Code.GDtiroObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.stage02Code.GDboss01Objects1.length ;i < len;++i) {
    gdjs.stage02Code.GDboss01Objects1[i].getBehavior("Flash").Flash(0.1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Space Shooter\\Sounds\\destroyer.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.stage02Code.GDboss01Objects1.length ;i < len;++i) {
    gdjs.stage02Code.GDboss01Objects1[i].returnVariable(gdjs.stage02Code.GDboss01Objects1[i].getVariables().getFromIndex(0)).sub(10);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(50);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("boss01"), gdjs.stage02Code.GDboss01Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.stage02Code.GDboss01Objects1.length;i<l;++i) {
    if ( gdjs.stage02Code.GDboss01Objects1[i].getVariableNumber(gdjs.stage02Code.GDboss01Objects1[i].getVariables().getFromIndex(0)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.stage02Code.GDboss01Objects1[k] = gdjs.stage02Code.GDboss01Objects1[i];
        ++k;
    }
}
gdjs.stage02Code.GDboss01Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.stage02Code.GDboss01Objects1 */
gdjs.stage02Code.GDexplosionObjects1.length = 0;

{for(var i = 0, len = gdjs.stage02Code.GDboss01Objects1.length ;i < len;++i) {
    gdjs.stage02Code.GDboss01Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.stage02Code.mapOfGDgdjs_9546stage02Code_9546GDexplosionObjects1Objects, (( gdjs.stage02Code.GDboss01Objects1.length === 0 ) ? 0 :gdjs.stage02Code.GDboss01Objects1[0].getPointX("Center")), (( gdjs.stage02Code.GDboss01Objects1.length === 0 ) ? 0 :gdjs.stage02Code.GDboss01Objects1[0].getPointY("Center")), "");
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timerenemy");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("boss01"), gdjs.stage02Code.GDboss01Objects1);
gdjs.copyArray(runtimeScene.getObjects("tiroboss"), gdjs.stage02Code.GDtirobossObjects1);
gdjs.copyArray(runtimeScene.getObjects("tiroboss2"), gdjs.stage02Code.GDtiroboss2Objects1);
{for(var i = 0, len = gdjs.stage02Code.GDboss01Objects1.length ;i < len;++i) {
    gdjs.stage02Code.GDboss01Objects1[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs.stage02Code.GDboss01Objects1.length ;i < len;++i) {
    gdjs.stage02Code.GDboss01Objects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.stage02Code.GDtirobossObjects1.length ;i < len;++i) {
    gdjs.stage02Code.GDtirobossObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.stage02Code.GDtiroboss2Objects1.length ;i < len;++i) {
    gdjs.stage02Code.GDtiroboss2Objects1[i].clearForces();
}
}}

}


};

gdjs.stage02Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.stage02Code.GDnaveObjects1.length = 0;
gdjs.stage02Code.GDnaveObjects2.length = 0;
gdjs.stage02Code.GDnaveObjects3.length = 0;
gdjs.stage02Code.GDlimiterObjects1.length = 0;
gdjs.stage02Code.GDlimiterObjects2.length = 0;
gdjs.stage02Code.GDlimiterObjects3.length = 0;
gdjs.stage02Code.GDtiroObjects1.length = 0;
gdjs.stage02Code.GDtiroObjects2.length = 0;
gdjs.stage02Code.GDtiroObjects3.length = 0;
gdjs.stage02Code.GDenemyObjects1.length = 0;
gdjs.stage02Code.GDenemyObjects2.length = 0;
gdjs.stage02Code.GDenemyObjects3.length = 0;
gdjs.stage02Code.GDexplosionObjects1.length = 0;
gdjs.stage02Code.GDexplosionObjects2.length = 0;
gdjs.stage02Code.GDexplosionObjects3.length = 0;
gdjs.stage02Code.GDBGObjects1.length = 0;
gdjs.stage02Code.GDBGObjects2.length = 0;
gdjs.stage02Code.GDBGObjects3.length = 0;
gdjs.stage02Code.GDtiroinimigoObjects1.length = 0;
gdjs.stage02Code.GDtiroinimigoObjects2.length = 0;
gdjs.stage02Code.GDtiroinimigoObjects3.length = 0;
gdjs.stage02Code.GDscoreObjects1.length = 0;
gdjs.stage02Code.GDscoreObjects2.length = 0;
gdjs.stage02Code.GDscoreObjects3.length = 0;
gdjs.stage02Code.GDupObjects1.length = 0;
gdjs.stage02Code.GDupObjects2.length = 0;
gdjs.stage02Code.GDupObjects3.length = 0;
gdjs.stage02Code.GDdownObjects1.length = 0;
gdjs.stage02Code.GDdownObjects2.length = 0;
gdjs.stage02Code.GDdownObjects3.length = 0;
gdjs.stage02Code.GDrightObjects1.length = 0;
gdjs.stage02Code.GDrightObjects2.length = 0;
gdjs.stage02Code.GDrightObjects3.length = 0;
gdjs.stage02Code.GDleftObjects1.length = 0;
gdjs.stage02Code.GDleftObjects2.length = 0;
gdjs.stage02Code.GDleftObjects3.length = 0;
gdjs.stage02Code.GDshotObjects1.length = 0;
gdjs.stage02Code.GDshotObjects2.length = 0;
gdjs.stage02Code.GDshotObjects3.length = 0;
gdjs.stage02Code.GDboss01Objects1.length = 0;
gdjs.stage02Code.GDboss01Objects2.length = 0;
gdjs.stage02Code.GDboss01Objects3.length = 0;
gdjs.stage02Code.GDtiroboss2Objects1.length = 0;
gdjs.stage02Code.GDtiroboss2Objects2.length = 0;
gdjs.stage02Code.GDtiroboss2Objects3.length = 0;
gdjs.stage02Code.GDtirobossObjects1.length = 0;
gdjs.stage02Code.GDtirobossObjects2.length = 0;
gdjs.stage02Code.GDtirobossObjects3.length = 0;

gdjs.stage02Code.eventsList5(runtimeScene);

return;

}

gdjs['stage02Code'] = gdjs.stage02Code;
