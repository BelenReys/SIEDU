var size = 0;
var placement = 'point';
function categories_NormadeBiciestacionamiento_26(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case 'A':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(128,0,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 5}), fill: new ol.style.Fill({color: 'rgba(241,244,199,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'B':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(89,86,86,1.0)', lineDash: [10,5], lineCap: 'butt', lineJoin: 'miter', width: 4}), fill: new ol.style.Fill({color: 'rgba(241,244,199,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    }),new ol.style.Style({
        
        fill: fill_NormadeBiciestacionamiento_26,
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

    var fill_NormadeBiciestacionamiento_26 = new ol.style.Fill();
var style_NormadeBiciestacionamiento_26 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("zonas");
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
    
var style = categories_NormadeBiciestacionamiento_26(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};

    fill_NormadeBiciestacionamiento_26.setColor(stripe(0.2, 5.0, 215.0, '#a4a4a4'));