var wms_layers = [];


        var lyr_ESRIGraydark_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (dark)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_2 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_153KawasanTransmigrasi_3 = new ol.format.GeoJSON();
var features_153KawasanTransmigrasi_3 = format_153KawasanTransmigrasi_3.readFeatures(json_153KawasanTransmigrasi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_153KawasanTransmigrasi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_153KawasanTransmigrasi_3.addFeatures(features_153KawasanTransmigrasi_3);
var lyr_153KawasanTransmigrasi_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_153KawasanTransmigrasi_3, 
                style: style_153KawasanTransmigrasi_3,
                popuplayertitle: 'Jumlah Lembaga Ekonomi (data update tanggal 19 Februari 2025)',
                interactive: true,
    title: '153 Kawasan Transmigrasi<br />\
    <img src="styles/legend/153KawasanTransmigrasi_3_0.png" /> Prioritas Kementerian<br />\
    <img src="styles/legend/153KawasanTransmigrasi_3_1.png" /> Prioritas Nasional<br />' });
var format_SebaranLembagaEkonomiTerbanyak_4 = new ol.format.GeoJSON();
var features_SebaranLembagaEkonomiTerbanyak_4 = format_SebaranLembagaEkonomiTerbanyak_4.readFeatures(json_SebaranLembagaEkonomiTerbanyak_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SebaranLembagaEkonomiTerbanyak_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SebaranLembagaEkonomiTerbanyak_4.addFeatures(features_SebaranLembagaEkonomiTerbanyak_4);
var lyr_SebaranLembagaEkonomiTerbanyak_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SebaranLembagaEkonomiTerbanyak_4, 
                style: style_SebaranLembagaEkonomiTerbanyak_4,
                popuplayertitle: 'Sebaran Lembaga Ekonomi Terbanyak',
                interactive: false,
    title: 'Sebaran Lembaga Ekonomi Terbanyak<br />\
    <img src="styles/legend/SebaranLembagaEkonomiTerbanyak_4_0.png" /> Bumdes/Bumdesma<br />\
    <img src="styles/legend/SebaranLembagaEkonomiTerbanyak_4_1.png" /> Koperasi<br />\
    <img src="styles/legend/SebaranLembagaEkonomiTerbanyak_4_2.png" /> Non Badan Hukum (Kelompok)<br />\
    <img src="styles/legend/SebaranLembagaEkonomiTerbanyak_4_3.png" /> Perusahaan<br />\
    <img src="styles/legend/SebaranLembagaEkonomiTerbanyak_4_4.png" /> Tidak ada data lembaga ekonomi<br />' });

lyr_ESRIGraydark_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_GoogleMaps_2.setVisible(false);lyr_153KawasanTransmigrasi_3.setVisible(true);lyr_SebaranLembagaEkonomiTerbanyak_4.setVisible(false);
var layersList = [lyr_ESRIGraydark_0,lyr_GoogleSatelliteHybrid_1,lyr_GoogleMaps_2,lyr_153KawasanTransmigrasi_3,lyr_SebaranLembagaEkonomiTerbanyak_4];
lyr_153KawasanTransmigrasi_3.set('fieldAliases', {'KAWASAN': 'KAWASAN', 'REMARK': 'REMARK', 'LUAS_HA': 'LUAS_HA', 'STATUS': 'STATUS', 'SUMBER': 'SUMBER', 'THN_PRODUK': 'THN_PRODUK', 'SIPUKAT': 'SIPUKAT', 'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'PRIORITAS': 'PRIORITAS', 'NON BADAN HUKUM (KELOMPOK)': 'NON BADAN HUKUM (KELOMPOK)', 'KOPERASI': 'KOPERASI', 'BUMDES/BUMDESMA': 'BUMDES/BUMDESMA', 'PERUSAHAAN': 'PERUSAHAAN', 'BUMD': 'BUMD', 'JUMLAH': 'JUMLAH', 'LEMBAGA DOMINAN': 'LEMBAGA DOMINAN', });
lyr_SebaranLembagaEkonomiTerbanyak_4.set('fieldAliases', {'KAWASAN': 'KAWASAN', 'REMARK': 'REMARK', 'LUAS_HA': 'LUAS_HA', 'STATUS': 'STATUS', 'SUMBER': 'SUMBER', 'THN_PRODUK': 'THN_PRODUK', 'SIPUKAT': 'SIPUKAT', 'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'PRIORITAS': 'PRIORITAS', 'NON BADAN HUKUM (KELOMPOK)': 'NON BADAN HUKUM (KELOMPOK)', 'KOPERASI': 'KOPERASI', 'BUMDES/BUMDESMA': 'BUMDES/BUMDESMA', 'PERUSAHAAN': 'PERUSAHAAN', 'BUMD': 'BUMD', 'JUMLAH': 'JUMLAH', 'LEMBAGA DOMINAN': 'LEMBAGA DOMINAN', });
lyr_153KawasanTransmigrasi_3.set('fieldImages', {'KAWASAN': 'TextEdit', 'REMARK': 'TextEdit', 'LUAS_HA': 'TextEdit', 'STATUS': 'TextEdit', 'SUMBER': 'TextEdit', 'THN_PRODUK': 'TextEdit', 'SIPUKAT': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABUPATEN': 'TextEdit', 'PRIORITAS': 'TextEdit', 'NON BADAN HUKUM (KELOMPOK)': 'Range', 'KOPERASI': 'Range', 'BUMDES/BUMDESMA': 'Range', 'PERUSAHAAN': 'Range', 'BUMD': 'Range', 'JUMLAH': 'Range', 'LEMBAGA DOMINAN': 'TextEdit', });
lyr_SebaranLembagaEkonomiTerbanyak_4.set('fieldImages', {'KAWASAN': 'TextEdit', 'REMARK': 'TextEdit', 'LUAS_HA': 'TextEdit', 'STATUS': 'TextEdit', 'SUMBER': 'TextEdit', 'THN_PRODUK': 'TextEdit', 'SIPUKAT': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABUPATEN': 'TextEdit', 'PRIORITAS': 'TextEdit', 'NON BADAN HUKUM (KELOMPOK)': 'Range', 'KOPERASI': 'Range', 'BUMDES/BUMDESMA': 'Range', 'PERUSAHAAN': 'Range', 'BUMD': 'Range', 'JUMLAH': 'Range', 'LEMBAGA DOMINAN': 'TextEdit', });
lyr_153KawasanTransmigrasi_3.set('fieldLabels', {'KAWASAN': 'inline label - visible with data', 'REMARK': 'hidden field', 'LUAS_HA': 'hidden field', 'STATUS': 'hidden field', 'SUMBER': 'hidden field', 'THN_PRODUK': 'hidden field', 'SIPUKAT': 'hidden field', 'PROVINSI': 'inline label - visible with data', 'KABUPATEN': 'inline label - visible with data', 'PRIORITAS': 'hidden field', 'NON BADAN HUKUM (KELOMPOK)': 'inline label - visible with data', 'KOPERASI': 'inline label - visible with data', 'BUMDES/BUMDESMA': 'inline label - visible with data', 'PERUSAHAAN': 'inline label - visible with data', 'BUMD': 'inline label - visible with data', 'JUMLAH': 'hidden field', 'LEMBAGA DOMINAN': 'hidden field', });
lyr_SebaranLembagaEkonomiTerbanyak_4.set('fieldLabels', {'KAWASAN': 'no label', 'REMARK': 'no label', 'LUAS_HA': 'no label', 'STATUS': 'no label', 'SUMBER': 'no label', 'THN_PRODUK': 'no label', 'SIPUKAT': 'no label', 'PROVINSI': 'no label', 'KABUPATEN': 'no label', 'PRIORITAS': 'no label', 'NON BADAN HUKUM (KELOMPOK)': 'no label', 'KOPERASI': 'no label', 'BUMDES/BUMDESMA': 'no label', 'PERUSAHAAN': 'no label', 'BUMD': 'no label', 'JUMLAH': 'no label', 'LEMBAGA DOMINAN': 'no label', });
lyr_SebaranLembagaEkonomiTerbanyak_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});