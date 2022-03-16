# ZPL file printing on TSC printers

## Description

- This project aims to facilitate the printing of files in ZPL format on TSC brand thermal printers.

- This library works with TSC thermal printers connected to the network via Ethernet and using only zpl commands.

## Installation

`npm i tsc-thermal-printer`

or

`yarn add tsc-thermal-printer`

## Quick Start

It is very simple to use this library. Just call the `printZPLFile` function and pass the following parameters: `ipAddress, port, delay, zpl`. Where `ipAddress` is the IP of the printer on the network or its network name. `Port` is the port that has been configured on the printer, normally it is 9100, by default if the port is not passed, the function uses 9100. `Delay` is the amount of milliseconds that the printer will wait to print, if it does not pass, the value will be 500 by default. `Zpl` is the zpl commands that will be sent to the printer, below is an example of a label written in ZPL code:

```
^XA

^FX Top section with logo and informations
^CF0,60
^FO75,75^FR^GB100,100,100^FS
^FO220,50^FDJavaScript^FS
^CF0,30
^FO220,115^FDxxxxxxx^FS
^FO220,155^FDxxxxxxx^FS
^FO220,195^FDxxxxxxx^FS
^FO50,250^GB700,3,3^FS

^FX Second section with additional informations
^CFA,30
^FO50,300^FDTSC printer^FS
^CFA,15
^FO50,500^GB700,3,3^FS

^FX Third section with bar code.
^BY5,2,270
^FO100,550^BC^FD12345678^FS

^FX Fourth section (the one box on the bottom).
^FO50,900^GB700,250,3^FS
```

### Examples

- Below is an example of calling the `printZPLFile` function:

```js
import printZPLFile from "tsc-thermal-printer";

let zplCode =
  "^XA^FX^CF0,60^FO220,50^FDJavaScript^FS^FO220,115^FDxxxxxxx^FS^XZ";

const config = {
  ipAddress: "192.168.0.10",
  port: "9100",
  delay: "500",
  zpl: zplCode,
};

await printZPLFile(config);
```

## Used libraries

- JSModbus
- Bull
- Axios
- Express
- Fast-csv
- FTP
- Mongoose
- Node-json-db
- Tsyringe

## Tools used

- Docker
- PM2

## Project summary

This project has the functionality to obtain various information from industrial equipment through the Modbus protocol, using the JSModbus library to provide the conversion of information from the Modbus protocol.

Most of the information provided by industrial equipment is treated in the background, using the queuing methodology, using the Bull library with Redis.

After processing this information, it is sent to an external REST API, according to the implementation of the client's API.

The non-relational MongoDB database is used to store temporary information and information that will be handled by the front-end to generate dashboards

This project runs 3 applications together: http server, queue, machine state check loop 1 and machine state check loop 2.

The development of the front-end implementation in VueJS is still in project.

## Features

- [x] Read holding registers
- [x] Write holding registers
- [ ] Read coils
- [ ] Write coils
- [x] Read string variables
- [x] Write string variables
- [ ] Read real variables
- [x] Write real variables
- [x] Read integer variables
- [x] Write integer variables
- [x] Queue implementation (Bull + Redis)
- [x] FTP client function
- [x] CSV file processing
- [x] Create send functions to external REST API (Axios)
- [ ] Dashboards (vue-chartjs)
- [ ] Reports (pdf.js)
- [ ] Create logging system on front-end
