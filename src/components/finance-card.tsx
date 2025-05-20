import { Card } from "@/components/ui/card"

interface FinanceCardProps {
  cardNumber: string
  name: string
  type: string
}
function FinanceCard({ cardNumber, name, type }: FinanceCardProps) {
  return (
    <Card className="min-w-[280px] h-44 bg-gradient-to-r from-blue-500 to-teal-400 text-white p-5 rounded-xl flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <div className="h-8 w-8">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
              <path
                d="M3 10H21M7 15H9M12 15H14M6 19H18C19.6569 19 21 17.6569 21 16V8C21 6.34315 19.6569 5 18 5H6C4.34315 5 3 6.34315 3 8V16C3 17.6569 4.34315 19 6 19Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="text-sm font-medium">{type}</div>
      </div>
      <div className="text-xl tracking-wider">{cardNumber}</div>
      <div className="flex justify-between items-end">
        <div className="text-lg">{name}</div>
        <div className="text-2xl font-bold">VISA</div>
      </div>
    </Card>
  )
}


export default FinanceCard;