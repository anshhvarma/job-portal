import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const POST = async (req: Request, { params }: { params: { assessmentId: string } }) => {
  try {
    const { userId } = await auth();
    const { assessmentId } = params;
    
    // Parse JSON only once
    const { hobbies, interests, strengths, areasForImprovement, type } = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const assessment = await db.assessment.update({
      where: {
        id: assessmentId,
        userId,
      },
      data: {
        hobbies,
        interests,
        strengths,
        areasForImprovement,
        type,
      },
    });

    return NextResponse.json(assessment);
  } catch (error) {
    console.log("[ASSESSMENT_POST]:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};