"use client"

import { useEffect } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { AlertCircle, RefreshCw } from "lucide-react"

export default function Error({ error }: { error: Error }) {
    useEffect(() => {
        console.log(error)
    }, [error])

    return (
        <div className="container mx-auto px-4 py-8">
            <Alert variant="destructive" className="bg-red-900/50 border-red-800">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription className="mt-2">
                    {error.message || "Something went wrong while fetching users data"}
                </AlertDescription>
            </Alert>

            <div className="mt-6 flex justify-center">
                <Button
                    onClick={() => window.location.reload()}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                >
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Try Again
                </Button>
            </div>
        </div>
    )
}

