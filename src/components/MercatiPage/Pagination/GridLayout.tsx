import Card, { CardProps } from "../Card";

interface GridLayoutProps {
    cardData: CardProps[]
}

const GridLayout = function ({ cardData }: GridLayoutProps) {
    return (
        <>
            <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
                {cardData.map(el => (
                    <div key={el.Title} className="rounded border-gray-300">
                        <Card {...el} />
                    </div>
                ))}
            </div>
        </>
    );
}

export default GridLayout;