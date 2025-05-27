import React from 'react'
import ArticleCard from '../../component/articleCard'

const ArticlePage = () => {

  return (
<>
<section className='mx-[10%] my-[5%]'>
    <div className="w-[181px] bg-white h-[30px] rounded-full flex justify-between   items-center ">
          <div>
            {/* <FilterButton label={"Cardiology"} classes={"h-[26px]"} /> */}
          </div>
          <div className="w-[71px] h-[18px] font-[400] text-[14px] leading-[130%] text-[#375E6C]">
            3 min read
          </div>
        </div>

<ArticleCard/>
</section>
</>  )
}

export default ArticlePage