var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})





// Branching

router.get('/pharma-details', function (req, res) {
  // get the answer from the query string 
  var compare = req.query.reviewPharmaDetails

  if (compare === 'false') {
    // redirect to the relevant page
    res.redirect('/edit-pharma-details')
  } else {
    // if function is any other value (or is missing) render the page requested
    res.render('review-pharma-hours')
  }
})



router.get('/pharma-hours', function (req, res) {
  // get the answer from the query string 
  var compare = req.query.reviewPharmaHours

  if (compare === 'false') {
    // redirect to the relevant page
    res.redirect('/edit-pharma-hours')
  } else {
    // if function is any other value (or is missing) render the page requested
    res.render('review-pharma-holidays')
  }
})




router.get('/pharma-hols', function (req, res) {
  // get the answer from the query string 
  var compare = req.query.reviewPharmaHols

  res.render('review-pharma-servicehours')
})



//make sure the nhs login email is picked up as data to playback
router.get('/nhslogin', function (req, res) {
  var compare = req.query.nhsmail

  res.render('verify-email')
})

//at find - postcode ... grabbing location to playback later
router.get('/location', function (req, res) {
  var compare = req.query.location

  res.render('phone-finder-gp')
})

router.get('/selected', function (req, res) {
  var compare = req.query.selected

  res.render('phone-finder-time')
})


router.get('/time', function (req, res) {
  var compare = req.query.time

  res.render('phone-finder-location')
})


router.get('/patient', function (req, res) {
  var compare = req.query.patient

  var selectedservices = req.query.selectedservices

  var str = selectedservices;
  var selectedservices = str.split(',');

  res.render('phone-finder-results', { selectedservices:selectedservices })
})

//same as above for returning to the search results
router.get('/searchagain', function (req, res) {
  var compare = req.query.searchagain

  var selectedservices = req.query.selectedservices

  var str = selectedservices;
  var selectedservices = str.split(',');

  res.render('phone-finder-results', { selectedservices:selectedservices })
})


router.get('/list', function (req, res) {
  var servicetype = req.query.servicetype

  res.render('phone-finder-results-list', { servicetype:servicetype })
})


//at find - service select ... grabbing picks to playback later
router.get('/services', function (req, res) {

  var compare = req.query.selectedservices
  var selectedservices = req.query.selectedservices

  console.log(selectedservices)

  if (selectedservices.length >= 2) {
    // more than one selected so review the selected items
    res.render('phone-finder-selected', { selectedservices:selectedservices })
  } else {
    // none or one selected so no need to review
    res.render('phone-finder-time')
  }

  
})







module.exports = router
