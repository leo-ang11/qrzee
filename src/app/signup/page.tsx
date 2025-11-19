import { SignupForm } from "../../components/signup-form"
import Navbar from "../../components/Navbar"

export const metadata = {
  title: "Signup",
  description: "Create your QRzee account to start generating QR codes.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <div className="flex justify-center items-center mt-[2rem] ">
      <SignupForm />
      </div>
    </main>
  )
}

