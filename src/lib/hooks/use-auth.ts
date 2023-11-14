import { useCookies } from "react-cookie";

export default function useAuth() {
  const [{ "is-logged-in": isLoggedIn }] = useCookies(["is-logged-in"]);

  const onLogin = async () => {
    const res = await fetch("/auth/login");
    if (res.status !== 302) {
      throw new Error("Something went wrong");
    }
  };

  return { isLoggedIn: Boolean(isLoggedIn), onLogin };
}
