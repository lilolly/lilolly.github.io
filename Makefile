SHELL:=/bin/bash

include makefiles/indexer.mk

serve:
	@http-server
