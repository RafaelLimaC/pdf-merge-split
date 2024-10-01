"use client";
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
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      {files.length > 0 && <Merger files={files} />}
    </div>
  );
};

export default App;
