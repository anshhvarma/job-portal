'use client'
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useRouter } from 'next/navigation';


const Assessment = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      correctAnswer: "Paris"
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars"
    },
    {
      id: 3,
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "4"
    }
  ];
  const router = useRouter();

  const handleSubmit = () => {
    let correctAnswers = 0;
    questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correctAnswers++;
      }
      setTimeout(() => {
        router.push(`/assesment/recommendation`);
      }, 5000);
    });
    setScore(correctAnswers);
    setShowResults(true);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Knowledge Assessment</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            Please answer all questions and submit when ready.
          </p>
          
          {questions.map((q) => (
            <div key={q.id} className="mb-8">
              <h3 className="text-lg font-medium mb-4">
                {q.id}. {q.question}
              </h3>
              <RadioGroup
                value={selectedAnswers[q.id]}
                onValueChange={(value) => 
                  setSelectedAnswers(prev => ({...prev, [q.id]: value}))
                }
              >
                {q.options.map((option) => (
                  <div key={option} className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value={option} id={`${q.id}-${option}`} />
                    <Label htmlFor={`${q.id}-${option}`}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
              
              {showResults && (
                <Alert 
                  className="mt-2"
                  variant={selectedAnswers[q.id] === q.correctAnswer ? "default" : "destructive"}
                >
                  {selectedAnswers[q.id] === q.correctAnswer ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <AlertCircle className="h-4 w-4" />
                  )}
                  <AlertTitle>
                    {selectedAnswers[q.id] === q.correctAnswer ? "Correct!" : "Incorrect"}
                  </AlertTitle>
                  <AlertDescription>
                    {selectedAnswers[q.id] === q.correctAnswer 
                      ? "Great job!"
                      : `The correct answer is: ${q.correctAnswer}`
                    }
                  </AlertDescription>
                </Alert>
              )}
            </div>
          ))}
          
          <Button 
            onClick={handleSubmit}
            className="w-full"
            disabled={Object.keys(selectedAnswers).length !== questions.length}
          >
            Submit Assessment
          </Button>
          
          {showResults && (
            <div className="mt-6 text-center">
              <h3 className="text-xl font-bold mb-2">
                Your Score: {score}/{questions.length}
              </h3>
              <p className="text-gray-600">
                {score === questions.length 
                  ? "Perfect score! Excellent work!" 
                  : "Review the answers above and try again!"}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Assessment;