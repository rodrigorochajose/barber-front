import { forwardRef } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const LabeledInput = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, error, ...props }, ref) => {
    const baseInputClasses =
      "w-full appearance-none rounded-lg border bg-transparent px-3 py-2.5 text-gray-900 placeholder-gray-400 transition-colors duration-300 focus:outline-none";

    const errorClasses =
      "border-red-500 focus:border-red-500 focus:ring-red-500";
    const defaultClasses =
      "border-gray-300 focus:border-accent-orange focus:ring-accent-orange";

    return (
      <div className="w-full">
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-600 mb-1.5"
        >
          {label}
        </label>
        <input
          id={id}
          ref={ref}
          {...props}
          className={`${baseInputClasses} ${
            error ? errorClasses : defaultClasses
          }`}
        />
        {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
      </div>
    );
  }
);

LabeledInput.displayName = "LabeledInput";
