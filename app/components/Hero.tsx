export default function Hero({ aboutme }) {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-overlay "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold text-left">Hello</h1>
            <p className="mb-5 text-5xl text-center font-bold text-cyan-900 ">
              I'm {aboutme.name}
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </>
  );
}
