import * as fs from 'node:fs';

const plan = 'Lock $80; cap ALL spending at $20 (fees, compute, gas, claims). My wallet signs entries/claims; scripts screen funded make.fun bounties: Rich/Relax have $100/$50 base escrow, 25 paid places each, $1/$0.50 fees each once/account; close Nov18 18:30/21:00 WIB. Day1: verify escrow/access/rules; skip human-only work; count entrants, payout curves and deadlines; build original entries, run twice, submit real logs, save receipts. Scope <=2h/prospect. Estimated EV=sum(place odds x prize x chance paid by day30)-ALL costs. Assume p=0.5/N per possible paid place (N=entrants); haircut for late rivals. Enter only positive EV; fees once, revisions within quota, pick best finished entry. Claim USDC from escrow after final results/clearance; count wallet receipts only, no unpaid rank. Day30 cash=$100-all costs+actually collected payments. No wins: $100-actual costs ($97 if $3 spent), not profit. Stop spending after 48h without eligible funded contests; never assume future events.';

const characters = Array.from(plan).length;
if (characters < 900 || characters > 980) {
  throw new RangeError('The reviewed plan must remain within 900-980 code points.');
}

const payload = Buffer.from(plan, 'utf8');
if (payload.toString('utf8') !== plan) {
  throw new TypeError('The plan must encode losslessly as UTF-8.');
}
fs.mkdirSync('/output', { recursive: true });
fs.writeFileSync('/output/entry.txt', payload);
