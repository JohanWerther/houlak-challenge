import {
  Sequelize,
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "server/test.db",
    port: 8000
});

const RequestsLogs = sequelize.define<RequestsLogs>("Request_Log", {
  ipAddress: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  artist: {
    type: DataTypes.STRING,
  },
});

export { sequelize, RequestsLogs };

interface RequestsLogs
  extends Model<
    InferAttributes<RequestsLogs>,
    InferCreationAttributes<RequestsLogs>
  > {
  // Some fields are optional when calling RequestsLogs.create() or UserModel.build()
  ipAddress: string;
  date: Date;
  artist: string;
}
