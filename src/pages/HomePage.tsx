import { Link } from "react-router-dom" 
import { Home, Clock, MessageSquare, User } from "lucide-react"
import FinanceCard from "@/components/finance-card"
import ServiceButton from "@/components/service-button"
import TransactionItem from "@/components/transaction-item"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Status Bar */}
      <div className="flex justify-between items-center p-4">
        <div className="text-xl font-semibold">9:41</div>
      </div>

      {/* Header */}
      <div className="px-6 pt-4 pb-6">
        <div className="text-gray-500 text-lg">Hello,</div>
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Aurellia!</h1>
          <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-teal-500 bg-blue-500">
          </div>
        </div>
      </div>

      {/* Visa Cards */}
      <div className="px-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl text-gray-600 font-semibold">Your Visa</h2>
          <Link to="#" className="text-gray-500">
            See All
          </Link>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 -mx-2 px-2">
          <FinanceCard cardNumber="4000 5127 2123 2018" name="Aurellia" type="Premium" />
          <div className="min-w-[100px] flex items-center">
            <div className="w-full h-full bg-gray-100 rounded-xl flex items-center justify-center">
              <div className="text-blue-500 font-bold">+</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="px-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl text-gray-600 font-semibold">Services</h2>
          <Link to="#" className="text-gray-500">
            See All
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <ServiceButton icon="card" label="Card" href="#" />
          <ServiceButton icon="finance" label="Finance" href="/finance" />
          <ServiceButton icon="topup" label="Top Up" href="#" />
          <ServiceButton icon="help" label="Help" href="#" />
        </div>
      </div>

      {/* Activity */}
      <div className="px-6 mb-6 flex-1">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl text-gray-600 font-semibold">Activity</h2>
          <Link to="#" className="text-gray-500">
            See All
          </Link>
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

      {/* Bottom Navigation */}
      <div className="flex justify-around items-center py-4 border-t border-gray-200">
        <Link to="/" className="flex flex-col items-center text-blue-500">
          <Home className="h-6 w-6" />
          <div className="h-1 w-1 bg-blue-500 rounded-full mt-1"></div>
        </Link>
        <Link to="#" className="flex flex-col items-center text-gray-400">
          <Clock className="h-6 w-6" />
        </Link>
        <Link to="#" className="flex flex-col items-center text-gray-400">
          <MessageSquare className="h-6 w-6" />
        </Link>
        <Link to="#" className="flex flex-col items-center text-gray-400">
          <User className="h-6 w-6" />
        </Link>
      </div>
    </div>
  )
}
