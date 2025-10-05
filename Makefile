SHELL:=env bash

include makefiles/indexer.mk
include makefiles/category.mk

serve:
	@http-server

site: purge_indexes purge_categories build/indexed build/categories
