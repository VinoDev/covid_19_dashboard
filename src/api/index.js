const url = `https://covid19.mathdro.id/api`;

export const fetchData = async (country) => {
    let usedUrl = country ? `${url}/countries/${country}` : url;

    try {
        const data = await fetch(usedUrl).then(res=>res.json());
        console.log(data);
        const modifiedData = {
            confirmed: data.confirmed.value,
            deaths: data.deaths.value,
            recovered: data.recovered.value,
            lastUpdate: data.lastUpdate
        }
        return modifiedData;        
    } catch (error) {
        return error
    }
}

export const fetchDailyGlobal = async () => {
    try {
        const data = await fetch(`${url}/daily`).then(res=>res.json());
        const modifiedData = data.map(
            ({totalConfirmed, deaths, reportDate})=>{return {totalConfirmed, deaths: deaths.total, reportDate}}
        )
        return modifiedData
    } catch (error) {
        return error
    }
}

export const fetchCountries = async () => {
    try {
        const data = await fetch(`${url}/countries`).then(res=>res.json());
        const modifiedData = data.countries.map((country)=>{return country.name});
        return modifiedData;
    } catch (error) {
        return error
    }
}