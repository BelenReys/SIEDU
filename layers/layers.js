var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});

        var lyr_Base_0 = new ol.layer.Tile({
            'title': 'Base_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>'})],
                url: 'http://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });var format_PuertasMetropolitanas_1 = new ol.format.GeoJSON();
var features_PuertasMetropolitanas_1 = format_PuertasMetropolitanas_1.readFeatures(json_PuertasMetropolitanas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuertasMetropolitanas_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PuertasMetropolitanas_1.addFeatures(features_PuertasMetropolitanas_1);var lyr_PuertasMetropolitanas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PuertasMetropolitanas_1, 
                style: style_PuertasMetropolitanas_1,
                title: '<img src="styles/legend/PuertasMetropolitanas_1.png" /> Puertas Metropolitanas'
            });var format_LmitedeAlcalda_2 = new ol.format.GeoJSON();
var features_LmitedeAlcalda_2 = format_LmitedeAlcalda_2.readFeatures(json_LmitedeAlcalda_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LmitedeAlcalda_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LmitedeAlcalda_2.addFeatures(features_LmitedeAlcalda_2);var lyr_LmitedeAlcalda_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LmitedeAlcalda_2, 
                style: style_LmitedeAlcalda_2,
                title: '<img src="styles/legend/LmitedeAlcalda_2.png" /> Límite de Alcaldía'
            });var format_ViviendasconPisodeTierra2010_3 = new ol.format.GeoJSON();
var features_ViviendasconPisodeTierra2010_3 = format_ViviendasconPisodeTierra2010_3.readFeatures(json_ViviendasconPisodeTierra2010_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViviendasconPisodeTierra2010_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ViviendasconPisodeTierra2010_3.addFeatures(features_ViviendasconPisodeTierra2010_3);var lyr_ViviendasconPisodeTierra2010_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViviendasconPisodeTierra2010_3, 
                style: style_ViviendasconPisodeTierra2010_3,
    title: 'Viviendas con Piso de Tierra 2010<br />\
    <img src="styles/legend/ViviendasconPisodeTierra2010_3_0.png" /> Muy Alta, Más de 20 Viviendas<br />\
    <img src="styles/legend/ViviendasconPisodeTierra2010_3_1.png" /> Alta, 17 a 20 Viviendas<br />\
    <img src="styles/legend/ViviendasconPisodeTierra2010_3_2.png" /> Media Alta, 12  a 16 Viviendas<br />\
    <img src="styles/legend/ViviendasconPisodeTierra2010_3_3.png" /> Media Baja, 8 a 11 Viviendas<br />\
    <img src="styles/legend/ViviendasconPisodeTierra2010_3_4.png" /> Baja, 4 a 7 Viviendas<br />\
    <img src="styles/legend/ViviendasconPisodeTierra2010_3_5.png" /> Muy Baja, 0 a 3 Viviendas<br />\
    <img src="styles/legend/ViviendasconPisodeTierra2010_3_6.png" /> Omitidos o Equipamientos<br />'
        });var format_UnidadesEconmicasNetas2014_4 = new ol.format.GeoJSON();
var features_UnidadesEconmicasNetas2014_4 = format_UnidadesEconmicasNetas2014_4.readFeatures(json_UnidadesEconmicasNetas2014_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UnidadesEconmicasNetas2014_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_UnidadesEconmicasNetas2014_4.addFeatures(features_UnidadesEconmicasNetas2014_4);var lyr_UnidadesEconmicasNetas2014_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UnidadesEconmicasNetas2014_4, 
                style: style_UnidadesEconmicasNetas2014_4,
    title: 'Unidades Económicas Netas 2014<br />\
    <img src="styles/legend/UnidadesEconmicasNetas2014_4_0.png" /> 356 a Más Unidades Económicas<br />\
    <img src="styles/legend/UnidadesEconmicasNetas2014_4_1.png" /> 271 a 355 Unidades Económicas<br />\
    <img src="styles/legend/UnidadesEconmicasNetas2014_4_2.png" /> 186 a 270 Unidades Económicas<br />\
    <img src="styles/legend/UnidadesEconmicasNetas2014_4_3.png" /> 101 a 185 Unidades Económicas<br />\
    <img src="styles/legend/UnidadesEconmicasNetas2014_4_4.png" /> 38 a 100 Unidades Económicas<br />\
    <img src="styles/legend/UnidadesEconmicasNetas2014_4_5.png" /> 0 a 37 Unidades Económicas<br />'
        });var format_OcupantesporVivienda2010_5 = new ol.format.GeoJSON();
var features_OcupantesporVivienda2010_5 = format_OcupantesporVivienda2010_5.readFeatures(json_OcupantesporVivienda2010_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OcupantesporVivienda2010_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_OcupantesporVivienda2010_5.addFeatures(features_OcupantesporVivienda2010_5);var lyr_OcupantesporVivienda2010_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OcupantesporVivienda2010_5, 
                style: style_OcupantesporVivienda2010_5,
    title: 'Ocupantes por Vivienda 2010<br />\
    <img src="styles/legend/OcupantesporVivienda2010_5_0.png" /> Muy Alto, Más de 4.63  Hab/Viv<br />\
    <img src="styles/legend/OcupantesporVivienda2010_5_1.png" /> Alto 4.11 a 4.62  Hab/Viv<br />\
    <img src="styles/legend/OcupantesporVivienda2010_5_2.png" /> Medio Alto 3.60 a 4.10  Hab/Viv<br />\
    <img src="styles/legend/OcupantesporVivienda2010_5_3.png" /> Medio Bajo 3.09 a 3.59 Hab/Viv<br />\
    <img src="styles/legend/OcupantesporVivienda2010_5_4.png" /> Bajo 2.57 a 3.08 Hab/Viv<br />\
    <img src="styles/legend/OcupantesporVivienda2010_5_5.png" /> Muy Bajo 1.29 a 2.56 Hab/Viv<br />\
    <img src="styles/legend/OcupantesporVivienda2010_5_6.png" /> OCUP VIV OMITIDOS<br />'
        });var format_EmpleadosNetos2014_6 = new ol.format.GeoJSON();
var features_EmpleadosNetos2014_6 = format_EmpleadosNetos2014_6.readFeatures(json_EmpleadosNetos2014_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpleadosNetos2014_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_EmpleadosNetos2014_6.addFeatures(features_EmpleadosNetos2014_6);var lyr_EmpleadosNetos2014_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EmpleadosNetos2014_6, 
                style: style_EmpleadosNetos2014_6,
    title: 'Empleados Netos 2014<br />\
    <img src="styles/legend/EmpleadosNetos2014_6_0.png" /> EMPLEADOS NETOS 2601 A MÁS<br />\
    <img src="styles/legend/EmpleadosNetos2014_6_1.png" /> EMPLEADOS NETOS 2001 A 2600<br />\
    <img src="styles/legend/EmpleadosNetos2014_6_2.png" /> EMPLEADOS NETOS 1451 A 2000<br />\
    <img src="styles/legend/EmpleadosNetos2014_6_3.png" /> EMPLEADOS NETOS 851 A 1450<br />\
    <img src="styles/legend/EmpleadosNetos2014_6_4.png" /> EMPLEADOS NETOS 301 A 850<br />\
    <img src="styles/legend/EmpleadosNetos2014_6_5.png" /> EMPLEADOS NETOS 0 A 300<br />'
        });var format_DensidaddeUnidadesEconmicas2014_7 = new ol.format.GeoJSON();
var features_DensidaddeUnidadesEconmicas2014_7 = format_DensidaddeUnidadesEconmicas2014_7.readFeatures(json_DensidaddeUnidadesEconmicas2014_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DensidaddeUnidadesEconmicas2014_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DensidaddeUnidadesEconmicas2014_7.addFeatures(features_DensidaddeUnidadesEconmicas2014_7);var lyr_DensidaddeUnidadesEconmicas2014_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DensidaddeUnidadesEconmicas2014_7, 
                style: style_DensidaddeUnidadesEconmicas2014_7,
    title: 'Densidad de Unidades Económicas 2014<br />\
    <img src="styles/legend/DensidaddeUnidadesEconmicas2014_7_0.png" /> 15.51 a Más Unidades Económicas/ha<br />\
    <img src="styles/legend/DensidaddeUnidadesEconmicas2014_7_1.png" /> 12.1 a 15 Unidades Económicas/ha<br />\
    <img src="styles/legend/DensidaddeUnidadesEconmicas2014_7_2.png" /> 10.1 a 12 Unidades Económicas/ha<br />\
    <img src="styles/legend/DensidaddeUnidadesEconmicas2014_7_3.png" /> 7.5 a 10 Unidades Económicas/ha<br />\
    <img src="styles/legend/DensidaddeUnidadesEconmicas2014_7_4.png" /> 5.1 a 7.5 Unidades Económicas/ha<br />\
    <img src="styles/legend/DensidaddeUnidadesEconmicas2014_7_5.png" /> 0 a 5 Unidades Económicas/ha<br />'
        });var format_DensidaddeVivienda2010_8 = new ol.format.GeoJSON();
var features_DensidaddeVivienda2010_8 = format_DensidaddeVivienda2010_8.readFeatures(json_DensidaddeVivienda2010_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DensidaddeVivienda2010_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DensidaddeVivienda2010_8.addFeatures(features_DensidaddeVivienda2010_8);var lyr_DensidaddeVivienda2010_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DensidaddeVivienda2010_8, 
                style: style_DensidaddeVivienda2010_8,
    title: 'Densidad de Vivienda 2010<br />\
    <img src="styles/legend/DensidaddeVivienda2010_8_0.png" /> Muy  Alta,  Más de  86 Viv/ha<br />\
    <img src="styles/legend/DensidaddeVivienda2010_8_1.png" /> Alta  71 a 85 Viv/ha<br />\
    <img src="styles/legend/DensidaddeVivienda2010_8_2.png" /> Media Alta 51 a 70 Viv/ha<br />\
    <img src="styles/legend/DensidaddeVivienda2010_8_3.png" /> Media Baja 36 a 50 Viv/ha<br />\
    <img src="styles/legend/DensidaddeVivienda2010_8_4.png" /> Baja 21 a 35 Viv/ha<br />\
    <img src="styles/legend/DensidaddeVivienda2010_8_5.png" /> Muy Baja 1 a 20 Viv/ha<br />\
    <img src="styles/legend/DensidaddeVivienda2010_8_6.png" /> Sin Densidad<br />'
        });var format_DensidaddePoblacin2010_9 = new ol.format.GeoJSON();
var features_DensidaddePoblacin2010_9 = format_DensidaddePoblacin2010_9.readFeatures(json_DensidaddePoblacin2010_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DensidaddePoblacin2010_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DensidaddePoblacin2010_9.addFeatures(features_DensidaddePoblacin2010_9);var lyr_DensidaddePoblacin2010_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DensidaddePoblacin2010_9, 
                style: style_DensidaddePoblacin2010_9,
    title: 'Densidad de Población 2010<br />\
    <img src="styles/legend/DensidaddePoblacin2010_9_0.png" /> Mayor a 301 Hab/ha<br />\
    <img src="styles/legend/DensidaddePoblacin2010_9_1.png" /> 201 a 300 Hab/ha<br />\
    <img src="styles/legend/DensidaddePoblacin2010_9_2.png" /> 151 a 200 Hab/ha<br />\
    <img src="styles/legend/DensidaddePoblacin2010_9_3.png" /> 101 a 150 Hab/ha<br />\
    <img src="styles/legend/DensidaddePoblacin2010_9_4.png" /> 51 a 100 Hab/ha<br />\
    <img src="styles/legend/DensidaddePoblacin2010_9_5.png" /> Menor a 50 Hab/ha<br />\
    <img src="styles/legend/DensidaddePoblacin2010_9_6.png" /> Sin Densidad<br />'
        });var format_Vialidadessinletreroconnombredelacalle_10 = new ol.format.GeoJSON();
var features_Vialidadessinletreroconnombredelacalle_10 = format_Vialidadessinletreroconnombredelacalle_10.readFeatures(json_Vialidadessinletreroconnombredelacalle_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vialidadessinletreroconnombredelacalle_10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Vialidadessinletreroconnombredelacalle_10.addFeatures(features_Vialidadessinletreroconnombredelacalle_10);var lyr_Vialidadessinletreroconnombredelacalle_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vialidadessinletreroconnombredelacalle_10, 
                style: style_Vialidadessinletreroconnombredelacalle_10,
    title: 'Vialidades sin letrero con nombre de la calle<br />\
    <img src="styles/legend/Vialidadessinletreroconnombredelacalle_10_0.png" /> Alto<br />\
    <img src="styles/legend/Vialidadessinletreroconnombredelacalle_10_1.png" /> Medio<br />\
    <img src="styles/legend/Vialidadessinletreroconnombredelacalle_10_2.png" /> Bajo<br />'
        });var format_Vialidadessinrampaparasilladeruedas_11 = new ol.format.GeoJSON();
var features_Vialidadessinrampaparasilladeruedas_11 = format_Vialidadessinrampaparasilladeruedas_11.readFeatures(json_Vialidadessinrampaparasilladeruedas_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vialidadessinrampaparasilladeruedas_11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Vialidadessinrampaparasilladeruedas_11.addFeatures(features_Vialidadessinrampaparasilladeruedas_11);var lyr_Vialidadessinrampaparasilladeruedas_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vialidadessinrampaparasilladeruedas_11, 
                style: style_Vialidadessinrampaparasilladeruedas_11,
    title: 'Vialidades sin rampa para silla de ruedas<br />\
    <img src="styles/legend/Vialidadessinrampaparasilladeruedas_11_0.png" /> Alto<br />\
    <img src="styles/legend/Vialidadessinrampaparasilladeruedas_11_1.png" /> Medio<br />\
    <img src="styles/legend/Vialidadessinrampaparasilladeruedas_11_2.png" /> Bajo<br />'
        });var format_Vialidadessinplantasdeornato_12 = new ol.format.GeoJSON();
var features_Vialidadessinplantasdeornato_12 = format_Vialidadessinplantasdeornato_12.readFeatures(json_Vialidadessinplantasdeornato_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vialidadessinplantasdeornato_12 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Vialidadessinplantasdeornato_12.addFeatures(features_Vialidadessinplantasdeornato_12);var lyr_Vialidadessinplantasdeornato_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vialidadessinplantasdeornato_12, 
                style: style_Vialidadessinplantasdeornato_12,
    title: 'Vialidades sin plantas de ornato<br />\
    <img src="styles/legend/Vialidadessinplantasdeornato_12_0.png" /> Alto<br />\
    <img src="styles/legend/Vialidadessinplantasdeornato_12_1.png" /> Medio<br />\
    <img src="styles/legend/Vialidadessinplantasdeornato_12_2.png" /> Bajo<br />'
        });var format_Vialidadessinguarnicin_13 = new ol.format.GeoJSON();
var features_Vialidadessinguarnicin_13 = format_Vialidadessinguarnicin_13.readFeatures(json_Vialidadessinguarnicin_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vialidadessinguarnicin_13 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Vialidadessinguarnicin_13.addFeatures(features_Vialidadessinguarnicin_13);var lyr_Vialidadessinguarnicin_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vialidadessinguarnicin_13, 
                style: style_Vialidadessinguarnicin_13,
    title: 'Vialidades sin guarnición<br />\
    <img src="styles/legend/Vialidadessinguarnicin_13_0.png" /> Alto<br />\
    <img src="styles/legend/Vialidadessinguarnicin_13_1.png" /> Medio<br />\
    <img src="styles/legend/Vialidadessinguarnicin_13_2.png" /> Bajo<br />'
        });var format_Vialidadessinalumbradopblico_14 = new ol.format.GeoJSON();
var features_Vialidadessinalumbradopblico_14 = format_Vialidadessinalumbradopblico_14.readFeatures(json_Vialidadessinalumbradopblico_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vialidadessinalumbradopblico_14 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Vialidadessinalumbradopblico_14.addFeatures(features_Vialidadessinalumbradopblico_14);var lyr_Vialidadessinalumbradopblico_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vialidadessinalumbradopblico_14, 
                style: style_Vialidadessinalumbradopblico_14,
    title: 'Vialidades sin alumbrado público<br />\
    <img src="styles/legend/Vialidadessinalumbradopblico_14_0.png" /> Alto<br />\
    <img src="styles/legend/Vialidadessinalumbradopblico_14_1.png" /> Medio<br />\
    <img src="styles/legend/Vialidadessinalumbradopblico_14_2.png" /> Bajo<br />'
        });var format_Vialidadessindrenajepluvial_15 = new ol.format.GeoJSON();
var features_Vialidadessindrenajepluvial_15 = format_Vialidadessindrenajepluvial_15.readFeatures(json_Vialidadessindrenajepluvial_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vialidadessindrenajepluvial_15 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Vialidadessindrenajepluvial_15.addFeatures(features_Vialidadessindrenajepluvial_15);var lyr_Vialidadessindrenajepluvial_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vialidadessindrenajepluvial_15, 
                style: style_Vialidadessindrenajepluvial_15,
    title: 'Vialidades sin drenaje pluvial<br />\
    <img src="styles/legend/Vialidadessindrenajepluvial_15_0.png" /> Alto<br />\
    <img src="styles/legend/Vialidadessindrenajepluvial_15_1.png" /> Medio<br />\
    <img src="styles/legend/Vialidadessindrenajepluvial_15_2.png" /> Bajo<br />'
        });var format_Vialidadessinpavimento_16 = new ol.format.GeoJSON();
var features_Vialidadessinpavimento_16 = format_Vialidadessinpavimento_16.readFeatures(json_Vialidadessinpavimento_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vialidadessinpavimento_16 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Vialidadessinpavimento_16.addFeatures(features_Vialidadessinpavimento_16);var lyr_Vialidadessinpavimento_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vialidadessinpavimento_16, 
                style: style_Vialidadessinpavimento_16,
    title: 'Vialidades sin pavimento<br />\
    <img src="styles/legend/Vialidadessinpavimento_16_0.png" /> Alto<br />\
    <img src="styles/legend/Vialidadessinpavimento_16_1.png" /> Medio<br />\
    <img src="styles/legend/Vialidadessinpavimento_16_2.png" /> Bajo<br />'
        });var format_Vialidadessinbanqueta_17 = new ol.format.GeoJSON();
var features_Vialidadessinbanqueta_17 = format_Vialidadessinbanqueta_17.readFeatures(json_Vialidadessinbanqueta_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vialidadessinbanqueta_17 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Vialidadessinbanqueta_17.addFeatures(features_Vialidadessinbanqueta_17);var lyr_Vialidadessinbanqueta_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vialidadessinbanqueta_17, 
                style: style_Vialidadessinbanqueta_17,
    title: 'Vialidades sin banqueta<br />\
    <img src="styles/legend/Vialidadessinbanqueta_17_0.png" /> Alto<br />\
    <img src="styles/legend/Vialidadessinbanqueta_17_1.png" /> Medio<br />\
    <img src="styles/legend/Vialidadessinbanqueta_17_2.png" /> Bajo<br />'
        });var format_Coberturadeinfraestructuraymobiliariourbano_18 = new ol.format.GeoJSON();
var features_Coberturadeinfraestructuraymobiliariourbano_18 = format_Coberturadeinfraestructuraymobiliariourbano_18.readFeatures(json_Coberturadeinfraestructuraymobiliariourbano_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coberturadeinfraestructuraymobiliariourbano_18 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Coberturadeinfraestructuraymobiliariourbano_18.addFeatures(features_Coberturadeinfraestructuraymobiliariourbano_18);var lyr_Coberturadeinfraestructuraymobiliariourbano_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Coberturadeinfraestructuraymobiliariourbano_18, 
                style: style_Coberturadeinfraestructuraymobiliariourbano_18,
    title: 'Cobertura de infraestructura y mobiliario urbano<br />\
    <img src="styles/legend/Coberturadeinfraestructuraymobiliariourbano_18_0.png" /> Muy Alto<br />\
    <img src="styles/legend/Coberturadeinfraestructuraymobiliariourbano_18_1.png" /> Alto<br />\
    <img src="styles/legend/Coberturadeinfraestructuraymobiliariourbano_18_2.png" /> Medio<br />\
    <img src="styles/legend/Coberturadeinfraestructuraymobiliariourbano_18_3.png" /> Bajo<br />\
    <img src="styles/legend/Coberturadeinfraestructuraymobiliariourbano_18_4.png" /> Muy bajo<br />'
        });var format_Movilidaddepersonascondiscapacidad_19 = new ol.format.GeoJSON();
var features_Movilidaddepersonascondiscapacidad_19 = format_Movilidaddepersonascondiscapacidad_19.readFeatures(json_Movilidaddepersonascondiscapacidad_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Movilidaddepersonascondiscapacidad_19 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Movilidaddepersonascondiscapacidad_19.addFeatures(features_Movilidaddepersonascondiscapacidad_19);var lyr_Movilidaddepersonascondiscapacidad_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Movilidaddepersonascondiscapacidad_19, 
                style: style_Movilidaddepersonascondiscapacidad_19,
    title: 'Movilidad de personas con discapacidad<br />\
    <img src="styles/legend/Movilidaddepersonascondiscapacidad_19_0.png" /> Muy alto<br />\
    <img src="styles/legend/Movilidaddepersonascondiscapacidad_19_1.png" /> Alto<br />\
    <img src="styles/legend/Movilidaddepersonascondiscapacidad_19_2.png" /> Medio<br />\
    <img src="styles/legend/Movilidaddepersonascondiscapacidad_19_3.png" /> Bajo<br />\
    <img src="styles/legend/Movilidaddepersonascondiscapacidad_19_4.png" /> Muy Bajo<br />'
        });var format_CentrodeTransferenciaModalCETRAM_20 = new ol.format.GeoJSON();
var features_CentrodeTransferenciaModalCETRAM_20 = format_CentrodeTransferenciaModalCETRAM_20.readFeatures(json_CentrodeTransferenciaModalCETRAM_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CentrodeTransferenciaModalCETRAM_20 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CentrodeTransferenciaModalCETRAM_20.addFeatures(features_CentrodeTransferenciaModalCETRAM_20);var lyr_CentrodeTransferenciaModalCETRAM_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CentrodeTransferenciaModalCETRAM_20, 
                style: style_CentrodeTransferenciaModalCETRAM_20,
                title: '<img src="styles/legend/CentrodeTransferenciaModalCETRAM_20.png" /> Centro de Transferencia Modal (CETRAM)'
            });var format_SistemasdeTransporteEstructuradoEstaciones_21 = new ol.format.GeoJSON();
var features_SistemasdeTransporteEstructuradoEstaciones_21 = format_SistemasdeTransporteEstructuradoEstaciones_21.readFeatures(json_SistemasdeTransporteEstructuradoEstaciones_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SistemasdeTransporteEstructuradoEstaciones_21 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SistemasdeTransporteEstructuradoEstaciones_21.addFeatures(features_SistemasdeTransporteEstructuradoEstaciones_21);var lyr_SistemasdeTransporteEstructuradoEstaciones_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SistemasdeTransporteEstructuradoEstaciones_21, 
                style: style_SistemasdeTransporteEstructuradoEstaciones_21,
    title: 'Sistemas de Transporte Estructurado (Estaciones)<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_21_0.png" /> Ferrocarril Suburbano<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_21_1.png" /> Tren Ligero<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_21_2.png" /> Cablebús Línea 1<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_21_3.png" /> Cablebús Lí­nea 2<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_21_4.png" /> Metro Línea 1<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_21_5.png" /> Metro Línea 2<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_21_6.png" /> Metro Línea 3<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_21_7.png" /> Metro Línea 4<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_21_8.png" /> Metro Línea 5<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_21_9.png" /> Metro Lí­nea 6<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_21_10.png" /> Metro Lí­nea 7<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_21_11.png" /> Metro Lí­nea 8<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_21_12.png" /> Metro Lí­nea 9<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_21_13.png" /> Metro Lí­nea 12<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_21_14.png" /> Metro Lí­nea A<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_21_15.png" /> Metro Lí­nea B<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_21_16.png" /> Metrobús Lí­nea 1<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_21_17.png" /> Metrobús Línea 2<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_21_18.png" /> Metrobús Lí­nea 3<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_21_19.png" /> Metrobús Línea 4<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_21_20.png" /> Metrobús Línea 5<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_21_21.png" /> Metrobús Línea 6<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_21_22.png" /> Metrobús Lí­nea 7<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_21_23.png" /> Trolebús Lí­nea 1<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_21_24.png" /> Trolebús Lí­nea 2<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_21_25.png" /> Trolebús Lí­nea 3<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_21_26.png" /> Trolebús Línea 4<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_21_27.png" /> Trolebús Línea 5<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_21_28.png" /> Trolebús Línea 6<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_21_29.png" /> Trolebús Línea 7<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_21_30.png" /> Trolebús Línea 8<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_21_31.png" /> Trolebús Lí­nea 9<br />'
        });var format_SistemasdeTransporteEstructuradoLineas_22 = new ol.format.GeoJSON();
var features_SistemasdeTransporteEstructuradoLineas_22 = format_SistemasdeTransporteEstructuradoLineas_22.readFeatures(json_SistemasdeTransporteEstructuradoLineas_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SistemasdeTransporteEstructuradoLineas_22 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SistemasdeTransporteEstructuradoLineas_22.addFeatures(features_SistemasdeTransporteEstructuradoLineas_22);var lyr_SistemasdeTransporteEstructuradoLineas_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SistemasdeTransporteEstructuradoLineas_22, 
                style: style_SistemasdeTransporteEstructuradoLineas_22,
    title: 'Sistemas de Transporte Estructurado (Lineas)<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_22_0.png" /> Ferrocarril Suburbano<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_22_1.png" /> Tren Ligero<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_22_2.png" /> Cablebús Línea 1<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_22_3.png" /> Cablebús Línea 2<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_22_4.png" /> Metro Línea 1<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_22_5.png" /> Metro Lí­nea 2<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_22_6.png" /> Metro Línea 3<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_22_7.png" /> Metro Línea 4<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_22_8.png" /> Metro Línea 5<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_22_9.png" /> Metro Línea 6<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_22_10.png" /> Metro Lí­nea 7<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_22_11.png" /> Metro Línea 8<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_22_12.png" /> Metro Línea 9<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_22_13.png" /> Metro Línea 12<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_22_14.png" /> Metro Línea A<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_22_15.png" /> Metro Línea B<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_22_16.png" /> Metrobús Línea 1<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_22_17.png" /> Metrobús Línea 2<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_22_18.png" /> Metrobús Lí­nea 3<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_22_19.png" /> Metrobús Línea 4<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_22_20.png" /> Metrobús Línea 5<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_22_21.png" /> Metrobús Línea 6<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_22_22.png" /> Metrobús Línea 7<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_22_23.png" /> Trolebús Línea 1 "Corredor Cero Emisiones Eje Central"<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_22_24.png" /> Trolebús Línea 2 "Corredor Cero Emisiones Eje 2 - 2A Sur"<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_22_25.png" /> Trolebús Lí­nea 3 "Corredor Cero Emisiones Eje 7 - 7A Sur"<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_22_26.png" /> Trolebús Línea 4 "Metro Blv. Puerto Aéreo - Metro El Rosario"<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_22_27.png" /> Trolebús Lí­nea 5 "San Felipe de Jesús - Metro Hidalgo"<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_22_28.png" /> Trolebús Lí­nea 6 "Metro El Rosario - Metro Chapultepec"<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_22_29.png" /> Trolebús Línea 7 "Lomas Estrella - Ciudad Universitaria"<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_22_30.png" /> Trolebús Línea 8 "Circuito Politécnico"<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_22_31.png" /> Trolebús Línea 9 "Iztacalco - Villa de Cortés"<br />'
        });var format_PolgonosECOPARQ_23 = new ol.format.GeoJSON();
var features_PolgonosECOPARQ_23 = format_PolgonosECOPARQ_23.readFeatures(json_PolgonosECOPARQ_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PolgonosECOPARQ_23 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PolgonosECOPARQ_23.addFeatures(features_PolgonosECOPARQ_23);var lyr_PolgonosECOPARQ_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PolgonosECOPARQ_23, 
                style: style_PolgonosECOPARQ_23,
                title: '<img src="styles/legend/PolgonosECOPARQ_23.png" /> Polígonos ECOPARQ'
            });var format_Infraestructuraciclista_24 = new ol.format.GeoJSON();
var features_Infraestructuraciclista_24 = format_Infraestructuraciclista_24.readFeatures(json_Infraestructuraciclista_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Infraestructuraciclista_24 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Infraestructuraciclista_24.addFeatures(features_Infraestructuraciclista_24);var lyr_Infraestructuraciclista_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Infraestructuraciclista_24, 
                style: style_Infraestructuraciclista_24,
                title: '<img src="styles/legend/Infraestructuraciclista_24.png" /> Infraestructura ciclista'
            });var format_Equipamiento_25 = new ol.format.GeoJSON();
var features_Equipamiento_25 = format_Equipamiento_25.readFeatures(json_Equipamiento_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Equipamiento_25 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Equipamiento_25.addFeatures(features_Equipamiento_25);var lyr_Equipamiento_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Equipamiento_25, 
                style: style_Equipamiento_25,
                title: '<img src="styles/legend/Equipamiento_25.png" /> Equipamiento'
            });var format_NormadeBiciestacionamiento_26 = new ol.format.GeoJSON();
var features_NormadeBiciestacionamiento_26 = format_NormadeBiciestacionamiento_26.readFeatures(json_NormadeBiciestacionamiento_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NormadeBiciestacionamiento_26 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_NormadeBiciestacionamiento_26.addFeatures(features_NormadeBiciestacionamiento_26);var lyr_NormadeBiciestacionamiento_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NormadeBiciestacionamiento_26, 
                style: style_NormadeBiciestacionamiento_26,
    title: 'Norma de Bici-estacionamiento<br />\
    <img src="styles/legend/NormadeBiciestacionamiento_26_0.png" /> A<br />\
    <img src="styles/legend/NormadeBiciestacionamiento_26_1.png" /> B<br />'
        });var format_NormadeEstacionamiento_27 = new ol.format.GeoJSON();
var features_NormadeEstacionamiento_27 = format_NormadeEstacionamiento_27.readFeatures(json_NormadeEstacionamiento_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NormadeEstacionamiento_27 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_NormadeEstacionamiento_27.addFeatures(features_NormadeEstacionamiento_27);var lyr_NormadeEstacionamiento_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NormadeEstacionamiento_27, 
                style: style_NormadeEstacionamiento_27,
    title: 'Norma de Estacionamiento<br />\
    <img src="styles/legend/NormadeEstacionamiento_27_0.png" /> ZONA 1<br />\
    <img src="styles/legend/NormadeEstacionamiento_27_1.png" /> ZONA 2<br />'
        });var format_NormadeVivienda_28 = new ol.format.GeoJSON();
var features_NormadeVivienda_28 = format_NormadeVivienda_28.readFeatures(json_NormadeVivienda_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NormadeVivienda_28 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_NormadeVivienda_28.addFeatures(features_NormadeVivienda_28);var lyr_NormadeVivienda_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NormadeVivienda_28, 
                style: style_NormadeVivienda_28,
    title: 'Norma de Vivienda<br />\
    <img src="styles/legend/NormadeVivienda_28_0.png" /> Corredores<br />\
    <img src="styles/legend/NormadeVivienda_28_1.png" /> Zonas<br />'
        });var format_ProgramasParcialesdeDesarrolloUrbano_29 = new ol.format.GeoJSON();
var features_ProgramasParcialesdeDesarrolloUrbano_29 = format_ProgramasParcialesdeDesarrolloUrbano_29.readFeatures(json_ProgramasParcialesdeDesarrolloUrbano_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProgramasParcialesdeDesarrolloUrbano_29 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ProgramasParcialesdeDesarrolloUrbano_29.addFeatures(features_ProgramasParcialesdeDesarrolloUrbano_29);var lyr_ProgramasParcialesdeDesarrolloUrbano_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProgramasParcialesdeDesarrolloUrbano_29, 
                style: style_ProgramasParcialesdeDesarrolloUrbano_29,
                title: '<img src="styles/legend/ProgramasParcialesdeDesarrolloUrbano_29.png" /> Programas Parciales de Desarrollo Urbano'
            });var format_readeConservacinPatrimonial_30 = new ol.format.GeoJSON();
var features_readeConservacinPatrimonial_30 = format_readeConservacinPatrimonial_30.readFeatures(json_readeConservacinPatrimonial_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_readeConservacinPatrimonial_30 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_readeConservacinPatrimonial_30.addFeatures(features_readeConservacinPatrimonial_30);var lyr_readeConservacinPatrimonial_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_readeConservacinPatrimonial_30, 
                style: style_readeConservacinPatrimonial_30,
                title: '<img src="styles/legend/readeConservacinPatrimonial_30.png" /> Área de Conservación Patrimonial'
            });var format_AutoridaddelaZonaPatrimonio_31 = new ol.format.GeoJSON();
var features_AutoridaddelaZonaPatrimonio_31 = format_AutoridaddelaZonaPatrimonio_31.readFeatures(json_AutoridaddelaZonaPatrimonio_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AutoridaddelaZonaPatrimonio_31 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AutoridaddelaZonaPatrimonio_31.addFeatures(features_AutoridaddelaZonaPatrimonio_31);var lyr_AutoridaddelaZonaPatrimonio_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AutoridaddelaZonaPatrimonio_31, 
                style: style_AutoridaddelaZonaPatrimonio_31,
                title: '<img src="styles/legend/AutoridaddelaZonaPatrimonio_31.png" /> Autoridad de la Zona Patrimonio'
            });var format_readeValorAmbiental_32 = new ol.format.GeoJSON();
var features_readeValorAmbiental_32 = format_readeValorAmbiental_32.readFeatures(json_readeValorAmbiental_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_readeValorAmbiental_32 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_readeValorAmbiental_32.addFeatures(features_readeValorAmbiental_32);var lyr_readeValorAmbiental_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_readeValorAmbiental_32, 
                style: style_readeValorAmbiental_32,
                title: '<img src="styles/legend/readeValorAmbiental_32.png" /> Área de Valor Ambiental'
            });var format_reaNaturalProtegida_33 = new ol.format.GeoJSON();
var features_reaNaturalProtegida_33 = format_reaNaturalProtegida_33.readFeatures(json_reaNaturalProtegida_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaNaturalProtegida_33 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_reaNaturalProtegida_33.addFeatures(features_reaNaturalProtegida_33);var lyr_reaNaturalProtegida_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reaNaturalProtegida_33, 
                style: style_reaNaturalProtegida_33,
                title: '<img src="styles/legend/reaNaturalProtegida_33.png" /> Área Natural Protegida'
            });var format_SuelodeConservacin_34 = new ol.format.GeoJSON();
var features_SuelodeConservacin_34 = format_SuelodeConservacin_34.readFeatures(json_SuelodeConservacin_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SuelodeConservacin_34 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SuelodeConservacin_34.addFeatures(features_SuelodeConservacin_34);var lyr_SuelodeConservacin_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SuelodeConservacin_34, 
                style: style_SuelodeConservacin_34,
                title: '<img src="styles/legend/SuelodeConservacin_34.png" /> Suelo de Conservación'
            });var format_LneadeConservacinEcolgica_35 = new ol.format.GeoJSON();
var features_LneadeConservacinEcolgica_35 = format_LneadeConservacinEcolgica_35.readFeatures(json_LneadeConservacinEcolgica_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LneadeConservacinEcolgica_35 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LneadeConservacinEcolgica_35.addFeatures(features_LneadeConservacinEcolgica_35);var lyr_LneadeConservacinEcolgica_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LneadeConservacinEcolgica_35, 
                style: style_LneadeConservacinEcolgica_35,
                title: '<img src="styles/legend/LneadeConservacinEcolgica_35.png" /> Línea de Conservación Ecológica'
            });
var group_PatrimonioCulturalUrbano = new ol.layer.Group({
                                layers: [lyr_readeConservacinPatrimonial_30,],
                                title: "Patrimonio Cultural Urbano"});
var group_TipodeCarenciasdeInfraestructuraVialydeServicios = new ol.layer.Group({
                                layers: [lyr_Vialidadessinletreroconnombredelacalle_10,lyr_Vialidadessinrampaparasilladeruedas_11,lyr_Vialidadessinplantasdeornato_12,lyr_Vialidadessinguarnicin_13,lyr_Vialidadessinalumbradopblico_14,lyr_Vialidadessindrenajepluvial_15,lyr_Vialidadessinpavimento_16,lyr_Vialidadessinbanqueta_17,],
                                title: "Tipo de Carencias de Infraestructura Vial y de Servicios"});
var group_Movilidad = new ol.layer.Group({
                                layers: [lyr_CentrodeTransferenciaModalCETRAM_20,lyr_SistemasdeTransporteEstructuradoEstaciones_21,lyr_SistemasdeTransporteEstructuradoLineas_22,lyr_PolgonosECOPARQ_23,lyr_Infraestructuraciclista_24,],
                                title: "Movilidad"});
var group_CompetitividadUrbana = new ol.layer.Group({
                                layers: [lyr_Equipamiento_25,],
                                title: "Competitividad Urbana"});
var group_Normatividad = new ol.layer.Group({
                                layers: [lyr_NormadeBiciestacionamiento_26,lyr_NormadeEstacionamiento_27,lyr_NormadeVivienda_28,lyr_ProgramasParcialesdeDesarrolloUrbano_29,],
                                title: "Normatividad"});
var group_Indicador = new ol.layer.Group({
                                layers: [lyr_Coberturadeinfraestructuraymobiliariourbano_18,lyr_Movilidaddepersonascondiscapacidad_19,],
                                title: "Indicador"});
var group_INDICADORESPORAGEB = new ol.layer.Group({
                                layers: [lyr_ViviendasconPisodeTierra2010_3,lyr_UnidadesEconmicasNetas2014_4,lyr_OcupantesporVivienda2010_5,lyr_EmpleadosNetos2014_6,lyr_DensidaddeUnidadesEconmicas2014_7,lyr_DensidaddeVivienda2010_8,lyr_DensidaddePoblacin2010_9,],
                                title: "INDICADORES POR AGEB"});
var group_SustentabilidadUrbanoAmbiental = new ol.layer.Group({
                                layers: [lyr_AutoridaddelaZonaPatrimonio_31,lyr_readeValorAmbiental_32,lyr_reaNaturalProtegida_33,lyr_SuelodeConservacin_34,lyr_LneadeConservacinEcolgica_35,],
                                title: "Sustentabilidad Urbano Ambiental"});
var group_MAPABASE = new ol.layer.Group({
                                layers: [lyr_Base_0,lyr_PuertasMetropolitanas_1,lyr_LmitedeAlcalda_2,],
                                title: "MAPA BASE"});

lyr_Base_0.setVisible(true);lyr_PuertasMetropolitanas_1.setVisible(true);lyr_LmitedeAlcalda_2.setVisible(true);lyr_ViviendasconPisodeTierra2010_3.setVisible(false);lyr_UnidadesEconmicasNetas2014_4.setVisible(false);lyr_OcupantesporVivienda2010_5.setVisible(false);lyr_EmpleadosNetos2014_6.setVisible(false);lyr_DensidaddeUnidadesEconmicas2014_7.setVisible(false);lyr_DensidaddeVivienda2010_8.setVisible(false);lyr_DensidaddePoblacin2010_9.setVisible(false);lyr_Vialidadessinletreroconnombredelacalle_10.setVisible(false);lyr_Vialidadessinrampaparasilladeruedas_11.setVisible(false);lyr_Vialidadessinplantasdeornato_12.setVisible(false);lyr_Vialidadessinguarnicin_13.setVisible(false);lyr_Vialidadessinalumbradopblico_14.setVisible(false);lyr_Vialidadessindrenajepluvial_15.setVisible(false);lyr_Vialidadessinpavimento_16.setVisible(false);lyr_Vialidadessinbanqueta_17.setVisible(false);lyr_Coberturadeinfraestructuraymobiliariourbano_18.setVisible(false);lyr_Movilidaddepersonascondiscapacidad_19.setVisible(false);lyr_CentrodeTransferenciaModalCETRAM_20.setVisible(false);lyr_SistemasdeTransporteEstructuradoEstaciones_21.setVisible(false);lyr_SistemasdeTransporteEstructuradoLineas_22.setVisible(false);lyr_PolgonosECOPARQ_23.setVisible(false);lyr_Infraestructuraciclista_24.setVisible(false);lyr_Equipamiento_25.setVisible(false);lyr_NormadeBiciestacionamiento_26.setVisible(false);lyr_NormadeEstacionamiento_27.setVisible(false);lyr_NormadeVivienda_28.setVisible(false);lyr_ProgramasParcialesdeDesarrolloUrbano_29.setVisible(false);lyr_readeConservacinPatrimonial_30.setVisible(false);lyr_AutoridaddelaZonaPatrimonio_31.setVisible(false);lyr_readeValorAmbiental_32.setVisible(false);lyr_reaNaturalProtegida_33.setVisible(false);lyr_SuelodeConservacin_34.setVisible(false);lyr_LneadeConservacinEcolgica_35.setVisible(false);
var layersList = [baseLayer,group_MAPABASE,group_INDICADORESPORAGEB,group_TipodeCarenciasdeInfraestructuraVialydeServicios,group_Indicador,group_Movilidad,group_CompetitividadUrbana,group_Normatividad,group_PatrimonioCulturalUrbano,group_SustentabilidadUrbanoAmbiental];
lyr_PuertasMetropolitanas_1.set('fieldAliases', {'cartodb_id': 'cartodb_id', 'nombre': 'nombre', });
lyr_LmitedeAlcalda_2.set('fieldAliases', {'_id': '_id', 'id': 'id', 'nomgeo': 'nomgeo', 'cve_mun': 'cve_mun', 'cve_ent': 'cve_ent', 'cvegeo': 'cvegeo', 'gid': 'gid', 'g_pnt_2': 'g_pnt_2', 'geo_shp': 'geo_shp', });
lyr_ViviendasconPisodeTierra2010_3.set('fieldAliases', {'cartodb_id': 'cartodb_id', 'indicador': 'indicador', 'nombre': 'nombre', 'fuente': 'fuente', });
lyr_UnidadesEconmicasNetas2014_4.set('fieldAliases', {'cartodb_id': 'cartodb_id', 'indicador': 'indicador', 'nombre': 'nombre', 'fuente': 'fuente', });
lyr_OcupantesporVivienda2010_5.set('fieldAliases', {'cartodb_id': 'cartodb_id', 'indicador': 'indicador', 'nombre': 'nombre', 'fuente': 'fuente', });
lyr_EmpleadosNetos2014_6.set('fieldAliases', {'cartodb_id': 'cartodb_id', 'indicador': 'indicador', 'nombre': 'nombre', 'fuente': 'fuente', });
lyr_DensidaddeUnidadesEconmicas2014_7.set('fieldAliases', {'cartodb_id': 'cartodb_id', 'indicador': 'indicador', 'nombre': 'nombre', 'fuente': 'fuente', });
lyr_DensidaddeVivienda2010_8.set('fieldAliases', {'cartodb_id': 'cartodb_id', 'nombre': 'nombre', 'fuente': 'fuente', 'indicador': 'indicador', });
lyr_DensidaddePoblacin2010_9.set('fieldAliases', {'cartodb_id': 'cartodb_id', 'indicador': 'indicador', 'nombre': 'nombre', 'fuente': 'fuente', });
lyr_Vialidadessinletreroconnombredelacalle_10.set('fieldAliases', {'sin_letcal': 'sin_letcal', 'ent_fed': 'ent_fed', 'municipio': 'municipio', 'localidad': 'localidad', 'total_vial': 'total_vial', 'cartodb_id': 'cartodb_id', 'p_sinltcal': 'p_sinltcal', 'p_acumulad': 'p_acumulad', 'p_nivel': 'p_nivel', 'clave_mu_1': 'clave_mu_1', 'clave_muni': 'clave_muni', 'layer': 'layer', 'nivel': 'nivel', });
lyr_Vialidadessinrampaparasilladeruedas_11.set('fieldAliases', {'p_nivel': 'p_nivel', 'total_vial': 'total_vial', 'sin_rampa_': 'sin_rampa_', 'p_sin_ramp': 'p_sin_ramp', 'p_acumulad': 'p_acumulad', 'cartodb_id': 'cartodb_id', 'clave_mu_1': 'clave_mu_1', 'clave_muni': 'clave_muni', 'ent_fed': 'ent_fed', 'layer': 'layer', 'localidad': 'localidad', 'municipio': 'municipio', 'nivel': 'nivel', });
lyr_Vialidadessinplantasdeornato_12.set('fieldAliases', {'municipio': 'municipio', 'layer': 'layer', 'clave_muni': 'clave_muni', 'ent_fed': 'ent_fed', 'clave_mu_1': 'clave_mu_1', 'cartodb_id': 'cartodb_id', 'localidad': 'localidad', 'total_vial': 'total_vial', 'sin_pla_or': 'sin_pla_or', 'p_sin_plo': 'p_sin_plo', 'p_acumulad': 'p_acumulad', 'p_nivel': 'p_nivel', 'nivel': 'nivel', });
lyr_Vialidadessinguarnicin_13.set('fieldAliases', {'clave_mu_1': 'clave_mu_1', 'nivel': 'nivel', 'layer': 'layer', 'clave_muni': 'clave_muni', 'ent_fed': 'ent_fed', 'cartodb_id': 'cartodb_id', 'municipio': 'municipio', 'localidad': 'localidad', 'total_vial': 'total_vial', 'sin_guarn': 'sin_guarn', 'p_sin_gua': 'p_sin_gua', 'p_acumulad': 'p_acumulad', 'p_nivel': 'p_nivel', });
lyr_Vialidadessinalumbradopblico_14.set('fieldAliases', {'localidad': 'localidad', 'clave_muni': 'clave_muni', 'ent_fed': 'ent_fed', 'municipio': 'municipio', 'cartodb_id': 'cartodb_id', 'total_vial': 'total_vial', 'sin_alu_pu': 'sin_alu_pu', 'p_sin_al_p': 'p_sin_al_p', 'p_acumulad': 'p_acumulad', 'p_nivel': 'p_nivel', 'nivel': 'nivel', });
lyr_Vialidadessindrenajepluvial_15.set('fieldAliases', {'localidad': 'localidad', 'clave_muni': 'clave_muni', 'ent_fed': 'ent_fed', 'municipio': 'municipio', 'cartodb_id': 'cartodb_id', 'total_vial': 'total_vial', 'sin_dre_pl': 'sin_dre_pl', 'p_sin_dr_p': 'p_sin_dr_p', 'p_acumulad': 'p_acumulad', 'p_nivel': 'p_nivel', 'nivel': 'nivel', });
lyr_Vialidadessinpavimento_16.set('fieldAliases', {'localidad': 'localidad', 'clave_muni': 'clave_muni', 'ent_fed': 'ent_fed', 'municipio': 'municipio', 'cartodb_id': 'cartodb_id', 'total_vial': 'total_vial', 'sin_pavime': 'sin_pavime', 'p_sin_pav': 'p_sin_pav', 'p_acumulad': 'p_acumulad', 'p_nivel': 'p_nivel', 'nivel': 'nivel', });
lyr_Vialidadessinbanqueta_17.set('fieldAliases', {'localidad': 'localidad', 'clave_muni': 'clave_muni', 'ent_fed': 'ent_fed', 'municipio': 'municipio', 'cartodb_id': 'cartodb_id', 'total_vial': 'total_vial', 'sin_banque': 'sin_banque', 'p_sin_banq': 'p_sin_banq', 'p_acumulad': 'p_acumulad', 'p_nivel': 'p_nivel', 'nivel': 'nivel', });
lyr_Coberturadeinfraestructuraymobiliariourbano_18.set('fieldAliases', {'cartodb_id': 'cartodb_id', 'delegacion': 'delegacion', 'mzn_cobert': 'mzn_cobert', 'cob_infmov': 'cob_infmov', 'rango': 'rango', 'fuente': 'fuente', });
lyr_Movilidaddepersonascondiscapacidad_19.set('fieldAliases', {'cartodb_id': 'cartodb_id', 'layer': 'layer', 'mzn_rampa': 'mzn_rampa', 'porc_rampa': 'porc_rampa', 'rango_': 'rango_', 'fuente': 'fuente', });
lyr_CentrodeTransferenciaModalCETRAM_20.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TRANFER': 'TRANFER', 'HORARIO': 'HORARIO', 'ALCALDIA': 'ALCALDIA', 'UBICACION': 'UBICACION', });
lyr_SistemasdeTransporteEstructuradoEstaciones_21.set('fieldAliases', {'corrslinea': 'corrslinea', 'ruta': 'ruta', 'agencia': 'agencia', 'linea': 'linea', 'estacion': 'estacion', 'tipostcion': 'tipostcion', 'caract': 'caract', 'pertenecie': 'pertenecie', 'intrmodal': 'intrmodal', 'fuente': 'fuente', });
lyr_SistemasdeTransporteEstructuradoLineas_22.set('fieldAliases', {'termial': 'termial', 'ruta': 'ruta', 'agencia': 'agencia', 'linea': 'linea', 'estaciones': 'estaciones', 'longitud': 'longitud', 'correspond': 'correspond', 'estdepaso': 'estdepaso', 'estsubte': 'estsubte', 'estsuper': 'estsuper', 'etselevads': 'etselevads', 'lineascorr': 'lineascorr', 'cobertura': 'cobertura', 'fuente': 'fuente', });
lyr_PolgonosECOPARQ_23.set('fieldAliases', {'cajonsvehi': 'cajonsvehi', 'nombre': 'nombre', 'numparq': 'numparq', 'cajonsmoto': 'cajonsmoto', 'cajonsdisc': 'cajonsdisc', 'staecobici': 'staecobici', 'fuente': 'fuente', });
lyr_Infraestructuraciclista_24.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO_IC': 'TIPO_IC', 'VIALIDAD': 'VIALIDAD', 'TIPO_VIA': 'TIPO_VIA', 'ESTADO': 'ESTADO', 'SENTIDO': 'SENTIDO', 'INSTANCIA': 'INSTANCIA', 'AÑO': 'AÑO', 'LONG_KM': 'LONG_KM', });
lyr_Equipamiento_25.set('fieldAliases', {'nombre': 'nombre', 'categoria': 'categoria', 'alcaldia': 'alcaldia', });
lyr_NormadeBiciestacionamiento_26.set('fieldAliases', {'area': 'area', 'zonas': 'zonas', });
lyr_NormadeEstacionamiento_27.set('fieldAliases', {'z_vial_col': 'z_vial_col', 'shape_area': 'shape_area', });
lyr_NormadeVivienda_28.set('fieldAliases', {'tipo': 'tipo', });
lyr_ProgramasParcialesdeDesarrolloUrbano_29.set('fieldAliases', {'ppdu': 'ppdu', 'decreto': 'decreto', 'delegacia_': 'delegacia_', 'link_seduv': 'link_seduv', });
lyr_readeConservacinPatrimonial_30.set('fieldAliases', {'acp': 'acp', 'delgacia_n': 'delgacia_n', 'area': 'area', 'fuente': 'fuente', });
lyr_AutoridaddelaZonaPatrimonio_31.set('fieldAliases', {'nombre': 'nombre', 'decretro': 'decretro', });
lyr_readeValorAmbiental_32.set('fieldAliases', {'nombre': 'nombre', 'alcaldia': 'alcaldia', 'categoria': 'categoria', 'fecha_decr': 'fecha_decr', 'fecha_modi': 'fecha_modi', 'progmanejo': 'progmanejo', 'fuente': 'fuente', 'sitio_web': 'sitio_web', });
lyr_reaNaturalProtegida_33.set('fieldAliases', {'categor': 'categor', 'suelo': 'suelo', 'nombre': 'nombre', 'fuente': 'fuente', 'fecha_dc': 'fecha_dc', 'superficie': 'superficie', 'datos_cdmx': 'datos_cdmx', });
lyr_SuelodeConservacin_34.set('fieldAliases', {'fuente': 'fuente', 'superficie': 'superficie', 'datos_cdmx': 'datos_cdmx', });
lyr_LneadeConservacinEcolgica_35.set('fieldAliases', {'lce': 'lce', 'fuente': 'fuente', });
lyr_PuertasMetropolitanas_1.set('fieldImages', {'cartodb_id': 'TextEdit', 'nombre': 'TextEdit', });
lyr_LmitedeAlcalda_2.set('fieldImages', {'_id': 'TextEdit', 'id': 'TextEdit', 'nomgeo': 'TextEdit', 'cve_mun': 'TextEdit', 'cve_ent': 'TextEdit', 'cvegeo': 'TextEdit', 'gid': 'TextEdit', 'g_pnt_2': 'TextEdit', 'geo_shp': 'TextEdit', });
lyr_ViviendasconPisodeTierra2010_3.set('fieldImages', {'cartodb_id': 'TextEdit', 'indicador': 'TextEdit', 'nombre': 'TextEdit', 'fuente': 'TextEdit', });
lyr_UnidadesEconmicasNetas2014_4.set('fieldImages', {'cartodb_id': 'TextEdit', 'indicador': 'TextEdit', 'nombre': 'TextEdit', 'fuente': 'TextEdit', });
lyr_OcupantesporVivienda2010_5.set('fieldImages', {'cartodb_id': 'TextEdit', 'indicador': 'TextEdit', 'nombre': 'TextEdit', 'fuente': 'TextEdit', });
lyr_EmpleadosNetos2014_6.set('fieldImages', {'cartodb_id': 'TextEdit', 'indicador': 'TextEdit', 'nombre': 'TextEdit', 'fuente': 'TextEdit', });
lyr_DensidaddeUnidadesEconmicas2014_7.set('fieldImages', {'cartodb_id': 'TextEdit', 'indicador': 'TextEdit', 'nombre': 'TextEdit', 'fuente': 'TextEdit', });
lyr_DensidaddeVivienda2010_8.set('fieldImages', {'cartodb_id': 'TextEdit', 'nombre': 'TextEdit', 'fuente': 'TextEdit', 'indicador': 'TextEdit', });
lyr_DensidaddePoblacin2010_9.set('fieldImages', {'cartodb_id': 'TextEdit', 'indicador': 'TextEdit', 'nombre': 'TextEdit', 'fuente': 'TextEdit', });
lyr_Vialidadessinletreroconnombredelacalle_10.set('fieldImages', {'sin_letcal': 'TextEdit', 'ent_fed': 'TextEdit', 'municipio': 'TextEdit', 'localidad': 'TextEdit', 'total_vial': 'TextEdit', 'cartodb_id': 'TextEdit', 'p_sinltcal': 'TextEdit', 'p_acumulad': 'TextEdit', 'p_nivel': 'TextEdit', 'clave_mu_1': 'TextEdit', 'clave_muni': 'TextEdit', 'layer': 'TextEdit', 'nivel': 'TextEdit', });
lyr_Vialidadessinrampaparasilladeruedas_11.set('fieldImages', {'p_nivel': 'TextEdit', 'total_vial': 'TextEdit', 'sin_rampa_': 'TextEdit', 'p_sin_ramp': 'TextEdit', 'p_acumulad': 'TextEdit', 'cartodb_id': 'TextEdit', 'clave_mu_1': 'TextEdit', 'clave_muni': 'TextEdit', 'ent_fed': 'TextEdit', 'layer': 'TextEdit', 'localidad': 'TextEdit', 'municipio': 'TextEdit', 'nivel': 'TextEdit', });
lyr_Vialidadessinplantasdeornato_12.set('fieldImages', {'municipio': 'TextEdit', 'layer': 'TextEdit', 'clave_muni': 'TextEdit', 'ent_fed': 'TextEdit', 'clave_mu_1': 'TextEdit', 'cartodb_id': 'TextEdit', 'localidad': 'TextEdit', 'total_vial': 'TextEdit', 'sin_pla_or': 'TextEdit', 'p_sin_plo': 'TextEdit', 'p_acumulad': 'TextEdit', 'p_nivel': 'TextEdit', 'nivel': 'TextEdit', });
lyr_Vialidadessinguarnicin_13.set('fieldImages', {'clave_mu_1': 'TextEdit', 'nivel': 'TextEdit', 'layer': 'TextEdit', 'clave_muni': 'TextEdit', 'ent_fed': 'TextEdit', 'cartodb_id': 'TextEdit', 'municipio': 'TextEdit', 'localidad': 'TextEdit', 'total_vial': 'TextEdit', 'sin_guarn': 'TextEdit', 'p_sin_gua': 'TextEdit', 'p_acumulad': 'TextEdit', 'p_nivel': 'TextEdit', });
lyr_Vialidadessinalumbradopblico_14.set('fieldImages', {'localidad': 'TextEdit', 'clave_muni': 'TextEdit', 'ent_fed': 'TextEdit', 'municipio': 'TextEdit', 'cartodb_id': 'TextEdit', 'total_vial': 'TextEdit', 'sin_alu_pu': 'TextEdit', 'p_sin_al_p': 'TextEdit', 'p_acumulad': 'TextEdit', 'p_nivel': 'TextEdit', 'nivel': 'TextEdit', });
lyr_Vialidadessindrenajepluvial_15.set('fieldImages', {'localidad': 'TextEdit', 'clave_muni': 'TextEdit', 'ent_fed': 'TextEdit', 'municipio': 'TextEdit', 'cartodb_id': 'TextEdit', 'total_vial': 'TextEdit', 'sin_dre_pl': 'TextEdit', 'p_sin_dr_p': 'TextEdit', 'p_acumulad': 'TextEdit', 'p_nivel': 'TextEdit', 'nivel': 'TextEdit', });
lyr_Vialidadessinpavimento_16.set('fieldImages', {'localidad': 'TextEdit', 'clave_muni': 'TextEdit', 'ent_fed': 'TextEdit', 'municipio': 'TextEdit', 'cartodb_id': 'TextEdit', 'total_vial': 'TextEdit', 'sin_pavime': 'TextEdit', 'p_sin_pav': 'TextEdit', 'p_acumulad': 'TextEdit', 'p_nivel': 'TextEdit', 'nivel': 'TextEdit', });
lyr_Vialidadessinbanqueta_17.set('fieldImages', {'localidad': 'TextEdit', 'clave_muni': 'TextEdit', 'ent_fed': 'TextEdit', 'municipio': 'TextEdit', 'cartodb_id': 'TextEdit', 'total_vial': 'TextEdit', 'sin_banque': 'TextEdit', 'p_sin_banq': 'TextEdit', 'p_acumulad': 'TextEdit', 'p_nivel': 'TextEdit', 'nivel': 'TextEdit', });
lyr_Coberturadeinfraestructuraymobiliariourbano_18.set('fieldImages', {'cartodb_id': 'TextEdit', 'delegacion': 'TextEdit', 'mzn_cobert': 'TextEdit', 'cob_infmov': 'TextEdit', 'rango': 'TextEdit', 'fuente': 'TextEdit', });
lyr_Movilidaddepersonascondiscapacidad_19.set('fieldImages', {'cartodb_id': 'TextEdit', 'layer': 'TextEdit', 'mzn_rampa': 'TextEdit', 'porc_rampa': 'TextEdit', 'rango_': 'TextEdit', 'fuente': 'TextEdit', });
lyr_CentrodeTransferenciaModalCETRAM_20.set('fieldImages', {'NOMBRE': 'TextEdit', 'TRANFER': 'TextEdit', 'HORARIO': 'TextEdit', 'ALCALDIA': 'TextEdit', 'UBICACION': 'TextEdit', });
lyr_SistemasdeTransporteEstructuradoEstaciones_21.set('fieldImages', {'corrslinea': 'TextEdit', 'ruta': 'TextEdit', 'agencia': 'TextEdit', 'linea': 'TextEdit', 'estacion': 'TextEdit', 'tipostcion': 'TextEdit', 'caract': 'TextEdit', 'pertenecie': 'TextEdit', 'intrmodal': 'TextEdit', 'fuente': 'TextEdit', });
lyr_SistemasdeTransporteEstructuradoLineas_22.set('fieldImages', {'termial': 'TextEdit', 'ruta': 'TextEdit', 'agencia': 'TextEdit', 'linea': 'TextEdit', 'estaciones': 'TextEdit', 'longitud': 'TextEdit', 'correspond': 'TextEdit', 'estdepaso': 'TextEdit', 'estsubte': 'TextEdit', 'estsuper': 'TextEdit', 'etselevads': 'TextEdit', 'lineascorr': 'TextEdit', 'cobertura': 'TextEdit', 'fuente': 'TextEdit', });
lyr_PolgonosECOPARQ_23.set('fieldImages', {'cajonsvehi': 'TextEdit', 'nombre': 'TextEdit', 'numparq': 'TextEdit', 'cajonsmoto': 'TextEdit', 'cajonsdisc': 'TextEdit', 'staecobici': 'TextEdit', 'fuente': 'TextEdit', });
lyr_Infraestructuraciclista_24.set('fieldImages', {'NOMBRE': 'TextEdit', 'TIPO_IC': 'TextEdit', 'VIALIDAD': 'TextEdit', 'TIPO_VIA': 'TextEdit', 'ESTADO': 'TextEdit', 'SENTIDO': 'TextEdit', 'INSTANCIA': 'TextEdit', 'AÑO': 'TextEdit', 'LONG_KM': 'TextEdit', });
lyr_Equipamiento_25.set('fieldImages', {'nombre': 'TextEdit', 'categoria': 'TextEdit', 'alcaldia': 'TextEdit', });
lyr_NormadeBiciestacionamiento_26.set('fieldImages', {'area': 'TextEdit', 'zonas': 'TextEdit', });
lyr_NormadeEstacionamiento_27.set('fieldImages', {'z_vial_col': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_NormadeVivienda_28.set('fieldImages', {'tipo': 'TextEdit', });
lyr_ProgramasParcialesdeDesarrolloUrbano_29.set('fieldImages', {'ppdu': 'TextEdit', 'decreto': 'TextEdit', 'delegacia_': 'TextEdit', 'link_seduv': 'TextEdit', });
lyr_readeConservacinPatrimonial_30.set('fieldImages', {'acp': 'TextEdit', 'delgacia_n': 'TextEdit', 'area': 'TextEdit', 'fuente': 'TextEdit', });
lyr_AutoridaddelaZonaPatrimonio_31.set('fieldImages', {'nombre': 'TextEdit', 'decretro': 'TextEdit', });
lyr_readeValorAmbiental_32.set('fieldImages', {'nombre': 'TextEdit', 'alcaldia': 'TextEdit', 'categoria': 'TextEdit', 'fecha_decr': 'TextEdit', 'fecha_modi': 'TextEdit', 'progmanejo': 'TextEdit', 'fuente': 'TextEdit', 'sitio_web': 'TextEdit', });
lyr_reaNaturalProtegida_33.set('fieldImages', {'categor': 'TextEdit', 'suelo': 'TextEdit', 'nombre': 'TextEdit', 'fuente': 'TextEdit', 'fecha_dc': 'TextEdit', 'superficie': 'TextEdit', 'datos_cdmx': 'TextEdit', });
lyr_SuelodeConservacin_34.set('fieldImages', {'fuente': 'TextEdit', 'superficie': 'TextEdit', 'datos_cdmx': 'TextEdit', });
lyr_LneadeConservacinEcolgica_35.set('fieldImages', {'lce': 'TextEdit', 'fuente': 'TextEdit', });
lyr_PuertasMetropolitanas_1.set('fieldLabels', {});
lyr_LmitedeAlcalda_2.set('fieldLabels', {});
lyr_ViviendasconPisodeTierra2010_3.set('fieldLabels', {});
lyr_UnidadesEconmicasNetas2014_4.set('fieldLabels', {});
lyr_OcupantesporVivienda2010_5.set('fieldLabels', {});
lyr_EmpleadosNetos2014_6.set('fieldLabels', {});
lyr_DensidaddeUnidadesEconmicas2014_7.set('fieldLabels', {});
lyr_DensidaddeVivienda2010_8.set('fieldLabels', {});
lyr_DensidaddePoblacin2010_9.set('fieldLabels', {});
lyr_Vialidadessinletreroconnombredelacalle_10.set('fieldLabels', {});
lyr_Vialidadessinrampaparasilladeruedas_11.set('fieldLabels', {});
lyr_Vialidadessinplantasdeornato_12.set('fieldLabels', {});
lyr_Vialidadessinguarnicin_13.set('fieldLabels', {});
lyr_Vialidadessinalumbradopblico_14.set('fieldLabels', {});
lyr_Vialidadessindrenajepluvial_15.set('fieldLabels', {});
lyr_Vialidadessinpavimento_16.set('fieldLabels', {});
lyr_Vialidadessinbanqueta_17.set('fieldLabels', {});
lyr_Coberturadeinfraestructuraymobiliariourbano_18.set('fieldLabels', {});
lyr_Movilidaddepersonascondiscapacidad_19.set('fieldLabels', {});
lyr_CentrodeTransferenciaModalCETRAM_20.set('fieldLabels', {});
lyr_SistemasdeTransporteEstructuradoEstaciones_21.set('fieldLabels', {});
lyr_SistemasdeTransporteEstructuradoLineas_22.set('fieldLabels', {});
lyr_PolgonosECOPARQ_23.set('fieldLabels', {});
lyr_Infraestructuraciclista_24.set('fieldLabels', {});
lyr_Equipamiento_25.set('fieldLabels', {});
lyr_NormadeBiciestacionamiento_26.set('fieldLabels', {});
lyr_NormadeEstacionamiento_27.set('fieldLabels', {});
lyr_NormadeVivienda_28.set('fieldLabels', {});
lyr_ProgramasParcialesdeDesarrolloUrbano_29.set('fieldLabels', {});
lyr_readeConservacinPatrimonial_30.set('fieldLabels', {});
lyr_AutoridaddelaZonaPatrimonio_31.set('fieldLabels', {});
lyr_readeValorAmbiental_32.set('fieldLabels', {});
lyr_reaNaturalProtegida_33.set('fieldLabels', {});
lyr_SuelodeConservacin_34.set('fieldLabels', {});
lyr_LneadeConservacinEcolgica_35.set('fieldLabels', {});
lyr_LneadeConservacinEcolgica_35.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});