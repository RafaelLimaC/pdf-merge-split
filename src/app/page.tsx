"use client";
import Header from "@/components/Header";
import React, { useState } from "react";
import Merger from "../components/Merger";

const App = () => {
  const [files, setFiles] = useState<Array<File | Blob>>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles(Array.from(event.target.files));
    }
  };

  return (
    <div className="h-full min-h-screen">
      <Header />
      <div className="bg-[#f5f5fa] min-h-[calc(100vh-60px)] flex flex-col items-center p-6 ">
        <h1 className="text-[42px] font-bold py-[6px]">Juntar arquivos PDF</h1>
        <p className="max-w-[800px] tracking-[0.01em] text-center leading-[32px] text-[22px] font-normal text-[#47474f]">
          Mesclar e juntar PDFs e colocá-los em qualquer ordem que desejar. É
          tudo muito fácil e rápido!
        </p>
        <label
          htmlFor="fileUpload"
          className="m-9 rounded-[12px] px-[48px] py-[24px] text-[white] font-bold text-[24px] bg-[#e5322d] leading-[28px]"
        >
          Selecionar arquivos PDF
        </label>
        <input
          type="file"
          className="hidden"
          id="fileUpload"
          multiple
          onChange={handleFileChange}
        />
        {files.length > 0 && <Merger files={files} />}
      </div>
    </div>
  );
};

export default App;
