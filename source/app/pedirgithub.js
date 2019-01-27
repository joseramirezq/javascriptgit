class Github {
    constructor(clientId, clienteSecret){
        this.client_id=clientId;
        this.cliente_secret=clienteSecret;

    }
    async fetchuser(user){
        const datospeticion = await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const userdate= await datospeticion.json();

        console.log(userdate);
        return userdate;

    }
}

module.exports= Github;