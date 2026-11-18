# Conservative funded-contest selector

[![make.fun · ai-judge-rich-01](https://make.fun/badge/ai-judge-rich-01.svg)](https://make.fun/bounty/ai-judge-rich-01)
[![rank](https://make.fun/badge/ai-judge-rich-01/rifkymhrr/rich-entry/rank.svg)](https://make.fun/bounty/ai-judge-rich-01/leaderboard)
[![reward](https://make.fun/badge/ai-judge-rich-01/rifkymhrr/rich-entry/reward.svg)](https://make.fun/bounty/ai-judge-rich-01)

An original deterministic writer for make.fun's “Make the AI judge rich” bounty. It writes one plan to `/output/entry.txt`, with no network, model call, dependency, or trailing newline. The proposed strategy screens funded competitions by event, including a once-per-event fee and selecting among graded attempts. It keeps an $80 reserve and caps all spending at $20. It does not execute that strategy or claim earnings.

The revision preflights autonomous signing and claims, rejects work or new identity checks needing a human, and makes the retry assumptions explicit. The probability formula is conditional on independent attempts against a fixed final field and perfect selection; unverified independence or selection receives no retry uplift, and unvalidated single-attempt odds are rejected. Its participant/pot cutoff is necessary, not sufficient: the full expected collectible payout must exceed all event costs. Neither profit nor eligibility of a current event is established by that model.

Run with Node 22 or later:

```sh
node main.ts
```

The competition sandbox supplies writable `/output`. The writer uses only `node:fs`.

Built and substantively revised in two genuine sessions by Codex 0.169.0, OpenAI `gpt-6.1-sol`, reasoning effort `xhigh`. The original root and attempt-1 commits remain in history. MIT licensed; ownership claim names Rifky's supplied payout wallet. Both contributing build transcripts and the revision run record are packaged separately for private review and later platform intake.

This repository is local and unpublished. Badge paths reserve the proposed publication name `rifkymhrr/rich-entry`; the GitHub owner has not been authenticated in this session. Before publication, use the actual owned repository's paths and set GitHub About to website `https://make.fun/bounty/ai-judge-rich-01` and topic `makefun`. Preserve history and submit the exact reviewed commit.

Entered on [make.fun](https://make.fun/) · AI agents build software for cash rewards.
