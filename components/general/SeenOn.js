import Image from "next/image";
import alphr from "../../assets/svgs/alphr.svg";
import coincheckup from "../../assets/svgs/coincheckup.svg";
import businessStandard from "../../assets/svgs/businessStandard.svg";
import businessTimes from "../../assets/svgs/businessTimes.svg";
import beInCrypto from "../../assets/svgs/beInCrypto.svg";
import coinMarketBag from "../../assets/svgs/coinMarketBag.svg";
import techTimes from "../../assets/svgs/techTimes.svg";
import benziga from "../../assets/svgs/benziga.svg";
import coincodex from "../../assets/svgs/coincodex.svg";
import economicTimes from "../../assets/svgs/economicTimes.svg";
import cryptoNews from "../../assets/svgs/cryptoNews.svg";
import insiderMonkey from "../../assets/svgs/insiderMonkey.svg";
import newsBTC from "../../assets/svgs/newsBTC.svg";
import bitCoinNews from "../../assets/svgs/bitCoinNews.svg";
import jerusalemPost from "../../assets/svgs/jerusalemPost.svg";
import dailyCoin from "../../assets/svgs/dailyCoin.svg";
import coinTelegraph from "../../assets/svgs/coinTelegraph.svg";
import theGuardian from "../../assets/svgs/theGuardian.svg";
import analyticInsight from "../../assets/svgs/analyticInsight.svg";

const SeenOn = () => {
  return (
    <section className="seen-on md:mb-20 mt-16">
      <div className="container mx-auto">
        <h3 className="text-xl">As seen on</h3>
        <div className="brands md:mt-16">
          <div>
            <Image src={alphr} alt="alphr" />
            <Image src={coincheckup} alt="Coin checkup" />
            <Image
              src={businessStandard}
              alt="business Standard"
              className="hidden md:block"
            />
            <Image
              src={businessTimes}
              alt="business Times"
              className="hidden md:block"
            />
          </div>
          <div>
            <Image src={beInCrypto} alt="be in Crypto" />
            <Image src={coinMarketBag} alt="Coin Market Bag" />
            <Image
              src={techTimes}
              alt="tech times"
              className="hidden md:block"
            />
            <Image src={benziga} alt="Benziga" />
          </div>
          <div>
            <Image src={coincodex} alt="coin codex" />
            <Image src={economicTimes} alt="economic times" />
            <Image src={cryptoNews} alt="crypto News" />
            <Image
              src={insiderMonkey}
              alt="insider Monkey"
              className="hidden md:block"
            />
          </div>
          <div>
            <Image src={newsBTC} alt="newsBTC" />
            <Image src={bitCoinNews} alt="bitCoinNews" />
            <Image src={jerusalemPost} alt="jerusalemPost" />
            <Image
              src={dailyCoin}
              alt="dailyCoin"
              className="hidden md:block"
            />
          </div>

          <div>
            <Image src={coinTelegraph} alt="coinTelegraph" />
            <Image src={theGuardian} alt="theGuardian" />
            <Image src={analyticInsight} alt="Analytic Insight" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeenOn;
