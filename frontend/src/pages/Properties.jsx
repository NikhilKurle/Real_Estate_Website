import { useState, useMemo } from 'react';
import PropertyCard from '../components/PropertyCard';
import propertiesData from '../data/properties.json';
import { Filter } from 'lucide-react';
import './Properties.css';

const Properties = () => {
  const [filterType, setFilterType] = useState('All');
  const [filterLocation, setFilterLocation] = useState('All');
  const [filterPrice, setFilterPrice] = useState('All');

  const types = ['All', ...new Set(propertiesData.map(p => p.type))];
  const locations = ['All', ...new Set(propertiesData.map(p => p.location.split(',')[0]))];

  const filteredProperties = useMemo(() => {
    return propertiesData.filter(property => {
      // Type filter
      if (filterType !== 'All' && property.type !== filterType) return false;
      
      // Location filter (matching city roughly)
      if (filterLocation !== 'All' && !property.location.includes(filterLocation)) return false;
      
      // Price filter
      if (filterPrice !== 'All') {
        const price = property.price;
        if (filterPrice === 'Under $2M' && price >= 2000000) return false;
        if (filterPrice === '$2M - $4M' && (price < 2000000 || price > 4000000)) return false;
        if (filterPrice === 'Over $4M' && price <= 4000000) return false;
      }
      
      return true;
    });
  }, [filterType, filterLocation, filterPrice]);

  return (
    <div className="properties-page animate-fade-in">
      <div className="page-header">
        <div className="container text-center">
          <h1>Exclusive Properties</h1>
          <p className="text-muted">Browse our collection of the world's finest real estate</p>
        </div>
      </div>

      <div className="container section pt-0">
        <div className="filters-bar">
          <div className="filters-title">
            <Filter size={20} />
            <span>Filter Properties</span>
          </div>
          <div className="filters-controls">
            <select value={filterLocation} onChange={(e) => setFilterLocation(e.target.value)}>
              <option value="All">All Locations</option>
              {locations.filter(l => l !== 'All').map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
            
            <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
              <option value="All">All Property Types</option>
              {types.filter(t => t !== 'All').map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            
            <select value={filterPrice} onChange={(e) => setFilterPrice(e.target.value)}>
              <option value="All">All Prices</option>
              <option value="Under $2M">Under $2M</option>
              <option value="$2M - $4M">$2M - $4M</option>
              <option value="Over $4M">Over $4M</option>
            </select>
          </div>
        </div>

        <div className="grid property-grid">
          {filteredProperties.length > 0 ? (
            filteredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))
          ) : (
            <div className="no-results">
              <h3>No properties found</h3>
              <p className="text-muted">Try adjusting your filters to find more properties.</p>
              <button className="btn btn-outline" onClick={() => {
                setFilterType('All');
                setFilterLocation('All');
                setFilterPrice('All');
              }}>Clear Filters</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Properties;
