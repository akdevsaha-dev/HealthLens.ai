export const Navbar = () => {
    return (
        <div className="grid grid-cols-3 justify-center bg-black h-20 w-full border-b-1  border-gray-900">
            <div className=" p-3 text-2xl font-bold text-cyan-50">
                <div className="pl-20">HealthLens.ai</div>
            </div>

            <div className="flex justify-center items-center p-3 text text-zinc-200 ">
                <div className=" p-2">Features</div>
                <div className=" p-2">Testimonials</div>
                <div className=" p-2">Pricing</div>
            </div>

            <div className="flex justify-between p-3 text-sm text-zinc-200 pl-60 pr-20">
                <div className="p-2 font-bold border-gray-600 border rounded-md px-3">Sign In</div>
                <div className="p-2 border rounded-md border-gray-200 bg-gray-100 text-black px-3 ">Get Started</div>
            </div>


        </div>
    );
};
