import React from "react";
import { Mail, Phone, MapPin, Globe, Building2 } from "lucide-react";
import { UserProps } from "./UserProps";

interface UserCardProps {
  user: UserProps;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  // Generate initials for avatar
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden max-w-sm mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-5 flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold text-white">
          {initials}
        </div>
        <div className="flex flex-col">
          <h2 className="text-white font-bold text-lg">{user.name}</h2>
          <p className="text-purple-200 text-sm">@{user.username}</p>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 space-y-3 text-gray-700 dark:text-gray-300">
        <div className="flex items-center gap-2 text-sm">
          <Mail className="text-purple-500" size={16} />
          <span>{user.email}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Phone className="text-green-500" size={16} />
          <span>{user.phone}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Globe className="text-blue-500" size={16} />
          <a
            href={`https://${user.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {user.website}
          </a>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="text-red-500" size={16} />
          <span>
            {user.address.street}, {user.address.city}
          </span>
        </div>

        {/* Company */}
        <div className="mt-3 border-t pt-3 flex flex-col gap-1">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-800 dark:text-gray-200">
            <Building2 className="text-yellow-500" size={16} />
            <span>{user.company.name}</span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 italic">
            “{user.company.catchPhrase}”
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
        <span className="text-xs text-gray-400">ID: #{user.id}</span>
        <button className="text-indigo-600 dark:text-indigo-400 font-medium text-sm hover:text-indigo-800 dark:hover:text-indigo-200 transition">
          View Profile →
        </button>
      </div>
    </div>
  );
};

export default UserCard;
