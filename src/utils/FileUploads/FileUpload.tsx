import { useDropzone } from "react-dropzone";
import "./fileUpload.css";

const FileUpload = ({ setUploadedFiles, uploadedFiles }: any) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      // Filter files to only include PNG and JPG
      const filteredFiles = acceptedFiles.filter(
        (file) => file.type === "image/png" || file.type === "image/jpeg"
      );

      // Limit the number of files to a maximum of 4
      const newFiles: any = filteredFiles.slice(0, 4);

      setUploadedFiles(newFiles);
    },
  });

  const handleClick = (indexToRemove: number, event: React.MouseEvent) => {
    event.stopPropagation();
    setUploadedFiles((prevFiles: any) =>
      prevFiles.filter((_: any, index: number) => index !== indexToRemove)
    );
  };

  return (
    <div className="file-uploads" {...getRootProps()}>
      <input {...getInputProps()} accept=".png, .jpg, .jpeg" />
      {uploadedFiles.length === 0 && (
        <p>
          Drag and drop PNG or JPG files here or click to browse. (Max 4 files)
        </p>
      )}
      <ul>
        {uploadedFiles.map((file: any, index: number) => (
          <div key={index} className="uploaded-file">
            <div
              className="file-upload_cancel-button"
              onClick={(e) => handleClick(index, e)}
            >
              <img src="/assets/close-icon-bck.svg" alt="remove" />
            </div>
            <img src={URL.createObjectURL(file)} alt="" />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default FileUpload;
