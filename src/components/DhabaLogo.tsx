const DhabaLogo = ({ className = "w-12 h-8" }: { className?: string }) => {
  return (
    <div className={`${className} bg-gradient-to-r from-green-600 to-green-500 rounded-lg flex items-center justify-center relative overflow-hidden`}>
      {/* Dome/Cloche */}
      <div className="absolute top-1 left-1/2 transform -translate-x-1/2">
        <div className="w-4 h-3 bg-yellow-400 rounded-t-full border border-yellow-500"></div>
        <div className="w-1 h-1 bg-orange-500 rounded-full mx-auto -mt-1"></div>
      </div>
      
      {/* Fork and Spoon */}
      <div className="absolute bottom-1 left-1">
        <div className="w-0.5 h-3 bg-white"></div>
        <div className="w-1 h-0.5 bg-white -mt-0.5"></div>
      </div>
      <div className="absolute bottom-1 right-1">
        <div className="w-0.5 h-3 bg-white"></div>
        <div className="w-1 h-1 bg-white rounded-full -mt-1 ml-0.25"></div>
      </div>
      
      {/* Green leaves */}
      <div className="absolute bottom-2 left-2">
        <div className="w-1 h-1 bg-green-300 rounded-full transform rotate-45"></div>
      </div>
      <div className="absolute bottom-2 right-2">
        <div className="w-1 h-1 bg-green-300 rounded-full transform -rotate-45"></div>
      </div>
    </div>
  );
};

export default DhabaLogo;