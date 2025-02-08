'use client'
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function CareerLibrary() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Career Library</h1>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Popular Career Paths</h2>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Technology & IT</li>
                <li>Healthcare & Medicine</li>
                <li>Business & Finance</li>
                <li>Creative Arts & Design</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Industry Insights</h2>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Emerging Trends</li>
                <li>Salary Ranges</li>
                <li>Required Skills</li>
                <li>Education Requirements</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-8 text-center">
          <Button 
            onClick={() => router.push('/assesment/personality')}
            size="lg"
          >
            Start Assessment Process
          </Button>
        </div>
      </div>
    </div>
  );
}