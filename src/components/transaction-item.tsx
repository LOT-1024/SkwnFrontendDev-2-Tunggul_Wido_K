import { TrendingUp, TrendingDown } from "lucide-react"

interface TransactionItemProps {
  type: "deposit" | "withdraw"
  amount: string
  location: string
  date: string
  time: string
}

function TransactionItem({ type, amount, location, date, time }: TransactionItemProps) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-lg border border-gray-100">
      <div
        className={`h-12 w-12 rounded-full flex items-center justify-center ${type === "deposit" ? "bg-blue-100" : "bg-red-100"}`}
      >
        {type === "deposit" ? (
          <TrendingUp className="h-6 w-6 text-blue-500" />
        ) : (
          <TrendingDown className="h-6 w-6 text-red-500" />
        )}
      </div>
      <div className="flex-1">
        <div className="flex justify-between">
          <div className="font-semibold text-gray-900">{type === "deposit" ? "Deposit" : "Withdraw"}</div>
          <div className="text-right">{date}</div>
        </div>
        <div className="flex justify-between mt-1">
          <div className={`font-medium ${type === "deposit" ? "text-blue-500" : "text-red-500"}`}>{amount}</div>
          <div className="text-right text-gray-500">{time}</div>
        </div>
        <div className="flex items-center gap-1 mt-2 text-gray-500 text-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
              stroke="#6B7280"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z"
              stroke="#6B7280"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>{location}</span>
        </div>
      </div>
    </div>
  )
}

export default TransactionItem;