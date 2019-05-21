var arrData = [
    {nama: 'Ferdinanda', umur: 27, job: 'CFO'},
    {nama: 'Alun', umur: 33, job: 'CTO'},
    {nama: 'Abang', umur: 24, job: 'CMO'},
    {nama: 'Mirele', umur: 29, job: 'COO'},
    {nama: 'Sukarno', umur: 37, job: 'CEO'},
];

// SORTING ARRAY BERDASARKAN UMUR
var testUmur = arrData.map(val => {
    return `${val.umur}`
}) //menggambil umur dari arrData dan menjadi array baru
var testUmur = testUmur.sort(function(a,b){return a-b})
var hasil = []
for (let i = 0; i < testUmur.length; i++) {
    for (let j = 0; j < arrData.length; j++) {
        if (testUmur[i] == arrData[j].umur) {
            hasil.push(arrData[j])
        }
    }
}
console.log(hasil);
console.log();

//SORTING ARRAY BERDASARKAN NAMA
var testNama = arrData.map(val => {
    return `${val.nama}`
}) //menggambil umur dari arrData dan menjadi array baru
var testNama = testNama.sort()
var hasil = []
for (let i = 0; i < testNama.length; i++) {
    for (let j = 0; j < arrData.length; j++) {
        if (testNama[i] == arrData[j].nama) {
            hasil.push(arrData[j])
        }
    }
}
console.log(hasil);


// var numbers = [1, 2, 3, 4, 5]

// var hasil = numbers.reduce((total, num) => {
//     console.log('total = '+total);
//     console.log('num = '+num);
//     console.log('');
//     return total + num
// })
// console.log('');
// console.log('hasil = '+hasil);


// var tiga = (x, y, z) => {
//     console.log(x + (y + z));
// }

// tiga('Angka ',12,3)









