import React, { useRef } from 'react';
import Sidebar from "../../Components/Dashboard/Sidebar/Sidebar";

const AllNewsletter = () => {
  const newsletter = [
    {
      id: 1,
      email: "google1231@gmail.com",
    },
    {
      id: 2,
      name: "Aqib Nawan Khan",
      email: "google1231@gmail.com",
      contact: "0218321383",
    },
    {
      id: 3,
      name: "Aqib Nawan Khan",
      email: "google1231@gmail.com",
      contact: "0218321383",
    },
    {
      id: 4,
      name: "Aqib Nawan Khan",
      email: "google1231@gmail.com",
      contact: "0218321383",
    },
    // Add more dummy data objects as needed
  ];

  const svgRef = useRef(null);

  const downloadSvg = () => {
    const svgString = generateSvg();
    const blob = new Blob([svgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'newsletter.svg';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const generateSvg = () => {
    const svgContent = `
      <svg xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#fff"/>
        <text x="10" y="30" font-size="18" font-family="Arial" fill="#000">
          Newsletter Emails:
        </text>
        ${newsletter.map((item, index) => `
          <text x="10" y="${60 + index * 30}" font-size="16" font-family="Arial" fill="#000">
            ${item.email}
          </text>
        `).join('')}
      </svg>
    `;

    return new XMLSerializer().serializeToString(new DOMParser().parseFromString(svgContent, 'text/xml'));
  };

  return (
    <div>
      <Sidebar />
      <div className="ml-[35%] pt-5">
        <div className="bg-white shadow-2xl w-[70%] my-10 py-5 px-6 rounded-xl">
          <h1 className="text-[#3f691f] font-semibold text-[24px] pb-6 px-3">
            NewsLetter Emails
          </h1>
          <table className="w-full text-center">
            <thead className="text-[16px]">
              <tr>
                <th className="py-6">Id</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody className="text-[14px] rounded-lg">
              {newsletter.map((item, index) => (
                <tr key={index} className="border-b border-[#00000041]">
                  <td className="py-4">{item.id}</td>
                  <td>{item.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-8">
            <button
              onClick={downloadSvg}
              className="bg-[#3f691f] text-white py-2 px-5 font-semibold rounded-lg border hover:border-[#3f691f] hover:bg-white hover:text-[#3f691f] duration-300"
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllNewsletter;
