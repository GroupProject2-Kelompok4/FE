import { FC, ButtonHTMLAttributes } from "react";

interface PrimButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const PrimButton: FC<PrimButton> = (props) => {
  const { label } = props;

  return (
    <button
      className="py-2 px-4 w-full justify-center items-center gap-2 rounded-md border bg-@19345E disabled:hidden text-@EBF2FA shadow-sm align-middle hover:scale-105 focus:outline-none   transition-all dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
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
      className="py-2 px-4 w-full justify-center items-center gap-2 rounded-md border border-@19345E text-lg bg-@EBF2FA text-@19345E font-bold shadow-sm align-middle hover:scale-105 focus:outline-none   transition-all text-md dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
      {...props}
    >
      {label}
    </button>
  );
};
