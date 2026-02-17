import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    className,
    variant = 'primary',
    isLoading,
    disabled,
    ...props
}) => {
    const variants = {
        primary: 'bg-[--color-primary] hover:bg-[--color-primary-dark] text-white shadow-lg shadow-[--color-primary]/30',
        secondary: 'bg-[--color-secondary] hover:bg-[--color-secondary-dark] text-white shadow-lg shadow-[--color-secondary]/30',
        outline: 'border-2 border-[--color-primary] text-[--color-primary] hover:bg-[--color-primary] hover:text-white',
        ghost: 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300',
    };

    return (
        <button
            className={twMerge(
                clsx(
                    'flex items-center justify-center px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100',
                    variants[variant],
                    className
                )
            )}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            {children}
        </button>
    );
};

export default Button;
