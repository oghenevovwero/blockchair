import Image from "next/image";
import ThemeAwareChart from "../chart";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Transaction } from "../records";

function formatter(num: number) {
  let interNum = "";
  if (interNum.indexOf(".") === -1) {
    interNum = num.toFixed(2).toString();
  } else {
    interNum = num.toString();
  }
  const indexOfDot = interNum.indexOf(".");
  let fractionalPart = "";
  fractionalPart = interNum.substring(indexOfDot);
  interNum = interNum.substring(0, indexOfDot);

  let subStringFromEnd: string[] = [];
  while (interNum.length > 3) {
    subStringFromEnd = subStringFromEnd.concat(interNum.substring(interNum.length - 3));
    interNum = interNum.substring(0, interNum.length - 3);
  }
  let out = interNum;
  for (let i = subStringFromEnd.length - 1; i > -1; i--) {
    out = out.concat(",").concat(subStringFromEnd.at(i)!);
  }
  return out + fractionalPart;
}

function BtcPrice({setBtcPrice, setPercentageChangeInBtc }: {  setBtcPrice: Dispatch<SetStateAction<number>>, setPercentageChangeInBtc: Dispatch<SetStateAction<number>> }) {
  const [price, setPrice] = useState(42819);
  const [priceChangeIn24Hours, setPriceChangeIn24Hours] = useState(0);
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/bitcoin?tickers=false&community_data=false&developer_data=false",
      { cache: "force-cache" }
    )
      .then((res) => res.json())
      .then((data) => {
        setPrice(data.market_data.current_price.usd);
        setBtcPrice(data.market_data.current_price.usd);
        console.log(data.market_data)
        setPriceChangeIn24Hours(data.market_data.price_change_percentage_24h);
        setPercentageChangeInBtc(data.market_data.price_change_percentage_24h);
      });
  }, []);

  return (
    <div className="rounded-lg flex flex-col border-white border p-5 text-black dark:border-[#262626] dark:text-white dark:shadow-none shadow-md shadow-[#B0BDC7]">
      <div className="flex gap-2 justify-between items-center">
        <span className="text-sm font-semibold">BTC Price</span>
        <span className="text-sm font-semibold">{formatter(price)} USD</span>

        {priceChangeIn24Hours > 0 ? (
          <div className=" flex gap-1 text-[#4AC91E]">
            <Image src="/up-green.svg" width={10} height={10} alt="Price up" />
            <span>{priceChangeIn24Hours.toFixed(2)}%</span>
          </div>
        ) : (
          <div className=" flex justify-center items-center gap-1 text-red-600">
            <svg
              className="ml-10 rotate-180"
              width="9"
              height="6"
              viewBox="0 0 9 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.1837 4.99987L4.71924 1.46433L8.25477 4.99987"
                stroke="red"
              ></path>
            </svg>
            <span>{Math.abs(priceChangeIn24Hours).toFixed(2)}%</span>
          </div>
        )}
      </div>
      <span className="flex justify-start mb-3 font-[400] text-sm text-[#7691A5]">Last month</span>
      <div>
        <div className="mb-3">
          <ThemeAwareChart />
        </div>
        <span className="font-[200] text-sm text-[#7691A5]">Recommended transaction fee</span>
        <div className="mb-6 text-sm">26 satoshi per byte</div>
        <div className="flex gap-2 items-center">
          <Image src="/charts-small.png" width={25} height={25} alt="Chart" />
          <span>Other bitcoin charts</span>
          <svg
            id="arrow-right"
            width="14"
            height="13"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM1 9H16V7H1V9Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default BtcPrice;
