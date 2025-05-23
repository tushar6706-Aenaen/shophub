'use client';

import Image from 'next/image';
import { Users, Award, Heart } from 'lucide-react';
import Link from 'next/link';
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: '/team/sarah.jpg',
      bio: 'Visionary leader with 15+ years of industry experience'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: '/team/michael.jpg',
      bio: 'Tech innovator specializing in scalable solutions'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lead Designer',
      image: '/team/emily.jpg',
      bio: 'Award-winning designer with a passion for user experience'
    },
    {
      name: 'David Kim',
      role: 'Head of Development',
      image: '/team/david.jpg',
      bio: 'Full-stack expert with a focus on performance'
    }
  ];

  const values = [
    {
      title: "Quality First",
      description: "We never compromise on the quality of our products, ensuring the best experience for our customers.",
      icon: Award
    },
    {
      title: "Customer Focus",
      description: "Your satisfaction is our top priority. We&apos;re here to help you find the perfect audio solution.",
      icon: Heart
    },
    {
      title: "Community Driven",
      description: "We value our community and actively seek feedback to improve our products and services.",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-indigo-700 via-purple-700 to-gray-900" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-4">
            About Our Company
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We&apos;re a team of passionate individuals dedicated to creating
            innovative solutions that make a difference.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                We strive to transform ideas into reality through innovative technology
                solutions. Our mission is to empower businesses and individuals with
                cutting-edge tools that drive growth and success.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                With a focus on excellence and customer satisfaction, we&apos;re committed
                to delivering solutions that exceed expectations and create lasting impact.
              </p>
            </div>
            <div className="h-[400px] rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-gray-900 flex items-center justify-center">
              {/* Optionally, add an icon or illustration here for visual interest */}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <Card key={index} className="border-gray-800 bg-gray-800">
                <CardHeader>
                  <value.icon className="mb-4 h-12 w-12 text-purple-500" />
                  <CardTitle>{value.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {value.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-700 transition-colors"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-indigo-400 mb-2">{member.role}</p>
                  <p className="text-gray-400">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-indigo-400 mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-indigo-400 mb-2">50+</div>
              <div className="text-gray-300">Team Members</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-indigo-400 mb-2">98%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Let&apos;s work together to bring your vision to life.
          </p>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition-colors mr-4">
            Get in Touch
          </button>
            
          <Link href="/" className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition-colors">
            Go to Home
          </Link>
        </div>
      </section>
    </div>
  );
}