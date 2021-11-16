var size = 0;
var placement = 'point';

    var fill_ProgramasParcialesdeDesarrolloUrbano_29 = new ol.style.Fill();
var style_ProgramasParcialesdeDesarrolloUrbano_29 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "10.725px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(219,169,1,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(186,221,105,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    }),new ol.style.Style({
        
        fill: fill_ProgramasParcialesdeDesarrolloUrbano_29,
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];

    return style;
};

    fill_ProgramasParcialesdeDesarrolloUrbano_29.setColor(stripe(0.3, 3.0, 315.0, '#dba901'));