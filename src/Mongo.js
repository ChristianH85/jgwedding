import {Stitch, AnonymousCredential,RemoteMongoClient,BSON} from "mongodb-stitch-browser-sdk"
const
const client = Stitch.initializeDefaultAppClient('jgweddingstitch-stmub');
// Get a MongoDB Service Client
const mongodb = client.getServiceClient(
  RemoteMongoClient.factory,
  "mongodb-atlas"
);
// Get a reference to the blog database
const db = mongodb.db('weddingparty');