import data from "@/app/Mercati-e-Clienti/data";
import WalkInAColdRooms from "@/components/CaseStudyPage/Contents/WalkInAColdRooms";
import SilvanoContent from "@/components/CaseStudyPage/Contents/SilvanoContent";

export const caseStudies = data
  .flatMap((el) => el.cardData.map((el) => el?.CaseStudy?.split("/").at(-1)))
  .filter(Boolean);

type heroSectionProps = { MainContent: () => JSX.Element };

const dataStudies = [
  {
    id: "Silvano-Chiapparoli-Logistica",
    content: {
      MainContent: SilvanoContent,
    } satisfies heroSectionProps,
    galleryProps: {
      gallery: [
        "/images/CaseStudy/Silvano-Chiapparoli-Logistica/th_0900_MG_0702_miniatura.jpg",
        "/images/CaseStudy/Silvano-Chiapparoli-Logistica/th_0848_MG_0697_miniatura.jpg",
        "/images/CaseStudy/Silvano-Chiapparoli-Logistica/th_0908YN6M0516_miniatura.jpg",
        "/images/CaseStudy/Silvano-Chiapparoli-Logistica/th_0907_MG_9225_miniatura.jpg",
        "/images/CaseStudy/Silvano-Chiapparoli-Logistica/th_0907_MG_9192_miniatura.jpg",
        "/images/CaseStudy/Silvano-Chiapparoli-Logistica/th_0906_MG_9109_miniatura.jpg",
        "/images/CaseStudy/Silvano-Chiapparoli-Logistica/th_0847_MG_0684_miniatura.jpg",
        "/images/CaseStudy/Silvano-Chiapparoli-Logistica/th_0909YN6M8716_miniatura.jpg",
        "/images/CaseStudy/Silvano-Chiapparoli-Logistica/th_0906_MG_9140_miniatura.jpg",
        "/images/CaseStudy/Silvano-Chiapparoli-Logistica/th_0905_MG_0834_miniatura.jpg",
        "/images/CaseStudy/Silvano-Chiapparoli-Logistica/th_0911YN6M8760_miniatura.jpg",
        "/images/CaseStudy/Silvano-Chiapparoli-Logistica/th_0900_MG_0720_miniatura.jpg",
      ],
    },
  },
  {
    id: "Walk-In-a-cold-rooms",
    content: {
      MainContent: WalkInAColdRooms,
    } satisfies heroSectionProps,
    galleryProps: {
      gallery: [
        "/images/CaseStudy/WalkInAColdRooms/th_125928_EffeImpiantiMonza2011_miniatura.jpg",
        "/images/CaseStudy/WalkInAColdRooms/th_125724_EffeImpiantiMonza2011_miniatura.jpg",
        "/images/CaseStudy/WalkInAColdRooms/th_125202_EffeImpiantiMonza2011_miniatura.jpg",
        "/images/CaseStudy/WalkInAColdRooms/th_125306_EffeImpiantiMonza2011_miniatura.jpg",
        "/images/CaseStudy/WalkInAColdRooms/th_125826_EffeImpiantiMonza2011_miniatura.jpg",
        "/images/CaseStudy/WalkInAColdRooms/th_125825_EffeImpiantiMonza2011_miniatura.jpg",
        "/images/CaseStudy/WalkInAColdRooms/th_125201_EffeImpiantiMonza2011_miniatura.jpg",
        "/images/CaseStudy/WalkInAColdRooms/th_125619_EffeImpiantiMonza2011_miniatura.jpg",
        "/images/CaseStudy/WalkInAColdRooms/th_125516_EffeImpiantiMonza2011_miniatura.jpg",
        "/images/CaseStudy/WalkInAColdRooms/th_125307_EffeImpiantiMonza2011_miniatura.jpg",
        "/images/CaseStudy/WalkInAColdRooms/th_125515_EffeImpiantiMonza2011_miniatura.jpg",
        "/images/CaseStudy/WalkInAColdRooms/th_125620_EffeImpiantiMonza2011_miniatura.jpg",
      ],
    },
  },
];

export type TdataStudies = typeof dataStudies;
export default dataStudies;
