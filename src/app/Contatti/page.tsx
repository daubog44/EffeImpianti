import { ContactInfo } from "@/components/ContattiPage";

const Contatti = async function () {
    // const data = await new Promise(res => { res(0) }); 

    return (
        <>
            {/* @ts-expect-error Async Server Component */}
            <ContactInfo />
        </>
    );
}

export default Contatti;