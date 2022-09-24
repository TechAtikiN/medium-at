import Link from "next/link"

function Header() {
  return (
      <header className="flex justify-between p-1 max-w-7xl mx-auto bg-teal-100">
          <div className="flex items-center space-x-5">
              <Link href='/'>
                  <img
                      className="w-40 object-contain cursor-pointer"
                      src="https://links.papareact.com/yvf" />
              </Link>
</div>
              <div className="space-x-8 p-2  hidden md:inline-flex justify-center font-semibold  text-teal-900  ">
                  <h3 className="hover:underline px-3 py-2  ">Contact</h3>
                  <h3 className="hover:underline px-3 py-2   ">Follow</h3>
                  <h3 className="hover:underline px-3 py-2   ">About</h3>
              </div>
          
          <div className="flex items-center space-x-5 font-semibold">
              <h3 className="text-teal-700">Sign In</h3>
              <h3 className="border-2 px-4 py-2 rounded-lg border-teal-700 hover:border-black  hover:bg-black hover:text-white transition duration-150 ease-in-out">Get Started</h3>
          </div>
    </header>
  )
}

export default Header