import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.NEXT_PUBLIC_DB_URL as string;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
};

const client = new MongoClient(uri, options);

(async function () {
  try {
    await client.connect();
    console.log("database connection successful");
  } catch (err) {
    console.log("failed to connect database.");
  }
})();

export const categoryCollection = client
  .db(process.env.NEXT_PUBLIC_MONGODB_DB)
  .collection("categoryCollection");
