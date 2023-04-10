import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const getIp = async () => {
  const response = await fetch("https://ipapi.co/json/");
  const data = await response.json();
  return data.ip;
};

export { getIp, classNames };

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
