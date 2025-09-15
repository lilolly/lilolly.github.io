art_ongoing:=$(shell ./index_finder.sh art ongoing)
art_archived:=$(shell ./index_finder.sh art archived)
src/project/art/ongoing_projects/index.html: ${art_ongoing}
	./indexer.sh $@ ongoing art $^
src/project/art/archived_projects/index.html: ${art_archived}
	./indexer.sh $@ archived art $^

baby_ongoing:=$(shell ./index_finder.sh baby ongoing)
baby_archived:=$(shell ./index_finder.sh baby archived)
src/project/baby/ongoing_projects/index.html: ${baby_ongoing}
	./indexer.sh $@ ongoing baby $^
src/project/baby/archived_projects/index.html: ${baby_archived}
	./indexer.sh $@ archived baby $^

blog_ongoing:=$(shell ./index_finder.sh blog ongoing)
blog_archived:=$(shell ./index_finder.sh blog archived)
src/project/blog/ongoing_projects/index.html: ${blog_ongoing}
	./indexer.sh $@ ongoing blog $^
src/project/blog/archived_projects/index.html: ${blog_archived}
	./indexer.sh $@ archived blog $^

cooking_ongoing:=$(shell ./index_finder.sh cooking ongoing)
cooking_archived:=$(shell ./index_finder.sh cooking archived)
src/project/cooking/ongoing_projects/index.html: ${cooking_ongoing}
	./indexer.sh $@ ongoing cooking $^
src/project/cooking/archived_projects/index.html: ${cooking_archived}
	./indexer.sh $@ archived cooking $^

crafting_ongoing:=$(shell ./index_finder.sh crafting ongoing)
crafting_archived:=$(shell ./index_finder.sh crafting archived)
src/project/crafting/ongoing_projects/index.html: ${crafting_ongoing}
	./indexer.sh $@ ongoing crafting $^
src/project/crafting/archived_projects/index.html: ${crafting_archived}
	./indexer.sh $@ archived crafting $^

dog_ongoing:=$(shell ./index_finder.sh dog ongoing)
dog_archived:=$(shell ./index_finder.sh dog archived)
src/project/dog/ongoing_projects/index.html: ${dog_ongoing}
	./indexer.sh $@ ongoing dog $^
src/project/dog/archived_projects/index.html: ${dog_archived}
	./indexer.sh $@ archived dog $^

house_ongoing:=$(shell ./index_finder.sh house ongoing)
house_archived:=$(shell ./index_finder.sh house archived)
src/project/house/ongoing_projects/index.html: ${house_ongoing}
	./indexer.sh $@ ongoing house $^
src/project/house/archived_projects/index.html: ${house_archived}
	./indexer.sh $@ archived house $^

personal_ongoing:=$(shell ./index_finder.sh personal ongoing)
personal_archived:=$(shell ./index_finder.sh personal archived)
src/project/personal/ongoing_projects/index.html: ${personal_ongoing}
	./indexer.sh $@ ongoing personal $^
src/project/personal/archived_projects/index.html: ${personal_archived}
	./indexer.sh $@ archived personal $^

social_ongoing:=$(shell ./index_finder.sh social ongoing)
social_archived:=$(shell ./index_finder.sh social archived)
src/project/social/ongoing_projects/index.html: ${social_ongoing}
	./indexer.sh $@ ongoing social $^
src/project/social/archived_projects/index.html: ${social_archived}
	./indexer.sh $@ archived social $^

travel_ongoing:=$(shell ./index_finder.sh travel ongoing)
travel_archived:=$(shell ./index_finder.sh travel archived)
src/project/travel/ongoing_projects/index.html: ${travel_ongoing}
	./indexer.sh $@ ongoing travel $^
src/project/travel/archived_projects/index.html: ${travel_archived}
	./indexer.sh $@ archived travel $^

work_ongoing:=$(shell ./index_finder.sh work ongoing)
work_archived:=$(shell ./index_finder.sh work archived)
src/project/work/ongoing_projects/index.html: ${work_ongoing}
	./indexer.sh $@ ongoing work $^
src/project/work/archived_projects/index.html: ${work_archived}
	./indexer.sh $@ archived work $^

build/:
	mkdir $@

build/indexed: build/ \
	src/project/art/ongoing_projects/index.html src/project/art/archived_projects/index.html \
	src/project/baby/ongoing_projects/index.html src/project/baby/archived_projects/index.html \
	src/project/blog/ongoing_projects/index.html src/project/blog/archived_projects/index.html \
	src/project/cooking/ongoing_projects/index.html src/project/cooking/archived_projects/index.html \
	src/project/crafting/ongoing_projects/index.html src/project/crafting/archived_projects/index.html \
	src/project/dog/ongoing_projects/index.html src/project/dog/archived_projects/index.html \
	src/project/house/ongoing_projects/index.html src/project/house/archived_projects/index.html \
	src/project/personal/ongoing_projects/index.html src/project/personal/archived_projects/index.html \
	src/project/social/ongoing_projects/index.html src/project/social/archived_projects/index.html \
	src/project/travel/ongoing_projects/index.html src/project/travel/archived_projects/index.html \
	src/project/work/ongoing_projects/index.html src/project/work/archived_projects/index.html 
	echo ${baby_ongoing}
	echo $^
	touch $@

purge_indexes:
	rm -rf src/project/*/{archived,ongoing}_projects/index.html
