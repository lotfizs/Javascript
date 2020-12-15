var crooksOgen = [1,2,3,4,5];
var crooksNeus = [1,2,3,4,5];
var crooksMond = [1,2,3,4,5];
var count = 0;

var crook1 = document.getElementById("crook1");
crook1.style.backgroundImage = "url('img/ogen/crookOgen1.png')";
var crook2 = document.getElementById("crook2");
crook2.style.backgroundImage = "url('img/neuzen/crookNeus1.png')";
var crook3 = document.getElementById("crook3");
crook3.style.backgroundImage = "url('img/monden/crookMond1.png')";

crook1.addEventListener("click", function() {
    crook1.style.backgroundImage = "url('img/ogen/crookOgen" + getCrookOgen() + ".png')";
});

crook2.addEventListener("click", function() {
    crook2.style.backgroundImage = "url('img/neuzen/crookNeus" + getCrookNeus() + ".png')";
});

crook3.addEventListener("click", function() {
    crook3.style.backgroundImage = "url('img/monden/crookMond" + getCrookMond() + ".png')";
});

function getCrookOgen() {
    if (count >= crooksOgen.length) {
        count = 1;
    } else {
        count++;
    }
    return count;
}
function getCrookNeus() {
    if (count >= crooksNeus.length) {
        count = 1;
    } else {
        count++;
    }
    return count;
}
function getCrookMond() {
    if (count >= crooksMond.length) {
        count = 1;
    } else {
        count++;
    }
    return count;
}
