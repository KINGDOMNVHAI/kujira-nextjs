import { connectMongoDB } from "@/app/lib/mongodb";
import { db } from "@/app/lib/firebase";
import Channel from "@/app/models/channel";
import { NextResponse } from "next/server";

// MongoDB
export async function GET() {
    try {
        await connectMongoDB();
        const result = await Channel.find(); // get channel in DB
        return NextResponse.json(result);
    } catch (error) {
        console.log("error: ", error)
    }
}

// Firebase (not done)
// export async function GET() {
//     try {
//         await connectFirebase();
//         const q = query(collection(db, 'channels'));
//         console.log(q)
//         return q();
//     } catch (error) {
//         console.log("error: ", error)
//     }
// }
