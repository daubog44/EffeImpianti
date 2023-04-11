"use client";
import { Tab } from '@headlessui/react'
import { classNames } from '@/utils/utilsFunctions'
import "./style.css";
import type { Tcategories } from '@/app/Servizi/data';

const Tabs = ({ categories }: { categories: Tcategories }) => {
    return (
        <section className='starsSection z-[20]'>
            <div className="w-full px-4 sm:px-20 py-16 relative z-[10]">
                <Tab.Group>
                    <Tab.List className="flex sm:flex-row flex-col space-x-1 rounded-xl bg-blue-900/20 p-1">
                        {Object.keys(categories).map((category) => (
                            <Tab
                                key={category}
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 px-4',
                                        selected
                                            ? 'bg-white shadow'
                                            : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                    )
                                }
                            >
                                {category}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels className="mt-2">
                        {Object.values(categories).map((val, idx) => (
                            <Tab.Panel
                                key={idx}
                                className={classNames(
                                    'rounded-xl bg-transparent backdrop-blur-sm p-3',
                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                )}
                            >
                                <p className='text-lg text-zinc-200 text-ellipsis'>{val}</p>
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </section>)
}

export default Tabs;