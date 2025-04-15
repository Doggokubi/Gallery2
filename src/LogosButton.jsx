import React, { useState } from "react";

const LogosButton = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (imageName) => {
    if (selectedImage === imageName) {
      setSelectedImage(null);
    } else {
      setSelectedImage(imageName);
    }
  };

  const handleDbClick = (link) =>{
    window.open(link , "_blank")
  }

  return (
    
    <div>
        <button onClick={() => handleClick("Acer_Logo.png")} onDoubleClick={() => handleDbClick("https://www.acer.com")} className="bg-blue-500 text-white px-4 py-2 rounded">Acer</button>
        <button onClick={() => handleClick("Apple_Logo.png")} onDoubleClick={() => handleDbClick("https://www.apple.com")} className="bg-blue-500 text-white px-4 py-2 rounded">Apple</button>
        <button onClick={() => handleClick("Asus_Logo.png")} onDoubleClick={() => handleDbClick("https://www.asus.com")} className="bg-blue-500 text-white px-4 py-2 rounded">Asus</button>
        <button onClick={() => handleClick("Dell_Logo.png")} onDoubleClick={() => handleDbClick("https://www.dell.com")} className="bg-blue-500 text-white px-4 py-2 rounded">Dell</button>
        <button onClick={() => handleClick("Hp_Logo.png")} onDoubleClick={() => handleDbClick("https://www.hp.com")} className="bg-blue-500 text-white px-4 py-2 rounded">Hp</button>
        <button onClick={() => handleClick("Lenovo_Logo.png")} onDoubleClick={() => handleDbClick("https://www.Lenovo.com")} className="bg-blue-500 text-white px-4 py-2 rounded">Lenovo</button>
        <button onClick={() => handleClick("Ms_Logo.png")} onDoubleClick={() => handleDbClick("https://www.microsoft.com")} className="bg-blue-500 text-white px-4 py-2 rounded">Microsoft</button>
        <button onClick={() => handleClick("MSI-Logo.png")} onDoubleClick={() => handleDbClick("https://www.msi.com")} className="bg-blue-500 text-white px-4 py-2 rounded">Msi</button>
        <button onClick={() => handleClick("Samsung_Logo.png")} onDoubleClick={() => handleDbClick(" https://www.samsung.com")} className="bg-blue-500 text-white px-4 py-2 rounded">Samsung</button>

      <br/>
        {selectedImage && (
        <img
          src={`/${selectedImage}`}
          alt="Wybrane"
          height={100}
        />
        )}
    </div>
    
  );
};

export default LogosButton;
