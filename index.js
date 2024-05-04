const fs = require('hexo-fs')
const path = require('path')
const Papa = require('papaparse')

hexo.extend.filter.register('before_post_render', function(data) {
    console.log('data', data)
    console.log('data', hexo.theme.linkedin_data)
    if (hexo.theme.linkedin_data && hexo.theme.linkedin_data.enable) {
        if (hexo.theme.linkedin_data.certifications) {
            const csvData = fs.readFileSync(path.join(__dirname, hexo.theme.linkedin_data.path, 'Certifications.csv'), 'utf8')
            const jsonData = Papa.parse(csvData, { header: true }).data;
            data.content += '\n\n' + JSON.stringify(jsonData)
        }
    }
    console.log(data)
    return data;
});