$(document).ready(function () {
    localStorage.clear();
    var cityArr = [];
    var yelpApiArr;
    var savedSearches = [];
    var count = 0;
    showFavorites();
    $('.collapsible').collapsible();
    $('.sidenav').sidenav();

    if (localStorage.getItem("listOfCities") !== null) {
        cityArr = JSON.parse(localStorage.getItem("listOfCities"));
        showCityHistory();
        //getData(cityArr[0]);
    }

    $("#searchForm").on("submit", function (e) {
        e.preventDefault();
        var cityName = $("#searchInput").val().trim();
        cityArr.push(cityName);
        localStorage.setItem("listOfCities", JSON.stringify(cityArr));
        showCityHistory();
        getYelpPics(cityName);
        $("#searchInput").val("");
    });

    $(".card a").on("click", function(e){
        
        if($(this).attr("id") === "rightApproveBtn"){
            savedSearches.push(yelpApiArr[count]);
            localStorage.setItem("list", JSON.stringify(savedSearches));
            showFavorites();
        }
        count++;
        $("#mainImageDiv").attr("src", yelpApiArr[count].image_url);
    });

    function getYelpPics(city) {

        jQuery.ajaxPrefilter(function (options) {
            if (options.crossDomain && jQuery.support.cors) {
                options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
            }
        });

        $.ajax({
            url: "https://api.yelp.com/v3/businesses/search?location=" + city + "&term=food",
            method: "GET",
            headers: {
                authorization: "Bearer Yjs1NGtfBy83YkJ4RLU-SOit4Pg2YS1m_Do1y5i6G26AbV1q2MXwE5aOcb27GGgRxben4si01ee4038BmghDsq_Sjo3_cPcwGAHPmaLUQvccADelRAHNC_NjRrHyXXYx"
            }
        }).then(function (response) {
            console.log(response)
            yelpApiArr = response.businesses;
            console.log(yelpApiArr);
            $("#mainImageDiv").attr("src", response.businesses[0].image_url);
        });
    };

    //-----------------------------------mock data
    // var listOfbusinesses = {
    //     "san francisco": [
    //         { "name": "Oji", "address": "1740 Buchanan St", "latitude": 37.786171, "longitude": -122.429681, "rating": 4, "phone": "(415) 529-1030", "img": "https://s3-media2.fl.yelpcdn.com/bphoto/lQKbAprZcyqGb4MNDM8qfg/o.jpg" },
    //         { "name": "subway", "address": "170 subway St", "latitude": 37.769617, "longitude": -122.422573, "rating": 2.3, "phone": "(415) 004-1030", "img": "https://s3-media2.fl.yelpcdn.com/bphoto/mphYvNuvCDsz1V79p3eGfQ/o.jpg" },
    //         { "name": "taco bell", "address": "30 taco St", "latitude": 37.7859116932327, "longitude": -122.414144812616, "rating": 3, "phone": "(415) 994-1030", "img": "https://s3-media1.fl.yelpcdn.com/bphoto/KFFQSL2OFfVy3yyUHAL5dA/o.jpg" },
    //         { "name": "miccy D", "address": "44440 mickey St", "latitude": 37.785155, "longitude": -122.432075, "rating": 4.4, "phone": "(415) 892-1030", "img": "https://s3-media1.fl.yelpcdn.com/bphoto/swsVh8zitzh6gipKB4zaUA/o.jpg" }
    //     ]
    // }

    // localStorage.setItem("list", JSON.stringify(listOfbusinesses));

    function showCityHistory() {
        var listDiv = $("#searchHistory");
        listDiv.empty();

        for (var i = 0; i < cityArr.length; i++) {
            listDiv.prepend("<a href='#!' class='collection-item'>" + cityArr[i]);
        }
    };

    function showFavorites() {
        var ulCollectionsDiv = $("collection");
        var list = JSON.parse(localStorage.getItem("list"));
        // var list = temp["san francisco"];
        // var list = temp[currentCity];
        // var list = localStorage.getItem(currentCity);

        console.log(list);
        if(list !== null) {
            $(".collapsible").empty();

            for (var i = 0; i < list.length; i++) {
                var newItem = "<li> <div class='collapsible-header'>\
                    <img class='imgSize' src='"+ list[i].image_url + "'>" + list[i].name + "<br>" + list[i].rating + "</div>\
                <div class='collapsible-body'>\
                </div>\
              </li>";
                $(".collapsible").append(newItem);
            }
        }
    };

    //----------------- window resize functionality
    // checkSize();
    // $(window).resize(checkSize);

    // function checkSize() {
    //     if ($("#nav-mobile").css("display") == "none") {
    //         // your code here
    //         $('.sidenav').sidenav().close();

    //     }
    // }


});
