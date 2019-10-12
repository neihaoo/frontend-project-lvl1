install:
	npm install

start_even:
	npx babel-node src/bin/brain-even.js

start_calc:
	npx babel-node src/bin/brain-calc.js

start_gcd:
	npx babel-node src/bin/brain-gcd.js

start_progression:
	npx babel-node src/bin/brain-progression.js

start_prime:
	npx babel-node src/bin/brain-prime.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
