project/%/:
	mkdir -p $@

project/%/index.html: common/category.html
	cat $< | sed 's|{category}|$*|g' | sed 's|{CATEGORY}|$(shell echo $* | sed "s/\b\(.\)/\u\1/")|g' > $@

build/categories: build/ \
	project/art/index.html \
	project/baby/index.html \
	project/blog/index.html \
	project/cooking/index.html \
	project/crafting/index.html \
	project/dog/index.html \
	project/house/index.html \
	project/personal/index.html \
	project/social/index.html \
	project/travel/index.html \
	project/work/index.html 
	touch $@

purge_categories:
	rm project/*/index.html
