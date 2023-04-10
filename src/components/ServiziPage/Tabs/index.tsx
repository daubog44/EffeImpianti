"use client";
import { Tab } from '@headlessui/react'
import { classNames } from '@/utils/utilsFunctions'
import "./style.css";

const categories = {
    "Adeguamento": "Effe Impianti cura in modo particolare la propria posizione e azione all’interno del quadro normativo vigente per l'impiantistica industriale e civile: tra i servizi offerti dall'azienda, anche quello di adeguamento, ossia di riqualifica degli impianti esistenti secondo le normative aggiornate.",
    "Assistenza e Manutenzione": `Tra i servizi offerti da vanno annoverate, in quanto prima fase di sviluppo di un nuovo impianto, la progettazione e l’opera di consulenza che ne permettono un’ottimale realizzazione: la personalizzazione e la flessibilità progettuale sono garanzia di completa soddisfazione dei propri clienti per l’installazione progettata, e in seguito realizzata e messa in funzione.
Tra gli altri servizi basilari, caratterizzati da altissimi standard di qualità, vengono offerte Consulenza, Manutenzione e tutta l'opera di Assistenza e Formazione per garantire la completa efficienza ed adeguatezza dell'impianto; la manutenzione costituisce un servizio di punta dell'azienda: ordinaria, programmata e/o straordinaria, è effettuata su chiamata e con reperibilità, e secondo i migliori standard di velocità e qualità, per salvaguardare la piena efficienza degli impianti in funzione.

Conscia della propria forza professionale e qualitativa, Effe Impianti offre il suo operato in questi servizi anche qualora questi vengano richiesti per impianti esistenti.`,
    "Progettazione, Consulenza e Formazione": `Effe Impianti progetta impianti su misura per i clienti, valutando gli aspetti logistici e collaborando con uno studio termotecnico partner. Dopo una fase di studio di fattibilità e scelta dei materiali, l’impianto viene progettato, realizzato e collaudato. Al termine dell’installazione viene rilasciato il progetto iniziale conforme alle normative vigenti. L’azienda offre anche un servizio di consulenza con addetti e tecnici esperti e un servizio di formazione per gli operatori dell’impianto.`,
};

const Tabs = () => {
    return (
        <section className='starsSection z-[20]'>
            <div className="w-full px-4 sm:px-20 py-16 relative z-[10]">
                <Tab.Group>
                    <Tab.List className="flex sm:flex-row flex-col space-x-1 rounded-xl bg-blue-900/20 p-1">
                        {Object.keys(categories).map((category) => (
                            <Tab
                                key={category}
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 px-4',
                                        selected
                                            ? 'bg-white shadow'
                                            : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                    )
                                }
                            >
                                {category}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels className="mt-2">
                        {Object.values(categories).map((val, idx) => (
                            <Tab.Panel
                                key={idx}
                                className={classNames(
                                    'rounded-xl bg-transparent backdrop-blur-sm p-3',
                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                )}
                            >
                                <p className='text-lg text-zinc-200 text-ellipsis'>{val}</p>
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </section>)
}

export default Tabs;