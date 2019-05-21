//  ================================= PERTEMUAN 2 =================================
//    =================================  Data Type  =================================
var x = 'halo'
var y = 'DUNIA'
var z = 12345

var hasilX = x.toUpperCase()    // Upper & Lower cara 1
console.log(hasilX)

console.log(y.toLowerCase());   // Upper & Lower cara 2

console.log(x.replace('ha','mi'));      // replace 'ha' pertama saja

console.log(x.replace(/ha/g, 'mi' ));   // replace seluruh 'ha' dalam variable x

console.log(z);
console.log(z.toString());      // Merubah INT > String
console.log(typeof(z.toString()));

console.log(''); // SHIFT+ ALT untuk duplicate line
console.log(''); // SHIFT+ ALT untuk duplicate line
console.log(''); // SHIFT+ ALT untuk duplicate line

var stringINT = '123'

console.log(stringINT);
console.log(parseInt(stringINT));       // String Angka > Integer
console.log(parseFloat(stringINT));     // String Angka > Float

var stringFLOAT = '123.45'

console.log(stringFLOAT);
console.log(parseFloat(stringFLOAT));   // String Float > Float
console.log(parseInt(stringFLOAT));     // String Float > Integer


console.log('halo dunia');
console.log(parseInt('halo dunia'));    // NaN = Not a Number


var hari = 'selasa'
var tgl = 16

console.log(tgl+tgl);           // Variable Angka bertemu Angka menjadi operasi matematika
console.log(hari + tgl);        // Variable Angka yg bertemu String berubah menjadi String
console.log(hari + ' ' + tgl);

var a = 12
var b = 2

console.log(a ** b); // X ** Y = X Pangkat Y
console.log('Hasil dari ' + a + b);     // Variable a & b berubah menjadi String karna bertemu data type lain
console.log('Hasil dari ' + (a + b));   // Variable angka dalam () dioperasikan dulu sebelum bertemu data type lain

// ================================= Operasi Matematika =================================

a++
a++
console.log(a);     // Increment

b--
b--
console.log(b);     // Decrement

a*= 2
console.log(a);     // a = a dikalikan 2

b+= 2
console.log(b);     // b = b ditambahkan 2

a/=2
console.log(2);     // a = a dibagi 2


// ================================= Math Object =================================

console.log(Math.abs(-4.7));    // Menghilangkan (-) Minus
console.log(Math.pow(8,2));     // 8 pangkat 2
console.log(Math.sqrt(64));     // Akar 2
console.log(Math.cbrt(8));      // Akar 3
console.log(Math.round(4.8));   // Pembulatan Matematika
console.log(Math.round(4.4));
console.log(Math.floor(4.7));   // Pembulatan ke bawah
console.log(Math.ceil(4.4));    // Pembulatan ke atas
console.log(Math.random());     // Random angka dari 0 - 0.9
console.log(Math.max(1,3,5,7,9));
console.log(Math.min(1,3,5,7,9));


let d = new Date()

console.log(d.getFullYear());
console.log(d);