'use client';
import Link from "next/link"
import Image from "next/image";
import useStore from "@/store";

export default function Footer({ gridPosition }: { gridPosition?: string }) {
    const navigation = useStore((state) => state.navigationData);

    return (
        <div className={`z-0 overflow-hidden flex items-center justify-center ${gridPosition}`}>
            <footer className="w-screen relative flex flex-col items-center bg-cyan-900 overflow-hidden py-8 md:py-12">
                <div className="relative z-[1] container m-auto px-6 md:px-12">
                    <div className="m-auto md:w-10/12 lg:w-8/12 xl:w-6/12">
                        <div className="flex flex-wrap items-center justify-between md:flex-nowrap">
                            <div className="w-full flex justify-center text-gray-300 sm:w-1/2">
                                <ul className="list-disc list-inside space-y-4">
                                    {navigation.map((el) => (<li key={el.name + "2"}><Link className="hover:text-sky-400 transition" href={el.href}>{el.name}</Link></li>))}
                                </ul>
                            </div>
                            <div className="w-10/12 m-auto  mt-16 space-y-4 text-center sm:text-left sm:w-5/12 sm:mt-auto">
                                <span className="block text-gray-300">Effe Impianti S.r.l.
                                    Via Giuseppe Verdi, 8
                                    20846 - Macherio (MB) ITALY
                                    Tel. +39 039 2016474 - Fax. +39 039 2017992</span>
                                <span className="w-full flex justify-center items-center sm:justify-start">
                                    <span className="block text-gray-300 mr-4">Azienda certificata:</span>
                                    <div className="h-20 w-20 z-[20] relative">
                                        <Image fill src="/images/certificazioni-removebg.png" alt="certificazione" />
                                    </div>
                                </span>

                                <span className="flex justify-between text-white">
                                    <Link href="/legal#Privacy-Policy" className="font-semibold">Privacy Policy</Link>
                                    <Link href="/legal#Terms-&-Conditions" className="font-semibold">Terms & Conditions</Link>
                                </span>

                                <span className="block text-gray-300">Need help? <Link scroll={true} href={{ pathname: "/", hash: "contact-us" }} className="font-semibold text-white">Contact Us</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div aria-hidden="true" className="absolute h-full inset-0 flex items-center">
                    <div aria-hidden="true" className="bg-layers bg-scale w-56 h-56 m-auto blur-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full md:w-[30rem] md:h-[30rem] md:blur-3xl"></div>
                </div>
                <div aria-hidden="true" className="absolute inset-0 w-full h-full bg-[#020314] opacity-80"></div>
            </footer>
        </div>
    )
}