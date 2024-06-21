import { useAuthStore } from "../stores/authStore";

export default function ProfileDetails() {
  let udata = useAuthStore((state) => (state.udata));
  let fname = udata.first_name;
  let lname = udata.last_name;
  let uname = udata.username;
  let email = udata.email;

  return (
    <div>
      <h1>User Information</h1>
      <p>Email: {email}</p>
      <p>Username: {uname}</p>
      <p>First name: {fname || "Not Available"}</p>
      <p>Last name: {lname || "Not Available"}</p>
    </div>
  )
}