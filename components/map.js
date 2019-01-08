const service = require ('./service')

async function main(){
    try {
        
        const result = await service.obterPessoas('a')
        //const names = []

        //result.results.forEach(function(item){
        //    names.push(item.name)                  
        //});

        //const names = result.results.map(pessoa => pessoa.name);
        const names = result.results.map(function (pessoa){
            return pessoa.name
        });

        console.log('names', names)
    } catch (error) {
        console.error('ERROR', error)
    }
}

main()