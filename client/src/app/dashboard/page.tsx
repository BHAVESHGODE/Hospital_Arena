'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import DashboardLayout from '@/components/layout/DashboardLayout';
import StatCard from '@/components/ui/StatCard';
import { Users, DollarSign, Activity, Calendar } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const data = [
    { name: 'Mon', patients: 40, revenue: 2400 },
    { name: 'Tue', patients: 30, revenue: 1398 },
    { name: 'Wed', patients: 20, revenue: 9800 },
    { name: 'Thu', patients: 27, revenue: 3908 },
    { name: 'Fri', patients: 18, revenue: 4800 },
    { name: 'Sat', patients: 23, revenue: 3800 },
    { name: 'Sun', patients: 34, revenue: 4300 },
];

export default function DashboardPage() {
    const router = useRouter();
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/login');
        } else {
            const userData = localStorage.getItem('user');
            if (userData) {
                setUser(JSON.parse(userData));
            }
        }
    }, [router]);

    if (!user) return null;

    return (
        <DashboardLayout>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                    Good Morning, Dr. {user.name} 👋
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                    Here's what's happening at CureOS today.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard
                    title="Total Patients"
                    value="1,234"
                    trend={12}
                    icon={Users}
                    color="border-[--color-primary]"
                />
                <StatCard
                    title="Total Revenue"
                    value="$45,231"
                    trend={8}
                    icon={DollarSign}
                    color="border-[--color-secondary]"
                />
                <StatCard
                    title="Appointments"
                    value="42"
                    trend={-5}
                    icon={Calendar}
                    color="border-orange-500"
                />
                <StatCard
                    title="Surgery Success"
                    value="98.5%"
                    trend={2}
                    icon={Activity}
                    color="border-pink-500"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="lg:col-span-2 glassmorphism rounded-2xl p-6"
                >
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Patient Inflow</h3>
                    <div className="h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorPatients" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} strokeOpacity={0.1} />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                <YAxis axisLine={false} tickLine={false} />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                        borderRadius: '12px',
                                        border: 'none',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                                    }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="patients"
                                    stroke="var(--color-primary)"
                                    strokeWidth={3}
                                    fillOpacity={1}
                                    fill="url(#colorPatients)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="glassmorphism rounded-2xl p-6"
                >
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Recent Activity</h3>
                    <div className="space-y-6">
                        {[1, 2, 3, 4, 5].map((_, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xl">
                                    🏥
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                        Dr. Sarah added a new patient
                                    </p>
                                    <p className="text-xs text-gray-500">2 mins ago</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </DashboardLayout>
    );
}
