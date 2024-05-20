//button LS dan KS
//LS = Luas Segitiga & KS = Keliling Segitiga
function btnLS() {
    var LS = document.getElementById('btnLS');
    if (LS.style.display === 'none') {
        LS.style.display = 'block';
    } else {
        LS.style.display = 'none';
    }
} 
function btnKS() {
    var KS = document.getElementById('btnKS');
    if (KS.style.display === 'none') {
        KS.style.display = 'block';
    } else {
        KS.style.display = 'none'; 
    }
} 
//button untuk Rumus LS
//a = alas
//t = tinggi
//rl = rumus luas
//h = hasil
   function hitungL() {
    var a,t,h,luas,rl1,rl2,h;
        a = Number(document.getElementById("alas").value);
        t = Number(document.getElementById("tinggi").value);
        luas = 0.5 * a * t;
        rl1 = `L = 1/2 x a x t`;
        rl2 = `L = 1/2 x ${a} x ${t}`; 
        h = `L = ${luas}`;
    document.getElementById("rumus-1").textContent = rl1;
    document.getElementById("rumus-2").textContent = rl2;
    document.getElementById("hasil").textContent = h;
}
//button untuk Rumus KS
//s1 = sisi 1
//s2 = sisi 2
//s2 = sisi 3
//rk = rumus keliling
//h = hasil 
function hitungK(){
    var s1,s2,s3,keliling,rk1,rk2,h;
        s1 = Number(document.getElementById("sisi1").value);
        s2 = Number(document.getElementById("sisi2").value);
        s3 = Number(document.getElementById("sisi3").value);
        keliling = s1 + s2 + s3;
        rk1 = `K = S1 + S2 + S3`;
        rk2 = `K = ${s1} + ${s2} + ${s3}`;
        h = `K = ${keliling}`;
    document.getElementById("rumusK-1").textContent = rk1;
    document.getElementById("rumusK-2").textContent = rk2;
    document.getElementById("hasilK").textContent = h;
}
//button reset LS dan KS
//LS
function resetL() {
    document.getElementById("alas").value = '';
    document.getElementById("tinggi").value = '';
  
    document.getElementById("rumus-1").textContent = '';
    document.getElementById("rumus-2").textContent = '';
    document.getElementById("hasil").textContent = '';
}
//KS
//button reset LS dan KS
function resetK() {
    document.getElementById("sisi1").value = '';
    document.getElementById("sisi2").value = '';
    document.getElementById("sisi3").value = '';
  
    document.getElementById("rumusK-1").textContent = '';
    document.getElementById("rumusK-2").textContent = '';
    document.getElementById("hasilK").textContent = '';
}
