'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class innovations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  innovations.init({
    nama_inovasi: DataTypes.STRING,
    inovator: DataTypes.STRING,
    surat: DataTypes.STRING,
    proposal: DataTypes.STRING,
    nama_perangkat_daerah: DataTypes.STRING,
    tahapan: DataTypes.STRING,
    inisiator: DataTypes.STRING,
    jenis: DataTypes.STRING,
    bentuk: DataTypes.STRING,
    inovasi_thdp_covid: DataTypes.STRING,
    jenis_urusan_inovasi: DataTypes.STRING,
    tema: DataTypes.STRING,
    tanggal: DataTypes.STRING,
    no_dokumentasi: DataTypes.STRING,
    keterangan: DataTypes.STRING,
    acc: DataTypes.BOOLEAN,
    acc_by: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'innovations',
  });
  return innovations;
};