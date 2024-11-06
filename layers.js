var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_gadm41_IDNADM_ADM_4_1 = new ol.format.GeoJSON();
var features_gadm41_IDNADM_ADM_4_1 = format_gadm41_IDNADM_ADM_4_1.readFeatures(json_gadm41_IDNADM_ADM_4_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gadm41_IDNADM_ADM_4_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm41_IDNADM_ADM_4_1.addFeatures(features_gadm41_IDNADM_ADM_4_1);
var lyr_gadm41_IDNADM_ADM_4_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gadm41_IDNADM_ADM_4_1, 
                style: style_gadm41_IDNADM_ADM_4_1,
                popuplayertitle: "gadm41_IDN — ADM_ADM_4",
                interactive: true,
                title: '<img src="styles/legend/gadm41_IDNADM_ADM_4_1.png" /> gadm41_IDN — ADM_ADM_4'
            });
var format_RW_2 = new ol.format.GeoJSON();
var features_RW_2 = format_RW_2.readFeatures(json_RW_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RW_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RW_2.addFeatures(features_RW_2);
var lyr_RW_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RW_2, 
                style: style_RW_2,
                popuplayertitle: "RW",
                interactive: true,
    title: 'RW<br />\
    <img src="styles/legend/RW_2_0.png" /> 8<br />\
    <img src="styles/legend/RW_2_1.png" /> 9<br />\
    <img src="styles/legend/RW_2_2.png" /> 1<br />\
    <img src="styles/legend/RW_2_3.png" /> 11<br />\
    <img src="styles/legend/RW_2_4.png" /> 12<br />\
    <img src="styles/legend/RW_2_5.png" /> 13<br />\
    <img src="styles/legend/RW_2_6.png" /> 2<br />\
    <img src="styles/legend/RW_2_7.png" /> 3<br />\
    <img src="styles/legend/RW_2_8.png" /> 6<br />\
    <img src="styles/legend/RW_2_9.png" /> 7<br />\
    <img src="styles/legend/RW_2_10.png" /> <br />\
    <img src="styles/legend/RW_2_11.png" /> <br />\
    <img src="styles/legend/RW_2_12.png" /> 10<br />\
    <img src="styles/legend/RW_2_13.png" /> 14<br />\
    <img src="styles/legend/RW_2_14.png" /> 15<br />\
    <img src="styles/legend/RW_2_15.png" /> <br />\
    <img src="styles/legend/RW_2_16.png" /> RW 08<br />\
    <img src="styles/legend/RW_2_17.png" /> RW 1<br />\
    <img src="styles/legend/RW_2_18.png" /> RW 10<br />\
    <img src="styles/legend/RW_2_19.png" /> RW 11<br />\
    <img src="styles/legend/RW_2_20.png" /> RW 12<br />\
    <img src="styles/legend/RW_2_21.png" /> RW 13<br />\
    <img src="styles/legend/RW_2_22.png" /> RW 14<br />\
    <img src="styles/legend/RW_2_23.png" /> RW 2<br />\
    <img src="styles/legend/RW_2_24.png" /> RW 3<br />\
    <img src="styles/legend/RW_2_25.png" /> RW 4<br />\
    <img src="styles/legend/RW_2_26.png" /> RW 5<br />\
    <img src="styles/legend/RW_2_27.png" /> RW 6<br />\
    <img src="styles/legend/RW_2_28.png" /> RW 7<br />\
    <img src="styles/legend/RW_2_29.png" /> RW 9<br />'
        });
var format_sawah_3 = new ol.format.GeoJSON();
var features_sawah_3 = format_sawah_3.readFeatures(json_sawah_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sawah_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sawah_3.addFeatures(features_sawah_3);
var lyr_sawah_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sawah_3, 
                style: style_sawah_3,
                popuplayertitle: "sawah",
                interactive: true,
    title: 'sawah<br />\
    <img src="styles/legend/sawah_3_0.png" /> <br />'
        });
var format_kebun_4 = new ol.format.GeoJSON();
var features_kebun_4 = format_kebun_4.readFeatures(json_kebun_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kebun_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kebun_4.addFeatures(features_kebun_4);
var lyr_kebun_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kebun_4, 
                style: style_kebun_4,
                popuplayertitle: "kebun",
                interactive: true,
    title: 'kebun<br />\
    <img src="styles/legend/kebun_4_0.png" /> <br />'
        });
var format_lapangan_5 = new ol.format.GeoJSON();
var features_lapangan_5 = format_lapangan_5.readFeatures(json_lapangan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lapangan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lapangan_5.addFeatures(features_lapangan_5);
var lyr_lapangan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lapangan_5, 
                style: style_lapangan_5,
                popuplayertitle: "lapangan",
                interactive: true,
    title: 'lapangan<br />\
    <img src="styles/legend/lapangan_5_0.png" /> <br />'
        });
var format_irigasi_6 = new ol.format.GeoJSON();
var features_irigasi_6 = format_irigasi_6.readFeatures(json_irigasi_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_irigasi_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_irigasi_6.addFeatures(features_irigasi_6);
var lyr_irigasi_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_irigasi_6, 
                style: style_irigasi_6,
                popuplayertitle: "irigasi",
                interactive: true,
                title: '<img src="styles/legend/irigasi_6.png" /> irigasi'
            });
var format_jalan_7 = new ol.format.GeoJSON();
var features_jalan_7 = format_jalan_7.readFeatures(json_jalan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_7.addFeatures(features_jalan_7);
var lyr_jalan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_7, 
                style: style_jalan_7,
                popuplayertitle: "jalan",
                interactive: true,
    title: 'jalan<br />\
    <img src="styles/legend/jalan_7_0.png" /> 2<br />\
    <img src="styles/legend/jalan_7_1.png" /> 3<br />\
    <img src="styles/legend/jalan_7_2.png" /> 4<br />\
    <img src="styles/legend/jalan_7_3.png" /> 8<br />\
    <img src="styles/legend/jalan_7_4.png" /> <br />'
        });
var format_Clipped_8 = new ol.format.GeoJSON();
var features_Clipped_8 = format_Clipped_8.readFeatures(json_Clipped_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_8.addFeatures(features_Clipped_8);
var lyr_Clipped_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_8, 
                style: style_Clipped_8,
                popuplayertitle: "Clipped",
                interactive: true,
    title: 'Clipped<br />\
    <img src="styles/legend/Clipped_8_0.png" /> residential<br />\
    <img src="styles/legend/Clipped_8_1.png" /> service<br />\
    <img src="styles/legend/Clipped_8_2.png" /> trunk<br />\
    <img src="styles/legend/Clipped_8_3.png" /> unclassified<br />\
    <img src="styles/legend/Clipped_8_4.png" /> <br />'
        });
var format_makam_9 = new ol.format.GeoJSON();
var features_makam_9 = format_makam_9.readFeatures(json_makam_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_makam_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_makam_9.addFeatures(features_makam_9);
var lyr_makam_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_makam_9, 
                style: style_makam_9,
                popuplayertitle: "makam",
                interactive: true,
                title: '<img src="styles/legend/makam_9.png" /> makam'
            });
var format_Clipped_10 = new ol.format.GeoJSON();
var features_Clipped_10 = format_Clipped_10.readFeatures(json_Clipped_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_10.addFeatures(features_Clipped_10);
var lyr_Clipped_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_10, 
                style: style_Clipped_10,
                popuplayertitle: "Clipped",
                interactive: true,
                title: '<img src="styles/legend/Clipped_10.png" /> Clipped'
            });
var format_Point_11 = new ol.format.GeoJSON();
var features_Point_11 = format_Point_11.readFeatures(json_Point_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Point_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Point_11.addFeatures(features_Point_11);
var lyr_Point_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Point_11, 
                style: style_Point_11,
                popuplayertitle: "Point",
                interactive: true,
    title: 'Point<br />\
    <img src="styles/legend/Point_11_0.png" /> <br />\
    <img src="styles/legend/Point_11_1.png" /> bengkel<br />\
    <img src="styles/legend/Point_11_2.png" /> cf<br />\
    <img src="styles/legend/Point_11_3.png" /> instansi<br />\
    <img src="styles/legend/Point_11_4.png" /> instasi<br />\
    <img src="styles/legend/Point_11_5.png" /> kep<br />\
    <img src="styles/legend/Point_11_6.png" /> kes<br />\
    <img src="styles/legend/Point_11_7.png" /> mart<br />\
    <img src="styles/legend/Point_11_8.png" /> Mart<br />\
    <img src="styles/legend/Point_11_9.png" /> pend<br />\
    <img src="styles/legend/Point_11_10.png" /> pom<br />\
    <img src="styles/legend/Point_11_11.png" /> rm<br />\
    <img src="styles/legend/Point_11_12.png" /> tb<br />\
    <img src="styles/legend/Point_11_13.png" /> ti<br />\
    <img src="styles/legend/Point_11_14.png" /> UMKM<br />\
    <img src="styles/legend/Point_11_15.png" /> wir<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_gadm41_IDNADM_ADM_4_1.setVisible(true);lyr_RW_2.setVisible(true);lyr_sawah_3.setVisible(true);lyr_kebun_4.setVisible(true);lyr_lapangan_5.setVisible(true);lyr_irigasi_6.setVisible(true);lyr_jalan_7.setVisible(true);lyr_Clipped_8.setVisible(true);lyr_makam_9.setVisible(true);lyr_Clipped_10.setVisible(true);lyr_Point_11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_gadm41_IDNADM_ADM_4_1,lyr_RW_2,lyr_sawah_3,lyr_kebun_4,lyr_lapangan_5,lyr_irigasi_6,lyr_jalan_7,lyr_Clipped_8,lyr_makam_9,lyr_Clipped_10,lyr_Point_11];
lyr_gadm41_IDNADM_ADM_4_1.set('fieldAliases', {'fid': 'fid', 'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', });
lyr_RW_2.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_sawah_3.set('fieldAliases', {'id': 'id', });
lyr_kebun_4.set('fieldAliases', {'id': 'id', });
lyr_lapangan_5.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_irigasi_6.set('fieldAliases', {'id': 'id', });
lyr_jalan_7.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'lebar': 'lebar', });
lyr_Clipped_8.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'railway': 'railway', 'blockage': 'blockage', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'diameter': 'diameter', 'aeroway': 'aeroway', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'water': 'water', 'highway': 'highway', 'surface': 'surface', 'pump': 'pump', 'oneway': 'oneway', 'layer': 'layer', 'natural': 'natural', });
lyr_makam_9.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Clipped_10.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'addr_stree': 'addr_stree', 'access_roo': 'access_roo', 'building_m': 'building_m', 'building': 'building', 'isced_leve': 'isced_leve', 'roof_mater': 'roof_mater', 'capacity': 'capacity', 'amenity': 'amenity', 'name': 'name', 'emergency': 'emergency', 'addr_house': 'addr_house', });
lyr_Point_11.set('fieldAliases', {'id': 'id', 'Kel': 'Kel', 'Nama': 'Nama', });
lyr_gadm41_IDNADM_ADM_4_1.set('fieldImages', {'fid': 'TextEdit', 'GID_4': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', });
lyr_RW_2.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_sawah_3.set('fieldImages', {'id': 'TextEdit', });
lyr_kebun_4.set('fieldImages', {'id': 'TextEdit', });
lyr_lapangan_5.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_irigasi_6.set('fieldImages', {'id': 'TextEdit', });
lyr_jalan_7.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'lebar': 'TextEdit', });
lyr_Clipped_8.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'railway': 'TextEdit', 'blockage': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'width': 'TextEdit', 'public_tra': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'landuse': 'TextEdit', 'covered': 'TextEdit', 'diameter': 'TextEdit', 'aeroway': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'water': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'oneway': 'TextEdit', 'layer': 'TextEdit', 'natural': 'TextEdit', });
lyr_makam_9.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Clipped_10.set('fieldImages', {'osm_id': '', 'osm_type': '', 'addr_stree': '', 'access_roo': '', 'building_m': '', 'building': '', 'isced_leve': '', 'roof_mater': '', 'capacity': '', 'amenity': '', 'name': '', 'emergency': '', 'addr_house': '', });
lyr_Point_11.set('fieldImages', {'id': 'TextEdit', 'Kel': 'TextEdit', 'Nama': 'TextEdit', });
lyr_gadm41_IDNADM_ADM_4_1.set('fieldLabels', {'fid': 'no label', 'GID_4': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'NAME_4': 'no label', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', });
lyr_RW_2.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_sawah_3.set('fieldLabels', {'id': 'no label', });
lyr_kebun_4.set('fieldLabels', {'id': 'no label', });
lyr_lapangan_5.set('fieldLabels', {'id': 'no label', 'nama': 'inline label - visible with data', });
lyr_irigasi_6.set('fieldLabels', {'id': 'no label', });
lyr_jalan_7.set('fieldLabels', {'id': 'no label', 'nama': 'inline label - visible with data', 'lebar': 'inline label - visible with data', });
lyr_Clipped_8.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'depth': 'no label', 'railway': 'no label', 'blockage': 'no label', 'amenity': 'no label', 'name': 'no label', 'width': 'no label', 'public_tra': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'landuse': 'no label', 'covered': 'no label', 'diameter': 'no label', 'aeroway': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'water': 'no label', 'highway': 'no label', 'surface': 'no label', 'pump': 'no label', 'oneway': 'no label', 'layer': 'no label', 'natural': 'no label', });
lyr_makam_9.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_Clipped_10.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'addr_stree': 'no label', 'access_roo': 'no label', 'building_m': 'no label', 'building': 'no label', 'isced_leve': 'no label', 'roof_mater': 'no label', 'capacity': 'no label', 'amenity': 'no label', 'name': 'no label', 'emergency': 'no label', 'addr_house': 'no label', });
lyr_Point_11.set('fieldLabels', {'id': 'no label', 'Kel': 'no label', 'Nama': 'inline label - always visible', });
lyr_Point_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});