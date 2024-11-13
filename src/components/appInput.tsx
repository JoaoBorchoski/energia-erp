import { Input } from "./ui/input"

type iAppInput = {
  label: string
  name: string
  register: any
  errors: any
  className: string
  required?: boolean
  disabled?: boolean
  type?:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week"
}

export default function AppInput({ label, name, register, errors, className, required, disabled, type = "text" }: iAppInput) {
  return (
    <div className={className}>
      <label className="text-sm font-medium text-gray-700">
        {label} {required ? <span className="text-red-600 font-bold ml-1">*</span> : null}
      </label>
      <Input
        type={type}
        disabled={disabled}
        {...register(name, { valueAsNumber: type === "number" })}
        className="focus:border-formBorder focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-offset-0 transition-colors duration-300"
      />
      {errors?.[name] && <p className="text-red-500 text-xs">{errors[name].message}</p>}
    </div>
  )
}
