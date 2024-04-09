import Header from "@/components/Header/Header";
import LoadingFooters from "@/components/Footers/LoadingFooter";
import LoadingPageNavBar from "@/components/Page/small/LoadingPageNavBar";
import LoadingHeader from "@/components/Header/LoadingHeader";

const Loading = () => {
  return (
    <>
      <LoadingHeader />
      <LoadingPageNavBar />
      <LoadingFooters />
    </>
  );
};

export default Loading;
