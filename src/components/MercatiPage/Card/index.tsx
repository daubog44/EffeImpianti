import Image from "next/image"
import Link from "next/link"

export interface CardProps {
    Title: string
    ImageUrl: string
    content: string
    CaseStudy?: string
}

const Card = function ({ Title, ImageUrl, content, CaseStudy }: CardProps) {
    return (
        <div
            className="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8 h-full"
        >
            <div className="pt-4 text-gray-500">
                <div className="relative h-8 w-8 sm:h-10 sm:w-10">
                    <Image src={ImageUrl} alt={ImageUrl} fill />
                </div>

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                    {Title}
                </h3>

                <p className="mt-2 hidden text-sm sm:block">
                    {content}
                </p>
            </div>
            {CaseStudy &&
                <Link
                    className="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600" href={CaseStudy as __next_route_internal_types__.RouteImpl<URL>}>
                    Case study
                </Link>
            }
        </div >
    )
}

export default Card;