import { Head } from "@inertiajs/react";

export default function Home() {
    return (
        <div className="bg-blue-100 min-h-screen flex items-center justify-center">
            <Head title="Home" />
            <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-1/2">
                <h1 className="text-4xl font-bold mb-4">Home</h1>
                <p className="text-xl">
                    Hello, welcome to your first Inertia app!
                </p>
            </div>
        </div>
    );
}
