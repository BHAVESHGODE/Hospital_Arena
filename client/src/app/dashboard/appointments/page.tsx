'use client';

import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Calendar as CalendarIcon, Clock, MapPin, CheckCircle, XCircle } from 'lucide-react';
import Button from '@/components/ui/Button';

const appointments = [
    { id: '1', patient: 'John Doe', doctor: 'Dr. Sarah Wilson', time: '09:00 AM', date: 'Oct 26, 2023', type: 'Checkup', status: 'Confirmed' },
    { id: '2', patient: 'Jane Smith', doctor: 'Dr. Mike Ross', time: '10:30 AM', date: 'Oct 26, 2023', type: 'Consultation', status: 'Pending' },
    { id: '3', patient: 'Robert Johnson', doctor: 'Dr. Emily Blunt', time: '01:00 PM', date: 'Oct 26, 2023', type: 'Surgery', status: 'Confirmed' },
];

export default function AppointmentsPage() {
    return (
        <DashboardLayout>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Appointments</h1>
                    <p className="text-gray-600 dark:text-gray-400">View and manage scheduled appointments.</p>
                </div>
                <Button>
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    New Appointment
                </Button>
            </div>

            <div className="grid gap-4">
                {appointments.map((appointment) => (
                    <div key={appointment.id} className="glassmorphism p-6 rounded-2xl flex items-center justify-between hover:scale-[1.01] transition-transform duration-200">
                        <div className="flex items-center gap-6">
                            <div className="flex flex-col items-center justify-center w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600 dark:text-blue-400">
                                <span className="text-xs font-bold uppercase">Oct</span>
                                <span className="text-xl font-bold">26</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-800 dark:text-white">{appointment.patient}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">with {appointment.doctor}</p>
                                <div className="flex items-center gap-4 text-xs text-gray-500">
                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {appointment.time}</span>
                                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Room 302</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium 
                                ${appointment.status === 'Confirmed' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'}`}>
                                {appointment.status}
                            </span>
                            <div className="flex gap-2">
                                <button className="p-2 text-green-600 hover:bg-green-50 rounded-full transition-colors">
                                    <CheckCircle className="w-5 h-5" />
                                </button>
                                <button className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors">
                                    <XCircle className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </DashboardLayout>
    );
}
