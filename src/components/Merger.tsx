import PDFMerger from "pdf-merger-js/browser";
import React, { useEffect, useState } from "react";

interface MergerProps {
  files: (File | Blob)[];
}

const Merger: React.FC<MergerProps> = ({ files }) => {
  const [mergedPdfUrl, setMergedPdfUrl] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    const mergeFiles = async () => {
      const merger = new PDFMerger();

      for (const file of files) {
        await merger.add(file);
      }

      await merger.setMetadata({
        producer: "pdf-merger-js based script",
      });

      const mergedPdf = await merger.saveAsBlob();
      const url = URL.createObjectURL(mergedPdf);
      setMergedPdfUrl(url);
    };

    mergeFiles().catch((err) => {
      console.error(err);
    });

    return () => {
      if (mergedPdfUrl) {
        URL.revokeObjectURL(mergedPdfUrl);
      }
      setMergedPdfUrl(undefined);
    };
  }, [files]);

  return !mergedPdfUrl ? (
    <>Loading...</>
  ) : (
    <iframe
      height={1000}
      src={mergedPdfUrl}
      title="pdf-viewer"
      width="100%"
    ></iframe>
  );
};

export default Merger;
