//  ====================================== PERTEMUAN 3 ======================================
// ==================================== Logic Operation ====================================

var x = 5
var y = '5'
var z = 6

console.log(x===y && y<z);
console.log(x===y || y<z);
console.log(!(x===y || y<z));

// =================================== IF, Else If, Switch Case ===================================

var umur = 25

if (umur < 18 ){
    console.log('Masih dibawah umur');
} else if (umur > 18){
    console.log('Sudah cukup umur');
} else if (umur == 18){
    console.log('Umur 18 tahun');
}

if (umur < 18){
    console.log('Masih dibawah umur');
} else if (umur == 18){
    console.log('Umur 18 Tahun');
} else if (umur > 18 && umur < 25){
    console.log('Umur diantara 18 - 24 tahun');
} else {
    console.log('Umur diatas 24 Tahun');
}

var job = 'biduan'

switch(job){
    case 'guru' :
        console.log('Tugasnya Mengajar');
        break
    case 'supir' :
        console.log('Tugasnya Menyupir');
        break
    case 'polisi' :
        console.log('Tugasnya mengatur lalu lintas');
        break
    default :
        console.log('Ada aja kerjaannya');
}   