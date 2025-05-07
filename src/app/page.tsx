'use client';

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Headphones, Music, Smartphone } from 'lucide-react';

const features = [
    {
        title: "Premium Sound Quality",
        description: "Experience crystal clear audio with our high-fidelity headphones",
        icon: Headphones
    },
    {
        title: "Wireless Freedom",
        description: "Enjoy seamless connectivity with advanced Bluetooth technology",
        icon: Music
    },
    {
        title: "Smart Controls",
        description: "Intuitive touch controls for easy music and call management",
        icon: Smartphone
    }
]

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col">
            {/* Hero Section */}
            <section className="flex-1 bg-gradient-to-b from-gray-900 to-gray-800">
                <div className="container mx-auto px-4 py-16">
                    <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="flex flex-col justify-center space-y-4">
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                                Experience Music Like Never Before
                            </h1>
                            <p className="text-gray-300 md:text-xl">
                                Discover our premium collection of wireless headphones designed for the ultimate listening experience.
                            </p>
                            <div className="flex flex-col gap-4 sm:flex-row">
                                <Button asChild size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                                    <Link href="/products">
                                        Shop Now
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="lg">
                                    <Link href="/about">Learn More</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded-lg bg-gray-800">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Headphones className="h-32 w-32 text-gray-600" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-gray-900 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="mb-8 text-center text-3xl font-bold">Why Choose Us</h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature, index) => (
                            <Card key={index} className="border-gray-800 bg-gray-800">
                                <CardHeader>
                                    <feature.icon className="mb-4 h-12 w-12 text-purple-500" />
                                    <CardTitle>{feature.title}</CardTitle>
                                    <CardDescription className="text-gray-400">
                                        {feature.description}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gray-800 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="mb-4 text-3xl font-bold">Ready to Upgrade Your Audio Experience?</h2>
                    <p className="mb-8 text-gray-300">
                        Join thousands of satisfied customers who have transformed their listening experience.
                    </p>
                    <Button asChild size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                        <Link href="/products">
                            Shop Now
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
