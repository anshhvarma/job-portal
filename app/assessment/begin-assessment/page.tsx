'use client'

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import axios from "axios"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

const formSchema = z.object({
  hobbies: z.string().min(1, "Hobbies are required"),
  interests: z.string().min(1, "Interests are required"),
  strengths: z.string().min(1, "Strengths are required"),
  areasForImprovement: z.string().min(1, "Areas for improvement are required"),
  currentRole: z.string().min(1, "Current role is required"),
  careerGoals: z.string().min(1, "Career goals are required"),
  preferredLocation: z.string().min(1, "Preferred location is required"),
  preferredIndustry: z.string().min(1, "Preferred industry is required"),
  skillAndQualifications: z.string().min(1, "Skills and qualifications are required"),
  workExperience: z.string().min(1, "Work experience is required"),
})

const AssessmentPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const { isSubmitting, isValid } = form.formState;

  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post('/api/assessment', values);
      toast.success("Assessment created successfully");
      router.push('/');
    } catch (error) {
      console.error((error as Error).message);
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
      <div className="bg-white rounded-lg shadow-md p-8 w-full"> 
        <h2 className="text-2xl font-semibold mb-6 text-center">Tell Us About Yourself</h2> 
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {[
              { name: "hobbies", label: "Hobbies", placeholder: "Your hobbies..." },
              { name: "interests", label: "Interests", placeholder: "Your interests..." },
              { name: "strengths", label: "Strengths", placeholder: "Your key strengths..." },
              { name: "areasForImprovement", label: "Areas for Improvement", placeholder: "Areas you want to improve..." },
              { name: "currentRole", label: "Current Role", placeholder: "Your current position..." },
              { name: "careerGoals", label: "Career Goals", placeholder: "Your career objectives..." },
              { name: "preferredLocation", label: "Preferred Location", placeholder: "Where you'd like to work..." },
              { name: "preferredIndustry", label: "Preferred Industry", placeholder: "Industry you want to work in..." },
              { name: "skillAndQualifications", label: "Skills & Qualifications", placeholder: "Your skills and qualifications..." }, 
              { name: "workExperience", label: "Work Experience", placeholder: "Your work experience..." },
            ].map((field) => (
              <FormField
                key={field.name}
                control={form.control}
                name={field.name as keyof z.infer<typeof formSchema>}
                render={({ field: fieldProps }) => (
                  <FormItem>
                    <FormLabel className="font-medium">{field.label}</FormLabel> 
                    <FormControl>
                      <Input
                        disabled={isSubmitting}
                        placeholder={field.placeholder}
                        className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        {...fieldProps}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            <div className="flex justify-center gap-x-4 mt-8"> 
              <Link href="/">
                <Button type="button" variant="ghost">Cancel</Button>
              </Link>
              <Button type="submit" disabled={!isValid || isSubmitting} className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md">
                Continue
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default AssessmentPage
