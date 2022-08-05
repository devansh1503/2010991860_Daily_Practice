function fnAdd() {
    let l = document.getElementById("l").value;
    let r = document.getElementById("r").value;
    let m = document.getElementById("m").value;

    l = Number(l);
    r = Number(r);
    m = Number(m);
    var count = 0;
    
    for (let i = l; i <= r; i++) {
        if (i % m == 0) {
            count = count+1;


        }

        document.getElementById("p1").innerHTML = count;


    }




}