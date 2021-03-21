import React from 'react';

const Country = (props) => {
    const {name, population, region, flag, callingCodes} = props.country;
    const flagStyle = {height:'50px'}
    const countryStyle = {border: '1px solid red', margin:'10px', padding:'10px'}
    const handleAddCountry = props.handleAddCountry
    return (
        <div style ={countryStyle}>
            <h4>Thi is {name}</h4>
            <img style={flagStyle} src={flag} alt="" />
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <h5>Phone Code: {callingCodes}</h5>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;