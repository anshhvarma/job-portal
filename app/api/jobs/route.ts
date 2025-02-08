import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    try {
        const { userId } = await auth();

        const { title } = await req.json();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }
        if (!title) {
            return new NextResponse("Title is missing", { status: 400 }); // Changed status to 400 for bad request
        }

        const job = await db.job.create({
            data: {
                title,
                userId
            }
        });

        return NextResponse.json(job);

    } catch (error) {
        console.error(`[JOB_POST]: ${error}`); // Fixed the logging statement
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
