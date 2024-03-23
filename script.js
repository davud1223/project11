let b = document.querySelector('.dollar');
b.onclick = function () {
    let netice2 =  ${manat.value} AZN = ${manat.value / 1.7} $;
    document.getElementById('result2').innerHTML = netice2;
}

let c = document.querySelector('.euro');
c.onclick = function () {
    let netice2 =  ${manat.value} AZN = ${manat.value / 1.85} €;
    document.getElementById('result2').innerHTML = netice2;
}

let d = document.querySelector('.lira');
d.onclick = function () {
    let netice2 =  ${manat.value} AZN = ${manat.value / 0.053} ₺;
    document.getElementById('result2').innerHTML = netice2;
}

let e = document.querySelector('.rubl');
e.onclick = function () {
    let netice2 =  ${manat.value} AZN = ${manat.value / 0.018} ₽;
    document.getElementById('result2').innerHTML = netice2
}