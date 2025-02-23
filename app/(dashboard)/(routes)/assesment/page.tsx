'use client'

import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import axios from 'axios';

export default function HomePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const createAssessment = async (type: string) => {
    try {
      setLoading(true);
      const response = await axios.post('/api/assessment', { type });

      if (response.status !== 200) {
        throw new Error('Failed to create assessment');
      }

      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const handleCategorySelect = async (type: string) => {
    const assessment = await createAssessment(type);
    if (assessment) {
      switch (type) {
        case 'professional':
          router.push('/assesment/dashboard');
          break;
        case 'exploring':
          router.push('/assesment/career-library');
          break;
        case 'undecided':
          router.push('/assesment/career-library');
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Welcome to Career Guidance</h1>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <h2 className="text-xl font-semibold">Working Professional</h2>
            </CardHeader>
            <CardContent>
              <p className="mb-4">For currently employed individuals looking to explore new opportunities</p>
              <Button 
                onClick={() => handleCategorySelect('professional')}
                className="w-full"
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Select'}
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
                onClick={() => handleCategorySelect('exploring')}
                className="w-full"
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Select'}
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
                onClick={() => handleCategorySelect('undecided')}
                className="w-full"
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Select'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}