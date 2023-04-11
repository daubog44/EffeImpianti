"use client";
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import type { DataImpianti } from "../../../app/Impianti/data";

export default function ImpiantiDisclosures({ data }: { data: DataImpianti }) {

    return (
        <div className="w-full pb-16">
            <div className="w-full rounded-2xl bg-white p-2">
                {data.map(el => (<Disclosure as="div" key={el.title} className="mt-2 relative">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-start rounded-lg bg-cyan-200 px-4 py-2 text-center items-center text-sm font-medium text-blue-900 hover:bg-cyan-300 focus:outline-none focus-visible:ring focus-visible:ring-cyan-600 focus-visible:ring-opacity-75">
                                <span>{el.title}</span>
                                <ChevronUpIcon
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-blue-700 absolute right-4`}
                                />
                            </Disclosure.Button>

                            <Transition
                                show={open}
                                enter="transition duration-200 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-200 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-200 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel static className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    {el.description}
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>))}
            </div>
        </div>
    )
}
