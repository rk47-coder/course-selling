
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe("pk_test_51RBTVME7EKZm9cpttb1C2q2bhpnlh92vxIU690Jus5iThajaiDNHG9jMKtV3JOB1xg13HTgwyCZNdNs6uLcnLIqM00ettpXh2V");

createRoot(document.getElementById('root')).render(

   <Elements stripe={stripePromise}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
  
    </Elements>

)
