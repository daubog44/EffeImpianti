import Link from "next/link";
import { UrlObject } from "url";

export default function DownloadBtn({ link, content }: { link: UrlObject | __next_route_internal_types__.RouteImpl<URL>, content: string }) {
    return (
        <Link href={link} target="_blank" download className="bg-gray-300 mt-5 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
            <span>{content}</span>
        </Link>
    )
}