const maps = []

const players = [
    {
        name: 'Mario',
        velocidade: 4,
        manobrabilidade: 3,
        poder: 3,
        score: 0
    },
    {
        name: 'Luigi',
        velocidade: 3,
        manobrabilidade: 4,
        poder: 4,
        score: 0 

    },
    {
        name: 'Peach',
        velocidade: 3,
        manobrabilidade: 5,
        poder: 2,
        score: 0
    },
    {
        name: 'Bowser',
        velocidade: 5,
        manobrabilidade: 2,
        poder: 5,
        score: 0
    },
    {
        name: 'Yoshi',
        velocidade: 4,
        manobrabilidade: 4,
        poder: 3,
        score: 0
    },
    {
        name: 'Toad',
        velocidade: 2,
        manobrabilidade: 5,
        poder: 2,
        score: 0
    },
    {
        name: 'Donkey Kong',
        velocidade: 5,
        manobrabilidade: 3,
        poder: 4,
        score: 0
    },
]


async function randomplayer() {

    const randomIndex = [...players].sort(() => Math.random() - 0.5)
    return {
        player1: randomIndex[0],
        player2: randomIndex[1]
    } 

};
async function rounds() {
    for(let round = 1; round <= 5; round++) {
        console.log(`\n 🏁 Rodada ${round} 🏁 \n`);
        await rollDice();
        
    }

};


async function rollDice() {
    return { 
        value: Math.floor(Math.random() * 6) + 1,
        console: console.log(`🎲 O dado foi lançado e o valor é: ${Math.floor(Math.random() * 6) + 1} 🎲`)
    }
}

(async function main() {

    //! await roda o primeira função e quando ela terminar, ele continua a execução do código com a funcão principal.
    const {player1, player2} = await randomplayer();
    console.log(`🏁 Corrida de Kart entre ${player1.name} e ${player2.name} Esta começando!... \n`);
    await rounds(); 

})()
