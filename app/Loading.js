// import LoadingSkeleton from "@/components/loading/LoadingSkeleton";

// export default function Loading() {
//   // You can add any UI inside Loading, including a Skeleton.
//   return <LoadingSkeleton />;
// }

import Header from "@/components/Header/Header";
import LoadingFooters from "@/components/Footers/LoadingFooter";
import LoadingPageNavBar from "@/components/Page/small/LoadingPageNavBar";

const Loading = () => {
  return (
    <>
      <Header />
      <LoadingPageNavBar />
      <LoadingFooters />
    </>
  );
};

export default Loading;
