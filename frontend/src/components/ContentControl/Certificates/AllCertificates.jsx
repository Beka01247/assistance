import React from "react";
import CertificateCard from "./CertificateCard";

export default function AllCertificates({ setTab }) {
  const certificates = Array(10).fill({
    name: "Иван",
    surname: "Иванов",
    phoneNumber: "+996 555 555 555",
    filePath: "certificate.pdf",
    status: "Одобрено",
  });
  return (
    <div className="w-full flex justify-center">
      <div className="w-[70%] grid grid-cols-1 lg:grid-cols-3 gap-4 py-2 px-7 ml-8">
        {certificates.map((certificate, index) => (
          <CertificateCard
            content={certificate}
            index={index}
            setTab={setTab}
          />
        ))}
      </div>
    </div>
  );
}
