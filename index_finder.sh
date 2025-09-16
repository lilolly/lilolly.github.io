#!/bin/bash

find src/project/$1/$2_projects -type f | \
	grep -v index | \
	sort
