include makefiles/indexer.mk

serve:
	@http-server src

test: ${baby}
	echo $^
