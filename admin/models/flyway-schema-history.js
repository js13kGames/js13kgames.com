// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const FlywaySchemaHistory = sequelize.define('flywaySchemaHistory', {
    installedRank: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    version: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    script: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    checksum: {
      type: DataTypes.INTEGER,
    },
    installedBy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    installedOn: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('now()'),
      allowNull: false,
    },
    executionTime: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    success: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, {
    tableName: 'flyway_schema_history',
    underscored: true,
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  FlywaySchemaHistory.associate = (models) => {
  };

  return FlywaySchemaHistory;
};
