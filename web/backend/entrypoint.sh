#!/bin/sh
# This script checks if the container is started for the first time.

python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py collectstatic --no-input

# CONTAINER_FIRST_STARTUP="CONTAINER_FIRST_STARTUP"
# if [ ! -e /$CONTAINER_FIRST_STARTUP ]; then
#     touch /$CONTAINER_FIRST_STARTUP
#     python3 manage.py createsuperuser --no-input --username admin --email admin@local.lan
# fi

daphne -b0.0.0.0 -p8080 --access-log ./logs/access.log --proxy-headers main.asgi:application