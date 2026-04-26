import UserDetails from "./_components/user-details";
import UserSettings from "./_components/user-settings";

export default function ProfilePage() {
  return (
    <main className="bg-[url(/assets/images/profile-page-cover.webp)] bg-cover rtl:font-cairo">
      <div className="space-y-10 bg-[#ffffff]/60 dark:bg-[#242424]/60 backdrop-blur-[5.375rem] min-h-screen">
        {/* Header  */}
        {/* <Header/> */}

        {/* Content  */}
        <div className="space-y-10 mx-auto w-fit">
          {/* User details  */}
          <UserDetails />

          {/* User settings  */}
          <UserSettings />
        </div>
      </div>
    </main>
  );
}
