import { DesignSVG } from "@/components/SVG";
import Link from "next/link";
import useStore from '@/store';

export default function () {
    ;
    return (
        <div className="w-screen h-[calc(100vh-4rem)] text-white" style={{
            background: "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)"
        }}>
            <div className="container mx-auto flex px-5 md:pt-16 pt-10 items-center justify-center flex-col">
                <DesignSVG />
                <div className="text-center lg:w-5/12 w-full">
                    <h1 className="my-4 md:text-5xl text-3xl font-bold leading-tight font-Shantell_sans">
                        EFFE IMPIANTI
                    </h1>
                    <p className="md:text-xl text-lg mb-8 font-roboto_mono">
                        La certezza di un impianto personalizzato e caratterizzato da un alto livello di efficienza è certamente il punto di forza della nostra azienda.
                    </p>
                    <div className="flex justify-center mx-auto">
                        <Link
                            className="hover:underline bg-white text-gray-800 font-bold rounded-full py-2 px-4 sm:py-4 sm:px-8" href="/Mercati-e-Clienti">
                            Guarda i progetti
                        </Link>
                        <Link
                            href="/Azienda"
                            className="ml-4 hover:underline bg-white text-gray-800 font-bold rounded-full  py-2 px-4 sm:py-4 sm:px-8">
                            Azienda
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}