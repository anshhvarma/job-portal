
import Box from "@/components/box"
import CustomBreadCrum from "@/components/custom-breadcrumb"
import { auth, currentUser } from "@clerk/nextjs/server"
import Image from "next/image"
import { redirect } from "next/navigation"
import NameForm from "./_components/name-form"
import { db } from "@/lib/db"
import EmailForm from "./_components/email-form"
import ContactForm from "./_components/contact-form"
import SkillsForm from "./_components/skills-form"

const ProfilePage = async () => {

  const {userId} = await auth();
  const user = await currentUser();

  if(!userId) {
    redirect("/sign-in")
  }

    let profile = await db.userProfile.findUnique({
      where:{
        userId
      },
      include :{
        resumes:{
          orderBy:{
            createdAt: "desc"
          }   
        }
      }
    })
  return (
    <div className="flex-col p-4 md:p-8 items-center  justify-centerflex">
     <Box>
     <CustomBreadCrum breadCrumPage="My Profile"/>
     </Box>

     <Box className="flex-col p-4 rounded-md border mt-8 w-full space-y-6">
      {
        user && user.hasImage && (
          <div className="aspect-square w-24 h-24 rounded-full shadow-md relative overflow-hidden">
            <Image 
              fill
              className="object-cover"
              alt="User Profile Image"
              src={user.imageUrl}
            />
          </div>
        )
      }

      <NameForm initialData={profile} userId={userId}/>
      <EmailForm initialData={profile} userId={userId}/>
      <ContactForm initialData={profile} userId={userId}/>
      <SkillsForm initialData={profile} userId={userId}/>
     </Box>
    </div>
  )
}

export default ProfilePage