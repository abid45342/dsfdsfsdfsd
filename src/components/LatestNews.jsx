import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="flex gap-2 items-center">
            <p className="bg-red-500 text-base-100 px-3 py-2">Latest</p>
            <Marquee className="bg-base-200" pauseOnHover={true}>
                <Link to="/news">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, impedit!
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;