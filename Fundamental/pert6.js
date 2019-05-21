// // ======================================= Pertemuan 6 =======================================
// // ========================================= Function ========================================

// function sayHello(teks) {
//     console.log("Halo " + teks);
// }
// sayHello('nigga')

// function hasilRandom() {
//     var hasil = Math.floor(Math.random() * 10)

//     return hasil
// }

// var output = hasilRandom()
// console.log(output);

// function jumlah(x, y) {
//     console.log('Nilai X : '+x);
//     console.log('Nilai Y : '+y);
    
//     var hasil = x + y
//     return hasil
// }

// var output = jumlah(3,7)
// console.log(output);

//
// function jumlah(x, y) {
//     console.log('Nilai X : '+x);
//     console.log('Nilai Y : '+y);
    
//     var hasil = x + y
//     console.log('dari dalam func : '+ hasil);
    
// }
// console.log(jumlah(3,7))

// // call back function
// function satu(x,fn){
//     console.log('Nilai dari X : ' + x);
    
//     fn()
// }

// function dua() {
//     console.log('Log dari function kedua');
// }

// // satu(5,dua);

// function tiga(a) {
//     console.log('Nilai a : ' + a);
    
//     empat(a)
// }

// function empat(b) {
//     console.log(b + ' kali 2 adalah = ' + (b*2));
    
// }

// function delapan() {
    
//     return function() {
//         console.log("Function dari return Function delapan");
//     }

// }

// var hasil = delapan()
// hasil()

// function pangkat(x,y) {
//     if (y==1) {
//         return x;
//     } else {
//         return x = x * pangkat(x,y-1)
//     }
// }
// console.log(pangkat(12,3));

function last() {
    console.log('Dari function last');
    return 4
}

function terakhir() {
    console.log('Dari function terakhir');
    return 5
}

function please(unknown) {
    console.log('Isi dari unknown adalah ' + unknown);
    
}

console.log(please(last));         // function last masuk kedalam function please
console.log(please(terakhir()));   // hanya hasil dari function terakhir yg masuk ke dalam function please
