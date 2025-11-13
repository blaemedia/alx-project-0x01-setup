import React from 'react';
import UserCard from "../../components/common/UserCard";
import { UserProps } from '../../interfaces'; 

interface UsersPageProps {
  posts: UserProps[];
}

export default Users({ posts }: UsersPageProps) {
  return (
    <div className="p-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

// Fetch users from API at build time
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts: UserProps[] = await response.json();

  return {
    props: {
      posts
    }
  };
}