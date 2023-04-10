import Image from "next/image"
import DownloadBtn from "../DownloadBtn";

const MissionSection = function () {
    return (
        <section>
            <div
                className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
            >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div
                        className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
                    >
                        <Image
                            fill
                            alt="EffeImpianti"
                            src="/images/EffeImpianti2.jpg"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>

                    <div className="lg:py-24">
                        <h2 className="text-3xl font-bold sm:text-4xl">Il nostro obbiettivo</h2>

                        <p className="mt-4 text-gray-600">
                            L'obiettivo dell'operato dell'azienda monzese è la creazione di un impianto che risponda ai parametri tecnici e normativi indispensabili al suo funzionamento: a questo si aggiunge la cura particolare per assicurare prodotti e servizi altamente qualitativi. La certezza di un impianto personalizzato e caratterizzato da un alto livello di efficienza è certamente il punto di forza dell'azienda, che mette a disposizione delle necessità del cliente la propria professionalità e competenza, nell'attenzione costante a tutti gli aspetti dell'installazione.
                        </p>

                        <DownloadBtn link="/PDFs/EffeImpiantiCompanyProfile2011.pdf" content="Download Company Profile" />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default MissionSection;