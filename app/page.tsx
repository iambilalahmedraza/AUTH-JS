import { signIn } from "@/auth";

export default function Page() {
  return (
    <div className="text-white flex mt-56 item-center justify-center ">
      <form
        className=" bg-slate-800 inline p-10 rounded-xl "
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <button type="submit" className="font-bold text-3xl ">
          Signin with GitHub
        </button>
      </form>
    </div>
  );
}
