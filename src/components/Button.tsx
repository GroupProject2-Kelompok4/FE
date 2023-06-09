import { FC, ButtonHTMLAttributes } from "react";

interface PrimButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const PrimButton: FC<PrimButton> = (props) => {
  const { label } = props;

  return (
    <button
      className="py-2 px-4 m-2 w-full justify-center items-center gap-2 rounded-md border text-lg bg-@primary disabled:hidden text-@EBF2FA font-bold shadow-sm align-middle hover:scale-105 focus:outline-none   transition-all text-md dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
      {...props}
    >
      {label}
    </button>
  );
};
export const SecButton: FC<PrimButton> = (props) => {
  const { label } = props;

  return (
    <button
      className="py-2 px-4 m-2 w-full justify-center items-center gap-2 rounded-md border border-@primary text-lg bg-@EBF2FA text-@primary font-bold shadow-sm align-middle hover:scale-105 focus:outline-none   transition-all text-md dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
      {...props}
    >
      {label}
    </button>
  );
};
