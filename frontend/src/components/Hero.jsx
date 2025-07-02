import React, { Component, useState } from "react";
import { FaSearch } from "react-icons/fa";
import InquiryForm from "./InquiryForm";
import vid from "../assets/vid.webm";

const options = [
  "Corporate Event",
  "Birthday Party",
  "Social Event",
  "Sports Event",
  "Religious Event",
  "Entertainment Event",
  "Baby Shower / Naming Ceremony",
  "Haldi / Mehndi / Sangeet / Reception",
];

// SearchBar component (if needed separately)
const SearchBar = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [searchText, setSearchText] = useState("");

  return (
    <div className="flex items-center gap-4">
      {/* Add your SearchBar JSX here if needed */}
    </div>
  );
};

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoLoaded: false,
      showAd: true,
      adSkippable: false,
      showInquiryForm: false,
      selectedOption: "",
      searchText: "",
    };
  }

  handleVideoCanPlayThrough = () => {
    this.setState({ videoLoaded: true });
  };

  componentDidMount() {
    this.adSkipTimer = setTimeout(() => {
      this.setState({ adSkippable: true });
    }, 5000);
  }

  componentWillUnmount() {
    if (this.adSkipTimer) {
      clearTimeout(this.adSkipTimer);
    }
  }

  handleSkipAd = () => {
    this.setState({ showAd: false });
  };

  toggleInquiryForm = () => {
    this.setState((prevState) => ({
      showInquiryForm: !prevState.showInquiryForm,
    }));
  };

  handleSearchTextChange = (e) => {
    this.setState({ searchText: e.target.value });
  };

  handleOptionChange = (e) => {
    this.setState({ selectedOption: e.target.value });
  };

  render() {
    const { videoLoaded, showAd, adSkippable, showInquiryForm, selectedOption, searchText } = this.state;

    return (
      <section
        id="hero"
        className="relative w-full overflow-hidden flex flex-col items-center justify-center bg-black"
      >
        {/* Video Container */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[800px] overflow-hidden">
          <video
            className={`absolute inset-0 w-full h-full object-cover brightness-[1.2] transition-opacity duration-500 ${
              videoLoaded ? "opacity-100" : "opacity-0"
            }`}
            src={vid}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onLoadedData={this.handleVideoCanPlayThrough}
          ></video>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        {/* Loading Placeholder */}
        {!videoLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white">Loading...</div>
          </div>
        )}

        {/* Search Navbar Section - Desktop Only */}
        <div className="hidden sm:flex absolute bottom-20 left-1/2 transform -translate-x-1/2 w-[90%] max-w-2xl z-20 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg p-4 flex-col sm:flex-row items-center gap-4">
          {/* Location Dropdown */}
          <select
            className="w-full sm:w-auto px-4 py-2 bg-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-white/70"
            defaultValue=""
          >
            <option value="" disabled>
              Select Location
            </option>
            <option value="pune">Pune</option>
            <option value="lonavala">Lonavala</option>
            <option value="khandala">Khandala</option>
            <option value="mahabaleshwar">Mahabaleshwar</option>
            <option value="goa">Goa</option>
            <option value="mumbai">Mumbai</option>
          </select>

          <div className="w-full sm:w-auto flex flex-col gap-2">
            {/* Search Input */}
          
            {/* Category Dropdown */}
            <select
              value={selectedOption}
              onChange={this.handleOptionChange}
              className="bg-white/20 text-white px-3 py-2 rounded-lg outline-none placeholder-white/70"
            >
              <option value="">Select a category</option>
              {options.map((option, index) => (
                <option className="text-black" key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Get Started Button (Desktop) */}
          <button
            onClick={this.toggleInquiryForm}
            className=" px-6 py-2 bg-pink-500 text-white font-medium rounded-lg shadow hover:bg-pink-600 transition-all duration-300"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Get Started Button Only */}
        <div className="flex sm:hidden absolute bottom-6 right-6 z-20">
          <button
            onClick={this.toggleInquiryForm}
            className="px-5 py-2 bg-pink-500 text-white font-semibold rounded-lg shadow hover:bg-pink-600 transition-all duration-300"
          >
            Get Started
          </button>
        </div>

        {/* Inquire Now Button */}
        <button
          onClick={this.toggleInquiryForm}
          className="absolute top-1/2 right-6 transform -translate-y-1/2 px-6 py-3 rounded-full z-20 font-medium flex items-center group transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400/50 backdrop-blur-md bg-white/10 border border-pink-500/30 shadow-[0_8px_30px_rgb(255,105,180,0.12)] hover:shadow-[0_8px_30px_rgb(255,105,180,0.3)]"
        >
          <span className="text-pink-200 group-hover:text-white transition-all duration-300 mr-2 tracking-wide font-semibold drop-shadow-md">
            Inquire Now
          </span>
          <svg
            className="w-5 h-5 text-pink-300 group-hover:translate-x-1 group-hover:text-white transition-all duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>

          {/* Neon Side Glow Effects */}
          <span className="absolute top-1/2 left-0 h-[60%] w-1 bg-pink-500 rounded-full blur-sm opacity-70 animate-pulse -translate-y-1/2"></span>
          <span className="absolute top-1/2 right-0 h-[60%] w-1 bg-purple-500 rounded-full blur-sm opacity-70 animate-pulse -translate-y-1/2"></span>
        </button>

        {/* Inquiry Form */}
        {showInquiryForm && <InquiryForm onClose={this.toggleInquiryForm} />}
      </section>
    );
  }
}

export default Hero;