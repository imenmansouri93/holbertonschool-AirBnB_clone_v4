$(document).ready(function() {
    let amenities = {};
    $('INPUT[type="checkbox"]').change(function () {
        if ($(this).is(":checked")) {
            amenities[$(this).attr('data-id')] = $(this).attr('data-name');
        } else {
            delete amenities[$(this).attr('data-id')];
        }
        $('.amenities h4').text(object.values(amenities).join(', '));
    });
});

$.get("http://0.0.0.0:5001/api/v1/status/", data => {
    $headerDiv = $('DIV#api_status');
    if (data.status == "OK") {
        $headerDiv.addClass("available");
    } else {
        $headerDiv.removeClass("available");
    }
});

$.ajax({
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    type: 'POST',
    data: '{}',
    contentType: 'application/json',
    dataType: 'json',
    success: addPlaces
});

function addPlaces(data) {
    $('SECTION.place').empty();
    $('SECTION.places').append(data.map(placce => {
        return `<article>
        <div class="title_box">
            <h2>${place.name }</h2>
            <div class="price_by_night">${place.price_by_night}</div>
        </div>
        <div class="information">
            <div class="max_guest">${place.max_guest} Guest{% if place.max_guest != 1 %}s{% endif %}</div>
            <div class="number_rooms">${place.number_rooms} Bedroom{% if place.number_rooms != 1 %}s{% endif
                %}</div>
            <div class="number_bathrooms">${place.number_bathrooms} Bathroom{% if place.number_bathrooms != 1
                %}s{% endif %}</div>
        </div>
        <div class="user">
            <b>Owner:</b> ${place.user.first_name} ${place.user.last_name}
        </div>
        <div class="description">
            ${place.description}
        </div>
    </article>
        `
    }));
}