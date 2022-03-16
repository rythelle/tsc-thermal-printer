import edge from "edge-js";
import { resolve } from "path";

export class CleanBufferPrinter {
  static async execute(): Promise<void> {
    const pathDLL = resolve(__dirname, "..", "..", "config");

    try {
      const cleanBuffer = edge.func({
        assemblyFile: `${pathDLL}/tsclibnet.dll`,
        typeName: "TSCSDK.node_ethernet",
        methodName: "clearbuffer",
      });

      await cleanBuffer("", true);
    } catch (err) {
      throw new Error(err);
    }
  }
}
