'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { LayoutDashboard, Users, Calendar, Settings, Activity, FileText, Pill, LogOut } from 'lucide-react';
import { clsx } from 'clsx';

interface SidebarProps {
    role: string | undefined;
}

const Sidebar: React.FC<SidebarProps> = ({ role }) => {
    const pathname = usePathname();

    const links = [
        { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard', roles: ['Admin', 'Doctor', 'Nurse', 'Patient', 'Receptionist'] },
        { name: 'Patients', icon: Users, href: '/dashboard/patients', roles: ['Admin', 'Doctor', 'Nurse', 'Receptionist'] },
        { name: 'Appointments', icon: Calendar, href: '/dashboard/appointments', roles: ['Admin', 'Doctor', 'Receptionist'] },
        { name: 'Prescriptions', icon: Pill, href: '/dashboard/prescriptions', roles: ['Doctor', 'Patient'] },
        { name: 'Lab Reports', icon: FileText, href: '/dashboard/reports', roles: ['Doctor', 'Patient', 'Admin'] },
        { name: 'Settings', icon: Settings, href: '/dashboard/settings', roles: ['Admin', 'Doctor', 'Patient'] },
    ];

    const filteredLinks = links.filter(link => role && link.roles.includes(role));

    return (
        <motion.div
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            className="hidden md:flex flex-col w-64 h-screen fixed left-0 top-0 glassmorphism border-r border-white/20 z-50 text-gray-800 dark:text-gray-200"
        >
            <div className="flex items-center justify-center h-20 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                    <Activity className="w-8 h-8 text-[--color-primary]" />
                    <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[--color-primary] to-[--color-secondary]">
                        CureOS
                    </h1>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto py-4">
                <ul className="space-y-2 px-3">
                    {filteredLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className={clsx(
                                        'flex items-center px-4 py-3 rounded-xl transition-all duration-200 group',
                                        isActive
                                            ? 'bg-[--color-primary] text-white shadow-lg shadow-[--color-primary]/30'
                                            : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400'
                                    )}
                                >
                                    <link.icon className={clsx('w-5 h-5 mr-3', isActive ? 'text-white' : 'text-gray-500 group-hover:text-[--color-primary]')} />
                                    <span className="font-medium">{link.name}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <button
                    onClick={() => {
                        localStorage.clear();
                        window.location.href = '/login';
                    }}
                    className="flex items-center w-full px-4 py-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-xl transition-colors"
                >
                    <LogOut className="w-5 h-5 mr-3" />
                    <span className="font-medium">Logout</span>
                </button>
            </div>
        </motion.div>
    );
};

export default Sidebar;
