const Accordion = () => {
    return (
        <div className="join join-vertical w-full">

            <div className="collapse collapse-arrow join-item border-b-2 border-gray-200">
                <input type="radio" name="my-accordion-4" x-model="openAccordion === 1" />
                <div className="collapse-title font-semibold text-lg ">
                    Ready to make a lasting impact in the digital landscape?
                </div>
                <div className="collapse-content" x-show="openAccordion === 1">
                    <p>At HYASCKA, we specialize in crafting strategic digital marketing campaigns that not only elevate your brand's visibility but also engage your audience in meaningful ways. Ready to amplify your online impact? Partner with us to redefine your brand's influence in the digital world.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow join-item border-b-2 border-gray-200">
                <input type="radio" name="my-accordion-4" x-model="openAccordion === 1" />
                <div className="collapse-title font-semibold text-lg ">
                    Striving to be the top result in search?
                </div>
                <div className="collapse-content" x-show="openAccordion === 1">
                    <p>Harness the power of SEO with HYASCKA, ensuring your business ranks prominently and attracts the right audience.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow join-item border-b-2 border-gray-200">
                <input type="radio" name="my-accordion-4" x-model="openAccordion === 1" />
                <div className="collapse-title font-semibold text-lg ">
                    Need a standout website or application?
                </div>
                <div className="collapse-content" x-show="openAccordion === 1">
                    <p>Our expert web development team crafts tailored solutions for exceptional digital experiences.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow join-item border-b-2 border-gray-200">
                <input type="radio" name="my-accordion-4" x-model="openAccordion === 1" />
                <div className="collapse-title font-semibold text-lg ">
                    Seeking a one-stop-shop for all your digital needs?
                </div>
                <div className="collapse-content" x-show="openAccordion === 1">
                    <p>HYASCKA delivers a holistic suite of services, addressing every facet of your online strategy to drive comprehensive success.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow join-item border-b-2 border-gray-200">
                <input type="radio" name="my-accordion-4" x-model="openAccordion === 1" />
                <div className="collapse-title font-semibold text-lg ">
                    Curious about our dedication to your success?
                </div>
                <div className="collapse-content" x-show="openAccordion === 1">
                    <p>At HYASCKA, client satisfaction is not just a goal; it's our commitment. We go beyond delivering services – we build lasting partnerships, ensuring your success is the true measure of our achievements. Your growth fuels our passion, and your satisfaction is our greatest reward. Join us in creating a success story that is centered on your business triumphs.</p>
                </div>
            </div>


        </div>
    );
};

export default Accordion;
