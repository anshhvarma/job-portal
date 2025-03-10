'use client'
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Check, ChevronRight, ChevronLeft } from 'lucide-react';

const CareerAssessment = ({ params }: { params: { assessmentId: string } }) => {
  // State for tracking current page
  const [currentPage, setCurrentPage] = useState(0);
  
  // Form data
  const [formData, setFormData] = useState({
    // Personality & Aptitude
    hobbies: '',
    interests: '',
    strengths: '',
    improvements: '',
    
    // Preferences & Experience
    currentRole: '',
    careerGoals: '',
    preferredIndustry: '',
    skills: '',
    experience: ''
  });

  // Handle input changes
  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  // Handle form submission
  const handleSubmit = () => {
    // This would typically process the data or send it to a backend
    console.log("Assessment completed:", formData);
    setCurrentPage(3); // Show results page
  };

  // Pages of the assessment
  const pages = [
    // Page 0: Introduction
    <Card key="intro" className="w-full bg-white shadow-md">
      <CardHeader className="text-center bg-blue-50 border-b border-blue-100">
        <h1 className="text-3xl font-bold text-blue-800">Career Assessment Tool</h1>
        <p className="text-gray-600 mt-2">
          Discover your ideal career path based on your personality, aptitude, and preferences
        </p>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div className="text-gray-700 space-y-4">
          <p className="font-medium">This assessment will help you:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Identify your personal strengths and areas for growth</li>
            <li>Align your interests with potential career paths</li>
            <li>Recognize patterns in your preferences and experiences</li>
            <li>Receive personalized career recommendations</li>
          </ul>
        </div>
        
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Note:</span> This assessment takes approximately 5-10 minutes to complete. Your thoughtful responses will lead to more accurate results.
          </p>
        </div>
        
        <div className="flex justify-center pt-4">
          <Button 
            onClick={() => setCurrentPage(1)} 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2"
          >
            Start Assessment <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>,
    
    // Page 1: Personality & Aptitude Assessment
    <Card key="personality" className="w-full bg-white shadow-md">
      <CardHeader className="bg-blue-50 border-b border-blue-100">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-blue-800">Personality & Aptitude</h2>
          <div className="text-sm text-gray-500">Step 1 of 2</div>
        </div>
        <div className="w-full bg-gray-200 h-2 mt-2 rounded-full">
          <div className="bg-blue-600 h-2 rounded-full w-1/2"></div>
        </div>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Hobbies</label>
          <Textarea 
            value={formData.hobbies}
            onChange={(e) => handleChange('hobbies', e.target.value)}
            placeholder="What do you enjoy doing in your free time?"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        
        <div>
          <label className="block text-gray-700 font-medium mb-2">Interests</label>
          <Textarea 
            value={formData.interests}
            onChange={(e) => handleChange('interests', e.target.value)}
            placeholder="What topics or activities interest you?"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        
        <div>
          <label className="block text-gray-700 font-medium mb-2">Strengths</label>
          <Textarea 
            value={formData.strengths}
            onChange={(e) => handleChange('strengths', e.target.value)}
            placeholder="What are you good at?"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        
        <div>
          <label className="block text-gray-700 font-medium mb-2">Areas for Improvement</label>
          <Textarea 
            value={formData.improvements}
            onChange={(e) => handleChange('improvements', e.target.value)}
            placeholder="What skills would you like to develop?"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        
        <div className="flex justify-between pt-4">
          <Button 
            onClick={() => setCurrentPage(0)} 
            variant="outline"
            className="border-gray-300 text-gray-600"
          >
            <ChevronLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <Button 
            onClick={() => setCurrentPage(2)} 
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Continue <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>,
    
    // Page 2: Preferences & Experience Assessment
    <Card key="preferences" className="w-full bg-white shadow-md">
      <CardHeader className="bg-blue-50 border-b border-blue-100">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-blue-800">Preferences & Experience</h2>
          <div className="text-sm text-gray-500">Step 2 of 2</div>
        </div>
        <div className="w-full bg-gray-200 h-2 mt-2 rounded-full">
          <div className="bg-blue-600 h-2 rounded-full w-full"></div>
        </div>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Current Job/Role (if any)</label>
          <Input 
            value={formData.currentRole}
            onChange={(e) => handleChange('currentRole', e.target.value)}
            placeholder="What is your current position?"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        
        <div>
          <label className="block text-gray-700 font-medium mb-2">Career Goals</label>
          <Textarea 
            value={formData.careerGoals}
            onChange={(e) => handleChange('careerGoals', e.target.value)}
            placeholder="What are your career aspirations?"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        
        <div>
          <label className="block text-gray-700 font-medium mb-2">Preferred Industry</label>
          <Input 
            value={formData.preferredIndustry}
            onChange={(e) => handleChange('preferredIndustry', e.target.value)}
            placeholder="Which industry interests you most?"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        
        <div>
          <label className="block text-gray-700 font-medium mb-2">Skills & Qualifications</label>
          <Textarea 
            value={formData.skills}
            onChange={(e) => handleChange('skills', e.target.value)}
            placeholder="List your relevant skills and qualifications"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        
        <div>
          <label className="block text-gray-700 font-medium mb-2">Work Experience</label>
          <Textarea 
            value={formData.experience}
            onChange={(e) => handleChange('experience', e.target.value)}
            placeholder="Describe your work experience"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        
        <div className="flex justify-between pt-4">
          <Button 
            onClick={() => setCurrentPage(1)} 
            variant="outline"
            className="border-gray-300 text-gray-600"
          >
            <ChevronLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <Button 
            onClick={handleSubmit} 
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            Submit Assessment <Check className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>,
    
    // Page 3: Completion/Results
    <Card key="completion" className="w-full bg-white shadow-md">
      <CardHeader className="text-center bg-green-50 border-b border-green-100">
        <h2 className="text-2xl font-semibold text-green-800">Assessment Complete!</h2>
      </CardHeader>
      <CardContent className="p-6 text-center space-y-6">
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <Check className="h-8 w-8 text-green-600" />
        </div>
        
        <div className="text-gray-700 space-y-4">
          <p className="font-medium">Thank you for completing the assessment.</p>
          <p>Your personalized career report is being generated.</p>
        </div>
        
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 text-left">
          <p className="text-sm text-gray-600">
            Your report will analyze your responses and provide:
          </p>
          <ul className="list-disc pl-6 mt-2 text-sm">
            <li>Career path recommendations</li>
            <li>Skill development suggestions</li>
            <li>Industry alignment insights</li>
          </ul>
        </div>
        
        <Button 
          className="bg-blue-600 hover:bg-blue-700 text-white mt-4"
          onClick={() => console.log("View report")}
        >
          View Your Career Report
        </Button>
      </CardContent>
    </Card>
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {pages[currentPage]}
      </div>
    </div>
  );
};

export default CareerAssessment;