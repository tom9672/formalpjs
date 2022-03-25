import db from '../models/index.js'

const emanager = db.emanager

export const insert = (req,res) =>{
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
      const line = {
        line_id : req.body.line_id,
        line_name:req.body.line_name,
        machine_id:req.body.machine_id,
        machine_name:req.body.machine_name,
        device_id:req.body.device_id,
        device_name:req.body.device_name,
        current_state:req.body.current_state,
        fix_staff_ids:req.body.fix_staff_ids,
        description:req.body.description,
      };
      emanager.create(line)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred."
          });
        });
}