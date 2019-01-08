const service = require ('./service')

async function main(){
    try{
        const resul = await service.obterPessoas('a') 
        const names = []
        for (let i = 0 ; i <= resul.results.length -1; i++){
            const pessoa = resul.results[i]
            names.push(pessoa.name)
        }
        console.log('Names', names)
    }
    catch(error){
        console.error('ERROR', error);
    }
}

async function main(){
    try{
        const resul = await service.obterPessoas('a') 
        const names = []
        for (let i = 0 in resul.results.length){
            const pessoa = resul.results[i]
            names.push(pessoa.name)
        }
        console.log('Names', names)
    }
    catch(error){
        console.error('ERROR', error);
    }
}

async function main(){
    try{
        const resul = await service.obterPessoas('a') 
        const names = []
        console.time('forof')
        for (pesssoa of resul.results){
            names.push(pessoa.name)
        }
        console.timeEnd('forof')
        console.log('Names', names)
    }
    catch(error){
        console.error('ERROR', error);
    }
}

main()