    //This code is not efficient at all.

      var ravintolaNimet = ["Puurotaivas", "Spagettikeidas", "Pizzapöytä", "Kirkonkello",
       "Laulava Kuusi", "Linnunpönttö", "Sahamiehen luonas", "Riisipellot", "Mässy Mättölä",
      "Amiksen syöttölä", "Elitistin Eines", "Lalli Leipäjuustola", "Ihrarasva", "Moottoriöylätti",
      "Puumaja", "Omenakoivu", "Sadepäivä", "Menninkäisen maha",
      "Tähtiportti", "Lentävät lautaset", "Tyäukon pihivit", "Pölkky pubi", "Ravintola köyhis", "Eskon Leivät",
      "Sepon purtavat"];

      var osoitteet = ["Pihlajankatu 1", "Pihlajankatu 2", "Pihlajankatu 3", "Pihlajankatu 4",
       "Pihlajankatu 5", "Menninkäisen kuja 1", "Ismonsilta 5", "Hevoskarhuntie 1","Hevoskarhuntie 2",
       "Hevoskarhuntie 3", "Porttitie 42", "Ajokoirantie 2", "Hirvi 5", "Viidespölkky 9", "Muurahaisenpolku 4",
       "Muurahaisenpolku 5","Muurahaisenpolku 6","Muurahaisenpolku 7","Muurahaisenpolku 8",
        "Tyäukontie 3"]; 

      var tyylit = ["Orientaalinen", "Eurooppalainen", "Urbaani", "Lähiruoka", "Afrikkalainen", "Väli-Amerikkalainen",
      "Vegaani", "Liharuoka", "Mereneläviä", "Valmisruoka"];

      var jutut = ["Nopea", "Halpa", "Laatu", "Kokemus"];
      var array = [];
      for(var w = 0; w<50; w++){
        array += w;
      }

      var ravintola_array =[];
      var arvosana_array = [];

      var elokuvia_array = ["Tennispalatsi", "Flamingo", "Kinopalatsi", "Omena"];
      var musiikkia_array = ["Sibelius", "Opera", "Katumusiikki", "Musiikkitapahtuma"];
      var luontoa_array = ["Aukiopuisto", "Tulppaanipensas", "Puupaikka", "Kasvihuoneilmiö"];
      var harrastuksia_array = ["Soutu", "Taekwondo", "Jooga", "Futiskenttä"];
      var tulivuoria_array = ["Espoon Pompeiji", "Mount Hesa", "Mount Korso", "Peikkovuori"];
      var taidetta_array = ["Gubben Heim", "Kiasma", "Spiraali", "Taiteen museo"];

      var infodivi = document.createElement("div");
      infodivi.setAttribute("class", "mapbox");

      var elmarkers = [];
      var mumarkers = [];
      var lumarkers = [];
      var hamarkers =[];
      var tumarkers = [];
      var tamarkers = [];

   function initMap() {
      
      var zoomi = 11;
      var karttakeskitys = {lat:60.23,lng:24.9};
      var iconBase = 'iconit/';
  var icons = {
          hyva: {
            icon: iconBase + 'hyva.png'
          },
          keski: {
            icon: iconBase + 'keski.png'
          },
          huono: {
            icon: iconBase + 'huono.png'
          }
        };


     //etsi
        var testings = document.getElementById("etsi");
        testings.onclick = function(){
        testings.setAttribute("disabled","disabled");
        var formidiv = document.createElement("div");
        var formidiv2 = document.createElement("div");
        var selekti = document.createElement("select");
        selekti.setAttribute("id", "selekti_kaupunki");
        var etsinappi = document.createElement("button");
        etsinappi.textContent = "Etsi";
        etsinappi.setAttribute("class", "etsinappi");
        etsinappi.onclick = function(){
          kaupunki = selekti.options[selekti.selectedIndex].value;
          if(kaupunki == "helsinki"){
            map.setCenter({lat:60.189, lng:24.938});
            map.setZoom(12);
          }else if(kaupunki == "vantaa"){
            map.setCenter({lat:60.28, lng:25});
            map.setZoom(12);
          }else if(kaupunki == "espoo"){
            map.setCenter({lat:60.189, lng:24.6});
            map.setZoom(12); 
          }else if(kaupunki == "korso"){
            map.setCenter({lat:60.350748, lng:25.076383});
            map.setZoom(14); 
          }else if(kaupunki == "kanada"){
            map.setCenter({lat:60, lng:-99.5});
            map.setZoom(3); } 
          formidiv.setAttribute("class", "formidiv_hidden");
          testings.disabled = false;
        }

        var suljin = closing(testings);
       selekti.innerHTML= 
        "<option class=\"optioni\" value=\"helsinki\">Helsinki</option>"+
        "<option class=\"optioni\" value=\"vantaa\">Vantaa</option>"+
        "<option class=\"optioni\" value=\"espoo\">Espoo</option>"+
        "<option class=\"optioni\" value=\"korso\">Korso</option>"+
        "<option class=\"optioni\" value=\"kanada\">Kanada</option>"+
        "<br>"+ "<br>";

    
        formidiv2.appendChild(selekti);
        formidiv2.appendChild(etsinappi);
        formidiv2.setAttribute("class", "formidiv2");
        formidiv.setAttribute("class", "formidiv");
        var bodi =document.getElementById("bodi");
        formidiv.appendChild(formidiv2);
        formidiv.appendChild(suljin);
        bodi.appendChild(formidiv);

      }
      //kokemus
        var kokemus = document.getElementById("koe");
        kokemus.onclick = function(){
            kokemus.disabled = true;
           var koe_div = document.createElement('div');
            koe_div.setAttribute("class", "arvosteludiv");
            var bodie = document.getElementById("bodi");
            var sulje = closing(kokemus);
            koe_div.appendChild(sulje);
            var selektikoe = document.createElement("input");
             selektikoe.setAttribute("class", "tekstifieldi");
            selektikoe.setAttribute("type", "text");
           

            var pele = document.createElement("div");
            pele.innerHTML = "<button class=\"iconbuttons\" Onclick=\"rickRoll(this)\"> <p>Elokuvia<br> <i class=\"material-icons\" style=\"font-size:48px\">movie_creation</i></p></button>" +
                              "<button class=\"iconbuttons\" Onclick=\"rickRoll(this)\"> <p>Musiikkia<br> <i class=\"material-icons\" style=\"font-size:48px\">music_note</i></p></button>" +
                              "<button class=\"iconbuttons\" Onclick=\"rickRoll(this)\"> <p>Luontoa<br> <i class=\"material-icons\" style=\"font-size:48px\">nature</i></p></button>" +
                              "<button class=\"iconbuttons\" Onclick=\"rickRoll(this)\"> <p>Tulivuoria<br> <i class=\"material-icons\" style=\"font-size:48px\">landscape</i></p></button>"+
                              "<button class=\"iconbuttons\" Onclick=\"rickRoll(this)\"> <p>Harrastuksia<br> <i class=\"material-icons\" style=\"font-size:48px\">rowing</i></p></button>"+
                              "<button class=\"iconbuttons\" Onclick=\"rickRoll(this)\"> <p>Taidetta<br> <i class=\"material-icons\" style=\"font-size:48px\">palette</i></p></button>";
            pele.setAttribute("class", "icondiv");            
            var pele2 = document.createElement("div");
            pele2.innerHTML = "<button id=\"pele2but\"> <p>Hae <br> <i class=\"material-icons\" style=\"font-size:64px;\">search</i></p></button>"
            pele2.setAttribute("id", "pele2");
            
            // markit näkyviin
              pele2.onclick = function(){



              var buttonreset = document.getElementsByClassName("icondiv");
              var buttonreset2 = document.getElementsByClassName("icondiv")[buttonreset.length-1];
              var asdw = buttonreset2.getElementsByTagName("BUTTON");
              var nappulat =  document.getElementsByClassName("bg");

              for(var q = 0; q<nappulat.length; q++){
                 var nappiarvo = nappulat[q].childNodes[1].childNodes[0].nodeValue;

                 if( nappiarvo == "Elokuvia"){
      
                  showmarkers(elmarkers);
                 }
                 if( nappiarvo == "Musiikkia"){
      
                  showmarkers(mumarkers);
                 }
                 if( nappiarvo == "Luontoa"){
      
                  showmarkers(lumarkers);
                 }
                 if( nappiarvo == "Tulivuoria"){
      
                  showmarkers(tumarkers);
                 }
                 if( nappiarvo == "Harrastuksia"){
      
                  showmarkers(hamarkers);
                 }
                 if( nappiarvo == "Taidetta"){
      
                  showmarkers(tamarkers);
                 }
                 
                  
                 

              }

              
                
                for(var j = 0; j<asdw.length; j++){

                asdw[j].setAttribute("class", "iconbuttons");
              }
              koe_div.setAttribute("class", "arvosteluhidden")
              kokemus.disabled = false;




            }
            koe_div.appendChild(pele);
            koe_div.appendChild(selektikoe);
            koe_div.appendChild(pele2);

            bodie.appendChild(koe_div);

          }




      //menu rullautuva valikko
          var menub = document.createElement("button");
          var menuimg = document.createElement("img");
          menuimg.setAttribute("src", "iconit/menu.png");
          menub.setAttribute("class","nonothing");
          menub.appendChild(menuimg);
          document.getElementById("bodi").appendChild(menub);
          menub.onclick = function(){
            var mdivi = document.createElement("div");
            mdivi.setAttribute("id","mdivi");
            var suljen = closing();
            mdivi.appendChild(suljen);
            for(var t=0; t<ravintola_array.length; t++){
            var rdivi = document.createElement("div");

            rdivi.innerHTML ="<h3 style=\"color:blue;\">" +"&emsp;"+ ravintola_array[t] +"</h3>" + "<p>&emsp;Arvosana: "+arvosana_array[t]+ "<br>&emsp;"+
            "<span style=\"color:red\">" + tyylit[(Math.floor(Math.random()*10))]+ "</span><br>"+ "&emsp;Etäisyys ravintolaan "+
             (Math.random()*2).toFixed(2)+ "<i>km</i></p>"+ "<div id=\"rdiviimg\"><img style=\"height:50px;\" src=\"avatarmenu.png\"></div>";
             rdivi.setAttribute("class","rdivi");
            mdivi.appendChild(rdivi);
          }
        
          document.getElementById("bodi").appendChild(mdivi);


          }





      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: zoomi,
        center: karttakeskitys
    });


      var infoWindow = new google.maps.InfoWindow;
      var infoWindow2 = new google.maps.InfoWindow;
      
      Array.prototype.forEach.call(elokuvia_array, function() {
        
        var ep = new google.maps.LatLng(  (60.185 + Math.random()/7)  , (24.6 + Math.random()/2)   );
        var mp = new google.maps.LatLng(  (60.185 + Math.random()/7)  , (24.6 + Math.random()/2)   );
        var lp = new google.maps.LatLng(  (60.185 + Math.random()/7)  , (24.6 + Math.random()/2)   );
        var tup = new google.maps.LatLng(  (60.185 + Math.random()/7)  , (24.6 + Math.random()/2)   );
        var hp = new google.maps.LatLng(  (60.185 + Math.random()/7)  , (24.6 + Math.random()/2)   );
        var tap = new google.maps.LatLng(  (60.185 + Math.random()/7)  , (24.6 + Math.random()/2)   );

                var markerelokuva = new google.maps.Marker({
                map: map,
                position: ep,
                icon: "iconit/elokuva.png"
                
                });
                elmarkers.push(markerelokuva);

                var markermusiikkia = new google.maps.Marker({
                map: map,
                position: mp,
                icon: "iconit/musiikki.png"
               
               });
                mumarkers.push(markermusiikkia);

                var markerluontoa = new google.maps.Marker({
                map: map,
                position: lp,
                icon: "iconit/nature.png"
               
               });
                lumarkers.push(markerluontoa);

                var markertulivuoria = new google.maps.Marker({
                map: map,
                position: tup,
                icon: "iconit/tulivuori.png"
               
               });
                tumarkers.push(markertulivuoria);

                var markerharrastuksia = new google.maps.Marker({
                map: map,
                position: hp,
                icon: "iconit/harrastus.png"
               
                });
                hamarkers.push(markerharrastuksia);

                var markertaidetta = new google.maps.Marker({
                map: map,
                position: tap,
                icon: "iconit/taide.png"
               
                });
                tamarkers.push(markertaidetta);


                markerelokuva.addListener('click', function() {
                infodivi.innerHTML = "<h3 style=\"color:blue\">"+ elokuvia_array[Math.floor(Math.random()*4)] + "</h4>" +"<p>avoinna 23:00 asti<br>"+
                "etäisyys kohteesta: "+(Math.random()*2).toFixed(2)+"<i>km</i></p>";

                infoWindow2.setContent(infodivi);
                infoWindow2.open(map, markerelokuva);
                
                   
       });
                markerluontoa.addListener('click', function() {
                infodivi.innerHTML = "<h3 style=\"color:blue\">"+ luontoa_array[Math.floor(Math.random()*4)] + "</h4><br>" +"<p>avoinna 23:00 asti<br>"+
                "etäisyys kohteesta: "+(Math.random()*2).toFixed(2)+"<i>km</i></p>";
                infoWindow2.setContent(infodivi);
                infoWindow2.open(map, markerluontoa);
                
                   
       });
                markermusiikkia.addListener('click', function() {
                infodivi.innerHTML = "<h3 style=\"color:blue\">"+ musiikkia_array[Math.floor(Math.random()*4)] + "</h4><br>" +"<p>avoinna 23:00 asti<br>"+
                "etäisyys kohteesta: "+(Math.random()*2).toFixed(2)+"<i>km</i></p>";
                infoWindow2.setContent(infodivi);
                infoWindow2.open(map, markermusiikkia);
                
                   
       });

                markertulivuoria.addListener('click', function() {
                infodivi.innerHTML = "<h3 style=\"color:blue\">"+ tulivuoria_array[Math.floor(Math.random()*4)] + "</h4><br>" +"<p>avoinna 23:00 asti<br>"+
                "etäisyys kohteesta: "+(Math.random()*2).toFixed(2)+"<i>km</i></p>";
                infoWindow2.setContent(infodivi);
                infoWindow2.open(map, markertulivuoria);
                
                   
       });
                markerharrastuksia.addListener('click', function() {
                infodivi.innerHTML = "<h3 style=\"color:blue\">"+ harrastuksia_array[Math.floor(Math.random()*4)] + "</h4><br>" +"<p>avoinna 23:00 asti<br>"+
                "etäisyys kohteesta: "+(Math.random()*2).toFixed(2)+"<i>km</i></p>";
                infoWindow2.setContent(infodivi);
                infoWindow2.open(map, markerharrastuksia);
                
                   
       });
                markertaidetta.addListener('click', function() {
                infodivi.innerHTML = "<h3 style=\"color:blue\">"+ taidetta_array[Math.floor(Math.random()*4)] + "</h4><br>" +"<p>avoinna 23:00 asti<br>"+
                "etäisyys kohteesta: "+(Math.random()*2).toFixed(2)+"<i>km</i></p>";
                infoWindow2.setContent(infodivi);
                infoWindow2.open(map, markertaidetta);
                
                   
       });           
          hidemarkers(elmarkers);
          hidemarkers(mumarkers);
          hidemarkers(lumarkers);
          hidemarkers(tumarkers);
          hidemarkers(hamarkers);
          hidemarkers(tamarkers);
        


      });

      function hidemarkers(markers){
  for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(null);
        }
}
function showmarkers(markers){
  for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
        }
}

       Array.prototype.forEach.call(array, function() {
        var ravintola = ravintolaNimet[(Math.floor(Math.random()*25))];
        var osoite = "Osoite: " + osoitteet[(Math.floor(Math.random()*20))];
        var koordinaatit = new google.maps.LatLng(  (60.19 + Math.random()/6)  , (24.63 + Math.random()/2)   );
        var tyyli = document.createElement('text');
        tyyli.textContent = tyylit[(Math.floor(Math.random()*10))];
        tyyli.setAttribute("class", "tyyli");

       

        var arvonumero = Math.floor(Math.random()*6);
        //listaan ravintola ja arvosana
          ravintola_array.push(ravintola);
          arvosana_array.push(arvonumero);
          var linkki = document.createElement('a');
          linkki.setAttribute('href', "http://google.com");
          var arvostelu = document.createElement('text');
          arvostelu.setAttribute("style", "float:right");
          arvostelu.textContent = "Arvosana "+ arvonumero + "/5";

        //hsl nappi---------------------------------------------------------------
          var tekstia = document.createElement("p");
          tekstia.setAttribute("class", "tocenter");
          tekstia.innerHTML = "<strong> HAE REITTI: </strong>";
          var hsl = document.createElement('button');
          var kuva = document.createElement('img');
          kuva.setAttribute("src", "hsl.jpg");
          kuva.setAttribute("id", "hslkuva");
          hsl.setAttribute("id", "hslnappi");
          hsl.appendChild(kuva);

          hsl.setAttribute("Onclick", "location.href=\'http://www.hsl.fi\'");
          

          var infowincontent = document.createElement('div');
          infowincontent.setAttribute("class", "mapbox");

          var strong = document.createElement('strong');
          var nappula = document.createElement('button');
          nappula.setAttribute("class", "arvostelunappi");
          var aikataulut = document.createElement('button');
          aikataulut.setAttribute("class", "arvostelunappi");
          aikataulut.textContent="Aikataulut";
        //aikataulunappula funktion
          aikataulut.onclick = function(){
          var boddy = document.getElementById("bodi");
          var aikadiv = document.createElement('div');
          aikadiv.setAttribute("id", "aikadiv");
          var aikap = document.createElement('p');
          aikap.setAttribute("class", "tocenter");
          aikap.innerHTML = "<strong>  " + ravintola+ "</strong><br>   AUKIOLOAJAT<br><br> MA-TO 10:00-21:00<br>"+
          "PE 10:00-23:00<br> LA 12:00-23:00<br> SU SULJETTU<br> (pyhäpäivinä 12:00-23:00)";
          tamasulkija = closing();
          aikadiv.appendChild(tamasulkija);
          aikadiv.appendChild(aikap);
          boddy.appendChild(aikadiv);
          }

        

        //Arvostelut
          nappula.onclick = function(){
          var arvosteludiv = document.createElement('div');
          arvosteludiv.setAttribute("class", "arvosteludiv")
          var h2 = document.createElement('h2');
          h2.textContent = ravintola;
          var randomi = Math.floor(Math.random()*100 +1);
          lisa_ar = document.createElement('button');
          lisa_ar.textContent = "Lisää arvostelu";
          lisa_ar.setAttribute("class", "lisaa_ar");

        // arvostelun lisäysnappula
         lisa_ar.onclick = function(){
          var sulki = closing();
          var tekstiarea = document.createElement('textarea');
          tekstiarea.setAttribute("id", "tekstiarea");

          var teksti_nappi = document.createElement('button');
          teksti_nappi.textContent = "Lähetä";
          var lisatty_ar = document.createElement('div');
          lisatty_ar.setAttribute("class", "lisatty_ar");
          lisatty_ar.appendChild(sulki);
          lisatty_ar.appendChild(tekstiarea);
          lisatty_ar.appendChild(teksti_nappi);
          bodi.appendChild(lisatty_ar);
          teksti_nappi.onclick = function(){

            document.getElementById("tekstiarea").value = tekstiarea.value;
            console.log(document.getElementById("tekstiarea").value);
            var test = document.createElement('div');
      
            test.setAttribute("class", "lisadiv");
            test.innerHTML = "<div><img class=\"henkkuva\" src=\"https://vignette.wikia.nocookie.net/pepe-the-frog/images/a/a3/Sad_Pepe.png/revision/latest?cb=20150909150849\"/>"+
            "<br><strong> &emsp; Tuntematon käyttäjä<br><br> &emsp;   Lisätty 13.03.2018 </strong><br><br><br>" + 
            "<div id=\"tekstiarvostelu\">" +document.getElementById("tekstiarea").value.replace(/\r?\n/g, '<br />') +"</p></div>" +"</div>";
            arvosteludiv.appendChild(test);
            lisatty_ar.setAttribute("class", "formidiv_hidden");
          
              }

           
              
            }



            tekstia = document.createElement('p');
            tekstia.textContent = "Arvostelut ";
            tekstia.innerHTML += "<br>" +"   Tämä ravintola on saanut yhteensä " + randomi + 
            " arvostelua, joista "+ Math.floor(randomi- (randomi/2)) + "   oli tunnistamattomia käyttäjiä.";

            var raksikuva  = document.createElement('img');
            raksikuva.setAttribute("src", "raksi.png");
            raksikuva.setAttribute("class", "raksikuva");
            var sulkija = document.createElement('button');
            sulkija.setAttribute("class", "sulkija");
            sulkija.appendChild(raksikuva);

            sulkija.onclick = function(){
              arvosteludiv.setAttribute("class", "arvosteluhidden");
              


            }
            var arv_div = document.createElement('div');
            arv_div.innerHTML ="<p><strong>" + "Toimisto-Reetta" +"<br>"+ "59 arvostelua" + "<br>" +
            "lisätty 12.2.2018" + "</p>";
            arv_div.setAttribute("class", "arv_div");
            var arv_div2 = document.createElement('div');
            arv_div2.innerHTML ="<br>"+"<p>" + "Oikein mukavapaikka käydä. Kodikas kokemus konsannaan"
             +"<br>"+ "Halusimme hieman omaa rauhaa viettää loma-aikaamme. Mukavaa kun vielä" +"<br>"+
             "ravintolan vieressä oli nähtävyyksiä ja kaikennäköistä maustehässäkkää." +"<br>"+
             "Viinit olivat juuri sopivia kevään alkuun - kesää odotellessa" + "<br>"
             + "<button class=\"arvosteluja\" type=\"button\" Onclick=\"testfunc()\"> Arvostelut </button>" + "</p>";
            arv_div2.setAttribute("class", "arv_div2");

            var henkilokuva = document.createElement('img');
            henkilokuva.setAttribute("class", "henkkuva");
            henkilokuva.setAttribute("src", "scully.png");

            arvosteludiv.appendChild(sulkija);
            arvosteludiv.appendChild(h2);
            
            arvosteludiv.appendChild(lisa_ar);
            var bodi = document.getElementById("bodi");
            arvosteludiv.appendChild(tekstia);
            arvosteludiv.appendChild(henkilokuva);
            arvosteludiv.appendChild(arv_div);
            arvosteludiv.appendChild(arv_div2);
            bodi.appendChild(arvosteludiv);



        };
        
        
        
        var ravintolateksti = document.createElement('text');
        ravintolateksti.textContent="Olemme ravintola, joka palvelee asiakkaitaan ystävällisesti";

        var nappulateksti = document.createElement('text');
        nappulateksti.textContent = "Arvostelut";
        nappula.appendChild(nappulateksti);
        strong.textContent = ravintola;

        var juttu = document.createElement('text');
        juttu.innerHTML = "<strong>" + jutut[Math.floor(Math.random()*4)] + " "+
         jutut[Math.floor(Math.random()*4)]+ "</strong>";  


        linkki.appendChild(strong);

        infowincontent.appendChild(linkki);
        infowincontent.appendChild(arvostelu);
        infowincontent.appendChild(document.createElement('br'));

        var text = document.createElement('text');

        text.textContent = osoite;
       
        infowincontent.appendChild(text);

         infowincontent.appendChild(document.createElement('br'));
         infowincontent.appendChild(tyyli);
         infowincontent.appendChild(document.createElement('br'));
         infowincontent.appendChild(juttu);
        infowincontent.appendChild(document.createElement('br'));
        infowincontent.appendChild(ravintolateksti);
        infowincontent.appendChild(document.createElement('br'));
        infowincontent.appendChild(aikataulut);
        infowincontent.appendChild(nappula);
        infowincontent.appendChild(document.createElement('br'));
        infowincontent.appendChild(tekstia);
        infowincontent.appendChild(hsl);
            var iconstemp = {};
            if(arvonumero >=4){

              var iconstemp = iconBase + 'hyva.png';

            }
              else if(arvonumero>= 2){
                var iconstemp = iconBase + 'keski.png';
              
              }else{
                var iconstemp = iconBase + 'huono.png';
                  
              
              }
              
        
              var marker = new google.maps.Marker({
                map: map,
                position: koordinaatit,
                icon: iconstemp
              });
            
              marker.addListener('click', function() {
               
                infoWindow.setContent(infowincontent);
                infoWindow.open(map, marker);
                
                   
       });
              
 
 });


          
          
      }

    



function closing(somepart){
        var raksikuva  = document.createElement('img');
        raksikuva.setAttribute("src", "raksi.png");
        raksikuva.setAttribute("class", "raksikuva");
        var sulkija = document.createElement('button');
        sulkija.setAttribute("class", "sulkija");
        sulkija.appendChild(raksikuva);
        sulkija.onclick = function(){
          sulkija.parentNode.setAttribute("class", "arvosteluhidden");
          if(typeof somepart != 'undefined'){
          somepart.disabled = false;
        }}
        return sulkija;
}

function suosikit(){
        var suosikit_div = document.createElement('div');
        suosikit_div.setAttribute("class", "arvosteludiv");
        var bodie = document.getElementById("bodi");
        var sulje = closing();
        suosikit_div.appendChild(sulje);
        var paks = document.createElement('p');
        paks.innerHTML +=  "<img src=\"https://www.kasandbox.org/programming-images/creatures/OhNoes.png\">" +"<br>" +
        "<p><strong> Voi Ei!</strong>  Sinulla ei ole yhtään suosikkiravintolaa<br><br><br>" +
        "<button class=\"arvosteluja2\">Lisää ravintoloita suosikkeihin</button><br><br><br>"+
        "<button class=\"arvosteluja2\">Arvostelemasi ravintolat</button><br><br><br>";
        paks.setAttribute("class", "tocenter");
        suosikit_div.appendChild(paks);
        bodie.appendChild(suosikit_div);

      }

function rickRoll(buttoni){
  if(buttoni.className == "iconbuttons"){
    buttoni.setAttribute("class", "bg");
   
  }else{
     buttoni.setAttribute("class", "iconbuttons");
  }
  
}


function testfunc(){
  
}

