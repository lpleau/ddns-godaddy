function setup() {
    console.log('Running');

    loadJSON('../../domains-api', domData);
    loadJSON('../../domains-api', domAPITable);

    var buttonNewHost = select('#submitNewDomain');
    buttonNewHost.mousePressed(submitNewDomain);

    var buttoncreatedomain = select('#buttoncreatedomain');
    buttoncreatedomain.mousePressed(opennewhostmodal);

    var exitcreatedomain1 = select('#x-newhost-modal');
    exitcreatedomain1.mousePressed(exitnewhostmodal);

    var exitcreatedomain2 = select('#cancel-newhost-modal');
    exitcreatedomain2.mousePressed(exitnewhostmodal);
}

function submitNewDomain() {
    var domain = select('#domain').value();
    var apikey = select('#apikey').value();
    var apisecret = select('#apisecret').value();
    loadJSON('../add-api/' + domain + '/' + apikey + '/' + apisecret);
    location.reload();
}

function domData(data) {
    var options = data;
    console.log(data);
    var list = document.getElementById("SelectDomain");
    for (var i = 0; i < options.length; i++) {
        var opt = options[i];
	var el = document.createElement("option");
	el.textContent = opt;
	el.value = opt;
	list.appendChild(el);
    }
}

function domAPITable(data) {
    let placeholder = document.querySelector("#domain-output");
    let out = "";
    for(let domain of data) {
        out += `
            <tr>
                <td>${domain[0]}</td>
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