module.exports = (sequelize, DataTypes) => {
  const Divers = sequelize.define("Divers", {
    agent: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    instructor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    flight: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pass: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    middle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    birth: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    meal: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    owed: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    paid: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pickUpTime: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    room: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    resort: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    certification: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    activity: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastDive: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    noDives: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    checkedCert: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    bcd: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    wetsuit: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fins: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    liability: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },

    medical: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },

    medicalDoctors: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    courseDocs: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    atmpForm: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  });

  return Divers;
};
