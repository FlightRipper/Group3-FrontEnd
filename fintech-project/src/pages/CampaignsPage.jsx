import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomeCampaignsCards from '../components/HomeCampaignsCards';
import SpinnerLoading from '../components/SpinnerLoadingSmalle'


const CampaignsPage = () => {
  const [campaign, setCampaign] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false)

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    setLoading(true)
    const fetchCampaign = async () => {
      try {
        const response = await axios.get("http://localhost:5000/campaigns/");
        const data = response.data;
        setCampaign(data);
        console.log(data);
        setLoading(false)
      } catch (error) {
        console.log(error);
        setCampaign(null);
        setLoading(false)
      }
    };
    fetchCampaign();
  }, []);

  return (
    <div className="w-100 vh-100 mt-5">
      {loading ? <SpinnerLoading /> : (
      <div className="campaign-request-card-home-container d-flex flex-column flow-row justify-content-center align-items-center gap-5">
        <div className="w-50">
          <h1 className="text-info ">Top Campaigns</h1>
          <h4 className="text-dark">
            Have An Overview of Our Campaigns and Raise for what you care for
          </h4>
        </div>
        {campaign && (
          <div
            id="campaignCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {campaign
                .filter(
                  (item) =>
                    (selectedCategory === "All" ||
                      item.category === selectedCategory) &&
                    item.isApproved
                )
                .reduce((acc, item, index) => {
                  if (index % 3 === 0) {
                    acc.push([]);
                  }
                  acc[acc.length - 1].push(item);
                  return acc;
                }, [])
                .map((group, groupIndex) => (
                  <div
                    key={groupIndex}
                    className={`carousel-item ${groupIndex === 0 ? 'active' : ''}`}
                  >
                    <div className="d-flex justify-content-around">
                      {group.map((item, itemIndex) => (
                        <HomeCampaignsCards key={itemIndex} data={item} />
                      ))}
                    </div>
                  </div>
                ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#campaignCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#campaignCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        )}
      </div>
      )}
    </div>
  );
};

export default CampaignsPage;
