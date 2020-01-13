# Grumble

Grumble is an app made to help users ease the process of finding something to eat!
Most people decide on what to eat based on the pictures, so our intent is to bypass the fuss of apps and help users find what they want to eat based on how it looks.
Using both yelp and google maps api’s, once you decide what looks good you can find the business.

- Project One: API Repository for The Three Musketeers team.

- Built a Grumble Web App to search user's favorite foods restaurant using the GitHub and google map API

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

```bash
# Run
index.html
```

## Preview

[![: YELP API and Google Map API](https://github.com/EunsooJung/Developer-Profile-Generator/blob/master/assets/09-Dev-Profile-Gen-Preview.gif)](https://github.com/EunsooJung/Developer-Profile-Generator/blob/master/assets/09-Dev-Profile-Gen-Preview.gif)

## Usage

### Basic Usage

After downloading, simply edit the HTML, CSS and Javascript files included with the template in your favorite text editor to make changes. These are the only files you need to worry about, you can ignore everything else! To preview the changes you make to the code, you can open the `index.html` file in your web browser.

### Guidelines:

- Proceeds as follows:

1.  Search your location based on City
2.  Grumble app shows image of foods
3.  Click your favorite foods
4.  Review selected favorite food’s restaurant basic information

### Code Snippet

```javascript
-assets/js/favorites.js check point

...
// YELP API
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

...
// Get seared list from localStorage
function showFavorites() {
        var ulCollectionsDiv = $("collection");
        var list = JSON.parse(localStorage.getItem("list"));

        console.log(list);
        if(list !== null) {
            $(".collapsible").empty();
            // rendering google map API
            for (var i = 0; i < list.length; i++) {
                var newItem = "<li> <div class='collapsible-header'>\
                    <img class='imgSize' src='"+ list[i].image_url + "'>" + list[i].name + "<br>Ratings: " + list[i].rating + "<br>"+ list[i].categories[0].title +"</div>\
                <div class='collapsible-body'><iframe width='100%' height='100%' frameborder='0' style='border:0' src='https://www.google.com/maps/embed/v1/place?key=AIzaSyC5H1sUje2YHZ3C0PUtQJF15wzYjnuGpXI&zoom=15&q=" + list[i].location.display_address[0] + "," + list[i].location.display_address[1] + "," + list[i].location.display_address[2]  + "'></iframe>\
                <span>" + list[i].display_phone + "</span><br><span>"+ list[i].location.display_address[0] + "," + list[i].location.display_address[1] + "," + list[i].location.display_address[2]   +"</span></div>\
              </li>";
                $(".collapsible").append(newItem);
            }
        }
    };

```

## Built With

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Materialize CSS](https://materializecss.com/)
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [jQuery](https://jquery.com/)

## Authors

- **Michael(Eunsoo)Jung**
- **Ken Bains**
- **Dextor Valencia**

* [Grumble: YELP API and Google Map API](https://eunsoojung.github.io/Grumble/)
* [My Portfolio](https://eunsoojung.github.io/Unit-02-Responsive-Portfolio/portfolio.html)
* [Link to Github](https://github.com/)
* [Link to LinkedIn](www.linkedin.com/in/eun-soo-jung/)

## License

This project is licensed under the MIT License
