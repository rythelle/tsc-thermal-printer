import { OpenPortPrinter } from "../../libs/OpenPortPrinter";
import { CleanBufferPrinter } from "../../libs/CleanBufferPrinter";
import { SendCommandPrinter } from "../../libs/SendCommandPrinter";
import { ClosePortPrinter } from "../../libs/ClosePortPrinter";

interface IConfigPrinter {
  ipAddress: string;
  port: string;
  delay: string;
  zpl: string;
}

async function printZPLFile({
  ipAddress,
  port,
  delay,
  zpl,
}: IConfigPrinter): Promise<string> {
  let config = { ipAddress, port, delay };

  Object.assign(config, {
    port: port === undefined ? "9100" : port,
    delay: delay === undefined ? "500" : delay,
  });

  try {
    await OpenPortPrinter.execute(config);

    await CleanBufferPrinter.execute();

    await SendCommandPrinter.execute(zpl);

    await ClosePortPrinter.execute();

    return "ZPL command sent to printer.";
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = { printZPLFile };
