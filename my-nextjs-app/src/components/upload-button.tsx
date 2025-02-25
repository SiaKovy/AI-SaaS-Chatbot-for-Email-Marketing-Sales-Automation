// filepath: /c:/Users/Seilt/source/repos/AI-SaaS-Chatbot-for-Email-Marketing-Sales-Automation/my-nextjs-app/src/components/upload-button.tsx
import React from 'react';

type UploadButtonProps = {
  id: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const UploadButton: React.FC<UploadButtonProps> = ({ id, onChange }) => {
  return (
    <div className="upload-button">
      <input
        type="file"
        id={id}
        onChange={onChange}
        className="upload-input"
      />
      <label htmlFor={id} className="upload-label">
        Choose File
      </label>
    </div>
  );
};

export default UploadButton;