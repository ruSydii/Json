// let mahasiswa = {
//     nama: "didi",
//     nrp: "030403023",
//     email: "didiperdana86@gmail.com"
// }

// console.log(JSON.stringify(mahasiswa));

// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         let mahasiswa = JSON.parse(this.responseText);
//         console.log(mahasiswa);
//     }
// }
// xhr.open('GET', 'dumy.json', true);
// xhr.send();

$.getJSON('dumy.json', function (data) {
    console.log(data);
});