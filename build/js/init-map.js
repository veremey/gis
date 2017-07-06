$(document).ready(function() {


	/* --- #adressMap ---*/
	if($('#adressMap').length ) {
		// var map;

		DG.then(function () {
			var map = DG.map('adressMap', {
				center: [59.91517658549869, 30.323893725872043],
				zoom: 16,
				// fullscreenControl: false,
				// zoomControl: false,
				// scrollWheelZoom: false,
				// scroll: false
			});
			myIcon = DG.icon({
				iconUrl: 'img/icon-marker.png',
				iconSize: [55, 55]
			});
			DG.marker([60.91517658549869, 30.323893725872043],{
				icon: myIcon
			}).addTo(map);

			hereIAm= DG.icon({
					iconSize: [75, 77],
					iconUrl: 'img/here.png',
				});
			DG.marker([59.91517658549869, 30.323893725872043], {
					icon: myIcon
				}).addTo(map);

		});

	}
	/* --- mapmini ---*/
	if($('#mapmini').length ) {
		var map;

		DG.then(function () {
			map = DG.map('mapmini', {
				center: [59.91517658549869, 30.323893725872043],
				zoom: 16,
				// fullscreenControl: false,
				// zoomControl: false,
				// scrollWheelZoom: false
			});
			myIcon = DG.icon({
				iconUrl: 'img/marker.png',
				iconSize: [89, 99],
				iconAnchor: [41, 75]
			});
			DG.marker([60.91517658549869, 30.323893725872043],{
				icon: myIcon
			}).addTo(map);
			hereIAm= DG.icon({
					iconSize: [75, 77],
					iconUrl: 'img/here.png',
				});
			DG.marker([59.91517658549869, 30.323893725872043], {
					icon: myIcon
				}).addTo(map);

		});
	}
	/*--------------------------------------------------------------------*/
	/* --- #mapPharmacy ---*/
	if($('#mapPharmacy').length ) {
		// var map;

		DG.then(function () {
			var map = DG.map('mapPharmacy', {
				center: [59.91517658549869, 30.323893725872043],
				zoom: 16
			});

			myIcon = DG.icon({
				iconUrl: 'img/icon-marker.png',
				iconSize: [55, 55]
			});
			hereIAm= DG.icon({
					iconSize: [75, 77],
					iconUrl: 'img/here.png',
				});
				var pop = $('#popapPharmacy01').html(); // !!!!!!!!!!!!!!!
				var customOptions = {maxWidth: 'auto', offset: [0, 0], maxHeight: 'auto', className : '11111custom'};
			DG.marker([59.91517658549869, 30.323893725872043], {
					icon: hereIAm
				}).addTo(map);
			// popup variant #1
			// var marker1 = DG.marker([59.91517658549869, 30.323893725872043],{icon: myIcon})
			// 	.addTo(map)
			// 	.bindPopup(pop, customOptions)
			// 	.bindLabel('1 000 руб', {
			// 		static: true, offset: [5, 0]
			// 	});
				var marker1 = DG.marker([59.91517658549869, 30.323893725872043],{icon: myIcon})
					.addTo(map)
					.bindLabel('1 000 руб', {
						static: true, offset: [5, 0]
					});

				marker1.on('click', function () {
					// marker1.addTo(map).hideLabel();
					DG.popup({
						maxWidth: 450,
						maxHeight: 10000,
						offset: [0, 2],
						closeButton: false
					})
					.setLatLng([59.91517658549869, 30.323893725872043])
					.setContent('' + pop)
					.bringToFront()
					.openOn(map);
				});


			var marker2 = DG.marker([59.915176, 30.32],{icon: myIcon})
				.addTo(map)
				.bindLabel('1 300 руб', {
					static: true, offset: [5, 0]
				});
			// popup variant #1
			marker2.on('click', function () {
					// marker1.addTo(map).hideLabel();
					DG.popup({
						maxWidth: 450,
						maxHeight: 10000,
						offset: [0, 2],
						closeButton: false
					})
					.setLatLng([59.915176, 30.32])
					.setContent('' + pop)
					.bringToFront()
					.openOn(map);
				});

			var marker3 = DG.marker([59.914813, 30.323133],{icon: myIcon})
				.addTo(map)
				.bindLabel('1 370 руб', {
					static: true, offset: [5, 0]
				});
			marker3.on('click', function () {
					// marker1.addTo(map).hideLabel();
					DG.popup({
						maxWidth: 450,
						maxHeight: 10000,
						offset: [0, 2],
						closeButton: false
					})
					.setLatLng([59.914813, 30.323133])
					.setContent('' + pop)
					.bringToFront()
					.openOn(map);
				});
			var marker4 = DG.marker([59.91577, 30.323433],{icon: myIcon})
				.addTo(map)
				.bindLabel('1 310 руб', {
					static: true, offset: [5, 0]
				});
			marker4.on('click', function () {
					// marker1.addTo(map).hideLabel();
					DG.popup({
						maxWidth: 450,
						maxHeight: 10000,
						offset: [0, 2],
						closeButton: false
					})
					.setLatLng([59.91577, 30.323433])
					.setContent('' + pop)
					.bringToFront()
					.openOn(map);
				});

			var cicl = DG.circle([59.91517658549869, 30.323893725872043], 200, {
				color: '#f1db82',
				// fill: 'rgba(0, 0, 0, 0)',
				// fillColor: 'rgba(0, 0, 0, 0)',
				// weight: 0
			}).addTo(map);

			var group = DG.featureGroup([marker1, marker2, marker3, marker4]);

			group.addTo(map);
			// group.on('click', function(e) {
			// 	 map.setView([e.latlng.lat, e.latlng.lng]);
			//  });
		});
	}
	/*--------------------------------------------------------------------*/
	///* --- #clasterMap ---*/

	if($('#clasterMap').length){
		var map;

		DG.then(function() {
			// загрузка кода модуля
			return DG.plugin('http://2gis.github.io/mapsapi/vendors/Leaflet.markerCluster/leaflet.markercluster-src.js');
		}).then(function() {
			map = DG.map('clasterMap', {
				center: DG.latLng(54.92, 82.82),
				zoom: 16,
				// scrollWheelZoom: false,
				// touchZoom: false,
				// dragging : true,
				// boxZoom: false
			});
			myIcon = DG.icon({
				iconUrl: 'img/icon-marker.png',
				iconSize: [55, 55]
			});
			hereIAm= DG.icon({
					iconSize: [75, 77],
					iconUrl: 'img/here.png',
			});
		DG.marker([54.92, 82.82], {
				icon: hereIAm
			}).addTo(map);
		var pop = $('#popapPharmacy01').html();
		var markers = DG.markerClusterGroup();

		// обработка координат для установки маркеров
		for (var i = 0; i < addressPoints.length; i++) {
			var a = addressPoints[i];
			var title = a[2];
			var marker = DG.marker([a[0], a[1]], {
				icon: myIcon,
				title: title,
				label: 'цена ' + title + ' руб',
				static: true
			});
			marker.bindPopup(pop, {offset: [0, -5]});
			markers.addLayer(marker);
		}


		var circl = DG.circle([54.92, 82.82], 200, {
			color: '#f1db82',
			// fill: 'rgba(0, 0, 0, 0)',
			// fillColor: 'rgba(0, 0, 0, 0)',
			// weight: 0
		}).addTo(map);


			map.addLayer(markers);

		});

	}	///* --- #clasterMapPopup ---*/
	if($('#clasterFamouseMap').length){
		var map;

		DG.then(function() {
			// загрузка кода модуля
			return DG.plugin('http://2gis.github.io/mapsapi/vendors/Leaflet.markerCluster/leaflet.markercluster-src.js');
		}).then(function() {
			map = DG.map('clasterFamouseMap', {
				center: DG.latLng(54.92, 82.82),
				zoom: 16,
				// scrollWheelZoom: false,
				// touchZoom: false,
				// dragging : true,
				// boxZoom: false
			});
			myIcon = DG.icon({
				iconUrl: 'img/icon-famouse.png',
				iconSize: [56, 54]
			});
			hereIAm= DG.icon({
					iconSize: [75, 77],
					iconUrl: 'img/here.png',
			});
		DG.marker([54.92, 82.82], {
				icon: hereIAm
			}).addTo(map);
		var pop = $('#popapPharmacy01').html();
		var markers = DG.markerClusterGroup();

		// обработка координат для установки маркеров
		for (var i = 0; i < addressPoints.length; i++) {
			var a = addressPoints[i];
			var title = a[2];
			var marker = DG.marker([a[0], a[1]], {
				icon: myIcon,
				title: title,
				label: 'цена ' + title + ' руб',
				static: true
			});
			marker.bindPopup(pop, {offset: [0, -5]});
			markers.addLayer(marker);
		}


		var circl = DG.circle([54.92, 82.82], 200, {
			color: '#f1db82',
			// fill: 'rgba(0, 0, 0, 0)',
			// fillColor: 'rgba(0, 0, 0, 0)',
			// weight: 0
		}).addTo(map);


			map.addLayer(markers);

		});

	}	///* --- #clasterMapPopup ---*/

	if($('#clasterMapPopup').length){
		var map;

		DG.then(function() {
			// загрузка кода модуля
			return DG.plugin('http://2gis.github.io/mapsapi/vendors/Leaflet.markerCluster/leaflet.markercluster-src.js');
		}).then(function() {
			map = DG.map('clasterMapPopup', {
				center: DG.latLng(54.92, 82.82),
				zoom: 16,
				// scrollWheelZoom: false,
				// touchZoom: false,
				// dragging : true,
				// boxZoom: false
			});
			myIcon = DG.icon({
				iconUrl: 'img/icon-marker.png',
				iconSize: [55, 55]
			});
			hereIAm= DG.icon({
					iconSize: [75, 77],
					iconUrl: 'img/here.png',
			});
		DG.marker([54.92, 82.82], {
				icon: hereIAm
			}).addTo(map);
		var pop = $('#popapPharmacy02').html();
		var markers = DG.markerClusterGroup();

		// обработка координат для установки маркеров
		for (var i = 0; i < addressPoints.length; i++) {
			var a = addressPoints[i];
			var title = a[2];
			var marker = DG.marker([a[0], a[1]], {
				icon: myIcon,
				title: title,
				label: 'цена ' + title + ' руб',
				static: true
			});
			marker.bindPopup(pop, {offset: [0, -5]});
			markers.addLayer(marker);
		}


		var circl = DG.circle([54.92, 82.82], 200, {
			color: '#f1db82',
			// fill: 'rgba(0, 0, 0, 0)',
			// fillColor: 'rgba(0, 0, 0, 0)',
			// weight: 0
		}).addTo(map);


			map.addLayer(markers);

		});

	}
	/*--------------------------------------------------------------------*/



});//doc.ready
