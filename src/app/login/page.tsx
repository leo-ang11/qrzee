import { LoginForm } from "../../components/login-form"
import Navbar from "../../components/Navbar"

export const metadata = {
  title: "Login",
  description: "Login to access your QRzee account and manage QR codes.",
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <div className="flex justify-center items-center mt-20 ">
        <LoginForm />
      </div>
    </main>
  )
}

