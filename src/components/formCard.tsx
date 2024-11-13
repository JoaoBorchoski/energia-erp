interface FormCardProps {
  title: string
  children: React.ReactNode
}

export default function FormCard({ children, title }: FormCardProps) {
  return (
    <div className="w-full mt-4">
      <div className="w-full bg-formBorder py-2 flex items-center justify-center rounded-t-md text-white">
        <h1>{title}</h1>
      </div>
      {children}
    </div>
  )
}
