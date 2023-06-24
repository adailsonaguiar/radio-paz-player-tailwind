import React from "react";
import FooterPlayer from "../../components/FooterPlayer";
import Header from "../../components/Header";

const Player: React.FC = () => {
  return (
    <main className="h-screen bg-white dark:bg-dark-100">
     <Header/>
      <div className="flex justify-center align-middle">
        <img
          className="rounded-lg w-10/12 md:w-3/12"
          src="https://play-lh.googleusercontent.com/NKM7Yci-y3APatSXYx530_JGuiHPDvseV5qNCePjuL5oy3S7FBXpUNtqrrrXxA487FA"
          alt="logo Rádio Paz FM Palmas - TO"
        />
      </div>
      <FooterPlayer />
    </main>
  );
};

export default Player;
