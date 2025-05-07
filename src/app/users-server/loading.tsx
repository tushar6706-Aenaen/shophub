import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-200 mb-8">Users</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, index) => (
                    <Card key={index} className="bg-gray-800 border-gray-700">
                        <CardHeader className="space-y-2">
                            <Skeleton className="h-6 w-3/4 bg-gray-700" />
                            <Skeleton className="h-4 w-1/2 bg-gray-700" />
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="flex items-center gap-2">
                                <Skeleton className="h-4 w-4 bg-gray-700" />
                                <Skeleton className="h-4 w-full bg-gray-700" />
                            </div>
                            <div className="flex items-center gap-2">
                                <Skeleton className="h-4 w-4 bg-gray-700" />
                                <Skeleton className="h-4 w-2/3 bg-gray-700" />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
