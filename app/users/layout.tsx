import getUsers from "../actions/getUsers";
import Sidebar from "../components/sidebar/Sidebar";
import UserList from "./components/UserList";

const UsersLayout = async ({ children }: { children: React.ReactNode }) => {
  const users = await getUsers();

  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <UserList items={users} />
      <div className="h-full">{children}</div>
    </Sidebar>
  );
};

export default UsersLayout;
