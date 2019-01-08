/*
0 - Obter o usuário
1 - Obter o numero de telefone de um usuário a partir do seu ID
2 - Obter o endereço de um usuário a partir do seu ID
*/

function obterUsuario(callback){
	setTimeout(function() {
		return callback (null,
		{
			id: 1,
			nome: "Paulo Diniz",
			dataNascimento: new Date()
		})
	}, 1000)
}

function obterTelefoneById(idUsuario, callback){
	setTimeout(() => {
		return callback (null,{
			telefone: '11111111',
			ddd: 11
		})
	}, 2000);
}

function obterEnderecoById(idUsuario, callback){
	setTimeout(() => {
		return callback (null,{
			rua: 'Rua dos bobos',
			numero: 0
		})
	}, 2000);
}

function resolverUsuario(error, usuario){
	console.log('usuario', usuario)
}

function resolverTelefone(error, telefone){
	console.log('telefone', telefone)
}

function resolverEndereco(error, endereco){
	console.log(endereco)
}


obterUsuario(function resolverUsuario(error, usuario){
	
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
