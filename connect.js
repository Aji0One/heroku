const MongoClient = require("mongodb").MongoClient;

module.exports={
    selectedDb:{},
    
   async connect () {
        try{
            const client= await MongoClient.connect(process.env.MONGODB_URL);
            this.selectedDb=client.db("guvi");
            console.log(this.selectedDb);
        }
        catch(err){
            console.error(err);
        }
    }
}

//mongodb+srv://Ajith:Mak123Atlas@cluster0.xqob74r.mongodb.net/?retryWrites=true&w=majority