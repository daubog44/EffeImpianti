import { FC } from "react";

interface props {
    titleBlackPart: string, titleBluePart: string, subDescription: string
}

const Title: FC<props> = function ({ titleBlackPart, titleBluePart, subDescription }) {
    return (<div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800 text-center">
            <div className="flex justify-center">
                <div className="max-w-[800px]">
                    <h2 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                        {titleBlackPart}<br />
                        <span className="text-blue-600">{titleBluePart}</span>
                    </h2>
                    <p className="text-gray-500 text-lg">
                        {subDescription}
                    </p>
                </div>
            </div>
        </section>
    </div>);
}

export default Title;