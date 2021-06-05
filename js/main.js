// Smooth Scrolling with offset
$("ul li a, .btn a, .logo a").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 50,
      },
      800
    );
  }
});

// Remove anchor from URl bar
var Webflow = Webflow || [];
Webflow.push(function () {
  $("a").click(function () {
    setTimeout(function () {
      history.replaceState(null, null, " ");
    }, 0);
  });
});

// Features
const featuresbutton = document.querySelector(".featuresinfo");

const specificationsbutton = document.querySelector(".specifications");

const Features = document.querySelector(".Features");

const Specs = document.querySelector(".Specs");

featuresbutton.addEventListener("click", () => {
  featuresbutton.classList.remove("featuresinfo_active");
  specificationsbutton.classList.remove("specifications_active");
  Features.style.display = "block";
  Specs.style.display = "none";
});

specificationsbutton.addEventListener("click", () => {
  featuresbutton.classList.add("featuresinfo_active");
  specificationsbutton.classList.add("specifications_active");
  Features.style.display = "none";
  Specs.style.display = "block";
});

// Expandable Divs

const expandedperf = document.querySelector(".expandperf");

const expandableperf = document.querySelector(".FeatureOneA");

const expandedhandling = document.querySelector(".expandhandling");

const expandablehandling = document.querySelector(".FeatureOneB");

const expandedexterior = document.querySelector(".expandexterior");

const expandableexterior = document.querySelector(".FeatureTwoA");

const expandedinterior = document.querySelector(".expandinterior");

const expandableinterior = document.querySelector(".FeatureTwoB");

const expandedconnectivity = document.querySelector(".expandconnectivity");

const expandableconnectivity = document.querySelector(".FeatureThreeA");

const expandedaudio = document.querySelector(".expandaudio");

const expandableaudio = document.querySelector(".FeatureThreeB");

const expandedinstrument = document.querySelector(".expandinstrument");

const expandableinstrument = document.querySelector(".FeatureThreeC");

const expandedcomfort = document.querySelector(".expandcomfort");

const expandablecomfort = document.querySelector(".FeatureThreeD");

const expandedsafety = document.querySelector(".expandsafety");

const expandablesafety = document.querySelector(".FeatureFourA");

const expandedwarranty = document.querySelector(".expandwarranty");

const expandablewarranty = document.querySelector(".FeatureFourB");

// Arrows

const arrowexpanded = document.querySelector(".arrow");

const arrowsecondexpanded = document.querySelector(".arrowsecond");

const arrowthirdexpanded = document.querySelector(".arrowthird");

const arrowfourthexpanded = document.querySelector(".arrowfourth");

const arrowfifththexpanded = document.querySelector(".arrowfifth");

const arrowsixthexpanded = document.querySelector(".arrowsixth");

const arrowseventhexpanded = document.querySelector(".arrowseventh");

const arroweightexpanded = document.querySelector(".arroweight");

const arrownineexpanded = document.querySelector(".arrownine");

const arrowtenexpanded = document.querySelector(".arrowten");

expandedperf.addEventListener("click", () => {
  expandableperf.classList.toggle("FeatureOneA-expanded");
  arrowexpanded.classList.toggle("arrowexpanded");
});

expandedhandling.addEventListener("click", () => {
  expandablehandling.classList.toggle("FeatureOneB-expanded");
  arrowsecondexpanded.classList.toggle("arrowexpanded");
});

expandedexterior.addEventListener("click", () => {
  expandableexterior.classList.toggle("FeatureTwoA-expanded");
  arrowthirdexpanded.classList.toggle("arrowexpanded");
});

expandedinterior.addEventListener("click", () => {
  expandableinterior.classList.toggle("FeatureTwoB-expanded");
  arrowfourthexpanded.classList.toggle("arrowexpanded");
});

expandedconnectivity.addEventListener("click", () => {
  expandableconnectivity.classList.toggle("FeatureThreeA-expanded");
  arrowfifththexpanded.classList.toggle("arrowexpanded");
});

expandedaudio.addEventListener("click", () => {
  expandableaudio.classList.toggle("FeatureThreeB-expanded");
  arrowsixthexpanded.classList.toggle("arrowexpanded");
});

expandedinstrument.addEventListener("click", () => {
  expandableinstrument.classList.toggle("FeatureThreeC-expanded");
  arrowseventhexpanded.classList.toggle("arrowexpanded");
});

expandedcomfort.addEventListener("click", () => {
  expandablecomfort.classList.toggle("FeatureThreeD-expanded");
  arroweightexpanded.classList.toggle("arrowexpanded");
});

expandedsafety.addEventListener("click", () => {
  expandablesafety.classList.toggle("FeatureFourA-expanded");
  arrownineexpanded.classList.toggle("arrowexpanded");
});

expandedwarranty.addEventListener("click", () => {
  expandablewarranty.classList.toggle("FeatureFourB-expanded");
  arrowtenexpanded.classList.toggle("arrowexpanded");
});
