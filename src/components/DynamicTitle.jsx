import { Helmet } from "react-helmet-async";

const DynamicTitle = ({children}) => {
    return (
        <Helmet>
                <title>Daily Fit | {children}</title>
        </Helmet>
    );
};

export default DynamicTitle;