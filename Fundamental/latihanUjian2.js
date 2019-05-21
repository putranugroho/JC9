var arrData = [
    {nama: 'Ferdinanda', umur: 27, job: 'CFO'},
    {nama: 'Alun', umur: 33, job: 'CTO'},
    {nama: 'Toma', umur: 24, job: 'CMO'},
    {nama: 'Mirele', umur: 29, job: 'COO'},
    {nama: 'Sukarno', umur: 37, job: 'CEO'}
              ];
    
var arrJob = ['All' , 'CEO', 'CTO', 'CMO', 'COO', 'CFO' ]

// var table = document.getElementById('myTable')
// var tr = table.getElementsByTagName('tr')
// var td = tr.getElementsByTagName('td')
    

var funShow = () => {
    var listMan = arrData.map((val)=>{
        return `<tr>
                    <td>${val.nama}</td>
                    <td>${val.umur}</td>
                    <td>${val.job}</td>
                </tr>`
    })

    var listJob = arrJob.map(val => {
        return `
        <option>${val}</option>
        `
    })

    document.getElementById('here').innerHTML = listMan.join('')
    document.getElementById('job').innerHTML = listJob.join('')
    
}

function fn1() {
    var nama = document.getElementById('nama').value
    var umur = document.getElementById('umur').value
    var job = document.getElementById('jobT').value
    var checkJob = job.toLowerCase()
    

    if (arrJob.includes(checkJob) == false) {
        arrJob.push(job)
    }

    arrData.push({
        nama,umur,job
    })

    funShow()
    
}

function fn2() {
    var filter = document.getElementById('search').value
    var test = []

    for (let i = 0; i < arrData.length; i++) {
        var filterNama = arrData[i].nama.toLowerCase()
        var inputNama = filter.toLowerCase()
        
        if(filterNama.includes(inputNama)){
            test.push(arrData[i])
        }
    }

    var test = test.map(val => {
        return `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.job}</td>
        </tr>`
    })
    
    document.getElementById('here').innerHTML= test.join('')
    
}

function fn3() {
    var filter1 = document.getElementById('num1').value
    var filter2 = document.getElementById('num2').value
    // var test = []

    if (!(filter1 == '' || filter2 == '')) {
        // for (let i = 0; i < arrData.length; i++) {
        //     var filterUmur = arrData[i].umur
    
        //     if (filter1<= filterUmur && filter2 >= filterUmur) {
        //         test.push(arrData[i])
        //     }
            
        // }   

        var test = arrData.filter(val => {
            return ((filter1<= val.umur && filter2 >= val.umur ))
        })

    
    } else (
        test = arrData
    )

    var test = test.map(val => {
        return `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.job}</td>
        </tr>`
    })
    
    document.getElementById('here').innerHtTML= tes.join('')

}

function fn4() {
    var inputJob = document.getElementById('job').value
    // var test = []

    // for (let i = 0; i < arrData.length; i++) {
    //     var Job = arrData[i].job

    //     if (Job.includes(inputJob)) {
    //         test.push(arrData[i])
    //     } else if (inputJob == 'All') {
    //         test.push(arrData[i])
    //     }        
    // }

    if (inputJob == 'All') {
        var list = arrData     
    } else {
        var list = arrData.filter(val => {
            return (val.job.includes(inputJob))
        })
    }
 

    list = list.map(val => {
        return `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.job}</td>
        </tr>`
    })
    
    document.getElementById('here').innerHTML= list.join('')

}

funShow()