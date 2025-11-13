import React from "react";
import { Mail, Phone, MapPin, Globe, Building2 } from "lucide-react";

interface UserProp {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const UserCard: React.FC<{ user: UserProp }> = ({ user }) => {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-blue-500 p-5 text-white">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold">
            {user.name.charAt(0)}
          </div>
          <div>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-sm text-indigo-100">@{user.username}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 space-y-3 text-gray-700">
        <div className="flex items-center gap-2 text-sm">
          <Mail size={16} className="text-indigo-500" />
          <span>{user.email}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Phone size={16} className="text-green-500" />
          <span>{user.phone}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Globe size={16} className="text-blue-500" />
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
          <MapPin size={16} className="text-red-500" />
          <span>
            {user.address.street}, {user.address.city}
          </span>
        </div>

        {/* Divider */}
        <div className="border-t pt-3 mt-3">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-800">
            <Building2 size={16} className="text-yellow-500" />
            <span>{user.company.name}</span>
          </div>
          <p className="text-xs text-gray-500 italic mt-1">
            “{user.company.catchPhrase}”
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 py-3 bg-gray-50 border-t flex items-center justify-between">
        <span className="text-xs text-gray-400">User ID: #{user.id}</span>
        <button className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition">
          View Profile →
        </button>
      </div>
    </div>
  );
};

export default UserCard;
