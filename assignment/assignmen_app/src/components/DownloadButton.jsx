import React from 'react';
import { Button } from 'antd';

function DownloadButton() {
  const downloadVideo = () => {
    // Create a blob URL for the video (replace 'videoURL' with your actual video URL)
    const videoURL = 
    fetch(videoURL)
      .then(response => response.blob())
      .then(blob => {
        // Create a URL for the blob
        const blobURL = window.URL.createObjectURL(blob);
        // Create a temporary <a> element
        const a = document.createElement('a');
        a.href = blobURL;
        a.download = 'video.mp4'; // Set the file name for download
        // Append the <a> element to the body
        document.body.appendChild(a);
        // Click the <a> element programmatically to trigger download
        a.click();
        // Remove the <a> element from the DOM
        document.body.removeChild(a);
      })
      .catch(error => {
        console.error('Error downloading the video:', error);
      });
  };

  return (
    <Button type="primary" onClick={downloadVideo}>
      Download Video
    </Button>
  );
}

export default DownloadButton;