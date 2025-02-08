'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Dashboard() {
  const router = useRouter();
  const [showConfirmation, setShowConfirmation] = useState(true);

  const handleConfirmation = (isWorkingProfessional: boolean) => {
    if (isWorkingProfessional) {
      router.push('/');
    } else {
      router.push('/assesment/personality');
    }
    setShowConfirmation(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Professional Dashboard</h1>
        
        {showConfirmation && (
          <Card className="mb-8">
            <CardHeader>
              <h2 className="text-xl font-semibold">Confirmation</h2>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Are you a Working Professional?</p>
              <div className="flex gap-4">
                <Button 
                  onClick={() => handleConfirmation(true)}
                  className="flex-1"
                >
                  Yes
                </Button>
                <Button 
                  onClick={() => handleConfirmation(false)}
                  variant="outline"
                  className="flex-1"
                >
                  No
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}