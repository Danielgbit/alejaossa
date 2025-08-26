import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

const Logout = () => {
  const handleSignOut = async () => {
    await signOut({
      redirect: true,
      callbackUrl: "/", 
    });
  };

  return (
    <div>
      <LogOut
        onClick={handleSignOut}
        className="bg-dark-02 rounded-full p-1 text-light-04 w-[30px] cursor-pointer"
      />
    </div>
  );
};

export default Logout;
