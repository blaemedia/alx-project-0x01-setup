import React from 'react';
import UserCard from "../../components/common/UserCard";
import { UserProps } from '../../interfaces'; 
import UserModal from "@/components/UserModal";
import { User } from "@/interfaces";
import React, { useState } from "react";

interface UsersPageProps {
  posts: UserProps[];
}

export default Users;


const UsersPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleAddUser = (user: User) => {
    console.log("New User:", user);
    // TODO: Add user to your state or API
  };

  return (
    <div>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded-lg"
        onClick={() => setShowModal(true)}
      >
        Add User
      </button>

      {showModal && (
        <UserModal
          onClose={() => setShowModal(false)}
          onSubmit={handleAddUser}
        />
      )}
    </div>
  );
};


export default function userPages({ posts }: UsersPageProps) {
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