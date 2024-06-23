import ServiceCard from "../Cards/ServiceCard";
import { services } from '../../lib/services'

const Services = () => {
    return (
        <div className="min-h-screen mt-10 lg:mt-24">
            <div className="text-center container mx-auto">
                <h3 className="text-2xl font-semibold text-orange-600">Our Services</h3>
                <h2 className="text-5xl">Our Services Area</h2>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

            </div>
            <div className="container mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    services.map((service, idx) => <ServiceCard key={idx} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;