import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="p-6">
        <h2 className="text-3xl font-bold">
          Welcome to Homecooked
        </h2>
      </div>
      <div className="min-h-screen bg-gray-50">
      <section className="bg-orange-500 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Homecooked – Smart Tiffin Service
        </h1>
        <p className="text-lg">
          Fresh homemade food from trusted local chefs
        </p>
      </section>

      <section className="py-12 px-6 grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 shadow rounded">
          <h3 className="font-semibold text-lg mb-2">For Customers</h3>
          <p>Order healthy meals daily from verified chefs.</p>
        </div>

        <div className="bg-white p-6 shadow rounded">
          <h3 className="font-semibold text-lg mb-2">For Chefs</h3>
          <p>Earn by cooking delicious meals from your home.</p>
        </div>

        <div className="bg-white p-6 shadow rounded">
          <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
          <p>Quick doorstep delivery with live tracking.</p>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;
