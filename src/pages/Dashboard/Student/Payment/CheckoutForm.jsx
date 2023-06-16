import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import "./CheckoutForm.css"
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ cartProgram }) => {
    const price = cartProgram?.price;

    const [clientSecret, setClientSecret] = useState('');
    const [cardError, setCardError] = useState('');
    const [processing, setProcessing] = useState(false);
    const navigate = useNavigate();

    const stripe = useStripe();
    const elements = useElements();

    const [axiosSecure] = useAxiosSecure();
    const {user} = useAuth();


    useEffect( () => {
        if(price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
             .then(res => {
                setClientSecret(res.data.clientSecret)
             })
        }
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if(card === null) {
            return
        }
        
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            setCardError(error.message)
          } else {
            setCardError('');
          }

          setProcessing(true);

          const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );
        
        if(confirmError) {
            setCardError(confirmError);
        }
        
        setProcessing(false);

        if(paymentIntent.status === "succeeded") {
            const transactionId = paymentIntent.id;
            // save payment information to the server
            const payment = {
                ...cartProgram,
                transactionId,
                date: new Date(),
                status: 'enrolled'
            }

            axiosSecure.post('/payments', payment)
            .then(res => {
                if (res.data.insertResult.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Payment successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate('/dashboard/selectedClasses')
                }
            })
        }
        
    }

    return (
        <section className="bg-slate-100 rounded-md">
            <form className="py-20 w-2/3 mx-auto" onSubmit={handleSubmit}>
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
                }}
                />
                <button disabled={ !stripe || !clientSecret || processing } type="submit" className="btn btn-block mt-10 btn-primary btn-sm">$ Pay</button>
            </form>
            { cardError && <p className="text-red-600 text-center">{cardError}</p>}
        </section>
    );
};

export default CheckoutForm;