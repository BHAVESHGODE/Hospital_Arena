import AuthForm from '@/components/auth/AuthForm';

export default function SignupPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4 bg-[url('/grid.svg')]">
            <AuthForm type="signup" />
        </div>
    );
}
