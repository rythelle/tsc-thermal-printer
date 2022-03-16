import edge from "edge-js";
import { resolve } from "path";

export class SendCommandPrinter {
  static async execute(zpl: string): Promise<void> {
    const pathDLL = resolve(__dirname, "..", "..", "config");

    try {
      const sendCommand = edge.func({
        assemblyFile: `${pathDLL}/tsclibnet.dll`,
        typeName: "TSCSDK.node_ethernet",
        methodName: "sendcommand",
      });

      await sendCommand(String(zpl), true);
    } catch (err) {
      throw new Error(err);
    }
  }
}
