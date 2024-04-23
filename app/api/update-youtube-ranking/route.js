import { connectMongoDB } from "@/app/lib/mongodb";
import Channels from "@/app/models/channel";
import { NextResponse } from "next/server";

// localhost:3000/api/update-youtube-ranking
export async function POST(req) {
    try {
        await connectMongoDB();
        console.log("connectMongoDB API update-youtube-ranking");
        const {
            id_channel,
            name_channel,
            url_channel,
            url_video_present,
            thumbnail_channel,
            description_channel,
            enable_channel,
            hololive,
        } = await req.json();

        await Channels.create({
            id_channel,
            name_channel,
            url_channel,
            url_video_present,
            thumbnail_channel,
            description_channel,
            enable_channel,
            hololive,
        })

        return NextResponse.json({ message: "update channels" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "An error occurred while update channel subcribe" }, { status: 500 });
    }
}
