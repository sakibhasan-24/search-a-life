import social from "../assets/icons/social.png";

export default function Footer() {
  return (
    <footer className="bg-black flex justify-center items-center text-white w-full mx-auto px-4 py-3 rounded-lg">
      <div className="max-w-xl mx-4 my-12 ">
        <section className="flex flex-col gap-4 w-1/2">
          <h1 className="font-extrabold text-2xl">About Us</h1>
          <p>we are providing world best tech companies communicator</p>
        </section>
        <section className="my-2">
          <img src={social} alt="social" />
        </section>
      </div>
      <div>
        <h1>Company</h1>
        <p>we are providing world best tech companies communicator</p>
      </div>
    </footer>
  );
}
