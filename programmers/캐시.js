function solution(cacheSize, cities) {
    let result = 0;
    
    if (cacheSize === 0) return cities.length * 5
    
    const cache = []
    
    while(cities.length) {
        const city = cities.shift().toLowerCase();
        const isCacheInCity = cache.includes(city)
        
        if (isCacheInCity) {
            const cityIndex = cache.indexOf(city);
            cache.splice(cityIndex,1);
            cache.push(city);
            result += 1;
        } 
        
        if (!isCacheInCity) {
            if (cache.length === cacheSize) {
              cache.shift();  
            }
            
            cache.push(city);
            result += 5
        }
        
    }
    
    return result;
}
