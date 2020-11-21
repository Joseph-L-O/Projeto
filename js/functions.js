window.onload = function(){

	var map;

	function initialize(){
		var mapprop= {
			center: new google.maps.LatLng(-27.648598,-48.577423),
			scrollWheel:false,
			zoom:12,
			MapTypeId:google.maps.MapTypeId.ROADMAP
		}

		map = new google.maps.Map(document.getElementById("mapa"),mapprop);
	}
	function addMarker(lat,long,icon,content,click){
		var latLng = {'lat':lat,'lng':long};

		var marker = new google.maps.Marker({
			position:latLng,
			map:map,
			icon:icon
		});

		var infoWindow = new google.maps.InfoWindow({
			content:content,
			maxWidth:200,
			pixelOffset: new google.maps.Size(0,10)
		});
		google.maps.event.addListener(marker,'click',function(){
			infoWindow.open(map,marker);
		});
	}

	initialize();

	var conteudo = '<p style="color:black;font-size:13px;padding:10px 0;">Meu Endereço</p>'
	addMarker(-20.302425036533116, -40.34898667265474,'',conteudo);

	setTimeout(function(){
		map.panTo({'lat':-20.302425036533116,'lng':-40.34898667265474});	
	},2000);

}