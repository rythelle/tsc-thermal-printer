import edge from "edge-js";
import { resolve } from "path";

interface IConfigPrinter {
  ipAddress: string;
  port: string;
  delay: string;
}

export class OpenPortPrinter {
  static async execute({
    ipAddress,
    port,
    delay,
  }: IConfigPrinter): Promise<void> {
    const config = {
      ipAddress: String(ipAddress),
      port: String(port),
      delay: String(delay),
    };

    const pathDLL = resolve(__dirname, "..", "..", "config");

    try {
      const openPort = edge.func({
        assemblyFile: `${pathDLL}/tsclibnet.dll`,
        typeName: "TSCSDK.node_ethernet",
        methodName: "openport",
      });

      await openPort(config, true);
    } catch (err) {
      throw new Error(err);
    }
  }
}
