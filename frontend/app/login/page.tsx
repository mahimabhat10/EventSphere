"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useAuth } from "@/contexts/AuthContext";

const LoginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginForm = z.infer<typeof LoginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();

  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(LoginSchema),
  });

  async function onSubmit(data: LoginForm) {
    try {
      setLoading(true);
      setServerError("");

      await login(data.email, data.password);

      router.push("/profile");
    } catch (err) {
      setServerError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  }
console.log("LOGIN PAGE RENDERED");
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#050816] px-6">

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

        <h1 className="text-center text-4xl font-black text-white">
          Welcome Back
        </h1>

        <p className="mt-3 text-center text-white/60">
          Login to EventSphere
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 space-y-5"
        >

          <div>

            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className="w-full rounded-xl border border-white/10 bg-[#101629] p-4 text-white outline-none"
            />

            {errors.email && (
              <p className="mt-2 text-sm text-red-400">
                {errors.email.message}
              </p>
            )}

          </div>

          <div>

            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              className="w-full rounded-xl border border-white/10 bg-[#101629] p-4 text-white outline-none"
            />

            {errors.password && (
              <p className="mt-2 text-sm text-red-400">
                {errors.password.message}
              </p>
            )}

          </div>

          {serverError && (
            <p className="text-red-400">
              {serverError}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 py-4 font-bold text-white transition hover:scale-105 disabled:opacity-50"
          >
            {loading ? "Signing In..." : "Login"}
          </button>

        </form>

      </div>

    </main>
  );
}