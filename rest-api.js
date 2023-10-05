// Traditional
router.get('/products') // render product.ejs
router.get('/products/create') // render create-product.ejs
router.post('/products/create') // handle create product
router.get('/products/:id/update') // render update-product.ejs
router.post('/products/:id/update') // handle update product

// REST API (Semua route, merepresentasikan apa yang mau dilakukan lewaat HTTP Method)
// GET => read data
// POST => create data
// PUT/PATCH => update data
// DELETE => delete data
//
// PUT => REPLACE OBJECT
// PATCH => Mengganti satu value di dalam object
router.get('/products') // get products (sebagai json)
router.post('/products') // handle create product (kembalikan response json berupa data yang berhasil dibuat)
router.put('/products/:id') // handle update product (kembalikan response json berupa data yang berhasil diupdate)
