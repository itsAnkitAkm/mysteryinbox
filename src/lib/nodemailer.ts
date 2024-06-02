// import nodemailer from 'nodemailer'
const nodemailer = require('nodemailer');

const {MAIL_HOST, MAIL_USER, MAIL_PASS} = process.env;

console.log('MAIL_HOST:', MAIL_HOST);
console.log('MAIL_USER:', MAIL_USER);
console.log('MAIL_PASS:', MAIL_PASS ? 'Loaded' : 'Not Loaded');


export const transporter = nodemailer.createTransport({
  
    host: MAIL_HOST,
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: MAIL_USER,
      pass: MAIL_PASS,
    },
  });