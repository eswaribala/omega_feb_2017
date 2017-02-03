if (typeof HealthCare === 'undefined')
    HealthCare = {};

window.onload = init;
function init()
{
    HealthCare.view.display();
}
HealthCare.view = {
    display:function()
    {
        HealthCare.controller.createAjaxObject();
        setTimeout(viewData, 4000);
    }

}


function viewData()
{
    console.log(HealthCare.model);
    var table = document.createElement('Table');
    table.setAttribute("border", "2");
    jobj = JSON.parse(HealthCare.model);
    for(pos in jobj)
    {
        tr = document.createElement('tr');
        td = document.createElement('td');
        node = document.createTextNode(jobj[pos].id);
        td.appendChild(node);
        tr.appendChild(td);
        td = document.createElement('td');
        node = document.createTextNode(jobj[pos].title);
        td.appendChild(node);
        tr.appendChild(td);
        table.appendChild(tr);

    }
    var ref = document.getElementById('response');
    ref.appendChild(table);

}