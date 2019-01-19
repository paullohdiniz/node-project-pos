/*
0 - Obter o usuário
1 - Obter o numero de telefone de um usuário a partir do seu ID
2 - Obter o endereço de um usuário a partir do seu ID
*/

function obterUsuario(){
	return new Promise(function resolvePromise(resolve, reject){
		setTimeout(function() {
			return resolve (
			{
				id: 1,
				nome: "Paulo Diniz",
				dataNascimento: new Date()
			})
		}, 1000)
	})
	
}

function obterTelefoneById(idUsuario){
	return new Promise (function resolvePromise(resolve, reject){

		setTimeout(() => {
			return resolve(
			{
				telefone: '11111111',
				ddd: 11
			})
		}, 2000);
	})
	
}

function obterEnderecoById(idUsuario){
	return new Promise (function resolveEndereco(resolve, reject){
		setTimeout(() => {
			return resolve ({
				rua: 'Rua dos bobos',
				numero: 0
			})
		}, 2000);
	})
}

const usuarioPromise = obterUsuario()

usuarioPromise
	.then (function (usuario){
		return obterTelefoneById(usuario.id)
		 .then (function resolveTelefone(result){
			 return {
				 usuario:{
					 usuario: usuario.nome,
					 id: usuario.id
				 },
				 telefone: result
			 }
		 })
	})
	.then (function (resultado){
		return obterEnderecoById(resultado.usuario.id)
		.then(function resolveEndereco(result){
			return {
				usuario:  resultado.usuario,
				telefone: resultado.telefone,
				endereco: result
			}
		})
	})
	.then(function (resultados){
		console.log(`
		Nome: ${resultados.usuario.nome}
		Endereço: ${resultados.endereco.rua}, ${resultados.endereco.numero}
		Telefone: ${resultados.telefone.ddd}, ${resultados.telefone.telefone}
		`)
	})
	.catch(function (error){
		console.log('DEU RUIM')
	})

/*function resolverUsuario(error, usuario){
	console.log('usuario', usuario)
}

function resolverTelefone(error, telefone){
	console.log('telefone', telefone)
}

function resolverEndereco(error, endereco){
	console.log(endereco)
}*/


/*obterUsuario(function resolverUsuario(error, usuario){
	
	// null || "" || 0 == false
	if (error)
	{
		console.error('DEU RUIM', error)
		return;
	}
	
	obterTelefoneById(usuario.id, function resolverTelefone(error1, telefone){
		if (error1)
		{
			console.error('DEU RUIM TELEFONE', error1)
			return;
		}
		obterEnderecoById(usuario.id, function resolverEndereco(error2, endereco){
		if (error2)
		{
			console.error('DEU RUIM ENDERECO', error2)
			return;
		}
		
		console.log(`
		Nome: ${usuario.nome},
		Endereco: ${endereco.rua}, Numero: ${endereco.numero},
		Telefone: (${telefone.ddd}) ${telefone.telefone}
		`
		)
	})
	})
	
})
*/