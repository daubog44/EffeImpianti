import Image from 'next/image';
import DownloadBtn from "../DownloadBtn";

const CertificationSection = function () {
    return (
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                </svg>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <p className="text-base font-semibold leading-7 text-indigo-600">Perchè sceglierci?</p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Certificazioni</h1>
                            <p className="mt-6 text-xl leading-8 text-gray-700">
                                L'attenzione all’efficienza e alla funzionalità delle proprie realizzazioni è testimoniata dall’adeguamento costante alle normative vigenti, e comprovata dall’ottenimento delle certificazioni necessarie ad assicurarne l’idoneità. Il continuo miglioramento del livello qualitativo del prodotto e dell’affidabilità del servizio offerto è l’obiettivo primario sin dalla stesura del progetto, al fine di poter garantire l’aderenza alle aspettative del cliente, così come alle normative nazionali ed europee: l’impegno assiduo nell’aggiornamento di tecniche e procedure è sfociato nel raggiungimento della certificazione UNI EN ISO 9001:2015.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-ml-12 -mt-12 p-12 max-[330px]:pr-0 lg:col-start-2 lg:row-span-2 lg:row-start-1 max-sm:flex max-sm:justify-start lg:sticky lg:top-4">
                    <div className='relative block max-[330px]:w-full w-[30rem] min-[425px]:w-[20rem] h-[25rem] sm:h-[40rem] max-w-none sm:w-[30rem]'>
                        <Image
                            className="shadow-xl ring-1 ring-gray-400/10"
                            src="/images/CertificatoEffeImpianti.webp"
                            alt=""
                            fill
                        />
                    </div>
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Politica della qualità</h2>
                            <p className="my-6">
                                Con il presente documento la Direzione Generale descrive i principi e le linee guida sulla base delle quali definisce gli obiettivi per la qualità ed i processi necessari a conseguirli. La politica della qualità non è un semplice "manifesto" pubblicitario o un documento astratto, ma il punto di partenza per la definizione di obiettivi di qualità che devono essere perseguiti, verificati e dimostrati. Essa non è rivolta solo all'esterno, ma diffusa principalmente al personale interno che ne costituisce il diretto artefice; a tal proposito questo documento viene affisso in opportune aree aziendali in modo che possa essere liberamente consultato. In questa ottica, è dunque considerata l’elemento necessario a garantire il perseguimento delle esigenze ed aspettative di tutte le parti interessate, dai titolari, ai dipendenti, ai collaboratori, ai clienti, ai fornitori, e a chiunque venga a contatto con l'azienda stessa. Il contesto attuale in cui opera l’azienda è contraddistinto da una continua ricerca del massimo ribasso del costo relativo alla realizzazione degli impianti e all’erogazione dei servizi, a parità di livello qualitativo e prestazionale. Per rispondere adeguatamente alle sfide richieste dal contesto e ai rischi correlati, Effe Impianti si pone come obiettivo primario di essere riconosciuta come fornitore di impianti tecnologicamente avanzati, affidabili, di buona qualità e di costo competitivo. In questo ambito il sistema di gestione per la qualità adottato da Effe Impianti S.r.l. prende come riferimento i requisiti specificati dalla norma UNI EN ISO 9001:2015. Effe Impianti S.r.l. si propone inoltre di consolidare e migliorare la propria posizione sul mercato, per permettere una costante crescita ed innovazione dell'azienda, anche grazie e soprattutto all’aumento della soddisfazione dei clienti. Effe Impianti ricerca costantemente la piena soddisfazione del cliente mediante la fornitura di impianti e prodotti conformi alle specifiche dichiarate, un servizio accurato e veloce, celerità nella elaborazione delle offerte e nei rapporti commerciali e tempi di consegna rapidi. Il miglioramento di quanto sopra descritto può essere ottenuto soltanto mediante un costante controllo dei processi interni e della struttura aziendale; per migliorare la qualità e ottimizzare i costi Effe Impianti è continuamente impegnata sia nella ricerca delle cause di non conformità e di inefficienza che nello sviluppo di attività di miglioramento continuo delle prestazioni. Questo comporta un pieno coinvolgimento del personale dell’azienda che deve sentirsi partecipe dei risultati conseguiti mediante il suo contributo; per questo motivo la Direzione Generale di Effe Impianti si impegna a mettere a disposizione le risorse necessarie a promuovere l’apporto di ogni singolo componente dell’azienda all’ottenimento della qualità degli impianti realizzati e a condividere ed approvare ogni sforzo teso al miglioramento. La politica della qualità è periodicamente ridiscussa ed aggiornata in modo da realizzare il miglioramento continuo perfezionando nel tempo la propria strategia di qualità. La presente politica della qualità è perseguita mediante l’individuazione di specifici e coerenti obiettivi periodicamente aggiornati in occasione dei riesami di direzione periodici relativi al sistema di gestione per la qualità.
                            </p>
                            <div className='flex max-sm:flex-col max-sm:w-fit sm:justify-between'>
                                <DownloadBtn link="/PDFs/CertificatoEffeImpianti.pdf" content="Vedi il certificato" />
                                <DownloadBtn link="/PDFs/CertificatoSOA.pdf" content="Vedi il certificato SOA" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CertificationSection;