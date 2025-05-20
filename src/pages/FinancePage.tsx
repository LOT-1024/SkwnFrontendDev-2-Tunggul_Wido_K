import { Link } from "react-router-dom"
import { ArrowLeft, HelpCircle } from "lucide-react"
import FinanceChart from "@/components/finance-chart"
import TransactionItem from "@/components/transaction-item"

export default function FinancePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Status Bar */}
      <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-500 to-teal-400 text-white">
        <div className="text-xl font-semibold">9:41</div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-teal-400 text-white p-6 pb-12">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <Link to="/">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-2xl font-semibold">Account Finance</h1>
          </div>
          <HelpCircle className="h-6 w-6" />
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-2">Rp. 25.550.000,-</h2>
          <div className="text-lg">12 June 2022</div>
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-white -mt-6 rounded-t-3xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl text-gray-600 font-semibold">Statistics</h2>
          <Link to="/statistics" className="text-gray-500">
            See All
          </Link>
        </div>
        <div className="h-64">
          <FinanceChart />
        </div>
      </div>

      {/* History */}
      <div className="bg-white p-6 flex-1">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl text-gray-600 font-semibold">History</h2>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Category</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6L8 10L12 6" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="space-y-4">
          <TransactionItem
            type="deposit"
            amount="Rp15.510.000,-"
            location="Bank Mandiri ATM"
            date="11 March 2022"
            time="11.21 AM"
          />
          <TransactionItem
            type="withdraw"
            amount="Rp15.510.000,-"
            location="Bank Mandiri ATM"
            date="11 March 2022"
            time="11.22 AM"
          />
          <TransactionItem
            type="withdraw"
            amount="Rp15.510.000,-"
            location="Bank Mandiri ATM"
            date="11 March 2022"
            time="11.23 AM"
          />
        </div>
      </div>
    </div>
  )
}
