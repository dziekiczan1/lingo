import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Header } from "./header";

const LearnPage = () => {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>Sticky sidebar</StickyWrapper>
      <FeedWrapper>
        <Header title="Test" />
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
