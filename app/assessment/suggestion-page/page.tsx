"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
// import { Spinner } from '@/components/ui/spinner';
import { toast } from 'sonner';

interface CareerSuggestion {
  id: string;
  suggestions: string;
  createdAt: string;
}

export default function CareerSuggestionsPage() {
  const [suggestions, setSuggestions] = useState<CareerSuggestion | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await axios.get('/api/assessment/suggestions');
        setSuggestions(response.data);
      } catch (error) {
        console.error('Failed to fetch suggestions:', error);
        toast.error('Unable to load career suggestions');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSuggestions();
  }, []);

  const regenerateSuggestions = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post('/api/career-suggestions');
      setSuggestions(response.data);
      toast.success('New suggestions generated!');
    } catch (error) {
      console.error('Failed to regenerate suggestions:', error);
      toast.error('Unable to generate new suggestions');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        {/* <Spinner /> */} loading
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Personalized Career Suggestions
          </CardTitle>
        </CardHeader>
        <CardContent>
          {suggestions ? (
            <>
              <div className="prose max-w-none">
                <pre className="whitespace-pre-wrap p-4 bg-gray-100 rounded-md">
                  {suggestions.suggestions}
                </pre>
              </div>
              <Separator className="my-6" />
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">
                  Generated on: {new Date(suggestions.createdAt).toLocaleString()}
                </p>
                <Button onClick={regenerateSuggestions} variant="outline">
                  Regenerate Suggestions
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600">
                No career suggestions available. Please complete your assessment.
              </p>
              <Link href="/assessment" passHref>
                <Button className="mt-4">
                  Go to Assessment
                </Button>
              </Link>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}