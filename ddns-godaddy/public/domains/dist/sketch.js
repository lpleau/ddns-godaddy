function setup() {
    console.log('Running');

    loadJSON('../../list-domains', domData);
    loadJSON('../../all', domListTable);

    var buttonNewHost = select('#submitNewHost');
    buttonNewHost.mousePressed(submitNewHost);

    var buttoncreatedomain = select('#buttoncreatehost');
    buttoncreatedomain.mousePressed(opennewhostmodal);

    var exitcreatedomain1 = select('#x-newhost-modal');
    exitcreatedomain1.mousePressed(exitnewhostmodal);

    var exitcreatedomain2 = select('#cancel-newhost-modal');
    exitcreatedomain2.mousePressed(exitnewhostmodal);
}

function submitNewHost() {
    var host = select('#host').value();
    var domain = select('#SelectDomain').value();
    loadJSON('../add-host/' + host + '/' + domain);
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