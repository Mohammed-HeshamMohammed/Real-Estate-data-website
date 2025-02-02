import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <span className="text-[#00b4d8] font-bold text-xl">RealEstate Data</span>
            </div>

            {/* Navigation Links and Button Container */}
            <div className="flex items-center">
              {/* Navigation Links */}
              <div className="flex items-center space-x-6">
                {["Home", "Plans", "About Us", "FAQ"].map((item) => (
                  <Link
                    key={item}
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-[#03045e] hover:text-[#00b4d8] px-3 py-2 text-sm font-medium relative group transition-all duration-200 hover:scale-110"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00b4d8] transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
                  </Link>
                ))}
              </div>

              {/* Contact Us Button */}
              <Button
                className="bg-[#03045e] hover:bg-[#00b4d8] text-white font-medium transition-colors duration-200 ml-20"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#00b4d8] mb-4">Welcome to RealEstate Data</h1>
          <p className="text-xl text-gray-600">Your trusted source for real estate market insights</p>
        </div>
      </div>
    </div>
  );
};

export default Index;