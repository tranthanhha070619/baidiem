let arr = ['sony', 'samsung', 'oppo', 'nokia', 'iphone'];

function display() {
    let data = "";
    for (let i = 0; i < arr.length; i++) {
        data += '<tr>';
        data += '<td>' + arr[i] + '</td>';
        data += '<td>' + '<button id="edit" onclick="editData('+i+')">' + 'EDIT' + '</button>';
        data += '<td>' + '<button id="del" onclick="delData('+i+')">' + 'DEL' + '</button>';
        data += '</tr>';
    }
    document.getElementById('products').innerHTML = data;
    document.getElementById('counter').innerHTML = arr.length + " products";
}

function add() {
    let data = document.getElementById('inputData').value;
    arr.push(data);
    document.getElementById('inputData').value="";
    display();
}
function editData(item) {
    let data = prompt('input:');
    if(data){
        arr.splice(item,1, data);
    }
    display();
}
function delData(item) {
    arr.splice(item, 1);
    display();
}
display();