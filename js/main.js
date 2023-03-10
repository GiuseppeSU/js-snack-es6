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

const {nome, peso,} = bici;
const risultato = [];


bici.forEach(elemento => {
    if (elemento.peso <= 7) {
        risultato.push(`${elemento.nome} ${elemento.peso} è la più leggera`);
    } else {
        risultato.push(`${elemento.nome} ${elemento.peso} troppo pesante`);
    }
});

console.log(risultato);
