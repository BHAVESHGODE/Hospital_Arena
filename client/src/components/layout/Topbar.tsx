'use client';

import React from 'react';
import { Bell, Search, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

const Topbar: React.FC = () => {
    return (
        <div className="h-16 fixed top-0 right-0 left-0 md:left-64 bg-white/10 dark:bg-black/20 backdrop-blur-lg border-b border-white/20 dark:border-white/10 z-40 px-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                    <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </button>
                <div className="relative hidden md:block">
                    <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search patients, doctors..."
                        className="pl-10 pr-4 py-2 w-64 rounded-xl bg-gray-50 dark:bg-gray-800/50 border-none focus:ring-2 focus:ring-[--color-primary] transition-all text-sm"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 relative"
                >
                    <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                </motion.button>

                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[--color-primary] to-[--color-secondary] flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/20">
                        JD
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
