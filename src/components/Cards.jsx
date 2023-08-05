import React from "react";
import SingleUserImage from "../assets/single_user.png";
import PartnershipImage from "../assets/partnership.png";
import GroupAccountImage from "../assets/group_account.png";
import TextButton from "./TextButton";

class CardInfo {
  constructor(
    imageSource,
    title,
    price,
    storageCapacity,
    usersAllowed,
    sendUpTo,
  ) {
    this.imageSource = imageSource;
    this.title = title;
    this.price = "$" + price;
    this.storageCapacity = storageCapacity + " Storage";
    this.usersAllowed = usersAllowed;
    this.sendUpTo = "Send up to " + sendUpTo;
  }
}

const Card = ({ cardInfo }) => {
  return (
    <div className="my-4 w-full rounded-xl p-4 shadow-2xl duration-300 hover:scale-105">
      <img src={cardInfo.imageSource} alt="" className="mx-auto w-20" />
      <h2 className="py-8 text-center text-2xl font-bold">{cardInfo.title}</h2>
      <p className="text-center text-4xl font-bold">{cardInfo.price}</p>
      <div className="mt-8 text-center font-medium">
        <ol>
          <li>{cardInfo.storageCapacity}</li>
          <li>{cardInfo.usersAllowed}</li>
          <li>{cardInfo.sendUpTo}</li>
        </ol>
        <TextButton text="Start trial" type="secondary" />
      </div>
    </div>
  );
};

const Cards = () => {
  const cardDataArray = [
    new CardInfo(
      SingleUserImage,
      "Single User",
      149,
      "500 GB",
      "1 Granted User",
      "2 GB",
    ),
    new CardInfo(
      PartnershipImage,
      "Partnership",
      199,
      "1 TB",
      "3 Users Allowed",
      "10 GB",
    ),
    new CardInfo(
      GroupAccountImage,
      "Group Account",
      299,
      "5 TB",
      "10 Users allowed",
      "20 GB",
    ),
  ];

  return (
    <div className="w-full bg-white px-4 py-10">
      <div className="mx-auto grid max-w-screen-xl gap-8 md:grid-cols-3">
        {cardDataArray.map((cardData, index) => (
          <Card key={index} cardInfo={cardData} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
