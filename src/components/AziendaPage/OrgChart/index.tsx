"use client";
import { Tree, TreeNode } from 'react-organizational-chart';
import CardOfChart from './CardOfChart';

const OrgChart = function () {
    return (
        <section className='py-10 sm:py-20 rounded-3xl'>
            <h1 className="flex justify-center mb-8 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">Lo Staff</h1>
            <div className='mb-10 px-10 container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8'>
                <CardOfChart role="Direzione Aquisti" />
                <CardOfChart role="Direzione Del Personale" />
                <CardOfChart role="Settore Refrigerazione" />
                <CardOfChart role="Settore Idrico-Sanitario" />
                <CardOfChart role="Assicurazione Qualità" />
            </div>


            <Tree
                lineWidth={'4px'}
                lineColor={'black'}
                lineBorderRadius={'10px'}
                label={<CardOfChart role="Dirigente Generale" />}
            >
                <TreeNode label={<CardOfChart role="Responsabile Sicurezza" />} />

                <TreeNode label={<CardOfChart role="Dirigente Commerciale" />}>
                    <TreeNode label={<CardOfChart role="Direzione Amministrativa" />} />
                </TreeNode>

                <TreeNode label={<CardOfChart role="Assicurazione Qaulità" />}>
                    <TreeNode label={<CardOfChart role="Direzione Tecninca" />}>
                        <TreeNode label={<CardOfChart role="Pianificazione" />} />
                    </TreeNode>
                </TreeNode>
            </Tree>
        </section>)
}

export default OrgChart;