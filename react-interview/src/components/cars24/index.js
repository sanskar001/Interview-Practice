import React, { useState } from "react";
import "./FileExplorer.css";

const FileExplorer = ({ fileData }) => {
  const [isVisible, setIsVisible] = useState(false);
  const expand = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="file_explorer">
      {Object.keys(fileData).map((key) => {
        return (
          <div key={key} className="folder">
            <h4 onClick={expand} className="folder_name">
              {key.toUpperCase()}
            </h4>
            {isVisible ? (
              <ul className="files">
                {Object.values(fileData[key]).map((value, index) => {
                  if (typeof value === "object") {
                    return (
                      <FileExplorer key={`index_${index}`} fileData={value} />
                    );
                  } else {
                    return <li key={value}>{value}</li>;
                  }
                })}
              </ul>
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FileExplorer;
