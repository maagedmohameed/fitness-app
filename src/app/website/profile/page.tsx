import UserDetails from "./_components/user-details";
import { useLoggedUser } from "@/hooks/shared/use-logged-user";
import UserSettings from "./_components/user-settings";

export default function ProfilePage() {
  // Hooks
  const { isPending, data, error } = useLoggedUser();

  return (
    <main className="bg-[url(/assets/images/profile-page-cover.webp)] bg-cover">
      <div className="space-y-10 bg-[#ffffff]/60 dark:bg-[#242424]/60 backdrop-blur-[5.375rem] h-screen">
        {/* Header  */}
        {/* <Header/> */}

        {/* Content  */}
        <div className="space-y-10 mx-auto w-fit">
          {/* User details  */}
          <UserDetails
            userDetails={
              data
                ? [
                    { goal: data.user.goal },
                    { activityLevel: data.user.activityLevel },
                    { weight: data.user.weight },
                  ]
                : [
                    { goal: "lose weight" },
                    { activityLevel: "level1" },
                    { weight: 60 },
                  ]
            }
            isPending={false}
          />

          {/* User settings  */}
          <UserSettings />
        </div>
      </div>
    </main>
  );
}
