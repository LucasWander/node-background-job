
export function adaptExpress(controller)  {

  return async function(req, res) {
    const {name, email} = req.body;

    const response = await controller.handle({name, email});

    return res.status(response.status).json(response);
  }
}
