import { Outlet, Link, Navigate } from "react-router-dom";
import { isLoggedIn } from "@/lib/utils/cookie";

export default function AuthenticationLayout() {
  if (isLoggedIn()) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className=" w-full min-h-dvh  mx-auto bg-cover bg-center bg-[url('/assets/images/auth-layout-background.webp')]">
      <div className="w-full min-h-dvh grid lg:grid-cols-2 justify-center divide-x-2 divide-primary/20 bg-foreground/60 text-white backdrop-blur-2xl">
        {/* left section */}
        <div className=" hidden lg:flex flex-col h-full items-center justify-center shadow-[0_4px_79.8px_47px_rgba(0,0,0,0.25)]">
          <div className="max-h-180.25 p-2  flex flex-col items-center justify-center gap-20 ">
            {/* logo */}
            <Link to="/" aria-label="Go to home page">
              <img
                className=" w-60.75 object-contain "
                src="/assets/images/logo.webp"
                alt="logo"
              />
            </Link>

            {/* auth layout image */}
            <img
              className="w-157  object-contain "
              src="/assets/images/auth-layout-left.webp"
              alt="auth layout avatar"
            />
          </div>
        </div>

        {/* children */}
        <div className="h-full w-screen px-2 flex items-center justify-center">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
