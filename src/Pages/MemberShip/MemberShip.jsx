import {loadStripe} from '@stripe/stripe-js';
import {Elements,} from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETEWAY_PK)
const MemberShip = () => {
    return (
        <div>
            <h1>become a member of our forum , you shoud pay $20 dollars . </h1>

            <Elements stripe={stripePromise}>
                <CheckOutForm/>
            </Elements>

        </div>
    );
};

export default MemberShip;