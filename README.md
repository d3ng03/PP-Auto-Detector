# PP-Auto-Detector
Team NodeBoB Prototype Pollution Auto Detection Tool in Node.js npm package.

# Contents
- [How does it work?](#how-does-it-work)
- [CVE](#cve)
- [Credits](#credits)

# How does it work?
```bash
node pp.js
```
This tool detects prototype pollution in Node.js npm package.

It goes...
1. get npm package lists by keyword(you can change keywords and starting index)
2. install package.
3. check prototype pollution in the package.
4. delete package.
5. repeat 2-4 for package lists we got.

# CVE
- CVE-2023-45827
  - https://github.com/clickbar/dot-diver/security/advisories/GHSA-9w5f-mw3p-pj47
- CVE-2024-23339
  - https://github.com/elijahharry/hoolock/security/advisories/GHSA-4c2g-hx49-7h25
- 30+ undisclosed pp vulnerability

# Credits
Team : NodeBoB

최지혁    ( Jihyeok Choi )

이동하    ( Lee Dong Ha of ZeroPointer Lab )

강성현    ( kang seonghyeun )

박성진    ( sungjin park )

김찬호    ( Chanho Kim )