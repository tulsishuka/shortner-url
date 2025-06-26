

import { notFound, redirect  } from "next/navigation"
import clientPromise from "@/lib/mongodb"

export default async function Page({ params }) {
    const shorturl = (await params).shorturl
   
    const client = await clientPromise;
    const db = client.db("bitlinks")
    const collection = db.collection("url")
    const doc = await collection.findOne({shorturl})

   
    console.log(doc)
   

    if(!doc){
     
        console.log("not found ", shorturl);
        notFound();

    }
   
console.log("redirect to", doc.url)
redirect(doc.url)
    }
