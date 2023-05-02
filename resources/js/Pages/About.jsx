import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
// import Name from "@/Components/Name";
import { Head } from "@inertiajs/react";

export default function About({ data }) {
    return (
        <AuthenticatedLayout
            user={data}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    About
                </h2>
            }
        >
            <div className="py-12">
                <Head title="About" />
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            Welcome to about page, {data.name}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
