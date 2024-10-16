import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'

const useAos = () => {
    useEffect(() => {
        Aos.init({ duration: 600, delay: 100})
    }, []);
};

export default useAos