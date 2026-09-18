# SDK examples

These examples call the production Business API from a trusted server-side
environment. Set `MYESCAPEPLAN_API_KEY` before running them, and do not expose
the key in browser bundles, mobile apps or public source code.

The SDK packages are currently distributed from this repository rather than
from npm or PyPI.

## TypeScript

Build the local TypeScript package, make it available to the example's Node
environment, then run:

```bash
npm run build --prefix typescript
cd examples/typescript
npm install
npm run example
```

## Python

Install the local Python package in the active environment, then run:

```bash
python -m pip install -e python
python examples/python/discovery.py
```
