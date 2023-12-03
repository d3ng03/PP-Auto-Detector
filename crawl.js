const axios = require('axios');

async function getNpmPackagesWithKeyword(keyword, maxResults = 100) {
    const packages = [];
    let offset = 0;

    while (packages.length < maxResults) {
        const response = await axios.get(`https://registry.npmjs.org/-/v1/search?text=keywords:${keyword}&size=20&from=${offset}`);
        const data = response.data;

        data.objects.forEach(obj => {
            if (obj.package && obj.package.name) {
                packages.push(obj.package.name);
            }
        });

        offset += 20;
        if (offset >= data.total || packages.length >= maxResults) {
            break;
        }
    }

    return packages.slice(0, maxResults);
}

// Usage
getNpmPackagesWithKeyword('extend', 100).then(packages => console.log(packages));
