import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../features/news/news.action";
import NewsCard from "../../component/newsCard";

const Home = () => {
  const [newsData, setNewsData] = useState([]);
  const dispatch = useDispatch();
  const { news, isNews, isLoading } = useSelector((state) => state?.news);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  useEffect(() => {
    if (isNews) {
      setNewsData(news);
    }
  }, [news, isNews]);

  if (isLoading) {
    <h1>Loading...</h1>;
  }

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

      <NewsCard newsData={newsData} />
    </>
  );
};
export default Home;
