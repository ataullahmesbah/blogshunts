// import { PulseLoader } from 'react-spinners';
// import 'react-spinners/css/pulseLoader.css';


const loader = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            {/* <PulseLoader color="#36d7b7" size={15} margin={2} /> */}

            <h1 className="text-3xl font-semibold">Loading ....</h1>
        </div>
    );
};

export default loader;