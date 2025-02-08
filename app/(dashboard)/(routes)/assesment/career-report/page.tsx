'use client'
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';

export default function CareerReport() {
  const router = useRouter();
  
  // Mock data - in a real app, this would come from your assessment results
  const reportData = {
    careerMatches: [
      { title: 'Software Developer', match: '95%', skills: ['Programming', 'Problem Solving', 'Analytical Thinking'] },
      { title: 'Data Analyst', match: '88%', skills: ['Statistics', 'Data Visualization', 'SQL'] },
      { title: 'UX Designer', match: '82%', skills: ['User Research', 'Design Thinking', 'Prototyping'] }
    ],
    personalityInsights: {
      workStyle: 'Analytical and detail-oriented',
      strengths: ['Problem solving', 'Critical thinking', 'Communication'],
      environments: ['Collaborative', 'Fast-paced', 'Innovation-focused']
    },
    recommendedLocations: [
      { city: 'San Francisco, CA', reason: 'Tech hub with numerous opportunities' },
      { city: 'Austin, TX', reason: 'Growing tech scene and favorable cost of living' },
      { city: 'Boston, MA', reason: 'Strong innovation ecosystem' }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Your Career Report</h1>
          <p className="text-gray-600">Based on your personality and preferences assessment</p>
        </div>

        <Tabs defaultValue="matches" className="space-y-6">
          <TabsList className="grid grid-cols-3 w-full max-w-2xl mx-auto">
            <TabsTrigger value="matches">Career Matches</TabsTrigger>
            <TabsTrigger value="insights">Personality Insights</TabsTrigger>
            <TabsTrigger value="locations">Recommended Locations</TabsTrigger>
          </TabsList>

          <TabsContent value="matches">
            <div className="grid gap-6 md:grid-cols-3">
              {reportData.careerMatches.map((career, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <h3 className="text-xl font-semibold">{career.title}</h3>
                    <div className="text-2xl font-bold text-green-600">{career.match}</div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-medium mb-2">Key Skills Required:</h4>
                    <ul className="list-disc pl-4 space-y-1">
                      {career.skills.map((skill, idx) => (
                        <li key={idx}>{skill}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="insights">
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold">Your Professional Profile</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">Work Style</h3>
                    <p>{reportData.personalityInsights.workStyle}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Key Strengths</h3>
                    <ul className="list-disc pl-4 space-y-1">
                      {reportData.personalityInsights.strengths.map((strength, idx) => (
                        <li key={idx}>{strength}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Ideal Work Environments</h3>
                    <ul className="list-disc pl-4 space-y-1">
                      {reportData.personalityInsights.environments.map((env, idx) => (
                        <li key={idx}>{env}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="locations">
            <div className="grid gap-6 md:grid-cols-3">
              {reportData.recommendedLocations.map((location, index) => (
                <Card key={index}>
                  <CardHeader>
                    <h3 className="text-xl font-semibold">{location.city}</h3>
                  </CardHeader>
                  <CardContent>
                    <p>{location.reason}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-8 flex justify-center gap-4">
          <Button 
            onClick={() => router.push('/assessment/preferences')}
            variant="outline"
          >
            Retake Assessment
          </Button>
          <Button 
            onClick={() => window.print()}
          >
            Download Report
          </Button>
        </div>
      </div>
    </div>
  );
}