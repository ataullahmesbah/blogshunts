const Accordion = () => {
    return (
        <div className="join join-vertical w-full">

            <div className="collapse collapse-arrow join-item border-b-2 border-gray-200">
                <input type="radio" name="my-accordion-4" x-model="openAccordion === 1" />
                <div className="collapse-title font-semibold text-lg ">
                    Click to open this one and close others
                </div>
                <div className="collapse-content" x-show="openAccordion === 1">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-arrow join-item border-b-2 border-gray-200">
                <input type="radio" name="my-accordion-4" x-model="openAccordion === 1" />
                <div className="collapse-title font-semibold text-lg ">
                    2. Click to open this one and close others
                </div>
                <div className="collapse-content" x-show="openAccordion === 1">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-arrow join-item border-b-2 border-gray-200">
                <input type="radio" name="my-accordion-4" x-model="openAccordion === 1" />
                <div className="collapse-title font-semibold text-lg ">
                    3. Click to open this one and close others
                </div>
                <div className="collapse-content" x-show="openAccordion === 1">
                    <p>hello</p>
                </div>
            </div>


        </div>
    );
};

export default Accordion;
