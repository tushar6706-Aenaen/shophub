"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, Mail, Phone, User } from "lucide-react"

type User = {
    id: number
    name: string
    username: string
    email: string
    phone: string
}

export default function UserClient() {
    const [users, setUsers] = useState<User[]>([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                if (!response.ok) {
                    throw new Error("Failed to fetch users data")
                }
                const data = await response.json()
                setUsers(data)
            } catch (error) {
                setError('Failed to fetch users data')
            } finally {
                setLoading(false)
            }
        }
        fetchUsers()
    }, [])

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-gray-200 mb-8">Users</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, index) => (
                        <Card key={index} className="bg-gray-800 border-gray-700">
                            <CardHeader>
                                <Skeleton className="h-6 w-3/4 bg-gray-700" />
                                <Skeleton className="h-4 w-1/2 bg-gray-700" />
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="hidden md:flex items-center gap-2">
                                    <Skeleton className="h-4 w-4 bg-gray-700" />
                                    <Skeleton className="h-4 w-full bg-gray-700" />
                                </div>
                                <div className="hidden md:flex items-center gap-2">
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

    if (error) {
        return (
            <div className="container mx-auto px-4 py-8">
                <Alert variant="destructive" className="bg-red-900/50 border-red-800">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-200 mb-8">Users</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.map((user) => (
                    <Card key={user.id} className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
                        <CardHeader>
                            <CardTitle className="text-xl text-gray-200 flex items-center gap-2">
                                <User className="h-5 w-5 text-purple-400" />
                                {user.name}
                            </CardTitle>
                            <CardDescription className="text-gray-400">
                                @{user.username}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="hidden md:flex items-center gap-2 text-gray-300">
                                <Mail className="h-4 w-4 text-purple-400" />
                                <span className="text-sm">{user.email}</span>
                            </div>
                            <div className="hidden md:flex items-center gap-2 text-gray-300">
                                <Phone className="h-4 w-4 text-purple-400" />
                                <span className="text-sm">{user.phone}</span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
