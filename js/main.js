
// // Initialize and add the map// Initilize map
function initMap(){
	//location of the map default
	const loc = {lat: 43.672567, lng: -79.401404};
	//Map on location
	const map = new google.maps.Map(document.querySelector('.map')
		,{
		zoom:14,
		center: loc
	});
	// marker
	const marker = new google.maps.Marker({
		position: loc, map: map
	});
}
// Sticky menu background
window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});

// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      850
    );
  }
});