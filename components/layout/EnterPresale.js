import Image from "next/image";
import Link from "next/link";
import Bubble2 from "../../assets/svgs/Bubble 2.svg";
import coinGeckom from "../../assets/Coingecko-m.svg";
import coinMarketCap from "../../assets/CoinmarketCap.svg";
import PancakeSwap from "../../assets/PancakeSwap.svg";
import PancakeSwapM from "../../assets/PancakeSwap-m.svg";
import coinMarketCapM from "../../assets/CoinmarketCap-m.svg";

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
