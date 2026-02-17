import Link from 'next/link';
import { ArrowRight, Hospital, Stethoscope, UserPlus } from 'lucide-react';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white/20 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-white/80">{description}</p>
  </div>
);

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white font-sans">
      <header className="absolute top-0 left-0 w-full z-10 p-6 flex justify-between items-center">
        <div className="flex items-center">
          <Hospital className="w-8 h-8 mr-2 text-blue-300" />
          <h1 className="text-2xl font-bold tracking-wider">CureOS</h1>
        </div>
        <nav>
          <Link href="/login" passHref>
            <span className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 cursor-pointer">
              Login
            </span>
          </Link>
        </nav>
      </header>

      <main className="container mx-auto px-6 pt-32 text-center">
        <div className="relative z-0">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-400 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-purple-400 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
            The Future of Hospital Management
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 animate-fade-in-up">
            CureOS provides a seamless, intuitive, and powerful platform to manage all your hospital operations, from patient records to appointment scheduling.
          </p>
          <div className="flex justify-center gap-4 animate-fade-in">
            <Link href="/signup" passHref>
              <span className="bg-white text-blue-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                Get Started
                <ArrowRight className="inline-block w-5 h-5 ml-2" />
              </span>
            </Link>
            <Link href="/login" passHref>
              <span className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                Request a Demo
              </span>
            </Link>
          </div>
        </div>
      </main>

      <section className="py-20 container mx-auto px-6 text-left">
        <h3 className="text-3xl font-bold text-center mb-12">Core Features</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Stethoscope size={24} className="text-blue-300" />}
            title="Intelligent Appointment Scheduling"
            description="AI-powered scheduling assistant to optimize doctor and patient time."
          />
          <FeatureCard
            icon={<UserPlus size={24} className="text-blue-300" />}
            title="Comprehensive Patient Records"
            description="Securely manage patient history, prescriptions, and treatment plans."
          />
          <FeatureCard
            icon={<Hospital size={24} className="text-blue-300" />}
            title="Role-Based Dashboards"
            description="Tailored views for Admins, Doctors, and Patients for maximum efficiency."
          />
        </div>
      </section>
    </div>
  );
}