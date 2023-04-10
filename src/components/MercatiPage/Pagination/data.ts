const data = [
  {
    section: "Impiantistica industriale e civile",
    backgrounfColor: "",
    content:
      "L'attività nel settore industriale e civile si concentra nella progettazione e realizzazione di impiantistica in ambito farmaceutico, alimentare e per uffici e complessi residenziali: ogni impianto è ideato e costruito secondo le esigenze e le caratteristiche di ogni settore, grazie all'impiego delle migliori tecnologie e della professionalità dei propri tecnici.",
    cardData: [
      {
        Title: "Licenziatari UNES",
        ImageUrl: "/images/clienti/Unes.jpg",
        content: "Manutenzione banchi refrigerati.",
      },
      {
        Title: "Rovagnati S.p.A.",
        ImageUrl: "/images/clienti/Rovagnati.jpg",
        content:
          "Installazione e manutenzione di impianti di condizionamento, riscaldamento, ventilazione, aspirazione, frigoriferi, idrico sanitario.",
      },
      {
        Title: "Silvano Chiapparoli Logistica S.p.A.",
        ImageUrl: "/images/clienti/SilvanoChiapparoli.jpg",
        content:
          "Installazione e manutenzione di impianti di condizionamento, riscaldamento, antincendio, celle refrigerate, pannelli solari, idrico sanitario.",
        CaseStudy: "/Case-Study" as const,
      },
      {
        Title: "STM Group S.r.l.",
        ImageUrl: "/images/clienti/STMgroup.jpg",
        content:
          "Installazione e manutenzione di impianti di condizionamento, riscaldamento, celle refrigerate, idrico sanitario.",
      },
      {
        Title: "Appartamenti e Uffici",
        ImageUrl: "/images/clienti/Edifici.jpg",
        content:
          "Installazione impianti di condizionamento, riscaldamento, pannelli solari, idrico sanitario.",
      },
    ],
  },
  {
    section: "Impiantistica per locali commerciali e ambienti pubblici",
    content:
      "Effe Impianti progetta e realizza impianti per il settore commerciale garantendo professionalità e completa aderenza agli standard normativi e qualitativi richiesti dal particolare ambito: la propria esperienza è testimoniata dalle realizzazioni per complessi sportivi e operatori della ristorazione",
    cardData: [
      {
        Title: "Autodromo Nazionale di Monza S.p.A.",
        ImageUrl: "/images/clienti/AutodromoMonza.jpg",
        content:
          "Manutenzione impianti di condizionamento, riscaldamento, idrico sanitario.",
      },
      {
        Title: "McDonald's",
        ImageUrl: "/images/clienti/McDonalds.jpg",
        content:
          "Installazione e manutenzione di impianti di condizionamento, riscaldamento, celle refrigerate, frigoriferi, idrico sanitario.",
        CaseStudy: "/Case-Study" as const,
      },
    ],
  },
  {
    section: "Impiantistica per enti pubblici e privati",
    content:
      "La particolare attenzione prestata al settore degli enti privati e pubblici sfocia nella realizzazione di numerose tipologie di impianto in diversi ambiti: ne sono un esempio le installazioni portate a termine in ambito sanitario, universitario e militare.",
    cardData: [
      {
        Title: "Accademia della Guardia di Finanza",
        ImageUrl: "/images/clienti/GuardiaDiFinanza.jpg",
        content:
          "Manutenzione impianti di condizionamento, riscaldamento, antincendio, idrico sanitario.",
      },
      {
        Title: `Azienda Ospedaliera "Guido Salvini" Garbagnate Milanese`,
        ImageUrl: "/images/clienti/AOSalvini.jpg",
        content: "Manutenzione impianti di condizionamento, riscaldamento.",
      },
      {
        Title: "Politecnico di Milano",
        ImageUrl: "/images/clienti/PolitecnicoDiMilano.jpg",
        content:
          "Installazione e manutenzione impianti di condizionamento, riscaldamento, antincendio, camere fredde, camere termostatizzate, idrico sanitario",
      },
    ],
  },
];

export type TData = typeof data;

export default data;
