'use client'
import Image from "next/image";
import { useState } from "react";

const reservationsData = [
  {
    id: 1,
    type: 'Hotel',
    image: 'https://via.placeholder.com/150',
    name: 'Hotel A',
    location: 'City A',
  },
  {
    id: 2,
    type: 'Cottage',
    image: 'https://via.placeholder.com/150',
    name: 'Cottage B',
    location: 'City B',
  },
  {
    id: 3,
    type: 'Apartment',
    image: 'https://via.placeholder.com/150',
    name: 'Apartment C',
    location: 'City C',
  },
];

export default function Home() {
  const [filter, setFilter] = useState('All');

  const filteredReservations = filter === 'All'
    ? reservationsData
    : reservationsData.filter(reservation => reservation.type === filter);

  return (
    <div className="flex p-4 text-center">
      <div className="w-1/4 p-4">
        <h2 className="text-xl font-semibold mb-4">Filter by Type</h2>
        <ul>
          <li
            className={`cursor-pointer ${filter === 'All' ? 'text-blue-600' : ''
              }`}
            onClick={() => setFilter('All')}
          >
            All
          </li>
          <li
            className={`cursor-pointer ${filter === 'Hotel' ? 'text-blue-600' : ''
              }`}
            onClick={() => setFilter('Hotel')}
          >
            Hotel
          </li>
          <li
            className={`cursor-pointer ${filter === 'Cottage' ? 'text-blue-600' : ''
              }`}
            onClick={() => setFilter('Cottage')}
          >
            Cottage
          </li>
          <li
            className={`cursor-pointer ${filter === 'Apartment' ? 'text-blue-600' : ''
              }`}
            onClick={() => setFilter('Apartment')}
          >
            Apartment
          </li>
        </ul>
      </div>
      <div className="w-3/4 flex flex-wrap gap-4">
        {filteredReservations.map((reservation) => (
          <div
            key={reservation.id}
            className="justify-center w-1/3 bg-white p-4 rounded-lg shadow-md"
          >
            <Image
              src={reservation.image}
              width={150}
              height={150}
              alt={reservation.name}
              className="justify-center items-center mb-2"
            />
            <h3 className="text-lg font-semibold">{reservation.name}</h3>
            <p className="text-gray-500">{reservation.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
