import teamwork from '@/assets/teamwork/team-meeting.jpeg';
import Image from 'next/image';
import Accordion from './Accordion';

const TeamWork = () => {
    return (
        <div className='bg-blue-50'>
            <div className=" relative container mx-auto p-2 pt-12 pb-12 flex flex-col-reverse lg:flex-row items-center justify-between lg:gap-16 md:gap-10">

                <div className="lg:w-1/2 mb-6 lg:mb-0 relative z-10">
                    <Image className='rounded-lg' src={teamwork} alt='hyascka team work' placeholder='blur' />
                </div>
                {/* blue-100 circle */}
                <div className="lg:w-1/2 mt-16 lg:mt-6 absolute top-0 lg:mx-52 md:  right-0">
                    <div className="w-56 h-56 bg-blue-100 rounded-full"></div>
                </div>


                <div className="lg:w-1/2 space-y-3 relative z-10">
                    <h1 className='text-3xl font-semibold mb-6'>Is Our Collaboration the Right Choice?</h1>
                    <p>Since 2020, HYASCKA propels business growth with data-driven digital marketing. Our disciplined, transparent approach ensures effective communication.</p>
                    <p>Beyond services, our community team collaborates closely with clients, addressing every unique business aspect. Our success is tied to theirs. Join us in navigating the digital landscape and building a thriving community together.</p>
                    <p>Some of the other benefits your company will enjoy from working with our service include:</p>

                    <Accordion />
                </div>

            </div>
        </div>
    );
};

export default TeamWork;
