const bici = [
    {
        nome: 'Atala',
        peso: 15,
       
    },
    {
        nome: 'gravel',
        peso: 10,
        
    },
    {
        nome: 'Giant',
        peso: 7 ,
    }
];

let pesoBici = 0;
for (let i = 0 ; i < bici.length; i++) {
    if (bici[i].peso < bici[pesoBici].peso){
        pesoBici = i;
    }
}

console.log(bici[pesoBici]);

const {nome, peso} = bici[pesoBici];
const biciDom = document.getElementById('bici');
biciDom.innerHTML = `la bici più leggera è la ${nome} con il peso di ${peso} kg`; 