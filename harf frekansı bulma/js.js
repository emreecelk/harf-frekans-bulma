let cumle = prompt("Bir cümle girin:");

let harfSayilari = {};

for (let harf of cumle) {
    harf = harf.toLowerCase();
    if (harf !== ' ') {
        if (harfSayilari[harf]) {
            harfSayilari[harf]++;
        } else {
            harfSayilari[harf] = 1;
        }
    }
}
for (let harf in harfSayilari) {
    console.log(harf + ": " + harfSayilari[harf]);
}
