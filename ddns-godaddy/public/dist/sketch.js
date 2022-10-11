function setup() {
    console.log('Running');

    loadJSON('list-domains', domData);
    loadJSON('list-hosts', hostData);
}

function domData(data) {
    var options = data;
    for (var i = 0; i < options.length; i++) {
        var opt = options[i];
	var el = document.createElement("option");
	el.textContent = opt;
	el.value = opt;
    let domQty = options.length;
    document.getElementById("domainQty").innerHTML = domQty + " Domains";
    }
}

function hostData(data) {
    var options = data;
    for (var i = 0; i < options.length; i++) {
        var opt = options[i];
	var el = document.createElement("option");
	el.textContent = opt;
	el.value = opt;
    let hostQty = options.length;
    document.getElementById("hostQty").innerHTML = hostQty + " Sub-Domains";
    }
}
