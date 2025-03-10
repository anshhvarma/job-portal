"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { z } from "zod";
import toast from "react-hot-toast";

const formSchema = z.object({
  type: z.string(),
});

export default function HomePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const createAssessment = async (type: string) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/assessment", { type });

      if (response.status !== 200) {
        throw new Error("Failed to create assessment");
      }

      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const handleCategorySelect = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("/api/assessment", values);
      if (response.data) {
        switch (values.type) {
          case 'Working Professional':
            router.push('/search');
            break;
          case 'exploring':
          case 'undecided':
            router.push(`/assessment/${response.data.id}`);
            break;
          default:
            break;
        }
      }
      toast.success("Assesment created successfully");
    } catch (error) {
      console.error((error as Error).message);
      toast.error("Something went wrong")
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Welcome to Career Guidance
        </h1>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <h2 className="text-xl font-semibold">Working Professional</h2>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                For currently employed individuals looking to explore new
                opportunities
              </p>
              <Button
                onClick={() =>
                  handleCategorySelect({ type: "Working Professional" })
                }
                className="w-full"
                disabled={loading}
              >
                {loading ? "Loading..." : "Select"}
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
            <h2 className="text-xl font-semibold">Student Exploring Career Options</h2>
            </CardHeader>
            <CardContent>
            <p className="mb-4">For students with some career ideas seeking guidance</p>
              <Button
                onClick={() =>
                  handleCategorySelect({ type: "exploring" })
                }
                className="w-full"
                disabled={loading}
              >
                {loading ? "Loading..." : "Select"}
              </Button>
            </CardContent>
          </Card>


          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
            <h2 className="text-xl font-semibold">Student with No Career Clarity</h2>
            </CardHeader>
            <CardContent>
            <p className="mb-4">For students seeking to discover their career path</p>

              <Button
                onClick={() =>
                  handleCategorySelect({ type: "undecided" })
                }
                className="w-full"
                disabled={loading}
              >
                {loading ? "Loading..." : "Select"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
