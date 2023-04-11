'use client';

import { Tlinks } from '@/navigation';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

function useNavigationEvent(func: (page: Tlinks) => void) {
    const pathname = usePathname();

    useEffect(() => {
        const url = pathname as Tlinks;
        func(url);
    }, [pathname, func]);
}

export { useNavigationEvent }