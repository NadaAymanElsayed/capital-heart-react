"use client";

export default function Section2Background() {
  return (
    <div className="absolute inset-0">
      <img
        src="/assets/bgSection2.png" 
        alt="background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60"></div>
    </div>
  );
}
