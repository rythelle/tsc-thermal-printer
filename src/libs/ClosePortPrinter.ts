import edge from "edge-js";
import { resolve } from "path";

export class ClosePortPrinter {
  static async execute(): Promise<void> {
    const pathDLL = resolve(__dirname, "..", "..", "config");

    try {
      const closePort = edge.func({
        assemblyFile: `${pathDLL}/tsclibnet.dll`,
        typeName: "TSCSDK.node_ethernet",
        methodName: "closeport",
      });

      await closePort(2000, true);
    } catch (err) {
      throw new Error(err);
    }
  }
}
