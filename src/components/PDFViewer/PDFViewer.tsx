import React from 'react';
import './PDFViewer.scss';

interface PDFViewerProps {
  pdfUrl: string;
  title?: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl, title }) => {
  return (
    <div className="pdf-viewer">
      {title && <h3 className="pdf-title">{title}</h3>}
      <div className="pdf-container">
        <iframe
          src={pdfUrl}
          title={title || 'PDF Document'}
          className="pdf-iframe"
          width="100%"
          height="600px"
        />
      </div>
    </div>
  );
};

export default PDFViewer;
