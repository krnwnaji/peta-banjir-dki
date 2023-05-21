ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([106.650016, -6.393370, 107.058030, -6.051796]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PetaHistoricalBanjir_1 = new ol.format.GeoJSON();
var features_PetaHistoricalBanjir_1 = format_PetaHistoricalBanjir_1.readFeatures(json_PetaHistoricalBanjir_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PetaHistoricalBanjir_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PetaHistoricalBanjir_1.addFeatures(features_PetaHistoricalBanjir_1);
var lyr_PetaHistoricalBanjir_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PetaHistoricalBanjir_1, 
                style: style_PetaHistoricalBanjir_1,
                interactive: true,
    title: 'Peta Historical Banjir<br />\
    <img src="styles/legend/PetaHistoricalBanjir_1_0.png" /> Tidak Terdampak<br />\
    <img src="styles/legend/PetaHistoricalBanjir_1_1.png" /> Sangat Rendah<br />\
    <img src="styles/legend/PetaHistoricalBanjir_1_2.png" /> Rendah<br />\
    <img src="styles/legend/PetaHistoricalBanjir_1_3.png" /> Sedang<br />\
    <img src="styles/legend/PetaHistoricalBanjir_1_4.png" /> Tinggi<br />\
    <img src="styles/legend/PetaHistoricalBanjir_1_5.png" /> Sangat Tinggi<br />'
        });
var format_rel_kereta_api_2 = new ol.format.GeoJSON();
var features_rel_kereta_api_2 = format_rel_kereta_api_2.readFeatures(json_rel_kereta_api_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_rel_kereta_api_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rel_kereta_api_2.addFeatures(features_rel_kereta_api_2);
var lyr_rel_kereta_api_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rel_kereta_api_2, 
                style: style_rel_kereta_api_2,
                interactive: false,
                title: '<img src="styles/legend/rel_kereta_api_2.png" /> rel_kereta_api'
            });
var format_jalur_transjakarta_3 = new ol.format.GeoJSON();
var features_jalur_transjakarta_3 = format_jalur_transjakarta_3.readFeatures(json_jalur_transjakarta_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_jalur_transjakarta_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalur_transjakarta_3.addFeatures(features_jalur_transjakarta_3);
var lyr_jalur_transjakarta_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalur_transjakarta_3, 
                style: style_jalur_transjakarta_3,
                interactive: false,
                title: '<img src="styles/legend/jalur_transjakarta_3.png" /> jalur_transjakarta'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_PetaHistoricalBanjir_1.setVisible(true);lyr_rel_kereta_api_2.setVisible(true);lyr_jalur_transjakarta_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_PetaHistoricalBanjir_1,lyr_rel_kereta_api_2,lyr_jalur_transjakarta_3];
lyr_PetaHistoricalBanjir_1.set('fieldAliases', {'kelurahan': 'kelurahan', 'kecamatan': 'kecamatan', 'wilayah': 'wilayah', 'tahun': 'tahun', 'kelas_banjir': 'kelas_banjir', });
lyr_rel_kereta_api_2.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', });
lyr_jalur_transjakarta_3.set('fieldAliases', {'fid': 'fid', 'KORIDOR': 'KORIDOR', 'JURUSAN': 'JURUSAN', });
lyr_PetaHistoricalBanjir_1.set('fieldImages', {'kelurahan': 'TextEdit', 'kecamatan': 'TextEdit', 'wilayah': 'TextEdit', 'tahun': 'Range', 'kelas_banjir': '', });
lyr_rel_kereta_api_2.set('fieldImages', {'fid': '', 'NAMOBJ': '', });
lyr_jalur_transjakarta_3.set('fieldImages', {'fid': '', 'KORIDOR': '', 'JURUSAN': '', });
lyr_PetaHistoricalBanjir_1.set('fieldLabels', {'kelurahan': 'inline label', 'kecamatan': 'inline label', 'wilayah': 'inline label', 'tahun': 'inline label', 'kelas_banjir': 'inline label', });
lyr_rel_kereta_api_2.set('fieldLabels', {'fid': 'no label', 'NAMOBJ': 'no label', });
lyr_jalur_transjakarta_3.set('fieldLabels', {'fid': 'no label', 'KORIDOR': 'no label', 'JURUSAN': 'no label', });
lyr_jalur_transjakarta_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});