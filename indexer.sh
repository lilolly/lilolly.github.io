#!/bin/bash

anchor() {
	FILE_NAME=$(echo $4 | sed "s|.*\/||" | sed "s|\.html||")

	TITLE=$(echo $FILE_NAME | sed 's|.*\.||' | sed 's|_| |g')
	TITLE=( $TITLE )
	TITLE="${TITLE[@]^}"

	echo "<project-anchor work_status='$2' type='$3' link='$FILE_NAME' title='$TITLE'></project-anchor>" >> $1
}

TARGET_FILE=$1
STATUS=$2
TYPE=$3
rm -f $TARGET_FILE
touch $TARGET_FILE

for i in ${@:4};
do
	anchor $TARGET_FILE $STATUS $TYPE $i
done;



