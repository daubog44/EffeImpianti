import { WithIntersectionObserver } from "@/components/HOCs";
import { Switch } from '@headlessui/react'
import { classNames } from "../../../utils/utilsFunctions";
import Link from 'next/link';
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import schema, { SchemaType } from './schemaValidation';
import { useState, useEffect, useRef } from 'react'
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { zodResolver } from '@hookform/resolvers/zod';
import useStore from '@/store';

function FormContent() {
    const phoneInput = useRef<HTMLElement>();
    const [isSubmitted, setIsSubmitted] = useStore((state) => [state.emailSend, state.setEmailSend]);
    const [agreed, setAgreed] = useState(false);
    const { register, handleSubmit, control, formState: { errors } } = useForm<SchemaType>({
        resolver: zodResolver(schema),
    });
    const onSubmit = handleSubmit(async (data) => {
        if (!agreed) {
            return toast.error("Devi accettare le politiche di privacy!");
        }

        const JSONdata = JSON.stringify(data);
        const endpoint = '/api/contact-us';

        const options = {
            // The method is POST because we are sending data.
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSONdata,
        };
        const response = await fetch(endpoint, options);
        const result = await response.json();
        console.log(result);
        result.success ? setIsSubmitted(true) : toast.error(`Errore: ${result.message}`);
    });

    useEffect(() => {
        Object.values(errors).map(obj => toast.error(obj?.message));
    }, [errors]);

    useEffect(() => {
        if (phoneInput.current) {
            phoneInput.current.className = "w-full border-gray-300 ring-gray-300";
        }
    }, [phoneInput]);


    return (
        <>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-Arima">Contattaci!</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    Progettazione, installazione e manutenzione di impianti termici e di condizionamento industriali e civili a Monza e Brianza e in Lombardia
                </p>
            </div>
            <form onSubmit={onSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-gray-900">
                            First name
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                {...register("firstName")}
                                id="firstName"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-gray-900">
                            Last name
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                {...register("lastName")}
                                id="lastName"
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="email"
                                {...register("email")}
                                id="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="phoneInputWithCountrySelect" className="block text-sm font-semibold leading-6 text-gray-900">
                            Phone number
                        </label>
                        <div className="relative mt-2.5">
                            <PhoneInputWithCountry
                                ref={phoneInput}
                                defaultCountry='IT'
                                name="phoneInputWithCountrySelect"
                                control={control}
                                rules={{ required: false }}
                                autoComplete='tel'
                                className='px-3.5 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                            Message
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                {...register("message")}
                                id="message"
                                rows={4}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={''}
                            />
                        </div>
                    </div>
                    <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                        <div className="flex h-6 items-center">
                            <Switch
                                checked={agreed}
                                onChange={setAgreed}
                                className={classNames(
                                    agreed ? 'bg-indigo-600' : 'bg-gray-200',
                                    'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                )}
                            >
                                <span className="sr-only">Agree to policies</span>
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        agreed ? 'translate-x-3.5' : 'translate-x-0',
                                        'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                                    )}
                                />
                            </Switch>
                        </div>
                        <Switch.Label className="text-sm leading-6 text-gray-600">
                            By selecting this, you agree to our{' '}
                            <Link href="/legal#Privacy-Policy" className="font-semibold text-indigo-600">
                                privacy&nbsp;policy
                            </Link>
                            .
                        </Switch.Label>
                    </Switch.Group>
                </div>
                <div className="mt-10">
                    <button
                        disabled={isSubmitted}
                        type="submit"
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    // eslint-disable-next-line react/no-unescaped-entities
                    >Let's talk</button>
                </div>
            </form>
        </>
    )
}

export default WithIntersectionObserver(FormContent);