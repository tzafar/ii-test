require('dotenv').config()

const airtable = require('airtable');

airtable.configure({
    endpointUrl: process.env.AIRTABLE_BASE_URL,
    apiKey: process.env.AIRTABLE_KEY
});

const base = airtable.base('appJTuyDVFE77JayT');

const publish = (data) => {
    const rows = []
    data.map(d => rows.push({'fields' : {Product_id: `${d.Product_id}`, Product_name: `${d.Product_name}`, Sold_count: `${d.Sold_count}`, timestamp: `${new Date().toString()}`}}))
    base('Table 2').create(rows, function (err, records) {
        if (err) {
            console.error(err);
            //todo: throw error
            return;
        }
        records.forEach(function (record) {
            console.log(record.getId());
        });
    });
}

module.exports = publish
