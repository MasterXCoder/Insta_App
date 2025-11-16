import React, { useState, useRef } from "react";
import { FaTimes, FaImages } from "react-icons/fa";

export default function Create({ isOpen, onClose, onPostCreated }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [fileType, setFileType] = useState(null);
  const [caption, setCaption] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setSelectedFile(file);
    const reader = new FileReader();

    reader.onload = () => {
      setPreviewUrl(reader.result);
      if (file.type.startsWith("image/")) {
        setFileType("image");
      } else if (file.type.startsWith("video/")) {
        setFileType("video");
      } else {
        alert("Unsupported file type. Please use image or video.");
        resetModal();
        return;
      }
      setShowPreview(true);
    };

    reader.onerror = () => {
      alert("Failed to read file.");
      resetModal();
    };

    reader.readAsDataURL(file);
  };

  const handleUpload = () => {
    if (!previewUrl) {
      alert("Please select a photo or video.");
      return;
    }

    const newPost = {
      id: "post-" + Date.now(),
      media: previewUrl,
      mediaType: fileType,
      caption: caption.trim(),
      likes: Math.floor(Math.random() * 900) + 100,
      comments: Math.floor(Math.random() * 50),
      time: new Date().toLocaleString(),
      username: "vansh_singh_787",
      userPic: "/pics/profile_1.jpg",
    };

    // Call parent callback to add post
    if (onPostCreated) {
      onPostCreated(newPost);
    }

    alert("✅ Post uploaded successfully!");
    handleClose();
  };

  const handleClose = () => {
    resetModal();
    if (onClose) onClose();
  };

  const resetModal = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setFileType(null);
    setCaption("");
    setShowPreview(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay-create" onClick={handleClose}>
      <div className="modal-content-create" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn-create" onClick={handleClose}>
          <FaTimes />
        </button>

        <h3 className="modal-title">Create new post</h3>

        {!showPreview ? (
          <div className="upload-area-create">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*,video/*"
              onChange={handleFileSelect}
              style={{ display: "none" }}
            />
            <FaImages style={{ fontSize: "50px", color: "#8e8e8e" }} />
            <p style={{ margin: "20px 0", color: "#8e8e8e" }}>
              Drag photos and videos here
            </p>
            <button
              className="btn-create"
              onClick={() => fileInputRef.current?.click()}
            >
              Select from computer
            </button>
          </div>
        ) : (
          <div className="preview-container">
            <div className="preview-left">
              {fileType === "image" ? (
                <img
                  src={previewUrl}
                  alt="Preview"
                  style={{ maxWidth: "100%", display: "block" }}
                />
              ) : (
                <video
                  src={previewUrl}
                  controls
                  style={{ maxWidth: "100%", display: "block" }}
                />
              )}
            </div>
            <div className="preview-right">
              <div className="user-info-create">
                <img
                  src="/pics/profile_1.jpg"
                  alt="Profile"
                  className="user-avatar-create"
                />
                <strong>vansh_singh_787</strong>
              </div>
              <textarea
                className="caption-input"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                maxLength={2200}
                placeholder="Write a caption..."
              />
              <div className="caption-counter">
                {caption.length}/2200
              </div>
              <button className="btn-create btn-share" onClick={handleUpload}>
                Share
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .modal-overlay-create {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }

        .modal-content-create {
          position: relative;
          background: #262626;
          border-radius: 12px;
          max-width: 900px;
          width: 90%;
          max-height: 85vh;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        }

        .modal-title {
          text-align: center;
          padding: 16px;
          border-bottom: 1px solid #363636;
          margin: 0;
          color: #fff;
          font-size: 16px;
          font-weight: 600;
        }

        .close-btn-create {
          position: absolute;
          top: 12px;
          right: 12px;
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          cursor: pointer;
          z-index: 10;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.2s;
        }

        .close-btn-create:hover {
          color: #888;
        }

        .upload-area-create {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 40px;
          min-height: 400px;
        }

        .btn-create {
          background: #0095f6;
          color: #fff;
          border: none;
          padding: 10px 24px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }

        .btn-create:hover {
          background: #1877f2;
        }

        .preview-container {
          display: flex;
          height: calc(85vh - 60px);
          max-height: 700px;
        }

        .preview-left {
          flex: 1.5;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .preview-left img,
        .preview-left video {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .preview-right {
          flex: 1;
          background: #262626;
          padding: 20px;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
        }

        .user-info-create {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          color: #fff;
        }

        .user-avatar-create {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
        }

        .caption-input {
          flex: 1;
          background: transparent;
          border: none;
          color: #fff;
          font-size: 14px;
          resize: none;
          outline: none;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          line-height: 1.5;
          min-height: 150px;
          margin-bottom: 10px;
        }

        .caption-input::placeholder {
          color: #8e8e8e;
        }

        .caption-counter {
          color: #8e8e8e;
          font-size: 12px;
          text-align: right;
          margin-bottom: 20px;
        }

        .btn-share {
          width: 100%;
          margin-top: auto;
        }

        @media (max-width: 768px) {
          .preview-container {
            flex-direction: column;
          }

          .preview-left {
            max-height: 300px;
          }

          .preview-right {
            max-height: 400px;
          }
        }
      `}</style>
    </div>
  );
}