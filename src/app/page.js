import Categories from "@/components/Categories";
import Banner from "./../components/Banner";
import CardSection from "@/components/CardSection";
import ShopDiscoverMore from "@/components/ShopDiscoverMore";
import StatsSection from "@/components/StatsSection";
import ExtraSection from "@/components/ExtraSection";
import RatingSection from "@/components/RatingSection";
import TopSellingCarousel from "@/components/TopSellingCarousel";

export default function Home() {
  return (
     <div className="w-full min-h-screen bg-gray-50">
         <Banner />
         <Categories/>
         <CardSection/>
         <ShopDiscoverMore/>
         <StatsSection/>
         <TopSellingCarousel/>
         <ExtraSection/>
         <RatingSection/>
     </div>
     
      
  );
}
