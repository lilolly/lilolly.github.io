find src/project/*/{ongoing,archived}_projects -type f | \
	grep -v index | \
	sort | \
	grep $1
