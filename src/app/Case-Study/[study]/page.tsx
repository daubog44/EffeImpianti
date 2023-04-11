import dataStudies, { caseStudies } from "../data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return caseStudies.map((slug) => ({
        slug,
    }));
}

export default function CaseStudyD({
    params,
}: {
    params: { study: string };
}) {
    const { study } = params;
    const data = dataStudies.find(el => el.id === study);
    const HeroProps = data?.content;
    const GalleryProps = data?.galleryProps;
    if (!HeroProps || !GalleryProps) notFound();

    return (
        <>
            <HeroProps.MainContent />
        </>
    )
}