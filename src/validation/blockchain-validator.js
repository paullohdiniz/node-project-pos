let error = [];

function ValidationBlockchain(){
    error = [];
}

ValidationBlockchain.prototype.validablockschain = (value, message) =>{
    if(!value || value.length <= 0)
        error.push({message: message});
}

module.exports = ValidationBlockchain;