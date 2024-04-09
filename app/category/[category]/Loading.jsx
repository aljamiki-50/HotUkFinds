import LoadingCategoryPage from "@/components/CategoryPage/Category/loadingCategoryPage";
import LoadingContainer from "@/components/Container/LoadingContainer";

const page = ({ params }) => {
  return (
    <LoadingContainer
      classname={
        "bg-white"
        // "sm:grid sm:grid-cols-7 flex flex-col md:grid-cols-2 xl:grid-cols-4 gap-4 -mt-10  min-h-screen"
      }
    >
      <LoadingCategoryPage />
    </LoadingContainer>
  );
};

export default page;
