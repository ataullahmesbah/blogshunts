import ServiceTabs from "../ServiceTabs";




const Services = () => {
    return (
        <div className="bg-blue-50">
            <div className="container mx-auto pt-10 pb-10 p-2 space-y-3">
                {/* Services */}
                <div className="flex items-center justify-between">
                    <p className="text-2xl font-semibold">Our Services</p>
                    <p className="text-xl font-medium border-blue-500 border-b rounded-lg">All Services</p>

                </div>
                {/*  */}
                <div className="space-y-4 w-3/4">
                    <p>Are you feeling uncertain about choosing the right online marketing firm? Fed up with settling for agencies that have good intentions but consistently fall short of achieving your goals?</p>
                    <p>Enter HYASCKA – your trusted partner in marketing services. We understand the frustration of one-size-fits-all approaches. That's why, when you choose HYASCKA, we tailor our scope, analysis, and pricing options to one objective: realizing your growth goals. Our engagements are uniquely crafted to address your specific needs and goals. We align on key metrics that not only drive profit but also boost revenue, ensuring a partnership that delivers tangible results.</p>
                </div>

                <div>

                    <ServiceTabs />

                </div>

                {/* mondodb database TODO LIST */}
            </div>

        </div>
    );
};

export default Services;