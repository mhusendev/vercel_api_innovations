'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('innovations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_inovasi: {
        type: Sequelize.STRING
      },
      inovator: {
        type: Sequelize.STRING
      },
      surat: {
        type: Sequelize.STRING
      },
      proposal: {
        type: Sequelize.STRING
      },
      nama_perangkat_daerah: {
        type: Sequelize.STRING
      },
      tahapan: {
        type: Sequelize.STRING
      },
      inisiator: {
        type: Sequelize.STRING
      },
      jenis: {
        type: Sequelize.STRING
      },
      bentuk: {
        type: Sequelize.STRING
      },
      inovasi_thdp_covid: {
        type: Sequelize.STRING
      },
      jenis_urusan_inovasi: {
        type: Sequelize.STRING
      },
      tema: {
        type: Sequelize.STRING
      },
      tanggal: {
        type: Sequelize.STRING
      },
      no_dokumentasi: {
        type: Sequelize.STRING
      },
      keterangan: {
        type: Sequelize.STRING
      },
      acc: {
        type: Sequelize.BOOLEAN
      },
      acc_by: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('innovations');
  }
};