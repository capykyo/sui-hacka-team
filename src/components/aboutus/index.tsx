import Member from "@/components/aboutus/member";
const AboutUs: React.FC = () => {
  return (
    <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight">
          <strong>
            We will build better dApps on the Sui blockchain, faster.
          </strong>
          Our team consists of experienced engineers and deep researchers,
          allowing us to provide value to the Sui ecosystem in areas of
          interest.
        </p>
      </div>
      <div className="container mx-auto px-11 text-center mt-28">
        <h2>Our Team</h2>
        <div className="mt-2">the &ldquo;team-xxx&rdquo;</div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grd-cols-5 gap-6 lg:gap-20">
          <Member
            id="uzan"
            name="Uzan"
            socialId="@uzan"
            link="https://twitter.com/uzan"
            role="Contract"
          />
          <Member
            id="kyo"
            name="Kyo"
            socialId="@wykyo15"
            link="https://twitter.com/wukyo15"
            role="Dapp"
          />
          <Member
            id="alex"
            name="Alex"
            socialId="@Alex"
            link="https://twitter.com/Alex"
            role="Contract"
          />
          <Member
            id="sj"
            name="SJ"
            socialId="@SJ"
            link="https://twitter.com/sj"
            role="Contract"
          />
          <Member
            id="st"
            name="ST"
            socialId="@ST"
            link="https://twitter.com/st"
            role="Contract"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
