// import { db } from "@/lib/db";
// import { auth } from "@clerk/nextjs/server"
// import { NextResponse } from "next/server"
// import Groq from 'groq-sdk';

// const groq = new Groq({
//   apiKey: process.env.GROQ_API_KEY
// });

// export const POST = async () => {
//     try {
//         const { userId } = await auth();
//         if (!userId) {
//             return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//         }

//         const assessment = await db.assessment.findUnique({
//             where: { id: userId }
//         });

//         if (!assessment) {
//             return NextResponse.json({ error: "Assessment not found" }, { status: 404 });
//         }

//         const chatCompletion = await groq.chat.completions.create({
//             messages: [
//                 {
//                     role: "system",
//                     content: `You are an expert career counselor providing personalized, strategic career guidance. 
//                     Your recommendations should be:
//                     - Highly specific and tailored to the individual's profile
//                     - Based on current market trends and opportunities
//                     - Actionable and realistic
//                     - Considerate of the person's current skills, aspirations, and potential

//                     For each suggestion, provide:
//                     1. Recommended Career Domains
//                     2. Specific Job Roles
//                     3. Potential Employers/Industries
//                     4. Skill Development Paths
//                     5. Short-term and Long-term Career Strategies
//                     6. Potential Challenges and Mitigation Strategies

//                     Format your response in a clear, professional manner that is encouraging and motivational.`
//                 },
//                 {
//                     role: "user",
//                     content: JSON.stringify({
//                         hobbies: assessment.hobbies,
//                         interests: assessment.interests,
//                         strengths: assessment.strengths,
//                         areasForImprovement: assessment.areasForImprovement,
//                         currentRole: assessment.currentRole,
//                         careerGoals: assessment.careerGoals,
//                         preferredLocation: assessment.preferredLocation,
//                         preferredIndustry: assessment.preferredIndustry,
//                         skillAndQualifications: assessment.skillAndQualifications,
//                         workExperience: assessment.workExperience,
//                     })
//                 }
//             ],
//             model: "llama3-70b-8192",
//             temperature: 0.7,
//             max_tokens: 1500,
//             top_p: 1,
//             stop: null,
//             stream: false
//         });

//         const careerSuggestions = chatCompletion.choices[0].message.content;

//         const suggestionRecord = await db.careerSuggestion.create({
//             data: {
//                 userId,
//                 suggestions: careerSuggestions || "",
//                 assessmentId: assessment.id
//             }
//         });

//         return NextResponse.json({ 
//             id: suggestionRecord.id,
//             suggestions: careerSuggestions,
//             createdAt: suggestionRecord.createdAt 
//         });

//     } catch (error) {
//         console.error(`[CAREER_SUGGESTIONS_POST]: ${error}`);
//         return NextResponse.json({ 
//             error: "Failed to generate career suggestions",
//             details: error instanceof Error ? error.message : "Unknown error"
//         }, { status: 500 });
//     }
// }

// export const GET = async () => {
//     try {
//         const { userId } = await auth();
//         if (!userId) {
//             return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//         }

//         const latestSuggestion = await db.careerSuggestion.findFirst({
//             where: { userId },
//             orderBy: { createdAt: 'desc' }
//         });

//         if (!latestSuggestion) {
//             return NextResponse.json({ error: "No suggestions found" }, { status: 404 });
//         }

//         return NextResponse.json(latestSuggestion);

//     } catch (error) {
//         console.error(`[CAREER_SUGGESTIONS_GET]: ${error}`);
//         return NextResponse.json({ 
//             error: "Failed to retrieve career suggestions",
//             details: error instanceof Error ? error.message : "Unknown error"
//         }, { status: 500 });
//     }
// }