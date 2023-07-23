// import React from 'react'

interface props {
  title: String;
}

function SectionHeader({ title }: props) {
  return (
    <div className="section-header">
      <div className="line" />
      <h1>{title}</h1>
      <div className="line" />
    </div>
  );
}

export default SectionHeader;
