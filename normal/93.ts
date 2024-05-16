function restoreIpAddresses(s: string, n: number = 0): string[] {
  if (s.length === 0 && n === 4) return [""];
  if (n >= 4) return [];
  if (s[0] === "0") {
    return restoreIpAddresses(s.slice(1), n+1).map(arr =>
      arr === '' ? "0" : "0." + arr
    );
  }

  let len = s.length < 3 ? s.length : 3;
  let result: string[] = [];

  for (let i = 0; i < len; i++) {
    const temp = s.slice(0, i + 1);
    if (parseInt(temp) > 255) break;
    result.push(...restoreIpAddresses(s.slice(i + 1), n+1).map(arr => 
      arr === '' ? temp : temp + "." + arr
    ));
  }

  return result;
}
