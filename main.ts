import * as fs from 'node:fs';

const plan = 'Lock $80; cap ALL spending at $20 (fees, compute, gas, claims). Verify my wallet signs entries/claims unaided; reject human work/new ID checks. Day1 verify escrow/rules; screen funded make.fun Rich: $1/event buys <=10 graded entries plus final pick. Build distinct plans addressing rubric weaknesses; test twice; pick best finished grade, respecting uncertainty. Scope <=2h/prospect. Assume IID tries/perfect pick vs fixed final field: N rivals, paid j<=N, m<=10; single top-j p=j/(2N), best q_j=1-(1-p)^m. E=s*sum((r_j-r_next)*q_j)-C; r=descending prizes, last next=0, s=P(paid by day30|win), C=ALL event costs. Enter only E>0; necessary N<m*s*pot/(2C), pot=sum(r); hunt thin fields, include late rivals. Unverified IID/pick: m=1; unvalidated p: skip. Claim after clearance; count wallet receipts only. Day30 cash=$100-all costs+actually collected payments. No wins=$100-actual costs, not profit. Stop spending after 48h without eligible funded contests; assume no future supply.';

const characters = Array.from(plan).length;
if (characters < 900 || characters > 980) {
  throw new RangeError('The reviewed plan must remain within 900-980 code points.');
}

const payload = Buffer.from(plan, 'utf8');
if (!/^[\x20-\x7e]+$/.test(plan)) {
  throw new TypeError('The reviewed plan must be one ASCII paragraph.');
}
if (payload.toString('utf8') !== plan) {
  throw new TypeError('The plan must encode losslessly as UTF-8.');
}
fs.mkdirSync('/output', { recursive: true });
fs.writeFileSync('/output/entry.txt', payload);
