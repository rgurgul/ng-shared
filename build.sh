if [ "$1" ]; then
    source ~/data/files/publish.sh "$1"
else
    echo 'commit name missing!'
fi
