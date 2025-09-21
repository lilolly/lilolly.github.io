SHELL:=env bash

include makefiles/indexer.mk
include makefiles/category.mk

serve:
	@http-server
