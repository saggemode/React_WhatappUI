import ProfileSection from "../../UI/ProfileSection/ProfileSection";
import SearchPeople from "../../UI/SearchPeople/SearchPeople";
import ChatCardsListing from "../../UI/ChatCardsListing/ChatCardsListing";
import ChatSection from "../../UI/ChatSection/ChatSection";

import "./home.scss";

export default function Home() {
  return (
    <>
      <div className="Home">
        <div className="left-side">
          <ProfileSection />
          <SearchPeople />
          <ChatCardsListing />
        </div>
        <div className="right-side">
          <ChatSection />
        </div>
      </div>
    </>
  );
}
