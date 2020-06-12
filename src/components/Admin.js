import React from 'react'
import {TextInput,Button, Card}from 'react-materialize'
import {Stitch, AnonymousCredential,RemoteMongoClient,BSON} from "mongodb-stitch-browser-sdk"
function Admin(){
    db.collection('guest').find()
    return(
       <Card>
           <div>
               <h1>Guest List</h1>
           </div>
       </Card> 
    )
}
export default Admin