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


async function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function randomplayer() {

    const randomIndex = [...players].sort(() => Math.random() - 0.5)
    return {
        player1: randomIndex[0],
        player2: randomIndex[1],
        
        
    };
    
}

async function rounds() {
    const {player1, player2} = await randomplayer();
    
    for(let round = 1; round <= 5; round++) {
        let block = await getRandomBlock();
        await randomplayer();
        await wait(5000);
        console.log(`🏁 Corrida de Kart entre ${player1.name} e ${player2.name} Esta começando!... \n`)
        console.log(`\n 🏁 Rodada ${round} 🏁 \n`);
        await wait(5000);
        console.log(`\n Bloco: ${block}  \n`)
        await wait(4000);
        console.log(`\n Jogador ${player1.name} lançando o dado... \n`);
        let diceResult1 = await rollDice();

        await wait(5000);
        console.log(`\n Jogador ${player2.name} lançando o dado... \n`);
        let diceResult2 = await rollDice();
        
    }
};

async function rollDice() {
    const value = Math.floor(Math.random() * 6) + 1;
    console.log(`🎲 O dado foi lançado e o valor é: ${value} 🎲`);
    return { value };
}

async function getRandomBlock() {
    let random = Math.random();
    let result;

    switch (true) {
        case random < 0.33:
            result = "Reta";
            break
        case random < 0.66:
            result = "Curva"
            break
        default:
            result = "confronto"
        

    }
    return result;
}

(async function main() {
    //! await roda o primeira função e quando ela terminar, ele continua a execução do código com a funcão principal.
    console.log("🚀 Bem-vindo ao Mario Kart! 🚀");
   
    await rounds();
      

})()
