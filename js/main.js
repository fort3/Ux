///////////////////////////////
// Set the inicial page
///////////////////////////////


$('#more').hide('');
$('#moreBedAndVintage').hide('');
$('#index').show('');
$('#bungalow').hide('');
$('#theNest').hide('');
$('#bedVintage').hide('');
$('#contact').hide('');


///////////////////////////////
// Toggle for the more buttons
///////////////////////////////
$('#read').click(() => {
  $('#more').toggle('');
});

$('#readBedAndVintage').click(() => {
  $('#moreBedAndVintage').toggle('');
});

///////////////////////////////
// Toggle for the clicks sections
///////////////////////////////
$('#bungalowImage').click(() => {
  $('#bungalow').toggle('');
  $('#index').toggle('');
})

$('#theNestImage').click(() => {
  $('#theNest').toggle('');
  $('#index').toggle('');
})

$('#bedVintageImage').click(() => {
  $('#bedVintage').toggle('');
  $('#index').toggle('');
})

$('#logo').click(() => {
  $('#index').show('');
  $('#bungalow').hide('');
  $('#theNest').hide('');
  $('#bedVintage').hide('');
  $('#contact').hide('');
})

$('#homeNav').click(() => {
  $('#index').show('');
  $('#bungalow').hide('');
  $('#theNest').hide('');
  $('#bedVintage').hide('');
  $('#contact').hide('');
})

$('#contactNav').click(() => {
  $('#index').hide('');
  $('#bungalow').hide('');
  $('#theNest').hide('');
  $('#bedVintage').hide('');
  $('#contact').show('');
})

///////////////////////////////
// Vue modal forms
///////////////////////////////

 // register modal component
 Vue.component("modal", {
  template: "#modal-template"
});

// start app
new Vue({
  el: "#app",
  data: {
    showModal: false
  }
});