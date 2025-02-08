'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function PreferencesAssessment() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    currentJob: '',
    careerGoals: '',
    preferredIndustry: '',
    skills: '',
    experience: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/assesment/career-report');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Preferences & Experience Assessment</h1>
        
        <form onSubmit={handleSubmit}>
          <Card className="mb-6">
            <CardHeader>
              <h2 className="text-xl font-semibold">Career Preferences</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block mb-2">Current Job/Role (if any)</label>
                <Input 
                  value={formData.currentJob}
                  onChange={(e) => setFormData({...formData, currentJob: e.target.value})}
                  placeholder="What is your current position?"
                />
              </div>
              
              <div>
                <label className="block mb-2">Career Goals</label>
                <Textarea 
                  value={formData.careerGoals}
                  onChange={(e) => setFormData({...formData, careerGoals: e.target.value})}
                  placeholder="What are your career aspirations?"
                />
              </div>
              
              <div>
                <label className="block mb-2">Preferred Industry</label>
                <Input 
                  value={formData.preferredIndustry}
                  onChange={(e) => setFormData({...formData, preferredIndustry: e.target.value})}
                  placeholder="Which industry interests you most?"
                />
              </div>
              
              <div>
                <label className="block mb-2">Skills & Qualifications</label>
                <Textarea 
                  value={formData.skills}
                  onChange={(e) => setFormData({...formData, skills: e.target.value})}
                  placeholder="List your relevant skills and qualifications"
                />
              </div>
              
              <div>
                <label className="block mb-2">Work Experience</label>
                <Textarea 
                  value={formData.experience}
                  onChange={(e) => setFormData({...formData, experience: e.target.value})}
                  placeholder="Describe your work experience"
                />
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center">
            <Button type="submit" size="lg">
              Generate Career Report
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}