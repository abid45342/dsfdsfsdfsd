import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";


const CategoryNews = () => {
    const {data:news} = useLoaderData();
    console.log(news)
    return (
        <div>
            <h2 className="font-semibold mb-3">Dragon News Home</h2>
           {news.length} 
           {
            news.map(singleNews=> <NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
           }
        </div>
    );
};

export default CategoryNews;