/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */


window.onhashchange = function () {
    //alert("hash changed");
    parseURL();
};

// Load Images
$(function() {
    document.getElementById("carousel-item2").style.backgroundImage = "url(img/find.jpg)";
	
    document.getElementById("img-sapient").src = "img/logos/gray/sapient.png";
    document.getElementById("img-BlackRock").src = "img/logos/gray/BlackRock.png";
    document.getElementById("img-mindtree").src = "img/logos/gray/mindtree.png";
    document.getElementById("img-aon").src = "img/logos/gray/aon.png";

    document.getElementById("gmap").style.backgroundImage = "url(img/map-office.jpg)";

    document.getElementById("carousel-item3").style.backgroundImage = "url(img/header-bg.jpg)";
    document.getElementById("carousel-item4").style.backgroundImage = "url(img/map-india.png)";

    document.getElementById("img-Question-page").src = "img/Question-page.png";
    document.getElementById("img-Coding").src = "img/Coding.png";
    document.getElementById("img-Subjective").src = "img/Subjective.png";
    document.getElementById("img-dataviz").src = "img/dataviz.png";
    document.getElementById("img-Reports").src = "img/Reports.png";
    document.getElementById("img-content_cycle").src = "img/portfolio/content_cycle.png";
    document.getElementById("img-Science").src = "img/portfolio/science.png";

    parseURL();

    $.ajax({
        url: "mail/getkeys.php",
        type: "POST",
        cache: false,
        success: function (data) {
            $(".g-recaptcha").attr("data-sitekey", data);
            //console.log(data);
        },
    });

    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-707704-10', 'auto');
    ga('send', 'pageview');

    var d = new Date();
    document.getElementById('curryr').innerHTML = d.getFullYear();
    
    $("body").append("<script src='https://www.google.com/recaptcha/api.js'></script>");

});

// implementing click leading to js popups will be mapped to unique URLs
$(function () {
    $("a[data-toggle='modal'],a.tab-head").click(function (event) {
        event.preventDefault();
        event.stopPropagation();
        var idstr = $(this).attr("href");
        var urlstr = idstr.replace("#","");
        var currurl = window.location.href;
	var currurl = currurl.replace(/\/#\/\S*/,"");
	var currurl = currurl.replace(/\/$/,"");
        //alert(currurl+"/#/"+urlstr);
        window.location.href = currurl+"/#/"+urlstr;
    });
    $(".portfolio-modal.modal").on("hidden.bs.modal", function (event) {
        var currurl = window.location.href;
	var currurl = currurl.replace(/\/#\/\S*/,"");
	var currurl = currurl.replace(/\/$/,"");
        //alert(currurl+"/#/");
        window.location.href = currurl+"/#/";
    });
});

// implementing direct links to js popups
function parseURL() {
    var regex = new RegExp("#/");
    var url = window.location.href;
    if (regex.test(url)) {
        var path = url.split("#/");
        var jsurl = path[1].split("/");
        if (typeof(jsurl[0]) != "undefined") {
            if (jsurl[0] == "assm-content") {
                if (typeof(jsurl[1]) != "undefined") {
                    setTimeout(function () {tabswitch("#"+path[1])}, 0);
                } else {
                    $(".fade.in").modal("hide");
                }
            } else {
                $(".fade.in").modal("hide");
            }
            $('#'+jsurl[0]).modal();
        }
    }
}

// Geo Chart Implementation
$(function() {
    $('#myCarousel').height($(window).height());
    $(window).resize(function () {
        $('#myCarousel').height($(window).height());
        //drawRegionsMap();
        //drawCitiesMap();
    });
    //google.setOnLoadCallback(drawRegionsMap);
    //google.setOnLoadCallback(drawCitiesMap);
/*
    function drawCitiesMap() {

        var data = google.visualization.arrayToDataTable([
          ['City'],
          ['Ahmedabad'],
          ['Bangalore'],
          ['Bhopal'],
          ['Bhubaneshwar'],
          ['Chandigarh'],
          ['Chennai'],
          ['Cochin'],
          ['Coimbatore'],
          ['Delhi'],
          ['Gurgaon'],
          ['Guwahati'],
          ['Hyderabad'],
          ['Indore'],
          ['Jaipur'],
          ['Jalandhar'],
          ['Jamshedpur'],
          ['Kolkata'],
          ['Lucknow'],
          ['Mumbai'],
          ['Nagpur'],
          ['Nasik'],
          ['Noida'],
          ['Patna'],
          ['Pondicherry'],
          ['Pune'],
          ['Raipur'],
          ['Rajkot']
        ]);

        var options = {
            width: $('.carousel-inner').width(),
            region: 'IN',
            backgroundColor: '#65554f',
            colorAxis: {colors: ['#dd7000', '#dd7000']},
            datalessRegionColor: '#2c2222',
            legend: 'none',
            displayMode: 'markers',
            tooltip: {trigger: 'none'},
            domain: 'IN'
        };

        var chart = new google.visualization.GeoChart(document.getElementById('indiachart'));

        chart.draw(data, options);
      }

    function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['Country', ' '],
          ['Afghanistan', 1],
          ['Australia', 9],
          ['Bahamas', 1],
          ['Bangladesh', 1],
          ['Canada', 3],
          ['Chile', 2],
          ['China', 120],
          ['Egypt', 1],
          ['Finland', 1],
          ['France', 1],
          ['Germany', 4],
          ['Hong Kong', 11],
          ['India', 230],
          ['Japan', 4],
          ['South Korea', 2],
          ['Malaysia', 4],
          ['Nepal', 5],
          ['Netherlands', 1],
          ['New Zealand', 1],
          ['Philippines', 7],
          ['Saint Helena', 1],
          ['Singapore', 14],
          ['Spain', 1],
          ['Sri Lanka', 2],
          ['Sudan', 1],
          ['Sweden', 2],
          ['Togo', 1],
          ['United Kingdom', 12],
          ['United States', 58]
        ]);

        var options = {
            width: $('.carousel-inner').width(),
            region: 'world',
            colorAxis: {colors: ['#fee9bd', '#d8531e']},
            backgroundColor: '#55554f',
            datalessRegionColor: '#2d2222',
            legend: 'none',
            tooltip: {trigger: 'none'},
            domain: 'IN'
        };

        var chart = new google.visualization.GeoChart(document.getElementById('mapchart'));

        chart.draw(data, options);
    }
*/
});


// Map Implementation
//$(function() {
    //var myOptions = {
        //zoom: 15,
	//scrollwheel: false,
        //center: new google.maps.LatLng(12.9104235,77.628414),
        //mapTypeId: google.maps.MapTypeId.ROADMAP,
        //styles: [ {
                //"stylers": [
                    //{ "hue": "#ff1a00" },
                    //{ "invert_lightness": true },
                    //{ "saturation": -100 },
                    //{ "lightness": 33 },
                    //{ "gamma": 0.5 }
                //]
            //}, {
                //"featureType": "water",
                //"elementType": "geometry",
                //"stylers": [
                    //{ "color": "#2D333C" }
                //]
            //}
        //]
    //};
    //
    //var map = new google.maps.Map(document.getElementById('gmap'), myOptions);
    //var marker = new google.maps.Marker( {
        //map: map,
        //position: new google.maps.LatLng(12.915898,77.628414),
        //title: "eLitmus Knowledge Park"            
    //});
//});

// TAB implementation
function tabswitch (id) {
    $('.tab-head.active').removeClass("active");
    $("a[href='"+id+"']").addClass("active");
    $('.tab-body').hide();
    rawid = id.replace("#","");
    document.getElementById(rawid).style.display = "block";
}

// Company logo image change
$(function() {
    $('#clients .img-centered').hover(function (event) {
        var src = $(this).attr("src");
	src = src.replace("gray","Color");
	$(this).attr("src", src);
    }, function (event) {
        var src = $(this).attr("src");
	src = src.replace("Color","gray");
	$(this).attr("src", src);
    });
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Sends contact message to server
//$('#messagesubmit').click(function() {
    //senddata = {};
    //$.ajax({
        //url: "mail/contact_me.php",
        //data: senddata,
        //type: "POST"
    //}).done(function () {
        //$(this).innerHTML = "Message Sent";
    //});
//});
