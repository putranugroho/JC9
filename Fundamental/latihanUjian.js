var arrManusia = [], arrHewan = []

function funManusia() {
    var nama = document.getElementById('name').value
    var usia = document.getElementById('age').value
    var cekgender = document.getElementsByName('gender')    
    var gender = '' 
    var pekerjaan = document.getElementById('job').value
    
    for (let i = 0; i < cekgender.length; i++) {
        if (cekgender[i].checked == true) {
            gender = cekgender[i].value
        }
        
    }
    
    arrManusia.push({
        nama,usia,gender,pekerjaan
    })
    
    show(arrManusia, 'hasil')

}

function funHewan() {
    var nama = document.getElementById('name2').value
    var usia = document.getElementById('age2').value
    var cekgender = document.getElementsByName('gender2')    
    var gender = '' 
    var cekStatus = document.getElementsByName('status')
    var pekerjaan = ''

    for (let i = 0; i < cekgender.length; i++) {
        if (cekgender[i].checked == true) {
            gender = cekgender[i].value
        }
    }
    
    for (let j = 0; j < cekStatus.length; j++) {
        if (cekStatus[j].checked == true) {
            pekerjaan = cekStatus[j].value
        }
    }

    arrHewan.push({
        nama,usia,gender,pekerjaan
    })
 
    show(arrHewan,'hasil2')

}

var show = (arrei, target) =>{
    var list = ''

    for (let i = 0; i < arrei.length; i++) {
        list += `
        <tr>
            <td>${arrei[i].nama}</td>
            <td>${arrei[i].usia}</td>
            <td>${arrei[i].gender}</td>
            <td>${arrei[i].pekerjaan}</td>
        </tr>
        `
        document.getElementById(target).innerHTML= list
    }

}