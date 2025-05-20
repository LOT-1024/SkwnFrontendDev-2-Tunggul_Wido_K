import { CreditCard, DollarSign, BarChart3, HelpCircle } from "lucide-react"
import { Link } from "react-router-dom"

interface ServiceButtonProps {
  icon: "card" | "finance" | "topup" | "help"
  label: string
  href: string
}

function ServiceButton({ icon, label, href }: ServiceButtonProps) {
  return (
    <Link to={href} className="flex flex-col items-center">
      <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-2">
        {icon === "card" && <CreditCard className="h-6 w-6 text-blue-500" />}
        {icon === "finance" && <DollarSign className="h-6 w-6 text-blue-500" />}
        {icon === "topup" && <BarChart3 className="h-6 w-6 text-blue-500" />}
        {icon === "help" && <HelpCircle className="h-6 w-6 text-blue-500" />}
      </div>
      <span className="text-sm text-gray-700">{label}</span>
    </Link>
  )
}

export default ServiceButton;