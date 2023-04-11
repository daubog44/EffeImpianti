import { HeroSection, MissionSection, CertificationSection } from "@/components/AziendaPage";
import dynamic from 'next/dynamic';
const OrgChart = dynamic(() => import('../../components/AziendaPage/OrgChart'), { ssr: false });


export default function Azienda() {
    return (<div>
        <HeroSection />
        <MissionSection />
        <CertificationSection />
        <OrgChart />
    </div>)
}