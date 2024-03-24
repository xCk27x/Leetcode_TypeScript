class RecentCounter {
  private recentCalls: number[] = [];
  
  constructor() {}

  ping(t: number): number {
    this.recentCalls.push(t);
    this.recentCalls = this.recentCalls.filter(num => num >= t - 3000);
    return this.recentCalls.length;
  }
}

var obj = new RecentCounter()
var param_1 = obj.ping(t)