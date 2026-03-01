import AuthLayout from "../Components/Auth/AuthLayout";
import AuthInput from "../Components/Auth/AuthInput";
import { Link } from "react-router-dom";
import { GoogleIcon } from "../Components/icons/flat-color-icons-google";

export default function LoginPage() {
  return (
    <AuthLayout mode="login">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-6">
        <img
          src="/leetLens_Logo_resized.png"
          alt="LeetLens"
          className="h-8 w-auto"
        />
        <span className="text-white font-semibold text-lg">LeetLens</span>
      </div>

      <h1 className="text-2xl font-semibold mb-6">Sign in to your account</h1>

      <AuthInput label="Email address" placeholder="shreyansh@leetlens.ai" />
      <AuthInput label="Password" type="password" placeholder="••••••••" />

      <button className="w-full h-11 rounded-full bg-gray-200 text-black text-sm font-medium mt-2 hover:bg-white transition">
        Sign In
      </button>

      <p className="text-sm text-gray-400 mt-4 text-center">
        Don’t have an account?{" "}
        <Link to="/signup" className="text-white">
          Sign up
        </Link>
      </p>

      <div className="flex items-center gap-3 my-6">
        <div className="flex-1 h-px bg-white/10" />
        <span className="text-xs text-gray-500">Or continue with</span>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      <button className="w-full h-11 rounded-full bg-[#111113] border border-white/10 text-sm flex items-center justify-center gap-2 hover:bg-[#151518] transition">
        <GoogleIcon size={18} />
        Google
      </button>
    </AuthLayout>
  );
}
