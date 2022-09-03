import SeenOn from "../components/general/SeenOn";

const About = () => {
  return (
    <main>
      <section className="about">
        <div className="container mx-auto">
          <div className="about-box">
            <div className="box-inner">
              <h2 className="md:mb-6 mb-8">About Privesecure</h2>
              <p>
                Privesecure is an open-source cloud storage platform for
                cryptocurrency users. Privesecure aspires to foster a robust
                security culture that enables everyone to store and access data
                on the internet securely. Economic incentives built into the
                system will guarantee that files are saved and retrieved
                successfully and continuously for the duration specified by the
                user.
              </p>
              <a className="btn mt-6" href="/buy">
                Buy Presale
              </a>
            </div>
          </div>
        </div>
      </section>

      <SeenOn />
    </main>
  );
};

export default About;
