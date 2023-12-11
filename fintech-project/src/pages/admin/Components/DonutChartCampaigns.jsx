import React, { useEffect, useRef, useState } from 'react';
import { Chart } from 'chart.js/auto';
import '../AdminDashboard.css';
import axios from 'axios';
import SpinnerLoadingSmalle from '../../../components/SpinnerLoadingSmalle';

const DonutChartCampaigns = () => {
  const chartRef = useRef(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const fetchCategoryStatistics = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/campaigns/category-statistics'
        );
        const categoryData = response.data;
        setCategories(categoryData);
        setLoading(false)
      } catch (error) {
        console.log(error);
        setCategories([]);
        setLoading(false)
      }
    };

    fetchCategoryStatistics();
  }, []);

  useEffect(() => {
    if (categories.length === 0) {
      return;
    }
    const ctx = chartRef.current.getContext('2d');
    // Extract labels and data from the fetched categories
    const labels = categories.map(
      (category) =>
        category.category.charAt(0).toUpperCase() + category.category.slice(1)
    );
    const totalCount = categories.reduce(
      (acc, category) => acc + category.count,
      0
    );
    const percentages = categories.map((category) =>
      ((category.count / totalCount) * 100).toFixed(2)
    );
    const percentageWithSymbol = percentages.map((percent) => `${percent}%`);
    console.log(percentageWithSymbol);

    // Chart data
    const chartData = {
      labels: labels,
      datasets: [
        {
          data: percentages,
          backgroundColor: ['#8487c6', '#6d4b77', '#242654'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#0a0b3d'],
        },
      ],
    };

    // Chart options
    const options = {
      cutoutPercentage: 70,
      plugins: {
        tooltip: {
          callbacks: { label: (data) => `${data.formattedValue}%` },
        },
        legend: {
          labels: {
            color: 'white',
            font: {
              size: 16,
              family: 'Helvetica Neue',
            },
          },
        },
      },
      layout: {
        padding: {
          top: 20, // Adjust the bottom padding between legend and chart as needed
        },
      },
    };

    // Create the donut chart
    const myDonutChart = new Chart(ctx, {
      type: 'doughnut',
      data: chartData,
      options: options,
    });

    // Cleanup on component unmount
    return () => {
      myDonutChart.destroy();
    };
  }, [categories]);
  return (
    <>
    {loading ? <SpinnerLoadingSmalle /> : (
    <div className="donut-chart m-5">
      <canvas
        className="donut"
        ref={chartRef}
        width="350"
        height="350"
      ></canvas>
    </div>
    )}
    </>
  );
};

export default DonutChartCampaigns;
