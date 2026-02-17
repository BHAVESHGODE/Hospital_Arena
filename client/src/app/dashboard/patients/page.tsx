'use client';

import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Search, Filter, MoreVertical, Plus } from 'lucide-react';
import Button from '@/components/ui/Button';

const patients = [
    { id: '1', name: 'John Doe', age: 45, gender: 'Male', condition: 'Hypertension', status: 'Stable', lastVisit: '2023-10-15' },
    { id: '2', name: 'Jane Smith', age: 32, gender: 'Female', condition: 'Pregnancy', status: 'Normal', lastVisit: '2023-10-18' },
    { id: '3', name: 'Robert Johnson', age: 58, gender: 'Male', condition: 'Diabetes', status: 'Critical', lastVisit: '2023-10-20' },
    { id: '4', name: 'Emily Davis', age: 28, gender: 'Female', condition: 'Flu', status: 'Recovered', lastVisit: '2023-10-22' },
    { id: '5', name: 'Michael Brown', age: 62, gender: 'Male', condition: 'Cardiac Issue', status: 'Stable', lastVisit: '2023-10-25' },
];

export default function PatientsPage() {
    return (
        <DashboardLayout>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Patients</h1>
                    <p className="text-gray-600 dark:text-gray-400">Manage patient records and medical history.</p>
                </div>
                <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Patient
                </Button>
            </div>

            <div className="glassmorphism rounded-2xl p-6">
                <div className="flex justify-between items-center mb-6">
                    <div className="relative">
                        <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search patients..."
                            className="pl-10 pr-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[--color-primary]"
                        />
                    </div>
                    <div className="flex gap-2">
                        <button className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                            <Filter className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-200 dark:border-gray-700 text-left">
                                <th className="pb-4 pt-2 px-4 font-semibold text-gray-600 dark:text-gray-400">Name</th>
                                <th className="pb-4 pt-2 px-4 font-semibold text-gray-600 dark:text-gray-400">Age/Gender</th>
                                <th className="pb-4 pt-2 px-4 font-semibold text-gray-600 dark:text-gray-400">Condition</th>
                                <th className="pb-4 pt-2 px-4 font-semibold text-gray-600 dark:text-gray-400">Status</th>
                                <th className="pb-4 pt-2 px-4 font-semibold text-gray-600 dark:text-gray-400">Last Visit</th>
                                <th className="pb-4 pt-2 px-4 font-semibold text-gray-600 dark:text-gray-400">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patients.map((patient) => (
                                <tr key={patient.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
                                    <td className="py-4 px-4 font-medium text-gray-800 dark:text-gray-200">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-bold">
                                                {patient.name.charAt(0)}
                                            </div>
                                            {patient.name}
                                        </div>
                                    </td>
                                    <td className="py-4 px-4 text-gray-600 dark:text-gray-400">{patient.age} / {patient.gender}</td>
                                    <td className="py-4 px-4 text-gray-600 dark:text-gray-400">{patient.condition}</td>
                                    <td className="py-4 px-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium 
                                            ${patient.status === 'Stable' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                                                patient.status === 'Critical' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                                                    'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'}`}>
                                            {patient.status}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4 text-gray-600 dark:text-gray-400">{patient.lastVisit}</td>
                                    <td className="py-4 px-4">
                                        <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors">
                                            <MoreVertical className="w-4 h-4 text-gray-500" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </DashboardLayout>
    );
}
