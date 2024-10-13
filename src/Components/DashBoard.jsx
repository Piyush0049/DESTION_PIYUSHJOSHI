import React, { useState } from 'react';
import { Line, Pie, Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    ArcElement,
    Tooltip,
    Legend,
    BarElement,
} from 'chart.js';
import { useNavigate } from 'react-router-dom';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, ArcElement, Tooltip, Legend, BarElement);

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const lineChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Growth 2023',
                data: [15, 25, 45, 50, 70, 85, 95, 120, 130, 140, 150, 170],
                borderColor: '#1E40AF',
                backgroundColor: 'rgba(30, 64, 175, 0.1)',
                fill: true,
                tension: 0.1,
            },
        ],
    };

    const pieChartData = {
        labels: ['FinTech', 'Healthcare', 'Consumer', 'Financial'],
        datasets: [
            {
                label: 'Services',
                data: [40, 25, 20, 15],
                backgroundColor: ['#1E40AF', '#2563EB', '#3B82F6', '#60A5FA'],
                borderColor: '#fff',
                borderWidth: 2,
            },
        ],
    };

    const barChartData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'New Clients',
                data: [12, 19, 8, 15],
                backgroundColor: 'rgba(30, 64, 175, 0.6)',
                borderColor: '#1E40AF',
                borderWidth: 1,
            },
        ],
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="min-h-screen flex bg-gray-100 font-poppins">
            {/* Sidebar */}
            <aside
                className={`fixed inset-0 z-40 md:w-64 w-64 bg-gradient-to-b from-blue-900 to-indigo-800 text-white flex flex-col justify-between p-6 shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}
            >
                <div>
                    <div className="text-center mb-8">
                        <div className='flex justify-start'>
                            <button
                                className={`md:hidden p-2 rounded-lg ${isSidebarOpen ? 'text-white' : 'text-blue-900'} transition-all duration-300`}
                                onClick={toggleSidebar}
                                aria-label="Toggle sidebar"
                            >
                                <i className="fas fa-bars"></i>
                            </button>
                            <img
                                src="https://via.placeholder.com/80"
                                alt="Destion Logo"
                                className="rounded-full mx-auto shadow-lg"
                            />
                        </div>
                        <h2 className="mt-4 text-2xl font-bold">Piyush Joshi</h2>
                        <p className="text-sm text-gray-300">Creative Agency</p>
                    </div>
                    <nav>
                        <ul>
                            {['Dashboard', 'Profile', 'Settings', 'Clients', 'Growth', 'Log out'].map((item) => (
                                <li key={item} className="mb-6">
                                    <a
                                        onClick={() => { navigate("/"); }}
                                        className="flex items-center space-x-2 hover:text-indigo-400 transition-colors duration-300 text-lg hover:cursor-pointer"
                                    >
                                        <span>{item}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 px-3 py-6 md:px-6 md:py-6">
                {/* Header */}
                <header className="flex justify-between items-center mb-6 pt-4">
                    <button
                        className={`md:hidden p-2 rounded-lg ${isSidebarOpen ? 'text-white' : 'text-blue-900'} transition-all duration-300`}
                        onClick={toggleSidebar}
                        aria-label="Toggle sidebar"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="text-center flex-1">
                        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">Welcome to Destion!</h1>
                        <p className="text-sm md:text-base text-gray-500 pt-3">Explore our creative solutions and services</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="text-gray-600 hover:text-blue-500 transition-all duration-300">
                            <i className="fas fa-bell"></i>
                        </button>
                        <button className="text-gray-600 hover:text-blue-500 transition-all duration-300">
                            <i className="fas fa-user-circle"></i>
                        </button>
                    </div>
                </header>

                {/* Stats Section */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105">
                        <h3 className="text-lg font-semibold text-gray-700 mb-4">Company Growth 2023</h3>
                        <div className="h-64">
                            <Line data={lineChartData} />
                        </div>
                    </div>

                    <div className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105">
                        <h3 className="text-lg font-semibold text-gray-700">Project Completion Rate</h3>
                        <p className="text-3xl font-bold text-green-500">96.5%</p>
                        <p className="text-green-500 mt-2">+3.2% increase</p>
                    </div>

                    <div className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105">
                        <h3 className="text-lg font-semibold text-gray-700">Customer Satisfaction</h3>
                        <p className="text-3xl font-bold text-indigo-600">98%</p>
                        <p className="text-green-500 mt-2">+2.5% improvement</p>
                    </div>
                </section>

                {/* Bar Chart & Services Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105">
                        <h3 className="text-lg font-semibold text-gray-700">New Clients</h3>
                        <div className="h-64 mt-4">
                            <Bar data={barChartData} />
                        </div>
                    </div>

                    <div className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105">
                        <h3 className="text-lg font-semibold text-gray-700">Service Offerings</h3>
                        <div className="mt-6 w-full max-w-md mx-auto h-64">
                            <Pie data={pieChartData} />
                        </div>
                    </div>
                </section>

                {/* Notifications Panel */}
                <section className="bg-white p-6 shadow-lg rounded-lg mb-6 transition-transform transform hover:scale-100">
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">Notifications</h3>
                    <ul className="list-disc list-inside">
                        <li className="text-gray-600">New project proposal received from Piyush Joshi.</li>
                        <li className="text-gray-600">Your team meeting is scheduled for next Tuesday at 3 PM.</li>
                        <li className="text-gray-600">Reminder: Submit your weekly report by Friday.</li>
                    </ul>
                </section>
            </main>
        </div>
    );
};

export default Dashboard;
