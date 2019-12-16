$(document).ready(function() {
  // Click Event
  $('#btn-searchCity').click(searchCity);
  $('#searchedList').click(searchCity);

  var userInput;

  // Create Search List ul
  var ul = $('#searchedList');

  // Get Search list from localStorage
  var itemsArray = localStorage.getItem('items')
    ? JSON.parse(localStorage.getItem('items'))
    : [];
  var data = JSON.parse(localStorage.getItem('items'));

  // Create Searched city list
  let liMaker = text => {
    let li = $('<li>').addClass('createdCity btn btn-light');
    li.text(text);
    ul.prepend(li);
  };

  // Save user input city name to localStorage
  $('#btn-searchCity').click(function() {
    itemsArray.push(userInput);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    liMaker(userInput);
  });

  // Clear Search list
  $('.btn-clear').on('click', function() {
    $('.createdCity').remove();
    localStorage.clear();
    $('input').empty();
  });
});
