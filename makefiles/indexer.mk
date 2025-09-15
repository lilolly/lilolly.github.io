art:=$(shell ./index_finder.sh art)
baby:=$(shell ./index_finder.sh baby)
blog:=$(shell ./index_finder.sh blog)
cooking:=$(shell ./index_finder.sh cooking)
crafting:=$(shell ./index_finder.sh crafting)
dog:=$(shell ./index_finder.sh dog)
house:=$(shell ./index_finder.sh house)
personal:=$(shell ./index_finder.sh personal)
social:=$(shell ./index_finder.sh social)
travel:=$(shell ./index_finder.sh travel)
work:=$(shell ./index_finder.sh work)

src/project/art/%/index.html: ${art}
	./indexer.sh $@ $(shell echo $* | sed "s|_projects||") art $^

src/project/baby/%/index.html: ${baby}
	./indexer.sh $@ $(shell echo $* | sed "s|_projects||") baby $^

src/project/blog/%/index.html: ${blog}
	./indexer.sh $@ $(shell echo $* | sed "s|_projects||") blog $^

src/project/cooking/%/index.html: ${cooking}
	./indexer.sh $@ $(shell echo $* | sed "s|_projects||") cooking $^

src/project/crafting/%/index.html: ${crafting}
	./indexer.sh $@ $(shell echo $* | sed "s|_projects||") crafting $^

src/project/dog/%/index.html: ${dog}
	./indexer.sh $@ $(shell echo $* | sed "s|_projects||") dog $^

src/project/house/%/index.html: ${house}
	./indexer.sh $@ $(shell echo $* | sed "s|_projects||") house $^

src/project/personal/%/index.html: ${personal}
	./indexer.sh $@ $(shell echo $* | sed "s|_projects||") personal $^

src/project/social/%/index.html: ${social}
	./indexer.sh $@ $(shell echo $* | sed "s|_projects||") social $^

src/project/travel/%/index.html: ${travel}
	./indexer.sh $@ $(shell echo $* | sed "s|_projects||") travel $^

src/project/work/%/index.html: ${work}
	./indexer.sh $@ $(shell echo $* | sed "s|_projects||") work $^

build/:
	mkdir $@

build/indexed: \
	src/project/art/ongoing_projects/index.html \
	src/project/art/archived_projects/index.html \
	\
	src/project/baby/ongoing_projects/index.html \
	src/project/baby/archived_projects/index.html \
	\
	src/project/blog/ongoing_projects/index.html \
	src/project/blog/archived_projects/index.html \
	\
	src/project/cooking/ongoing_projects/index.html \
	src/project/cooking/archived_projects/index.html \
	\
	src/project/crafting/ongoing_projects/index.html \
	src/project/crafting/archived_projects/index.html \
	\
	src/project/dog/ongoing_projects/index.html \
	src/project/dog/archived_projects/index.html \
	\
	src/project/house/ongoing_projects/index.html \
	src/project/house/archived_projects/index.html \
	\
	src/project/personal/ongoing_projects/index.html \
	src/project/personal/archived_projects/index.html \
	\
	src/project/social/ongoing_projects/index.html \
	src/project/social/archived_projects/index.html \
	\
	src/project/travel/ongoing_projects/index.html \
	src/project/travel/archived_projects/index.html \
	\
	src/project/work/ongoing_projects/index.html \
	src/project/work/archived_projects/index.html \
	| build/
	touch $@

purge_indexes:
	rm -rf src/project/*/{archived,ongoing}_projects/index.html
