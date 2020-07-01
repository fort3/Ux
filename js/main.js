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


const app = new Vue({
  el: "#app",
  data: {
    showModal: false,
    message: 'test vuejs',
    selected: '',
    errors: [],
    name: null,
    email: null,
    guests: null
  },
  methods: {
    checkForm: function (e) {
      this.errors = [];
      if (!this.name) this.errors.push("Name required!");
      if (!this.email) {
        this.errors.push("Email required!");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Valid email required!");
      }
      if (!this.errors.length) return true;
      e.preventDefault();
    },
    validEmail: function (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
})