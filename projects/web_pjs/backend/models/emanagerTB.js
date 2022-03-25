const emanager = (sequelize, Sequelize) => {
    const emanager = sequelize.define("emanager", {
      line_id: {
        type: Sequelize.INTEGER
      },
      line_name: {
        type: Sequelize.STRING
      },
      machine_id: {
        type: Sequelize.INTEGER
      },
      machine_name: {
        type: Sequelize.STRING
      },
      device_id: {
        type: Sequelize.INTEGER
      },
      device_name: {
        type: Sequelize.STRING
      },
      current_state:{
        type: Sequelize.STRING
      },
      fix_staff_ids:{
        type: Sequelize.STRING
      },
      description:{
        type: Sequelize.JSON
      },
    });
    return emanager;
  };

export default emanager