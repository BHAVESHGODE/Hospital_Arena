'use client';

import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { useRouter } from 'next/navigation';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<any>(null);
    const router = useRouter();

    useEffect(() => {
        const checkAuth = () => {
            const userData = localStorage.getItem('user');
            if (!userData) {
                router.push('/login');
            } else {
                try {
                    setUser(JSON.parse(userData));
                } catch (error) {
                    console.error('Failed to parse user data:', error);
                    localStorage.removeItem('user');
                    router.push('/login');
                }
            }
        };

        checkAuth();
    }, [router]);

    if (!user) return null;

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Sidebar role={user?.role} />
            <Topbar />
            <div className="md:ml-64 pt-16 min-h-screen p-6 overflow-x-hidden">
                {children}
            </div>
        </div>
    );
}
