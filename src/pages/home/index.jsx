import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../features/news/news.action";
import NewsCard from "../../component/newsCard";

const Home = () => {
  const [newsData, setNewsData] = useState([]);
  const dispatch = useDispatch();
  const { news, isNews, isNewsLoading } = useSelector((state) => state?.news);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  useEffect(() => {
    if (isNews) {
      setNewsData(news);
    }
  }, [news, isNews]);

 

  return (
    <>
      <section>
        <div className="flex flex-col gap-5 items-center justify-center min-h-[300px]">
          <h1 className="font-[600] text-[40px] leading-[130%] text-[#002A3C] text-center w-[528px]">
            Stay Ahead in Medicine with <br /> Personalized News
          </h1>
          <p className="font-[400] text-[19px] leading-[130%] text-[#375E6C] mon-h-[674px]">
            Get daily updates from your field of expertise, summarized and
            tailored for you.
          </p>
        </div>
      </section>
      {isNewsLoading ? <h1 className="text-center text-[20px] ">Loading...</h1> : <NewsCard newsData={newsData} />}
    </>
  );
};
export default Home;
