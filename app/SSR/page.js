
async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  // Check if the response is not OK
  console.log("fetching..")
  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }
  const users = await res.json();
  return users;
}

export default async function UsersPage() {
  const users = await fetchUsers();

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}
