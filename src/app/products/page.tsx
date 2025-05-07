import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"

const products = [
    {
        id: "1",
        name: "Premium Wireless Headphones",
        description: "Experience crystal clear sound with our premium wireless headphones",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80"
    },
    {
        id: "2",
        name: "Noise Cancelling Earbuds",
        description: "Block out the world with our advanced noise cancelling technology",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=800&q=80"
    },
    {
        id: "3",
        name: "Sport Wireless Headphones",
        description: "Perfect for your active lifestyle with secure fit and sweat resistance",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80"
    }
]

export default function ProductsPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="mb-8 text-3xl font-bold">Our Products</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                    <Card key={product.id} className="overflow-hidden">
                        <div className="aspect-square relative">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <CardHeader>
                            <CardTitle>{product.name}</CardTitle>
                            <CardDescription>{product.description}</CardDescription>
                        </CardHeader>
                        <CardFooter className="flex justify-between">
                            <p className="text-lg font-semibold">${product.price}</p>
                            <Button asChild>
                                <Link href={`/product/${product.id}`}>
                                    View Details
                                    <ShoppingCart className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
} 