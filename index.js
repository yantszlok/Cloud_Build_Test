/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
 exports.cloud_build_test = (req, res) => {
    let message = req.query.message || req.body.message || 'Cloud Build Test from yantszlok repository test123456789';
    res.status(200).send(message);
  };
  