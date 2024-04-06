import { Client } from "../models/client";

class ClientController implements Client {
    constructor(
        // public idArg: number,
        public id: number,
        public name: string,
        public email: string,
        public phone: string,
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    async createClient(client: Client): Promise<Client> {
        return client;
    }
    
}