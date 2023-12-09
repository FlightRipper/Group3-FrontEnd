import '../AdminDashboard.css';
import Dropdown from 'react-bootstrap/Dropdown';
import CampaignRequestsCard from './CampaignRequestsCard.jsx';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SpinnerLoadingSmalle from '../../../components/SpinnerLoadingSmalle';

const CampaignRequests = () => {
  const [campaign, setcampaign] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false)
  console.log(selectedCategory);

  useEffect(() => {
    const fetchcampaign = async () => {
      setLoading(true)
      try {
        const response = await axios.get('http://localhost:5000/campaigns/');
        const data = response.data;
        setcampaign(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setcampaign(null);
        setLoading(false)
      }
    };
    fetchcampaign();
  }, []);

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="w-100">
      <div className="dashboard-body w-100 h-100 d-flex row m-0 align-items-center justify-content-center">
        <div className="body-header w-100 d-flex align-items-center  justify-content-between column p-3 m-0 sticky-top">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Filter By
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleFilter('animal')}>
                Animal
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilter('medical')}>
                Medical
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilter('education')}>
                Education
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilter('All')}>
                View All
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div className="admin-search-div">
            <input
              type="text"
              className="admin-search px-3"
              placeholder="Search"
            />
          </div>
        </div>
        {loading ? <SpinnerLoadingSmalle /> : (
        <div className="body-content w-100 p-0 d-flex flex-wrap row justify-content-around align-items-center">
          {campaign &&
            campaign
              .filter(
                (item) =>
                  (selectedCategory === 'All' ||
                    item.category === selectedCategory) &&
                  item.isApproved === false &&
                  (searchTerm === '' ||
                    (item.title &&
                      item.title
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())))
              )
              .map((item, index) => (
                <CampaignRequestsCard key={index} data={item} />
              ))}
        </div>
        )}
      </div>
    </div>
  );
};

export default CampaignRequests;
