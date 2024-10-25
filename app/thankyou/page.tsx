"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Home } from "lucide-react";
import Link from "next/link";
// import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

export default function ThankYouPage() {
  // const searchParams = useSearchParams();
  // const studentDetails = {
  //   transactionId: searchParams.get("transactionId")!,
  //   name: searchParams.get("name")!,
  //   phone: searchParams.get("phone")!,
  //   city: searchParams.get("city")!,
  //   class: searchParams.get("class"),
  // };
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-primary/20 to-background">
        <header className="w-full p-4 flex justify-between items-center border-b">
          <Link href="/" className="flex items-center space-x-2">
            <Home className="h-6 w-6" />
            <span className="text-xl font-bold">Competishun</span>
          </Link>
        </header>

        <main className="flex-grow flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
              <CardTitle className="text-2xl font-bold text-center">
                Thank You!
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground">
                We appreciate your submission. Now! Our team will connect with
                you shortly!
              </p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button asChild className={" rounded-3xl"}>
                <Link href="/">Return to Home</Link>
              </Button>
            </CardFooter>
          </Card>
        </main>

        <footer className="w-full p-4 border-t text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Competishun. All rights reserved.
          </p>
        </footer>
      </div>
    </Suspense>
  );
}
