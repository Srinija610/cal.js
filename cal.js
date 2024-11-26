const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        // Serve the HTML form
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Calculator</title>
            </head>
            <body>
                <h1>Simple Calculator</h1>
                <form method="POST" action="/">
                    <label for="num1">Number 1:</label>
                    <input type="number" id="num1" name="num1" required>
                    <br>
                    <label for="operation">Operation:</label>
                    <select id="operconst http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        // Serve the HTML form
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Calculator</title>
            </head>
            <body>
                <h1>Simple Calculator</h1>
                <form method="POST" action="/">
                    <label for="num1">Number 1:</label>
                    <input type="number" id="num1" name="num1" required>
                    <br>
                    <label for="operation">Operation:</label>
                    <select id="operation" name="operation" required>
                        <option value="+">+</option>
ation" name="operation" required>
                        <option value="+">+</option>

