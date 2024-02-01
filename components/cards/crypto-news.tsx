type CryptoNewsProps = { time: string; author: string; title: string; body: string };

const CryptoNews: React.FC<CryptoNewsProps> = ({ time, author , title, body}) => {
  return (
    <div className="flex flex-col bg-[#F8F9FB] rounded-lg h-fit py-8 px-5 lg:px-10">
      <div className="text-lg">
      <div className="mb-8 text-[#2170FF] font-bold">{title}</div>
      <div className="mb-10 font-light text-black">{body}</div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between lg:items-center font-extralight text-[15px] text-gray-500">
        <div>{time}</div>
        <div>by {author}</div>
      </div>
    </div>
  );
};

export default CryptoNews;
