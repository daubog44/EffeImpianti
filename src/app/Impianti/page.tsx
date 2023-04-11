"use client";
import { ImpiantiDisclosures, HeroSection } from "@/components/ImpiantiPage";
import data from "./data";

export default function Impianti() {
    return (
        <div className="px-6">
            <HeroSection subDescription="Effe Impianti si occupa dell'installazione di ogni impianto in tutte le sue fasi: progettazione e realizzazione sono effettuate rispondendo alle esigenze e alle aspettative peculiari di ogni cliente, e hanno come esito un impianto personalizzato, perfettamente adattato alla concreta situazione di utilizzo." titleBlackPart="Sei pronto" titleBluePart="per i nostri impianti?" />
            <ImpiantiDisclosures data={data} />
        </div>
    )
}