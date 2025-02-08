'use client'
// pages/assessment/personality.js
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export default function PersonalityAssessment() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    hobbies: '',
    interests: '',
    strengths: '',
    weaknesses: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/assesment/preference');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Personality & Aptitude Assessment</h1>
        
        <form onSubmit={handleSubmit}>
          <Card className="mb-6">
            <CardHeader>
              <h2 className="text-xl font-semibold">Your Profile</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block mb-2">Hobbies</label>
                <Textarea 
                  value={formData.hobbies}
                  onChange={(e) => setFormData({...formData, hobbies: e.target.value})}
                  placeholder="What do you enjoy doing in your free time?"
                />
              </div>
              
              <div>
                <label className="block mb-2">Interests</label>
                <Textarea 
                  value={formData.interests}
                  onChange={(e) => setFormData({...formData, interests: e.target.value})}
                  placeholder="What topics or activities interest you?"
                />
              </div>
              
              <div>
                <label className="block mb-2">Strengths</label>
                <Textarea 
                  value={formData.strengths}
                  onChange={(e) => setFormData({...formData, strengths: e.target.value})}
                  placeholder="What are you good at?"
                />
              </div>
              
              <div>
                <label className="block mb-2">Areas for Improvement</label>
                <Textarea 
                  value={formData.weaknesses}
                  onChange={(e) => setFormData({...formData, weaknesses: e.target.value})}
                  placeholder="What skills would you like to develop?"
                />
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center">
            <Button type="submit" size="lg">
              Continue to Preferences Assessment
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}