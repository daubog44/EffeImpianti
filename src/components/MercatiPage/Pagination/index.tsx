import GridLayout from "./GridLayout";
import data from "./data";

const Pagination = function () {
    return (<section className="px-5 sm:px-10 min-h-screen py-6">
        {data.map(el => (
            <div key={el.section} className="flex flex-col items-center mb-20">
                <div className="font-Arima text-3xl text-cyan-600 py-4">{el.section}</div>
                <span className="text-lg text-start min-[480px]:text-center">{el.content}</span>
                <GridLayout cardData={el.cardData} />
            </div>
        ))}
    </section>)
}

export default Pagination;