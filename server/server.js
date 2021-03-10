// requires
const express = require( 'express' );
const animals = require( './modules/animals' );
const devices = require( './modules/devices' );
const app = express();
// uses
app.use( express.static( 'server/public' ) );
// globals 
const port = 5000;
// spin up server
app.listen( port, ()=>{
    console.log( 'server is up' );
})
// routes
app.get( '/devices', ( req, res )=>{
    console.log( '/devices GET' );
    res.send( devices );
})

app.get( '/animals', ( req, res )=>{
    console.log( 'in /animals get' );
    res.send( animals );
})