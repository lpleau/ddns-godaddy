function setup() {
    console.log('Running');

    loadJSON('list-domains', domData);
    loadJSON('list-hosts', hostData);
    loadJSON('all', domListTable);

    var buttonNewAPI = select('#submitNewAPI');
    buttonNewAPI.mousePressed(submitNewAPI);

    var buttonNewHost = select('#submitNewHost');
    buttonNewHost.mousePressed(submitNewHost);

    var buttoncreatedomain = select('#buttoncreatehost');
    buttoncreatedomain.mousePressed(opennewhostmodal);

    var exitcreatedomain1 = select('#x-newhost-modal');
    exitcreatedomain1.mousePressed(exitnewhostmodal);

    var exitcreatedomain2 = select('#cancel-newhost-modal');
    exitcreatedomain2.mousePressed(exitnewhostmodal);
}

function submitNewAPI() {
    var domain = select('#apidomain').value();
    var apikey = select('#apikey').value();
    var apisecret = select('#apisecret').value();
    loadJSON('add-api/' + domain + '/' + apikey + '/' + apisecret);
}

function submitNewHost() {
    var host = select('#host').value();
    var domain = select('#SelectDomain').value();
    loadJSON('add-host/' + host + '/' + domain);
}

function domData(data) {
    var options = data;
    var list = document.getElementById("SelectDomain");
    for (var i = 0; i < options.length; i++) {
        var opt = options[i];
	var el = document.createElement("option");
	el.textContent = opt;
	el.value = opt;
	list.appendChild(el);
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

function domListTable(data) {
    let placeholder = document.querySelector("#domain-output");
    let out = "";
    for(let domain of data) {
        out += `
            <tr>
                <td>${domain[1]}</td>
                <td>${domain[2]}</td>
            </tr>
        `;
    }
    placeholder.innerHTML = out;
}

function opennewhostmodal() {
    document.getElementById("newhost-modal").style = "display: block;";
}

function exitnewhostmodal() {
    document.getElementById("newhost-modal").style = "display: none;";
}