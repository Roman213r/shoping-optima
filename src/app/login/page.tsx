import { AuthForm } from "@/components/AuthForm";

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md">
      <h1 className="mb-4 text-2xl font-black">Особистий кабінет</h1>
      <AuthForm />
    </div>
  );
}
