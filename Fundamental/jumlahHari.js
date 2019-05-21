
// cara putra
// var hari = 510
// var tahun = Math.floor(hari/360)
// var bulan = Math.floor((hari-(tahun*360))/30)
// var minggu = Math.floor((hari-(tahun*360)-(bulan*30))/7)
// var harian = Math.floor((hari-(tahun*360)-(bulan*30)-(minggu*7)))

// console.log(tahun + ' Tahun, ' + bulan + ' Bulan, ' + minggu + ' Minggu, ' + harian + ' Hari');

// cara simpel
var hariAwal = Number(prompt("Masukan jumlah hari : "))

var tahun = Math.floor(hariAwal/360)
hari = hariAwal % 360
var bulan = Math.floor(hari/30)
hari = hari % 30
var minggu = Math.floor(hari/7)
hari = hari % 7

console.log("Jumlah Hari : "+hariAwal);
console.log("Ada berapa tahun ? "+tahun);
console.log("Ada berapa bulan ? "+bulan);
console.log("Ada berapa minggu ? "+minggu);
console.log("Ada berapa hari ? "+hari);




