import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hook/useAxiosPublic";
import useAuth from "../../hook/useAuth";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'


const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [processing, setProcessing] = useState(false)
    const [cardError, setCardError] = useState('')
    const [clientSecret,setClientSecret]=useState('')
    const axiosPublic=useAxiosPublic()
    const {user}=useAuth()
    const navigate=useNavigate()

    useEffect(()=>{
         axiosPublic.post('/create-payment-intent',{price:20})
         .then(res=>{
            console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
         })
    },[axiosPublic,])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setProcessing(true)
        if (!stripe || !elements) {
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            setCardError(error.message)
            console.log('[error]', error);
            setProcessing(false)
            return
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setCardError('')
        }

           // confirm prament ----

           const {error:confirmError,paymentIntent}=await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:card,
                billing_details:{
                    email:user.email,
                    name:user.displayNamme,
                }
            }
        })

        if(confirmError){
            console.log(confirmError)
            setCardError(confirmError.message)
            setProcessing(false)
            return
        }
        if(paymentIntent){
            console.log('paymentIntent',paymentIntent)
            if(paymentIntent.status==='succeeded'){
               const {data}=await axiosPublic.patch(`/users/status/${user.email}`,{badge:'Golden'})
               if(data.matchedCount>0){
                toast.success('susscssfully pay')
                navigate('/')

               }
            }
        }
        setProcessing(false)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }} />
                <button type="submit" disabled={!stripe || !elements || !clientSecret || processing }>
                    {processing?<span className="loading loading-spinner loading-lg"></span>:' Pay'}
                   
                </button>
                {/* Show error message to your customers */}
                {/* {errorMessage && <div>{errorMessage}</div>} */}
            </form>
            {cardError && <p className='text-red-600 ml-8'>{cardError}</p>}
        </div>

    );
};

export default CheckOutForm;