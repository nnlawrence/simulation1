module.exports = {
    getInventory: (req, res) => {
        req.app.get('db').get_inventory().then(inventory => res.status(200).send(inventory))
        .catch(err => res.status(500).send({errorMessage: 'error'}, console.log(err)))
    },

    createProduct: (req, res) => {
        const {image, product, price} = req.body

        req.app.get('db').create_product([image, product, price]).then(product => res.status(200).send(product))
        .catch(err => res.status(500).send({errorMessage: 'error'}, console.log(err)))
    }

}