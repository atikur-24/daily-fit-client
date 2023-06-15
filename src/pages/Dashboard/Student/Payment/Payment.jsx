import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../../components/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

// TODO: provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
    return (
        <section>
            <div className="my-5">
                <SectionTitle heading="Payment" subHeading="please process" />
            </div>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </section>
    );
};

export default Payment;