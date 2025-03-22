export const Navbar = () => {
    return (
        <div className="fixed z-30 grid grid-cols-12 justify-center bg-black h-20 w-full border-b-1  border-gray-900">
            <div className=" text-2xl flex justify-center items-center col-span-3 font-bold text-cyan-50  ">HealthLens.ai</div>

            <div className="flex gap-4 font-semibold justify-center col-span-6 items-center text-zinc-200 ">
                <div className="">Features</div>
                <div className="">Testimonials</div>
                <div className="">Pricing</div>
            </div>

            <div className="flex justify-center items-center gap-4 col-span-3  text-sm font-semibold text-zinc-200">
                <button className="font-bold border-b border-neutral-600 border rounded-md px-4 py-2">Sign In</button>
                <button className=" border rounded-md border-gray-200 bg-gray-100 text-black px-4 py-2 hover:bg-gray-500 transition-colors duration-300 ease-in-out">Get Started</button>
            </div>


        </div>
    );
};
