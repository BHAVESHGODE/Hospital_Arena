'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Hospital, Lock, Mail, User } from 'lucide-react';

const schema = z.object({
    name: z.string().min(2, 'Name is too short').optional(),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    role: z.enum(['Admin', 'Doctor', 'Nurse', 'Patient', 'Receptionist']).optional(),
});

type FormData = z.infer<typeof schema>;

interface AuthFormProps {
    type: 'login' | 'signup';
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: FormData) => {
        setIsLoading(true);
        setError('');

        try {
            const endpoint = type === 'login' ? '/auth/login' : '/auth/register';
            const url = `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`;

            const response = await axios.post(url, data);

            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));

            router.push('/dashboard');
        } catch (err: any) {
            setError(err.response?.data?.message || 'Something went wrong');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl"
        >
            <div className="flex justify-center mb-6">
                <div className="p-3 bg-white/20 rounded-full">
                    <Hospital className="w-10 h-10 text-white" />
                </div>
            </div>
            <h2 className="text-3xl font-bold text-center mb-2 text-white">
                {type === 'login' ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-center text-white/70 mb-6">
                {type === 'login' ? 'Sign in to access your dashboard' : 'Join us and manage your health with ease'}
            </p>

            {error && (
                <div className="bg-red-500/20 border border-red-500 text-white px-4 py-3 rounded mb-4 text-center">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {type === 'signup' && (
                    <Input
                        label="Full Name"
                        icon={<User className="w-5 h-5 text-white/50" />}
                        error={errors.name?.message}
                        {...register('name')}
                    />
                )}

                <Input
                    label="Email Address"
                    type="email"
                    icon={<Mail className="w-5 h-5 text-white/50" />}
                    error={errors.email?.message}
                    {...register('email')}
                />

                <Input
                    label="Password"
                    type="password"
                    icon={<Lock className="w-5 h-5 text-white/50" />}
                    error={errors.password?.message}
                    {...register('password')}
                />

                {type === 'signup' && (
                    <div className="w-full">
                        <label className="block text-sm font-medium text-white/80 mb-1">
                            Role
                        </label>
                        <div className="relative">
                            <select
                                {...register('role')}
                                className="w-full pl-3 pr-10 py-2 rounded-lg border border-white/20 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none"
                            >
                                <option value="Patient">Patient</option>
                                <option value="Doctor">Doctor</option>
                                <option value="Nurse">Nurse</option>
                                <option value="Receptionist">Receptionist</option>
                                <option value="Admin">Admin</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white/50">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                )}

                <Button type="submit" isLoading={isLoading} className="w-full mt-6 bg-blue-500 hover:bg-blue-600 !text-white">
                    {type === 'login' ? 'Sign In' : 'Sign Up'}
                </Button>
            </form>

            <div className="mt-6 text-center text-sm text-white/60">
                {type === 'login' ? (
                    <>
                        Don't have an account?{' '}
                        <Link href="/signup" className="text-blue-300 hover:underline">
                            Sign up
                        </Link>
                    </>
                ) : (
                    <>
                        Already have an account?{' '}
                        <Link href="/login" className="text-blue-300 hover:underline">
                            Log in
                        </Link>
                    </>
                )}
            </div>
        </motion.div>
    );
};

export default AuthForm;
