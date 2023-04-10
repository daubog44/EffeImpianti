'use client';
import { ToastContainer } from 'react-toastify';
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import useStore from '@/store';
import { useNavigationEvent } from '@/components/Hooks';

export default function Providers({ children }: { children: React.ReactNode }) {
    const handleClickLinkNav = useStore((state) => state.handleClickLinkNav);
    useNavigationEvent(handleClickLinkNav);

    return (
        <main className='bg-gray-100 antialiased grid grid-rows-[minmax(900px,_1fr)_fit-content] grid-cols-1'>
            <Navbar />
            <div className="pt-16 row-span-1">
                <ToastContainer
                    position="bottom-left"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
                {children}
            </div>
            <section className='row-span-2'>
                <Footer />
            </section>
        </main>
    );
}