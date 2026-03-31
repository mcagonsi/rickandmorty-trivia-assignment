import { MongoClient, ServerApiVersion } from 'mongodb';

export async function connectToDB() {
    const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@serverside.7rxsmdj.mongodb.net/?appName=serverside`;

    const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }    });
    
    await client.connect();
    
    const db = client.db("rickmorty");

    return { client, db };
}


