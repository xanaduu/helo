module.exports = {
    updateProfile: (req,res,next) => {
        const db = req.app.get('db');
        db.update_profile([req.body.first, req.body.last])
        .then( () => {
            res.status(200).send()
        }).catch( (error) => {
            console.log(error)
            res.status(500).send(error)})
        },
        read: ( req, res, next ) => {
            const db = req.app.get('db');
            db.get_profile()
              .then( profile => res.status(200).send( profile ) )
              .catch( () => res.status(500).send() );
          }
}