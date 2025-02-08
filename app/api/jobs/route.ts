// import { db } from "@/lib/db";
// import { auth } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";
// ``
// export const POST = async (req: Request) => {
//     try {
//         const { userId } = await auth();

//         const { title } = await req.json();

//         if (!userId) {
//             return new NextResponse("Unauthorized", { status: 401 });
//         }
//         if (!title) {
//             return new NextResponse("Title is missing", { status: 400 });
//         }

//         const job = await db.job.create({
//             data: {
//                 title,
//                 userId
//             }
//         });

//         return NextResponse.json(job);

//     } catch (error) {
//         console.error(`[JOB_POST]: ${error}`);
//         return new NextResponse("Internal Server Error", { status: 500 });
//     }
// }


import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    try {
        const { userId } = await auth();

        // **1. Handle potential null userId:**
        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const { title } = await req.json();

        // **2. Handle missing title (more robustly):**
        if (!title || typeof title !== 'string' || title.trim() === "") {  // Check for empty or whitespace-only titles
            return new NextResponse("Title is missing or invalid", { status: 400 });
        }

        // **3. Check db connection before query (Important):**
        if (!db) {  // Or a more specific check if your db library requires it
            console.error("[JOB_POST]: Database connection not available");
            return new NextResponse("Database connection error", { status: 500 });
        }

        const job = await db.job.create({
            data: {
                title,
                userId,
            },
        });

        // **4. Return a proper JSON response (more robust):**
        return NextResponse.json({ job }); // Wrap the job object in an object

    } catch (error) {
        console.error(`[JOB_POST]: ${error}`);
        return new NextResponse("Internal Server Error", { status: 500 }); // Generic error for production
    }
};