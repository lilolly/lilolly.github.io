INDEX_FINDER_SCRIPT:="./makefiles/index_finder.sh"
INDEXER_SCRIPT:="./makefiles/indexer.sh"

art_ongoing:=$(shell ${INDEX_FINDER_SCRIPT} art ongoing)
art_archived:=$(shell ${INDEX_FINDER_SCRIPT} art archived)
project/art/ongoing_projects/index.html: ${art_ongoing}
	${INDEXER_SCRIPT} $@ ongoing art $^
project/art/archived_projects/index.html: ${art_archived}
	${INDEXER_SCRIPT} $@ archived art $^

baby_ongoing:=$(shell ${INDEX_FINDER_SCRIPT} baby ongoing)
baby_archived:=$(shell ${INDEX_FINDER_SCRIPT} baby archived)
project/baby/ongoing_projects/index.html: ${baby_ongoing}
	${INDEXER_SCRIPT} $@ ongoing baby $^
project/baby/archived_projects/index.html: ${baby_archived}
	${INDEXER_SCRIPT} $@ archived baby $^

blog_ongoing:=$(shell ${INDEX_FINDER_SCRIPT} blog ongoing)
blog_archived:=$(shell ${INDEX_FINDER_SCRIPT} blog archived)
project/blog/ongoing_projects/index.html: ${blog_ongoing}
	${INDEXER_SCRIPT} $@ ongoing blog $^
project/blog/archived_projects/index.html: ${blog_archived}
	${INDEXER_SCRIPT} $@ archived blog $^

cooking_ongoing:=$(shell ${INDEX_FINDER_SCRIPT} cooking ongoing)
cooking_archived:=$(shell ${INDEX_FINDER_SCRIPT} cooking archived)
project/cooking/ongoing_projects/index.html: ${cooking_ongoing}
	${INDEXER_SCRIPT} $@ ongoing cooking $^
project/cooking/archived_projects/index.html: ${cooking_archived}
	${INDEXER_SCRIPT} $@ archived cooking $^

crafting_ongoing:=$(shell ${INDEX_FINDER_SCRIPT} crafting ongoing)
crafting_archived:=$(shell ${INDEX_FINDER_SCRIPT} crafting archived)
project/crafting/ongoing_projects/index.html: ${crafting_ongoing}
	${INDEXER_SCRIPT} $@ ongoing crafting $^
project/crafting/archived_projects/index.html: ${crafting_archived}
	${INDEXER_SCRIPT} $@ archived crafting $^

dog_ongoing:=$(shell ${INDEX_FINDER_SCRIPT} dog ongoing)
dog_archived:=$(shell ${INDEX_FINDER_SCRIPT} dog archived)
project/dog/ongoing_projects/index.html: ${dog_ongoing}
	${INDEXER_SCRIPT} $@ ongoing dog $^
project/dog/archived_projects/index.html: ${dog_archived}
	${INDEXER_SCRIPT} $@ archived dog $^

house_ongoing:=$(shell ${INDEX_FINDER_SCRIPT} house ongoing)
house_archived:=$(shell ${INDEX_FINDER_SCRIPT} house archived)
project/house/ongoing_projects/index.html: ${house_ongoing}
	${INDEXER_SCRIPT} $@ ongoing house $^
project/house/archived_projects/index.html: ${house_archived}
	${INDEXER_SCRIPT} $@ archived house $^

personal_ongoing:=$(shell ${INDEX_FINDER_SCRIPT} personal ongoing)
personal_archived:=$(shell ${INDEX_FINDER_SCRIPT} personal archived)
project/personal/ongoing_projects/index.html: ${personal_ongoing}
	${INDEXER_SCRIPT} $@ ongoing personal $^
project/personal/archived_projects/index.html: ${personal_archived}
	${INDEXER_SCRIPT} $@ archived personal $^

social_ongoing:=$(shell ${INDEX_FINDER_SCRIPT} social ongoing)
social_archived:=$(shell ${INDEX_FINDER_SCRIPT} social archived)
project/social/ongoing_projects/index.html: ${social_ongoing}
	${INDEXER_SCRIPT} $@ ongoing social $^
project/social/archived_projects/index.html: ${social_archived}
	${INDEXER_SCRIPT} $@ archived social $^

travel_ongoing:=$(shell ${INDEX_FINDER_SCRIPT} travel ongoing)
travel_archived:=$(shell ${INDEX_FINDER_SCRIPT} travel archived)
project/travel/ongoing_projects/index.html: ${travel_ongoing}
	${INDEXER_SCRIPT} $@ ongoing travel $^
project/travel/archived_projects/index.html: ${travel_archived}
	${INDEXER_SCRIPT} $@ archived travel $^

work_ongoing:=$(shell ${INDEX_FINDER_SCRIPT} work ongoing)
work_archived:=$(shell ${INDEX_FINDER_SCRIPT} work archived)
project/work/ongoing_projects/index.html: ${work_ongoing}
	${INDEXER_SCRIPT} $@ ongoing work $^
project/work/archived_projects/index.html: ${work_archived}
	${INDEXER_SCRIPT} $@ archived work $^

build/:
	mkdir $@

build/indexed: build/ \
	project/art/ongoing_projects/index.html project/art/archived_projects/index.html \
	project/baby/ongoing_projects/index.html project/baby/archived_projects/index.html \
	project/blog/ongoing_projects/index.html project/blog/archived_projects/index.html \
	project/cooking/ongoing_projects/index.html project/cooking/archived_projects/index.html \
	project/crafting/ongoing_projects/index.html project/crafting/archived_projects/index.html \
	project/dog/ongoing_projects/index.html project/dog/archived_projects/index.html \
	project/house/ongoing_projects/index.html project/house/archived_projects/index.html \
	project/personal/ongoing_projects/index.html project/personal/archived_projects/index.html \
	project/social/ongoing_projects/index.html project/social/archived_projects/index.html \
	project/travel/ongoing_projects/index.html project/travel/archived_projects/index.html \
	project/work/ongoing_projects/index.html project/work/archived_projects/index.html 
	touch $@

purge_indexes:
	rm -rf project/{art,baby,blog,cooking,crafting,dog,house,social,personal,travel,work}/{archived,ongoing}_projects/index.html
