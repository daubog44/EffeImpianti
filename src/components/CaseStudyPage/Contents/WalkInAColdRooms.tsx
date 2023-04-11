import { DownloadBtn } from "@/components/SharedComponents";
import Image from "next/image";
import Link from "next/link";

export default function WalkInAColdRooms() {
    return <section className="bg-gray-100 p-8">
        <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold text-center text-gray-800">Come ottenere il massimo risultato con il maggior risparmio energetico: oltre il 25%</h1>
            <p className="mt-4 text-lg text-center text-gray-600">Effe Impianti, in collaborazione con Zanotti, InCold e Sogesca, ha sviluppato il progetto “Walk-In a Cold Rooms” per offrire a McDonald&apos;s, come capostipite e alla ristorazione italiana la soluzione “Freddo” tecnologicamente all&apos;avanguardia ed economicamente vantaggiosa.</p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Link className="flex flex-col items-center" href={"https://www.zanotti.com/" as __next_route_internal_types__.RouteImpl<"https://www.zanotti.com/">}>
                    <Image src="/images/CaseStudy/WalkInAColdRooms/zanotti-1.jpg" alt="Zanotti" width={150} height={150} />
                    <p className="mt-2 text-gray-800">Zanotti è azienda leader nella realizzazione di impianti di refrigerazione per l&apos;industria alimentare. In particolare i motori adottati per McDonald&apos;s permetteranno una soluzione “freddo” avanzata e di sicuro risparmio energetico ed economico.</p>
                </Link>
                <Link className="flex flex-col items-center" href={"https://www.incold.it/it" as __next_route_internal_types__.RouteImpl<"https://www.incold.it/it">}>
                    <Image src="/images/CaseStudy/WalkInAColdRooms/incold165x80.png" alt="InCold" width={150} height={150} />
                    <p className="mt-2 text-gray-800">INCOLD è un punto di riferimento europeo nel settore delle celle frigorifere commerciali, industriali e di porte isotermiche.</p>
                </Link>
                <Link className="flex flex-col items-center" href={"https://www.sogesca.it/" as __next_route_internal_types__.RouteImpl<"https://www.sogesca.it/">}>
                    <Image src="/images/CaseStudy/WalkInAColdRooms/sogesca-sviluppo-sostenibile-logo.png" alt="Sogesca" width={150} height={150} />
                    <p className="mt-8 text-gray-800">SOGESCA ha esperienze pluriennali, capacità di progettazione, competenza nel settore dell&apos;innovazione per progettare e gestire progetti di sviluppo sostenibile.</p>
                </Link>
            </div>
            <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-800">La soluzione permetterà MINIMO 25% IN MENO DI CONSUMO ENERGETICO GARANTITO.</h2>
                <p className="mt-4 text-gray-600">Percentuali di risparmio:</p>
                <ul className="mt-2 ml-8 list-disc text-gray-600">
                    <li>Inverter 10%</li>
                    <li>Valvola elettronica 5%</li>
                    <li>Best Cop 10%</li>
                </ul>
                <p className="mt-4 text-gray-600">CALCOLO DEL RISPARMIO ENERGETICO SULL&apos;IMPIANTO CONSIDERATO.<br />(Valori medi annuali)</p>
                <table className="mt-2 w-full border-collapse border border-gray-300">
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 p-2">Potenza assorbita TN + BT</td>
                            <td className="border border-gray-300 p-2">4,82 KW</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-2">Consumo giornaliero</td>
                            <td className="border border-gray-300 p-2">116 kWh {">"} Annuo = 28.440 kWh</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-2">Risparmio medio con automatismo</td>
                            <td className="border border-gray-300 p-2">25% {">"} 7.110 kWh</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-2">Costo Medio 1 kWh</td>
                            <td className="border border-gray-300 p-2">0,16 Euro</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-2">Valorizzazione Risparmio</td>
                            <td className="border border-gray-300 p-2">1.138 Euro / anno</td>
                        </tr>
                    </tbody>
                </table>
                <p className="mt-4 text-gray-600">L&apos;evento di presentazione si è svolto il 23 marzo presso l&apos;Autodromo Nazionale di Monza.</p>
            </div>
            <DownloadBtn link={"/PDFs/EffeImpiantiColdRooms.pdf" as __next_route_internal_types__.RouteImpl<URL>} content={"Download della Presentazione"} />
        </div>
    </section >
}