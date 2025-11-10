import Link from "next/link";

export default function Navbar() {
    return (
        <section className="border border-b-gray-200">
            <header className="flex items-center gap-4 justify-between max-w-[1240px] mx-auto p-3 py-4 ">
                <img
                src="/images/QRzee.png"
                alt="logo"
                className="w-[90px] sm:w-[100px] object-contain"
                />
                <div className="hidden sm:flex items-center gap-4">
                    <Link
                    href="#"
                    className="text-[14px] text-[#161616] tracking-[.3px] p-2 px-1 transition-all hover:text-primary "
                    >Login</Link>
                    <Link
                    href="#"
                    className="text-[14px] text-[#fafaff] tracking-[.3px] p-2 px-3 rounded-md transition-all bg-primary hover:brightness-90 "
                    >Signup</Link>
                </div>
            </header>
        </section>
    )
}