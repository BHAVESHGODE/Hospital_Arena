import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, LucideIcon } from 'lucide-react';

interface StatCardProps {
    title: string;
    value: string;
    trend: number;
    icon: LucideIcon;
    color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, trend, icon: Icon, color }) => {
    const isPositive = trend >= 0;

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className={`relative overflow-hidden rounded-2xl p-6 glassmorphism border-l-4 ${color}`}
        >
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{title}</p>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{value}</h3>
                </div>
                <div className={`p-3 rounded-xl bg-gradient-to-tr ${color.replace('border-', 'from-').replace('-500', '-500/20').replace('-500', '-500/10')} to-transparent`}>
                    <Icon className={`w-6 h-6 ${color.replace('border-', 'text-')}`} />
                </div>
            </div>

            <div className="mt-4 flex items-center">
                <span className={`flex items-center text-sm font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                    {isPositive ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                    {Math.abs(trend)}%
                </span>
                <span className="ml-2 text-xs text-gray-400">vs last month</span>
            </div>
        </motion.div>
    );
};

export default StatCard;
