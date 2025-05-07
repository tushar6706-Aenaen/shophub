import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, User } from "lucide-react"

type User = {
    id: number
    name: string
    username: string
    email: string
    phone: string
}

export default async function UsersServer() {
    // Simulate loading delay
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve(true)
        }, 2000)
    })

    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-200 mb-8">Users</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.map((user: User) => (
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