import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-screen flex justify-center items-center">
      <SignIn appearance={{elements: {formButtonPrimary: 'bg-[#46000C]'}, layout: {}} } />
    </div>
  );
}
