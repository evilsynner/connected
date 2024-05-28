import { Link } from "react-router-dom";
function IndexPage() {
  return (
    <div className="w-screen h-screen bg-[#0B121F]">
      <div className="bg-[#0B121F] flex flex-row justify-between px-5 pt-3">
        <Link to="/">
          <img className="aspect-square w-12" src="./CONNectedLogo.svg" alt="CONNected Logo" />
        </Link>
        <div className="flex flex-row content-center items-center space-x-4">
          <Link className="text-[#FBD8D8]" to="/home/">
            Go to Home
          </Link>
          <Link className="text-[#FBD8D8]" to="/accounts/login/">
            Login
          </Link>
          <Link className="text-[#FBD8D8]" to="/accounts/register/">
            Register
          </Link>
        </div>
      </div>
      <h1 className="text-white mt-20 text-center font-['Roboto'] font-black text-3xl">
        The CONNected Social Network
      </h1>
      <p className="text-white mt-10 text-center text-[#cecece] text-lg font-['Roboto']">
        The place where you can create and share code snippets with others.
      </p>
    </div>
  )
}

export default IndexPage;
