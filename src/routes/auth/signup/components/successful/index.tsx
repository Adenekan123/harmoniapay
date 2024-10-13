import { Link } from "react-router-dom";

const Successful = () => {
  return (
    <div className="grid gap-6">
      <div className="flex justify-center">
        <img src="/gif/success.gif" className="w-32 h-32" />
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-center mb-2">
          Sign up succesful
        </h2>
        <p>Proceed to Sign In</p>
      </div>

      <div>
        <Link
          to="/"
          className="w-full bg-primary hover:bg-gray-800 block text-center text-white font-semibold rounded-lg text-lg py-[12px] mt-3"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Successful;
