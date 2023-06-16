import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../../components/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useAuth from "../../../../hooks/useAuth";
import useCart from "../../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
    const { program } = useAuth();
    const [ cart ] = useCart();

    const cartProgram = cart.find(ct => ct._id === program._id)

    return (
        <section>
            <div className="my-5">
                <SectionTitle heading="Payment" subHeading="please process" />
            </div>
            <Elements stripe={stripePromise}>
                <CheckoutForm cartProgram={cartProgram}  />
            </Elements>
        </section>
    );
};

export default Payment;