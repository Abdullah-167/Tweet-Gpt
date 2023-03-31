import Image from 'next/image';
import React from 'react'

const Scheduled = () => {
  return (
    <div>
      {tabContent.map((item, index) => {
        return (
          <div key={index} className="mb-7 mt-10">
            <div className="py-4 px-4 flex justify-between text-[#445C6D] text-xs bg-bgprimary mx-6 rounded-xl">
              <p>
                {item.content}
              </p>
              <Image
                src="coolicon.svg"
                alt=""
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </div>
            <p className="text-xs text-[#738391] text-right mr-6 mt-2">
              {item.date}
            </p>
          </div>
        );
      })}
    </div>
  )
}

export default Scheduled

const tabContent = [
  {
    content:
      " Authoritatively deliver granular testing procedures for interoperable",
    date: "scheduled on 2023-03-17 03:00PM",
  },
  {
    content:
      " Authoritatively deliver granular testing procedures for interoperable",
    date: "scheduled on 2023-03-17 03:00PM",
  },
  {
    content:
      " Authoritatively deliver granular testing procedures for interoperable",
    date: "scheduled on 2023-03-17 03:00PM",
  },
];