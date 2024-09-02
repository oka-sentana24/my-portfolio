export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl text-center">Contact Me</h1>
      <p className="text-center">Get in touch with me</p>
      <div className="flex flex-col gap-3 w-full md:w-1/2 pt-5">
        <input
          type="text"
          placeholder="Name"
          className="p-3 border border-gray-300 rounded-md"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-3 border border-gray-300 rounded-md"
        />
        <textarea
          placeholder="Message"
          className="p-3 border border-gray-300 rounded-md"
        />
        <button className="bg-blue-500 text-white p-3 rounded-md">
          Send Message
        </button>
      </div>
    </div>
  );
}
