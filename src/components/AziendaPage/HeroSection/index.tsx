import Image from "next/image";

const HeroSection = function () {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div className="max-w-3xl">
                    <h2 className="text-3xl font-bold sm:text-4xl">
                        Impianti industriali, civili e tecnologici di alto livello.
                    </h2>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                        <Image
                            alt="Effe impianti"
                            fill
                            src="/images/EffeImmpianti.jpg"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>
                    <div className="lg:py-16">
                        <article className="space-y-4 text-gray-600">
                            <p>
                                Fondata nel 2004, Effe Impianti concentra la sua attività nella progettazione, installazione e manutenzione di impianti tecnologici industriali e civili: con professionalità, flessibilità e affidabilità risponde all&apos;esigenza di aziende, uffici, locali ed enti pubblici, di dotarsi di impianti all&apos;avanguardia. L&apos;azienda può contare su operatori e consulenti di comprovate competenze tecniche e logistiche, ed offre un servizio a 360°, dalla consulenza alla progettazione, fino all&apos;installazione e al collaudo dell&apos;impianto.
                            </p>
                            <p>
                                Gli operatori specializzati dell&apos;azienda coordinano e controllano i vari settori di attività, curando il servizio nelle sue fasi preventiva, esecutiva, di assistenza e di pronto intervento: operando in tutte le fasi di realizzazione impiantistica, Effe Impianti garantisce alla propria clientela elevati standard di sicurezza ed efficienza grazie alla costante azione di monitoraggio e adeguamento a tutti i parametri qualitativi e normativi indispensabili per certificare l&apos;idoneità dell&apos;impianto e per assicurare un concreto contenimento del consumo energetico.
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;