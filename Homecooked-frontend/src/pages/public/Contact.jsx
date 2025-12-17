const Contact = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <form className="max-w-md bg-white p-6 shadow rounded space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border px-3 py-2 rounded"
        />
        <textarea
          placeholder="Message"
          rows="4"
          className="w-full border px-3 py-2 rounded"
        />
        <button className="bg-orange-500 text-white px-4 py-2 rounded">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
