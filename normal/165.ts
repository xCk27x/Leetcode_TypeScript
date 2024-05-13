function compareVersion(version1: string, version2: string): number {
  const list1 = version1.split(".");
  const list2 = version2.split(".");

  for (let i = 0; i < Math.max(list1.length, list2.length); i++) {
    const num1 = i >= list1.length ? 0 : parseInt(list1[i]);
    const num2 = i >= list2.length ? 0 : parseInt(list2[i]);
    if (num1 > num2) return 1;
    if (num1 < num2) return -1;
  }

  return 0;
}
