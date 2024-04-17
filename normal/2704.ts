type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
  return <ToBeOrNotToBe>{
    toBe(comp: any): boolean {
      if (val === comp) {
        return true;
      }
      throw new Error("Not Equal");
    },
    notToBe(comp: any): boolean {
      if (val !== comp) {
        return true;
      }
      throw new Error("Equal");
    },
  };
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
