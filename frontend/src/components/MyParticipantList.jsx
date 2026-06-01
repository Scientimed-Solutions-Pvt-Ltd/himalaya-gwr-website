import React, { useState } from 'react';
import userIcon from '../assets/images/user-icon.png';

const MyParticipantList = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Sample participant data
  const [participants] = useState([
    {
      id: 5,
      photo: userIcon,
      title: 'Dr.',
      name: 'Savitree S. Chatterjee',
      city: 'Mumbai',
    },
    {
      id: 6,
      photo: userIcon,
      title: 'Dr.',
      name: 'Sneha R. Deshmukh',
      city: 'Mumbai',
    },
    {
      id: 7,
      photo: userIcon,
      title: 'Dr.',
      name: 'Dharuv K. Mehta',
      city: 'Mumbai',
    },
    {
      id: 8,
      photo: userIcon,
      title: 'Dr.',
      name: 'Ananya P. Kapoor',
      city: 'Mumbai',
    },
  ]);

  const filteredParticipants = participants.filter((participant) =>
    `${participant.title} ${participant.name} ${participant.city}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 py-12 px-4">
      <div className="max-w-full md:max-w-2xl mx-auto">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-3 rounded-full bg-[#ffffffab] text-[#000000] placeholder-[#000000]/60 focus:outline-none focus:ring-2 focus:ring-[#F37021]"
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#0F5B23] hover:text-[#F37021] transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Participants List */}
        <div className="space-y-2">
          {filteredParticipants.length > 0 ? (
            filteredParticipants.map((participant) => (
              <div
                key={participant.id}
                className="border-2 border-[#94c9a6c2] rounded-lg p-3 flex items-center gap-3 hover:bg-[#0D4A1E] transition-colors cursor-pointer"
              >
                {/* Profile Photo */}
                <img
                  src={participant.photo}
                  alt={`${participant.title} ${participant.name}`}
                  className="w-20 h-20 rounded-full object-cover border-2 border-[#DCEAB4] flex-shrink-0"
                />

                {/* Participant Info */}
                <div className="flex-1">
                  <p className="text-[#DCEAB4] text-sm mb-2">ID: {participant.id}</p>
                  <p className="text-[#DCEAB4] font-bold text-lg">
                    {participant.title} {participant.name}
                  </p>
                  <p className="text-[#DCEAB4] text-sm">{participant.city}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-[#DCEAB4] text-lg">No participants found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyParticipantList;
