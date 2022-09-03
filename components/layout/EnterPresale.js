import Image from "next/image";
import Link from "next/link";
import Bubble2 from "../../assets/svgs/bubble2.svg";
import coinGeckom from "../../assets/coingecko-m.svg";
import coinMarketCap from "../../assets/coinmarketcap.svg";
import PancakeSwap from "../../assets/pancakeswap.svg";
import PancakeSwapM from "../../assets/pancakeswap-m.svg";
import coinMarketCapM from "../../assets/coinmarketcap-m.svg";

const EnterPresale = () => {
  return (
    <section className="presale py-32">
      <Image src={Bubble2} alt="bubble" className="bubble1" />
      <Image src={Bubble2} alt="bubble" className="bubble2" />
      <div className="container mx-auto my-10">
        <h2 className="text-gradient">
          Don&apos;t be caught off <br />
          guard with your personal information, join Privesecure Protocol now.
        </h2>
        <Link href="/buy">
          <div className="btn my-10">Buy Presale</div>
        </Link>
        <div className="brands mt-6 md:mt-16">
          <Image
            src="../assets/img/Coingecko.svg"
            alt="Coin gecko"
            className="hidden md:block"
          />
          <Image
            src={coinMarketCap}
            alt="Coin market cap"
            className="hidden md:block"
          />
          <Image
            src={PancakeSwap}
            alt="Pancake swap"
            className="hidden md:block"
          />
          <Image
            src={coinGeckom}
            alt="Coin gecko"
            className="block md:hidden"
          />
          <Image
            src={coinMarketCapM}
            alt="Coin market cap"
            className="block md:hidden"
          />
          <Image
            src={PancakeSwapM}
            alt="Pancake swap"
            className="block md:hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default EnterPresale;
