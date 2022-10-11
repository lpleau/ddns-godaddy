function setup() {
    console.log('Running');

    loadJSON('list-domains', domData);
    loadJSON('list-hosts', hostData);
}

function domData(data) {
    let domQty = data.length;
    document.getElementById("domainQty").innerHTML = domQty + " Domains";
}

function hostData(data) {
    var hostQty = data.length;
    document.getElementById("hostQty").innerHTML = hostQty + " Sub-Domains";
}
