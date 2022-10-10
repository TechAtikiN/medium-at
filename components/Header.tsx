import Link from 'next/link'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { toggleDark, toggleLight } from '../pages/redux/darkModeSlice'
import { RootState } from '../pages/redux/store'
function Header() {

    const value = useSelector((state: RootState) => state.theme.value)
    const dispatch = useDispatch()

    return (
        <header className="flex justify-between p-1 max-w-7xl mx-auto bg-green-300 sticky top-0 z-50">



            <div className="space-x-8 p-2 text-lg cursor-pointer  hidden md:inline-flex justify-center font-bold  text-gray-900  ">
                <h3 className="hover:underline px-3 py-2">Contact</h3>
                <h3 className="hover:underline px-3 py-2">Follow</h3>
                <h3 className="hover:underline px-3 py-2">About</h3>
            </div>
            <div>
                <Link href='/'>
                    <Image

                        height={50}
                        width={170}
                        src='/MediumAt.png'
                    ></Image>
                </Link>
            </div>

            <div className="flex items-center space-x-5 font-semibold">

                {value == 'dark' && (
                    <button onClick={() => dispatch(toggleLight())}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                        </svg>
                    </button>
                )}
                {value == 'light' && (<button onClick={() => dispatch(toggleDark())}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg>

                </button>)}

                <h3 className="text-gray-900 text-lg font-bold">Sign In</h3>
                <h3 className="border-2 px-4 py-2  rounded-full text-lg font-bold border-green-700 hover:border-black  hover:bg-black hover:text-white transition duration-150 ease-in-out">Get Started</h3>
            </div>
        </header >
    )
}

export default Header