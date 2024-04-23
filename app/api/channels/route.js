import { connectMongoDB } from "@/app/lib/mongodb";
import Channel from "@/app/models/channel";
import { NextResponse } from "next/server";

const CHANNEL_GET_ALL = "http://localhost:8080/api/v1/public/channel/get-all";

export async function POST() {
    try {
        const { title, description } = await req.json();
        await connectMongoDB();
        await Channel.create({ title, description });
        return NextResponse.json({ message: "Topic Created" }, { status: 201 });
    } catch (error) {
        console.log("error: ", error)
    }
}

// get channel in MongoDB
// export async function GET() {
//     try {
//         await connectMongoDB();
//         const result = await Channel.find();
//         return NextResponse.json({ result });
//     } catch (error) {
//         console.log("error: ", error)
//     }
// }

// fetch API Spring Boot
export async function GET() {
    try {
        const response = await fetch(CHANNEL_GET_ALL); // Replace with your API endpoint URL
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch data from the API' });
    }
}

export default function handler(req, res) {
    if (req.method === 'POST') {
      // Process the form data
      const formData = req.body;
      // Perform any necessary operations with the form data, such as saving it to a database

      // Return a response
      res.status(200).json({ message: 'Form submitted successfully' });
    } else {
      // Handle non-POST requests
      res.status(405).json({ error: 'Method not allowed' });
    }
}
