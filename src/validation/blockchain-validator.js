let error = [];

function ValidationBlockchain(){
    error = [];
}

ValidationBlockchain.prototype.validablockschain = (value, message) =>{
    console.log('Validacao: ' + message);    
    if(!value || value.length <= 0)
        error.push({message: message});
    
    validablock(value);
}

var resultado = [];

function validablock(obj) {
    for (var propriedade in obj) {
        if (obj.hasOwnProperty(propriedade)) {
            if (typeof obj[propriedade] == "block_list_id" && obj["block_list_id"] != 1) {
                validablock(obj[propriedade]);
            } else {
            resultado.push(obj[propriedade]);
            }
        }
    }
    console.log('RESULT: ' + JSON.stringify(resultado));
}

console.log(JSON.stringify(resultado));
 
module.exports = ValidationBlockchain;